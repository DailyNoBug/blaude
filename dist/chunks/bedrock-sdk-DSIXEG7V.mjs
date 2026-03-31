#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs as require_dist_cjs2,
  require_dist_cjs2 as require_dist_cjs3,
  require_dist_cjs3 as require_dist_cjs4
} from "./chunk-22F2Y4HU.mjs";
import "./chunk-GWXFHECT.mjs";
import "./chunk-HVPHPOYV.mjs";
import "./chunk-OPTHXAMC.mjs";
import "./chunk-XKXNRC7R.mjs";
import "./chunk-EZHETOM7.mjs";
import "./chunk-5PQQKMHH.mjs";
import "./chunk-RR3PN36J.mjs";
import "./chunk-MTY4OASM.mjs";
import "./chunk-NE3ECB5D.mjs";
import "./chunk-NQOD3DYB.mjs";
import {
  require_dist_cjs2 as require_dist_cjs
} from "./chunk-44NP7LPQ.mjs";
import "./chunk-RJRMPBDE.mjs";
import "./chunk-HVZS5VUZ.mjs";
import "./chunk-FONUB5ET.mjs";
import "./chunk-P2R73CAR.mjs";
import "./chunk-HJNATCD3.mjs";
import {
  init_sdk
} from "./chunk-3KOWL3LY.mjs";
import {
  APIError,
  AnthropicError,
  BaseAnthropic,
  Beta,
  Completions,
  Messages,
  Stream,
  init_client,
  init_error,
  init_error2,
  init_resources,
  init_streaming
} from "./chunk-5K6GNWIX.mjs";
import {
  __commonJS,
  __esm,
  __export,
  __require,
  __toCommonJS,
  __toESM
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
}
function __exportStar(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function(v) {
      return new Promise(function(a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// node_modules/.pnpm/@aws-crypto+sha256-js@4.0.0/node_modules/@aws-crypto/sha256-js/build/constants.js
var require_constants = __commonJS({
  "node_modules/.pnpm/@aws-crypto+sha256-js@4.0.0/node_modules/@aws-crypto/sha256-js/build/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MAX_HASHABLE_LENGTH = exports.INIT = exports.KEY = exports.DIGEST_LENGTH = exports.BLOCK_SIZE = void 0;
    exports.BLOCK_SIZE = 64;
    exports.DIGEST_LENGTH = 32;
    exports.KEY = new Uint32Array([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]);
    exports.INIT = [
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ];
    exports.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
  }
});

// node_modules/.pnpm/@aws-crypto+sha256-js@4.0.0/node_modules/@aws-crypto/sha256-js/build/RawSha256.js
var require_RawSha256 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+sha256-js@4.0.0/node_modules/@aws-crypto/sha256-js/build/RawSha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RawSha256 = void 0;
    var constants_1 = require_constants();
    var RawSha256 = (
      /** @class */
      (function() {
        function RawSha2562() {
          this.state = Int32Array.from(constants_1.INIT);
          this.temp = new Int32Array(64);
          this.buffer = new Uint8Array(64);
          this.bufferLength = 0;
          this.bytesHashed = 0;
          this.finished = false;
        }
        RawSha2562.prototype.update = function(data) {
          if (this.finished) {
            throw new Error("Attempted to update an already finished hash.");
          }
          var position = 0;
          var byteLength = data.byteLength;
          this.bytesHashed += byteLength;
          if (this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH) {
            throw new Error("Cannot hash more than 2^53 - 1 bits");
          }
          while (byteLength > 0) {
            this.buffer[this.bufferLength++] = data[position++];
            byteLength--;
            if (this.bufferLength === constants_1.BLOCK_SIZE) {
              this.hashBuffer();
              this.bufferLength = 0;
            }
          }
        };
        RawSha2562.prototype.digest = function() {
          if (!this.finished) {
            var bitsHashed = this.bytesHashed * 8;
            var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
            var undecoratedLength = this.bufferLength;
            bufferView.setUint8(this.bufferLength++, 128);
            if (undecoratedLength % constants_1.BLOCK_SIZE >= constants_1.BLOCK_SIZE - 8) {
              for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE; i++) {
                bufferView.setUint8(i, 0);
              }
              this.hashBuffer();
              this.bufferLength = 0;
            }
            for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE - 8; i++) {
              bufferView.setUint8(i, 0);
            }
            bufferView.setUint32(constants_1.BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
            bufferView.setUint32(constants_1.BLOCK_SIZE - 4, bitsHashed);
            this.hashBuffer();
            this.finished = true;
          }
          var out = new Uint8Array(constants_1.DIGEST_LENGTH);
          for (var i = 0; i < 8; i++) {
            out[i * 4] = this.state[i] >>> 24 & 255;
            out[i * 4 + 1] = this.state[i] >>> 16 & 255;
            out[i * 4 + 2] = this.state[i] >>> 8 & 255;
            out[i * 4 + 3] = this.state[i] >>> 0 & 255;
          }
          return out;
        };
        RawSha2562.prototype.hashBuffer = function() {
          var _a = this, buffer = _a.buffer, state = _a.state;
          var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
          for (var i = 0; i < constants_1.BLOCK_SIZE; i++) {
            if (i < 16) {
              this.temp[i] = (buffer[i * 4] & 255) << 24 | (buffer[i * 4 + 1] & 255) << 16 | (buffer[i * 4 + 2] & 255) << 8 | buffer[i * 4 + 3] & 255;
            } else {
              var u = this.temp[i - 2];
              var t1_1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
              u = this.temp[i - 15];
              var t2_1 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
              this.temp[i] = (t1_1 + this.temp[i - 7] | 0) + (t2_1 + this.temp[i - 16] | 0);
            }
            var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (constants_1.KEY[i] + this.temp[i] | 0) | 0) | 0;
            var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
            state7 = state6;
            state6 = state5;
            state5 = state4;
            state4 = state3 + t1 | 0;
            state3 = state2;
            state2 = state1;
            state1 = state0;
            state0 = t1 + t2 | 0;
          }
          state[0] += state0;
          state[1] += state1;
          state[2] += state2;
          state[3] += state3;
          state[4] += state4;
          state[5] += state5;
          state[6] += state6;
          state[7] += state7;
        };
        return RawSha2562;
      })()
    );
    exports.RawSha256 = RawSha256;
  }
});

// node_modules/.pnpm/@aws-sdk+util-utf8-browser@3.259.0/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js
var require_pureJs = __commonJS({
  "node_modules/.pnpm/@aws-sdk+util-utf8-browser@3.259.0/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var fromUtf82 = (input) => {
      const bytes = [];
      for (let i = 0, len = input.length; i < len; i++) {
        const value = input.charCodeAt(i);
        if (value < 128) {
          bytes.push(value);
        } else if (value < 2048) {
          bytes.push(value >> 6 | 192, value & 63 | 128);
        } else if (i + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i + 1) & 64512) === 56320) {
          const surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
          bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
        } else {
          bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
        }
      }
      return Uint8Array.from(bytes);
    };
    exports.fromUtf8 = fromUtf82;
    var toUtf82 = (input) => {
      let decoded = "";
      for (let i = 0, len = input.length; i < len; i++) {
        const byte = input[i];
        if (byte < 128) {
          decoded += String.fromCharCode(byte);
        } else if (192 <= byte && byte < 224) {
          const nextByte = input[++i];
          decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
        } else if (240 <= byte && byte < 365) {
          const surrogatePair = [byte, input[++i], input[++i], input[++i]];
          const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
          decoded += decodeURIComponent(encoded);
        } else {
          decoded += String.fromCharCode((byte & 15) << 12 | (input[++i] & 63) << 6 | input[++i] & 63);
        }
      }
      return decoded;
    };
    exports.toUtf8 = toUtf82;
  }
});

// node_modules/.pnpm/@aws-sdk+util-utf8-browser@3.259.0/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js
var require_whatwgEncodingApi = __commonJS({
  "node_modules/.pnpm/@aws-sdk+util-utf8-browser@3.259.0/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    function fromUtf82(input) {
      return new TextEncoder().encode(input);
    }
    exports.fromUtf8 = fromUtf82;
    function toUtf82(input) {
      return new TextDecoder("utf-8").decode(input);
    }
    exports.toUtf8 = toUtf82;
  }
});

// node_modules/.pnpm/@aws-sdk+util-utf8-browser@3.259.0/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js
var require_dist_cjs5 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+util-utf8-browser@3.259.0/node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toUtf8 = exports.fromUtf8 = void 0;
    var pureJs_1 = require_pureJs();
    var whatwgEncodingApi_1 = require_whatwgEncodingApi();
    var fromUtf82 = (input) => typeof TextEncoder === "function" ? (0, whatwgEncodingApi_1.fromUtf8)(input) : (0, pureJs_1.fromUtf8)(input);
    exports.fromUtf8 = fromUtf82;
    var toUtf82 = (input) => typeof TextDecoder === "function" ? (0, whatwgEncodingApi_1.toUtf8)(input) : (0, pureJs_1.toUtf8)(input);
    exports.toUtf8 = toUtf82;
  }
});

// node_modules/.pnpm/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertToBuffer = void 0;
    var util_utf8_browser_1 = require_dist_cjs5();
    var fromUtf82 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
      return Buffer.from(input, "utf8");
    } : util_utf8_browser_1.fromUtf8;
    function convertToBuffer(data) {
      if (data instanceof Uint8Array)
        return data;
      if (typeof data === "string") {
        return fromUtf82(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
    exports.convertToBuffer = convertToBuffer;
  }
});

// node_modules/.pnpm/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/isEmptyData.js
var require_isEmptyData = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/isEmptyData.js"(exports) {
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

// node_modules/.pnpm/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/numToUint8.js
var require_numToUint8 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/numToUint8.js"(exports) {
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

// node_modules/.pnpm/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
var require_uint32ArrayFrom = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/uint32ArrayFrom.js"(exports) {
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

// node_modules/.pnpm/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/index.js
var require_build = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@4.0.0/node_modules/@aws-crypto/util/build/index.js"(exports) {
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

// node_modules/.pnpm/@aws-crypto+sha256-js@4.0.0/node_modules/@aws-crypto/sha256-js/build/jsSha256.js
var require_jsSha256 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+sha256-js@4.0.0/node_modules/@aws-crypto/sha256-js/build/jsSha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sha256 = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var constants_1 = require_constants();
    var RawSha256_1 = require_RawSha256();
    var util_1 = require_build();
    var Sha2562 = (
      /** @class */
      (function() {
        function Sha2563(secret) {
          this.secret = secret;
          this.hash = new RawSha256_1.RawSha256();
          this.reset();
        }
        Sha2563.prototype.update = function(toHash) {
          if ((0, util_1.isEmptyData)(toHash) || this.error) {
            return;
          }
          try {
            this.hash.update((0, util_1.convertToBuffer)(toHash));
          } catch (e) {
            this.error = e;
          }
        };
        Sha2563.prototype.digestSync = function() {
          if (this.error) {
            throw this.error;
          }
          if (this.outer) {
            if (!this.outer.finished) {
              this.outer.update(this.hash.digest());
            }
            return this.outer.digest();
          }
          return this.hash.digest();
        };
        Sha2563.prototype.digest = function() {
          return tslib_1.__awaiter(this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              return [2, this.digestSync()];
            });
          });
        };
        Sha2563.prototype.reset = function() {
          this.hash = new RawSha256_1.RawSha256();
          if (this.secret) {
            this.outer = new RawSha256_1.RawSha256();
            var inner = bufferFromSecret(this.secret);
            var outer = new Uint8Array(constants_1.BLOCK_SIZE);
            outer.set(inner);
            for (var i = 0; i < constants_1.BLOCK_SIZE; i++) {
              inner[i] ^= 54;
              outer[i] ^= 92;
            }
            this.hash.update(inner);
            this.outer.update(outer);
            for (var i = 0; i < inner.byteLength; i++) {
              inner[i] = 0;
            }
          }
        };
        return Sha2563;
      })()
    );
    exports.Sha256 = Sha2562;
    function bufferFromSecret(secret) {
      var input = (0, util_1.convertToBuffer)(secret);
      if (input.byteLength > constants_1.BLOCK_SIZE) {
        var bufferHash = new RawSha256_1.RawSha256();
        bufferHash.update(input);
        input = bufferHash.digest();
      }
      var buffer = new Uint8Array(constants_1.BLOCK_SIZE);
      buffer.set(input);
      return buffer;
    }
  }
});

// node_modules/.pnpm/@aws-crypto+sha256-js@4.0.0/node_modules/@aws-crypto/sha256-js/build/index.js
var require_build2 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+sha256-js@4.0.0/node_modules/@aws-crypto/sha256-js/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_jsSha256(), exports);
  }
});

// node_modules/.pnpm/@smithy+types@2.12.0/node_modules/@smithy/types/dist-cjs/index.js
var require_dist_cjs6 = __commonJS({
  "node_modules/.pnpm/@smithy+types@2.12.0/node_modules/@smithy/types/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      AlgorithmId: () => AlgorithmId,
      EndpointURLScheme: () => EndpointURLScheme,
      FieldPosition: () => FieldPosition,
      HttpApiKeyAuthLocation: () => HttpApiKeyAuthLocation,
      HttpAuthLocation: () => HttpAuthLocation,
      IniSectionType: () => IniSectionType,
      RequestHandlerProtocol: () => RequestHandlerProtocol,
      SMITHY_CONTEXT_KEY: () => SMITHY_CONTEXT_KEY,
      getDefaultClientConfiguration: () => getDefaultClientConfiguration,
      resolveDefaultRuntimeConfig: () => resolveDefaultRuntimeConfig
    });
    module.exports = __toCommonJS2(src_exports);
    var HttpAuthLocation = /* @__PURE__ */ ((HttpAuthLocation2) => {
      HttpAuthLocation2["HEADER"] = "header";
      HttpAuthLocation2["QUERY"] = "query";
      return HttpAuthLocation2;
    })(HttpAuthLocation || {});
    var HttpApiKeyAuthLocation = /* @__PURE__ */ ((HttpApiKeyAuthLocation2) => {
      HttpApiKeyAuthLocation2["HEADER"] = "header";
      HttpApiKeyAuthLocation2["QUERY"] = "query";
      return HttpApiKeyAuthLocation2;
    })(HttpApiKeyAuthLocation || {});
    var EndpointURLScheme = /* @__PURE__ */ ((EndpointURLScheme2) => {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
      return EndpointURLScheme2;
    })(EndpointURLScheme || {});
    var AlgorithmId = /* @__PURE__ */ ((AlgorithmId2) => {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
      return AlgorithmId2;
    })(AlgorithmId || {});
    var getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const checksumAlgorithms = [];
      if (runtimeConfig.sha256 !== void 0) {
        checksumAlgorithms.push({
          algorithmId: () => "sha256",
          checksumConstructor: () => runtimeConfig.sha256
        });
      }
      if (runtimeConfig.md5 != void 0) {
        checksumAlgorithms.push({
          algorithmId: () => "md5",
          checksumConstructor: () => runtimeConfig.md5
        });
      }
      return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
          this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration");
    var resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    }, "resolveChecksumRuntimeConfig");
    var getDefaultClientConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return {
        ...getChecksumConfiguration(runtimeConfig)
      };
    }, "getDefaultClientConfiguration");
    var resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        ...resolveChecksumRuntimeConfig(config)
      };
    }, "resolveDefaultRuntimeConfig");
    var FieldPosition = /* @__PURE__ */ ((FieldPosition2) => {
      FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
      FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
      return FieldPosition2;
    })(FieldPosition || {});
    var SMITHY_CONTEXT_KEY = "__smithy_context";
    var IniSectionType = /* @__PURE__ */ ((IniSectionType2) => {
      IniSectionType2["PROFILE"] = "profile";
      IniSectionType2["SSO_SESSION"] = "sso-session";
      IniSectionType2["SERVICES"] = "services";
      return IniSectionType2;
    })(IniSectionType || {});
    var RequestHandlerProtocol = /* @__PURE__ */ ((RequestHandlerProtocol2) => {
      RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
      return RequestHandlerProtocol2;
    })(RequestHandlerProtocol || {});
  }
});

// node_modules/.pnpm/@smithy+protocol-http@3.3.0/node_modules/@smithy/protocol-http/dist-cjs/index.js
var require_dist_cjs7 = __commonJS({
  "node_modules/.pnpm/@smithy+protocol-http@3.3.0/node_modules/@smithy/protocol-http/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      Field: () => Field,
      Fields: () => Fields,
      HttpRequest: () => HttpRequest2,
      HttpResponse: () => HttpResponse,
      getHttpHandlerExtensionConfiguration: () => getHttpHandlerExtensionConfiguration,
      isValidHostname: () => isValidHostname,
      resolveHttpHandlerRuntimeConfig: () => resolveHttpHandlerRuntimeConfig
    });
    module.exports = __toCommonJS2(src_exports);
    var getHttpHandlerExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      let httpHandler = runtimeConfig.httpHandler;
      return {
        setHttpHandler(handler) {
          httpHandler = handler;
        },
        httpHandler() {
          return httpHandler;
        },
        updateHttpClientConfig(key, value) {
          httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
          return httpHandler.httpHandlerConfigs();
        }
      };
    }, "getHttpHandlerExtensionConfiguration");
    var resolveHttpHandlerRuntimeConfig = /* @__PURE__ */ __name((httpHandlerExtensionConfiguration) => {
      return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
      };
    }, "resolveHttpHandlerRuntimeConfig");
    var import_types = require_dist_cjs6();
    var _Field = class _Field {
      constructor({ name, kind = import_types.FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
      }
      /**
       * Appends a value to the field.
       *
       * @param value The value to append.
       */
      add(value) {
        this.values.push(value);
      }
      /**
       * Overwrite existing field values.
       *
       * @param values The new field values.
       */
      set(values) {
        this.values = values;
      }
      /**
       * Remove all matching entries from list.
       *
       * @param value Value to remove.
       */
      remove(value) {
        this.values = this.values.filter((v) => v !== value);
      }
      /**
       * Get comma-delimited string.
       *
       * @returns String representation of {@link Field}.
       */
      toString() {
        return this.values.map((v) => v.includes(",") || v.includes(" ") ? `"${v}"` : v).join(", ");
      }
      /**
       * Get string values as a list
       *
       * @returns Values in {@link Field} as a list.
       */
      get() {
        return this.values;
      }
    };
    __name(_Field, "Field");
    var Field = _Field;
    var _Fields = class _Fields {
      constructor({ fields = [], encoding = "utf-8" }) {
        this.entries = {};
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
      }
      /**
       * Set entry for a {@link Field} name. The `name`
       * attribute will be used to key the collection.
       *
       * @param field The {@link Field} to set.
       */
      setField(field) {
        this.entries[field.name.toLowerCase()] = field;
      }
      /**
       *  Retrieve {@link Field} entry by name.
       *
       * @param name The name of the {@link Field} entry
       *  to retrieve
       * @returns The {@link Field} if it exists.
       */
      getField(name) {
        return this.entries[name.toLowerCase()];
      }
      /**
       * Delete entry from collection.
       *
       * @param name Name of the entry to delete.
       */
      removeField(name) {
        delete this.entries[name.toLowerCase()];
      }
      /**
       * Helper function for retrieving specific types of fields.
       * Used to grab all headers or all trailers.
       *
       * @param kind {@link FieldPosition} of entries to retrieve.
       * @returns The {@link Field} entries with the specified
       *  {@link FieldPosition}.
       */
      getByType(kind) {
        return Object.values(this.entries).filter((field) => field.kind === kind);
      }
    };
    __name(_Fields, "Fields");
    var Fields = _Fields;
    var _HttpRequest = class _HttpRequest2 {
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      static isInstance(request) {
        if (!request)
          return false;
        const req = request;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      clone() {
        const cloned = new _HttpRequest2({
          ...this,
          headers: { ...this.headers }
        });
        if (cloned.query)
          cloned.query = cloneQuery(cloned.query);
        return cloned;
      }
    };
    __name(_HttpRequest, "HttpRequest");
    var HttpRequest2 = _HttpRequest;
    function cloneQuery(query) {
      return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
          ...carry,
          [paramName]: Array.isArray(param) ? [...param] : param
        };
      }, {});
    }
    __name(cloneQuery, "cloneQuery");
    var _HttpResponse = class _HttpResponse {
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
    __name(_HttpResponse, "HttpResponse");
    var HttpResponse = _HttpResponse;
    function isValidHostname(hostname) {
      const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
      return hostPattern.test(hostname);
    }
    __name(isValidHostname, "isValidHostname");
  }
});

// node_modules/.pnpm/@smithy+types@3.7.2/node_modules/@smithy/types/dist-cjs/index.js
var require_dist_cjs8 = __commonJS({
  "node_modules/.pnpm/@smithy+types@3.7.2/node_modules/@smithy/types/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      AlgorithmId: () => AlgorithmId,
      EndpointURLScheme: () => EndpointURLScheme,
      FieldPosition: () => FieldPosition,
      HttpApiKeyAuthLocation: () => HttpApiKeyAuthLocation,
      HttpAuthLocation: () => HttpAuthLocation,
      IniSectionType: () => IniSectionType,
      RequestHandlerProtocol: () => RequestHandlerProtocol,
      SMITHY_CONTEXT_KEY: () => SMITHY_CONTEXT_KEY,
      getDefaultClientConfiguration: () => getDefaultClientConfiguration,
      resolveDefaultRuntimeConfig: () => resolveDefaultRuntimeConfig
    });
    module.exports = __toCommonJS2(src_exports);
    var HttpAuthLocation = /* @__PURE__ */ ((HttpAuthLocation2) => {
      HttpAuthLocation2["HEADER"] = "header";
      HttpAuthLocation2["QUERY"] = "query";
      return HttpAuthLocation2;
    })(HttpAuthLocation || {});
    var HttpApiKeyAuthLocation = /* @__PURE__ */ ((HttpApiKeyAuthLocation2) => {
      HttpApiKeyAuthLocation2["HEADER"] = "header";
      HttpApiKeyAuthLocation2["QUERY"] = "query";
      return HttpApiKeyAuthLocation2;
    })(HttpApiKeyAuthLocation || {});
    var EndpointURLScheme = /* @__PURE__ */ ((EndpointURLScheme2) => {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
      return EndpointURLScheme2;
    })(EndpointURLScheme || {});
    var AlgorithmId = /* @__PURE__ */ ((AlgorithmId2) => {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
      return AlgorithmId2;
    })(AlgorithmId || {});
    var getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const checksumAlgorithms = [];
      if (runtimeConfig.sha256 !== void 0) {
        checksumAlgorithms.push({
          algorithmId: () => "sha256",
          checksumConstructor: () => runtimeConfig.sha256
        });
      }
      if (runtimeConfig.md5 != void 0) {
        checksumAlgorithms.push({
          algorithmId: () => "md5",
          checksumConstructor: () => runtimeConfig.md5
        });
      }
      return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
          this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration");
    var resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    }, "resolveChecksumRuntimeConfig");
    var getDefaultClientConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return {
        ...getChecksumConfiguration(runtimeConfig)
      };
    }, "getDefaultClientConfiguration");
    var resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        ...resolveChecksumRuntimeConfig(config)
      };
    }, "resolveDefaultRuntimeConfig");
    var FieldPosition = /* @__PURE__ */ ((FieldPosition2) => {
      FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
      FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
      return FieldPosition2;
    })(FieldPosition || {});
    var SMITHY_CONTEXT_KEY = "__smithy_context";
    var IniSectionType = /* @__PURE__ */ ((IniSectionType2) => {
      IniSectionType2["PROFILE"] = "profile";
      IniSectionType2["SSO_SESSION"] = "sso-session";
      IniSectionType2["SERVICES"] = "services";
      return IniSectionType2;
    })(IniSectionType || {});
    var RequestHandlerProtocol = /* @__PURE__ */ ((RequestHandlerProtocol2) => {
      RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
      return RequestHandlerProtocol2;
    })(RequestHandlerProtocol || {});
  }
});

// node_modules/.pnpm/@smithy+util-middleware@3.0.11/node_modules/@smithy/util-middleware/dist-cjs/index.js
var require_dist_cjs9 = __commonJS({
  "node_modules/.pnpm/@smithy+util-middleware@3.0.11/node_modules/@smithy/util-middleware/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      getSmithyContext: () => getSmithyContext,
      normalizeProvider: () => normalizeProvider
    });
    module.exports = __toCommonJS2(src_exports);
    var import_types = require_dist_cjs8();
    var getSmithyContext = /* @__PURE__ */ __name((context) => context[import_types.SMITHY_CONTEXT_KEY] || (context[import_types.SMITHY_CONTEXT_KEY] = {}), "getSmithyContext");
    var normalizeProvider = /* @__PURE__ */ __name((input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    }, "normalizeProvider");
  }
});

// node_modules/.pnpm/@smithy+is-array-buffer@3.0.0/node_modules/@smithy/is-array-buffer/dist-cjs/index.js
var require_dist_cjs10 = __commonJS({
  "node_modules/.pnpm/@smithy+is-array-buffer@3.0.0/node_modules/@smithy/is-array-buffer/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      isArrayBuffer: () => isArrayBuffer
    });
    module.exports = __toCommonJS2(src_exports);
    var isArrayBuffer = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");
  }
});

// node_modules/.pnpm/@smithy+util-buffer-from@3.0.0/node_modules/@smithy/util-buffer-from/dist-cjs/index.js
var require_dist_cjs11 = __commonJS({
  "node_modules/.pnpm/@smithy+util-buffer-from@3.0.0/node_modules/@smithy/util-buffer-from/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      fromArrayBuffer: () => fromArrayBuffer,
      fromString: () => fromString
    });
    module.exports = __toCommonJS2(src_exports);
    var import_is_array_buffer = require_dist_cjs10();
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

// node_modules/.pnpm/@smithy+util-utf8@3.0.0/node_modules/@smithy/util-utf8/dist-cjs/index.js
var require_dist_cjs12 = __commonJS({
  "node_modules/.pnpm/@smithy+util-utf8@3.0.0/node_modules/@smithy/util-utf8/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      fromUtf8: () => fromUtf82,
      toUint8Array: () => toUint8Array,
      toUtf8: () => toUtf82
    });
    module.exports = __toCommonJS2(src_exports);
    var import_util_buffer_from = require_dist_cjs11();
    var fromUtf82 = /* @__PURE__ */ __name((input) => {
      const buf = (0, import_util_buffer_from.fromString)(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8");
    var toUint8Array = /* @__PURE__ */ __name((data) => {
      if (typeof data === "string") {
        return fromUtf82(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }, "toUint8Array");
    var toUtf82 = /* @__PURE__ */ __name((input) => {
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

// node_modules/.pnpm/@smithy+util-hex-encoding@3.0.0/node_modules/@smithy/util-hex-encoding/dist-cjs/index.js
var require_dist_cjs13 = __commonJS({
  "node_modules/.pnpm/@smithy+util-hex-encoding@3.0.0/node_modules/@smithy/util-hex-encoding/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      fromHex: () => fromHex,
      toHex: () => toHex
    });
    module.exports = __toCommonJS2(src_exports);
    var SHORT_TO_HEX = {};
    var HEX_TO_SHORT = {};
    for (let i = 0; i < 256; i++) {
      let encodedByte = i.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i;
    }
    function fromHex(encoded) {
      if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
      }
      const out = new Uint8Array(encoded.length / 2);
      for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
          out[i / 2] = HEX_TO_SHORT[encodedByte];
        } else {
          throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
      }
      return out;
    }
    __name(fromHex, "fromHex");
    function toHex(bytes) {
      let out = "";
      for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
      }
      return out;
    }
    __name(toHex, "toHex");
  }
});

// node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-cjs/index.js
var require_dist_cjs14 = __commonJS({
  "node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      escapeUri: () => escapeUri,
      escapeUriPath: () => escapeUriPath
    });
    module.exports = __toCommonJS2(src_exports);
    var escapeUri = /* @__PURE__ */ __name((uri) => (
      // AWS percent-encodes some extra non-standard characters in a URI
      encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode)
    ), "escapeUri");
    var hexEncode = /* @__PURE__ */ __name((c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");
    var escapeUriPath = /* @__PURE__ */ __name((uri) => uri.split("/").map(escapeUri).join("/"), "escapeUriPath");
  }
});

// node_modules/.pnpm/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-cjs/index.js
var require_dist_cjs15 = __commonJS({
  "node_modules/.pnpm/@smithy+signature-v4@3.1.2/node_modules/@smithy/signature-v4/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      SignatureV4: () => SignatureV42,
      clearCredentialCache: () => clearCredentialCache,
      createScope: () => createScope,
      getCanonicalHeaders: () => getCanonicalHeaders,
      getCanonicalQuery: () => getCanonicalQuery,
      getPayloadHash: () => getPayloadHash,
      getSigningKey: () => getSigningKey,
      moveHeadersToQuery: () => moveHeadersToQuery,
      prepareRequest: () => prepareRequest
    });
    module.exports = __toCommonJS2(src_exports);
    var import_util_middleware = require_dist_cjs9();
    var import_util_utf84 = require_dist_cjs12();
    var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    var AUTH_HEADER = "authorization";
    var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    var DATE_HEADER = "date";
    var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
    var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    var SHA256_HEADER = "x-amz-content-sha256";
    var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    var ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true
    };
    var PROXY_HEADER_PATTERN = /^proxy-/;
    var SEC_HEADER_PATTERN = /^sec-/;
    var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    var MAX_CACHE_SIZE = 50;
    var KEY_TYPE_IDENTIFIER = "aws4_request";
    var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
    var import_util_hex_encoding = require_dist_cjs13();
    var import_util_utf8 = require_dist_cjs12();
    var signingKeyCache = {};
    var cacheQueue = [];
    var createScope = /* @__PURE__ */ __name((shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`, "createScope");
    var getSigningKey = /* @__PURE__ */ __name(async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${(0, import_util_hex_encoding.toHex)(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return signingKeyCache[cacheKey] = key;
    }, "getSigningKey");
    var clearCredentialCache = /* @__PURE__ */ __name(() => {
      cacheQueue.length = 0;
      Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
      });
    }, "clearCredentialCache");
    var hmac = /* @__PURE__ */ __name((ctor, secret, data) => {
      const hash = new ctor(secret);
      hash.update((0, import_util_utf8.toUint8Array)(data));
      return hash.digest();
    }, "hmac");
    var getCanonicalHeaders = /* @__PURE__ */ __name(({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || (unsignableHeaders == null ? void 0 : unsignableHeaders.has(canonicalHeaderName)) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
          if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    }, "getCanonicalHeaders");
    var import_util_uri_escape = require_dist_cjs14();
    var getCanonicalQuery = /* @__PURE__ */ __name(({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
          serialized[key] = `${(0, import_util_uri_escape.escapeUri)(key)}=${(0, import_util_uri_escape.escapeUri)(value)}`;
        } else if (Array.isArray(value)) {
          serialized[key] = value.slice(0).reduce(
            (encoded, value2) => encoded.concat([`${(0, import_util_uri_escape.escapeUri)(key)}=${(0, import_util_uri_escape.escapeUri)(value2)}`]),
            []
          ).sort().join("&");
        }
      }
      return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
    }, "getCanonicalQuery");
    var import_is_array_buffer = require_dist_cjs10();
    var import_util_utf82 = require_dist_cjs12();
    var getPayloadHash = /* @__PURE__ */ __name(async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (typeof body === "string" || ArrayBuffer.isView(body) || (0, import_is_array_buffer.isArrayBuffer)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0, import_util_utf82.toUint8Array)(body));
        return (0, import_util_hex_encoding.toHex)(await hashCtor.digest());
      }
      return UNSIGNED_PAYLOAD;
    }, "getPayloadHash");
    var import_util_utf83 = require_dist_cjs12();
    var _HeaderFormatter = class _HeaderFormatter {
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = (0, import_util_utf83.fromUtf8)(headerName);
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
            return Uint8Array.from([
              header.value ? 0 : 1
              /* boolFalse */
            ]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(
              0,
              3
              /* short */
            );
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(
              0,
              4
              /* integer */
            );
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(
              0,
              6
              /* byteArray */
            );
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = (0, import_util_utf83.fromUtf8)(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(
              0,
              7
              /* string */
            );
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
            uuidBytes.set((0, import_util_hex_encoding.fromHex)(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
    };
    __name(_HeaderFormatter, "HeaderFormatter");
    var HeaderFormatter = _HeaderFormatter;
    var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    var _Int64 = class _Int642 {
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
        return new _Int642(bytes);
      }
      /**
       * Called implicitly by infix arithmetic operators.
       */
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt((0, import_util_hex_encoding.toHex)(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
    __name(_Int64, "Int64");
    var Int64 = _Int64;
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
    __name(negate, "negate");
    var hasHeader = /* @__PURE__ */ __name((soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    }, "hasHeader");
    var cloneRequest = /* @__PURE__ */ __name(({ headers, query, ...rest }) => ({
      ...rest,
      headers: { ...headers },
      query: query ? cloneQuery(query) : void 0
    }), "cloneRequest");
    var cloneQuery = /* @__PURE__ */ __name((query) => Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param
      };
    }, {}), "cloneQuery");
    var moveHeadersToQuery = /* @__PURE__ */ __name((request, options = {}) => {
      var _a;
      const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !((_a = options.unhoistableHeaders) == null ? void 0 : _a.has(lname))) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request,
        headers,
        query
      };
    }, "moveHeadersToQuery");
    var prepareRequest = /* @__PURE__ */ __name((request) => {
      request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
      for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request.headers[headerName];
        }
      }
      return request;
    }, "prepareRequest");
    var iso8601 = /* @__PURE__ */ __name((time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601");
    var toDate = /* @__PURE__ */ __name((time) => {
      if (typeof time === "number") {
        return new Date(time * 1e3);
      }
      if (typeof time === "string") {
        if (Number(time)) {
          return new Date(Number(time) * 1e3);
        }
        return new Date(time);
      }
      return time;
    }, "toDate");
    var _SignatureV4 = class _SignatureV4 {
      constructor({
        applyChecksum,
        credentials,
        region,
        service,
        sha256,
        uriEscapePath = true
      }) {
        this.headerFormatter = new HeaderFormatter();
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0, import_util_middleware.normalizeProvider)(region);
        this.credentialProvider = (0, import_util_middleware.normalizeProvider)(credentials);
      }
      async presign(originalRequest, options = {}) {
        const {
          signingDate = /* @__PURE__ */ new Date(),
          expiresIn = 3600,
          unsignableHeaders,
          unhoistableHeaders,
          signableHeaders,
          signingRegion,
          signingService
        } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
          return Promise.reject(
            "Signature version 4 presigned URLs must have an expiration date less than one week in the future"
          );
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
          request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(
          longDate,
          scope,
          this.getSigningKey(credentials, region, shortDate, signingService),
          this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256))
        );
        return request;
      }
      async sign(toSign, options) {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      }
      async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0, import_util_hex_encoding.toHex)(await hash.digest());
        const stringToSign = [
          EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
      }
      async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
        const promise = this.signEvent(
          {
            headers: this.headerFormatter.format(signableMessage.message.headers),
            payload: signableMessage.message.body
          },
          {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature
          }
        );
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      }
      async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update((0, import_util_utf84.toUint8Array)(stringToSign));
        return (0, import_util_hex_encoding.toHex)(await hash.digest());
      }
      async signRequest(requestToSign, {
        signingDate = /* @__PURE__ */ new Date(),
        signableHeaders,
        unsignableHeaders,
        signingRegion,
        signingService
      } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
          request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(
          longDate,
          scope,
          this.getSigningKey(credentials, region, shortDate, signingService),
          this.createCanonicalRequest(request, canonicalHeaders, payloadHash)
        );
        request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request;
      }
      createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
      }
      async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update((0, import_util_utf84.toUint8Array)(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${(0, import_util_hex_encoding.toHex)(hashedRequest)}`;
      }
      getCanonicalPath({ path: path2 }) {
        if (this.uriEscapePath) {
          const normalizedPathSegments = [];
          for (const pathSegment of path2.split("/")) {
            if ((pathSegment == null ? void 0 : pathSegment.length) === 0)
              continue;
            if (pathSegment === ".")
              continue;
            if (pathSegment === "..") {
              normalizedPathSegments.pop();
            } else {
              normalizedPathSegments.push(pathSegment);
            }
          }
          const normalizedPath = `${(path2 == null ? void 0 : path2.startsWith("/")) ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && (path2 == null ? void 0 : path2.endsWith("/")) ? "/" : ""}`;
          const doubleEncoded = (0, import_util_uri_escape.escapeUri)(normalizedPath);
          return doubleEncoded.replace(/%2F/g, "/");
        }
        return path2;
      }
      async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update((0, import_util_utf84.toUint8Array)(stringToSign));
        return (0, import_util_hex_encoding.toHex)(await hash.digest());
      }
      getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
      }
      validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || // @ts-expect-error: Property 'accessKeyId' does not exist on type 'object'.ts(2339)
        typeof credentials.accessKeyId !== "string" || // @ts-expect-error: Property 'secretAccessKey' does not exist on type 'object'.ts(2339)
        typeof credentials.secretAccessKey !== "string") {
          throw new Error("Resolved credential object is not valid");
        }
      }
    };
    __name(_SignatureV4, "SignatureV4");
    var SignatureV42 = _SignatureV4;
    var formatDate = /* @__PURE__ */ __name((now) => {
      const longDate = iso8601(now).replace(/[\-:]/g, "");
      return {
        longDate,
        shortDate: longDate.slice(0, 8)
      };
    }, "formatDate");
    var getCanonicalHeaderList = /* @__PURE__ */ __name((headers) => Object.keys(headers).sort().join(";"), "getCanonicalHeaderList");
  }
});

// node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/core/auth.mjs
import assert from "assert";
var import_sha256_js, import_fetch_http_handler, import_protocol_http, import_signature_v4, DEFAULT_PROVIDER_CHAIN_RESOLVER, getAuthHeaders;
var init_auth = __esm({
  "node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/core/auth.mjs"() {
    import_sha256_js = __toESM(require_build2(), 1);
    import_fetch_http_handler = __toESM(require_dist_cjs(), 1);
    import_protocol_http = __toESM(require_dist_cjs7(), 1);
    import_signature_v4 = __toESM(require_dist_cjs15(), 1);
    DEFAULT_PROVIDER_CHAIN_RESOLVER = () => import("./dist-cjs-ZCGZ7VTU.mjs").then(({ fromNodeProviderChain }) => fromNodeProviderChain({
      clientConfig: {
        requestHandler: new import_fetch_http_handler.FetchHttpHandler({
          requestInit: (httpRequest) => {
            return {
              ...httpRequest
            };
          }
        })
      }
    })).catch((error) => {
      throw new Error(`Failed to import '@aws-sdk/credential-providers'.You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicBedrock({ providerChainResolver })\` Original error: ${error.message}`);
    });
    getAuthHeaders = async (req, props) => {
      assert(req.method, "Expected request method property to be set");
      let credentials;
      if (props.awsAccessKey && props.awsSecretKey) {
        credentials = {
          accessKeyId: props.awsAccessKey,
          secretAccessKey: props.awsSecretKey,
          ...props.awsSessionToken != null && { sessionToken: props.awsSessionToken }
        };
      } else {
        const provider = await (props.providerChainResolver ? props.providerChainResolver() : DEFAULT_PROVIDER_CHAIN_RESOLVER());
        credentials = await provider();
      }
      const signer = new import_signature_v4.SignatureV4({
        service: "bedrock",
        region: props.regionName,
        credentials,
        sha256: import_sha256_js.Sha256
      });
      const url = new URL(props.url);
      const headers = !req.headers ? {} : Symbol.iterator in req.headers ? Object.fromEntries(Array.from(req.headers).map((header) => [...header])) : { ...req.headers };
      delete headers["connection"];
      headers["host"] = url.hostname;
      const request = new import_protocol_http.HttpRequest({
        method: req.method.toUpperCase(),
        protocol: url.protocol,
        path: url.pathname,
        headers,
        body: req.body
      });
      const signed = await signer.sign(request);
      return signed.headers;
    };
  }
});

// node_modules/.pnpm/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer2 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertToBuffer = void 0;
    var util_utf8_browser_1 = require_dist_cjs5();
    var fromUtf82 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
      return Buffer.from(input, "utf8");
    } : util_utf8_browser_1.fromUtf8;
    function convertToBuffer(data) {
      if (data instanceof Uint8Array)
        return data;
      if (typeof data === "string") {
        return fromUtf82(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
    exports.convertToBuffer = convertToBuffer;
  }
});

// node_modules/.pnpm/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/isEmptyData.js
var require_isEmptyData2 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/isEmptyData.js"(exports) {
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

// node_modules/.pnpm/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/numToUint8.js
var require_numToUint82 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/numToUint8.js"(exports) {
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

// node_modules/.pnpm/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
var require_uint32ArrayFrom2 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/uint32ArrayFrom.js"(exports) {
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

// node_modules/.pnpm/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/index.js
var require_build3 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+util@3.0.0/node_modules/@aws-crypto/util/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
    var convertToBuffer_1 = require_convertToBuffer2();
    Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function() {
      return convertToBuffer_1.convertToBuffer;
    } });
    var isEmptyData_1 = require_isEmptyData2();
    Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function() {
      return isEmptyData_1.isEmptyData;
    } });
    var numToUint8_1 = require_numToUint82();
    Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function() {
      return numToUint8_1.numToUint8;
    } });
    var uint32ArrayFrom_1 = require_uint32ArrayFrom2();
    Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function() {
      return uint32ArrayFrom_1.uint32ArrayFrom;
    } });
  }
});

// node_modules/.pnpm/@aws-crypto+crc32@3.0.0/node_modules/@aws-crypto/crc32/build/aws_crc32.js
var require_aws_crc32 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+crc32@3.0.0/node_modules/@aws-crypto/crc32/build/aws_crc32.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util_1 = require_build3();
    var index_1 = require_build4();
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

// node_modules/.pnpm/@aws-crypto+crc32@3.0.0/node_modules/@aws-crypto/crc32/build/index.js
var require_build4 = __commonJS({
  "node_modules/.pnpm/@aws-crypto+crc32@3.0.0/node_modules/@aws-crypto/crc32/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util_1 = require_build3();
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

// node_modules/.pnpm/@smithy+util-hex-encoding@2.2.0/node_modules/@smithy/util-hex-encoding/dist-cjs/index.js
var require_dist_cjs16 = __commonJS({
  "node_modules/.pnpm/@smithy+util-hex-encoding@2.2.0/node_modules/@smithy/util-hex-encoding/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      fromHex: () => fromHex,
      toHex: () => toHex
    });
    module.exports = __toCommonJS2(src_exports);
    var SHORT_TO_HEX = {};
    var HEX_TO_SHORT = {};
    for (let i = 0; i < 256; i++) {
      let encodedByte = i.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i;
    }
    function fromHex(encoded) {
      if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
      }
      const out = new Uint8Array(encoded.length / 2);
      for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
          out[i / 2] = HEX_TO_SHORT[encodedByte];
        } else {
          throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
      }
      return out;
    }
    __name(fromHex, "fromHex");
    function toHex(bytes) {
      let out = "";
      for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
      }
      return out;
    }
    __name(toHex, "toHex");
  }
});

// node_modules/.pnpm/@smithy+eventstream-codec@2.2.0/node_modules/@smithy/eventstream-codec/dist-cjs/index.js
var require_dist_cjs17 = __commonJS({
  "node_modules/.pnpm/@smithy+eventstream-codec@2.2.0/node_modules/@smithy/eventstream-codec/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      EventStreamCodec: () => EventStreamCodec,
      HeaderMarshaller: () => HeaderMarshaller,
      Int64: () => Int64,
      MessageDecoderStream: () => MessageDecoderStream,
      MessageEncoderStream: () => MessageEncoderStream,
      SmithyMessageDecoderStream: () => SmithyMessageDecoderStream,
      SmithyMessageEncoderStream: () => SmithyMessageEncoderStream
    });
    module.exports = __toCommonJS2(src_exports);
    var import_crc322 = require_build4();
    var import_util_hex_encoding = require_dist_cjs16();
    var _Int64 = class _Int642 {
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
        return new _Int642(bytes);
      }
      /**
       * Called implicitly by infix arithmetic operators.
       */
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt((0, import_util_hex_encoding.toHex)(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
    __name(_Int64, "Int64");
    var Int64 = _Int64;
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
    __name(negate, "negate");
    var _HeaderMarshaller = class _HeaderMarshaller {
      constructor(toUtf82, fromUtf82) {
        this.toUtf8 = toUtf82;
        this.fromUtf8 = fromUtf82;
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
            return Uint8Array.from([
              header.value ? 0 : 1
              /* boolFalse */
            ]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(
              0,
              3
              /* short */
            );
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(
              0,
              4
              /* integer */
            );
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(
              0,
              6
              /* byteArray */
            );
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = this.fromUtf8(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(
              0,
              7
              /* string */
            );
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
            uuidBytes.set((0, import_util_hex_encoding.fromHex)(header.value.replace(/\-/g, "")), 1);
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
                value: `${(0, import_util_hex_encoding.toHex)(uuidBytes.subarray(0, 4))}-${(0, import_util_hex_encoding.toHex)(uuidBytes.subarray(4, 6))}-${(0, import_util_hex_encoding.toHex)(
                  uuidBytes.subarray(6, 8)
                )}-${(0, import_util_hex_encoding.toHex)(uuidBytes.subarray(8, 10))}-${(0, import_util_hex_encoding.toHex)(uuidBytes.subarray(10))}`
              };
              break;
            default:
              throw new Error(`Unrecognized header type tag`);
          }
        }
        return out;
      }
    };
    __name(_HeaderMarshaller, "HeaderMarshaller");
    var HeaderMarshaller = _HeaderMarshaller;
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
    var import_crc32 = require_build4();
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
      const checksummer = new import_crc32.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
      if (expectedPreludeChecksum !== checksummer.digest()) {
        throw new Error(
          `The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`
        );
      }
      checksummer.update(
        new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH))
      );
      if (expectedMessageChecksum !== checksummer.digest()) {
        throw new Error(
          `The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`
        );
      }
      return {
        headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
        body: new Uint8Array(
          buffer,
          byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength,
          messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH)
        )
      };
    }
    __name(splitMessage, "splitMessage");
    var _EventStreamCodec = class _EventStreamCodec {
      constructor(toUtf82, fromUtf82) {
        this.headerMarshaller = new HeaderMarshaller(toUtf82, fromUtf82);
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
      /**
       * Convert a structured JavaScript object with tagged headers into a binary
       * event stream message.
       */
      encode({ headers: rawHeaders, body }) {
        const headers = this.headerMarshaller.format(rawHeaders);
        const length = headers.byteLength + body.byteLength + 16;
        const out = new Uint8Array(length);
        const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        const checksum = new import_crc322.Crc32();
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);
        view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
        return out;
      }
      /**
       * Convert a binary event stream message into a JavaScript object with an
       * opaque, binary body and tagged, parsed headers.
       */
      decode(message) {
        const { headers, body } = splitMessage(message);
        return { headers: this.headerMarshaller.parse(headers), body };
      }
      /**
       * Convert a structured JavaScript object with tagged headers into a binary
       * event stream message header.
       */
      formatHeaders(rawHeaders) {
        return this.headerMarshaller.format(rawHeaders);
      }
    };
    __name(_EventStreamCodec, "EventStreamCodec");
    var EventStreamCodec = _EventStreamCodec;
    var _MessageDecoderStream = class _MessageDecoderStream {
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
    __name(_MessageDecoderStream, "MessageDecoderStream");
    var MessageDecoderStream = _MessageDecoderStream;
    var _MessageEncoderStream = class _MessageEncoderStream {
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
    __name(_MessageEncoderStream, "MessageEncoderStream");
    var MessageEncoderStream = _MessageEncoderStream;
    var _SmithyMessageDecoderStream = class _SmithyMessageDecoderStream {
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
    __name(_SmithyMessageDecoderStream, "SmithyMessageDecoderStream");
    var SmithyMessageDecoderStream = _SmithyMessageDecoderStream;
    var _SmithyMessageEncoderStream = class _SmithyMessageEncoderStream {
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
    __name(_SmithyMessageEncoderStream, "SmithyMessageEncoderStream");
    var SmithyMessageEncoderStream = _SmithyMessageEncoderStream;
  }
});

// node_modules/.pnpm/@smithy+eventstream-serde-universal@2.2.0/node_modules/@smithy/eventstream-serde-universal/dist-cjs/index.js
var require_dist_cjs18 = __commonJS({
  "node_modules/.pnpm/@smithy+eventstream-serde-universal@2.2.0/node_modules/@smithy/eventstream-serde-universal/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      EventStreamMarshaller: () => EventStreamMarshaller2,
      eventStreamSerdeProvider: () => eventStreamSerdeProvider
    });
    module.exports = __toCommonJS2(src_exports);
    var import_eventstream_codec = require_dist_cjs17();
    function getChunkedStream(source) {
      let currentMessageTotalLength = 0;
      let currentMessagePendingLength = 0;
      let currentMessage = null;
      let messageLengthBuffer = null;
      const allocateMessage = /* @__PURE__ */ __name((size) => {
        if (typeof size !== "number") {
          throw new Error("Attempted to allocate an event message where size was not a number: " + size);
        }
        currentMessageTotalLength = size;
        currentMessagePendingLength = 4;
        currentMessage = new Uint8Array(size);
        const currentMessageView = new DataView(currentMessage.buffer);
        currentMessageView.setUint32(0, size, false);
      }, "allocateMessage");
      const iterator = /* @__PURE__ */ __name(async function* () {
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
              const numBytesForTotal = Math.min(
                4 - currentMessagePendingLength,
                // remaining bytes to fill the messageLengthBuffer
                bytesRemaining
                // bytes left in chunk
              );
              messageLengthBuffer.set(
                // @ts-ignore error TS2532: Object is possibly 'undefined' for value
                value.slice(currentOffset, currentOffset + numBytesForTotal),
                currentMessagePendingLength
              );
              currentMessagePendingLength += numBytesForTotal;
              currentOffset += numBytesForTotal;
              if (currentMessagePendingLength < 4) {
                break;
              }
              allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
              messageLengthBuffer = null;
            }
            const numBytesToWrite = Math.min(
              currentMessageTotalLength - currentMessagePendingLength,
              // number of bytes left to complete message
              chunkLength - currentOffset
              // number of bytes left in the original chunk
            );
            currentMessage.set(
              // @ts-ignore error TS2532: Object is possibly 'undefined' for value
              value.slice(currentOffset, currentOffset + numBytesToWrite),
              currentMessagePendingLength
            );
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
      }, "iterator");
      return {
        [Symbol.asyncIterator]: iterator
      };
    }
    __name(getChunkedStream, "getChunkedStream");
    function getMessageUnmarshaller(deserializer, toUtf82) {
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
            const error = new Error(toUtf82(message.body));
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
    __name(getMessageUnmarshaller, "getMessageUnmarshaller");
    var _EventStreamMarshaller = class _EventStreamMarshaller {
      constructor({ utf8Encoder, utf8Decoder }) {
        this.eventStreamCodec = new import_eventstream_codec.EventStreamCodec(utf8Encoder, utf8Decoder);
        this.utfEncoder = utf8Encoder;
      }
      deserialize(body, deserializer) {
        const inputStream = getChunkedStream(body);
        return new import_eventstream_codec.SmithyMessageDecoderStream({
          messageStream: new import_eventstream_codec.MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),
          // @ts-expect-error Type 'T' is not assignable to type 'Record<string, any>'
          deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder)
        });
      }
      serialize(inputStream, serializer) {
        return new import_eventstream_codec.MessageEncoderStream({
          messageStream: new import_eventstream_codec.SmithyMessageEncoderStream({ inputStream, serializer }),
          encoder: this.eventStreamCodec,
          includeEndFrame: true
        });
      }
    };
    __name(_EventStreamMarshaller, "EventStreamMarshaller");
    var EventStreamMarshaller2 = _EventStreamMarshaller;
    var eventStreamSerdeProvider = /* @__PURE__ */ __name((options) => new EventStreamMarshaller2(options), "eventStreamSerdeProvider");
  }
});

// node_modules/.pnpm/@smithy+eventstream-serde-node@2.2.0/node_modules/@smithy/eventstream-serde-node/dist-cjs/index.js
var require_dist_cjs19 = __commonJS({
  "node_modules/.pnpm/@smithy+eventstream-serde-node@2.2.0/node_modules/@smithy/eventstream-serde-node/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      EventStreamMarshaller: () => EventStreamMarshaller2,
      eventStreamSerdeProvider: () => eventStreamSerdeProvider
    });
    module.exports = __toCommonJS2(src_exports);
    var import_eventstream_serde_universal = require_dist_cjs18();
    var import_stream = __require("stream");
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
    __name(readabletoIterable, "readabletoIterable");
    var _EventStreamMarshaller = class _EventStreamMarshaller {
      constructor({ utf8Encoder, utf8Decoder }) {
        this.universalMarshaller = new import_eventstream_serde_universal.EventStreamMarshaller({
          utf8Decoder,
          utf8Encoder
        });
      }
      deserialize(body, deserializer) {
        const bodyIterable = typeof body[Symbol.asyncIterator] === "function" ? body : readabletoIterable(body);
        return this.universalMarshaller.deserialize(bodyIterable, deserializer);
      }
      serialize(input, serializer) {
        return import_stream.Readable.from(this.universalMarshaller.serialize(input, serializer));
      }
    };
    __name(_EventStreamMarshaller, "EventStreamMarshaller");
    var EventStreamMarshaller2 = _EventStreamMarshaller;
    var eventStreamSerdeProvider = /* @__PURE__ */ __name((options) => new EventStreamMarshaller2(options), "eventStreamSerdeProvider");
  }
});

// node_modules/.pnpm/@smithy+util-base64@2.3.0/node_modules/@smithy/util-base64/dist-cjs/fromBase64.js
var require_fromBase64 = __commonJS({
  "node_modules/.pnpm/@smithy+util-base64@2.3.0/node_modules/@smithy/util-base64/dist-cjs/fromBase64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs2();
    var BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
    var fromBase643 = (input) => {
      if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = (0, util_buffer_from_1.fromString)(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    };
    exports.fromBase64 = fromBase643;
  }
});

// node_modules/.pnpm/@smithy+util-base64@2.3.0/node_modules/@smithy/util-base64/dist-cjs/toBase64.js
var require_toBase64 = __commonJS({
  "node_modules/.pnpm/@smithy+util-base64@2.3.0/node_modules/@smithy/util-base64/dist-cjs/toBase64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs2();
    var util_utf8_1 = require_dist_cjs3();
    var toBase643 = (_input) => {
      let input;
      if (typeof _input === "string") {
        input = (0, util_utf8_1.fromUtf8)(_input);
      } else {
        input = _input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      }
      return (0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("base64");
    };
    exports.toBase64 = toBase643;
  }
});

// node_modules/.pnpm/@smithy+util-base64@2.3.0/node_modules/@smithy/util-base64/dist-cjs/index.js
var require_dist_cjs20 = __commonJS({
  "node_modules/.pnpm/@smithy+util-base64@2.3.0/node_modules/@smithy/util-base64/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    module.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_fromBase64(), module.exports);
    __reExport(src_exports, require_toBase64(), module.exports);
  }
});

// node_modules/.pnpm/@smithy+middleware-stack@2.2.0/node_modules/@smithy/middleware-stack/dist-cjs/index.js
var require_dist_cjs21 = __commonJS({
  "node_modules/.pnpm/@smithy+middleware-stack@2.2.0/node_modules/@smithy/middleware-stack/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      constructStack: () => constructStack
    });
    module.exports = __toCommonJS2(src_exports);
    var getAllAliases = /* @__PURE__ */ __name((name, aliases) => {
      const _aliases = [];
      if (name) {
        _aliases.push(name);
      }
      if (aliases) {
        for (const alias of aliases) {
          _aliases.push(alias);
        }
      }
      return _aliases;
    }, "getAllAliases");
    var getMiddlewareNameWithAliases = /* @__PURE__ */ __name((name, aliases) => {
      return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    }, "getMiddlewareNameWithAliases");
    var constructStack = /* @__PURE__ */ __name(() => {
      let absoluteEntries = [];
      let relativeEntries = [];
      let identifyOnResolve = false;
      const entriesNameSet = /* @__PURE__ */ new Set();
      const sort = /* @__PURE__ */ __name((entries) => entries.sort(
        (a, b) => stepWeights[b.step] - stepWeights[a.step] || priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]
      ), "sort");
      const removeByName = /* @__PURE__ */ __name((toRemove) => {
        let isRemoved = false;
        const filterCb = /* @__PURE__ */ __name((entry) => {
          const aliases = getAllAliases(entry.name, entry.aliases);
          if (aliases.includes(toRemove)) {
            isRemoved = true;
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        }, "filterCb");
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      }, "removeByName");
      const removeByReference = /* @__PURE__ */ __name((toRemove) => {
        let isRemoved = false;
        const filterCb = /* @__PURE__ */ __name((entry) => {
          if (entry.middleware === toRemove) {
            isRemoved = true;
            for (const alias of getAllAliases(entry.name, entry.aliases)) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        }, "filterCb");
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      }, "removeByReference");
      const cloneTo = /* @__PURE__ */ __name((toStack) => {
        var _a;
        absoluteEntries.forEach((entry) => {
          toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
          toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        (_a = toStack.identifyOnResolve) == null ? void 0 : _a.call(toStack, stack.identifyOnResolve());
        return toStack;
      }, "cloneTo");
      const expandRelativeMiddlewareList = /* @__PURE__ */ __name((from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        return expandedMiddlewareList;
      }, "expandRelativeMiddlewareList");
      const getMiddlewareList = /* @__PURE__ */ __name((debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
          if (entry.toMiddleware) {
            const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
            if (toMiddleware === void 0) {
              if (debug) {
                return;
              }
              throw new Error(
                `${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`
              );
            }
            if (entry.relation === "after") {
              toMiddleware.after.push(entry);
            }
            if (entry.relation === "before") {
              toMiddleware.before.push(entry);
            }
          }
        });
        const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
          wholeList.push(...expandedMiddlewareList);
          return wholeList;
        }, []);
        return mainChain;
      }, "getMiddlewareList");
      const stack = {
        add: (middleware, options = {}) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            step: "initialize",
            priority: "normal",
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = absoluteEntries.findIndex(
                  (entry2) => {
                    var _a;
                    return entry2.name === alias || ((_a = entry2.aliases) == null ? void 0 : _a.some((a) => a === alias));
                  }
                );
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = absoluteEntries[toOverrideIndex];
                if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                  throw new Error(
                    `"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`
                  );
                }
                absoluteEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = relativeEntries.findIndex(
                  (entry2) => {
                    var _a;
                    return entry2.name === alias || ((_a = entry2.aliases) == null ? void 0 : _a.some((a) => a === alias));
                  }
                );
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = relativeEntries[toOverrideIndex];
                if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                  throw new Error(
                    `"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`
                  );
                }
                relativeEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
          plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
          if (typeof toRemove === "string")
            return removeByName(toRemove);
          else
            return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
          let isRemoved = false;
          const filterCb = /* @__PURE__ */ __name((entry) => {
            const { tags, name, aliases: _aliases } = entry;
            if (tags && tags.includes(toRemove)) {
              const aliases = getAllAliases(name, _aliases);
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              isRemoved = true;
              return false;
            }
            return true;
          }, "filterCb");
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        },
        concat: (from) => {
          var _a;
          const cloned = cloneTo(constructStack());
          cloned.use(from);
          cloned.identifyOnResolve(
            identifyOnResolve || cloned.identifyOnResolve() || (((_a = from.identifyOnResolve) == null ? void 0 : _a.call(from)) ?? false)
          );
          return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
          return getMiddlewareList(true).map((mw) => {
            const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
            return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
          });
        },
        identifyOnResolve(toggle) {
          if (typeof toggle === "boolean")
            identifyOnResolve = toggle;
          return identifyOnResolve;
        },
        resolve: (handler, context) => {
          for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
            handler = middleware(handler, context);
          }
          if (identifyOnResolve) {
            console.log(stack.identify());
          }
          return handler;
        }
      };
      return stack;
    }, "constructStack");
    var stepWeights = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    };
    var priorityWeights = {
      high: 3,
      normal: 2,
      low: 1
    };
  }
});

// node_modules/.pnpm/@smithy+util-stream@2.2.0/node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js
var require_getAwsChunkedEncodingStream = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@2.2.0/node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAwsChunkedEncodingStream = void 0;
    var stream_1 = __require("stream");
    var getAwsChunkedEncodingStream2 = (readableStream, options) => {
      const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
      const checksumRequired = base64Encoder !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
      const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : void 0;
      const awsChunkedEncodingStream = new stream_1.Readable({ read: () => {
      } });
      readableStream.on("data", (data) => {
        const length = bodyLengthChecker(data) || 0;
        awsChunkedEncodingStream.push(`${length.toString(16)}\r
`);
        awsChunkedEncodingStream.push(data);
        awsChunkedEncodingStream.push("\r\n");
      });
      readableStream.on("end", async () => {
        awsChunkedEncodingStream.push(`0\r
`);
        if (checksumRequired) {
          const checksum = base64Encoder(await digest);
          awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r
`);
          awsChunkedEncodingStream.push(`\r
`);
        }
        awsChunkedEncodingStream.push(null);
      });
      return awsChunkedEncodingStream;
    };
    exports.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream2;
  }
});

// node_modules/.pnpm/@smithy+util-uri-escape@2.2.0/node_modules/@smithy/util-uri-escape/dist-cjs/index.js
var require_dist_cjs22 = __commonJS({
  "node_modules/.pnpm/@smithy+util-uri-escape@2.2.0/node_modules/@smithy/util-uri-escape/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      escapeUri: () => escapeUri,
      escapeUriPath: () => escapeUriPath
    });
    module.exports = __toCommonJS2(src_exports);
    var escapeUri = /* @__PURE__ */ __name((uri) => (
      // AWS percent-encodes some extra non-standard characters in a URI
      encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode)
    ), "escapeUri");
    var hexEncode = /* @__PURE__ */ __name((c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");
    var escapeUriPath = /* @__PURE__ */ __name((uri) => uri.split("/").map(escapeUri).join("/"), "escapeUriPath");
  }
});

// node_modules/.pnpm/@smithy+querystring-builder@2.2.0/node_modules/@smithy/querystring-builder/dist-cjs/index.js
var require_dist_cjs23 = __commonJS({
  "node_modules/.pnpm/@smithy+querystring-builder@2.2.0/node_modules/@smithy/querystring-builder/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      buildQueryString: () => buildQueryString
    });
    module.exports = __toCommonJS2(src_exports);
    var import_util_uri_escape = require_dist_cjs22();
    function buildQueryString(query) {
      const parts = [];
      for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = (0, import_util_uri_escape.escapeUri)(key);
        if (Array.isArray(value)) {
          for (let i = 0, iLen = value.length; i < iLen; i++) {
            parts.push(`${key}=${(0, import_util_uri_escape.escapeUri)(value[i])}`);
          }
        } else {
          let qsEntry = key;
          if (value || typeof value === "string") {
            qsEntry += `=${(0, import_util_uri_escape.escapeUri)(value)}`;
          }
          parts.push(qsEntry);
        }
      }
      return parts.join("&");
    }
    __name(buildQueryString, "buildQueryString");
  }
});

// node_modules/.pnpm/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-cjs/index.js
var require_dist_cjs24 = __commonJS({
  "node_modules/.pnpm/@smithy+node-http-handler@2.5.0/node_modules/@smithy/node-http-handler/dist-cjs/index.js"(exports, module) {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      DEFAULT_REQUEST_TIMEOUT: () => DEFAULT_REQUEST_TIMEOUT,
      NodeHttp2Handler: () => NodeHttp2Handler,
      NodeHttpHandler: () => NodeHttpHandler,
      streamCollector: () => streamCollector2
    });
    module.exports = __toCommonJS2(src_exports);
    var import_protocol_http2 = require_dist_cjs7();
    var import_querystring_builder = require_dist_cjs23();
    var import_http = __require("http");
    var import_https = __require("https");
    var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
    var getTransformedHeaders = /* @__PURE__ */ __name((headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    }, "getTransformedHeaders");
    var setConnectionTimeout = /* @__PURE__ */ __name((request, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return;
      }
      const timeoutId = setTimeout(() => {
        request.destroy();
        reject(
          Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
            name: "TimeoutError"
          })
        );
      }, timeoutInMs);
      request.on("socket", (socket) => {
        if (socket.connecting) {
          socket.on("connect", () => {
            clearTimeout(timeoutId);
          });
        } else {
          clearTimeout(timeoutId);
        }
      });
    }, "setConnectionTimeout");
    var setSocketKeepAlive = /* @__PURE__ */ __name((request, { keepAlive, keepAliveMsecs }) => {
      if (keepAlive !== true) {
        return;
      }
      request.on("socket", (socket) => {
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
      });
    }, "setSocketKeepAlive");
    var setSocketTimeout = /* @__PURE__ */ __name((request, reject, timeoutInMs = 0) => {
      request.setTimeout(timeoutInMs, () => {
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
      });
    }, "setSocketTimeout");
    var import_stream = __require("stream");
    var MIN_WAIT_TIME = 1e3;
    async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
      const headers = request.headers ?? {};
      const expect = headers["Expect"] || headers["expect"];
      let timeoutId = -1;
      let hasError = false;
      if (expect === "100-continue") {
        await Promise.race([
          new Promise((resolve) => {
            timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
          }),
          new Promise((resolve) => {
            httpRequest.on("continue", () => {
              clearTimeout(timeoutId);
              resolve();
            });
            httpRequest.on("error", () => {
              hasError = true;
              clearTimeout(timeoutId);
              resolve();
            });
          })
        ]);
      }
      if (!hasError) {
        writeBody(httpRequest, request.body);
      }
    }
    __name(writeRequestBody, "writeRequestBody");
    function writeBody(httpRequest, body) {
      if (body instanceof import_stream.Readable) {
        body.pipe(httpRequest);
        return;
      }
      if (body) {
        if (Buffer.isBuffer(body) || typeof body === "string") {
          httpRequest.end(body);
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
    __name(writeBody, "writeBody");
    var DEFAULT_REQUEST_TIMEOUT = 0;
    var _NodeHttpHandler = class _NodeHttpHandler2 {
      constructor(options) {
        this.socketWarningTimestamp = 0;
        this.metadata = { handlerProtocol: "http/1.1" };
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
      /**
       * @returns the input if it is an HttpHandler of any class,
       * or instantiates a new instance of this handler.
       */
      static create(instanceOrOptions) {
        if (typeof (instanceOrOptions == null ? void 0 : instanceOrOptions.handle) === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttpHandler2(instanceOrOptions);
      }
      /**
       * @internal
       *
       * @param agent - http(s) agent in use by the NodeHttpHandler instance.
       * @returns timestamp of last emitted warning.
       */
      static checkSocketUsage(agent, socketWarningTimestamp) {
        var _a, _b;
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
            const socketsInUse = ((_a = sockets[origin]) == null ? void 0 : _a.length) ?? 0;
            const requestsEnqueued = ((_b = requests[origin]) == null ? void 0 : _b.length) ?? 0;
            if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
              console.warn(
                "@smithy/node-http-handler:WARN",
                `socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.`,
                "See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html",
                "or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config."
              );
              return Date.now();
            }
          }
        }
        return socketWarningTimestamp;
      }
      resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
          connectionTimeout,
          requestTimeout: requestTimeout ?? socketTimeout,
          httpAgent: (() => {
            if (httpAgent instanceof import_http.Agent || typeof (httpAgent == null ? void 0 : httpAgent.destroy) === "function") {
              return httpAgent;
            }
            return new import_http.Agent({ keepAlive, maxSockets, ...httpAgent });
          })(),
          httpsAgent: (() => {
            if (httpsAgent instanceof import_https.Agent || typeof (httpsAgent == null ? void 0 : httpsAgent.destroy) === "function") {
              return httpsAgent;
            }
            return new import_https.Agent({ keepAlive, maxSockets, ...httpsAgent });
          })()
        };
      }
      destroy() {
        var _a, _b, _c, _d;
        (_b = (_a = this.config) == null ? void 0 : _a.httpAgent) == null ? void 0 : _b.destroy();
        (_d = (_c = this.config) == null ? void 0 : _c.httpsAgent) == null ? void 0 : _d.destroy();
      }
      async handle(request, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        let socketCheckTimeoutId;
        return new Promise((_resolve, _reject) => {
          let writeRequestBodyPromise = void 0;
          const resolve = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            clearTimeout(socketCheckTimeoutId);
            _resolve(arg);
          }, "resolve");
          const reject = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            _reject(arg);
          }, "reject");
          if (!this.config) {
            throw new Error("Node HTTP request handler config is not resolved");
          }
          if (abortSignal == null ? void 0 : abortSignal.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const isSSL = request.protocol === "https:";
          const agent = isSSL ? this.config.httpsAgent : this.config.httpAgent;
          socketCheckTimeoutId = setTimeout(() => {
            this.socketWarningTimestamp = _NodeHttpHandler2.checkSocketUsage(agent, this.socketWarningTimestamp);
          }, this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2e3) + (this.config.connectionTimeout ?? 1e3));
          const queryString = (0, import_querystring_builder.buildQueryString)(request.query || {});
          let auth = void 0;
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}`;
          }
          let path2 = request.path;
          if (queryString) {
            path2 += `?${queryString}`;
          }
          if (request.fragment) {
            path2 += `#${request.fragment}`;
          }
          const nodeHttpsOptions = {
            headers: request.headers,
            host: request.hostname,
            method: request.method,
            path: path2,
            port: request.port,
            agent,
            auth
          };
          const requestFunc = isSSL ? import_https.request : import_http.request;
          const req = requestFunc(nodeHttpsOptions, (res) => {
            const httpResponse = new import_protocol_http2.HttpResponse({
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
          setConnectionTimeout(req, reject, this.config.connectionTimeout);
          setSocketTimeout(req, reject, this.config.requestTimeout);
          if (abortSignal) {
            abortSignal.onabort = () => {
              req.abort();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              reject(abortError);
            };
          }
          const httpAgent = nodeHttpsOptions.agent;
          if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
            setSocketKeepAlive(req, {
              // @ts-expect-error keepAlive is not public on httpAgent.
              keepAlive: httpAgent.keepAlive,
              // @ts-expect-error keepAliveMsecs is not public on httpAgent.
              keepAliveMsecs: httpAgent.keepAliveMsecs
            });
          }
          writeRequestBodyPromise = writeRequestBody(req, request, this.config.requestTimeout).catch(_reject);
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
    };
    __name(_NodeHttpHandler, "NodeHttpHandler");
    var NodeHttpHandler = _NodeHttpHandler;
    var import_http22 = __require("http2");
    var import_http2 = __toESM2(__require("http2"));
    var _NodeHttp2ConnectionPool = class _NodeHttp2ConnectionPool {
      constructor(sessions) {
        this.sessions = [];
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
    __name(_NodeHttp2ConnectionPool, "NodeHttp2ConnectionPool");
    var NodeHttp2ConnectionPool = _NodeHttp2ConnectionPool;
    var _NodeHttp2ConnectionManager = class _NodeHttp2ConnectionManager {
      constructor(config) {
        this.sessionCache = /* @__PURE__ */ new Map();
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
          throw new RangeError("maxConcurrency must be greater than zero.");
        }
      }
      lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const existingPool = this.sessionCache.get(url);
        if (existingPool) {
          const existingSession = existingPool.poll();
          if (existingSession && !this.config.disableConcurrency) {
            return existingSession;
          }
        }
        const session = import_http2.default.connect(url);
        if (this.config.maxConcurrency) {
          session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
            if (err) {
              throw new Error(
                "Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + requestContext.destination.toString()
              );
            }
          });
        }
        session.unref();
        const destroySessionCb = /* @__PURE__ */ __name(() => {
          session.destroy();
          this.deleteSession(url, session);
        }, "destroySessionCb");
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
      /**
       * Delete a session from the connection pool.
       * @param authority The authority of the session to delete.
       * @param session The session to delete.
       */
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
        var _a;
        const cacheKey = this.getUrlString(requestContext);
        (_a = this.sessionCache.get(cacheKey)) == null ? void 0 : _a.offerLast(session);
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
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
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
    __name(_NodeHttp2ConnectionManager, "NodeHttp2ConnectionManager");
    var NodeHttp2ConnectionManager = _NodeHttp2ConnectionManager;
    var _NodeHttp2Handler = class _NodeHttp2Handler2 {
      constructor(options) {
        this.metadata = { handlerProtocol: "h2" };
        this.connectionManager = new NodeHttp2ConnectionManager({});
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
      /**
       * @returns the input if it is an HttpHandler of any class,
       * or instantiates a new instance of this handler.
       */
      static create(instanceOrOptions) {
        if (typeof (instanceOrOptions == null ? void 0 : instanceOrOptions.handle) === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttp2Handler2(instanceOrOptions);
      }
      destroy() {
        this.connectionManager.destroy();
      }
      async handle(request, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
          this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
          if (this.config.maxConcurrentStreams) {
            this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
          }
        }
        const { requestTimeout, disableConcurrentStreams } = this.config;
        return new Promise((_resolve, _reject) => {
          var _a;
          let fulfilled = false;
          let writeRequestBodyPromise = void 0;
          const resolve = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            _resolve(arg);
          }, "resolve");
          const reject = /* @__PURE__ */ __name(async (arg) => {
            await writeRequestBodyPromise;
            _reject(arg);
          }, "reject");
          if (abortSignal == null ? void 0 : abortSignal.aborted) {
            fulfilled = true;
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
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
            requestTimeout: (_a = this.config) == null ? void 0 : _a.sessionTimeout,
            disableConcurrentStreams: disableConcurrentStreams || false
          });
          const rejectWithDestroy = /* @__PURE__ */ __name((err) => {
            if (disableConcurrentStreams) {
              this.destroySession(session);
            }
            fulfilled = true;
            reject(err);
          }, "rejectWithDestroy");
          const queryString = (0, import_querystring_builder.buildQueryString)(query || {});
          let path2 = request.path;
          if (queryString) {
            path2 += `?${queryString}`;
          }
          if (request.fragment) {
            path2 += `#${request.fragment}`;
          }
          const req = session.request({
            ...request.headers,
            [import_http22.constants.HTTP2_HEADER_PATH]: path2,
            [import_http22.constants.HTTP2_HEADER_METHOD]: method
          });
          session.ref();
          req.on("response", (headers) => {
            const httpResponse = new import_protocol_http2.HttpResponse({
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
          if (requestTimeout) {
            req.setTimeout(requestTimeout, () => {
              req.close();
              const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
              timeoutError.name = "TimeoutError";
              rejectWithDestroy(timeoutError);
            });
          }
          if (abortSignal) {
            abortSignal.onabort = () => {
              req.close();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              rejectWithDestroy(abortError);
            };
          }
          req.on("frameError", (type, code, id) => {
            rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
          });
          req.on("error", rejectWithDestroy);
          req.on("aborted", () => {
            rejectWithDestroy(
              new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`)
            );
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
          writeRequestBodyPromise = writeRequestBody(req, request, requestTimeout);
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
      /**
       * Destroys a session.
       * @param session The session to destroy.
       */
      destroySession(session) {
        if (!session.destroyed) {
          session.destroy();
        }
      }
    };
    __name(_NodeHttp2Handler, "NodeHttp2Handler");
    var NodeHttp2Handler = _NodeHttp2Handler;
    var _Collector = class _Collector extends import_stream.Writable {
      constructor() {
        super(...arguments);
        this.bufferedBytes = [];
      }
      _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
      }
    };
    __name(_Collector, "Collector");
    var Collector = _Collector;
    var streamCollector2 = /* @__PURE__ */ __name((stream) => new Promise((resolve, reject) => {
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
    }), "streamCollector");
  }
});

// node_modules/.pnpm/@smithy+util-stream@2.2.0/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js
var require_sdk_stream_mixin = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@2.2.0/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sdkStreamMixin = void 0;
    var node_http_handler_1 = require_dist_cjs24();
    var util_buffer_from_1 = require_dist_cjs2();
    var stream_1 = __require("stream");
    var util_1 = __require("util");
    var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    var sdkStreamMixin2 = (stream) => {
      var _a, _b;
      if (!(stream instanceof stream_1.Readable)) {
        const name = ((_b = (_a = stream === null || stream === void 0 ? void 0 : stream.__proto__) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) || stream;
        throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, node_http_handler_1.streamCollector)(stream);
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === void 0 || Buffer.isEncoding(encoding)) {
            return (0, util_buffer_from_1.fromArrayBuffer)(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
          } else {
            const decoder = new util_1.TextDecoder(encoding);
            return decoder.decode(buf);
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          if (stream.readableFlowing !== null) {
            throw new Error("The stream has been consumed by other callbacks.");
          }
          if (typeof stream_1.Readable.toWeb !== "function") {
            throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
          }
          transformed = true;
          return stream_1.Readable.toWeb(stream);
        }
      });
    };
    exports.sdkStreamMixin = sdkStreamMixin2;
  }
});

// node_modules/.pnpm/@smithy+util-stream@2.2.0/node_modules/@smithy/util-stream/dist-cjs/index.js
var require_dist_cjs25 = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@2.2.0/node_modules/@smithy/util-stream/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
    var __toCommonJS2 = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Uint8ArrayBlobAdapter: () => Uint8ArrayBlobAdapter
    });
    module.exports = __toCommonJS2(src_exports);
    var import_util_base642 = require_dist_cjs20();
    var import_util_utf8 = require_dist_cjs3();
    function transformToString(payload, encoding = "utf-8") {
      if (encoding === "base64") {
        return (0, import_util_base642.toBase64)(payload);
      }
      return (0, import_util_utf8.toUtf8)(payload);
    }
    __name(transformToString, "transformToString");
    function transformFromString(str, encoding) {
      if (encoding === "base64") {
        return Uint8ArrayBlobAdapter.mutate((0, import_util_base642.fromBase64)(str));
      }
      return Uint8ArrayBlobAdapter.mutate((0, import_util_utf8.fromUtf8)(str));
    }
    __name(transformFromString, "transformFromString");
    var _Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter2 extends Uint8Array {
      /**
       * @param source - such as a string or Stream.
       * @returns a new Uint8ArrayBlobAdapter extending Uint8Array.
       */
      static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
          case "string":
            return transformFromString(source, encoding);
          default:
            throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
      }
      /**
       * @param source - Uint8Array to be mutated.
       * @returns the same Uint8Array but with prototype switched to Uint8ArrayBlobAdapter.
       */
      static mutate(source) {
        Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter2.prototype);
        return source;
      }
      /**
       * @param encoding - default 'utf-8'.
       * @returns the blob as string.
       */
      transformToString(encoding = "utf-8") {
        return transformToString(this, encoding);
      }
    };
    __name(_Uint8ArrayBlobAdapter, "Uint8ArrayBlobAdapter");
    var Uint8ArrayBlobAdapter = _Uint8ArrayBlobAdapter;
    __reExport(src_exports, require_getAwsChunkedEncodingStream(), module.exports);
    __reExport(src_exports, require_sdk_stream_mixin(), module.exports);
  }
});

// node_modules/.pnpm/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-cjs/index.js
var require_dist_cjs26 = __commonJS({
  "node_modules/.pnpm/@smithy+smithy-client@2.5.1/node_modules/@smithy/smithy-client/dist-cjs/index.js"(exports, module) {
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __export2 = (target, all) => {
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
    __export2(src_exports, {
      Client: () => Client,
      Command: () => Command,
      LazyJsonString: () => LazyJsonString,
      NoOpLogger: () => NoOpLogger,
      SENSITIVE_STRING: () => SENSITIVE_STRING,
      ServiceException: () => ServiceException,
      StringWrapper: () => StringWrapper,
      _json: () => _json,
      collectBody: () => collectBody2,
      convertMap: () => convertMap,
      createAggregatedClient: () => createAggregatedClient,
      dateToUtcString: () => dateToUtcString,
      decorateServiceException: () => decorateServiceException,
      emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion,
      expectBoolean: () => expectBoolean,
      expectByte: () => expectByte,
      expectFloat32: () => expectFloat32,
      expectInt: () => expectInt,
      expectInt32: () => expectInt32,
      expectLong: () => expectLong,
      expectNonNull: () => expectNonNull,
      expectNumber: () => expectNumber,
      expectObject: () => expectObject,
      expectShort: () => expectShort,
      expectString: () => expectString,
      expectUnion: () => expectUnion,
      extendedEncodeURIComponent: () => extendedEncodeURIComponent,
      getArrayIfSingleItem: () => getArrayIfSingleItem,
      getDefaultClientConfiguration: () => getDefaultClientConfiguration,
      getDefaultExtensionConfiguration: () => getDefaultExtensionConfiguration,
      getValueFromTextNode: () => getValueFromTextNode,
      handleFloat: () => handleFloat,
      limitedParseDouble: () => limitedParseDouble,
      limitedParseFloat: () => limitedParseFloat,
      limitedParseFloat32: () => limitedParseFloat32,
      loadConfigsForDefaultMode: () => loadConfigsForDefaultMode,
      logger: () => logger,
      map: () => map2,
      parseBoolean: () => parseBoolean,
      parseEpochTimestamp: () => parseEpochTimestamp,
      parseRfc3339DateTime: () => parseRfc3339DateTime,
      parseRfc3339DateTimeWithOffset: () => parseRfc3339DateTimeWithOffset,
      parseRfc7231DateTime: () => parseRfc7231DateTime,
      resolveDefaultRuntimeConfig: () => resolveDefaultRuntimeConfig,
      resolvedPath: () => resolvedPath,
      serializeFloat: () => serializeFloat,
      splitEvery: () => splitEvery,
      strictParseByte: () => strictParseByte,
      strictParseDouble: () => strictParseDouble,
      strictParseFloat: () => strictParseFloat,
      strictParseFloat32: () => strictParseFloat32,
      strictParseInt: () => strictParseInt,
      strictParseInt32: () => strictParseInt32,
      strictParseLong: () => strictParseLong,
      strictParseShort: () => strictParseShort,
      take: () => take2,
      throwDefaultError: () => throwDefaultError,
      withBaseException: () => withBaseException
    });
    module.exports = __toCommonJS2(src_exports);
    var _NoOpLogger = class _NoOpLogger {
      trace() {
      }
      debug() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
    };
    __name(_NoOpLogger, "NoOpLogger");
    var NoOpLogger = _NoOpLogger;
    var import_middleware_stack = require_dist_cjs21();
    var _Client = class _Client {
      constructor(config) {
        this.middlewareStack = (0, import_middleware_stack.constructStack)();
        this.config = config;
      }
      send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
          handler(command).then(
            (result) => callback(null, result.output),
            (err) => callback(err)
          ).catch(
            // prevent any errors thrown in the callback from triggering an
            // unhandled promise rejection
            () => {
            }
          );
        } else {
          return handler(command).then((result) => result.output);
        }
      }
      destroy() {
        if (this.config.requestHandler.destroy)
          this.config.requestHandler.destroy();
      }
    };
    __name(_Client, "Client");
    var Client = _Client;
    var import_util_stream = require_dist_cjs25();
    var collectBody2 = /* @__PURE__ */ __name(async (streamBody = new Uint8Array(), context) => {
      if (streamBody instanceof Uint8Array) {
        return import_util_stream.Uint8ArrayBlobAdapter.mutate(streamBody);
      }
      if (!streamBody) {
        return import_util_stream.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      }
      const fromContext = context.streamCollector(streamBody);
      return import_util_stream.Uint8ArrayBlobAdapter.mutate(await fromContext);
    }, "collectBody");
    var import_types = require_dist_cjs6();
    var _Command = class _Command {
      constructor() {
        this.middlewareStack = (0, import_middleware_stack.constructStack)();
      }
      /**
       * Factory for Command ClassBuilder.
       * @internal
       */
      static classBuilder() {
        return new ClassBuilder();
      }
      /**
       * @internal
       */
      resolveMiddlewareWithContext(clientStack, configuration, options, {
        middlewareFn,
        clientName,
        commandName,
        inputFilterSensitiveLog,
        outputFilterSensitiveLog,
        smithyContext,
        additionalContext,
        CommandCtor
      }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
          this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger: logger2 } = configuration;
        const handlerExecutionContext = {
          logger: logger2,
          clientName,
          commandName,
          inputFilterSensitiveLog,
          outputFilterSensitiveLog,
          [import_types.SMITHY_CONTEXT_KEY]: {
            ...smithyContext
          },
          ...additionalContext
        };
        const { requestHandler } = configuration;
        return stack.resolve(
          (request) => requestHandler.handle(request.request, options || {}),
          handlerExecutionContext
        );
      }
    };
    __name(_Command, "Command");
    var Command = _Command;
    var _ClassBuilder = class _ClassBuilder {
      constructor() {
        this._init = () => {
        };
        this._ep = {};
        this._middlewareFn = () => [];
        this._commandName = "";
        this._clientName = "";
        this._additionalContext = {};
        this._smithyContext = {};
        this._inputFilterSensitiveLog = (_) => _;
        this._outputFilterSensitiveLog = (_) => _;
        this._serializer = null;
        this._deserializer = null;
      }
      /**
       * Optional init callback.
       */
      init(cb) {
        this._init = cb;
      }
      /**
       * Set the endpoint parameter instructions.
       */
      ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
      }
      /**
       * Add any number of middleware.
       */
      m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
      }
      /**
       * Set the initial handler execution context Smithy field.
       */
      s(service, operation, smithyContext = {}) {
        this._smithyContext = {
          service,
          operation,
          ...smithyContext
        };
        return this;
      }
      /**
       * Set the initial handler execution context.
       */
      c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
      }
      /**
       * Set constant string identifiers for the operation.
       */
      n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
      }
      /**
       * Set the input and output sensistive log filters.
       */
      f(inputFilter = (_) => _, outputFilter = (_) => _) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
      }
      /**
       * Sets the serializer.
       */
      ser(serializer) {
        this._serializer = serializer;
        return this;
      }
      /**
       * Sets the deserializer.
       */
      de(deserializer) {
        this._deserializer = deserializer;
        return this;
      }
      /**
       * @returns a Command class with the classBuilder properties.
       */
      build() {
        var _a;
        const closure = this;
        let CommandRef;
        return CommandRef = (_a = class extends Command {
          /**
           * @public
           */
          constructor(...[input]) {
            super();
            this.serialize = closure._serializer;
            this.deserialize = closure._deserializer;
            this.input = input ?? {};
            closure._init(this);
          }
          /**
           * @public
           */
          static getEndpointParameterInstructions() {
            return closure._ep;
          }
          /**
           * @internal
           */
          resolveMiddleware(stack, configuration, options) {
            return this.resolveMiddlewareWithContext(stack, configuration, options, {
              CommandCtor: CommandRef,
              middlewareFn: closure._middlewareFn,
              clientName: closure._clientName,
              commandName: closure._commandName,
              inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
              outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
              smithyContext: closure._smithyContext,
              additionalContext: closure._additionalContext
            });
          }
        }, __name(_a, "CommandRef"), _a);
      }
    };
    __name(_ClassBuilder, "ClassBuilder");
    var ClassBuilder = _ClassBuilder;
    var SENSITIVE_STRING = "***SensitiveInformation***";
    var createAggregatedClient = /* @__PURE__ */ __name((commands, Client2) => {
      for (const command of Object.keys(commands)) {
        const CommandCtor = commands[command];
        const methodImpl = /* @__PURE__ */ __name(async function(args, optionsOrCb, cb) {
          const command2 = new CommandCtor(args);
          if (typeof optionsOrCb === "function") {
            this.send(command2, optionsOrCb);
          } else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
              throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
            this.send(command2, optionsOrCb || {}, cb);
          } else {
            return this.send(command2, optionsOrCb);
          }
        }, "methodImpl");
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client2.prototype[methodName] = methodImpl;
      }
    }, "createAggregatedClient");
    var parseBoolean = /* @__PURE__ */ __name((value) => {
      switch (value) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          throw new Error(`Unable to parse boolean value "${value}"`);
      }
    }, "parseBoolean");
    var expectBoolean = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "number") {
        if (value === 0 || value === 1) {
          logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
          return false;
        }
        if (value === 1) {
          return true;
        }
      }
      if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
          logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
          return false;
        }
        if (lower === "true") {
          return true;
        }
      }
      if (typeof value === "boolean") {
        return value;
      }
      throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
    }, "expectBoolean");
    var expectNumber = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          if (String(parsed) !== String(value)) {
            logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
          }
          return parsed;
        }
      }
      if (typeof value === "number") {
        return value;
      }
      throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
    }, "expectNumber");
    var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    var expectFloat32 = /* @__PURE__ */ __name((value) => {
      const expected = expectNumber(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    }, "expectFloat32");
    var expectLong = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    }, "expectLong");
    var expectInt = expectLong;
    var expectInt32 = /* @__PURE__ */ __name((value) => expectSizedInt(value, 32), "expectInt32");
    var expectShort = /* @__PURE__ */ __name((value) => expectSizedInt(value, 16), "expectShort");
    var expectByte = /* @__PURE__ */ __name((value) => expectSizedInt(value, 8), "expectByte");
    var expectSizedInt = /* @__PURE__ */ __name((value, size) => {
      const expected = expectLong(value);
      if (expected !== void 0 && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    }, "expectSizedInt");
    var castInt = /* @__PURE__ */ __name((value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    }, "castInt");
    var expectNonNull = /* @__PURE__ */ __name((value, location) => {
      if (value === null || value === void 0) {
        if (location) {
          throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
      }
      return value;
    }, "expectNonNull");
    var expectObject = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        return value;
      }
      const receivedType = Array.isArray(value) ? "array" : typeof value;
      throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
    }, "expectObject");
    var expectString = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        return value;
      }
      if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
      }
      throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
    }, "expectString");
    var expectUnion = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      const asObject = expectObject(value);
      const setKeys = Object.entries(asObject).filter(([, v]) => v != null).map(([k]) => k);
      if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
      }
      if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
      }
      return asObject;
    }, "expectUnion");
    var strictParseDouble = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return expectNumber(parseNumber(value));
      }
      return expectNumber(value);
    }, "strictParseDouble");
    var strictParseFloat = strictParseDouble;
    var strictParseFloat32 = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
      }
      return expectFloat32(value);
    }, "strictParseFloat32");
    var NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    var parseNumber = /* @__PURE__ */ __name((value) => {
      const matches = value.match(NUMBER_REGEX);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    }, "parseNumber");
    var limitedParseDouble = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectNumber(value);
    }, "limitedParseDouble");
    var handleFloat = limitedParseDouble;
    var limitedParseFloat = limitedParseDouble;
    var limitedParseFloat32 = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectFloat32(value);
    }, "limitedParseFloat32");
    var parseFloatString = /* @__PURE__ */ __name((value) => {
      switch (value) {
        case "NaN":
          return NaN;
        case "Infinity":
          return Infinity;
        case "-Infinity":
          return -Infinity;
        default:
          throw new Error(`Unable to parse float value: ${value}`);
      }
    }, "parseFloatString");
    var strictParseLong = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectLong(parseNumber(value));
      }
      return expectLong(value);
    }, "strictParseLong");
    var strictParseInt = strictParseLong;
    var strictParseInt32 = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectInt32(parseNumber(value));
      }
      return expectInt32(value);
    }, "strictParseInt32");
    var strictParseShort = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectShort(parseNumber(value));
      }
      return expectShort(value);
    }, "strictParseShort");
    var strictParseByte = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectByte(parseNumber(value));
      }
      return expectByte(value);
    }, "strictParseByte");
    var stackTraceWarning = /* @__PURE__ */ __name((message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s) => !s.includes("stackTraceWarning")).join("\n");
    }, "stackTraceWarning");
    var logger = {
      warn: console.warn
    };
    var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function dateToUtcString(date) {
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth();
      const dayOfWeek = date.getUTCDay();
      const dayOfMonthInt = date.getUTCDate();
      const hoursInt = date.getUTCHours();
      const minutesInt = date.getUTCMinutes();
      const secondsInt = date.getUTCSeconds();
      const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
      const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
      const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
      const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
      return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
    }
    __name(dateToUtcString, "dateToUtcString");
    var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    var parseRfc3339DateTime = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      const year = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    }, "parseRfc3339DateTime");
    var RFC3339_WITH_OFFSET = new RegExp(
      /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/
    );
    var parseRfc3339DateTimeWithOffset = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339_WITH_OFFSET.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
      const year = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
      if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
      }
      return date;
    }, "parseRfc3339DateTimeWithOffset");
    var IMF_FIXDATE = new RegExp(
      /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
    );
    var RFC_850_DATE = new RegExp(
      /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
    );
    var ASC_TIME = new RegExp(
      /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/
    );
    var parseRfc7231DateTime = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
      }
      let match = IMF_FIXDATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(
          strictParseShort(stripLeadingZeroes(yearStr)),
          parseMonthByShortName(monthStr),
          parseDateValue(dayStr, "day", 1, 31),
          { hours, minutes, seconds, fractionalMilliseconds }
        );
      }
      match = RFC_850_DATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(
          buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds
          })
        );
      }
      match = ASC_TIME.exec(value);
      if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(
          strictParseShort(stripLeadingZeroes(yearStr)),
          parseMonthByShortName(monthStr),
          parseDateValue(dayStr.trimLeft(), "day", 1, 31),
          { hours, minutes, seconds, fractionalMilliseconds }
        );
      }
      throw new TypeError("Invalid RFC-7231 date-time value");
    }, "parseRfc7231DateTime");
    var parseEpochTimestamp = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      let valueAsDouble;
      if (typeof value === "number") {
        valueAsDouble = value;
      } else if (typeof value === "string") {
        valueAsDouble = strictParseDouble(value);
      } else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
      }
      if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      }
      return new Date(Math.round(valueAsDouble * 1e3));
    }, "parseEpochTimestamp");
    var buildDate = /* @__PURE__ */ __name((year, month, day, time) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth(year, adjustedMonth, day);
      return new Date(
        Date.UTC(
          year,
          adjustedMonth,
          day,
          parseDateValue(time.hours, "hour", 0, 23),
          parseDateValue(time.minutes, "minute", 0, 59),
          // seconds can go up to 60 for leap seconds
          parseDateValue(time.seconds, "seconds", 0, 60),
          parseMilliseconds(time.fractionalMilliseconds)
        )
      );
    }, "buildDate");
    var parseTwoDigitYear = /* @__PURE__ */ __name((value) => {
      const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
      const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
      if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
      }
      return valueInThisCentury;
    }, "parseTwoDigitYear");
    var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    var adjustRfc850Year = /* @__PURE__ */ __name((input) => {
      if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(
          Date.UTC(
            input.getUTCFullYear() - 100,
            input.getUTCMonth(),
            input.getUTCDate(),
            input.getUTCHours(),
            input.getUTCMinutes(),
            input.getUTCSeconds(),
            input.getUTCMilliseconds()
          )
        );
      }
      return input;
    }, "adjustRfc850Year");
    var parseMonthByShortName = /* @__PURE__ */ __name((value) => {
      const monthIdx = MONTHS.indexOf(value);
      if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
      }
      return monthIdx + 1;
    }, "parseMonthByShortName");
    var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var validateDayOfMonth = /* @__PURE__ */ __name((year, month, day) => {
      let maxDays = DAYS_IN_MONTH[month];
      if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
      }
    }, "validateDayOfMonth");
    var isLeapYear = /* @__PURE__ */ __name((year) => {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }, "isLeapYear");
    var parseDateValue = /* @__PURE__ */ __name((value, type, lower, upper) => {
      const dateVal = strictParseByte(stripLeadingZeroes(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    }, "parseDateValue");
    var parseMilliseconds = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return strictParseFloat32("0." + value) * 1e3;
    }, "parseMilliseconds");
    var parseOffsetToMilliseconds = /* @__PURE__ */ __name((value) => {
      const directionStr = value[0];
      let direction = 1;
      if (directionStr == "+") {
        direction = 1;
      } else if (directionStr == "-") {
        direction = -1;
      } else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
      }
      const hour = Number(value.substring(1, 3));
      const minute = Number(value.substring(4, 6));
      return direction * (hour * 60 + minute) * 60 * 1e3;
    }, "parseOffsetToMilliseconds");
    var stripLeadingZeroes = /* @__PURE__ */ __name((value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    }, "stripLeadingZeroes");
    var _ServiceException = class _ServiceException2 extends Error {
      constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, _ServiceException2.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
      }
    };
    __name(_ServiceException, "ServiceException");
    var ServiceException = _ServiceException;
    var decorateServiceException = /* @__PURE__ */ __name((exception, additions = {}) => {
      Object.entries(additions).filter(([, v]) => v !== void 0).forEach(([k, v]) => {
        if (exception[k] == void 0 || exception[k] === "") {
          exception[k] = v;
        }
      });
      const message = exception.message || exception.Message || "UnknownError";
      exception.message = message;
      delete exception.Message;
      return exception;
    }, "decorateServiceException");
    var throwDefaultError = /* @__PURE__ */ __name(({ output, parsedBody, exceptionCtor, errorCode }) => {
      const $metadata = deserializeMetadata2(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
      const response = new exceptionCtor({
        name: (parsedBody == null ? void 0 : parsedBody.code) || (parsedBody == null ? void 0 : parsedBody.Code) || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata
      });
      throw decorateServiceException(response, parsedBody);
    }, "throwDefaultError");
    var withBaseException = /* @__PURE__ */ __name((ExceptionCtor) => {
      return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
      };
    }, "withBaseException");
    var deserializeMetadata2 = /* @__PURE__ */ __name((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    var loadConfigsForDefaultMode = /* @__PURE__ */ __name((mode) => {
      switch (mode) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 3e4
          };
        default:
          return {};
      }
    }, "loadConfigsForDefaultMode");
    var warningEmitted = false;
    var emitWarningIfUnsupportedVersion = /* @__PURE__ */ __name((version) => {
      if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
        warningEmitted = true;
      }
    }, "emitWarningIfUnsupportedVersion");
    var getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const checksumAlgorithms = [];
      for (const id in import_types.AlgorithmId) {
        const algorithmId = import_types.AlgorithmId[id];
        if (runtimeConfig[algorithmId] === void 0) {
          continue;
        }
        checksumAlgorithms.push({
          algorithmId: () => algorithmId,
          checksumConstructor: () => runtimeConfig[algorithmId]
        });
      }
      return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
          this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration");
    var resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    }, "resolveChecksumRuntimeConfig");
    var getRetryConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      let _retryStrategy = runtimeConfig.retryStrategy;
      return {
        setRetryStrategy(retryStrategy) {
          _retryStrategy = retryStrategy;
        },
        retryStrategy() {
          return _retryStrategy;
        }
      };
    }, "getRetryConfiguration");
    var resolveRetryRuntimeConfig = /* @__PURE__ */ __name((retryStrategyConfiguration) => {
      const runtimeConfig = {};
      runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
      return runtimeConfig;
    }, "resolveRetryRuntimeConfig");
    var getDefaultExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      return {
        ...getChecksumConfiguration(runtimeConfig),
        ...getRetryConfiguration(runtimeConfig)
      };
    }, "getDefaultExtensionConfiguration");
    var getDefaultClientConfiguration = getDefaultExtensionConfiguration;
    var resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        ...resolveChecksumRuntimeConfig(config),
        ...resolveRetryRuntimeConfig(config)
      };
    }, "resolveDefaultRuntimeConfig");
    function extendedEncodeURIComponent(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    __name(extendedEncodeURIComponent, "extendedEncodeURIComponent");
    var getArrayIfSingleItem = /* @__PURE__ */ __name((mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray], "getArrayIfSingleItem");
    var getValueFromTextNode = /* @__PURE__ */ __name((obj) => {
      const textNodeName = "#text";
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
          obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = getValueFromTextNode(obj[key]);
        }
      }
      return obj;
    }, "getValueFromTextNode");
    var StringWrapper = /* @__PURE__ */ __name(function() {
      const Class = Object.getPrototypeOf(this).constructor;
      const Constructor = Function.bind.apply(String, [null, ...arguments]);
      const instance = new Constructor();
      Object.setPrototypeOf(instance, Class.prototype);
      return instance;
    }, "StringWrapper");
    StringWrapper.prototype = Object.create(String.prototype, {
      constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    Object.setPrototypeOf(StringWrapper, String);
    var _LazyJsonString = class _LazyJsonString2 extends StringWrapper {
      deserializeJSON() {
        return JSON.parse(super.toString());
      }
      toJSON() {
        return super.toString();
      }
      static fromObject(object) {
        if (object instanceof _LazyJsonString2) {
          return object;
        } else if (object instanceof String || typeof object === "string") {
          return new _LazyJsonString2(object);
        }
        return new _LazyJsonString2(JSON.stringify(object));
      }
    };
    __name(_LazyJsonString, "LazyJsonString");
    var LazyJsonString = _LazyJsonString;
    function map2(arg0, arg1, arg2) {
      let target;
      let filter;
      let instructions;
      if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
      } else {
        target = arg0;
        if (typeof arg1 === "function") {
          filter = arg1;
          instructions = arg2;
          return mapWithFilter(target, filter, instructions);
        } else {
          instructions = arg1;
        }
      }
      for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
          target[key] = instructions[key];
          continue;
        }
        applyInstruction(target, null, instructions, key);
      }
      return target;
    }
    __name(map2, "map");
    var convertMap = /* @__PURE__ */ __name((target) => {
      const output = {};
      for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
      }
      return output;
    }, "convertMap");
    var take2 = /* @__PURE__ */ __name((source, instructions) => {
      const out = {};
      for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
      }
      return out;
    }, "take");
    var mapWithFilter = /* @__PURE__ */ __name((target, filter, instructions) => {
      return map2(
        target,
        Object.entries(instructions).reduce(
          (_instructions, [key, value]) => {
            if (Array.isArray(value)) {
              _instructions[key] = value;
            } else {
              if (typeof value === "function") {
                _instructions[key] = [filter, value()];
              } else {
                _instructions[key] = [filter, value];
              }
            }
            return _instructions;
          },
          {}
        )
      );
    }, "mapWithFilter");
    var applyInstruction = /* @__PURE__ */ __name((target, source, instructions, targetKey) => {
      if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
          instruction = [, instruction];
        }
        const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
          target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
      }
      let [filter, value] = instructions[targetKey];
      if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
        const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed) {
          target[targetKey] = _value;
        } else if (customFilterPassed) {
          target[targetKey] = value();
        }
      } else {
        const defaultFilterPassed = filter === void 0 && value != null;
        const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed || customFilterPassed) {
          target[targetKey] = value;
        }
      }
    }, "applyInstruction");
    var nonNullish = /* @__PURE__ */ __name((_) => _ != null, "nonNullish");
    var pass = /* @__PURE__ */ __name((_) => _, "pass");
    var resolvedPath = /* @__PURE__ */ __name((resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
      if (input != null && input[memberName] !== void 0) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
          throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath2 = resolvedPath2.replace(
          uriLabel,
          isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue)
        );
      } else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
      }
      return resolvedPath2;
    }, "resolvedPath");
    var serializeFloat = /* @__PURE__ */ __name((value) => {
      if (value !== value) {
        return "NaN";
      }
      switch (value) {
        case Infinity:
          return "Infinity";
        case -Infinity:
          return "-Infinity";
        default:
          return value;
      }
    }, "serializeFloat");
    var _json = /* @__PURE__ */ __name((obj) => {
      if (obj == null) {
        return {};
      }
      if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null).map(_json);
      }
      if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
          if (obj[key] == null) {
            continue;
          }
          target[key] = _json(obj[key]);
        }
        return target;
      }
      return obj;
    }, "_json");
    function splitEvery(value, delimiter, numDelimiters) {
      if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
        throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
      }
      const segments = value.split(delimiter);
      if (numDelimiters === 1) {
        return segments;
      }
      const compoundSegments = [];
      let currentSegment = "";
      for (let i = 0; i < segments.length; i++) {
        if (currentSegment === "") {
          currentSegment = segments[i];
        } else {
          currentSegment += delimiter + segments[i];
        }
        if ((i + 1) % numDelimiters === 0) {
          compoundSegments.push(currentSegment);
          currentSegment = "";
        }
      }
      if (currentSegment !== "") {
        compoundSegments.push(currentSegment);
      }
      return compoundSegments;
    }
    __name(splitEvery, "splitEvery");
  }
});

// node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/AWS_restJson1.mjs
var import_smithy_client, import_client_bedrock_runtime, de_InternalServerExceptionRes, de_ModelStreamErrorExceptionRes, de_ThrottlingExceptionRes, de_ValidationExceptionRes, de_ResponseStream, de_InternalServerException_event, de_ModelStreamErrorException_event, de_PayloadPart_event, de_ThrottlingException_event, de_ValidationException_event, de_PayloadPart, deserializeMetadata, collectBodyString, parseBody;
var init_AWS_restJson1 = __esm({
  "node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/AWS_restJson1.mjs"() {
    import_smithy_client = __toESM(require_dist_cjs26(), 1);
    import_client_bedrock_runtime = __toESM(require_dist_cjs4(), 1);
    de_InternalServerExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        message: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new import_client_bedrock_runtime.InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    };
    de_ModelStreamErrorExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        message: import_smithy_client.expectString,
        originalMessage: import_smithy_client.expectString,
        originalStatusCode: import_smithy_client.expectInt32
      });
      Object.assign(contents, doc);
      const exception = new import_client_bedrock_runtime.ModelStreamErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    };
    de_ThrottlingExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        message: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new import_client_bedrock_runtime.ThrottlingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    };
    de_ValidationExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client.take)(data, {
        message: import_smithy_client.expectString
      });
      Object.assign(contents, doc);
      const exception = new import_client_bedrock_runtime.ValidationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
    };
    de_ResponseStream = (output, context) => {
      return context.eventStreamMarshaller.deserialize(output, async (event) => {
        if (event["chunk"] != null) {
          return {
            chunk: await de_PayloadPart_event(event["chunk"], context)
          };
        }
        if (event["internalServerException"] != null) {
          return {
            internalServerException: await de_InternalServerException_event(event["internalServerException"], context)
          };
        }
        if (event["modelStreamErrorException"] != null) {
          return {
            modelStreamErrorException: await de_ModelStreamErrorException_event(event["modelStreamErrorException"], context)
          };
        }
        if (event["validationException"] != null) {
          return {
            validationException: await de_ValidationException_event(event["validationException"], context)
          };
        }
        if (event["throttlingException"] != null) {
          return {
            throttlingException: await de_ThrottlingException_event(event["throttlingException"], context)
          };
        }
        return { $unknown: output };
      });
    };
    de_InternalServerException_event = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context)
      };
      return de_InternalServerExceptionRes(parsedOutput, context);
    };
    de_ModelStreamErrorException_event = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context)
      };
      return de_ModelStreamErrorExceptionRes(parsedOutput, context);
    };
    de_PayloadPart_event = async (output, context) => {
      const contents = {};
      const data = await parseBody(output.body, context);
      Object.assign(contents, de_PayloadPart(data, context));
      return contents;
    };
    de_ThrottlingException_event = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context)
      };
      return de_ThrottlingExceptionRes(parsedOutput, context);
    };
    de_ValidationException_event = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context)
      };
      return de_ValidationExceptionRes(parsedOutput, context);
    };
    de_PayloadPart = (output, context) => {
      return (0, import_smithy_client.take)(output, {
        bytes: context.base64Decoder
      });
    };
    deserializeMetadata = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"] ?? "",
      extendedRequestId: output.headers["x-amz-id-2"] ?? "",
      cfId: output.headers["x-amz-cf-id"] ?? ""
    });
    collectBodyString = (streamBody, context) => (0, import_smithy_client.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
    parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        return JSON.parse(encoded);
      }
      return {};
    });
  }
});

// node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/internal/shims.mjs
function ReadableStreamToAsyncIterable(stream) {
  if (stream[Symbol.asyncIterator])
    return stream;
  const reader = stream.getReader();
  return {
    async next() {
      try {
        const result = await reader.read();
        if (result?.done)
          reader.releaseLock();
        return result;
      } catch (e) {
        reader.releaseLock();
        throw e;
      }
    },
    async return() {
      const cancelPromise = reader.cancel();
      reader.releaseLock();
      await cancelPromise;
      return { done: true, value: void 0 };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
var init_shims = __esm({
  "node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/internal/shims.mjs"() {
  }
});

// node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/core/error.mjs
var init_error3 = __esm({
  "node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/core/error.mjs"() {
    init_error();
  }
});

// node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/internal/utils/values.mjs
function isObj(obj) {
  return obj != null && typeof obj === "object" && !Array.isArray(obj);
}
var isArray, isReadonlyArray, safeJSON;
var init_values = __esm({
  "node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/internal/utils/values.mjs"() {
    init_error3();
    isArray = (val) => (isArray = Array.isArray, isArray(val));
    isReadonlyArray = isArray;
    safeJSON = (text) => {
      try {
        return JSON.parse(text);
      } catch (err) {
        return void 0;
      }
    };
  }
});

// node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/internal/utils/log.mjs
function noop() {
}
function makeLogFn(fnLevel, logger, logLevel) {
  if (!logger || levelNumbers[fnLevel] > levelNumbers[logLevel]) {
    return noop;
  } else {
    return logger[fnLevel].bind(logger);
  }
}
function loggerFor(client) {
  const logger = client.logger;
  const logLevel = client.logLevel ?? "off";
  if (!logger) {
    return noopLogger;
  }
  const cachedLogger = cachedLoggers.get(logger);
  if (cachedLogger && cachedLogger[0] === logLevel) {
    return cachedLogger[1];
  }
  const levelLogger = {
    error: makeLogFn("error", logger, logLevel),
    warn: makeLogFn("warn", logger, logLevel),
    info: makeLogFn("info", logger, logLevel),
    debug: makeLogFn("debug", logger, logLevel)
  };
  cachedLoggers.set(logger, [logLevel, levelLogger]);
  return levelLogger;
}
var levelNumbers, noopLogger, cachedLoggers;
var init_log = __esm({
  "node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/internal/utils/log.mjs"() {
    init_values();
    levelNumbers = {
      off: 0,
      error: 200,
      warn: 300,
      info: 400,
      debug: 500
    };
    noopLogger = {
      error: noop,
      warn: noop,
      info: noop,
      debug: noop
    };
    cachedLoggers = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/core/streaming.mjs
function isAbortError(err) {
  return typeof err === "object" && err !== null && // Spec-compliant fetch implementations
  ("name" in err && err.name === "AbortError" || // Expo fetch
  "message" in err && String(err.message).includes("FetchRequestCanceledException"));
}
var import_eventstream_serde_node, import_util_base64, import_fetch_http_handler2, toUtf8, fromUtf8, getMinimalSerdeContext, Stream2;
var init_streaming2 = __esm({
  "node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/core/streaming.mjs"() {
    import_eventstream_serde_node = __toESM(require_dist_cjs19(), 1);
    import_util_base64 = __toESM(require_dist_cjs20(), 1);
    import_fetch_http_handler2 = __toESM(require_dist_cjs(), 1);
    init_streaming();
    init_error2();
    init_sdk();
    init_AWS_restJson1();
    init_shims();
    init_values();
    init_log();
    toUtf8 = (input) => new TextDecoder("utf-8").decode(input);
    fromUtf8 = (input) => new TextEncoder().encode(input);
    getMinimalSerdeContext = () => {
      const marshaller = new import_eventstream_serde_node.EventStreamMarshaller({ utf8Encoder: toUtf8, utf8Decoder: fromUtf8 });
      return {
        base64Decoder: import_util_base64.fromBase64,
        base64Encoder: import_util_base64.toBase64,
        utf8Decoder: fromUtf8,
        utf8Encoder: toUtf8,
        eventStreamMarshaller: marshaller,
        streamCollector: import_fetch_http_handler2.streamCollector
      };
    };
    Stream2 = class _Stream extends Stream {
      static fromSSEResponse(response, controller, client) {
        let consumed = false;
        const logger = client ? loggerFor(client) : console;
        async function* iterMessages() {
          if (!response.body) {
            controller.abort();
            throw new AnthropicError(`Attempted to iterate over a response with no body`);
          }
          const responseBodyIter = ReadableStreamToAsyncIterable(response.body);
          const eventStream = de_ResponseStream(responseBodyIter, getMinimalSerdeContext());
          for await (const event of eventStream) {
            if (event.chunk && event.chunk.bytes) {
              const s = toUtf8(event.chunk.bytes);
              yield { event: "chunk", data: s, raw: [] };
            } else if (event.internalServerException) {
              yield { event: "error", data: "InternalServerException", raw: [] };
            } else if (event.modelStreamErrorException) {
              yield { event: "error", data: "ModelStreamErrorException", raw: [] };
            } else if (event.validationException) {
              yield { event: "error", data: "ValidationException", raw: [] };
            } else if (event.throttlingException) {
              yield { event: "error", data: "ThrottlingException", raw: [] };
            }
          }
        }
        async function* iterator() {
          if (consumed) {
            throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
          }
          consumed = true;
          let done = false;
          try {
            for await (const sse of iterMessages()) {
              if (sse.event === "chunk") {
                try {
                  yield JSON.parse(sse.data);
                } catch (e) {
                  logger.error(`Could not parse message into JSON:`, sse.data);
                  logger.error(`From chunk:`, sse.raw);
                  throw e;
                }
              }
              if (sse.event === "error") {
                const errText = sse.data;
                const errJSON = safeJSON(errText);
                const errMessage = errJSON ? void 0 : errText;
                throw APIError.generate(void 0, errJSON, errMessage, response.headers);
              }
            }
            done = true;
          } catch (e) {
            if (isAbortError(e))
              return;
            throw e;
          } finally {
            if (!done)
              controller.abort();
          }
        }
        return new _Stream(iterator, controller);
      }
    };
  }
});

// node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/internal/utils/env.mjs
var readEnv;
var init_env = __esm({
  "node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/internal/utils/env.mjs"() {
    readEnv = (env) => {
      if (typeof globalThis.process !== "undefined") {
        return globalThis.process.env?.[env]?.trim() ?? void 0;
      }
      if (typeof globalThis.Deno !== "undefined") {
        return globalThis.Deno.env?.get?.(env)?.trim();
      }
      return void 0;
    };
  }
});

// node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/internal/headers.mjs
function* iterateHeaders(headers) {
  if (!headers)
    return;
  if (brand_privateNullableHeaders in headers) {
    const { values, nulls } = headers;
    yield* values.entries();
    for (const name of nulls) {
      yield [name, null];
    }
    return;
  }
  let shouldClear = false;
  let iter;
  if (headers instanceof Headers) {
    iter = headers.entries();
  } else if (isReadonlyArray(headers)) {
    iter = headers;
  } else {
    shouldClear = true;
    iter = Object.entries(headers ?? {});
  }
  for (let row of iter) {
    const name = row[0];
    if (typeof name !== "string")
      throw new TypeError("expected header name to be a string");
    const values = isReadonlyArray(row[1]) ? row[1] : [row[1]];
    let didClear = false;
    for (const value of values) {
      if (value === void 0)
        continue;
      if (shouldClear && !didClear) {
        didClear = true;
        yield [name, null];
      }
      yield [name, value];
    }
  }
}
var brand_privateNullableHeaders, buildHeaders;
var init_headers = __esm({
  "node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/internal/headers.mjs"() {
    init_values();
    brand_privateNullableHeaders = /* @__PURE__ */ Symbol.for("brand.privateNullableHeaders");
    buildHeaders = (newHeaders) => {
      const targetHeaders = new Headers();
      const nullHeaders = /* @__PURE__ */ new Set();
      for (const headers of newHeaders) {
        const seenHeaders = /* @__PURE__ */ new Set();
        for (const [name, value] of iterateHeaders(headers)) {
          const lowerName = name.toLowerCase();
          if (!seenHeaders.has(lowerName)) {
            targetHeaders.delete(name);
            seenHeaders.add(lowerName);
          }
          if (value === null) {
            targetHeaders.delete(name);
            nullHeaders.add(lowerName);
          } else {
            targetHeaders.append(name, value);
            nullHeaders.delete(lowerName);
          }
        }
      }
      return { [brand_privateNullableHeaders]: true, values: targetHeaders, nulls: nullHeaders };
    };
  }
});

// node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/internal/utils/path.mjs
function encodeURIPath(str) {
  return str.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var EMPTY, createPathTagFunction, path;
var init_path = __esm({
  "node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/internal/utils/path.mjs"() {
    init_error3();
    EMPTY = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.create(null));
    createPathTagFunction = (pathEncoder = encodeURIPath) => function path2(statics, ...params) {
      if (statics.length === 1)
        return statics[0];
      let postPath = false;
      const invalidSegments = [];
      const path3 = statics.reduce((previousValue, currentValue, index) => {
        if (/[?#]/.test(currentValue)) {
          postPath = true;
        }
        const value = params[index];
        let encoded = (postPath ? encodeURIComponent : pathEncoder)("" + value);
        if (index !== params.length && (value == null || typeof value === "object" && // handle values from other realms
        value.toString === Object.getPrototypeOf(Object.getPrototypeOf(value.hasOwnProperty ?? EMPTY) ?? EMPTY)?.toString)) {
          encoded = value + "";
          invalidSegments.push({
            start: previousValue.length + currentValue.length,
            length: encoded.length,
            error: `Value of type ${Object.prototype.toString.call(value).slice(8, -1)} is not a valid path parameter`
          });
        }
        return previousValue + currentValue + (index === params.length ? "" : encoded);
      }, "");
      const pathOnly = path3.split(/[?#]/, 1)[0];
      const invalidSegmentPattern = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi;
      let match;
      while ((match = invalidSegmentPattern.exec(pathOnly)) !== null) {
        invalidSegments.push({
          start: match.index,
          length: match[0].length,
          error: `Value "${match[0]}" can't be safely passed as a path parameter`
        });
      }
      invalidSegments.sort((a, b) => a.start - b.start);
      if (invalidSegments.length > 0) {
        let lastEnd = 0;
        const underline = invalidSegments.reduce((acc, segment) => {
          const spaces = " ".repeat(segment.start - lastEnd);
          const arrows = "^".repeat(segment.length);
          lastEnd = segment.start + segment.length;
          return acc + spaces + arrows;
        }, "");
        throw new AnthropicError(`Path parameters result in path with invalid segments:
${invalidSegments.map((e) => e.error).join("\n")}
${path3}
${underline}`);
      }
      return path3;
    };
    path = /* @__PURE__ */ createPathTagFunction(encodeURIPath);
  }
});

// node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/client.mjs
function makeMessagesResource(client) {
  const resource = new Messages(client);
  delete resource.batches;
  delete resource.countTokens;
  return resource;
}
function makeBetaResource(client) {
  const resource = new Beta(client);
  delete resource.promptCaching;
  delete resource.messages.batches;
  delete resource.messages.countTokens;
  return resource;
}
var DEFAULT_VERSION, MODEL_ENDPOINTS, AnthropicBedrock;
var init_client2 = __esm({
  "node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/client.mjs"() {
    init_client();
    init_resources();
    init_auth();
    init_streaming2();
    init_env();
    init_values();
    init_headers();
    init_path();
    init_log();
    init_client();
    DEFAULT_VERSION = "bedrock-2023-05-31";
    MODEL_ENDPOINTS = /* @__PURE__ */ new Set(["/v1/complete", "/v1/messages", "/v1/messages?beta=true"]);
    AnthropicBedrock = class extends BaseAnthropic {
      /**
       * API Client for interfacing with the Anthropic Bedrock API.
       *
       * @param {string | null | undefined} [opts.awsSecretKey]
       * @param {string | null | undefined} [opts.awsAccessKey]
       * @param {string | undefined} [opts.awsRegion=process.env['AWS_REGION'] ?? us-east-1]
       * @param {string | null | undefined} [opts.awsSessionToken]
       * @param {(() => Promise<AwsCredentialIdentityProvider>) | null} [opts.providerChainResolver] - Custom provider chain resolver for AWS credentials. Useful for non-Node environments.
       * @param {string} [opts.baseURL=process.env['ANTHROPIC_BEDROCK_BASE_URL'] ?? https://bedrock-runtime.${this.awsRegion}.amazonaws.com] - Override the default base URL for the API.
       * @param {number} [opts.timeout=10 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
       * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
       * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
       * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
       * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
       * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
       * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
       * @param {boolean} [opts.skipAuth=false] - Skip authentication for this request. This is useful if you have an internal proxy that handles authentication for you.
       */
      constructor({ awsRegion = readEnv("AWS_REGION") ?? "us-east-1", baseURL = readEnv("ANTHROPIC_BEDROCK_BASE_URL") ?? `https://bedrock-runtime.${awsRegion}.amazonaws.com`, awsSecretKey = null, awsAccessKey = null, awsSessionToken = null, providerChainResolver = null, ...opts } = {}) {
        super({ baseURL, ...opts });
        this.skipAuth = false;
        this.messages = makeMessagesResource(this);
        this.completions = new Completions(this);
        this.beta = makeBetaResource(this);
        const hasAccess = awsAccessKey != null;
        const hasSecret = awsSecretKey != null;
        if (hasAccess !== hasSecret) {
          loggerFor(this).warn("Warning: Passing only one of `awsAccessKey` or `awsSecretKey` is deprecated. Please provide both keys, or provide neither and rely on the AWS credential provider chain.");
        }
        this.awsSecretKey = awsSecretKey;
        this.awsAccessKey = awsAccessKey;
        this.awsRegion = awsRegion;
        this.awsSessionToken = awsSessionToken;
        this.skipAuth = opts.skipAuth ?? false;
        this.providerChainResolver = providerChainResolver;
      }
      validateHeaders() {
      }
      async prepareRequest(request, { url, options }) {
        if (this.skipAuth) {
          return;
        }
        const regionName = this.awsRegion;
        if (!regionName) {
          throw new Error("Expected `awsRegion` option to be passed to the client or the `AWS_REGION` environment variable to be present");
        }
        const headers = await getAuthHeaders(request, {
          url,
          regionName,
          awsAccessKey: this.awsAccessKey,
          awsSecretKey: this.awsSecretKey,
          awsSessionToken: this.awsSessionToken,
          fetchOptions: this.fetchOptions,
          providerChainResolver: this.providerChainResolver
        });
        request.headers = buildHeaders([headers, request.headers]).values;
      }
      async buildRequest(options) {
        options.__streamClass = Stream2;
        if (isObj(options.body)) {
          options.body = { ...options.body };
        }
        if (isObj(options.body)) {
          if (!options.body["anthropic_version"]) {
            options.body["anthropic_version"] = DEFAULT_VERSION;
          }
          if (options.headers && !options.body["anthropic_beta"]) {
            const betas = buildHeaders([options.headers]).values.get("anthropic-beta");
            if (betas != null) {
              options.body["anthropic_beta"] = betas.split(",");
            }
          }
        }
        if (MODEL_ENDPOINTS.has(options.path) && options.method === "post") {
          if (!isObj(options.body)) {
            throw new Error("Expected request body to be an object for post /v1/messages");
          }
          const model = options.body["model"];
          options.body["model"] = void 0;
          const stream = options.body["stream"];
          options.body["stream"] = void 0;
          if (stream) {
            options.path = path`/model/${model}/invoke-with-response-stream`;
          } else {
            options.path = path`/model/${model}/invoke`;
          }
        }
        return super.buildRequest(options);
      }
    };
  }
});

// node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/index.mjs
var init_bedrock_sdk = __esm({
  "node_modules/.pnpm/@anthropic-ai+bedrock-sdk@0.26.4_zod@4.3.6/node_modules/@anthropic-ai/bedrock-sdk/index.mjs"() {
    init_client2();
    init_client2();
  }
});
init_bedrock_sdk();
export {
  AnthropicBedrock,
  BaseAnthropic,
  AnthropicBedrock as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3RzbGliQDEuMTQuMS9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLWNyeXB0bytzaGEyNTYtanNANC4wLjAvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3NoYTI1Ni1qcy9zcmMvY29uc3RhbnRzLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLWNyeXB0bytzaGEyNTYtanNANC4wLjAvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3NoYTI1Ni1qcy9zcmMvUmF3U2hhMjU2LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkayt1dGlsLXV0ZjgtYnJvd3NlckAzLjI1OS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLXV0ZjgtYnJvd3Nlci9kaXN0LWNqcy9wdXJlSnMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK3V0aWwtdXRmOC1icm93c2VyQDMuMjU5LjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtdXRmOC1icm93c2VyL2Rpc3QtY2pzL3doYXR3Z0VuY29kaW5nQXBpLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLXNkayt1dGlsLXV0ZjgtYnJvd3NlckAzLjI1OS4wL25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLXV0ZjgtYnJvd3Nlci9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1jcnlwdG8rdXRpbEA0LjAuMC9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9zcmMvY29udmVydFRvQnVmZmVyLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLWNyeXB0byt1dGlsQDQuMC4wL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL3NyYy9pc0VtcHR5RGF0YS50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1jcnlwdG8rdXRpbEA0LjAuMC9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9zcmMvbnVtVG9VaW50OC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1jcnlwdG8rdXRpbEA0LjAuMC9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9zcmMvdWludDMyQXJyYXlGcm9tLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLWNyeXB0byt1dGlsQDQuMC4wL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL3NyYy9pbmRleC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1jcnlwdG8rc2hhMjU2LWpzQDQuMC4wL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by9zaGEyNTYtanMvc3JjL2pzU2hhMjU2LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLWNyeXB0bytzaGEyNTYtanNANC4wLjAvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3NoYTI1Ni1qcy9zcmMvaW5kZXgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdHlwZXNAMi4xMi4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3Byb3RvY29sLWh0dHBAMy4zLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvcHJvdG9jb2wtaHR0cC9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt0eXBlc0AzLjcuMi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLW1pZGRsZXdhcmVAMy4wLjExL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtbWlkZGxld2FyZS9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStpcy1hcnJheS1idWZmZXJAMy4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvaXMtYXJyYXktYnVmZmVyL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtYnVmZmVyLWZyb21AMy4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1idWZmZXItZnJvbS9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXV0ZjhAMy4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11dGY4L2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtaGV4LWVuY29kaW5nQDMuMC4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtaGV4LWVuY29kaW5nL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtdXJpLWVzY2FwZUAzLjAuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXVyaS1lc2NhcGUvZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrc2lnbmF0dXJlLXY0QDMuMS4yL25vZGVfbW9kdWxlcy9Ac21pdGh5L3NpZ25hdHVyZS12NC9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGFudGhyb3BpYy1haStiZWRyb2NrLXNka0AwLjI2LjRfem9kQDQuMy42L25vZGVfbW9kdWxlcy9AYW50aHJvcGljLWFpL2JlZHJvY2stc2RrL3NyYy9jb3JlL2F1dGgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3MtY3J5cHRvK3V0aWxAMy4wLjAvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvc3JjL2NvbnZlcnRUb0J1ZmZlci50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1jcnlwdG8rdXRpbEAzLjAuMC9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9zcmMvaXNFbXB0eURhdGEudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3MtY3J5cHRvK3V0aWxAMy4wLjAvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvc3JjL251bVRvVWludDgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3MtY3J5cHRvK3V0aWxAMy4wLjAvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvc3JjL3VpbnQzMkFycmF5RnJvbS50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1jcnlwdG8rdXRpbEAzLjAuMC9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9zcmMvaW5kZXgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3MtY3J5cHRvK2NyYzMyQDMuMC4wL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by9jcmMzMi9zcmMvYXdzX2NyYzMyLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYXdzLWNyeXB0bytjcmMzMkAzLjAuMC9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vY3JjMzIvc3JjL2luZGV4LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtaGV4LWVuY29kaW5nQDIuMi4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtaGV4LWVuY29kaW5nL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2V2ZW50c3RyZWFtLWNvZGVjQDIuMi4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L2V2ZW50c3RyZWFtLWNvZGVjL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2V2ZW50c3RyZWFtLXNlcmRlLXVuaXZlcnNhbEAyLjIuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS9ldmVudHN0cmVhbS1zZXJkZS11bml2ZXJzYWwvZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrZXZlbnRzdHJlYW0tc2VyZGUtbm9kZUAyLjIuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS9ldmVudHN0cmVhbS1zZXJkZS1ub2RlL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtYmFzZTY0QDIuMy4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtYmFzZTY0L2Rpc3QtY2pzL2Zyb21CYXNlNjQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1iYXNlNjRAMi4zLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1iYXNlNjQvZGlzdC1janMvdG9CYXNlNjQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1iYXNlNjRAMi4zLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1iYXNlNjQvZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrbWlkZGxld2FyZS1zdGFja0AyLjIuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS9taWRkbGV3YXJlLXN0YWNrL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtc3RyZWFtQDIuMi4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtc3RyZWFtL2Rpc3QtY2pzL2dldEF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXVyaS1lc2NhcGVAMi4yLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11cmktZXNjYXBlL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3F1ZXJ5c3RyaW5nLWJ1aWxkZXJAMi4yLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvcXVlcnlzdHJpbmctYnVpbGRlci9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStub2RlLWh0dHAtaGFuZGxlckAyLjUuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS9ub2RlLWh0dHAtaGFuZGxlci9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXN0cmVhbUAyLjIuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXN0cmVhbS9kaXN0LWNqcy9zZGstc3RyZWFtLW1peGluLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtc3RyZWFtQDIuMi4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtc3RyZWFtL2Rpc3QtY2pzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3NtaXRoeS1jbGllbnRAMi41LjEvbm9kZV9tb2R1bGVzL0BzbWl0aHkvc21pdGh5LWNsaWVudC9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGFudGhyb3BpYy1haStiZWRyb2NrLXNka0AwLjI2LjRfem9kQDQuMy42L25vZGVfbW9kdWxlcy9AYW50aHJvcGljLWFpL2JlZHJvY2stc2RrL3NyYy9BV1NfcmVzdEpzb24xLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYW50aHJvcGljLWFpK2JlZHJvY2stc2RrQDAuMjYuNF96b2RANC4zLjYvbm9kZV9tb2R1bGVzL0BhbnRocm9waWMtYWkvYmVkcm9jay1zZGsvc3JjL2ludGVybmFsL3NoaW1zLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYW50aHJvcGljLWFpK2JlZHJvY2stc2RrQDAuMjYuNF96b2RANC4zLjYvbm9kZV9tb2R1bGVzL0BhbnRocm9waWMtYWkvYmVkcm9jay1zZGsvc3JjL2ludGVybmFsL3V0aWxzL3ZhbHVlcy50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGFudGhyb3BpYy1haStiZWRyb2NrLXNka0AwLjI2LjRfem9kQDQuMy42L25vZGVfbW9kdWxlcy9AYW50aHJvcGljLWFpL2JlZHJvY2stc2RrL3NyYy9pbnRlcm5hbC91dGlscy9sb2cudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BhbnRocm9waWMtYWkrYmVkcm9jay1zZGtAMC4yNi40X3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvQGFudGhyb3BpYy1haS9iZWRyb2NrLXNkay9zcmMvY29yZS9zdHJlYW1pbmcudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BhbnRocm9waWMtYWkrYmVkcm9jay1zZGtAMC4yNi40X3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvQGFudGhyb3BpYy1haS9iZWRyb2NrLXNkay9zcmMvaW50ZXJuYWwvdXRpbHMvZW52LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AYW50aHJvcGljLWFpK2JlZHJvY2stc2RrQDAuMjYuNF96b2RANC4zLjYvbm9kZV9tb2R1bGVzL0BhbnRocm9waWMtYWkvYmVkcm9jay1zZGsvc3JjL2ludGVybmFsL2hlYWRlcnMudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BhbnRocm9waWMtYWkrYmVkcm9jay1zZGtAMC4yNi40X3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvQGFudGhyb3BpYy1haS9iZWRyb2NrLXNkay9zcmMvaW50ZXJuYWwvdXRpbHMvcGF0aC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGFudGhyb3BpYy1haStiZWRyb2NrLXNka0AwLjI2LjRfem9kQDQuMy42L25vZGVfbW9kdWxlcy9AYW50aHJvcGljLWFpL2JlZHJvY2stc2RrL3NyYy9jbGllbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NyZWF0ZUJpbmRpbmcobywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsICIvKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgQkxPQ0tfU0laRTogbnVtYmVyID0gNjQ7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBESUdFU1RfTEVOR1RIOiBudW1iZXIgPSAzMjtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IEtFWSA9IG5ldyBVaW50MzJBcnJheShbXG4gIDB4NDI4YTJmOTgsXG4gIDB4NzEzNzQ0OTEsXG4gIDB4YjVjMGZiY2YsXG4gIDB4ZTliNWRiYTUsXG4gIDB4Mzk1NmMyNWIsXG4gIDB4NTlmMTExZjEsXG4gIDB4OTIzZjgyYTQsXG4gIDB4YWIxYzVlZDUsXG4gIDB4ZDgwN2FhOTgsXG4gIDB4MTI4MzViMDEsXG4gIDB4MjQzMTg1YmUsXG4gIDB4NTUwYzdkYzMsXG4gIDB4NzJiZTVkNzQsXG4gIDB4ODBkZWIxZmUsXG4gIDB4OWJkYzA2YTcsXG4gIDB4YzE5YmYxNzQsXG4gIDB4ZTQ5YjY5YzEsXG4gIDB4ZWZiZTQ3ODYsXG4gIDB4MGZjMTlkYzYsXG4gIDB4MjQwY2ExY2MsXG4gIDB4MmRlOTJjNmYsXG4gIDB4NGE3NDg0YWEsXG4gIDB4NWNiMGE5ZGMsXG4gIDB4NzZmOTg4ZGEsXG4gIDB4OTgzZTUxNTIsXG4gIDB4YTgzMWM2NmQsXG4gIDB4YjAwMzI3YzgsXG4gIDB4YmY1OTdmYzcsXG4gIDB4YzZlMDBiZjMsXG4gIDB4ZDVhNzkxNDcsXG4gIDB4MDZjYTYzNTEsXG4gIDB4MTQyOTI5NjcsXG4gIDB4MjdiNzBhODUsXG4gIDB4MmUxYjIxMzgsXG4gIDB4NGQyYzZkZmMsXG4gIDB4NTMzODBkMTMsXG4gIDB4NjUwYTczNTQsXG4gIDB4NzY2YTBhYmIsXG4gIDB4ODFjMmM5MmUsXG4gIDB4OTI3MjJjODUsXG4gIDB4YTJiZmU4YTEsXG4gIDB4YTgxYTY2NGIsXG4gIDB4YzI0YjhiNzAsXG4gIDB4Yzc2YzUxYTMsXG4gIDB4ZDE5MmU4MTksXG4gIDB4ZDY5OTA2MjQsXG4gIDB4ZjQwZTM1ODUsXG4gIDB4MTA2YWEwNzAsXG4gIDB4MTlhNGMxMTYsXG4gIDB4MWUzNzZjMDgsXG4gIDB4Mjc0ODc3NGMsXG4gIDB4MzRiMGJjYjUsXG4gIDB4MzkxYzBjYjMsXG4gIDB4NGVkOGFhNGEsXG4gIDB4NWI5Y2NhNGYsXG4gIDB4NjgyZTZmZjMsXG4gIDB4NzQ4ZjgyZWUsXG4gIDB4NzhhNTYzNmYsXG4gIDB4ODRjODc4MTQsXG4gIDB4OGNjNzAyMDgsXG4gIDB4OTBiZWZmZmEsXG4gIDB4YTQ1MDZjZWIsXG4gIDB4YmVmOWEzZjcsXG4gIDB4YzY3MTc4ZjJcbl0pO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgSU5JVCA9IFtcbiAgMHg2YTA5ZTY2NyxcbiAgMHhiYjY3YWU4NSxcbiAgMHgzYzZlZjM3MixcbiAgMHhhNTRmZjUzYSxcbiAgMHg1MTBlNTI3ZixcbiAgMHg5YjA1Njg4YyxcbiAgMHgxZjgzZDlhYixcbiAgMHg1YmUwY2QxOVxuXTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IE1BWF9IQVNIQUJMRV9MRU5HVEggPSAyICoqIDUzIC0gMTtcbiIsICJpbXBvcnQge1xuICBCTE9DS19TSVpFLFxuICBESUdFU1RfTEVOR1RILFxuICBJTklULFxuICBLRVksXG4gIE1BWF9IQVNIQUJMRV9MRU5HVEhcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjbGFzcyBSYXdTaGEyNTYge1xuICBwcml2YXRlIHN0YXRlOiBJbnQzMkFycmF5ID0gSW50MzJBcnJheS5mcm9tKElOSVQpO1xuICBwcml2YXRlIHRlbXA6IEludDMyQXJyYXkgPSBuZXcgSW50MzJBcnJheSg2NCk7XG4gIHByaXZhdGUgYnVmZmVyOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoNjQpO1xuICBwcml2YXRlIGJ1ZmZlckxlbmd0aDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBieXRlc0hhc2hlZDogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBmaW5pc2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHVwZGF0ZShkYXRhOiBVaW50OEFycmF5KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmluaXNoZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHRlZCB0byB1cGRhdGUgYW4gYWxyZWFkeSBmaW5pc2hlZCBoYXNoLlwiKTtcbiAgICB9XG5cbiAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgIGxldCB7IGJ5dGVMZW5ndGggfSA9IGRhdGE7XG4gICAgdGhpcy5ieXRlc0hhc2hlZCArPSBieXRlTGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuYnl0ZXNIYXNoZWQgKiA4ID4gTUFYX0hBU0hBQkxFX0xFTkdUSCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGhhc2ggbW9yZSB0aGFuIDJeNTMgLSAxIGJpdHNcIik7XG4gICAgfVxuXG4gICAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmJ1ZmZlclt0aGlzLmJ1ZmZlckxlbmd0aCsrXSA9IGRhdGFbcG9zaXRpb24rK107XG4gICAgICBieXRlTGVuZ3RoLS07XG5cbiAgICAgIGlmICh0aGlzLmJ1ZmZlckxlbmd0aCA9PT0gQkxPQ0tfU0laRSkge1xuICAgICAgICB0aGlzLmhhc2hCdWZmZXIoKTtcbiAgICAgICAgdGhpcy5idWZmZXJMZW5ndGggPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRpZ2VzdCgpOiBVaW50OEFycmF5IHtcbiAgICBpZiAoIXRoaXMuZmluaXNoZWQpIHtcbiAgICAgIGNvbnN0IGJpdHNIYXNoZWQgPSB0aGlzLmJ5dGVzSGFzaGVkICogODtcbiAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBuZXcgRGF0YVZpZXcoXG4gICAgICAgIHRoaXMuYnVmZmVyLmJ1ZmZlcixcbiAgICAgICAgdGhpcy5idWZmZXIuYnl0ZU9mZnNldCxcbiAgICAgICAgdGhpcy5idWZmZXIuYnl0ZUxlbmd0aFxuICAgICAgKTtcblxuICAgICAgY29uc3QgdW5kZWNvcmF0ZWRMZW5ndGggPSB0aGlzLmJ1ZmZlckxlbmd0aDtcbiAgICAgIGJ1ZmZlclZpZXcuc2V0VWludDgodGhpcy5idWZmZXJMZW5ndGgrKywgMHg4MCk7XG5cbiAgICAgIC8vIEVuc3VyZSB0aGUgZmluYWwgYmxvY2sgaGFzIGVub3VnaCByb29tIGZvciB0aGUgaGFzaGVkIGxlbmd0aFxuICAgICAgaWYgKHVuZGVjb3JhdGVkTGVuZ3RoICUgQkxPQ0tfU0laRSA+PSBCTE9DS19TSVpFIC0gOCkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5idWZmZXJMZW5ndGg7IGkgPCBCTE9DS19TSVpFOyBpKyspIHtcbiAgICAgICAgICBidWZmZXJWaWV3LnNldFVpbnQ4KGksIDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFzaEJ1ZmZlcigpO1xuICAgICAgICB0aGlzLmJ1ZmZlckxlbmd0aCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmJ1ZmZlckxlbmd0aDsgaSA8IEJMT0NLX1NJWkUgLSA4OyBpKyspIHtcbiAgICAgICAgYnVmZmVyVmlldy5zZXRVaW50OChpLCAwKTtcbiAgICAgIH1cbiAgICAgIGJ1ZmZlclZpZXcuc2V0VWludDMyKFxuICAgICAgICBCTE9DS19TSVpFIC0gOCxcbiAgICAgICAgTWF0aC5mbG9vcihiaXRzSGFzaGVkIC8gMHgxMDAwMDAwMDApLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgICAgYnVmZmVyVmlldy5zZXRVaW50MzIoQkxPQ0tfU0laRSAtIDQsIGJpdHNIYXNoZWQpO1xuXG4gICAgICB0aGlzLmhhc2hCdWZmZXIoKTtcblxuICAgICAgdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gVGhlIHZhbHVlIGluIHN0YXRlIGlzIGxpdHRsZS1lbmRpYW4gcmF0aGVyIHRoYW4gYmlnLWVuZGlhbiwgc28gZmxpcFxuICAgIC8vIGVhY2ggd29yZCBpbnRvIGEgbmV3IFVpbnQ4QXJyYXlcbiAgICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheShESUdFU1RfTEVOR1RIKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgb3V0W2kgKiA0XSA9ICh0aGlzLnN0YXRlW2ldID4+PiAyNCkgJiAweGZmO1xuICAgICAgb3V0W2kgKiA0ICsgMV0gPSAodGhpcy5zdGF0ZVtpXSA+Pj4gMTYpICYgMHhmZjtcbiAgICAgIG91dFtpICogNCArIDJdID0gKHRoaXMuc3RhdGVbaV0gPj4+IDgpICYgMHhmZjtcbiAgICAgIG91dFtpICogNCArIDNdID0gKHRoaXMuc3RhdGVbaV0gPj4+IDApICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNoQnVmZmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgYnVmZmVyLCBzdGF0ZSB9ID0gdGhpcztcblxuICAgIGxldCBzdGF0ZTAgPSBzdGF0ZVswXSxcbiAgICAgIHN0YXRlMSA9IHN0YXRlWzFdLFxuICAgICAgc3RhdGUyID0gc3RhdGVbMl0sXG4gICAgICBzdGF0ZTMgPSBzdGF0ZVszXSxcbiAgICAgIHN0YXRlNCA9IHN0YXRlWzRdLFxuICAgICAgc3RhdGU1ID0gc3RhdGVbNV0sXG4gICAgICBzdGF0ZTYgPSBzdGF0ZVs2XSxcbiAgICAgIHN0YXRlNyA9IHN0YXRlWzddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCTE9DS19TSVpFOyBpKyspIHtcbiAgICAgIGlmIChpIDwgMTYpIHtcbiAgICAgICAgdGhpcy50ZW1wW2ldID1cbiAgICAgICAgICAoKGJ1ZmZlcltpICogNF0gJiAweGZmKSA8PCAyNCkgfFxuICAgICAgICAgICgoYnVmZmVyW2kgKiA0ICsgMV0gJiAweGZmKSA8PCAxNikgfFxuICAgICAgICAgICgoYnVmZmVyW2kgKiA0ICsgMl0gJiAweGZmKSA8PCA4KSB8XG4gICAgICAgICAgKGJ1ZmZlcltpICogNCArIDNdICYgMHhmZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdSA9IHRoaXMudGVtcFtpIC0gMl07XG4gICAgICAgIGNvbnN0IHQxID1cbiAgICAgICAgICAoKHUgPj4+IDE3KSB8ICh1IDw8IDE1KSkgXiAoKHUgPj4+IDE5KSB8ICh1IDw8IDEzKSkgXiAodSA+Pj4gMTApO1xuXG4gICAgICAgIHUgPSB0aGlzLnRlbXBbaSAtIDE1XTtcbiAgICAgICAgY29uc3QgdDIgPVxuICAgICAgICAgICgodSA+Pj4gNykgfCAodSA8PCAyNSkpIF4gKCh1ID4+PiAxOCkgfCAodSA8PCAxNCkpIF4gKHUgPj4+IDMpO1xuXG4gICAgICAgIHRoaXMudGVtcFtpXSA9XG4gICAgICAgICAgKCh0MSArIHRoaXMudGVtcFtpIC0gN10pIHwgMCkgKyAoKHQyICsgdGhpcy50ZW1wW2kgLSAxNl0pIHwgMCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHQxID1cbiAgICAgICAgKCgoKCgoc3RhdGU0ID4+PiA2KSB8IChzdGF0ZTQgPDwgMjYpKSBeXG4gICAgICAgICAgKChzdGF0ZTQgPj4+IDExKSB8IChzdGF0ZTQgPDwgMjEpKSBeXG4gICAgICAgICAgKChzdGF0ZTQgPj4+IDI1KSB8IChzdGF0ZTQgPDwgNykpKSArXG4gICAgICAgICAgKChzdGF0ZTQgJiBzdGF0ZTUpIF4gKH5zdGF0ZTQgJiBzdGF0ZTYpKSkgfFxuICAgICAgICAgIDApICtcbiAgICAgICAgICAoKHN0YXRlNyArICgoS0VZW2ldICsgdGhpcy50ZW1wW2ldKSB8IDApKSB8IDApKSB8XG4gICAgICAgIDA7XG5cbiAgICAgIGNvbnN0IHQyID1cbiAgICAgICAgKCgoKHN0YXRlMCA+Pj4gMikgfCAoc3RhdGUwIDw8IDMwKSkgXlxuICAgICAgICAgICgoc3RhdGUwID4+PiAxMykgfCAoc3RhdGUwIDw8IDE5KSkgXlxuICAgICAgICAgICgoc3RhdGUwID4+PiAyMikgfCAoc3RhdGUwIDw8IDEwKSkpICtcbiAgICAgICAgICAoKHN0YXRlMCAmIHN0YXRlMSkgXiAoc3RhdGUwICYgc3RhdGUyKSBeIChzdGF0ZTEgJiBzdGF0ZTIpKSkgfFxuICAgICAgICAwO1xuXG4gICAgICBzdGF0ZTcgPSBzdGF0ZTY7XG4gICAgICBzdGF0ZTYgPSBzdGF0ZTU7XG4gICAgICBzdGF0ZTUgPSBzdGF0ZTQ7XG4gICAgICBzdGF0ZTQgPSAoc3RhdGUzICsgdDEpIHwgMDtcbiAgICAgIHN0YXRlMyA9IHN0YXRlMjtcbiAgICAgIHN0YXRlMiA9IHN0YXRlMTtcbiAgICAgIHN0YXRlMSA9IHN0YXRlMDtcbiAgICAgIHN0YXRlMCA9ICh0MSArIHQyKSB8IDA7XG4gICAgfVxuXG4gICAgc3RhdGVbMF0gKz0gc3RhdGUwO1xuICAgIHN0YXRlWzFdICs9IHN0YXRlMTtcbiAgICBzdGF0ZVsyXSArPSBzdGF0ZTI7XG4gICAgc3RhdGVbM10gKz0gc3RhdGUzO1xuICAgIHN0YXRlWzRdICs9IHN0YXRlNDtcbiAgICBzdGF0ZVs1XSArPSBzdGF0ZTU7XG4gICAgc3RhdGVbNl0gKz0gc3RhdGU2O1xuICAgIHN0YXRlWzddICs9IHN0YXRlNztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50b1V0ZjggPSBleHBvcnRzLmZyb21VdGY4ID0gdm9pZCAwO1xuY29uc3QgZnJvbVV0ZjggPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCBieXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBpbnB1dC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmICh2YWx1ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgMHg4MDApIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goKHZhbHVlID4+IDYpIHwgMGIxMTAwMDAwMCwgKHZhbHVlICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaSArIDEgPCBpbnB1dC5sZW5ndGggJiYgKHZhbHVlICYgMHhmYzAwKSA9PT0gMHhkODAwICYmIChpbnB1dC5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xuICAgICAgICAgICAgY29uc3Qgc3Vycm9nYXRlUGFpciA9IDB4MTAwMDAgKyAoKHZhbHVlICYgMGIxMTExMTExMTExKSA8PCAxMCkgKyAoaW5wdXQuY2hhckNvZGVBdCgrK2kpICYgMGIxMTExMTExMTExKTtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goKHN1cnJvZ2F0ZVBhaXIgPj4gMTgpIHwgMGIxMTExMDAwMCwgKChzdXJyb2dhdGVQYWlyID4+IDEyKSAmIDBiMTExMTExKSB8IDBiMTAwMDAwMDAsICgoc3Vycm9nYXRlUGFpciA+PiA2KSAmIDBiMTExMTExKSB8IDBiMTAwMDAwMDAsIChzdXJyb2dhdGVQYWlyICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKCh2YWx1ZSA+PiAxMikgfCAwYjExMTAwMDAwLCAoKHZhbHVlID4+IDYpICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCwgKHZhbHVlICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShieXRlcyk7XG59O1xuZXhwb3J0cy5mcm9tVXRmOCA9IGZyb21VdGY4O1xuY29uc3QgdG9VdGY4ID0gKGlucHV0KSA9PiB7XG4gICAgbGV0IGRlY29kZWQgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBpbnB1dC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBieXRlID0gaW5wdXRbaV07XG4gICAgICAgIGlmIChieXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgZGVjb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKDBiMTEwMDAwMDAgPD0gYnl0ZSAmJiBieXRlIDwgMGIxMTEwMDAwMCkge1xuICAgICAgICAgICAgY29uc3QgbmV4dEJ5dGUgPSBpbnB1dFsrK2ldO1xuICAgICAgICAgICAgZGVjb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZSAmIDBiMTExMTEpIDw8IDYpIHwgKG5leHRCeXRlICYgMGIxMTExMTEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgwYjExMTEwMDAwIDw9IGJ5dGUgJiYgYnl0ZSA8IDBiMTAxMTAxMTAxKSB7XG4gICAgICAgICAgICBjb25zdCBzdXJyb2dhdGVQYWlyID0gW2J5dGUsIGlucHV0WysraV0sIGlucHV0WysraV0sIGlucHV0WysraV1dO1xuICAgICAgICAgICAgY29uc3QgZW5jb2RlZCA9IFwiJVwiICsgc3Vycm9nYXRlUGFpci5tYXAoKGJ5dGVWYWx1ZSkgPT4gYnl0ZVZhbHVlLnRvU3RyaW5nKDE2KSkuam9pbihcIiVcIik7XG4gICAgICAgICAgICBkZWNvZGVkICs9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGJ5dGUgJiAwYjExMTEpIDw8IDEyKSB8ICgoaW5wdXRbKytpXSAmIDBiMTExMTExKSA8PCA2KSB8IChpbnB1dFsrK2ldICYgMGIxMTExMTEpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlZDtcbn07XG5leHBvcnRzLnRvVXRmOCA9IHRvVXRmODtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudG9VdGY4ID0gZXhwb3J0cy5mcm9tVXRmOCA9IHZvaWQgMDtcbmZ1bmN0aW9uIGZyb21VdGY4KGlucHV0KSB7XG4gICAgcmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShpbnB1dCk7XG59XG5leHBvcnRzLmZyb21VdGY4ID0gZnJvbVV0Zjg7XG5mdW5jdGlvbiB0b1V0ZjgoaW5wdXQpIHtcbiAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKGlucHV0KTtcbn1cbmV4cG9ydHMudG9VdGY4ID0gdG9VdGY4O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50b1V0ZjggPSBleHBvcnRzLmZyb21VdGY4ID0gdm9pZCAwO1xuY29uc3QgcHVyZUpzXzEgPSByZXF1aXJlKFwiLi9wdXJlSnNcIik7XG5jb25zdCB3aGF0d2dFbmNvZGluZ0FwaV8xID0gcmVxdWlyZShcIi4vd2hhdHdnRW5jb2RpbmdBcGlcIik7XG5jb25zdCBmcm9tVXRmOCA9IChpbnB1dCkgPT4gdHlwZW9mIFRleHRFbmNvZGVyID09PSBcImZ1bmN0aW9uXCIgPyAoMCwgd2hhdHdnRW5jb2RpbmdBcGlfMS5mcm9tVXRmOCkoaW5wdXQpIDogKDAsIHB1cmVKc18xLmZyb21VdGY4KShpbnB1dCk7XG5leHBvcnRzLmZyb21VdGY4ID0gZnJvbVV0Zjg7XG5jb25zdCB0b1V0ZjggPSAoaW5wdXQpID0+IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gXCJmdW5jdGlvblwiID8gKDAsIHdoYXR3Z0VuY29kaW5nQXBpXzEudG9VdGY4KShpbnB1dCkgOiAoMCwgcHVyZUpzXzEudG9VdGY4KShpbnB1dCk7XG5leHBvcnRzLnRvVXRmOCA9IHRvVXRmODtcbiIsICIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgU291cmNlRGF0YSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgZnJvbVV0ZjggYXMgZnJvbVV0ZjhCcm93c2VyIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtdXRmOC1icm93c2VyXCI7XG5cbi8vIFF1aWNrIHBvbHlmaWxsXG5jb25zdCBmcm9tVXRmOCA9XG4gIHR5cGVvZiBCdWZmZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgQnVmZmVyLmZyb21cbiAgICA/IChpbnB1dDogc3RyaW5nKSA9PiBCdWZmZXIuZnJvbShpbnB1dCwgXCJ1dGY4XCIpXG4gICAgOiBmcm9tVXRmOEJyb3dzZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9CdWZmZXIoZGF0YTogU291cmNlRGF0YSk6IFVpbnQ4QXJyYXkge1xuICAvLyBBbHJlYWR5IGEgVWludDgsIGRvIG5vdGhpbmdcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSByZXR1cm4gZGF0YTtcblxuICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZnJvbVV0ZjgoZGF0YSk7XG4gIH1cblxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFxuICAgICAgZGF0YS5idWZmZXIsXG4gICAgICBkYXRhLmJ5dGVPZmZzZXQsXG4gICAgICBkYXRhLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKTtcbn1cbiIsICIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgU291cmNlRGF0YSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eURhdGEoZGF0YTogU291cmNlRGF0YSk6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZGF0YS5sZW5ndGggPT09IDA7XG4gIH1cblxuICByZXR1cm4gZGF0YS5ieXRlTGVuZ3RoID09PSAwO1xufVxuIiwgIi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG5leHBvcnQgZnVuY3Rpb24gbnVtVG9VaW50OChudW06IG51bWJlcikge1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgIChudW0gJiAweGZmMDAwMDAwKSA+PiAyNCxcbiAgICAobnVtICYgMHgwMGZmMDAwMCkgPj4gMTYsXG4gICAgKG51bSAmIDB4MDAwMGZmMDApID4+IDgsXG4gICAgbnVtICYgMHgwMDAwMDBmZixcbiAgXSk7XG59XG4iLCAiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbi8vIElFIDExIGRvZXMgbm90IHN1cHBvcnQgQXJyYXkuZnJvbSwgc28gd2UgZG8gaXQgbWFudWFsbHlcbmV4cG9ydCBmdW5jdGlvbiB1aW50MzJBcnJheUZyb20oYV9sb29rVXBUYWJsZTogQXJyYXk8bnVtYmVyPik6IFVpbnQzMkFycmF5IHtcbiAgaWYgKCFVaW50MzJBcnJheS5mcm9tKSB7XG4gICAgY29uc3QgcmV0dXJuX2FycmF5ID0gbmV3IFVpbnQzMkFycmF5KGFfbG9va1VwVGFibGUubGVuZ3RoKVxuICAgIGxldCBhX2luZGV4ID0gMFxuICAgIHdoaWxlIChhX2luZGV4IDwgYV9sb29rVXBUYWJsZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybl9hcnJheVthX2luZGV4XSA9IGFfbG9va1VwVGFibGVbYV9pbmRleF1cbiAgICAgIGFfaW5kZXggKz0gMVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuX2FycmF5XG4gIH1cbiAgcmV0dXJuIFVpbnQzMkFycmF5LmZyb20oYV9sb29rVXBUYWJsZSlcbn1cbiIsICIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuZXhwb3J0IHsgY29udmVydFRvQnVmZmVyIH0gZnJvbSBcIi4vY29udmVydFRvQnVmZmVyXCI7XG5leHBvcnQgeyBpc0VtcHR5RGF0YSB9IGZyb20gXCIuL2lzRW1wdHlEYXRhXCI7XG5leHBvcnQgeyBudW1Ub1VpbnQ4IH0gZnJvbSBcIi4vbnVtVG9VaW50OFwiO1xuZXhwb3J0IHt1aW50MzJBcnJheUZyb219IGZyb20gJy4vdWludDMyQXJyYXlGcm9tJztcbiIsICJpbXBvcnQgeyBCTE9DS19TSVpFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSYXdTaGEyNTYgfSBmcm9tIFwiLi9SYXdTaGEyNTZcIjtcbmltcG9ydCB7IENoZWNrc3VtLCBTb3VyY2VEYXRhIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBpc0VtcHR5RGF0YSwgY29udmVydFRvQnVmZmVyIH0gZnJvbSBcIkBhd3MtY3J5cHRvL3V0aWxcIjtcblxuZXhwb3J0IGNsYXNzIFNoYTI1NiBpbXBsZW1lbnRzIENoZWNrc3VtIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzZWNyZXQ/OiBTb3VyY2VEYXRhO1xuICBwcml2YXRlIGhhc2g6IFJhd1NoYTI1NjtcbiAgcHJpdmF0ZSBvdXRlcj86IFJhd1NoYTI1NjtcbiAgcHJpdmF0ZSBlcnJvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHNlY3JldD86IFNvdXJjZURhdGEpIHtcbiAgICB0aGlzLnNlY3JldCA9IHNlY3JldDtcbiAgICB0aGlzLmhhc2ggPSBuZXcgUmF3U2hhMjU2KCk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgdXBkYXRlKHRvSGFzaDogU291cmNlRGF0YSk6IHZvaWQge1xuICAgIGlmIChpc0VtcHR5RGF0YSh0b0hhc2gpIHx8IHRoaXMuZXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5oYXNoLnVwZGF0ZShjb252ZXJ0VG9CdWZmZXIodG9IYXNoKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5lcnJvciA9IGU7XG4gICAgfVxuICB9XG5cbiAgLyogVGhpcyBzeW5jaHJvbm91cyBtZXRob2Qga2VlcHMgY29tcGF0aWJpbGl0eVxuICAgKiB3aXRoIHRoZSB2MiBhd3Mtc2RrLlxuICAgKi9cbiAgZGlnZXN0U3luYygpOiBVaW50OEFycmF5IHtcbiAgICBpZiAodGhpcy5lcnJvcikge1xuICAgICAgdGhyb3cgdGhpcy5lcnJvcjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vdXRlcikge1xuICAgICAgaWYgKCF0aGlzLm91dGVyLmZpbmlzaGVkKSB7XG4gICAgICAgIHRoaXMub3V0ZXIudXBkYXRlKHRoaXMuaGFzaC5kaWdlc3QoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLm91dGVyLmRpZ2VzdCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmhhc2guZGlnZXN0KCk7XG4gIH1cblxuICAvKiBUaGUgdW5kZXJseWluZyBkaWdlc3QgbWV0aG9kIGhlcmUgaXMgc3luY2hyb25vdXMuXG4gICAqIFRvIGtlZXAgdGhlIHNhbWUgaW50ZXJmYWNlIHdpdGggdGhlIG90aGVyIGhhc2ggZnVuY3Rpb25zXG4gICAqIHRoZSBkZWZhdWx0IGlzIHRvIGV4cG9zZSB0aGlzIGFzIGFuIGFzeW5jIG1ldGhvZC5cbiAgICogSG93ZXZlciwgaXQgY2FuIHNvbWV0aW1lcyBiZSB1c2VmdWwgdG8gaGF2ZSBhIHN5bmMgbWV0aG9kLlxuICAgKi9cbiAgYXN5bmMgZGlnZXN0KCk6IFByb21pc2U8VWludDhBcnJheT4ge1xuICAgIHJldHVybiB0aGlzLmRpZ2VzdFN5bmMoKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuaGFzaCA9IG5ldyBSYXdTaGEyNTYoKTtcbiAgICBpZiAodGhpcy5zZWNyZXQpIHtcbiAgICAgIHRoaXMub3V0ZXIgPSBuZXcgUmF3U2hhMjU2KCk7XG4gICAgICBjb25zdCBpbm5lciA9IGJ1ZmZlckZyb21TZWNyZXQodGhpcy5zZWNyZXQpO1xuICAgICAgY29uc3Qgb3V0ZXIgPSBuZXcgVWludDhBcnJheShCTE9DS19TSVpFKTtcbiAgICAgIG91dGVyLnNldChpbm5lcik7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQkxPQ0tfU0laRTsgaSsrKSB7XG4gICAgICAgIGlubmVyW2ldIF49IDB4MzY7XG4gICAgICAgIG91dGVyW2ldIF49IDB4NWM7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGFzaC51cGRhdGUoaW5uZXIpO1xuICAgICAgdGhpcy5vdXRlci51cGRhdGUob3V0ZXIpO1xuXG4gICAgICAvLyBvdmVyd3JpdGUgdGhlIGNvcGllZCBrZXkgaW4gbWVtb3J5XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlubmVyLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgICBpbm5lcltpXSA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJ1ZmZlckZyb21TZWNyZXQoc2VjcmV0OiBTb3VyY2VEYXRhKTogVWludDhBcnJheSB7XG4gIGxldCBpbnB1dCA9IGNvbnZlcnRUb0J1ZmZlcihzZWNyZXQpO1xuXG4gIGlmIChpbnB1dC5ieXRlTGVuZ3RoID4gQkxPQ0tfU0laRSkge1xuICAgIGNvbnN0IGJ1ZmZlckhhc2ggPSBuZXcgUmF3U2hhMjU2KCk7XG4gICAgYnVmZmVySGFzaC51cGRhdGUoaW5wdXQpO1xuICAgIGlucHV0ID0gYnVmZmVySGFzaC5kaWdlc3QoKTtcbiAgfVxuXG4gIGNvbnN0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KEJMT0NLX1NJWkUpO1xuICBidWZmZXIuc2V0KGlucHV0KTtcbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cbiIsICJleHBvcnQgKiBmcm9tIFwiLi9qc1NoYTI1NlwiO1xuIiwgInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIHNyY19leHBvcnRzID0ge307XG5fX2V4cG9ydChzcmNfZXhwb3J0cywge1xuICBBbGdvcml0aG1JZDogKCkgPT4gQWxnb3JpdGhtSWQsXG4gIEVuZHBvaW50VVJMU2NoZW1lOiAoKSA9PiBFbmRwb2ludFVSTFNjaGVtZSxcbiAgRmllbGRQb3NpdGlvbjogKCkgPT4gRmllbGRQb3NpdGlvbixcbiAgSHR0cEFwaUtleUF1dGhMb2NhdGlvbjogKCkgPT4gSHR0cEFwaUtleUF1dGhMb2NhdGlvbixcbiAgSHR0cEF1dGhMb2NhdGlvbjogKCkgPT4gSHR0cEF1dGhMb2NhdGlvbixcbiAgSW5pU2VjdGlvblR5cGU6ICgpID0+IEluaVNlY3Rpb25UeXBlLFxuICBSZXF1ZXN0SGFuZGxlclByb3RvY29sOiAoKSA9PiBSZXF1ZXN0SGFuZGxlclByb3RvY29sLFxuICBTTUlUSFlfQ09OVEVYVF9LRVk6ICgpID0+IFNNSVRIWV9DT05URVhUX0tFWSxcbiAgZ2V0RGVmYXVsdENsaWVudENvbmZpZ3VyYXRpb246ICgpID0+IGdldERlZmF1bHRDbGllbnRDb25maWd1cmF0aW9uLFxuICByZXNvbHZlRGVmYXVsdFJ1bnRpbWVDb25maWc6ICgpID0+IHJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZ1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhzcmNfZXhwb3J0cyk7XG5cbi8vIHNyYy9hdXRoL2F1dGgudHNcbnZhciBIdHRwQXV0aExvY2F0aW9uID0gLyogQF9fUFVSRV9fICovICgoSHR0cEF1dGhMb2NhdGlvbjIpID0+IHtcbiAgSHR0cEF1dGhMb2NhdGlvbjJbXCJIRUFERVJcIl0gPSBcImhlYWRlclwiO1xuICBIdHRwQXV0aExvY2F0aW9uMltcIlFVRVJZXCJdID0gXCJxdWVyeVwiO1xuICByZXR1cm4gSHR0cEF1dGhMb2NhdGlvbjI7XG59KShIdHRwQXV0aExvY2F0aW9uIHx8IHt9KTtcblxuLy8gc3JjL2F1dGgvSHR0cEFwaUtleUF1dGgudHNcbnZhciBIdHRwQXBpS2V5QXV0aExvY2F0aW9uID0gLyogQF9fUFVSRV9fICovICgoSHR0cEFwaUtleUF1dGhMb2NhdGlvbjIpID0+IHtcbiAgSHR0cEFwaUtleUF1dGhMb2NhdGlvbjJbXCJIRUFERVJcIl0gPSBcImhlYWRlclwiO1xuICBIdHRwQXBpS2V5QXV0aExvY2F0aW9uMltcIlFVRVJZXCJdID0gXCJxdWVyeVwiO1xuICByZXR1cm4gSHR0cEFwaUtleUF1dGhMb2NhdGlvbjI7XG59KShIdHRwQXBpS2V5QXV0aExvY2F0aW9uIHx8IHt9KTtcblxuLy8gc3JjL2VuZHBvaW50LnRzXG52YXIgRW5kcG9pbnRVUkxTY2hlbWUgPSAvKiBAX19QVVJFX18gKi8gKChFbmRwb2ludFVSTFNjaGVtZTIpID0+IHtcbiAgRW5kcG9pbnRVUkxTY2hlbWUyW1wiSFRUUFwiXSA9IFwiaHR0cFwiO1xuICBFbmRwb2ludFVSTFNjaGVtZTJbXCJIVFRQU1wiXSA9IFwiaHR0cHNcIjtcbiAgcmV0dXJuIEVuZHBvaW50VVJMU2NoZW1lMjtcbn0pKEVuZHBvaW50VVJMU2NoZW1lIHx8IHt9KTtcblxuLy8gc3JjL2V4dGVuc2lvbnMvY2hlY2tzdW0udHNcbnZhciBBbGdvcml0aG1JZCA9IC8qIEBfX1BVUkVfXyAqLyAoKEFsZ29yaXRobUlkMikgPT4ge1xuICBBbGdvcml0aG1JZDJbXCJNRDVcIl0gPSBcIm1kNVwiO1xuICBBbGdvcml0aG1JZDJbXCJDUkMzMlwiXSA9IFwiY3JjMzJcIjtcbiAgQWxnb3JpdGhtSWQyW1wiQ1JDMzJDXCJdID0gXCJjcmMzMmNcIjtcbiAgQWxnb3JpdGhtSWQyW1wiU0hBMVwiXSA9IFwic2hhMVwiO1xuICBBbGdvcml0aG1JZDJbXCJTSEEyNTZcIl0gPSBcInNoYTI1NlwiO1xuICByZXR1cm4gQWxnb3JpdGhtSWQyO1xufSkoQWxnb3JpdGhtSWQgfHwge30pO1xudmFyIGdldENoZWNrc3VtQ29uZmlndXJhdGlvbiA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgY29uc3QgY2hlY2tzdW1BbGdvcml0aG1zID0gW107XG4gIGlmIChydW50aW1lQ29uZmlnLnNoYTI1NiAhPT0gdm9pZCAwKSB7XG4gICAgY2hlY2tzdW1BbGdvcml0aG1zLnB1c2goe1xuICAgICAgYWxnb3JpdGhtSWQ6ICgpID0+IFwic2hhMjU2XCIgLyogU0hBMjU2ICovLFxuICAgICAgY2hlY2tzdW1Db25zdHJ1Y3RvcjogKCkgPT4gcnVudGltZUNvbmZpZy5zaGEyNTZcbiAgICB9KTtcbiAgfVxuICBpZiAocnVudGltZUNvbmZpZy5tZDUgIT0gdm9pZCAwKSB7XG4gICAgY2hlY2tzdW1BbGdvcml0aG1zLnB1c2goe1xuICAgICAgYWxnb3JpdGhtSWQ6ICgpID0+IFwibWQ1XCIgLyogTUQ1ICovLFxuICAgICAgY2hlY2tzdW1Db25zdHJ1Y3RvcjogKCkgPT4gcnVudGltZUNvbmZpZy5tZDVcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIF9jaGVja3N1bUFsZ29yaXRobXM6IGNoZWNrc3VtQWxnb3JpdGhtcyxcbiAgICBhZGRDaGVja3N1bUFsZ29yaXRobShhbGdvKSB7XG4gICAgICB0aGlzLl9jaGVja3N1bUFsZ29yaXRobXMucHVzaChhbGdvKTtcbiAgICB9LFxuICAgIGNoZWNrc3VtQWxnb3JpdGhtcygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jaGVja3N1bUFsZ29yaXRobXM7XG4gICAgfVxuICB9O1xufSwgXCJnZXRDaGVja3N1bUNvbmZpZ3VyYXRpb25cIik7XG52YXIgcmVzb2x2ZUNoZWNrc3VtUnVudGltZUNvbmZpZyA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKGNsaWVudENvbmZpZykgPT4ge1xuICBjb25zdCBydW50aW1lQ29uZmlnID0ge307XG4gIGNsaWVudENvbmZpZy5jaGVja3N1bUFsZ29yaXRobXMoKS5mb3JFYWNoKChjaGVja3N1bUFsZ29yaXRobSkgPT4ge1xuICAgIHJ1bnRpbWVDb25maWdbY2hlY2tzdW1BbGdvcml0aG0uYWxnb3JpdGhtSWQoKV0gPSBjaGVja3N1bUFsZ29yaXRobS5jaGVja3N1bUNvbnN0cnVjdG9yKCk7XG4gIH0pO1xuICByZXR1cm4gcnVudGltZUNvbmZpZztcbn0sIFwicmVzb2x2ZUNoZWNrc3VtUnVudGltZUNvbmZpZ1wiKTtcblxuLy8gc3JjL2V4dGVuc2lvbnMvZGVmYXVsdENsaWVudENvbmZpZ3VyYXRpb24udHNcbnZhciBnZXREZWZhdWx0Q2xpZW50Q29uZmlndXJhdGlvbiA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5nZXRDaGVja3N1bUNvbmZpZ3VyYXRpb24ocnVudGltZUNvbmZpZylcbiAgfTtcbn0sIFwiZ2V0RGVmYXVsdENsaWVudENvbmZpZ3VyYXRpb25cIik7XG52YXIgcmVzb2x2ZURlZmF1bHRSdW50aW1lQ29uZmlnID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoY29uZmlnKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4ucmVzb2x2ZUNoZWNrc3VtUnVudGltZUNvbmZpZyhjb25maWcpXG4gIH07XG59LCBcInJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZ1wiKTtcblxuLy8gc3JjL2h0dHAudHNcbnZhciBGaWVsZFBvc2l0aW9uID0gLyogQF9fUFVSRV9fICovICgoRmllbGRQb3NpdGlvbjIpID0+IHtcbiAgRmllbGRQb3NpdGlvbjJbRmllbGRQb3NpdGlvbjJbXCJIRUFERVJcIl0gPSAwXSA9IFwiSEVBREVSXCI7XG4gIEZpZWxkUG9zaXRpb24yW0ZpZWxkUG9zaXRpb24yW1wiVFJBSUxFUlwiXSA9IDFdID0gXCJUUkFJTEVSXCI7XG4gIHJldHVybiBGaWVsZFBvc2l0aW9uMjtcbn0pKEZpZWxkUG9zaXRpb24gfHwge30pO1xuXG4vLyBzcmMvbWlkZGxld2FyZS50c1xudmFyIFNNSVRIWV9DT05URVhUX0tFWSA9IFwiX19zbWl0aHlfY29udGV4dFwiO1xuXG4vLyBzcmMvcHJvZmlsZS50c1xudmFyIEluaVNlY3Rpb25UeXBlID0gLyogQF9fUFVSRV9fICovICgoSW5pU2VjdGlvblR5cGUyKSA9PiB7XG4gIEluaVNlY3Rpb25UeXBlMltcIlBST0ZJTEVcIl0gPSBcInByb2ZpbGVcIjtcbiAgSW5pU2VjdGlvblR5cGUyW1wiU1NPX1NFU1NJT05cIl0gPSBcInNzby1zZXNzaW9uXCI7XG4gIEluaVNlY3Rpb25UeXBlMltcIlNFUlZJQ0VTXCJdID0gXCJzZXJ2aWNlc1wiO1xuICByZXR1cm4gSW5pU2VjdGlvblR5cGUyO1xufSkoSW5pU2VjdGlvblR5cGUgfHwge30pO1xuXG4vLyBzcmMvdHJhbnNmZXIudHNcbnZhciBSZXF1ZXN0SGFuZGxlclByb3RvY29sID0gLyogQF9fUFVSRV9fICovICgoUmVxdWVzdEhhbmRsZXJQcm90b2NvbDIpID0+IHtcbiAgUmVxdWVzdEhhbmRsZXJQcm90b2NvbDJbXCJIVFRQXzBfOVwiXSA9IFwiaHR0cC8wLjlcIjtcbiAgUmVxdWVzdEhhbmRsZXJQcm90b2NvbDJbXCJIVFRQXzFfMFwiXSA9IFwiaHR0cC8xLjBcIjtcbiAgUmVxdWVzdEhhbmRsZXJQcm90b2NvbDJbXCJURFNfOF8wXCJdID0gXCJ0ZHMvOC4wXCI7XG4gIHJldHVybiBSZXF1ZXN0SGFuZGxlclByb3RvY29sMjtcbn0pKFJlcXVlc3RIYW5kbGVyUHJvdG9jb2wgfHwge30pO1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuXG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgSHR0cEF1dGhMb2NhdGlvbixcbiAgSHR0cEFwaUtleUF1dGhMb2NhdGlvbixcbiAgRW5kcG9pbnRVUkxTY2hlbWUsXG4gIEFsZ29yaXRobUlkLFxuICBnZXREZWZhdWx0Q2xpZW50Q29uZmlndXJhdGlvbixcbiAgcmVzb2x2ZURlZmF1bHRSdW50aW1lQ29uZmlnLFxuICBGaWVsZFBvc2l0aW9uLFxuICBTTUlUSFlfQ09OVEVYVF9LRVksXG4gIEluaVNlY3Rpb25UeXBlLFxuICBSZXF1ZXN0SGFuZGxlclByb3RvY29sXG59KTtcblxuIiwgInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIHNyY19leHBvcnRzID0ge307XG5fX2V4cG9ydChzcmNfZXhwb3J0cywge1xuICBGaWVsZDogKCkgPT4gRmllbGQsXG4gIEZpZWxkczogKCkgPT4gRmllbGRzLFxuICBIdHRwUmVxdWVzdDogKCkgPT4gSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZTogKCkgPT4gSHR0cFJlc3BvbnNlLFxuICBnZXRIdHRwSGFuZGxlckV4dGVuc2lvbkNvbmZpZ3VyYXRpb246ICgpID0+IGdldEh0dHBIYW5kbGVyRXh0ZW5zaW9uQ29uZmlndXJhdGlvbixcbiAgaXNWYWxpZEhvc3RuYW1lOiAoKSA9PiBpc1ZhbGlkSG9zdG5hbWUsXG4gIHJlc29sdmVIdHRwSGFuZGxlclJ1bnRpbWVDb25maWc6ICgpID0+IHJlc29sdmVIdHRwSGFuZGxlclJ1bnRpbWVDb25maWdcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoc3JjX2V4cG9ydHMpO1xuXG4vLyBzcmMvZXh0ZW5zaW9ucy9odHRwRXh0ZW5zaW9uQ29uZmlndXJhdGlvbi50c1xudmFyIGdldEh0dHBIYW5kbGVyRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgbGV0IGh0dHBIYW5kbGVyID0gcnVudGltZUNvbmZpZy5odHRwSGFuZGxlcjtcbiAgcmV0dXJuIHtcbiAgICBzZXRIdHRwSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgICBodHRwSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfSxcbiAgICBodHRwSGFuZGxlcigpIHtcbiAgICAgIHJldHVybiBodHRwSGFuZGxlcjtcbiAgICB9LFxuICAgIHVwZGF0ZUh0dHBDbGllbnRDb25maWcoa2V5LCB2YWx1ZSkge1xuICAgICAgaHR0cEhhbmRsZXIudXBkYXRlSHR0cENsaWVudENvbmZpZyhrZXksIHZhbHVlKTtcbiAgICB9LFxuICAgIGh0dHBIYW5kbGVyQ29uZmlncygpIHtcbiAgICAgIHJldHVybiBodHRwSGFuZGxlci5odHRwSGFuZGxlckNvbmZpZ3MoKTtcbiAgICB9XG4gIH07XG59LCBcImdldEh0dHBIYW5kbGVyRXh0ZW5zaW9uQ29uZmlndXJhdGlvblwiKTtcbnZhciByZXNvbHZlSHR0cEhhbmRsZXJSdW50aW1lQ29uZmlnID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoaHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaHR0cEhhbmRsZXI6IGh0dHBIYW5kbGVyRXh0ZW5zaW9uQ29uZmlndXJhdGlvbi5odHRwSGFuZGxlcigpXG4gIH07XG59LCBcInJlc29sdmVIdHRwSGFuZGxlclJ1bnRpbWVDb25maWdcIik7XG5cbi8vIHNyYy9GaWVsZC50c1xudmFyIGltcG9ydF90eXBlcyA9IHJlcXVpcmUoXCJAc21pdGh5L3R5cGVzXCIpO1xudmFyIF9GaWVsZCA9IGNsYXNzIF9GaWVsZCB7XG4gIGNvbnN0cnVjdG9yKHsgbmFtZSwga2luZCA9IGltcG9ydF90eXBlcy5GaWVsZFBvc2l0aW9uLkhFQURFUiwgdmFsdWVzID0gW10gfSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5raW5kID0ga2luZDtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgfVxuICAvKipcbiAgICogQXBwZW5kcyBhIHZhbHVlIHRvIHRoZSBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBhcHBlbmQuXG4gICAqL1xuICBhZGQodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgfVxuICAvKipcbiAgICogT3ZlcndyaXRlIGV4aXN0aW5nIGZpZWxkIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlcyBUaGUgbmV3IGZpZWxkIHZhbHVlcy5cbiAgICovXG4gIHNldCh2YWx1ZXMpIHtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBtYXRjaGluZyBlbnRyaWVzIGZyb20gbGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIFZhbHVlIHRvIHJlbW92ZS5cbiAgICovXG4gIHJlbW92ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSB2YWx1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nLlxuICAgKlxuICAgKiBAcmV0dXJucyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2Yge0BsaW5rIEZpZWxkfS5cbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcy5tYXAoKHYpID0+IHYuaW5jbHVkZXMoXCIsXCIpIHx8IHYuaW5jbHVkZXMoXCIgXCIpID8gYFwiJHt2fVwiYCA6IHYpLmpvaW4oXCIsIFwiKTtcbiAgfVxuICAvKipcbiAgICogR2V0IHN0cmluZyB2YWx1ZXMgYXMgYSBsaXN0XG4gICAqXG4gICAqIEByZXR1cm5zIFZhbHVlcyBpbiB7QGxpbmsgRmllbGR9IGFzIGEgbGlzdC5cbiAgICovXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gIH1cbn07XG5fX25hbWUoX0ZpZWxkLCBcIkZpZWxkXCIpO1xudmFyIEZpZWxkID0gX0ZpZWxkO1xuXG4vLyBzcmMvRmllbGRzLnRzXG52YXIgX0ZpZWxkcyA9IGNsYXNzIF9GaWVsZHMge1xuICBjb25zdHJ1Y3Rvcih7IGZpZWxkcyA9IFtdLCBlbmNvZGluZyA9IFwidXRmLThcIiB9KSB7XG4gICAgdGhpcy5lbnRyaWVzID0ge307XG4gICAgZmllbGRzLmZvckVhY2godGhpcy5zZXRGaWVsZC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBlbnRyeSBmb3IgYSB7QGxpbmsgRmllbGR9IG5hbWUuIFRoZSBgbmFtZWBcbiAgICogYXR0cmlidXRlIHdpbGwgYmUgdXNlZCB0byBrZXkgdGhlIGNvbGxlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBmaWVsZCBUaGUge0BsaW5rIEZpZWxkfSB0byBzZXQuXG4gICAqL1xuICBzZXRGaWVsZChmaWVsZCkge1xuICAgIHRoaXMuZW50cmllc1tmaWVsZC5uYW1lLnRvTG93ZXJDYXNlKCldID0gZmllbGQ7XG4gIH1cbiAgLyoqXG4gICAqICBSZXRyaWV2ZSB7QGxpbmsgRmllbGR9IGVudHJ5IGJ5IG5hbWUuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB7QGxpbmsgRmllbGR9IGVudHJ5XG4gICAqICB0byByZXRyaWV2ZVxuICAgKiBAcmV0dXJucyBUaGUge0BsaW5rIEZpZWxkfSBpZiBpdCBleGlzdHMuXG4gICAqL1xuICBnZXRGaWVsZChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICB9XG4gIC8qKlxuICAgKiBEZWxldGUgZW50cnkgZnJvbSBjb2xsZWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBlbnRyeSB0byBkZWxldGUuXG4gICAqL1xuICByZW1vdmVGaWVsZChuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZW50cmllc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICB9XG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHJldHJpZXZpbmcgc3BlY2lmaWMgdHlwZXMgb2YgZmllbGRzLlxuICAgKiBVc2VkIHRvIGdyYWIgYWxsIGhlYWRlcnMgb3IgYWxsIHRyYWlsZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ga2luZCB7QGxpbmsgRmllbGRQb3NpdGlvbn0gb2YgZW50cmllcyB0byByZXRyaWV2ZS5cbiAgICogQHJldHVybnMgVGhlIHtAbGluayBGaWVsZH0gZW50cmllcyB3aXRoIHRoZSBzcGVjaWZpZWRcbiAgICogIHtAbGluayBGaWVsZFBvc2l0aW9ufS5cbiAgICovXG4gIGdldEJ5VHlwZShraW5kKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5lbnRyaWVzKS5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC5raW5kID09PSBraW5kKTtcbiAgfVxufTtcbl9fbmFtZShfRmllbGRzLCBcIkZpZWxkc1wiKTtcbnZhciBGaWVsZHMgPSBfRmllbGRzO1xuXG4vLyBzcmMvaHR0cFJlcXVlc3QudHNcbnZhciBfSHR0cFJlcXVlc3QgPSBjbGFzcyBfSHR0cFJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCBcIkdFVFwiO1xuICAgIHRoaXMuaG9zdG5hbWUgPSBvcHRpb25zLmhvc3RuYW1lIHx8IFwibG9jYWxob3N0XCI7XG4gICAgdGhpcy5wb3J0ID0gb3B0aW9ucy5wb3J0O1xuICAgIHRoaXMucXVlcnkgPSBvcHRpb25zLnF1ZXJ5IHx8IHt9O1xuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICB0aGlzLmJvZHkgPSBvcHRpb25zLmJvZHk7XG4gICAgdGhpcy5wcm90b2NvbCA9IG9wdGlvbnMucHJvdG9jb2wgPyBvcHRpb25zLnByb3RvY29sLnNsaWNlKC0xKSAhPT0gXCI6XCIgPyBgJHtvcHRpb25zLnByb3RvY29sfTpgIDogb3B0aW9ucy5wcm90b2NvbCA6IFwiaHR0cHM6XCI7XG4gICAgdGhpcy5wYXRoID0gb3B0aW9ucy5wYXRoID8gb3B0aW9ucy5wYXRoLmNoYXJBdCgwKSAhPT0gXCIvXCIgPyBgLyR7b3B0aW9ucy5wYXRofWAgOiBvcHRpb25zLnBhdGggOiBcIi9cIjtcbiAgICB0aGlzLnVzZXJuYW1lID0gb3B0aW9ucy51c2VybmFtZTtcbiAgICB0aGlzLnBhc3N3b3JkID0gb3B0aW9ucy5wYXNzd29yZDtcbiAgICB0aGlzLmZyYWdtZW50ID0gb3B0aW9ucy5mcmFnbWVudDtcbiAgfVxuICBzdGF0aWMgaXNJbnN0YW5jZShyZXF1ZXN0KSB7XG4gICAgaWYgKCFyZXF1ZXN0KVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHJlcSA9IHJlcXVlc3Q7XG4gICAgcmV0dXJuIFwibWV0aG9kXCIgaW4gcmVxICYmIFwicHJvdG9jb2xcIiBpbiByZXEgJiYgXCJob3N0bmFtZVwiIGluIHJlcSAmJiBcInBhdGhcIiBpbiByZXEgJiYgdHlwZW9mIHJlcVtcInF1ZXJ5XCJdID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZXFbXCJoZWFkZXJzXCJdID09PSBcIm9iamVjdFwiO1xuICB9XG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGNsb25lZCA9IG5ldyBfSHR0cFJlcXVlc3Qoe1xuICAgICAgLi4udGhpcyxcbiAgICAgIGhlYWRlcnM6IHsgLi4udGhpcy5oZWFkZXJzIH1cbiAgICB9KTtcbiAgICBpZiAoY2xvbmVkLnF1ZXJ5KVxuICAgICAgY2xvbmVkLnF1ZXJ5ID0gY2xvbmVRdWVyeShjbG9uZWQucXVlcnkpO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbn07XG5fX25hbWUoX0h0dHBSZXF1ZXN0LCBcIkh0dHBSZXF1ZXN0XCIpO1xudmFyIEh0dHBSZXF1ZXN0ID0gX0h0dHBSZXF1ZXN0O1xuZnVuY3Rpb24gY2xvbmVRdWVyeShxdWVyeSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMocXVlcnkpLnJlZHVjZSgoY2FycnksIHBhcmFtTmFtZSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtID0gcXVlcnlbcGFyYW1OYW1lXTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2FycnksXG4gICAgICBbcGFyYW1OYW1lXTogQXJyYXkuaXNBcnJheShwYXJhbSkgPyBbLi4ucGFyYW1dIDogcGFyYW1cbiAgICB9O1xuICB9LCB7fSk7XG59XG5fX25hbWUoY2xvbmVRdWVyeSwgXCJjbG9uZVF1ZXJ5XCIpO1xuXG4vLyBzcmMvaHR0cFJlc3BvbnNlLnRzXG52YXIgX0h0dHBSZXNwb25zZSA9IGNsYXNzIF9IdHRwUmVzcG9uc2Uge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gb3B0aW9ucy5zdGF0dXNDb2RlO1xuICAgIHRoaXMucmVhc29uID0gb3B0aW9ucy5yZWFzb247XG4gICAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgIHRoaXMuYm9keSA9IG9wdGlvbnMuYm9keTtcbiAgfVxuICBzdGF0aWMgaXNJbnN0YW5jZShyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2UpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgcmVzcCA9IHJlc3BvbnNlO1xuICAgIHJldHVybiB0eXBlb2YgcmVzcC5zdGF0dXNDb2RlID09PSBcIm51bWJlclwiICYmIHR5cGVvZiByZXNwLmhlYWRlcnMgPT09IFwib2JqZWN0XCI7XG4gIH1cbn07XG5fX25hbWUoX0h0dHBSZXNwb25zZSwgXCJIdHRwUmVzcG9uc2VcIik7XG52YXIgSHR0cFJlc3BvbnNlID0gX0h0dHBSZXNwb25zZTtcblxuLy8gc3JjL2lzVmFsaWRIb3N0bmFtZS50c1xuZnVuY3Rpb24gaXNWYWxpZEhvc3RuYW1lKGhvc3RuYW1lKSB7XG4gIGNvbnN0IGhvc3RQYXR0ZXJuID0gL15bYS16MC05XVthLXowLTlcXC5cXC1dKlthLXowLTldJC87XG4gIHJldHVybiBob3N0UGF0dGVybi50ZXN0KGhvc3RuYW1lKTtcbn1cbl9fbmFtZShpc1ZhbGlkSG9zdG5hbWUsIFwiaXNWYWxpZEhvc3RuYW1lXCIpO1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuXG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0SHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uLFxuICByZXNvbHZlSHR0cEhhbmRsZXJSdW50aW1lQ29uZmlnLFxuICBGaWVsZCxcbiAgRmllbGRzLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBpc1ZhbGlkSG9zdG5hbWVcbn0pO1xuXG4iLCAidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgc3JjX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KHNyY19leHBvcnRzLCB7XG4gIEFsZ29yaXRobUlkOiAoKSA9PiBBbGdvcml0aG1JZCxcbiAgRW5kcG9pbnRVUkxTY2hlbWU6ICgpID0+IEVuZHBvaW50VVJMU2NoZW1lLFxuICBGaWVsZFBvc2l0aW9uOiAoKSA9PiBGaWVsZFBvc2l0aW9uLFxuICBIdHRwQXBpS2V5QXV0aExvY2F0aW9uOiAoKSA9PiBIdHRwQXBpS2V5QXV0aExvY2F0aW9uLFxuICBIdHRwQXV0aExvY2F0aW9uOiAoKSA9PiBIdHRwQXV0aExvY2F0aW9uLFxuICBJbmlTZWN0aW9uVHlwZTogKCkgPT4gSW5pU2VjdGlvblR5cGUsXG4gIFJlcXVlc3RIYW5kbGVyUHJvdG9jb2w6ICgpID0+IFJlcXVlc3RIYW5kbGVyUHJvdG9jb2wsXG4gIFNNSVRIWV9DT05URVhUX0tFWTogKCkgPT4gU01JVEhZX0NPTlRFWFRfS0VZLFxuICBnZXREZWZhdWx0Q2xpZW50Q29uZmlndXJhdGlvbjogKCkgPT4gZ2V0RGVmYXVsdENsaWVudENvbmZpZ3VyYXRpb24sXG4gIHJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZzogKCkgPT4gcmVzb2x2ZURlZmF1bHRSdW50aW1lQ29uZmlnXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcblxuLy8gc3JjL2F1dGgvYXV0aC50c1xudmFyIEh0dHBBdXRoTG9jYXRpb24gPSAvKiBAX19QVVJFX18gKi8gKChIdHRwQXV0aExvY2F0aW9uMikgPT4ge1xuICBIdHRwQXV0aExvY2F0aW9uMltcIkhFQURFUlwiXSA9IFwiaGVhZGVyXCI7XG4gIEh0dHBBdXRoTG9jYXRpb24yW1wiUVVFUllcIl0gPSBcInF1ZXJ5XCI7XG4gIHJldHVybiBIdHRwQXV0aExvY2F0aW9uMjtcbn0pKEh0dHBBdXRoTG9jYXRpb24gfHwge30pO1xuXG4vLyBzcmMvYXV0aC9IdHRwQXBpS2V5QXV0aC50c1xudmFyIEh0dHBBcGlLZXlBdXRoTG9jYXRpb24gPSAvKiBAX19QVVJFX18gKi8gKChIdHRwQXBpS2V5QXV0aExvY2F0aW9uMikgPT4ge1xuICBIdHRwQXBpS2V5QXV0aExvY2F0aW9uMltcIkhFQURFUlwiXSA9IFwiaGVhZGVyXCI7XG4gIEh0dHBBcGlLZXlBdXRoTG9jYXRpb24yW1wiUVVFUllcIl0gPSBcInF1ZXJ5XCI7XG4gIHJldHVybiBIdHRwQXBpS2V5QXV0aExvY2F0aW9uMjtcbn0pKEh0dHBBcGlLZXlBdXRoTG9jYXRpb24gfHwge30pO1xuXG4vLyBzcmMvZW5kcG9pbnQudHNcbnZhciBFbmRwb2ludFVSTFNjaGVtZSA9IC8qIEBfX1BVUkVfXyAqLyAoKEVuZHBvaW50VVJMU2NoZW1lMikgPT4ge1xuICBFbmRwb2ludFVSTFNjaGVtZTJbXCJIVFRQXCJdID0gXCJodHRwXCI7XG4gIEVuZHBvaW50VVJMU2NoZW1lMltcIkhUVFBTXCJdID0gXCJodHRwc1wiO1xuICByZXR1cm4gRW5kcG9pbnRVUkxTY2hlbWUyO1xufSkoRW5kcG9pbnRVUkxTY2hlbWUgfHwge30pO1xuXG4vLyBzcmMvZXh0ZW5zaW9ucy9jaGVja3N1bS50c1xudmFyIEFsZ29yaXRobUlkID0gLyogQF9fUFVSRV9fICovICgoQWxnb3JpdGhtSWQyKSA9PiB7XG4gIEFsZ29yaXRobUlkMltcIk1ENVwiXSA9IFwibWQ1XCI7XG4gIEFsZ29yaXRobUlkMltcIkNSQzMyXCJdID0gXCJjcmMzMlwiO1xuICBBbGdvcml0aG1JZDJbXCJDUkMzMkNcIl0gPSBcImNyYzMyY1wiO1xuICBBbGdvcml0aG1JZDJbXCJTSEExXCJdID0gXCJzaGExXCI7XG4gIEFsZ29yaXRobUlkMltcIlNIQTI1NlwiXSA9IFwic2hhMjU2XCI7XG4gIHJldHVybiBBbGdvcml0aG1JZDI7XG59KShBbGdvcml0aG1JZCB8fCB7fSk7XG52YXIgZ2V0Q2hlY2tzdW1Db25maWd1cmF0aW9uID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgocnVudGltZUNvbmZpZykgPT4ge1xuICBjb25zdCBjaGVja3N1bUFsZ29yaXRobXMgPSBbXTtcbiAgaWYgKHJ1bnRpbWVDb25maWcuc2hhMjU2ICE9PSB2b2lkIDApIHtcbiAgICBjaGVja3N1bUFsZ29yaXRobXMucHVzaCh7XG4gICAgICBhbGdvcml0aG1JZDogKCkgPT4gXCJzaGEyNTZcIiAvKiBTSEEyNTYgKi8sXG4gICAgICBjaGVja3N1bUNvbnN0cnVjdG9yOiAoKSA9PiBydW50aW1lQ29uZmlnLnNoYTI1NlxuICAgIH0pO1xuICB9XG4gIGlmIChydW50aW1lQ29uZmlnLm1kNSAhPSB2b2lkIDApIHtcbiAgICBjaGVja3N1bUFsZ29yaXRobXMucHVzaCh7XG4gICAgICBhbGdvcml0aG1JZDogKCkgPT4gXCJtZDVcIiAvKiBNRDUgKi8sXG4gICAgICBjaGVja3N1bUNvbnN0cnVjdG9yOiAoKSA9PiBydW50aW1lQ29uZmlnLm1kNVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgX2NoZWNrc3VtQWxnb3JpdGhtczogY2hlY2tzdW1BbGdvcml0aG1zLFxuICAgIGFkZENoZWNrc3VtQWxnb3JpdGhtKGFsZ28pIHtcbiAgICAgIHRoaXMuX2NoZWNrc3VtQWxnb3JpdGhtcy5wdXNoKGFsZ28pO1xuICAgIH0sXG4gICAgY2hlY2tzdW1BbGdvcml0aG1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrc3VtQWxnb3JpdGhtcztcbiAgICB9XG4gIH07XG59LCBcImdldENoZWNrc3VtQ29uZmlndXJhdGlvblwiKTtcbnZhciByZXNvbHZlQ2hlY2tzdW1SdW50aW1lQ29uZmlnID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoY2xpZW50Q29uZmlnKSA9PiB7XG4gIGNvbnN0IHJ1bnRpbWVDb25maWcgPSB7fTtcbiAgY2xpZW50Q29uZmlnLmNoZWNrc3VtQWxnb3JpdGhtcygpLmZvckVhY2goKGNoZWNrc3VtQWxnb3JpdGhtKSA9PiB7XG4gICAgcnVudGltZUNvbmZpZ1tjaGVja3N1bUFsZ29yaXRobS5hbGdvcml0aG1JZCgpXSA9IGNoZWNrc3VtQWxnb3JpdGhtLmNoZWNrc3VtQ29uc3RydWN0b3IoKTtcbiAgfSk7XG4gIHJldHVybiBydW50aW1lQ29uZmlnO1xufSwgXCJyZXNvbHZlQ2hlY2tzdW1SdW50aW1lQ29uZmlnXCIpO1xuXG4vLyBzcmMvZXh0ZW5zaW9ucy9kZWZhdWx0Q2xpZW50Q29uZmlndXJhdGlvbi50c1xudmFyIGdldERlZmF1bHRDbGllbnRDb25maWd1cmF0aW9uID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgocnVudGltZUNvbmZpZykgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLmdldENoZWNrc3VtQ29uZmlndXJhdGlvbihydW50aW1lQ29uZmlnKVxuICB9O1xufSwgXCJnZXREZWZhdWx0Q2xpZW50Q29uZmlndXJhdGlvblwiKTtcbnZhciByZXNvbHZlRGVmYXVsdFJ1bnRpbWVDb25maWcgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChjb25maWcpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5yZXNvbHZlQ2hlY2tzdW1SdW50aW1lQ29uZmlnKGNvbmZpZylcbiAgfTtcbn0sIFwicmVzb2x2ZURlZmF1bHRSdW50aW1lQ29uZmlnXCIpO1xuXG4vLyBzcmMvaHR0cC50c1xudmFyIEZpZWxkUG9zaXRpb24gPSAvKiBAX19QVVJFX18gKi8gKChGaWVsZFBvc2l0aW9uMikgPT4ge1xuICBGaWVsZFBvc2l0aW9uMltGaWVsZFBvc2l0aW9uMltcIkhFQURFUlwiXSA9IDBdID0gXCJIRUFERVJcIjtcbiAgRmllbGRQb3NpdGlvbjJbRmllbGRQb3NpdGlvbjJbXCJUUkFJTEVSXCJdID0gMV0gPSBcIlRSQUlMRVJcIjtcbiAgcmV0dXJuIEZpZWxkUG9zaXRpb24yO1xufSkoRmllbGRQb3NpdGlvbiB8fCB7fSk7XG5cbi8vIHNyYy9taWRkbGV3YXJlLnRzXG52YXIgU01JVEhZX0NPTlRFWFRfS0VZID0gXCJfX3NtaXRoeV9jb250ZXh0XCI7XG5cbi8vIHNyYy9wcm9maWxlLnRzXG52YXIgSW5pU2VjdGlvblR5cGUgPSAvKiBAX19QVVJFX18gKi8gKChJbmlTZWN0aW9uVHlwZTIpID0+IHtcbiAgSW5pU2VjdGlvblR5cGUyW1wiUFJPRklMRVwiXSA9IFwicHJvZmlsZVwiO1xuICBJbmlTZWN0aW9uVHlwZTJbXCJTU09fU0VTU0lPTlwiXSA9IFwic3NvLXNlc3Npb25cIjtcbiAgSW5pU2VjdGlvblR5cGUyW1wiU0VSVklDRVNcIl0gPSBcInNlcnZpY2VzXCI7XG4gIHJldHVybiBJbmlTZWN0aW9uVHlwZTI7XG59KShJbmlTZWN0aW9uVHlwZSB8fCB7fSk7XG5cbi8vIHNyYy90cmFuc2Zlci50c1xudmFyIFJlcXVlc3RIYW5kbGVyUHJvdG9jb2wgPSAvKiBAX19QVVJFX18gKi8gKChSZXF1ZXN0SGFuZGxlclByb3RvY29sMikgPT4ge1xuICBSZXF1ZXN0SGFuZGxlclByb3RvY29sMltcIkhUVFBfMF85XCJdID0gXCJodHRwLzAuOVwiO1xuICBSZXF1ZXN0SGFuZGxlclByb3RvY29sMltcIkhUVFBfMV8wXCJdID0gXCJodHRwLzEuMFwiO1xuICBSZXF1ZXN0SGFuZGxlclByb3RvY29sMltcIlREU184XzBcIl0gPSBcInRkcy84LjBcIjtcbiAgcmV0dXJuIFJlcXVlc3RIYW5kbGVyUHJvdG9jb2wyO1xufSkoUmVxdWVzdEhhbmRsZXJQcm90b2NvbCB8fCB7fSk7XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG5cbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBIdHRwQXV0aExvY2F0aW9uLFxuICBIdHRwQXBpS2V5QXV0aExvY2F0aW9uLFxuICBFbmRwb2ludFVSTFNjaGVtZSxcbiAgQWxnb3JpdGhtSWQsXG4gIGdldERlZmF1bHRDbGllbnRDb25maWd1cmF0aW9uLFxuICByZXNvbHZlRGVmYXVsdFJ1bnRpbWVDb25maWcsXG4gIEZpZWxkUG9zaXRpb24sXG4gIFNNSVRIWV9DT05URVhUX0tFWSxcbiAgSW5pU2VjdGlvblR5cGUsXG4gIFJlcXVlc3RIYW5kbGVyUHJvdG9jb2xcbn0pO1xuXG4iLCAidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgc3JjX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KHNyY19leHBvcnRzLCB7XG4gIGdldFNtaXRoeUNvbnRleHQ6ICgpID0+IGdldFNtaXRoeUNvbnRleHQsXG4gIG5vcm1hbGl6ZVByb3ZpZGVyOiAoKSA9PiBub3JtYWxpemVQcm92aWRlclxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhzcmNfZXhwb3J0cyk7XG5cbi8vIHNyYy9nZXRTbWl0aHlDb250ZXh0LnRzXG52YXIgaW1wb3J0X3R5cGVzID0gcmVxdWlyZShcIkBzbWl0aHkvdHlwZXNcIik7XG52YXIgZ2V0U21pdGh5Q29udGV4dCA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKGNvbnRleHQpID0+IGNvbnRleHRbaW1wb3J0X3R5cGVzLlNNSVRIWV9DT05URVhUX0tFWV0gfHwgKGNvbnRleHRbaW1wb3J0X3R5cGVzLlNNSVRIWV9DT05URVhUX0tFWV0gPSB7fSksIFwiZ2V0U21pdGh5Q29udGV4dFwiKTtcblxuLy8gc3JjL25vcm1hbGl6ZVByb3ZpZGVyLnRzXG52YXIgbm9ybWFsaXplUHJvdmlkZXIgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChpbnB1dCkgPT4ge1xuICBpZiAodHlwZW9mIGlucHV0ID09PSBcImZ1bmN0aW9uXCIpXG4gICAgcmV0dXJuIGlucHV0O1xuICBjb25zdCBwcm9taXNpZmllZCA9IFByb21pc2UucmVzb2x2ZShpbnB1dCk7XG4gIHJldHVybiAoKSA9PiBwcm9taXNpZmllZDtcbn0sIFwibm9ybWFsaXplUHJvdmlkZXJcIik7XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG5cbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRTbWl0aHlDb250ZXh0LFxuICBub3JtYWxpemVQcm92aWRlclxufSk7XG5cbiIsICJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX25hbWUgPSAodGFyZ2V0LCB2YWx1ZSkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJuYW1lXCIsIHsgdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgaXNBcnJheUJ1ZmZlcjogKCkgPT4gaXNBcnJheUJ1ZmZlclxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhzcmNfZXhwb3J0cyk7XG52YXIgaXNBcnJheUJ1ZmZlciA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKGFyZykgPT4gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgJiYgYXJnIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09IFwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIiwgXCJpc0FycmF5QnVmZmVyXCIpO1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuXG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheUJ1ZmZlclxufSk7XG5cbiIsICJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX25hbWUgPSAodGFyZ2V0LCB2YWx1ZSkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJuYW1lXCIsIHsgdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgZnJvbUFycmF5QnVmZmVyOiAoKSA9PiBmcm9tQXJyYXlCdWZmZXIsXG4gIGZyb21TdHJpbmc6ICgpID0+IGZyb21TdHJpbmdcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoc3JjX2V4cG9ydHMpO1xudmFyIGltcG9ydF9pc19hcnJheV9idWZmZXIgPSByZXF1aXJlKFwiQHNtaXRoeS9pcy1hcnJheS1idWZmZXJcIik7XG52YXIgaW1wb3J0X2J1ZmZlciA9IHJlcXVpcmUoXCJidWZmZXJcIik7XG52YXIgZnJvbUFycmF5QnVmZmVyID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoaW5wdXQsIG9mZnNldCA9IDAsIGxlbmd0aCA9IGlucHV0LmJ5dGVMZW5ndGggLSBvZmZzZXQpID0+IHtcbiAgaWYgKCEoMCwgaW1wb3J0X2lzX2FycmF5X2J1ZmZlci5pc0FycmF5QnVmZmVyKShpbnB1dCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXCJpbnB1dFwiIGFyZ3VtZW50IG11c3QgYmUgQXJyYXlCdWZmZXIuIFJlY2VpdmVkIHR5cGUgJHt0eXBlb2YgaW5wdXR9ICgke2lucHV0fSlgKTtcbiAgfVxuICByZXR1cm4gaW1wb3J0X2J1ZmZlci5CdWZmZXIuZnJvbShpbnB1dCwgb2Zmc2V0LCBsZW5ndGgpO1xufSwgXCJmcm9tQXJyYXlCdWZmZXJcIik7XG52YXIgZnJvbVN0cmluZyA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKGlucHV0LCBlbmNvZGluZykgPT4ge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFwiaW5wdXRcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nLiBSZWNlaXZlZCB0eXBlICR7dHlwZW9mIGlucHV0fSAoJHtpbnB1dH0pYCk7XG4gIH1cbiAgcmV0dXJuIGVuY29kaW5nID8gaW1wb3J0X2J1ZmZlci5CdWZmZXIuZnJvbShpbnB1dCwgZW5jb2RpbmcpIDogaW1wb3J0X2J1ZmZlci5CdWZmZXIuZnJvbShpbnB1dCk7XG59LCBcImZyb21TdHJpbmdcIik7XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG5cbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBmcm9tQXJyYXlCdWZmZXIsXG4gIGZyb21TdHJpbmdcbn0pO1xuXG4iLCAidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgc3JjX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KHNyY19leHBvcnRzLCB7XG4gIGZyb21VdGY4OiAoKSA9PiBmcm9tVXRmOCxcbiAgdG9VaW50OEFycmF5OiAoKSA9PiB0b1VpbnQ4QXJyYXksXG4gIHRvVXRmODogKCkgPT4gdG9VdGY4XG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcblxuLy8gc3JjL2Zyb21VdGY4LnRzXG52YXIgaW1wb3J0X3V0aWxfYnVmZmVyX2Zyb20gPSByZXF1aXJlKFwiQHNtaXRoeS91dGlsLWJ1ZmZlci1mcm9tXCIpO1xudmFyIGZyb21VdGY4ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoaW5wdXQpID0+IHtcbiAgY29uc3QgYnVmID0gKDAsIGltcG9ydF91dGlsX2J1ZmZlcl9mcm9tLmZyb21TdHJpbmcpKGlucHV0LCBcInV0ZjhcIik7XG4gIHJldHVybiBuZXcgVWludDhBcnJheShidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbn0sIFwiZnJvbVV0ZjhcIik7XG5cbi8vIHNyYy90b1VpbnQ4QXJyYXkudHNcbnZhciB0b1VpbnQ4QXJyYXkgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChkYXRhKSA9PiB7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBmcm9tVXRmOChkYXRhKTtcbiAgfVxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCAvIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQpO1xuICB9XG4gIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKTtcbn0sIFwidG9VaW50OEFycmF5XCIpO1xuXG4vLyBzcmMvdG9VdGY4LnRzXG5cbnZhciB0b1V0ZjggPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChpbnB1dCkgPT4ge1xuICBpZiAodHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGlucHV0LmJ5dGVPZmZzZXQgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGlucHV0LmJ5dGVMZW5ndGggIT09IFwibnVtYmVyXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJAc21pdGh5L3V0aWwtdXRmODogdG9VdGY4IGVuY29kZXIgZnVuY3Rpb24gb25seSBhY2NlcHRzIHN0cmluZyB8IFVpbnQ4QXJyYXkuXCIpO1xuICB9XG4gIHJldHVybiAoMCwgaW1wb3J0X3V0aWxfYnVmZmVyX2Zyb20uZnJvbUFycmF5QnVmZmVyKShpbnB1dC5idWZmZXIsIGlucHV0LmJ5dGVPZmZzZXQsIGlucHV0LmJ5dGVMZW5ndGgpLnRvU3RyaW5nKFwidXRmOFwiKTtcbn0sIFwidG9VdGY4XCIpO1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuXG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZnJvbVV0ZjgsXG4gIHRvVWludDhBcnJheSxcbiAgdG9VdGY4XG59KTtcblxuIiwgInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIHNyY19leHBvcnRzID0ge307XG5fX2V4cG9ydChzcmNfZXhwb3J0cywge1xuICBmcm9tSGV4OiAoKSA9PiBmcm9tSGV4LFxuICB0b0hleDogKCkgPT4gdG9IZXhcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoc3JjX2V4cG9ydHMpO1xudmFyIFNIT1JUX1RPX0hFWCA9IHt9O1xudmFyIEhFWF9UT19TSE9SVCA9IHt9O1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICBsZXQgZW5jb2RlZEJ5dGUgPSBpLnRvU3RyaW5nKDE2KS50b0xvd2VyQ2FzZSgpO1xuICBpZiAoZW5jb2RlZEJ5dGUubGVuZ3RoID09PSAxKSB7XG4gICAgZW5jb2RlZEJ5dGUgPSBgMCR7ZW5jb2RlZEJ5dGV9YDtcbiAgfVxuICBTSE9SVF9UT19IRVhbaV0gPSBlbmNvZGVkQnl0ZTtcbiAgSEVYX1RPX1NIT1JUW2VuY29kZWRCeXRlXSA9IGk7XG59XG5mdW5jdGlvbiBmcm9tSGV4KGVuY29kZWQpIHtcbiAgaWYgKGVuY29kZWQubGVuZ3RoICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkhleCBlbmNvZGVkIHN0cmluZ3MgbXVzdCBoYXZlIGFuIGV2ZW4gbnVtYmVyIGxlbmd0aFwiKTtcbiAgfVxuICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheShlbmNvZGVkLmxlbmd0aCAvIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBjb25zdCBlbmNvZGVkQnl0ZSA9IGVuY29kZWQuc2xpY2UoaSwgaSArIDIpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGVuY29kZWRCeXRlIGluIEhFWF9UT19TSE9SVCkge1xuICAgICAgb3V0W2kgLyAyXSA9IEhFWF9UT19TSE9SVFtlbmNvZGVkQnl0ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRlY29kZSB1bnJlY29nbml6ZWQgc2VxdWVuY2UgJHtlbmNvZGVkQnl0ZX0gYXMgaGV4YWRlY2ltYWxgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cbl9fbmFtZShmcm9tSGV4LCBcImZyb21IZXhcIik7XG5mdW5jdGlvbiB0b0hleChieXRlcykge1xuICBsZXQgb3V0ID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICBvdXQgKz0gU0hPUlRfVE9fSEVYW2J5dGVzW2ldXTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuX19uYW1lKHRvSGV4LCBcInRvSGV4XCIpO1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuXG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZnJvbUhleCxcbiAgdG9IZXhcbn0pO1xuXG4iLCAidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgc3JjX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KHNyY19leHBvcnRzLCB7XG4gIGVzY2FwZVVyaTogKCkgPT4gZXNjYXBlVXJpLFxuICBlc2NhcGVVcmlQYXRoOiAoKSA9PiBlc2NhcGVVcmlQYXRoXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcblxuLy8gc3JjL2VzY2FwZS11cmkudHNcbnZhciBlc2NhcGVVcmkgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh1cmkpID0+IChcbiAgLy8gQVdTIHBlcmNlbnQtZW5jb2RlcyBzb21lIGV4dHJhIG5vbi1zdGFuZGFyZCBjaGFyYWN0ZXJzIGluIGEgVVJJXG4gIGVuY29kZVVSSUNvbXBvbmVudCh1cmkpLnJlcGxhY2UoL1shJygpKl0vZywgaGV4RW5jb2RlKVxuKSwgXCJlc2NhcGVVcmlcIik7XG52YXIgaGV4RW5jb2RlID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoYykgPT4gYCUke2MuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX1gLCBcImhleEVuY29kZVwiKTtcblxuLy8gc3JjL2VzY2FwZS11cmktcGF0aC50c1xudmFyIGVzY2FwZVVyaVBhdGggPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh1cmkpID0+IHVyaS5zcGxpdChcIi9cIikubWFwKGVzY2FwZVVyaSkuam9pbihcIi9cIiksIFwiZXNjYXBlVXJpUGF0aFwiKTtcbi8vIEFubm90YXRlIHRoZSBDb21tb25KUyBleHBvcnQgbmFtZXMgZm9yIEVTTSBpbXBvcnQgaW4gbm9kZTpcblxuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVzY2FwZVVyaSxcbiAgZXNjYXBlVXJpUGF0aFxufSk7XG5cbiIsICJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX25hbWUgPSAodGFyZ2V0LCB2YWx1ZSkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJuYW1lXCIsIHsgdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgU2lnbmF0dXJlVjQ6ICgpID0+IFNpZ25hdHVyZVY0LFxuICBjbGVhckNyZWRlbnRpYWxDYWNoZTogKCkgPT4gY2xlYXJDcmVkZW50aWFsQ2FjaGUsXG4gIGNyZWF0ZVNjb3BlOiAoKSA9PiBjcmVhdGVTY29wZSxcbiAgZ2V0Q2Fub25pY2FsSGVhZGVyczogKCkgPT4gZ2V0Q2Fub25pY2FsSGVhZGVycyxcbiAgZ2V0Q2Fub25pY2FsUXVlcnk6ICgpID0+IGdldENhbm9uaWNhbFF1ZXJ5LFxuICBnZXRQYXlsb2FkSGFzaDogKCkgPT4gZ2V0UGF5bG9hZEhhc2gsXG4gIGdldFNpZ25pbmdLZXk6ICgpID0+IGdldFNpZ25pbmdLZXksXG4gIG1vdmVIZWFkZXJzVG9RdWVyeTogKCkgPT4gbW92ZUhlYWRlcnNUb1F1ZXJ5LFxuICBwcmVwYXJlUmVxdWVzdDogKCkgPT4gcHJlcGFyZVJlcXVlc3Rcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoc3JjX2V4cG9ydHMpO1xuXG4vLyBzcmMvU2lnbmF0dXJlVjQudHNcblxudmFyIGltcG9ydF91dGlsX21pZGRsZXdhcmUgPSByZXF1aXJlKFwiQHNtaXRoeS91dGlsLW1pZGRsZXdhcmVcIik7XG5cbnZhciBpbXBvcnRfdXRpbF91dGY4NCA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtdXRmOFwiKTtcblxuLy8gc3JjL2NvbnN0YW50cy50c1xudmFyIEFMR09SSVRITV9RVUVSWV9QQVJBTSA9IFwiWC1BbXotQWxnb3JpdGhtXCI7XG52YXIgQ1JFREVOVElBTF9RVUVSWV9QQVJBTSA9IFwiWC1BbXotQ3JlZGVudGlhbFwiO1xudmFyIEFNWl9EQVRFX1FVRVJZX1BBUkFNID0gXCJYLUFtei1EYXRlXCI7XG52YXIgU0lHTkVEX0hFQURFUlNfUVVFUllfUEFSQU0gPSBcIlgtQW16LVNpZ25lZEhlYWRlcnNcIjtcbnZhciBFWFBJUkVTX1FVRVJZX1BBUkFNID0gXCJYLUFtei1FeHBpcmVzXCI7XG52YXIgU0lHTkFUVVJFX1FVRVJZX1BBUkFNID0gXCJYLUFtei1TaWduYXR1cmVcIjtcbnZhciBUT0tFTl9RVUVSWV9QQVJBTSA9IFwiWC1BbXotU2VjdXJpdHktVG9rZW5cIjtcbnZhciBBVVRIX0hFQURFUiA9IFwiYXV0aG9yaXphdGlvblwiO1xudmFyIEFNWl9EQVRFX0hFQURFUiA9IEFNWl9EQVRFX1FVRVJZX1BBUkFNLnRvTG93ZXJDYXNlKCk7XG52YXIgREFURV9IRUFERVIgPSBcImRhdGVcIjtcbnZhciBHRU5FUkFURURfSEVBREVSUyA9IFtBVVRIX0hFQURFUiwgQU1aX0RBVEVfSEVBREVSLCBEQVRFX0hFQURFUl07XG52YXIgU0lHTkFUVVJFX0hFQURFUiA9IFNJR05BVFVSRV9RVUVSWV9QQVJBTS50b0xvd2VyQ2FzZSgpO1xudmFyIFNIQTI1Nl9IRUFERVIgPSBcIngtYW16LWNvbnRlbnQtc2hhMjU2XCI7XG52YXIgVE9LRU5fSEVBREVSID0gVE9LRU5fUVVFUllfUEFSQU0udG9Mb3dlckNhc2UoKTtcbnZhciBBTFdBWVNfVU5TSUdOQUJMRV9IRUFERVJTID0ge1xuICBhdXRob3JpemF0aW9uOiB0cnVlLFxuICBcImNhY2hlLWNvbnRyb2xcIjogdHJ1ZSxcbiAgY29ubmVjdGlvbjogdHJ1ZSxcbiAgZXhwZWN0OiB0cnVlLFxuICBmcm9tOiB0cnVlLFxuICBcImtlZXAtYWxpdmVcIjogdHJ1ZSxcbiAgXCJtYXgtZm9yd2FyZHNcIjogdHJ1ZSxcbiAgcHJhZ21hOiB0cnVlLFxuICByZWZlcmVyOiB0cnVlLFxuICB0ZTogdHJ1ZSxcbiAgdHJhaWxlcjogdHJ1ZSxcbiAgXCJ0cmFuc2Zlci1lbmNvZGluZ1wiOiB0cnVlLFxuICB1cGdyYWRlOiB0cnVlLFxuICBcInVzZXItYWdlbnRcIjogdHJ1ZSxcbiAgXCJ4LWFtem4tdHJhY2UtaWRcIjogdHJ1ZVxufTtcbnZhciBQUk9YWV9IRUFERVJfUEFUVEVSTiA9IC9ecHJveHktLztcbnZhciBTRUNfSEVBREVSX1BBVFRFUk4gPSAvXnNlYy0vO1xudmFyIEFMR09SSVRITV9JREVOVElGSUVSID0gXCJBV1M0LUhNQUMtU0hBMjU2XCI7XG52YXIgRVZFTlRfQUxHT1JJVEhNX0lERU5USUZJRVIgPSBcIkFXUzQtSE1BQy1TSEEyNTYtUEFZTE9BRFwiO1xudmFyIFVOU0lHTkVEX1BBWUxPQUQgPSBcIlVOU0lHTkVELVBBWUxPQURcIjtcbnZhciBNQVhfQ0FDSEVfU0laRSA9IDUwO1xudmFyIEtFWV9UWVBFX0lERU5USUZJRVIgPSBcImF3czRfcmVxdWVzdFwiO1xudmFyIE1BWF9QUkVTSUdORURfVFRMID0gNjAgKiA2MCAqIDI0ICogNztcblxuLy8gc3JjL2NyZWRlbnRpYWxEZXJpdmF0aW9uLnRzXG52YXIgaW1wb3J0X3V0aWxfaGV4X2VuY29kaW5nID0gcmVxdWlyZShcIkBzbWl0aHkvdXRpbC1oZXgtZW5jb2RpbmdcIik7XG52YXIgaW1wb3J0X3V0aWxfdXRmOCA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtdXRmOFwiKTtcbnZhciBzaWduaW5nS2V5Q2FjaGUgPSB7fTtcbnZhciBjYWNoZVF1ZXVlID0gW107XG52YXIgY3JlYXRlU2NvcGUgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChzaG9ydERhdGUsIHJlZ2lvbiwgc2VydmljZSkgPT4gYCR7c2hvcnREYXRlfS8ke3JlZ2lvbn0vJHtzZXJ2aWNlfS8ke0tFWV9UWVBFX0lERU5USUZJRVJ9YCwgXCJjcmVhdGVTY29wZVwiKTtcbnZhciBnZXRTaWduaW5nS2V5ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZShhc3luYyAoc2hhMjU2Q29uc3RydWN0b3IsIGNyZWRlbnRpYWxzLCBzaG9ydERhdGUsIHJlZ2lvbiwgc2VydmljZSkgPT4ge1xuICBjb25zdCBjcmVkc0hhc2ggPSBhd2FpdCBobWFjKHNoYTI1NkNvbnN0cnVjdG9yLCBjcmVkZW50aWFscy5zZWNyZXRBY2Nlc3NLZXksIGNyZWRlbnRpYWxzLmFjY2Vzc0tleUlkKTtcbiAgY29uc3QgY2FjaGVLZXkgPSBgJHtzaG9ydERhdGV9OiR7cmVnaW9ufToke3NlcnZpY2V9OiR7KDAsIGltcG9ydF91dGlsX2hleF9lbmNvZGluZy50b0hleCkoY3JlZHNIYXNoKX06JHtjcmVkZW50aWFscy5zZXNzaW9uVG9rZW59YDtcbiAgaWYgKGNhY2hlS2V5IGluIHNpZ25pbmdLZXlDYWNoZSkge1xuICAgIHJldHVybiBzaWduaW5nS2V5Q2FjaGVbY2FjaGVLZXldO1xuICB9XG4gIGNhY2hlUXVldWUucHVzaChjYWNoZUtleSk7XG4gIHdoaWxlIChjYWNoZVF1ZXVlLmxlbmd0aCA+IE1BWF9DQUNIRV9TSVpFKSB7XG4gICAgZGVsZXRlIHNpZ25pbmdLZXlDYWNoZVtjYWNoZVF1ZXVlLnNoaWZ0KCldO1xuICB9XG4gIGxldCBrZXkgPSBgQVdTNCR7Y3JlZGVudGlhbHMuc2VjcmV0QWNjZXNzS2V5fWA7XG4gIGZvciAoY29uc3Qgc2lnbmFibGUgb2YgW3Nob3J0RGF0ZSwgcmVnaW9uLCBzZXJ2aWNlLCBLRVlfVFlQRV9JREVOVElGSUVSXSkge1xuICAgIGtleSA9IGF3YWl0IGhtYWMoc2hhMjU2Q29uc3RydWN0b3IsIGtleSwgc2lnbmFibGUpO1xuICB9XG4gIHJldHVybiBzaWduaW5nS2V5Q2FjaGVbY2FjaGVLZXldID0ga2V5O1xufSwgXCJnZXRTaWduaW5nS2V5XCIpO1xudmFyIGNsZWFyQ3JlZGVudGlhbENhY2hlID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoKSA9PiB7XG4gIGNhY2hlUXVldWUubGVuZ3RoID0gMDtcbiAgT2JqZWN0LmtleXMoc2lnbmluZ0tleUNhY2hlKS5mb3JFYWNoKChjYWNoZUtleSkgPT4ge1xuICAgIGRlbGV0ZSBzaWduaW5nS2V5Q2FjaGVbY2FjaGVLZXldO1xuICB9KTtcbn0sIFwiY2xlYXJDcmVkZW50aWFsQ2FjaGVcIik7XG52YXIgaG1hYyA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKGN0b3IsIHNlY3JldCwgZGF0YSkgPT4ge1xuICBjb25zdCBoYXNoID0gbmV3IGN0b3Ioc2VjcmV0KTtcbiAgaGFzaC51cGRhdGUoKDAsIGltcG9ydF91dGlsX3V0ZjgudG9VaW50OEFycmF5KShkYXRhKSk7XG4gIHJldHVybiBoYXNoLmRpZ2VzdCgpO1xufSwgXCJobWFjXCIpO1xuXG4vLyBzcmMvZ2V0Q2Fub25pY2FsSGVhZGVycy50c1xudmFyIGdldENhbm9uaWNhbEhlYWRlcnMgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh7IGhlYWRlcnMgfSwgdW5zaWduYWJsZUhlYWRlcnMsIHNpZ25hYmxlSGVhZGVycykgPT4ge1xuICBjb25zdCBjYW5vbmljYWwgPSB7fTtcbiAgZm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpLnNvcnQoKSkge1xuICAgIGlmIChoZWFkZXJzW2hlYWRlck5hbWVdID09IHZvaWQgMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IGNhbm9uaWNhbEhlYWRlck5hbWUgPSBoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGNhbm9uaWNhbEhlYWRlck5hbWUgaW4gQUxXQVlTX1VOU0lHTkFCTEVfSEVBREVSUyB8fCAodW5zaWduYWJsZUhlYWRlcnMgPT0gbnVsbCA/IHZvaWQgMCA6IHVuc2lnbmFibGVIZWFkZXJzLmhhcyhjYW5vbmljYWxIZWFkZXJOYW1lKSkgfHwgUFJPWFlfSEVBREVSX1BBVFRFUk4udGVzdChjYW5vbmljYWxIZWFkZXJOYW1lKSB8fCBTRUNfSEVBREVSX1BBVFRFUk4udGVzdChjYW5vbmljYWxIZWFkZXJOYW1lKSkge1xuICAgICAgaWYgKCFzaWduYWJsZUhlYWRlcnMgfHwgc2lnbmFibGVIZWFkZXJzICYmICFzaWduYWJsZUhlYWRlcnMuaGFzKGNhbm9uaWNhbEhlYWRlck5hbWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBjYW5vbmljYWxbY2Fub25pY2FsSGVhZGVyTmFtZV0gPSBoZWFkZXJzW2hlYWRlck5hbWVdLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKTtcbiAgfVxuICByZXR1cm4gY2Fub25pY2FsO1xufSwgXCJnZXRDYW5vbmljYWxIZWFkZXJzXCIpO1xuXG4vLyBzcmMvZ2V0Q2Fub25pY2FsUXVlcnkudHNcbnZhciBpbXBvcnRfdXRpbF91cmlfZXNjYXBlID0gcmVxdWlyZShcIkBzbWl0aHkvdXRpbC11cmktZXNjYXBlXCIpO1xudmFyIGdldENhbm9uaWNhbFF1ZXJ5ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoeyBxdWVyeSA9IHt9IH0pID0+IHtcbiAgY29uc3Qga2V5cyA9IFtdO1xuICBjb25zdCBzZXJpYWxpemVkID0ge307XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHF1ZXJ5KS5zb3J0KCkpIHtcbiAgICBpZiAoa2V5LnRvTG93ZXJDYXNlKCkgPT09IFNJR05BVFVSRV9IRUFERVIpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W2tleV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgc2VyaWFsaXplZFtrZXldID0gYCR7KDAsIGltcG9ydF91dGlsX3VyaV9lc2NhcGUuZXNjYXBlVXJpKShrZXkpfT0keygwLCBpbXBvcnRfdXRpbF91cmlfZXNjYXBlLmVzY2FwZVVyaSkodmFsdWUpfWA7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgc2VyaWFsaXplZFtrZXldID0gdmFsdWUuc2xpY2UoMCkucmVkdWNlKFxuICAgICAgICAoZW5jb2RlZCwgdmFsdWUyKSA9PiBlbmNvZGVkLmNvbmNhdChbYCR7KDAsIGltcG9ydF91dGlsX3VyaV9lc2NhcGUuZXNjYXBlVXJpKShrZXkpfT0keygwLCBpbXBvcnRfdXRpbF91cmlfZXNjYXBlLmVzY2FwZVVyaSkodmFsdWUyKX1gXSksXG4gICAgICAgIFtdXG4gICAgICApLnNvcnQoKS5qb2luKFwiJlwiKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtleXMubWFwKChrZXkpID0+IHNlcmlhbGl6ZWRba2V5XSkuZmlsdGVyKChzZXJpYWxpemVkMikgPT4gc2VyaWFsaXplZDIpLmpvaW4oXCImXCIpO1xufSwgXCJnZXRDYW5vbmljYWxRdWVyeVwiKTtcblxuLy8gc3JjL2dldFBheWxvYWRIYXNoLnRzXG52YXIgaW1wb3J0X2lzX2FycmF5X2J1ZmZlciA9IHJlcXVpcmUoXCJAc21pdGh5L2lzLWFycmF5LWJ1ZmZlclwiKTtcblxudmFyIGltcG9ydF91dGlsX3V0ZjgyID0gcmVxdWlyZShcIkBzbWl0aHkvdXRpbC11dGY4XCIpO1xudmFyIGdldFBheWxvYWRIYXNoID0gLyogQF9fUFVSRV9fICovIF9fbmFtZShhc3luYyAoeyBoZWFkZXJzLCBib2R5IH0sIGhhc2hDb25zdHJ1Y3RvcikgPT4ge1xuICBmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICBpZiAoaGVhZGVyTmFtZS50b0xvd2VyQ2FzZSgpID09PSBTSEEyNTZfSEVBREVSKSB7XG4gICAgICByZXR1cm4gaGVhZGVyc1toZWFkZXJOYW1lXTtcbiAgICB9XG4gIH1cbiAgaWYgKGJvZHkgPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIFwiZTNiMGM0NDI5OGZjMWMxNDlhZmJmNGM4OTk2ZmI5MjQyN2FlNDFlNDY0OWI5MzRjYTQ5NTk5MWI3ODUyYjg1NVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiIHx8IEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSB8fCAoMCwgaW1wb3J0X2lzX2FycmF5X2J1ZmZlci5pc0FycmF5QnVmZmVyKShib2R5KSkge1xuICAgIGNvbnN0IGhhc2hDdG9yID0gbmV3IGhhc2hDb25zdHJ1Y3RvcigpO1xuICAgIGhhc2hDdG9yLnVwZGF0ZSgoMCwgaW1wb3J0X3V0aWxfdXRmODIudG9VaW50OEFycmF5KShib2R5KSk7XG4gICAgcmV0dXJuICgwLCBpbXBvcnRfdXRpbF9oZXhfZW5jb2RpbmcudG9IZXgpKGF3YWl0IGhhc2hDdG9yLmRpZ2VzdCgpKTtcbiAgfVxuICByZXR1cm4gVU5TSUdORURfUEFZTE9BRDtcbn0sIFwiZ2V0UGF5bG9hZEhhc2hcIik7XG5cbi8vIHNyYy9IZWFkZXJGb3JtYXR0ZXIudHNcblxudmFyIGltcG9ydF91dGlsX3V0ZjgzID0gcmVxdWlyZShcIkBzbWl0aHkvdXRpbC11dGY4XCIpO1xudmFyIF9IZWFkZXJGb3JtYXR0ZXIgPSBjbGFzcyBfSGVhZGVyRm9ybWF0dGVyIHtcbiAgZm9ybWF0KGhlYWRlcnMpIHtcbiAgICBjb25zdCBjaHVua3MgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICAgIGNvbnN0IGJ5dGVzID0gKDAsIGltcG9ydF91dGlsX3V0ZjgzLmZyb21VdGY4KShoZWFkZXJOYW1lKTtcbiAgICAgIGNodW5rcy5wdXNoKFVpbnQ4QXJyYXkuZnJvbShbYnl0ZXMuYnl0ZUxlbmd0aF0pLCBieXRlcywgdGhpcy5mb3JtYXRIZWFkZXJWYWx1ZShoZWFkZXJzW2hlYWRlck5hbWVdKSk7XG4gICAgfVxuICAgIGNvbnN0IG91dCA9IG5ldyBVaW50OEFycmF5KGNodW5rcy5yZWR1Y2UoKGNhcnJ5LCBieXRlcykgPT4gY2FycnkgKyBieXRlcy5ieXRlTGVuZ3RoLCAwKSk7XG4gICAgbGV0IHBvc2l0aW9uID0gMDtcbiAgICBmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuICAgICAgb3V0LnNldChjaHVuaywgcG9zaXRpb24pO1xuICAgICAgcG9zaXRpb24gKz0gY2h1bmsuYnl0ZUxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuICBmb3JtYXRIZWFkZXJWYWx1ZShoZWFkZXIpIHtcbiAgICBzd2l0Y2ggKGhlYWRlci50eXBlKSB7XG4gICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKFtoZWFkZXIudmFsdWUgPyAwIC8qIGJvb2xUcnVlICovIDogMSAvKiBib29sRmFsc2UgKi9dKTtcbiAgICAgIGNhc2UgXCJieXRlXCI6XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LmZyb20oWzIgLyogYnl0ZSAqLywgaGVhZGVyLnZhbHVlXSk7XG4gICAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgICAgY29uc3Qgc2hvcnRWaWV3ID0gbmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigzKSk7XG4gICAgICAgIHNob3J0Vmlldy5zZXRVaW50OCgwLCAzIC8qIHNob3J0ICovKTtcbiAgICAgICAgc2hvcnRWaWV3LnNldEludDE2KDEsIGhlYWRlci52YWx1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoc2hvcnRWaWV3LmJ1ZmZlcik7XG4gICAgICBjYXNlIFwiaW50ZWdlclwiOlxuICAgICAgICBjb25zdCBpbnRWaWV3ID0gbmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcig1KSk7XG4gICAgICAgIGludFZpZXcuc2V0VWludDgoMCwgNCAvKiBpbnRlZ2VyICovKTtcbiAgICAgICAgaW50Vmlldy5zZXRJbnQzMigxLCBoZWFkZXIudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGludFZpZXcuYnVmZmVyKTtcbiAgICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICAgIGNvbnN0IGxvbmdCeXRlcyA9IG5ldyBVaW50OEFycmF5KDkpO1xuICAgICAgICBsb25nQnl0ZXNbMF0gPSA1IC8qIGxvbmcgKi87XG4gICAgICAgIGxvbmdCeXRlcy5zZXQoaGVhZGVyLnZhbHVlLmJ5dGVzLCAxKTtcbiAgICAgICAgcmV0dXJuIGxvbmdCeXRlcztcbiAgICAgIGNhc2UgXCJiaW5hcnlcIjpcbiAgICAgICAgY29uc3QgYmluVmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMyArIGhlYWRlci52YWx1ZS5ieXRlTGVuZ3RoKSk7XG4gICAgICAgIGJpblZpZXcuc2V0VWludDgoMCwgNiAvKiBieXRlQXJyYXkgKi8pO1xuICAgICAgICBiaW5WaWV3LnNldFVpbnQxNigxLCBoZWFkZXIudmFsdWUuYnl0ZUxlbmd0aCwgZmFsc2UpO1xuICAgICAgICBjb25zdCBiaW5CeXRlcyA9IG5ldyBVaW50OEFycmF5KGJpblZpZXcuYnVmZmVyKTtcbiAgICAgICAgYmluQnl0ZXMuc2V0KGhlYWRlci52YWx1ZSwgMyk7XG4gICAgICAgIHJldHVybiBiaW5CeXRlcztcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgY29uc3QgdXRmOEJ5dGVzID0gKDAsIGltcG9ydF91dGlsX3V0ZjgzLmZyb21VdGY4KShoZWFkZXIudmFsdWUpO1xuICAgICAgICBjb25zdCBzdHJWaWV3ID0gbmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigzICsgdXRmOEJ5dGVzLmJ5dGVMZW5ndGgpKTtcbiAgICAgICAgc3RyVmlldy5zZXRVaW50OCgwLCA3IC8qIHN0cmluZyAqLyk7XG4gICAgICAgIHN0clZpZXcuc2V0VWludDE2KDEsIHV0ZjhCeXRlcy5ieXRlTGVuZ3RoLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IHN0ckJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc3RyVmlldy5idWZmZXIpO1xuICAgICAgICBzdHJCeXRlcy5zZXQodXRmOEJ5dGVzLCAzKTtcbiAgICAgICAgcmV0dXJuIHN0ckJ5dGVzO1xuICAgICAgY2FzZSBcInRpbWVzdGFtcFwiOlxuICAgICAgICBjb25zdCB0c0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoOSk7XG4gICAgICAgIHRzQnl0ZXNbMF0gPSA4IC8qIHRpbWVzdGFtcCAqLztcbiAgICAgICAgdHNCeXRlcy5zZXQoSW50NjQuZnJvbU51bWJlcihoZWFkZXIudmFsdWUudmFsdWVPZigpKS5ieXRlcywgMSk7XG4gICAgICAgIHJldHVybiB0c0J5dGVzO1xuICAgICAgY2FzZSBcInV1aWRcIjpcbiAgICAgICAgaWYgKCFVVUlEX1BBVFRFUk4udGVzdChoZWFkZXIudmFsdWUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFVVSUQgcmVjZWl2ZWQ6ICR7aGVhZGVyLnZhbHVlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHV1aWRCeXRlcyA9IG5ldyBVaW50OEFycmF5KDE3KTtcbiAgICAgICAgdXVpZEJ5dGVzWzBdID0gOSAvKiB1dWlkICovO1xuICAgICAgICB1dWlkQnl0ZXMuc2V0KCgwLCBpbXBvcnRfdXRpbF9oZXhfZW5jb2RpbmcuZnJvbUhleCkoaGVhZGVyLnZhbHVlLnJlcGxhY2UoL1xcLS9nLCBcIlwiKSksIDEpO1xuICAgICAgICByZXR1cm4gdXVpZEJ5dGVzO1xuICAgIH1cbiAgfVxufTtcbl9fbmFtZShfSGVhZGVyRm9ybWF0dGVyLCBcIkhlYWRlckZvcm1hdHRlclwiKTtcbnZhciBIZWFkZXJGb3JtYXR0ZXIgPSBfSGVhZGVyRm9ybWF0dGVyO1xudmFyIFVVSURfUEFUVEVSTiA9IC9eW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tW2EtZjAtOV17NH0tW2EtZjAtOV17NH0tW2EtZjAtOV17MTJ9JC87XG52YXIgX0ludDY0ID0gY2xhc3MgX0ludDY0IHtcbiAgY29uc3RydWN0b3IoYnl0ZXMpIHtcbiAgICB0aGlzLmJ5dGVzID0gYnl0ZXM7XG4gICAgaWYgKGJ5dGVzLmJ5dGVMZW5ndGggIT09IDgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludDY0IGJ1ZmZlcnMgbXVzdCBiZSBleGFjdGx5IDggYnl0ZXNcIik7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBmcm9tTnVtYmVyKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPiA5MjIzMzcyMDM2ODU0Nzc2ZTMgfHwgbnVtYmVyIDwgLTkyMjMzNzIwMzY4NTQ3NzZlMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke251bWJlcn0gaXMgdG9vIGxhcmdlIChvciwgaWYgbmVnYXRpdmUsIHRvbyBzbWFsbCkgdG8gcmVwcmVzZW50IGFzIGFuIEludDY0YCk7XG4gICAgfVxuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoOCk7XG4gICAgZm9yIChsZXQgaSA9IDcsIHJlbWFpbmluZyA9IE1hdGguYWJzKE1hdGgucm91bmQobnVtYmVyKSk7IGkgPiAtMSAmJiByZW1haW5pbmcgPiAwOyBpLS0sIHJlbWFpbmluZyAvPSAyNTYpIHtcbiAgICAgIGJ5dGVzW2ldID0gcmVtYWluaW5nO1xuICAgIH1cbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgbmVnYXRlKGJ5dGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBfSW50NjQoYnl0ZXMpO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgaW1wbGljaXRseSBieSBpbmZpeCBhcml0aG1ldGljIG9wZXJhdG9ycy5cbiAgICovXG4gIHZhbHVlT2YoKSB7XG4gICAgY29uc3QgYnl0ZXMgPSB0aGlzLmJ5dGVzLnNsaWNlKDApO1xuICAgIGNvbnN0IG5lZ2F0aXZlID0gYnl0ZXNbMF0gJiAxMjg7XG4gICAgaWYgKG5lZ2F0aXZlKSB7XG4gICAgICBuZWdhdGUoYnl0ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoKDAsIGltcG9ydF91dGlsX2hleF9lbmNvZGluZy50b0hleCkoYnl0ZXMpLCAxNikgKiAobmVnYXRpdmUgPyAtMSA6IDEpO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZU9mKCkpO1xuICB9XG59O1xuX19uYW1lKF9JbnQ2NCwgXCJJbnQ2NFwiKTtcbnZhciBJbnQ2NCA9IF9JbnQ2NDtcbmZ1bmN0aW9uIG5lZ2F0ZShieXRlcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGJ5dGVzW2ldIF49IDI1NTtcbiAgfVxuICBmb3IgKGxldCBpID0gNzsgaSA+IC0xOyBpLS0pIHtcbiAgICBieXRlc1tpXSsrO1xuICAgIGlmIChieXRlc1tpXSAhPT0gMClcbiAgICAgIGJyZWFrO1xuICB9XG59XG5fX25hbWUobmVnYXRlLCBcIm5lZ2F0ZVwiKTtcblxuLy8gc3JjL2hlYWRlclV0aWwudHNcbnZhciBoYXNIZWFkZXIgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChzb3VnaHRIZWFkZXIsIGhlYWRlcnMpID0+IHtcbiAgc291Z2h0SGVhZGVyID0gc291Z2h0SGVhZGVyLnRvTG93ZXJDYXNlKCk7XG4gIGZvciAoY29uc3QgaGVhZGVyTmFtZSBvZiBPYmplY3Qua2V5cyhoZWFkZXJzKSkge1xuICAgIGlmIChzb3VnaHRIZWFkZXIgPT09IGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn0sIFwiaGFzSGVhZGVyXCIpO1xuXG4vLyBzcmMvY2xvbmVSZXF1ZXN0LnRzXG52YXIgY2xvbmVSZXF1ZXN0ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoeyBoZWFkZXJzLCBxdWVyeSwgLi4ucmVzdCB9KSA9PiAoe1xuICAuLi5yZXN0LFxuICBoZWFkZXJzOiB7IC4uLmhlYWRlcnMgfSxcbiAgcXVlcnk6IHF1ZXJ5ID8gY2xvbmVRdWVyeShxdWVyeSkgOiB2b2lkIDBcbn0pLCBcImNsb25lUmVxdWVzdFwiKTtcbnZhciBjbG9uZVF1ZXJ5ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgocXVlcnkpID0+IE9iamVjdC5rZXlzKHF1ZXJ5KS5yZWR1Y2UoKGNhcnJ5LCBwYXJhbU5hbWUpID0+IHtcbiAgY29uc3QgcGFyYW0gPSBxdWVyeVtwYXJhbU5hbWVdO1xuICByZXR1cm4ge1xuICAgIC4uLmNhcnJ5LFxuICAgIFtwYXJhbU5hbWVdOiBBcnJheS5pc0FycmF5KHBhcmFtKSA/IFsuLi5wYXJhbV0gOiBwYXJhbVxuICB9O1xufSwge30pLCBcImNsb25lUXVlcnlcIik7XG5cbi8vIHNyYy9tb3ZlSGVhZGVyc1RvUXVlcnkudHNcbnZhciBtb3ZlSGVhZGVyc1RvUXVlcnkgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChyZXF1ZXN0LCBvcHRpb25zID0ge30pID0+IHtcbiAgdmFyIF9hO1xuICBjb25zdCB7IGhlYWRlcnMsIHF1ZXJ5ID0ge30gfSA9IHR5cGVvZiByZXF1ZXN0LmNsb25lID09PSBcImZ1bmN0aW9uXCIgPyByZXF1ZXN0LmNsb25lKCkgOiBjbG9uZVJlcXVlc3QocmVxdWVzdCk7XG4gIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhoZWFkZXJzKSkge1xuICAgIGNvbnN0IGxuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChsbmFtZS5zbGljZSgwLCA2KSA9PT0gXCJ4LWFtei1cIiAmJiAhKChfYSA9IG9wdGlvbnMudW5ob2lzdGFibGVIZWFkZXJzKSA9PSBudWxsID8gdm9pZCAwIDogX2EuaGFzKGxuYW1lKSkpIHtcbiAgICAgIHF1ZXJ5W25hbWVdID0gaGVhZGVyc1tuYW1lXTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIC4uLnJlcXVlc3QsXG4gICAgaGVhZGVycyxcbiAgICBxdWVyeVxuICB9O1xufSwgXCJtb3ZlSGVhZGVyc1RvUXVlcnlcIik7XG5cbi8vIHNyYy9wcmVwYXJlUmVxdWVzdC50c1xudmFyIHByZXBhcmVSZXF1ZXN0ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgocmVxdWVzdCkgPT4ge1xuICByZXF1ZXN0ID0gdHlwZW9mIHJlcXVlc3QuY2xvbmUgPT09IFwiZnVuY3Rpb25cIiA/IHJlcXVlc3QuY2xvbmUoKSA6IGNsb25lUmVxdWVzdChyZXF1ZXN0KTtcbiAgZm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIE9iamVjdC5rZXlzKHJlcXVlc3QuaGVhZGVycykpIHtcbiAgICBpZiAoR0VORVJBVEVEX0hFQURFUlMuaW5kZXhPZihoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0LmhlYWRlcnNbaGVhZGVyTmFtZV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXF1ZXN0O1xufSwgXCJwcmVwYXJlUmVxdWVzdFwiKTtcblxuLy8gc3JjL3V0aWxEYXRlLnRzXG52YXIgaXNvODYwMSA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHRpbWUpID0+IHRvRGF0ZSh0aW1lKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfVokLywgXCJaXCIpLCBcImlzbzg2MDFcIik7XG52YXIgdG9EYXRlID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodGltZSkgPT4ge1xuICBpZiAodHlwZW9mIHRpbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGltZSAqIDFlMyk7XG4gIH1cbiAgaWYgKHR5cGVvZiB0aW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKE51bWJlcih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE51bWJlcih0aW1lKSAqIDFlMyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lKTtcbiAgfVxuICByZXR1cm4gdGltZTtcbn0sIFwidG9EYXRlXCIpO1xuXG4vLyBzcmMvU2lnbmF0dXJlVjQudHNcbnZhciBfU2lnbmF0dXJlVjQgPSBjbGFzcyBfU2lnbmF0dXJlVjQge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgYXBwbHlDaGVja3N1bSxcbiAgICBjcmVkZW50aWFscyxcbiAgICByZWdpb24sXG4gICAgc2VydmljZSxcbiAgICBzaGEyNTYsXG4gICAgdXJpRXNjYXBlUGF0aCA9IHRydWVcbiAgfSkge1xuICAgIHRoaXMuaGVhZGVyRm9ybWF0dGVyID0gbmV3IEhlYWRlckZvcm1hdHRlcigpO1xuICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgdGhpcy5zaGEyNTYgPSBzaGEyNTY7XG4gICAgdGhpcy51cmlFc2NhcGVQYXRoID0gdXJpRXNjYXBlUGF0aDtcbiAgICB0aGlzLmFwcGx5Q2hlY2tzdW0gPSB0eXBlb2YgYXBwbHlDaGVja3N1bSA9PT0gXCJib29sZWFuXCIgPyBhcHBseUNoZWNrc3VtIDogdHJ1ZTtcbiAgICB0aGlzLnJlZ2lvblByb3ZpZGVyID0gKDAsIGltcG9ydF91dGlsX21pZGRsZXdhcmUubm9ybWFsaXplUHJvdmlkZXIpKHJlZ2lvbik7XG4gICAgdGhpcy5jcmVkZW50aWFsUHJvdmlkZXIgPSAoMCwgaW1wb3J0X3V0aWxfbWlkZGxld2FyZS5ub3JtYWxpemVQcm92aWRlcikoY3JlZGVudGlhbHMpO1xuICB9XG4gIGFzeW5jIHByZXNpZ24ob3JpZ2luYWxSZXF1ZXN0LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBzaWduaW5nRGF0ZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpLFxuICAgICAgZXhwaXJlc0luID0gMzYwMCxcbiAgICAgIHVuc2lnbmFibGVIZWFkZXJzLFxuICAgICAgdW5ob2lzdGFibGVIZWFkZXJzLFxuICAgICAgc2lnbmFibGVIZWFkZXJzLFxuICAgICAgc2lnbmluZ1JlZ2lvbixcbiAgICAgIHNpZ25pbmdTZXJ2aWNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSBhd2FpdCB0aGlzLmNyZWRlbnRpYWxQcm92aWRlcigpO1xuICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKTtcbiAgICBjb25zdCByZWdpb24gPSBzaWduaW5nUmVnaW9uID8/IGF3YWl0IHRoaXMucmVnaW9uUHJvdmlkZXIoKTtcbiAgICBjb25zdCB7IGxvbmdEYXRlLCBzaG9ydERhdGUgfSA9IGZvcm1hdERhdGUoc2lnbmluZ0RhdGUpO1xuICAgIGlmIChleHBpcmVzSW4gPiBNQVhfUFJFU0lHTkVEX1RUTCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICBcIlNpZ25hdHVyZSB2ZXJzaW9uIDQgcHJlc2lnbmVkIFVSTHMgbXVzdCBoYXZlIGFuIGV4cGlyYXRpb24gZGF0ZSBsZXNzIHRoYW4gb25lIHdlZWsgaW4gdGhlIGZ1dHVyZVwiXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBzY29wZSA9IGNyZWF0ZVNjb3BlKHNob3J0RGF0ZSwgcmVnaW9uLCBzaWduaW5nU2VydmljZSA/PyB0aGlzLnNlcnZpY2UpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBtb3ZlSGVhZGVyc1RvUXVlcnkocHJlcGFyZVJlcXVlc3Qob3JpZ2luYWxSZXF1ZXN0KSwgeyB1bmhvaXN0YWJsZUhlYWRlcnMgfSk7XG4gICAgaWYgKGNyZWRlbnRpYWxzLnNlc3Npb25Ub2tlbikge1xuICAgICAgcmVxdWVzdC5xdWVyeVtUT0tFTl9RVUVSWV9QQVJBTV0gPSBjcmVkZW50aWFscy5zZXNzaW9uVG9rZW47XG4gICAgfVxuICAgIHJlcXVlc3QucXVlcnlbQUxHT1JJVEhNX1FVRVJZX1BBUkFNXSA9IEFMR09SSVRITV9JREVOVElGSUVSO1xuICAgIHJlcXVlc3QucXVlcnlbQ1JFREVOVElBTF9RVUVSWV9QQVJBTV0gPSBgJHtjcmVkZW50aWFscy5hY2Nlc3NLZXlJZH0vJHtzY29wZX1gO1xuICAgIHJlcXVlc3QucXVlcnlbQU1aX0RBVEVfUVVFUllfUEFSQU1dID0gbG9uZ0RhdGU7XG4gICAgcmVxdWVzdC5xdWVyeVtFWFBJUkVTX1FVRVJZX1BBUkFNXSA9IGV4cGlyZXNJbi50b1N0cmluZygxMCk7XG4gICAgY29uc3QgY2Fub25pY2FsSGVhZGVycyA9IGdldENhbm9uaWNhbEhlYWRlcnMocmVxdWVzdCwgdW5zaWduYWJsZUhlYWRlcnMsIHNpZ25hYmxlSGVhZGVycyk7XG4gICAgcmVxdWVzdC5xdWVyeVtTSUdORURfSEVBREVSU19RVUVSWV9QQVJBTV0gPSBnZXRDYW5vbmljYWxIZWFkZXJMaXN0KGNhbm9uaWNhbEhlYWRlcnMpO1xuICAgIHJlcXVlc3QucXVlcnlbU0lHTkFUVVJFX1FVRVJZX1BBUkFNXSA9IGF3YWl0IHRoaXMuZ2V0U2lnbmF0dXJlKFxuICAgICAgbG9uZ0RhdGUsXG4gICAgICBzY29wZSxcbiAgICAgIHRoaXMuZ2V0U2lnbmluZ0tleShjcmVkZW50aWFscywgcmVnaW9uLCBzaG9ydERhdGUsIHNpZ25pbmdTZXJ2aWNlKSxcbiAgICAgIHRoaXMuY3JlYXRlQ2Fub25pY2FsUmVxdWVzdChyZXF1ZXN0LCBjYW5vbmljYWxIZWFkZXJzLCBhd2FpdCBnZXRQYXlsb2FkSGFzaChvcmlnaW5hbFJlcXVlc3QsIHRoaXMuc2hhMjU2KSlcbiAgICApO1xuICAgIHJldHVybiByZXF1ZXN0O1xuICB9XG4gIGFzeW5jIHNpZ24odG9TaWduLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB0b1NpZ24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpZ25TdHJpbmcodG9TaWduLCBvcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKHRvU2lnbi5oZWFkZXJzICYmIHRvU2lnbi5wYXlsb2FkKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaWduRXZlbnQodG9TaWduLCBvcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKHRvU2lnbi5tZXNzYWdlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaWduTWVzc2FnZSh0b1NpZ24sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zaWduUmVxdWVzdCh0b1NpZ24sIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICBhc3luYyBzaWduRXZlbnQoeyBoZWFkZXJzLCBwYXlsb2FkIH0sIHsgc2lnbmluZ0RhdGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSwgcHJpb3JTaWduYXR1cmUsIHNpZ25pbmdSZWdpb24sIHNpZ25pbmdTZXJ2aWNlIH0pIHtcbiAgICBjb25zdCByZWdpb24gPSBzaWduaW5nUmVnaW9uID8/IGF3YWl0IHRoaXMucmVnaW9uUHJvdmlkZXIoKTtcbiAgICBjb25zdCB7IHNob3J0RGF0ZSwgbG9uZ0RhdGUgfSA9IGZvcm1hdERhdGUoc2lnbmluZ0RhdGUpO1xuICAgIGNvbnN0IHNjb3BlID0gY3JlYXRlU2NvcGUoc2hvcnREYXRlLCByZWdpb24sIHNpZ25pbmdTZXJ2aWNlID8/IHRoaXMuc2VydmljZSk7XG4gICAgY29uc3QgaGFzaGVkUGF5bG9hZCA9IGF3YWl0IGdldFBheWxvYWRIYXNoKHsgaGVhZGVyczoge30sIGJvZHk6IHBheWxvYWQgfSwgdGhpcy5zaGEyNTYpO1xuICAgIGNvbnN0IGhhc2ggPSBuZXcgdGhpcy5zaGEyNTYoKTtcbiAgICBoYXNoLnVwZGF0ZShoZWFkZXJzKTtcbiAgICBjb25zdCBoYXNoZWRIZWFkZXJzID0gKDAsIGltcG9ydF91dGlsX2hleF9lbmNvZGluZy50b0hleCkoYXdhaXQgaGFzaC5kaWdlc3QoKSk7XG4gICAgY29uc3Qgc3RyaW5nVG9TaWduID0gW1xuICAgICAgRVZFTlRfQUxHT1JJVEhNX0lERU5USUZJRVIsXG4gICAgICBsb25nRGF0ZSxcbiAgICAgIHNjb3BlLFxuICAgICAgcHJpb3JTaWduYXR1cmUsXG4gICAgICBoYXNoZWRIZWFkZXJzLFxuICAgICAgaGFzaGVkUGF5bG9hZFxuICAgIF0uam9pbihcIlxcblwiKTtcbiAgICByZXR1cm4gdGhpcy5zaWduU3RyaW5nKHN0cmluZ1RvU2lnbiwgeyBzaWduaW5nRGF0ZSwgc2lnbmluZ1JlZ2lvbjogcmVnaW9uLCBzaWduaW5nU2VydmljZSB9KTtcbiAgfVxuICBhc3luYyBzaWduTWVzc2FnZShzaWduYWJsZU1lc3NhZ2UsIHsgc2lnbmluZ0RhdGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSwgc2lnbmluZ1JlZ2lvbiwgc2lnbmluZ1NlcnZpY2UgfSkge1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnNpZ25FdmVudChcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJGb3JtYXR0ZXIuZm9ybWF0KHNpZ25hYmxlTWVzc2FnZS5tZXNzYWdlLmhlYWRlcnMpLFxuICAgICAgICBwYXlsb2FkOiBzaWduYWJsZU1lc3NhZ2UubWVzc2FnZS5ib2R5XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzaWduaW5nRGF0ZSxcbiAgICAgICAgc2lnbmluZ1JlZ2lvbixcbiAgICAgICAgc2lnbmluZ1NlcnZpY2UsXG4gICAgICAgIHByaW9yU2lnbmF0dXJlOiBzaWduYWJsZU1lc3NhZ2UucHJpb3JTaWduYXR1cmVcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKHNpZ25hdHVyZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogc2lnbmFibGVNZXNzYWdlLm1lc3NhZ2UsIHNpZ25hdHVyZSB9O1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIHNpZ25TdHJpbmcoc3RyaW5nVG9TaWduLCB7IHNpZ25pbmdEYXRlID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCksIHNpZ25pbmdSZWdpb24sIHNpZ25pbmdTZXJ2aWNlIH0gPSB7fSkge1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5jcmVkZW50aWFsUHJvdmlkZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWRDcmVkZW50aWFscyhjcmVkZW50aWFscyk7XG4gICAgY29uc3QgcmVnaW9uID0gc2lnbmluZ1JlZ2lvbiA/PyBhd2FpdCB0aGlzLnJlZ2lvblByb3ZpZGVyKCk7XG4gICAgY29uc3QgeyBzaG9ydERhdGUgfSA9IGZvcm1hdERhdGUoc2lnbmluZ0RhdGUpO1xuICAgIGNvbnN0IGhhc2ggPSBuZXcgdGhpcy5zaGEyNTYoYXdhaXQgdGhpcy5nZXRTaWduaW5nS2V5KGNyZWRlbnRpYWxzLCByZWdpb24sIHNob3J0RGF0ZSwgc2lnbmluZ1NlcnZpY2UpKTtcbiAgICBoYXNoLnVwZGF0ZSgoMCwgaW1wb3J0X3V0aWxfdXRmODQudG9VaW50OEFycmF5KShzdHJpbmdUb1NpZ24pKTtcbiAgICByZXR1cm4gKDAsIGltcG9ydF91dGlsX2hleF9lbmNvZGluZy50b0hleCkoYXdhaXQgaGFzaC5kaWdlc3QoKSk7XG4gIH1cbiAgYXN5bmMgc2lnblJlcXVlc3QocmVxdWVzdFRvU2lnbiwge1xuICAgIHNpZ25pbmdEYXRlID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCksXG4gICAgc2lnbmFibGVIZWFkZXJzLFxuICAgIHVuc2lnbmFibGVIZWFkZXJzLFxuICAgIHNpZ25pbmdSZWdpb24sXG4gICAgc2lnbmluZ1NlcnZpY2VcbiAgfSA9IHt9KSB7XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSBhd2FpdCB0aGlzLmNyZWRlbnRpYWxQcm92aWRlcigpO1xuICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKTtcbiAgICBjb25zdCByZWdpb24gPSBzaWduaW5nUmVnaW9uID8/IGF3YWl0IHRoaXMucmVnaW9uUHJvdmlkZXIoKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gcHJlcGFyZVJlcXVlc3QocmVxdWVzdFRvU2lnbik7XG4gICAgY29uc3QgeyBsb25nRGF0ZSwgc2hvcnREYXRlIH0gPSBmb3JtYXREYXRlKHNpZ25pbmdEYXRlKTtcbiAgICBjb25zdCBzY29wZSA9IGNyZWF0ZVNjb3BlKHNob3J0RGF0ZSwgcmVnaW9uLCBzaWduaW5nU2VydmljZSA/PyB0aGlzLnNlcnZpY2UpO1xuICAgIHJlcXVlc3QuaGVhZGVyc1tBTVpfREFURV9IRUFERVJdID0gbG9uZ0RhdGU7XG4gICAgaWYgKGNyZWRlbnRpYWxzLnNlc3Npb25Ub2tlbikge1xuICAgICAgcmVxdWVzdC5oZWFkZXJzW1RPS0VOX0hFQURFUl0gPSBjcmVkZW50aWFscy5zZXNzaW9uVG9rZW47XG4gICAgfVxuICAgIGNvbnN0IHBheWxvYWRIYXNoID0gYXdhaXQgZ2V0UGF5bG9hZEhhc2gocmVxdWVzdCwgdGhpcy5zaGEyNTYpO1xuICAgIGlmICghaGFzSGVhZGVyKFNIQTI1Nl9IRUFERVIsIHJlcXVlc3QuaGVhZGVycykgJiYgdGhpcy5hcHBseUNoZWNrc3VtKSB7XG4gICAgICByZXF1ZXN0LmhlYWRlcnNbU0hBMjU2X0hFQURFUl0gPSBwYXlsb2FkSGFzaDtcbiAgICB9XG4gICAgY29uc3QgY2Fub25pY2FsSGVhZGVycyA9IGdldENhbm9uaWNhbEhlYWRlcnMocmVxdWVzdCwgdW5zaWduYWJsZUhlYWRlcnMsIHNpZ25hYmxlSGVhZGVycyk7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgdGhpcy5nZXRTaWduYXR1cmUoXG4gICAgICBsb25nRGF0ZSxcbiAgICAgIHNjb3BlLFxuICAgICAgdGhpcy5nZXRTaWduaW5nS2V5KGNyZWRlbnRpYWxzLCByZWdpb24sIHNob3J0RGF0ZSwgc2lnbmluZ1NlcnZpY2UpLFxuICAgICAgdGhpcy5jcmVhdGVDYW5vbmljYWxSZXF1ZXN0KHJlcXVlc3QsIGNhbm9uaWNhbEhlYWRlcnMsIHBheWxvYWRIYXNoKVxuICAgICk7XG4gICAgcmVxdWVzdC5oZWFkZXJzW0FVVEhfSEVBREVSXSA9IGAke0FMR09SSVRITV9JREVOVElGSUVSfSBDcmVkZW50aWFsPSR7Y3JlZGVudGlhbHMuYWNjZXNzS2V5SWR9LyR7c2NvcGV9LCBTaWduZWRIZWFkZXJzPSR7Z2V0Q2Fub25pY2FsSGVhZGVyTGlzdChjYW5vbmljYWxIZWFkZXJzKX0sIFNpZ25hdHVyZT0ke3NpZ25hdHVyZX1gO1xuICAgIHJldHVybiByZXF1ZXN0O1xuICB9XG4gIGNyZWF0ZUNhbm9uaWNhbFJlcXVlc3QocmVxdWVzdCwgY2Fub25pY2FsSGVhZGVycywgcGF5bG9hZEhhc2gpIHtcbiAgICBjb25zdCBzb3J0ZWRIZWFkZXJzID0gT2JqZWN0LmtleXMoY2Fub25pY2FsSGVhZGVycykuc29ydCgpO1xuICAgIHJldHVybiBgJHtyZXF1ZXN0Lm1ldGhvZH1cbiR7dGhpcy5nZXRDYW5vbmljYWxQYXRoKHJlcXVlc3QpfVxuJHtnZXRDYW5vbmljYWxRdWVyeShyZXF1ZXN0KX1cbiR7c29ydGVkSGVhZGVycy5tYXAoKG5hbWUpID0+IGAke25hbWV9OiR7Y2Fub25pY2FsSGVhZGVyc1tuYW1lXX1gKS5qb2luKFwiXFxuXCIpfVxuXG4ke3NvcnRlZEhlYWRlcnMuam9pbihcIjtcIil9XG4ke3BheWxvYWRIYXNofWA7XG4gIH1cbiAgYXN5bmMgY3JlYXRlU3RyaW5nVG9TaWduKGxvbmdEYXRlLCBjcmVkZW50aWFsU2NvcGUsIGNhbm9uaWNhbFJlcXVlc3QpIHtcbiAgICBjb25zdCBoYXNoID0gbmV3IHRoaXMuc2hhMjU2KCk7XG4gICAgaGFzaC51cGRhdGUoKDAsIGltcG9ydF91dGlsX3V0Zjg0LnRvVWludDhBcnJheSkoY2Fub25pY2FsUmVxdWVzdCkpO1xuICAgIGNvbnN0IGhhc2hlZFJlcXVlc3QgPSBhd2FpdCBoYXNoLmRpZ2VzdCgpO1xuICAgIHJldHVybiBgJHtBTEdPUklUSE1fSURFTlRJRklFUn1cbiR7bG9uZ0RhdGV9XG4ke2NyZWRlbnRpYWxTY29wZX1cbiR7KDAsIGltcG9ydF91dGlsX2hleF9lbmNvZGluZy50b0hleCkoaGFzaGVkUmVxdWVzdCl9YDtcbiAgfVxuICBnZXRDYW5vbmljYWxQYXRoKHsgcGF0aCB9KSB7XG4gICAgaWYgKHRoaXMudXJpRXNjYXBlUGF0aCkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZFBhdGhTZWdtZW50cyA9IFtdO1xuICAgICAgZm9yIChjb25zdCBwYXRoU2VnbWVudCBvZiBwYXRoLnNwbGl0KFwiL1wiKSkge1xuICAgICAgICBpZiAoKHBhdGhTZWdtZW50ID09IG51bGwgPyB2b2lkIDAgOiBwYXRoU2VnbWVudC5sZW5ndGgpID09PSAwKVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBpZiAocGF0aFNlZ21lbnQgPT09IFwiLlwiKVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBpZiAocGF0aFNlZ21lbnQgPT09IFwiLi5cIikge1xuICAgICAgICAgIG5vcm1hbGl6ZWRQYXRoU2VnbWVudHMucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9ybWFsaXplZFBhdGhTZWdtZW50cy5wdXNoKHBhdGhTZWdtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBgJHsocGF0aCA9PSBudWxsID8gdm9pZCAwIDogcGF0aC5zdGFydHNXaXRoKFwiL1wiKSkgPyBcIi9cIiA6IFwiXCJ9JHtub3JtYWxpemVkUGF0aFNlZ21lbnRzLmpvaW4oXCIvXCIpfSR7bm9ybWFsaXplZFBhdGhTZWdtZW50cy5sZW5ndGggPiAwICYmIChwYXRoID09IG51bGwgPyB2b2lkIDAgOiBwYXRoLmVuZHNXaXRoKFwiL1wiKSkgPyBcIi9cIiA6IFwiXCJ9YDtcbiAgICAgIGNvbnN0IGRvdWJsZUVuY29kZWQgPSAoMCwgaW1wb3J0X3V0aWxfdXJpX2VzY2FwZS5lc2NhcGVVcmkpKG5vcm1hbGl6ZWRQYXRoKTtcbiAgICAgIHJldHVybiBkb3VibGVFbmNvZGVkLnJlcGxhY2UoLyUyRi9nLCBcIi9cIik7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG4gIGFzeW5jIGdldFNpZ25hdHVyZShsb25nRGF0ZSwgY3JlZGVudGlhbFNjb3BlLCBrZXlQcm9taXNlLCBjYW5vbmljYWxSZXF1ZXN0KSB7XG4gICAgY29uc3Qgc3RyaW5nVG9TaWduID0gYXdhaXQgdGhpcy5jcmVhdGVTdHJpbmdUb1NpZ24obG9uZ0RhdGUsIGNyZWRlbnRpYWxTY29wZSwgY2Fub25pY2FsUmVxdWVzdCk7XG4gICAgY29uc3QgaGFzaCA9IG5ldyB0aGlzLnNoYTI1Nihhd2FpdCBrZXlQcm9taXNlKTtcbiAgICBoYXNoLnVwZGF0ZSgoMCwgaW1wb3J0X3V0aWxfdXRmODQudG9VaW50OEFycmF5KShzdHJpbmdUb1NpZ24pKTtcbiAgICByZXR1cm4gKDAsIGltcG9ydF91dGlsX2hleF9lbmNvZGluZy50b0hleCkoYXdhaXQgaGFzaC5kaWdlc3QoKSk7XG4gIH1cbiAgZ2V0U2lnbmluZ0tleShjcmVkZW50aWFscywgcmVnaW9uLCBzaG9ydERhdGUsIHNlcnZpY2UpIHtcbiAgICByZXR1cm4gZ2V0U2lnbmluZ0tleSh0aGlzLnNoYTI1NiwgY3JlZGVudGlhbHMsIHNob3J0RGF0ZSwgcmVnaW9uLCBzZXJ2aWNlIHx8IHRoaXMuc2VydmljZSk7XG4gIH1cbiAgdmFsaWRhdGVSZXNvbHZlZENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG4gICAgaWYgKHR5cGVvZiBjcmVkZW50aWFscyAhPT0gXCJvYmplY3RcIiB8fCAvLyBAdHMtZXhwZWN0LWVycm9yOiBQcm9wZXJ0eSAnYWNjZXNzS2V5SWQnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ29iamVjdCcudHMoMjMzOSlcbiAgICB0eXBlb2YgY3JlZGVudGlhbHMuYWNjZXNzS2V5SWQgIT09IFwic3RyaW5nXCIgfHwgLy8gQHRzLWV4cGVjdC1lcnJvcjogUHJvcGVydHkgJ3NlY3JldEFjY2Vzc0tleScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnb2JqZWN0Jy50cygyMzM5KVxuICAgIHR5cGVvZiBjcmVkZW50aWFscy5zZWNyZXRBY2Nlc3NLZXkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlc29sdmVkIGNyZWRlbnRpYWwgb2JqZWN0IGlzIG5vdCB2YWxpZFwiKTtcbiAgICB9XG4gIH1cbn07XG5fX25hbWUoX1NpZ25hdHVyZVY0LCBcIlNpZ25hdHVyZVY0XCIpO1xudmFyIFNpZ25hdHVyZVY0ID0gX1NpZ25hdHVyZVY0O1xudmFyIGZvcm1hdERhdGUgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChub3cpID0+IHtcbiAgY29uc3QgbG9uZ0RhdGUgPSBpc284NjAxKG5vdykucmVwbGFjZSgvW1xcLTpdL2csIFwiXCIpO1xuICByZXR1cm4ge1xuICAgIGxvbmdEYXRlLFxuICAgIHNob3J0RGF0ZTogbG9uZ0RhdGUuc2xpY2UoMCwgOClcbiAgfTtcbn0sIFwiZm9ybWF0RGF0ZVwiKTtcbnZhciBnZXRDYW5vbmljYWxIZWFkZXJMaXN0ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoaGVhZGVycykgPT4gT2JqZWN0LmtleXMoaGVhZGVycykuc29ydCgpLmpvaW4oXCI7XCIpLCBcImdldENhbm9uaWNhbEhlYWRlckxpc3RcIik7XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG5cbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDYW5vbmljYWxIZWFkZXJzLFxuICBnZXRDYW5vbmljYWxRdWVyeSxcbiAgZ2V0UGF5bG9hZEhhc2gsXG4gIG1vdmVIZWFkZXJzVG9RdWVyeSxcbiAgcHJlcGFyZVJlcXVlc3QsXG4gIFNpZ25hdHVyZVY0LFxuICBjcmVhdGVTY29wZSxcbiAgZ2V0U2lnbmluZ0tleSxcbiAgY2xlYXJDcmVkZW50aWFsQ2FjaGVcbn0pO1xuXG4iLCAiaW1wb3J0IHsgU2hhMjU2IH0gZnJvbSAnQGF3cy1jcnlwdG8vc2hhMjU2LWpzJztcbmltcG9ydCB7IEZldGNoSHR0cEhhbmRsZXIgfSBmcm9tICdAc21pdGh5L2ZldGNoLWh0dHAtaGFuZGxlcic7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0BzbWl0aHkvcHJvdG9jb2wtaHR0cCc7XG5pbXBvcnQgeyBTaWduYXR1cmVWNCB9IGZyb20gJ0BzbWl0aHkvc2lnbmF0dXJlLXY0JztcbmltcG9ydCB7IEF3c0NyZWRlbnRpYWxJZGVudGl0eVByb3ZpZGVyIH0gZnJvbSAnQHNtaXRoeS90eXBlcyc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQgeyBNZXJnZWRSZXF1ZXN0SW5pdCB9IGZyb20gJy4uL2ludGVybmFsL3R5cGVzJztcblxudHlwZSBBdXRoUHJvcHMgPSB7XG4gIHVybDogc3RyaW5nO1xuICByZWdpb25OYW1lOiBzdHJpbmc7XG4gIGF3c0FjY2Vzc0tleTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgYXdzU2VjcmV0S2V5OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBhd3NTZXNzaW9uVG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIGZldGNoT3B0aW9ucz86IE1lcmdlZFJlcXVlc3RJbml0IHwgdW5kZWZpbmVkO1xuICBwcm92aWRlckNoYWluUmVzb2x2ZXI/OiAoKCkgPT4gUHJvbWlzZTxBd3NDcmVkZW50aWFsSWRlbnRpdHlQcm92aWRlcj4pIHwgbnVsbDtcbn07XG5cbmNvbnN0IERFRkFVTFRfUFJPVklERVJfQ0hBSU5fUkVTT0xWRVI6ICgpID0+IFByb21pc2U8QXdzQ3JlZGVudGlhbElkZW50aXR5UHJvdmlkZXI+ID0gKCkgPT5cbiAgaW1wb3J0KCdAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycycpXG4gICAgLnRoZW4oKHsgZnJvbU5vZGVQcm92aWRlckNoYWluIH0pID0+XG4gICAgICBmcm9tTm9kZVByb3ZpZGVyQ2hhaW4oe1xuICAgICAgICBjbGllbnRDb25maWc6IHtcbiAgICAgICAgICByZXF1ZXN0SGFuZGxlcjogbmV3IEZldGNoSHR0cEhhbmRsZXIoe1xuICAgICAgICAgICAgcmVxdWVzdEluaXQ6IChodHRwUmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmh0dHBSZXF1ZXN0LFxuICAgICAgICAgICAgICB9IGFzIFJlcXVlc3RJbml0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gaW1wb3J0ICdAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVycycuYCArXG4gICAgICAgICAgYFlvdSBjYW4gcHJvdmlkZSBhIGN1c3RvbSBcXGBwcm92aWRlckNoYWluUmVzb2x2ZXJcXGAgaW4gdGhlIGNsaWVudCBvcHRpb25zIGlmIHlvdXIgcnVudGltZSBkb2VzIG5vdCBoYXZlIGFjY2VzcyB0byAnQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlcnMnOiBgICtcbiAgICAgICAgICBgXFxgbmV3IEFudGhyb3BpY0JlZHJvY2soeyBwcm92aWRlckNoYWluUmVzb2x2ZXIgfSlcXGAgYCArXG4gICAgICAgICAgYE9yaWdpbmFsIGVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCxcbiAgICAgICk7XG4gICAgfSk7XG5cbmV4cG9ydCBjb25zdCBnZXRBdXRoSGVhZGVycyA9IGFzeW5jIChyZXE6IFJlcXVlc3RJbml0LCBwcm9wczogQXV0aFByb3BzKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9PiB7XG4gIGFzc2VydChyZXEubWV0aG9kLCAnRXhwZWN0ZWQgcmVxdWVzdCBtZXRob2QgcHJvcGVydHkgdG8gYmUgc2V0Jyk7XG5cbiAgbGV0IGNyZWRlbnRpYWxzO1xuICBpZiAocHJvcHMuYXdzQWNjZXNzS2V5ICYmIHByb3BzLmF3c1NlY3JldEtleSkge1xuICAgIGNyZWRlbnRpYWxzID0ge1xuICAgICAgYWNjZXNzS2V5SWQ6IHByb3BzLmF3c0FjY2Vzc0tleSxcbiAgICAgIHNlY3JldEFjY2Vzc0tleTogcHJvcHMuYXdzU2VjcmV0S2V5LFxuICAgICAgLi4uKHByb3BzLmF3c1Nlc3Npb25Ub2tlbiAhPSBudWxsICYmIHsgc2Vzc2lvblRva2VuOiBwcm9wcy5hd3NTZXNzaW9uVG9rZW4gfSksXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IChwcm9wcy5wcm92aWRlckNoYWluUmVzb2x2ZXIgP1xuICAgICAgcHJvcHMucHJvdmlkZXJDaGFpblJlc29sdmVyKClcbiAgICA6IERFRkFVTFRfUFJPVklERVJfQ0hBSU5fUkVTT0xWRVIoKSk7XG4gICAgY3JlZGVudGlhbHMgPSBhd2FpdCBwcm92aWRlcigpO1xuICB9XG5cbiAgY29uc3Qgc2lnbmVyID0gbmV3IFNpZ25hdHVyZVY0KHtcbiAgICBzZXJ2aWNlOiAnYmVkcm9jaycsXG4gICAgcmVnaW9uOiBwcm9wcy5yZWdpb25OYW1lLFxuICAgIGNyZWRlbnRpYWxzLFxuICAgIHNoYTI1NjogU2hhMjU2LFxuICB9KTtcblxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHByb3BzLnVybCk7XG5cbiAgY29uc3QgaGVhZGVycyA9XG4gICAgIXJlcS5oZWFkZXJzID8ge31cbiAgICA6IFN5bWJvbC5pdGVyYXRvciBpbiByZXEuaGVhZGVycyA/XG4gICAgICBPYmplY3QuZnJvbUVudHJpZXMoQXJyYXkuZnJvbShyZXEuaGVhZGVycykubWFwKChoZWFkZXIpID0+IFsuLi5oZWFkZXJdKSlcbiAgICA6IHsgLi4ucmVxLmhlYWRlcnMgfTtcblxuICAvLyBUaGUgY29ubmVjdGlvbiBoZWFkZXIgbWF5IGJlIHN0cmlwcGVkIGJ5IGEgcHJveHkgc29tZXdoZXJlLCBzbyB0aGUgcmVjZWl2ZXJcbiAgLy8gb2YgdGhpcyBtZXNzYWdlIG1heSBub3Qgc2VlIHRoaXMgaGVhZGVyLCBzbyB3ZSByZW1vdmUgaXQgZnJvbSB0aGUgc2V0IG9mIGhlYWRlcnNcbiAgLy8gdGhhdCBhcmUgc2lnbmVkLlxuICBkZWxldGUgaGVhZGVyc1snY29ubmVjdGlvbiddO1xuICBoZWFkZXJzWydob3N0J10gPSB1cmwuaG9zdG5hbWU7XG5cbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBIdHRwUmVxdWVzdCh7XG4gICAgbWV0aG9kOiByZXEubWV0aG9kLnRvVXBwZXJDYXNlKCksXG4gICAgcHJvdG9jb2w6IHVybC5wcm90b2NvbCxcbiAgICBwYXRoOiB1cmwucGF0aG5hbWUsXG4gICAgaGVhZGVycyxcbiAgICBib2R5OiByZXEuYm9keSxcbiAgfSk7XG5cbiAgY29uc3Qgc2lnbmVkID0gYXdhaXQgc2lnbmVyLnNpZ24ocmVxdWVzdCk7XG4gIHJldHVybiBzaWduZWQuaGVhZGVycztcbn07XG4iLCAiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IFNvdXJjZURhdGEgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IGZyb21VdGY4IGFzIGZyb21VdGY4QnJvd3NlciB9IGZyb20gXCJAYXdzLXNkay91dGlsLXV0ZjgtYnJvd3NlclwiO1xuXG4vLyBRdWljayBwb2x5ZmlsbFxuY29uc3QgZnJvbVV0ZjggPVxuICB0eXBlb2YgQnVmZmVyICE9PSBcInVuZGVmaW5lZFwiICYmIEJ1ZmZlci5mcm9tXG4gICAgPyAoaW5wdXQ6IHN0cmluZykgPT4gQnVmZmVyLmZyb20oaW5wdXQsIFwidXRmOFwiKVxuICAgIDogZnJvbVV0ZjhCcm93c2VyO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvQnVmZmVyKGRhdGE6IFNvdXJjZURhdGEpOiBVaW50OEFycmF5IHtcbiAgLy8gQWxyZWFkeSBhIFVpbnQ4LCBkbyBub3RoaW5nXG4gIGlmIChkYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSkgcmV0dXJuIGRhdGE7XG5cbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGZyb21VdGY4KGRhdGEpO1xuICB9XG5cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShcbiAgICAgIGRhdGEuYnVmZmVyLFxuICAgICAgZGF0YS5ieXRlT2Zmc2V0LFxuICAgICAgZGF0YS5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG59XG4iLCAiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IFNvdXJjZURhdGEgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlEYXRhKGRhdGE6IFNvdXJjZURhdGEpOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGRhdGEubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIGRhdGEuYnl0ZUxlbmd0aCA9PT0gMDtcbn1cbiIsICIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuZXhwb3J0IGZ1bmN0aW9uIG51bVRvVWludDgobnVtOiBudW1iZXIpIHtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAobnVtICYgMHhmZjAwMDAwMCkgPj4gMjQsXG4gICAgKG51bSAmIDB4MDBmZjAwMDApID4+IDE2LFxuICAgIChudW0gJiAweDAwMDBmZjAwKSA+PiA4LFxuICAgIG51bSAmIDB4MDAwMDAwZmYsXG4gIF0pO1xufVxuIiwgIi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuXG4vLyBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IEFycmF5LmZyb20sIHNvIHdlIGRvIGl0IG1hbnVhbGx5XG5leHBvcnQgZnVuY3Rpb24gdWludDMyQXJyYXlGcm9tKGFfbG9va1VwVGFibGU6IEFycmF5PG51bWJlcj4pOiBVaW50MzJBcnJheSB7XG4gIGlmICghVWludDMyQXJyYXkuZnJvbSkge1xuICAgIGNvbnN0IHJldHVybl9hcnJheSA9IG5ldyBVaW50MzJBcnJheShhX2xvb2tVcFRhYmxlLmxlbmd0aClcbiAgICBsZXQgYV9pbmRleCA9IDBcbiAgICB3aGlsZSAoYV9pbmRleCA8IGFfbG9va1VwVGFibGUubGVuZ3RoKSB7XG4gICAgICByZXR1cm5fYXJyYXlbYV9pbmRleF0gPSBhX2xvb2tVcFRhYmxlW2FfaW5kZXhdXG4gICAgICBhX2luZGV4ICs9IDFcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybl9hcnJheVxuICB9XG4gIHJldHVybiBVaW50MzJBcnJheS5mcm9tKGFfbG9va1VwVGFibGUpXG59XG4iLCAiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmV4cG9ydCB7IGNvbnZlcnRUb0J1ZmZlciB9IGZyb20gXCIuL2NvbnZlcnRUb0J1ZmZlclwiO1xuZXhwb3J0IHsgaXNFbXB0eURhdGEgfSBmcm9tIFwiLi9pc0VtcHR5RGF0YVwiO1xuZXhwb3J0IHsgbnVtVG9VaW50OCB9IGZyb20gXCIuL251bVRvVWludDhcIjtcbmV4cG9ydCB7dWludDMyQXJyYXlGcm9tfSBmcm9tICcuL3VpbnQzMkFycmF5RnJvbSc7XG4iLCAiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5cbmltcG9ydCB7IFNvdXJjZURhdGEsIENoZWNrc3VtIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBjb252ZXJ0VG9CdWZmZXIsIGlzRW1wdHlEYXRhLCBudW1Ub1VpbnQ4IH0gZnJvbSBcIkBhd3MtY3J5cHRvL3V0aWxcIjtcbmltcG9ydCB7IENyYzMyIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGNsYXNzIEF3c0NyYzMyIGltcGxlbWVudHMgQ2hlY2tzdW0ge1xuICBwcml2YXRlIGNyYzMyID0gbmV3IENyYzMyKCk7XG5cbiAgdXBkYXRlKHRvSGFzaDogU291cmNlRGF0YSkge1xuICAgIGlmIChpc0VtcHR5RGF0YSh0b0hhc2gpKSByZXR1cm47XG5cbiAgICB0aGlzLmNyYzMyLnVwZGF0ZShjb252ZXJ0VG9CdWZmZXIodG9IYXNoKSk7XG4gIH1cblxuICBhc3luYyBkaWdlc3QoKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XG4gICAgcmV0dXJuIG51bVRvVWludDgodGhpcy5jcmMzMi5kaWdlc3QoKSk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmNyYzMyID0gbmV3IENyYzMyKCk7XG4gIH1cbn1cbiIsICJpbXBvcnQge3VpbnQzMkFycmF5RnJvbX0gZnJvbSBcIkBhd3MtY3J5cHRvL3V0aWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyYzMyKGRhdGE6IFVpbnQ4QXJyYXkpOiBudW1iZXIge1xuICByZXR1cm4gbmV3IENyYzMyKCkudXBkYXRlKGRhdGEpLmRpZ2VzdCgpO1xufVxuXG5leHBvcnQgY2xhc3MgQ3JjMzIge1xuICBwcml2YXRlIGNoZWNrc3VtID0gMHhmZmZmZmZmZjtcblxuICB1cGRhdGUoZGF0YTogVWludDhBcnJheSk6IHRoaXMge1xuICAgIGZvciAoY29uc3QgYnl0ZSBvZiBkYXRhKSB7XG4gICAgICB0aGlzLmNoZWNrc3VtID1cbiAgICAgICAgKHRoaXMuY2hlY2tzdW0gPj4+IDgpIF4gbG9va3VwVGFibGVbKHRoaXMuY2hlY2tzdW0gXiBieXRlKSAmIDB4ZmZdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGlnZXN0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuICh0aGlzLmNoZWNrc3VtIF4gMHhmZmZmZmZmZikgPj4+IDA7XG4gIH1cbn1cblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBhX2xvb2tVcFRhYmxlID0gW1xuICAweDAwMDAwMDAwLCAweDc3MDczMDk2LCAweEVFMEU2MTJDLCAweDk5MDk1MUJBLFxuICAweDA3NkRDNDE5LCAweDcwNkFGNDhGLCAweEU5NjNBNTM1LCAweDlFNjQ5NUEzLFxuICAweDBFREI4ODMyLCAweDc5RENCOEE0LCAweEUwRDVFOTFFLCAweDk3RDJEOTg4LFxuICAweDA5QjY0QzJCLCAweDdFQjE3Q0JELCAweEU3QjgyRDA3LCAweDkwQkYxRDkxLFxuICAweDFEQjcxMDY0LCAweDZBQjAyMEYyLCAweEYzQjk3MTQ4LCAweDg0QkU0MURFLFxuICAweDFBREFENDdELCAweDZERERFNEVCLCAweEY0RDRCNTUxLCAweDgzRDM4NUM3LFxuICAweDEzNkM5ODU2LCAweDY0NkJBOEMwLCAweEZENjJGOTdBLCAweDhBNjVDOUVDLFxuICAweDE0MDE1QzRGLCAweDYzMDY2Q0Q5LCAweEZBMEYzRDYzLCAweDhEMDgwREY1LFxuICAweDNCNkUyMEM4LCAweDRDNjkxMDVFLCAweEQ1NjA0MUU0LCAweEEyNjc3MTcyLFxuICAweDNDMDNFNEQxLCAweDRCMDRENDQ3LCAweEQyMEQ4NUZELCAweEE1MEFCNTZCLFxuICAweDM1QjVBOEZBLCAweDQyQjI5ODZDLCAweERCQkJDOUQ2LCAweEFDQkNGOTQwLFxuICAweDMyRDg2Q0UzLCAweDQ1REY1Qzc1LCAweERDRDYwRENGLCAweEFCRDEzRDU5LFxuICAweDI2RDkzMEFDLCAweDUxREUwMDNBLCAweEM4RDc1MTgwLCAweEJGRDA2MTE2LFxuICAweDIxQjRGNEI1LCAweDU2QjNDNDIzLCAweENGQkE5NTk5LCAweEI4QkRBNTBGLFxuICAweDI4MDJCODlFLCAweDVGMDU4ODA4LCAweEM2MENEOUIyLCAweEIxMEJFOTI0LFxuICAweDJGNkY3Qzg3LCAweDU4Njg0QzExLCAweEMxNjExREFCLCAweEI2NjYyRDNELFxuICAweDc2REM0MTkwLCAweDAxREI3MTA2LCAweDk4RDIyMEJDLCAweEVGRDUxMDJBLFxuICAweDcxQjE4NTg5LCAweDA2QjZCNTFGLCAweDlGQkZFNEE1LCAweEU4QjhENDMzLFxuICAweDc4MDdDOUEyLCAweDBGMDBGOTM0LCAweDk2MDlBODhFLCAweEUxMEU5ODE4LFxuICAweDdGNkEwREJCLCAweDA4NkQzRDJELCAweDkxNjQ2Qzk3LCAweEU2NjM1QzAxLFxuICAweDZCNkI1MUY0LCAweDFDNkM2MTYyLCAweDg1NjUzMEQ4LCAweEYyNjIwMDRFLFxuICAweDZDMDY5NUVELCAweDFCMDFBNTdCLCAweDgyMDhGNEMxLCAweEY1MEZDNDU3LFxuICAweDY1QjBEOUM2LCAweDEyQjdFOTUwLCAweDhCQkVCOEVBLCAweEZDQjk4ODdDLFxuICAweDYyREQxRERGLCAweDE1REEyRDQ5LCAweDhDRDM3Q0YzLCAweEZCRDQ0QzY1LFxuICAweDREQjI2MTU4LCAweDNBQjU1MUNFLCAweEEzQkMwMDc0LCAweEQ0QkIzMEUyLFxuICAweDRBREZBNTQxLCAweDNERDg5NUQ3LCAweEE0RDFDNDZELCAweEQzRDZGNEZCLFxuICAweDQzNjlFOTZBLCAweDM0NkVEOUZDLCAweEFENjc4ODQ2LCAweERBNjBCOEQwLFxuICAweDQ0MDQyRDczLCAweDMzMDMxREU1LCAweEFBMEE0QzVGLCAweEREMEQ3Q0M5LFxuICAweDUwMDU3MTNDLCAweDI3MDI0MUFBLCAweEJFMEIxMDEwLCAweEM5MEMyMDg2LFxuICAweDU3NjhCNTI1LCAweDIwNkY4NUIzLCAweEI5NjZENDA5LCAweENFNjFFNDlGLFxuICAweDVFREVGOTBFLCAweDI5RDlDOTk4LCAweEIwRDA5ODIyLCAweEM3RDdBOEI0LFxuICAweDU5QjMzRDE3LCAweDJFQjQwRDgxLCAweEI3QkQ1QzNCLCAweEMwQkE2Q0FELFxuICAweEVEQjg4MzIwLCAweDlBQkZCM0I2LCAweDAzQjZFMjBDLCAweDc0QjFEMjlBLFxuICAweEVBRDU0NzM5LCAweDlERDI3N0FGLCAweDA0REIyNjE1LCAweDczREMxNjgzLFxuICAweEUzNjMwQjEyLCAweDk0NjQzQjg0LCAweDBENkQ2QTNFLCAweDdBNkE1QUE4LFxuICAweEU0MEVDRjBCLCAweDkzMDlGRjlELCAweDBBMDBBRTI3LCAweDdEMDc5RUIxLFxuICAweEYwMEY5MzQ0LCAweDg3MDhBM0QyLCAweDFFMDFGMjY4LCAweDY5MDZDMkZFLFxuICAweEY3NjI1NzVELCAweDgwNjU2N0NCLCAweDE5NkMzNjcxLCAweDZFNkIwNkU3LFxuICAweEZFRDQxQjc2LCAweDg5RDMyQkUwLCAweDEwREE3QTVBLCAweDY3REQ0QUNDLFxuICAweEY5QjlERjZGLCAweDhFQkVFRkY5LCAweDE3QjdCRTQzLCAweDYwQjA4RUQ1LFxuICAweEQ2RDZBM0U4LCAweEExRDE5MzdFLCAweDM4RDhDMkM0LCAweDRGREZGMjUyLFxuICAweEQxQkI2N0YxLCAweEE2QkM1NzY3LCAweDNGQjUwNkRELCAweDQ4QjIzNjRCLFxuICAweEQ4MEQyQkRBLCAweEFGMEExQjRDLCAweDM2MDM0QUY2LCAweDQxMDQ3QTYwLFxuICAweERGNjBFRkMzLCAweEE4NjdERjU1LCAweDMxNkU4RUVGLCAweDQ2NjlCRTc5LFxuICAweENCNjFCMzhDLCAweEJDNjY4MzFBLCAweDI1NkZEMkEwLCAweDUyNjhFMjM2LFxuICAweENDMEM3Nzk1LCAweEJCMEI0NzAzLCAweDIyMDIxNkI5LCAweDU1MDUyNjJGLFxuICAweEM1QkEzQkJFLCAweEIyQkQwQjI4LCAweDJCQjQ1QTkyLCAweDVDQjM2QTA0LFxuICAweEMyRDdGRkE3LCAweEI1RDBDRjMxLCAweDJDRDk5RThCLCAweDVCREVBRTFELFxuICAweDlCNjRDMkIwLCAweEVDNjNGMjI2LCAweDc1NkFBMzlDLCAweDAyNkQ5MzBBLFxuICAweDlDMDkwNkE5LCAweEVCMEUzNjNGLCAweDcyMDc2Nzg1LCAweDA1MDA1NzEzLFxuICAweDk1QkY0QTgyLCAweEUyQjg3QTE0LCAweDdCQjEyQkFFLCAweDBDQjYxQjM4LFxuICAweDkyRDI4RTlCLCAweEU1RDVCRTBELCAweDdDRENFRkI3LCAweDBCREJERjIxLFxuICAweDg2RDNEMkQ0LCAweEYxRDRFMjQyLCAweDY4RERCM0Y4LCAweDFGREE4MzZFLFxuICAweDgxQkUxNkNELCAweEY2QjkyNjVCLCAweDZGQjA3N0UxLCAweDE4Qjc0Nzc3LFxuICAweDg4MDg1QUU2LCAweEZGMEY2QTcwLCAweDY2MDYzQkNBLCAweDExMDEwQjVDLFxuICAweDhGNjU5RUZGLCAweEY4NjJBRTY5LCAweDYxNkJGRkQzLCAweDE2NkNDRjQ1LFxuICAweEEwMEFFMjc4LCAweEQ3MEREMkVFLCAweDRFMDQ4MzU0LCAweDM5MDNCM0MyLFxuICAweEE3NjcyNjYxLCAweEQwNjAxNkY3LCAweDQ5Njk0NzRELCAweDNFNkU3N0RCLFxuICAweEFFRDE2QTRBLCAweEQ5RDY1QURDLCAweDQwREYwQjY2LCAweDM3RDgzQkYwLFxuICAweEE5QkNBRTUzLCAweERFQkI5RUM1LCAweDQ3QjJDRjdGLCAweDMwQjVGRkU5LFxuICAweEJEQkRGMjFDLCAweENBQkFDMjhBLCAweDUzQjM5MzMwLCAweDI0QjRBM0E2LFxuICAweEJBRDAzNjA1LCAweENERDcwNjkzLCAweDU0REU1NzI5LCAweDIzRDk2N0JGLFxuICAweEIzNjY3QTJFLCAweEM0NjE0QUI4LCAweDVENjgxQjAyLCAweDJBNkYyQjk0LFxuICAweEI0MEJCRTM3LCAweEMzMEM4RUExLCAweDVBMDVERjFCLCAweDJEMDJFRjhELFxuXTtcbmNvbnN0IGxvb2t1cFRhYmxlOiBVaW50MzJBcnJheSA9IHVpbnQzMkFycmF5RnJvbShhX2xvb2tVcFRhYmxlKVxuZXhwb3J0IHsgQXdzQ3JjMzIgfSBmcm9tIFwiLi9hd3NfY3JjMzJcIjtcbiIsICJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX25hbWUgPSAodGFyZ2V0LCB2YWx1ZSkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJuYW1lXCIsIHsgdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgZnJvbUhleDogKCkgPT4gZnJvbUhleCxcbiAgdG9IZXg6ICgpID0+IHRvSGV4XG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcbnZhciBTSE9SVF9UT19IRVggPSB7fTtcbnZhciBIRVhfVE9fU0hPUlQgPSB7fTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgbGV0IGVuY29kZWRCeXRlID0gaS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGVuY29kZWRCeXRlLmxlbmd0aCA9PT0gMSkge1xuICAgIGVuY29kZWRCeXRlID0gYDAke2VuY29kZWRCeXRlfWA7XG4gIH1cbiAgU0hPUlRfVE9fSEVYW2ldID0gZW5jb2RlZEJ5dGU7XG4gIEhFWF9UT19TSE9SVFtlbmNvZGVkQnl0ZV0gPSBpO1xufVxuZnVuY3Rpb24gZnJvbUhleChlbmNvZGVkKSB7XG4gIGlmIChlbmNvZGVkLmxlbmd0aCAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZXggZW5jb2RlZCBzdHJpbmdzIG11c3QgaGF2ZSBhbiBldmVuIG51bWJlciBsZW5ndGhcIik7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZC5sZW5ndGggLyAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgY29uc3QgZW5jb2RlZEJ5dGUgPSBlbmNvZGVkLnNsaWNlKGksIGkgKyAyKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChlbmNvZGVkQnl0ZSBpbiBIRVhfVE9fU0hPUlQpIHtcbiAgICAgIG91dFtpIC8gMl0gPSBIRVhfVE9fU0hPUlRbZW5jb2RlZEJ5dGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkZWNvZGUgdW5yZWNvZ25pemVkIHNlcXVlbmNlICR7ZW5jb2RlZEJ5dGV9IGFzIGhleGFkZWNpbWFsYCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXQ7XG59XG5fX25hbWUoZnJvbUhleCwgXCJmcm9tSGV4XCIpO1xuZnVuY3Rpb24gdG9IZXgoYnl0ZXMpIHtcbiAgbGV0IG91dCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMuYnl0ZUxlbmd0aDsgaSsrKSB7XG4gICAgb3V0ICs9IFNIT1JUX1RPX0hFWFtieXRlc1tpXV07XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cbl9fbmFtZSh0b0hleCwgXCJ0b0hleFwiKTtcbi8vIEFubm90YXRlIHRoZSBDb21tb25KUyBleHBvcnQgbmFtZXMgZm9yIEVTTSBpbXBvcnQgaW4gbm9kZTpcblxuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZyb21IZXgsXG4gIHRvSGV4XG59KTtcblxuIiwgInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIHNyY19leHBvcnRzID0ge307XG5fX2V4cG9ydChzcmNfZXhwb3J0cywge1xuICBFdmVudFN0cmVhbUNvZGVjOiAoKSA9PiBFdmVudFN0cmVhbUNvZGVjLFxuICBIZWFkZXJNYXJzaGFsbGVyOiAoKSA9PiBIZWFkZXJNYXJzaGFsbGVyLFxuICBJbnQ2NDogKCkgPT4gSW50NjQsXG4gIE1lc3NhZ2VEZWNvZGVyU3RyZWFtOiAoKSA9PiBNZXNzYWdlRGVjb2RlclN0cmVhbSxcbiAgTWVzc2FnZUVuY29kZXJTdHJlYW06ICgpID0+IE1lc3NhZ2VFbmNvZGVyU3RyZWFtLFxuICBTbWl0aHlNZXNzYWdlRGVjb2RlclN0cmVhbTogKCkgPT4gU21pdGh5TWVzc2FnZURlY29kZXJTdHJlYW0sXG4gIFNtaXRoeU1lc3NhZ2VFbmNvZGVyU3RyZWFtOiAoKSA9PiBTbWl0aHlNZXNzYWdlRW5jb2RlclN0cmVhbVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhzcmNfZXhwb3J0cyk7XG5cbi8vIHNyYy9FdmVudFN0cmVhbUNvZGVjLnRzXG52YXIgaW1wb3J0X2NyYzMyMiA9IHJlcXVpcmUoXCJAYXdzLWNyeXB0by9jcmMzMlwiKTtcblxuLy8gc3JjL0hlYWRlck1hcnNoYWxsZXIudHNcblxuXG4vLyBzcmMvSW50NjQudHNcbnZhciBpbXBvcnRfdXRpbF9oZXhfZW5jb2RpbmcgPSByZXF1aXJlKFwiQHNtaXRoeS91dGlsLWhleC1lbmNvZGluZ1wiKTtcbnZhciBfSW50NjQgPSBjbGFzcyBfSW50NjQge1xuICBjb25zdHJ1Y3RvcihieXRlcykge1xuICAgIHRoaXMuYnl0ZXMgPSBieXRlcztcbiAgICBpZiAoYnl0ZXMuYnl0ZUxlbmd0aCAhPT0gOCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW50NjQgYnVmZmVycyBtdXN0IGJlIGV4YWN0bHkgOCBieXRlc1wiKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGZyb21OdW1iZXIobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA+IDkyMjMzNzIwMzY4NTQ3NzZlMyB8fCBudW1iZXIgPCAtOTIyMzM3MjAzNjg1NDc3NmUzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bnVtYmVyfSBpcyB0b28gbGFyZ2UgKG9yLCBpZiBuZWdhdGl2ZSwgdG9vIHNtYWxsKSB0byByZXByZXNlbnQgYXMgYW4gSW50NjRgKTtcbiAgICB9XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheSg4KTtcbiAgICBmb3IgKGxldCBpID0gNywgcmVtYWluaW5nID0gTWF0aC5hYnMoTWF0aC5yb3VuZChudW1iZXIpKTsgaSA+IC0xICYmIHJlbWFpbmluZyA+IDA7IGktLSwgcmVtYWluaW5nIC89IDI1Nikge1xuICAgICAgYnl0ZXNbaV0gPSByZW1haW5pbmc7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICBuZWdhdGUoYnl0ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IF9JbnQ2NChieXRlcyk7XG4gIH1cbiAgLyoqXG4gICAqIENhbGxlZCBpbXBsaWNpdGx5IGJ5IGluZml4IGFyaXRobWV0aWMgb3BlcmF0b3JzLlxuICAgKi9cbiAgdmFsdWVPZigpIHtcbiAgICBjb25zdCBieXRlcyA9IHRoaXMuYnl0ZXMuc2xpY2UoMCk7XG4gICAgY29uc3QgbmVnYXRpdmUgPSBieXRlc1swXSAmIDEyODtcbiAgICBpZiAobmVnYXRpdmUpIHtcbiAgICAgIG5lZ2F0ZShieXRlcyk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludCgoMCwgaW1wb3J0X3V0aWxfaGV4X2VuY29kaW5nLnRvSGV4KShieXRlcyksIDE2KSAqIChuZWdhdGl2ZSA/IC0xIDogMSk7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLnZhbHVlT2YoKSk7XG4gIH1cbn07XG5fX25hbWUoX0ludDY0LCBcIkludDY0XCIpO1xudmFyIEludDY0ID0gX0ludDY0O1xuZnVuY3Rpb24gbmVnYXRlKGJ5dGVzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgYnl0ZXNbaV0gXj0gMjU1O1xuICB9XG4gIGZvciAobGV0IGkgPSA3OyBpID4gLTE7IGktLSkge1xuICAgIGJ5dGVzW2ldKys7XG4gICAgaWYgKGJ5dGVzW2ldICE9PSAwKVxuICAgICAgYnJlYWs7XG4gIH1cbn1cbl9fbmFtZShuZWdhdGUsIFwibmVnYXRlXCIpO1xuXG4vLyBzcmMvSGVhZGVyTWFyc2hhbGxlci50c1xudmFyIF9IZWFkZXJNYXJzaGFsbGVyID0gY2xhc3MgX0hlYWRlck1hcnNoYWxsZXIge1xuICBjb25zdHJ1Y3Rvcih0b1V0ZjgsIGZyb21VdGY4KSB7XG4gICAgdGhpcy50b1V0ZjggPSB0b1V0Zjg7XG4gICAgdGhpcy5mcm9tVXRmOCA9IGZyb21VdGY4O1xuICB9XG4gIGZvcm1hdChoZWFkZXJzKSB7XG4gICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgZm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpKSB7XG4gICAgICBjb25zdCBieXRlcyA9IHRoaXMuZnJvbVV0ZjgoaGVhZGVyTmFtZSk7XG4gICAgICBjaHVua3MucHVzaChVaW50OEFycmF5LmZyb20oW2J5dGVzLmJ5dGVMZW5ndGhdKSwgYnl0ZXMsIHRoaXMuZm9ybWF0SGVhZGVyVmFsdWUoaGVhZGVyc1toZWFkZXJOYW1lXSkpO1xuICAgIH1cbiAgICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheShjaHVua3MucmVkdWNlKChjYXJyeSwgYnl0ZXMpID0+IGNhcnJ5ICsgYnl0ZXMuYnl0ZUxlbmd0aCwgMCkpO1xuICAgIGxldCBwb3NpdGlvbiA9IDA7XG4gICAgZm9yIChjb25zdCBjaHVuayBvZiBjaHVua3MpIHtcbiAgICAgIG91dC5zZXQoY2h1bmssIHBvc2l0aW9uKTtcbiAgICAgIHBvc2l0aW9uICs9IGNodW5rLmJ5dGVMZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cbiAgZm9ybWF0SGVhZGVyVmFsdWUoaGVhZGVyKSB7XG4gICAgc3dpdGNoIChoZWFkZXIudHlwZSkge1xuICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShbaGVhZGVyLnZhbHVlID8gMCAvKiBib29sVHJ1ZSAqLyA6IDEgLyogYm9vbEZhbHNlICovXSk7XG4gICAgICBjYXNlIFwiYnl0ZVwiOlxuICAgICAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKFsyIC8qIGJ5dGUgKi8sIGhlYWRlci52YWx1ZV0pO1xuICAgICAgY2FzZSBcInNob3J0XCI6XG4gICAgICAgIGNvbnN0IHNob3J0VmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMykpO1xuICAgICAgICBzaG9ydFZpZXcuc2V0VWludDgoMCwgMyAvKiBzaG9ydCAqLyk7XG4gICAgICAgIHNob3J0Vmlldy5zZXRJbnQxNigxLCBoZWFkZXIudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNob3J0Vmlldy5idWZmZXIpO1xuICAgICAgY2FzZSBcImludGVnZXJcIjpcbiAgICAgICAgY29uc3QgaW50VmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoNSkpO1xuICAgICAgICBpbnRWaWV3LnNldFVpbnQ4KDAsIDQgLyogaW50ZWdlciAqLyk7XG4gICAgICAgIGludFZpZXcuc2V0SW50MzIoMSwgaGVhZGVyLnZhbHVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShpbnRWaWV3LmJ1ZmZlcik7XG4gICAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgICBjb25zdCBsb25nQnl0ZXMgPSBuZXcgVWludDhBcnJheSg5KTtcbiAgICAgICAgbG9uZ0J5dGVzWzBdID0gNSAvKiBsb25nICovO1xuICAgICAgICBsb25nQnl0ZXMuc2V0KGhlYWRlci52YWx1ZS5ieXRlcywgMSk7XG4gICAgICAgIHJldHVybiBsb25nQnl0ZXM7XG4gICAgICBjYXNlIFwiYmluYXJ5XCI6XG4gICAgICAgIGNvbnN0IGJpblZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDMgKyBoZWFkZXIudmFsdWUuYnl0ZUxlbmd0aCkpO1xuICAgICAgICBiaW5WaWV3LnNldFVpbnQ4KDAsIDYgLyogYnl0ZUFycmF5ICovKTtcbiAgICAgICAgYmluVmlldy5zZXRVaW50MTYoMSwgaGVhZGVyLnZhbHVlLmJ5dGVMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgYmluQnl0ZXMgPSBuZXcgVWludDhBcnJheShiaW5WaWV3LmJ1ZmZlcik7XG4gICAgICAgIGJpbkJ5dGVzLnNldChoZWFkZXIudmFsdWUsIDMpO1xuICAgICAgICByZXR1cm4gYmluQnl0ZXM7XG4gICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgIGNvbnN0IHV0ZjhCeXRlcyA9IHRoaXMuZnJvbVV0ZjgoaGVhZGVyLnZhbHVlKTtcbiAgICAgICAgY29uc3Qgc3RyVmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMyArIHV0ZjhCeXRlcy5ieXRlTGVuZ3RoKSk7XG4gICAgICAgIHN0clZpZXcuc2V0VWludDgoMCwgNyAvKiBzdHJpbmcgKi8pO1xuICAgICAgICBzdHJWaWV3LnNldFVpbnQxNigxLCB1dGY4Qnl0ZXMuYnl0ZUxlbmd0aCwgZmFsc2UpO1xuICAgICAgICBjb25zdCBzdHJCeXRlcyA9IG5ldyBVaW50OEFycmF5KHN0clZpZXcuYnVmZmVyKTtcbiAgICAgICAgc3RyQnl0ZXMuc2V0KHV0ZjhCeXRlcywgMyk7XG4gICAgICAgIHJldHVybiBzdHJCeXRlcztcbiAgICAgIGNhc2UgXCJ0aW1lc3RhbXBcIjpcbiAgICAgICAgY29uc3QgdHNCeXRlcyA9IG5ldyBVaW50OEFycmF5KDkpO1xuICAgICAgICB0c0J5dGVzWzBdID0gOCAvKiB0aW1lc3RhbXAgKi87XG4gICAgICAgIHRzQnl0ZXMuc2V0KEludDY0LmZyb21OdW1iZXIoaGVhZGVyLnZhbHVlLnZhbHVlT2YoKSkuYnl0ZXMsIDEpO1xuICAgICAgICByZXR1cm4gdHNCeXRlcztcbiAgICAgIGNhc2UgXCJ1dWlkXCI6XG4gICAgICAgIGlmICghVVVJRF9QQVRURVJOLnRlc3QoaGVhZGVyLnZhbHVlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBVVUlEIHJlY2VpdmVkOiAke2hlYWRlci52YWx1ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1dWlkQnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNyk7XG4gICAgICAgIHV1aWRCeXRlc1swXSA9IDkgLyogdXVpZCAqLztcbiAgICAgICAgdXVpZEJ5dGVzLnNldCgoMCwgaW1wb3J0X3V0aWxfaGV4X2VuY29kaW5nLmZyb21IZXgpKGhlYWRlci52YWx1ZS5yZXBsYWNlKC9cXC0vZywgXCJcIikpLCAxKTtcbiAgICAgICAgcmV0dXJuIHV1aWRCeXRlcztcbiAgICB9XG4gIH1cbiAgcGFyc2UoaGVhZGVycykge1xuICAgIGNvbnN0IG91dCA9IHt9O1xuICAgIGxldCBwb3NpdGlvbiA9IDA7XG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgaGVhZGVycy5ieXRlTGVuZ3RoKSB7XG4gICAgICBjb25zdCBuYW1lTGVuZ3RoID0gaGVhZGVycy5nZXRVaW50OChwb3NpdGlvbisrKTtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLnRvVXRmOChuZXcgVWludDhBcnJheShoZWFkZXJzLmJ1ZmZlciwgaGVhZGVycy5ieXRlT2Zmc2V0ICsgcG9zaXRpb24sIG5hbWVMZW5ndGgpKTtcbiAgICAgIHBvc2l0aW9uICs9IG5hbWVMZW5ndGg7XG4gICAgICBzd2l0Y2ggKGhlYWRlcnMuZ2V0VWludDgocG9zaXRpb24rKykpIHtcbiAgICAgICAgY2FzZSAwIC8qIGJvb2xUcnVlICovOlxuICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IEJPT0xFQU5fVEFHLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEgLyogYm9vbEZhbHNlICovOlxuICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IEJPT0xFQU5fVEFHLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyIC8qIGJ5dGUgKi86XG4gICAgICAgICAgb3V0W25hbWVdID0ge1xuICAgICAgICAgICAgdHlwZTogQllURV9UQUcsXG4gICAgICAgICAgICB2YWx1ZTogaGVhZGVycy5nZXRJbnQ4KHBvc2l0aW9uKyspXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzIC8qIHNob3J0ICovOlxuICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFNIT1JUX1RBRyxcbiAgICAgICAgICAgIHZhbHVlOiBoZWFkZXJzLmdldEludDE2KHBvc2l0aW9uLCBmYWxzZSlcbiAgICAgICAgICB9O1xuICAgICAgICAgIHBvc2l0aW9uICs9IDI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNCAvKiBpbnRlZ2VyICovOlxuICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IElOVF9UQUcsXG4gICAgICAgICAgICB2YWx1ZTogaGVhZGVycy5nZXRJbnQzMihwb3NpdGlvbiwgZmFsc2UpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBwb3NpdGlvbiArPSA0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDUgLyogbG9uZyAqLzpcbiAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICB0eXBlOiBMT05HX1RBRyxcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgSW50NjQobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCA4KSlcbiAgICAgICAgICB9O1xuICAgICAgICAgIHBvc2l0aW9uICs9IDg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNiAvKiBieXRlQXJyYXkgKi86XG4gICAgICAgICAgY29uc3QgYmluYXJ5TGVuZ3RoID0gaGVhZGVycy5nZXRVaW50MTYocG9zaXRpb24sIGZhbHNlKTtcbiAgICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IEJJTkFSWV9UQUcsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCBiaW5hcnlMZW5ndGgpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBwb3NpdGlvbiArPSBiaW5hcnlMZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNyAvKiBzdHJpbmcgKi86XG4gICAgICAgICAgY29uc3Qgc3RyaW5nTGVuZ3RoID0gaGVhZGVycy5nZXRVaW50MTYocG9zaXRpb24sIGZhbHNlKTtcbiAgICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFNUUklOR19UQUcsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy50b1V0ZjgobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCBzdHJpbmdMZW5ndGgpKVxuICAgICAgICAgIH07XG4gICAgICAgICAgcG9zaXRpb24gKz0gc3RyaW5nTGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDggLyogdGltZXN0YW1wICovOlxuICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFRJTUVTVEFNUF9UQUcsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUobmV3IEludDY0KG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgOCkpLnZhbHVlT2YoKSlcbiAgICAgICAgICB9O1xuICAgICAgICAgIHBvc2l0aW9uICs9IDg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOSAvKiB1dWlkICovOlxuICAgICAgICAgIGNvbnN0IHV1aWRCeXRlcyA9IG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgMTYpO1xuICAgICAgICAgIHBvc2l0aW9uICs9IDE2O1xuICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFVVSURfVEFHLFxuICAgICAgICAgICAgdmFsdWU6IGAkeygwLCBpbXBvcnRfdXRpbF9oZXhfZW5jb2RpbmcudG9IZXgpKHV1aWRCeXRlcy5zdWJhcnJheSgwLCA0KSl9LSR7KDAsIGltcG9ydF91dGlsX2hleF9lbmNvZGluZy50b0hleCkodXVpZEJ5dGVzLnN1YmFycmF5KDQsIDYpKX0tJHsoMCwgaW1wb3J0X3V0aWxfaGV4X2VuY29kaW5nLnRvSGV4KShcbiAgICAgICAgICAgICAgdXVpZEJ5dGVzLnN1YmFycmF5KDYsIDgpXG4gICAgICAgICAgICApfS0keygwLCBpbXBvcnRfdXRpbF9oZXhfZW5jb2RpbmcudG9IZXgpKHV1aWRCeXRlcy5zdWJhcnJheSg4LCAxMCkpfS0keygwLCBpbXBvcnRfdXRpbF9oZXhfZW5jb2RpbmcudG9IZXgpKHV1aWRCeXRlcy5zdWJhcnJheSgxMCkpfWBcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIGhlYWRlciB0eXBlIHRhZ2ApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59O1xuX19uYW1lKF9IZWFkZXJNYXJzaGFsbGVyLCBcIkhlYWRlck1hcnNoYWxsZXJcIik7XG52YXIgSGVhZGVyTWFyc2hhbGxlciA9IF9IZWFkZXJNYXJzaGFsbGVyO1xudmFyIEJPT0xFQU5fVEFHID0gXCJib29sZWFuXCI7XG52YXIgQllURV9UQUcgPSBcImJ5dGVcIjtcbnZhciBTSE9SVF9UQUcgPSBcInNob3J0XCI7XG52YXIgSU5UX1RBRyA9IFwiaW50ZWdlclwiO1xudmFyIExPTkdfVEFHID0gXCJsb25nXCI7XG52YXIgQklOQVJZX1RBRyA9IFwiYmluYXJ5XCI7XG52YXIgU1RSSU5HX1RBRyA9IFwic3RyaW5nXCI7XG52YXIgVElNRVNUQU1QX1RBRyA9IFwidGltZXN0YW1wXCI7XG52YXIgVVVJRF9UQUcgPSBcInV1aWRcIjtcbnZhciBVVUlEX1BBVFRFUk4gPSAvXlthLWYwLTldezh9LVthLWYwLTldezR9LVthLWYwLTldezR9LVthLWYwLTldezR9LVthLWYwLTldezEyfSQvO1xuXG4vLyBzcmMvc3BsaXRNZXNzYWdlLnRzXG52YXIgaW1wb3J0X2NyYzMyID0gcmVxdWlyZShcIkBhd3MtY3J5cHRvL2NyYzMyXCIpO1xudmFyIFBSRUxVREVfTUVNQkVSX0xFTkdUSCA9IDQ7XG52YXIgUFJFTFVERV9MRU5HVEggPSBQUkVMVURFX01FTUJFUl9MRU5HVEggKiAyO1xudmFyIENIRUNLU1VNX0xFTkdUSCA9IDQ7XG52YXIgTUlOSU1VTV9NRVNTQUdFX0xFTkdUSCA9IFBSRUxVREVfTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RIICogMjtcbmZ1bmN0aW9uIHNwbGl0TWVzc2FnZSh7IGJ5dGVMZW5ndGgsIGJ5dGVPZmZzZXQsIGJ1ZmZlciB9KSB7XG4gIGlmIChieXRlTGVuZ3RoIDwgTUlOSU1VTV9NRVNTQUdFX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIG1lc3NhZ2UgdG9vIHNob3J0IHRvIGFjY29tbW9kYXRlIGV2ZW50IHN0cmVhbSBtZXNzYWdlIG92ZXJoZWFkXCIpO1xuICB9XG4gIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcbiAgY29uc3QgbWVzc2FnZUxlbmd0aCA9IHZpZXcuZ2V0VWludDMyKDAsIGZhbHNlKTtcbiAgaWYgKGJ5dGVMZW5ndGggIT09IG1lc3NhZ2VMZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXBvcnRlZCBtZXNzYWdlIGxlbmd0aCBkb2VzIG5vdCBtYXRjaCByZWNlaXZlZCBtZXNzYWdlIGxlbmd0aFwiKTtcbiAgfVxuICBjb25zdCBoZWFkZXJMZW5ndGggPSB2aWV3LmdldFVpbnQzMihQUkVMVURFX01FTUJFUl9MRU5HVEgsIGZhbHNlKTtcbiAgY29uc3QgZXhwZWN0ZWRQcmVsdWRlQ2hlY2tzdW0gPSB2aWV3LmdldFVpbnQzMihQUkVMVURFX0xFTkdUSCwgZmFsc2UpO1xuICBjb25zdCBleHBlY3RlZE1lc3NhZ2VDaGVja3N1bSA9IHZpZXcuZ2V0VWludDMyKGJ5dGVMZW5ndGggLSBDSEVDS1NVTV9MRU5HVEgsIGZhbHNlKTtcbiAgY29uc3QgY2hlY2tzdW1tZXIgPSBuZXcgaW1wb3J0X2NyYzMyLkNyYzMyKCkudXBkYXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgYnl0ZU9mZnNldCwgUFJFTFVERV9MRU5HVEgpKTtcbiAgaWYgKGV4cGVjdGVkUHJlbHVkZUNoZWNrc3VtICE9PSBjaGVja3N1bW1lci5kaWdlc3QoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBUaGUgcHJlbHVkZSBjaGVja3N1bSBzcGVjaWZpZWQgaW4gdGhlIG1lc3NhZ2UgKCR7ZXhwZWN0ZWRQcmVsdWRlQ2hlY2tzdW19KSBkb2VzIG5vdCBtYXRjaCB0aGUgY2FsY3VsYXRlZCBDUkMzMiBjaGVja3N1bSAoJHtjaGVja3N1bW1lci5kaWdlc3QoKX0pYFxuICAgICk7XG4gIH1cbiAgY2hlY2tzdW1tZXIudXBkYXRlKFxuICAgIG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgYnl0ZU9mZnNldCArIFBSRUxVREVfTEVOR1RILCBieXRlTGVuZ3RoIC0gKFBSRUxVREVfTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RIKSlcbiAgKTtcbiAgaWYgKGV4cGVjdGVkTWVzc2FnZUNoZWNrc3VtICE9PSBjaGVja3N1bW1lci5kaWdlc3QoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBUaGUgbWVzc2FnZSBjaGVja3N1bSAoJHtjaGVja3N1bW1lci5kaWdlc3QoKX0pIGRpZCBub3QgbWF0Y2ggdGhlIGV4cGVjdGVkIHZhbHVlIG9mICR7ZXhwZWN0ZWRNZXNzYWdlQ2hlY2tzdW19YFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBoZWFkZXJzOiBuZXcgRGF0YVZpZXcoYnVmZmVyLCBieXRlT2Zmc2V0ICsgUFJFTFVERV9MRU5HVEggKyBDSEVDS1NVTV9MRU5HVEgsIGhlYWRlckxlbmd0aCksXG4gICAgYm9keTogbmV3IFVpbnQ4QXJyYXkoXG4gICAgICBidWZmZXIsXG4gICAgICBieXRlT2Zmc2V0ICsgUFJFTFVERV9MRU5HVEggKyBDSEVDS1NVTV9MRU5HVEggKyBoZWFkZXJMZW5ndGgsXG4gICAgICBtZXNzYWdlTGVuZ3RoIC0gaGVhZGVyTGVuZ3RoIC0gKFBSRUxVREVfTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RIKVxuICAgIClcbiAgfTtcbn1cbl9fbmFtZShzcGxpdE1lc3NhZ2UsIFwic3BsaXRNZXNzYWdlXCIpO1xuXG4vLyBzcmMvRXZlbnRTdHJlYW1Db2RlYy50c1xudmFyIF9FdmVudFN0cmVhbUNvZGVjID0gY2xhc3MgX0V2ZW50U3RyZWFtQ29kZWMge1xuICBjb25zdHJ1Y3Rvcih0b1V0ZjgsIGZyb21VdGY4KSB7XG4gICAgdGhpcy5oZWFkZXJNYXJzaGFsbGVyID0gbmV3IEhlYWRlck1hcnNoYWxsZXIodG9VdGY4LCBmcm9tVXRmOCk7XG4gICAgdGhpcy5tZXNzYWdlQnVmZmVyID0gW107XG4gICAgdGhpcy5pc0VuZE9mU3RyZWFtID0gZmFsc2U7XG4gIH1cbiAgZmVlZChtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlQnVmZmVyLnB1c2godGhpcy5kZWNvZGUobWVzc2FnZSkpO1xuICB9XG4gIGVuZE9mU3RyZWFtKCkge1xuICAgIHRoaXMuaXNFbmRPZlN0cmVhbSA9IHRydWU7XG4gIH1cbiAgZ2V0TWVzc2FnZSgpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5tZXNzYWdlQnVmZmVyLnBvcCgpO1xuICAgIGNvbnN0IGlzRW5kT2ZTdHJlYW0gPSB0aGlzLmlzRW5kT2ZTdHJlYW07XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldE1lc3NhZ2UoKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgfSxcbiAgICAgIGlzRW5kT2ZTdHJlYW0oKSB7XG4gICAgICAgIHJldHVybiBpc0VuZE9mU3RyZWFtO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZ2V0QXZhaWxhYmxlTWVzc2FnZXMoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VCdWZmZXI7XG4gICAgdGhpcy5tZXNzYWdlQnVmZmVyID0gW107XG4gICAgY29uc3QgaXNFbmRPZlN0cmVhbSA9IHRoaXMuaXNFbmRPZlN0cmVhbTtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlcztcbiAgICAgIH0sXG4gICAgICBpc0VuZE9mU3RyZWFtKCkge1xuICAgICAgICByZXR1cm4gaXNFbmRPZlN0cmVhbTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0IGEgc3RydWN0dXJlZCBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIHRhZ2dlZCBoZWFkZXJzIGludG8gYSBiaW5hcnlcbiAgICogZXZlbnQgc3RyZWFtIG1lc3NhZ2UuXG4gICAqL1xuICBlbmNvZGUoeyBoZWFkZXJzOiByYXdIZWFkZXJzLCBib2R5IH0pIHtcbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5oZWFkZXJNYXJzaGFsbGVyLmZvcm1hdChyYXdIZWFkZXJzKTtcbiAgICBjb25zdCBsZW5ndGggPSBoZWFkZXJzLmJ5dGVMZW5ndGggKyBib2R5LmJ5dGVMZW5ndGggKyAxNjtcbiAgICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcob3V0LmJ1ZmZlciwgb3V0LmJ5dGVPZmZzZXQsIG91dC5ieXRlTGVuZ3RoKTtcbiAgICBjb25zdCBjaGVja3N1bSA9IG5ldyBpbXBvcnRfY3JjMzIyLkNyYzMyKCk7XG4gICAgdmlldy5zZXRVaW50MzIoMCwgbGVuZ3RoLCBmYWxzZSk7XG4gICAgdmlldy5zZXRVaW50MzIoNCwgaGVhZGVycy5ieXRlTGVuZ3RoLCBmYWxzZSk7XG4gICAgdmlldy5zZXRVaW50MzIoOCwgY2hlY2tzdW0udXBkYXRlKG91dC5zdWJhcnJheSgwLCA4KSkuZGlnZXN0KCksIGZhbHNlKTtcbiAgICBvdXQuc2V0KGhlYWRlcnMsIDEyKTtcbiAgICBvdXQuc2V0KGJvZHksIGhlYWRlcnMuYnl0ZUxlbmd0aCArIDEyKTtcbiAgICB2aWV3LnNldFVpbnQzMihsZW5ndGggLSA0LCBjaGVja3N1bS51cGRhdGUob3V0LnN1YmFycmF5KDgsIGxlbmd0aCAtIDQpKS5kaWdlc3QoKSwgZmFsc2UpO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgYSBiaW5hcnkgZXZlbnQgc3RyZWFtIG1lc3NhZ2UgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggYW5cbiAgICogb3BhcXVlLCBiaW5hcnkgYm9keSBhbmQgdGFnZ2VkLCBwYXJzZWQgaGVhZGVycy5cbiAgICovXG4gIGRlY29kZShtZXNzYWdlKSB7XG4gICAgY29uc3QgeyBoZWFkZXJzLCBib2R5IH0gPSBzcGxpdE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgcmV0dXJuIHsgaGVhZGVyczogdGhpcy5oZWFkZXJNYXJzaGFsbGVyLnBhcnNlKGhlYWRlcnMpLCBib2R5IH07XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgYSBzdHJ1Y3R1cmVkIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGFnZ2VkIGhlYWRlcnMgaW50byBhIGJpbmFyeVxuICAgKiBldmVudCBzdHJlYW0gbWVzc2FnZSBoZWFkZXIuXG4gICAqL1xuICBmb3JtYXRIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkZXJNYXJzaGFsbGVyLmZvcm1hdChyYXdIZWFkZXJzKTtcbiAgfVxufTtcbl9fbmFtZShfRXZlbnRTdHJlYW1Db2RlYywgXCJFdmVudFN0cmVhbUNvZGVjXCIpO1xudmFyIEV2ZW50U3RyZWFtQ29kZWMgPSBfRXZlbnRTdHJlYW1Db2RlYztcblxuLy8gc3JjL01lc3NhZ2VEZWNvZGVyU3RyZWFtLnRzXG52YXIgX01lc3NhZ2VEZWNvZGVyU3RyZWFtID0gY2xhc3MgX01lc3NhZ2VEZWNvZGVyU3RyZWFtIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gdGhpcy5hc3luY0l0ZXJhdG9yKCk7XG4gIH1cbiAgYXN5bmMgKmFzeW5jSXRlcmF0b3IoKSB7XG4gICAgZm9yIGF3YWl0IChjb25zdCBieXRlcyBvZiB0aGlzLm9wdGlvbnMuaW5wdXRTdHJlYW0pIHtcbiAgICAgIGNvbnN0IGRlY29kZWQgPSB0aGlzLm9wdGlvbnMuZGVjb2Rlci5kZWNvZGUoYnl0ZXMpO1xuICAgICAgeWllbGQgZGVjb2RlZDtcbiAgICB9XG4gIH1cbn07XG5fX25hbWUoX01lc3NhZ2VEZWNvZGVyU3RyZWFtLCBcIk1lc3NhZ2VEZWNvZGVyU3RyZWFtXCIpO1xudmFyIE1lc3NhZ2VEZWNvZGVyU3RyZWFtID0gX01lc3NhZ2VEZWNvZGVyU3RyZWFtO1xuXG4vLyBzcmMvTWVzc2FnZUVuY29kZXJTdHJlYW0udHNcbnZhciBfTWVzc2FnZUVuY29kZXJTdHJlYW0gPSBjbGFzcyBfTWVzc2FnZUVuY29kZXJTdHJlYW0ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgIHJldHVybiB0aGlzLmFzeW5jSXRlcmF0b3IoKTtcbiAgfVxuICBhc3luYyAqYXN5bmNJdGVyYXRvcigpIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IG1zZyBvZiB0aGlzLm9wdGlvbnMubWVzc2FnZVN0cmVhbSkge1xuICAgICAgY29uc3QgZW5jb2RlZCA9IHRoaXMub3B0aW9ucy5lbmNvZGVyLmVuY29kZShtc2cpO1xuICAgICAgeWllbGQgZW5jb2RlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pbmNsdWRlRW5kRnJhbWUpIHtcbiAgICAgIHlpZWxkIG5ldyBVaW50OEFycmF5KDApO1xuICAgIH1cbiAgfVxufTtcbl9fbmFtZShfTWVzc2FnZUVuY29kZXJTdHJlYW0sIFwiTWVzc2FnZUVuY29kZXJTdHJlYW1cIik7XG52YXIgTWVzc2FnZUVuY29kZXJTdHJlYW0gPSBfTWVzc2FnZUVuY29kZXJTdHJlYW07XG5cbi8vIHNyYy9TbWl0aHlNZXNzYWdlRGVjb2RlclN0cmVhbS50c1xudmFyIF9TbWl0aHlNZXNzYWdlRGVjb2RlclN0cmVhbSA9IGNsYXNzIF9TbWl0aHlNZXNzYWdlRGVjb2RlclN0cmVhbSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXN5bmNJdGVyYXRvcigpO1xuICB9XG4gIGFzeW5jICphc3luY0l0ZXJhdG9yKCkge1xuICAgIGZvciBhd2FpdCAoY29uc3QgbWVzc2FnZSBvZiB0aGlzLm9wdGlvbnMubWVzc2FnZVN0cmVhbSkge1xuICAgICAgY29uc3QgZGVzZXJpYWxpemVkID0gYXdhaXQgdGhpcy5vcHRpb25zLmRlc2VyaWFsaXplcihtZXNzYWdlKTtcbiAgICAgIGlmIChkZXNlcmlhbGl6ZWQgPT09IHZvaWQgMClcbiAgICAgICAgY29udGludWU7XG4gICAgICB5aWVsZCBkZXNlcmlhbGl6ZWQ7XG4gICAgfVxuICB9XG59O1xuX19uYW1lKF9TbWl0aHlNZXNzYWdlRGVjb2RlclN0cmVhbSwgXCJTbWl0aHlNZXNzYWdlRGVjb2RlclN0cmVhbVwiKTtcbnZhciBTbWl0aHlNZXNzYWdlRGVjb2RlclN0cmVhbSA9IF9TbWl0aHlNZXNzYWdlRGVjb2RlclN0cmVhbTtcblxuLy8gc3JjL1NtaXRoeU1lc3NhZ2VFbmNvZGVyU3RyZWFtLnRzXG52YXIgX1NtaXRoeU1lc3NhZ2VFbmNvZGVyU3RyZWFtID0gY2xhc3MgX1NtaXRoeU1lc3NhZ2VFbmNvZGVyU3RyZWFtIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gdGhpcy5hc3luY0l0ZXJhdG9yKCk7XG4gIH1cbiAgYXN5bmMgKmFzeW5jSXRlcmF0b3IoKSB7XG4gICAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiB0aGlzLm9wdGlvbnMuaW5wdXRTdHJlYW0pIHtcbiAgICAgIGNvbnN0IHBheWxvYWRCdWYgPSB0aGlzLm9wdGlvbnMuc2VyaWFsaXplcihjaHVuayk7XG4gICAgICB5aWVsZCBwYXlsb2FkQnVmO1xuICAgIH1cbiAgfVxufTtcbl9fbmFtZShfU21pdGh5TWVzc2FnZUVuY29kZXJTdHJlYW0sIFwiU21pdGh5TWVzc2FnZUVuY29kZXJTdHJlYW1cIik7XG52YXIgU21pdGh5TWVzc2FnZUVuY29kZXJTdHJlYW0gPSBfU21pdGh5TWVzc2FnZUVuY29kZXJTdHJlYW07XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG5cbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBFdmVudFN0cmVhbUNvZGVjLFxuICBIZWFkZXJNYXJzaGFsbGVyLFxuICBJbnQ2NCxcbiAgTWVzc2FnZURlY29kZXJTdHJlYW0sXG4gIE1lc3NhZ2VFbmNvZGVyU3RyZWFtLFxuICBTbWl0aHlNZXNzYWdlRGVjb2RlclN0cmVhbSxcbiAgU21pdGh5TWVzc2FnZUVuY29kZXJTdHJlYW1cbn0pO1xuXG4iLCAidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgc3JjX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KHNyY19leHBvcnRzLCB7XG4gIEV2ZW50U3RyZWFtTWFyc2hhbGxlcjogKCkgPT4gRXZlbnRTdHJlYW1NYXJzaGFsbGVyLFxuICBldmVudFN0cmVhbVNlcmRlUHJvdmlkZXI6ICgpID0+IGV2ZW50U3RyZWFtU2VyZGVQcm92aWRlclxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhzcmNfZXhwb3J0cyk7XG5cbi8vIHNyYy9FdmVudFN0cmVhbU1hcnNoYWxsZXIudHNcbnZhciBpbXBvcnRfZXZlbnRzdHJlYW1fY29kZWMgPSByZXF1aXJlKFwiQHNtaXRoeS9ldmVudHN0cmVhbS1jb2RlY1wiKTtcblxuLy8gc3JjL2dldENodW5rZWRTdHJlYW0udHNcbmZ1bmN0aW9uIGdldENodW5rZWRTdHJlYW0oc291cmNlKSB7XG4gIGxldCBjdXJyZW50TWVzc2FnZVRvdGFsTGVuZ3RoID0gMDtcbiAgbGV0IGN1cnJlbnRNZXNzYWdlUGVuZGluZ0xlbmd0aCA9IDA7XG4gIGxldCBjdXJyZW50TWVzc2FnZSA9IG51bGw7XG4gIGxldCBtZXNzYWdlTGVuZ3RoQnVmZmVyID0gbnVsbDtcbiAgY29uc3QgYWxsb2NhdGVNZXNzYWdlID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoc2l6ZSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2l6ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdGVkIHRvIGFsbG9jYXRlIGFuIGV2ZW50IG1lc3NhZ2Ugd2hlcmUgc2l6ZSB3YXMgbm90IGEgbnVtYmVyOiBcIiArIHNpemUpO1xuICAgIH1cbiAgICBjdXJyZW50TWVzc2FnZVRvdGFsTGVuZ3RoID0gc2l6ZTtcbiAgICBjdXJyZW50TWVzc2FnZVBlbmRpbmdMZW5ndGggPSA0O1xuICAgIGN1cnJlbnRNZXNzYWdlID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gICAgY29uc3QgY3VycmVudE1lc3NhZ2VWaWV3ID0gbmV3IERhdGFWaWV3KGN1cnJlbnRNZXNzYWdlLmJ1ZmZlcik7XG4gICAgY3VycmVudE1lc3NhZ2VWaWV3LnNldFVpbnQzMigwLCBzaXplLCBmYWxzZSk7XG4gIH0sIFwiYWxsb2NhdGVNZXNzYWdlXCIpO1xuICBjb25zdCBpdGVyYXRvciA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoYXN5bmMgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBzb3VyY2VJdGVyYXRvciA9IHNvdXJjZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gYXdhaXQgc291cmNlSXRlcmF0b3IubmV4dCgpO1xuICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50TWVzc2FnZVRvdGFsTGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRNZXNzYWdlVG90YWxMZW5ndGggPT09IGN1cnJlbnRNZXNzYWdlUGVuZGluZ0xlbmd0aCkge1xuICAgICAgICAgIHlpZWxkIGN1cnJlbnRNZXNzYWdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRydW5jYXRlZCBldmVudCBtZXNzYWdlIHJlY2VpdmVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjaHVua0xlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgIGxldCBjdXJyZW50T2Zmc2V0ID0gMDtcbiAgICAgIHdoaWxlIChjdXJyZW50T2Zmc2V0IDwgY2h1bmtMZW5ndGgpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50TWVzc2FnZSkge1xuICAgICAgICAgIGNvbnN0IGJ5dGVzUmVtYWluaW5nID0gY2h1bmtMZW5ndGggLSBjdXJyZW50T2Zmc2V0O1xuICAgICAgICAgIGlmICghbWVzc2FnZUxlbmd0aEJ1ZmZlcikge1xuICAgICAgICAgICAgbWVzc2FnZUxlbmd0aEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KDQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBudW1CeXRlc0ZvclRvdGFsID0gTWF0aC5taW4oXG4gICAgICAgICAgICA0IC0gY3VycmVudE1lc3NhZ2VQZW5kaW5nTGVuZ3RoLFxuICAgICAgICAgICAgLy8gcmVtYWluaW5nIGJ5dGVzIHRvIGZpbGwgdGhlIG1lc3NhZ2VMZW5ndGhCdWZmZXJcbiAgICAgICAgICAgIGJ5dGVzUmVtYWluaW5nXG4gICAgICAgICAgICAvLyBieXRlcyBsZWZ0IGluIGNodW5rXG4gICAgICAgICAgKTtcbiAgICAgICAgICBtZXNzYWdlTGVuZ3RoQnVmZmVyLnNldChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgZXJyb3IgVFMyNTMyOiBPYmplY3QgaXMgcG9zc2libHkgJ3VuZGVmaW5lZCcgZm9yIHZhbHVlXG4gICAgICAgICAgICB2YWx1ZS5zbGljZShjdXJyZW50T2Zmc2V0LCBjdXJyZW50T2Zmc2V0ICsgbnVtQnl0ZXNGb3JUb3RhbCksXG4gICAgICAgICAgICBjdXJyZW50TWVzc2FnZVBlbmRpbmdMZW5ndGhcbiAgICAgICAgICApO1xuICAgICAgICAgIGN1cnJlbnRNZXNzYWdlUGVuZGluZ0xlbmd0aCArPSBudW1CeXRlc0ZvclRvdGFsO1xuICAgICAgICAgIGN1cnJlbnRPZmZzZXQgKz0gbnVtQnl0ZXNGb3JUb3RhbDtcbiAgICAgICAgICBpZiAoY3VycmVudE1lc3NhZ2VQZW5kaW5nTGVuZ3RoIDwgNCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFsbG9jYXRlTWVzc2FnZShuZXcgRGF0YVZpZXcobWVzc2FnZUxlbmd0aEJ1ZmZlci5idWZmZXIpLmdldFVpbnQzMigwLCBmYWxzZSkpO1xuICAgICAgICAgIG1lc3NhZ2VMZW5ndGhCdWZmZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG51bUJ5dGVzVG9Xcml0ZSA9IE1hdGgubWluKFxuICAgICAgICAgIGN1cnJlbnRNZXNzYWdlVG90YWxMZW5ndGggLSBjdXJyZW50TWVzc2FnZVBlbmRpbmdMZW5ndGgsXG4gICAgICAgICAgLy8gbnVtYmVyIG9mIGJ5dGVzIGxlZnQgdG8gY29tcGxldGUgbWVzc2FnZVxuICAgICAgICAgIGNodW5rTGVuZ3RoIC0gY3VycmVudE9mZnNldFxuICAgICAgICAgIC8vIG51bWJlciBvZiBieXRlcyBsZWZ0IGluIHRoZSBvcmlnaW5hbCBjaHVua1xuICAgICAgICApO1xuICAgICAgICBjdXJyZW50TWVzc2FnZS5zZXQoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBlcnJvciBUUzI1MzI6IE9iamVjdCBpcyBwb3NzaWJseSAndW5kZWZpbmVkJyBmb3IgdmFsdWVcbiAgICAgICAgICB2YWx1ZS5zbGljZShjdXJyZW50T2Zmc2V0LCBjdXJyZW50T2Zmc2V0ICsgbnVtQnl0ZXNUb1dyaXRlKSxcbiAgICAgICAgICBjdXJyZW50TWVzc2FnZVBlbmRpbmdMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudE1lc3NhZ2VQZW5kaW5nTGVuZ3RoICs9IG51bUJ5dGVzVG9Xcml0ZTtcbiAgICAgICAgY3VycmVudE9mZnNldCArPSBudW1CeXRlc1RvV3JpdGU7XG4gICAgICAgIGlmIChjdXJyZW50TWVzc2FnZVRvdGFsTGVuZ3RoICYmIGN1cnJlbnRNZXNzYWdlVG90YWxMZW5ndGggPT09IGN1cnJlbnRNZXNzYWdlUGVuZGluZ0xlbmd0aCkge1xuICAgICAgICAgIHlpZWxkIGN1cnJlbnRNZXNzYWdlO1xuICAgICAgICAgIGN1cnJlbnRNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICBjdXJyZW50TWVzc2FnZVRvdGFsTGVuZ3RoID0gMDtcbiAgICAgICAgICBjdXJyZW50TWVzc2FnZVBlbmRpbmdMZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBcIml0ZXJhdG9yXCIpO1xuICByZXR1cm4ge1xuICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl06IGl0ZXJhdG9yXG4gIH07XG59XG5fX25hbWUoZ2V0Q2h1bmtlZFN0cmVhbSwgXCJnZXRDaHVua2VkU3RyZWFtXCIpO1xuXG4vLyBzcmMvZ2V0VW5tYXJzaGFsbGVkU3RyZWFtLnRzXG5mdW5jdGlvbiBnZXRNZXNzYWdlVW5tYXJzaGFsbGVyKGRlc2VyaWFsaXplciwgdG9VdGY4KSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgY29uc3QgeyB2YWx1ZTogbWVzc2FnZVR5cGUgfSA9IG1lc3NhZ2UuaGVhZGVyc1tcIjptZXNzYWdlLXR5cGVcIl07XG4gICAgaWYgKG1lc3NhZ2VUeXBlID09PSBcImVycm9yXCIpIHtcbiAgICAgIGNvbnN0IHVubW9kZWxlZEVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UuaGVhZGVyc1tcIjplcnJvci1tZXNzYWdlXCJdLnZhbHVlIHx8IFwiVW5rbm93bkVycm9yXCIpO1xuICAgICAgdW5tb2RlbGVkRXJyb3IubmFtZSA9IG1lc3NhZ2UuaGVhZGVyc1tcIjplcnJvci1jb2RlXCJdLnZhbHVlO1xuICAgICAgdGhyb3cgdW5tb2RlbGVkRXJyb3I7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlVHlwZSA9PT0gXCJleGNlcHRpb25cIikge1xuICAgICAgY29uc3QgY29kZSA9IG1lc3NhZ2UuaGVhZGVyc1tcIjpleGNlcHRpb24tdHlwZVwiXS52YWx1ZTtcbiAgICAgIGNvbnN0IGV4Y2VwdGlvbiA9IHsgW2NvZGVdOiBtZXNzYWdlIH07XG4gICAgICBjb25zdCBkZXNlcmlhbGl6ZWRFeGNlcHRpb24gPSBhd2FpdCBkZXNlcmlhbGl6ZXIoZXhjZXB0aW9uKTtcbiAgICAgIGlmIChkZXNlcmlhbGl6ZWRFeGNlcHRpb24uJHVua25vd24pIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IodG9VdGY4KG1lc3NhZ2UuYm9keSkpO1xuICAgICAgICBlcnJvci5uYW1lID0gY29kZTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgICB0aHJvdyBkZXNlcmlhbGl6ZWRFeGNlcHRpb25bY29kZV07XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlVHlwZSA9PT0gXCJldmVudFwiKSB7XG4gICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgW21lc3NhZ2UuaGVhZGVyc1tcIjpldmVudC10eXBlXCJdLnZhbHVlXTogbWVzc2FnZVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGRlc2VyaWFsaXplZCA9IGF3YWl0IGRlc2VyaWFsaXplcihldmVudCk7XG4gICAgICBpZiAoZGVzZXJpYWxpemVkLiR1bmtub3duKVxuICAgICAgICByZXR1cm47XG4gICAgICByZXR1cm4gZGVzZXJpYWxpemVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcihgVW5yZWNvZ25pemFibGUgZXZlbnQgdHlwZTogJHttZXNzYWdlLmhlYWRlcnNbXCI6ZXZlbnQtdHlwZVwiXS52YWx1ZX1gKTtcbiAgICB9XG4gIH07XG59XG5fX25hbWUoZ2V0TWVzc2FnZVVubWFyc2hhbGxlciwgXCJnZXRNZXNzYWdlVW5tYXJzaGFsbGVyXCIpO1xuXG4vLyBzcmMvRXZlbnRTdHJlYW1NYXJzaGFsbGVyLnRzXG52YXIgX0V2ZW50U3RyZWFtTWFyc2hhbGxlciA9IGNsYXNzIF9FdmVudFN0cmVhbU1hcnNoYWxsZXIge1xuICBjb25zdHJ1Y3Rvcih7IHV0ZjhFbmNvZGVyLCB1dGY4RGVjb2RlciB9KSB7XG4gICAgdGhpcy5ldmVudFN0cmVhbUNvZGVjID0gbmV3IGltcG9ydF9ldmVudHN0cmVhbV9jb2RlYy5FdmVudFN0cmVhbUNvZGVjKHV0ZjhFbmNvZGVyLCB1dGY4RGVjb2Rlcik7XG4gICAgdGhpcy51dGZFbmNvZGVyID0gdXRmOEVuY29kZXI7XG4gIH1cbiAgZGVzZXJpYWxpemUoYm9keSwgZGVzZXJpYWxpemVyKSB7XG4gICAgY29uc3QgaW5wdXRTdHJlYW0gPSBnZXRDaHVua2VkU3RyZWFtKGJvZHkpO1xuICAgIHJldHVybiBuZXcgaW1wb3J0X2V2ZW50c3RyZWFtX2NvZGVjLlNtaXRoeU1lc3NhZ2VEZWNvZGVyU3RyZWFtKHtcbiAgICAgIG1lc3NhZ2VTdHJlYW06IG5ldyBpbXBvcnRfZXZlbnRzdHJlYW1fY29kZWMuTWVzc2FnZURlY29kZXJTdHJlYW0oeyBpbnB1dFN0cmVhbSwgZGVjb2RlcjogdGhpcy5ldmVudFN0cmVhbUNvZGVjIH0pLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUeXBlICdUJyBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlICdSZWNvcmQ8c3RyaW5nLCBhbnk+J1xuICAgICAgZGVzZXJpYWxpemVyOiBnZXRNZXNzYWdlVW5tYXJzaGFsbGVyKGRlc2VyaWFsaXplciwgdGhpcy51dGZFbmNvZGVyKVxuICAgIH0pO1xuICB9XG4gIHNlcmlhbGl6ZShpbnB1dFN0cmVhbSwgc2VyaWFsaXplcikge1xuICAgIHJldHVybiBuZXcgaW1wb3J0X2V2ZW50c3RyZWFtX2NvZGVjLk1lc3NhZ2VFbmNvZGVyU3RyZWFtKHtcbiAgICAgIG1lc3NhZ2VTdHJlYW06IG5ldyBpbXBvcnRfZXZlbnRzdHJlYW1fY29kZWMuU21pdGh5TWVzc2FnZUVuY29kZXJTdHJlYW0oeyBpbnB1dFN0cmVhbSwgc2VyaWFsaXplciB9KSxcbiAgICAgIGVuY29kZXI6IHRoaXMuZXZlbnRTdHJlYW1Db2RlYyxcbiAgICAgIGluY2x1ZGVFbmRGcmFtZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59O1xuX19uYW1lKF9FdmVudFN0cmVhbU1hcnNoYWxsZXIsIFwiRXZlbnRTdHJlYW1NYXJzaGFsbGVyXCIpO1xudmFyIEV2ZW50U3RyZWFtTWFyc2hhbGxlciA9IF9FdmVudFN0cmVhbU1hcnNoYWxsZXI7XG5cbi8vIHNyYy9wcm92aWRlci50c1xudmFyIGV2ZW50U3RyZWFtU2VyZGVQcm92aWRlciA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKG9wdGlvbnMpID0+IG5ldyBFdmVudFN0cmVhbU1hcnNoYWxsZXIob3B0aW9ucyksIFwiZXZlbnRTdHJlYW1TZXJkZVByb3ZpZGVyXCIpO1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuXG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgRXZlbnRTdHJlYW1NYXJzaGFsbGVyLFxuICBldmVudFN0cmVhbVNlcmRlUHJvdmlkZXJcbn0pO1xuXG4iLCAidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgc3JjX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KHNyY19leHBvcnRzLCB7XG4gIEV2ZW50U3RyZWFtTWFyc2hhbGxlcjogKCkgPT4gRXZlbnRTdHJlYW1NYXJzaGFsbGVyLFxuICBldmVudFN0cmVhbVNlcmRlUHJvdmlkZXI6ICgpID0+IGV2ZW50U3RyZWFtU2VyZGVQcm92aWRlclxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhzcmNfZXhwb3J0cyk7XG5cbi8vIHNyYy9FdmVudFN0cmVhbU1hcnNoYWxsZXIudHNcbnZhciBpbXBvcnRfZXZlbnRzdHJlYW1fc2VyZGVfdW5pdmVyc2FsID0gcmVxdWlyZShcIkBzbWl0aHkvZXZlbnRzdHJlYW0tc2VyZGUtdW5pdmVyc2FsXCIpO1xudmFyIGltcG9ydF9zdHJlYW0gPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuXG4vLyBzcmMvdXRpbHMudHNcbmFzeW5jIGZ1bmN0aW9uKiByZWFkYWJsZXRvSXRlcmFibGUocmVhZFN0cmVhbSkge1xuICBsZXQgc3RyZWFtRW5kZWQgPSBmYWxzZTtcbiAgbGV0IGdlbmVyYXRpb25FbmRlZCA9IGZhbHNlO1xuICBjb25zdCByZWNvcmRzID0gbmV3IEFycmF5KCk7XG4gIHJlYWRTdHJlYW0ub24oXCJlcnJvclwiLCAoZXJyKSA9PiB7XG4gICAgaWYgKCFzdHJlYW1FbmRlZCkge1xuICAgICAgc3RyZWFtRW5kZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZXJyKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9KTtcbiAgcmVhZFN0cmVhbS5vbihcImRhdGFcIiwgKGRhdGEpID0+IHtcbiAgICByZWNvcmRzLnB1c2goZGF0YSk7XG4gIH0pO1xuICByZWFkU3RyZWFtLm9uKFwiZW5kXCIsICgpID0+IHtcbiAgICBzdHJlYW1FbmRlZCA9IHRydWU7XG4gIH0pO1xuICB3aGlsZSAoIWdlbmVyYXRpb25FbmRlZCkge1xuICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShyZWNvcmRzLnNoaWZ0KCkpLCAwKSk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB5aWVsZCB2YWx1ZTtcbiAgICB9XG4gICAgZ2VuZXJhdGlvbkVuZGVkID0gc3RyZWFtRW5kZWQgJiYgcmVjb3Jkcy5sZW5ndGggPT09IDA7XG4gIH1cbn1cbl9fbmFtZShyZWFkYWJsZXRvSXRlcmFibGUsIFwicmVhZGFibGV0b0l0ZXJhYmxlXCIpO1xuXG4vLyBzcmMvRXZlbnRTdHJlYW1NYXJzaGFsbGVyLnRzXG52YXIgX0V2ZW50U3RyZWFtTWFyc2hhbGxlciA9IGNsYXNzIF9FdmVudFN0cmVhbU1hcnNoYWxsZXIge1xuICBjb25zdHJ1Y3Rvcih7IHV0ZjhFbmNvZGVyLCB1dGY4RGVjb2RlciB9KSB7XG4gICAgdGhpcy51bml2ZXJzYWxNYXJzaGFsbGVyID0gbmV3IGltcG9ydF9ldmVudHN0cmVhbV9zZXJkZV91bml2ZXJzYWwuRXZlbnRTdHJlYW1NYXJzaGFsbGVyKHtcbiAgICAgIHV0ZjhEZWNvZGVyLFxuICAgICAgdXRmOEVuY29kZXJcbiAgICB9KTtcbiAgfVxuICBkZXNlcmlhbGl6ZShib2R5LCBkZXNlcmlhbGl6ZXIpIHtcbiAgICBjb25zdCBib2R5SXRlcmFibGUgPSB0eXBlb2YgYm9keVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPT09IFwiZnVuY3Rpb25cIiA/IGJvZHkgOiByZWFkYWJsZXRvSXRlcmFibGUoYm9keSk7XG4gICAgcmV0dXJuIHRoaXMudW5pdmVyc2FsTWFyc2hhbGxlci5kZXNlcmlhbGl6ZShib2R5SXRlcmFibGUsIGRlc2VyaWFsaXplcik7XG4gIH1cbiAgc2VyaWFsaXplKGlucHV0LCBzZXJpYWxpemVyKSB7XG4gICAgcmV0dXJuIGltcG9ydF9zdHJlYW0uUmVhZGFibGUuZnJvbSh0aGlzLnVuaXZlcnNhbE1hcnNoYWxsZXIuc2VyaWFsaXplKGlucHV0LCBzZXJpYWxpemVyKSk7XG4gIH1cbn07XG5fX25hbWUoX0V2ZW50U3RyZWFtTWFyc2hhbGxlciwgXCJFdmVudFN0cmVhbU1hcnNoYWxsZXJcIik7XG52YXIgRXZlbnRTdHJlYW1NYXJzaGFsbGVyID0gX0V2ZW50U3RyZWFtTWFyc2hhbGxlcjtcblxuLy8gc3JjL3Byb3ZpZGVyLnRzXG52YXIgZXZlbnRTdHJlYW1TZXJkZVByb3ZpZGVyID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgob3B0aW9ucykgPT4gbmV3IEV2ZW50U3RyZWFtTWFyc2hhbGxlcihvcHRpb25zKSwgXCJldmVudFN0cmVhbVNlcmRlUHJvdmlkZXJcIik7XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG5cbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBFdmVudFN0cmVhbU1hcnNoYWxsZXIsXG4gIGV2ZW50U3RyZWFtU2VyZGVQcm92aWRlclxufSk7XG5cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZnJvbUJhc2U2NCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxfYnVmZmVyX2Zyb21fMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtYnVmZmVyLWZyb21cIik7XG5jb25zdCBCQVNFNjRfUkVHRVggPSAvXltBLVphLXowLTkrL10qPXswLDJ9JC87XG5jb25zdCBmcm9tQmFzZTY0ID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKChpbnB1dC5sZW5ndGggKiAzKSAlIDQgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW5jb3JyZWN0IHBhZGRpbmcgb24gYmFzZTY0IHN0cmluZy5gKTtcbiAgICB9XG4gICAgaWYgKCFCQVNFNjRfUkVHRVguZXhlYyhpbnB1dCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBiYXNlNjQgc3RyaW5nLmApO1xuICAgIH1cbiAgICBjb25zdCBidWZmZXIgPSAoMCwgdXRpbF9idWZmZXJfZnJvbV8xLmZyb21TdHJpbmcpKGlucHV0LCBcImJhc2U2NFwiKTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLmJ1ZmZlciwgYnVmZmVyLmJ5dGVPZmZzZXQsIGJ1ZmZlci5ieXRlTGVuZ3RoKTtcbn07XG5leHBvcnRzLmZyb21CYXNlNjQgPSBmcm9tQmFzZTY0O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50b0Jhc2U2NCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxfYnVmZmVyX2Zyb21fMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtYnVmZmVyLWZyb21cIik7XG5jb25zdCB1dGlsX3V0ZjhfMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtdXRmOFwiKTtcbmNvbnN0IHRvQmFzZTY0ID0gKF9pbnB1dCkgPT4ge1xuICAgIGxldCBpbnB1dDtcbiAgICBpZiAodHlwZW9mIF9pbnB1dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpbnB1dCA9ICgwLCB1dGlsX3V0ZjhfMS5mcm9tVXRmOCkoX2lucHV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlucHV0ID0gX2lucHV0O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBpbnB1dC5ieXRlT2Zmc2V0ICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBpbnB1dC5ieXRlTGVuZ3RoICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkBzbWl0aHkvdXRpbC1iYXNlNjQ6IHRvQmFzZTY0IGVuY29kZXIgZnVuY3Rpb24gb25seSBhY2NlcHRzIHN0cmluZyB8IFVpbnQ4QXJyYXkuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHV0aWxfYnVmZmVyX2Zyb21fMS5mcm9tQXJyYXlCdWZmZXIpKGlucHV0LmJ1ZmZlciwgaW5wdXQuYnl0ZU9mZnNldCwgaW5wdXQuYnl0ZUxlbmd0aCkudG9TdHJpbmcoXCJiYXNlNjRcIik7XG59O1xuZXhwb3J0cy50b0Jhc2U2NCA9IHRvQmFzZTY0O1xuIiwgInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fcmVFeHBvcnQgPSAodGFyZ2V0LCBtb2QsIHNlY29uZFRhcmdldCkgPT4gKF9fY29weVByb3BzKHRhcmdldCwgbW9kLCBcImRlZmF1bHRcIiksIHNlY29uZFRhcmdldCAmJiBfX2NvcHlQcm9wcyhzZWNvbmRUYXJnZXQsIG1vZCwgXCJkZWZhdWx0XCIpKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoc3JjX2V4cG9ydHMpO1xuX19yZUV4cG9ydChzcmNfZXhwb3J0cywgcmVxdWlyZShcIi4vLi9mcm9tQmFzZTY0XCIpLCBtb2R1bGUuZXhwb3J0cyk7XG5fX3JlRXhwb3J0KHNyY19leHBvcnRzLCByZXF1aXJlKFwiLi8uL3RvQmFzZTY0XCIpLCBtb2R1bGUuZXhwb3J0cyk7XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG5cbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBmcm9tQmFzZTY0LFxuICB0b0Jhc2U2NFxufSk7XG5cbiIsICJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX25hbWUgPSAodGFyZ2V0LCB2YWx1ZSkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJuYW1lXCIsIHsgdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgY29uc3RydWN0U3RhY2s6ICgpID0+IGNvbnN0cnVjdFN0YWNrXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcblxuLy8gc3JjL01pZGRsZXdhcmVTdGFjay50c1xudmFyIGdldEFsbEFsaWFzZXMgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChuYW1lLCBhbGlhc2VzKSA9PiB7XG4gIGNvbnN0IF9hbGlhc2VzID0gW107XG4gIGlmIChuYW1lKSB7XG4gICAgX2FsaWFzZXMucHVzaChuYW1lKTtcbiAgfVxuICBpZiAoYWxpYXNlcykge1xuICAgIGZvciAoY29uc3QgYWxpYXMgb2YgYWxpYXNlcykge1xuICAgICAgX2FsaWFzZXMucHVzaChhbGlhcyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBfYWxpYXNlcztcbn0sIFwiZ2V0QWxsQWxpYXNlc1wiKTtcbnZhciBnZXRNaWRkbGV3YXJlTmFtZVdpdGhBbGlhc2VzID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgobmFtZSwgYWxpYXNlcykgPT4ge1xuICByZXR1cm4gYCR7bmFtZSB8fCBcImFub255bW91c1wifSR7YWxpYXNlcyAmJiBhbGlhc2VzLmxlbmd0aCA+IDAgPyBgIChhLmsuYS4gJHthbGlhc2VzLmpvaW4oXCIsXCIpfSlgIDogXCJcIn1gO1xufSwgXCJnZXRNaWRkbGV3YXJlTmFtZVdpdGhBbGlhc2VzXCIpO1xudmFyIGNvbnN0cnVjdFN0YWNrID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoKSA9PiB7XG4gIGxldCBhYnNvbHV0ZUVudHJpZXMgPSBbXTtcbiAgbGV0IHJlbGF0aXZlRW50cmllcyA9IFtdO1xuICBsZXQgaWRlbnRpZnlPblJlc29sdmUgPSBmYWxzZTtcbiAgY29uc3QgZW50cmllc05hbWVTZXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBjb25zdCBzb3J0ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoZW50cmllcykgPT4gZW50cmllcy5zb3J0KFxuICAgIChhLCBiKSA9PiBzdGVwV2VpZ2h0c1tiLnN0ZXBdIC0gc3RlcFdlaWdodHNbYS5zdGVwXSB8fCBwcmlvcml0eVdlaWdodHNbYi5wcmlvcml0eSB8fCBcIm5vcm1hbFwiXSAtIHByaW9yaXR5V2VpZ2h0c1thLnByaW9yaXR5IHx8IFwibm9ybWFsXCJdXG4gICksIFwic29ydFwiKTtcbiAgY29uc3QgcmVtb3ZlQnlOYW1lID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodG9SZW1vdmUpID0+IHtcbiAgICBsZXQgaXNSZW1vdmVkID0gZmFsc2U7XG4gICAgY29uc3QgZmlsdGVyQ2IgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgYWxpYXNlcyA9IGdldEFsbEFsaWFzZXMoZW50cnkubmFtZSwgZW50cnkuYWxpYXNlcyk7XG4gICAgICBpZiAoYWxpYXNlcy5pbmNsdWRlcyh0b1JlbW92ZSkpIHtcbiAgICAgICAgaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBhbGlhc2VzKSB7XG4gICAgICAgICAgZW50cmllc05hbWVTZXQuZGVsZXRlKGFsaWFzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCBcImZpbHRlckNiXCIpO1xuICAgIGFic29sdXRlRW50cmllcyA9IGFic29sdXRlRW50cmllcy5maWx0ZXIoZmlsdGVyQ2IpO1xuICAgIHJlbGF0aXZlRW50cmllcyA9IHJlbGF0aXZlRW50cmllcy5maWx0ZXIoZmlsdGVyQ2IpO1xuICAgIHJldHVybiBpc1JlbW92ZWQ7XG4gIH0sIFwicmVtb3ZlQnlOYW1lXCIpO1xuICBjb25zdCByZW1vdmVCeVJlZmVyZW5jZSA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHRvUmVtb3ZlKSA9PiB7XG4gICAgbGV0IGlzUmVtb3ZlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGZpbHRlckNiID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5taWRkbGV3YXJlID09PSB0b1JlbW92ZSkge1xuICAgICAgICBpc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIGdldEFsbEFsaWFzZXMoZW50cnkubmFtZSwgZW50cnkuYWxpYXNlcykpIHtcbiAgICAgICAgICBlbnRyaWVzTmFtZVNldC5kZWxldGUoYWxpYXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIFwiZmlsdGVyQ2JcIik7XG4gICAgYWJzb2x1dGVFbnRyaWVzID0gYWJzb2x1dGVFbnRyaWVzLmZpbHRlcihmaWx0ZXJDYik7XG4gICAgcmVsYXRpdmVFbnRyaWVzID0gcmVsYXRpdmVFbnRyaWVzLmZpbHRlcihmaWx0ZXJDYik7XG4gICAgcmV0dXJuIGlzUmVtb3ZlZDtcbiAgfSwgXCJyZW1vdmVCeVJlZmVyZW5jZVwiKTtcbiAgY29uc3QgY2xvbmVUbyA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHRvU3RhY2spID0+IHtcbiAgICB2YXIgX2E7XG4gICAgYWJzb2x1dGVFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICB0b1N0YWNrLmFkZChlbnRyeS5taWRkbGV3YXJlLCB7IC4uLmVudHJ5IH0pO1xuICAgIH0pO1xuICAgIHJlbGF0aXZlRW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgdG9TdGFjay5hZGRSZWxhdGl2ZVRvKGVudHJ5Lm1pZGRsZXdhcmUsIHsgLi4uZW50cnkgfSk7XG4gICAgfSk7XG4gICAgKF9hID0gdG9TdGFjay5pZGVudGlmeU9uUmVzb2x2ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwodG9TdGFjaywgc3RhY2suaWRlbnRpZnlPblJlc29sdmUoKSk7XG4gICAgcmV0dXJuIHRvU3RhY2s7XG4gIH0sIFwiY2xvbmVUb1wiKTtcbiAgY29uc3QgZXhwYW5kUmVsYXRpdmVNaWRkbGV3YXJlTGlzdCA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKGZyb20pID0+IHtcbiAgICBjb25zdCBleHBhbmRlZE1pZGRsZXdhcmVMaXN0ID0gW107XG4gICAgZnJvbS5iZWZvcmUuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5iZWZvcmUubGVuZ3RoID09PSAwICYmIGVudHJ5LmFmdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBleHBhbmRlZE1pZGRsZXdhcmVMaXN0LnB1c2goZW50cnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwYW5kZWRNaWRkbGV3YXJlTGlzdC5wdXNoKC4uLmV4cGFuZFJlbGF0aXZlTWlkZGxld2FyZUxpc3QoZW50cnkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBleHBhbmRlZE1pZGRsZXdhcmVMaXN0LnB1c2goZnJvbSk7XG4gICAgZnJvbS5hZnRlci5yZXZlcnNlKCkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5iZWZvcmUubGVuZ3RoID09PSAwICYmIGVudHJ5LmFmdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBleHBhbmRlZE1pZGRsZXdhcmVMaXN0LnB1c2goZW50cnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwYW5kZWRNaWRkbGV3YXJlTGlzdC5wdXNoKC4uLmV4cGFuZFJlbGF0aXZlTWlkZGxld2FyZUxpc3QoZW50cnkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZXhwYW5kZWRNaWRkbGV3YXJlTGlzdDtcbiAgfSwgXCJleHBhbmRSZWxhdGl2ZU1pZGRsZXdhcmVMaXN0XCIpO1xuICBjb25zdCBnZXRNaWRkbGV3YXJlTGlzdCA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKGRlYnVnID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBub3JtYWxpemVkQWJzb2x1dGVFbnRyaWVzID0gW107XG4gICAgY29uc3Qgbm9ybWFsaXplZFJlbGF0aXZlRW50cmllcyA9IFtdO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRFbnRyaWVzTmFtZU1hcCA9IHt9O1xuICAgIGFic29sdXRlRW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEVudHJ5ID0ge1xuICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgYmVmb3JlOiBbXSxcbiAgICAgICAgYWZ0ZXI6IFtdXG4gICAgICB9O1xuICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBnZXRBbGxBbGlhc2VzKG5vcm1hbGl6ZWRFbnRyeS5uYW1lLCBub3JtYWxpemVkRW50cnkuYWxpYXNlcykpIHtcbiAgICAgICAgbm9ybWFsaXplZEVudHJpZXNOYW1lTWFwW2FsaWFzXSA9IG5vcm1hbGl6ZWRFbnRyeTtcbiAgICAgIH1cbiAgICAgIG5vcm1hbGl6ZWRBYnNvbHV0ZUVudHJpZXMucHVzaChub3JtYWxpemVkRW50cnkpO1xuICAgIH0pO1xuICAgIHJlbGF0aXZlRW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEVudHJ5ID0ge1xuICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgYmVmb3JlOiBbXSxcbiAgICAgICAgYWZ0ZXI6IFtdXG4gICAgICB9O1xuICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBnZXRBbGxBbGlhc2VzKG5vcm1hbGl6ZWRFbnRyeS5uYW1lLCBub3JtYWxpemVkRW50cnkuYWxpYXNlcykpIHtcbiAgICAgICAgbm9ybWFsaXplZEVudHJpZXNOYW1lTWFwW2FsaWFzXSA9IG5vcm1hbGl6ZWRFbnRyeTtcbiAgICAgIH1cbiAgICAgIG5vcm1hbGl6ZWRSZWxhdGl2ZUVudHJpZXMucHVzaChub3JtYWxpemVkRW50cnkpO1xuICAgIH0pO1xuICAgIG5vcm1hbGl6ZWRSZWxhdGl2ZUVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS50b01pZGRsZXdhcmUpIHtcbiAgICAgICAgY29uc3QgdG9NaWRkbGV3YXJlID0gbm9ybWFsaXplZEVudHJpZXNOYW1lTWFwW2VudHJ5LnRvTWlkZGxld2FyZV07XG4gICAgICAgIGlmICh0b01pZGRsZXdhcmUgPT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgJHtlbnRyeS50b01pZGRsZXdhcmV9IGlzIG5vdCBmb3VuZCB3aGVuIGFkZGluZyAke2dldE1pZGRsZXdhcmVOYW1lV2l0aEFsaWFzZXMoZW50cnkubmFtZSwgZW50cnkuYWxpYXNlcyl9IG1pZGRsZXdhcmUgJHtlbnRyeS5yZWxhdGlvbn0gJHtlbnRyeS50b01pZGRsZXdhcmV9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5LnJlbGF0aW9uID09PSBcImFmdGVyXCIpIHtcbiAgICAgICAgICB0b01pZGRsZXdhcmUuYWZ0ZXIucHVzaChlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5LnJlbGF0aW9uID09PSBcImJlZm9yZVwiKSB7XG4gICAgICAgICAgdG9NaWRkbGV3YXJlLmJlZm9yZS5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG1haW5DaGFpbiA9IHNvcnQobm9ybWFsaXplZEFic29sdXRlRW50cmllcykubWFwKGV4cGFuZFJlbGF0aXZlTWlkZGxld2FyZUxpc3QpLnJlZHVjZSgod2hvbGVMaXN0LCBleHBhbmRlZE1pZGRsZXdhcmVMaXN0KSA9PiB7XG4gICAgICB3aG9sZUxpc3QucHVzaCguLi5leHBhbmRlZE1pZGRsZXdhcmVMaXN0KTtcbiAgICAgIHJldHVybiB3aG9sZUxpc3Q7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBtYWluQ2hhaW47XG4gIH0sIFwiZ2V0TWlkZGxld2FyZUxpc3RcIik7XG4gIGNvbnN0IHN0YWNrID0ge1xuICAgIGFkZDogKG1pZGRsZXdhcmUsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lLCBvdmVycmlkZSwgYWxpYXNlczogX2FsaWFzZXMgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCBlbnRyeSA9IHtcbiAgICAgICAgc3RlcDogXCJpbml0aWFsaXplXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm5vcm1hbFwiLFxuICAgICAgICBtaWRkbGV3YXJlLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9O1xuICAgICAgY29uc3QgYWxpYXNlcyA9IGdldEFsbEFsaWFzZXMobmFtZSwgX2FsaWFzZXMpO1xuICAgICAgaWYgKGFsaWFzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoYWxpYXNlcy5zb21lKChhbGlhcykgPT4gZW50cmllc05hbWVTZXQuaGFzKGFsaWFzKSkpIHtcbiAgICAgICAgICBpZiAoIW92ZXJyaWRlKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgbWlkZGxld2FyZSBuYW1lICcke2dldE1pZGRsZXdhcmVOYW1lV2l0aEFsaWFzZXMobmFtZSwgX2FsaWFzZXMpfSdgKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIGFsaWFzZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvT3ZlcnJpZGVJbmRleCA9IGFic29sdXRlRW50cmllcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgIChlbnRyeTIpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5Mi5uYW1lID09PSBhbGlhcyB8fCAoKF9hID0gZW50cnkyLmFsaWFzZXMpID09IG51bGwgPyB2b2lkIDAgOiBfYS5zb21lKChhKSA9PiBhID09PSBhbGlhcykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHRvT3ZlcnJpZGVJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0b092ZXJyaWRlID0gYWJzb2x1dGVFbnRyaWVzW3RvT3ZlcnJpZGVJbmRleF07XG4gICAgICAgICAgICBpZiAodG9PdmVycmlkZS5zdGVwICE9PSBlbnRyeS5zdGVwIHx8IGVudHJ5LnByaW9yaXR5ICE9PSB0b092ZXJyaWRlLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgXCIke2dldE1pZGRsZXdhcmVOYW1lV2l0aEFsaWFzZXModG9PdmVycmlkZS5uYW1lLCB0b092ZXJyaWRlLmFsaWFzZXMpfVwiIG1pZGRsZXdhcmUgd2l0aCAke3RvT3ZlcnJpZGUucHJpb3JpdHl9IHByaW9yaXR5IGluICR7dG9PdmVycmlkZS5zdGVwfSBzdGVwIGNhbm5vdCBiZSBvdmVycmlkZGVuIGJ5IFwiJHtnZXRNaWRkbGV3YXJlTmFtZVdpdGhBbGlhc2VzKG5hbWUsIF9hbGlhc2VzKX1cIiBtaWRkbGV3YXJlIHdpdGggJHtlbnRyeS5wcmlvcml0eX0gcHJpb3JpdHkgaW4gJHtlbnRyeS5zdGVwfSBzdGVwLmBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFic29sdXRlRW50cmllcy5zcGxpY2UodG9PdmVycmlkZUluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBhbGlhc2VzKSB7XG4gICAgICAgICAgZW50cmllc05hbWVTZXQuYWRkKGFsaWFzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYWJzb2x1dGVFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgIH0sXG4gICAgYWRkUmVsYXRpdmVUbzogKG1pZGRsZXdhcmUsIG9wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgb3ZlcnJpZGUsIGFsaWFzZXM6IF9hbGlhc2VzIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgZW50cnkgPSB7XG4gICAgICAgIG1pZGRsZXdhcmUsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICAgIH07XG4gICAgICBjb25zdCBhbGlhc2VzID0gZ2V0QWxsQWxpYXNlcyhuYW1lLCBfYWxpYXNlcyk7XG4gICAgICBpZiAoYWxpYXNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChhbGlhc2VzLnNvbWUoKGFsaWFzKSA9PiBlbnRyaWVzTmFtZVNldC5oYXMoYWxpYXMpKSkge1xuICAgICAgICAgIGlmICghb3ZlcnJpZGUpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSBtaWRkbGV3YXJlIG5hbWUgJyR7Z2V0TWlkZGxld2FyZU5hbWVXaXRoQWxpYXNlcyhuYW1lLCBfYWxpYXNlcyl9J2ApO1xuICAgICAgICAgIGZvciAoY29uc3QgYWxpYXMgb2YgYWxpYXNlcykge1xuICAgICAgICAgICAgY29uc3QgdG9PdmVycmlkZUluZGV4ID0gcmVsYXRpdmVFbnRyaWVzLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgKGVudHJ5MikgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cnkyLm5hbWUgPT09IGFsaWFzIHx8ICgoX2EgPSBlbnRyeTIuYWxpYXNlcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnNvbWUoKGEpID0+IGEgPT09IGFsaWFzKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodG9PdmVycmlkZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRvT3ZlcnJpZGUgPSByZWxhdGl2ZUVudHJpZXNbdG9PdmVycmlkZUluZGV4XTtcbiAgICAgICAgICAgIGlmICh0b092ZXJyaWRlLnRvTWlkZGxld2FyZSAhPT0gZW50cnkudG9NaWRkbGV3YXJlIHx8IHRvT3ZlcnJpZGUucmVsYXRpb24gIT09IGVudHJ5LnJlbGF0aW9uKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgXCIke2dldE1pZGRsZXdhcmVOYW1lV2l0aEFsaWFzZXModG9PdmVycmlkZS5uYW1lLCB0b092ZXJyaWRlLmFsaWFzZXMpfVwiIG1pZGRsZXdhcmUgJHt0b092ZXJyaWRlLnJlbGF0aW9ufSBcIiR7dG9PdmVycmlkZS50b01pZGRsZXdhcmV9XCIgbWlkZGxld2FyZSBjYW5ub3QgYmUgb3ZlcnJpZGRlbiBieSBcIiR7Z2V0TWlkZGxld2FyZU5hbWVXaXRoQWxpYXNlcyhuYW1lLCBfYWxpYXNlcyl9XCIgbWlkZGxld2FyZSAke2VudHJ5LnJlbGF0aW9ufSBcIiR7ZW50cnkudG9NaWRkbGV3YXJlfVwiIG1pZGRsZXdhcmUuYFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsYXRpdmVFbnRyaWVzLnNwbGljZSh0b092ZXJyaWRlSW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIGFsaWFzZXMpIHtcbiAgICAgICAgICBlbnRyaWVzTmFtZVNldC5hZGQoYWxpYXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZWxhdGl2ZUVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgfSxcbiAgICBjbG9uZTogKCkgPT4gY2xvbmVUbyhjb25zdHJ1Y3RTdGFjaygpKSxcbiAgICB1c2U6IChwbHVnaW4pID0+IHtcbiAgICAgIHBsdWdpbi5hcHBseVRvU3RhY2soc3RhY2spO1xuICAgIH0sXG4gICAgcmVtb3ZlOiAodG9SZW1vdmUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdG9SZW1vdmUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiByZW1vdmVCeU5hbWUodG9SZW1vdmUpO1xuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gcmVtb3ZlQnlSZWZlcmVuY2UodG9SZW1vdmUpO1xuICAgIH0sXG4gICAgcmVtb3ZlQnlUYWc6ICh0b1JlbW92ZSkgPT4ge1xuICAgICAgbGV0IGlzUmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgZmlsdGVyQ2IgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChlbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCB7IHRhZ3MsIG5hbWUsIGFsaWFzZXM6IF9hbGlhc2VzIH0gPSBlbnRyeTtcbiAgICAgICAgaWYgKHRhZ3MgJiYgdGFncy5pbmNsdWRlcyh0b1JlbW92ZSkpIHtcbiAgICAgICAgICBjb25zdCBhbGlhc2VzID0gZ2V0QWxsQWxpYXNlcyhuYW1lLCBfYWxpYXNlcyk7XG4gICAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBhbGlhc2VzKSB7XG4gICAgICAgICAgICBlbnRyaWVzTmFtZVNldC5kZWxldGUoYWxpYXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sIFwiZmlsdGVyQ2JcIik7XG4gICAgICBhYnNvbHV0ZUVudHJpZXMgPSBhYnNvbHV0ZUVudHJpZXMuZmlsdGVyKGZpbHRlckNiKTtcbiAgICAgIHJlbGF0aXZlRW50cmllcyA9IHJlbGF0aXZlRW50cmllcy5maWx0ZXIoZmlsdGVyQ2IpO1xuICAgICAgcmV0dXJuIGlzUmVtb3ZlZDtcbiAgICB9LFxuICAgIGNvbmNhdDogKGZyb20pID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGNvbnN0IGNsb25lZCA9IGNsb25lVG8oY29uc3RydWN0U3RhY2soKSk7XG4gICAgICBjbG9uZWQudXNlKGZyb20pO1xuICAgICAgY2xvbmVkLmlkZW50aWZ5T25SZXNvbHZlKFxuICAgICAgICBpZGVudGlmeU9uUmVzb2x2ZSB8fCBjbG9uZWQuaWRlbnRpZnlPblJlc29sdmUoKSB8fCAoKChfYSA9IGZyb20uaWRlbnRpZnlPblJlc29sdmUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKGZyb20pKSA/PyBmYWxzZSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gY2xvbmVkO1xuICAgIH0sXG4gICAgYXBwbHlUb1N0YWNrOiBjbG9uZVRvLFxuICAgIGlkZW50aWZ5OiAoKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0TWlkZGxld2FyZUxpc3QodHJ1ZSkubWFwKChtdykgPT4ge1xuICAgICAgICBjb25zdCBzdGVwID0gbXcuc3RlcCA/PyBtdy5yZWxhdGlvbiArIFwiIFwiICsgbXcudG9NaWRkbGV3YXJlO1xuICAgICAgICByZXR1cm4gZ2V0TWlkZGxld2FyZU5hbWVXaXRoQWxpYXNlcyhtdy5uYW1lLCBtdy5hbGlhc2VzKSArIFwiIC0gXCIgKyBzdGVwO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBpZGVudGlmeU9uUmVzb2x2ZSh0b2dnbGUpIHtcbiAgICAgIGlmICh0eXBlb2YgdG9nZ2xlID09PSBcImJvb2xlYW5cIilcbiAgICAgICAgaWRlbnRpZnlPblJlc29sdmUgPSB0b2dnbGU7XG4gICAgICByZXR1cm4gaWRlbnRpZnlPblJlc29sdmU7XG4gICAgfSxcbiAgICByZXNvbHZlOiAoaGFuZGxlciwgY29udGV4dCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBtaWRkbGV3YXJlIG9mIGdldE1pZGRsZXdhcmVMaXN0KCkubWFwKChlbnRyeSkgPT4gZW50cnkubWlkZGxld2FyZSkucmV2ZXJzZSgpKSB7XG4gICAgICAgIGhhbmRsZXIgPSBtaWRkbGV3YXJlKGhhbmRsZXIsIGNvbnRleHQpO1xuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZ5T25SZXNvbHZlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0YWNrLmlkZW50aWZ5KCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICB9O1xuICByZXR1cm4gc3RhY2s7XG59LCBcImNvbnN0cnVjdFN0YWNrXCIpO1xudmFyIHN0ZXBXZWlnaHRzID0ge1xuICBpbml0aWFsaXplOiA1LFxuICBzZXJpYWxpemU6IDQsXG4gIGJ1aWxkOiAzLFxuICBmaW5hbGl6ZVJlcXVlc3Q6IDIsXG4gIGRlc2VyaWFsaXplOiAxXG59O1xudmFyIHByaW9yaXR5V2VpZ2h0cyA9IHtcbiAgaGlnaDogMyxcbiAgbm9ybWFsOiAyLFxuICBsb3c6IDFcbn07XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG5cbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBjb25zdHJ1Y3RTdGFja1xufSk7XG5cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0QXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtID0gdm9pZCAwO1xuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuY29uc3QgZ2V0QXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtID0gKHJlYWRhYmxlU3RyZWFtLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgeyBiYXNlNjRFbmNvZGVyLCBib2R5TGVuZ3RoQ2hlY2tlciwgY2hlY2tzdW1BbGdvcml0aG1GbiwgY2hlY2tzdW1Mb2NhdGlvbk5hbWUsIHN0cmVhbUhhc2hlciB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBjaGVja3N1bVJlcXVpcmVkID0gYmFzZTY0RW5jb2RlciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGNoZWNrc3VtQWxnb3JpdGhtRm4gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBjaGVja3N1bUxvY2F0aW9uTmFtZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHN0cmVhbUhhc2hlciAhPT0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGRpZ2VzdCA9IGNoZWNrc3VtUmVxdWlyZWQgPyBzdHJlYW1IYXNoZXIoY2hlY2tzdW1BbGdvcml0aG1GbiwgcmVhZGFibGVTdHJlYW0pIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbSA9IG5ldyBzdHJlYW1fMS5SZWFkYWJsZSh7IHJlYWQ6ICgpID0+IHsgfSB9KTtcbiAgICByZWFkYWJsZVN0cmVhbS5vbihcImRhdGFcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYm9keUxlbmd0aENoZWNrZXIoZGF0YSkgfHwgMDtcbiAgICAgICAgYXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtLnB1c2goYCR7bGVuZ3RoLnRvU3RyaW5nKDE2KX1cXHJcXG5gKTtcbiAgICAgICAgYXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtLnB1c2goZGF0YSk7XG4gICAgICAgIGF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbS5wdXNoKFwiXFxyXFxuXCIpO1xuICAgIH0pO1xuICAgIHJlYWRhYmxlU3RyZWFtLm9uKFwiZW5kXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtLnB1c2goYDBcXHJcXG5gKTtcbiAgICAgICAgaWYgKGNoZWNrc3VtUmVxdWlyZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrc3VtID0gYmFzZTY0RW5jb2Rlcihhd2FpdCBkaWdlc3QpO1xuICAgICAgICAgICAgYXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtLnB1c2goYCR7Y2hlY2tzdW1Mb2NhdGlvbk5hbWV9OiR7Y2hlY2tzdW19XFxyXFxuYCk7XG4gICAgICAgICAgICBhd3NDaHVua2VkRW5jb2RpbmdTdHJlYW0ucHVzaChgXFxyXFxuYCk7XG4gICAgICAgIH1cbiAgICAgICAgYXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtLnB1c2gobnVsbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbTtcbn07XG5leHBvcnRzLmdldEF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbSA9IGdldEF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbTtcbiIsICJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX25hbWUgPSAodGFyZ2V0LCB2YWx1ZSkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJuYW1lXCIsIHsgdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgZXNjYXBlVXJpOiAoKSA9PiBlc2NhcGVVcmksXG4gIGVzY2FwZVVyaVBhdGg6ICgpID0+IGVzY2FwZVVyaVBhdGhcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoc3JjX2V4cG9ydHMpO1xuXG4vLyBzcmMvZXNjYXBlLXVyaS50c1xudmFyIGVzY2FwZVVyaSA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHVyaSkgPT4gKFxuICAvLyBBV1MgcGVyY2VudC1lbmNvZGVzIHNvbWUgZXh0cmEgbm9uLXN0YW5kYXJkIGNoYXJhY3RlcnMgaW4gYSBVUklcbiAgZW5jb2RlVVJJQ29tcG9uZW50KHVyaSkucmVwbGFjZSgvWyEnKCkqXS9nLCBoZXhFbmNvZGUpXG4pLCBcImVzY2FwZVVyaVwiKTtcbnZhciBoZXhFbmNvZGUgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChjKSA9PiBgJSR7Yy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpfWAsIFwiaGV4RW5jb2RlXCIpO1xuXG4vLyBzcmMvZXNjYXBlLXVyaS1wYXRoLnRzXG52YXIgZXNjYXBlVXJpUGF0aCA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHVyaSkgPT4gdXJpLnNwbGl0KFwiL1wiKS5tYXAoZXNjYXBlVXJpKS5qb2luKFwiL1wiKSwgXCJlc2NhcGVVcmlQYXRoXCIpO1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuXG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZXNjYXBlVXJpLFxuICBlc2NhcGVVcmlQYXRoXG59KTtcblxuIiwgInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIHNyY19leHBvcnRzID0ge307XG5fX2V4cG9ydChzcmNfZXhwb3J0cywge1xuICBidWlsZFF1ZXJ5U3RyaW5nOiAoKSA9PiBidWlsZFF1ZXJ5U3RyaW5nXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcbnZhciBpbXBvcnRfdXRpbF91cmlfZXNjYXBlID0gcmVxdWlyZShcIkBzbWl0aHkvdXRpbC11cmktZXNjYXBlXCIpO1xuZnVuY3Rpb24gYnVpbGRRdWVyeVN0cmluZyhxdWVyeSkge1xuICBjb25zdCBwYXJ0cyA9IFtdO1xuICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocXVlcnkpLnNvcnQoKSkge1xuICAgIGNvbnN0IHZhbHVlID0gcXVlcnlba2V5XTtcbiAgICBrZXkgPSAoMCwgaW1wb3J0X3V0aWxfdXJpX2VzY2FwZS5lc2NhcGVVcmkpKGtleSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgaUxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGlMZW47IGkrKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGAke2tleX09JHsoMCwgaW1wb3J0X3V0aWxfdXJpX2VzY2FwZS5lc2NhcGVVcmkpKHZhbHVlW2ldKX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHFzRW50cnkgPSBrZXk7XG4gICAgICBpZiAodmFsdWUgfHwgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHFzRW50cnkgKz0gYD0keygwLCBpbXBvcnRfdXRpbF91cmlfZXNjYXBlLmVzY2FwZVVyaSkodmFsdWUpfWA7XG4gICAgICB9XG4gICAgICBwYXJ0cy5wdXNoKHFzRW50cnkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFydHMuam9pbihcIiZcIik7XG59XG5fX25hbWUoYnVpbGRRdWVyeVN0cmluZywgXCJidWlsZFF1ZXJ5U3RyaW5nXCIpO1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuXG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgYnVpbGRRdWVyeVN0cmluZ1xufSk7XG5cbiIsICJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgREVGQVVMVF9SRVFVRVNUX1RJTUVPVVQ6ICgpID0+IERFRkFVTFRfUkVRVUVTVF9USU1FT1VULFxuICBOb2RlSHR0cDJIYW5kbGVyOiAoKSA9PiBOb2RlSHR0cDJIYW5kbGVyLFxuICBOb2RlSHR0cEhhbmRsZXI6ICgpID0+IE5vZGVIdHRwSGFuZGxlcixcbiAgc3RyZWFtQ29sbGVjdG9yOiAoKSA9PiBzdHJlYW1Db2xsZWN0b3Jcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoc3JjX2V4cG9ydHMpO1xuXG4vLyBzcmMvbm9kZS1odHRwLWhhbmRsZXIudHNcbnZhciBpbXBvcnRfcHJvdG9jb2xfaHR0cCA9IHJlcXVpcmUoXCJAc21pdGh5L3Byb3RvY29sLWh0dHBcIik7XG52YXIgaW1wb3J0X3F1ZXJ5c3RyaW5nX2J1aWxkZXIgPSByZXF1aXJlKFwiQHNtaXRoeS9xdWVyeXN0cmluZy1idWlsZGVyXCIpO1xudmFyIGltcG9ydF9odHRwID0gcmVxdWlyZShcImh0dHBcIik7XG52YXIgaW1wb3J0X2h0dHBzID0gcmVxdWlyZShcImh0dHBzXCIpO1xuXG4vLyBzcmMvY29uc3RhbnRzLnRzXG52YXIgTk9ERUpTX1RJTUVPVVRfRVJST1JfQ09ERVMgPSBbXCJFQ09OTlJFU0VUXCIsIFwiRVBJUEVcIiwgXCJFVElNRURPVVRcIl07XG5cbi8vIHNyYy9nZXQtdHJhbnNmb3JtZWQtaGVhZGVycy50c1xudmFyIGdldFRyYW5zZm9ybWVkSGVhZGVycyA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKGhlYWRlcnMpID0+IHtcbiAgY29uc3QgdHJhbnNmb3JtZWRIZWFkZXJzID0ge307XG4gIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhoZWFkZXJzKSkge1xuICAgIGNvbnN0IGhlYWRlclZhbHVlcyA9IGhlYWRlcnNbbmFtZV07XG4gICAgdHJhbnNmb3JtZWRIZWFkZXJzW25hbWVdID0gQXJyYXkuaXNBcnJheShoZWFkZXJWYWx1ZXMpID8gaGVhZGVyVmFsdWVzLmpvaW4oXCIsXCIpIDogaGVhZGVyVmFsdWVzO1xuICB9XG4gIHJldHVybiB0cmFuc2Zvcm1lZEhlYWRlcnM7XG59LCBcImdldFRyYW5zZm9ybWVkSGVhZGVyc1wiKTtcblxuLy8gc3JjL3NldC1jb25uZWN0aW9uLXRpbWVvdXQudHNcbnZhciBzZXRDb25uZWN0aW9uVGltZW91dCA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHJlcXVlc3QsIHJlamVjdCwgdGltZW91dEluTXMgPSAwKSA9PiB7XG4gIGlmICghdGltZW91dEluTXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVxdWVzdC5kZXN0cm95KCk7XG4gICAgcmVqZWN0KFxuICAgICAgT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoYFNvY2tldCB0aW1lZCBvdXQgd2l0aG91dCBlc3RhYmxpc2hpbmcgYSBjb25uZWN0aW9uIHdpdGhpbiAke3RpbWVvdXRJbk1zfSBtc2ApLCB7XG4gICAgICAgIG5hbWU6IFwiVGltZW91dEVycm9yXCJcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgdGltZW91dEluTXMpO1xuICByZXF1ZXN0Lm9uKFwic29ja2V0XCIsIChzb2NrZXQpID0+IHtcbiAgICBpZiAoc29ja2V0LmNvbm5lY3RpbmcpIHtcbiAgICAgIHNvY2tldC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gIH0pO1xufSwgXCJzZXRDb25uZWN0aW9uVGltZW91dFwiKTtcblxuLy8gc3JjL3NldC1zb2NrZXQta2VlcC1hbGl2ZS50c1xudmFyIHNldFNvY2tldEtlZXBBbGl2ZSA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHJlcXVlc3QsIHsga2VlcEFsaXZlLCBrZWVwQWxpdmVNc2VjcyB9KSA9PiB7XG4gIGlmIChrZWVwQWxpdmUgIT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVxdWVzdC5vbihcInNvY2tldFwiLCAoc29ja2V0KSA9PiB7XG4gICAgc29ja2V0LnNldEtlZXBBbGl2ZShrZWVwQWxpdmUsIGtlZXBBbGl2ZU1zZWNzIHx8IDApO1xuICB9KTtcbn0sIFwic2V0U29ja2V0S2VlcEFsaXZlXCIpO1xuXG4vLyBzcmMvc2V0LXNvY2tldC10aW1lb3V0LnRzXG52YXIgc2V0U29ja2V0VGltZW91dCA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHJlcXVlc3QsIHJlamVjdCwgdGltZW91dEluTXMgPSAwKSA9PiB7XG4gIHJlcXVlc3Quc2V0VGltZW91dCh0aW1lb3V0SW5NcywgKCkgPT4ge1xuICAgIHJlcXVlc3QuZGVzdHJveSgpO1xuICAgIHJlamVjdChPYmplY3QuYXNzaWduKG5ldyBFcnJvcihgQ29ubmVjdGlvbiB0aW1lZCBvdXQgYWZ0ZXIgJHt0aW1lb3V0SW5Nc30gbXNgKSwgeyBuYW1lOiBcIlRpbWVvdXRFcnJvclwiIH0pKTtcbiAgfSk7XG59LCBcInNldFNvY2tldFRpbWVvdXRcIik7XG5cbi8vIHNyYy93cml0ZS1yZXF1ZXN0LWJvZHkudHNcbnZhciBpbXBvcnRfc3RyZWFtID0gcmVxdWlyZShcInN0cmVhbVwiKTtcbnZhciBNSU5fV0FJVF9USU1FID0gMWUzO1xuYXN5bmMgZnVuY3Rpb24gd3JpdGVSZXF1ZXN0Qm9keShodHRwUmVxdWVzdCwgcmVxdWVzdCwgbWF4Q29udGludWVUaW1lb3V0TXMgPSBNSU5fV0FJVF9USU1FKSB7XG4gIGNvbnN0IGhlYWRlcnMgPSByZXF1ZXN0LmhlYWRlcnMgPz8ge307XG4gIGNvbnN0IGV4cGVjdCA9IGhlYWRlcnNbXCJFeHBlY3RcIl0gfHwgaGVhZGVyc1tcImV4cGVjdFwiXTtcbiAgbGV0IHRpbWVvdXRJZCA9IC0xO1xuICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcbiAgaWYgKGV4cGVjdCA9PT0gXCIxMDAtY29udGludWVcIikge1xuICAgIGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aW1lb3V0SWQgPSBOdW1iZXIoc2V0VGltZW91dChyZXNvbHZlLCBNYXRoLm1heChNSU5fV0FJVF9USU1FLCBtYXhDb250aW51ZVRpbWVvdXRNcykpKTtcbiAgICAgIH0pLFxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaHR0cFJlcXVlc3Qub24oXCJjb250aW51ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaHR0cFJlcXVlc3Qub24oXCJlcnJvclwiLCAoKSA9PiB7XG4gICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIF0pO1xuICB9XG4gIGlmICghaGFzRXJyb3IpIHtcbiAgICB3cml0ZUJvZHkoaHR0cFJlcXVlc3QsIHJlcXVlc3QuYm9keSk7XG4gIH1cbn1cbl9fbmFtZSh3cml0ZVJlcXVlc3RCb2R5LCBcIndyaXRlUmVxdWVzdEJvZHlcIik7XG5mdW5jdGlvbiB3cml0ZUJvZHkoaHR0cFJlcXVlc3QsIGJvZHkpIHtcbiAgaWYgKGJvZHkgaW5zdGFuY2VvZiBpbXBvcnRfc3RyZWFtLlJlYWRhYmxlKSB7XG4gICAgYm9keS5waXBlKGh0dHBSZXF1ZXN0KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGJvZHkpIHtcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpIHx8IHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBodHRwUmVxdWVzdC5lbmQoYm9keSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVpbnQ4ID0gYm9keTtcbiAgICBpZiAodHlwZW9mIHVpbnQ4ID09PSBcIm9iamVjdFwiICYmIHVpbnQ4LmJ1ZmZlciAmJiB0eXBlb2YgdWludDguYnl0ZU9mZnNldCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgdWludDguYnl0ZUxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgaHR0cFJlcXVlc3QuZW5kKEJ1ZmZlci5mcm9tKHVpbnQ4LmJ1ZmZlciwgdWludDguYnl0ZU9mZnNldCwgdWludDguYnl0ZUxlbmd0aCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBodHRwUmVxdWVzdC5lbmQoQnVmZmVyLmZyb20oYm9keSkpO1xuICAgIHJldHVybjtcbiAgfVxuICBodHRwUmVxdWVzdC5lbmQoKTtcbn1cbl9fbmFtZSh3cml0ZUJvZHksIFwid3JpdGVCb2R5XCIpO1xuXG4vLyBzcmMvbm9kZS1odHRwLWhhbmRsZXIudHNcbnZhciBERUZBVUxUX1JFUVVFU1RfVElNRU9VVCA9IDA7XG52YXIgX05vZGVIdHRwSGFuZGxlciA9IGNsYXNzIF9Ob2RlSHR0cEhhbmRsZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5zb2NrZXRXYXJuaW5nVGltZXN0YW1wID0gMDtcbiAgICAvLyBOb2RlIGh0dHAgaGFuZGxlciBpcyBoYXJkLWNvZGVkIHRvIGh0dHAvMS4xOiBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi9mZjU2NjRiODNiODljNTVlNGFiNWQ1ZjYwMDY4ZmI0NTdmMWY1ODcyL2xpYi9faHR0cF9zZXJ2ZXIuanMjTDI4NlxuICAgIHRoaXMubWV0YWRhdGEgPSB7IGhhbmRsZXJQcm90b2NvbDogXCJodHRwLzEuMVwiIH07XG4gICAgdGhpcy5jb25maWdQcm92aWRlciA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG9wdGlvbnMoKS50aGVuKChfb3B0aW9ucykgPT4ge1xuICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNvbHZlRGVmYXVsdENvbmZpZyhfb3B0aW9ucykpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc29sdmVEZWZhdWx0Q29uZmlnKG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybnMgdGhlIGlucHV0IGlmIGl0IGlzIGFuIEh0dHBIYW5kbGVyIG9mIGFueSBjbGFzcyxcbiAgICogb3IgaW5zdGFudGlhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgaGFuZGxlci5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUoaW5zdGFuY2VPck9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIChpbnN0YW5jZU9yT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogaW5zdGFuY2VPck9wdGlvbnMuaGFuZGxlKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VPck9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgX05vZGVIdHRwSGFuZGxlcihpbnN0YW5jZU9yT3B0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKlxuICAgKiBAcGFyYW0gYWdlbnQgLSBodHRwKHMpIGFnZW50IGluIHVzZSBieSB0aGUgTm9kZUh0dHBIYW5kbGVyIGluc3RhbmNlLlxuICAgKiBAcmV0dXJucyB0aW1lc3RhbXAgb2YgbGFzdCBlbWl0dGVkIHdhcm5pbmcuXG4gICAqL1xuICBzdGF0aWMgY2hlY2tTb2NrZXRVc2FnZShhZ2VudCwgc29ja2V0V2FybmluZ1RpbWVzdGFtcCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgeyBzb2NrZXRzLCByZXF1ZXN0cywgbWF4U29ja2V0cyB9ID0gYWdlbnQ7XG4gICAgaWYgKHR5cGVvZiBtYXhTb2NrZXRzICE9PSBcIm51bWJlclwiIHx8IG1heFNvY2tldHMgPT09IEluZmluaXR5KSB7XG4gICAgICByZXR1cm4gc29ja2V0V2FybmluZ1RpbWVzdGFtcDtcbiAgICB9XG4gICAgY29uc3QgaW50ZXJ2YWwgPSAxNWUzO1xuICAgIGlmIChEYXRlLm5vdygpIC0gaW50ZXJ2YWwgPCBzb2NrZXRXYXJuaW5nVGltZXN0YW1wKSB7XG4gICAgICByZXR1cm4gc29ja2V0V2FybmluZ1RpbWVzdGFtcDtcbiAgICB9XG4gICAgaWYgKHNvY2tldHMgJiYgcmVxdWVzdHMpIHtcbiAgICAgIGZvciAoY29uc3Qgb3JpZ2luIGluIHNvY2tldHMpIHtcbiAgICAgICAgY29uc3Qgc29ja2V0c0luVXNlID0gKChfYSA9IHNvY2tldHNbb3JpZ2luXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgPz8gMDtcbiAgICAgICAgY29uc3QgcmVxdWVzdHNFbnF1ZXVlZCA9ICgoX2IgPSByZXF1ZXN0c1tvcmlnaW5dKSA9PSBudWxsID8gdm9pZCAwIDogX2IubGVuZ3RoKSA/PyAwO1xuICAgICAgICBpZiAoc29ja2V0c0luVXNlID49IG1heFNvY2tldHMgJiYgcmVxdWVzdHNFbnF1ZXVlZCA+PSAyICogbWF4U29ja2V0cykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiQHNtaXRoeS9ub2RlLWh0dHAtaGFuZGxlcjpXQVJOXCIsXG4gICAgICAgICAgICBgc29ja2V0IHVzYWdlIGF0IGNhcGFjaXR5PSR7c29ja2V0c0luVXNlfSBhbmQgJHtyZXF1ZXN0c0VucXVldWVkfSBhZGRpdGlvbmFsIHJlcXVlc3RzIGFyZSBlbnF1ZXVlZC5gLFxuICAgICAgICAgICAgXCJTZWUgaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL3Nkay1mb3ItamF2YXNjcmlwdC92My9kZXZlbG9wZXItZ3VpZGUvbm9kZS1jb25maWd1cmluZy1tYXhzb2NrZXRzLmh0bWxcIixcbiAgICAgICAgICAgIFwib3IgaW5jcmVhc2Ugc29ja2V0QWNxdWlzaXRpb25XYXJuaW5nVGltZW91dD0obWlsbGlzKSBpbiB0aGUgTm9kZUh0dHBIYW5kbGVyIGNvbmZpZy5cIlxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNvY2tldFdhcm5pbmdUaW1lc3RhbXA7XG4gIH1cbiAgcmVzb2x2ZURlZmF1bHRDb25maWcob3B0aW9ucykge1xuICAgIGNvbnN0IHsgcmVxdWVzdFRpbWVvdXQsIGNvbm5lY3Rpb25UaW1lb3V0LCBzb2NrZXRUaW1lb3V0LCBodHRwQWdlbnQsIGh0dHBzQWdlbnQgfSA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qga2VlcEFsaXZlID0gdHJ1ZTtcbiAgICBjb25zdCBtYXhTb2NrZXRzID0gNTA7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbm5lY3Rpb25UaW1lb3V0LFxuICAgICAgcmVxdWVzdFRpbWVvdXQ6IHJlcXVlc3RUaW1lb3V0ID8/IHNvY2tldFRpbWVvdXQsXG4gICAgICBodHRwQWdlbnQ6ICgoKSA9PiB7XG4gICAgICAgIGlmIChodHRwQWdlbnQgaW5zdGFuY2VvZiBpbXBvcnRfaHR0cC5BZ2VudCB8fCB0eXBlb2YgKGh0dHBBZ2VudCA9PSBudWxsID8gdm9pZCAwIDogaHR0cEFnZW50LmRlc3Ryb3kpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gaHR0cEFnZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgaW1wb3J0X2h0dHAuQWdlbnQoeyBrZWVwQWxpdmUsIG1heFNvY2tldHMsIC4uLmh0dHBBZ2VudCB9KTtcbiAgICAgIH0pKCksXG4gICAgICBodHRwc0FnZW50OiAoKCkgPT4ge1xuICAgICAgICBpZiAoaHR0cHNBZ2VudCBpbnN0YW5jZW9mIGltcG9ydF9odHRwcy5BZ2VudCB8fCB0eXBlb2YgKGh0dHBzQWdlbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGh0dHBzQWdlbnQuZGVzdHJveSkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBodHRwc0FnZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgaW1wb3J0X2h0dHBzLkFnZW50KHsga2VlcEFsaXZlLCBtYXhTb2NrZXRzLCAuLi5odHRwc0FnZW50IH0pO1xuICAgICAgfSkoKVxuICAgIH07XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgKF9iID0gKF9hID0gdGhpcy5jb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfYS5odHRwQWdlbnQpID09IG51bGwgPyB2b2lkIDAgOiBfYi5kZXN0cm95KCk7XG4gICAgKF9kID0gKF9jID0gdGhpcy5jb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfYy5odHRwc0FnZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2QuZGVzdHJveSgpO1xuICB9XG4gIGFzeW5jIGhhbmRsZShyZXF1ZXN0LCB7IGFib3J0U2lnbmFsIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gYXdhaXQgdGhpcy5jb25maWdQcm92aWRlcjtcbiAgICB9XG4gICAgbGV0IHNvY2tldENoZWNrVGltZW91dElkO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgIGxldCB3cml0ZVJlcXVlc3RCb2R5UHJvbWlzZSA9IHZvaWQgMDtcbiAgICAgIGNvbnN0IHJlc29sdmUgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKGFzeW5jIChhcmcpID0+IHtcbiAgICAgICAgYXdhaXQgd3JpdGVSZXF1ZXN0Qm9keVByb21pc2U7XG4gICAgICAgIGNsZWFyVGltZW91dChzb2NrZXRDaGVja1RpbWVvdXRJZCk7XG4gICAgICAgIF9yZXNvbHZlKGFyZyk7XG4gICAgICB9LCBcInJlc29sdmVcIik7XG4gICAgICBjb25zdCByZWplY3QgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKGFzeW5jIChhcmcpID0+IHtcbiAgICAgICAgYXdhaXQgd3JpdGVSZXF1ZXN0Qm9keVByb21pc2U7XG4gICAgICAgIF9yZWplY3QoYXJnKTtcbiAgICAgIH0sIFwicmVqZWN0XCIpO1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb2RlIEhUVFAgcmVxdWVzdCBoYW5kbGVyIGNvbmZpZyBpcyBub3QgcmVzb2x2ZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoYWJvcnRTaWduYWwgPT0gbnVsbCA/IHZvaWQgMCA6IGFib3J0U2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgY29uc3QgYWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIlJlcXVlc3QgYWJvcnRlZFwiKTtcbiAgICAgICAgYWJvcnRFcnJvci5uYW1lID0gXCJBYm9ydEVycm9yXCI7XG4gICAgICAgIHJlamVjdChhYm9ydEVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNTU0wgPSByZXF1ZXN0LnByb3RvY29sID09PSBcImh0dHBzOlwiO1xuICAgICAgY29uc3QgYWdlbnQgPSBpc1NTTCA/IHRoaXMuY29uZmlnLmh0dHBzQWdlbnQgOiB0aGlzLmNvbmZpZy5odHRwQWdlbnQ7XG4gICAgICBzb2NrZXRDaGVja1RpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNvY2tldFdhcm5pbmdUaW1lc3RhbXAgPSBfTm9kZUh0dHBIYW5kbGVyLmNoZWNrU29ja2V0VXNhZ2UoYWdlbnQsIHRoaXMuc29ja2V0V2FybmluZ1RpbWVzdGFtcCk7XG4gICAgICB9LCB0aGlzLmNvbmZpZy5zb2NrZXRBY3F1aXNpdGlvbldhcm5pbmdUaW1lb3V0ID8/ICh0aGlzLmNvbmZpZy5yZXF1ZXN0VGltZW91dCA/PyAyZTMpICsgKHRoaXMuY29uZmlnLmNvbm5lY3Rpb25UaW1lb3V0ID8/IDFlMykpO1xuICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSAoMCwgaW1wb3J0X3F1ZXJ5c3RyaW5nX2J1aWxkZXIuYnVpbGRRdWVyeVN0cmluZykocmVxdWVzdC5xdWVyeSB8fCB7fSk7XG4gICAgICBsZXQgYXV0aCA9IHZvaWQgMDtcbiAgICAgIGlmIChyZXF1ZXN0LnVzZXJuYW1lICE9IG51bGwgfHwgcmVxdWVzdC5wYXNzd29yZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxdWVzdC51c2VybmFtZSA/PyBcIlwiO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IHJlcXVlc3QucGFzc3dvcmQgPz8gXCJcIjtcbiAgICAgICAgYXV0aCA9IGAke3VzZXJuYW1lfToke3Bhc3N3b3JkfWA7XG4gICAgICB9XG4gICAgICBsZXQgcGF0aCA9IHJlcXVlc3QucGF0aDtcbiAgICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgICBwYXRoICs9IGA/JHtxdWVyeVN0cmluZ31gO1xuICAgICAgfVxuICAgICAgaWYgKHJlcXVlc3QuZnJhZ21lbnQpIHtcbiAgICAgICAgcGF0aCArPSBgIyR7cmVxdWVzdC5mcmFnbWVudH1gO1xuICAgICAgfVxuICAgICAgY29uc3Qgbm9kZUh0dHBzT3B0aW9ucyA9IHtcbiAgICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLFxuICAgICAgICBob3N0OiByZXF1ZXN0Lmhvc3RuYW1lLFxuICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICBwYXRoLFxuICAgICAgICBwb3J0OiByZXF1ZXN0LnBvcnQsXG4gICAgICAgIGFnZW50LFxuICAgICAgICBhdXRoXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVxdWVzdEZ1bmMgPSBpc1NTTCA/IGltcG9ydF9odHRwcy5yZXF1ZXN0IDogaW1wb3J0X2h0dHAucmVxdWVzdDtcbiAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3RGdW5jKG5vZGVIdHRwc09wdGlvbnMsIChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgaHR0cFJlc3BvbnNlID0gbmV3IGltcG9ydF9wcm90b2NvbF9odHRwLkh0dHBSZXNwb25zZSh7XG4gICAgICAgICAgc3RhdHVzQ29kZTogcmVzLnN0YXR1c0NvZGUgfHwgLTEsXG4gICAgICAgICAgcmVhc29uOiByZXMuc3RhdHVzTWVzc2FnZSxcbiAgICAgICAgICBoZWFkZXJzOiBnZXRUcmFuc2Zvcm1lZEhlYWRlcnMocmVzLmhlYWRlcnMpLFxuICAgICAgICAgIGJvZHk6IHJlc1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZSh7IHJlc3BvbnNlOiBodHRwUmVzcG9uc2UgfSk7XG4gICAgICB9KTtcbiAgICAgIHJlcS5vbihcImVycm9yXCIsIChlcnIpID0+IHtcbiAgICAgICAgaWYgKE5PREVKU19USU1FT1VUX0VSUk9SX0NPREVTLmluY2x1ZGVzKGVyci5jb2RlKSkge1xuICAgICAgICAgIHJlamVjdChPYmplY3QuYXNzaWduKGVyciwgeyBuYW1lOiBcIlRpbWVvdXRFcnJvclwiIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRDb25uZWN0aW9uVGltZW91dChyZXEsIHJlamVjdCwgdGhpcy5jb25maWcuY29ubmVjdGlvblRpbWVvdXQpO1xuICAgICAgc2V0U29ja2V0VGltZW91dChyZXEsIHJlamVjdCwgdGhpcy5jb25maWcucmVxdWVzdFRpbWVvdXQpO1xuICAgICAgaWYgKGFib3J0U2lnbmFsKSB7XG4gICAgICAgIGFib3J0U2lnbmFsLm9uYWJvcnQgPSAoKSA9PiB7XG4gICAgICAgICAgcmVxLmFib3J0KCk7XG4gICAgICAgICAgY29uc3QgYWJvcnRFcnJvciA9IG5ldyBFcnJvcihcIlJlcXVlc3QgYWJvcnRlZFwiKTtcbiAgICAgICAgICBhYm9ydEVycm9yLm5hbWUgPSBcIkFib3J0RXJyb3JcIjtcbiAgICAgICAgICByZWplY3QoYWJvcnRFcnJvcik7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjb25zdCBodHRwQWdlbnQgPSBub2RlSHR0cHNPcHRpb25zLmFnZW50O1xuICAgICAgaWYgKHR5cGVvZiBodHRwQWdlbnQgPT09IFwib2JqZWN0XCIgJiYgXCJrZWVwQWxpdmVcIiBpbiBodHRwQWdlbnQpIHtcbiAgICAgICAgc2V0U29ja2V0S2VlcEFsaXZlKHJlcSwge1xuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3Iga2VlcEFsaXZlIGlzIG5vdCBwdWJsaWMgb24gaHR0cEFnZW50LlxuICAgICAgICAgIGtlZXBBbGl2ZTogaHR0cEFnZW50LmtlZXBBbGl2ZSxcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGtlZXBBbGl2ZU1zZWNzIGlzIG5vdCBwdWJsaWMgb24gaHR0cEFnZW50LlxuICAgICAgICAgIGtlZXBBbGl2ZU1zZWNzOiBodHRwQWdlbnQua2VlcEFsaXZlTXNlY3NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB3cml0ZVJlcXVlc3RCb2R5UHJvbWlzZSA9IHdyaXRlUmVxdWVzdEJvZHkocmVxLCByZXF1ZXN0LCB0aGlzLmNvbmZpZy5yZXF1ZXN0VGltZW91dCkuY2F0Y2goX3JlamVjdCk7XG4gICAgfSk7XG4gIH1cbiAgdXBkYXRlSHR0cENsaWVudENvbmZpZyhrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5jb25maWcgPSB2b2lkIDA7XG4gICAgdGhpcy5jb25maWdQcm92aWRlciA9IHRoaXMuY29uZmlnUHJvdmlkZXIudGhlbigoY29uZmlnKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb25maWcsXG4gICAgICAgIFtrZXldOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBodHRwSGFuZGxlckNvbmZpZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnID8/IHt9O1xuICB9XG59O1xuX19uYW1lKF9Ob2RlSHR0cEhhbmRsZXIsIFwiTm9kZUh0dHBIYW5kbGVyXCIpO1xudmFyIE5vZGVIdHRwSGFuZGxlciA9IF9Ob2RlSHR0cEhhbmRsZXI7XG5cbi8vIHNyYy9ub2RlLWh0dHAyLWhhbmRsZXIudHNcblxuXG52YXIgaW1wb3J0X2h0dHAyMiA9IHJlcXVpcmUoXCJodHRwMlwiKTtcblxuLy8gc3JjL25vZGUtaHR0cDItY29ubmVjdGlvbi1tYW5hZ2VyLnRzXG52YXIgaW1wb3J0X2h0dHAyID0gX190b0VTTShyZXF1aXJlKFwiaHR0cDJcIikpO1xuXG4vLyBzcmMvbm9kZS1odHRwMi1jb25uZWN0aW9uLXBvb2wudHNcbnZhciBfTm9kZUh0dHAyQ29ubmVjdGlvblBvb2wgPSBjbGFzcyBfTm9kZUh0dHAyQ29ubmVjdGlvblBvb2wge1xuICBjb25zdHJ1Y3RvcihzZXNzaW9ucykge1xuICAgIHRoaXMuc2Vzc2lvbnMgPSBbXTtcbiAgICB0aGlzLnNlc3Npb25zID0gc2Vzc2lvbnMgPz8gW107XG4gIH1cbiAgcG9sbCgpIHtcbiAgICBpZiAodGhpcy5zZXNzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXNzaW9ucy5zaGlmdCgpO1xuICAgIH1cbiAgfVxuICBvZmZlckxhc3Qoc2Vzc2lvbikge1xuICAgIHRoaXMuc2Vzc2lvbnMucHVzaChzZXNzaW9uKTtcbiAgfVxuICBjb250YWlucyhzZXNzaW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvbnMuaW5jbHVkZXMoc2Vzc2lvbik7XG4gIH1cbiAgcmVtb3ZlKHNlc3Npb24pIHtcbiAgICB0aGlzLnNlc3Npb25zID0gdGhpcy5zZXNzaW9ucy5maWx0ZXIoKHMpID0+IHMgIT09IHNlc3Npb24pO1xuICB9XG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25zW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgfVxuICBkZXN0cm95KGNvbm5lY3Rpb24pIHtcbiAgICBmb3IgKGNvbnN0IHNlc3Npb24gb2YgdGhpcy5zZXNzaW9ucykge1xuICAgICAgaWYgKHNlc3Npb24gPT09IGNvbm5lY3Rpb24pIHtcbiAgICAgICAgaWYgKCFzZXNzaW9uLmRlc3Ryb3llZCkge1xuICAgICAgICAgIHNlc3Npb24uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuX19uYW1lKF9Ob2RlSHR0cDJDb25uZWN0aW9uUG9vbCwgXCJOb2RlSHR0cDJDb25uZWN0aW9uUG9vbFwiKTtcbnZhciBOb2RlSHR0cDJDb25uZWN0aW9uUG9vbCA9IF9Ob2RlSHR0cDJDb25uZWN0aW9uUG9vbDtcblxuLy8gc3JjL25vZGUtaHR0cDItY29ubmVjdGlvbi1tYW5hZ2VyLnRzXG52YXIgX05vZGVIdHRwMkNvbm5lY3Rpb25NYW5hZ2VyID0gY2xhc3MgX05vZGVIdHRwMkNvbm5lY3Rpb25NYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5zZXNzaW9uQ2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIGlmICh0aGlzLmNvbmZpZy5tYXhDb25jdXJyZW5jeSAmJiB0aGlzLmNvbmZpZy5tYXhDb25jdXJyZW5jeSA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIm1heENvbmN1cnJlbmN5IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICAgIH1cbiAgfVxuICBsZWFzZShyZXF1ZXN0Q29udGV4dCwgY29ubmVjdGlvbkNvbmZpZ3VyYXRpb24pIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybFN0cmluZyhyZXF1ZXN0Q29udGV4dCk7XG4gICAgY29uc3QgZXhpc3RpbmdQb29sID0gdGhpcy5zZXNzaW9uQ2FjaGUuZ2V0KHVybCk7XG4gICAgaWYgKGV4aXN0aW5nUG9vbCkge1xuICAgICAgY29uc3QgZXhpc3RpbmdTZXNzaW9uID0gZXhpc3RpbmdQb29sLnBvbGwoKTtcbiAgICAgIGlmIChleGlzdGluZ1Nlc3Npb24gJiYgIXRoaXMuY29uZmlnLmRpc2FibGVDb25jdXJyZW5jeSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdTZXNzaW9uO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzZXNzaW9uID0gaW1wb3J0X2h0dHAyLmRlZmF1bHQuY29ubmVjdCh1cmwpO1xuICAgIGlmICh0aGlzLmNvbmZpZy5tYXhDb25jdXJyZW5jeSkge1xuICAgICAgc2Vzc2lvbi5zZXR0aW5ncyh7IG1heENvbmN1cnJlbnRTdHJlYW1zOiB0aGlzLmNvbmZpZy5tYXhDb25jdXJyZW5jeSB9LCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIkZhaWwgdG8gc2V0IG1heENvbmN1cnJlbnRTdHJlYW1zIHRvIFwiICsgdGhpcy5jb25maWcubWF4Q29uY3VycmVuY3kgKyBcIndoZW4gY3JlYXRpbmcgbmV3IHNlc3Npb24gZm9yIFwiICsgcmVxdWVzdENvbnRleHQuZGVzdGluYXRpb24udG9TdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZXNzaW9uLnVucmVmKCk7XG4gICAgY29uc3QgZGVzdHJveVNlc3Npb25DYiA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKCkgPT4ge1xuICAgICAgc2Vzc2lvbi5kZXN0cm95KCk7XG4gICAgICB0aGlzLmRlbGV0ZVNlc3Npb24odXJsLCBzZXNzaW9uKTtcbiAgICB9LCBcImRlc3Ryb3lTZXNzaW9uQ2JcIik7XG4gICAgc2Vzc2lvbi5vbihcImdvYXdheVwiLCBkZXN0cm95U2Vzc2lvbkNiKTtcbiAgICBzZXNzaW9uLm9uKFwiZXJyb3JcIiwgZGVzdHJveVNlc3Npb25DYik7XG4gICAgc2Vzc2lvbi5vbihcImZyYW1lRXJyb3JcIiwgZGVzdHJveVNlc3Npb25DYik7XG4gICAgc2Vzc2lvbi5vbihcImNsb3NlXCIsICgpID0+IHRoaXMuZGVsZXRlU2Vzc2lvbih1cmwsIHNlc3Npb24pKTtcbiAgICBpZiAoY29ubmVjdGlvbkNvbmZpZ3VyYXRpb24ucmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgIHNlc3Npb24uc2V0VGltZW91dChjb25uZWN0aW9uQ29uZmlndXJhdGlvbi5yZXF1ZXN0VGltZW91dCwgZGVzdHJveVNlc3Npb25DYik7XG4gICAgfVxuICAgIGNvbnN0IGNvbm5lY3Rpb25Qb29sID0gdGhpcy5zZXNzaW9uQ2FjaGUuZ2V0KHVybCkgfHwgbmV3IE5vZGVIdHRwMkNvbm5lY3Rpb25Qb29sKCk7XG4gICAgY29ubmVjdGlvblBvb2wub2ZmZXJMYXN0KHNlc3Npb24pO1xuICAgIHRoaXMuc2Vzc2lvbkNhY2hlLnNldCh1cmwsIGNvbm5lY3Rpb25Qb29sKTtcbiAgICByZXR1cm4gc2Vzc2lvbjtcbiAgfVxuICAvKipcbiAgICogRGVsZXRlIGEgc2Vzc2lvbiBmcm9tIHRoZSBjb25uZWN0aW9uIHBvb2wuXG4gICAqIEBwYXJhbSBhdXRob3JpdHkgVGhlIGF1dGhvcml0eSBvZiB0aGUgc2Vzc2lvbiB0byBkZWxldGUuXG4gICAqIEBwYXJhbSBzZXNzaW9uIFRoZSBzZXNzaW9uIHRvIGRlbGV0ZS5cbiAgICovXG4gIGRlbGV0ZVNlc3Npb24oYXV0aG9yaXR5LCBzZXNzaW9uKSB7XG4gICAgY29uc3QgZXhpc3RpbmdDb25uZWN0aW9uUG9vbCA9IHRoaXMuc2Vzc2lvbkNhY2hlLmdldChhdXRob3JpdHkpO1xuICAgIGlmICghZXhpc3RpbmdDb25uZWN0aW9uUG9vbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWV4aXN0aW5nQ29ubmVjdGlvblBvb2wuY29udGFpbnMoc2Vzc2lvbikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXhpc3RpbmdDb25uZWN0aW9uUG9vbC5yZW1vdmUoc2Vzc2lvbik7XG4gICAgdGhpcy5zZXNzaW9uQ2FjaGUuc2V0KGF1dGhvcml0eSwgZXhpc3RpbmdDb25uZWN0aW9uUG9vbCk7XG4gIH1cbiAgcmVsZWFzZShyZXF1ZXN0Q29udGV4dCwgc2Vzc2lvbikge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBjYWNoZUtleSA9IHRoaXMuZ2V0VXJsU3RyaW5nKHJlcXVlc3RDb250ZXh0KTtcbiAgICAoX2EgPSB0aGlzLnNlc3Npb25DYWNoZS5nZXQoY2FjaGVLZXkpKSA9PSBudWxsID8gdm9pZCAwIDogX2Eub2ZmZXJMYXN0KHNlc3Npb24pO1xuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCBjb25uZWN0aW9uUG9vbF0gb2YgdGhpcy5zZXNzaW9uQ2FjaGUpIHtcbiAgICAgIGZvciAoY29uc3Qgc2Vzc2lvbiBvZiBjb25uZWN0aW9uUG9vbCkge1xuICAgICAgICBpZiAoIXNlc3Npb24uZGVzdHJveWVkKSB7XG4gICAgICAgICAgc2Vzc2lvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGlvblBvb2wucmVtb3ZlKHNlc3Npb24pO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXNzaW9uQ2FjaGUuZGVsZXRlKGtleSk7XG4gICAgfVxuICB9XG4gIHNldE1heENvbmN1cnJlbnRTdHJlYW1zKG1heENvbmN1cnJlbnRTdHJlYW1zKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLm1heENvbmN1cnJlbmN5ICYmIHRoaXMuY29uZmlnLm1heENvbmN1cnJlbmN5IDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwibWF4Q29uY3VycmVudFN0cmVhbXMgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gICAgfVxuICAgIHRoaXMuY29uZmlnLm1heENvbmN1cnJlbmN5ID0gbWF4Q29uY3VycmVudFN0cmVhbXM7XG4gIH1cbiAgc2V0RGlzYWJsZUNvbmN1cnJlbnRTdHJlYW1zKGRpc2FibGVDb25jdXJyZW50U3RyZWFtcykge1xuICAgIHRoaXMuY29uZmlnLmRpc2FibGVDb25jdXJyZW5jeSA9IGRpc2FibGVDb25jdXJyZW50U3RyZWFtcztcbiAgfVxuICBnZXRVcmxTdHJpbmcocmVxdWVzdCkge1xuICAgIHJldHVybiByZXF1ZXN0LmRlc3RpbmF0aW9uLnRvU3RyaW5nKCk7XG4gIH1cbn07XG5fX25hbWUoX05vZGVIdHRwMkNvbm5lY3Rpb25NYW5hZ2VyLCBcIk5vZGVIdHRwMkNvbm5lY3Rpb25NYW5hZ2VyXCIpO1xudmFyIE5vZGVIdHRwMkNvbm5lY3Rpb25NYW5hZ2VyID0gX05vZGVIdHRwMkNvbm5lY3Rpb25NYW5hZ2VyO1xuXG4vLyBzcmMvbm9kZS1odHRwMi1oYW5kbGVyLnRzXG52YXIgX05vZGVIdHRwMkhhbmRsZXIgPSBjbGFzcyBfTm9kZUh0dHAySGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLm1ldGFkYXRhID0geyBoYW5kbGVyUHJvdG9jb2w6IFwiaDJcIiB9O1xuICAgIHRoaXMuY29ubmVjdGlvbk1hbmFnZXIgPSBuZXcgTm9kZUh0dHAyQ29ubmVjdGlvbk1hbmFnZXIoe30pO1xuICAgIHRoaXMuY29uZmlnUHJvdmlkZXIgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvcHRpb25zKCkudGhlbigob3B0cykgPT4ge1xuICAgICAgICAgIHJlc29sdmUob3B0cyB8fCB7fSk7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKG9wdGlvbnMgfHwge30pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBAcmV0dXJucyB0aGUgaW5wdXQgaWYgaXQgaXMgYW4gSHR0cEhhbmRsZXIgb2YgYW55IGNsYXNzLFxuICAgKiBvciBpbnN0YW50aWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBoYW5kbGVyLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShpbnN0YW5jZU9yT3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgKGluc3RhbmNlT3JPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBpbnN0YW5jZU9yT3B0aW9ucy5oYW5kbGUpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZU9yT3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBfTm9kZUh0dHAySGFuZGxlcihpbnN0YW5jZU9yT3B0aW9ucyk7XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyLmRlc3Ryb3koKTtcbiAgfVxuICBhc3luYyBoYW5kbGUocmVxdWVzdCwgeyBhYm9ydFNpZ25hbCB9ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IGF3YWl0IHRoaXMuY29uZmlnUHJvdmlkZXI7XG4gICAgICB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyLnNldERpc2FibGVDb25jdXJyZW50U3RyZWFtcyh0aGlzLmNvbmZpZy5kaXNhYmxlQ29uY3VycmVudFN0cmVhbXMgfHwgZmFsc2UpO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLm1heENvbmN1cnJlbnRTdHJlYW1zKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbk1hbmFnZXIuc2V0TWF4Q29uY3VycmVudFN0cmVhbXModGhpcy5jb25maWcubWF4Q29uY3VycmVudFN0cmVhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB7IHJlcXVlc3RUaW1lb3V0LCBkaXNhYmxlQ29uY3VycmVudFN0cmVhbXMgfSA9IHRoaXMuY29uZmlnO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGxldCBmdWxmaWxsZWQgPSBmYWxzZTtcbiAgICAgIGxldCB3cml0ZVJlcXVlc3RCb2R5UHJvbWlzZSA9IHZvaWQgMDtcbiAgICAgIGNvbnN0IHJlc29sdmUgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKGFzeW5jIChhcmcpID0+IHtcbiAgICAgICAgYXdhaXQgd3JpdGVSZXF1ZXN0Qm9keVByb21pc2U7XG4gICAgICAgIF9yZXNvbHZlKGFyZyk7XG4gICAgICB9LCBcInJlc29sdmVcIik7XG4gICAgICBjb25zdCByZWplY3QgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKGFzeW5jIChhcmcpID0+IHtcbiAgICAgICAgYXdhaXQgd3JpdGVSZXF1ZXN0Qm9keVByb21pc2U7XG4gICAgICAgIF9yZWplY3QoYXJnKTtcbiAgICAgIH0sIFwicmVqZWN0XCIpO1xuICAgICAgaWYgKGFib3J0U2lnbmFsID09IG51bGwgPyB2b2lkIDAgOiBhYm9ydFNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgIGZ1bGZpbGxlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIik7XG4gICAgICAgIGFib3J0RXJyb3IubmFtZSA9IFwiQWJvcnRFcnJvclwiO1xuICAgICAgICByZWplY3QoYWJvcnRFcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgaG9zdG5hbWUsIG1ldGhvZCwgcG9ydCwgcHJvdG9jb2wsIHF1ZXJ5IH0gPSByZXF1ZXN0O1xuICAgICAgbGV0IGF1dGggPSBcIlwiO1xuICAgICAgaWYgKHJlcXVlc3QudXNlcm5hbWUgIT0gbnVsbCB8fCByZXF1ZXN0LnBhc3N3b3JkICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSByZXF1ZXN0LnVzZXJuYW1lID8/IFwiXCI7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gcmVxdWVzdC5wYXNzd29yZCA/PyBcIlwiO1xuICAgICAgICBhdXRoID0gYCR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9QGA7XG4gICAgICB9XG4gICAgICBjb25zdCBhdXRob3JpdHkgPSBgJHtwcm90b2NvbH0vLyR7YXV0aH0ke2hvc3RuYW1lfSR7cG9ydCA/IGA6JHtwb3J0fWAgOiBcIlwifWA7XG4gICAgICBjb25zdCByZXF1ZXN0Q29udGV4dCA9IHsgZGVzdGluYXRpb246IG5ldyBVUkwoYXV0aG9yaXR5KSB9O1xuICAgICAgY29uc3Qgc2Vzc2lvbiA9IHRoaXMuY29ubmVjdGlvbk1hbmFnZXIubGVhc2UocmVxdWVzdENvbnRleHQsIHtcbiAgICAgICAgcmVxdWVzdFRpbWVvdXQ6IChfYSA9IHRoaXMuY29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogX2Euc2Vzc2lvblRpbWVvdXQsXG4gICAgICAgIGRpc2FibGVDb25jdXJyZW50U3RyZWFtczogZGlzYWJsZUNvbmN1cnJlbnRTdHJlYW1zIHx8IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlamVjdFdpdGhEZXN0cm95ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoZXJyKSA9PiB7XG4gICAgICAgIGlmIChkaXNhYmxlQ29uY3VycmVudFN0cmVhbXMpIHtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bGZpbGxlZCA9IHRydWU7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSwgXCJyZWplY3RXaXRoRGVzdHJveVwiKTtcbiAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gKDAsIGltcG9ydF9xdWVyeXN0cmluZ19idWlsZGVyLmJ1aWxkUXVlcnlTdHJpbmcpKHF1ZXJ5IHx8IHt9KTtcbiAgICAgIGxldCBwYXRoID0gcmVxdWVzdC5wYXRoO1xuICAgICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHBhdGggKz0gYD8ke3F1ZXJ5U3RyaW5nfWA7XG4gICAgICB9XG4gICAgICBpZiAocmVxdWVzdC5mcmFnbWVudCkge1xuICAgICAgICBwYXRoICs9IGAjJHtyZXF1ZXN0LmZyYWdtZW50fWA7XG4gICAgICB9XG4gICAgICBjb25zdCByZXEgPSBzZXNzaW9uLnJlcXVlc3Qoe1xuICAgICAgICAuLi5yZXF1ZXN0LmhlYWRlcnMsXG4gICAgICAgIFtpbXBvcnRfaHR0cDIyLmNvbnN0YW50cy5IVFRQMl9IRUFERVJfUEFUSF06IHBhdGgsXG4gICAgICAgIFtpbXBvcnRfaHR0cDIyLmNvbnN0YW50cy5IVFRQMl9IRUFERVJfTUVUSE9EXTogbWV0aG9kXG4gICAgICB9KTtcbiAgICAgIHNlc3Npb24ucmVmKCk7XG4gICAgICByZXEub24oXCJyZXNwb25zZVwiLCAoaGVhZGVycykgPT4ge1xuICAgICAgICBjb25zdCBodHRwUmVzcG9uc2UgPSBuZXcgaW1wb3J0X3Byb3RvY29sX2h0dHAuSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiBoZWFkZXJzW1wiOnN0YXR1c1wiXSB8fCAtMSxcbiAgICAgICAgICBoZWFkZXJzOiBnZXRUcmFuc2Zvcm1lZEhlYWRlcnMoaGVhZGVycyksXG4gICAgICAgICAgYm9keTogcmVxXG4gICAgICAgIH0pO1xuICAgICAgICBmdWxmaWxsZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKHsgcmVzcG9uc2U6IGh0dHBSZXNwb25zZSB9KTtcbiAgICAgICAgaWYgKGRpc2FibGVDb25jdXJyZW50U3RyZWFtcykge1xuICAgICAgICAgIHNlc3Npb24uY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyLmRlbGV0ZVNlc3Npb24oYXV0aG9yaXR5LCBzZXNzaW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgICAgcmVxLnNldFRpbWVvdXQocmVxdWVzdFRpbWVvdXQsICgpID0+IHtcbiAgICAgICAgICByZXEuY2xvc2UoKTtcbiAgICAgICAgICBjb25zdCB0aW1lb3V0RXJyb3IgPSBuZXcgRXJyb3IoYFN0cmVhbSB0aW1lZCBvdXQgYmVjYXVzZSBvZiBubyBhY3Rpdml0eSBmb3IgJHtyZXF1ZXN0VGltZW91dH0gbXNgKTtcbiAgICAgICAgICB0aW1lb3V0RXJyb3IubmFtZSA9IFwiVGltZW91dEVycm9yXCI7XG4gICAgICAgICAgcmVqZWN0V2l0aERlc3Ryb3kodGltZW91dEVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYWJvcnRTaWduYWwpIHtcbiAgICAgICAgYWJvcnRTaWduYWwub25hYm9ydCA9ICgpID0+IHtcbiAgICAgICAgICByZXEuY2xvc2UoKTtcbiAgICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIpO1xuICAgICAgICAgIGFib3J0RXJyb3IubmFtZSA9IFwiQWJvcnRFcnJvclwiO1xuICAgICAgICAgIHJlamVjdFdpdGhEZXN0cm95KGFib3J0RXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmVxLm9uKFwiZnJhbWVFcnJvclwiLCAodHlwZSwgY29kZSwgaWQpID0+IHtcbiAgICAgICAgcmVqZWN0V2l0aERlc3Ryb3kobmV3IEVycm9yKGBGcmFtZSB0eXBlIGlkICR7dHlwZX0gaW4gc3RyZWFtIGlkICR7aWR9IGhhcyBmYWlsZWQgd2l0aCBjb2RlICR7Y29kZX0uYCkpO1xuICAgICAgfSk7XG4gICAgICByZXEub24oXCJlcnJvclwiLCByZWplY3RXaXRoRGVzdHJveSk7XG4gICAgICByZXEub24oXCJhYm9ydGVkXCIsICgpID0+IHtcbiAgICAgICAgcmVqZWN0V2l0aERlc3Ryb3koXG4gICAgICAgICAgbmV3IEVycm9yKGBIVFRQLzIgc3RyZWFtIGlzIGFibm9ybWFsbHkgYWJvcnRlZCBpbiBtaWQtY29tbXVuaWNhdGlvbiB3aXRoIHJlc3VsdCBjb2RlICR7cmVxLnJzdENvZGV9LmApXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHJlcS5vbihcImNsb3NlXCIsICgpID0+IHtcbiAgICAgICAgc2Vzc2lvbi51bnJlZigpO1xuICAgICAgICBpZiAoZGlzYWJsZUNvbmN1cnJlbnRTdHJlYW1zKSB7XG4gICAgICAgICAgc2Vzc2lvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmdWxmaWxsZWQpIHtcbiAgICAgICAgICByZWplY3RXaXRoRGVzdHJveShuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOiBodHRwMiByZXF1ZXN0IGRpZCBub3QgZ2V0IGEgcmVzcG9uc2VcIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdyaXRlUmVxdWVzdEJvZHlQcm9taXNlID0gd3JpdGVSZXF1ZXN0Qm9keShyZXEsIHJlcXVlc3QsIHJlcXVlc3RUaW1lb3V0KTtcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVIdHRwQ2xpZW50Q29uZmlnKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHZvaWQgMDtcbiAgICB0aGlzLmNvbmZpZ1Byb3ZpZGVyID0gdGhpcy5jb25maWdQcm92aWRlci50aGVuKChjb25maWcpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgW2tleV06IHZhbHVlXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIGh0dHBIYW5kbGVyQ29uZmlncygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcgPz8ge307XG4gIH1cbiAgLyoqXG4gICAqIERlc3Ryb3lzIGEgc2Vzc2lvbi5cbiAgICogQHBhcmFtIHNlc3Npb24gVGhlIHNlc3Npb24gdG8gZGVzdHJveS5cbiAgICovXG4gIGRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pIHtcbiAgICBpZiAoIXNlc3Npb24uZGVzdHJveWVkKSB7XG4gICAgICBzZXNzaW9uLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn07XG5fX25hbWUoX05vZGVIdHRwMkhhbmRsZXIsIFwiTm9kZUh0dHAySGFuZGxlclwiKTtcbnZhciBOb2RlSHR0cDJIYW5kbGVyID0gX05vZGVIdHRwMkhhbmRsZXI7XG5cbi8vIHNyYy9zdHJlYW0tY29sbGVjdG9yL2NvbGxlY3Rvci50c1xuXG52YXIgX0NvbGxlY3RvciA9IGNsYXNzIF9Db2xsZWN0b3IgZXh0ZW5kcyBpbXBvcnRfc3RyZWFtLldyaXRhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLmJ1ZmZlcmVkQnl0ZXMgPSBbXTtcbiAgfVxuICBfd3JpdGUoY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICAgIHRoaXMuYnVmZmVyZWRCeXRlcy5wdXNoKGNodW5rKTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59O1xuX19uYW1lKF9Db2xsZWN0b3IsIFwiQ29sbGVjdG9yXCIpO1xudmFyIENvbGxlY3RvciA9IF9Db2xsZWN0b3I7XG5cbi8vIHNyYy9zdHJlYW0tY29sbGVjdG9yL2luZGV4LnRzXG52YXIgc3RyZWFtQ29sbGVjdG9yID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoc3RyZWFtKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGNvbnN0IGNvbGxlY3RvciA9IG5ldyBDb2xsZWN0b3IoKTtcbiAgc3RyZWFtLnBpcGUoY29sbGVjdG9yKTtcbiAgc3RyZWFtLm9uKFwiZXJyb3JcIiwgKGVycikgPT4ge1xuICAgIGNvbGxlY3Rvci5lbmQoKTtcbiAgICByZWplY3QoZXJyKTtcbiAgfSk7XG4gIGNvbGxlY3Rvci5vbihcImVycm9yXCIsIHJlamVjdCk7XG4gIGNvbGxlY3Rvci5vbihcImZpbmlzaFwiLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KEJ1ZmZlci5jb25jYXQodGhpcy5idWZmZXJlZEJ5dGVzKSk7XG4gICAgcmVzb2x2ZShieXRlcyk7XG4gIH0pO1xufSksIFwic3RyZWFtQ29sbGVjdG9yXCIpO1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuXG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgREVGQVVMVF9SRVFVRVNUX1RJTUVPVVQsXG4gIE5vZGVIdHRwSGFuZGxlcixcbiAgTm9kZUh0dHAySGFuZGxlcixcbiAgc3RyZWFtQ29sbGVjdG9yXG59KTtcblxuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZGtTdHJlYW1NaXhpbiA9IHZvaWQgMDtcbmNvbnN0IG5vZGVfaHR0cF9oYW5kbGVyXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9ub2RlLWh0dHAtaGFuZGxlclwiKTtcbmNvbnN0IHV0aWxfYnVmZmVyX2Zyb21fMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtYnVmZmVyLWZyb21cIik7XG5jb25zdCBzdHJlYW1fMSA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwidXRpbFwiKTtcbmNvbnN0IEVSUl9NU0dfU1RSRUFNX0hBU19CRUVOX1RSQU5TRk9STUVEID0gXCJUaGUgc3RyZWFtIGhhcyBhbHJlYWR5IGJlZW4gdHJhbnNmb3JtZWQuXCI7XG5jb25zdCBzZGtTdHJlYW1NaXhpbiA9IChzdHJlYW0pID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmICghKHN0cmVhbSBpbnN0YW5jZW9mIHN0cmVhbV8xLlJlYWRhYmxlKSkge1xuICAgICAgICBjb25zdCBuYW1lID0gKChfYiA9IChfYSA9IHN0cmVhbSA9PT0gbnVsbCB8fCBzdHJlYW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0cmVhbS5fX3Byb3RvX18pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb25zdHJ1Y3RvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm5hbWUpIHx8IHN0cmVhbTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHN0cmVhbSBpbXBsZW1lbnRhdGlvbiwgZXhwZWN0IFN0cmVhbS5SZWFkYWJsZSBpbnN0YW5jZSwgZ290ICR7bmFtZX1gKTtcbiAgICB9XG4gICAgbGV0IHRyYW5zZm9ybWVkID0gZmFsc2U7XG4gICAgY29uc3QgdHJhbnNmb3JtVG9CeXRlQXJyYXkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUl9NU0dfU1RSRUFNX0hBU19CRUVOX1RSQU5TRk9STUVEKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBhd2FpdCAoMCwgbm9kZV9odHRwX2hhbmRsZXJfMS5zdHJlYW1Db2xsZWN0b3IpKHN0cmVhbSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzdHJlYW0sIHtcbiAgICAgICAgdHJhbnNmb3JtVG9CeXRlQXJyYXksXG4gICAgICAgIHRyYW5zZm9ybVRvU3RyaW5nOiBhc3luYyAoZW5jb2RpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZiA9IGF3YWl0IHRyYW5zZm9ybVRvQnl0ZUFycmF5KCk7XG4gICAgICAgICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCB8fCBCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIHV0aWxfYnVmZmVyX2Zyb21fMS5mcm9tQXJyYXlCdWZmZXIpKGJ1Zi5idWZmZXIsIGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZUxlbmd0aCkudG9TdHJpbmcoZW5jb2RpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlciA9IG5ldyB1dGlsXzEuVGV4dERlY29kZXIoZW5jb2RpbmcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVyLmRlY29kZShidWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0cmFuc2Zvcm1Ub1dlYlN0cmVhbTogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybWVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUl9NU0dfU1RSRUFNX0hBU19CRUVOX1RSQU5TRk9STUVEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdHJlYW0ucmVhZGFibGVGbG93aW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0cmVhbSBoYXMgYmVlbiBjb25zdW1lZCBieSBvdGhlciBjYWxsYmFja3MuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHJlYW1fMS5SZWFkYWJsZS50b1dlYiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhZGFibGUudG9XZWIoKSBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgbWFrZSBzdXJlIHlvdSBhcmUgdXNpbmcgTm9kZS5qcyA+PSAxNy4wLjAsIG9yIHBvbHlmaWxsIGlzIGF2YWlsYWJsZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gc3RyZWFtXzEuUmVhZGFibGUudG9XZWIoc3RyZWFtKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn07XG5leHBvcnRzLnNka1N0cmVhbU1peGluID0gc2RrU3RyZWFtTWl4aW47XG4iLCAidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX19yZUV4cG9ydCA9ICh0YXJnZXQsIG1vZCwgc2Vjb25kVGFyZ2V0KSA9PiAoX19jb3B5UHJvcHModGFyZ2V0LCBtb2QsIFwiZGVmYXVsdFwiKSwgc2Vjb25kVGFyZ2V0ICYmIF9fY29weVByb3BzKHNlY29uZFRhcmdldCwgbW9kLCBcImRlZmF1bHRcIikpO1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIHNyY19leHBvcnRzID0ge307XG5fX2V4cG9ydChzcmNfZXhwb3J0cywge1xuICBVaW50OEFycmF5QmxvYkFkYXB0ZXI6ICgpID0+IFVpbnQ4QXJyYXlCbG9iQWRhcHRlclxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhzcmNfZXhwb3J0cyk7XG5cbi8vIHNyYy9ibG9iL3RyYW5zZm9ybXMudHNcbnZhciBpbXBvcnRfdXRpbF9iYXNlNjQgPSByZXF1aXJlKFwiQHNtaXRoeS91dGlsLWJhc2U2NFwiKTtcbnZhciBpbXBvcnRfdXRpbF91dGY4ID0gcmVxdWlyZShcIkBzbWl0aHkvdXRpbC11dGY4XCIpO1xuZnVuY3Rpb24gdHJhbnNmb3JtVG9TdHJpbmcocGF5bG9hZCwgZW5jb2RpbmcgPSBcInV0Zi04XCIpIHtcbiAgaWYgKGVuY29kaW5nID09PSBcImJhc2U2NFwiKSB7XG4gICAgcmV0dXJuICgwLCBpbXBvcnRfdXRpbF9iYXNlNjQudG9CYXNlNjQpKHBheWxvYWQpO1xuICB9XG4gIHJldHVybiAoMCwgaW1wb3J0X3V0aWxfdXRmOC50b1V0ZjgpKHBheWxvYWQpO1xufVxuX19uYW1lKHRyYW5zZm9ybVRvU3RyaW5nLCBcInRyYW5zZm9ybVRvU3RyaW5nXCIpO1xuZnVuY3Rpb24gdHJhbnNmb3JtRnJvbVN0cmluZyhzdHIsIGVuY29kaW5nKSB7XG4gIGlmIChlbmNvZGluZyA9PT0gXCJiYXNlNjRcIikge1xuICAgIHJldHVybiBVaW50OEFycmF5QmxvYkFkYXB0ZXIubXV0YXRlKCgwLCBpbXBvcnRfdXRpbF9iYXNlNjQuZnJvbUJhc2U2NCkoc3RyKSk7XG4gIH1cbiAgcmV0dXJuIFVpbnQ4QXJyYXlCbG9iQWRhcHRlci5tdXRhdGUoKDAsIGltcG9ydF91dGlsX3V0ZjguZnJvbVV0ZjgpKHN0cikpO1xufVxuX19uYW1lKHRyYW5zZm9ybUZyb21TdHJpbmcsIFwidHJhbnNmb3JtRnJvbVN0cmluZ1wiKTtcblxuLy8gc3JjL2Jsb2IvVWludDhBcnJheUJsb2JBZGFwdGVyLnRzXG52YXIgX1VpbnQ4QXJyYXlCbG9iQWRhcHRlciA9IGNsYXNzIF9VaW50OEFycmF5QmxvYkFkYXB0ZXIgZXh0ZW5kcyBVaW50OEFycmF5IHtcbiAgLyoqXG4gICAqIEBwYXJhbSBzb3VyY2UgLSBzdWNoIGFzIGEgc3RyaW5nIG9yIFN0cmVhbS5cbiAgICogQHJldHVybnMgYSBuZXcgVWludDhBcnJheUJsb2JBZGFwdGVyIGV4dGVuZGluZyBVaW50OEFycmF5LlxuICAgKi9cbiAgc3RhdGljIGZyb21TdHJpbmcoc291cmNlLCBlbmNvZGluZyA9IFwidXRmLThcIikge1xuICAgIHN3aXRjaCAodHlwZW9mIHNvdXJjZSkge1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtRnJvbVN0cmluZyhzb3VyY2UsIGVuY29kaW5nKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgY29udmVyc2lvbiBmcm9tICR7dHlwZW9mIHNvdXJjZX0gdG8gVWludDhBcnJheUJsb2JBZGFwdGVyLmApO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHNvdXJjZSAtIFVpbnQ4QXJyYXkgdG8gYmUgbXV0YXRlZC5cbiAgICogQHJldHVybnMgdGhlIHNhbWUgVWludDhBcnJheSBidXQgd2l0aCBwcm90b3R5cGUgc3dpdGNoZWQgdG8gVWludDhBcnJheUJsb2JBZGFwdGVyLlxuICAgKi9cbiAgc3RhdGljIG11dGF0ZShzb3VyY2UpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc291cmNlLCBfVWludDhBcnJheUJsb2JBZGFwdGVyLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIGVuY29kaW5nIC0gZGVmYXVsdCAndXRmLTgnLlxuICAgKiBAcmV0dXJucyB0aGUgYmxvYiBhcyBzdHJpbmcuXG4gICAqL1xuICB0cmFuc2Zvcm1Ub1N0cmluZyhlbmNvZGluZyA9IFwidXRmLThcIikge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Ub1N0cmluZyh0aGlzLCBlbmNvZGluZyk7XG4gIH1cbn07XG5fX25hbWUoX1VpbnQ4QXJyYXlCbG9iQWRhcHRlciwgXCJVaW50OEFycmF5QmxvYkFkYXB0ZXJcIik7XG52YXIgVWludDhBcnJheUJsb2JBZGFwdGVyID0gX1VpbnQ4QXJyYXlCbG9iQWRhcHRlcjtcblxuLy8gc3JjL2luZGV4LnRzXG5fX3JlRXhwb3J0KHNyY19leHBvcnRzLCByZXF1aXJlKFwiLi8uL2dldEF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbVwiKSwgbW9kdWxlLmV4cG9ydHMpO1xuX19yZUV4cG9ydChzcmNfZXhwb3J0cywgcmVxdWlyZShcIi4vLi9zZGstc3RyZWFtLW1peGluXCIpLCBtb2R1bGUuZXhwb3J0cyk7XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG5cbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBVaW50OEFycmF5QmxvYkFkYXB0ZXIsXG4gIGdldEF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbSxcbiAgc2RrU3RyZWFtTWl4aW5cbn0pO1xuXG4iLCAidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgc3JjX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KHNyY19leHBvcnRzLCB7XG4gIENsaWVudDogKCkgPT4gQ2xpZW50LFxuICBDb21tYW5kOiAoKSA9PiBDb21tYW5kLFxuICBMYXp5SnNvblN0cmluZzogKCkgPT4gTGF6eUpzb25TdHJpbmcsXG4gIE5vT3BMb2dnZXI6ICgpID0+IE5vT3BMb2dnZXIsXG4gIFNFTlNJVElWRV9TVFJJTkc6ICgpID0+IFNFTlNJVElWRV9TVFJJTkcsXG4gIFNlcnZpY2VFeGNlcHRpb246ICgpID0+IFNlcnZpY2VFeGNlcHRpb24sXG4gIFN0cmluZ1dyYXBwZXI6ICgpID0+IFN0cmluZ1dyYXBwZXIsXG4gIF9qc29uOiAoKSA9PiBfanNvbixcbiAgY29sbGVjdEJvZHk6ICgpID0+IGNvbGxlY3RCb2R5LFxuICBjb252ZXJ0TWFwOiAoKSA9PiBjb252ZXJ0TWFwLFxuICBjcmVhdGVBZ2dyZWdhdGVkQ2xpZW50OiAoKSA9PiBjcmVhdGVBZ2dyZWdhdGVkQ2xpZW50LFxuICBkYXRlVG9VdGNTdHJpbmc6ICgpID0+IGRhdGVUb1V0Y1N0cmluZyxcbiAgZGVjb3JhdGVTZXJ2aWNlRXhjZXB0aW9uOiAoKSA9PiBkZWNvcmF0ZVNlcnZpY2VFeGNlcHRpb24sXG4gIGVtaXRXYXJuaW5nSWZVbnN1cHBvcnRlZFZlcnNpb246ICgpID0+IGVtaXRXYXJuaW5nSWZVbnN1cHBvcnRlZFZlcnNpb24sXG4gIGV4cGVjdEJvb2xlYW46ICgpID0+IGV4cGVjdEJvb2xlYW4sXG4gIGV4cGVjdEJ5dGU6ICgpID0+IGV4cGVjdEJ5dGUsXG4gIGV4cGVjdEZsb2F0MzI6ICgpID0+IGV4cGVjdEZsb2F0MzIsXG4gIGV4cGVjdEludDogKCkgPT4gZXhwZWN0SW50LFxuICBleHBlY3RJbnQzMjogKCkgPT4gZXhwZWN0SW50MzIsXG4gIGV4cGVjdExvbmc6ICgpID0+IGV4cGVjdExvbmcsXG4gIGV4cGVjdE5vbk51bGw6ICgpID0+IGV4cGVjdE5vbk51bGwsXG4gIGV4cGVjdE51bWJlcjogKCkgPT4gZXhwZWN0TnVtYmVyLFxuICBleHBlY3RPYmplY3Q6ICgpID0+IGV4cGVjdE9iamVjdCxcbiAgZXhwZWN0U2hvcnQ6ICgpID0+IGV4cGVjdFNob3J0LFxuICBleHBlY3RTdHJpbmc6ICgpID0+IGV4cGVjdFN0cmluZyxcbiAgZXhwZWN0VW5pb246ICgpID0+IGV4cGVjdFVuaW9uLFxuICBleHRlbmRlZEVuY29kZVVSSUNvbXBvbmVudDogKCkgPT4gZXh0ZW5kZWRFbmNvZGVVUklDb21wb25lbnQsXG4gIGdldEFycmF5SWZTaW5nbGVJdGVtOiAoKSA9PiBnZXRBcnJheUlmU2luZ2xlSXRlbSxcbiAgZ2V0RGVmYXVsdENsaWVudENvbmZpZ3VyYXRpb246ICgpID0+IGdldERlZmF1bHRDbGllbnRDb25maWd1cmF0aW9uLFxuICBnZXREZWZhdWx0RXh0ZW5zaW9uQ29uZmlndXJhdGlvbjogKCkgPT4gZ2V0RGVmYXVsdEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24sXG4gIGdldFZhbHVlRnJvbVRleHROb2RlOiAoKSA9PiBnZXRWYWx1ZUZyb21UZXh0Tm9kZSxcbiAgaGFuZGxlRmxvYXQ6ICgpID0+IGhhbmRsZUZsb2F0LFxuICBsaW1pdGVkUGFyc2VEb3VibGU6ICgpID0+IGxpbWl0ZWRQYXJzZURvdWJsZSxcbiAgbGltaXRlZFBhcnNlRmxvYXQ6ICgpID0+IGxpbWl0ZWRQYXJzZUZsb2F0LFxuICBsaW1pdGVkUGFyc2VGbG9hdDMyOiAoKSA9PiBsaW1pdGVkUGFyc2VGbG9hdDMyLFxuICBsb2FkQ29uZmlnc0ZvckRlZmF1bHRNb2RlOiAoKSA9PiBsb2FkQ29uZmlnc0ZvckRlZmF1bHRNb2RlLFxuICBsb2dnZXI6ICgpID0+IGxvZ2dlcixcbiAgbWFwOiAoKSA9PiBtYXAsXG4gIHBhcnNlQm9vbGVhbjogKCkgPT4gcGFyc2VCb29sZWFuLFxuICBwYXJzZUVwb2NoVGltZXN0YW1wOiAoKSA9PiBwYXJzZUVwb2NoVGltZXN0YW1wLFxuICBwYXJzZVJmYzMzMzlEYXRlVGltZTogKCkgPT4gcGFyc2VSZmMzMzM5RGF0ZVRpbWUsXG4gIHBhcnNlUmZjMzMzOURhdGVUaW1lV2l0aE9mZnNldDogKCkgPT4gcGFyc2VSZmMzMzM5RGF0ZVRpbWVXaXRoT2Zmc2V0LFxuICBwYXJzZVJmYzcyMzFEYXRlVGltZTogKCkgPT4gcGFyc2VSZmM3MjMxRGF0ZVRpbWUsXG4gIHJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZzogKCkgPT4gcmVzb2x2ZURlZmF1bHRSdW50aW1lQ29uZmlnLFxuICByZXNvbHZlZFBhdGg6ICgpID0+IHJlc29sdmVkUGF0aCxcbiAgc2VyaWFsaXplRmxvYXQ6ICgpID0+IHNlcmlhbGl6ZUZsb2F0LFxuICBzcGxpdEV2ZXJ5OiAoKSA9PiBzcGxpdEV2ZXJ5LFxuICBzdHJpY3RQYXJzZUJ5dGU6ICgpID0+IHN0cmljdFBhcnNlQnl0ZSxcbiAgc3RyaWN0UGFyc2VEb3VibGU6ICgpID0+IHN0cmljdFBhcnNlRG91YmxlLFxuICBzdHJpY3RQYXJzZUZsb2F0OiAoKSA9PiBzdHJpY3RQYXJzZUZsb2F0LFxuICBzdHJpY3RQYXJzZUZsb2F0MzI6ICgpID0+IHN0cmljdFBhcnNlRmxvYXQzMixcbiAgc3RyaWN0UGFyc2VJbnQ6ICgpID0+IHN0cmljdFBhcnNlSW50LFxuICBzdHJpY3RQYXJzZUludDMyOiAoKSA9PiBzdHJpY3RQYXJzZUludDMyLFxuICBzdHJpY3RQYXJzZUxvbmc6ICgpID0+IHN0cmljdFBhcnNlTG9uZyxcbiAgc3RyaWN0UGFyc2VTaG9ydDogKCkgPT4gc3RyaWN0UGFyc2VTaG9ydCxcbiAgdGFrZTogKCkgPT4gdGFrZSxcbiAgdGhyb3dEZWZhdWx0RXJyb3I6ICgpID0+IHRocm93RGVmYXVsdEVycm9yLFxuICB3aXRoQmFzZUV4Y2VwdGlvbjogKCkgPT4gd2l0aEJhc2VFeGNlcHRpb25cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoc3JjX2V4cG9ydHMpO1xuXG4vLyBzcmMvTm9PcExvZ2dlci50c1xudmFyIF9Ob09wTG9nZ2VyID0gY2xhc3MgX05vT3BMb2dnZXIge1xuICB0cmFjZSgpIHtcbiAgfVxuICBkZWJ1ZygpIHtcbiAgfVxuICBpbmZvKCkge1xuICB9XG4gIHdhcm4oKSB7XG4gIH1cbiAgZXJyb3IoKSB7XG4gIH1cbn07XG5fX25hbWUoX05vT3BMb2dnZXIsIFwiTm9PcExvZ2dlclwiKTtcbnZhciBOb09wTG9nZ2VyID0gX05vT3BMb2dnZXI7XG5cbi8vIHNyYy9jbGllbnQudHNcbnZhciBpbXBvcnRfbWlkZGxld2FyZV9zdGFjayA9IHJlcXVpcmUoXCJAc21pdGh5L21pZGRsZXdhcmUtc3RhY2tcIik7XG52YXIgX0NsaWVudCA9IGNsYXNzIF9DbGllbnQge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLm1pZGRsZXdhcmVTdGFjayA9ICgwLCBpbXBvcnRfbWlkZGxld2FyZV9zdGFjay5jb25zdHJ1Y3RTdGFjaykoKTtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuICBzZW5kKGNvbW1hbmQsIG9wdGlvbnNPckNiLCBjYikge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uc09yQ2IgIT09IFwiZnVuY3Rpb25cIiA/IG9wdGlvbnNPckNiIDogdm9pZCAwO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdHlwZW9mIG9wdGlvbnNPckNiID09PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zT3JDYiA6IGNiO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBjb21tYW5kLnJlc29sdmVNaWRkbGV3YXJlKHRoaXMubWlkZGxld2FyZVN0YWNrLCB0aGlzLmNvbmZpZywgb3B0aW9ucyk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBoYW5kbGVyKGNvbW1hbmQpLnRoZW4oXG4gICAgICAgIChyZXN1bHQpID0+IGNhbGxiYWNrKG51bGwsIHJlc3VsdC5vdXRwdXQpLFxuICAgICAgICAoZXJyKSA9PiBjYWxsYmFjayhlcnIpXG4gICAgICApLmNhdGNoKFxuICAgICAgICAvLyBwcmV2ZW50IGFueSBlcnJvcnMgdGhyb3duIGluIHRoZSBjYWxsYmFjayBmcm9tIHRyaWdnZXJpbmcgYW5cbiAgICAgICAgLy8gdW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGhhbmRsZXIoY29tbWFuZCkudGhlbigocmVzdWx0KSA9PiByZXN1bHQub3V0cHV0KTtcbiAgICB9XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jb25maWcucmVxdWVzdEhhbmRsZXIuZGVzdHJveSlcbiAgICAgIHRoaXMuY29uZmlnLnJlcXVlc3RIYW5kbGVyLmRlc3Ryb3koKTtcbiAgfVxufTtcbl9fbmFtZShfQ2xpZW50LCBcIkNsaWVudFwiKTtcbnZhciBDbGllbnQgPSBfQ2xpZW50O1xuXG4vLyBzcmMvY29sbGVjdC1zdHJlYW0tYm9keS50c1xudmFyIGltcG9ydF91dGlsX3N0cmVhbSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtc3RyZWFtXCIpO1xudmFyIGNvbGxlY3RCb2R5ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZShhc3luYyAoc3RyZWFtQm9keSA9IG5ldyBVaW50OEFycmF5KCksIGNvbnRleHQpID0+IHtcbiAgaWYgKHN0cmVhbUJvZHkgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIGltcG9ydF91dGlsX3N0cmVhbS5VaW50OEFycmF5QmxvYkFkYXB0ZXIubXV0YXRlKHN0cmVhbUJvZHkpO1xuICB9XG4gIGlmICghc3RyZWFtQm9keSkge1xuICAgIHJldHVybiBpbXBvcnRfdXRpbF9zdHJlYW0uVWludDhBcnJheUJsb2JBZGFwdGVyLm11dGF0ZShuZXcgVWludDhBcnJheSgpKTtcbiAgfVxuICBjb25zdCBmcm9tQ29udGV4dCA9IGNvbnRleHQuc3RyZWFtQ29sbGVjdG9yKHN0cmVhbUJvZHkpO1xuICByZXR1cm4gaW1wb3J0X3V0aWxfc3RyZWFtLlVpbnQ4QXJyYXlCbG9iQWRhcHRlci5tdXRhdGUoYXdhaXQgZnJvbUNvbnRleHQpO1xufSwgXCJjb2xsZWN0Qm9keVwiKTtcblxuLy8gc3JjL2NvbW1hbmQudHNcblxudmFyIGltcG9ydF90eXBlcyA9IHJlcXVpcmUoXCJAc21pdGh5L3R5cGVzXCIpO1xudmFyIF9Db21tYW5kID0gY2xhc3MgX0NvbW1hbmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1pZGRsZXdhcmVTdGFjayA9ICgwLCBpbXBvcnRfbWlkZGxld2FyZV9zdGFjay5jb25zdHJ1Y3RTdGFjaykoKTtcbiAgfVxuICAvKipcbiAgICogRmFjdG9yeSBmb3IgQ29tbWFuZCBDbGFzc0J1aWxkZXIuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgc3RhdGljIGNsYXNzQnVpbGRlcigpIHtcbiAgICByZXR1cm4gbmV3IENsYXNzQnVpbGRlcigpO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHJlc29sdmVNaWRkbGV3YXJlV2l0aENvbnRleHQoY2xpZW50U3RhY2ssIGNvbmZpZ3VyYXRpb24sIG9wdGlvbnMsIHtcbiAgICBtaWRkbGV3YXJlRm4sXG4gICAgY2xpZW50TmFtZSxcbiAgICBjb21tYW5kTmFtZSxcbiAgICBpbnB1dEZpbHRlclNlbnNpdGl2ZUxvZyxcbiAgICBvdXRwdXRGaWx0ZXJTZW5zaXRpdmVMb2csXG4gICAgc21pdGh5Q29udGV4dCxcbiAgICBhZGRpdGlvbmFsQ29udGV4dCxcbiAgICBDb21tYW5kQ3RvclxuICB9KSB7XG4gICAgZm9yIChjb25zdCBtdyBvZiBtaWRkbGV3YXJlRm4uYmluZCh0aGlzKShDb21tYW5kQ3RvciwgY2xpZW50U3RhY2ssIGNvbmZpZ3VyYXRpb24sIG9wdGlvbnMpKSB7XG4gICAgICB0aGlzLm1pZGRsZXdhcmVTdGFjay51c2UobXcpO1xuICAgIH1cbiAgICBjb25zdCBzdGFjayA9IGNsaWVudFN0YWNrLmNvbmNhdCh0aGlzLm1pZGRsZXdhcmVTdGFjayk7XG4gICAgY29uc3QgeyBsb2dnZXI6IGxvZ2dlcjIgfSA9IGNvbmZpZ3VyYXRpb247XG4gICAgY29uc3QgaGFuZGxlckV4ZWN1dGlvbkNvbnRleHQgPSB7XG4gICAgICBsb2dnZXI6IGxvZ2dlcjIsXG4gICAgICBjbGllbnROYW1lLFxuICAgICAgY29tbWFuZE5hbWUsXG4gICAgICBpbnB1dEZpbHRlclNlbnNpdGl2ZUxvZyxcbiAgICAgIG91dHB1dEZpbHRlclNlbnNpdGl2ZUxvZyxcbiAgICAgIFtpbXBvcnRfdHlwZXMuU01JVEhZX0NPTlRFWFRfS0VZXToge1xuICAgICAgICAuLi5zbWl0aHlDb250ZXh0XG4gICAgICB9LFxuICAgICAgLi4uYWRkaXRpb25hbENvbnRleHRcbiAgICB9O1xuICAgIGNvbnN0IHsgcmVxdWVzdEhhbmRsZXIgfSA9IGNvbmZpZ3VyYXRpb247XG4gICAgcmV0dXJuIHN0YWNrLnJlc29sdmUoXG4gICAgICAocmVxdWVzdCkgPT4gcmVxdWVzdEhhbmRsZXIuaGFuZGxlKHJlcXVlc3QucmVxdWVzdCwgb3B0aW9ucyB8fCB7fSksXG4gICAgICBoYW5kbGVyRXhlY3V0aW9uQ29udGV4dFxuICAgICk7XG4gIH1cbn07XG5fX25hbWUoX0NvbW1hbmQsIFwiQ29tbWFuZFwiKTtcbnZhciBDb21tYW5kID0gX0NvbW1hbmQ7XG52YXIgX0NsYXNzQnVpbGRlciA9IGNsYXNzIF9DbGFzc0J1aWxkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9pbml0ID0gKCkgPT4ge1xuICAgIH07XG4gICAgdGhpcy5fZXAgPSB7fTtcbiAgICB0aGlzLl9taWRkbGV3YXJlRm4gPSAoKSA9PiBbXTtcbiAgICB0aGlzLl9jb21tYW5kTmFtZSA9IFwiXCI7XG4gICAgdGhpcy5fY2xpZW50TmFtZSA9IFwiXCI7XG4gICAgdGhpcy5fYWRkaXRpb25hbENvbnRleHQgPSB7fTtcbiAgICB0aGlzLl9zbWl0aHlDb250ZXh0ID0ge307XG4gICAgdGhpcy5faW5wdXRGaWx0ZXJTZW5zaXRpdmVMb2cgPSAoXykgPT4gXztcbiAgICB0aGlzLl9vdXRwdXRGaWx0ZXJTZW5zaXRpdmVMb2cgPSAoXykgPT4gXztcbiAgICB0aGlzLl9zZXJpYWxpemVyID0gbnVsbDtcbiAgICB0aGlzLl9kZXNlcmlhbGl6ZXIgPSBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBPcHRpb25hbCBpbml0IGNhbGxiYWNrLlxuICAgKi9cbiAgaW5pdChjYikge1xuICAgIHRoaXMuX2luaXQgPSBjYjtcbiAgfVxuICAvKipcbiAgICogU2V0IHRoZSBlbmRwb2ludCBwYXJhbWV0ZXIgaW5zdHJ1Y3Rpb25zLlxuICAgKi9cbiAgZXAoZW5kcG9pbnRQYXJhbWV0ZXJJbnN0cnVjdGlvbnMpIHtcbiAgICB0aGlzLl9lcCA9IGVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgYW55IG51bWJlciBvZiBtaWRkbGV3YXJlLlxuICAgKi9cbiAgbShtaWRkbGV3YXJlU3VwcGxpZXIpIHtcbiAgICB0aGlzLl9taWRkbGV3YXJlRm4gPSBtaWRkbGV3YXJlU3VwcGxpZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBoYW5kbGVyIGV4ZWN1dGlvbiBjb250ZXh0IFNtaXRoeSBmaWVsZC5cbiAgICovXG4gIHMoc2VydmljZSwgb3BlcmF0aW9uLCBzbWl0aHlDb250ZXh0ID0ge30pIHtcbiAgICB0aGlzLl9zbWl0aHlDb250ZXh0ID0ge1xuICAgICAgc2VydmljZSxcbiAgICAgIG9wZXJhdGlvbixcbiAgICAgIC4uLnNtaXRoeUNvbnRleHRcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgdGhlIGluaXRpYWwgaGFuZGxlciBleGVjdXRpb24gY29udGV4dC5cbiAgICovXG4gIGMoYWRkaXRpb25hbENvbnRleHQgPSB7fSkge1xuICAgIHRoaXMuX2FkZGl0aW9uYWxDb250ZXh0ID0gYWRkaXRpb25hbENvbnRleHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjb25zdGFudCBzdHJpbmcgaWRlbnRpZmllcnMgZm9yIHRoZSBvcGVyYXRpb24uXG4gICAqL1xuICBuKGNsaWVudE5hbWUsIGNvbW1hbmROYW1lKSB7XG4gICAgdGhpcy5fY2xpZW50TmFtZSA9IGNsaWVudE5hbWU7XG4gICAgdGhpcy5fY29tbWFuZE5hbWUgPSBjb21tYW5kTmFtZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogU2V0IHRoZSBpbnB1dCBhbmQgb3V0cHV0IHNlbnNpc3RpdmUgbG9nIGZpbHRlcnMuXG4gICAqL1xuICBmKGlucHV0RmlsdGVyID0gKF8pID0+IF8sIG91dHB1dEZpbHRlciA9IChfKSA9PiBfKSB7XG4gICAgdGhpcy5faW5wdXRGaWx0ZXJTZW5zaXRpdmVMb2cgPSBpbnB1dEZpbHRlcjtcbiAgICB0aGlzLl9vdXRwdXRGaWx0ZXJTZW5zaXRpdmVMb2cgPSBvdXRwdXRGaWx0ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlcmlhbGl6ZXIuXG4gICAqL1xuICBzZXIoc2VyaWFsaXplcikge1xuICAgIHRoaXMuX3NlcmlhbGl6ZXIgPSBzZXJpYWxpemVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZXNlcmlhbGl6ZXIuXG4gICAqL1xuICBkZShkZXNlcmlhbGl6ZXIpIHtcbiAgICB0aGlzLl9kZXNlcmlhbGl6ZXIgPSBkZXNlcmlhbGl6ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm5zIGEgQ29tbWFuZCBjbGFzcyB3aXRoIHRoZSBjbGFzc0J1aWxkZXIgcHJvcGVydGllcy5cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBjbG9zdXJlID0gdGhpcztcbiAgICBsZXQgQ29tbWFuZFJlZjtcbiAgICByZXR1cm4gQ29tbWFuZFJlZiA9IChfYSA9IGNsYXNzIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgICAvKipcbiAgICAgICAqIEBwdWJsaWNcbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IoLi4uW2lucHV0XSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICAvLyBAdHMtaWdub3JlIHVzZWQgaW4gbWlkZGxld2FyZUZuIGNsb3N1cmUuXG4gICAgICAgIHRoaXMuc2VyaWFsaXplID0gY2xvc3VyZS5fc2VyaWFsaXplcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgLy8gQHRzLWlnbm9yZSB1c2VkIGluIG1pZGRsZXdhcmVGbiBjbG9zdXJlLlxuICAgICAgICB0aGlzLmRlc2VyaWFsaXplID0gY2xvc3VyZS5fZGVzZXJpYWxpemVyO1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQgPz8ge307XG4gICAgICAgIGNsb3N1cmUuX2luaXQodGhpcyk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEBwdWJsaWNcbiAgICAgICAqL1xuICAgICAgc3RhdGljIGdldEVuZHBvaW50UGFyYW1ldGVySW5zdHJ1Y3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gY2xvc3VyZS5fZXA7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICovXG4gICAgICByZXNvbHZlTWlkZGxld2FyZShzdGFjaywgY29uZmlndXJhdGlvbiwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlTWlkZGxld2FyZVdpdGhDb250ZXh0KHN0YWNrLCBjb25maWd1cmF0aW9uLCBvcHRpb25zLCB7XG4gICAgICAgICAgQ29tbWFuZEN0b3I6IENvbW1hbmRSZWYsXG4gICAgICAgICAgbWlkZGxld2FyZUZuOiBjbG9zdXJlLl9taWRkbGV3YXJlRm4sXG4gICAgICAgICAgY2xpZW50TmFtZTogY2xvc3VyZS5fY2xpZW50TmFtZSxcbiAgICAgICAgICBjb21tYW5kTmFtZTogY2xvc3VyZS5fY29tbWFuZE5hbWUsXG4gICAgICAgICAgaW5wdXRGaWx0ZXJTZW5zaXRpdmVMb2c6IGNsb3N1cmUuX2lucHV0RmlsdGVyU2Vuc2l0aXZlTG9nLFxuICAgICAgICAgIG91dHB1dEZpbHRlclNlbnNpdGl2ZUxvZzogY2xvc3VyZS5fb3V0cHV0RmlsdGVyU2Vuc2l0aXZlTG9nLFxuICAgICAgICAgIHNtaXRoeUNvbnRleHQ6IGNsb3N1cmUuX3NtaXRoeUNvbnRleHQsXG4gICAgICAgICAgYWRkaXRpb25hbENvbnRleHQ6IGNsb3N1cmUuX2FkZGl0aW9uYWxDb250ZXh0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIF9fbmFtZShfYSwgXCJDb21tYW5kUmVmXCIpLCBfYSk7XG4gIH1cbn07XG5fX25hbWUoX0NsYXNzQnVpbGRlciwgXCJDbGFzc0J1aWxkZXJcIik7XG52YXIgQ2xhc3NCdWlsZGVyID0gX0NsYXNzQnVpbGRlcjtcblxuLy8gc3JjL2NvbnN0YW50cy50c1xudmFyIFNFTlNJVElWRV9TVFJJTkcgPSBcIioqKlNlbnNpdGl2ZUluZm9ybWF0aW9uKioqXCI7XG5cbi8vIHNyYy9jcmVhdGUtYWdncmVnYXRlZC1jbGllbnQudHNcbnZhciBjcmVhdGVBZ2dyZWdhdGVkQ2xpZW50ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoY29tbWFuZHMsIENsaWVudDIpID0+IHtcbiAgZm9yIChjb25zdCBjb21tYW5kIG9mIE9iamVjdC5rZXlzKGNvbW1hbmRzKSkge1xuICAgIGNvbnN0IENvbW1hbmRDdG9yID0gY29tbWFuZHNbY29tbWFuZF07XG4gICAgY29uc3QgbWV0aG9kSW1wbCA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoYXN5bmMgZnVuY3Rpb24oYXJncywgb3B0aW9uc09yQ2IsIGNiKSB7XG4gICAgICBjb25zdCBjb21tYW5kMiA9IG5ldyBDb21tYW5kQ3RvcihhcmdzKTtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc09yQ2IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aGlzLnNlbmQoY29tbWFuZDIsIG9wdGlvbnNPckNiKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zT3JDYiAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGh0dHAgb3B0aW9ucyBidXQgZ290ICR7dHlwZW9mIG9wdGlvbnNPckNifWApO1xuICAgICAgICB0aGlzLnNlbmQoY29tbWFuZDIsIG9wdGlvbnNPckNiIHx8IHt9LCBjYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKGNvbW1hbmQyLCBvcHRpb25zT3JDYik7XG4gICAgICB9XG4gICAgfSwgXCJtZXRob2RJbXBsXCIpO1xuICAgIGNvbnN0IG1ldGhvZE5hbWUgPSAoY29tbWFuZFswXS50b0xvd2VyQ2FzZSgpICsgY29tbWFuZC5zbGljZSgxKSkucmVwbGFjZSgvQ29tbWFuZCQvLCBcIlwiKTtcbiAgICBDbGllbnQyLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG1ldGhvZEltcGw7XG4gIH1cbn0sIFwiY3JlYXRlQWdncmVnYXRlZENsaWVudFwiKTtcblxuLy8gc3JjL3BhcnNlLXV0aWxzLnRzXG52YXIgcGFyc2VCb29sZWFuID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodmFsdWUpID0+IHtcbiAgc3dpdGNoICh2YWx1ZSkge1xuICAgIGNhc2UgXCJ0cnVlXCI6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIFwiZmFsc2VcIjpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gcGFyc2UgYm9vbGVhbiB2YWx1ZSBcIiR7dmFsdWV9XCJgKTtcbiAgfVxufSwgXCJwYXJzZUJvb2xlYW5cIik7XG52YXIgZXhwZWN0Qm9vbGVhbiA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgaWYgKHZhbHVlID09PSAwIHx8IHZhbHVlID09PSAxKSB7XG4gICAgICBsb2dnZXIud2FybihzdGFja1RyYWNlV2FybmluZyhgRXhwZWN0ZWQgYm9vbGVhbiwgZ290ICR7dHlwZW9mIHZhbHVlfTogJHt2YWx1ZX1gKSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3QgbG93ZXIgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChsb3dlciA9PT0gXCJmYWxzZVwiIHx8IGxvd2VyID09PSBcInRydWVcIikge1xuICAgICAgbG9nZ2VyLndhcm4oc3RhY2tUcmFjZVdhcm5pbmcoYEV4cGVjdGVkIGJvb2xlYW4sIGdvdCAke3R5cGVvZiB2YWx1ZX06ICR7dmFsdWV9YCkpO1xuICAgIH1cbiAgICBpZiAobG93ZXIgPT09IFwiZmFsc2VcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobG93ZXIgPT09IFwidHJ1ZVwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYm9vbGVhbiwgZ290ICR7dHlwZW9mIHZhbHVlfTogJHt2YWx1ZX1gKTtcbn0sIFwiZXhwZWN0Qm9vbGVhblwiKTtcbnZhciBleHBlY3ROdW1iZXIgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh2YWx1ZSkgPT4ge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZCkpIHtcbiAgICAgIGlmIChTdHJpbmcocGFyc2VkKSAhPT0gU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICBsb2dnZXIud2FybihzdGFja1RyYWNlV2FybmluZyhgRXhwZWN0ZWQgbnVtYmVyIGJ1dCBvYnNlcnZlZCBzdHJpbmc6ICR7dmFsdWV9YCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBudW1iZXIsIGdvdCAke3R5cGVvZiB2YWx1ZX06ICR7dmFsdWV9YCk7XG59LCBcImV4cGVjdE51bWJlclwiKTtcbnZhciBNQVhfRkxPQVQgPSBNYXRoLmNlaWwoMiAqKiAxMjcgKiAoMiAtIDIgKiogLTIzKSk7XG52YXIgZXhwZWN0RmxvYXQzMiA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIGNvbnN0IGV4cGVjdGVkID0gZXhwZWN0TnVtYmVyKHZhbHVlKTtcbiAgaWYgKGV4cGVjdGVkICE9PSB2b2lkIDAgJiYgIU51bWJlci5pc05hTihleHBlY3RlZCkgJiYgZXhwZWN0ZWQgIT09IEluZmluaXR5ICYmIGV4cGVjdGVkICE9PSAtSW5maW5pdHkpIHtcbiAgICBpZiAoTWF0aC5hYnMoZXhwZWN0ZWQpID4gTUFYX0ZMT0FUKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCAzMi1iaXQgZmxvYXQsIGdvdCAke3ZhbHVlfWApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZXhwZWN0ZWQ7XG59LCBcImV4cGVjdEZsb2F0MzJcIik7XG52YXIgZXhwZWN0TG9uZyA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICBpZiAoTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgJiYgIU51bWJlci5pc05hTih2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgaW50ZWdlciwgZ290ICR7dHlwZW9mIHZhbHVlfTogJHt2YWx1ZX1gKTtcbn0sIFwiZXhwZWN0TG9uZ1wiKTtcbnZhciBleHBlY3RJbnQgPSBleHBlY3RMb25nO1xudmFyIGV4cGVjdEludDMyID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodmFsdWUpID0+IGV4cGVjdFNpemVkSW50KHZhbHVlLCAzMiksIFwiZXhwZWN0SW50MzJcIik7XG52YXIgZXhwZWN0U2hvcnQgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh2YWx1ZSkgPT4gZXhwZWN0U2l6ZWRJbnQodmFsdWUsIDE2KSwgXCJleHBlY3RTaG9ydFwiKTtcbnZhciBleHBlY3RCeXRlID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodmFsdWUpID0+IGV4cGVjdFNpemVkSW50KHZhbHVlLCA4KSwgXCJleHBlY3RCeXRlXCIpO1xudmFyIGV4cGVjdFNpemVkSW50ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodmFsdWUsIHNpemUpID0+IHtcbiAgY29uc3QgZXhwZWN0ZWQgPSBleHBlY3RMb25nKHZhbHVlKTtcbiAgaWYgKGV4cGVjdGVkICE9PSB2b2lkIDAgJiYgY2FzdEludChleHBlY3RlZCwgc2l6ZSkgIT09IGV4cGVjdGVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgJHtzaXplfS1iaXQgaW50ZWdlciwgZ290ICR7dmFsdWV9YCk7XG4gIH1cbiAgcmV0dXJuIGV4cGVjdGVkO1xufSwgXCJleHBlY3RTaXplZEludFwiKTtcbnZhciBjYXN0SW50ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodmFsdWUsIHNpemUpID0+IHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSAzMjpcbiAgICAgIHJldHVybiBJbnQzMkFycmF5Lm9mKHZhbHVlKVswXTtcbiAgICBjYXNlIDE2OlxuICAgICAgcmV0dXJuIEludDE2QXJyYXkub2YodmFsdWUpWzBdO1xuICAgIGNhc2UgODpcbiAgICAgIHJldHVybiBJbnQ4QXJyYXkub2YodmFsdWUpWzBdO1xuICB9XG59LCBcImNhc3RJbnRcIik7XG52YXIgZXhwZWN0Tm9uTnVsbCA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlLCBsb2NhdGlvbikgPT4ge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCkge1xuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBub24tbnVsbCB2YWx1ZSBmb3IgJHtsb2NhdGlvbn1gKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgbm9uLW51bGwgdmFsdWVcIik7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufSwgXCJleHBlY3ROb25OdWxsXCIpO1xudmFyIGV4cGVjdE9iamVjdCA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBjb25zdCByZWNlaXZlZFR5cGUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IFwiYXJyYXlcIiA6IHR5cGVvZiB2YWx1ZTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgb2JqZWN0LCBnb3QgJHtyZWNlaXZlZFR5cGV9OiAke3ZhbHVlfWApO1xufSwgXCJleHBlY3RPYmplY3RcIik7XG52YXIgZXhwZWN0U3RyaW5nID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodmFsdWUpID0+IHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gdm9pZCAwO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKFtcImJvb2xlYW5cIiwgXCJudW1iZXJcIiwgXCJiaWdpbnRcIl0uaW5jbHVkZXModHlwZW9mIHZhbHVlKSkge1xuICAgIGxvZ2dlci53YXJuKHN0YWNrVHJhY2VXYXJuaW5nKGBFeHBlY3RlZCBzdHJpbmcsIGdvdCAke3R5cGVvZiB2YWx1ZX06ICR7dmFsdWV9YCkpO1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICB9XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIHN0cmluZywgZ290ICR7dHlwZW9mIHZhbHVlfTogJHt2YWx1ZX1gKTtcbn0sIFwiZXhwZWN0U3RyaW5nXCIpO1xudmFyIGV4cGVjdFVuaW9uID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodmFsdWUpID0+IHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gdm9pZCAwO1xuICB9XG4gIGNvbnN0IGFzT2JqZWN0ID0gZXhwZWN0T2JqZWN0KHZhbHVlKTtcbiAgY29uc3Qgc2V0S2V5cyA9IE9iamVjdC5lbnRyaWVzKGFzT2JqZWN0KS5maWx0ZXIoKFssIHZdKSA9PiB2ICE9IG51bGwpLm1hcCgoW2tdKSA9PiBrKTtcbiAgaWYgKHNldEtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVW5pb25zIG11c3QgaGF2ZSBleGFjdGx5IG9uZSBub24tbnVsbCBtZW1iZXIuIE5vbmUgd2VyZSBmb3VuZC5gKTtcbiAgfVxuICBpZiAoc2V0S2V5cy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVW5pb25zIG11c3QgaGF2ZSBleGFjdGx5IG9uZSBub24tbnVsbCBtZW1iZXIuIEtleXMgJHtzZXRLZXlzfSB3ZXJlIG5vdCBudWxsLmApO1xuICB9XG4gIHJldHVybiBhc09iamVjdDtcbn0sIFwiZXhwZWN0VW5pb25cIik7XG52YXIgc3RyaWN0UGFyc2VEb3VibGUgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh2YWx1ZSkgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZXhwZWN0TnVtYmVyKHBhcnNlTnVtYmVyKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIGV4cGVjdE51bWJlcih2YWx1ZSk7XG59LCBcInN0cmljdFBhcnNlRG91YmxlXCIpO1xudmFyIHN0cmljdFBhcnNlRmxvYXQgPSBzdHJpY3RQYXJzZURvdWJsZTtcbnZhciBzdHJpY3RQYXJzZUZsb2F0MzIgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh2YWx1ZSkgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZXhwZWN0RmxvYXQzMihwYXJzZU51bWJlcih2YWx1ZSkpO1xuICB9XG4gIHJldHVybiBleHBlY3RGbG9hdDMyKHZhbHVlKTtcbn0sIFwic3RyaWN0UGFyc2VGbG9hdDMyXCIpO1xudmFyIE5VTUJFUl9SRUdFWCA9IC8oLT8oPzowfFsxLTldXFxkKikoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8pfCgtP0luZmluaXR5KXwoTmFOKS9nO1xudmFyIHBhcnNlTnVtYmVyID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodmFsdWUpID0+IHtcbiAgY29uc3QgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKE5VTUJFUl9SRUdFWCk7XG4gIGlmIChtYXRjaGVzID09PSBudWxsIHx8IG1hdGNoZXNbMF0ubGVuZ3RoICE9PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCByZWFsIG51bWJlciwgZ290IGltcGxpY2l0IE5hTmApO1xuICB9XG4gIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbn0sIFwicGFyc2VOdW1iZXJcIik7XG52YXIgbGltaXRlZFBhcnNlRG91YmxlID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodmFsdWUpID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXRTdHJpbmcodmFsdWUpO1xuICB9XG4gIHJldHVybiBleHBlY3ROdW1iZXIodmFsdWUpO1xufSwgXCJsaW1pdGVkUGFyc2VEb3VibGVcIik7XG52YXIgaGFuZGxlRmxvYXQgPSBsaW1pdGVkUGFyc2VEb3VibGU7XG52YXIgbGltaXRlZFBhcnNlRmxvYXQgPSBsaW1pdGVkUGFyc2VEb3VibGU7XG52YXIgbGltaXRlZFBhcnNlRmxvYXQzMiA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBwYXJzZUZsb2F0U3RyaW5nKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZXhwZWN0RmxvYXQzMih2YWx1ZSk7XG59LCBcImxpbWl0ZWRQYXJzZUZsb2F0MzJcIik7XG52YXIgcGFyc2VGbG9hdFN0cmluZyA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIHN3aXRjaCAodmFsdWUpIHtcbiAgICBjYXNlIFwiTmFOXCI6XG4gICAgICByZXR1cm4gTmFOO1xuICAgIGNhc2UgXCJJbmZpbml0eVwiOlxuICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgIGNhc2UgXCItSW5maW5pdHlcIjpcbiAgICAgIHJldHVybiAtSW5maW5pdHk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIHBhcnNlIGZsb2F0IHZhbHVlOiAke3ZhbHVlfWApO1xuICB9XG59LCBcInBhcnNlRmxvYXRTdHJpbmdcIik7XG52YXIgc3RyaWN0UGFyc2VMb25nID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodmFsdWUpID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBleHBlY3RMb25nKHBhcnNlTnVtYmVyKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIGV4cGVjdExvbmcodmFsdWUpO1xufSwgXCJzdHJpY3RQYXJzZUxvbmdcIik7XG52YXIgc3RyaWN0UGFyc2VJbnQgPSBzdHJpY3RQYXJzZUxvbmc7XG52YXIgc3RyaWN0UGFyc2VJbnQzMiA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZXhwZWN0SW50MzIocGFyc2VOdW1iZXIodmFsdWUpKTtcbiAgfVxuICByZXR1cm4gZXhwZWN0SW50MzIodmFsdWUpO1xufSwgXCJzdHJpY3RQYXJzZUludDMyXCIpO1xudmFyIHN0cmljdFBhcnNlU2hvcnQgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh2YWx1ZSkgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGV4cGVjdFNob3J0KHBhcnNlTnVtYmVyKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIGV4cGVjdFNob3J0KHZhbHVlKTtcbn0sIFwic3RyaWN0UGFyc2VTaG9ydFwiKTtcbnZhciBzdHJpY3RQYXJzZUJ5dGUgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh2YWx1ZSkgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGV4cGVjdEJ5dGUocGFyc2VOdW1iZXIodmFsdWUpKTtcbiAgfVxuICByZXR1cm4gZXhwZWN0Qnl0ZSh2YWx1ZSk7XG59LCBcInN0cmljdFBhcnNlQnl0ZVwiKTtcbnZhciBzdGFja1RyYWNlV2FybmluZyA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKG1lc3NhZ2UpID0+IHtcbiAgcmV0dXJuIFN0cmluZyhuZXcgVHlwZUVycm9yKG1lc3NhZ2UpLnN0YWNrIHx8IG1lc3NhZ2UpLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDAsIDUpLmZpbHRlcigocykgPT4gIXMuaW5jbHVkZXMoXCJzdGFja1RyYWNlV2FybmluZ1wiKSkuam9pbihcIlxcblwiKTtcbn0sIFwic3RhY2tUcmFjZVdhcm5pbmdcIik7XG52YXIgbG9nZ2VyID0ge1xuICB3YXJuOiBjb25zb2xlLndhcm5cbn07XG5cbi8vIHNyYy9kYXRlLXV0aWxzLnRzXG52YXIgREFZUyA9IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXTtcbnZhciBNT05USFMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XG5mdW5jdGlvbiBkYXRlVG9VdGNTdHJpbmcoZGF0ZSkge1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgY29uc3QgZGF5T2ZNb250aEludCA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICBjb25zdCBob3Vyc0ludCA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgY29uc3QgbWludXRlc0ludCA9IGRhdGUuZ2V0VVRDTWludXRlcygpO1xuICBjb25zdCBzZWNvbmRzSW50ID0gZGF0ZS5nZXRVVENTZWNvbmRzKCk7XG4gIGNvbnN0IGRheU9mTW9udGhTdHJpbmcgPSBkYXlPZk1vbnRoSW50IDwgMTAgPyBgMCR7ZGF5T2ZNb250aEludH1gIDogYCR7ZGF5T2ZNb250aEludH1gO1xuICBjb25zdCBob3Vyc1N0cmluZyA9IGhvdXJzSW50IDwgMTAgPyBgMCR7aG91cnNJbnR9YCA6IGAke2hvdXJzSW50fWA7XG4gIGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBtaW51dGVzSW50IDwgMTAgPyBgMCR7bWludXRlc0ludH1gIDogYCR7bWludXRlc0ludH1gO1xuICBjb25zdCBzZWNvbmRzU3RyaW5nID0gc2Vjb25kc0ludCA8IDEwID8gYDAke3NlY29uZHNJbnR9YCA6IGAke3NlY29uZHNJbnR9YDtcbiAgcmV0dXJuIGAke0RBWVNbZGF5T2ZXZWVrXX0sICR7ZGF5T2ZNb250aFN0cmluZ30gJHtNT05USFNbbW9udGhdfSAke3llYXJ9ICR7aG91cnNTdHJpbmd9OiR7bWludXRlc1N0cmluZ306JHtzZWNvbmRzU3RyaW5nfSBHTVRgO1xufVxuX19uYW1lKGRhdGVUb1V0Y1N0cmluZywgXCJkYXRlVG9VdGNTdHJpbmdcIik7XG52YXIgUkZDMzMzOSA9IG5ldyBSZWdFeHAoL14oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KVt0VF0oXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KSg/OlxcLihcXGQrKSk/W3paXSQvKTtcbnZhciBwYXJzZVJmYzMzMzlEYXRlVGltZSA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlJGQy0zMzM5IGRhdGUtdGltZXMgbXVzdCBiZSBleHByZXNzZWQgYXMgc3RyaW5nc1wiKTtcbiAgfVxuICBjb25zdCBtYXRjaCA9IFJGQzMzMzkuZXhlYyh2YWx1ZSk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBSRkMtMzMzOSBkYXRlLXRpbWUgdmFsdWVcIik7XG4gIH1cbiAgY29uc3QgW18sIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBmcmFjdGlvbmFsTWlsbGlzZWNvbmRzXSA9IG1hdGNoO1xuICBjb25zdCB5ZWFyID0gc3RyaWN0UGFyc2VTaG9ydChzdHJpcExlYWRpbmdaZXJvZXMoeWVhclN0cikpO1xuICBjb25zdCBtb250aCA9IHBhcnNlRGF0ZVZhbHVlKG1vbnRoU3RyLCBcIm1vbnRoXCIsIDEsIDEyKTtcbiAgY29uc3QgZGF5ID0gcGFyc2VEYXRlVmFsdWUoZGF5U3RyLCBcImRheVwiLCAxLCAzMSk7XG4gIHJldHVybiBidWlsZERhdGUoeWVhciwgbW9udGgsIGRheSwgeyBob3VycywgbWludXRlcywgc2Vjb25kcywgZnJhY3Rpb25hbE1pbGxpc2Vjb25kcyB9KTtcbn0sIFwicGFyc2VSZmMzMzM5RGF0ZVRpbWVcIik7XG52YXIgUkZDMzMzOV9XSVRIX09GRlNFVCA9IG5ldyBSZWdFeHAoXG4gIC9eKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSlbdFRdKFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSkoPzpcXC4oXFxkKykpPygoWy0rXVxcZHsyfVxcOlxcZHsyfSl8W3paXSkkL1xuKTtcbnZhciBwYXJzZVJmYzMzMzlEYXRlVGltZVdpdGhPZmZzZXQgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh2YWx1ZSkgPT4ge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSRkMtMzMzOSBkYXRlLXRpbWVzIG11c3QgYmUgZXhwcmVzc2VkIGFzIHN0cmluZ3NcIik7XG4gIH1cbiAgY29uc3QgbWF0Y2ggPSBSRkMzMzM5X1dJVEhfT0ZGU0VULmV4ZWModmFsdWUpO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgUkZDLTMzMzkgZGF0ZS10aW1lIHZhbHVlXCIpO1xuICB9XG4gIGNvbnN0IFtfLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VycywgbWludXRlcywgc2Vjb25kcywgZnJhY3Rpb25hbE1pbGxpc2Vjb25kcywgb2Zmc2V0U3RyXSA9IG1hdGNoO1xuICBjb25zdCB5ZWFyID0gc3RyaWN0UGFyc2VTaG9ydChzdHJpcExlYWRpbmdaZXJvZXMoeWVhclN0cikpO1xuICBjb25zdCBtb250aCA9IHBhcnNlRGF0ZVZhbHVlKG1vbnRoU3RyLCBcIm1vbnRoXCIsIDEsIDEyKTtcbiAgY29uc3QgZGF5ID0gcGFyc2VEYXRlVmFsdWUoZGF5U3RyLCBcImRheVwiLCAxLCAzMSk7XG4gIGNvbnN0IGRhdGUgPSBidWlsZERhdGUoeWVhciwgbW9udGgsIGRheSwgeyBob3VycywgbWludXRlcywgc2Vjb25kcywgZnJhY3Rpb25hbE1pbGxpc2Vjb25kcyB9KTtcbiAgaWYgKG9mZnNldFN0ci50b1VwcGVyQ2FzZSgpICE9IFwiWlwiKSB7XG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpIC0gcGFyc2VPZmZzZXRUb01pbGxpc2Vjb25kcyhvZmZzZXRTdHIpKTtcbiAgfVxuICByZXR1cm4gZGF0ZTtcbn0sIFwicGFyc2VSZmMzMzM5RGF0ZVRpbWVXaXRoT2Zmc2V0XCIpO1xudmFyIElNRl9GSVhEQVRFID0gbmV3IFJlZ0V4cChcbiAgL14oPzpNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLCAoXFxkezJ9KSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpIChcXGR7NH0pIChcXGR7MSwyfSk6KFxcZHsyfSk6KFxcZHsyfSkoPzpcXC4oXFxkKykpPyBHTVQkL1xuKTtcbnZhciBSRkNfODUwX0RBVEUgPSBuZXcgUmVnRXhwKFxuICAvXig/Ok1vbmRheXxUdWVzZGF5fFdlZG5lc2RheXxUaHVyc2RheXxGcmlkYXl8U2F0dXJkYXl8U3VuZGF5KSwgKFxcZHsyfSktKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKS0oXFxkezJ9KSAoXFxkezEsMn0pOihcXGR7Mn0pOihcXGR7Mn0pKD86XFwuKFxcZCspKT8gR01UJC9cbik7XG52YXIgQVNDX1RJTUUgPSBuZXcgUmVnRXhwKFxuICAvXig/Ok1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1bikgKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKSAoIFsxLTldfFxcZHsyfSkgKFxcZHsxLDJ9KTooXFxkezJ9KTooXFxkezJ9KSg/OlxcLihcXGQrKSk/IChcXGR7NH0pJC9cbik7XG52YXIgcGFyc2VSZmM3MjMxRGF0ZVRpbWUgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh2YWx1ZSkgPT4ge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSRkMtNzIzMSBkYXRlLXRpbWVzIG11c3QgYmUgZXhwcmVzc2VkIGFzIHN0cmluZ3NcIik7XG4gIH1cbiAgbGV0IG1hdGNoID0gSU1GX0ZJWERBVEUuZXhlYyh2YWx1ZSk7XG4gIGlmIChtYXRjaCkge1xuICAgIGNvbnN0IFtfLCBkYXlTdHIsIG1vbnRoU3RyLCB5ZWFyU3RyLCBob3VycywgbWludXRlcywgc2Vjb25kcywgZnJhY3Rpb25hbE1pbGxpc2Vjb25kc10gPSBtYXRjaDtcbiAgICByZXR1cm4gYnVpbGREYXRlKFxuICAgICAgc3RyaWN0UGFyc2VTaG9ydChzdHJpcExlYWRpbmdaZXJvZXMoeWVhclN0cikpLFxuICAgICAgcGFyc2VNb250aEJ5U2hvcnROYW1lKG1vbnRoU3RyKSxcbiAgICAgIHBhcnNlRGF0ZVZhbHVlKGRheVN0ciwgXCJkYXlcIiwgMSwgMzEpLFxuICAgICAgeyBob3VycywgbWludXRlcywgc2Vjb25kcywgZnJhY3Rpb25hbE1pbGxpc2Vjb25kcyB9XG4gICAgKTtcbiAgfVxuICBtYXRjaCA9IFJGQ184NTBfREFURS5leGVjKHZhbHVlKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgY29uc3QgW18sIGRheVN0ciwgbW9udGhTdHIsIHllYXJTdHIsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBmcmFjdGlvbmFsTWlsbGlzZWNvbmRzXSA9IG1hdGNoO1xuICAgIHJldHVybiBhZGp1c3RSZmM4NTBZZWFyKFxuICAgICAgYnVpbGREYXRlKHBhcnNlVHdvRGlnaXRZZWFyKHllYXJTdHIpLCBwYXJzZU1vbnRoQnlTaG9ydE5hbWUobW9udGhTdHIpLCBwYXJzZURhdGVWYWx1ZShkYXlTdHIsIFwiZGF5XCIsIDEsIDMxKSwge1xuICAgICAgICBob3VycyxcbiAgICAgICAgbWludXRlcyxcbiAgICAgICAgc2Vjb25kcyxcbiAgICAgICAgZnJhY3Rpb25hbE1pbGxpc2Vjb25kc1xuICAgICAgfSlcbiAgICApO1xuICB9XG4gIG1hdGNoID0gQVNDX1RJTUUuZXhlYyh2YWx1ZSk7XG4gIGlmIChtYXRjaCkge1xuICAgIGNvbnN0IFtfLCBtb250aFN0ciwgZGF5U3RyLCBob3VycywgbWludXRlcywgc2Vjb25kcywgZnJhY3Rpb25hbE1pbGxpc2Vjb25kcywgeWVhclN0cl0gPSBtYXRjaDtcbiAgICByZXR1cm4gYnVpbGREYXRlKFxuICAgICAgc3RyaWN0UGFyc2VTaG9ydChzdHJpcExlYWRpbmdaZXJvZXMoeWVhclN0cikpLFxuICAgICAgcGFyc2VNb250aEJ5U2hvcnROYW1lKG1vbnRoU3RyKSxcbiAgICAgIHBhcnNlRGF0ZVZhbHVlKGRheVN0ci50cmltTGVmdCgpLCBcImRheVwiLCAxLCAzMSksXG4gICAgICB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBmcmFjdGlvbmFsTWlsbGlzZWNvbmRzIH1cbiAgICApO1xuICB9XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIFJGQy03MjMxIGRhdGUtdGltZSB2YWx1ZVwiKTtcbn0sIFwicGFyc2VSZmM3MjMxRGF0ZVRpbWVcIik7XG52YXIgcGFyc2VFcG9jaFRpbWVzdGFtcCA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICBsZXQgdmFsdWVBc0RvdWJsZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgIHZhbHVlQXNEb3VibGUgPSB2YWx1ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICB2YWx1ZUFzRG91YmxlID0gc3RyaWN0UGFyc2VEb3VibGUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFcG9jaCB0aW1lc3RhbXBzIG11c3QgYmUgZXhwcmVzc2VkIGFzIGZsb2F0aW5nIHBvaW50IG51bWJlcnMgb3IgdGhlaXIgc3RyaW5nIHJlcHJlc2VudGF0aW9uXCIpO1xuICB9XG4gIGlmIChOdW1iZXIuaXNOYU4odmFsdWVBc0RvdWJsZSkgfHwgdmFsdWVBc0RvdWJsZSA9PT0gSW5maW5pdHkgfHwgdmFsdWVBc0RvdWJsZSA9PT0gLUluZmluaXR5KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkVwb2NoIHRpbWVzdGFtcHMgbXVzdCBiZSB2YWxpZCwgbm9uLUluZmluaXRlLCBub24tTmFOIG51bWVyaWNzXCIpO1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZShNYXRoLnJvdW5kKHZhbHVlQXNEb3VibGUgKiAxZTMpKTtcbn0sIFwicGFyc2VFcG9jaFRpbWVzdGFtcFwiKTtcbnZhciBidWlsZERhdGUgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh5ZWFyLCBtb250aCwgZGF5LCB0aW1lKSA9PiB7XG4gIGNvbnN0IGFkanVzdGVkTW9udGggPSBtb250aCAtIDE7XG4gIHZhbGlkYXRlRGF5T2ZNb250aCh5ZWFyLCBhZGp1c3RlZE1vbnRoLCBkYXkpO1xuICByZXR1cm4gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICB5ZWFyLFxuICAgICAgYWRqdXN0ZWRNb250aCxcbiAgICAgIGRheSxcbiAgICAgIHBhcnNlRGF0ZVZhbHVlKHRpbWUuaG91cnMsIFwiaG91clwiLCAwLCAyMyksXG4gICAgICBwYXJzZURhdGVWYWx1ZSh0aW1lLm1pbnV0ZXMsIFwibWludXRlXCIsIDAsIDU5KSxcbiAgICAgIC8vIHNlY29uZHMgY2FuIGdvIHVwIHRvIDYwIGZvciBsZWFwIHNlY29uZHNcbiAgICAgIHBhcnNlRGF0ZVZhbHVlKHRpbWUuc2Vjb25kcywgXCJzZWNvbmRzXCIsIDAsIDYwKSxcbiAgICAgIHBhcnNlTWlsbGlzZWNvbmRzKHRpbWUuZnJhY3Rpb25hbE1pbGxpc2Vjb25kcylcbiAgICApXG4gICk7XG59LCBcImJ1aWxkRGF0ZVwiKTtcbnZhciBwYXJzZVR3b0RpZ2l0WWVhciA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIGNvbnN0IHRoaXNZZWFyID0gKC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpKS5nZXRVVENGdWxsWWVhcigpO1xuICBjb25zdCB2YWx1ZUluVGhpc0NlbnR1cnkgPSBNYXRoLmZsb29yKHRoaXNZZWFyIC8gMTAwKSAqIDEwMCArIHN0cmljdFBhcnNlU2hvcnQoc3RyaXBMZWFkaW5nWmVyb2VzKHZhbHVlKSk7XG4gIGlmICh2YWx1ZUluVGhpc0NlbnR1cnkgPCB0aGlzWWVhcikge1xuICAgIHJldHVybiB2YWx1ZUluVGhpc0NlbnR1cnkgKyAxMDA7XG4gIH1cbiAgcmV0dXJuIHZhbHVlSW5UaGlzQ2VudHVyeTtcbn0sIFwicGFyc2VUd29EaWdpdFllYXJcIik7XG52YXIgRklGVFlfWUVBUlNfSU5fTUlMTElTID0gNTAgKiAzNjUgKiAyNCAqIDYwICogNjAgKiAxZTM7XG52YXIgYWRqdXN0UmZjODUwWWVhciA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKGlucHV0KSA9PiB7XG4gIGlmIChpbnB1dC5nZXRUaW1lKCkgLSAoLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkpLmdldFRpbWUoKSA+IEZJRlRZX1lFQVJTX0lOX01JTExJUykge1xuICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgIERhdGUuVVRDKFxuICAgICAgICBpbnB1dC5nZXRVVENGdWxsWWVhcigpIC0gMTAwLFxuICAgICAgICBpbnB1dC5nZXRVVENNb250aCgpLFxuICAgICAgICBpbnB1dC5nZXRVVENEYXRlKCksXG4gICAgICAgIGlucHV0LmdldFVUQ0hvdXJzKCksXG4gICAgICAgIGlucHV0LmdldFVUQ01pbnV0ZXMoKSxcbiAgICAgICAgaW5wdXQuZ2V0VVRDU2Vjb25kcygpLFxuICAgICAgICBpbnB1dC5nZXRVVENNaWxsaXNlY29uZHMoKVxuICAgICAgKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufSwgXCJhZGp1c3RSZmM4NTBZZWFyXCIpO1xudmFyIHBhcnNlTW9udGhCeVNob3J0TmFtZSA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIGNvbnN0IG1vbnRoSWR4ID0gTU9OVEhTLmluZGV4T2YodmFsdWUpO1xuICBpZiAobW9udGhJZHggPCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBtb250aDogJHt2YWx1ZX1gKTtcbiAgfVxuICByZXR1cm4gbW9udGhJZHggKyAxO1xufSwgXCJwYXJzZU1vbnRoQnlTaG9ydE5hbWVcIik7XG52YXIgREFZU19JTl9NT05USCA9IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcbnZhciB2YWxpZGF0ZURheU9mTW9udGggPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gIGxldCBtYXhEYXlzID0gREFZU19JTl9NT05USFttb250aF07XG4gIGlmIChtb250aCA9PT0gMSAmJiBpc0xlYXBZZWFyKHllYXIpKSB7XG4gICAgbWF4RGF5cyA9IDI5O1xuICB9XG4gIGlmIChkYXkgPiBtYXhEYXlzKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBkYXkgZm9yICR7TU9OVEhTW21vbnRoXX0gaW4gJHt5ZWFyfTogJHtkYXl9YCk7XG4gIH1cbn0sIFwidmFsaWRhdGVEYXlPZk1vbnRoXCIpO1xudmFyIGlzTGVhcFllYXIgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh5ZWFyKSA9PiB7XG4gIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiAoeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwKTtcbn0sIFwiaXNMZWFwWWVhclwiKTtcbnZhciBwYXJzZURhdGVWYWx1ZSA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlLCB0eXBlLCBsb3dlciwgdXBwZXIpID0+IHtcbiAgY29uc3QgZGF0ZVZhbCA9IHN0cmljdFBhcnNlQnl0ZShzdHJpcExlYWRpbmdaZXJvZXModmFsdWUpKTtcbiAgaWYgKGRhdGVWYWwgPCBsb3dlciB8fCBkYXRlVmFsID4gdXBwZXIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke3R5cGV9IG11c3QgYmUgYmV0d2VlbiAke2xvd2VyfSBhbmQgJHt1cHBlcn0sIGluY2x1c2l2ZWApO1xuICB9XG4gIHJldHVybiBkYXRlVmFsO1xufSwgXCJwYXJzZURhdGVWYWx1ZVwiKTtcbnZhciBwYXJzZU1pbGxpc2Vjb25kcyA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIHN0cmljdFBhcnNlRmxvYXQzMihcIjAuXCIgKyB2YWx1ZSkgKiAxZTM7XG59LCBcInBhcnNlTWlsbGlzZWNvbmRzXCIpO1xudmFyIHBhcnNlT2Zmc2V0VG9NaWxsaXNlY29uZHMgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKCh2YWx1ZSkgPT4ge1xuICBjb25zdCBkaXJlY3Rpb25TdHIgPSB2YWx1ZVswXTtcbiAgbGV0IGRpcmVjdGlvbiA9IDE7XG4gIGlmIChkaXJlY3Rpb25TdHIgPT0gXCIrXCIpIHtcbiAgICBkaXJlY3Rpb24gPSAxO1xuICB9IGVsc2UgaWYgKGRpcmVjdGlvblN0ciA9PSBcIi1cIikge1xuICAgIGRpcmVjdGlvbiA9IC0xO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE9mZnNldCBkaXJlY3Rpb24sICR7ZGlyZWN0aW9uU3RyfSwgbXVzdCBiZSBcIitcIiBvciBcIi1cImApO1xuICB9XG4gIGNvbnN0IGhvdXIgPSBOdW1iZXIodmFsdWUuc3Vic3RyaW5nKDEsIDMpKTtcbiAgY29uc3QgbWludXRlID0gTnVtYmVyKHZhbHVlLnN1YnN0cmluZyg0LCA2KSk7XG4gIHJldHVybiBkaXJlY3Rpb24gKiAoaG91ciAqIDYwICsgbWludXRlKSAqIDYwICogMWUzO1xufSwgXCJwYXJzZU9mZnNldFRvTWlsbGlzZWNvbmRzXCIpO1xudmFyIHN0cmlwTGVhZGluZ1plcm9lcyA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHZhbHVlKSA9PiB7XG4gIGxldCBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgdmFsdWUubGVuZ3RoIC0gMSAmJiB2YWx1ZS5jaGFyQXQoaWR4KSA9PT0gXCIwXCIpIHtcbiAgICBpZHgrKztcbiAgfVxuICBpZiAoaWR4ID09PSAwKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiB2YWx1ZS5zbGljZShpZHgpO1xufSwgXCJzdHJpcExlYWRpbmdaZXJvZXNcIik7XG5cbi8vIHNyYy9leGNlcHRpb25zLnRzXG52YXIgX1NlcnZpY2VFeGNlcHRpb24gPSBjbGFzcyBfU2VydmljZUV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMubWVzc2FnZSk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIF9TZXJ2aWNlRXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lO1xuICAgIHRoaXMuJGZhdWx0ID0gb3B0aW9ucy4kZmF1bHQ7XG4gICAgdGhpcy4kbWV0YWRhdGEgPSBvcHRpb25zLiRtZXRhZGF0YTtcbiAgfVxufTtcbl9fbmFtZShfU2VydmljZUV4Y2VwdGlvbiwgXCJTZXJ2aWNlRXhjZXB0aW9uXCIpO1xudmFyIFNlcnZpY2VFeGNlcHRpb24gPSBfU2VydmljZUV4Y2VwdGlvbjtcbnZhciBkZWNvcmF0ZVNlcnZpY2VFeGNlcHRpb24gPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChleGNlcHRpb24sIGFkZGl0aW9ucyA9IHt9KSA9PiB7XG4gIE9iamVjdC5lbnRyaWVzKGFkZGl0aW9ucykuZmlsdGVyKChbLCB2XSkgPT4gdiAhPT0gdm9pZCAwKS5mb3JFYWNoKChbaywgdl0pID0+IHtcbiAgICBpZiAoZXhjZXB0aW9uW2tdID09IHZvaWQgMCB8fCBleGNlcHRpb25ba10gPT09IFwiXCIpIHtcbiAgICAgIGV4Y2VwdGlvbltrXSA9IHY7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgbWVzc2FnZSA9IGV4Y2VwdGlvbi5tZXNzYWdlIHx8IGV4Y2VwdGlvbi5NZXNzYWdlIHx8IFwiVW5rbm93bkVycm9yXCI7XG4gIGV4Y2VwdGlvbi5tZXNzYWdlID0gbWVzc2FnZTtcbiAgZGVsZXRlIGV4Y2VwdGlvbi5NZXNzYWdlO1xuICByZXR1cm4gZXhjZXB0aW9uO1xufSwgXCJkZWNvcmF0ZVNlcnZpY2VFeGNlcHRpb25cIik7XG5cbi8vIHNyYy9kZWZhdWx0LWVycm9yLWhhbmRsZXIudHNcbnZhciB0aHJvd0RlZmF1bHRFcnJvciA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHsgb3V0cHV0LCBwYXJzZWRCb2R5LCBleGNlcHRpb25DdG9yLCBlcnJvckNvZGUgfSkgPT4ge1xuICBjb25zdCAkbWV0YWRhdGEgPSBkZXNlcmlhbGl6ZU1ldGFkYXRhKG91dHB1dCk7XG4gIGNvbnN0IHN0YXR1c0NvZGUgPSAkbWV0YWRhdGEuaHR0cFN0YXR1c0NvZGUgPyAkbWV0YWRhdGEuaHR0cFN0YXR1c0NvZGUgKyBcIlwiIDogdm9pZCAwO1xuICBjb25zdCByZXNwb25zZSA9IG5ldyBleGNlcHRpb25DdG9yKHtcbiAgICBuYW1lOiAocGFyc2VkQm9keSA9PSBudWxsID8gdm9pZCAwIDogcGFyc2VkQm9keS5jb2RlKSB8fCAocGFyc2VkQm9keSA9PSBudWxsID8gdm9pZCAwIDogcGFyc2VkQm9keS5Db2RlKSB8fCBlcnJvckNvZGUgfHwgc3RhdHVzQ29kZSB8fCBcIlVua25vd25FcnJvclwiLFxuICAgICRmYXVsdDogXCJjbGllbnRcIixcbiAgICAkbWV0YWRhdGFcbiAgfSk7XG4gIHRocm93IGRlY29yYXRlU2VydmljZUV4Y2VwdGlvbihyZXNwb25zZSwgcGFyc2VkQm9keSk7XG59LCBcInRocm93RGVmYXVsdEVycm9yXCIpO1xudmFyIHdpdGhCYXNlRXhjZXB0aW9uID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoRXhjZXB0aW9uQ3RvcikgPT4ge1xuICByZXR1cm4gKHsgb3V0cHV0LCBwYXJzZWRCb2R5LCBlcnJvckNvZGUgfSkgPT4ge1xuICAgIHRocm93RGVmYXVsdEVycm9yKHsgb3V0cHV0LCBwYXJzZWRCb2R5LCBleGNlcHRpb25DdG9yOiBFeGNlcHRpb25DdG9yLCBlcnJvckNvZGUgfSk7XG4gIH07XG59LCBcIndpdGhCYXNlRXhjZXB0aW9uXCIpO1xudmFyIGRlc2VyaWFsaXplTWV0YWRhdGEgPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChvdXRwdXQpID0+ICh7XG4gIGh0dHBTdGF0dXNDb2RlOiBvdXRwdXQuc3RhdHVzQ29kZSxcbiAgcmVxdWVzdElkOiBvdXRwdXQuaGVhZGVyc1tcIngtYW16bi1yZXF1ZXN0aWRcIl0gPz8gb3V0cHV0LmhlYWRlcnNbXCJ4LWFtem4tcmVxdWVzdC1pZFwiXSA/PyBvdXRwdXQuaGVhZGVyc1tcIngtYW16LXJlcXVlc3QtaWRcIl0sXG4gIGV4dGVuZGVkUmVxdWVzdElkOiBvdXRwdXQuaGVhZGVyc1tcIngtYW16LWlkLTJcIl0sXG4gIGNmSWQ6IG91dHB1dC5oZWFkZXJzW1wieC1hbXotY2YtaWRcIl1cbn0pLCBcImRlc2VyaWFsaXplTWV0YWRhdGFcIik7XG5cbi8vIHNyYy9kZWZhdWx0cy1tb2RlLnRzXG52YXIgbG9hZENvbmZpZ3NGb3JEZWZhdWx0TW9kZSA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKG1vZGUpID0+IHtcbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBcInN0YW5kYXJkXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXRyeU1vZGU6IFwic3RhbmRhcmRcIixcbiAgICAgICAgY29ubmVjdGlvblRpbWVvdXQ6IDMxMDBcbiAgICAgIH07XG4gICAgY2FzZSBcImluLXJlZ2lvblwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmV0cnlNb2RlOiBcInN0YW5kYXJkXCIsXG4gICAgICAgIGNvbm5lY3Rpb25UaW1lb3V0OiAxMTAwXG4gICAgICB9O1xuICAgIGNhc2UgXCJjcm9zcy1yZWdpb25cIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJldHJ5TW9kZTogXCJzdGFuZGFyZFwiLFxuICAgICAgICBjb25uZWN0aW9uVGltZW91dDogMzEwMFxuICAgICAgfTtcbiAgICBjYXNlIFwibW9iaWxlXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXRyeU1vZGU6IFwic3RhbmRhcmRcIixcbiAgICAgICAgY29ubmVjdGlvblRpbWVvdXQ6IDNlNFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHt9O1xuICB9XG59LCBcImxvYWRDb25maWdzRm9yRGVmYXVsdE1vZGVcIik7XG5cbi8vIHNyYy9lbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uLnRzXG52YXIgd2FybmluZ0VtaXR0ZWQgPSBmYWxzZTtcbnZhciBlbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodmVyc2lvbikgPT4ge1xuICBpZiAodmVyc2lvbiAmJiAhd2FybmluZ0VtaXR0ZWQgJiYgcGFyc2VJbnQodmVyc2lvbi5zdWJzdHJpbmcoMSwgdmVyc2lvbi5pbmRleE9mKFwiLlwiKSkpIDwgMTQpIHtcbiAgICB3YXJuaW5nRW1pdHRlZCA9IHRydWU7XG4gIH1cbn0sIFwiZW1pdFdhcm5pbmdJZlVuc3VwcG9ydGVkVmVyc2lvblwiKTtcblxuLy8gc3JjL2V4dGVuc2lvbnMvY2hlY2tzdW0udHNcblxudmFyIGdldENoZWNrc3VtQ29uZmlndXJhdGlvbiA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgY29uc3QgY2hlY2tzdW1BbGdvcml0aG1zID0gW107XG4gIGZvciAoY29uc3QgaWQgaW4gaW1wb3J0X3R5cGVzLkFsZ29yaXRobUlkKSB7XG4gICAgY29uc3QgYWxnb3JpdGhtSWQgPSBpbXBvcnRfdHlwZXMuQWxnb3JpdGhtSWRbaWRdO1xuICAgIGlmIChydW50aW1lQ29uZmlnW2FsZ29yaXRobUlkXSA9PT0gdm9pZCAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY2hlY2tzdW1BbGdvcml0aG1zLnB1c2goe1xuICAgICAgYWxnb3JpdGhtSWQ6ICgpID0+IGFsZ29yaXRobUlkLFxuICAgICAgY2hlY2tzdW1Db25zdHJ1Y3RvcjogKCkgPT4gcnVudGltZUNvbmZpZ1thbGdvcml0aG1JZF1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIF9jaGVja3N1bUFsZ29yaXRobXM6IGNoZWNrc3VtQWxnb3JpdGhtcyxcbiAgICBhZGRDaGVja3N1bUFsZ29yaXRobShhbGdvKSB7XG4gICAgICB0aGlzLl9jaGVja3N1bUFsZ29yaXRobXMucHVzaChhbGdvKTtcbiAgICB9LFxuICAgIGNoZWNrc3VtQWxnb3JpdGhtcygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jaGVja3N1bUFsZ29yaXRobXM7XG4gICAgfVxuICB9O1xufSwgXCJnZXRDaGVja3N1bUNvbmZpZ3VyYXRpb25cIik7XG52YXIgcmVzb2x2ZUNoZWNrc3VtUnVudGltZUNvbmZpZyA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKGNsaWVudENvbmZpZykgPT4ge1xuICBjb25zdCBydW50aW1lQ29uZmlnID0ge307XG4gIGNsaWVudENvbmZpZy5jaGVja3N1bUFsZ29yaXRobXMoKS5mb3JFYWNoKChjaGVja3N1bUFsZ29yaXRobSkgPT4ge1xuICAgIHJ1bnRpbWVDb25maWdbY2hlY2tzdW1BbGdvcml0aG0uYWxnb3JpdGhtSWQoKV0gPSBjaGVja3N1bUFsZ29yaXRobS5jaGVja3N1bUNvbnN0cnVjdG9yKCk7XG4gIH0pO1xuICByZXR1cm4gcnVudGltZUNvbmZpZztcbn0sIFwicmVzb2x2ZUNoZWNrc3VtUnVudGltZUNvbmZpZ1wiKTtcblxuLy8gc3JjL2V4dGVuc2lvbnMvcmV0cnkudHNcbnZhciBnZXRSZXRyeUNvbmZpZ3VyYXRpb24gPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChydW50aW1lQ29uZmlnKSA9PiB7XG4gIGxldCBfcmV0cnlTdHJhdGVneSA9IHJ1bnRpbWVDb25maWcucmV0cnlTdHJhdGVneTtcbiAgcmV0dXJuIHtcbiAgICBzZXRSZXRyeVN0cmF0ZWd5KHJldHJ5U3RyYXRlZ3kpIHtcbiAgICAgIF9yZXRyeVN0cmF0ZWd5ID0gcmV0cnlTdHJhdGVneTtcbiAgICB9LFxuICAgIHJldHJ5U3RyYXRlZ3koKSB7XG4gICAgICByZXR1cm4gX3JldHJ5U3RyYXRlZ3k7XG4gICAgfVxuICB9O1xufSwgXCJnZXRSZXRyeUNvbmZpZ3VyYXRpb25cIik7XG52YXIgcmVzb2x2ZVJldHJ5UnVudGltZUNvbmZpZyA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHJldHJ5U3RyYXRlZ3lDb25maWd1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHJ1bnRpbWVDb25maWcgPSB7fTtcbiAgcnVudGltZUNvbmZpZy5yZXRyeVN0cmF0ZWd5ID0gcmV0cnlTdHJhdGVneUNvbmZpZ3VyYXRpb24ucmV0cnlTdHJhdGVneSgpO1xuICByZXR1cm4gcnVudGltZUNvbmZpZztcbn0sIFwicmVzb2x2ZVJldHJ5UnVudGltZUNvbmZpZ1wiKTtcblxuLy8gc3JjL2V4dGVuc2lvbnMvZGVmYXVsdEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24udHNcbnZhciBnZXREZWZhdWx0RXh0ZW5zaW9uQ29uZmlndXJhdGlvbiA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5nZXRDaGVja3N1bUNvbmZpZ3VyYXRpb24ocnVudGltZUNvbmZpZyksXG4gICAgLi4uZ2V0UmV0cnlDb25maWd1cmF0aW9uKHJ1bnRpbWVDb25maWcpXG4gIH07XG59LCBcImdldERlZmF1bHRFeHRlbnNpb25Db25maWd1cmF0aW9uXCIpO1xudmFyIGdldERlZmF1bHRDbGllbnRDb25maWd1cmF0aW9uID0gZ2V0RGVmYXVsdEV4dGVuc2lvbkNvbmZpZ3VyYXRpb247XG52YXIgcmVzb2x2ZURlZmF1bHRSdW50aW1lQ29uZmlnID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoY29uZmlnKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4ucmVzb2x2ZUNoZWNrc3VtUnVudGltZUNvbmZpZyhjb25maWcpLFxuICAgIC4uLnJlc29sdmVSZXRyeVJ1bnRpbWVDb25maWcoY29uZmlnKVxuICB9O1xufSwgXCJyZXNvbHZlRGVmYXVsdFJ1bnRpbWVDb25maWdcIik7XG5cbi8vIHNyYy9leHRlbmRlZC1lbmNvZGUtdXJpLWNvbXBvbmVudC50c1xuZnVuY3Rpb24gZXh0ZW5kZWRFbmNvZGVVUklDb21wb25lbnQoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gXCIlXCIgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufVxuX19uYW1lKGV4dGVuZGVkRW5jb2RlVVJJQ29tcG9uZW50LCBcImV4dGVuZGVkRW5jb2RlVVJJQ29tcG9uZW50XCIpO1xuXG4vLyBzcmMvZ2V0LWFycmF5LWlmLXNpbmdsZS1pdGVtLnRzXG52YXIgZ2V0QXJyYXlJZlNpbmdsZUl0ZW0gPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChtYXlCZUFycmF5KSA9PiBBcnJheS5pc0FycmF5KG1heUJlQXJyYXkpID8gbWF5QmVBcnJheSA6IFttYXlCZUFycmF5XSwgXCJnZXRBcnJheUlmU2luZ2xlSXRlbVwiKTtcblxuLy8gc3JjL2dldC12YWx1ZS1mcm9tLXRleHQtbm9kZS50c1xudmFyIGdldFZhbHVlRnJvbVRleHROb2RlID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgob2JqKSA9PiB7XG4gIGNvbnN0IHRleHROb2RlTmFtZSA9IFwiI3RleHRcIjtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIG9ialtrZXldW3RleHROb2RlTmFtZV0gIT09IHZvaWQgMCkge1xuICAgICAgb2JqW2tleV0gPSBvYmpba2V5XVt0ZXh0Tm9kZU5hbWVdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9ialtrZXldID09PSBcIm9iamVjdFwiICYmIG9ialtrZXldICE9PSBudWxsKSB7XG4gICAgICBvYmpba2V5XSA9IGdldFZhbHVlRnJvbVRleHROb2RlKG9ialtrZXldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0sIFwiZ2V0VmFsdWVGcm9tVGV4dE5vZGVcIik7XG5cbi8vIHNyYy9sYXp5LWpzb24udHNcbnZhciBTdHJpbmdXcmFwcGVyID0gLyogQF9fUFVSRV9fICovIF9fbmFtZShmdW5jdGlvbigpIHtcbiAgY29uc3QgQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG4gIGNvbnN0IENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShTdHJpbmcsIFtudWxsLCAuLi5hcmd1bWVudHNdKTtcbiAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICByZXR1cm4gaW5zdGFuY2U7XG59LCBcIlN0cmluZ1dyYXBwZXJcIik7XG5TdHJpbmdXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3RyaW5nLnByb3RvdHlwZSwge1xuICBjb25zdHJ1Y3Rvcjoge1xuICAgIHZhbHVlOiBTdHJpbmdXcmFwcGVyLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9XG59KTtcbk9iamVjdC5zZXRQcm90b3R5cGVPZihTdHJpbmdXcmFwcGVyLCBTdHJpbmcpO1xudmFyIF9MYXp5SnNvblN0cmluZyA9IGNsYXNzIF9MYXp5SnNvblN0cmluZyBleHRlbmRzIFN0cmluZ1dyYXBwZXIge1xuICBkZXNlcmlhbGl6ZUpTT04oKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3VwZXIudG9TdHJpbmcoKSk7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBzdXBlci50b1N0cmluZygpO1xuICB9XG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBfTGF6eUpzb25TdHJpbmcpIHtcbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSBlbHNlIGlmIChvYmplY3QgaW5zdGFuY2VvZiBTdHJpbmcgfHwgdHlwZW9mIG9iamVjdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIG5ldyBfTGF6eUpzb25TdHJpbmcob2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBfTGF6eUpzb25TdHJpbmcoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG4gIH1cbn07XG5fX25hbWUoX0xhenlKc29uU3RyaW5nLCBcIkxhenlKc29uU3RyaW5nXCIpO1xudmFyIExhenlKc29uU3RyaW5nID0gX0xhenlKc29uU3RyaW5nO1xuXG4vLyBzcmMvb2JqZWN0LW1hcHBpbmcudHNcbmZ1bmN0aW9uIG1hcChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gIGxldCB0YXJnZXQ7XG4gIGxldCBmaWx0ZXI7XG4gIGxldCBpbnN0cnVjdGlvbnM7XG4gIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgYXJnMiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRhcmdldCA9IHt9O1xuICAgIGluc3RydWN0aW9ucyA9IGFyZzA7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gYXJnMDtcbiAgICBpZiAodHlwZW9mIGFyZzEgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZmlsdGVyID0gYXJnMTtcbiAgICAgIGluc3RydWN0aW9ucyA9IGFyZzI7XG4gICAgICByZXR1cm4gbWFwV2l0aEZpbHRlcih0YXJnZXQsIGZpbHRlciwgaW5zdHJ1Y3Rpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdHJ1Y3Rpb25zID0gYXJnMTtcbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoaW5zdHJ1Y3Rpb25zKSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbnN0cnVjdGlvbnNba2V5XSkpIHtcbiAgICAgIHRhcmdldFtrZXldID0gaW5zdHJ1Y3Rpb25zW2tleV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgYXBwbHlJbnN0cnVjdGlvbih0YXJnZXQsIG51bGwsIGluc3RydWN0aW9ucywga2V5KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuX19uYW1lKG1hcCwgXCJtYXBcIik7XG52YXIgY29udmVydE1hcCA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHRhcmdldCkgPT4ge1xuICBjb25zdCBvdXRwdXQgPSB7fTtcbiAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXModGFyZ2V0IHx8IHt9KSkge1xuICAgIG91dHB1dFtrXSA9IFssIHZdO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59LCBcImNvbnZlcnRNYXBcIik7XG52YXIgdGFrZSA9IC8qIEBfX1BVUkVfXyAqLyBfX25hbWUoKHNvdXJjZSwgaW5zdHJ1Y3Rpb25zKSA9PiB7XG4gIGNvbnN0IG91dCA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBpbnN0cnVjdGlvbnMpIHtcbiAgICBhcHBseUluc3RydWN0aW9uKG91dCwgc291cmNlLCBpbnN0cnVjdGlvbnMsIGtleSk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn0sIFwidGFrZVwiKTtcbnZhciBtYXBXaXRoRmlsdGVyID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodGFyZ2V0LCBmaWx0ZXIsIGluc3RydWN0aW9ucykgPT4ge1xuICByZXR1cm4gbWFwKFxuICAgIHRhcmdldCxcbiAgICBPYmplY3QuZW50cmllcyhpbnN0cnVjdGlvbnMpLnJlZHVjZShcbiAgICAgIChfaW5zdHJ1Y3Rpb25zLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgX2luc3RydWN0aW9uc1trZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBfaW5zdHJ1Y3Rpb25zW2tleV0gPSBbZmlsdGVyLCB2YWx1ZSgpXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2luc3RydWN0aW9uc1trZXldID0gW2ZpbHRlciwgdmFsdWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2luc3RydWN0aW9ucztcbiAgICAgIH0sXG4gICAgICB7fVxuICAgIClcbiAgKTtcbn0sIFwibWFwV2l0aEZpbHRlclwiKTtcbnZhciBhcHBseUluc3RydWN0aW9uID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodGFyZ2V0LCBzb3VyY2UsIGluc3RydWN0aW9ucywgdGFyZ2V0S2V5KSA9PiB7XG4gIGlmIChzb3VyY2UgIT09IG51bGwpIHtcbiAgICBsZXQgaW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbnNbdGFyZ2V0S2V5XTtcbiAgICBpZiAodHlwZW9mIGluc3RydWN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGluc3RydWN0aW9uID0gWywgaW5zdHJ1Y3Rpb25dO1xuICAgIH1cbiAgICBjb25zdCBbZmlsdGVyMiA9IG5vbk51bGxpc2gsIHZhbHVlRm4gPSBwYXNzLCBzb3VyY2VLZXkgPSB0YXJnZXRLZXldID0gaW5zdHJ1Y3Rpb247XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIyID09PSBcImZ1bmN0aW9uXCIgJiYgZmlsdGVyMihzb3VyY2Vbc291cmNlS2V5XSkgfHwgdHlwZW9mIGZpbHRlcjIgIT09IFwiZnVuY3Rpb25cIiAmJiAhIWZpbHRlcjIpIHtcbiAgICAgIHRhcmdldFt0YXJnZXRLZXldID0gdmFsdWVGbihzb3VyY2Vbc291cmNlS2V5XSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBsZXQgW2ZpbHRlciwgdmFsdWVdID0gaW5zdHJ1Y3Rpb25zW3RhcmdldEtleV07XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGxldCBfdmFsdWU7XG4gICAgY29uc3QgZGVmYXVsdEZpbHRlclBhc3NlZCA9IGZpbHRlciA9PT0gdm9pZCAwICYmIChfdmFsdWUgPSB2YWx1ZSgpKSAhPSBudWxsO1xuICAgIGNvbnN0IGN1c3RvbUZpbHRlclBhc3NlZCA9IHR5cGVvZiBmaWx0ZXIgPT09IFwiZnVuY3Rpb25cIiAmJiAhIWZpbHRlcih2b2lkIDApIHx8IHR5cGVvZiBmaWx0ZXIgIT09IFwiZnVuY3Rpb25cIiAmJiAhIWZpbHRlcjtcbiAgICBpZiAoZGVmYXVsdEZpbHRlclBhc3NlZCkge1xuICAgICAgdGFyZ2V0W3RhcmdldEtleV0gPSBfdmFsdWU7XG4gICAgfSBlbHNlIGlmIChjdXN0b21GaWx0ZXJQYXNzZWQpIHtcbiAgICAgIHRhcmdldFt0YXJnZXRLZXldID0gdmFsdWUoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGVmYXVsdEZpbHRlclBhc3NlZCA9IGZpbHRlciA9PT0gdm9pZCAwICYmIHZhbHVlICE9IG51bGw7XG4gICAgY29uc3QgY3VzdG9tRmlsdGVyUGFzc2VkID0gdHlwZW9mIGZpbHRlciA9PT0gXCJmdW5jdGlvblwiICYmICEhZmlsdGVyKHZhbHVlKSB8fCB0eXBlb2YgZmlsdGVyICE9PSBcImZ1bmN0aW9uXCIgJiYgISFmaWx0ZXI7XG4gICAgaWYgKGRlZmF1bHRGaWx0ZXJQYXNzZWQgfHwgY3VzdG9tRmlsdGVyUGFzc2VkKSB7XG4gICAgICB0YXJnZXRbdGFyZ2V0S2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufSwgXCJhcHBseUluc3RydWN0aW9uXCIpO1xudmFyIG5vbk51bGxpc2ggPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChfKSA9PiBfICE9IG51bGwsIFwibm9uTnVsbGlzaFwiKTtcbnZhciBwYXNzID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgoXykgPT4gXywgXCJwYXNzXCIpO1xuXG4vLyBzcmMvcmVzb2x2ZS1wYXRoLnRzXG52YXIgcmVzb2x2ZWRQYXRoID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgocmVzb2x2ZWRQYXRoMiwgaW5wdXQsIG1lbWJlck5hbWUsIGxhYmVsVmFsdWVQcm92aWRlciwgdXJpTGFiZWwsIGlzR3JlZWR5TGFiZWwpID0+IHtcbiAgaWYgKGlucHV0ICE9IG51bGwgJiYgaW5wdXRbbWVtYmVyTmFtZV0gIT09IHZvaWQgMCkge1xuICAgIGNvbnN0IGxhYmVsVmFsdWUgPSBsYWJlbFZhbHVlUHJvdmlkZXIoKTtcbiAgICBpZiAobGFiZWxWYWx1ZS5sZW5ndGggPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgdmFsdWUgcHJvdmlkZWQgZm9yIGlucHV0IEhUVFAgbGFiZWw6IFwiICsgbWVtYmVyTmFtZSArIFwiLlwiKTtcbiAgICB9XG4gICAgcmVzb2x2ZWRQYXRoMiA9IHJlc29sdmVkUGF0aDIucmVwbGFjZShcbiAgICAgIHVyaUxhYmVsLFxuICAgICAgaXNHcmVlZHlMYWJlbCA/IGxhYmVsVmFsdWUuc3BsaXQoXCIvXCIpLm1hcCgoc2VnbWVudCkgPT4gZXh0ZW5kZWRFbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oXCIvXCIpIDogZXh0ZW5kZWRFbmNvZGVVUklDb21wb25lbnQobGFiZWxWYWx1ZSlcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHZhbHVlIHByb3ZpZGVkIGZvciBpbnB1dCBIVFRQIGxhYmVsOiBcIiArIG1lbWJlck5hbWUgKyBcIi5cIik7XG4gIH1cbiAgcmV0dXJuIHJlc29sdmVkUGF0aDI7XG59LCBcInJlc29sdmVkUGF0aFwiKTtcblxuLy8gc3JjL3Nlci11dGlscy50c1xudmFyIHNlcmlhbGl6ZUZsb2F0ID0gLyogQF9fUFVSRV9fICovIF9fbmFtZSgodmFsdWUpID0+IHtcbiAgaWYgKHZhbHVlICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBcIk5hTlwiO1xuICB9XG4gIHN3aXRjaCAodmFsdWUpIHtcbiAgICBjYXNlIEluZmluaXR5OlxuICAgICAgcmV0dXJuIFwiSW5maW5pdHlcIjtcbiAgICBjYXNlIC1JbmZpbml0eTpcbiAgICAgIHJldHVybiBcIi1JbmZpbml0eVwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn0sIFwic2VyaWFsaXplRmxvYXRcIik7XG5cbi8vIHNyYy9zZXJkZS1qc29uLnRzXG52YXIgX2pzb24gPSAvKiBAX19QVVJFX18gKi8gX19uYW1lKChvYmopID0+IHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLmZpbHRlcigoXykgPT4gXyAhPSBudWxsKS5tYXAoX2pzb24pO1xuICB9XG4gIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqKSkge1xuICAgICAgaWYgKG9ialtrZXldID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB0YXJnZXRba2V5XSA9IF9qc29uKG9ialtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICByZXR1cm4gb2JqO1xufSwgXCJfanNvblwiKTtcblxuLy8gc3JjL3NwbGl0LWV2ZXJ5LnRzXG5mdW5jdGlvbiBzcGxpdEV2ZXJ5KHZhbHVlLCBkZWxpbWl0ZXIsIG51bURlbGltaXRlcnMpIHtcbiAgaWYgKG51bURlbGltaXRlcnMgPD0gMCB8fCAhTnVtYmVyLmlzSW50ZWdlcihudW1EZWxpbWl0ZXJzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbnVtYmVyIG9mIGRlbGltaXRlcnMgKFwiICsgbnVtRGVsaW1pdGVycyArIFwiKSBmb3Igc3BsaXRFdmVyeS5cIik7XG4gIH1cbiAgY29uc3Qgc2VnbWVudHMgPSB2YWx1ZS5zcGxpdChkZWxpbWl0ZXIpO1xuICBpZiAobnVtRGVsaW1pdGVycyA9PT0gMSkge1xuICAgIHJldHVybiBzZWdtZW50cztcbiAgfVxuICBjb25zdCBjb21wb3VuZFNlZ21lbnRzID0gW107XG4gIGxldCBjdXJyZW50U2VnbWVudCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY3VycmVudFNlZ21lbnQgPT09IFwiXCIpIHtcbiAgICAgIGN1cnJlbnRTZWdtZW50ID0gc2VnbWVudHNbaV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRTZWdtZW50ICs9IGRlbGltaXRlciArIHNlZ21lbnRzW2ldO1xuICAgIH1cbiAgICBpZiAoKGkgKyAxKSAlIG51bURlbGltaXRlcnMgPT09IDApIHtcbiAgICAgIGNvbXBvdW5kU2VnbWVudHMucHVzaChjdXJyZW50U2VnbWVudCk7XG4gICAgICBjdXJyZW50U2VnbWVudCA9IFwiXCI7XG4gICAgfVxuICB9XG4gIGlmIChjdXJyZW50U2VnbWVudCAhPT0gXCJcIikge1xuICAgIGNvbXBvdW5kU2VnbWVudHMucHVzaChjdXJyZW50U2VnbWVudCk7XG4gIH1cbiAgcmV0dXJuIGNvbXBvdW5kU2VnbWVudHM7XG59XG5fX25hbWUoc3BsaXRFdmVyeSwgXCJzcGxpdEV2ZXJ5XCIpO1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuXG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgTm9PcExvZ2dlcixcbiAgQ2xpZW50LFxuICBjb2xsZWN0Qm9keSxcbiAgQ29tbWFuZCxcbiAgU0VOU0lUSVZFX1NUUklORyxcbiAgY3JlYXRlQWdncmVnYXRlZENsaWVudCxcbiAgZGF0ZVRvVXRjU3RyaW5nLFxuICBwYXJzZVJmYzMzMzlEYXRlVGltZSxcbiAgcGFyc2VSZmMzMzM5RGF0ZVRpbWVXaXRoT2Zmc2V0LFxuICBwYXJzZVJmYzcyMzFEYXRlVGltZSxcbiAgcGFyc2VFcG9jaFRpbWVzdGFtcCxcbiAgdGhyb3dEZWZhdWx0RXJyb3IsXG4gIHdpdGhCYXNlRXhjZXB0aW9uLFxuICBsb2FkQ29uZmlnc0ZvckRlZmF1bHRNb2RlLFxuICBlbWl0V2FybmluZ0lmVW5zdXBwb3J0ZWRWZXJzaW9uLFxuICBnZXREZWZhdWx0RXh0ZW5zaW9uQ29uZmlndXJhdGlvbixcbiAgZ2V0RGVmYXVsdENsaWVudENvbmZpZ3VyYXRpb24sXG4gIHJlc29sdmVEZWZhdWx0UnVudGltZUNvbmZpZyxcbiAgU2VydmljZUV4Y2VwdGlvbixcbiAgZGVjb3JhdGVTZXJ2aWNlRXhjZXB0aW9uLFxuICBleHRlbmRlZEVuY29kZVVSSUNvbXBvbmVudCxcbiAgZ2V0QXJyYXlJZlNpbmdsZUl0ZW0sXG4gIGdldFZhbHVlRnJvbVRleHROb2RlLFxuICBTdHJpbmdXcmFwcGVyLFxuICBMYXp5SnNvblN0cmluZyxcbiAgbWFwLFxuICBjb252ZXJ0TWFwLFxuICB0YWtlLFxuICBwYXJzZUJvb2xlYW4sXG4gIGV4cGVjdEJvb2xlYW4sXG4gIGV4cGVjdE51bWJlcixcbiAgZXhwZWN0RmxvYXQzMixcbiAgZXhwZWN0TG9uZyxcbiAgZXhwZWN0SW50LFxuICBleHBlY3RJbnQzMixcbiAgZXhwZWN0U2hvcnQsXG4gIGV4cGVjdEJ5dGUsXG4gIGV4cGVjdE5vbk51bGwsXG4gIGV4cGVjdE9iamVjdCxcbiAgZXhwZWN0U3RyaW5nLFxuICBleHBlY3RVbmlvbixcbiAgc3RyaWN0UGFyc2VEb3VibGUsXG4gIHN0cmljdFBhcnNlRmxvYXQsXG4gIHN0cmljdFBhcnNlRmxvYXQzMixcbiAgbGltaXRlZFBhcnNlRG91YmxlLFxuICBoYW5kbGVGbG9hdCxcbiAgbGltaXRlZFBhcnNlRmxvYXQsXG4gIGxpbWl0ZWRQYXJzZUZsb2F0MzIsXG4gIHN0cmljdFBhcnNlTG9uZyxcbiAgc3RyaWN0UGFyc2VJbnQsXG4gIHN0cmljdFBhcnNlSW50MzIsXG4gIHN0cmljdFBhcnNlU2hvcnQsXG4gIHN0cmljdFBhcnNlQnl0ZSxcbiAgbG9nZ2VyLFxuICByZXNvbHZlZFBhdGgsXG4gIHNlcmlhbGl6ZUZsb2F0LFxuICBfanNvbixcbiAgc3BsaXRFdmVyeVxufSk7XG5cbiIsICIvLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYXdzL2F3cy1zZGstanMtdjMvYmxvYi9iZWU2NmZiZDJhNTE5YTE2YjU3Yzc4N2IyNjg5YWY4NTdhZjcyMGFmL2NsaWVudHMvY2xpZW50LWJlZHJvY2stcnVudGltZS9zcmMvcHJvdG9jb2xzL0F3c19yZXN0SnNvbjEudHNcbi8vIE1vZGlmaWVkIHRvIHJlbW92ZSB1bm5lY2Vzc2FyeSBjb2RlICh3ZSBvbmx5IG5lZWQgdG8gY2FsbCBgZGVfUmVzcG9uc2VTdHJlYW1gKSBhbmQgdG8gYWRqdXN0IGltcG9ydHMuXG5cbi8vIHNtaXRoeS10eXBlc2NyaXB0IGdlbmVyYXRlZCBjb2RlXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UgYXMgX19IdHRwUmVzcG9uc2UgfSBmcm9tICdAc21pdGh5L3Byb3RvY29sLWh0dHAnO1xuaW1wb3J0IHtcbiAgY29sbGVjdEJvZHksXG4gIGRlY29yYXRlU2VydmljZUV4Y2VwdGlvbiBhcyBfX2RlY29yYXRlU2VydmljZUV4Y2VwdGlvbixcbiAgZXhwZWN0SW50MzIgYXMgX19leHBlY3RJbnQzMixcbiAgZXhwZWN0U3RyaW5nIGFzIF9fZXhwZWN0U3RyaW5nLFxuICBtYXAsXG4gIHRha2UsXG59IGZyb20gJ0BzbWl0aHkvc21pdGh5LWNsaWVudCc7XG5pbXBvcnQge1xuICBFdmVudFN0cmVhbVNlcmRlQ29udGV4dCBhcyBfX0V2ZW50U3RyZWFtU2VyZGVDb250ZXh0LFxuICBSZXNwb25zZU1ldGFkYXRhIGFzIF9fUmVzcG9uc2VNZXRhZGF0YSxcbiAgU2VyZGVDb250ZXh0IGFzIF9fU2VyZGVDb250ZXh0LFxufSBmcm9tICdAc21pdGh5L3R5cGVzJztcblxuaW1wb3J0IHtcbiAgSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb24sXG4gIE1vZGVsU3RyZWFtRXJyb3JFeGNlcHRpb24sXG4gIFBheWxvYWRQYXJ0LFxuICBSZXNwb25zZVN0cmVhbSxcbiAgVGhyb3R0bGluZ0V4Y2VwdGlvbixcbiAgVmFsaWRhdGlvbkV4Y2VwdGlvbixcbn0gZnJvbSAnQGF3cy1zZGsvY2xpZW50LWJlZHJvY2stcnVudGltZSc7XG5cbi8qKlxuICogZGVzZXJpYWxpemVBd3NfcmVzdEpzb24xSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb25SZXNcbiAqL1xuY29uc3QgZGVfSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb25SZXMgPSBhc3luYyAoXG4gIHBhcnNlZE91dHB1dDogYW55LFxuICBjb250ZXh0OiBfX1NlcmRlQ29udGV4dCxcbik6IFByb21pc2U8SW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb24+ID0+IHtcbiAgY29uc3QgY29udGVudHM6IGFueSA9IG1hcCh7fSk7XG4gIGNvbnN0IGRhdGE6IGFueSA9IHBhcnNlZE91dHB1dC5ib2R5O1xuICBjb25zdCBkb2MgPSB0YWtlKGRhdGEsIHtcbiAgICBtZXNzYWdlOiBfX2V4cGVjdFN0cmluZyxcbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oY29udGVudHMsIGRvYyk7XG4gIGNvbnN0IGV4Y2VwdGlvbiA9IG5ldyBJbnRlcm5hbFNlcnZlckV4Y2VwdGlvbih7XG4gICAgJG1ldGFkYXRhOiBkZXNlcmlhbGl6ZU1ldGFkYXRhKHBhcnNlZE91dHB1dCksXG4gICAgLi4uY29udGVudHMsXG4gIH0pO1xuICByZXR1cm4gX19kZWNvcmF0ZVNlcnZpY2VFeGNlcHRpb24oZXhjZXB0aW9uLCBwYXJzZWRPdXRwdXQuYm9keSk7XG59O1xuXG4vKipcbiAqIGRlc2VyaWFsaXplQXdzX3Jlc3RKc29uMU1vZGVsU3RyZWFtRXJyb3JFeGNlcHRpb25SZXNcbiAqL1xuY29uc3QgZGVfTW9kZWxTdHJlYW1FcnJvckV4Y2VwdGlvblJlcyA9IGFzeW5jIChcbiAgcGFyc2VkT3V0cHV0OiBhbnksXG4gIGNvbnRleHQ6IF9fU2VyZGVDb250ZXh0LFxuKTogUHJvbWlzZTxNb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uPiA9PiB7XG4gIGNvbnN0IGNvbnRlbnRzOiBhbnkgPSBtYXAoe30pO1xuICBjb25zdCBkYXRhOiBhbnkgPSBwYXJzZWRPdXRwdXQuYm9keTtcbiAgY29uc3QgZG9jID0gdGFrZShkYXRhLCB7XG4gICAgbWVzc2FnZTogX19leHBlY3RTdHJpbmcsXG4gICAgb3JpZ2luYWxNZXNzYWdlOiBfX2V4cGVjdFN0cmluZyxcbiAgICBvcmlnaW5hbFN0YXR1c0NvZGU6IF9fZXhwZWN0SW50MzIsXG4gIH0pO1xuICBPYmplY3QuYXNzaWduKGNvbnRlbnRzLCBkb2MpO1xuICBjb25zdCBleGNlcHRpb24gPSBuZXcgTW9kZWxTdHJlYW1FcnJvckV4Y2VwdGlvbih7XG4gICAgJG1ldGFkYXRhOiBkZXNlcmlhbGl6ZU1ldGFkYXRhKHBhcnNlZE91dHB1dCksXG4gICAgLi4uY29udGVudHMsXG4gIH0pO1xuICByZXR1cm4gX19kZWNvcmF0ZVNlcnZpY2VFeGNlcHRpb24oZXhjZXB0aW9uLCBwYXJzZWRPdXRwdXQuYm9keSk7XG59O1xuXG4vKipcbiAqIGRlc2VyaWFsaXplQXdzX3Jlc3RKc29uMVRocm90dGxpbmdFeGNlcHRpb25SZXNcbiAqL1xuY29uc3QgZGVfVGhyb3R0bGluZ0V4Y2VwdGlvblJlcyA9IGFzeW5jIChcbiAgcGFyc2VkT3V0cHV0OiBhbnksXG4gIGNvbnRleHQ6IF9fU2VyZGVDb250ZXh0LFxuKTogUHJvbWlzZTxUaHJvdHRsaW5nRXhjZXB0aW9uPiA9PiB7XG4gIGNvbnN0IGNvbnRlbnRzOiBhbnkgPSBtYXAoe30pO1xuICBjb25zdCBkYXRhOiBhbnkgPSBwYXJzZWRPdXRwdXQuYm9keTtcbiAgY29uc3QgZG9jID0gdGFrZShkYXRhLCB7XG4gICAgbWVzc2FnZTogX19leHBlY3RTdHJpbmcsXG4gIH0pO1xuICBPYmplY3QuYXNzaWduKGNvbnRlbnRzLCBkb2MpO1xuICBjb25zdCBleGNlcHRpb24gPSBuZXcgVGhyb3R0bGluZ0V4Y2VwdGlvbih7XG4gICAgJG1ldGFkYXRhOiBkZXNlcmlhbGl6ZU1ldGFkYXRhKHBhcnNlZE91dHB1dCksXG4gICAgLi4uY29udGVudHMsXG4gIH0pO1xuICByZXR1cm4gX19kZWNvcmF0ZVNlcnZpY2VFeGNlcHRpb24oZXhjZXB0aW9uLCBwYXJzZWRPdXRwdXQuYm9keSk7XG59O1xuXG4vKipcbiAqIGRlc2VyaWFsaXplQXdzX3Jlc3RKc29uMVZhbGlkYXRpb25FeGNlcHRpb25SZXNcbiAqL1xuY29uc3QgZGVfVmFsaWRhdGlvbkV4Y2VwdGlvblJlcyA9IGFzeW5jIChcbiAgcGFyc2VkT3V0cHV0OiBhbnksXG4gIGNvbnRleHQ6IF9fU2VyZGVDb250ZXh0LFxuKTogUHJvbWlzZTxWYWxpZGF0aW9uRXhjZXB0aW9uPiA9PiB7XG4gIGNvbnN0IGNvbnRlbnRzOiBhbnkgPSBtYXAoe30pO1xuICBjb25zdCBkYXRhOiBhbnkgPSBwYXJzZWRPdXRwdXQuYm9keTtcbiAgY29uc3QgZG9jID0gdGFrZShkYXRhLCB7XG4gICAgbWVzc2FnZTogX19leHBlY3RTdHJpbmcsXG4gIH0pO1xuICBPYmplY3QuYXNzaWduKGNvbnRlbnRzLCBkb2MpO1xuICBjb25zdCBleGNlcHRpb24gPSBuZXcgVmFsaWRhdGlvbkV4Y2VwdGlvbih7XG4gICAgJG1ldGFkYXRhOiBkZXNlcmlhbGl6ZU1ldGFkYXRhKHBhcnNlZE91dHB1dCksXG4gICAgLi4uY29udGVudHMsXG4gIH0pO1xuICByZXR1cm4gX19kZWNvcmF0ZVNlcnZpY2VFeGNlcHRpb24oZXhjZXB0aW9uLCBwYXJzZWRPdXRwdXQuYm9keSk7XG59O1xuXG4vKipcbiAqIGRlc2VyaWFsaXplQXdzX3Jlc3RKc29uMVJlc3BvbnNlU3RyZWFtXG4gKi9cbmV4cG9ydCBjb25zdCBkZV9SZXNwb25zZVN0cmVhbSA9IChcbiAgb3V0cHV0OiBhbnksXG4gIGNvbnRleHQ6IF9fU2VyZGVDb250ZXh0ICYgX19FdmVudFN0cmVhbVNlcmRlQ29udGV4dCxcbik6IEFzeW5jSXRlcmFibGU8UmVzcG9uc2VTdHJlYW0+ID0+IHtcbiAgcmV0dXJuIGNvbnRleHQuZXZlbnRTdHJlYW1NYXJzaGFsbGVyLmRlc2VyaWFsaXplKG91dHB1dCwgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50WydjaHVuayddICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNodW5rOiBhd2FpdCBkZV9QYXlsb2FkUGFydF9ldmVudChldmVudFsnY2h1bmsnXSwgY29udGV4dCksXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoZXZlbnRbJ2ludGVybmFsU2VydmVyRXhjZXB0aW9uJ10gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb246IGF3YWl0IGRlX0ludGVybmFsU2VydmVyRXhjZXB0aW9uX2V2ZW50KFxuICAgICAgICAgIGV2ZW50WydpbnRlcm5hbFNlcnZlckV4Y2VwdGlvbiddLFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoZXZlbnRbJ21vZGVsU3RyZWFtRXJyb3JFeGNlcHRpb24nXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uOiBhd2FpdCBkZV9Nb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uX2V2ZW50KFxuICAgICAgICAgIGV2ZW50Wydtb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uJ10sXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChldmVudFsndmFsaWRhdGlvbkV4Y2VwdGlvbiddICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbGlkYXRpb25FeGNlcHRpb246IGF3YWl0IGRlX1ZhbGlkYXRpb25FeGNlcHRpb25fZXZlbnQoZXZlbnRbJ3ZhbGlkYXRpb25FeGNlcHRpb24nXSwgY29udGV4dCksXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoZXZlbnRbJ3Rocm90dGxpbmdFeGNlcHRpb24nXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aHJvdHRsaW5nRXhjZXB0aW9uOiBhd2FpdCBkZV9UaHJvdHRsaW5nRXhjZXB0aW9uX2V2ZW50KGV2ZW50Wyd0aHJvdHRsaW5nRXhjZXB0aW9uJ10sIGNvbnRleHQpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgJHVua25vd246IG91dHB1dCB9O1xuICB9KTtcbn07XG5jb25zdCBkZV9JbnRlcm5hbFNlcnZlckV4Y2VwdGlvbl9ldmVudCA9IGFzeW5jIChcbiAgb3V0cHV0OiBhbnksXG4gIGNvbnRleHQ6IF9fU2VyZGVDb250ZXh0LFxuKTogUHJvbWlzZTxJbnRlcm5hbFNlcnZlckV4Y2VwdGlvbj4gPT4ge1xuICBjb25zdCBwYXJzZWRPdXRwdXQ6IGFueSA9IHtcbiAgICAuLi5vdXRwdXQsXG4gICAgYm9keTogYXdhaXQgcGFyc2VCb2R5KG91dHB1dC5ib2R5LCBjb250ZXh0KSxcbiAgfTtcbiAgcmV0dXJuIGRlX0ludGVybmFsU2VydmVyRXhjZXB0aW9uUmVzKHBhcnNlZE91dHB1dCwgY29udGV4dCk7XG59O1xuY29uc3QgZGVfTW9kZWxTdHJlYW1FcnJvckV4Y2VwdGlvbl9ldmVudCA9IGFzeW5jIChcbiAgb3V0cHV0OiBhbnksXG4gIGNvbnRleHQ6IF9fU2VyZGVDb250ZXh0LFxuKTogUHJvbWlzZTxNb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uPiA9PiB7XG4gIGNvbnN0IHBhcnNlZE91dHB1dDogYW55ID0ge1xuICAgIC4uLm91dHB1dCxcbiAgICBib2R5OiBhd2FpdCBwYXJzZUJvZHkob3V0cHV0LmJvZHksIGNvbnRleHQpLFxuICB9O1xuICByZXR1cm4gZGVfTW9kZWxTdHJlYW1FcnJvckV4Y2VwdGlvblJlcyhwYXJzZWRPdXRwdXQsIGNvbnRleHQpO1xufTtcbmNvbnN0IGRlX1BheWxvYWRQYXJ0X2V2ZW50ID0gYXN5bmMgKG91dHB1dDogYW55LCBjb250ZXh0OiBfX1NlcmRlQ29udGV4dCk6IFByb21pc2U8UGF5bG9hZFBhcnQ+ID0+IHtcbiAgY29uc3QgY29udGVudHM6IFBheWxvYWRQYXJ0ID0ge30gYXMgYW55O1xuICBjb25zdCBkYXRhOiBhbnkgPSBhd2FpdCBwYXJzZUJvZHkob3V0cHV0LmJvZHksIGNvbnRleHQpO1xuICBPYmplY3QuYXNzaWduKGNvbnRlbnRzLCBkZV9QYXlsb2FkUGFydChkYXRhLCBjb250ZXh0KSk7XG4gIHJldHVybiBjb250ZW50cztcbn07XG5jb25zdCBkZV9UaHJvdHRsaW5nRXhjZXB0aW9uX2V2ZW50ID0gYXN5bmMgKFxuICBvdXRwdXQ6IGFueSxcbiAgY29udGV4dDogX19TZXJkZUNvbnRleHQsXG4pOiBQcm9taXNlPFRocm90dGxpbmdFeGNlcHRpb24+ID0+IHtcbiAgY29uc3QgcGFyc2VkT3V0cHV0OiBhbnkgPSB7XG4gICAgLi4ub3V0cHV0LFxuICAgIGJvZHk6IGF3YWl0IHBhcnNlQm9keShvdXRwdXQuYm9keSwgY29udGV4dCksXG4gIH07XG4gIHJldHVybiBkZV9UaHJvdHRsaW5nRXhjZXB0aW9uUmVzKHBhcnNlZE91dHB1dCwgY29udGV4dCk7XG59O1xuY29uc3QgZGVfVmFsaWRhdGlvbkV4Y2VwdGlvbl9ldmVudCA9IGFzeW5jIChcbiAgb3V0cHV0OiBhbnksXG4gIGNvbnRleHQ6IF9fU2VyZGVDb250ZXh0LFxuKTogUHJvbWlzZTxWYWxpZGF0aW9uRXhjZXB0aW9uPiA9PiB7XG4gIGNvbnN0IHBhcnNlZE91dHB1dDogYW55ID0ge1xuICAgIC4uLm91dHB1dCxcbiAgICBib2R5OiBhd2FpdCBwYXJzZUJvZHkob3V0cHV0LmJvZHksIGNvbnRleHQpLFxuICB9O1xuICByZXR1cm4gZGVfVmFsaWRhdGlvbkV4Y2VwdGlvblJlcyhwYXJzZWRPdXRwdXQsIGNvbnRleHQpO1xufTtcbi8qKlxuICogZGVzZXJpYWxpemVBd3NfcmVzdEpzb24xUGF5bG9hZFBhcnRcbiAqL1xuY29uc3QgZGVfUGF5bG9hZFBhcnQgPSAob3V0cHV0OiBhbnksIGNvbnRleHQ6IF9fU2VyZGVDb250ZXh0KTogUGF5bG9hZFBhcnQgPT4ge1xuICByZXR1cm4gdGFrZShvdXRwdXQsIHtcbiAgICBieXRlczogY29udGV4dC5iYXNlNjREZWNvZGVyLFxuICB9KSBhcyBhbnk7XG59O1xuXG5jb25zdCBkZXNlcmlhbGl6ZU1ldGFkYXRhID0gKG91dHB1dDogX19IdHRwUmVzcG9uc2UpOiBfX1Jlc3BvbnNlTWV0YWRhdGEgPT4gKHtcbiAgaHR0cFN0YXR1c0NvZGU6IG91dHB1dC5zdGF0dXNDb2RlLFxuICByZXF1ZXN0SWQ6XG4gICAgb3V0cHV0LmhlYWRlcnNbJ3gtYW16bi1yZXF1ZXN0aWQnXSA/P1xuICAgIG91dHB1dC5oZWFkZXJzWyd4LWFtem4tcmVxdWVzdC1pZCddID8/XG4gICAgb3V0cHV0LmhlYWRlcnNbJ3gtYW16LXJlcXVlc3QtaWQnXSA/P1xuICAgICcnLFxuICBleHRlbmRlZFJlcXVlc3RJZDogb3V0cHV0LmhlYWRlcnNbJ3gtYW16LWlkLTInXSA/PyAnJyxcbiAgY2ZJZDogb3V0cHV0LmhlYWRlcnNbJ3gtYW16LWNmLWlkJ10gPz8gJycsXG59KTtcblxuLy8gRW5jb2RlIFVpbnQ4QXJyYXkgZGF0YSBpbnRvIHN0cmluZyB3aXRoIHV0Zi04LlxuY29uc3QgY29sbGVjdEJvZHlTdHJpbmcgPSAoc3RyZWFtQm9keTogYW55LCBjb250ZXh0OiBfX1NlcmRlQ29udGV4dCk6IFByb21pc2U8c3RyaW5nPiA9PlxuICBjb2xsZWN0Qm9keShzdHJlYW1Cb2R5LCBjb250ZXh0KS50aGVuKChib2R5KSA9PiBjb250ZXh0LnV0ZjhFbmNvZGVyKGJvZHkpKTtcblxuY29uc3QgcGFyc2VCb2R5ID0gKHN0cmVhbUJvZHk6IGFueSwgY29udGV4dDogX19TZXJkZUNvbnRleHQpOiBhbnkgPT5cbiAgY29sbGVjdEJvZHlTdHJpbmcoc3RyZWFtQm9keSwgY29udGV4dCkudGhlbigoZW5jb2RlZCkgPT4ge1xuICAgIGlmIChlbmNvZGVkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZW5jb2RlZCk7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfSk7XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjIGJ5IFN0YWlubGVzcy4gU2VlIENPTlRSSUJVVElORy5tZCBmb3IgZGV0YWlscy5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBpbnRlcm5hbCBzaGltcyBhbmQgdXRpbGl0eSBmdW5jdGlvbnMgZm9yIGVudmlyb25tZW50cyB3aGVyZSBjZXJ0YWluIE5vZGUuanMgb3IgZ2xvYmFsIHR5cGVzIG1heSBub3QgYmUgYXZhaWxhYmxlLlxuICpcbiAqIFRoZXNlIGFyZSB1c2VkIHRvIGVuc3VyZSB3ZSBjYW4gcHJvdmlkZSBhIGNvbnNpc3RlbnQgYmVoYXZpb3VyIGJldHdlZW4gZGlmZmVyZW50IEphdmFTY3JpcHQgZW52aXJvbm1lbnRzIGFuZCBnb29kIGVycm9yXG4gKiBtZXNzYWdlcyBpbiBjYXNlcyB3aGVyZSBhbiBlbnZpcm9ubWVudCBpc24ndCBmdWxseSBzdXBwb3J0ZWQuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBGZXRjaCB9IGZyb20gJy4vYnVpbHRpbi10eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFJlYWRhYmxlU3RyZWFtIH0gZnJvbSAnLi9zaGltLXR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRGZXRjaCgpOiBGZXRjaCB7XG4gIGlmICh0eXBlb2YgZmV0Y2ggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZldGNoIGFzIGFueTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnYGZldGNoYCBpcyBub3QgZGVmaW5lZCBhcyBhIGdsb2JhbDsgRWl0aGVyIHBhc3MgYGZldGNoYCB0byB0aGUgY2xpZW50LCBgbmV3IEFudGhyb3BpYyh7IGZldGNoIH0pYCBvciBwb2x5ZmlsbCB0aGUgZ2xvYmFsLCBgZ2xvYmFsVGhpcy5mZXRjaCA9IGZldGNoYCcsXG4gICk7XG59XG5cbnR5cGUgUmVhZGFibGVTdHJlYW1BcmdzID0gQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBSZWFkYWJsZVN0cmVhbT47XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUmVhZGFibGVTdHJlYW0oLi4uYXJnczogUmVhZGFibGVTdHJlYW1BcmdzKTogUmVhZGFibGVTdHJlYW0ge1xuICBjb25zdCBSZWFkYWJsZVN0cmVhbSA9IChnbG9iYWxUaGlzIGFzIGFueSkuUmVhZGFibGVTdHJlYW07XG4gIGlmICh0eXBlb2YgUmVhZGFibGVTdHJlYW0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gTm90ZTogQWxsIG9mIHRoZSBwbGF0Zm9ybXMgLyBydW50aW1lcyB3ZSBvZmZpY2lhbGx5IHN1cHBvcnQgYWxyZWFkeSBkZWZpbmVcbiAgICAvLyBgUmVhZGFibGVTdHJlYW1gIGFzIGEgZ2xvYmFsLCBzbyB0aGlzIHNob3VsZCBvbmx5IGV2ZXIgYmUgaGl0IG9uIHVuc3VwcG9ydGVkIHJ1bnRpbWVzLlxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdgUmVhZGFibGVTdHJlYW1gIGlzIG5vdCBkZWZpbmVkIGFzIGEgZ2xvYmFsOyBZb3Ugd2lsbCBuZWVkIHRvIHBvbHlmaWxsIGl0LCBgZ2xvYmFsVGhpcy5SZWFkYWJsZVN0cmVhbSA9IFJlYWRhYmxlU3RyZWFtYCcsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVhZGFibGVTdHJlYW0oLi4uYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUZyb208VD4oaXRlcmFibGU6IEl0ZXJhYmxlPFQ+IHwgQXN5bmNJdGVyYWJsZTxUPik6IFJlYWRhYmxlU3RyZWFtPFQ+IHtcbiAgbGV0IGl0ZXI6IEFzeW5jSXRlcmF0b3I8VD4gfCBJdGVyYXRvcjxUPiA9XG4gICAgU3ltYm9sLmFzeW5jSXRlcmF0b3IgaW4gaXRlcmFibGUgPyBpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSA6IGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl0oKTtcblxuICByZXR1cm4gbWFrZVJlYWRhYmxlU3RyZWFtKHtcbiAgICBzdGFydCgpIHt9LFxuICAgIGFzeW5jIHB1bGwoY29udHJvbGxlcjogYW55KSB7XG4gICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCBpdGVyLm5leHQoKTtcbiAgICAgIGlmIChkb25lKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBjYW5jZWwoKSB7XG4gICAgICBhd2FpdCBpdGVyLnJldHVybj8uKCk7XG4gICAgfSxcbiAgfSk7XG59XG5cbi8qKlxuICogTW9zdCBicm93c2VycyBkb24ndCB5ZXQgaGF2ZSBhc3luYyBpdGVyYWJsZSBzdXBwb3J0IGZvciBSZWFkYWJsZVN0cmVhbSxcbiAqIGFuZCBOb2RlIGhhcyBhIHZlcnkgZGlmZmVyZW50IHdheSBvZiByZWFkaW5nIGJ5dGVzIGZyb20gaXRzIFwiUmVhZGFibGVTdHJlYW1cIi5cbiAqXG4gKiBUaGlzIHBvbHlmaWxsIHdhcyBwdWxsZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vTWF0dGlhc0J1ZWxlbnMvd2ViLXN0cmVhbXMtcG9seWZpbGwvcHVsbC8xMjIjaXNzdWVjb21tZW50LTE2MjczNTQ0OTBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtVG9Bc3luY0l0ZXJhYmxlPFQ+KHN0cmVhbTogYW55KTogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFQ+IHtcbiAgaWYgKHN0cmVhbVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pIHJldHVybiBzdHJlYW07XG5cbiAgY29uc3QgcmVhZGVyID0gc3RyZWFtLmdldFJlYWRlcigpO1xuICByZXR1cm4ge1xuICAgIGFzeW5jIG5leHQoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICBpZiAocmVzdWx0Py5kb25lKSByZWFkZXIucmVsZWFzZUxvY2soKTsgLy8gcmVsZWFzZSBsb2NrIHdoZW4gc3RyZWFtIGJlY29tZXMgY2xvc2VkXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlYWRlci5yZWxlYXNlTG9jaygpOyAvLyByZWxlYXNlIGxvY2sgd2hlbiBzdHJlYW0gYmVjb21lcyBlcnJvcmVkXG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyByZXR1cm4oKSB7XG4gICAgICBjb25zdCBjYW5jZWxQcm9taXNlID0gcmVhZGVyLmNhbmNlbCgpO1xuICAgICAgcmVhZGVyLnJlbGVhc2VMb2NrKCk7XG4gICAgICBhd2FpdCBjYW5jZWxQcm9taXNlO1xuICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9O1xuICAgIH0sXG4gICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gIH07XG59XG5cbi8qKlxuICogQ2FuY2VscyBhIFJlYWRhYmxlU3RyZWFtIHdlIGRvbid0IG5lZWQgdG8gY29uc3VtZS5cbiAqIFNlZSBodHRwczovL3VuZGljaS5ub2RlanMub3JnLyMvP2lkPWdhcmJhZ2UtY29sbGVjdGlvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ2FuY2VsUmVhZGFibGVTdHJlYW0oc3RyZWFtOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKHN0cmVhbSA9PT0gbnVsbCB8fCB0eXBlb2Ygc3RyZWFtICE9PSAnb2JqZWN0JykgcmV0dXJuO1xuXG4gIGlmIChzdHJlYW1bU3ltYm9sLmFzeW5jSXRlcmF0b3JdKSB7XG4gICAgYXdhaXQgc3RyZWFtW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpLnJldHVybj8uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVhZGVyID0gc3RyZWFtLmdldFJlYWRlcigpO1xuICBjb25zdCBjYW5jZWxQcm9taXNlID0gcmVhZGVyLmNhbmNlbCgpO1xuICByZWFkZXIucmVsZWFzZUxvY2soKTtcbiAgYXdhaXQgY2FuY2VsUHJvbWlzZTtcbn1cbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWMgYnkgU3RhaW5sZXNzLiBTZWUgQ09OVFJJQlVUSU5HLm1kIGZvciBkZXRhaWxzLlxuXG5pbXBvcnQgeyBBbnRocm9waWNFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3InO1xuXG4vLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybC1zY2hlbWUtc3RyaW5nXG5jb25zdCBzdGFydHNXaXRoU2NoZW1lUmVnZXhwID0gL15bYS16XVthLXowLTkrLi1dKjovaTtcblxuZXhwb3J0IGNvbnN0IGlzQWJzb2x1dGVVUkwgPSAodXJsOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIHN0YXJ0c1dpdGhTY2hlbWVSZWdleHAudGVzdCh1cmwpO1xufTtcblxuZXhwb3J0IGxldCBpc0FycmF5ID0gKHZhbDogdW5rbm93bik6IHZhbCBpcyB1bmtub3duW10gPT4gKChpc0FycmF5ID0gQXJyYXkuaXNBcnJheSksIGlzQXJyYXkodmFsKSk7XG5leHBvcnQgbGV0IGlzUmVhZG9ubHlBcnJheSA9IGlzQXJyYXkgYXMgKHZhbDogdW5rbm93bikgPT4gdmFsIGlzIHJlYWRvbmx5IHVua25vd25bXTtcblxuLyoqIFJldHVybnMgYW4gb2JqZWN0IGlmIHRoZSBnaXZlbiB2YWx1ZSBpc24ndCBhbiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIGFzLWlzICovXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVPYmooeDogdW5rbm93bik6IG9iamVjdCB7XG4gIGlmICh0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICByZXR1cm4geCA/PyB7fTtcbn1cblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM0NDkxMjg3XG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eU9iaihvYmo6IE9iamVjdCB8IG51bGwgfCB1bmRlZmluZWQpOiBib29sZWFuIHtcbiAgaWYgKCFvYmopIHJldHVybiB0cnVlO1xuICBmb3IgKGNvbnN0IF9rIGluIG9iaikgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvbGF0ZXN0L3J1bGVzL25vLXByb3RvdHlwZS1idWlsdGluc1xuZXhwb3J0IGZ1bmN0aW9uIGhhc093bjxUIGV4dGVuZHMgb2JqZWN0ID0gb2JqZWN0PihvYmo6IFQsIGtleTogUHJvcGVydHlLZXkpOiBrZXkgaXMga2V5b2YgVCB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmoob2JqOiB1bmtub3duKTogb2JqIGlzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KG9iaik7XG59XG5cbmV4cG9ydCBjb25zdCBlbnN1cmVQcmVzZW50ID0gPFQ+KHZhbHVlOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IFQgPT4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBBbnRocm9waWNFcnJvcihgRXhwZWN0ZWQgYSB2YWx1ZSB0byBiZSBnaXZlbiBidXQgcmVjZWl2ZWQgJHt2YWx1ZX0gaW5zdGVhZC5gKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVBvc2l0aXZlSW50ZWdlciA9IChuYW1lOiBzdHJpbmcsIG46IHVua25vd24pOiBudW1iZXIgPT4ge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8ICFOdW1iZXIuaXNJbnRlZ2VyKG4pKSB7XG4gICAgdGhyb3cgbmV3IEFudGhyb3BpY0Vycm9yKGAke25hbWV9IG11c3QgYmUgYW4gaW50ZWdlcmApO1xuICB9XG4gIGlmIChuIDwgMCkge1xuICAgIHRocm93IG5ldyBBbnRocm9waWNFcnJvcihgJHtuYW1lfSBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlcmApO1xuICB9XG4gIHJldHVybiBuO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvZXJjZUludGVnZXIgPSAodmFsdWU6IHVua25vd24pOiBudW1iZXIgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG5cbiAgdGhyb3cgbmV3IEFudGhyb3BpY0Vycm9yKGBDb3VsZCBub3QgY29lcmNlICR7dmFsdWV9ICh0eXBlOiAke3R5cGVvZiB2YWx1ZX0pIGludG8gYSBudW1iZXJgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb2VyY2VGbG9hdCA9ICh2YWx1ZTogdW5rbm93bik6IG51bWJlciA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdmFsdWU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgdGhyb3cgbmV3IEFudGhyb3BpY0Vycm9yKGBDb3VsZCBub3QgY29lcmNlICR7dmFsdWV9ICh0eXBlOiAke3R5cGVvZiB2YWx1ZX0pIGludG8gYSBudW1iZXJgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb2VyY2VCb29sZWFuID0gKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykgcmV0dXJuIHZhbHVlO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgcmV0dXJuIHZhbHVlID09PSAndHJ1ZSc7XG4gIHJldHVybiBCb29sZWFuKHZhbHVlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXliZUNvZXJjZUludGVnZXIgPSAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGNvZXJjZUludGVnZXIodmFsdWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1heWJlQ29lcmNlRmxvYXQgPSAodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGNvZXJjZUZsb2F0KHZhbHVlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXliZUNvZXJjZUJvb2xlYW4gPSAodmFsdWU6IHVua25vd24pOiBib29sZWFuIHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBjb2VyY2VCb29sZWFuKHZhbHVlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzYWZlSlNPTiA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufTtcblxuLy8gR2V0cyBhIHZhbHVlIGZyb20gYW4gb2JqZWN0LCBkZWxldGVzIHRoZSBrZXksIGFuZCByZXR1cm5zIHRoZSB2YWx1ZSAob3IgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZClcbmV4cG9ydCBjb25zdCBwb3AgPSA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4sIEsgZXh0ZW5kcyBzdHJpbmc+KG9iajogVCwga2V5OiBLKTogVFtLXSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gIGRlbGV0ZSBvYmpba2V5XTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWMgYnkgU3RhaW5sZXNzLiBTZWUgQ09OVFJJQlVUSU5HLm1kIGZvciBkZXRhaWxzLlxuXG5pbXBvcnQgeyBoYXNPd24gfSBmcm9tICcuL3ZhbHVlcyc7XG5pbXBvcnQgeyB0eXBlIEJhc2VBbnRocm9waWMgfSBmcm9tICcuLi8uLi9jbGllbnQnO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuLi9yZXF1ZXN0LW9wdGlvbnMnO1xuXG50eXBlIExvZ0ZuID0gKG1lc3NhZ2U6IHN0cmluZywgLi4ucmVzdDogdW5rbm93bltdKSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgTG9nZ2VyID0ge1xuICBlcnJvcjogTG9nRm47XG4gIHdhcm46IExvZ0ZuO1xuICBpbmZvOiBMb2dGbjtcbiAgZGVidWc6IExvZ0ZuO1xufTtcbmV4cG9ydCB0eXBlIExvZ0xldmVsID0gJ29mZicgfCAnZXJyb3InIHwgJ3dhcm4nIHwgJ2luZm8nIHwgJ2RlYnVnJztcblxuY29uc3QgbGV2ZWxOdW1iZXJzID0ge1xuICBvZmY6IDAsXG4gIGVycm9yOiAyMDAsXG4gIHdhcm46IDMwMCxcbiAgaW5mbzogNDAwLFxuICBkZWJ1ZzogNTAwLFxufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlTG9nTGV2ZWwgPSAoXG4gIG1heWJlTGV2ZWw6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgc291cmNlTmFtZTogc3RyaW5nLFxuICBjbGllbnQ6IEJhc2VBbnRocm9waWMsXG4pOiBMb2dMZXZlbCB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmICghbWF5YmVMZXZlbCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKGhhc093bihsZXZlbE51bWJlcnMsIG1heWJlTGV2ZWwpKSB7XG4gICAgcmV0dXJuIG1heWJlTGV2ZWw7XG4gIH1cbiAgbG9nZ2VyRm9yKGNsaWVudCkud2FybihcbiAgICBgJHtzb3VyY2VOYW1lfSB3YXMgc2V0IHRvICR7SlNPTi5zdHJpbmdpZnkobWF5YmVMZXZlbCl9LCBleHBlY3RlZCBvbmUgb2YgJHtKU09OLnN0cmluZ2lmeShcbiAgICAgIE9iamVjdC5rZXlzKGxldmVsTnVtYmVycyksXG4gICAgKX1gLFxuICApO1xuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIG1ha2VMb2dGbihmbkxldmVsOiBrZXlvZiBMb2dnZXIsIGxvZ2dlcjogTG9nZ2VyIHwgdW5kZWZpbmVkLCBsb2dMZXZlbDogTG9nTGV2ZWwpIHtcbiAgaWYgKCFsb2dnZXIgfHwgbGV2ZWxOdW1iZXJzW2ZuTGV2ZWxdID4gbGV2ZWxOdW1iZXJzW2xvZ0xldmVsXSkge1xuICAgIHJldHVybiBub29wO1xuICB9IGVsc2Uge1xuICAgIC8vIERvbid0IHdyYXAgbG9nZ2VyIGZ1bmN0aW9ucywgd2Ugd2FudCB0aGUgc3RhY2t0cmFjZSBpbnRhY3QhXG4gICAgcmV0dXJuIGxvZ2dlcltmbkxldmVsXS5iaW5kKGxvZ2dlcik7XG4gIH1cbn1cblxuY29uc3Qgbm9vcExvZ2dlciA9IHtcbiAgZXJyb3I6IG5vb3AsXG4gIHdhcm46IG5vb3AsXG4gIGluZm86IG5vb3AsXG4gIGRlYnVnOiBub29wLFxufTtcblxubGV0IGNhY2hlZExvZ2dlcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXA8TG9nZ2VyLCBbTG9nTGV2ZWwsIExvZ2dlcl0+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dnZXJGb3IoY2xpZW50OiBCYXNlQW50aHJvcGljKTogTG9nZ2VyIHtcbiAgY29uc3QgbG9nZ2VyID0gY2xpZW50LmxvZ2dlcjtcbiAgY29uc3QgbG9nTGV2ZWwgPSBjbGllbnQubG9nTGV2ZWwgPz8gJ29mZic7XG4gIGlmICghbG9nZ2VyKSB7XG4gICAgcmV0dXJuIG5vb3BMb2dnZXI7XG4gIH1cblxuICBjb25zdCBjYWNoZWRMb2dnZXIgPSBjYWNoZWRMb2dnZXJzLmdldChsb2dnZXIpO1xuICBpZiAoY2FjaGVkTG9nZ2VyICYmIGNhY2hlZExvZ2dlclswXSA9PT0gbG9nTGV2ZWwpIHtcbiAgICByZXR1cm4gY2FjaGVkTG9nZ2VyWzFdO1xuICB9XG5cbiAgY29uc3QgbGV2ZWxMb2dnZXIgPSB7XG4gICAgZXJyb3I6IG1ha2VMb2dGbignZXJyb3InLCBsb2dnZXIsIGxvZ0xldmVsKSxcbiAgICB3YXJuOiBtYWtlTG9nRm4oJ3dhcm4nLCBsb2dnZXIsIGxvZ0xldmVsKSxcbiAgICBpbmZvOiBtYWtlTG9nRm4oJ2luZm8nLCBsb2dnZXIsIGxvZ0xldmVsKSxcbiAgICBkZWJ1ZzogbWFrZUxvZ0ZuKCdkZWJ1ZycsIGxvZ2dlciwgbG9nTGV2ZWwpLFxuICB9O1xuXG4gIGNhY2hlZExvZ2dlcnMuc2V0KGxvZ2dlciwgW2xvZ0xldmVsLCBsZXZlbExvZ2dlcl0pO1xuXG4gIHJldHVybiBsZXZlbExvZ2dlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlcXVlc3REZXRhaWxzID0gKGRldGFpbHM6IHtcbiAgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zIHwgdW5kZWZpbmVkO1xuICBoZWFkZXJzPzogSGVhZGVycyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCB1bmRlZmluZWQ7XG4gIHJldHJ5T2ZSZXF1ZXN0TG9nSUQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJldHJ5T2Y/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHVybD86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBtZXRob2Q/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uTXM/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG1lc3NhZ2U/OiB1bmtub3duO1xuICBib2R5PzogdW5rbm93bjtcbn0pID0+IHtcbiAgaWYgKGRldGFpbHMub3B0aW9ucykge1xuICAgIGRldGFpbHMub3B0aW9ucyA9IHsgLi4uZGV0YWlscy5vcHRpb25zIH07XG4gICAgZGVsZXRlIGRldGFpbHMub3B0aW9uc1snaGVhZGVycyddOyAvLyByZWR1bmRhbnQgKyBsZWFrcyBpbnRlcm5hbHNcbiAgfVxuICBpZiAoZGV0YWlscy5oZWFkZXJzKSB7XG4gICAgZGV0YWlscy5oZWFkZXJzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgKGRldGFpbHMuaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMgPyBbLi4uZGV0YWlscy5oZWFkZXJzXSA6IE9iamVjdC5lbnRyaWVzKGRldGFpbHMuaGVhZGVycykpLm1hcChcbiAgICAgICAgKFtuYW1lLCB2YWx1ZV0pID0+IFtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIChcbiAgICAgICAgICAgIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3gtYXBpLWtleScgfHxcbiAgICAgICAgICAgIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2F1dGhvcml6YXRpb24nIHx8XG4gICAgICAgICAgICBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb29raWUnIHx8XG4gICAgICAgICAgICBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZXQtY29va2llJ1xuICAgICAgICAgICkgP1xuICAgICAgICAgICAgJyoqKidcbiAgICAgICAgICA6IHZhbHVlLFxuICAgICAgICBdLFxuICAgICAgKSxcbiAgICApO1xuICB9XG4gIGlmICgncmV0cnlPZlJlcXVlc3RMb2dJRCcgaW4gZGV0YWlscykge1xuICAgIGlmIChkZXRhaWxzLnJldHJ5T2ZSZXF1ZXN0TG9nSUQpIHtcbiAgICAgIGRldGFpbHMucmV0cnlPZiA9IGRldGFpbHMucmV0cnlPZlJlcXVlc3RMb2dJRDtcbiAgICB9XG4gICAgZGVsZXRlIGRldGFpbHMucmV0cnlPZlJlcXVlc3RMb2dJRDtcbiAgfVxuICByZXR1cm4gZGV0YWlscztcbn07XG4iLCAiaW1wb3J0IHsgRXZlbnRTdHJlYW1NYXJzaGFsbGVyIH0gZnJvbSAnQHNtaXRoeS9ldmVudHN0cmVhbS1zZXJkZS1ub2RlJztcbmltcG9ydCB7IGZyb21CYXNlNjQsIHRvQmFzZTY0IH0gZnJvbSAnQHNtaXRoeS91dGlsLWJhc2U2NCc7XG5pbXBvcnQgeyBzdHJlYW1Db2xsZWN0b3IgfSBmcm9tICdAc21pdGh5L2ZldGNoLWh0dHAtaGFuZGxlcic7XG5pbXBvcnQgeyBFdmVudFN0cmVhbVNlcmRlQ29udGV4dCwgU2VyZGVDb250ZXh0IH0gZnJvbSAnQHNtaXRoeS90eXBlcyc7XG5pbXBvcnQgeyBTdHJlYW0gYXMgQ29yZVN0cmVhbSwgU2VydmVyU2VudEV2ZW50IH0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvc3RyZWFtaW5nJztcbmltcG9ydCB7IEFudGhyb3BpY0Vycm9yIH0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvZXJyb3InO1xuaW1wb3J0IHsgQVBJRXJyb3IsIEJhc2VBbnRocm9waWMgfSBmcm9tICdAYW50aHJvcGljLWFpL3Nkayc7XG5pbXBvcnQgeyBkZV9SZXNwb25zZVN0cmVhbSB9IGZyb20gJy4uL0FXU19yZXN0SnNvbjEnO1xuaW1wb3J0IHsgUmVhZGFibGVTdHJlYW1Ub0FzeW5jSXRlcmFibGUgfSBmcm9tICcuLi9pbnRlcm5hbC9zaGltcyc7XG5pbXBvcnQgeyBzYWZlSlNPTiB9IGZyb20gJy4uL2ludGVybmFsL3V0aWxzL3ZhbHVlcyc7XG5pbXBvcnQgeyBsb2dnZXJGb3IgfSBmcm9tICcuLi9pbnRlcm5hbC91dGlscy9sb2cnO1xuXG50eXBlIEJ5dGVzID0gc3RyaW5nIHwgQXJyYXlCdWZmZXIgfCBVaW50OEFycmF5IHwgQnVmZmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IHRvVXRmOCA9IChpbnB1dDogVWludDhBcnJheSk6IHN0cmluZyA9PiBuZXcgVGV4dERlY29kZXIoJ3V0Zi04JykuZGVjb2RlKGlucHV0KTtcbmV4cG9ydCBjb25zdCBmcm9tVXRmOCA9IChpbnB1dDogc3RyaW5nKTogVWludDhBcnJheSA9PiBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoaW5wdXQpO1xuXG4vLyBgZGVfUmVzcG9uc2VTdHJlYW1gIHBhcnNlcyBhIEJlZHJvY2sgcmVzcG9uc2Ugc3RyZWFtIGFuZCBlbWl0cyBldmVudHMgYXMgdGhleSBhcmUgZm91bmQuXG4vLyBJdCByZXF1aXJlcyBhIFwiY29udGV4dFwiIGFyZ3VtZW50IHdoaWNoIGhhcyBtYW55IGZpZWxkcywgYnV0IGZvciB3aGF0IHdlJ3JlIHVzaW5nIGl0IGZvclxuLy8gaXQgb25seSBuZWVkcyB0aGlzLlxuZXhwb3J0IGNvbnN0IGdldE1pbmltYWxTZXJkZUNvbnRleHQgPSAoKTogU2VyZGVDb250ZXh0ICYgRXZlbnRTdHJlYW1TZXJkZUNvbnRleHQgPT4ge1xuICBjb25zdCBtYXJzaGFsbGVyID0gbmV3IEV2ZW50U3RyZWFtTWFyc2hhbGxlcih7IHV0ZjhFbmNvZGVyOiB0b1V0ZjgsIHV0ZjhEZWNvZGVyOiBmcm9tVXRmOCB9KTtcbiAgcmV0dXJuIHtcbiAgICBiYXNlNjREZWNvZGVyOiBmcm9tQmFzZTY0LFxuICAgIGJhc2U2NEVuY29kZXI6IHRvQmFzZTY0LFxuICAgIHV0ZjhEZWNvZGVyOiBmcm9tVXRmOCxcbiAgICB1dGY4RW5jb2RlcjogdG9VdGY4LFxuICAgIGV2ZW50U3RyZWFtTWFyc2hhbGxlcjogbWFyc2hhbGxlcixcbiAgICBzdHJlYW1Db2xsZWN0b3I6IHN0cmVhbUNvbGxlY3RvcixcbiAgfSBhcyB1bmtub3duIGFzIFNlcmRlQ29udGV4dCAmIEV2ZW50U3RyZWFtU2VyZGVDb250ZXh0O1xufTtcblxuZXhwb3J0IGNsYXNzIFN0cmVhbTxJdGVtPiBleHRlbmRzIENvcmVTdHJlYW08SXRlbT4ge1xuICBzdGF0aWMgb3ZlcnJpZGUgZnJvbVNTRVJlc3BvbnNlPEl0ZW0+KFxuICAgIHJlc3BvbnNlOiBSZXNwb25zZSxcbiAgICBjb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXIsXG4gICAgY2xpZW50PzogQmFzZUFudGhyb3BpYyxcbiAgKSB7XG4gICAgbGV0IGNvbnN1bWVkID0gZmFsc2U7XG4gICAgY29uc3QgbG9nZ2VyID0gY2xpZW50ID8gbG9nZ2VyRm9yKGNsaWVudCkgOiBjb25zb2xlO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24qIGl0ZXJNZXNzYWdlcygpOiBBc3luY0dlbmVyYXRvcjxTZXJ2ZXJTZW50RXZlbnQsIHZvaWQsIHVua25vd24+IHtcbiAgICAgIGlmICghcmVzcG9uc2UuYm9keSkge1xuICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgIHRocm93IG5ldyBBbnRocm9waWNFcnJvcihgQXR0ZW1wdGVkIHRvIGl0ZXJhdGUgb3ZlciBhIHJlc3BvbnNlIHdpdGggbm8gYm9keWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXNwb25zZUJvZHlJdGVyID0gUmVhZGFibGVTdHJlYW1Ub0FzeW5jSXRlcmFibGU8Qnl0ZXM+KHJlc3BvbnNlLmJvZHkpO1xuICAgICAgY29uc3QgZXZlbnRTdHJlYW0gPSBkZV9SZXNwb25zZVN0cmVhbShyZXNwb25zZUJvZHlJdGVyLCBnZXRNaW5pbWFsU2VyZGVDb250ZXh0KCkpO1xuICAgICAgZm9yIGF3YWl0IChjb25zdCBldmVudCBvZiBldmVudFN0cmVhbSkge1xuICAgICAgICBpZiAoZXZlbnQuY2h1bmsgJiYgZXZlbnQuY2h1bmsuYnl0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzID0gdG9VdGY4KGV2ZW50LmNodW5rLmJ5dGVzKTtcbiAgICAgICAgICB5aWVsZCB7IGV2ZW50OiAnY2h1bmsnLCBkYXRhOiBzLCByYXc6IFtdIH07XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuaW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb24pIHtcbiAgICAgICAgICB5aWVsZCB7IGV2ZW50OiAnZXJyb3InLCBkYXRhOiAnSW50ZXJuYWxTZXJ2ZXJFeGNlcHRpb24nLCByYXc6IFtdIH07XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQubW9kZWxTdHJlYW1FcnJvckV4Y2VwdGlvbikge1xuICAgICAgICAgIHlpZWxkIHsgZXZlbnQ6ICdlcnJvcicsIGRhdGE6ICdNb2RlbFN0cmVhbUVycm9yRXhjZXB0aW9uJywgcmF3OiBbXSB9O1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnZhbGlkYXRpb25FeGNlcHRpb24pIHtcbiAgICAgICAgICB5aWVsZCB7IGV2ZW50OiAnZXJyb3InLCBkYXRhOiAnVmFsaWRhdGlvbkV4Y2VwdGlvbicsIHJhdzogW10gfTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50aHJvdHRsaW5nRXhjZXB0aW9uKSB7XG4gICAgICAgICAgeWllbGQgeyBldmVudDogJ2Vycm9yJywgZGF0YTogJ1Rocm90dGxpbmdFeGNlcHRpb24nLCByYXc6IFtdIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3RlOiB0aGlzIGZ1bmN0aW9uIGlzIGNvcGllZCBlbnRpcmVseSBmcm9tIHRoZSBjb3JlIFNES1xuICAgIGFzeW5jIGZ1bmN0aW9uKiBpdGVyYXRvcigpOiBBc3luY0l0ZXJhdG9yPEl0ZW0sIGFueSwgdW5kZWZpbmVkPiB7XG4gICAgICBpZiAoY29uc3VtZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaXRlcmF0ZSBvdmVyIGEgY29uc3VtZWQgc3RyZWFtLCB1c2UgYC50ZWUoKWAgdG8gc3BsaXQgdGhlIHN0cmVhbS4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnN1bWVkID0gdHJ1ZTtcbiAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHNzZSBvZiBpdGVyTWVzc2FnZXMoKSkge1xuICAgICAgICAgIGlmIChzc2UuZXZlbnQgPT09ICdjaHVuaycpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHlpZWxkIEpTT04ucGFyc2Uoc3NlLmRhdGEpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoYENvdWxkIG5vdCBwYXJzZSBtZXNzYWdlIGludG8gSlNPTjpgLCBzc2UuZGF0YSk7XG4gICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRnJvbSBjaHVuazpgLCBzc2UucmF3KTtcbiAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3NlLmV2ZW50ID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJUZXh0ID0gc3NlLmRhdGE7XG4gICAgICAgICAgICBjb25zdCBlcnJKU09OID0gc2FmZUpTT04oZXJyVGV4dCk7XG4gICAgICAgICAgICBjb25zdCBlcnJNZXNzYWdlID0gZXJySlNPTiA/IHVuZGVmaW5lZCA6IGVyclRleHQ7XG5cbiAgICAgICAgICAgIHRocm93IEFQSUVycm9yLmdlbmVyYXRlKHVuZGVmaW5lZCwgZXJySlNPTiwgZXJyTWVzc2FnZSwgcmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBjYWxscyBgc3RyZWFtLmNvbnRyb2xsZXIuYWJvcnQoKWAsIHdlIHNob3VsZCBleGl0IHdpdGhvdXQgdGhyb3dpbmcuXG4gICAgICAgIGlmIChpc0Fib3J0RXJyb3IoZSkpIHJldHVybjtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGBicmVha2BzLCBhYm9ydCB0aGUgb25nb2luZyByZXF1ZXN0LlxuICAgICAgICBpZiAoIWRvbmUpIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFN0cmVhbShpdGVyYXRvciwgY29udHJvbGxlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNBYm9ydEVycm9yKGVycjogdW5rbm93bikge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBlcnIgPT09ICdvYmplY3QnICYmXG4gICAgZXJyICE9PSBudWxsICYmXG4gICAgLy8gU3BlYy1jb21wbGlhbnQgZmV0Y2ggaW1wbGVtZW50YXRpb25zXG4gICAgKCgnbmFtZScgaW4gZXJyICYmIChlcnIgYXMgYW55KS5uYW1lID09PSAnQWJvcnRFcnJvcicpIHx8XG4gICAgICAvLyBFeHBvIGZldGNoXG4gICAgICAoJ21lc3NhZ2UnIGluIGVyciAmJiBTdHJpbmcoKGVyciBhcyBhbnkpLm1lc3NhZ2UpLmluY2x1ZGVzKCdGZXRjaFJlcXVlc3RDYW5jZWxlZEV4Y2VwdGlvbicpKSlcbiAgKTtcbn1cbiIsICIvLyBGaWxlIGdlbmVyYXRlZCBmcm9tIG91ciBPcGVuQVBJIHNwZWMgYnkgU3RhaW5sZXNzLiBTZWUgQ09OVFJJQlVUSU5HLm1kIGZvciBkZXRhaWxzLlxuXG4vKipcbiAqIFJlYWQgYW4gZW52aXJvbm1lbnQgdmFyaWFibGUuXG4gKlxuICogVHJpbXMgYmVnaW5uaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLlxuICpcbiAqIFdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGUgZG9lc24ndCBleGlzdCBvciBjYW5ub3QgYmUgYWNjZXNzZWQuXG4gKi9cbmV4cG9ydCBjb25zdCByZWFkRW52ID0gKGVudjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKHR5cGVvZiAoZ2xvYmFsVGhpcyBhcyBhbnkpLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIChnbG9iYWxUaGlzIGFzIGFueSkucHJvY2Vzcy5lbnY/LltlbnZdPy50cmltKCkgPz8gdW5kZWZpbmVkO1xuICB9XG4gIGlmICh0eXBlb2YgKGdsb2JhbFRoaXMgYXMgYW55KS5EZW5vICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAoZ2xvYmFsVGhpcyBhcyBhbnkpLkRlbm8uZW52Py5nZXQ/LihlbnYpPy50cmltKCk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4iLCAiLy8gRmlsZSBnZW5lcmF0ZWQgZnJvbSBvdXIgT3BlbkFQSSBzcGVjIGJ5IFN0YWlubGVzcy4gU2VlIENPTlRSSUJVVElORy5tZCBmb3IgZGV0YWlscy5cblxuaW1wb3J0IHsgaXNSZWFkb25seUFycmF5IH0gZnJvbSAnLi91dGlscy92YWx1ZXMnO1xuXG50eXBlIEhlYWRlclZhbHVlID0gc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEhlYWRlcnNMaWtlID1cbiAgfCBIZWFkZXJzXG4gIHwgcmVhZG9ubHkgSGVhZGVyVmFsdWVbXVtdXG4gIHwgUmVjb3JkPHN0cmluZywgSGVhZGVyVmFsdWUgfCByZWFkb25seSBIZWFkZXJWYWx1ZVtdPlxuICB8IHVuZGVmaW5lZFxuICB8IG51bGxcbiAgfCBOdWxsYWJsZUhlYWRlcnM7XG5cbmNvbnN0IGJyYW5kX3ByaXZhdGVOdWxsYWJsZUhlYWRlcnMgPSBTeW1ib2wuZm9yKCdicmFuZC5wcml2YXRlTnVsbGFibGVIZWFkZXJzJykgYXMgc3ltYm9sICYge1xuICBkZXNjcmlwdGlvbjogJ2JyYW5kLnByaXZhdGVOdWxsYWJsZUhlYWRlcnMnO1xufTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIFVzZXJzIGNhbiBwYXNzIGV4cGxpY2l0IG51bGxzIHRvIHVuc2V0IGRlZmF1bHQgaGVhZGVycy4gV2hlbiB3ZSBwYXJzZSB0aGVtXG4gKiBpbnRvIGEgc3RhbmRhcmQgaGVhZGVycyB0eXBlIHdlIG5lZWQgdG8gcHJlc2VydmUgdGhhdCBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IHR5cGUgTnVsbGFibGVIZWFkZXJzID0ge1xuICAvKiogQnJhbmQgY2hlY2ssIHByZXZlbnQgdXNlcnMgZnJvbSBjcmVhdGluZyBhIE51bGxhYmxlSGVhZGVycy4gKi9cbiAgW186IHR5cGVvZiBicmFuZF9wcml2YXRlTnVsbGFibGVIZWFkZXJzXTogdHJ1ZTtcbiAgLyoqIFBhcnNlZCBoZWFkZXJzLiAqL1xuICB2YWx1ZXM6IEhlYWRlcnM7XG4gIC8qKiBTZXQgb2YgbG93ZXJjYXNlIGhlYWRlciBuYW1lcyBleHBsaWNpdGx5IHNldCB0byBudWxsLiAqL1xuICBudWxsczogU2V0PHN0cmluZz47XG59O1xuXG5mdW5jdGlvbiogaXRlcmF0ZUhlYWRlcnMoaGVhZGVyczogSGVhZGVyc0xpa2UpOiBJdGVyYWJsZUl0ZXJhdG9yPHJlYWRvbmx5IFtzdHJpbmcsIHN0cmluZyB8IG51bGxdPiB7XG4gIGlmICghaGVhZGVycykgcmV0dXJuO1xuXG4gIGlmIChicmFuZF9wcml2YXRlTnVsbGFibGVIZWFkZXJzIGluIGhlYWRlcnMpIHtcbiAgICBjb25zdCB7IHZhbHVlcywgbnVsbHMgfSA9IGhlYWRlcnMgYXMgTnVsbGFibGVIZWFkZXJzO1xuICAgIHlpZWxkKiB2YWx1ZXMuZW50cmllcygpO1xuICAgIGZvciAoY29uc3QgbmFtZSBvZiBudWxscykge1xuICAgICAgeWllbGQgW25hbWUsIG51bGxdO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgc2hvdWxkQ2xlYXIgPSBmYWxzZTtcbiAgbGV0IGl0ZXI6IEl0ZXJhYmxlPHJlYWRvbmx5IChIZWFkZXJWYWx1ZSB8IHJlYWRvbmx5IEhlYWRlclZhbHVlW10pW10+O1xuICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICBpdGVyID0gaGVhZGVycy5lbnRyaWVzKCk7XG4gIH0gZWxzZSBpZiAoaXNSZWFkb25seUFycmF5KGhlYWRlcnMpKSB7XG4gICAgaXRlciA9IGhlYWRlcnM7XG4gIH0gZWxzZSB7XG4gICAgc2hvdWxkQ2xlYXIgPSB0cnVlO1xuICAgIGl0ZXIgPSBPYmplY3QuZW50cmllcyhoZWFkZXJzID8/IHt9KTtcbiAgfVxuICBmb3IgKGxldCByb3cgb2YgaXRlcikge1xuICAgIGNvbnN0IG5hbWUgPSByb3dbMF07XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgaGVhZGVyIG5hbWUgdG8gYmUgYSBzdHJpbmcnKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBpc1JlYWRvbmx5QXJyYXkocm93WzFdKSA/IHJvd1sxXSA6IFtyb3dbMV1dO1xuICAgIGxldCBkaWRDbGVhciA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG5cbiAgICAgIC8vIE9iamVjdHMga2V5cyBhbHdheXMgb3ZlcndyaXRlIG9sZGVyIGhlYWRlcnMsIHRoZXkgbmV2ZXIgYXBwZW5kLlxuICAgICAgLy8gWWllbGQgYSBudWxsIHRvIGNsZWFyIHRoZSBoZWFkZXIgYmVmb3JlIGFkZGluZyB0aGUgbmV3IHZhbHVlcy5cbiAgICAgIGlmIChzaG91bGRDbGVhciAmJiAhZGlkQ2xlYXIpIHtcbiAgICAgICAgZGlkQ2xlYXIgPSB0cnVlO1xuICAgICAgICB5aWVsZCBbbmFtZSwgbnVsbF07XG4gICAgICB9XG4gICAgICB5aWVsZCBbbmFtZSwgdmFsdWVdO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYnVpbGRIZWFkZXJzID0gKG5ld0hlYWRlcnM6IEhlYWRlcnNMaWtlW10pOiBOdWxsYWJsZUhlYWRlcnMgPT4ge1xuICBjb25zdCB0YXJnZXRIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgY29uc3QgbnVsbEhlYWRlcnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgZm9yIChjb25zdCBoZWFkZXJzIG9mIG5ld0hlYWRlcnMpIHtcbiAgICBjb25zdCBzZWVuSGVhZGVycyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIHZhbHVlXSBvZiBpdGVyYXRlSGVhZGVycyhoZWFkZXJzKSkge1xuICAgICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFzZWVuSGVhZGVycy5oYXMobG93ZXJOYW1lKSkge1xuICAgICAgICB0YXJnZXRIZWFkZXJzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgc2VlbkhlYWRlcnMuYWRkKGxvd2VyTmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgdGFyZ2V0SGVhZGVycy5kZWxldGUobmFtZSk7XG4gICAgICAgIG51bGxIZWFkZXJzLmFkZChsb3dlck5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0SGVhZGVycy5hcHBlbmQobmFtZSwgdmFsdWUpO1xuICAgICAgICBudWxsSGVhZGVycy5kZWxldGUobG93ZXJOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgW2JyYW5kX3ByaXZhdGVOdWxsYWJsZUhlYWRlcnNdOiB0cnVlLCB2YWx1ZXM6IHRhcmdldEhlYWRlcnMsIG51bGxzOiBudWxsSGVhZGVycyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGlzRW1wdHlIZWFkZXJzID0gKGhlYWRlcnM6IEhlYWRlcnNMaWtlKSA9PiB7XG4gIGZvciAoY29uc3QgXyBvZiBpdGVyYXRlSGVhZGVycyhoZWFkZXJzKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCAiaW1wb3J0IHsgQW50aHJvcGljRXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9yJztcblxuLyoqXG4gKiBQZXJjZW50LWVuY29kZSBldmVyeXRoaW5nIHRoYXQgaXNuJ3Qgc2FmZSB0byBoYXZlIGluIGEgcGF0aCB3aXRob3V0IGVuY29kaW5nIHNhZmUgY2hhcnMuXG4gKlxuICogVGFrZW4gZnJvbSBodHRwczovL2RhdGF0cmFja2VyLmlldGYub3JnL2RvYy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjM6XG4gKiA+IHVucmVzZXJ2ZWQgID0gQUxQSEEgLyBESUdJVCAvIFwiLVwiIC8gXCIuXCIgLyBcIl9cIiAvIFwiflwiXG4gKiA+IHN1Yi1kZWxpbXMgID0gXCIhXCIgLyBcIiRcIiAvIFwiJlwiIC8gXCInXCIgLyBcIihcIiAvIFwiKVwiIC8gXCIqXCIgLyBcIitcIiAvIFwiLFwiIC8gXCI7XCIgLyBcIj1cIlxuICogPiBwY2hhciAgICAgICA9IHVucmVzZXJ2ZWQgLyBwY3QtZW5jb2RlZCAvIHN1Yi1kZWxpbXMgLyBcIjpcIiAvIFwiQFwiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVVUklQYXRoKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW15BLVphLXowLTlcXC0uX34hJCYnKCkqKyw7PTpAXSsvZywgZW5jb2RlVVJJQ29tcG9uZW50KTtcbn1cblxuY29uc3QgRU1QVFkgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQYXRoVGFnRnVuY3Rpb24gPSAocGF0aEVuY29kZXIgPSBlbmNvZGVVUklQYXRoKSA9PlxuICBmdW5jdGlvbiBwYXRoKHN0YXRpY3M6IHJlYWRvbmx5IHN0cmluZ1tdLCAuLi5wYXJhbXM6IHJlYWRvbmx5IHVua25vd25bXSk6IHN0cmluZyB7XG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBhcmFtcywgbm8gcHJvY2Vzc2luZyBpcyBuZWVkZWQuXG4gICAgaWYgKHN0YXRpY3MubGVuZ3RoID09PSAxKSByZXR1cm4gc3RhdGljc1swXSE7XG5cbiAgICBsZXQgcG9zdFBhdGggPSBmYWxzZTtcbiAgICBjb25zdCBpbnZhbGlkU2VnbWVudHMgPSBbXTtcbiAgICBjb25zdCBwYXRoID0gc3RhdGljcy5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmICgvWz8jXS8udGVzdChjdXJyZW50VmFsdWUpKSB7XG4gICAgICAgIHBvc3RQYXRoID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1zW2luZGV4XTtcbiAgICAgIGxldCBlbmNvZGVkID0gKHBvc3RQYXRoID8gZW5jb2RlVVJJQ29tcG9uZW50IDogcGF0aEVuY29kZXIpKCcnICsgdmFsdWUpO1xuICAgICAgaWYgKFxuICAgICAgICBpbmRleCAhPT0gcGFyYW1zLmxlbmd0aCAmJlxuICAgICAgICAodmFsdWUgPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAvLyBoYW5kbGUgdmFsdWVzIGZyb20gb3RoZXIgcmVhbG1zXG4gICAgICAgICAgICB2YWx1ZS50b1N0cmluZyA9PT1cbiAgICAgICAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZigodmFsdWUgYXMgYW55KS5oYXNPd25Qcm9wZXJ0eSA/PyBFTVBUWSkgPz8gRU1QVFkpXG4gICAgICAgICAgICAgICAgPy50b1N0cmluZykpXG4gICAgICApIHtcbiAgICAgICAgZW5jb2RlZCA9IHZhbHVlICsgJyc7XG4gICAgICAgIGludmFsaWRTZWdtZW50cy5wdXNoKHtcbiAgICAgICAgICBzdGFydDogcHJldmlvdXNWYWx1ZS5sZW5ndGggKyBjdXJyZW50VmFsdWUubGVuZ3RoLFxuICAgICAgICAgIGxlbmd0aDogZW5jb2RlZC5sZW5ndGgsXG4gICAgICAgICAgZXJyb3I6IGBWYWx1ZSBvZiB0eXBlICR7T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuICAgICAgICAgICAgLmNhbGwodmFsdWUpXG4gICAgICAgICAgICAuc2xpY2UoOCwgLTEpfSBpcyBub3QgYSB2YWxpZCBwYXRoIHBhcmFtZXRlcmAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyBjdXJyZW50VmFsdWUgKyAoaW5kZXggPT09IHBhcmFtcy5sZW5ndGggPyAnJyA6IGVuY29kZWQpO1xuICAgIH0sICcnKTtcblxuICAgIGNvbnN0IHBhdGhPbmx5ID0gcGF0aC5zcGxpdCgvWz8jXS8sIDEpWzBdITtcbiAgICBjb25zdCBpbnZhbGlkU2VnbWVudFBhdHRlcm4gPSAvKD88PV58XFwvKSg/OlxcLnwlMmUpezEsMn0oPz1cXC98JCkvZ2k7XG4gICAgbGV0IG1hdGNoO1xuXG4gICAgLy8gRmluZCBhbGwgaW52YWxpZCBzZWdtZW50c1xuICAgIHdoaWxlICgobWF0Y2ggPSBpbnZhbGlkU2VnbWVudFBhdHRlcm4uZXhlYyhwYXRoT25seSkpICE9PSBudWxsKSB7XG4gICAgICBpbnZhbGlkU2VnbWVudHMucHVzaCh7XG4gICAgICAgIHN0YXJ0OiBtYXRjaC5pbmRleCxcbiAgICAgICAgbGVuZ3RoOiBtYXRjaFswXS5sZW5ndGgsXG4gICAgICAgIGVycm9yOiBgVmFsdWUgXCIke21hdGNoWzBdfVwiIGNhblxcJ3QgYmUgc2FmZWx5IHBhc3NlZCBhcyBhIHBhdGggcGFyYW1ldGVyYCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGludmFsaWRTZWdtZW50cy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0IC0gYi5zdGFydCk7XG5cbiAgICBpZiAoaW52YWxpZFNlZ21lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBsYXN0RW5kID0gMDtcbiAgICAgIGNvbnN0IHVuZGVybGluZSA9IGludmFsaWRTZWdtZW50cy5yZWR1Y2UoKGFjYywgc2VnbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzcGFjZXMgPSAnICcucmVwZWF0KHNlZ21lbnQuc3RhcnQgLSBsYXN0RW5kKTtcbiAgICAgICAgY29uc3QgYXJyb3dzID0gJ14nLnJlcGVhdChzZWdtZW50Lmxlbmd0aCk7XG4gICAgICAgIGxhc3RFbmQgPSBzZWdtZW50LnN0YXJ0ICsgc2VnbWVudC5sZW5ndGg7XG4gICAgICAgIHJldHVybiBhY2MgKyBzcGFjZXMgKyBhcnJvd3M7XG4gICAgICB9LCAnJyk7XG5cbiAgICAgIHRocm93IG5ldyBBbnRocm9waWNFcnJvcihcbiAgICAgICAgYFBhdGggcGFyYW1ldGVycyByZXN1bHQgaW4gcGF0aCB3aXRoIGludmFsaWQgc2VnbWVudHM6XFxuJHtpbnZhbGlkU2VnbWVudHNcbiAgICAgICAgICAubWFwKChlKSA9PiBlLmVycm9yKVxuICAgICAgICAgIC5qb2luKCdcXG4nKX1cXG4ke3BhdGh9XFxuJHt1bmRlcmxpbmV9YCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbi8qKlxuICogVVJJLWVuY29kZXMgcGF0aCBwYXJhbXMgYW5kIGVuc3VyZXMgbm8gdW5zYWZlIC8uLyBvciAvLi4vIHBhdGggc2VnbWVudHMgYXJlIGludHJvZHVjZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBwYXRoID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVBhdGhUYWdGdW5jdGlvbihlbmNvZGVVUklQYXRoKTtcbiIsICJpbXBvcnQgeyBCYXNlQW50aHJvcGljLCBDbGllbnRPcHRpb25zIGFzIENvcmVDbGllbnRPcHRpb25zIH0gZnJvbSAnQGFudGhyb3BpYy1haS9zZGsvY2xpZW50JztcbmltcG9ydCAqIGFzIFJlc291cmNlcyBmcm9tICdAYW50aHJvcGljLWFpL3Nkay9yZXNvdXJjZXMvaW5kZXgnO1xuaW1wb3J0IHsgQXdzQ3JlZGVudGlhbElkZW50aXR5UHJvdmlkZXIgfSBmcm9tICdAc21pdGh5L3R5cGVzJztcbmltcG9ydCB7IGdldEF1dGhIZWFkZXJzIH0gZnJvbSAnLi9jb3JlL2F1dGgnO1xuaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSAnLi9jb3JlL3N0cmVhbWluZyc7XG5pbXBvcnQgeyByZWFkRW52IH0gZnJvbSAnLi9pbnRlcm5hbC91dGlscy9lbnYnO1xuaW1wb3J0IHsgRmluYWxSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4vaW50ZXJuYWwvcmVxdWVzdC1vcHRpb25zJztcbmltcG9ydCB7IGlzT2JqIH0gZnJvbSAnLi9pbnRlcm5hbC91dGlscy92YWx1ZXMnO1xuaW1wb3J0IHsgYnVpbGRIZWFkZXJzIH0gZnJvbSAnLi9pbnRlcm5hbC9oZWFkZXJzJztcbmltcG9ydCB7IEZpbmFsaXplZFJlcXVlc3RJbml0IH0gZnJvbSAnLi9pbnRlcm5hbC90eXBlcyc7XG5pbXBvcnQgeyBwYXRoIH0gZnJvbSAnLi9pbnRlcm5hbC91dGlscy9wYXRoJztcbmltcG9ydCB7IGxvZ2dlckZvciB9IGZyb20gJy4vaW50ZXJuYWwvdXRpbHMvbG9nJztcblxuZXhwb3J0IHsgQmFzZUFudGhyb3BpYyB9IGZyb20gJ0BhbnRocm9waWMtYWkvc2RrL2NsaWVudCc7XG5cbmNvbnN0IERFRkFVTFRfVkVSU0lPTiA9ICdiZWRyb2NrLTIwMjMtMDUtMzEnO1xuY29uc3QgTU9ERUxfRU5EUE9JTlRTID0gbmV3IFNldDxzdHJpbmc+KFsnL3YxL2NvbXBsZXRlJywgJy92MS9tZXNzYWdlcycsICcvdjEvbWVzc2FnZXM/YmV0YT10cnVlJ10pO1xuXG5leHBvcnQgdHlwZSBDbGllbnRPcHRpb25zID0gT21pdDxDb3JlQ2xpZW50T3B0aW9ucywgJ2FwaUtleScgfCAnYXV0aFRva2VuJz4gJiB7XG4gIGF3c1NlY3JldEtleT86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIGF3c0FjY2Vzc0tleT86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIERlZmF1bHRzIHRvIHByb2Nlc3MuZW52WydBV1NfUkVHSU9OJ10uXG4gICAqL1xuICBhd3NSZWdpb24/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGF3c1Nlc3Npb25Ub2tlbj86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIHNraXBBdXRoPzogYm9vbGVhbjtcblxuICAvKiogQ3VzdG9tIHByb3ZpZGVyIGNoYWluIHJlc29sdmVyIGZvciBBV1MgY3JlZGVudGlhbHMuIFVzZWZ1bCBmb3Igbm9uLU5vZGUgZW52aXJvbm1lbnRzLCBsaWtlIGVkZ2Ugd29ya2Vycywgd2hlcmUgdGhlIGRlZmF1bHQgY3JlZGVudGlhbCBwcm92aWRlciBjaGFpbiBtYXkgbm90IHdvcmsuICovXG4gIHByb3ZpZGVyQ2hhaW5SZXNvbHZlcj86ICgoKSA9PiBQcm9taXNlPEF3c0NyZWRlbnRpYWxJZGVudGl0eVByb3ZpZGVyPikgfCBudWxsO1xufTtcblxudHlwZSBCb3RoU3RhdGljQ3JlZHMgPSB7XG4gIGF3c0FjY2Vzc0tleTogc3RyaW5nO1xuICBhd3NTZWNyZXRLZXk6IHN0cmluZztcbiAgYXdzU2Vzc2lvblRva2VuPzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbn07XG5cbnR5cGUgTm9TdGF0aWNDcmVkcyA9IHtcbiAgYXdzQWNjZXNzS2V5PzogbnVsbCB8IHVuZGVmaW5lZDtcbiAgYXdzU2VjcmV0S2V5PzogbnVsbCB8IHVuZGVmaW5lZDtcbiAgYXdzU2Vzc2lvblRva2VuPzogbnVsbCB8IHVuZGVmaW5lZDtcbn07XG5cbnR5cGUgQWNjZXNzT25seSA9IHtcbiAgYXdzQWNjZXNzS2V5OiBzdHJpbmc7XG4gIGF3c1NlY3JldEtleT86IG51bGwgfCB1bmRlZmluZWQ7XG4gIGF3c1Nlc3Npb25Ub2tlbj86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG59O1xuXG50eXBlIFNlY3JldE9ubHkgPSB7XG4gIGF3c1NlY3JldEtleTogc3RyaW5nO1xuICBhd3NBY2Nlc3NLZXk/OiBudWxsIHwgdW5kZWZpbmVkO1xuICBhd3NTZXNzaW9uVG9rZW4/OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xufTtcblxuLyoqIEFQSSBDbGllbnQgZm9yIGludGVyZmFjaW5nIHdpdGggdGhlIEFudGhyb3BpYyBCZWRyb2NrIEFQSS4gKi9cbmV4cG9ydCBjbGFzcyBBbnRocm9waWNCZWRyb2NrIGV4dGVuZHMgQmFzZUFudGhyb3BpYyB7XG4gIGF3c1NlY3JldEtleTogc3RyaW5nIHwgbnVsbDtcbiAgYXdzQWNjZXNzS2V5OiBzdHJpbmcgfCBudWxsO1xuICBhd3NSZWdpb246IHN0cmluZztcbiAgYXdzU2Vzc2lvblRva2VuOiBzdHJpbmcgfCBudWxsO1xuICBza2lwQXV0aDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcm92aWRlckNoYWluUmVzb2x2ZXI6ICgoKSA9PiBQcm9taXNlPEF3c0NyZWRlbnRpYWxJZGVudGl0eVByb3ZpZGVyPikgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKG9wdHM6IENsaWVudE9wdGlvbnMgJiBCb3RoU3RhdGljQ3JlZHMpO1xuICBjb25zdHJ1Y3RvcihvcHRzPzogQ2xpZW50T3B0aW9ucyAmIE5vU3RhdGljQ3JlZHMpO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBQYXNzaW5nIG9ubHkgYGF3c0FjY2Vzc0tleWAgd2l0aG91dCBgYXdzU2VjcmV0S2V5YCBpcyBkZXByZWNhdGVkLlxuICAgKiBQcm92aWRlIGJvdGgga2V5cywgb3IgcHJvdmlkZSBuZWl0aGVyIGFuZCByZWx5IG9uIHRoZSBBV1MgY3JlZGVudGlhbCBwcm92aWRlciBjaGFpbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHM6IENsaWVudE9wdGlvbnMgJiBBY2Nlc3NPbmx5KTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgUGFzc2luZyBvbmx5IGBhd3NTZWNyZXRLZXlgIHdpdGhvdXQgYGF3c0FjY2Vzc0tleWAgaXMgZGVwcmVjYXRlZC5cbiAgICogUHJvdmlkZSBib3RoIGtleXMsIG9yIHByb3ZpZGUgbmVpdGhlciBhbmQgcmVseSBvbiB0aGUgQVdTIGNyZWRlbnRpYWwgcHJvdmlkZXIgY2hhaW4uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzOiBDbGllbnRPcHRpb25zICYgU2VjcmV0T25seSk7XG5cbiAgLyoqXG4gICAqIEFQSSBDbGllbnQgZm9yIGludGVyZmFjaW5nIHdpdGggdGhlIEFudGhyb3BpYyBCZWRyb2NrIEFQSS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0cy5hd3NTZWNyZXRLZXldXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdHMuYXdzQWNjZXNzS2V5XVxuICAgKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZH0gW29wdHMuYXdzUmVnaW9uPXByb2Nlc3MuZW52WydBV1NfUkVHSU9OJ10gPz8gdXMtZWFzdC0xXVxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRzLmF3c1Nlc3Npb25Ub2tlbl1cbiAgICogQHBhcmFtIHsoKCkgPT4gUHJvbWlzZTxBd3NDcmVkZW50aWFsSWRlbnRpdHlQcm92aWRlcj4pIHwgbnVsbH0gW29wdHMucHJvdmlkZXJDaGFpblJlc29sdmVyXSAtIEN1c3RvbSBwcm92aWRlciBjaGFpbiByZXNvbHZlciBmb3IgQVdTIGNyZWRlbnRpYWxzLiBVc2VmdWwgZm9yIG5vbi1Ob2RlIGVudmlyb25tZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmJhc2VVUkw9cHJvY2Vzcy5lbnZbJ0FOVEhST1BJQ19CRURST0NLX0JBU0VfVVJMJ10gPz8gaHR0cHM6Ly9iZWRyb2NrLXJ1bnRpbWUuJHt0aGlzLmF3c1JlZ2lvbn0uYW1hem9uYXdzLmNvbV0gLSBPdmVycmlkZSB0aGUgZGVmYXVsdCBiYXNlIFVSTCBmb3IgdGhlIEFQSS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRzLnRpbWVvdXQ9MTAgbWludXRlc10gLSBUaGUgbWF4aW11bSBhbW91bnQgb2YgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSB0aGUgY2xpZW50IHdpbGwgd2FpdCBmb3IgYSByZXNwb25zZSBiZWZvcmUgdGltaW5nIG91dC5cbiAgICogQHBhcmFtIHtNZXJnZWRSZXF1ZXN0SW5pdH0gW29wdHMuZmV0Y2hPcHRpb25zXSAtIEFkZGl0aW9uYWwgYFJlcXVlc3RJbml0YCBvcHRpb25zIHRvIGJlIHBhc3NlZCB0byBgZmV0Y2hgIGNhbGxzLlxuICAgKiBAcGFyYW0ge0ZldGNofSBbb3B0cy5mZXRjaF0gLSBTcGVjaWZ5IGEgY3VzdG9tIGBmZXRjaGAgZnVuY3Rpb24gaW1wbGVtZW50YXRpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5tYXhSZXRyaWVzPTJdIC0gVGhlIG1heGltdW0gbnVtYmVyIG9mIHRpbWVzIHRoZSBjbGllbnQgd2lsbCByZXRyeSBhIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7SGVhZGVyc0xpa2V9IG9wdHMuZGVmYXVsdEhlYWRlcnMgLSBEZWZhdWx0IGhlYWRlcnMgdG8gaW5jbHVkZSB3aXRoIGV2ZXJ5IHJlcXVlc3QgdG8gdGhlIEFQSS5cbiAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCB1bmRlZmluZWQ+fSBvcHRzLmRlZmF1bHRRdWVyeSAtIERlZmF1bHQgcXVlcnkgcGFyYW1ldGVycyB0byBpbmNsdWRlIHdpdGggZXZlcnkgcmVxdWVzdCB0byB0aGUgQVBJLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmRhbmdlcm91c2x5QWxsb3dCcm93c2VyPWZhbHNlXSAtIEJ5IGRlZmF1bHQsIGNsaWVudC1zaWRlIHVzZSBvZiB0aGlzIGxpYnJhcnkgaXMgbm90IGFsbG93ZWQsIGFzIGl0IHJpc2tzIGV4cG9zaW5nIHlvdXIgc2VjcmV0IEFQSSBjcmVkZW50aWFscyB0byBhdHRhY2tlcnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2tpcEF1dGg9ZmFsc2VdIC0gU2tpcCBhdXRoZW50aWNhdGlvbiBmb3IgdGhpcyByZXF1ZXN0LiBUaGlzIGlzIHVzZWZ1bCBpZiB5b3UgaGF2ZSBhbiBpbnRlcm5hbCBwcm94eSB0aGF0IGhhbmRsZXMgYXV0aGVudGljYXRpb24gZm9yIHlvdS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBhd3NSZWdpb24gPSByZWFkRW52KCdBV1NfUkVHSU9OJykgPz8gJ3VzLWVhc3QtMScsXG4gICAgYmFzZVVSTCA9IHJlYWRFbnYoJ0FOVEhST1BJQ19CRURST0NLX0JBU0VfVVJMJykgPz8gYGh0dHBzOi8vYmVkcm9jay1ydW50aW1lLiR7YXdzUmVnaW9ufS5hbWF6b25hd3MuY29tYCxcbiAgICBhd3NTZWNyZXRLZXkgPSBudWxsLFxuICAgIGF3c0FjY2Vzc0tleSA9IG51bGwsXG4gICAgYXdzU2Vzc2lvblRva2VuID0gbnVsbCxcbiAgICBwcm92aWRlckNoYWluUmVzb2x2ZXIgPSBudWxsLFxuICAgIC4uLm9wdHNcbiAgfTogQ2xpZW50T3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoeyBiYXNlVVJMLCAuLi5vcHRzIH0pO1xuXG4gICAgY29uc3QgaGFzQWNjZXNzID0gYXdzQWNjZXNzS2V5ICE9IG51bGw7XG4gICAgY29uc3QgaGFzU2VjcmV0ID0gYXdzU2VjcmV0S2V5ICE9IG51bGw7XG4gICAgaWYgKGhhc0FjY2VzcyAhPT0gaGFzU2VjcmV0KSB7XG4gICAgICBsb2dnZXJGb3IodGhpcykud2FybihcbiAgICAgICAgJ1dhcm5pbmc6IFBhc3Npbmcgb25seSBvbmUgb2YgYGF3c0FjY2Vzc0tleWAgb3IgYGF3c1NlY3JldEtleWAgaXMgZGVwcmVjYXRlZC4gJyArXG4gICAgICAgICAgJ1BsZWFzZSBwcm92aWRlIGJvdGgga2V5cywgb3IgcHJvdmlkZSBuZWl0aGVyIGFuZCByZWx5IG9uIHRoZSBBV1MgY3JlZGVudGlhbCBwcm92aWRlciBjaGFpbi4nLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmF3c1NlY3JldEtleSA9IGF3c1NlY3JldEtleTtcbiAgICB0aGlzLmF3c0FjY2Vzc0tleSA9IGF3c0FjY2Vzc0tleTtcbiAgICB0aGlzLmF3c1JlZ2lvbiA9IGF3c1JlZ2lvbjtcbiAgICB0aGlzLmF3c1Nlc3Npb25Ub2tlbiA9IGF3c1Nlc3Npb25Ub2tlbjtcbiAgICB0aGlzLnNraXBBdXRoID0gb3B0cy5za2lwQXV0aCA/PyBmYWxzZTtcbiAgICB0aGlzLnByb3ZpZGVyQ2hhaW5SZXNvbHZlciA9IHByb3ZpZGVyQ2hhaW5SZXNvbHZlcjtcbiAgfVxuXG4gIG1lc3NhZ2VzOiBNZXNzYWdlc1Jlc291cmNlID0gbWFrZU1lc3NhZ2VzUmVzb3VyY2UodGhpcyk7XG4gIGNvbXBsZXRpb25zOiBSZXNvdXJjZXMuQ29tcGxldGlvbnMgPSBuZXcgUmVzb3VyY2VzLkNvbXBsZXRpb25zKHRoaXMpO1xuICBiZXRhOiBCZXRhUmVzb3VyY2UgPSBtYWtlQmV0YVJlc291cmNlKHRoaXMpO1xuXG4gIHByb3RlY3RlZCBvdmVycmlkZSB2YWxpZGF0ZUhlYWRlcnMoKSB7XG4gICAgLy8gYXV0aCB2YWxpZGF0aW9uIGlzIGhhbmRsZWQgaW4gcHJlcGFyZVJlcXVlc3Qgc2luY2UgaXQgbmVlZHMgdG8gYmUgYXN5bmNcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBhc3luYyBwcmVwYXJlUmVxdWVzdChcbiAgICByZXF1ZXN0OiBGaW5hbGl6ZWRSZXF1ZXN0SW5pdCxcbiAgICB7IHVybCwgb3B0aW9ucyB9OiB7IHVybDogc3RyaW5nOyBvcHRpb25zOiBGaW5hbFJlcXVlc3RPcHRpb25zIH0sXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLnNraXBBdXRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlZ2lvbk5hbWUgPSB0aGlzLmF3c1JlZ2lvbjtcbiAgICBpZiAoIXJlZ2lvbk5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0V4cGVjdGVkIGBhd3NSZWdpb25gIG9wdGlvbiB0byBiZSBwYXNzZWQgdG8gdGhlIGNsaWVudCBvciB0aGUgYEFXU19SRUdJT05gIGVudmlyb25tZW50IHZhcmlhYmxlIHRvIGJlIHByZXNlbnQnLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgZ2V0QXV0aEhlYWRlcnMocmVxdWVzdCwge1xuICAgICAgdXJsLFxuICAgICAgcmVnaW9uTmFtZSxcbiAgICAgIGF3c0FjY2Vzc0tleTogdGhpcy5hd3NBY2Nlc3NLZXksXG4gICAgICBhd3NTZWNyZXRLZXk6IHRoaXMuYXdzU2VjcmV0S2V5LFxuICAgICAgYXdzU2Vzc2lvblRva2VuOiB0aGlzLmF3c1Nlc3Npb25Ub2tlbixcbiAgICAgIGZldGNoT3B0aW9uczogdGhpcy5mZXRjaE9wdGlvbnMsXG4gICAgICBwcm92aWRlckNoYWluUmVzb2x2ZXI6IHRoaXMucHJvdmlkZXJDaGFpblJlc29sdmVyLFxuICAgIH0pO1xuICAgIHJlcXVlc3QuaGVhZGVycyA9IGJ1aWxkSGVhZGVycyhbaGVhZGVycywgcmVxdWVzdC5oZWFkZXJzXSkudmFsdWVzO1xuICB9XG5cbiAgb3ZlcnJpZGUgYXN5bmMgYnVpbGRSZXF1ZXN0KG9wdGlvbnM6IEZpbmFsUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPHtcbiAgICByZXE6IEZpbmFsaXplZFJlcXVlc3RJbml0O1xuICAgIHVybDogc3RyaW5nO1xuICAgIHRpbWVvdXQ6IG51bWJlcjtcbiAgfT4ge1xuICAgIG9wdGlvbnMuX19zdHJlYW1DbGFzcyA9IFN0cmVhbTtcblxuICAgIGlmIChpc09iaihvcHRpb25zLmJvZHkpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzaGFsbG93IGNvcHkgb2YgdGhlIHJlcXVlc3QgYm9keSBzbyB0aGF0IGNvZGUgdGhhdCBtdXRhdGVzIGl0IGxhdGVyXG4gICAgICAvLyBkb2Vzbid0IG11dGF0ZSB0aGUgb3JpZ2luYWwgdXNlci1wcm92aWRlZCBvYmplY3RcbiAgICAgIG9wdGlvbnMuYm9keSA9IHsgLi4ub3B0aW9ucy5ib2R5IH07XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqKG9wdGlvbnMuYm9keSkpIHtcbiAgICAgIGlmICghb3B0aW9ucy5ib2R5WydhbnRocm9waWNfdmVyc2lvbiddKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keVsnYW50aHJvcGljX3ZlcnNpb24nXSA9IERFRkFVTFRfVkVSU0lPTjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycyAmJiAhb3B0aW9ucy5ib2R5WydhbnRocm9waWNfYmV0YSddKSB7XG4gICAgICAgIGNvbnN0IGJldGFzID0gYnVpbGRIZWFkZXJzKFtvcHRpb25zLmhlYWRlcnNdKS52YWx1ZXMuZ2V0KCdhbnRocm9waWMtYmV0YScpO1xuICAgICAgICBpZiAoYmV0YXMgIT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuYm9keVsnYW50aHJvcGljX2JldGEnXSA9IGJldGFzLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoTU9ERUxfRU5EUE9JTlRTLmhhcyhvcHRpb25zLnBhdGgpICYmIG9wdGlvbnMubWV0aG9kID09PSAncG9zdCcpIHtcbiAgICAgIGlmICghaXNPYmoob3B0aW9ucy5ib2R5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHJlcXVlc3QgYm9keSB0byBiZSBhbiBvYmplY3QgZm9yIHBvc3QgL3YxL21lc3NhZ2VzJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1vZGVsID0gb3B0aW9ucy5ib2R5Wydtb2RlbCddIGFzIHN0cmluZztcbiAgICAgIG9wdGlvbnMuYm9keVsnbW9kZWwnXSA9IHVuZGVmaW5lZDtcblxuICAgICAgY29uc3Qgc3RyZWFtID0gb3B0aW9ucy5ib2R5WydzdHJlYW0nXTtcbiAgICAgIG9wdGlvbnMuYm9keVsnc3RyZWFtJ10gPSB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChzdHJlYW0pIHtcbiAgICAgICAgb3B0aW9ucy5wYXRoID0gcGF0aGAvbW9kZWwvJHttb2RlbH0vaW52b2tlLXdpdGgtcmVzcG9uc2Utc3RyZWFtYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMucGF0aCA9IHBhdGhgL21vZGVsLyR7bW9kZWx9L2ludm9rZWA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLmJ1aWxkUmVxdWVzdChvcHRpb25zKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBCZWRyb2NrIEFQSSBkb2VzIG5vdCBjdXJyZW50bHkgc3VwcG9ydCB0b2tlbiBjb3VudGluZyBvciB0aGUgQmF0Y2ggQVBJLlxuICovXG50eXBlIE1lc3NhZ2VzUmVzb3VyY2UgPSBPbWl0PFJlc291cmNlcy5NZXNzYWdlcywgJ2JhdGNoZXMnIHwgJ2NvdW50VG9rZW5zJz47XG5cbmZ1bmN0aW9uIG1ha2VNZXNzYWdlc1Jlc291cmNlKGNsaWVudDogQW50aHJvcGljQmVkcm9jayk6IE1lc3NhZ2VzUmVzb3VyY2Uge1xuICBjb25zdCByZXNvdXJjZSA9IG5ldyBSZXNvdXJjZXMuTWVzc2FnZXMoY2xpZW50KTtcblxuICAvLyBAdHMtZXhwZWN0LWVycm9yIHdlJ3JlIGRlbGV0aW5nIG5vbi1vcHRpb25hbCBwcm9wZXJ0aWVzXG4gIGRlbGV0ZSByZXNvdXJjZS5iYXRjaGVzO1xuXG4gIC8vIEB0cy1leHBlY3QtZXJyb3Igd2UncmUgZGVsZXRpbmcgbm9uLW9wdGlvbmFsIHByb3BlcnRpZXNcbiAgZGVsZXRlIHJlc291cmNlLmNvdW50VG9rZW5zO1xuXG4gIHJldHVybiByZXNvdXJjZTtcbn1cblxuLyoqXG4gKiBUaGUgQmVkcm9jayBBUEkgZG9lcyBub3QgY3VycmVudGx5IHN1cHBvcnQgcHJvbXB0IGNhY2hpbmcsIHRva2VuIGNvdW50aW5nIG9yIHRoZSBCYXRjaCBBUEkuXG4gKi9cbnR5cGUgQmV0YVJlc291cmNlID0gT21pdDxSZXNvdXJjZXMuQmV0YSwgJ3Byb21wdENhY2hpbmcnIHwgJ21lc3NhZ2VzJz4gJiB7XG4gIG1lc3NhZ2VzOiBPbWl0PFJlc291cmNlcy5CZXRhWydtZXNzYWdlcyddLCAnYmF0Y2hlcycgfCAnY291bnRUb2tlbnMnPjtcbn07XG5cbmZ1bmN0aW9uIG1ha2VCZXRhUmVzb3VyY2UoY2xpZW50OiBBbnRocm9waWNCZWRyb2NrKTogQmV0YVJlc291cmNlIHtcbiAgY29uc3QgcmVzb3VyY2UgPSBuZXcgUmVzb3VyY2VzLkJldGEoY2xpZW50KTtcblxuICAvLyBAdHMtZXhwZWN0LWVycm9yIHdlJ3JlIGRlbGV0aW5nIG5vbi1vcHRpb25hbCBwcm9wZXJ0aWVzXG4gIGRlbGV0ZSByZXNvdXJjZS5wcm9tcHRDYWNoaW5nO1xuXG4gIC8vIEB0cy1leHBlY3QtZXJyb3Igd2UncmUgZGVsZXRpbmcgbm9uLW9wdGlvbmFsIHByb3BlcnRpZXNcbiAgZGVsZXRlIHJlc291cmNlLm1lc3NhZ2VzLmJhdGNoZXM7XG5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvciB3ZSdyZSBkZWxldGluZyBub24tb3B0aW9uYWwgcHJvcGVydGllc1xuICBkZWxldGUgcmVzb3VyY2UubWVzc2FnZXMuY291bnRUb2tlbnM7XG5cbiAgcmV0dXJuIHJlc291cmNlO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJPLFNBQVMsVUFBVSxHQUFHLEdBQUc7QUFDNUIsZ0JBQWMsR0FBRyxDQUFDO0FBQ2xCLFdBQVMsS0FBSztBQUFFLFNBQUssY0FBYztBQUFBLEVBQUc7QUFD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Z0IsR0FBRztBQUN0RCxrQkFBTSxRQUFRLGFBQWEsQ0FBQyxRQUFRLE9BQU8sQ0FBQyxFQUFFLE9BQU8sSUFBSSxnQkFBZ0I7QUFDekUsZ0JBQUksU0FBUyxNQUFNO0FBQ2pCLHNCQUFRLEtBQUssZ0JBQWdCLElBQUksTUFBTSxNQUFNLEdBQUc7WUFDbEQ7VUFDRjtRQUNGO0FBRUEsWUFBSSxnQkFBZ0IsSUFBSSxRQUFRLElBQUksS0FBSyxRQUFRLFdBQVcsUUFBUTtBQUNsRSxjQUFJLENBQUMsTUFBTSxRQUFRLElBQUksR0FBRztBQUN4QixrQkFBTSxJQUFJLE1BQU0sNkRBQTZEO1VBQy9FO0FBRUEsZ0JBQU0sUUFBUSxRQUFRLEtBQUssT0FBTztBQUNsQyxrQkFBUSxLQUFLLE9BQU8sSUFBSTtBQUV4QixnQkFBTSxTQUFTLFFBQVEsS0FBSyxRQUFRO0FBQ3BDLGtCQUFRLEtBQUssUUFBUSxJQUFJO0FBRXpCLGNBQUksUUFBUTtBQUNWLG9CQUFRLE9BQU8sY0FBYyxLQUFLO1VBQ3BDLE9BQU87QUFDTCxvQkFBUSxPQUFPLGNBQWMsS0FBSztVQUNwQztRQUNGO0FBRUEsZUFBTyxNQUFNLGFBQWEsT0FBTztNQUNuQzs7OztBIiwKICAibmFtZXMiOiBbInYiLCAiZCIsICJiIiwgIl9fYXNzaWduIiwgIlJhd1NoYTI1NiIsICJmcm9tVXRmOCIsICJ0b1V0ZjgiLCAiZnJvbVV0ZjgiLCAidG9VdGY4IiwgInJlcXVpcmVfZGlzdF9janMiLCAiZnJvbVV0ZjgiLCAidG9VdGY4IiwgImZyb21VdGY4IiwgIlNoYTI1NiIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgIl9fZXhwb3J0IiwgIl9fdG9Db21tb25KUyIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgIl9fZXhwb3J0IiwgIl9fdG9Db21tb25KUyIsICJIdHRwUmVxdWVzdCIsICJfSHR0cFJlcXVlc3QiLCAicmVxdWlyZV9kaXN0X2NqcyIsICJfX2V4cG9ydCIsICJfX3RvQ29tbW9uSlMiLCAicmVxdWlyZV9kaXN0X2NqcyIsICJfX2V4cG9ydCIsICJfX3RvQ29tbW9uSlMiLCAicmVxdWlyZV9kaXN0X2NqcyIsICJfX2V4cG9ydCIsICJfX3RvQ29tbW9uSlMiLCAicmVxdWlyZV9kaXN0X2NqcyIsICJfX2V4cG9ydCIsICJfX3RvQ29tbW9uSlMiLCAicmVxdWlyZV9kaXN0X2NqcyIsICJfX2V4cG9ydCIsICJfX3RvQ29tbW9uSlMiLCAiZnJvbVV0ZjgiLCAidG9VdGY4IiwgInJlcXVpcmVfZGlzdF9janMiLCAiX19leHBvcnQiLCAiX190b0NvbW1vbkpTIiwgInJlcXVpcmVfZGlzdF9janMiLCAiX19leHBvcnQiLCAiX190b0NvbW1vbkpTIiwgInJlcXVpcmVfZGlzdF9janMiLCAiX19leHBvcnQiLCAiX190b0NvbW1vbkpTIiwgIlNpZ25hdHVyZVY0IiwgIl9JbnQ2NCIsICJwYXRoIiwgImZyb21VdGY4IiwgIkF3c0NyYzMyIiwgIkNyYzMyIiwgInJlcXVpcmVfZGlzdF9janMiLCAiX19leHBvcnQiLCAiX190b0NvbW1vbkpTIiwgInJlcXVpcmVfZGlzdF9janMiLCAiX19leHBvcnQiLCAiX190b0NvbW1vbkpTIiwgIl9JbnQ2NCIsICJ0b1V0ZjgiLCAiZnJvbVV0ZjgiLCAicmVxdWlyZV9kaXN0X2NqcyIsICJfX2V4cG9ydCIsICJfX3RvQ29tbW9uSlMiLCAiRXZlbnRTdHJlYW1NYXJzaGFsbGVyIiwgInRvVXRmOCIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgIl9fZXhwb3J0IiwgIl9fdG9Db21tb25KUyIsICJFdmVudFN0cmVhbU1hcnNoYWxsZXIiLCAiZnJvbUJhc2U2NCIsICJ0b0Jhc2U2NCIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgIl9fdG9Db21tb25KUyIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgIl9fZXhwb3J0IiwgIl9fdG9Db21tb25KUyIsICJnZXRBd3NDaHVua2VkRW5jb2RpbmdTdHJlYW0iLCAicmVxdWlyZV9kaXN0X2NqcyIsICJfX2V4cG9ydCIsICJfX3RvQ29tbW9uSlMiLCAicmVxdWlyZV9kaXN0X2NqcyIsICJfX2V4cG9ydCIsICJfX3RvQ29tbW9uSlMiLCAicmVxdWlyZV9kaXN0X2NqcyIsICJfX2V4cG9ydCIsICJfX3RvRVNNIiwgIl9fdG9Db21tb25KUyIsICJzdHJlYW1Db2xsZWN0b3IiLCAiaW1wb3J0X3Byb3RvY29sX2h0dHAiLCAiX05vZGVIdHRwSGFuZGxlciIsICJwYXRoIiwgIl9Ob2RlSHR0cDJIYW5kbGVyIiwgInNka1N0cmVhbU1peGluIiwgInJlcXVpcmVfZGlzdF9janMiLCAiX19leHBvcnQiLCAiX190b0NvbW1vbkpTIiwgImltcG9ydF91dGlsX2Jhc2U2NCIsICJfVWludDhBcnJheUJsb2JBZGFwdGVyIiwgInJlcXVpcmVfZGlzdF9janMiLCAiX19leHBvcnQiLCAiX190b0NvbW1vbkpTIiwgImNvbGxlY3RCb2R5IiwgIm1hcCIsICJ0YWtlIiwgIl9TZXJ2aWNlRXhjZXB0aW9uIiwgImRlc2VyaWFsaXplTWV0YWRhdGEiLCAiX0xhenlKc29uU3RyaW5nIiwgIl9fZXhwZWN0U3RyaW5nIiwgIl9fZGVjb3JhdGVTZXJ2aWNlRXhjZXB0aW9uIiwgIl9fZXhwZWN0SW50MzIiLCAiU3RyZWFtIiwgInBhdGgiLCAiU3RyZWFtIl0KfQo=
