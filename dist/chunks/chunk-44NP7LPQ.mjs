#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs2 as require_dist_cjs3,
  require_dist_cjs3 as require_dist_cjs4
} from "./chunk-RJRMPBDE.mjs";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-HVZS5VUZ.mjs";
import {
  require_dist_cjs as require_dist_cjs5
} from "./chunk-FONUB5ET.mjs";
import {
  require_dist_cjs
} from "./chunk-P2R73CAR.mjs";
import {
  require_dist_cjs2 as require_dist_cjs6,
  require_dist_cjs3 as require_dist_cjs7
} from "./chunk-HJNATCD3.mjs";
import {
  __commonJS,
  __esm,
  __export,
  __require,
  __toCommonJS,
  __toESM
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
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
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op2) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op2[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op2[0] & 2 ? y["return"] : op2[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op2[1])).done) return t;
      if (y = 0, t) op2 = [op2[0] & 2, t.value];
      switch (op2[0]) {
        case 0:
        case 1:
          t = op2;
          break;
        case 4:
          _.label++;
          return { value: op2[1], done: false };
        case 5:
          _.label++;
          y = op2[1];
          op2 = [0];
          continue;
        case 7:
          op2 = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op2[0] === 6 || op2[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op2[0] === 3 && (!t || op2[1] > t[0] && op2[1] < t[3])) {
            _.label = op2[1];
            break;
          }
          if (op2[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op2;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op2);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op2 = body.call(thisArg, _);
    } catch (e) {
      op2 = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op2[0] & 5) throw op2[1];
    return { value: op2[0] ? op2[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
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
  } catch (error2) {
    e = { error: error2 };
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
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
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
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
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
    for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
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
    __createBinding = Object.create ? (function(o, m, k, k2) {
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
    });
    __setModuleDefault = Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error2, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error2, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/deref.js
var deref;
var init_deref = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/deref.js"() {
    deref = (schemaRef) => {
      if (typeof schemaRef === "function") {
        return schemaRef();
      }
      return schemaRef;
    };
  }
});

// node_modules/.pnpm/@smithy+util-middleware@4.2.12/node_modules/@smithy/util-middleware/dist-cjs/index.js
var require_dist_cjs8 = __commonJS({
  "node_modules/.pnpm/@smithy+util-middleware@4.2.12/node_modules/@smithy/util-middleware/dist-cjs/index.js"(exports) {
    "use strict";
    var types = require_dist_cjs();
    var getSmithyContext3 = (context) => context[types.SMITHY_CONTEXT_KEY] || (context[types.SMITHY_CONTEXT_KEY] = {});
    var normalizeProvider = (input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    };
    exports.getSmithyContext = getSmithyContext3;
    exports.normalizeProvider = normalizeProvider;
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js
var operation;
var init_operation = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js"() {
    operation = (namespace, name, traits, input, output) => ({
      name,
      namespace,
      traits,
      input,
      output
    });
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js
var import_protocol_http, import_util_middleware, schemaDeserializationMiddleware, findHeader;
var init_schemaDeserializationMiddleware = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js"() {
    import_protocol_http = __toESM(require_dist_cjs2());
    import_util_middleware = __toESM(require_dist_cjs8());
    init_operation();
    schemaDeserializationMiddleware = (config) => (next, context) => async (args) => {
      const { response } = await next(args);
      const { operationSchema } = (0, import_util_middleware.getSmithyContext)(context);
      const [, ns, n, t, i, o] = operationSchema ?? [];
      try {
        const parsed = await config.protocol.deserializeResponse(operation(ns, n, t, i, o), {
          ...config,
          ...context
        }, response);
        return {
          response,
          output: parsed
        };
      } catch (error2) {
        Object.defineProperty(error2, "$response", {
          value: response,
          enumerable: false,
          writable: false,
          configurable: false
        });
        if (!("$metadata" in error2)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          try {
            error2.message += "\n  " + hint;
          } catch (e) {
            if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(hint);
            } else {
              context.logger?.warn?.(hint);
            }
          }
          if (typeof error2.$responseBodyText !== "undefined") {
            if (error2.$response) {
              error2.$response.body = error2.$responseBodyText;
            }
          }
          try {
            if (import_protocol_http.HttpResponse.isInstance(response)) {
              const { headers = {} } = response;
              const headerEntries = Object.entries(headers);
              error2.$metadata = {
                httpStatusCode: response.statusCode,
                requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
                extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
                cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
              };
            }
          } catch (e) {
          }
        }
        throw error2;
      }
    };
    findHeader = (pattern, headers) => {
      return (headers.find(([k]) => {
        return k.match(pattern);
      }) || [void 0, void 0])[1];
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/endpoints/toEndpointV1.js
var import_url_parser, toEndpointV1;
var init_toEndpointV1 = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/endpoints/toEndpointV1.js"() {
    import_url_parser = __toESM(require_dist_cjs5());
    toEndpointV1 = (endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          const v1Endpoint = (0, import_url_parser.parseUrl)(endpoint.url);
          if (endpoint.headers) {
            v1Endpoint.headers = {};
            for (const [name, values] of Object.entries(endpoint.headers)) {
              v1Endpoint.headers[name.toLowerCase()] = values.join(", ");
            }
          }
          return v1Endpoint;
        }
        return endpoint;
      }
      return (0, import_url_parser.parseUrl)(endpoint);
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/endpoints/index.js
var endpoints_exports = {};
__export(endpoints_exports, {
  toEndpointV1: () => toEndpointV1
});
var init_endpoints = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/endpoints/index.js"() {
    init_toEndpointV1();
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js
var import_util_middleware2, schemaSerializationMiddleware;
var init_schemaSerializationMiddleware = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js"() {
    init_endpoints();
    import_util_middleware2 = __toESM(require_dist_cjs8());
    init_operation();
    schemaSerializationMiddleware = (config) => (next, context) => async (args) => {
      const { operationSchema } = (0, import_util_middleware2.getSmithyContext)(context);
      const [, ns, n, t, i, o] = operationSchema ?? [];
      const endpoint = context.endpointV2 ? async () => toEndpointV1(context.endpointV2) : config.endpoint;
      const request = await config.protocol.serializeRequest(operation(ns, n, t, i, o), args.input, {
        ...config,
        ...context,
        endpoint
      });
      return next({
        ...args,
        request
      });
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js
function getSchemaSerdePlugin(config) {
  return {
    applyToStack: (commandStack) => {
      commandStack.add(schemaSerializationMiddleware(config), serializerMiddlewareOption);
      commandStack.add(schemaDeserializationMiddleware(config), deserializerMiddlewareOption);
      config.protocol.setSerdeContext(config);
    }
  };
}
var deserializerMiddlewareOption, serializerMiddlewareOption;
var init_getSchemaSerdePlugin = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js"() {
    init_schemaDeserializationMiddleware();
    init_schemaSerializationMiddleware();
    deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    serializerMiddlewareOption = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/Schema.js
var Schema;
var init_Schema = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/Schema.js"() {
    Schema = class {
      name;
      namespace;
      traits;
      static assign(instance, values) {
        const schema = Object.assign(instance, values);
        return schema;
      }
      static [Symbol.hasInstance](lhs) {
        const isPrototype = this.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
          const list2 = lhs;
          return list2.symbol === this.symbol;
        }
        return isPrototype;
      }
      getName() {
        return this.namespace + "#" + this.name;
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ListSchema.js
var ListSchema, list;
var init_ListSchema = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ListSchema.js"() {
    init_Schema();
    ListSchema = class _ListSchema extends Schema {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/lis");
      name;
      traits;
      valueSchema;
      symbol = _ListSchema.symbol;
    };
    list = (namespace, name, traits, valueSchema) => Schema.assign(new ListSchema(), {
      name,
      namespace,
      traits,
      valueSchema
    });
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/MapSchema.js
var MapSchema, map;
var init_MapSchema = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/MapSchema.js"() {
    init_Schema();
    MapSchema = class _MapSchema extends Schema {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/map");
      name;
      traits;
      keySchema;
      valueSchema;
      symbol = _MapSchema.symbol;
    };
    map = (namespace, name, traits, keySchema, valueSchema) => Schema.assign(new MapSchema(), {
      name,
      namespace,
      traits,
      keySchema,
      valueSchema
    });
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/OperationSchema.js
var OperationSchema, op;
var init_OperationSchema = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/OperationSchema.js"() {
    init_Schema();
    OperationSchema = class _OperationSchema extends Schema {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/ope");
      name;
      traits;
      input;
      output;
      symbol = _OperationSchema.symbol;
    };
    op = (namespace, name, traits, input, output) => Schema.assign(new OperationSchema(), {
      name,
      namespace,
      traits,
      input,
      output
    });
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/StructureSchema.js
var StructureSchema, struct;
var init_StructureSchema = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/StructureSchema.js"() {
    init_Schema();
    StructureSchema = class _StructureSchema extends Schema {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/str");
      name;
      traits;
      memberNames;
      memberList;
      symbol = _StructureSchema.symbol;
    };
    struct = (namespace, name, traits, memberNames, memberList) => Schema.assign(new StructureSchema(), {
      name,
      namespace,
      traits,
      memberNames,
      memberList
    });
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ErrorSchema.js
var ErrorSchema, error;
var init_ErrorSchema = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ErrorSchema.js"() {
    init_Schema();
    init_StructureSchema();
    ErrorSchema = class _ErrorSchema extends StructureSchema {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/err");
      ctor;
      symbol = _ErrorSchema.symbol;
    };
    error = (namespace, name, traits, memberNames, memberList, ctor) => Schema.assign(new ErrorSchema(), {
      name,
      namespace,
      traits,
      memberNames,
      memberList,
      ctor: null
    });
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js
function translateTraits(indicator) {
  if (typeof indicator === "object") {
    return indicator;
  }
  indicator = indicator | 0;
  if (traitsCache[indicator]) {
    return traitsCache[indicator];
  }
  const traits = {};
  let i = 0;
  for (const trait of [
    "httpLabel",
    "idempotent",
    "idempotencyToken",
    "sensitive",
    "httpPayload",
    "httpResponseCode",
    "httpQueryParams"
  ]) {
    if ((indicator >> i++ & 1) === 1) {
      traits[trait] = 1;
    }
  }
  return traitsCache[indicator] = traits;
}
var traitsCache;
var init_translateTraits = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js"() {
    traitsCache = [];
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js
function member(memberSchema, memberName) {
  if (memberSchema instanceof NormalizedSchema) {
    return Object.assign(memberSchema, {
      memberName,
      _isMemberSchema: true
    });
  }
  const internalCtorAccess = NormalizedSchema;
  return new internalCtorAccess(memberSchema, memberName);
}
var anno, simpleSchemaCacheN, simpleSchemaCacheS, NormalizedSchema, isMemberSchema, isStaticSchema;
var init_NormalizedSchema = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js"() {
    init_deref();
    init_translateTraits();
    anno = {
      it: /* @__PURE__ */ Symbol.for("@smithy/nor-struct-it"),
      ns: /* @__PURE__ */ Symbol.for("@smithy/ns")
    };
    simpleSchemaCacheN = [];
    simpleSchemaCacheS = {};
    NormalizedSchema = class _NormalizedSchema {
      ref;
      memberName;
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/nor");
      symbol = _NormalizedSchema.symbol;
      name;
      schema;
      _isMemberSchema;
      traits;
      memberTraits;
      normalizedTraits;
      constructor(ref, memberName) {
        this.ref = ref;
        this.memberName = memberName;
        const traitStack = [];
        let _ref = ref;
        let schema = ref;
        this._isMemberSchema = false;
        while (isMemberSchema(_ref)) {
          traitStack.push(_ref[1]);
          _ref = _ref[0];
          schema = deref(_ref);
          this._isMemberSchema = true;
        }
        if (traitStack.length > 0) {
          this.memberTraits = {};
          for (let i = traitStack.length - 1; i >= 0; --i) {
            const traitSet = traitStack[i];
            Object.assign(this.memberTraits, translateTraits(traitSet));
          }
        } else {
          this.memberTraits = 0;
        }
        if (schema instanceof _NormalizedSchema) {
          const computedMemberTraits = this.memberTraits;
          Object.assign(this, schema);
          this.memberTraits = Object.assign({}, computedMemberTraits, schema.getMemberTraits(), this.getMemberTraits());
          this.normalizedTraits = void 0;
          this.memberName = memberName ?? schema.memberName;
          return;
        }
        this.schema = deref(schema);
        if (isStaticSchema(this.schema)) {
          this.name = `${this.schema[1]}#${this.schema[2]}`;
          this.traits = this.schema[3];
        } else {
          this.name = this.memberName ?? String(schema);
          this.traits = 0;
        }
        if (this._isMemberSchema && !memberName) {
          throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
        }
      }
      static [Symbol.hasInstance](lhs) {
        const isPrototype = this.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
          const ns = lhs;
          return ns.symbol === this.symbol;
        }
        return isPrototype;
      }
      static of(ref) {
        const keyAble = typeof ref === "function" || typeof ref === "object" && ref !== null;
        if (typeof ref === "number") {
          if (simpleSchemaCacheN[ref]) {
            return simpleSchemaCacheN[ref];
          }
        } else if (typeof ref === "string") {
          if (simpleSchemaCacheS[ref]) {
            return simpleSchemaCacheS[ref];
          }
        } else if (keyAble) {
          if (ref[anno.ns]) {
            return ref[anno.ns];
          }
        }
        const sc = deref(ref);
        if (sc instanceof _NormalizedSchema) {
          return sc;
        }
        if (isMemberSchema(sc)) {
          const [ns2, traits] = sc;
          if (ns2 instanceof _NormalizedSchema) {
            Object.assign(ns2.getMergedTraits(), translateTraits(traits));
            return ns2;
          }
          throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(ref, null, 2)}.`);
        }
        const ns = new _NormalizedSchema(sc);
        if (keyAble) {
          return ref[anno.ns] = ns;
        }
        if (typeof sc === "string") {
          return simpleSchemaCacheS[sc] = ns;
        }
        if (typeof sc === "number") {
          return simpleSchemaCacheN[sc] = ns;
        }
        return ns;
      }
      getSchema() {
        const sc = this.schema;
        if (Array.isArray(sc) && sc[0] === 0) {
          return sc[4];
        }
        return sc;
      }
      getName(withNamespace = false) {
        const { name } = this;
        const short = !withNamespace && name && name.includes("#");
        return short ? name.split("#")[1] : name || void 0;
      }
      getMemberName() {
        return this.memberName;
      }
      isMemberSchema() {
        return this._isMemberSchema;
      }
      isListSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" ? sc >= 64 && sc < 128 : sc[0] === 1;
      }
      isMapSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" ? sc >= 128 && sc <= 255 : sc[0] === 2;
      }
      isStructSchema() {
        const sc = this.getSchema();
        if (typeof sc !== "object") {
          return false;
        }
        const id = sc[0];
        return id === 3 || id === -3 || id === 4;
      }
      isUnionSchema() {
        const sc = this.getSchema();
        if (typeof sc !== "object") {
          return false;
        }
        return sc[0] === 4;
      }
      isBlobSchema() {
        const sc = this.getSchema();
        return sc === 21 || sc === 42;
      }
      isTimestampSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" && sc >= 4 && sc <= 7;
      }
      isUnitSchema() {
        return this.getSchema() === "unit";
      }
      isDocumentSchema() {
        return this.getSchema() === 15;
      }
      isStringSchema() {
        return this.getSchema() === 0;
      }
      isBooleanSchema() {
        return this.getSchema() === 2;
      }
      isNumericSchema() {
        return this.getSchema() === 1;
      }
      isBigIntegerSchema() {
        return this.getSchema() === 17;
      }
      isBigDecimalSchema() {
        return this.getSchema() === 19;
      }
      isStreaming() {
        const { streaming } = this.getMergedTraits();
        return !!streaming || this.getSchema() === 42;
      }
      isIdempotencyToken() {
        return !!this.getMergedTraits().idempotencyToken;
      }
      getMergedTraits() {
        return this.normalizedTraits ?? (this.normalizedTraits = {
          ...this.getOwnTraits(),
          ...this.getMemberTraits()
        });
      }
      getMemberTraits() {
        return translateTraits(this.memberTraits);
      }
      getOwnTraits() {
        return translateTraits(this.traits);
      }
      getKeySchema() {
        const [isDoc, isMap] = [this.isDocumentSchema(), this.isMapSchema()];
        if (!isDoc && !isMap) {
          throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
        }
        const schema = this.getSchema();
        const memberSchema = isDoc ? 15 : schema[4] ?? 0;
        return member([memberSchema, 0], "key");
      }
      getValueSchema() {
        const sc = this.getSchema();
        const [isDoc, isMap, isList] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()];
        const memberSchema = typeof sc === "number" ? 63 & sc : sc && typeof sc === "object" && (isMap || isList) ? sc[3 + sc[0]] : isDoc ? 15 : void 0;
        if (memberSchema != null) {
          return member([memberSchema, 0], isMap ? "value" : "member");
        }
        throw new Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
      }
      getMemberSchema(memberName) {
        const struct2 = this.getSchema();
        if (this.isStructSchema() && struct2[4].includes(memberName)) {
          const i = struct2[4].indexOf(memberName);
          const memberSchema = struct2[5][i];
          return member(isMemberSchema(memberSchema) ? memberSchema : [memberSchema, 0], memberName);
        }
        if (this.isDocumentSchema()) {
          return member([15, 0], memberName);
        }
        throw new Error(`@smithy/core/schema - ${this.getName(true)} has no member=${memberName}.`);
      }
      getMemberSchemas() {
        const buffer = {};
        try {
          for (const [k, v] of this.structIterator()) {
            buffer[k] = v;
          }
        } catch (ignored) {
        }
        return buffer;
      }
      getEventStreamMember() {
        if (this.isStructSchema()) {
          for (const [memberName, memberSchema] of this.structIterator()) {
            if (memberSchema.isStreaming() && memberSchema.isStructSchema()) {
              return memberName;
            }
          }
        }
        return "";
      }
      *structIterator() {
        if (this.isUnitSchema()) {
          return;
        }
        if (!this.isStructSchema()) {
          throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
        }
        const struct2 = this.getSchema();
        const z = struct2[4].length;
        let it = struct2[anno.it];
        if (it && z === it.length) {
          yield* it;
          return;
        }
        it = Array(z);
        for (let i = 0; i < z; ++i) {
          const k = struct2[4][i];
          const v = member([struct2[5][i], 0], k);
          yield it[i] = [k, v];
        }
        struct2[anno.it] = it;
      }
    };
    isMemberSchema = (sc) => Array.isArray(sc) && sc.length === 2;
    isStaticSchema = (sc) => Array.isArray(sc) && sc.length >= 5;
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/SimpleSchema.js
var SimpleSchema, sim, simAdapter;
var init_SimpleSchema = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/SimpleSchema.js"() {
    init_Schema();
    SimpleSchema = class _SimpleSchema extends Schema {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/sim");
      name;
      schemaRef;
      traits;
      symbol = _SimpleSchema.symbol;
    };
    sim = (namespace, name, schemaRef, traits) => Schema.assign(new SimpleSchema(), {
      name,
      namespace,
      traits,
      schemaRef
    });
    simAdapter = (namespace, name, traits, schemaRef) => Schema.assign(new SimpleSchema(), {
      name,
      namespace,
      traits,
      schemaRef
    });
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/sentinels.js
var SCHEMA;
var init_sentinels = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/schemas/sentinels.js"() {
    SCHEMA = {
      BLOB: 21,
      STREAMING_BLOB: 42,
      BOOLEAN: 2,
      STRING: 0,
      NUMERIC: 1,
      BIG_INTEGER: 17,
      BIG_DECIMAL: 19,
      DOCUMENT: 15,
      TIMESTAMP_DEFAULT: 4,
      TIMESTAMP_DATE_TIME: 5,
      TIMESTAMP_HTTP_DATE: 6,
      TIMESTAMP_EPOCH_SECONDS: 7,
      LIST_MODIFIER: 64,
      MAP_MODIFIER: 128
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js
var TypeRegistry;
var init_TypeRegistry = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js"() {
    TypeRegistry = class _TypeRegistry {
      namespace;
      schemas;
      exceptions;
      static registries = /* @__PURE__ */ new Map();
      constructor(namespace, schemas = /* @__PURE__ */ new Map(), exceptions = /* @__PURE__ */ new Map()) {
        this.namespace = namespace;
        this.schemas = schemas;
        this.exceptions = exceptions;
      }
      static for(namespace) {
        if (!_TypeRegistry.registries.has(namespace)) {
          _TypeRegistry.registries.set(namespace, new _TypeRegistry(namespace));
        }
        return _TypeRegistry.registries.get(namespace);
      }
      copyFrom(other) {
        const { schemas, exceptions } = this;
        for (const [k, v] of other.schemas) {
          if (!schemas.has(k)) {
            schemas.set(k, v);
          }
        }
        for (const [k, v] of other.exceptions) {
          if (!exceptions.has(k)) {
            exceptions.set(k, v);
          }
        }
      }
      register(shapeId, schema) {
        const qualifiedName = this.normalizeShapeId(shapeId);
        for (const r of [this, _TypeRegistry.for(qualifiedName.split("#")[0])]) {
          r.schemas.set(qualifiedName, schema);
        }
      }
      getSchema(shapeId) {
        const id = this.normalizeShapeId(shapeId);
        if (!this.schemas.has(id)) {
          throw new Error(`@smithy/core/schema - schema not found for ${id}`);
        }
        return this.schemas.get(id);
      }
      registerError(es, ctor) {
        const $error = es;
        const ns = $error[1];
        for (const r of [this, _TypeRegistry.for(ns)]) {
          r.schemas.set(ns + "#" + $error[2], $error);
          r.exceptions.set($error, ctor);
        }
      }
      getErrorCtor(es) {
        const $error = es;
        if (this.exceptions.has($error)) {
          return this.exceptions.get($error);
        }
        const registry = _TypeRegistry.for($error[1]);
        return registry.exceptions.get($error);
      }
      getBaseException() {
        for (const exceptionKey of this.exceptions.keys()) {
          if (Array.isArray(exceptionKey)) {
            const [, ns, name] = exceptionKey;
            const id = ns + "#" + name;
            if (id.startsWith("smithy.ts.sdk.synthetic.") && id.endsWith("ServiceException")) {
              return exceptionKey;
            }
          }
        }
        return void 0;
      }
      find(predicate) {
        return [...this.schemas.values()].find(predicate);
      }
      clear() {
        this.schemas.clear();
        this.exceptions.clear();
      }
      normalizeShapeId(shapeId) {
        if (shapeId.includes("#")) {
          return shapeId;
        }
        return this.namespace + "#" + shapeId;
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/index.js
var schema_exports = {};
__export(schema_exports, {
  ErrorSchema: () => ErrorSchema,
  ListSchema: () => ListSchema,
  MapSchema: () => MapSchema,
  NormalizedSchema: () => NormalizedSchema,
  OperationSchema: () => OperationSchema,
  SCHEMA: () => SCHEMA,
  Schema: () => Schema,
  SimpleSchema: () => SimpleSchema,
  StructureSchema: () => StructureSchema,
  TypeRegistry: () => TypeRegistry,
  deref: () => deref,
  deserializerMiddlewareOption: () => deserializerMiddlewareOption,
  error: () => error,
  getSchemaSerdePlugin: () => getSchemaSerdePlugin,
  isStaticSchema: () => isStaticSchema,
  list: () => list,
  map: () => map,
  op: () => op,
  operation: () => operation,
  serializerMiddlewareOption: () => serializerMiddlewareOption,
  sim: () => sim,
  simAdapter: () => simAdapter,
  simpleSchemaCacheN: () => simpleSchemaCacheN,
  simpleSchemaCacheS: () => simpleSchemaCacheS,
  struct: () => struct,
  traitsCache: () => traitsCache,
  translateTraits: () => translateTraits
});
var init_schema = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/schema/index.js"() {
    init_deref();
    init_getSchemaSerdePlugin();
    init_ListSchema();
    init_MapSchema();
    init_OperationSchema();
    init_operation();
    init_ErrorSchema();
    init_NormalizedSchema();
    init_Schema();
    init_SimpleSchema();
    init_StructureSchema();
    init_sentinels();
    init_translateTraits();
    init_TypeRegistry();
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
var init_extended_encode_uri_component = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js"() {
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
var resolvedPath;
var init_resolve_path = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js"() {
    init_extended_encode_uri_component();
    resolvedPath = (resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
      if (input != null && input[memberName] !== void 0) {
        const labelValue = labelValueProvider();
        if (labelValue == null || labelValue.length <= 0) {
          throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath2 = resolvedPath2.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue));
      } else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
      }
      return resolvedPath2;
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
function requestBuilder(input, context) {
  return new RequestBuilder(input, context);
}
var import_protocol_http2, RequestBuilder;
var init_requestBuilder = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js"() {
    import_protocol_http2 = __toESM(require_dist_cjs2());
    init_resolve_path();
    RequestBuilder = class {
      input;
      context;
      query = {};
      method = "";
      headers = {};
      path = "";
      body = null;
      hostname = "";
      resolvePathStack = [];
      constructor(input, context) {
        this.input = input;
        this.context = context;
      }
      async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
          resolvePath(this.path);
        }
        return new import_protocol_http2.HttpRequest({
          protocol,
          hostname: this.hostname || hostname,
          port,
          method: this.method,
          path: this.path,
          query: this.query,
          body: this.body,
          headers: this.headers
        });
      }
      hn(hostname) {
        this.hostname = hostname;
        return this;
      }
      bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
          this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
      }
      p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
          this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
      }
      h(headers) {
        this.headers = headers;
        return this;
      }
      q(query) {
        this.query = query;
        return this;
      }
      b(body) {
        this.body = body;
        return this;
      }
      m(method) {
        this.method = method;
        return this;
      }
    };
  }
});

// node_modules/.pnpm/@smithy+util-base64@4.3.2/node_modules/@smithy/util-base64/dist-cjs/fromBase64.js
var require_fromBase64 = __commonJS({
  "node_modules/.pnpm/@smithy+util-base64@4.3.2/node_modules/@smithy/util-base64/dist-cjs/fromBase64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs6();
    var BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
    var fromBase642 = (input) => {
      if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = (0, util_buffer_from_1.fromString)(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    };
    exports.fromBase64 = fromBase642;
  }
});

// node_modules/.pnpm/@smithy+util-base64@4.3.2/node_modules/@smithy/util-base64/dist-cjs/toBase64.js
var require_toBase64 = __commonJS({
  "node_modules/.pnpm/@smithy+util-base64@4.3.2/node_modules/@smithy/util-base64/dist-cjs/toBase64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs6();
    var util_utf8_1 = require_dist_cjs7();
    var toBase642 = (_input) => {
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
    exports.toBase64 = toBase642;
  }
});

// node_modules/.pnpm/@smithy+util-base64@4.3.2/node_modules/@smithy/util-base64/dist-cjs/index.js
var require_dist_cjs9 = __commonJS({
  "node_modules/.pnpm/@smithy+util-base64@4.3.2/node_modules/@smithy/util-base64/dist-cjs/index.js"(exports) {
    "use strict";
    var fromBase642 = require_fromBase64();
    var toBase642 = require_toBase64();
    Object.prototype.hasOwnProperty.call(fromBase642, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: fromBase642["__proto__"]
    });
    Object.keys(fromBase642).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = fromBase642[k];
    });
    Object.prototype.hasOwnProperty.call(toBase642, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: toBase642["__proto__"]
    });
    Object.keys(toBase642).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = toBase642[k];
    });
  }
});

// node_modules/.pnpm/@smithy+fetch-http-handler@5.3.15/node_modules/@smithy/fetch-http-handler/dist-cjs/index.js
var require_dist_cjs10 = __commonJS({
  "node_modules/.pnpm/@smithy+fetch-http-handler@5.3.15/node_modules/@smithy/fetch-http-handler/dist-cjs/index.js"(exports) {
    "use strict";
    var protocolHttp = require_dist_cjs2();
    var querystringBuilder = require_dist_cjs3();
    var utilBase64 = require_dist_cjs9();
    function createRequest(url, requestOptions) {
      return new Request(url, requestOptions);
    }
    function requestTimeout(timeoutInMs = 0) {
      return new Promise((resolve, reject) => {
        if (timeoutInMs) {
          setTimeout(() => {
            const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
            timeoutError.name = "TimeoutError";
            reject(timeoutError);
          }, timeoutInMs);
        }
      });
    }
    var keepAliveSupport = {
      supported: void 0
    };
    var FetchHttpHandler = class _FetchHttpHandler {
      config;
      configProvider;
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _FetchHttpHandler(instanceOrOptions);
      }
      constructor(options) {
        if (typeof options === "function") {
          this.configProvider = options().then((opts) => opts || {});
        } else {
          this.config = options ?? {};
          this.configProvider = Promise.resolve(this.config);
        }
        if (keepAliveSupport.supported === void 0) {
          keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"));
        }
      }
      destroy() {
      }
      async handle(request, { abortSignal, requestTimeout: requestTimeout$1 } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        const requestTimeoutInMs = requestTimeout$1 ?? this.config.requestTimeout;
        const keepAlive = this.config.keepAlive === true;
        const credentials = this.config.credentials;
        if (abortSignal?.aborted) {
          const abortError = buildAbortError(abortSignal);
          return Promise.reject(abortError);
        }
        let path = request.path;
        const queryString = querystringBuilder.buildQueryString(request.query || {});
        if (queryString) {
          path += `?${queryString}`;
        }
        if (request.fragment) {
          path += `#${request.fragment}`;
        }
        let auth = "";
        if (request.username != null || request.password != null) {
          const username = request.username ?? "";
          const password = request.password ?? "";
          auth = `${username}:${password}@`;
        }
        const { port, method } = request;
        const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
        const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
        const requestOptions = {
          body,
          headers: new Headers(request.headers),
          method,
          credentials
        };
        if (this.config?.cache) {
          requestOptions.cache = this.config.cache;
        }
        if (body) {
          requestOptions.duplex = "half";
        }
        if (typeof AbortController !== "undefined") {
          requestOptions.signal = abortSignal;
        }
        if (keepAliveSupport.supported) {
          requestOptions.keepalive = keepAlive;
        }
        if (typeof this.config.requestInit === "function") {
          Object.assign(requestOptions, this.config.requestInit(request));
        }
        let removeSignalEventListener = () => {
        };
        const fetchRequest = createRequest(url, requestOptions);
        const raceOfPromises = [
          fetch(fetchRequest).then((response) => {
            const fetchHeaders = response.headers;
            const transformedHeaders = {};
            for (const pair of fetchHeaders.entries()) {
              transformedHeaders[pair[0]] = pair[1];
            }
            const hasReadableStream = response.body != void 0;
            if (!hasReadableStream) {
              return response.blob().then((body2) => ({
                response: new protocolHttp.HttpResponse({
                  headers: transformedHeaders,
                  reason: response.statusText,
                  statusCode: response.status,
                  body: body2
                })
              }));
            }
            return {
              response: new protocolHttp.HttpResponse({
                headers: transformedHeaders,
                reason: response.statusText,
                statusCode: response.status,
                body: response.body
              })
            };
          }),
          requestTimeout(requestTimeoutInMs)
        ];
        if (abortSignal) {
          raceOfPromises.push(new Promise((resolve, reject) => {
            const onAbort = () => {
              const abortError = buildAbortError(abortSignal);
              reject(abortError);
            };
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              removeSignalEventListener = () => signal.removeEventListener("abort", onAbort);
            } else {
              abortSignal.onabort = onAbort;
            }
          }));
        }
        return Promise.race(raceOfPromises).finally(removeSignalEventListener);
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          config[key] = value;
          return config;
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
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
    var streamCollector = async (stream) => {
      if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
        if (Blob.prototype.arrayBuffer !== void 0) {
          return new Uint8Array(await stream.arrayBuffer());
        }
        return collectBlob(stream);
      }
      return collectStream(stream);
    };
    async function collectBlob(blob) {
      const base64 = await readToBase64(blob);
      const arrayBuffer = utilBase64.fromBase64(base64);
      return new Uint8Array(arrayBuffer);
    }
    async function collectStream(stream) {
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
    function readToBase64(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.readyState !== 2) {
            return reject(new Error("Reader aborted too early"));
          }
          const result = reader.result ?? "";
          const commaIndex = result.indexOf(",");
          const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
          resolve(result.substring(dataOffset));
        };
        reader.onabort = () => reject(new Error("Read aborted"));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
      });
    }
    exports.FetchHttpHandler = FetchHttpHandler;
    exports.keepAliveSupport = keepAliveSupport;
    exports.streamCollector = streamCollector;
  }
});

// node_modules/.pnpm/@smithy+util-hex-encoding@4.2.2/node_modules/@smithy/util-hex-encoding/dist-cjs/index.js
var require_dist_cjs11 = __commonJS({
  "node_modules/.pnpm/@smithy+util-hex-encoding@4.2.2/node_modules/@smithy/util-hex-encoding/dist-cjs/index.js"(exports) {
    "use strict";
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
    function toHex(bytes) {
      let out = "";
      for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
      }
      return out;
    }
    exports.fromHex = fromHex;
    exports.toHex = toHex;
  }
});

// node_modules/.pnpm/@smithy+uuid@1.1.2/node_modules/@smithy/uuid/dist-cjs/randomUUID.js
var require_randomUUID = __commonJS({
  "node_modules/.pnpm/@smithy+uuid@1.1.2/node_modules/@smithy/uuid/dist-cjs/randomUUID.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.randomUUID = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var crypto_1 = tslib_1.__importDefault(__require("crypto"));
    exports.randomUUID = crypto_1.default.randomUUID.bind(crypto_1.default);
  }
});

// node_modules/.pnpm/@smithy+uuid@1.1.2/node_modules/@smithy/uuid/dist-cjs/index.js
var require_dist_cjs12 = __commonJS({
  "node_modules/.pnpm/@smithy+uuid@1.1.2/node_modules/@smithy/uuid/dist-cjs/index.js"(exports) {
    "use strict";
    var randomUUID = require_randomUUID();
    var decimalToHex = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
    var v4 = () => {
      if (randomUUID.randomUUID) {
        return randomUUID.randomUUID();
      }
      const rnds = new Uint8Array(16);
      crypto.getRandomValues(rnds);
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      return decimalToHex[rnds[0]] + decimalToHex[rnds[1]] + decimalToHex[rnds[2]] + decimalToHex[rnds[3]] + "-" + decimalToHex[rnds[4]] + decimalToHex[rnds[5]] + "-" + decimalToHex[rnds[6]] + decimalToHex[rnds[7]] + "-" + decimalToHex[rnds[8]] + decimalToHex[rnds[9]] + "-" + decimalToHex[rnds[10]] + decimalToHex[rnds[11]] + decimalToHex[rnds[12]] + decimalToHex[rnds[13]] + decimalToHex[rnds[14]] + decimalToHex[rnds[15]];
    };
    exports.v4 = v4;
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/copyDocumentWithTransform.js
var copyDocumentWithTransform;
var init_copyDocumentWithTransform = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/copyDocumentWithTransform.js"() {
    copyDocumentWithTransform = (source, schemaRef, transform = (_) => _) => source;
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
var parseBoolean, expectBoolean, expectNumber, MAX_FLOAT, expectFloat32, expectLong, expectInt, expectInt32, expectShort, expectByte, expectSizedInt, castInt, expectNonNull, expectObject, expectString, expectUnion, strictParseDouble, strictParseFloat, strictParseFloat32, NUMBER_REGEX, parseNumber, limitedParseDouble, handleFloat, limitedParseFloat, limitedParseFloat32, parseFloatString, strictParseLong, strictParseInt, strictParseInt32, strictParseShort, strictParseByte, stackTraceWarning, logger;
var init_parse_utils = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js"() {
    parseBoolean = (value) => {
      switch (value) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          throw new Error(`Unable to parse boolean value "${value}"`);
      }
    };
    expectBoolean = (value) => {
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
    };
    expectNumber = (value) => {
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
    };
    MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    expectFloat32 = (value) => {
      const expected = expectNumber(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    };
    expectLong = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    };
    expectInt = expectLong;
    expectInt32 = (value) => expectSizedInt(value, 32);
    expectShort = (value) => expectSizedInt(value, 16);
    expectByte = (value) => expectSizedInt(value, 8);
    expectSizedInt = (value, size) => {
      const expected = expectLong(value);
      if (expected !== void 0 && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    };
    castInt = (value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    };
    expectNonNull = (value, location) => {
      if (value === null || value === void 0) {
        if (location) {
          throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
      }
      return value;
    };
    expectObject = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        return value;
      }
      const receivedType = Array.isArray(value) ? "array" : typeof value;
      throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
    };
    expectString = (value) => {
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
    };
    expectUnion = (value) => {
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
    };
    strictParseDouble = (value) => {
      if (typeof value == "string") {
        return expectNumber(parseNumber(value));
      }
      return expectNumber(value);
    };
    strictParseFloat = strictParseDouble;
    strictParseFloat32 = (value) => {
      if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
      }
      return expectFloat32(value);
    };
    NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    parseNumber = (value) => {
      const matches = value.match(NUMBER_REGEX);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    };
    limitedParseDouble = (value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectNumber(value);
    };
    handleFloat = limitedParseDouble;
    limitedParseFloat = limitedParseDouble;
    limitedParseFloat32 = (value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectFloat32(value);
    };
    parseFloatString = (value) => {
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
    };
    strictParseLong = (value) => {
      if (typeof value === "string") {
        return expectLong(parseNumber(value));
      }
      return expectLong(value);
    };
    strictParseInt = strictParseLong;
    strictParseInt32 = (value) => {
      if (typeof value === "string") {
        return expectInt32(parseNumber(value));
      }
      return expectInt32(value);
    };
    strictParseShort = (value) => {
      if (typeof value === "string") {
        return expectShort(parseNumber(value));
      }
      return expectShort(value);
    };
    strictParseByte = (value) => {
      if (typeof value === "string") {
        return expectByte(parseNumber(value));
      }
      return expectByte(value);
    };
    stackTraceWarning = (message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s) => !s.includes("stackTraceWarning")).join("\n");
    };
    logger = {
      warn: console.warn
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
function dateToUtcString(date2) {
  const year2 = date2.getUTCFullYear();
  const month = date2.getUTCMonth();
  const dayOfWeek = date2.getUTCDay();
  const dayOfMonthInt = date2.getUTCDate();
  const hoursInt = date2.getUTCHours();
  const minutesInt = date2.getUTCMinutes();
  const secondsInt = date2.getUTCSeconds();
  const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
  const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
  const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
  const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
  return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year2} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
var DAYS, MONTHS, RFC3339, parseRfc3339DateTime, RFC3339_WITH_OFFSET, parseRfc3339DateTimeWithOffset, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, parseRfc7231DateTime, parseEpochTimestamp, buildDate, parseTwoDigitYear, FIFTY_YEARS_IN_MILLIS, adjustRfc850Year, parseMonthByShortName, DAYS_IN_MONTH, validateDayOfMonth, isLeapYear, parseDateValue, parseMilliseconds, parseOffsetToMilliseconds, stripLeadingZeroes;
var init_date_utils = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js"() {
    init_parse_utils();
    DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    parseRfc3339DateTime = (value) => {
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
      const year2 = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      return buildDate(year2, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    };
    RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
    parseRfc3339DateTimeWithOffset = (value) => {
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
      const year2 = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      const date2 = buildDate(year2, month, day, { hours, minutes, seconds, fractionalMilliseconds });
      if (offsetStr.toUpperCase() != "Z") {
        date2.setTime(date2.getTime() - parseOffsetToMilliseconds(offsetStr));
      }
      return date2;
    };
    IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
    parseRfc7231DateTime = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
      }
      let match = IMF_FIXDATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      match = RFC_850_DATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
          hours,
          minutes,
          seconds,
          fractionalMilliseconds
        }));
      }
      match = ASC_TIME.exec(value);
      if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      throw new TypeError("Invalid RFC-7231 date-time value");
    };
    parseEpochTimestamp = (value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      let valueAsDouble;
      if (typeof value === "number") {
        valueAsDouble = value;
      } else if (typeof value === "string") {
        valueAsDouble = strictParseDouble(value);
      } else if (typeof value === "object" && value.tag === 1) {
        valueAsDouble = value.value;
      } else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
      }
      if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      }
      return new Date(Math.round(valueAsDouble * 1e3));
    };
    buildDate = (year2, month, day, time2) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth(year2, adjustedMonth, day);
      return new Date(Date.UTC(year2, adjustedMonth, day, parseDateValue(time2.hours, "hour", 0, 23), parseDateValue(time2.minutes, "minute", 0, 59), parseDateValue(time2.seconds, "seconds", 0, 60), parseMilliseconds(time2.fractionalMilliseconds)));
    };
    parseTwoDigitYear = (value) => {
      const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
      const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
      if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
      }
      return valueInThisCentury;
    };
    FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    adjustRfc850Year = (input) => {
      if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
      }
      return input;
    };
    parseMonthByShortName = (value) => {
      const monthIdx = MONTHS.indexOf(value);
      if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
      }
      return monthIdx + 1;
    };
    DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    validateDayOfMonth = (year2, month, day) => {
      let maxDays = DAYS_IN_MONTH[month];
      if (month === 1 && isLeapYear(year2)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year2}: ${day}`);
      }
    };
    isLeapYear = (year2) => {
      return year2 % 4 === 0 && (year2 % 100 !== 0 || year2 % 400 === 0);
    };
    parseDateValue = (value, type, lower, upper) => {
      const dateVal = strictParseByte(stripLeadingZeroes(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    };
    parseMilliseconds = (value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return strictParseFloat32("0." + value) * 1e3;
    };
    parseOffsetToMilliseconds = (value) => {
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
    };
    stripLeadingZeroes = (value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/generateIdempotencyToken.js
var import_uuid;
var init_generateIdempotencyToken = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/generateIdempotencyToken.js"() {
    import_uuid = __toESM(require_dist_cjs12());
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js
var LazyJsonString;
var init_lazy_json = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js"() {
    LazyJsonString = function LazyJsonString2(val) {
      const str = Object.assign(new String(val), {
        deserializeJSON() {
          return JSON.parse(String(val));
        },
        toString() {
          return String(val);
        },
        toJSON() {
          return String(val);
        }
      });
      return str;
    };
    LazyJsonString.from = (object) => {
      if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
        return object;
      } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
        return LazyJsonString(String(object));
      }
      return LazyJsonString(JSON.stringify(object));
    };
    LazyJsonString.fromObject = LazyJsonString.from;
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js
function quoteHeader(part) {
  if (part.includes(",") || part.includes('"')) {
    part = `"${part.replace(/"/g, '\\"')}"`;
  }
  return part;
}
var init_quote_header = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js"() {
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/schema-serde-lib/schema-date-utils.js
function range(v, min, max) {
  const _v = Number(v);
  if (_v < min || _v > max) {
    throw new Error(`Value ${_v} out of range [${min}, ${max}]`);
  }
}
var ddd, mmm, time, date, year, RFC3339_WITH_OFFSET2, IMF_FIXDATE2, RFC_850_DATE2, ASC_TIME2, months, _parseEpochTimestamp, _parseRfc3339DateTimeWithOffset, _parseRfc7231DateTime;
var init_schema_date_utils = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/schema-serde-lib/schema-date-utils.js"() {
    ddd = `(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?`;
    mmm = `(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)`;
    time = `(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?`;
    date = `(\\d?\\d)`;
    year = `(\\d{4})`;
    RFC3339_WITH_OFFSET2 = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/);
    IMF_FIXDATE2 = new RegExp(`^${ddd}, ${date} ${mmm} ${year} ${time} GMT$`);
    RFC_850_DATE2 = new RegExp(`^${ddd}, ${date}-${mmm}-(\\d\\d) ${time} GMT$`);
    ASC_TIME2 = new RegExp(`^${ddd} ${mmm} ( [1-9]|\\d\\d) ${time} ${year}$`);
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    _parseEpochTimestamp = (value) => {
      if (value == null) {
        return void 0;
      }
      let num = NaN;
      if (typeof value === "number") {
        num = value;
      } else if (typeof value === "string") {
        if (!/^-?\d*\.?\d+$/.test(value)) {
          throw new TypeError(`parseEpochTimestamp - numeric string invalid.`);
        }
        num = Number.parseFloat(value);
      } else if (typeof value === "object" && value.tag === 1) {
        num = value.value;
      }
      if (isNaN(num) || Math.abs(num) === Infinity) {
        throw new TypeError("Epoch timestamps must be valid finite numbers.");
      }
      return new Date(Math.round(num * 1e3));
    };
    _parseRfc3339DateTimeWithOffset = (value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC3339 timestamps must be strings");
      }
      const matches = RFC3339_WITH_OFFSET2.exec(value);
      if (!matches) {
        throw new TypeError(`Invalid RFC3339 timestamp format ${value}`);
      }
      const [, yearStr, monthStr, dayStr, hours, minutes, seconds, , ms, offsetStr] = matches;
      range(monthStr, 1, 12);
      range(dayStr, 1, 31);
      range(hours, 0, 23);
      range(minutes, 0, 59);
      range(seconds, 0, 60);
      const date2 = new Date(Date.UTC(Number(yearStr), Number(monthStr) - 1, Number(dayStr), Number(hours), Number(minutes), Number(seconds), Number(ms) ? Math.round(parseFloat(`0.${ms}`) * 1e3) : 0));
      date2.setUTCFullYear(Number(yearStr));
      if (offsetStr.toUpperCase() != "Z") {
        const [, sign, offsetH, offsetM] = /([+-])(\d\d):(\d\d)/.exec(offsetStr) || [void 0, "+", 0, 0];
        const scalar = sign === "-" ? 1 : -1;
        date2.setTime(date2.getTime() + scalar * (Number(offsetH) * 60 * 60 * 1e3 + Number(offsetM) * 60 * 1e3));
      }
      return date2;
    };
    _parseRfc7231DateTime = (value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC7231 timestamps must be strings.");
      }
      let day;
      let month;
      let year2;
      let hour;
      let minute;
      let second;
      let fraction;
      let matches;
      if (matches = IMF_FIXDATE2.exec(value)) {
        [, day, month, year2, hour, minute, second, fraction] = matches;
      } else if (matches = RFC_850_DATE2.exec(value)) {
        [, day, month, year2, hour, minute, second, fraction] = matches;
        year2 = (Number(year2) + 1900).toString();
      } else if (matches = ASC_TIME2.exec(value)) {
        [, month, day, hour, minute, second, fraction, year2] = matches;
      }
      if (year2 && second) {
        const timestamp = Date.UTC(Number(year2), months.indexOf(month), Number(day), Number(hour), Number(minute), Number(second), fraction ? Math.round(parseFloat(`0.${fraction}`) * 1e3) : 0);
        range(day, 1, 31);
        range(hour, 0, 23);
        range(minute, 0, 59);
        range(second, 0, 60);
        const date2 = new Date(timestamp);
        date2.setUTCFullYear(Number(year2));
        return date2;
      }
      throw new TypeError(`Invalid RFC7231 date-time value ${value}.`);
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/split-every.js
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
var init_split_every = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/split-every.js"() {
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/split-header.js
var splitHeader;
var init_split_header = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/split-header.js"() {
    splitHeader = (value) => {
      const z = value.length;
      const values = [];
      let withinQuotes = false;
      let prevChar = void 0;
      let anchor = 0;
      for (let i = 0; i < z; ++i) {
        const char = value[i];
        switch (char) {
          case `"`:
            if (prevChar !== "\\") {
              withinQuotes = !withinQuotes;
            }
            break;
          case ",":
            if (!withinQuotes) {
              values.push(value.slice(anchor, i));
              anchor = i + 1;
            }
            break;
          default:
        }
        prevChar = char;
      }
      values.push(value.slice(anchor));
      return values.map((v) => {
        v = v.trim();
        const z2 = v.length;
        if (z2 < 2) {
          return v;
        }
        if (v[0] === `"` && v[z2 - 1] === `"`) {
          v = v.slice(1, z2 - 1);
        }
        return v.replace(/\\"/g, '"');
      });
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js
function nv(input) {
  return new NumericValue(String(input), "bigDecimal");
}
var format, NumericValue;
var init_NumericValue = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js"() {
    format = /^-?\d*(\.\d+)?$/;
    NumericValue = class _NumericValue {
      string;
      type;
      constructor(string, type) {
        this.string = string;
        this.type = type;
        if (!format.test(string)) {
          throw new Error(`@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".`);
        }
      }
      toString() {
        return this.string;
      }
      static [Symbol.hasInstance](object) {
        if (!object || typeof object !== "object") {
          return false;
        }
        const _nv = object;
        return _NumericValue.prototype.isPrototypeOf(object) || _nv.type === "bigDecimal" && format.test(_nv.string);
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/index.js
var serde_exports = {};
__export(serde_exports, {
  LazyJsonString: () => LazyJsonString,
  NumericValue: () => NumericValue,
  _parseEpochTimestamp: () => _parseEpochTimestamp,
  _parseRfc3339DateTimeWithOffset: () => _parseRfc3339DateTimeWithOffset,
  _parseRfc7231DateTime: () => _parseRfc7231DateTime,
  copyDocumentWithTransform: () => copyDocumentWithTransform,
  dateToUtcString: () => dateToUtcString,
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
  generateIdempotencyToken: () => import_uuid.v4,
  handleFloat: () => handleFloat,
  limitedParseDouble: () => limitedParseDouble,
  limitedParseFloat: () => limitedParseFloat,
  limitedParseFloat32: () => limitedParseFloat32,
  logger: () => logger,
  nv: () => nv,
  parseBoolean: () => parseBoolean,
  parseEpochTimestamp: () => parseEpochTimestamp,
  parseRfc3339DateTime: () => parseRfc3339DateTime,
  parseRfc3339DateTimeWithOffset: () => parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime: () => parseRfc7231DateTime,
  quoteHeader: () => quoteHeader,
  splitEvery: () => splitEvery,
  splitHeader: () => splitHeader,
  strictParseByte: () => strictParseByte,
  strictParseDouble: () => strictParseDouble,
  strictParseFloat: () => strictParseFloat,
  strictParseFloat32: () => strictParseFloat32,
  strictParseInt: () => strictParseInt,
  strictParseInt32: () => strictParseInt32,
  strictParseLong: () => strictParseLong,
  strictParseShort: () => strictParseShort
});
var init_serde = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/serde/index.js"() {
    init_copyDocumentWithTransform();
    init_date_utils();
    init_generateIdempotencyToken();
    init_lazy_json();
    init_parse_utils();
    init_quote_header();
    init_schema_date_utils();
    init_split_every();
    init_split_header();
    init_NumericValue();
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.js
var require_ChecksumStream = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChecksumStream = void 0;
    var util_base64_1 = require_dist_cjs9();
    var stream_1 = __require("stream");
    var ChecksumStream = class extends stream_1.Duplex {
      expectedChecksum;
      checksumSourceLocation;
      checksum;
      source;
      base64Encoder;
      pendingCallback = null;
      constructor({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) {
        super();
        if (typeof source.pipe === "function") {
          this.source = source;
        } else {
          throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
        }
        this.base64Encoder = base64Encoder ?? util_base64_1.toBase64;
        this.expectedChecksum = expectedChecksum;
        this.checksum = checksum;
        this.checksumSourceLocation = checksumSourceLocation;
        this.source.pipe(this);
      }
      _read(size) {
        if (this.pendingCallback) {
          const callback = this.pendingCallback;
          this.pendingCallback = null;
          callback();
        }
      }
      _write(chunk, encoding, callback) {
        try {
          this.checksum.update(chunk);
          const canPushMore = this.push(chunk);
          if (!canPushMore) {
            this.pendingCallback = callback;
            return;
          }
        } catch (e) {
          return callback(e);
        }
        return callback();
      }
      async _final(callback) {
        try {
          const digest = await this.checksum.digest();
          const received = this.base64Encoder(digest);
          if (this.expectedChecksum !== received) {
            return callback(new Error(`Checksum mismatch: expected "${this.expectedChecksum}" but received "${received}" in response header "${this.checksumSourceLocation}".`));
          }
        } catch (e) {
          return callback(e);
        }
        this.push(null);
        return callback();
      }
    };
    exports.ChecksumStream = ChecksumStream;
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/stream-type-check.js
var require_stream_type_check = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/stream-type-check.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBlob = exports.isReadableStream = void 0;
    var isReadableStream = (stream) => typeof ReadableStream === "function" && (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream);
    exports.isReadableStream = isReadableStream;
    var isBlob = (blob) => {
      return typeof Blob === "function" && (blob?.constructor?.name === Blob.name || blob instanceof Blob);
    };
    exports.isBlob = isBlob;
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.browser.js
var require_ChecksumStream_browser = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChecksumStream = void 0;
    var ReadableStreamRef = typeof ReadableStream === "function" ? ReadableStream : function() {
    };
    var ChecksumStream = class extends ReadableStreamRef {
    };
    exports.ChecksumStream = ChecksumStream;
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.browser.js
var require_createChecksumStream_browser = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createChecksumStream = void 0;
    var util_base64_1 = require_dist_cjs9();
    var stream_type_check_1 = require_stream_type_check();
    var ChecksumStream_browser_1 = require_ChecksumStream_browser();
    var createChecksumStream = ({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) => {
      if (!(0, stream_type_check_1.isReadableStream)(source)) {
        throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
      }
      const encoder = base64Encoder ?? util_base64_1.toBase64;
      if (typeof TransformStream !== "function") {
        throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
      }
      const transform = new TransformStream({
        start() {
        },
        async transform(chunk, controller) {
          checksum.update(chunk);
          controller.enqueue(chunk);
        },
        async flush(controller) {
          const digest = await checksum.digest();
          const received = encoder(digest);
          if (expectedChecksum !== received) {
            const error2 = new Error(`Checksum mismatch: expected "${expectedChecksum}" but received "${received}" in response header "${checksumSourceLocation}".`);
            controller.error(error2);
          } else {
            controller.terminate();
          }
        }
      });
      source.pipeThrough(transform);
      const readable = transform.readable;
      Object.setPrototypeOf(readable, ChecksumStream_browser_1.ChecksumStream.prototype);
      return readable;
    };
    exports.createChecksumStream = createChecksumStream;
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.js
var require_createChecksumStream = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createChecksumStream = createChecksumStream;
    var stream_type_check_1 = require_stream_type_check();
    var ChecksumStream_1 = require_ChecksumStream();
    var createChecksumStream_browser_1 = require_createChecksumStream_browser();
    function createChecksumStream(init) {
      if (typeof ReadableStream === "function" && (0, stream_type_check_1.isReadableStream)(init.source)) {
        return (0, createChecksumStream_browser_1.createChecksumStream)(init);
      }
      return new ChecksumStream_1.ChecksumStream(init);
    }
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/ByteArrayCollector.js
var require_ByteArrayCollector = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/ByteArrayCollector.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ByteArrayCollector = void 0;
    var ByteArrayCollector = class {
      allocByteArray;
      byteLength = 0;
      byteArrays = [];
      constructor(allocByteArray) {
        this.allocByteArray = allocByteArray;
      }
      push(byteArray) {
        this.byteArrays.push(byteArray);
        this.byteLength += byteArray.byteLength;
      }
      flush() {
        if (this.byteArrays.length === 1) {
          const bytes = this.byteArrays[0];
          this.reset();
          return bytes;
        }
        const aggregation = this.allocByteArray(this.byteLength);
        let cursor = 0;
        for (let i = 0; i < this.byteArrays.length; ++i) {
          const bytes = this.byteArrays[i];
          aggregation.set(bytes, cursor);
          cursor += bytes.byteLength;
        }
        this.reset();
        return aggregation;
      }
      reset() {
        this.byteArrays = [];
        this.byteLength = 0;
      }
    };
    exports.ByteArrayCollector = ByteArrayCollector;
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadableStream.js
var require_createBufferedReadableStream = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadableStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createBufferedReadable = void 0;
    exports.createBufferedReadableStream = createBufferedReadableStream;
    exports.merge = merge;
    exports.flush = flush;
    exports.sizeOf = sizeOf;
    exports.modeOf = modeOf;
    var ByteArrayCollector_1 = require_ByteArrayCollector();
    function createBufferedReadableStream(upstream, size, logger2) {
      const reader = upstream.getReader();
      let streamBufferingLoggedWarning = false;
      let bytesSeen = 0;
      const buffers = ["", new ByteArrayCollector_1.ByteArrayCollector((size2) => new Uint8Array(size2))];
      let mode = -1;
      const pull = async (controller) => {
        const { value, done } = await reader.read();
        const chunk = value;
        if (done) {
          if (mode !== -1) {
            const remainder = flush(buffers, mode);
            if (sizeOf(remainder) > 0) {
              controller.enqueue(remainder);
            }
          }
          controller.close();
        } else {
          const chunkMode = modeOf(chunk, false);
          if (mode !== chunkMode) {
            if (mode >= 0) {
              controller.enqueue(flush(buffers, mode));
            }
            mode = chunkMode;
          }
          if (mode === -1) {
            controller.enqueue(chunk);
            return;
          }
          const chunkSize = sizeOf(chunk);
          bytesSeen += chunkSize;
          const bufferSize = sizeOf(buffers[mode]);
          if (chunkSize >= size && bufferSize === 0) {
            controller.enqueue(chunk);
          } else {
            const newSize = merge(buffers, mode, chunk);
            if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
              streamBufferingLoggedWarning = true;
              logger2?.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
            }
            if (newSize >= size) {
              controller.enqueue(flush(buffers, mode));
            } else {
              await pull(controller);
            }
          }
        }
      };
      return new ReadableStream({
        pull
      });
    }
    exports.createBufferedReadable = createBufferedReadableStream;
    function merge(buffers, mode, chunk) {
      switch (mode) {
        case 0:
          buffers[0] += chunk;
          return sizeOf(buffers[0]);
        case 1:
        case 2:
          buffers[mode].push(chunk);
          return sizeOf(buffers[mode]);
      }
    }
    function flush(buffers, mode) {
      switch (mode) {
        case 0:
          const s = buffers[0];
          buffers[0] = "";
          return s;
        case 1:
        case 2:
          return buffers[mode].flush();
      }
      throw new Error(`@smithy/util-stream - invalid index ${mode} given to flush()`);
    }
    function sizeOf(chunk) {
      return chunk?.byteLength ?? chunk?.length ?? 0;
    }
    function modeOf(chunk, allowBuffer = true) {
      if (allowBuffer && typeof Buffer !== "undefined" && chunk instanceof Buffer) {
        return 2;
      }
      if (chunk instanceof Uint8Array) {
        return 1;
      }
      if (typeof chunk === "string") {
        return 0;
      }
      return -1;
    }
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadable.js
var require_createBufferedReadable = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createBufferedReadable = createBufferedReadable;
    var node_stream_1 = __require("node:stream");
    var ByteArrayCollector_1 = require_ByteArrayCollector();
    var createBufferedReadableStream_1 = require_createBufferedReadableStream();
    var stream_type_check_1 = require_stream_type_check();
    function createBufferedReadable(upstream, size, logger2) {
      if ((0, stream_type_check_1.isReadableStream)(upstream)) {
        return (0, createBufferedReadableStream_1.createBufferedReadableStream)(upstream, size, logger2);
      }
      const downstream = new node_stream_1.Readable({ read() {
      } });
      let streamBufferingLoggedWarning = false;
      let bytesSeen = 0;
      const buffers = [
        "",
        new ByteArrayCollector_1.ByteArrayCollector((size2) => new Uint8Array(size2)),
        new ByteArrayCollector_1.ByteArrayCollector((size2) => Buffer.from(new Uint8Array(size2)))
      ];
      let mode = -1;
      upstream.on("data", (chunk) => {
        const chunkMode = (0, createBufferedReadableStream_1.modeOf)(chunk, true);
        if (mode !== chunkMode) {
          if (mode >= 0) {
            downstream.push((0, createBufferedReadableStream_1.flush)(buffers, mode));
          }
          mode = chunkMode;
        }
        if (mode === -1) {
          downstream.push(chunk);
          return;
        }
        const chunkSize = (0, createBufferedReadableStream_1.sizeOf)(chunk);
        bytesSeen += chunkSize;
        const bufferSize = (0, createBufferedReadableStream_1.sizeOf)(buffers[mode]);
        if (chunkSize >= size && bufferSize === 0) {
          downstream.push(chunk);
        } else {
          const newSize = (0, createBufferedReadableStream_1.merge)(buffers, mode, chunk);
          if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
            streamBufferingLoggedWarning = true;
            logger2?.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
          }
          if (newSize >= size) {
            downstream.push((0, createBufferedReadableStream_1.flush)(buffers, mode));
          }
        }
      });
      upstream.on("end", () => {
        if (mode !== -1) {
          const remainder = (0, createBufferedReadableStream_1.flush)(buffers, mode);
          if ((0, createBufferedReadableStream_1.sizeOf)(remainder) > 0) {
            downstream.push(remainder);
          }
        }
        downstream.push(null);
      });
      return downstream;
    }
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.browser.js
var require_getAwsChunkedEncodingStream_browser = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAwsChunkedEncodingStream = void 0;
    var getAwsChunkedEncodingStream = (readableStream, options) => {
      const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
      const checksumRequired = base64Encoder !== void 0 && bodyLengthChecker !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
      const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : void 0;
      const reader = readableStream.getReader();
      return new ReadableStream({
        async pull(controller) {
          const { value, done } = await reader.read();
          if (done) {
            controller.enqueue(`0\r
`);
            if (checksumRequired) {
              const checksum = base64Encoder(await digest);
              controller.enqueue(`${checksumLocationName}:${checksum}\r
`);
              controller.enqueue(`\r
`);
            }
            controller.close();
          } else {
            controller.enqueue(`${(bodyLengthChecker(value) || 0).toString(16)}\r
${value}\r
`);
          }
        }
      });
    };
    exports.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream;
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js
var require_getAwsChunkedEncodingStream = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream;
    var node_stream_1 = __require("node:stream");
    var getAwsChunkedEncodingStream_browser_1 = require_getAwsChunkedEncodingStream_browser();
    var stream_type_check_1 = require_stream_type_check();
    function getAwsChunkedEncodingStream(stream, options) {
      const readable = stream;
      const readableStream = stream;
      if ((0, stream_type_check_1.isReadableStream)(readableStream)) {
        return (0, getAwsChunkedEncodingStream_browser_1.getAwsChunkedEncodingStream)(readableStream, options);
      }
      const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
      const checksumRequired = base64Encoder !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
      const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readable) : void 0;
      const awsChunkedEncodingStream = new node_stream_1.Readable({
        read: () => {
        }
      });
      readable.on("data", (data) => {
        const length = bodyLengthChecker(data) || 0;
        if (length === 0) {
          return;
        }
        awsChunkedEncodingStream.push(`${length.toString(16)}\r
`);
        awsChunkedEncodingStream.push(data);
        awsChunkedEncodingStream.push("\r\n");
      });
      readable.on("end", async () => {
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
    }
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/headStream.browser.js
var require_headStream_browser = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/headStream.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headStream = headStream;
    async function headStream(stream, bytes) {
      let byteLengthCounter = 0;
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          byteLengthCounter += value?.byteLength ?? 0;
        }
        if (byteLengthCounter >= bytes) {
          break;
        }
        isDone = done;
      }
      reader.releaseLock();
      const collected = new Uint8Array(Math.min(bytes, byteLengthCounter));
      let offset = 0;
      for (const chunk of chunks) {
        if (chunk.byteLength > collected.byteLength - offset) {
          collected.set(chunk.subarray(0, collected.byteLength - offset), offset);
          break;
        } else {
          collected.set(chunk, offset);
        }
        offset += chunk.length;
      }
      return collected;
    }
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/headStream.js
var require_headStream = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/headStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headStream = void 0;
    var stream_1 = __require("stream");
    var headStream_browser_1 = require_headStream_browser();
    var stream_type_check_1 = require_stream_type_check();
    var headStream = (stream, bytes) => {
      if ((0, stream_type_check_1.isReadableStream)(stream)) {
        return (0, headStream_browser_1.headStream)(stream, bytes);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        collector.limit = bytes;
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes2 = new Uint8Array(Buffer.concat(this.buffers));
          resolve(bytes2);
        });
      });
    };
    exports.headStream = headStream;
    var Collector = class extends stream_1.Writable {
      buffers = [];
      limit = Infinity;
      bytesBuffered = 0;
      _write(chunk, encoding, callback) {
        this.buffers.push(chunk);
        this.bytesBuffered += chunk.byteLength ?? 0;
        if (this.bytesBuffered >= this.limit) {
          const excess = this.bytesBuffered - this.limit;
          const tailBuffer = this.buffers[this.buffers.length - 1];
          this.buffers[this.buffers.length - 1] = tailBuffer.subarray(0, tailBuffer.byteLength - excess);
          this.emit("finish");
        }
        callback();
      }
    };
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.browser.js
var require_sdk_stream_mixin_browser = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sdkStreamMixin = void 0;
    var fetch_http_handler_1 = require_dist_cjs10();
    var util_base64_1 = require_dist_cjs9();
    var util_hex_encoding_1 = require_dist_cjs11();
    var util_utf8_1 = require_dist_cjs7();
    var stream_type_check_1 = require_stream_type_check();
    var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    var sdkStreamMixin2 = (stream) => {
      if (!isBlobInstance(stream) && !(0, stream_type_check_1.isReadableStream)(stream)) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
      }
      let transformed = false;
      const transformToByteArray = async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, fetch_http_handler_1.streamCollector)(stream);
      };
      const blobToWebStream = (blob) => {
        if (typeof blob.stream !== "function") {
          throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
        }
        return blob.stream();
      };
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === "base64") {
            return (0, util_base64_1.toBase64)(buf);
          } else if (encoding === "hex") {
            return (0, util_hex_encoding_1.toHex)(buf);
          } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
            return (0, util_utf8_1.toUtf8)(buf);
          } else if (typeof TextDecoder === "function") {
            return new TextDecoder(encoding).decode(buf);
          } else {
            throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
          }
        },
        transformToWebStream: () => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          transformed = true;
          if (isBlobInstance(stream)) {
            return blobToWebStream(stream);
          } else if ((0, stream_type_check_1.isReadableStream)(stream)) {
            return stream;
          } else {
            throw new Error(`Cannot transform payload to web stream, got ${stream}`);
          }
        }
      });
    };
    exports.sdkStreamMixin = sdkStreamMixin2;
    var isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js
var require_sdk_stream_mixin = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sdkStreamMixin = void 0;
    var node_http_handler_1 = require_dist_cjs4();
    var util_buffer_from_1 = require_dist_cjs6();
    var stream_1 = __require("stream");
    var sdk_stream_mixin_browser_1 = require_sdk_stream_mixin_browser();
    var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    var sdkStreamMixin2 = (stream) => {
      if (!(stream instanceof stream_1.Readable)) {
        try {
          return (0, sdk_stream_mixin_browser_1.sdkStreamMixin)(stream);
        } catch (e) {
          const name = stream?.__proto__?.constructor?.name || stream;
          throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
        }
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
            const decoder = new TextDecoder(encoding);
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
            throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
          }
          transformed = true;
          return stream_1.Readable.toWeb(stream);
        }
      });
    };
    exports.sdkStreamMixin = sdkStreamMixin2;
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/splitStream.browser.js
var require_splitStream_browser = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/splitStream.browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitStream = splitStream;
    async function splitStream(stream) {
      if (typeof stream.stream === "function") {
        stream = stream.stream();
      }
      const readableStream = stream;
      return readableStream.tee();
    }
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/splitStream.js
var require_splitStream = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/splitStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitStream = splitStream;
    var stream_1 = __require("stream");
    var splitStream_browser_1 = require_splitStream_browser();
    var stream_type_check_1 = require_stream_type_check();
    async function splitStream(stream) {
      if ((0, stream_type_check_1.isReadableStream)(stream) || (0, stream_type_check_1.isBlob)(stream)) {
        return (0, splitStream_browser_1.splitStream)(stream);
      }
      const stream1 = new stream_1.PassThrough();
      const stream2 = new stream_1.PassThrough();
      stream.pipe(stream1);
      stream.pipe(stream2);
      return [stream1, stream2];
    }
  }
});

// node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/index.js
var require_dist_cjs13 = __commonJS({
  "node_modules/.pnpm/@smithy+util-stream@4.5.21/node_modules/@smithy/util-stream/dist-cjs/index.js"(exports) {
    "use strict";
    var utilBase64 = require_dist_cjs9();
    var utilUtf8 = require_dist_cjs7();
    var ChecksumStream = require_ChecksumStream();
    var createChecksumStream = require_createChecksumStream();
    var createBufferedReadable = require_createBufferedReadable();
    var getAwsChunkedEncodingStream = require_getAwsChunkedEncodingStream();
    var headStream = require_headStream();
    var sdkStreamMixin2 = require_sdk_stream_mixin();
    var splitStream = require_splitStream();
    var streamTypeCheck = require_stream_type_check();
    var Uint8ArrayBlobAdapter2 = class _Uint8ArrayBlobAdapter extends Uint8Array {
      static fromString(source, encoding = "utf-8") {
        if (typeof source === "string") {
          if (encoding === "base64") {
            return _Uint8ArrayBlobAdapter.mutate(utilBase64.fromBase64(source));
          }
          return _Uint8ArrayBlobAdapter.mutate(utilUtf8.fromUtf8(source));
        }
        throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
      }
      static mutate(source) {
        Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
        return source;
      }
      transformToString(encoding = "utf-8") {
        if (encoding === "base64") {
          return utilBase64.toBase64(this);
        }
        return utilUtf8.toUtf8(this);
      }
    };
    exports.isBlob = streamTypeCheck.isBlob;
    exports.isReadableStream = streamTypeCheck.isReadableStream;
    exports.Uint8ArrayBlobAdapter = Uint8ArrayBlobAdapter2;
    Object.prototype.hasOwnProperty.call(ChecksumStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: ChecksumStream["__proto__"]
    });
    Object.keys(ChecksumStream).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = ChecksumStream[k];
    });
    Object.prototype.hasOwnProperty.call(createChecksumStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: createChecksumStream["__proto__"]
    });
    Object.keys(createChecksumStream).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = createChecksumStream[k];
    });
    Object.prototype.hasOwnProperty.call(createBufferedReadable, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: createBufferedReadable["__proto__"]
    });
    Object.keys(createBufferedReadable).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = createBufferedReadable[k];
    });
    Object.prototype.hasOwnProperty.call(getAwsChunkedEncodingStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: getAwsChunkedEncodingStream["__proto__"]
    });
    Object.keys(getAwsChunkedEncodingStream).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = getAwsChunkedEncodingStream[k];
    });
    Object.prototype.hasOwnProperty.call(headStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: headStream["__proto__"]
    });
    Object.keys(headStream).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = headStream[k];
    });
    Object.prototype.hasOwnProperty.call(sdkStreamMixin2, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: sdkStreamMixin2["__proto__"]
    });
    Object.keys(sdkStreamMixin2).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = sdkStreamMixin2[k];
    });
    Object.prototype.hasOwnProperty.call(splitStream, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: splitStream["__proto__"]
    });
    Object.keys(splitStream).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = splitStream[k];
    });
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
var import_util_stream, collectBody;
var init_collect_stream_body = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js"() {
    import_util_stream = __toESM(require_dist_cjs13());
    collectBody = async (streamBody = new Uint8Array(), context) => {
      if (streamBody instanceof Uint8Array) {
        return import_util_stream.Uint8ArrayBlobAdapter.mutate(streamBody);
      }
      if (!streamBody) {
        return import_util_stream.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      }
      const fromContext = context.streamCollector(streamBody);
      return import_util_stream.Uint8ArrayBlobAdapter.mutate(await fromContext);
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js
var SerdeContext;
var init_SerdeContext = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js"() {
    SerdeContext = class {
      serdeContext;
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js
var import_protocol_http3, HttpProtocol;
var init_HttpProtocol = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js"() {
    init_schema();
    import_protocol_http3 = __toESM(require_dist_cjs2());
    init_SerdeContext();
    HttpProtocol = class extends SerdeContext {
      options;
      compositeErrorRegistry;
      constructor(options) {
        super();
        this.options = options;
        this.compositeErrorRegistry = TypeRegistry.for(options.defaultNamespace);
        for (const etr of options.errorTypeRegistries ?? []) {
          this.compositeErrorRegistry.copyFrom(etr);
        }
      }
      getRequestType() {
        return import_protocol_http3.HttpRequest;
      }
      getResponseType() {
        return import_protocol_http3.HttpResponse;
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
        if (this.getPayloadCodec()) {
          this.getPayloadCodec().setSerdeContext(serdeContext);
        }
      }
      updateServiceEndpoint(request, endpoint) {
        if ("url" in endpoint) {
          request.protocol = endpoint.url.protocol;
          request.hostname = endpoint.url.hostname;
          request.port = endpoint.url.port ? Number(endpoint.url.port) : void 0;
          request.path = endpoint.url.pathname;
          request.fragment = endpoint.url.hash || void 0;
          request.username = endpoint.url.username || void 0;
          request.password = endpoint.url.password || void 0;
          if (!request.query) {
            request.query = {};
          }
          for (const [k, v] of endpoint.url.searchParams.entries()) {
            request.query[k] = v;
          }
          if (endpoint.headers) {
            for (const [name, values] of Object.entries(endpoint.headers)) {
              request.headers[name] = values.join(", ");
            }
          }
          return request;
        } else {
          request.protocol = endpoint.protocol;
          request.hostname = endpoint.hostname;
          request.port = endpoint.port ? Number(endpoint.port) : void 0;
          request.path = endpoint.path;
          request.query = {
            ...endpoint.query
          };
          if (endpoint.headers) {
            for (const [name, value] of Object.entries(endpoint.headers)) {
              request.headers[name] = value;
            }
          }
          return request;
        }
      }
      setHostPrefix(request, operationSchema, input) {
        if (this.serdeContext?.disableHostPrefix) {
          return;
        }
        const inputNs = NormalizedSchema.of(operationSchema.input);
        const opTraits = translateTraits(operationSchema.traits ?? {});
        if (opTraits.endpoint) {
          let hostPrefix = opTraits.endpoint?.[0];
          if (typeof hostPrefix === "string") {
            const hostLabelInputs = [...inputNs.structIterator()].filter(([, member2]) => member2.getMergedTraits().hostLabel);
            for (const [name] of hostLabelInputs) {
              const replacement = input[name];
              if (typeof replacement !== "string") {
                throw new Error(`@smithy/core/schema - ${name} in input must be a string as hostLabel.`);
              }
              hostPrefix = hostPrefix.replace(`{${name}}`, replacement);
            }
            request.hostname = hostPrefix + request.hostname;
          }
        }
      }
      deserializeMetadata(output) {
        return {
          httpStatusCode: output.statusCode,
          requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
          extendedRequestId: output.headers["x-amz-id-2"],
          cfId: output.headers["x-amz-cf-id"]
        };
      }
      async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
        const eventStreamSerde = await this.loadEventStreamCapability();
        return eventStreamSerde.serializeEventStream({
          eventStream,
          requestSchema,
          initialRequest
        });
      }
      async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
        const eventStreamSerde = await this.loadEventStreamCapability();
        return eventStreamSerde.deserializeEventStream({
          response,
          responseSchema,
          initialResponseContainer
        });
      }
      async loadEventStreamCapability() {
        const { EventStreamSerde } = await import("./event-streams-BCH4DTMM.mjs");
        return new EventStreamSerde({
          marshaller: this.getEventStreamMarshaller(),
          serializer: this.serializer,
          deserializer: this.deserializer,
          serdeContext: this.serdeContext,
          defaultContentType: this.getDefaultContentType()
        });
      }
      getDefaultContentType() {
        throw new Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
      }
      async deserializeHttpMessage(schema, context, response, arg4, arg5) {
        void schema;
        void context;
        void response;
        void arg4;
        void arg5;
        return [];
      }
      getEventStreamMarshaller() {
        const context = this.serdeContext;
        if (!context.eventStreamMarshaller) {
          throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
        }
        return context.eventStreamMarshaller;
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js
var import_protocol_http4, import_util_stream2, HttpBindingProtocol;
var init_HttpBindingProtocol = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js"() {
    init_schema();
    init_serde();
    import_protocol_http4 = __toESM(require_dist_cjs2());
    import_util_stream2 = __toESM(require_dist_cjs13());
    init_collect_stream_body();
    init_extended_encode_uri_component();
    init_HttpProtocol();
    HttpBindingProtocol = class extends HttpProtocol {
      async serializeRequest(operationSchema, _input, context) {
        const input = _input && typeof _input === "object" ? _input : {};
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = NormalizedSchema.of(operationSchema?.input);
        const payloadMemberNames = [];
        const payloadMemberSchemas = [];
        let hasNonHttpBindingMember = false;
        let payload;
        const request = new import_protocol_http4.HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "",
          fragment: void 0,
          query,
          headers,
          body: void 0
        });
        if (endpoint) {
          this.updateServiceEndpoint(request, endpoint);
          this.setHostPrefix(request, operationSchema, input);
          const opTraits = translateTraits(operationSchema.traits);
          if (opTraits.http) {
            request.method = opTraits.http[0];
            const [path, search] = opTraits.http[1].split("?");
            if (request.path == "/") {
              request.path = path;
            } else {
              request.path += path;
            }
            const traitSearchParams = new URLSearchParams(search ?? "");
            Object.assign(query, Object.fromEntries(traitSearchParams));
          }
        }
        for (const [memberName, memberNs] of ns.structIterator()) {
          const memberTraits = memberNs.getMergedTraits() ?? {};
          const inputMemberValue = input[memberName];
          if (inputMemberValue == null && !memberNs.isIdempotencyToken()) {
            if (memberTraits.httpLabel) {
              if (request.path.includes(`{${memberName}+}`) || request.path.includes(`{${memberName}}`)) {
                throw new Error(`No value provided for input HTTP label: ${memberName}.`);
              }
            }
            continue;
          }
          if (memberTraits.httpPayload) {
            const isStreaming = memberNs.isStreaming();
            if (isStreaming) {
              const isEventStream = memberNs.isStructSchema();
              if (isEventStream) {
                if (input[memberName]) {
                  payload = await this.serializeEventStream({
                    eventStream: input[memberName],
                    requestSchema: ns
                  });
                }
              } else {
                payload = inputMemberValue;
              }
            } else {
              serializer.write(memberNs, inputMemberValue);
              payload = serializer.flush();
            }
          } else if (memberTraits.httpLabel) {
            serializer.write(memberNs, inputMemberValue);
            const replacement = serializer.flush();
            if (request.path.includes(`{${memberName}+}`)) {
              request.path = request.path.replace(`{${memberName}+}`, replacement.split("/").map(extendedEncodeURIComponent).join("/"));
            } else if (request.path.includes(`{${memberName}}`)) {
              request.path = request.path.replace(`{${memberName}}`, extendedEncodeURIComponent(replacement));
            }
          } else if (memberTraits.httpHeader) {
            serializer.write(memberNs, inputMemberValue);
            headers[memberTraits.httpHeader.toLowerCase()] = String(serializer.flush());
          } else if (typeof memberTraits.httpPrefixHeaders === "string") {
            for (const [key, val] of Object.entries(inputMemberValue)) {
              const amalgam = memberTraits.httpPrefixHeaders + key;
              serializer.write([memberNs.getValueSchema(), { httpHeader: amalgam }], val);
              headers[amalgam.toLowerCase()] = serializer.flush();
            }
          } else if (memberTraits.httpQuery || memberTraits.httpQueryParams) {
            this.serializeQuery(memberNs, inputMemberValue, query);
          } else {
            hasNonHttpBindingMember = true;
            payloadMemberNames.push(memberName);
            payloadMemberSchemas.push(memberNs);
          }
        }
        if (hasNonHttpBindingMember && input) {
          const [namespace, name] = (ns.getName(true) ?? "#Unknown").split("#");
          const requiredMembers = ns.getSchema()[6];
          const payloadSchema = [
            3,
            namespace,
            name,
            ns.getMergedTraits(),
            payloadMemberNames,
            payloadMemberSchemas,
            void 0
          ];
          if (requiredMembers) {
            payloadSchema[6] = requiredMembers;
          } else {
            payloadSchema.pop();
          }
          serializer.write(payloadSchema, input);
          payload = serializer.flush();
        }
        request.headers = headers;
        request.query = query;
        request.body = payload;
        return request;
      }
      serializeQuery(ns, data, query) {
        const serializer = this.serializer;
        const traits = ns.getMergedTraits();
        if (traits.httpQueryParams) {
          for (const [key, val] of Object.entries(data)) {
            if (!(key in query)) {
              const valueSchema = ns.getValueSchema();
              Object.assign(valueSchema.getMergedTraits(), {
                ...traits,
                httpQuery: key,
                httpQueryParams: void 0
              });
              this.serializeQuery(valueSchema, val, query);
            }
          }
          return;
        }
        if (ns.isListSchema()) {
          const sparse = !!ns.getMergedTraits().sparse;
          const buffer = [];
          for (const item of data) {
            serializer.write([ns.getValueSchema(), traits], item);
            const serializable = serializer.flush();
            if (sparse || serializable !== void 0) {
              buffer.push(serializable);
            }
          }
          query[traits.httpQuery] = buffer;
        } else {
          serializer.write([ns, traits], data);
          query[traits.httpQuery] = serializer.flush();
        }
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes = await collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(15, bytes));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
          throw new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const nonHttpBindingMembers = await this.deserializeHttpMessage(ns, context, response, dataObject);
        if (nonHttpBindingMembers.length) {
          const bytes = await collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            const dataFromBody = await deserializer.read(ns, bytes);
            for (const member2 of nonHttpBindingMembers) {
              if (dataFromBody[member2] != null) {
                dataObject[member2] = dataFromBody[member2];
              }
            }
          }
        } else if (nonHttpBindingMembers.discardResponseBody) {
          await collectBody(response.body, context);
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
      }
      async deserializeHttpMessage(schema, context, response, arg4, arg5) {
        let dataObject;
        if (arg4 instanceof Set) {
          dataObject = arg5;
        } else {
          dataObject = arg4;
        }
        let discardResponseBody = true;
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(schema);
        const nonHttpBindingMembers = [];
        for (const [memberName, memberSchema] of ns.structIterator()) {
          const memberTraits = memberSchema.getMemberTraits();
          if (memberTraits.httpPayload) {
            discardResponseBody = false;
            const isStreaming = memberSchema.isStreaming();
            if (isStreaming) {
              const isEventStream = memberSchema.isStructSchema();
              if (isEventStream) {
                dataObject[memberName] = await this.deserializeEventStream({
                  response,
                  responseSchema: ns
                });
              } else {
                dataObject[memberName] = (0, import_util_stream2.sdkStreamMixin)(response.body);
              }
            } else if (response.body) {
              const bytes = await collectBody(response.body, context);
              if (bytes.byteLength > 0) {
                dataObject[memberName] = await deserializer.read(memberSchema, bytes);
              }
            }
          } else if (memberTraits.httpHeader) {
            const key = String(memberTraits.httpHeader).toLowerCase();
            const value = response.headers[key];
            if (null != value) {
              if (memberSchema.isListSchema()) {
                const headerListValueSchema = memberSchema.getValueSchema();
                headerListValueSchema.getMergedTraits().httpHeader = key;
                let sections;
                if (headerListValueSchema.isTimestampSchema() && headerListValueSchema.getSchema() === 4) {
                  sections = splitEvery(value, ",", 2);
                } else {
                  sections = splitHeader(value);
                }
                const list2 = [];
                for (const section of sections) {
                  list2.push(await deserializer.read(headerListValueSchema, section.trim()));
                }
                dataObject[memberName] = list2;
              } else {
                dataObject[memberName] = await deserializer.read(memberSchema, value);
              }
            }
          } else if (memberTraits.httpPrefixHeaders !== void 0) {
            dataObject[memberName] = {};
            for (const [header, value] of Object.entries(response.headers)) {
              if (header.startsWith(memberTraits.httpPrefixHeaders)) {
                const valueSchema = memberSchema.getValueSchema();
                valueSchema.getMergedTraits().httpHeader = header;
                dataObject[memberName][header.slice(memberTraits.httpPrefixHeaders.length)] = await deserializer.read(valueSchema, value);
              }
            }
          } else if (memberTraits.httpResponseCode) {
            dataObject[memberName] = response.statusCode;
          } else {
            nonHttpBindingMembers.push(memberName);
          }
        }
        nonHttpBindingMembers.discardResponseBody = discardResponseBody;
        return nonHttpBindingMembers;
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js
var import_protocol_http5, RpcProtocol;
var init_RpcProtocol = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js"() {
    init_schema();
    import_protocol_http5 = __toESM(require_dist_cjs2());
    init_collect_stream_body();
    init_HttpProtocol();
    RpcProtocol = class extends HttpProtocol {
      async serializeRequest(operationSchema, _input, context) {
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = NormalizedSchema.of(operationSchema?.input);
        const schema = ns.getSchema();
        let payload;
        const input = _input && typeof _input === "object" ? _input : {};
        const request = new import_protocol_http5.HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "/",
          fragment: void 0,
          query,
          headers,
          body: void 0
        });
        if (endpoint) {
          this.updateServiceEndpoint(request, endpoint);
          this.setHostPrefix(request, operationSchema, input);
        }
        if (input) {
          const eventStreamMember = ns.getEventStreamMember();
          if (eventStreamMember) {
            if (input[eventStreamMember]) {
              const initialRequest = {};
              for (const [memberName, memberSchema] of ns.structIterator()) {
                if (memberName !== eventStreamMember && input[memberName]) {
                  serializer.write(memberSchema, input[memberName]);
                  initialRequest[memberName] = serializer.flush();
                }
              }
              payload = await this.serializeEventStream({
                eventStream: input[eventStreamMember],
                requestSchema: ns,
                initialRequest
              });
            }
          } else {
            serializer.write(schema, input);
            payload = serializer.flush();
          }
        }
        request.headers = Object.assign(request.headers, headers);
        request.query = query;
        request.body = payload;
        request.method = "POST";
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes = await collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(15, bytes));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
          throw new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const eventStreamMember = ns.getEventStreamMember();
        if (eventStreamMember) {
          dataObject[eventStreamMember] = await this.deserializeEventStream({
            response,
            responseSchema: ns,
            initialResponseContainer: dataObject
          });
        } else {
          const bytes = await collectBody(response.body, context);
          if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(ns, bytes));
          }
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js
function determineTimestampFormat(ns, settings) {
  if (settings.timestampFormat.useTrait) {
    if (ns.isTimestampSchema() && (ns.getSchema() === 5 || ns.getSchema() === 6 || ns.getSchema() === 7)) {
      return ns.getSchema();
    }
  }
  const { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = ns.getMergedTraits();
  const bindingFormat = settings.httpBindings ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader) ? 6 : Boolean(httpQuery) || Boolean(httpLabel) ? 5 : void 0 : void 0;
  return bindingFormat ?? settings.timestampFormat.default;
}
var init_determineTimestampFormat = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js"() {
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js
var import_util_base64, import_util_utf8, FromStringShapeDeserializer;
var init_FromStringShapeDeserializer = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js"() {
    init_schema();
    init_serde();
    import_util_base64 = __toESM(require_dist_cjs9());
    import_util_utf8 = __toESM(require_dist_cjs7());
    init_SerdeContext();
    init_determineTimestampFormat();
    FromStringShapeDeserializer = class extends SerdeContext {
      settings;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      read(_schema, data) {
        const ns = NormalizedSchema.of(_schema);
        if (ns.isListSchema()) {
          return splitHeader(data).map((item) => this.read(ns.getValueSchema(), item));
        }
        if (ns.isBlobSchema()) {
          return (this.serdeContext?.base64Decoder ?? import_util_base64.fromBase64)(data);
        }
        if (ns.isTimestampSchema()) {
          const format2 = determineTimestampFormat(ns, this.settings);
          switch (format2) {
            case 5:
              return _parseRfc3339DateTimeWithOffset(data);
            case 6:
              return _parseRfc7231DateTime(data);
            case 7:
              return _parseEpochTimestamp(data);
            default:
              console.warn("Missing timestamp format, parsing value with Date constructor:", data);
              return new Date(data);
          }
        }
        if (ns.isStringSchema()) {
          const mediaType = ns.getMergedTraits().mediaType;
          let intermediateValue = data;
          if (mediaType) {
            if (ns.getMergedTraits().httpHeader) {
              intermediateValue = this.base64ToUtf8(intermediateValue);
            }
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
              intermediateValue = LazyJsonString.from(intermediateValue);
            }
            return intermediateValue;
          }
        }
        if (ns.isNumericSchema()) {
          return Number(data);
        }
        if (ns.isBigIntegerSchema()) {
          return BigInt(data);
        }
        if (ns.isBigDecimalSchema()) {
          return new NumericValue(data, "bigDecimal");
        }
        if (ns.isBooleanSchema()) {
          return String(data).toLowerCase() === "true";
        }
        return data;
      }
      base64ToUtf8(base64String) {
        return (this.serdeContext?.utf8Encoder ?? import_util_utf8.toUtf8)((this.serdeContext?.base64Decoder ?? import_util_base64.fromBase64)(base64String));
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js
var import_util_utf82, HttpInterceptingShapeDeserializer;
var init_HttpInterceptingShapeDeserializer = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js"() {
    init_schema();
    import_util_utf82 = __toESM(require_dist_cjs7());
    init_SerdeContext();
    init_FromStringShapeDeserializer();
    HttpInterceptingShapeDeserializer = class extends SerdeContext {
      codecDeserializer;
      stringDeserializer;
      constructor(codecDeserializer, codecSettings) {
        super();
        this.codecDeserializer = codecDeserializer;
        this.stringDeserializer = new FromStringShapeDeserializer(codecSettings);
      }
      setSerdeContext(serdeContext) {
        this.stringDeserializer.setSerdeContext(serdeContext);
        this.codecDeserializer.setSerdeContext(serdeContext);
        this.serdeContext = serdeContext;
      }
      read(schema, data) {
        const ns = NormalizedSchema.of(schema);
        const traits = ns.getMergedTraits();
        const toString = this.serdeContext?.utf8Encoder ?? import_util_utf82.toUtf8;
        if (traits.httpHeader || traits.httpResponseCode) {
          return this.stringDeserializer.read(ns, toString(data));
        }
        if (traits.httpPayload) {
          if (ns.isBlobSchema()) {
            const toBytes = this.serdeContext?.utf8Decoder ?? import_util_utf82.fromUtf8;
            if (typeof data === "string") {
              return toBytes(data);
            }
            return data;
          } else if (ns.isStringSchema()) {
            if ("byteLength" in data) {
              return toString(data);
            }
            return data;
          }
        }
        return this.codecDeserializer.read(ns, data);
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js
var import_util_base642, ToStringShapeSerializer;
var init_ToStringShapeSerializer = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js"() {
    init_schema();
    init_serde();
    import_util_base642 = __toESM(require_dist_cjs9());
    init_SerdeContext();
    init_determineTimestampFormat();
    ToStringShapeSerializer = class extends SerdeContext {
      settings;
      stringBuffer = "";
      constructor(settings) {
        super();
        this.settings = settings;
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        switch (typeof value) {
          case "object":
            if (value === null) {
              this.stringBuffer = "null";
              return;
            }
            if (ns.isTimestampSchema()) {
              if (!(value instanceof Date)) {
                throw new Error(`@smithy/core/protocols - received non-Date value ${value} when schema expected Date in ${ns.getName(true)}`);
              }
              const format2 = determineTimestampFormat(ns, this.settings);
              switch (format2) {
                case 5:
                  this.stringBuffer = value.toISOString().replace(".000Z", "Z");
                  break;
                case 6:
                  this.stringBuffer = dateToUtcString(value);
                  break;
                case 7:
                  this.stringBuffer = String(value.getTime() / 1e3);
                  break;
                default:
                  console.warn("Missing timestamp format, using epoch seconds", value);
                  this.stringBuffer = String(value.getTime() / 1e3);
              }
              return;
            }
            if (ns.isBlobSchema() && "byteLength" in value) {
              this.stringBuffer = (this.serdeContext?.base64Encoder ?? import_util_base642.toBase64)(value);
              return;
            }
            if (ns.isListSchema() && Array.isArray(value)) {
              let buffer = "";
              for (const item of value) {
                this.write([ns.getValueSchema(), ns.getMergedTraits()], item);
                const headerItem = this.flush();
                const serialized = ns.getValueSchema().isTimestampSchema() ? headerItem : quoteHeader(headerItem);
                if (buffer !== "") {
                  buffer += ", ";
                }
                buffer += serialized;
              }
              this.stringBuffer = buffer;
              return;
            }
            this.stringBuffer = JSON.stringify(value, null, 2);
            break;
          case "string":
            const mediaType = ns.getMergedTraits().mediaType;
            let intermediateValue = value;
            if (mediaType) {
              const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
              if (isJson) {
                intermediateValue = LazyJsonString.from(intermediateValue);
              }
              if (ns.getMergedTraits().httpHeader) {
                this.stringBuffer = (this.serdeContext?.base64Encoder ?? import_util_base642.toBase64)(intermediateValue.toString());
                return;
              }
            }
            this.stringBuffer = value;
            break;
          default:
            if (ns.isIdempotencyToken()) {
              this.stringBuffer = (0, import_uuid.v4)();
            } else {
              this.stringBuffer = String(value);
            }
        }
      }
      flush() {
        const buffer = this.stringBuffer;
        this.stringBuffer = "";
        return buffer;
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js
var HttpInterceptingShapeSerializer;
var init_HttpInterceptingShapeSerializer = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js"() {
    init_schema();
    init_ToStringShapeSerializer();
    HttpInterceptingShapeSerializer = class {
      codecSerializer;
      stringSerializer;
      buffer;
      constructor(codecSerializer, codecSettings, stringSerializer = new ToStringShapeSerializer(codecSettings)) {
        this.codecSerializer = codecSerializer;
        this.stringSerializer = stringSerializer;
      }
      setSerdeContext(serdeContext) {
        this.codecSerializer.setSerdeContext(serdeContext);
        this.stringSerializer.setSerdeContext(serdeContext);
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        const traits = ns.getMergedTraits();
        if (traits.httpHeader || traits.httpLabel || traits.httpQuery) {
          this.stringSerializer.write(ns, value);
          this.buffer = this.stringSerializer.flush();
          return;
        }
        return this.codecSerializer.write(ns, value);
      }
      flush() {
        if (this.buffer !== void 0) {
          const buffer = this.buffer;
          this.buffer = void 0;
          return buffer;
        }
        return this.codecSerializer.flush();
      }
    };
  }
});

// node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/index.js
var protocols_exports = {};
__export(protocols_exports, {
  FromStringShapeDeserializer: () => FromStringShapeDeserializer,
  HttpBindingProtocol: () => HttpBindingProtocol,
  HttpInterceptingShapeDeserializer: () => HttpInterceptingShapeDeserializer,
  HttpInterceptingShapeSerializer: () => HttpInterceptingShapeSerializer,
  HttpProtocol: () => HttpProtocol,
  RequestBuilder: () => RequestBuilder,
  RpcProtocol: () => RpcProtocol,
  SerdeContext: () => SerdeContext,
  ToStringShapeSerializer: () => ToStringShapeSerializer,
  collectBody: () => collectBody,
  determineTimestampFormat: () => determineTimestampFormat,
  extendedEncodeURIComponent: () => extendedEncodeURIComponent,
  requestBuilder: () => requestBuilder,
  resolvedPath: () => resolvedPath
});
var init_protocols = __esm({
  "node_modules/.pnpm/@smithy+core@3.23.13/node_modules/@smithy/core/dist-es/submodules/protocols/index.js"() {
    init_collect_stream_body();
    init_extended_encode_uri_component();
    init_HttpBindingProtocol();
    init_HttpProtocol();
    init_RpcProtocol();
    init_requestBuilder();
    init_resolve_path();
    init_FromStringShapeDeserializer();
    init_HttpInterceptingShapeDeserializer();
    init_HttpInterceptingShapeSerializer();
    init_ToStringShapeSerializer();
    init_determineTimestampFormat();
    init_SerdeContext();
  }
});

export {
  tslib_es6_exports,
  init_tslib_es6,
  require_dist_cjs9 as require_dist_cjs,
  require_dist_cjs10 as require_dist_cjs2,
  require_dist_cjs11 as require_dist_cjs3,
  require_dist_cjs13 as require_dist_cjs4,
  collectBody,
  extendedEncodeURIComponent,
  deref,
  require_dist_cjs8 as require_dist_cjs5,
  endpoints_exports,
  init_endpoints,
  getSchemaSerdePlugin,
  NormalizedSchema,
  TypeRegistry,
  schema_exports,
  init_schema,
  dateToUtcString,
  parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime,
  parseEpochTimestamp,
  require_dist_cjs12 as require_dist_cjs6,
  import_uuid,
  LazyJsonString,
  _parseEpochTimestamp,
  NumericValue,
  nv,
  serde_exports,
  init_serde,
  SerdeContext,
  HttpBindingProtocol,
  RpcProtocol,
  requestBuilder,
  determineTimestampFormat,
  FromStringShapeDeserializer,
  HttpInterceptingShapeDeserializer,
  HttpInterceptingShapeSerializer,
  protocols_exports,
  init_protocols
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3RzbGliQDIuOC4xL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYubWpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9zY2hlbWEvZGVyZWYuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1taWRkbGV3YXJlQDQuMi4xMi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLW1pZGRsZXdhcmUvZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL3NjaGVtYS9zY2hlbWFzL29wZXJhdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvc2NoZW1hL21pZGRsZXdhcmUvc2NoZW1hRGVzZXJpYWxpemF0aW9uTWlkZGxld2FyZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvZW5kcG9pbnRzL3RvRW5kcG9pbnRWMS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvZW5kcG9pbnRzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9zY2hlbWEvbWlkZGxld2FyZS9zY2hlbWFTZXJpYWxpemF0aW9uTWlkZGxld2FyZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvc2NoZW1hL21pZGRsZXdhcmUvZ2V0U2NoZW1hU2VyZGVQbHVnaW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL3NjaGVtYS9zY2hlbWFzL1NjaGVtYS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvc2NoZW1hL3NjaGVtYXMvTGlzdFNjaGVtYS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvc2NoZW1hL3NjaGVtYXMvTWFwU2NoZW1hLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9zY2hlbWEvc2NoZW1hcy9PcGVyYXRpb25TY2hlbWEuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL3NjaGVtYS9zY2hlbWFzL1N0cnVjdHVyZVNjaGVtYS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvc2NoZW1hL3NjaGVtYXMvRXJyb3JTY2hlbWEuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL3NjaGVtYS9zY2hlbWFzL3RyYW5zbGF0ZVRyYWl0cy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvc2NoZW1hL3NjaGVtYXMvTm9ybWFsaXplZFNjaGVtYS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvc2NoZW1hL3NjaGVtYXMvU2ltcGxlU2NoZW1hLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9zY2hlbWEvc2NoZW1hcy9zZW50aW5lbHMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL3NjaGVtYS9UeXBlUmVnaXN0cnkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL3NjaGVtYS9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvcHJvdG9jb2xzL2V4dGVuZGVkLWVuY29kZS11cmktY29tcG9uZW50LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9wcm90b2NvbHMvcmVzb2x2ZS1wYXRoLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9wcm90b2NvbHMvcmVxdWVzdEJ1aWxkZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1iYXNlNjRANC4zLjIvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1iYXNlNjQvZGlzdC1janMvZnJvbUJhc2U2NC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLWJhc2U2NEA0LjMuMi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWJhc2U2NC9kaXN0LWNqcy90b0Jhc2U2NC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLWJhc2U2NEA0LjMuMi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWJhc2U2NC9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStmZXRjaC1odHRwLWhhbmRsZXJANS4zLjE1L25vZGVfbW9kdWxlcy9Ac21pdGh5L2ZldGNoLWh0dHAtaGFuZGxlci9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLWhleC1lbmNvZGluZ0A0LjIuMi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWhleC1lbmNvZGluZy9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dWlkQDEuMS4yL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V1aWQvZGlzdC1janMvcmFuZG9tVVVJRC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dWlkQDEuMS4yL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V1aWQvZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL3NlcmRlL2NvcHlEb2N1bWVudFdpdGhUcmFuc2Zvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL3NlcmRlL3BhcnNlLXV0aWxzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9zZXJkZS9kYXRlLXV0aWxzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9zZXJkZS9nZW5lcmF0ZUlkZW1wb3RlbmN5VG9rZW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL3NlcmRlL2xhenktanNvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvc2VyZGUvcXVvdGUtaGVhZGVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9zZXJkZS9zY2hlbWEtc2VyZGUtbGliL3NjaGVtYS1kYXRlLXV0aWxzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9zZXJkZS9zcGxpdC1ldmVyeS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvc2VyZGUvc3BsaXQtaGVhZGVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9zZXJkZS92YWx1ZS9OdW1lcmljVmFsdWUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL3NlcmRlL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtc3RyZWFtQDQuNS4yMS9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXN0cmVhbS9kaXN0LWNqcy9jaGVja3N1bS9DaGVja3N1bVN0cmVhbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXN0cmVhbUA0LjUuMjEvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1zdHJlYW0vZGlzdC1janMvc3RyZWFtLXR5cGUtY2hlY2suanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1zdHJlYW1ANC41LjIxL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtc3RyZWFtL2Rpc3QtY2pzL2NoZWNrc3VtL0NoZWNrc3VtU3RyZWFtLmJyb3dzZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1zdHJlYW1ANC41LjIxL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtc3RyZWFtL2Rpc3QtY2pzL2NoZWNrc3VtL2NyZWF0ZUNoZWNrc3VtU3RyZWFtLmJyb3dzZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1zdHJlYW1ANC41LjIxL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtc3RyZWFtL2Rpc3QtY2pzL2NoZWNrc3VtL2NyZWF0ZUNoZWNrc3VtU3RyZWFtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtc3RyZWFtQDQuNS4yMS9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXN0cmVhbS9kaXN0LWNqcy9CeXRlQXJyYXlDb2xsZWN0b3IuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1zdHJlYW1ANC41LjIxL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtc3RyZWFtL2Rpc3QtY2pzL2NyZWF0ZUJ1ZmZlcmVkUmVhZGFibGVTdHJlYW0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1zdHJlYW1ANC41LjIxL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtc3RyZWFtL2Rpc3QtY2pzL2NyZWF0ZUJ1ZmZlcmVkUmVhZGFibGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1zdHJlYW1ANC41LjIxL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtc3RyZWFtL2Rpc3QtY2pzL2dldEF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbS5icm93c2VyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtc3RyZWFtQDQuNS4yMS9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXN0cmVhbS9kaXN0LWNqcy9nZXRBd3NDaHVua2VkRW5jb2RpbmdTdHJlYW0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1zdHJlYW1ANC41LjIxL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtc3RyZWFtL2Rpc3QtY2pzL2hlYWRTdHJlYW0uYnJvd3Nlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXN0cmVhbUA0LjUuMjEvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1zdHJlYW0vZGlzdC1janMvaGVhZFN0cmVhbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXN0cmVhbUA0LjUuMjEvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1zdHJlYW0vZGlzdC1janMvc2RrLXN0cmVhbS1taXhpbi5icm93c2VyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtc3RyZWFtQDQuNS4yMS9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXN0cmVhbS9kaXN0LWNqcy9zZGstc3RyZWFtLW1peGluLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtc3RyZWFtQDQuNS4yMS9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXN0cmVhbS9kaXN0LWNqcy9zcGxpdFN0cmVhbS5icm93c2VyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtc3RyZWFtQDQuNS4yMS9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXN0cmVhbS9kaXN0LWNqcy9zcGxpdFN0cmVhbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXN0cmVhbUA0LjUuMjEvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1zdHJlYW0vZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL3Byb3RvY29scy9jb2xsZWN0LXN0cmVhbS1ib2R5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9wcm90b2NvbHMvU2VyZGVDb250ZXh0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9wcm90b2NvbHMvSHR0cFByb3RvY29sLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9wcm90b2NvbHMvSHR0cEJpbmRpbmdQcm90b2NvbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStjb3JlQDMuMjMuMTMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvY29yZS9kaXN0LWVzL3N1Ym1vZHVsZXMvcHJvdG9jb2xzL1JwY1Byb3RvY29sLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9wcm90b2NvbHMvc2VyZGUvZGV0ZXJtaW5lVGltZXN0YW1wRm9ybWF0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9wcm90b2NvbHMvc2VyZGUvRnJvbVN0cmluZ1NoYXBlRGVzZXJpYWxpemVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9wcm90b2NvbHMvc2VyZGUvSHR0cEludGVyY2VwdGluZ1NoYXBlRGVzZXJpYWxpemVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9wcm90b2NvbHMvc2VyZGUvVG9TdHJpbmdTaGFwZVNlcmlhbGl6ZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrY29yZUAzLjIzLjEzL25vZGVfbW9kdWxlcy9Ac21pdGh5L2NvcmUvZGlzdC1lcy9zdWJtb2R1bGVzL3Byb3RvY29scy9zZXJkZS9IdHRwSW50ZXJjZXB0aW5nU2hhcGVTZXJpYWxpemVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2NvcmVAMy4yMy4xMy9ub2RlX21vZHVsZXMvQHNtaXRoeS9jb3JlL2Rpc3QtZXMvc3VibW9kdWxlcy9wcm90b2NvbHMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCwgSXRlcmF0b3IgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcbiAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gIH1cbn1cblxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIG9bazJdID0gbVtrXTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcbiAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xuICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgfVxuICB9O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICB0cnkge1xuICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gIGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICB9XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xuICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgcltrXSA9IGFbal07XG4gIHJldHVybiByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xuICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgfVxuICB9XG4gIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XG4gIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcbiAgcmV0dXJuIGkgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgQXN5bmNJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gQXN5bmNJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiLCBhd2FpdFJldHVybiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gYXdhaXRSZXR1cm4oZikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGYsIHJlamVjdCk7IH07IH1cbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChnW25dKSB7IGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IGlmIChmKSBpW25dID0gZihpW25dKTsgfSB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG52YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgdmFyIGFyID0gW107XG4gICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICByZXR1cm4gYXI7XG4gIH07XG4gIHJldHVybiBvd25LZXlzKG8pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xuICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XG4gIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xuICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkLlwiKTtcbiAgICB2YXIgZGlzcG9zZSwgaW5uZXI7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuYXN5bmNEaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKGRpc3Bvc2UgPT09IHZvaWQgMCkge1xuICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgICBpZiAoYXN5bmMpIGlubmVyID0gZGlzcG9zZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGlmIChpbm5lcikgZGlzcG9zZSA9IGZ1bmN0aW9uKCkgeyB0cnkgeyBpbm5lci5jYWxsKHRoaXMpOyB9IGNhdGNoIChlKSB7IHJldHVybiBQcm9taXNlLnJlamVjdChlKTsgfSB9O1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICB2YXIgciwgcyA9IDA7XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgd2hpbGUgKHIgPSBlbnYuc3RhY2sucG9wKCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghci5hc3luYyAmJiBzID09PSAxKSByZXR1cm4gcyA9IDAsIGVudi5zdGFjay5wdXNoKHIpLCBQcm9taXNlLnJlc29sdmUoKS50aGVuKG5leHQpO1xuICAgICAgICBpZiAoci5kaXNwb3NlKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHIuZGlzcG9zZS5jYWxsKHIudmFsdWUpO1xuICAgICAgICAgIGlmIChyLmFzeW5jKSByZXR1cm4gcyB8PSAyLCBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBzIHw9IDE7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBmYWlsKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocyA9PT0gMSkgcmV0dXJuIGVudi5oYXNFcnJvciA/IFByb21pc2UucmVqZWN0KGVudi5lcnJvcikgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBpZiAoZW52Lmhhc0Vycm9yKSB0aHJvdyBlbnYuZXJyb3I7XG4gIH1cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmV3cml0ZVJlbGF0aXZlSW1wb3J0RXh0ZW5zaW9uKHBhdGgsIHByZXNlcnZlSnN4KSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiAmJiAvXlxcLlxcLj9cXC8vLnRlc3QocGF0aCkpIHtcbiAgICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLih0c3gpJHwoKD86XFwuZCk/KSgoPzpcXC5bXi4vXSs/KT8pXFwuKFtjbV0/KXRzJC9pLCBmdW5jdGlvbiAobSwgdHN4LCBkLCBleHQsIGNtKSB7XG4gICAgICAgICAgcmV0dXJuIHRzeCA/IHByZXNlcnZlSnN4ID8gXCIuanN4XCIgOiBcIi5qc1wiIDogZCAmJiAoIWV4dCB8fCAhY20pID8gbSA6IChkICsgZXh0ICsgXCIuXCIgKyBjbS50b0xvd2VyQ2FzZSgpICsgXCJqc1wiKTtcbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiBwYXRoO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19lc0RlY29yYXRlLFxuICBfX3J1bkluaXRpYWxpemVycyxcbiAgX19wcm9wS2V5LFxuICBfX3NldEZ1bmN0aW9uTmFtZSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG4gIF9fcmV3cml0ZVJlbGF0aXZlSW1wb3J0RXh0ZW5zaW9uLFxufTtcbiIsICJleHBvcnQgY29uc3QgZGVyZWYgPSAoc2NoZW1hUmVmKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzY2hlbWFSZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gc2NoZW1hUmVmKCk7XG4gICAgfVxuICAgIHJldHVybiBzY2hlbWFSZWY7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHR5cGVzID0gcmVxdWlyZSgnQHNtaXRoeS90eXBlcycpO1xuXG5jb25zdCBnZXRTbWl0aHlDb250ZXh0ID0gKGNvbnRleHQpID0+IGNvbnRleHRbdHlwZXMuU01JVEhZX0NPTlRFWFRfS0VZXSB8fCAoY29udGV4dFt0eXBlcy5TTUlUSFlfQ09OVEVYVF9LRVldID0ge30pO1xuXG5jb25zdCBub3JtYWxpemVQcm92aWRlciA9IChpbnB1dCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIGNvbnN0IHByb21pc2lmaWVkID0gUHJvbWlzZS5yZXNvbHZlKGlucHV0KTtcbiAgICByZXR1cm4gKCkgPT4gcHJvbWlzaWZpZWQ7XG59O1xuXG5leHBvcnRzLmdldFNtaXRoeUNvbnRleHQgPSBnZXRTbWl0aHlDb250ZXh0O1xuZXhwb3J0cy5ub3JtYWxpemVQcm92aWRlciA9IG5vcm1hbGl6ZVByb3ZpZGVyO1xuIiwgImV4cG9ydCBjb25zdCBvcGVyYXRpb24gPSAobmFtZXNwYWNlLCBuYW1lLCB0cmFpdHMsIGlucHV0LCBvdXRwdXQpID0+ICh7XG4gICAgbmFtZSxcbiAgICBuYW1lc3BhY2UsXG4gICAgdHJhaXRzLFxuICAgIGlucHV0LFxuICAgIG91dHB1dCxcbn0pO1xuIiwgImltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gXCJAc21pdGh5L3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7IGdldFNtaXRoeUNvbnRleHQgfSBmcm9tIFwiQHNtaXRoeS91dGlsLW1pZGRsZXdhcmVcIjtcbmltcG9ydCB7IG9wZXJhdGlvbiB9IGZyb20gXCIuLi9zY2hlbWFzL29wZXJhdGlvblwiO1xuZXhwb3J0IGNvbnN0IHNjaGVtYURlc2VyaWFsaXphdGlvbk1pZGRsZXdhcmUgPSAoY29uZmlnKSA9PiAobmV4dCwgY29udGV4dCkgPT4gYXN5bmMgKGFyZ3MpID0+IHtcbiAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBhd2FpdCBuZXh0KGFyZ3MpO1xuICAgIGNvbnN0IHsgb3BlcmF0aW9uU2NoZW1hIH0gPSBnZXRTbWl0aHlDb250ZXh0KGNvbnRleHQpO1xuICAgIGNvbnN0IFssIG5zLCBuLCB0LCBpLCBvXSA9IG9wZXJhdGlvblNjaGVtYSA/PyBbXTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBhd2FpdCBjb25maWcucHJvdG9jb2wuZGVzZXJpYWxpemVSZXNwb25zZShvcGVyYXRpb24obnMsIG4sIHQsIGksIG8pLCB7XG4gICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICAuLi5jb250ZXh0LFxuICAgICAgICB9LCByZXNwb25zZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIG91dHB1dDogcGFyc2VkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycm9yLCBcIiRyZXNwb25zZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogcmVzcG9uc2UsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIShcIiRtZXRhZGF0YVwiIGluIGVycm9yKSkge1xuICAgICAgICAgICAgY29uc3QgaGludCA9IGBEZXNlcmlhbGl6YXRpb24gZXJyb3I6IHRvIHNlZSB0aGUgcmF3IHJlc3BvbnNlLCBpbnNwZWN0IHRoZSBoaWRkZW4gZmllbGQge2Vycm9yfS4kcmVzcG9uc2Ugb24gdGhpcyBvYmplY3QuYDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSArPSBcIlxcbiAgXCIgKyBoaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRleHQubG9nZ2VyIHx8IGNvbnRleHQubG9nZ2VyPy5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gXCJOb09wTG9nZ2VyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGhpbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2dnZXI/Lndhcm4/LihoaW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVycm9yLiRyZXNwb25zZUJvZHlUZXh0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLiRyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci4kcmVzcG9uc2UuYm9keSA9IGVycm9yLiRyZXNwb25zZUJvZHlUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKEh0dHBSZXNwb25zZS5pc0luc3RhbmNlKHJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGhlYWRlcnMgPSB7fSB9ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlckVudHJpZXMgPSBPYmplY3QuZW50cmllcyhoZWFkZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuJG1ldGFkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cFN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1c0NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SWQ6IGZpbmRIZWFkZXIoL154LVtcXHctXSstcmVxdWVzdC0/aWQkLywgaGVhZGVyRW50cmllcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbmRlZFJlcXVlc3RJZDogZmluZEhlYWRlcigvXngtW1xcdy1dKy1pZC0yJC8sIGhlYWRlckVudHJpZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2ZJZDogZmluZEhlYWRlcigvXngtW1xcdy1dKy1jZi1pZCQvLCBoZWFkZXJFbnRyaWVzKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn07XG5jb25zdCBmaW5kSGVhZGVyID0gKHBhdHRlcm4sIGhlYWRlcnMpID0+IHtcbiAgICByZXR1cm4gKGhlYWRlcnMuZmluZCgoW2tdKSA9PiB7XG4gICAgICAgIHJldHVybiBrLm1hdGNoKHBhdHRlcm4pO1xuICAgIH0pIHx8IFt2b2lkIDAsIHZvaWQgMV0pWzFdO1xufTtcbiIsICJpbXBvcnQgeyBwYXJzZVVybCB9IGZyb20gXCJAc21pdGh5L3VybC1wYXJzZXJcIjtcbmV4cG9ydCBjb25zdCB0b0VuZHBvaW50VjEgPSAoZW5kcG9pbnQpID0+IHtcbiAgICBpZiAodHlwZW9mIGVuZHBvaW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmIChcInVybFwiIGluIGVuZHBvaW50KSB7XG4gICAgICAgICAgICBjb25zdCB2MUVuZHBvaW50ID0gcGFyc2VVcmwoZW5kcG9pbnQudXJsKTtcbiAgICAgICAgICAgIGlmIChlbmRwb2ludC5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgdjFFbmRwb2ludC5oZWFkZXJzID0ge307XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgdmFsdWVzXSBvZiBPYmplY3QuZW50cmllcyhlbmRwb2ludC5oZWFkZXJzKSkge1xuICAgICAgICAgICAgICAgICAgICB2MUVuZHBvaW50LmhlYWRlcnNbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlcy5qb2luKFwiLCBcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHYxRW5kcG9pbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVuZHBvaW50O1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VVcmwoZW5kcG9pbnQpO1xufTtcbiIsICJleHBvcnQgKiBmcm9tIFwiLi90b0VuZHBvaW50VjFcIjtcbiIsICJpbXBvcnQgeyB0b0VuZHBvaW50VjEgfSBmcm9tIFwiQHNtaXRoeS9jb3JlL2VuZHBvaW50c1wiO1xuaW1wb3J0IHsgZ2V0U21pdGh5Q29udGV4dCB9IGZyb20gXCJAc21pdGh5L3V0aWwtbWlkZGxld2FyZVwiO1xuaW1wb3J0IHsgb3BlcmF0aW9uIH0gZnJvbSBcIi4uL3NjaGVtYXMvb3BlcmF0aW9uXCI7XG5leHBvcnQgY29uc3Qgc2NoZW1hU2VyaWFsaXphdGlvbk1pZGRsZXdhcmUgPSAoY29uZmlnKSA9PiAobmV4dCwgY29udGV4dCkgPT4gYXN5bmMgKGFyZ3MpID0+IHtcbiAgICBjb25zdCB7IG9wZXJhdGlvblNjaGVtYSB9ID0gZ2V0U21pdGh5Q29udGV4dChjb250ZXh0KTtcbiAgICBjb25zdCBbLCBucywgbiwgdCwgaSwgb10gPSBvcGVyYXRpb25TY2hlbWEgPz8gW107XG4gICAgY29uc3QgZW5kcG9pbnQgPSBjb250ZXh0LmVuZHBvaW50VjJcbiAgICAgICAgPyBhc3luYyAoKSA9PiB0b0VuZHBvaW50VjEoY29udGV4dC5lbmRwb2ludFYyKVxuICAgICAgICA6IGNvbmZpZy5lbmRwb2ludDtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgY29uZmlnLnByb3RvY29sLnNlcmlhbGl6ZVJlcXVlc3Qob3BlcmF0aW9uKG5zLCBuLCB0LCBpLCBvKSwgYXJncy5pbnB1dCwge1xuICAgICAgICAuLi5jb25maWcsXG4gICAgICAgIC4uLmNvbnRleHQsXG4gICAgICAgIGVuZHBvaW50LFxuICAgIH0pO1xuICAgIHJldHVybiBuZXh0KHtcbiAgICAgICAgLi4uYXJncyxcbiAgICAgICAgcmVxdWVzdCxcbiAgICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgc2NoZW1hRGVzZXJpYWxpemF0aW9uTWlkZGxld2FyZSB9IGZyb20gXCIuL3NjaGVtYURlc2VyaWFsaXphdGlvbk1pZGRsZXdhcmVcIjtcbmltcG9ydCB7IHNjaGVtYVNlcmlhbGl6YXRpb25NaWRkbGV3YXJlIH0gZnJvbSBcIi4vc2NoZW1hU2VyaWFsaXphdGlvbk1pZGRsZXdhcmVcIjtcbmV4cG9ydCBjb25zdCBkZXNlcmlhbGl6ZXJNaWRkbGV3YXJlT3B0aW9uID0ge1xuICAgIG5hbWU6IFwiZGVzZXJpYWxpemVyTWlkZGxld2FyZVwiLFxuICAgIHN0ZXA6IFwiZGVzZXJpYWxpemVcIixcbiAgICB0YWdzOiBbXCJERVNFUklBTElaRVJcIl0sXG4gICAgb3ZlcnJpZGU6IHRydWUsXG59O1xuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZXJNaWRkbGV3YXJlT3B0aW9uID0ge1xuICAgIG5hbWU6IFwic2VyaWFsaXplck1pZGRsZXdhcmVcIixcbiAgICBzdGVwOiBcInNlcmlhbGl6ZVwiLFxuICAgIHRhZ3M6IFtcIlNFUklBTElaRVJcIl0sXG4gICAgb3ZlcnJpZGU6IHRydWUsXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVNlcmRlUGx1Z2luKGNvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFwcGx5VG9TdGFjazogKGNvbW1hbmRTdGFjaykgPT4ge1xuICAgICAgICAgICAgY29tbWFuZFN0YWNrLmFkZChzY2hlbWFTZXJpYWxpemF0aW9uTWlkZGxld2FyZShjb25maWcpLCBzZXJpYWxpemVyTWlkZGxld2FyZU9wdGlvbik7XG4gICAgICAgICAgICBjb21tYW5kU3RhY2suYWRkKHNjaGVtYURlc2VyaWFsaXphdGlvbk1pZGRsZXdhcmUoY29uZmlnKSwgZGVzZXJpYWxpemVyTWlkZGxld2FyZU9wdGlvbik7XG4gICAgICAgICAgICBjb25maWcucHJvdG9jb2wuc2V0U2VyZGVDb250ZXh0KGNvbmZpZyk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiIsICJleHBvcnQgY2xhc3MgU2NoZW1hIHtcbiAgICBuYW1lO1xuICAgIG5hbWVzcGFjZTtcbiAgICB0cmFpdHM7XG4gICAgc3RhdGljIGFzc2lnbihpbnN0YW5jZSwgdmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHZhbHVlcyk7XG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfVxuICAgIHN0YXRpYyBbU3ltYm9sLmhhc0luc3RhbmNlXShsaHMpIHtcbiAgICAgICAgY29uc3QgaXNQcm90b3R5cGUgPSB0aGlzLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGxocyk7XG4gICAgICAgIGlmICghaXNQcm90b3R5cGUgJiYgdHlwZW9mIGxocyA9PT0gXCJvYmplY3RcIiAmJiBsaHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBsaHM7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5zeW1ib2wgPT09IHRoaXMuc3ltYm9sO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1Byb3RvdHlwZTtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZXNwYWNlICsgXCIjXCIgKyB0aGlzLm5hbWU7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCIuL1NjaGVtYVwiO1xuZXhwb3J0IGNsYXNzIExpc3RTY2hlbWEgZXh0ZW5kcyBTY2hlbWEge1xuICAgIHN0YXRpYyBzeW1ib2wgPSBTeW1ib2wuZm9yKFwiQHNtaXRoeS9saXNcIik7XG4gICAgbmFtZTtcbiAgICB0cmFpdHM7XG4gICAgdmFsdWVTY2hlbWE7XG4gICAgc3ltYm9sID0gTGlzdFNjaGVtYS5zeW1ib2w7XG59XG5leHBvcnQgY29uc3QgbGlzdCA9IChuYW1lc3BhY2UsIG5hbWUsIHRyYWl0cywgdmFsdWVTY2hlbWEpID0+IFNjaGVtYS5hc3NpZ24obmV3IExpc3RTY2hlbWEoKSwge1xuICAgIG5hbWUsXG4gICAgbmFtZXNwYWNlLFxuICAgIHRyYWl0cyxcbiAgICB2YWx1ZVNjaGVtYSxcbn0pO1xuIiwgImltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCIuL1NjaGVtYVwiO1xuZXhwb3J0IGNsYXNzIE1hcFNjaGVtYSBleHRlbmRzIFNjaGVtYSB7XG4gICAgc3RhdGljIHN5bWJvbCA9IFN5bWJvbC5mb3IoXCJAc21pdGh5L21hcFwiKTtcbiAgICBuYW1lO1xuICAgIHRyYWl0cztcbiAgICBrZXlTY2hlbWE7XG4gICAgdmFsdWVTY2hlbWE7XG4gICAgc3ltYm9sID0gTWFwU2NoZW1hLnN5bWJvbDtcbn1cbmV4cG9ydCBjb25zdCBtYXAgPSAobmFtZXNwYWNlLCBuYW1lLCB0cmFpdHMsIGtleVNjaGVtYSwgdmFsdWVTY2hlbWEpID0+IFNjaGVtYS5hc3NpZ24obmV3IE1hcFNjaGVtYSgpLCB7XG4gICAgbmFtZSxcbiAgICBuYW1lc3BhY2UsXG4gICAgdHJhaXRzLFxuICAgIGtleVNjaGVtYSxcbiAgICB2YWx1ZVNjaGVtYSxcbn0pO1xuIiwgImltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCIuL1NjaGVtYVwiO1xuZXhwb3J0IGNsYXNzIE9wZXJhdGlvblNjaGVtYSBleHRlbmRzIFNjaGVtYSB7XG4gICAgc3RhdGljIHN5bWJvbCA9IFN5bWJvbC5mb3IoXCJAc21pdGh5L29wZVwiKTtcbiAgICBuYW1lO1xuICAgIHRyYWl0cztcbiAgICBpbnB1dDtcbiAgICBvdXRwdXQ7XG4gICAgc3ltYm9sID0gT3BlcmF0aW9uU2NoZW1hLnN5bWJvbDtcbn1cbmV4cG9ydCBjb25zdCBvcCA9IChuYW1lc3BhY2UsIG5hbWUsIHRyYWl0cywgaW5wdXQsIG91dHB1dCkgPT4gU2NoZW1hLmFzc2lnbihuZXcgT3BlcmF0aW9uU2NoZW1hKCksIHtcbiAgICBuYW1lLFxuICAgIG5hbWVzcGFjZSxcbiAgICB0cmFpdHMsXG4gICAgaW5wdXQsXG4gICAgb3V0cHV0LFxufSk7XG4iLCAiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIi4vU2NoZW1hXCI7XG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2NoZW1hIGV4dGVuZHMgU2NoZW1hIHtcbiAgICBzdGF0aWMgc3ltYm9sID0gU3ltYm9sLmZvcihcIkBzbWl0aHkvc3RyXCIpO1xuICAgIG5hbWU7XG4gICAgdHJhaXRzO1xuICAgIG1lbWJlck5hbWVzO1xuICAgIG1lbWJlckxpc3Q7XG4gICAgc3ltYm9sID0gU3RydWN0dXJlU2NoZW1hLnN5bWJvbDtcbn1cbmV4cG9ydCBjb25zdCBzdHJ1Y3QgPSAobmFtZXNwYWNlLCBuYW1lLCB0cmFpdHMsIG1lbWJlck5hbWVzLCBtZW1iZXJMaXN0KSA9PiBTY2hlbWEuYXNzaWduKG5ldyBTdHJ1Y3R1cmVTY2hlbWEoKSwge1xuICAgIG5hbWUsXG4gICAgbmFtZXNwYWNlLFxuICAgIHRyYWl0cyxcbiAgICBtZW1iZXJOYW1lcyxcbiAgICBtZW1iZXJMaXN0LFxufSk7XG4iLCAiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIi4vU2NoZW1hXCI7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTY2hlbWEgfSBmcm9tIFwiLi9TdHJ1Y3R1cmVTY2hlbWFcIjtcbmV4cG9ydCBjbGFzcyBFcnJvclNjaGVtYSBleHRlbmRzIFN0cnVjdHVyZVNjaGVtYSB7XG4gICAgc3RhdGljIHN5bWJvbCA9IFN5bWJvbC5mb3IoXCJAc21pdGh5L2VyclwiKTtcbiAgICBjdG9yO1xuICAgIHN5bWJvbCA9IEVycm9yU2NoZW1hLnN5bWJvbDtcbn1cbmV4cG9ydCBjb25zdCBlcnJvciA9IChuYW1lc3BhY2UsIG5hbWUsIHRyYWl0cywgbWVtYmVyTmFtZXMsIG1lbWJlckxpc3QsIGN0b3IpID0+IFNjaGVtYS5hc3NpZ24obmV3IEVycm9yU2NoZW1hKCksIHtcbiAgICBuYW1lLFxuICAgIG5hbWVzcGFjZSxcbiAgICB0cmFpdHMsXG4gICAgbWVtYmVyTmFtZXMsXG4gICAgbWVtYmVyTGlzdCxcbiAgICBjdG9yOiBudWxsLFxufSk7XG4iLCAiZXhwb3J0IGNvbnN0IHRyYWl0c0NhY2hlID0gW107XG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlVHJhaXRzKGluZGljYXRvcikge1xuICAgIGlmICh0eXBlb2YgaW5kaWNhdG9yID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiBpbmRpY2F0b3I7XG4gICAgfVxuICAgIGluZGljYXRvciA9IGluZGljYXRvciB8IDA7XG4gICAgaWYgKHRyYWl0c0NhY2hlW2luZGljYXRvcl0pIHtcbiAgICAgICAgcmV0dXJuIHRyYWl0c0NhY2hlW2luZGljYXRvcl07XG4gICAgfVxuICAgIGNvbnN0IHRyYWl0cyA9IHt9O1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGNvbnN0IHRyYWl0IG9mIFtcbiAgICAgICAgXCJodHRwTGFiZWxcIixcbiAgICAgICAgXCJpZGVtcG90ZW50XCIsXG4gICAgICAgIFwiaWRlbXBvdGVuY3lUb2tlblwiLFxuICAgICAgICBcInNlbnNpdGl2ZVwiLFxuICAgICAgICBcImh0dHBQYXlsb2FkXCIsXG4gICAgICAgIFwiaHR0cFJlc3BvbnNlQ29kZVwiLFxuICAgICAgICBcImh0dHBRdWVyeVBhcmFtc1wiLFxuICAgIF0pIHtcbiAgICAgICAgaWYgKCgoaW5kaWNhdG9yID4+IGkrKykgJiAxKSA9PT0gMSkge1xuICAgICAgICAgICAgdHJhaXRzW3RyYWl0XSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICh0cmFpdHNDYWNoZVtpbmRpY2F0b3JdID0gdHJhaXRzKTtcbn1cbiIsICJpbXBvcnQgeyBkZXJlZiB9IGZyb20gXCIuLi9kZXJlZlwiO1xuaW1wb3J0IHsgdHJhbnNsYXRlVHJhaXRzIH0gZnJvbSBcIi4vdHJhbnNsYXRlVHJhaXRzXCI7XG5jb25zdCBhbm5vID0ge1xuICAgIGl0OiBTeW1ib2wuZm9yKFwiQHNtaXRoeS9ub3Itc3RydWN0LWl0XCIpLFxuICAgIG5zOiBTeW1ib2wuZm9yKFwiQHNtaXRoeS9uc1wiKSxcbn07XG5leHBvcnQgY29uc3Qgc2ltcGxlU2NoZW1hQ2FjaGVOID0gW107XG5leHBvcnQgY29uc3Qgc2ltcGxlU2NoZW1hQ2FjaGVTID0ge307XG5leHBvcnQgY2xhc3MgTm9ybWFsaXplZFNjaGVtYSB7XG4gICAgcmVmO1xuICAgIG1lbWJlck5hbWU7XG4gICAgc3RhdGljIHN5bWJvbCA9IFN5bWJvbC5mb3IoXCJAc21pdGh5L25vclwiKTtcbiAgICBzeW1ib2wgPSBOb3JtYWxpemVkU2NoZW1hLnN5bWJvbDtcbiAgICBuYW1lO1xuICAgIHNjaGVtYTtcbiAgICBfaXNNZW1iZXJTY2hlbWE7XG4gICAgdHJhaXRzO1xuICAgIG1lbWJlclRyYWl0cztcbiAgICBub3JtYWxpemVkVHJhaXRzO1xuICAgIGNvbnN0cnVjdG9yKHJlZiwgbWVtYmVyTmFtZSkge1xuICAgICAgICB0aGlzLnJlZiA9IHJlZjtcbiAgICAgICAgdGhpcy5tZW1iZXJOYW1lID0gbWVtYmVyTmFtZTtcbiAgICAgICAgY29uc3QgdHJhaXRTdGFjayA9IFtdO1xuICAgICAgICBsZXQgX3JlZiA9IHJlZjtcbiAgICAgICAgbGV0IHNjaGVtYSA9IHJlZjtcbiAgICAgICAgdGhpcy5faXNNZW1iZXJTY2hlbWEgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKGlzTWVtYmVyU2NoZW1hKF9yZWYpKSB7XG4gICAgICAgICAgICB0cmFpdFN0YWNrLnB1c2goX3JlZlsxXSk7XG4gICAgICAgICAgICBfcmVmID0gX3JlZlswXTtcbiAgICAgICAgICAgIHNjaGVtYSA9IGRlcmVmKF9yZWYpO1xuICAgICAgICAgICAgdGhpcy5faXNNZW1iZXJTY2hlbWEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFpdFN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubWVtYmVyVHJhaXRzID0ge307XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdHJhaXRTdGFjay5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYWl0U2V0ID0gdHJhaXRTdGFja1tpXTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMubWVtYmVyVHJhaXRzLCB0cmFuc2xhdGVUcmFpdHModHJhaXRTZXQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVtYmVyVHJhaXRzID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZW1hIGluc3RhbmNlb2YgTm9ybWFsaXplZFNjaGVtYSkge1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRNZW1iZXJUcmFpdHMgPSB0aGlzLm1lbWJlclRyYWl0cztcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgc2NoZW1hKTtcbiAgICAgICAgICAgIHRoaXMubWVtYmVyVHJhaXRzID0gT2JqZWN0LmFzc2lnbih7fSwgY29tcHV0ZWRNZW1iZXJUcmFpdHMsIHNjaGVtYS5nZXRNZW1iZXJUcmFpdHMoKSwgdGhpcy5nZXRNZW1iZXJUcmFpdHMoKSk7XG4gICAgICAgICAgICB0aGlzLm5vcm1hbGl6ZWRUcmFpdHMgPSB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLm1lbWJlck5hbWUgPSBtZW1iZXJOYW1lID8/IHNjaGVtYS5tZW1iZXJOYW1lO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZW1hID0gZGVyZWYoc2NoZW1hKTtcbiAgICAgICAgaWYgKGlzU3RhdGljU2NoZW1hKHRoaXMuc2NoZW1hKSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gYCR7dGhpcy5zY2hlbWFbMV19IyR7dGhpcy5zY2hlbWFbMl19YDtcbiAgICAgICAgICAgIHRoaXMudHJhaXRzID0gdGhpcy5zY2hlbWFbM107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm1lbWJlck5hbWUgPz8gU3RyaW5nKHNjaGVtYSk7XG4gICAgICAgICAgICB0aGlzLnRyYWl0cyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzTWVtYmVyU2NoZW1hICYmICFtZW1iZXJOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEBzbWl0aHkvY29yZS9zY2hlbWEgLSBOb3JtYWxpemVkU2NoZW1hIG1lbWJlciBpbml0ICR7dGhpcy5nZXROYW1lKHRydWUpfSBtaXNzaW5nIG1lbWJlciBuYW1lLmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBbU3ltYm9sLmhhc0luc3RhbmNlXShsaHMpIHtcbiAgICAgICAgY29uc3QgaXNQcm90b3R5cGUgPSB0aGlzLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGxocyk7XG4gICAgICAgIGlmICghaXNQcm90b3R5cGUgJiYgdHlwZW9mIGxocyA9PT0gXCJvYmplY3RcIiAmJiBsaHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG5zID0gbGhzO1xuICAgICAgICAgICAgcmV0dXJuIG5zLnN5bWJvbCA9PT0gdGhpcy5zeW1ib2w7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzUHJvdG90eXBlO1xuICAgIH1cbiAgICBzdGF0aWMgb2YocmVmKSB7XG4gICAgICAgIGNvbnN0IGtleUFibGUgPSB0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIgfHwgKHR5cGVvZiByZWYgPT09IFwib2JqZWN0XCIgJiYgcmVmICE9PSBudWxsKTtcbiAgICAgICAgaWYgKHR5cGVvZiByZWYgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGlmIChzaW1wbGVTY2hlbWFDYWNoZU5bcmVmXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaW1wbGVTY2hlbWFDYWNoZU5bcmVmXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcmVmID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBpZiAoc2ltcGxlU2NoZW1hQ2FjaGVTW3JlZl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2ltcGxlU2NoZW1hQ2FjaGVTW3JlZl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5QWJsZSkge1xuICAgICAgICAgICAgaWYgKHJlZlthbm5vLm5zXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWZbYW5uby5uc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2MgPSBkZXJlZihyZWYpO1xuICAgICAgICBpZiAoc2MgaW5zdGFuY2VvZiBOb3JtYWxpemVkU2NoZW1hKSB7XG4gICAgICAgICAgICByZXR1cm4gc2M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTWVtYmVyU2NoZW1hKHNjKSkge1xuICAgICAgICAgICAgY29uc3QgW25zLCB0cmFpdHNdID0gc2M7XG4gICAgICAgICAgICBpZiAobnMgaW5zdGFuY2VvZiBOb3JtYWxpemVkU2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihucy5nZXRNZXJnZWRUcmFpdHMoKSwgdHJhbnNsYXRlVHJhaXRzKHRyYWl0cykpO1xuICAgICAgICAgICAgICAgIHJldHVybiBucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQHNtaXRoeS9jb3JlL3NjaGVtYSAtIG1heSBub3QgaW5pdCB1bndyYXBwZWQgbWVtYmVyIHNjaGVtYT0ke0pTT04uc3RyaW5naWZ5KHJlZiwgbnVsbCwgMil9LmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5zID0gbmV3IE5vcm1hbGl6ZWRTY2hlbWEoc2MpO1xuICAgICAgICBpZiAoa2V5QWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChyZWZbYW5uby5uc10gPSBucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIChzaW1wbGVTY2hlbWFDYWNoZVNbc2NdID0gbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2MgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoc2ltcGxlU2NoZW1hQ2FjaGVOW3NjXSA9IG5zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnM7XG4gICAgfVxuICAgIGdldFNjaGVtYSgpIHtcbiAgICAgICAgY29uc3Qgc2MgPSB0aGlzLnNjaGVtYTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2MpICYmIHNjWzBdID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NbNF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjO1xuICAgIH1cbiAgICBnZXROYW1lKHdpdGhOYW1lc3BhY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNob3J0ID0gIXdpdGhOYW1lc3BhY2UgJiYgbmFtZSAmJiBuYW1lLmluY2x1ZGVzKFwiI1wiKTtcbiAgICAgICAgcmV0dXJuIHNob3J0ID8gbmFtZS5zcGxpdChcIiNcIilbMV0gOiBuYW1lIHx8IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZ2V0TWVtYmVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtYmVyTmFtZTtcbiAgICB9XG4gICAgaXNNZW1iZXJTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc01lbWJlclNjaGVtYTtcbiAgICB9XG4gICAgaXNMaXN0U2NoZW1hKCkge1xuICAgICAgICBjb25zdCBzYyA9IHRoaXMuZ2V0U2NoZW1hKCk7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygc2MgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgID8gc2MgPj0gNjQgJiYgc2MgPCAxMjhcbiAgICAgICAgICAgIDogc2NbMF0gPT09IDE7XG4gICAgfVxuICAgIGlzTWFwU2NoZW1hKCkge1xuICAgICAgICBjb25zdCBzYyA9IHRoaXMuZ2V0U2NoZW1hKCk7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygc2MgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgID8gc2MgPj0gMTI4ICYmIHNjIDw9IDBiMTExMV8xMTExXG4gICAgICAgICAgICA6IHNjWzBdID09PSAyO1xuICAgIH1cbiAgICBpc1N0cnVjdFNjaGVtYSgpIHtcbiAgICAgICAgY29uc3Qgc2MgPSB0aGlzLmdldFNjaGVtYSgpO1xuICAgICAgICBpZiAodHlwZW9mIHNjICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBzY1swXTtcbiAgICAgICAgcmV0dXJuIChpZCA9PT0gMyB8fFxuICAgICAgICAgICAgaWQgPT09IC0zIHx8XG4gICAgICAgICAgICBpZCA9PT0gNCk7XG4gICAgfVxuICAgIGlzVW5pb25TY2hlbWEoKSB7XG4gICAgICAgIGNvbnN0IHNjID0gdGhpcy5nZXRTY2hlbWEoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBzYyAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY1swXSA9PT0gNDtcbiAgICB9XG4gICAgaXNCbG9iU2NoZW1hKCkge1xuICAgICAgICBjb25zdCBzYyA9IHRoaXMuZ2V0U2NoZW1hKCk7XG4gICAgICAgIHJldHVybiBzYyA9PT0gMjEgfHwgc2MgPT09IDQyO1xuICAgIH1cbiAgICBpc1RpbWVzdGFtcFNjaGVtYSgpIHtcbiAgICAgICAgY29uc3Qgc2MgPSB0aGlzLmdldFNjaGVtYSgpO1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBzYyA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICAgICAgc2MgPj0gNCAmJlxuICAgICAgICAgICAgc2MgPD0gNyk7XG4gICAgfVxuICAgIGlzVW5pdFNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2NoZW1hKCkgPT09IFwidW5pdFwiO1xuICAgIH1cbiAgICBpc0RvY3VtZW50U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTY2hlbWEoKSA9PT0gMTU7XG4gICAgfVxuICAgIGlzU3RyaW5nU2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTY2hlbWEoKSA9PT0gMDtcbiAgICB9XG4gICAgaXNCb29sZWFuU2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTY2hlbWEoKSA9PT0gMjtcbiAgICB9XG4gICAgaXNOdW1lcmljU2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTY2hlbWEoKSA9PT0gMTtcbiAgICB9XG4gICAgaXNCaWdJbnRlZ2VyU2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTY2hlbWEoKSA9PT0gMTc7XG4gICAgfVxuICAgIGlzQmlnRGVjaW1hbFNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2NoZW1hKCkgPT09IDE5O1xuICAgIH1cbiAgICBpc1N0cmVhbWluZygpIHtcbiAgICAgICAgY29uc3QgeyBzdHJlYW1pbmcgfSA9IHRoaXMuZ2V0TWVyZ2VkVHJhaXRzKCk7XG4gICAgICAgIHJldHVybiAhIXN0cmVhbWluZyB8fCB0aGlzLmdldFNjaGVtYSgpID09PSA0MjtcbiAgICB9XG4gICAgaXNJZGVtcG90ZW5jeVRva2VuKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmdldE1lcmdlZFRyYWl0cygpLmlkZW1wb3RlbmN5VG9rZW47XG4gICAgfVxuICAgIGdldE1lcmdlZFRyYWl0cygpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm5vcm1hbGl6ZWRUcmFpdHMgPz9cbiAgICAgICAgICAgICh0aGlzLm5vcm1hbGl6ZWRUcmFpdHMgPSB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5nZXRPd25UcmFpdHMoKSxcbiAgICAgICAgICAgICAgICAuLi50aGlzLmdldE1lbWJlclRyYWl0cygpLFxuICAgICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBnZXRNZW1iZXJUcmFpdHMoKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGVUcmFpdHModGhpcy5tZW1iZXJUcmFpdHMpO1xuICAgIH1cbiAgICBnZXRPd25UcmFpdHMoKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGVUcmFpdHModGhpcy50cmFpdHMpO1xuICAgIH1cbiAgICBnZXRLZXlTY2hlbWEoKSB7XG4gICAgICAgIGNvbnN0IFtpc0RvYywgaXNNYXBdID0gW3RoaXMuaXNEb2N1bWVudFNjaGVtYSgpLCB0aGlzLmlzTWFwU2NoZW1hKCldO1xuICAgICAgICBpZiAoIWlzRG9jICYmICFpc01hcCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBAc21pdGh5L2NvcmUvc2NoZW1hIC0gY2Fubm90IGdldCBrZXkgZm9yIG5vbi1tYXA6ICR7dGhpcy5nZXROYW1lKHRydWUpfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuZ2V0U2NoZW1hKCk7XG4gICAgICAgIGNvbnN0IG1lbWJlclNjaGVtYSA9IGlzRG9jXG4gICAgICAgICAgICA/IDE1XG4gICAgICAgICAgICA6IHNjaGVtYVs0XSA/PyAwO1xuICAgICAgICByZXR1cm4gbWVtYmVyKFttZW1iZXJTY2hlbWEsIDBdLCBcImtleVwiKTtcbiAgICB9XG4gICAgZ2V0VmFsdWVTY2hlbWEoKSB7XG4gICAgICAgIGNvbnN0IHNjID0gdGhpcy5nZXRTY2hlbWEoKTtcbiAgICAgICAgY29uc3QgW2lzRG9jLCBpc01hcCwgaXNMaXN0XSA9IFt0aGlzLmlzRG9jdW1lbnRTY2hlbWEoKSwgdGhpcy5pc01hcFNjaGVtYSgpLCB0aGlzLmlzTGlzdFNjaGVtYSgpXTtcbiAgICAgICAgY29uc3QgbWVtYmVyU2NoZW1hID0gdHlwZW9mIHNjID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICA/IDBiMDAxMV8xMTExICYgc2NcbiAgICAgICAgICAgIDogc2MgJiYgdHlwZW9mIHNjID09PSBcIm9iamVjdFwiICYmIChpc01hcCB8fCBpc0xpc3QpXG4gICAgICAgICAgICAgICAgPyBzY1szICsgc2NbMF1dXG4gICAgICAgICAgICAgICAgOiBpc0RvY1xuICAgICAgICAgICAgICAgICAgICA/IDE1XG4gICAgICAgICAgICAgICAgICAgIDogdm9pZCAwO1xuICAgICAgICBpZiAobWVtYmVyU2NoZW1hICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBtZW1iZXIoW21lbWJlclNjaGVtYSwgMF0sIGlzTWFwID8gXCJ2YWx1ZVwiIDogXCJtZW1iZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBAc21pdGh5L2NvcmUvc2NoZW1hIC0gJHt0aGlzLmdldE5hbWUodHJ1ZSl9IGhhcyBubyB2YWx1ZSBtZW1iZXIuYCk7XG4gICAgfVxuICAgIGdldE1lbWJlclNjaGVtYShtZW1iZXJOYW1lKSB7XG4gICAgICAgIGNvbnN0IHN0cnVjdCA9IHRoaXMuZ2V0U2NoZW1hKCk7XG4gICAgICAgIGlmICh0aGlzLmlzU3RydWN0U2NoZW1hKCkgJiYgc3RydWN0WzRdLmluY2x1ZGVzKG1lbWJlck5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBpID0gc3RydWN0WzRdLmluZGV4T2YobWVtYmVyTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBtZW1iZXJTY2hlbWEgPSBzdHJ1Y3RbNV1baV07XG4gICAgICAgICAgICByZXR1cm4gbWVtYmVyKGlzTWVtYmVyU2NoZW1hKG1lbWJlclNjaGVtYSkgPyBtZW1iZXJTY2hlbWEgOiBbbWVtYmVyU2NoZW1hLCAwXSwgbWVtYmVyTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNEb2N1bWVudFNjaGVtYSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVtYmVyKFsxNSwgMF0sIG1lbWJlck5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQHNtaXRoeS9jb3JlL3NjaGVtYSAtICR7dGhpcy5nZXROYW1lKHRydWUpfSBoYXMgbm8gbWVtYmVyPSR7bWVtYmVyTmFtZX0uYCk7XG4gICAgfVxuICAgIGdldE1lbWJlclNjaGVtYXMoKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHt9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgdGhpcy5zdHJ1Y3RJdGVyYXRvcigpKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyW2tdID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoaWdub3JlZCkgeyB9XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuICAgIGdldEV2ZW50U3RyZWFtTWVtYmVyKCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0cnVjdFNjaGVtYSgpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFttZW1iZXJOYW1lLCBtZW1iZXJTY2hlbWFdIG9mIHRoaXMuc3RydWN0SXRlcmF0b3IoKSkge1xuICAgICAgICAgICAgICAgIGlmIChtZW1iZXJTY2hlbWEuaXNTdHJlYW1pbmcoKSAmJiBtZW1iZXJTY2hlbWEuaXNTdHJ1Y3RTY2hlbWEoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgICpzdHJ1Y3RJdGVyYXRvcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVbml0U2NoZW1hKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNTdHJ1Y3RTY2hlbWEoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQHNtaXRoeS9jb3JlL3NjaGVtYSAtIGNhbm5vdCBpdGVyYXRlIG5vbi1zdHJ1Y3Qgc2NoZW1hLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJ1Y3QgPSB0aGlzLmdldFNjaGVtYSgpO1xuICAgICAgICBjb25zdCB6ID0gc3RydWN0WzRdLmxlbmd0aDtcbiAgICAgICAgbGV0IGl0ID0gc3RydWN0W2Fubm8uaXRdO1xuICAgICAgICBpZiAoaXQgJiYgeiA9PT0gaXQubGVuZ3RoKSB7XG4gICAgICAgICAgICB5aWVsZCogaXQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXQgPSBBcnJheSh6KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB6OyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBzdHJ1Y3RbNF1baV07XG4gICAgICAgICAgICBjb25zdCB2ID0gbWVtYmVyKFtzdHJ1Y3RbNV1baV0sIDBdLCBrKTtcbiAgICAgICAgICAgIHlpZWxkIChpdFtpXSA9IFtrLCB2XSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RydWN0W2Fubm8uaXRdID0gaXQ7XG4gICAgfVxufVxuZnVuY3Rpb24gbWVtYmVyKG1lbWJlclNjaGVtYSwgbWVtYmVyTmFtZSkge1xuICAgIGlmIChtZW1iZXJTY2hlbWEgaW5zdGFuY2VvZiBOb3JtYWxpemVkU2NoZW1hKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG1lbWJlclNjaGVtYSwge1xuICAgICAgICAgICAgbWVtYmVyTmFtZSxcbiAgICAgICAgICAgIF9pc01lbWJlclNjaGVtYTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGludGVybmFsQ3RvckFjY2VzcyA9IE5vcm1hbGl6ZWRTY2hlbWE7XG4gICAgcmV0dXJuIG5ldyBpbnRlcm5hbEN0b3JBY2Nlc3MobWVtYmVyU2NoZW1hLCBtZW1iZXJOYW1lKTtcbn1cbmNvbnN0IGlzTWVtYmVyU2NoZW1hID0gKHNjKSA9PiBBcnJheS5pc0FycmF5KHNjKSAmJiBzYy5sZW5ndGggPT09IDI7XG5leHBvcnQgY29uc3QgaXNTdGF0aWNTY2hlbWEgPSAoc2MpID0+IEFycmF5LmlzQXJyYXkoc2MpICYmIHNjLmxlbmd0aCA+PSA1O1xuIiwgImltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCIuL1NjaGVtYVwiO1xuZXhwb3J0IGNsYXNzIFNpbXBsZVNjaGVtYSBleHRlbmRzIFNjaGVtYSB7XG4gICAgc3RhdGljIHN5bWJvbCA9IFN5bWJvbC5mb3IoXCJAc21pdGh5L3NpbVwiKTtcbiAgICBuYW1lO1xuICAgIHNjaGVtYVJlZjtcbiAgICB0cmFpdHM7XG4gICAgc3ltYm9sID0gU2ltcGxlU2NoZW1hLnN5bWJvbDtcbn1cbmV4cG9ydCBjb25zdCBzaW0gPSAobmFtZXNwYWNlLCBuYW1lLCBzY2hlbWFSZWYsIHRyYWl0cykgPT4gU2NoZW1hLmFzc2lnbihuZXcgU2ltcGxlU2NoZW1hKCksIHtcbiAgICBuYW1lLFxuICAgIG5hbWVzcGFjZSxcbiAgICB0cmFpdHMsXG4gICAgc2NoZW1hUmVmLFxufSk7XG5leHBvcnQgY29uc3Qgc2ltQWRhcHRlciA9IChuYW1lc3BhY2UsIG5hbWUsIHRyYWl0cywgc2NoZW1hUmVmKSA9PiBTY2hlbWEuYXNzaWduKG5ldyBTaW1wbGVTY2hlbWEoKSwge1xuICAgIG5hbWUsXG4gICAgbmFtZXNwYWNlLFxuICAgIHRyYWl0cyxcbiAgICBzY2hlbWFSZWYsXG59KTtcbiIsICJleHBvcnQgY29uc3QgU0NIRU1BID0ge1xuICAgIEJMT0I6IDBiMDAwMV8wMTAxLFxuICAgIFNUUkVBTUlOR19CTE9COiAwYjAwMTBfMTAxMCxcbiAgICBCT09MRUFOOiAwYjAwMDBfMDAxMCxcbiAgICBTVFJJTkc6IDBiMDAwMF8wMDAwLFxuICAgIE5VTUVSSUM6IDBiMDAwMF8wMDAxLFxuICAgIEJJR19JTlRFR0VSOiAwYjAwMDFfMDAwMSxcbiAgICBCSUdfREVDSU1BTDogMGIwMDAxXzAwMTEsXG4gICAgRE9DVU1FTlQ6IDBiMDAwMF8xMTExLFxuICAgIFRJTUVTVEFNUF9ERUZBVUxUOiAwYjAwMDBfMDEwMCxcbiAgICBUSU1FU1RBTVBfREFURV9USU1FOiAwYjAwMDBfMDEwMSxcbiAgICBUSU1FU1RBTVBfSFRUUF9EQVRFOiAwYjAwMDBfMDExMCxcbiAgICBUSU1FU1RBTVBfRVBPQ0hfU0VDT05EUzogMGIwMDAwXzAxMTEsXG4gICAgTElTVF9NT0RJRklFUjogMGIwMTAwXzAwMDAsXG4gICAgTUFQX01PRElGSUVSOiAwYjEwMDBfMDAwMCxcbn07XG4iLCAiZXhwb3J0IGNsYXNzIFR5cGVSZWdpc3RyeSB7XG4gICAgbmFtZXNwYWNlO1xuICAgIHNjaGVtYXM7XG4gICAgZXhjZXB0aW9ucztcbiAgICBzdGF0aWMgcmVnaXN0cmllcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdHJ1Y3RvcihuYW1lc3BhY2UsIHNjaGVtYXMgPSBuZXcgTWFwKCksIGV4Y2VwdGlvbnMgPSBuZXcgTWFwKCkpIHtcbiAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgICAgIHRoaXMuc2NoZW1hcyA9IHNjaGVtYXM7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9ucyA9IGV4Y2VwdGlvbnM7XG4gICAgfVxuICAgIHN0YXRpYyBmb3IobmFtZXNwYWNlKSB7XG4gICAgICAgIGlmICghVHlwZVJlZ2lzdHJ5LnJlZ2lzdHJpZXMuaGFzKG5hbWVzcGFjZSkpIHtcbiAgICAgICAgICAgIFR5cGVSZWdpc3RyeS5yZWdpc3RyaWVzLnNldChuYW1lc3BhY2UsIG5ldyBUeXBlUmVnaXN0cnkobmFtZXNwYWNlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFR5cGVSZWdpc3RyeS5yZWdpc3RyaWVzLmdldChuYW1lc3BhY2UpO1xuICAgIH1cbiAgICBjb3B5RnJvbShvdGhlcikge1xuICAgICAgICBjb25zdCB7IHNjaGVtYXMsIGV4Y2VwdGlvbnMgfSA9IHRoaXM7XG4gICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIG90aGVyLnNjaGVtYXMpIHtcbiAgICAgICAgICAgIGlmICghc2NoZW1hcy5oYXMoaykpIHtcbiAgICAgICAgICAgICAgICBzY2hlbWFzLnNldChrLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBvdGhlci5leGNlcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoIWV4Y2VwdGlvbnMuaGFzKGspKSB7XG4gICAgICAgICAgICAgICAgZXhjZXB0aW9ucy5zZXQoaywgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVnaXN0ZXIoc2hhcGVJZCwgc2NoZW1hKSB7XG4gICAgICAgIGNvbnN0IHF1YWxpZmllZE5hbWUgPSB0aGlzLm5vcm1hbGl6ZVNoYXBlSWQoc2hhcGVJZCk7XG4gICAgICAgIGZvciAoY29uc3QgciBvZiBbdGhpcywgVHlwZVJlZ2lzdHJ5LmZvcihxdWFsaWZpZWROYW1lLnNwbGl0KFwiI1wiKVswXSldKSB7XG4gICAgICAgICAgICByLnNjaGVtYXMuc2V0KHF1YWxpZmllZE5hbWUsIHNjaGVtYSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0U2NoZW1hKHNoYXBlSWQpIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLm5vcm1hbGl6ZVNoYXBlSWQoc2hhcGVJZCk7XG4gICAgICAgIGlmICghdGhpcy5zY2hlbWFzLmhhcyhpZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQHNtaXRoeS9jb3JlL3NjaGVtYSAtIHNjaGVtYSBub3QgZm91bmQgZm9yICR7aWR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hcy5nZXQoaWQpO1xuICAgIH1cbiAgICByZWdpc3RlckVycm9yKGVzLCBjdG9yKSB7XG4gICAgICAgIGNvbnN0ICRlcnJvciA9IGVzO1xuICAgICAgICBjb25zdCBucyA9ICRlcnJvclsxXTtcbiAgICAgICAgZm9yIChjb25zdCByIG9mIFt0aGlzLCBUeXBlUmVnaXN0cnkuZm9yKG5zKV0pIHtcbiAgICAgICAgICAgIHIuc2NoZW1hcy5zZXQobnMgKyBcIiNcIiArICRlcnJvclsyXSwgJGVycm9yKTtcbiAgICAgICAgICAgIHIuZXhjZXB0aW9ucy5zZXQoJGVycm9yLCBjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRFcnJvckN0b3IoZXMpIHtcbiAgICAgICAgY29uc3QgJGVycm9yID0gZXM7XG4gICAgICAgIGlmICh0aGlzLmV4Y2VwdGlvbnMuaGFzKCRlcnJvcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4Y2VwdGlvbnMuZ2V0KCRlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVnaXN0cnkgPSBUeXBlUmVnaXN0cnkuZm9yKCRlcnJvclsxXSk7XG4gICAgICAgIHJldHVybiByZWdpc3RyeS5leGNlcHRpb25zLmdldCgkZXJyb3IpO1xuICAgIH1cbiAgICBnZXRCYXNlRXhjZXB0aW9uKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGV4Y2VwdGlvbktleSBvZiB0aGlzLmV4Y2VwdGlvbnMua2V5cygpKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShleGNlcHRpb25LZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgWywgbnMsIG5hbWVdID0gZXhjZXB0aW9uS2V5O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gbnMgKyBcIiNcIiArIG5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJzbWl0aHkudHMuc2RrLnN5bnRoZXRpYy5cIikgJiYgaWQuZW5kc1dpdGgoXCJTZXJ2aWNlRXhjZXB0aW9uXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleGNlcHRpb25LZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZpbmQocHJlZGljYXRlKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5zY2hlbWFzLnZhbHVlcygpXS5maW5kKHByZWRpY2F0ZSk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNjaGVtYXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5leGNlcHRpb25zLmNsZWFyKCk7XG4gICAgfVxuICAgIG5vcm1hbGl6ZVNoYXBlSWQoc2hhcGVJZCkge1xuICAgICAgICBpZiAoc2hhcGVJZC5pbmNsdWRlcyhcIiNcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFwZUlkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVzcGFjZSArIFwiI1wiICsgc2hhcGVJZDtcbiAgICB9XG59XG4iLCAiZXhwb3J0ICogZnJvbSBcIi4vZGVyZWZcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21pZGRsZXdhcmUvZ2V0U2NoZW1hU2VyZGVQbHVnaW5cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NjaGVtYXMvTGlzdFNjaGVtYVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2NoZW1hcy9NYXBTY2hlbWFcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NjaGVtYXMvT3BlcmF0aW9uU2NoZW1hXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zY2hlbWFzL29wZXJhdGlvblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2NoZW1hcy9FcnJvclNjaGVtYVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2NoZW1hcy9Ob3JtYWxpemVkU2NoZW1hXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zY2hlbWFzL1NjaGVtYVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2NoZW1hcy9TaW1wbGVTY2hlbWFcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NjaGVtYXMvU3RydWN0dXJlU2NoZW1hXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zY2hlbWFzL3NlbnRpbmVsc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2NoZW1hcy90cmFuc2xhdGVUcmFpdHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1R5cGVSZWdpc3RyeVwiO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBleHRlbmRlZEVuY29kZVVSSUNvbXBvbmVudChzdHIpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gXCIlXCIgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG59XG4iLCAiaW1wb3J0IHsgZXh0ZW5kZWRFbmNvZGVVUklDb21wb25lbnQgfSBmcm9tIFwiLi9leHRlbmRlZC1lbmNvZGUtdXJpLWNvbXBvbmVudFwiO1xuZXhwb3J0IGNvbnN0IHJlc29sdmVkUGF0aCA9IChyZXNvbHZlZFBhdGgsIGlucHV0LCBtZW1iZXJOYW1lLCBsYWJlbFZhbHVlUHJvdmlkZXIsIHVyaUxhYmVsLCBpc0dyZWVkeUxhYmVsKSA9PiB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwgJiYgaW5wdXRbbWVtYmVyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBsYWJlbFZhbHVlID0gbGFiZWxWYWx1ZVByb3ZpZGVyKCk7XG4gICAgICAgIGlmIChsYWJlbFZhbHVlID09IG51bGwgfHwgbGFiZWxWYWx1ZS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgdmFsdWUgcHJvdmlkZWQgZm9yIGlucHV0IEhUVFAgbGFiZWw6IFwiICsgbWVtYmVyTmFtZSArIFwiLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZFBhdGggPSByZXNvbHZlZFBhdGgucmVwbGFjZSh1cmlMYWJlbCwgaXNHcmVlZHlMYWJlbFxuICAgICAgICAgICAgPyBsYWJlbFZhbHVlXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiL1wiKVxuICAgICAgICAgICAgICAgIC5tYXAoKHNlZ21lbnQpID0+IGV4dGVuZGVkRW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiL1wiKVxuICAgICAgICAgICAgOiBleHRlbmRlZEVuY29kZVVSSUNvbXBvbmVudChsYWJlbFZhbHVlKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB2YWx1ZSBwcm92aWRlZCBmb3IgaW5wdXQgSFRUUCBsYWJlbDogXCIgKyBtZW1iZXJOYW1lICsgXCIuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZWRQYXRoO1xufTtcbiIsICJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAc21pdGh5L3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7IHJlc29sdmVkUGF0aCB9IGZyb20gXCIuL3Jlc29sdmUtcGF0aFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RCdWlsZGVyKGlucHV0LCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0QnVpbGRlcihpbnB1dCwgY29udGV4dCk7XG59XG5leHBvcnQgY2xhc3MgUmVxdWVzdEJ1aWxkZXIge1xuICAgIGlucHV0O1xuICAgIGNvbnRleHQ7XG4gICAgcXVlcnkgPSB7fTtcbiAgICBtZXRob2QgPSBcIlwiO1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgICBwYXRoID0gXCJcIjtcbiAgICBib2R5ID0gbnVsbDtcbiAgICBob3N0bmFtZSA9IFwiXCI7XG4gICAgcmVzb2x2ZVBhdGhTdGFjayA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKGlucHV0LCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG4gICAgYXN5bmMgYnVpbGQoKSB7XG4gICAgICAgIGNvbnN0IHsgaG9zdG5hbWUsIHByb3RvY29sID0gXCJodHRwc1wiLCBwb3J0LCBwYXRoOiBiYXNlUGF0aCB9ID0gYXdhaXQgdGhpcy5jb250ZXh0LmVuZHBvaW50KCk7XG4gICAgICAgIHRoaXMucGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICBmb3IgKGNvbnN0IHJlc29sdmVQYXRoIG9mIHRoaXMucmVzb2x2ZVBhdGhTdGFjaykge1xuICAgICAgICAgICAgcmVzb2x2ZVBhdGgodGhpcy5wYXRoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXF1ZXN0KHtcbiAgICAgICAgICAgIHByb3RvY29sLFxuICAgICAgICAgICAgaG9zdG5hbWU6IHRoaXMuaG9zdG5hbWUgfHwgaG9zdG5hbWUsXG4gICAgICAgICAgICBwb3J0LFxuICAgICAgICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICAgICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgICAgICAgYm9keTogdGhpcy5ib2R5LFxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaG4oaG9zdG5hbWUpIHtcbiAgICAgICAgdGhpcy5ob3N0bmFtZSA9IGhvc3RuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYnAodXJpTGFiZWwpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlUGF0aFN0YWNrLnB1c2goKGJhc2VQYXRoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhdGggPSBgJHtiYXNlUGF0aD8uZW5kc1dpdGgoXCIvXCIpID8gYmFzZVBhdGguc2xpY2UoMCwgLTEpIDogYmFzZVBhdGggfHwgXCJcIn1gICsgdXJpTGFiZWw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcChtZW1iZXJOYW1lLCBsYWJlbFZhbHVlUHJvdmlkZXIsIHVyaUxhYmVsLCBpc0dyZWVkeUxhYmVsKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZVBhdGhTdGFjay5wdXNoKChwYXRoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhdGggPSByZXNvbHZlZFBhdGgocGF0aCwgdGhpcy5pbnB1dCwgbWVtYmVyTmFtZSwgbGFiZWxWYWx1ZVByb3ZpZGVyLCB1cmlMYWJlbCwgaXNHcmVlZHlMYWJlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaChoZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBxKHF1ZXJ5KSB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGIoYm9keSkge1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbShtZXRob2QpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZnJvbUJhc2U2NCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxfYnVmZmVyX2Zyb21fMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtYnVmZmVyLWZyb21cIik7XG5jb25zdCBCQVNFNjRfUkVHRVggPSAvXltBLVphLXowLTkrL10qPXswLDJ9JC87XG5jb25zdCBmcm9tQmFzZTY0ID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKChpbnB1dC5sZW5ndGggKiAzKSAlIDQgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW5jb3JyZWN0IHBhZGRpbmcgb24gYmFzZTY0IHN0cmluZy5gKTtcbiAgICB9XG4gICAgaWYgKCFCQVNFNjRfUkVHRVguZXhlYyhpbnB1dCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBiYXNlNjQgc3RyaW5nLmApO1xuICAgIH1cbiAgICBjb25zdCBidWZmZXIgPSAoMCwgdXRpbF9idWZmZXJfZnJvbV8xLmZyb21TdHJpbmcpKGlucHV0LCBcImJhc2U2NFwiKTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLmJ1ZmZlciwgYnVmZmVyLmJ5dGVPZmZzZXQsIGJ1ZmZlci5ieXRlTGVuZ3RoKTtcbn07XG5leHBvcnRzLmZyb21CYXNlNjQgPSBmcm9tQmFzZTY0O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50b0Jhc2U2NCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxfYnVmZmVyX2Zyb21fMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtYnVmZmVyLWZyb21cIik7XG5jb25zdCB1dGlsX3V0ZjhfMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtdXRmOFwiKTtcbmNvbnN0IHRvQmFzZTY0ID0gKF9pbnB1dCkgPT4ge1xuICAgIGxldCBpbnB1dDtcbiAgICBpZiAodHlwZW9mIF9pbnB1dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpbnB1dCA9ICgwLCB1dGlsX3V0ZjhfMS5mcm9tVXRmOCkoX2lucHV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlucHV0ID0gX2lucHV0O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBpbnB1dC5ieXRlT2Zmc2V0ICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBpbnB1dC5ieXRlTGVuZ3RoICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkBzbWl0aHkvdXRpbC1iYXNlNjQ6IHRvQmFzZTY0IGVuY29kZXIgZnVuY3Rpb24gb25seSBhY2NlcHRzIHN0cmluZyB8IFVpbnQ4QXJyYXkuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHV0aWxfYnVmZmVyX2Zyb21fMS5mcm9tQXJyYXlCdWZmZXIpKGlucHV0LmJ1ZmZlciwgaW5wdXQuYnl0ZU9mZnNldCwgaW5wdXQuYnl0ZUxlbmd0aCkudG9TdHJpbmcoXCJiYXNlNjRcIik7XG59O1xuZXhwb3J0cy50b0Jhc2U2NCA9IHRvQmFzZTY0O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGZyb21CYXNlNjQgPSByZXF1aXJlKCcuL2Zyb21CYXNlNjQnKTtcbnZhciB0b0Jhc2U2NCA9IHJlcXVpcmUoJy4vdG9CYXNlNjQnKTtcblxuXG5cbk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmcm9tQmFzZTY0LCAnX19wcm90b19fJykgJiZcblx0IU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCAnX19wcm90b19fJykgJiZcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX3Byb3RvX18nLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHR2YWx1ZTogZnJvbUJhc2U2NFsnX19wcm90b19fJ11cblx0fSk7XG5cbk9iamVjdC5rZXlzKGZyb21CYXNlNjQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIGspKSBleHBvcnRzW2tdID0gZnJvbUJhc2U2NFtrXTtcbn0pO1xuT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRvQmFzZTY0LCAnX19wcm90b19fJykgJiZcblx0IU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCAnX19wcm90b19fJykgJiZcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX3Byb3RvX18nLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHR2YWx1ZTogdG9CYXNlNjRbJ19fcHJvdG9fXyddXG5cdH0pO1xuXG5PYmplY3Qua2V5cyh0b0Jhc2U2NCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgaykpIGV4cG9ydHNba10gPSB0b0Jhc2U2NFtrXTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHByb3RvY29sSHR0cCA9IHJlcXVpcmUoJ0BzbWl0aHkvcHJvdG9jb2wtaHR0cCcpO1xudmFyIHF1ZXJ5c3RyaW5nQnVpbGRlciA9IHJlcXVpcmUoJ0BzbWl0aHkvcXVlcnlzdHJpbmctYnVpbGRlcicpO1xudmFyIHV0aWxCYXNlNjQgPSByZXF1aXJlKCdAc21pdGh5L3V0aWwtYmFzZTY0Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdFRpbWVvdXQodGltZW91dEluTXMgPSAwKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKHRpbWVvdXRJbk1zKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lb3V0RXJyb3IgPSBuZXcgRXJyb3IoYFJlcXVlc3QgZGlkIG5vdCBjb21wbGV0ZSB3aXRoaW4gJHt0aW1lb3V0SW5Nc30gbXNgKTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0RXJyb3IubmFtZSA9IFwiVGltZW91dEVycm9yXCI7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHRpbWVvdXRFcnJvcik7XG4gICAgICAgICAgICB9LCB0aW1lb3V0SW5Ncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuY29uc3Qga2VlcEFsaXZlU3VwcG9ydCA9IHtcbiAgICBzdXBwb3J0ZWQ6IHVuZGVmaW5lZCxcbn07XG5jbGFzcyBGZXRjaEh0dHBIYW5kbGVyIHtcbiAgICBjb25maWc7XG4gICAgY29uZmlnUHJvdmlkZXI7XG4gICAgc3RhdGljIGNyZWF0ZShpbnN0YW5jZU9yT3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlT3JPcHRpb25zPy5oYW5kbGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlT3JPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRmV0Y2hIdHRwSGFuZGxlcihpbnN0YW5jZU9yT3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnUHJvdmlkZXIgPSBvcHRpb25zKCkudGhlbigob3B0cykgPT4gb3B0cyB8fCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG9wdGlvbnMgPz8ge307XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1Byb3ZpZGVyID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2VlcEFsaXZlU3VwcG9ydC5zdXBwb3J0ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAga2VlcEFsaXZlU3VwcG9ydC5zdXBwb3J0ZWQgPSBCb29sZWFuKHR5cGVvZiBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFwia2VlcGFsaXZlXCIgaW4gY3JlYXRlUmVxdWVzdChcImh0dHBzOi8vWzo6MV1cIikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZShyZXF1ZXN0LCB7IGFib3J0U2lnbmFsLCByZXF1ZXN0VGltZW91dDogcmVxdWVzdFRpbWVvdXQkMSB9ID0ge30pIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBhd2FpdCB0aGlzLmNvbmZpZ1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcXVlc3RUaW1lb3V0SW5NcyA9IHJlcXVlc3RUaW1lb3V0JDEgPz8gdGhpcy5jb25maWcucmVxdWVzdFRpbWVvdXQ7XG4gICAgICAgIGNvbnN0IGtlZXBBbGl2ZSA9IHRoaXMuY29uZmlnLmtlZXBBbGl2ZSA9PT0gdHJ1ZTtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSB0aGlzLmNvbmZpZy5jcmVkZW50aWFscztcbiAgICAgICAgaWYgKGFib3J0U2lnbmFsPy5hYm9ydGVkKSB7XG4gICAgICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gYnVpbGRBYm9ydEVycm9yKGFib3J0U2lnbmFsKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGF0aCA9IHJlcXVlc3QucGF0aDtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeXN0cmluZ0J1aWxkZXIuYnVpbGRRdWVyeVN0cmluZyhyZXF1ZXN0LnF1ZXJ5IHx8IHt9KTtcbiAgICAgICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgICAgICBwYXRoICs9IGA/JHtxdWVyeVN0cmluZ31gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXF1ZXN0LmZyYWdtZW50KSB7XG4gICAgICAgICAgICBwYXRoICs9IGAjJHtyZXF1ZXN0LmZyYWdtZW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGF1dGggPSBcIlwiO1xuICAgICAgICBpZiAocmVxdWVzdC51c2VybmFtZSAhPSBudWxsIHx8IHJlcXVlc3QucGFzc3dvcmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSByZXF1ZXN0LnVzZXJuYW1lID8/IFwiXCI7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IHJlcXVlc3QucGFzc3dvcmQgPz8gXCJcIjtcbiAgICAgICAgICAgIGF1dGggPSBgJHt1c2VybmFtZX06JHtwYXNzd29yZH1AYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHBvcnQsIG1ldGhvZCB9ID0gcmVxdWVzdDtcbiAgICAgICAgY29uc3QgdXJsID0gYCR7cmVxdWVzdC5wcm90b2NvbH0vLyR7YXV0aH0ke3JlcXVlc3QuaG9zdG5hbWV9JHtwb3J0ID8gYDoke3BvcnR9YCA6IFwiXCJ9JHtwYXRofWA7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBtZXRob2QgPT09IFwiR0VUXCIgfHwgbWV0aG9kID09PSBcIkhFQURcIiA/IHVuZGVmaW5lZCA6IHJlcXVlc3QuYm9keTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMocmVxdWVzdC5oZWFkZXJzKSxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgY3JlZGVudGlhbHMsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZz8uY2FjaGUpIHtcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLmNhY2hlID0gdGhpcy5jb25maWcuY2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLmR1cGxleCA9IFwiaGFsZlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgQWJvcnRDb250cm9sbGVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5zaWduYWwgPSBhYm9ydFNpZ25hbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2VlcEFsaXZlU3VwcG9ydC5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLmtlZXBhbGl2ZSA9IGtlZXBBbGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLnJlcXVlc3RJbml0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVxdWVzdE9wdGlvbnMsIHRoaXMuY29uZmlnLnJlcXVlc3RJbml0KHJlcXVlc3QpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVtb3ZlU2lnbmFsRXZlbnRMaXN0ZW5lciA9ICgpID0+IHsgfTtcbiAgICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgY29uc3QgcmFjZU9mUHJvbWlzZXMgPSBbXG4gICAgICAgICAgICBmZXRjaChmZXRjaFJlcXVlc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmV0Y2hIZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZEhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgZmV0Y2hIZWFkZXJzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZEhlYWRlcnNbcGFpclswXV0gPSBwYWlyWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBoYXNSZWFkYWJsZVN0cmVhbSA9IHJlc3BvbnNlLmJvZHkgIT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGlmICghaGFzUmVhZGFibGVTdHJlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKS50aGVuKChib2R5KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IG5ldyBwcm90b2NvbEh0dHAuSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB0cmFuc2Zvcm1lZEhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uOiByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IG5ldyBwcm90b2NvbEh0dHAuSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRyYW5zZm9ybWVkSGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbjogcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IHJlc3BvbnNlLmJvZHksXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJlcXVlc3RUaW1lb3V0KHJlcXVlc3RUaW1lb3V0SW5NcyksXG4gICAgICAgIF07XG4gICAgICAgIGlmIChhYm9ydFNpZ25hbCkge1xuICAgICAgICAgICAgcmFjZU9mUHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb25BYm9ydCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWJvcnRFcnJvciA9IGJ1aWxkQWJvcnRFcnJvcihhYm9ydFNpZ25hbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChhYm9ydEVycm9yKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWJvcnRTaWduYWwuYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25hbCA9IGFib3J0U2lnbmFsO1xuICAgICAgICAgICAgICAgICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2lnbmFsRXZlbnRMaXN0ZW5lciA9ICgpID0+IHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhYm9ydFNpZ25hbC5vbmFib3J0ID0gb25BYm9ydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmFjZShyYWNlT2ZQcm9taXNlcykuZmluYWxseShyZW1vdmVTaWduYWxFdmVudExpc3RlbmVyKTtcbiAgICB9XG4gICAgdXBkYXRlSHR0cENsaWVudENvbmZpZyhrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNvbmZpZ1Byb3ZpZGVyID0gdGhpcy5jb25maWdQcm92aWRlci50aGVuKChjb25maWcpID0+IHtcbiAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaHR0cEhhbmRsZXJDb25maWdzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcgPz8ge307XG4gICAgfVxufVxuZnVuY3Rpb24gYnVpbGRBYm9ydEVycm9yKGFib3J0U2lnbmFsKSB7XG4gICAgY29uc3QgcmVhc29uID0gYWJvcnRTaWduYWwgJiYgdHlwZW9mIGFib3J0U2lnbmFsID09PSBcIm9iamVjdFwiICYmIFwicmVhc29uXCIgaW4gYWJvcnRTaWduYWxcbiAgICAgICAgPyBhYm9ydFNpZ25hbC5yZWFzb25cbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgaWYgKHJlYXNvbikge1xuICAgICAgICBpZiAocmVhc29uIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIik7XG4gICAgICAgICAgICBhYm9ydEVycm9yLm5hbWUgPSBcIkFib3J0RXJyb3JcIjtcbiAgICAgICAgICAgIGFib3J0RXJyb3IuY2F1c2UgPSByZWFzb247XG4gICAgICAgICAgICByZXR1cm4gYWJvcnRFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gbmV3IEVycm9yKFN0cmluZyhyZWFzb24pKTtcbiAgICAgICAgYWJvcnRFcnJvci5uYW1lID0gXCJBYm9ydEVycm9yXCI7XG4gICAgICAgIHJldHVybiBhYm9ydEVycm9yO1xuICAgIH1cbiAgICBjb25zdCBhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIpO1xuICAgIGFib3J0RXJyb3IubmFtZSA9IFwiQWJvcnRFcnJvclwiO1xuICAgIHJldHVybiBhYm9ydEVycm9yO1xufVxuXG5jb25zdCBzdHJlYW1Db2xsZWN0b3IgPSBhc3luYyAoc3RyZWFtKSA9PiB7XG4gICAgaWYgKCh0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmIHN0cmVhbSBpbnN0YW5jZW9mIEJsb2IpIHx8IHN0cmVhbS5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gXCJCbG9iXCIpIHtcbiAgICAgICAgaWYgKEJsb2IucHJvdG90eXBlLmFycmF5QnVmZmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShhd2FpdCBzdHJlYW0uYXJyYXlCdWZmZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxlY3RCbG9iKHN0cmVhbSk7XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0U3RyZWFtKHN0cmVhbSk7XG59O1xuYXN5bmMgZnVuY3Rpb24gY29sbGVjdEJsb2IoYmxvYikge1xuICAgIGNvbnN0IGJhc2U2NCA9IGF3YWl0IHJlYWRUb0Jhc2U2NChibG9iKTtcbiAgICBjb25zdCBhcnJheUJ1ZmZlciA9IHV0aWxCYXNlNjQuZnJvbUJhc2U2NChiYXNlNjQpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG59XG5hc3luYyBmdW5jdGlvbiBjb2xsZWN0U3RyZWFtKHN0cmVhbSkge1xuICAgIGNvbnN0IGNodW5rcyA9IFtdO1xuICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgICBsZXQgaXNEb25lID0gZmFsc2U7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgd2hpbGUgKCFpc0RvbmUpIHtcbiAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBjaHVua3MucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICBsZW5ndGggKz0gdmFsdWUubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlzRG9uZSA9IGRvbmU7XG4gICAgfVxuICAgIGNvbnN0IGNvbGxlY3RlZCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgZm9yIChjb25zdCBjaHVuayBvZiBjaHVua3MpIHtcbiAgICAgICAgY29sbGVjdGVkLnNldChjaHVuaywgb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IGNodW5rLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbGxlY3RlZDtcbn1cbmZ1bmN0aW9uIHJlYWRUb0Jhc2U2NChibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChyZWFkZXIucmVhZHlTdGF0ZSAhPT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKFwiUmVhZGVyIGFib3J0ZWQgdG9vIGVhcmx5XCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IChyZWFkZXIucmVzdWx0ID8/IFwiXCIpO1xuICAgICAgICAgICAgY29uc3QgY29tbWFJbmRleCA9IHJlc3VsdC5pbmRleE9mKFwiLFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFPZmZzZXQgPSBjb21tYUluZGV4ID4gLTEgPyBjb21tYUluZGV4ICsgMSA6IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5zdWJzdHJpbmcoZGF0YU9mZnNldCkpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIub25hYm9ydCA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJSZWFkIGFib3J0ZWRcIikpO1xuICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHJlamVjdChyZWFkZXIuZXJyb3IpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0cy5GZXRjaEh0dHBIYW5kbGVyID0gRmV0Y2hIdHRwSGFuZGxlcjtcbmV4cG9ydHMua2VlcEFsaXZlU3VwcG9ydCA9IGtlZXBBbGl2ZVN1cHBvcnQ7XG5leHBvcnRzLnN0cmVhbUNvbGxlY3RvciA9IHN0cmVhbUNvbGxlY3RvcjtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNIT1JUX1RPX0hFWCA9IHt9O1xuY29uc3QgSEVYX1RPX1NIT1JUID0ge307XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgbGV0IGVuY29kZWRCeXRlID0gaS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoZW5jb2RlZEJ5dGUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGVuY29kZWRCeXRlID0gYDAke2VuY29kZWRCeXRlfWA7XG4gICAgfVxuICAgIFNIT1JUX1RPX0hFWFtpXSA9IGVuY29kZWRCeXRlO1xuICAgIEhFWF9UT19TSE9SVFtlbmNvZGVkQnl0ZV0gPSBpO1xufVxuZnVuY3Rpb24gZnJvbUhleChlbmNvZGVkKSB7XG4gICAgaWYgKGVuY29kZWQubGVuZ3RoICUgMiAhPT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZXggZW5jb2RlZCBzdHJpbmdzIG11c3QgaGF2ZSBhbiBldmVuIG51bWJlciBsZW5ndGhcIik7XG4gICAgfVxuICAgIGNvbnN0IG91dCA9IG5ldyBVaW50OEFycmF5KGVuY29kZWQubGVuZ3RoIC8gMik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIGNvbnN0IGVuY29kZWRCeXRlID0gZW5jb2RlZC5zbGljZShpLCBpICsgMikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGVuY29kZWRCeXRlIGluIEhFWF9UT19TSE9SVCkge1xuICAgICAgICAgICAgb3V0W2kgLyAyXSA9IEhFWF9UT19TSE9SVFtlbmNvZGVkQnl0ZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkZWNvZGUgdW5yZWNvZ25pemVkIHNlcXVlbmNlICR7ZW5jb2RlZEJ5dGV9IGFzIGhleGFkZWNpbWFsYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cbmZ1bmN0aW9uIHRvSGV4KGJ5dGVzKSB7XG4gICAgbGV0IG91dCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3V0ICs9IFNIT1JUX1RPX0hFWFtieXRlc1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydHMuZnJvbUhleCA9IGZyb21IZXg7XG5leHBvcnRzLnRvSGV4ID0gdG9IZXg7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJhbmRvbVVVSUQgPSB2b2lkIDA7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgY3J5cHRvXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY3J5cHRvXCIpKTtcbmV4cG9ydHMucmFuZG9tVVVJRCA9IGNyeXB0b18xLmRlZmF1bHQucmFuZG9tVVVJRC5iaW5kKGNyeXB0b18xLmRlZmF1bHQpO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbVVVSUQgPSByZXF1aXJlKCcuL3JhbmRvbVVVSUQnKTtcblxuY29uc3QgZGVjaW1hbFRvSGV4ID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMjU2IH0sIChfLCBpKSA9PiBpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIikpO1xuY29uc3QgdjQgPSAoKSA9PiB7XG4gICAgaWYgKHJhbmRvbVVVSUQucmFuZG9tVVVJRCkge1xuICAgICAgICByZXR1cm4gcmFuZG9tVVVJRC5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIGNvbnN0IHJuZHMgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhybmRzKTtcbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIHJldHVybiAoZGVjaW1hbFRvSGV4W3JuZHNbMF1dICtcbiAgICAgICAgZGVjaW1hbFRvSGV4W3JuZHNbMV1dICtcbiAgICAgICAgZGVjaW1hbFRvSGV4W3JuZHNbMl1dICtcbiAgICAgICAgZGVjaW1hbFRvSGV4W3JuZHNbM11dICtcbiAgICAgICAgXCItXCIgK1xuICAgICAgICBkZWNpbWFsVG9IZXhbcm5kc1s0XV0gK1xuICAgICAgICBkZWNpbWFsVG9IZXhbcm5kc1s1XV0gK1xuICAgICAgICBcIi1cIiArXG4gICAgICAgIGRlY2ltYWxUb0hleFtybmRzWzZdXSArXG4gICAgICAgIGRlY2ltYWxUb0hleFtybmRzWzddXSArXG4gICAgICAgIFwiLVwiICtcbiAgICAgICAgZGVjaW1hbFRvSGV4W3JuZHNbOF1dICtcbiAgICAgICAgZGVjaW1hbFRvSGV4W3JuZHNbOV1dICtcbiAgICAgICAgXCItXCIgK1xuICAgICAgICBkZWNpbWFsVG9IZXhbcm5kc1sxMF1dICtcbiAgICAgICAgZGVjaW1hbFRvSGV4W3JuZHNbMTFdXSArXG4gICAgICAgIGRlY2ltYWxUb0hleFtybmRzWzEyXV0gK1xuICAgICAgICBkZWNpbWFsVG9IZXhbcm5kc1sxM11dICtcbiAgICAgICAgZGVjaW1hbFRvSGV4W3JuZHNbMTRdXSArXG4gICAgICAgIGRlY2ltYWxUb0hleFtybmRzWzE1XV0pO1xufTtcblxuZXhwb3J0cy52NCA9IHY0O1xuIiwgImV4cG9ydCBjb25zdCBjb3B5RG9jdW1lbnRXaXRoVHJhbnNmb3JtID0gKHNvdXJjZSwgc2NoZW1hUmVmLCB0cmFuc2Zvcm0gPSAoXykgPT4gXykgPT4gc291cmNlO1xuIiwgImV4cG9ydCBjb25zdCBwYXJzZUJvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgIGNhc2UgXCJ0cnVlXCI6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBcImZhbHNlXCI6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBwYXJzZSBib29sZWFuIHZhbHVlIFwiJHt2YWx1ZX1cImApO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgZXhwZWN0Qm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwIHx8IHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybihzdGFja1RyYWNlV2FybmluZyhgRXhwZWN0ZWQgYm9vbGVhbiwgZ290ICR7dHlwZW9mIHZhbHVlfTogJHt2YWx1ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGxvd2VyID09PSBcImZhbHNlXCIgfHwgbG93ZXIgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybihzdGFja1RyYWNlV2FybmluZyhgRXhwZWN0ZWQgYm9vbGVhbiwgZ290ICR7dHlwZW9mIHZhbHVlfTogJHt2YWx1ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvd2VyID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG93ZXIgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGJvb2xlYW4sIGdvdCAke3R5cGVvZiB2YWx1ZX06ICR7dmFsdWV9YCk7XG59O1xuZXhwb3J0IGNvbnN0IGV4cGVjdE51bWJlciA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZCkpIHtcbiAgICAgICAgICAgIGlmIChTdHJpbmcocGFyc2VkKSAhPT0gU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKHN0YWNrVHJhY2VXYXJuaW5nKGBFeHBlY3RlZCBudW1iZXIgYnV0IG9ic2VydmVkIHN0cmluZzogJHt2YWx1ZX1gKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBudW1iZXIsIGdvdCAke3R5cGVvZiB2YWx1ZX06ICR7dmFsdWV9YCk7XG59O1xuY29uc3QgTUFYX0ZMT0FUID0gTWF0aC5jZWlsKDIgKiogMTI3ICogKDIgLSAyICoqIC0yMykpO1xuZXhwb3J0IGNvbnN0IGV4cGVjdEZsb2F0MzIgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBleHBlY3RlZCA9IGV4cGVjdE51bWJlcih2YWx1ZSk7XG4gICAgaWYgKGV4cGVjdGVkICE9PSB1bmRlZmluZWQgJiYgIU51bWJlci5pc05hTihleHBlY3RlZCkgJiYgZXhwZWN0ZWQgIT09IEluZmluaXR5ICYmIGV4cGVjdGVkICE9PSAtSW5maW5pdHkpIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGV4cGVjdGVkKSA+IE1BWF9GTE9BVCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgMzItYml0IGZsb2F0LCBnb3QgJHt2YWx1ZX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXhwZWN0ZWQ7XG59O1xuZXhwb3J0IGNvbnN0IGV4cGVjdExvbmcgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgJiYgIU51bWJlci5pc05hTih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBpbnRlZ2VyLCBnb3QgJHt0eXBlb2YgdmFsdWV9OiAke3ZhbHVlfWApO1xufTtcbmV4cG9ydCBjb25zdCBleHBlY3RJbnQgPSBleHBlY3RMb25nO1xuZXhwb3J0IGNvbnN0IGV4cGVjdEludDMyID0gKHZhbHVlKSA9PiBleHBlY3RTaXplZEludCh2YWx1ZSwgMzIpO1xuZXhwb3J0IGNvbnN0IGV4cGVjdFNob3J0ID0gKHZhbHVlKSA9PiBleHBlY3RTaXplZEludCh2YWx1ZSwgMTYpO1xuZXhwb3J0IGNvbnN0IGV4cGVjdEJ5dGUgPSAodmFsdWUpID0+IGV4cGVjdFNpemVkSW50KHZhbHVlLCA4KTtcbmNvbnN0IGV4cGVjdFNpemVkSW50ID0gKHZhbHVlLCBzaXplKSA9PiB7XG4gICAgY29uc3QgZXhwZWN0ZWQgPSBleHBlY3RMb25nKHZhbHVlKTtcbiAgICBpZiAoZXhwZWN0ZWQgIT09IHVuZGVmaW5lZCAmJiBjYXN0SW50KGV4cGVjdGVkLCBzaXplKSAhPT0gZXhwZWN0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgJHtzaXplfS1iaXQgaW50ZWdlciwgZ290ICR7dmFsdWV9YCk7XG4gICAgfVxuICAgIHJldHVybiBleHBlY3RlZDtcbn07XG5jb25zdCBjYXN0SW50ID0gKHZhbHVlLCBzaXplKSA9PiB7XG4gICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICByZXR1cm4gSW50MzJBcnJheS5vZih2YWx1ZSlbMF07XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICByZXR1cm4gSW50MTZBcnJheS5vZih2YWx1ZSlbMF07XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIHJldHVybiBJbnQ4QXJyYXkub2YodmFsdWUpWzBdO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgZXhwZWN0Tm9uTnVsbCA9ICh2YWx1ZSwgbG9jYXRpb24pID0+IHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgbm9uLW51bGwgdmFsdWUgZm9yICR7bG9jYXRpb259YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgbm9uLW51bGwgdmFsdWVcIik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5leHBvcnQgY29uc3QgZXhwZWN0T2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCByZWNlaXZlZFR5cGUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IFwiYXJyYXlcIiA6IHR5cGVvZiB2YWx1ZTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBvYmplY3QsIGdvdCAke3JlY2VpdmVkVHlwZX06ICR7dmFsdWV9YCk7XG59O1xuZXhwb3J0IGNvbnN0IGV4cGVjdFN0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoW1wiYm9vbGVhblwiLCBcIm51bWJlclwiLCBcImJpZ2ludFwiXS5pbmNsdWRlcyh0eXBlb2YgdmFsdWUpKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKHN0YWNrVHJhY2VXYXJuaW5nKGBFeHBlY3RlZCBzdHJpbmcsIGdvdCAke3R5cGVvZiB2YWx1ZX06ICR7dmFsdWV9YCkpO1xuICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgc3RyaW5nLCBnb3QgJHt0eXBlb2YgdmFsdWV9OiAke3ZhbHVlfWApO1xufTtcbmV4cG9ydCBjb25zdCBleHBlY3RVbmlvbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IGFzT2JqZWN0ID0gZXhwZWN0T2JqZWN0KHZhbHVlKTtcbiAgICBjb25zdCBzZXRLZXlzID0gT2JqZWN0LmVudHJpZXMoYXNPYmplY3QpXG4gICAgICAgIC5maWx0ZXIoKFssIHZdKSA9PiB2ICE9IG51bGwpXG4gICAgICAgIC5tYXAoKFtrXSkgPT4gayk7XG4gICAgaWYgKHNldEtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFVuaW9ucyBtdXN0IGhhdmUgZXhhY3RseSBvbmUgbm9uLW51bGwgbWVtYmVyLiBOb25lIHdlcmUgZm91bmQuYCk7XG4gICAgfVxuICAgIGlmIChzZXRLZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVW5pb25zIG11c3QgaGF2ZSBleGFjdGx5IG9uZSBub24tbnVsbCBtZW1iZXIuIEtleXMgJHtzZXRLZXlzfSB3ZXJlIG5vdCBudWxsLmApO1xuICAgIH1cbiAgICByZXR1cm4gYXNPYmplY3Q7XG59O1xuZXhwb3J0IGNvbnN0IHN0cmljdFBhcnNlRG91YmxlID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBleHBlY3ROdW1iZXIocGFyc2VOdW1iZXIodmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGVjdE51bWJlcih2YWx1ZSk7XG59O1xuZXhwb3J0IGNvbnN0IHN0cmljdFBhcnNlRmxvYXQgPSBzdHJpY3RQYXJzZURvdWJsZTtcbmV4cG9ydCBjb25zdCBzdHJpY3RQYXJzZUZsb2F0MzIgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGV4cGVjdEZsb2F0MzIocGFyc2VOdW1iZXIodmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGVjdEZsb2F0MzIodmFsdWUpO1xufTtcbmNvbnN0IE5VTUJFUl9SRUdFWCA9IC8oLT8oPzowfFsxLTldXFxkKikoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8pfCgtP0luZmluaXR5KXwoTmFOKS9nO1xuY29uc3QgcGFyc2VOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gdmFsdWUubWF0Y2goTlVNQkVSX1JFR0VYKTtcbiAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCB8fCBtYXRjaGVzWzBdLmxlbmd0aCAhPT0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIHJlYWwgbnVtYmVyLCBnb3QgaW1wbGljaXQgTmFOYCk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbn07XG5leHBvcnQgY29uc3QgbGltaXRlZFBhcnNlRG91YmxlID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0U3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGVjdE51bWJlcih2YWx1ZSk7XG59O1xuZXhwb3J0IGNvbnN0IGhhbmRsZUZsb2F0ID0gbGltaXRlZFBhcnNlRG91YmxlO1xuZXhwb3J0IGNvbnN0IGxpbWl0ZWRQYXJzZUZsb2F0ID0gbGltaXRlZFBhcnNlRG91YmxlO1xuZXhwb3J0IGNvbnN0IGxpbWl0ZWRQYXJzZUZsb2F0MzIgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXRTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZXhwZWN0RmxvYXQzMih2YWx1ZSk7XG59O1xuY29uc3QgcGFyc2VGbG9hdFN0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgY2FzZSBcIk5hTlwiOlxuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgY2FzZSBcIkluZmluaXR5XCI6XG4gICAgICAgICAgICByZXR1cm4gSW5maW5pdHk7XG4gICAgICAgIGNhc2UgXCItSW5maW5pdHlcIjpcbiAgICAgICAgICAgIHJldHVybiAtSW5maW5pdHk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBwYXJzZSBmbG9hdCB2YWx1ZTogJHt2YWx1ZX1gKTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IHN0cmljdFBhcnNlTG9uZyA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGV4cGVjdExvbmcocGFyc2VOdW1iZXIodmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGVjdExvbmcodmFsdWUpO1xufTtcbmV4cG9ydCBjb25zdCBzdHJpY3RQYXJzZUludCA9IHN0cmljdFBhcnNlTG9uZztcbmV4cG9ydCBjb25zdCBzdHJpY3RQYXJzZUludDMyID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZXhwZWN0SW50MzIocGFyc2VOdW1iZXIodmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGVjdEludDMyKHZhbHVlKTtcbn07XG5leHBvcnQgY29uc3Qgc3RyaWN0UGFyc2VTaG9ydCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGV4cGVjdFNob3J0KHBhcnNlTnVtYmVyKHZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiBleHBlY3RTaG9ydCh2YWx1ZSk7XG59O1xuZXhwb3J0IGNvbnN0IHN0cmljdFBhcnNlQnl0ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGV4cGVjdEJ5dGUocGFyc2VOdW1iZXIodmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGVjdEJ5dGUodmFsdWUpO1xufTtcbmNvbnN0IHN0YWNrVHJhY2VXYXJuaW5nID0gKG1lc3NhZ2UpID0+IHtcbiAgICByZXR1cm4gU3RyaW5nKG5ldyBUeXBlRXJyb3IobWVzc2FnZSkuc3RhY2sgfHwgbWVzc2FnZSlcbiAgICAgICAgLnNwbGl0KFwiXFxuXCIpXG4gICAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgICAuZmlsdGVyKChzKSA9PiAhcy5pbmNsdWRlcyhcInN0YWNrVHJhY2VXYXJuaW5nXCIpKVxuICAgICAgICAuam9pbihcIlxcblwiKTtcbn07XG5leHBvcnQgY29uc3QgbG9nZ2VyID0ge1xuICAgIHdhcm46IGNvbnNvbGUud2Fybixcbn07XG4iLCAiaW1wb3J0IHsgc3RyaWN0UGFyc2VCeXRlLCBzdHJpY3RQYXJzZURvdWJsZSwgc3RyaWN0UGFyc2VGbG9hdDMyLCBzdHJpY3RQYXJzZVNob3J0IH0gZnJvbSBcIi4vcGFyc2UtdXRpbHNcIjtcbmNvbnN0IERBWVMgPSBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl07XG5jb25zdCBNT05USFMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XG5leHBvcnQgZnVuY3Rpb24gZGF0ZVRvVXRjU3RyaW5nKGRhdGUpIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgY29uc3QgZGF5T2ZNb250aEludCA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgIGNvbnN0IGhvdXJzSW50ID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZXNJbnQgPSBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcbiAgICBjb25zdCBzZWNvbmRzSW50ID0gZGF0ZS5nZXRVVENTZWNvbmRzKCk7XG4gICAgY29uc3QgZGF5T2ZNb250aFN0cmluZyA9IGRheU9mTW9udGhJbnQgPCAxMCA/IGAwJHtkYXlPZk1vbnRoSW50fWAgOiBgJHtkYXlPZk1vbnRoSW50fWA7XG4gICAgY29uc3QgaG91cnNTdHJpbmcgPSBob3Vyc0ludCA8IDEwID8gYDAke2hvdXJzSW50fWAgOiBgJHtob3Vyc0ludH1gO1xuICAgIGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBtaW51dGVzSW50IDwgMTAgPyBgMCR7bWludXRlc0ludH1gIDogYCR7bWludXRlc0ludH1gO1xuICAgIGNvbnN0IHNlY29uZHNTdHJpbmcgPSBzZWNvbmRzSW50IDwgMTAgPyBgMCR7c2Vjb25kc0ludH1gIDogYCR7c2Vjb25kc0ludH1gO1xuICAgIHJldHVybiBgJHtEQVlTW2RheU9mV2Vla119LCAke2RheU9mTW9udGhTdHJpbmd9ICR7TU9OVEhTW21vbnRoXX0gJHt5ZWFyfSAke2hvdXJzU3RyaW5nfToke21pbnV0ZXNTdHJpbmd9OiR7c2Vjb25kc1N0cmluZ30gR01UYDtcbn1cbmNvbnN0IFJGQzMzMzkgPSBuZXcgUmVnRXhwKC9eKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSlbdFRdKFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSkoPzpcXC4oXFxkKykpP1t6Wl0kLyk7XG5leHBvcnQgY29uc3QgcGFyc2VSZmMzMzM5RGF0ZVRpbWUgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSRkMtMzMzOSBkYXRlLXRpbWVzIG11c3QgYmUgZXhwcmVzc2VkIGFzIHN0cmluZ3NcIik7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoID0gUkZDMzMzOS5leGVjKHZhbHVlKTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIFJGQy0zMzM5IGRhdGUtdGltZSB2YWx1ZVwiKTtcbiAgICB9XG4gICAgY29uc3QgW18sIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBmcmFjdGlvbmFsTWlsbGlzZWNvbmRzXSA9IG1hdGNoO1xuICAgIGNvbnN0IHllYXIgPSBzdHJpY3RQYXJzZVNob3J0KHN0cmlwTGVhZGluZ1plcm9lcyh5ZWFyU3RyKSk7XG4gICAgY29uc3QgbW9udGggPSBwYXJzZURhdGVWYWx1ZShtb250aFN0ciwgXCJtb250aFwiLCAxLCAxMik7XG4gICAgY29uc3QgZGF5ID0gcGFyc2VEYXRlVmFsdWUoZGF5U3RyLCBcImRheVwiLCAxLCAzMSk7XG4gICAgcmV0dXJuIGJ1aWxkRGF0ZSh5ZWFyLCBtb250aCwgZGF5LCB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBmcmFjdGlvbmFsTWlsbGlzZWNvbmRzIH0pO1xufTtcbmNvbnN0IFJGQzMzMzlfV0lUSF9PRkZTRVQgPSBuZXcgUmVnRXhwKC9eKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSlbdFRdKFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSkoPzpcXC4oXFxkKykpPygoWy0rXVxcZHsyfVxcOlxcZHsyfSl8W3paXSkkLyk7XG5leHBvcnQgY29uc3QgcGFyc2VSZmMzMzM5RGF0ZVRpbWVXaXRoT2Zmc2V0ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUkZDLTMzMzkgZGF0ZS10aW1lcyBtdXN0IGJlIGV4cHJlc3NlZCBhcyBzdHJpbmdzXCIpO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaCA9IFJGQzMzMzlfV0lUSF9PRkZTRVQuZXhlYyh2YWx1ZSk7XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBSRkMtMzMzOSBkYXRlLXRpbWUgdmFsdWVcIik7XG4gICAgfVxuICAgIGNvbnN0IFtfLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VycywgbWludXRlcywgc2Vjb25kcywgZnJhY3Rpb25hbE1pbGxpc2Vjb25kcywgb2Zmc2V0U3RyXSA9IG1hdGNoO1xuICAgIGNvbnN0IHllYXIgPSBzdHJpY3RQYXJzZVNob3J0KHN0cmlwTGVhZGluZ1plcm9lcyh5ZWFyU3RyKSk7XG4gICAgY29uc3QgbW9udGggPSBwYXJzZURhdGVWYWx1ZShtb250aFN0ciwgXCJtb250aFwiLCAxLCAxMik7XG4gICAgY29uc3QgZGF5ID0gcGFyc2VEYXRlVmFsdWUoZGF5U3RyLCBcImRheVwiLCAxLCAzMSk7XG4gICAgY29uc3QgZGF0ZSA9IGJ1aWxkRGF0ZSh5ZWFyLCBtb250aCwgZGF5LCB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBmcmFjdGlvbmFsTWlsbGlzZWNvbmRzIH0pO1xuICAgIGlmIChvZmZzZXRTdHIudG9VcHBlckNhc2UoKSAhPSBcIlpcIikge1xuICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgLSBwYXJzZU9mZnNldFRvTWlsbGlzZWNvbmRzKG9mZnNldFN0cikpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZTtcbn07XG5jb25zdCBJTUZfRklYREFURSA9IG5ldyBSZWdFeHAoL14oPzpNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLCAoXFxkezJ9KSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpIChcXGR7NH0pIChcXGR7MSwyfSk6KFxcZHsyfSk6KFxcZHsyfSkoPzpcXC4oXFxkKykpPyBHTVQkLyk7XG5jb25zdCBSRkNfODUwX0RBVEUgPSBuZXcgUmVnRXhwKC9eKD86TW9uZGF5fFR1ZXNkYXl8V2VkbmVzZGF5fFRodXJzZGF5fEZyaWRheXxTYXR1cmRheXxTdW5kYXkpLCAoXFxkezJ9KS0oSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpLShcXGR7Mn0pIChcXGR7MSwyfSk6KFxcZHsyfSk6KFxcZHsyfSkoPzpcXC4oXFxkKykpPyBHTVQkLyk7XG5jb25zdCBBU0NfVElNRSA9IG5ldyBSZWdFeHAoL14oPzpNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKCBbMS05XXxcXGR7Mn0pIChcXGR7MSwyfSk6KFxcZHsyfSk6KFxcZHsyfSkoPzpcXC4oXFxkKykpPyAoXFxkezR9KSQvKTtcbmV4cG9ydCBjb25zdCBwYXJzZVJmYzcyMzFEYXRlVGltZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlJGQy03MjMxIGRhdGUtdGltZXMgbXVzdCBiZSBleHByZXNzZWQgYXMgc3RyaW5nc1wiKTtcbiAgICB9XG4gICAgbGV0IG1hdGNoID0gSU1GX0ZJWERBVEUuZXhlYyh2YWx1ZSk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IFtfLCBkYXlTdHIsIG1vbnRoU3RyLCB5ZWFyU3RyLCBob3VycywgbWludXRlcywgc2Vjb25kcywgZnJhY3Rpb25hbE1pbGxpc2Vjb25kc10gPSBtYXRjaDtcbiAgICAgICAgcmV0dXJuIGJ1aWxkRGF0ZShzdHJpY3RQYXJzZVNob3J0KHN0cmlwTGVhZGluZ1plcm9lcyh5ZWFyU3RyKSksIHBhcnNlTW9udGhCeVNob3J0TmFtZShtb250aFN0ciksIHBhcnNlRGF0ZVZhbHVlKGRheVN0ciwgXCJkYXlcIiwgMSwgMzEpLCB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBmcmFjdGlvbmFsTWlsbGlzZWNvbmRzIH0pO1xuICAgIH1cbiAgICBtYXRjaCA9IFJGQ184NTBfREFURS5leGVjKHZhbHVlKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgW18sIGRheVN0ciwgbW9udGhTdHIsIHllYXJTdHIsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBmcmFjdGlvbmFsTWlsbGlzZWNvbmRzXSA9IG1hdGNoO1xuICAgICAgICByZXR1cm4gYWRqdXN0UmZjODUwWWVhcihidWlsZERhdGUocGFyc2VUd29EaWdpdFllYXIoeWVhclN0ciksIHBhcnNlTW9udGhCeVNob3J0TmFtZShtb250aFN0ciksIHBhcnNlRGF0ZVZhbHVlKGRheVN0ciwgXCJkYXlcIiwgMSwgMzEpLCB7XG4gICAgICAgICAgICBob3VycyxcbiAgICAgICAgICAgIG1pbnV0ZXMsXG4gICAgICAgICAgICBzZWNvbmRzLFxuICAgICAgICAgICAgZnJhY3Rpb25hbE1pbGxpc2Vjb25kcyxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBtYXRjaCA9IEFTQ19USU1FLmV4ZWModmFsdWUpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICBjb25zdCBbXywgbW9udGhTdHIsIGRheVN0ciwgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGZyYWN0aW9uYWxNaWxsaXNlY29uZHMsIHllYXJTdHJdID0gbWF0Y2g7XG4gICAgICAgIHJldHVybiBidWlsZERhdGUoc3RyaWN0UGFyc2VTaG9ydChzdHJpcExlYWRpbmdaZXJvZXMoeWVhclN0cikpLCBwYXJzZU1vbnRoQnlTaG9ydE5hbWUobW9udGhTdHIpLCBwYXJzZURhdGVWYWx1ZShkYXlTdHIudHJpbUxlZnQoKSwgXCJkYXlcIiwgMSwgMzEpLCB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBmcmFjdGlvbmFsTWlsbGlzZWNvbmRzIH0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBSRkMtNzIzMSBkYXRlLXRpbWUgdmFsdWVcIik7XG59O1xuZXhwb3J0IGNvbnN0IHBhcnNlRXBvY2hUaW1lc3RhbXAgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgdmFsdWVBc0RvdWJsZTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHZhbHVlQXNEb3VibGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHZhbHVlQXNEb3VibGUgPSBzdHJpY3RQYXJzZURvdWJsZSh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZS50YWcgPT09IDEpIHtcbiAgICAgICAgdmFsdWVBc0RvdWJsZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkVwb2NoIHRpbWVzdGFtcHMgbXVzdCBiZSBleHByZXNzZWQgYXMgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyBvciB0aGVpciBzdHJpbmcgcmVwcmVzZW50YXRpb25cIik7XG4gICAgfVxuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWVBc0RvdWJsZSkgfHwgdmFsdWVBc0RvdWJsZSA9PT0gSW5maW5pdHkgfHwgdmFsdWVBc0RvdWJsZSA9PT0gLUluZmluaXR5KSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFcG9jaCB0aW1lc3RhbXBzIG11c3QgYmUgdmFsaWQsIG5vbi1JbmZpbml0ZSwgbm9uLU5hTiBudW1lcmljc1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE1hdGgucm91bmQodmFsdWVBc0RvdWJsZSAqIDEwMDApKTtcbn07XG5jb25zdCBidWlsZERhdGUgPSAoeWVhciwgbW9udGgsIGRheSwgdGltZSkgPT4ge1xuICAgIGNvbnN0IGFkanVzdGVkTW9udGggPSBtb250aCAtIDE7XG4gICAgdmFsaWRhdGVEYXlPZk1vbnRoKHllYXIsIGFkanVzdGVkTW9udGgsIGRheSk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIGFkanVzdGVkTW9udGgsIGRheSwgcGFyc2VEYXRlVmFsdWUodGltZS5ob3VycywgXCJob3VyXCIsIDAsIDIzKSwgcGFyc2VEYXRlVmFsdWUodGltZS5taW51dGVzLCBcIm1pbnV0ZVwiLCAwLCA1OSksIHBhcnNlRGF0ZVZhbHVlKHRpbWUuc2Vjb25kcywgXCJzZWNvbmRzXCIsIDAsIDYwKSwgcGFyc2VNaWxsaXNlY29uZHModGltZS5mcmFjdGlvbmFsTWlsbGlzZWNvbmRzKSkpO1xufTtcbmNvbnN0IHBhcnNlVHdvRGlnaXRZZWFyID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgdGhpc1llYXIgPSBuZXcgRGF0ZSgpLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgY29uc3QgdmFsdWVJblRoaXNDZW50dXJ5ID0gTWF0aC5mbG9vcih0aGlzWWVhciAvIDEwMCkgKiAxMDAgKyBzdHJpY3RQYXJzZVNob3J0KHN0cmlwTGVhZGluZ1plcm9lcyh2YWx1ZSkpO1xuICAgIGlmICh2YWx1ZUluVGhpc0NlbnR1cnkgPCB0aGlzWWVhcikge1xuICAgICAgICByZXR1cm4gdmFsdWVJblRoaXNDZW50dXJ5ICsgMTAwO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVJblRoaXNDZW50dXJ5O1xufTtcbmNvbnN0IEZJRlRZX1lFQVJTX0lOX01JTExJUyA9IDUwICogMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMDtcbmNvbnN0IGFkanVzdFJmYzg1MFllYXIgPSAoaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQuZ2V0VGltZSgpIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkgPiBGSUZUWV9ZRUFSU19JTl9NSUxMSVMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKGlucHV0LmdldFVUQ0Z1bGxZZWFyKCkgLSAxMDAsIGlucHV0LmdldFVUQ01vbnRoKCksIGlucHV0LmdldFVUQ0RhdGUoKSwgaW5wdXQuZ2V0VVRDSG91cnMoKSwgaW5wdXQuZ2V0VVRDTWludXRlcygpLCBpbnB1dC5nZXRVVENTZWNvbmRzKCksIGlucHV0LmdldFVUQ01pbGxpc2Vjb25kcygpKSk7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dDtcbn07XG5jb25zdCBwYXJzZU1vbnRoQnlTaG9ydE5hbWUgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBtb250aElkeCA9IE1PTlRIUy5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAobW9udGhJZHggPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgbW9udGg6ICR7dmFsdWV9YCk7XG4gICAgfVxuICAgIHJldHVybiBtb250aElkeCArIDE7XG59O1xuY29uc3QgREFZU19JTl9NT05USCA9IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcbmNvbnN0IHZhbGlkYXRlRGF5T2ZNb250aCA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgbGV0IG1heERheXMgPSBEQVlTX0lOX01PTlRIW21vbnRoXTtcbiAgICBpZiAobW9udGggPT09IDEgJiYgaXNMZWFwWWVhcih5ZWFyKSkge1xuICAgICAgICBtYXhEYXlzID0gMjk7XG4gICAgfVxuICAgIGlmIChkYXkgPiBtYXhEYXlzKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgZGF5IGZvciAke01PTlRIU1ttb250aF19IGluICR7eWVhcn06ICR7ZGF5fWApO1xuICAgIH1cbn07XG5jb25zdCBpc0xlYXBZZWFyID0gKHllYXIpID0+IHtcbiAgICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgKHllYXIgJSAxMDAgIT09IDAgfHwgeWVhciAlIDQwMCA9PT0gMCk7XG59O1xuY29uc3QgcGFyc2VEYXRlVmFsdWUgPSAodmFsdWUsIHR5cGUsIGxvd2VyLCB1cHBlcikgPT4ge1xuICAgIGNvbnN0IGRhdGVWYWwgPSBzdHJpY3RQYXJzZUJ5dGUoc3RyaXBMZWFkaW5nWmVyb2VzKHZhbHVlKSk7XG4gICAgaWYgKGRhdGVWYWwgPCBsb3dlciB8fCBkYXRlVmFsID4gdXBwZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHt0eXBlfSBtdXN0IGJlIGJldHdlZW4gJHtsb3dlcn0gYW5kICR7dXBwZXJ9LCBpbmNsdXNpdmVgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGVWYWw7XG59O1xuY29uc3QgcGFyc2VNaWxsaXNlY29uZHMgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmljdFBhcnNlRmxvYXQzMihcIjAuXCIgKyB2YWx1ZSkgKiAxMDAwO1xufTtcbmNvbnN0IHBhcnNlT2Zmc2V0VG9NaWxsaXNlY29uZHMgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb25TdHIgPSB2YWx1ZVswXTtcbiAgICBsZXQgZGlyZWN0aW9uID0gMTtcbiAgICBpZiAoZGlyZWN0aW9uU3RyID09IFwiK1wiKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpcmVjdGlvblN0ciA9PSBcIi1cIikge1xuICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE9mZnNldCBkaXJlY3Rpb24sICR7ZGlyZWN0aW9uU3RyfSwgbXVzdCBiZSBcIitcIiBvciBcIi1cImApO1xuICAgIH1cbiAgICBjb25zdCBob3VyID0gTnVtYmVyKHZhbHVlLnN1YnN0cmluZygxLCAzKSk7XG4gICAgY29uc3QgbWludXRlID0gTnVtYmVyKHZhbHVlLnN1YnN0cmluZyg0LCA2KSk7XG4gICAgcmV0dXJuIGRpcmVjdGlvbiAqIChob3VyICogNjAgKyBtaW51dGUpICogNjAgKiAxMDAwO1xufTtcbmNvbnN0IHN0cmlwTGVhZGluZ1plcm9lcyA9ICh2YWx1ZSkgPT4ge1xuICAgIGxldCBpZHggPSAwO1xuICAgIHdoaWxlIChpZHggPCB2YWx1ZS5sZW5ndGggLSAxICYmIHZhbHVlLmNoYXJBdChpZHgpID09PSBcIjBcIikge1xuICAgICAgICBpZHgrKztcbiAgICB9XG4gICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5zbGljZShpZHgpO1xufTtcbiIsICJpbXBvcnQgeyB2NCBhcyBnZW5lcmF0ZUlkZW1wb3RlbmN5VG9rZW4gfSBmcm9tIFwiQHNtaXRoeS91dWlkXCI7XG5leHBvcnQgeyBnZW5lcmF0ZUlkZW1wb3RlbmN5VG9rZW4gfTtcbiIsICJleHBvcnQgY29uc3QgTGF6eUpzb25TdHJpbmcgPSBmdW5jdGlvbiBMYXp5SnNvblN0cmluZyh2YWwpIHtcbiAgICBjb25zdCBzdHIgPSBPYmplY3QuYXNzaWduKG5ldyBTdHJpbmcodmFsKSwge1xuICAgICAgICBkZXNlcmlhbGl6ZUpTT04oKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShTdHJpbmcodmFsKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWwpO1xuICAgICAgICB9LFxuICAgICAgICB0b0pTT04oKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbCk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cjtcbn07XG5MYXp5SnNvblN0cmluZy5mcm9tID0gKG9iamVjdCkgPT4ge1xuICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIiAmJiAob2JqZWN0IGluc3RhbmNlb2YgTGF6eUpzb25TdHJpbmcgfHwgXCJkZXNlcmlhbGl6ZUpTT05cIiBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwic3RyaW5nXCIgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCkgPT09IFN0cmluZy5wcm90b3R5cGUpIHtcbiAgICAgICAgcmV0dXJuIExhenlKc29uU3RyaW5nKFN0cmluZyhvYmplY3QpKTtcbiAgICB9XG4gICAgcmV0dXJuIExhenlKc29uU3RyaW5nKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xufTtcbkxhenlKc29uU3RyaW5nLmZyb21PYmplY3QgPSBMYXp5SnNvblN0cmluZy5mcm9tO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBxdW90ZUhlYWRlcihwYXJ0KSB7XG4gICAgaWYgKHBhcnQuaW5jbHVkZXMoXCIsXCIpIHx8IHBhcnQuaW5jbHVkZXMoJ1wiJykpIHtcbiAgICAgICAgcGFydCA9IGBcIiR7cGFydC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJyl9XCJgO1xuICAgIH1cbiAgICByZXR1cm4gcGFydDtcbn1cbiIsICJjb25zdCBkZGQgPSBgKD86TW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSg/OltuZXx1P3JdP3M/ZGF5KT9gO1xuY29uc3QgbW1tID0gYChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYylgO1xuY29uc3QgdGltZSA9IGAoXFxcXGQ/XFxcXGQpOihcXFxcZHsyfSk6KFxcXFxkezJ9KSg/OlxcXFwuKFxcXFxkKykpP2A7XG5jb25zdCBkYXRlID0gYChcXFxcZD9cXFxcZClgO1xuY29uc3QgeWVhciA9IGAoXFxcXGR7NH0pYDtcbmNvbnN0IFJGQzMzMzlfV0lUSF9PRkZTRVQgPSBuZXcgUmVnRXhwKC9eKFxcZHs0fSktKFxcZFxcZCktKFxcZFxcZClbdFRdKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkoXFwuKFxcZCspKT8oKFstK11cXGRcXGQ6XFxkXFxkKXxbelpdKSQvKTtcbmNvbnN0IElNRl9GSVhEQVRFID0gbmV3IFJlZ0V4cChgXiR7ZGRkfSwgJHtkYXRlfSAke21tbX0gJHt5ZWFyfSAke3RpbWV9IEdNVCRgKTtcbmNvbnN0IFJGQ184NTBfREFURSA9IG5ldyBSZWdFeHAoYF4ke2RkZH0sICR7ZGF0ZX0tJHttbW19LShcXFxcZFxcXFxkKSAke3RpbWV9IEdNVCRgKTtcbmNvbnN0IEFTQ19USU1FID0gbmV3IFJlZ0V4cChgXiR7ZGRkfSAke21tbX0gKCBbMS05XXxcXFxcZFxcXFxkKSAke3RpbWV9ICR7eWVhcn0kYCk7XG5jb25zdCBtb250aHMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XG5leHBvcnQgY29uc3QgX3BhcnNlRXBvY2hUaW1lc3RhbXAgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICBsZXQgbnVtID0gTmFOO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgbnVtID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoIS9eLT9cXGQqXFwuP1xcZCskLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgcGFyc2VFcG9jaFRpbWVzdGFtcCAtIG51bWVyaWMgc3RyaW5nIGludmFsaWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgbnVtID0gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUudGFnID09PSAxKSB7XG4gICAgICAgIG51bSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNOYU4obnVtKSB8fCBNYXRoLmFicyhudW0pID09PSBJbmZpbml0eSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXBvY2ggdGltZXN0YW1wcyBtdXN0IGJlIHZhbGlkIGZpbml0ZSBudW1iZXJzLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE1hdGgucm91bmQobnVtICogMTAwMCkpO1xufTtcbmV4cG9ydCBjb25zdCBfcGFyc2VSZmMzMzM5RGF0ZVRpbWVXaXRoT2Zmc2V0ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUkZDMzMzOSB0aW1lc3RhbXBzIG11c3QgYmUgc3RyaW5nc1wiKTtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hlcyA9IFJGQzMzMzlfV0lUSF9PRkZTRVQuZXhlYyh2YWx1ZSk7XG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgUkZDMzMzOSB0aW1lc3RhbXAgZm9ybWF0ICR7dmFsdWV9YCk7XG4gICAgfVxuICAgIGNvbnN0IFssIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCAsIG1zLCBvZmZzZXRTdHJdID0gbWF0Y2hlcztcbiAgICByYW5nZShtb250aFN0ciwgMSwgMTIpO1xuICAgIHJhbmdlKGRheVN0ciwgMSwgMzEpO1xuICAgIHJhbmdlKGhvdXJzLCAwLCAyMyk7XG4gICAgcmFuZ2UobWludXRlcywgMCwgNTkpO1xuICAgIHJhbmdlKHNlY29uZHMsIDAsIDYwKTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoTnVtYmVyKHllYXJTdHIpLCBOdW1iZXIobW9udGhTdHIpIC0gMSwgTnVtYmVyKGRheVN0ciksIE51bWJlcihob3VycyksIE51bWJlcihtaW51dGVzKSwgTnVtYmVyKHNlY29uZHMpLCBOdW1iZXIobXMpID8gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGAwLiR7bXN9YCkgKiAxMDAwKSA6IDApKTtcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKE51bWJlcih5ZWFyU3RyKSk7XG4gICAgaWYgKG9mZnNldFN0ci50b1VwcGVyQ2FzZSgpICE9IFwiWlwiKSB7XG4gICAgICAgIGNvbnN0IFssIHNpZ24sIG9mZnNldEgsIG9mZnNldE1dID0gLyhbKy1dKShcXGRcXGQpOihcXGRcXGQpLy5leGVjKG9mZnNldFN0cikgfHwgW3ZvaWQgMCwgXCIrXCIsIDAsIDBdO1xuICAgICAgICBjb25zdCBzY2FsYXIgPSBzaWduID09PSBcIi1cIiA/IDEgOiAtMTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgc2NhbGFyICogKE51bWJlcihvZmZzZXRIKSAqIDYwICogNjAgKiAxMDAwICsgTnVtYmVyKG9mZnNldE0pICogNjAgKiAxMDAwKSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xufTtcbmV4cG9ydCBjb25zdCBfcGFyc2VSZmM3MjMxRGF0ZVRpbWUgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSRkM3MjMxIHRpbWVzdGFtcHMgbXVzdCBiZSBzdHJpbmdzLlwiKTtcbiAgICB9XG4gICAgbGV0IGRheTtcbiAgICBsZXQgbW9udGg7XG4gICAgbGV0IHllYXI7XG4gICAgbGV0IGhvdXI7XG4gICAgbGV0IG1pbnV0ZTtcbiAgICBsZXQgc2Vjb25kO1xuICAgIGxldCBmcmFjdGlvbjtcbiAgICBsZXQgbWF0Y2hlcztcbiAgICBpZiAoKG1hdGNoZXMgPSBJTUZfRklYREFURS5leGVjKHZhbHVlKSkpIHtcbiAgICAgICAgWywgZGF5LCBtb250aCwgeWVhciwgaG91ciwgbWludXRlLCBzZWNvbmQsIGZyYWN0aW9uXSA9IG1hdGNoZXM7XG4gICAgfVxuICAgIGVsc2UgaWYgKChtYXRjaGVzID0gUkZDXzg1MF9EQVRFLmV4ZWModmFsdWUpKSkge1xuICAgICAgICBbLCBkYXksIG1vbnRoLCB5ZWFyLCBob3VyLCBtaW51dGUsIHNlY29uZCwgZnJhY3Rpb25dID0gbWF0Y2hlcztcbiAgICAgICAgeWVhciA9IChOdW1iZXIoeWVhcikgKyAxOTAwKS50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIGlmICgobWF0Y2hlcyA9IEFTQ19USU1FLmV4ZWModmFsdWUpKSkge1xuICAgICAgICBbLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgZnJhY3Rpb24sIHllYXJdID0gbWF0Y2hlcztcbiAgICB9XG4gICAgaWYgKHllYXIgJiYgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUuVVRDKE51bWJlcih5ZWFyKSwgbW9udGhzLmluZGV4T2YobW9udGgpLCBOdW1iZXIoZGF5KSwgTnVtYmVyKGhvdXIpLCBOdW1iZXIobWludXRlKSwgTnVtYmVyKHNlY29uZCksIGZyYWN0aW9uID8gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGAwLiR7ZnJhY3Rpb259YCkgKiAxMDAwKSA6IDApO1xuICAgICAgICByYW5nZShkYXksIDEsIDMxKTtcbiAgICAgICAgcmFuZ2UoaG91ciwgMCwgMjMpO1xuICAgICAgICByYW5nZShtaW51dGUsIDAsIDU5KTtcbiAgICAgICAgcmFuZ2Uoc2Vjb25kLCAwLCA2MCk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKE51bWJlcih5ZWFyKSk7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIFJGQzcyMzEgZGF0ZS10aW1lIHZhbHVlICR7dmFsdWV9LmApO1xufTtcbmZ1bmN0aW9uIHJhbmdlKHYsIG1pbiwgbWF4KSB7XG4gICAgY29uc3QgX3YgPSBOdW1iZXIodik7XG4gICAgaWYgKF92IDwgbWluIHx8IF92ID4gbWF4KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgJHtfdn0gb3V0IG9mIHJhbmdlIFske21pbn0sICR7bWF4fV1gKTtcbiAgICB9XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIHNwbGl0RXZlcnkodmFsdWUsIGRlbGltaXRlciwgbnVtRGVsaW1pdGVycykge1xuICAgIGlmIChudW1EZWxpbWl0ZXJzIDw9IDAgfHwgIU51bWJlci5pc0ludGVnZXIobnVtRGVsaW1pdGVycykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBudW1iZXIgb2YgZGVsaW1pdGVycyAoXCIgKyBudW1EZWxpbWl0ZXJzICsgXCIpIGZvciBzcGxpdEV2ZXJ5LlwiKTtcbiAgICB9XG4gICAgY29uc3Qgc2VnbWVudHMgPSB2YWx1ZS5zcGxpdChkZWxpbWl0ZXIpO1xuICAgIGlmIChudW1EZWxpbWl0ZXJzID09PSAxKSB7XG4gICAgICAgIHJldHVybiBzZWdtZW50cztcbiAgICB9XG4gICAgY29uc3QgY29tcG91bmRTZWdtZW50cyA9IFtdO1xuICAgIGxldCBjdXJyZW50U2VnbWVudCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY3VycmVudFNlZ21lbnQgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTZWdtZW50ID0gc2VnbWVudHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50U2VnbWVudCArPSBkZWxpbWl0ZXIgKyBzZWdtZW50c1tpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGkgKyAxKSAlIG51bURlbGltaXRlcnMgPT09IDApIHtcbiAgICAgICAgICAgIGNvbXBvdW5kU2VnbWVudHMucHVzaChjdXJyZW50U2VnbWVudCk7XG4gICAgICAgICAgICBjdXJyZW50U2VnbWVudCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGN1cnJlbnRTZWdtZW50ICE9PSBcIlwiKSB7XG4gICAgICAgIGNvbXBvdW5kU2VnbWVudHMucHVzaChjdXJyZW50U2VnbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb3VuZFNlZ21lbnRzO1xufVxuIiwgImV4cG9ydCBjb25zdCBzcGxpdEhlYWRlciA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHogPSB2YWx1ZS5sZW5ndGg7XG4gICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgbGV0IHdpdGhpblF1b3RlcyA9IGZhbHNlO1xuICAgIGxldCBwcmV2Q2hhciA9IHVuZGVmaW5lZDtcbiAgICBsZXQgYW5jaG9yID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHo7ICsraSkge1xuICAgICAgICBjb25zdCBjaGFyID0gdmFsdWVbaV07XG4gICAgICAgIHN3aXRjaCAoY2hhcikge1xuICAgICAgICAgICAgY2FzZSBgXCJgOlxuICAgICAgICAgICAgICAgIGlmIChwcmV2Q2hhciAhPT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aGluUXVvdGVzID0gIXdpdGhpblF1b3RlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiLFwiOlxuICAgICAgICAgICAgICAgIGlmICghd2l0aGluUXVvdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlLnNsaWNlKGFuY2hvciwgaSkpO1xuICAgICAgICAgICAgICAgICAgICBhbmNob3IgPSBpICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgICAgIHByZXZDaGFyID0gY2hhcjtcbiAgICB9XG4gICAgdmFsdWVzLnB1c2godmFsdWUuc2xpY2UoYW5jaG9yKSk7XG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoKHYpID0+IHtcbiAgICAgICAgdiA9IHYudHJpbSgpO1xuICAgICAgICBjb25zdCB6ID0gdi5sZW5ndGg7XG4gICAgICAgIGlmICh6IDwgMikge1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZbMF0gPT09IGBcImAgJiYgdlt6IC0gMV0gPT09IGBcImApIHtcbiAgICAgICAgICAgIHYgPSB2LnNsaWNlKDEsIHogLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdi5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJyk7XG4gICAgfSk7XG59O1xuIiwgImNvbnN0IGZvcm1hdCA9IC9eLT9cXGQqKFxcLlxcZCspPyQvO1xuZXhwb3J0IGNsYXNzIE51bWVyaWNWYWx1ZSB7XG4gICAgc3RyaW5nO1xuICAgIHR5cGU7XG4gICAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlKSB7XG4gICAgICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICBpZiAoIWZvcm1hdC50ZXN0KHN0cmluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQHNtaXRoeS9jb3JlL3NlcmRlIC0gTnVtZXJpY1ZhbHVlIG11c3Qgb25seSBjb250YWluIFswLTldLCBhdCBtb3N0IG9uZSBkZWNpbWFsIHBvaW50IFwiLlwiLCBhbmQgYW4gb3B0aW9uYWwgbmVnYXRpb24gcHJlZml4IFwiLVwiLmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gICAgfVxuICAgIHN0YXRpYyBbU3ltYm9sLmhhc0luc3RhbmNlXShvYmplY3QpIHtcbiAgICAgICAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IF9udiA9IG9iamVjdDtcbiAgICAgICAgcmV0dXJuIE51bWVyaWNWYWx1ZS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmplY3QpIHx8IChfbnYudHlwZSA9PT0gXCJiaWdEZWNpbWFsXCIgJiYgZm9ybWF0LnRlc3QoX252LnN0cmluZykpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBudihpbnB1dCkge1xuICAgIHJldHVybiBuZXcgTnVtZXJpY1ZhbHVlKFN0cmluZyhpbnB1dCksIFwiYmlnRGVjaW1hbFwiKTtcbn1cbiIsICJleHBvcnQgKiBmcm9tIFwiLi9jb3B5RG9jdW1lbnRXaXRoVHJhbnNmb3JtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9kYXRlLXV0aWxzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9nZW5lcmF0ZUlkZW1wb3RlbmN5VG9rZW5cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xhenktanNvblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGFyc2UtdXRpbHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3F1b3RlLWhlYWRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2NoZW1hLXNlcmRlLWxpYi9zY2hlbWEtZGF0ZS11dGlsc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3BsaXQtZXZlcnlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NwbGl0LWhlYWRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdmFsdWUvTnVtZXJpY1ZhbHVlXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNoZWNrc3VtU3RyZWFtID0gdm9pZCAwO1xuY29uc3QgdXRpbF9iYXNlNjRfMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtYmFzZTY0XCIpO1xuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuY2xhc3MgQ2hlY2tzdW1TdHJlYW0gZXh0ZW5kcyBzdHJlYW1fMS5EdXBsZXgge1xuICAgIGV4cGVjdGVkQ2hlY2tzdW07XG4gICAgY2hlY2tzdW1Tb3VyY2VMb2NhdGlvbjtcbiAgICBjaGVja3N1bTtcbiAgICBzb3VyY2U7XG4gICAgYmFzZTY0RW5jb2RlcjtcbiAgICBwZW5kaW5nQ2FsbGJhY2sgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKHsgZXhwZWN0ZWRDaGVja3N1bSwgY2hlY2tzdW0sIHNvdXJjZSwgY2hlY2tzdW1Tb3VyY2VMb2NhdGlvbiwgYmFzZTY0RW5jb2RlciwgfSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZS5waXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBAc21pdGh5L3V0aWwtc3RyZWFtOiB1bnN1cHBvcnRlZCBzb3VyY2UgdHlwZSAke3NvdXJjZT8uY29uc3RydWN0b3I/Lm5hbWUgPz8gc291cmNlfSBpbiBDaGVja3N1bVN0cmVhbS5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhc2U2NEVuY29kZXIgPSBiYXNlNjRFbmNvZGVyID8/IHV0aWxfYmFzZTY0XzEudG9CYXNlNjQ7XG4gICAgICAgIHRoaXMuZXhwZWN0ZWRDaGVja3N1bSA9IGV4cGVjdGVkQ2hlY2tzdW07XG4gICAgICAgIHRoaXMuY2hlY2tzdW0gPSBjaGVja3N1bTtcbiAgICAgICAgdGhpcy5jaGVja3N1bVNvdXJjZUxvY2F0aW9uID0gY2hlY2tzdW1Tb3VyY2VMb2NhdGlvbjtcbiAgICAgICAgdGhpcy5zb3VyY2UucGlwZSh0aGlzKTtcbiAgICB9XG4gICAgX3JlYWQoc2l6ZSkge1xuICAgICAgICBpZiAodGhpcy5wZW5kaW5nQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5wZW5kaW5nQ2FsbGJhY2s7XG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdDYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF93cml0ZShjaHVuaywgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrc3VtLnVwZGF0ZShjaHVuayk7XG4gICAgICAgICAgICBjb25zdCBjYW5QdXNoTW9yZSA9IHRoaXMucHVzaChjaHVuayk7XG4gICAgICAgICAgICBpZiAoIWNhblB1c2hNb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgYXN5bmMgX2ZpbmFsKGNhbGxiYWNrKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkaWdlc3QgPSBhd2FpdCB0aGlzLmNoZWNrc3VtLmRpZ2VzdCgpO1xuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZWQgPSB0aGlzLmJhc2U2NEVuY29kZXIoZGlnZXN0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdGVkQ2hlY2tzdW0gIT09IHJlY2VpdmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBFcnJvcihgQ2hlY2tzdW0gbWlzbWF0Y2g6IGV4cGVjdGVkIFwiJHt0aGlzLmV4cGVjdGVkQ2hlY2tzdW19XCIgYnV0IHJlY2VpdmVkIFwiJHtyZWNlaXZlZH1cImAgK1xuICAgICAgICAgICAgICAgICAgICBgIGluIHJlc3BvbnNlIGhlYWRlciBcIiR7dGhpcy5jaGVja3N1bVNvdXJjZUxvY2F0aW9ufVwiLmApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxufVxuZXhwb3J0cy5DaGVja3N1bVN0cmVhbSA9IENoZWNrc3VtU3RyZWFtO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0Jsb2IgPSBleHBvcnRzLmlzUmVhZGFibGVTdHJlYW0gPSB2b2lkIDA7XG5jb25zdCBpc1JlYWRhYmxlU3RyZWFtID0gKHN0cmVhbSkgPT4gdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAoc3RyZWFtPy5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gUmVhZGFibGVTdHJlYW0ubmFtZSB8fCBzdHJlYW0gaW5zdGFuY2VvZiBSZWFkYWJsZVN0cmVhbSk7XG5leHBvcnRzLmlzUmVhZGFibGVTdHJlYW0gPSBpc1JlYWRhYmxlU3RyZWFtO1xuY29uc3QgaXNCbG9iID0gKGJsb2IpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJiAoYmxvYj8uY29uc3RydWN0b3I/Lm5hbWUgPT09IEJsb2IubmFtZSB8fCBibG9iIGluc3RhbmNlb2YgQmxvYik7XG59O1xuZXhwb3J0cy5pc0Jsb2IgPSBpc0Jsb2I7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNoZWNrc3VtU3RyZWFtID0gdm9pZCAwO1xuY29uc3QgUmVhZGFibGVTdHJlYW1SZWYgPSB0eXBlb2YgUmVhZGFibGVTdHJlYW0gPT09IFwiZnVuY3Rpb25cIiA/IFJlYWRhYmxlU3RyZWFtIDogZnVuY3Rpb24gKCkgeyB9O1xuY2xhc3MgQ2hlY2tzdW1TdHJlYW0gZXh0ZW5kcyBSZWFkYWJsZVN0cmVhbVJlZiB7XG59XG5leHBvcnRzLkNoZWNrc3VtU3RyZWFtID0gQ2hlY2tzdW1TdHJlYW07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUNoZWNrc3VtU3RyZWFtID0gdm9pZCAwO1xuY29uc3QgdXRpbF9iYXNlNjRfMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtYmFzZTY0XCIpO1xuY29uc3Qgc3RyZWFtX3R5cGVfY2hlY2tfMSA9IHJlcXVpcmUoXCIuLi9zdHJlYW0tdHlwZS1jaGVja1wiKTtcbmNvbnN0IENoZWNrc3VtU3RyZWFtX2Jyb3dzZXJfMSA9IHJlcXVpcmUoXCIuL0NoZWNrc3VtU3RyZWFtLmJyb3dzZXJcIik7XG5jb25zdCBjcmVhdGVDaGVja3N1bVN0cmVhbSA9ICh7IGV4cGVjdGVkQ2hlY2tzdW0sIGNoZWNrc3VtLCBzb3VyY2UsIGNoZWNrc3VtU291cmNlTG9jYXRpb24sIGJhc2U2NEVuY29kZXIsIH0pID0+IHtcbiAgICBpZiAoISgwLCBzdHJlYW1fdHlwZV9jaGVja18xLmlzUmVhZGFibGVTdHJlYW0pKHNvdXJjZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBAc21pdGh5L3V0aWwtc3RyZWFtOiB1bnN1cHBvcnRlZCBzb3VyY2UgdHlwZSAke3NvdXJjZT8uY29uc3RydWN0b3I/Lm5hbWUgPz8gc291cmNlfSBpbiBDaGVja3N1bVN0cmVhbS5gKTtcbiAgICB9XG4gICAgY29uc3QgZW5jb2RlciA9IGJhc2U2NEVuY29kZXIgPz8gdXRpbF9iYXNlNjRfMS50b0Jhc2U2NDtcbiAgICBpZiAodHlwZW9mIFRyYW5zZm9ybVN0cmVhbSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkBzbWl0aHkvdXRpbC1zdHJlYW06IHVuYWJsZSB0byBpbnN0YW50aWF0ZSBDaGVja3N1bVN0cmVhbSBiZWNhdXNlIEFQSSB1bmF2YWlsYWJsZTogUmVhZGFibGVTdHJlYW0vVHJhbnNmb3JtU3RyZWFtLlwiKTtcbiAgICB9XG4gICAgY29uc3QgdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybVN0cmVhbSh7XG4gICAgICAgIHN0YXJ0KCkgeyB9LFxuICAgICAgICBhc3luYyB0cmFuc2Zvcm0oY2h1bmssIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIGNoZWNrc3VtLnVwZGF0ZShjaHVuayk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoY2h1bmspO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBmbHVzaChjb250cm9sbGVyKSB7XG4gICAgICAgICAgICBjb25zdCBkaWdlc3QgPSBhd2FpdCBjaGVja3N1bS5kaWdlc3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVkID0gZW5jb2RlcihkaWdlc3QpO1xuICAgICAgICAgICAgaWYgKGV4cGVjdGVkQ2hlY2tzdW0gIT09IHJlY2VpdmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYENoZWNrc3VtIG1pc21hdGNoOiBleHBlY3RlZCBcIiR7ZXhwZWN0ZWRDaGVja3N1bX1cIiBidXQgcmVjZWl2ZWQgXCIke3JlY2VpdmVkfVwiYCArXG4gICAgICAgICAgICAgICAgICAgIGAgaW4gcmVzcG9uc2UgaGVhZGVyIFwiJHtjaGVja3N1bVNvdXJjZUxvY2F0aW9ufVwiLmApO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci50ZXJtaW5hdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBzb3VyY2UucGlwZVRocm91Z2godHJhbnNmb3JtKTtcbiAgICBjb25zdCByZWFkYWJsZSA9IHRyYW5zZm9ybS5yZWFkYWJsZTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocmVhZGFibGUsIENoZWNrc3VtU3RyZWFtX2Jyb3dzZXJfMS5DaGVja3N1bVN0cmVhbS5wcm90b3R5cGUpO1xuICAgIHJldHVybiByZWFkYWJsZTtcbn07XG5leHBvcnRzLmNyZWF0ZUNoZWNrc3VtU3RyZWFtID0gY3JlYXRlQ2hlY2tzdW1TdHJlYW07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUNoZWNrc3VtU3RyZWFtID0gY3JlYXRlQ2hlY2tzdW1TdHJlYW07XG5jb25zdCBzdHJlYW1fdHlwZV9jaGVja18xID0gcmVxdWlyZShcIi4uL3N0cmVhbS10eXBlLWNoZWNrXCIpO1xuY29uc3QgQ2hlY2tzdW1TdHJlYW1fMSA9IHJlcXVpcmUoXCIuL0NoZWNrc3VtU3RyZWFtXCIpO1xuY29uc3QgY3JlYXRlQ2hlY2tzdW1TdHJlYW1fYnJvd3Nlcl8xID0gcmVxdWlyZShcIi4vY3JlYXRlQ2hlY2tzdW1TdHJlYW0uYnJvd3NlclwiKTtcbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrc3VtU3RyZWFtKGluaXQpIHtcbiAgICBpZiAodHlwZW9mIFJlYWRhYmxlU3RyZWFtID09PSBcImZ1bmN0aW9uXCIgJiYgKDAsIHN0cmVhbV90eXBlX2NoZWNrXzEuaXNSZWFkYWJsZVN0cmVhbSkoaW5pdC5zb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiAoMCwgY3JlYXRlQ2hlY2tzdW1TdHJlYW1fYnJvd3Nlcl8xLmNyZWF0ZUNoZWNrc3VtU3RyZWFtKShpbml0KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDaGVja3N1bVN0cmVhbV8xLkNoZWNrc3VtU3RyZWFtKGluaXQpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5CeXRlQXJyYXlDb2xsZWN0b3IgPSB2b2lkIDA7XG5jbGFzcyBCeXRlQXJyYXlDb2xsZWN0b3Ige1xuICAgIGFsbG9jQnl0ZUFycmF5O1xuICAgIGJ5dGVMZW5ndGggPSAwO1xuICAgIGJ5dGVBcnJheXMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihhbGxvY0J5dGVBcnJheSkge1xuICAgICAgICB0aGlzLmFsbG9jQnl0ZUFycmF5ID0gYWxsb2NCeXRlQXJyYXk7XG4gICAgfVxuICAgIHB1c2goYnl0ZUFycmF5KSB7XG4gICAgICAgIHRoaXMuYnl0ZUFycmF5cy5wdXNoKGJ5dGVBcnJheSk7XG4gICAgICAgIHRoaXMuYnl0ZUxlbmd0aCArPSBieXRlQXJyYXkuYnl0ZUxlbmd0aDtcbiAgICB9XG4gICAgZmx1c2goKSB7XG4gICAgICAgIGlmICh0aGlzLmJ5dGVBcnJheXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IHRoaXMuYnl0ZUFycmF5c1swXTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIHJldHVybiBieXRlcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhZ2dyZWdhdGlvbiA9IHRoaXMuYWxsb2NCeXRlQXJyYXkodGhpcy5ieXRlTGVuZ3RoKTtcbiAgICAgICAgbGV0IGN1cnNvciA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ieXRlQXJyYXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IHRoaXMuYnl0ZUFycmF5c1tpXTtcbiAgICAgICAgICAgIGFnZ3JlZ2F0aW9uLnNldChieXRlcywgY3Vyc29yKTtcbiAgICAgICAgICAgIGN1cnNvciArPSBieXRlcy5ieXRlTGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIGFnZ3JlZ2F0aW9uO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5ieXRlQXJyYXlzID0gW107XG4gICAgICAgIHRoaXMuYnl0ZUxlbmd0aCA9IDA7XG4gICAgfVxufVxuZXhwb3J0cy5CeXRlQXJyYXlDb2xsZWN0b3IgPSBCeXRlQXJyYXlDb2xsZWN0b3I7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUJ1ZmZlcmVkUmVhZGFibGUgPSB2b2lkIDA7XG5leHBvcnRzLmNyZWF0ZUJ1ZmZlcmVkUmVhZGFibGVTdHJlYW0gPSBjcmVhdGVCdWZmZXJlZFJlYWRhYmxlU3RyZWFtO1xuZXhwb3J0cy5tZXJnZSA9IG1lcmdlO1xuZXhwb3J0cy5mbHVzaCA9IGZsdXNoO1xuZXhwb3J0cy5zaXplT2YgPSBzaXplT2Y7XG5leHBvcnRzLm1vZGVPZiA9IG1vZGVPZjtcbmNvbnN0IEJ5dGVBcnJheUNvbGxlY3Rvcl8xID0gcmVxdWlyZShcIi4vQnl0ZUFycmF5Q29sbGVjdG9yXCIpO1xuZnVuY3Rpb24gY3JlYXRlQnVmZmVyZWRSZWFkYWJsZVN0cmVhbSh1cHN0cmVhbSwgc2l6ZSwgbG9nZ2VyKSB7XG4gICAgY29uc3QgcmVhZGVyID0gdXBzdHJlYW0uZ2V0UmVhZGVyKCk7XG4gICAgbGV0IHN0cmVhbUJ1ZmZlcmluZ0xvZ2dlZFdhcm5pbmcgPSBmYWxzZTtcbiAgICBsZXQgYnl0ZXNTZWVuID0gMDtcbiAgICBjb25zdCBidWZmZXJzID0gW1wiXCIsIG5ldyBCeXRlQXJyYXlDb2xsZWN0b3JfMS5CeXRlQXJyYXlDb2xsZWN0b3IoKHNpemUpID0+IG5ldyBVaW50OEFycmF5KHNpemUpKV07XG4gICAgbGV0IG1vZGUgPSAtMTtcbiAgICBjb25zdCBwdWxsID0gYXN5bmMgKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgY29uc3QgY2h1bmsgPSB2YWx1ZTtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIGlmIChtb2RlICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmRlciA9IGZsdXNoKGJ1ZmZlcnMsIG1vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChzaXplT2YocmVtYWluZGVyKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKHJlbWFpbmRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2h1bmtNb2RlID0gbW9kZU9mKGNodW5rLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAobW9kZSAhPT0gY2h1bmtNb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoZmx1c2goYnVmZmVycywgbW9kZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb2RlID0gY2h1bmtNb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKGNodW5rKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjaHVua1NpemUgPSBzaXplT2YoY2h1bmspO1xuICAgICAgICAgICAgYnl0ZXNTZWVuICs9IGNodW5rU2l6ZTtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclNpemUgPSBzaXplT2YoYnVmZmVyc1ttb2RlXSk7XG4gICAgICAgICAgICBpZiAoY2h1bmtTaXplID49IHNpemUgJiYgYnVmZmVyU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShjaHVuayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTaXplID0gbWVyZ2UoYnVmZmVycywgbW9kZSwgY2h1bmspO1xuICAgICAgICAgICAgICAgIGlmICghc3RyZWFtQnVmZmVyaW5nTG9nZ2VkV2FybmluZyAmJiBieXRlc1NlZW4gPiBzaXplICogMikge1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW1CdWZmZXJpbmdMb2dnZWRXYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyPy53YXJuKGBAc21pdGh5L3V0aWwtc3RyZWFtIC0gc3RyZWFtIGNodW5rIHNpemUgJHtjaHVua1NpemV9IGlzIGJlbG93IHRocmVzaG9sZCBvZiAke3NpemV9LCBhdXRvbWF0aWNhbGx5IGJ1ZmZlcmluZy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5ld1NpemUgPj0gc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoZmx1c2goYnVmZmVycywgbW9kZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHVsbChjb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBuZXcgUmVhZGFibGVTdHJlYW0oe1xuICAgICAgICBwdWxsLFxuICAgIH0pO1xufVxuZXhwb3J0cy5jcmVhdGVCdWZmZXJlZFJlYWRhYmxlID0gY3JlYXRlQnVmZmVyZWRSZWFkYWJsZVN0cmVhbTtcbmZ1bmN0aW9uIG1lcmdlKGJ1ZmZlcnMsIG1vZGUsIGNodW5rKSB7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGJ1ZmZlcnNbMF0gKz0gY2h1bms7XG4gICAgICAgICAgICByZXR1cm4gc2l6ZU9mKGJ1ZmZlcnNbMF0pO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGJ1ZmZlcnNbbW9kZV0ucHVzaChjaHVuayk7XG4gICAgICAgICAgICByZXR1cm4gc2l6ZU9mKGJ1ZmZlcnNbbW9kZV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZsdXNoKGJ1ZmZlcnMsIG1vZGUpIHtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY29uc3QgcyA9IGJ1ZmZlcnNbMF07XG4gICAgICAgICAgICBidWZmZXJzWzBdID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBidWZmZXJzW21vZGVdLmZsdXNoKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgQHNtaXRoeS91dGlsLXN0cmVhbSAtIGludmFsaWQgaW5kZXggJHttb2RlfSBnaXZlbiB0byBmbHVzaCgpYCk7XG59XG5mdW5jdGlvbiBzaXplT2YoY2h1bmspIHtcbiAgICByZXR1cm4gY2h1bms/LmJ5dGVMZW5ndGggPz8gY2h1bms/Lmxlbmd0aCA/PyAwO1xufVxuZnVuY3Rpb24gbW9kZU9mKGNodW5rLCBhbGxvd0J1ZmZlciA9IHRydWUpIHtcbiAgICBpZiAoYWxsb3dCdWZmZXIgJiYgdHlwZW9mIEJ1ZmZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjaHVuayBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgaWYgKGNodW5rIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjaHVuayA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVCdWZmZXJlZFJlYWRhYmxlID0gY3JlYXRlQnVmZmVyZWRSZWFkYWJsZTtcbmNvbnN0IG5vZGVfc3RyZWFtXzEgPSByZXF1aXJlKFwibm9kZTpzdHJlYW1cIik7XG5jb25zdCBCeXRlQXJyYXlDb2xsZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0J5dGVBcnJheUNvbGxlY3RvclwiKTtcbmNvbnN0IGNyZWF0ZUJ1ZmZlcmVkUmVhZGFibGVTdHJlYW1fMSA9IHJlcXVpcmUoXCIuL2NyZWF0ZUJ1ZmZlcmVkUmVhZGFibGVTdHJlYW1cIik7XG5jb25zdCBzdHJlYW1fdHlwZV9jaGVja18xID0gcmVxdWlyZShcIi4vc3RyZWFtLXR5cGUtY2hlY2tcIik7XG5mdW5jdGlvbiBjcmVhdGVCdWZmZXJlZFJlYWRhYmxlKHVwc3RyZWFtLCBzaXplLCBsb2dnZXIpIHtcbiAgICBpZiAoKDAsIHN0cmVhbV90eXBlX2NoZWNrXzEuaXNSZWFkYWJsZVN0cmVhbSkodXBzdHJlYW0pKSB7XG4gICAgICAgIHJldHVybiAoMCwgY3JlYXRlQnVmZmVyZWRSZWFkYWJsZVN0cmVhbV8xLmNyZWF0ZUJ1ZmZlcmVkUmVhZGFibGVTdHJlYW0pKHVwc3RyZWFtLCBzaXplLCBsb2dnZXIpO1xuICAgIH1cbiAgICBjb25zdCBkb3duc3RyZWFtID0gbmV3IG5vZGVfc3RyZWFtXzEuUmVhZGFibGUoeyByZWFkKCkgeyB9IH0pO1xuICAgIGxldCBzdHJlYW1CdWZmZXJpbmdMb2dnZWRXYXJuaW5nID0gZmFsc2U7XG4gICAgbGV0IGJ5dGVzU2VlbiA9IDA7XG4gICAgY29uc3QgYnVmZmVycyA9IFtcbiAgICAgICAgXCJcIixcbiAgICAgICAgbmV3IEJ5dGVBcnJheUNvbGxlY3Rvcl8xLkJ5dGVBcnJheUNvbGxlY3Rvcigoc2l6ZSkgPT4gbmV3IFVpbnQ4QXJyYXkoc2l6ZSkpLFxuICAgICAgICBuZXcgQnl0ZUFycmF5Q29sbGVjdG9yXzEuQnl0ZUFycmF5Q29sbGVjdG9yKChzaXplKSA9PiBCdWZmZXIuZnJvbShuZXcgVWludDhBcnJheShzaXplKSkpLFxuICAgIF07XG4gICAgbGV0IG1vZGUgPSAtMTtcbiAgICB1cHN0cmVhbS5vbihcImRhdGFcIiwgKGNodW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IGNodW5rTW9kZSA9ICgwLCBjcmVhdGVCdWZmZXJlZFJlYWRhYmxlU3RyZWFtXzEubW9kZU9mKShjaHVuaywgdHJ1ZSk7XG4gICAgICAgIGlmIChtb2RlICE9PSBjaHVua01vZGUpIHtcbiAgICAgICAgICAgIGlmIChtb2RlID49IDApIHtcbiAgICAgICAgICAgICAgICBkb3duc3RyZWFtLnB1c2goKDAsIGNyZWF0ZUJ1ZmZlcmVkUmVhZGFibGVTdHJlYW1fMS5mbHVzaCkoYnVmZmVycywgbW9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kZSA9IGNodW5rTW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRvd25zdHJlYW0ucHVzaChjaHVuayk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2h1bmtTaXplID0gKDAsIGNyZWF0ZUJ1ZmZlcmVkUmVhZGFibGVTdHJlYW1fMS5zaXplT2YpKGNodW5rKTtcbiAgICAgICAgYnl0ZXNTZWVuICs9IGNodW5rU2l6ZTtcbiAgICAgICAgY29uc3QgYnVmZmVyU2l6ZSA9ICgwLCBjcmVhdGVCdWZmZXJlZFJlYWRhYmxlU3RyZWFtXzEuc2l6ZU9mKShidWZmZXJzW21vZGVdKTtcbiAgICAgICAgaWYgKGNodW5rU2l6ZSA+PSBzaXplICYmIGJ1ZmZlclNpemUgPT09IDApIHtcbiAgICAgICAgICAgIGRvd25zdHJlYW0ucHVzaChjaHVuayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTaXplID0gKDAsIGNyZWF0ZUJ1ZmZlcmVkUmVhZGFibGVTdHJlYW1fMS5tZXJnZSkoYnVmZmVycywgbW9kZSwgY2h1bmspO1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1CdWZmZXJpbmdMb2dnZWRXYXJuaW5nICYmIGJ5dGVzU2VlbiA+IHNpemUgKiAyKSB7XG4gICAgICAgICAgICAgICAgc3RyZWFtQnVmZmVyaW5nTG9nZ2VkV2FybmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgbG9nZ2VyPy53YXJuKGBAc21pdGh5L3V0aWwtc3RyZWFtIC0gc3RyZWFtIGNodW5rIHNpemUgJHtjaHVua1NpemV9IGlzIGJlbG93IHRocmVzaG9sZCBvZiAke3NpemV9LCBhdXRvbWF0aWNhbGx5IGJ1ZmZlcmluZy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdTaXplID49IHNpemUpIHtcbiAgICAgICAgICAgICAgICBkb3duc3RyZWFtLnB1c2goKDAsIGNyZWF0ZUJ1ZmZlcmVkUmVhZGFibGVTdHJlYW1fMS5mbHVzaCkoYnVmZmVycywgbW9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgdXBzdHJlYW0ub24oXCJlbmRcIiwgKCkgPT4ge1xuICAgICAgICBpZiAobW9kZSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmRlciA9ICgwLCBjcmVhdGVCdWZmZXJlZFJlYWRhYmxlU3RyZWFtXzEuZmx1c2gpKGJ1ZmZlcnMsIG1vZGUpO1xuICAgICAgICAgICAgaWYgKCgwLCBjcmVhdGVCdWZmZXJlZFJlYWRhYmxlU3RyZWFtXzEuc2l6ZU9mKShyZW1haW5kZXIpID4gMCkge1xuICAgICAgICAgICAgICAgIGRvd25zdHJlYW0ucHVzaChyZW1haW5kZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRvd25zdHJlYW0ucHVzaChudWxsKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZG93bnN0cmVhbTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0QXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtID0gdm9pZCAwO1xuY29uc3QgZ2V0QXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtID0gKHJlYWRhYmxlU3RyZWFtLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgeyBiYXNlNjRFbmNvZGVyLCBib2R5TGVuZ3RoQ2hlY2tlciwgY2hlY2tzdW1BbGdvcml0aG1GbiwgY2hlY2tzdW1Mb2NhdGlvbk5hbWUsIHN0cmVhbUhhc2hlciB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBjaGVja3N1bVJlcXVpcmVkID0gYmFzZTY0RW5jb2RlciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGJvZHlMZW5ndGhDaGVja2VyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgY2hlY2tzdW1BbGdvcml0aG1GbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGNoZWNrc3VtTG9jYXRpb25OYW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgc3RyZWFtSGFzaGVyICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3QgZGlnZXN0ID0gY2hlY2tzdW1SZXF1aXJlZCA/IHN0cmVhbUhhc2hlcihjaGVja3N1bUFsZ29yaXRobUZuLCByZWFkYWJsZVN0cmVhbSkgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgcmVhZGVyID0gcmVhZGFibGVTdHJlYW0uZ2V0UmVhZGVyKCk7XG4gICAgcmV0dXJuIG5ldyBSZWFkYWJsZVN0cmVhbSh7XG4gICAgICAgIGFzeW5jIHB1bGwoY29udHJvbGxlcikge1xuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKGAwXFxyXFxuYCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrc3VtUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tzdW0gPSBiYXNlNjRFbmNvZGVyKGF3YWl0IGRpZ2VzdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShgJHtjaGVja3N1bUxvY2F0aW9uTmFtZX06JHtjaGVja3N1bX1cXHJcXG5gKTtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKGBcXHJcXG5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKGAkeyhib2R5TGVuZ3RoQ2hlY2tlcih2YWx1ZSkgfHwgMCkudG9TdHJpbmcoMTYpfVxcclxcbiR7dmFsdWV9XFxyXFxuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59O1xuZXhwb3J0cy5nZXRBd3NDaHVua2VkRW5jb2RpbmdTdHJlYW0gPSBnZXRBd3NDaHVua2VkRW5jb2RpbmdTdHJlYW07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldEF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbSA9IGdldEF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbTtcbmNvbnN0IG5vZGVfc3RyZWFtXzEgPSByZXF1aXJlKFwibm9kZTpzdHJlYW1cIik7XG5jb25zdCBnZXRBd3NDaHVua2VkRW5jb2RpbmdTdHJlYW1fYnJvd3Nlcl8xID0gcmVxdWlyZShcIi4vZ2V0QXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtLmJyb3dzZXJcIik7XG5jb25zdCBzdHJlYW1fdHlwZV9jaGVja18xID0gcmVxdWlyZShcIi4vc3RyZWFtLXR5cGUtY2hlY2tcIik7XG5mdW5jdGlvbiBnZXRBd3NDaHVua2VkRW5jb2RpbmdTdHJlYW0oc3RyZWFtLCBvcHRpb25zKSB7XG4gICAgY29uc3QgcmVhZGFibGUgPSBzdHJlYW07XG4gICAgY29uc3QgcmVhZGFibGVTdHJlYW0gPSBzdHJlYW07XG4gICAgaWYgKCgwLCBzdHJlYW1fdHlwZV9jaGVja18xLmlzUmVhZGFibGVTdHJlYW0pKHJlYWRhYmxlU3RyZWFtKSkge1xuICAgICAgICByZXR1cm4gKDAsIGdldEF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbV9icm93c2VyXzEuZ2V0QXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtKShyZWFkYWJsZVN0cmVhbSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IHsgYmFzZTY0RW5jb2RlciwgYm9keUxlbmd0aENoZWNrZXIsIGNoZWNrc3VtQWxnb3JpdGhtRm4sIGNoZWNrc3VtTG9jYXRpb25OYW1lLCBzdHJlYW1IYXNoZXIgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgY2hlY2tzdW1SZXF1aXJlZCA9IGJhc2U2NEVuY29kZXIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBjaGVja3N1bUFsZ29yaXRobUZuICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgY2hlY2tzdW1Mb2NhdGlvbk5hbWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBzdHJlYW1IYXNoZXIgIT09IHVuZGVmaW5lZDtcbiAgICBjb25zdCBkaWdlc3QgPSBjaGVja3N1bVJlcXVpcmVkID8gc3RyZWFtSGFzaGVyKGNoZWNrc3VtQWxnb3JpdGhtRm4sIHJlYWRhYmxlKSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBhd3NDaHVua2VkRW5jb2RpbmdTdHJlYW0gPSBuZXcgbm9kZV9zdHJlYW1fMS5SZWFkYWJsZSh7XG4gICAgICAgIHJlYWQ6ICgpID0+IHsgfSxcbiAgICB9KTtcbiAgICByZWFkYWJsZS5vbihcImRhdGFcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYm9keUxlbmd0aENoZWNrZXIoZGF0YSkgfHwgMDtcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbS5wdXNoKGAke2xlbmd0aC50b1N0cmluZygxNil9XFxyXFxuYCk7XG4gICAgICAgIGF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbS5wdXNoKGRhdGEpO1xuICAgICAgICBhd3NDaHVua2VkRW5jb2RpbmdTdHJlYW0ucHVzaChcIlxcclxcblwiKTtcbiAgICB9KTtcbiAgICByZWFkYWJsZS5vbihcImVuZFwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbS5wdXNoKGAwXFxyXFxuYCk7XG4gICAgICAgIGlmIChjaGVja3N1bVJlcXVpcmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja3N1bSA9IGJhc2U2NEVuY29kZXIoYXdhaXQgZGlnZXN0KTtcbiAgICAgICAgICAgIGF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbS5wdXNoKGAke2NoZWNrc3VtTG9jYXRpb25OYW1lfToke2NoZWNrc3VtfVxcclxcbmApO1xuICAgICAgICAgICAgYXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtLnB1c2goYFxcclxcbmApO1xuICAgICAgICB9XG4gICAgICAgIGF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbS5wdXNoKG51bGwpO1xuICAgIH0pO1xuICAgIHJldHVybiBhd3NDaHVua2VkRW5jb2RpbmdTdHJlYW07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhlYWRTdHJlYW0gPSBoZWFkU3RyZWFtO1xuYXN5bmMgZnVuY3Rpb24gaGVhZFN0cmVhbShzdHJlYW0sIGJ5dGVzKSB7XG4gICAgbGV0IGJ5dGVMZW5ndGhDb3VudGVyID0gMDtcbiAgICBjb25zdCBjaHVua3MgPSBbXTtcbiAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0uZ2V0UmVhZGVyKCk7XG4gICAgbGV0IGlzRG9uZSA9IGZhbHNlO1xuICAgIHdoaWxlICghaXNEb25lKSB7XG4gICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgY2h1bmtzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgYnl0ZUxlbmd0aENvdW50ZXIgKz0gdmFsdWU/LmJ5dGVMZW5ndGggPz8gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnl0ZUxlbmd0aENvdW50ZXIgPj0gYnl0ZXMpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlzRG9uZSA9IGRvbmU7XG4gICAgfVxuICAgIHJlYWRlci5yZWxlYXNlTG9jaygpO1xuICAgIGNvbnN0IGNvbGxlY3RlZCA9IG5ldyBVaW50OEFycmF5KE1hdGgubWluKGJ5dGVzLCBieXRlTGVuZ3RoQ291bnRlcikpO1xuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG4gICAgICAgIGlmIChjaHVuay5ieXRlTGVuZ3RoID4gY29sbGVjdGVkLmJ5dGVMZW5ndGggLSBvZmZzZXQpIHtcbiAgICAgICAgICAgIGNvbGxlY3RlZC5zZXQoY2h1bmsuc3ViYXJyYXkoMCwgY29sbGVjdGVkLmJ5dGVMZW5ndGggLSBvZmZzZXQpLCBvZmZzZXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb2xsZWN0ZWQuc2V0KGNodW5rLCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIG9mZnNldCArPSBjaHVuay5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0ZWQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhlYWRTdHJlYW0gPSB2b2lkIDA7XG5jb25zdCBzdHJlYW1fMSA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XG5jb25zdCBoZWFkU3RyZWFtX2Jyb3dzZXJfMSA9IHJlcXVpcmUoXCIuL2hlYWRTdHJlYW0uYnJvd3NlclwiKTtcbmNvbnN0IHN0cmVhbV90eXBlX2NoZWNrXzEgPSByZXF1aXJlKFwiLi9zdHJlYW0tdHlwZS1jaGVja1wiKTtcbmNvbnN0IGhlYWRTdHJlYW0gPSAoc3RyZWFtLCBieXRlcykgPT4ge1xuICAgIGlmICgoMCwgc3RyZWFtX3R5cGVfY2hlY2tfMS5pc1JlYWRhYmxlU3RyZWFtKShzdHJlYW0pKSB7XG4gICAgICAgIHJldHVybiAoMCwgaGVhZFN0cmVhbV9icm93c2VyXzEuaGVhZFN0cmVhbSkoc3RyZWFtLCBieXRlcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3RvciA9IG5ldyBDb2xsZWN0b3IoKTtcbiAgICAgICAgY29sbGVjdG9yLmxpbWl0ID0gYnl0ZXM7XG4gICAgICAgIHN0cmVhbS5waXBlKGNvbGxlY3Rvcik7XG4gICAgICAgIHN0cmVhbS5vbihcImVycm9yXCIsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbGxlY3Rvci5lbmQoKTtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29sbGVjdG9yLm9uKFwiZXJyb3JcIiwgcmVqZWN0KTtcbiAgICAgICAgY29sbGVjdG9yLm9uKFwiZmluaXNoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoQnVmZmVyLmNvbmNhdCh0aGlzLmJ1ZmZlcnMpKTtcbiAgICAgICAgICAgIHJlc29sdmUoYnl0ZXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhlYWRTdHJlYW0gPSBoZWFkU3RyZWFtO1xuY2xhc3MgQ29sbGVjdG9yIGV4dGVuZHMgc3RyZWFtXzEuV3JpdGFibGUge1xuICAgIGJ1ZmZlcnMgPSBbXTtcbiAgICBsaW1pdCA9IEluZmluaXR5O1xuICAgIGJ5dGVzQnVmZmVyZWQgPSAwO1xuICAgIF93cml0ZShjaHVuaywgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuYnVmZmVycy5wdXNoKGNodW5rKTtcbiAgICAgICAgdGhpcy5ieXRlc0J1ZmZlcmVkICs9IGNodW5rLmJ5dGVMZW5ndGggPz8gMDtcbiAgICAgICAgaWYgKHRoaXMuYnl0ZXNCdWZmZXJlZCA+PSB0aGlzLmxpbWl0KSB7XG4gICAgICAgICAgICBjb25zdCBleGNlc3MgPSB0aGlzLmJ5dGVzQnVmZmVyZWQgLSB0aGlzLmxpbWl0O1xuICAgICAgICAgICAgY29uc3QgdGFpbEJ1ZmZlciA9IHRoaXMuYnVmZmVyc1t0aGlzLmJ1ZmZlcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcnNbdGhpcy5idWZmZXJzLmxlbmd0aCAtIDFdID0gdGFpbEJ1ZmZlci5zdWJhcnJheSgwLCB0YWlsQnVmZmVyLmJ5dGVMZW5ndGggLSBleGNlc3MpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiZmluaXNoXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZGtTdHJlYW1NaXhpbiA9IHZvaWQgMDtcbmNvbnN0IGZldGNoX2h0dHBfaGFuZGxlcl8xID0gcmVxdWlyZShcIkBzbWl0aHkvZmV0Y2gtaHR0cC1oYW5kbGVyXCIpO1xuY29uc3QgdXRpbF9iYXNlNjRfMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtYmFzZTY0XCIpO1xuY29uc3QgdXRpbF9oZXhfZW5jb2RpbmdfMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtaGV4LWVuY29kaW5nXCIpO1xuY29uc3QgdXRpbF91dGY4XzEgPSByZXF1aXJlKFwiQHNtaXRoeS91dGlsLXV0ZjhcIik7XG5jb25zdCBzdHJlYW1fdHlwZV9jaGVja18xID0gcmVxdWlyZShcIi4vc3RyZWFtLXR5cGUtY2hlY2tcIik7XG5jb25zdCBFUlJfTVNHX1NUUkVBTV9IQVNfQkVFTl9UUkFOU0ZPUk1FRCA9IFwiVGhlIHN0cmVhbSBoYXMgYWxyZWFkeSBiZWVuIHRyYW5zZm9ybWVkLlwiO1xuY29uc3Qgc2RrU3RyZWFtTWl4aW4gPSAoc3RyZWFtKSA9PiB7XG4gICAgaWYgKCFpc0Jsb2JJbnN0YW5jZShzdHJlYW0pICYmICEoMCwgc3RyZWFtX3R5cGVfY2hlY2tfMS5pc1JlYWRhYmxlU3RyZWFtKShzdHJlYW0pKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBzdHJlYW0/Ll9fcHJvdG9fXz8uY29uc3RydWN0b3I/Lm5hbWUgfHwgc3RyZWFtO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgc3RyZWFtIGltcGxlbWVudGF0aW9uLCBleHBlY3QgQmxvYiBvciBSZWFkYWJsZVN0cmVhbSwgZ290ICR7bmFtZX1gKTtcbiAgICB9XG4gICAgbGV0IHRyYW5zZm9ybWVkID0gZmFsc2U7XG4gICAgY29uc3QgdHJhbnNmb3JtVG9CeXRlQXJyYXkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUl9NU0dfU1RSRUFNX0hBU19CRUVOX1RSQU5TRk9STUVEKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBhd2FpdCAoMCwgZmV0Y2hfaHR0cF9oYW5kbGVyXzEuc3RyZWFtQ29sbGVjdG9yKShzdHJlYW0pO1xuICAgIH07XG4gICAgY29uc3QgYmxvYlRvV2ViU3RyZWFtID0gKGJsb2IpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBibG9iLnN0cmVhbSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdHJhbnNmb3JtIHBheWxvYWQgQmxvYiB0byB3ZWIgc3RyZWFtLiBQbGVhc2UgbWFrZSBzdXJlIHRoZSBCbG9iLnN0cmVhbSgpIGlzIHBvbHlmaWxsZWQuXFxuXCIgK1xuICAgICAgICAgICAgICAgIFwiSWYgeW91IGFyZSB1c2luZyBSZWFjdCBOYXRpdmUsIHRoaXMgQVBJIGlzIG5vdCB5ZXQgc3VwcG9ydGVkLCBzZWU6IGh0dHBzOi8vcmVhY3QtbmF0aXZlLmNhbm55LmlvL2ZlYXR1cmUtcmVxdWVzdHMvcC9mZXRjaC1zdHJlYW1pbmctYm9keVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvYi5zdHJlYW0oKTtcbiAgICB9O1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN0cmVhbSwge1xuICAgICAgICB0cmFuc2Zvcm1Ub0J5dGVBcnJheTogdHJhbnNmb3JtVG9CeXRlQXJyYXksXG4gICAgICAgIHRyYW5zZm9ybVRvU3RyaW5nOiBhc3luYyAoZW5jb2RpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZiA9IGF3YWl0IHRyYW5zZm9ybVRvQnl0ZUFycmF5KCk7XG4gICAgICAgICAgICBpZiAoZW5jb2RpbmcgPT09IFwiYmFzZTY0XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIHV0aWxfYmFzZTY0XzEudG9CYXNlNjQpKGJ1Zik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbmNvZGluZyA9PT0gXCJoZXhcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgdXRpbF9oZXhfZW5jb2RpbmdfMS50b0hleCkoYnVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQgfHwgZW5jb2RpbmcgPT09IFwidXRmOFwiIHx8IGVuY29kaW5nID09PSBcInV0Zi04XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIHV0aWxfdXRmOF8xLnRvVXRmOCkoYnVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcihlbmNvZGluZykuZGVjb2RlKGJ1Zik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUZXh0RGVjb2RlciBpcyBub3QgYXZhaWxhYmxlLCBwbGVhc2UgbWFrZSBzdXJlIHBvbHlmaWxsIGlzIHByb3ZpZGVkLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNmb3JtVG9XZWJTdHJlYW06ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJfTVNHX1NUUkVBTV9IQVNfQkVFTl9UUkFOU0ZPUk1FRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaXNCbG9iSW5zdGFuY2Uoc3RyZWFtKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBibG9iVG9XZWJTdHJlYW0oc3RyZWFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCgwLCBzdHJlYW1fdHlwZV9jaGVja18xLmlzUmVhZGFibGVTdHJlYW0pKHN0cmVhbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdHJhbnNmb3JtIHBheWxvYWQgdG8gd2ViIHN0cmVhbSwgZ290ICR7c3RyZWFtfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xufTtcbmV4cG9ydHMuc2RrU3RyZWFtTWl4aW4gPSBzZGtTdHJlYW1NaXhpbjtcbmNvbnN0IGlzQmxvYkluc3RhbmNlID0gKHN0cmVhbSkgPT4gdHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJiBzdHJlYW0gaW5zdGFuY2VvZiBCbG9iO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZGtTdHJlYW1NaXhpbiA9IHZvaWQgMDtcbmNvbnN0IG5vZGVfaHR0cF9oYW5kbGVyXzEgPSByZXF1aXJlKFwiQHNtaXRoeS9ub2RlLWh0dHAtaGFuZGxlclwiKTtcbmNvbnN0IHV0aWxfYnVmZmVyX2Zyb21fMSA9IHJlcXVpcmUoXCJAc21pdGh5L3V0aWwtYnVmZmVyLWZyb21cIik7XG5jb25zdCBzdHJlYW1fMSA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XG5jb25zdCBzZGtfc3RyZWFtX21peGluX2Jyb3dzZXJfMSA9IHJlcXVpcmUoXCIuL3Nkay1zdHJlYW0tbWl4aW4uYnJvd3NlclwiKTtcbmNvbnN0IEVSUl9NU0dfU1RSRUFNX0hBU19CRUVOX1RSQU5TRk9STUVEID0gXCJUaGUgc3RyZWFtIGhhcyBhbHJlYWR5IGJlZW4gdHJhbnNmb3JtZWQuXCI7XG5jb25zdCBzZGtTdHJlYW1NaXhpbiA9IChzdHJlYW0pID0+IHtcbiAgICBpZiAoIShzdHJlYW0gaW5zdGFuY2VvZiBzdHJlYW1fMS5SZWFkYWJsZSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAoMCwgc2RrX3N0cmVhbV9taXhpbl9icm93c2VyXzEuc2RrU3RyZWFtTWl4aW4pKHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzdHJlYW0/Ll9fcHJvdG9fXz8uY29uc3RydWN0b3I/Lm5hbWUgfHwgc3RyZWFtO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHN0cmVhbSBpbXBsZW1lbnRhdGlvbiwgZXhwZWN0IFN0cmVhbS5SZWFkYWJsZSBpbnN0YW5jZSwgZ290ICR7bmFtZX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgdHJhbnNmb3JtZWQgPSBmYWxzZTtcbiAgICBjb25zdCB0cmFuc2Zvcm1Ub0J5dGVBcnJheSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHRyYW5zZm9ybWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJSX01TR19TVFJFQU1fSEFTX0JFRU5fVFJBTlNGT1JNRUQpO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zZm9ybWVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGF3YWl0ICgwLCBub2RlX2h0dHBfaGFuZGxlcl8xLnN0cmVhbUNvbGxlY3Rvcikoc3RyZWFtKTtcbiAgICB9O1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN0cmVhbSwge1xuICAgICAgICB0cmFuc2Zvcm1Ub0J5dGVBcnJheSxcbiAgICAgICAgdHJhbnNmb3JtVG9TdHJpbmc6IGFzeW5jIChlbmNvZGluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnVmID0gYXdhaXQgdHJhbnNmb3JtVG9CeXRlQXJyYXkoKTtcbiAgICAgICAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkIHx8IEJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgdXRpbF9idWZmZXJfZnJvbV8xLmZyb21BcnJheUJ1ZmZlcikoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlTGVuZ3RoKS50b1N0cmluZyhlbmNvZGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKGVuY29kaW5nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2Rlci5kZWNvZGUoYnVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNmb3JtVG9XZWJTdHJlYW06ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJfTVNHX1NUUkVBTV9IQVNfQkVFTl9UUkFOU0ZPUk1FRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RyZWFtLnJlYWRhYmxlRmxvd2luZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHJlYW0gaGFzIGJlZW4gY29uc3VtZWQgYnkgb3RoZXIgY2FsbGJhY2tzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RyZWFtXzEuUmVhZGFibGUudG9XZWIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWRhYmxlLnRvV2ViKCkgaXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIGVuc3VyZSBhIHBvbHlmaWxsIGlzIGF2YWlsYWJsZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gc3RyZWFtXzEuUmVhZGFibGUudG9XZWIoc3RyZWFtKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn07XG5leHBvcnRzLnNka1N0cmVhbU1peGluID0gc2RrU3RyZWFtTWl4aW47XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNwbGl0U3RyZWFtID0gc3BsaXRTdHJlYW07XG5hc3luYyBmdW5jdGlvbiBzcGxpdFN0cmVhbShzdHJlYW0pIHtcbiAgICBpZiAodHlwZW9mIHN0cmVhbS5zdHJlYW0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBzdHJlYW0gPSBzdHJlYW0uc3RyZWFtKCk7XG4gICAgfVxuICAgIGNvbnN0IHJlYWRhYmxlU3RyZWFtID0gc3RyZWFtO1xuICAgIHJldHVybiByZWFkYWJsZVN0cmVhbS50ZWUoKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3BsaXRTdHJlYW0gPSBzcGxpdFN0cmVhbTtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcInN0cmVhbVwiKTtcbmNvbnN0IHNwbGl0U3RyZWFtX2Jyb3dzZXJfMSA9IHJlcXVpcmUoXCIuL3NwbGl0U3RyZWFtLmJyb3dzZXJcIik7XG5jb25zdCBzdHJlYW1fdHlwZV9jaGVja18xID0gcmVxdWlyZShcIi4vc3RyZWFtLXR5cGUtY2hlY2tcIik7XG5hc3luYyBmdW5jdGlvbiBzcGxpdFN0cmVhbShzdHJlYW0pIHtcbiAgICBpZiAoKDAsIHN0cmVhbV90eXBlX2NoZWNrXzEuaXNSZWFkYWJsZVN0cmVhbSkoc3RyZWFtKSB8fCAoMCwgc3RyZWFtX3R5cGVfY2hlY2tfMS5pc0Jsb2IpKHN0cmVhbSkpIHtcbiAgICAgICAgcmV0dXJuICgwLCBzcGxpdFN0cmVhbV9icm93c2VyXzEuc3BsaXRTdHJlYW0pKHN0cmVhbSk7XG4gICAgfVxuICAgIGNvbnN0IHN0cmVhbTEgPSBuZXcgc3RyZWFtXzEuUGFzc1Rocm91Z2goKTtcbiAgICBjb25zdCBzdHJlYW0yID0gbmV3IHN0cmVhbV8xLlBhc3NUaHJvdWdoKCk7XG4gICAgc3RyZWFtLnBpcGUoc3RyZWFtMSk7XG4gICAgc3RyZWFtLnBpcGUoc3RyZWFtMik7XG4gICAgcmV0dXJuIFtzdHJlYW0xLCBzdHJlYW0yXTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsQmFzZTY0ID0gcmVxdWlyZSgnQHNtaXRoeS91dGlsLWJhc2U2NCcpO1xudmFyIHV0aWxVdGY4ID0gcmVxdWlyZSgnQHNtaXRoeS91dGlsLXV0ZjgnKTtcbnZhciBDaGVja3N1bVN0cmVhbSA9IHJlcXVpcmUoJy4vY2hlY2tzdW0vQ2hlY2tzdW1TdHJlYW0nKTtcbnZhciBjcmVhdGVDaGVja3N1bVN0cmVhbSA9IHJlcXVpcmUoJy4vY2hlY2tzdW0vY3JlYXRlQ2hlY2tzdW1TdHJlYW0nKTtcbnZhciBjcmVhdGVCdWZmZXJlZFJlYWRhYmxlID0gcmVxdWlyZSgnLi9jcmVhdGVCdWZmZXJlZFJlYWRhYmxlJyk7XG52YXIgZ2V0QXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtID0gcmVxdWlyZSgnLi9nZXRBd3NDaHVua2VkRW5jb2RpbmdTdHJlYW0nKTtcbnZhciBoZWFkU3RyZWFtID0gcmVxdWlyZSgnLi9oZWFkU3RyZWFtJyk7XG52YXIgc2RrU3RyZWFtTWl4aW4gPSByZXF1aXJlKCcuL3Nkay1zdHJlYW0tbWl4aW4nKTtcbnZhciBzcGxpdFN0cmVhbSA9IHJlcXVpcmUoJy4vc3BsaXRTdHJlYW0nKTtcbnZhciBzdHJlYW1UeXBlQ2hlY2sgPSByZXF1aXJlKCcuL3N0cmVhbS10eXBlLWNoZWNrJyk7XG5cbmNsYXNzIFVpbnQ4QXJyYXlCbG9iQWRhcHRlciBleHRlbmRzIFVpbnQ4QXJyYXkge1xuICAgIHN0YXRpYyBmcm9tU3RyaW5nKHNvdXJjZSwgZW5jb2RpbmcgPSBcInV0Zi04XCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmIChlbmNvZGluZyA9PT0gXCJiYXNlNjRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBVaW50OEFycmF5QmxvYkFkYXB0ZXIubXV0YXRlKHV0aWxCYXNlNjQuZnJvbUJhc2U2NChzb3VyY2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBVaW50OEFycmF5QmxvYkFkYXB0ZXIubXV0YXRlKHV0aWxVdGY4LmZyb21VdGY4KHNvdXJjZSkpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgY29udmVyc2lvbiBmcm9tICR7dHlwZW9mIHNvdXJjZX0gdG8gVWludDhBcnJheUJsb2JBZGFwdGVyLmApO1xuICAgIH1cbiAgICBzdGF0aWMgbXV0YXRlKHNvdXJjZSkge1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc291cmNlLCBVaW50OEFycmF5QmxvYkFkYXB0ZXIucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9XG4gICAgdHJhbnNmb3JtVG9TdHJpbmcoZW5jb2RpbmcgPSBcInV0Zi04XCIpIHtcbiAgICAgICAgaWYgKGVuY29kaW5nID09PSBcImJhc2U2NFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbEJhc2U2NC50b0Jhc2U2NCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXRpbFV0ZjgudG9VdGY4KHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0cy5pc0Jsb2IgPSBzdHJlYW1UeXBlQ2hlY2suaXNCbG9iO1xuZXhwb3J0cy5pc1JlYWRhYmxlU3RyZWFtID0gc3RyZWFtVHlwZUNoZWNrLmlzUmVhZGFibGVTdHJlYW07XG5leHBvcnRzLlVpbnQ4QXJyYXlCbG9iQWRhcHRlciA9IFVpbnQ4QXJyYXlCbG9iQWRhcHRlcjtcbk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChDaGVja3N1bVN0cmVhbSwgJ19fcHJvdG9fXycpICYmXG4gICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCAnX19wcm90b19fJykgJiZcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fcHJvdG9fXycsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IENoZWNrc3VtU3RyZWFtWydfX3Byb3RvX18nXVxuICAgIH0pO1xuXG5PYmplY3Qua2V5cyhDaGVja3N1bVN0cmVhbSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBrKSkgZXhwb3J0c1trXSA9IENoZWNrc3VtU3RyZWFtW2tdO1xufSk7XG5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY3JlYXRlQ2hlY2tzdW1TdHJlYW0sICdfX3Byb3RvX18nKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgJ19fcHJvdG9fXycpICYmXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX3Byb3RvX18nLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBjcmVhdGVDaGVja3N1bVN0cmVhbVsnX19wcm90b19fJ11cbiAgICB9KTtcblxuT2JqZWN0LmtleXMoY3JlYXRlQ2hlY2tzdW1TdHJlYW0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICBpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgaykpIGV4cG9ydHNba10gPSBjcmVhdGVDaGVja3N1bVN0cmVhbVtrXTtcbn0pO1xuT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNyZWF0ZUJ1ZmZlcmVkUmVhZGFibGUsICdfX3Byb3RvX18nKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgJ19fcHJvdG9fXycpICYmXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX3Byb3RvX18nLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBjcmVhdGVCdWZmZXJlZFJlYWRhYmxlWydfX3Byb3RvX18nXVxuICAgIH0pO1xuXG5PYmplY3Qua2V5cyhjcmVhdGVCdWZmZXJlZFJlYWRhYmxlKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIGspKSBleHBvcnRzW2tdID0gY3JlYXRlQnVmZmVyZWRSZWFkYWJsZVtrXTtcbn0pO1xuT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGdldEF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbSwgJ19fcHJvdG9fXycpICYmXG4gICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCAnX19wcm90b19fJykgJiZcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fcHJvdG9fXycsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGdldEF3c0NodW5rZWRFbmNvZGluZ1N0cmVhbVsnX19wcm90b19fJ11cbiAgICB9KTtcblxuT2JqZWN0LmtleXMoZ2V0QXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIGspKSBleHBvcnRzW2tdID0gZ2V0QXdzQ2h1bmtlZEVuY29kaW5nU3RyZWFtW2tdO1xufSk7XG5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZFN0cmVhbSwgJ19fcHJvdG9fXycpICYmXG4gICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCAnX19wcm90b19fJykgJiZcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fcHJvdG9fXycsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGhlYWRTdHJlYW1bJ19fcHJvdG9fXyddXG4gICAgfSk7XG5cbk9iamVjdC5rZXlzKGhlYWRTdHJlYW0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICBpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgaykpIGV4cG9ydHNba10gPSBoZWFkU3RyZWFtW2tdO1xufSk7XG5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2RrU3RyZWFtTWl4aW4sICdfX3Byb3RvX18nKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgJ19fcHJvdG9fXycpICYmXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX3Byb3RvX18nLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBzZGtTdHJlYW1NaXhpblsnX19wcm90b19fJ11cbiAgICB9KTtcblxuT2JqZWN0LmtleXMoc2RrU3RyZWFtTWl4aW4pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICBpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgaykpIGV4cG9ydHNba10gPSBzZGtTdHJlYW1NaXhpbltrXTtcbn0pO1xuT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNwbGl0U3RyZWFtLCAnX19wcm90b19fJykgJiZcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsICdfX3Byb3RvX18nKSAmJlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19wcm90b19fJywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogc3BsaXRTdHJlYW1bJ19fcHJvdG9fXyddXG4gICAgfSk7XG5cbk9iamVjdC5rZXlzKHNwbGl0U3RyZWFtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIGspKSBleHBvcnRzW2tdID0gc3BsaXRTdHJlYW1ba107XG59KTtcbiIsICJpbXBvcnQgeyBVaW50OEFycmF5QmxvYkFkYXB0ZXIgfSBmcm9tIFwiQHNtaXRoeS91dGlsLXN0cmVhbVwiO1xuZXhwb3J0IGNvbnN0IGNvbGxlY3RCb2R5ID0gYXN5bmMgKHN0cmVhbUJvZHkgPSBuZXcgVWludDhBcnJheSgpLCBjb250ZXh0KSA9PiB7XG4gICAgaWYgKHN0cmVhbUJvZHkgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5QmxvYkFkYXB0ZXIubXV0YXRlKHN0cmVhbUJvZHkpO1xuICAgIH1cbiAgICBpZiAoIXN0cmVhbUJvZHkpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXlCbG9iQWRhcHRlci5tdXRhdGUobmV3IFVpbnQ4QXJyYXkoKSk7XG4gICAgfVxuICAgIGNvbnN0IGZyb21Db250ZXh0ID0gY29udGV4dC5zdHJlYW1Db2xsZWN0b3Ioc3RyZWFtQm9keSk7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXlCbG9iQWRhcHRlci5tdXRhdGUoYXdhaXQgZnJvbUNvbnRleHQpO1xufTtcbiIsICJleHBvcnQgY2xhc3MgU2VyZGVDb250ZXh0IHtcbiAgICBzZXJkZUNvbnRleHQ7XG4gICAgc2V0U2VyZGVDb250ZXh0KHNlcmRlQ29udGV4dCkge1xuICAgICAgICB0aGlzLnNlcmRlQ29udGV4dCA9IHNlcmRlQ29udGV4dDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgTm9ybWFsaXplZFNjaGVtYSwgdHJhbnNsYXRlVHJhaXRzLCBUeXBlUmVnaXN0cnkgfSBmcm9tIFwiQHNtaXRoeS9jb3JlL3NjaGVtYVwiO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAc21pdGh5L3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7IFNlcmRlQ29udGV4dCB9IGZyb20gXCIuL1NlcmRlQ29udGV4dFwiO1xuZXhwb3J0IGNsYXNzIEh0dHBQcm90b2NvbCBleHRlbmRzIFNlcmRlQ29udGV4dCB7XG4gICAgb3B0aW9ucztcbiAgICBjb21wb3NpdGVFcnJvclJlZ2lzdHJ5O1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5jb21wb3NpdGVFcnJvclJlZ2lzdHJ5ID0gVHlwZVJlZ2lzdHJ5LmZvcihvcHRpb25zLmRlZmF1bHROYW1lc3BhY2UpO1xuICAgICAgICBmb3IgKGNvbnN0IGV0ciBvZiBvcHRpb25zLmVycm9yVHlwZVJlZ2lzdHJpZXMgPz8gW10pIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9zaXRlRXJyb3JSZWdpc3RyeS5jb3B5RnJvbShldHIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJlcXVlc3RUeXBlKCkge1xuICAgICAgICByZXR1cm4gSHR0cFJlcXVlc3Q7XG4gICAgfVxuICAgIGdldFJlc3BvbnNlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIEh0dHBSZXNwb25zZTtcbiAgICB9XG4gICAgc2V0U2VyZGVDb250ZXh0KHNlcmRlQ29udGV4dCkge1xuICAgICAgICB0aGlzLnNlcmRlQ29udGV4dCA9IHNlcmRlQ29udGV4dDtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVyLnNldFNlcmRlQ29udGV4dChzZXJkZUNvbnRleHQpO1xuICAgICAgICB0aGlzLmRlc2VyaWFsaXplci5zZXRTZXJkZUNvbnRleHQoc2VyZGVDb250ZXh0KTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGF5bG9hZENvZGVjKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGF5bG9hZENvZGVjKCkuc2V0U2VyZGVDb250ZXh0KHNlcmRlQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlU2VydmljZUVuZHBvaW50KHJlcXVlc3QsIGVuZHBvaW50KSB7XG4gICAgICAgIGlmIChcInVybFwiIGluIGVuZHBvaW50KSB7XG4gICAgICAgICAgICByZXF1ZXN0LnByb3RvY29sID0gZW5kcG9pbnQudXJsLnByb3RvY29sO1xuICAgICAgICAgICAgcmVxdWVzdC5ob3N0bmFtZSA9IGVuZHBvaW50LnVybC5ob3N0bmFtZTtcbiAgICAgICAgICAgIHJlcXVlc3QucG9ydCA9IGVuZHBvaW50LnVybC5wb3J0ID8gTnVtYmVyKGVuZHBvaW50LnVybC5wb3J0KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJlcXVlc3QucGF0aCA9IGVuZHBvaW50LnVybC5wYXRobmFtZTtcbiAgICAgICAgICAgIHJlcXVlc3QuZnJhZ21lbnQgPSBlbmRwb2ludC51cmwuaGFzaCB8fCB2b2lkIDA7XG4gICAgICAgICAgICByZXF1ZXN0LnVzZXJuYW1lID0gZW5kcG9pbnQudXJsLnVzZXJuYW1lIHx8IHZvaWQgMDtcbiAgICAgICAgICAgIHJlcXVlc3QucGFzc3dvcmQgPSBlbmRwb2ludC51cmwucGFzc3dvcmQgfHwgdm9pZCAwO1xuICAgICAgICAgICAgaWYgKCFyZXF1ZXN0LnF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5xdWVyeSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgZW5kcG9pbnQudXJsLnNlYXJjaFBhcmFtcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnF1ZXJ5W2tdID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbmRwb2ludC5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgdmFsdWVzXSBvZiBPYmplY3QuZW50cmllcyhlbmRwb2ludC5oZWFkZXJzKSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmhlYWRlcnNbbmFtZV0gPSB2YWx1ZXMuam9pbihcIiwgXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdC5wcm90b2NvbCA9IGVuZHBvaW50LnByb3RvY29sO1xuICAgICAgICAgICAgcmVxdWVzdC5ob3N0bmFtZSA9IGVuZHBvaW50Lmhvc3RuYW1lO1xuICAgICAgICAgICAgcmVxdWVzdC5wb3J0ID0gZW5kcG9pbnQucG9ydCA/IE51bWJlcihlbmRwb2ludC5wb3J0KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJlcXVlc3QucGF0aCA9IGVuZHBvaW50LnBhdGg7XG4gICAgICAgICAgICByZXF1ZXN0LnF1ZXJ5ID0ge1xuICAgICAgICAgICAgICAgIC4uLmVuZHBvaW50LnF1ZXJ5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlbmRwb2ludC5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGVuZHBvaW50LmhlYWRlcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEhvc3RQcmVmaXgocmVxdWVzdCwgb3BlcmF0aW9uU2NoZW1hLCBpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5zZXJkZUNvbnRleHQ/LmRpc2FibGVIb3N0UHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5wdXROcyA9IE5vcm1hbGl6ZWRTY2hlbWEub2Yob3BlcmF0aW9uU2NoZW1hLmlucHV0KTtcbiAgICAgICAgY29uc3Qgb3BUcmFpdHMgPSB0cmFuc2xhdGVUcmFpdHMob3BlcmF0aW9uU2NoZW1hLnRyYWl0cyA/PyB7fSk7XG4gICAgICAgIGlmIChvcFRyYWl0cy5lbmRwb2ludCkge1xuICAgICAgICAgICAgbGV0IGhvc3RQcmVmaXggPSBvcFRyYWl0cy5lbmRwb2ludD8uWzBdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBob3N0UHJlZml4ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG9zdExhYmVsSW5wdXRzID0gWy4uLmlucHV0TnMuc3RydWN0SXRlcmF0b3IoKV0uZmlsdGVyKChbLCBtZW1iZXJdKSA9PiBtZW1iZXIuZ2V0TWVyZ2VkVHJhaXRzKCkuaG9zdExhYmVsKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtuYW1lXSBvZiBob3N0TGFiZWxJbnB1dHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBpbnB1dFtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlbWVudCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBAc21pdGh5L2NvcmUvc2NoZW1hIC0gJHtuYW1lfSBpbiBpbnB1dCBtdXN0IGJlIGEgc3RyaW5nIGFzIGhvc3RMYWJlbC5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBob3N0UHJlZml4ID0gaG9zdFByZWZpeC5yZXBsYWNlKGB7JHtuYW1lfX1gLCByZXBsYWNlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcXVlc3QuaG9zdG5hbWUgPSBob3N0UHJlZml4ICsgcmVxdWVzdC5ob3N0bmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkZXNlcmlhbGl6ZU1ldGFkYXRhKG91dHB1dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHR0cFN0YXR1c0NvZGU6IG91dHB1dC5zdGF0dXNDb2RlLFxuICAgICAgICAgICAgcmVxdWVzdElkOiBvdXRwdXQuaGVhZGVyc1tcIngtYW16bi1yZXF1ZXN0aWRcIl0gPz8gb3V0cHV0LmhlYWRlcnNbXCJ4LWFtem4tcmVxdWVzdC1pZFwiXSA/PyBvdXRwdXQuaGVhZGVyc1tcIngtYW16LXJlcXVlc3QtaWRcIl0sXG4gICAgICAgICAgICBleHRlbmRlZFJlcXVlc3RJZDogb3V0cHV0LmhlYWRlcnNbXCJ4LWFtei1pZC0yXCJdLFxuICAgICAgICAgICAgY2ZJZDogb3V0cHV0LmhlYWRlcnNbXCJ4LWFtei1jZi1pZFwiXSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXN5bmMgc2VyaWFsaXplRXZlbnRTdHJlYW0oeyBldmVudFN0cmVhbSwgcmVxdWVzdFNjaGVtYSwgaW5pdGlhbFJlcXVlc3QsIH0pIHtcbiAgICAgICAgY29uc3QgZXZlbnRTdHJlYW1TZXJkZSA9IGF3YWl0IHRoaXMubG9hZEV2ZW50U3RyZWFtQ2FwYWJpbGl0eSgpO1xuICAgICAgICByZXR1cm4gZXZlbnRTdHJlYW1TZXJkZS5zZXJpYWxpemVFdmVudFN0cmVhbSh7XG4gICAgICAgICAgICBldmVudFN0cmVhbSxcbiAgICAgICAgICAgIHJlcXVlc3RTY2hlbWEsXG4gICAgICAgICAgICBpbml0aWFsUmVxdWVzdCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGRlc2VyaWFsaXplRXZlbnRTdHJlYW0oeyByZXNwb25zZSwgcmVzcG9uc2VTY2hlbWEsIGluaXRpYWxSZXNwb25zZUNvbnRhaW5lciwgfSkge1xuICAgICAgICBjb25zdCBldmVudFN0cmVhbVNlcmRlID0gYXdhaXQgdGhpcy5sb2FkRXZlbnRTdHJlYW1DYXBhYmlsaXR5KCk7XG4gICAgICAgIHJldHVybiBldmVudFN0cmVhbVNlcmRlLmRlc2VyaWFsaXplRXZlbnRTdHJlYW0oe1xuICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICByZXNwb25zZVNjaGVtYSxcbiAgICAgICAgICAgIGluaXRpYWxSZXNwb25zZUNvbnRhaW5lcixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRFdmVudFN0cmVhbUNhcGFiaWxpdHkoKSB7XG4gICAgICAgIGNvbnN0IHsgRXZlbnRTdHJlYW1TZXJkZSB9ID0gYXdhaXQgaW1wb3J0KFwiQHNtaXRoeS9jb3JlL2V2ZW50LXN0cmVhbXNcIik7XG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRTdHJlYW1TZXJkZSh7XG4gICAgICAgICAgICBtYXJzaGFsbGVyOiB0aGlzLmdldEV2ZW50U3RyZWFtTWFyc2hhbGxlcigpLFxuICAgICAgICAgICAgc2VyaWFsaXplcjogdGhpcy5zZXJpYWxpemVyLFxuICAgICAgICAgICAgZGVzZXJpYWxpemVyOiB0aGlzLmRlc2VyaWFsaXplcixcbiAgICAgICAgICAgIHNlcmRlQ29udGV4dDogdGhpcy5zZXJkZUNvbnRleHQsXG4gICAgICAgICAgICBkZWZhdWx0Q29udGVudFR5cGU6IHRoaXMuZ2V0RGVmYXVsdENvbnRlbnRUeXBlKCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXREZWZhdWx0Q29udGVudFR5cGUoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQHNtaXRoeS9jb3JlL3Byb3RvY29scyAtICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBnZXREZWZhdWx0Q29udGVudFR5cGUoKSBpbXBsZW1lbnRhdGlvbiBtaXNzaW5nLmApO1xuICAgIH1cbiAgICBhc3luYyBkZXNlcmlhbGl6ZUh0dHBNZXNzYWdlKHNjaGVtYSwgY29udGV4dCwgcmVzcG9uc2UsIGFyZzQsIGFyZzUpIHtcbiAgICAgICAgdm9pZCBzY2hlbWE7XG4gICAgICAgIHZvaWQgY29udGV4dDtcbiAgICAgICAgdm9pZCByZXNwb25zZTtcbiAgICAgICAgdm9pZCBhcmc0O1xuICAgICAgICB2b2lkIGFyZzU7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgZ2V0RXZlbnRTdHJlYW1NYXJzaGFsbGVyKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5zZXJkZUNvbnRleHQ7XG4gICAgICAgIGlmICghY29udGV4dC5ldmVudFN0cmVhbU1hcnNoYWxsZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkBzbWl0aHkvY29yZSAtIEh0dHBQcm90b2NvbDogZXZlbnRTdHJlYW1NYXJzaGFsbGVyIG1pc3NpbmcgaW4gc2VyZGVDb250ZXh0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5ldmVudFN0cmVhbU1hcnNoYWxsZXI7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IE5vcm1hbGl6ZWRTY2hlbWEsIHRyYW5zbGF0ZVRyYWl0cyB9IGZyb20gXCJAc21pdGh5L2NvcmUvc2NoZW1hXCI7XG5pbXBvcnQgeyBzcGxpdEV2ZXJ5LCBzcGxpdEhlYWRlciB9IGZyb20gXCJAc21pdGh5L2NvcmUvc2VyZGVcIjtcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBzbWl0aHkvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgc2RrU3RyZWFtTWl4aW4gfSBmcm9tIFwiQHNtaXRoeS91dGlsLXN0cmVhbVwiO1xuaW1wb3J0IHsgY29sbGVjdEJvZHkgfSBmcm9tIFwiLi9jb2xsZWN0LXN0cmVhbS1ib2R5XCI7XG5pbXBvcnQgeyBleHRlbmRlZEVuY29kZVVSSUNvbXBvbmVudCB9IGZyb20gXCIuL2V4dGVuZGVkLWVuY29kZS11cmktY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIdHRwUHJvdG9jb2wgfSBmcm9tIFwiLi9IdHRwUHJvdG9jb2xcIjtcbmV4cG9ydCBjbGFzcyBIdHRwQmluZGluZ1Byb3RvY29sIGV4dGVuZHMgSHR0cFByb3RvY29sIHtcbiAgICBhc3luYyBzZXJpYWxpemVSZXF1ZXN0KG9wZXJhdGlvblNjaGVtYSwgX2lucHV0LCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gX2lucHV0ICYmIHR5cGVvZiBfaW5wdXQgPT09IFwib2JqZWN0XCIgPyBfaW5wdXQgOiB7fTtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplciA9IHRoaXMuc2VyaWFsaXplcjtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB7fTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHt9O1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGF3YWl0IGNvbnRleHQuZW5kcG9pbnQoKTtcbiAgICAgICAgY29uc3QgbnMgPSBOb3JtYWxpemVkU2NoZW1hLm9mKG9wZXJhdGlvblNjaGVtYT8uaW5wdXQpO1xuICAgICAgICBjb25zdCBwYXlsb2FkTWVtYmVyTmFtZXMgPSBbXTtcbiAgICAgICAgY29uc3QgcGF5bG9hZE1lbWJlclNjaGVtYXMgPSBbXTtcbiAgICAgICAgbGV0IGhhc05vbkh0dHBCaW5kaW5nTWVtYmVyID0gZmFsc2U7XG4gICAgICAgIGxldCBwYXlsb2FkO1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEh0dHBSZXF1ZXN0KHtcbiAgICAgICAgICAgIHByb3RvY29sOiBcIlwiLFxuICAgICAgICAgICAgaG9zdG5hbWU6IFwiXCIsXG4gICAgICAgICAgICBwb3J0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBwYXRoOiBcIlwiLFxuICAgICAgICAgICAgZnJhZ21lbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICBib2R5OiB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZW5kcG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VydmljZUVuZHBvaW50KHJlcXVlc3QsIGVuZHBvaW50KTtcbiAgICAgICAgICAgIHRoaXMuc2V0SG9zdFByZWZpeChyZXF1ZXN0LCBvcGVyYXRpb25TY2hlbWEsIGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IG9wVHJhaXRzID0gdHJhbnNsYXRlVHJhaXRzKG9wZXJhdGlvblNjaGVtYS50cmFpdHMpO1xuICAgICAgICAgICAgaWYgKG9wVHJhaXRzLmh0dHApIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm1ldGhvZCA9IG9wVHJhaXRzLmh0dHBbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgW3BhdGgsIHNlYXJjaF0gPSBvcFRyYWl0cy5odHRwWzFdLnNwbGl0KFwiP1wiKTtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5wYXRoID09IFwiL1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QucGF0aCA9IHBhdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnBhdGggKz0gcGF0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhaXRTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCA/PyBcIlwiKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBPYmplY3QuZnJvbUVudHJpZXModHJhaXRTZWFyY2hQYXJhbXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IFttZW1iZXJOYW1lLCBtZW1iZXJOc10gb2YgbnMuc3RydWN0SXRlcmF0b3IoKSkge1xuICAgICAgICAgICAgY29uc3QgbWVtYmVyVHJhaXRzID0gbWVtYmVyTnMuZ2V0TWVyZ2VkVHJhaXRzKCkgPz8ge307XG4gICAgICAgICAgICBjb25zdCBpbnB1dE1lbWJlclZhbHVlID0gaW5wdXRbbWVtYmVyTmFtZV07XG4gICAgICAgICAgICBpZiAoaW5wdXRNZW1iZXJWYWx1ZSA9PSBudWxsICYmICFtZW1iZXJOcy5pc0lkZW1wb3RlbmN5VG9rZW4oKSkge1xuICAgICAgICAgICAgICAgIGlmIChtZW1iZXJUcmFpdHMuaHR0cExhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnBhdGguaW5jbHVkZXMoYHske21lbWJlck5hbWV9K31gKSB8fCByZXF1ZXN0LnBhdGguaW5jbHVkZXMoYHske21lbWJlck5hbWV9fWApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHZhbHVlIHByb3ZpZGVkIGZvciBpbnB1dCBIVFRQIGxhYmVsOiAke21lbWJlck5hbWV9LmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1lbWJlclRyYWl0cy5odHRwUGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU3RyZWFtaW5nID0gbWVtYmVyTnMuaXNTdHJlYW1pbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJlYW1pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNFdmVudFN0cmVhbSA9IG1lbWJlck5zLmlzU3RydWN0U2NoZW1hKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0V2ZW50U3RyZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRbbWVtYmVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkID0gYXdhaXQgdGhpcy5zZXJpYWxpemVFdmVudFN0cmVhbSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50U3RyZWFtOiBpbnB1dFttZW1iZXJOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFNjaGVtYTogbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkID0gaW5wdXRNZW1iZXJWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplci53cml0ZShtZW1iZXJOcywgaW5wdXRNZW1iZXJWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQgPSBzZXJpYWxpemVyLmZsdXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWVtYmVyVHJhaXRzLmh0dHBMYWJlbCkge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZXIud3JpdGUobWVtYmVyTnMsIGlucHV0TWVtYmVyVmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gc2VyaWFsaXplci5mbHVzaCgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnBhdGguaW5jbHVkZXMoYHske21lbWJlck5hbWV9K31gKSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnBhdGggPSByZXF1ZXN0LnBhdGgucmVwbGFjZShgeyR7bWVtYmVyTmFtZX0rfWAsIHJlcGxhY2VtZW50LnNwbGl0KFwiL1wiKS5tYXAoZXh0ZW5kZWRFbmNvZGVVUklDb21wb25lbnQpLmpvaW4oXCIvXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVxdWVzdC5wYXRoLmluY2x1ZGVzKGB7JHttZW1iZXJOYW1lfX1gKSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnBhdGggPSByZXF1ZXN0LnBhdGgucmVwbGFjZShgeyR7bWVtYmVyTmFtZX19YCwgZXh0ZW5kZWRFbmNvZGVVUklDb21wb25lbnQocmVwbGFjZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtZW1iZXJUcmFpdHMuaHR0cEhlYWRlcikge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZXIud3JpdGUobWVtYmVyTnMsIGlucHV0TWVtYmVyVmFsdWUpO1xuICAgICAgICAgICAgICAgIGhlYWRlcnNbbWVtYmVyVHJhaXRzLmh0dHBIZWFkZXIudG9Mb3dlckNhc2UoKV0gPSBTdHJpbmcoc2VyaWFsaXplci5mbHVzaCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtZW1iZXJUcmFpdHMuaHR0cFByZWZpeEhlYWRlcnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoaW5wdXRNZW1iZXJWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1hbGdhbSA9IG1lbWJlclRyYWl0cy5odHRwUHJlZml4SGVhZGVycyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplci53cml0ZShbbWVtYmVyTnMuZ2V0VmFsdWVTY2hlbWEoKSwgeyBodHRwSGVhZGVyOiBhbWFsZ2FtIH1dLCB2YWwpO1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW2FtYWxnYW0udG9Mb3dlckNhc2UoKV0gPSBzZXJpYWxpemVyLmZsdXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWVtYmVyVHJhaXRzLmh0dHBRdWVyeSB8fCBtZW1iZXJUcmFpdHMuaHR0cFF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVRdWVyeShtZW1iZXJOcywgaW5wdXRNZW1iZXJWYWx1ZSwgcXVlcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFzTm9uSHR0cEJpbmRpbmdNZW1iZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHBheWxvYWRNZW1iZXJOYW1lcy5wdXNoKG1lbWJlck5hbWUpO1xuICAgICAgICAgICAgICAgIHBheWxvYWRNZW1iZXJTY2hlbWFzLnB1c2gobWVtYmVyTnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNOb25IdHRwQmluZGluZ01lbWJlciAmJiBpbnB1dCkge1xuICAgICAgICAgICAgY29uc3QgW25hbWVzcGFjZSwgbmFtZV0gPSAobnMuZ2V0TmFtZSh0cnVlKSA/PyBcIiNVbmtub3duXCIpLnNwbGl0KFwiI1wiKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkTWVtYmVycyA9IG5zLmdldFNjaGVtYSgpWzZdO1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZFNjaGVtYSA9IFtcbiAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIG5zLmdldE1lcmdlZFRyYWl0cygpLFxuICAgICAgICAgICAgICAgIHBheWxvYWRNZW1iZXJOYW1lcyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkTWVtYmVyU2NoZW1hcyxcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaWYgKHJlcXVpcmVkTWVtYmVycykge1xuICAgICAgICAgICAgICAgIHBheWxvYWRTY2hlbWFbNl0gPSByZXF1aXJlZE1lbWJlcnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXlsb2FkU2NoZW1hLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VyaWFsaXplci53cml0ZShwYXlsb2FkU2NoZW1hLCBpbnB1dCk7XG4gICAgICAgICAgICBwYXlsb2FkID0gc2VyaWFsaXplci5mbHVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3QuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgICAgIHJlcXVlc3QucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgcmVxdWVzdC5ib2R5ID0gcGF5bG9hZDtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuICAgIHNlcmlhbGl6ZVF1ZXJ5KG5zLCBkYXRhLCBxdWVyeSkge1xuICAgICAgICBjb25zdCBzZXJpYWxpemVyID0gdGhpcy5zZXJpYWxpemVyO1xuICAgICAgICBjb25zdCB0cmFpdHMgPSBucy5nZXRNZXJnZWRUcmFpdHMoKTtcbiAgICAgICAgaWYgKHRyYWl0cy5odHRwUXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBxdWVyeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVTY2hlbWEgPSBucy5nZXRWYWx1ZVNjaGVtYSgpO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHZhbHVlU2NoZW1hLmdldE1lcmdlZFRyYWl0cygpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50cmFpdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwUXVlcnk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBRdWVyeVBhcmFtczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVRdWVyeSh2YWx1ZVNjaGVtYSwgdmFsLCBxdWVyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChucy5pc0xpc3RTY2hlbWEoKSkge1xuICAgICAgICAgICAgY29uc3Qgc3BhcnNlID0gISFucy5nZXRNZXJnZWRUcmFpdHMoKS5zcGFyc2U7XG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplci53cml0ZShbbnMuZ2V0VmFsdWVTY2hlbWEoKSwgdHJhaXRzXSwgaXRlbSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXphYmxlID0gc2VyaWFsaXplci5mbHVzaCgpO1xuICAgICAgICAgICAgICAgIGlmIChzcGFyc2UgfHwgc2VyaWFsaXphYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goc2VyaWFsaXphYmxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWVyeVt0cmFpdHMuaHR0cFF1ZXJ5XSA9IGJ1ZmZlcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZXIud3JpdGUoW25zLCB0cmFpdHNdLCBkYXRhKTtcbiAgICAgICAgICAgIHF1ZXJ5W3RyYWl0cy5odHRwUXVlcnldID0gc2VyaWFsaXplci5mbHVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGRlc2VyaWFsaXplUmVzcG9uc2Uob3BlcmF0aW9uU2NoZW1hLCBjb250ZXh0LCByZXNwb25zZSkge1xuICAgICAgICBjb25zdCBkZXNlcmlhbGl6ZXIgPSB0aGlzLmRlc2VyaWFsaXplcjtcbiAgICAgICAgY29uc3QgbnMgPSBOb3JtYWxpemVkU2NoZW1hLm9mKG9wZXJhdGlvblNjaGVtYS5vdXRwdXQpO1xuICAgICAgICBjb25zdCBkYXRhT2JqZWN0ID0ge307XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID49IDMwMCkge1xuICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBjb2xsZWN0Qm9keShyZXNwb25zZS5ib2R5LCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChieXRlcy5ieXRlTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YU9iamVjdCwgYXdhaXQgZGVzZXJpYWxpemVyLnJlYWQoMTUsIGJ5dGVzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUVycm9yKG9wZXJhdGlvblNjaGVtYSwgY29udGV4dCwgcmVzcG9uc2UsIGRhdGFPYmplY3QsIHRoaXMuZGVzZXJpYWxpemVNZXRhZGF0YShyZXNwb25zZSkpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQHNtaXRoeS9jb3JlL3Byb3RvY29scyAtIEhUVFAgUHJvdG9jb2wgZXJyb3IgaGFuZGxlciBmYWlsZWQgdG8gdGhyb3cuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgaGVhZGVyIGluIHJlc3BvbnNlLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzcG9uc2UuaGVhZGVyc1toZWFkZXJdO1xuICAgICAgICAgICAgZGVsZXRlIHJlc3BvbnNlLmhlYWRlcnNbaGVhZGVyXTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnNbaGVhZGVyLnRvTG93ZXJDYXNlKCldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgbm9uSHR0cEJpbmRpbmdNZW1iZXJzID0gYXdhaXQgdGhpcy5kZXNlcmlhbGl6ZUh0dHBNZXNzYWdlKG5zLCBjb250ZXh0LCByZXNwb25zZSwgZGF0YU9iamVjdCk7XG4gICAgICAgIGlmIChub25IdHRwQmluZGluZ01lbWJlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IGF3YWl0IGNvbGxlY3RCb2R5KHJlc3BvbnNlLmJvZHksIGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKGJ5dGVzLmJ5dGVMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUZyb21Cb2R5ID0gYXdhaXQgZGVzZXJpYWxpemVyLnJlYWQobnMsIGJ5dGVzKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG1lbWJlciBvZiBub25IdHRwQmluZGluZ01lbWJlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFGcm9tQm9keVttZW1iZXJdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFPYmplY3RbbWVtYmVyXSA9IGRhdGFGcm9tQm9keVttZW1iZXJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vbkh0dHBCaW5kaW5nTWVtYmVycy5kaXNjYXJkUmVzcG9uc2VCb2R5KSB7XG4gICAgICAgICAgICBhd2FpdCBjb2xsZWN0Qm9keShyZXNwb25zZS5ib2R5LCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhT2JqZWN0LiRtZXRhZGF0YSA9IHRoaXMuZGVzZXJpYWxpemVNZXRhZGF0YShyZXNwb25zZSk7XG4gICAgICAgIHJldHVybiBkYXRhT2JqZWN0O1xuICAgIH1cbiAgICBhc3luYyBkZXNlcmlhbGl6ZUh0dHBNZXNzYWdlKHNjaGVtYSwgY29udGV4dCwgcmVzcG9uc2UsIGFyZzQsIGFyZzUpIHtcbiAgICAgICAgbGV0IGRhdGFPYmplY3Q7XG4gICAgICAgIGlmIChhcmc0IGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICBkYXRhT2JqZWN0ID0gYXJnNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRhdGFPYmplY3QgPSBhcmc0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBkaXNjYXJkUmVzcG9uc2VCb2R5ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZGVzZXJpYWxpemVyID0gdGhpcy5kZXNlcmlhbGl6ZXI7XG4gICAgICAgIGNvbnN0IG5zID0gTm9ybWFsaXplZFNjaGVtYS5vZihzY2hlbWEpO1xuICAgICAgICBjb25zdCBub25IdHRwQmluZGluZ01lbWJlcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBbbWVtYmVyTmFtZSwgbWVtYmVyU2NoZW1hXSBvZiBucy5zdHJ1Y3RJdGVyYXRvcigpKSB7XG4gICAgICAgICAgICBjb25zdCBtZW1iZXJUcmFpdHMgPSBtZW1iZXJTY2hlbWEuZ2V0TWVtYmVyVHJhaXRzKCk7XG4gICAgICAgICAgICBpZiAobWVtYmVyVHJhaXRzLmh0dHBQYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgZGlzY2FyZFJlc3BvbnNlQm9keSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU3RyZWFtaW5nID0gbWVtYmVyU2NoZW1hLmlzU3RyZWFtaW5nKCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyZWFtaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRXZlbnRTdHJlYW0gPSBtZW1iZXJTY2hlbWEuaXNTdHJ1Y3RTY2hlbWEoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRXZlbnRTdHJlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFPYmplY3RbbWVtYmVyTmFtZV0gPSBhd2FpdCB0aGlzLmRlc2VyaWFsaXplRXZlbnRTdHJlYW0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlU2NoZW1hOiBucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU9iamVjdFttZW1iZXJOYW1lXSA9IHNka1N0cmVhbU1peGluKHJlc3BvbnNlLmJvZHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLmJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBjb2xsZWN0Qm9keShyZXNwb25zZS5ib2R5LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGVzLmJ5dGVMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhT2JqZWN0W21lbWJlck5hbWVdID0gYXdhaXQgZGVzZXJpYWxpemVyLnJlYWQobWVtYmVyU2NoZW1hLCBieXRlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtZW1iZXJUcmFpdHMuaHR0cEhlYWRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IFN0cmluZyhtZW1iZXJUcmFpdHMuaHR0cEhlYWRlcikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3BvbnNlLmhlYWRlcnNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVtYmVyU2NoZW1hLmlzTGlzdFNjaGVtYSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJMaXN0VmFsdWVTY2hlbWEgPSBtZW1iZXJTY2hlbWEuZ2V0VmFsdWVTY2hlbWEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckxpc3RWYWx1ZVNjaGVtYS5nZXRNZXJnZWRUcmFpdHMoKS5odHRwSGVhZGVyID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlY3Rpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRlckxpc3RWYWx1ZVNjaGVtYS5pc1RpbWVzdGFtcFNjaGVtYSgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyTGlzdFZhbHVlU2NoZW1hLmdldFNjaGVtYSgpID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbnMgPSBzcGxpdEV2ZXJ5KHZhbHVlLCBcIixcIiwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9ucyA9IHNwbGl0SGVhZGVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChhd2FpdCBkZXNlcmlhbGl6ZXIucmVhZChoZWFkZXJMaXN0VmFsdWVTY2hlbWEsIHNlY3Rpb24udHJpbSgpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhT2JqZWN0W21lbWJlck5hbWVdID0gbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFPYmplY3RbbWVtYmVyTmFtZV0gPSBhd2FpdCBkZXNlcmlhbGl6ZXIucmVhZChtZW1iZXJTY2hlbWEsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1lbWJlclRyYWl0cy5odHRwUHJlZml4SGVhZGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGF0YU9iamVjdFttZW1iZXJOYW1lXSA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW2hlYWRlciwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHJlc3BvbnNlLmhlYWRlcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWFkZXIuc3RhcnRzV2l0aChtZW1iZXJUcmFpdHMuaHR0cFByZWZpeEhlYWRlcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVNjaGVtYSA9IG1lbWJlclNjaGVtYS5nZXRWYWx1ZVNjaGVtYSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTY2hlbWEuZ2V0TWVyZ2VkVHJhaXRzKCkuaHR0cEhlYWRlciA9IGhlYWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFPYmplY3RbbWVtYmVyTmFtZV1baGVhZGVyLnNsaWNlKG1lbWJlclRyYWl0cy5odHRwUHJlZml4SGVhZGVycy5sZW5ndGgpXSA9IGF3YWl0IGRlc2VyaWFsaXplci5yZWFkKHZhbHVlU2NoZW1hLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtZW1iZXJUcmFpdHMuaHR0cFJlc3BvbnNlQ29kZSkge1xuICAgICAgICAgICAgICAgIGRhdGFPYmplY3RbbWVtYmVyTmFtZV0gPSByZXNwb25zZS5zdGF0dXNDb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9uSHR0cEJpbmRpbmdNZW1iZXJzLnB1c2gobWVtYmVyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbm9uSHR0cEJpbmRpbmdNZW1iZXJzLmRpc2NhcmRSZXNwb25zZUJvZHkgPSBkaXNjYXJkUmVzcG9uc2VCb2R5O1xuICAgICAgICByZXR1cm4gbm9uSHR0cEJpbmRpbmdNZW1iZXJzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBOb3JtYWxpemVkU2NoZW1hIH0gZnJvbSBcIkBzbWl0aHkvY29yZS9zY2hlbWFcIjtcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBzbWl0aHkvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgY29sbGVjdEJvZHkgfSBmcm9tIFwiLi9jb2xsZWN0LXN0cmVhbS1ib2R5XCI7XG5pbXBvcnQgeyBIdHRwUHJvdG9jb2wgfSBmcm9tIFwiLi9IdHRwUHJvdG9jb2xcIjtcbmV4cG9ydCBjbGFzcyBScGNQcm90b2NvbCBleHRlbmRzIEh0dHBQcm90b2NvbCB7XG4gICAgYXN5bmMgc2VyaWFsaXplUmVxdWVzdChvcGVyYXRpb25TY2hlbWEsIF9pbnB1dCwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBzZXJpYWxpemVyID0gdGhpcy5zZXJpYWxpemVyO1xuICAgICAgICBjb25zdCBxdWVyeSA9IHt9O1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gYXdhaXQgY29udGV4dC5lbmRwb2ludCgpO1xuICAgICAgICBjb25zdCBucyA9IE5vcm1hbGl6ZWRTY2hlbWEub2Yob3BlcmF0aW9uU2NoZW1hPy5pbnB1dCk7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IG5zLmdldFNjaGVtYSgpO1xuICAgICAgICBsZXQgcGF5bG9hZDtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBfaW5wdXQgJiYgdHlwZW9mIF9pbnB1dCA9PT0gXCJvYmplY3RcIiA/IF9pbnB1dCA6IHt9O1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEh0dHBSZXF1ZXN0KHtcbiAgICAgICAgICAgIHByb3RvY29sOiBcIlwiLFxuICAgICAgICAgICAgaG9zdG5hbWU6IFwiXCIsXG4gICAgICAgICAgICBwb3J0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICAgIGZyYWdtZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgYm9keTogdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGVuZHBvaW50KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlcnZpY2VFbmRwb2ludChyZXF1ZXN0LCBlbmRwb2ludCk7XG4gICAgICAgICAgICB0aGlzLnNldEhvc3RQcmVmaXgocmVxdWVzdCwgb3BlcmF0aW9uU2NoZW1hLCBpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudFN0cmVhbU1lbWJlciA9IG5zLmdldEV2ZW50U3RyZWFtTWVtYmVyKCk7XG4gICAgICAgICAgICBpZiAoZXZlbnRTdHJlYW1NZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRbZXZlbnRTdHJlYW1NZW1iZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxSZXF1ZXN0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW21lbWJlck5hbWUsIG1lbWJlclNjaGVtYV0gb2YgbnMuc3RydWN0SXRlcmF0b3IoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlck5hbWUgIT09IGV2ZW50U3RyZWFtTWVtYmVyICYmIGlucHV0W21lbWJlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplci53cml0ZShtZW1iZXJTY2hlbWEsIGlucHV0W21lbWJlck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsUmVxdWVzdFttZW1iZXJOYW1lXSA9IHNlcmlhbGl6ZXIuZmx1c2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkID0gYXdhaXQgdGhpcy5zZXJpYWxpemVFdmVudFN0cmVhbSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFN0cmVhbTogaW5wdXRbZXZlbnRTdHJlYW1NZW1iZXJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFNjaGVtYTogbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsUmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplci53cml0ZShzY2hlbWEsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gc2VyaWFsaXplci5mbHVzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3QuaGVhZGVycyA9IE9iamVjdC5hc3NpZ24ocmVxdWVzdC5oZWFkZXJzLCBoZWFkZXJzKTtcbiAgICAgICAgcmVxdWVzdC5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICByZXF1ZXN0LmJvZHkgPSBwYXlsb2FkO1xuICAgICAgICByZXF1ZXN0Lm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9XG4gICAgYXN5bmMgZGVzZXJpYWxpemVSZXNwb25zZShvcGVyYXRpb25TY2hlbWEsIGNvbnRleHQsIHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGRlc2VyaWFsaXplciA9IHRoaXMuZGVzZXJpYWxpemVyO1xuICAgICAgICBjb25zdCBucyA9IE5vcm1hbGl6ZWRTY2hlbWEub2Yob3BlcmF0aW9uU2NoZW1hLm91dHB1dCk7XG4gICAgICAgIGNvbnN0IGRhdGFPYmplY3QgPSB7fTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gMzAwKSB7XG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IGF3YWl0IGNvbGxlY3RCb2R5KHJlc3BvbnNlLmJvZHksIGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKGJ5dGVzLmJ5dGVMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhT2JqZWN0LCBhd2FpdCBkZXNlcmlhbGl6ZXIucmVhZCgxNSwgYnl0ZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlRXJyb3Iob3BlcmF0aW9uU2NoZW1hLCBjb250ZXh0LCByZXNwb25zZSwgZGF0YU9iamVjdCwgdGhpcy5kZXNlcmlhbGl6ZU1ldGFkYXRhKHJlc3BvbnNlKSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJAc21pdGh5L2NvcmUvcHJvdG9jb2xzIC0gUlBDIFByb3RvY29sIGVycm9yIGhhbmRsZXIgZmFpbGVkIHRvIHRocm93LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGhlYWRlciBpbiByZXNwb25zZS5oZWFkZXJzKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3BvbnNlLmhlYWRlcnNbaGVhZGVyXTtcbiAgICAgICAgICAgIGRlbGV0ZSByZXNwb25zZS5oZWFkZXJzW2hlYWRlcl07XG4gICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzW2hlYWRlci50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50U3RyZWFtTWVtYmVyID0gbnMuZ2V0RXZlbnRTdHJlYW1NZW1iZXIoKTtcbiAgICAgICAgaWYgKGV2ZW50U3RyZWFtTWVtYmVyKSB7XG4gICAgICAgICAgICBkYXRhT2JqZWN0W2V2ZW50U3RyZWFtTWVtYmVyXSA9IGF3YWl0IHRoaXMuZGVzZXJpYWxpemVFdmVudFN0cmVhbSh7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VTY2hlbWE6IG5zLFxuICAgICAgICAgICAgICAgIGluaXRpYWxSZXNwb25zZUNvbnRhaW5lcjogZGF0YU9iamVjdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBjb2xsZWN0Qm9keShyZXNwb25zZS5ib2R5LCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChieXRlcy5ieXRlTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YU9iamVjdCwgYXdhaXQgZGVzZXJpYWxpemVyLnJlYWQobnMsIGJ5dGVzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YU9iamVjdC4kbWV0YWRhdGEgPSB0aGlzLmRlc2VyaWFsaXplTWV0YWRhdGEocmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gZGF0YU9iamVjdDtcbiAgICB9XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluZVRpbWVzdGFtcEZvcm1hdChucywgc2V0dGluZ3MpIHtcbiAgICBpZiAoc2V0dGluZ3MudGltZXN0YW1wRm9ybWF0LnVzZVRyYWl0KSB7XG4gICAgICAgIGlmIChucy5pc1RpbWVzdGFtcFNjaGVtYSgpICYmXG4gICAgICAgICAgICAobnMuZ2V0U2NoZW1hKCkgPT09IDUgfHxcbiAgICAgICAgICAgICAgICBucy5nZXRTY2hlbWEoKSA9PT0gNiB8fFxuICAgICAgICAgICAgICAgIG5zLmdldFNjaGVtYSgpID09PSA3KSkge1xuICAgICAgICAgICAgcmV0dXJuIG5zLmdldFNjaGVtYSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHsgaHR0cExhYmVsLCBodHRwUHJlZml4SGVhZGVycywgaHR0cEhlYWRlciwgaHR0cFF1ZXJ5IH0gPSBucy5nZXRNZXJnZWRUcmFpdHMoKTtcbiAgICBjb25zdCBiaW5kaW5nRm9ybWF0ID0gc2V0dGluZ3MuaHR0cEJpbmRpbmdzXG4gICAgICAgID8gdHlwZW9mIGh0dHBQcmVmaXhIZWFkZXJzID09PSBcInN0cmluZ1wiIHx8IEJvb2xlYW4oaHR0cEhlYWRlcilcbiAgICAgICAgICAgID8gNlxuICAgICAgICAgICAgOiBCb29sZWFuKGh0dHBRdWVyeSkgfHwgQm9vbGVhbihodHRwTGFiZWwpXG4gICAgICAgICAgICAgICAgPyA1XG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGJpbmRpbmdGb3JtYXQgPz8gc2V0dGluZ3MudGltZXN0YW1wRm9ybWF0LmRlZmF1bHQ7XG59XG4iLCAiaW1wb3J0IHsgTm9ybWFsaXplZFNjaGVtYSB9IGZyb20gXCJAc21pdGh5L2NvcmUvc2NoZW1hXCI7XG5pbXBvcnQgeyBfcGFyc2VFcG9jaFRpbWVzdGFtcCwgX3BhcnNlUmZjMzMzOURhdGVUaW1lV2l0aE9mZnNldCwgX3BhcnNlUmZjNzIzMURhdGVUaW1lLCBMYXp5SnNvblN0cmluZywgTnVtZXJpY1ZhbHVlLCBzcGxpdEhlYWRlciwgfSBmcm9tIFwiQHNtaXRoeS9jb3JlL3NlcmRlXCI7XG5pbXBvcnQgeyBmcm9tQmFzZTY0IH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1iYXNlNjRcIjtcbmltcG9ydCB7IHRvVXRmOCB9IGZyb20gXCJAc21pdGh5L3V0aWwtdXRmOFwiO1xuaW1wb3J0IHsgU2VyZGVDb250ZXh0IH0gZnJvbSBcIi4uL1NlcmRlQ29udGV4dFwiO1xuaW1wb3J0IHsgZGV0ZXJtaW5lVGltZXN0YW1wRm9ybWF0IH0gZnJvbSBcIi4vZGV0ZXJtaW5lVGltZXN0YW1wRm9ybWF0XCI7XG5leHBvcnQgY2xhc3MgRnJvbVN0cmluZ1NoYXBlRGVzZXJpYWxpemVyIGV4dGVuZHMgU2VyZGVDb250ZXh0IHtcbiAgICBzZXR0aW5ncztcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgfVxuICAgIHJlYWQoX3NjaGVtYSwgZGF0YSkge1xuICAgICAgICBjb25zdCBucyA9IE5vcm1hbGl6ZWRTY2hlbWEub2YoX3NjaGVtYSk7XG4gICAgICAgIGlmIChucy5pc0xpc3RTY2hlbWEoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNwbGl0SGVhZGVyKGRhdGEpLm1hcCgoaXRlbSkgPT4gdGhpcy5yZWFkKG5zLmdldFZhbHVlU2NoZW1hKCksIGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnMuaXNCbG9iU2NoZW1hKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5zZXJkZUNvbnRleHQ/LmJhc2U2NERlY29kZXIgPz8gZnJvbUJhc2U2NCkoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5zLmlzVGltZXN0YW1wU2NoZW1hKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IGRldGVybWluZVRpbWVzdGFtcEZvcm1hdChucywgdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgICAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9wYXJzZVJmYzMzMzlEYXRlVGltZVdpdGhPZmZzZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3BhcnNlUmZjNzIzMURhdGVUaW1lKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9wYXJzZUVwb2NoVGltZXN0YW1wKGRhdGEpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1pc3NpbmcgdGltZXN0YW1wIGZvcm1hdCwgcGFyc2luZyB2YWx1ZSB3aXRoIERhdGUgY29uc3RydWN0b3I6XCIsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5zLmlzU3RyaW5nU2NoZW1hKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lZGlhVHlwZSA9IG5zLmdldE1lcmdlZFRyYWl0cygpLm1lZGlhVHlwZTtcbiAgICAgICAgICAgIGxldCBpbnRlcm1lZGlhdGVWYWx1ZSA9IGRhdGE7XG4gICAgICAgICAgICBpZiAobWVkaWFUeXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5zLmdldE1lcmdlZFRyYWl0cygpLmh0dHBIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmFsdWUgPSB0aGlzLmJhc2U2NFRvVXRmOChpbnRlcm1lZGlhdGVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGlzSnNvbiA9IG1lZGlhVHlwZSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIgfHwgbWVkaWFUeXBlLmVuZHNXaXRoKFwiK2pzb25cIik7XG4gICAgICAgICAgICAgICAgaWYgKGlzSnNvbikge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZSA9IExhenlKc29uU3RyaW5nLmZyb20oaW50ZXJtZWRpYXRlVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaW50ZXJtZWRpYXRlVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5zLmlzTnVtZXJpY1NjaGVtYSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChucy5pc0JpZ0ludGVnZXJTY2hlbWEoKSkge1xuICAgICAgICAgICAgcmV0dXJuIEJpZ0ludChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnMuaXNCaWdEZWNpbWFsU2NoZW1hKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTnVtZXJpY1ZhbHVlKGRhdGEsIFwiYmlnRGVjaW1hbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnMuaXNCb29sZWFuU2NoZW1hKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcoZGF0YSkudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGJhc2U2NFRvVXRmOChiYXNlNjRTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNlcmRlQ29udGV4dD8udXRmOEVuY29kZXIgPz8gdG9VdGY4KSgodGhpcy5zZXJkZUNvbnRleHQ/LmJhc2U2NERlY29kZXIgPz8gZnJvbUJhc2U2NCkoYmFzZTY0U3RyaW5nKSk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IE5vcm1hbGl6ZWRTY2hlbWEgfSBmcm9tIFwiQHNtaXRoeS9jb3JlL3NjaGVtYVwiO1xuaW1wb3J0IHsgZnJvbVV0ZjgsIHRvVXRmOCB9IGZyb20gXCJAc21pdGh5L3V0aWwtdXRmOFwiO1xuaW1wb3J0IHsgU2VyZGVDb250ZXh0IH0gZnJvbSBcIi4uL1NlcmRlQ29udGV4dFwiO1xuaW1wb3J0IHsgRnJvbVN0cmluZ1NoYXBlRGVzZXJpYWxpemVyIH0gZnJvbSBcIi4vRnJvbVN0cmluZ1NoYXBlRGVzZXJpYWxpemVyXCI7XG5leHBvcnQgY2xhc3MgSHR0cEludGVyY2VwdGluZ1NoYXBlRGVzZXJpYWxpemVyIGV4dGVuZHMgU2VyZGVDb250ZXh0IHtcbiAgICBjb2RlY0Rlc2VyaWFsaXplcjtcbiAgICBzdHJpbmdEZXNlcmlhbGl6ZXI7XG4gICAgY29uc3RydWN0b3IoY29kZWNEZXNlcmlhbGl6ZXIsIGNvZGVjU2V0dGluZ3MpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb2RlY0Rlc2VyaWFsaXplciA9IGNvZGVjRGVzZXJpYWxpemVyO1xuICAgICAgICB0aGlzLnN0cmluZ0Rlc2VyaWFsaXplciA9IG5ldyBGcm9tU3RyaW5nU2hhcGVEZXNlcmlhbGl6ZXIoY29kZWNTZXR0aW5ncyk7XG4gICAgfVxuICAgIHNldFNlcmRlQ29udGV4dChzZXJkZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5zdHJpbmdEZXNlcmlhbGl6ZXIuc2V0U2VyZGVDb250ZXh0KHNlcmRlQ29udGV4dCk7XG4gICAgICAgIHRoaXMuY29kZWNEZXNlcmlhbGl6ZXIuc2V0U2VyZGVDb250ZXh0KHNlcmRlQ29udGV4dCk7XG4gICAgICAgIHRoaXMuc2VyZGVDb250ZXh0ID0gc2VyZGVDb250ZXh0O1xuICAgIH1cbiAgICByZWFkKHNjaGVtYSwgZGF0YSkge1xuICAgICAgICBjb25zdCBucyA9IE5vcm1hbGl6ZWRTY2hlbWEub2Yoc2NoZW1hKTtcbiAgICAgICAgY29uc3QgdHJhaXRzID0gbnMuZ2V0TWVyZ2VkVHJhaXRzKCk7XG4gICAgICAgIGNvbnN0IHRvU3RyaW5nID0gdGhpcy5zZXJkZUNvbnRleHQ/LnV0ZjhFbmNvZGVyID8/IHRvVXRmODtcbiAgICAgICAgaWYgKHRyYWl0cy5odHRwSGVhZGVyIHx8IHRyYWl0cy5odHRwUmVzcG9uc2VDb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdEZXNlcmlhbGl6ZXIucmVhZChucywgdG9TdHJpbmcoZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFpdHMuaHR0cFBheWxvYWQpIHtcbiAgICAgICAgICAgIGlmIChucy5pc0Jsb2JTY2hlbWEoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvQnl0ZXMgPSB0aGlzLnNlcmRlQ29udGV4dD8udXRmOERlY29kZXIgPz8gZnJvbVV0Zjg7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b0J5dGVzKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5zLmlzU3RyaW5nU2NoZW1hKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJieXRlTGVuZ3RoXCIgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9TdHJpbmcoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvZGVjRGVzZXJpYWxpemVyLnJlYWQobnMsIGRhdGEpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBOb3JtYWxpemVkU2NoZW1hIH0gZnJvbSBcIkBzbWl0aHkvY29yZS9zY2hlbWFcIjtcbmltcG9ydCB7IGRhdGVUb1V0Y1N0cmluZywgZ2VuZXJhdGVJZGVtcG90ZW5jeVRva2VuLCBMYXp5SnNvblN0cmluZywgcXVvdGVIZWFkZXIgfSBmcm9tIFwiQHNtaXRoeS9jb3JlL3NlcmRlXCI7XG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gXCJAc21pdGh5L3V0aWwtYmFzZTY0XCI7XG5pbXBvcnQgeyBTZXJkZUNvbnRleHQgfSBmcm9tIFwiLi4vU2VyZGVDb250ZXh0XCI7XG5pbXBvcnQgeyBkZXRlcm1pbmVUaW1lc3RhbXBGb3JtYXQgfSBmcm9tIFwiLi9kZXRlcm1pbmVUaW1lc3RhbXBGb3JtYXRcIjtcbmV4cG9ydCBjbGFzcyBUb1N0cmluZ1NoYXBlU2VyaWFsaXplciBleHRlbmRzIFNlcmRlQ29udGV4dCB7XG4gICAgc2V0dGluZ3M7XG4gICAgc3RyaW5nQnVmZmVyID0gXCJcIjtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgfVxuICAgIHdyaXRlKHNjaGVtYSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgbnMgPSBOb3JtYWxpemVkU2NoZW1hLm9mKHNjaGVtYSk7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nQnVmZmVyID0gXCJudWxsXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5zLmlzVGltZXN0YW1wU2NoZW1hKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBAc21pdGh5L2NvcmUvcHJvdG9jb2xzIC0gcmVjZWl2ZWQgbm9uLURhdGUgdmFsdWUgJHt2YWx1ZX0gd2hlbiBzY2hlbWEgZXhwZWN0ZWQgRGF0ZSBpbiAke25zLmdldE5hbWUodHJ1ZSl9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gZGV0ZXJtaW5lVGltZXN0YW1wRm9ybWF0KG5zLCB0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ0J1ZmZlciA9IHZhbHVlLnRvSVNPU3RyaW5nKCkucmVwbGFjZShcIi4wMDBaXCIsIFwiWlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ0J1ZmZlciA9IGRhdGVUb1V0Y1N0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHJpbmdCdWZmZXIgPSBTdHJpbmcodmFsdWUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1pc3NpbmcgdGltZXN0YW1wIGZvcm1hdCwgdXNpbmcgZXBvY2ggc2Vjb25kc1wiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHJpbmdCdWZmZXIgPSBTdHJpbmcodmFsdWUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobnMuaXNCbG9iU2NoZW1hKCkgJiYgXCJieXRlTGVuZ3RoXCIgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHJpbmdCdWZmZXIgPSAodGhpcy5zZXJkZUNvbnRleHQ/LmJhc2U2NEVuY29kZXIgPz8gdG9CYXNlNjQpKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobnMuaXNMaXN0U2NoZW1hKCkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1ZmZlciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53cml0ZShbbnMuZ2V0VmFsdWVTY2hlbWEoKSwgbnMuZ2V0TWVyZ2VkVHJhaXRzKCldLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlckl0ZW0gPSB0aGlzLmZsdXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkID0gbnMuZ2V0VmFsdWVTY2hlbWEoKS5pc1RpbWVzdGFtcFNjaGVtYSgpID8gaGVhZGVySXRlbSA6IHF1b3RlSGVhZGVyKGhlYWRlckl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlciAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gc2VyaWFsaXplZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ0J1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ0J1ZmZlciA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBtZWRpYVR5cGUgPSBucy5nZXRNZXJnZWRUcmFpdHMoKS5tZWRpYVR5cGU7XG4gICAgICAgICAgICAgICAgbGV0IGludGVybWVkaWF0ZVZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKG1lZGlhVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0pzb24gPSBtZWRpYVR5cGUgPT09IFwiYXBwbGljYXRpb24vanNvblwiIHx8IG1lZGlhVHlwZS5lbmRzV2l0aChcIitqc29uXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZSA9IExhenlKc29uU3RyaW5nLmZyb20oaW50ZXJtZWRpYXRlVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChucy5nZXRNZXJnZWRUcmFpdHMoKS5odHRwSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ0J1ZmZlciA9ICh0aGlzLnNlcmRlQ29udGV4dD8uYmFzZTY0RW5jb2RlciA/PyB0b0Jhc2U2NCkoaW50ZXJtZWRpYXRlVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpbmdCdWZmZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKG5zLmlzSWRlbXBvdGVuY3lUb2tlbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nQnVmZmVyID0gZ2VuZXJhdGVJZGVtcG90ZW5jeVRva2VuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ0J1ZmZlciA9IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZsdXNoKCkge1xuICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLnN0cmluZ0J1ZmZlcjtcbiAgICAgICAgdGhpcy5zdHJpbmdCdWZmZXIgPSBcIlwiO1xuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBOb3JtYWxpemVkU2NoZW1hIH0gZnJvbSBcIkBzbWl0aHkvY29yZS9zY2hlbWFcIjtcbmltcG9ydCB7IFRvU3RyaW5nU2hhcGVTZXJpYWxpemVyIH0gZnJvbSBcIi4vVG9TdHJpbmdTaGFwZVNlcmlhbGl6ZXJcIjtcbmV4cG9ydCBjbGFzcyBIdHRwSW50ZXJjZXB0aW5nU2hhcGVTZXJpYWxpemVyIHtcbiAgICBjb2RlY1NlcmlhbGl6ZXI7XG4gICAgc3RyaW5nU2VyaWFsaXplcjtcbiAgICBidWZmZXI7XG4gICAgY29uc3RydWN0b3IoY29kZWNTZXJpYWxpemVyLCBjb2RlY1NldHRpbmdzLCBzdHJpbmdTZXJpYWxpemVyID0gbmV3IFRvU3RyaW5nU2hhcGVTZXJpYWxpemVyKGNvZGVjU2V0dGluZ3MpKSB7XG4gICAgICAgIHRoaXMuY29kZWNTZXJpYWxpemVyID0gY29kZWNTZXJpYWxpemVyO1xuICAgICAgICB0aGlzLnN0cmluZ1NlcmlhbGl6ZXIgPSBzdHJpbmdTZXJpYWxpemVyO1xuICAgIH1cbiAgICBzZXRTZXJkZUNvbnRleHQoc2VyZGVDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29kZWNTZXJpYWxpemVyLnNldFNlcmRlQ29udGV4dChzZXJkZUNvbnRleHQpO1xuICAgICAgICB0aGlzLnN0cmluZ1NlcmlhbGl6ZXIuc2V0U2VyZGVDb250ZXh0KHNlcmRlQ29udGV4dCk7XG4gICAgfVxuICAgIHdyaXRlKHNjaGVtYSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgbnMgPSBOb3JtYWxpemVkU2NoZW1hLm9mKHNjaGVtYSk7XG4gICAgICAgIGNvbnN0IHRyYWl0cyA9IG5zLmdldE1lcmdlZFRyYWl0cygpO1xuICAgICAgICBpZiAodHJhaXRzLmh0dHBIZWFkZXIgfHwgdHJhaXRzLmh0dHBMYWJlbCB8fCB0cmFpdHMuaHR0cFF1ZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLnN0cmluZ1NlcmlhbGl6ZXIud3JpdGUobnMsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5zdHJpbmdTZXJpYWxpemVyLmZsdXNoKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZWNTZXJpYWxpemVyLndyaXRlKG5zLCB2YWx1ZSk7XG4gICAgfVxuICAgIGZsdXNoKCkge1xuICAgICAgICBpZiAodGhpcy5idWZmZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZWNTZXJpYWxpemVyLmZsdXNoKCk7XG4gICAgfVxufVxuIiwgImV4cG9ydCAqIGZyb20gXCIuL2NvbGxlY3Qtc3RyZWFtLWJvZHlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2V4dGVuZGVkLWVuY29kZS11cmktY29tcG9uZW50XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9IdHRwQmluZGluZ1Byb3RvY29sXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9IdHRwUHJvdG9jb2xcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1JwY1Byb3RvY29sXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9yZXF1ZXN0QnVpbGRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcmVzb2x2ZS1wYXRoXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zZXJkZS9Gcm9tU3RyaW5nU2hhcGVEZXNlcmlhbGl6ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NlcmRlL0h0dHBJbnRlcmNlcHRpbmdTaGFwZURlc2VyaWFsaXplclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2VyZGUvSHR0cEludGVyY2VwdGluZ1NoYXBlU2VyaWFsaXplclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2VyZGUvVG9TdHJpbmdTaGFwZVNlcmlhbGl6ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NlcmRlL2RldGVybWluZVRpbWVzdGFtcEZvcm1hdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vU2VyZGVDb250ZXh0XCI7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1Qk8sU0FBUyxVQUFVLEdBQUcsR0FBRztBQUM5QixNQUFJLE9BQU8sTUFBTSxjQUFjLE1BQU07QUFDakMsVUFBTSxJQUFJLFVBQVUseUJBQXlCLE9BQU8sQ0FBQyxJQUFJLCtCQUErQjtBQUM1RixnQkFBYyxHQUFHLENBQUM7QUFDbEIsV0FBUyxLQUFLO0FBQUUsU0FBSyxjQUFjO0FBQUEsRUFBRztBQUN0QyxJQUFFLFlBQVksTUFBTSxPQUFPLE9BQU8sT0FBTyxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsV0FBVyxJQUFJLEdBQUc7QUFDcEY7QUFhTyxTQUFTLE9BQU8sR0FBRyxHQUFHO0FBQzNCLE1BQUksSUFBSSxDQUFDO0FBQ1QsV0FBUyxLQUFLLEVBQUcsS0FBSSxPQUFPLFVBQVUsZUFBZSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUk7QUFDOUUsTUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2QsTUFBSSxLQUFLLFFBQVEsT0FBTyxPQUFPLDBCQUEwQjtBQUNyRCxhQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sc0JBQXNCLENBQUMsR0FBRyxJQUFJLEVBQUUsUUFBUSxLQUFLO0FBQ3BFLFVBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLFVBQVUscUJBQXFCLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztBQUN6RSxVQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBLElBQ3hCO0FBQ0osU0FBTztBQUNUO0FBRU8sU0FBUyxXQUFXLFlBQVksUUFBUSxLQUFLLE1BQU07QUFDeEQsTUFBSSxJQUFJLFVBQVUsUUFBUSxJQUFJLElBQUksSUFBSSxTQUFTLFNBQVMsT0FBTyxPQUFPLE9BQU8seUJBQXlCLFFBQVEsR0FBRyxJQUFJLE1BQU07QUFDM0gsTUFBSSxPQUFPLFlBQVksWUFBWSxPQUFPLFFBQVEsYUFBYSxXQUFZLEtBQUksUUFBUSxTQUFTLFlBQVksUUFBUSxLQUFLLElBQUk7QUFBQSxNQUN4SCxVQUFTLElBQUksV0FBVyxTQUFTLEdBQUcsS0FBSyxHQUFHLElBQUssS0FBSSxJQUFJLFdBQVcsQ0FBQyxFQUFHLE1BQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLEdBQUcsTUFBTTtBQUNoSixTQUFPLElBQUksS0FBSyxLQUFLLE9BQU8sZUFBZSxRQUFRLEtBQUssQ0FBQyxHQUFHO0FBQzlEO0FBRU8sU0FBUyxRQUFRLFlBQVksV0FBVztBQUM3QyxTQUFPLFNBQVUsUUFBUSxLQUFLO0FBQUUsY0FBVSxRQUFRLEtBQUssVUFBVTtBQUFBLEVBQUc7QUFDdEU7QUFFTyxTQUFTLGFBQWEsTUFBTSxjQUFjLFlBQVksV0FBVyxjQUFjLG1CQUFtQjtBQUN2RyxXQUFTLE9BQU8sR0FBRztBQUFFLFFBQUksTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFZLE9BQU0sSUFBSSxVQUFVLG1CQUFtQjtBQUFHLFdBQU87QUFBQSxFQUFHO0FBQ3RILE1BQUksT0FBTyxVQUFVLE1BQU0sTUFBTSxTQUFTLFdBQVcsUUFBUSxTQUFTLFdBQVcsUUFBUTtBQUN6RixNQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsT0FBTyxVQUFVLFFBQVEsSUFBSSxPQUFPLEtBQUssWUFBWTtBQUNuRixNQUFJLGFBQWEsaUJBQWlCLFNBQVMsT0FBTyx5QkFBeUIsUUFBUSxVQUFVLElBQUksSUFBSSxDQUFDO0FBQ3RHLE1BQUksR0FBRyxPQUFPO0FBQ2QsV0FBUyxJQUFJLFdBQVcsU0FBUyxHQUFHLEtBQUssR0FBRyxLQUFLO0FBQzdDLFFBQUksVUFBVSxDQUFDO0FBQ2YsYUFBUyxLQUFLLFVBQVcsU0FBUSxDQUFDLElBQUksTUFBTSxXQUFXLENBQUMsSUFBSSxVQUFVLENBQUM7QUFDdkUsYUFBUyxLQUFLLFVBQVUsT0FBUSxTQUFRLE9BQU8sQ0FBQyxJQUFJLFVBQVUsT0FBTyxDQUFDO0FBQ3RFLFlBQVEsaUJBQWlCLFNBQVUsR0FBRztBQUFFLFVBQUksS0FBTSxPQUFNLElBQUksVUFBVSx3REFBd0Q7QUFBRyx3QkFBa0IsS0FBSyxPQUFPLEtBQUssSUFBSSxDQUFDO0FBQUEsSUFBRztBQUM1SyxRQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsR0FBRyxTQUFTLGFBQWEsRUFBRSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsSUFBSSxJQUFJLFdBQVcsR0FBRyxHQUFHLE9BQU87QUFDN0gsUUFBSSxTQUFTLFlBQVk7QUFDckIsVUFBSSxXQUFXLE9BQVE7QUFDdkIsVUFBSSxXQUFXLFFBQVEsT0FBTyxXQUFXLFNBQVUsT0FBTSxJQUFJLFVBQVUsaUJBQWlCO0FBQ3hGLFVBQUksSUFBSSxPQUFPLE9BQU8sR0FBRyxFQUFHLFlBQVcsTUFBTTtBQUM3QyxVQUFJLElBQUksT0FBTyxPQUFPLEdBQUcsRUFBRyxZQUFXLE1BQU07QUFDN0MsVUFBSSxJQUFJLE9BQU8sT0FBTyxJQUFJLEVBQUcsY0FBYSxRQUFRLENBQUM7QUFBQSxJQUN2RCxXQUNTLElBQUksT0FBTyxNQUFNLEdBQUc7QUFDekIsVUFBSSxTQUFTLFFBQVMsY0FBYSxRQUFRLENBQUM7QUFBQSxVQUN2QyxZQUFXLEdBQUcsSUFBSTtBQUFBLElBQzNCO0FBQUEsRUFDSjtBQUNBLE1BQUksT0FBUSxRQUFPLGVBQWUsUUFBUSxVQUFVLE1BQU0sVUFBVTtBQUNwRSxTQUFPO0FBQ1Q7QUFFTyxTQUFTLGtCQUFrQixTQUFTLGNBQWMsT0FBTztBQUM5RCxNQUFJLFdBQVcsVUFBVSxTQUFTO0FBQ2xDLFdBQVMsSUFBSSxHQUFHLElBQUksYUFBYSxRQUFRLEtBQUs7QUFDMUMsWUFBUSxXQUFXLGFBQWEsQ0FBQyxFQUFFLEtBQUssU0FBUyxLQUFLLElBQUksYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDMUY7QUFDQSxTQUFPLFdBQVcsUUFBUTtBQUM1QjtBQUVPLFNBQVMsVUFBVSxHQUFHO0FBQzNCLFNBQU8sT0FBTyxNQUFNLFdBQVcsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNoRDtBQUVPLFNBQVMsa0JBQWtCLEdBQUcsTUFBTSxRQUFRO0FBQ2pELE1BQUksT0FBTyxTQUFTLFNBQVUsUUFBTyxLQUFLLGNBQWMsSUFBSSxPQUFPLEtBQUssYUFBYSxHQUFHLElBQUk7QUFDNUYsU0FBTyxPQUFPLGVBQWUsR0FBRyxRQUFRLEVBQUUsY0FBYyxNQUFNLE9BQU8sU0FBUyxHQUFHLE9BQU8sUUFBUSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUM7QUFDckg7QUFFTyxTQUFTLFdBQVcsYUFBYSxlQUFlO0FBQ3JELE1BQUksT0FBTyxZQUFZLFlBQVksT0FBTyxRQUFRLGFBQWEsV0FBWSxRQUFPLFFBQVEsU0FBUyxhQUFhLGFBQWE7QUFDL0g7QUFFTyxTQUFTLFVBQVUsU0FBUyxZQUFZLEdBQUcsV0FBVztBQUMzRCxXQUFTLE1BQU0sT0FBTztBQUFFLFdBQU8saUJBQWlCLElBQUksUUFBUSxJQUFJLEVBQUUsU0FBVSxTQUFTO0FBQUUsY0FBUSxLQUFLO0FBQUEsSUFBRyxDQUFDO0FBQUEsRUFBRztBQUMzRyxTQUFPLEtBQUssTUFBTSxJQUFJLFVBQVUsU0FBVSxTQUFTLFFBQVE7QUFDdkQsYUFBUyxVQUFVLE9BQU87QUFBRSxVQUFJO0FBQUUsYUFBSyxVQUFVLEtBQUssS0FBSyxDQUFDO0FBQUEsTUFBRyxTQUFTLEdBQUc7QUFBRSxlQUFPLENBQUM7QUFBQSxNQUFHO0FBQUEsSUFBRTtBQUMxRixhQUFTLFNBQVMsT0FBTztBQUFFLFVBQUk7QUFBRSxhQUFLLFVBQVUsT0FBTyxFQUFFLEtBQUssQ0FBQztBQUFBLE1BQUcsU0FBUyxHQUFHO0FBQUUsZUFBTyxDQUFDO0FBQUEsTUFBRztBQUFBLElBQUU7QUFDN0YsYUFBUyxLQUFLLFFBQVE7QUFBRSxhQUFPLE9BQU8sUUFBUSxPQUFPLEtBQUssSUFBSSxNQUFNLE9BQU8sS0FBSyxFQUFFLEtBQUssV0FBVyxRQUFRO0FBQUEsSUFBRztBQUM3RyxVQUFNLFlBQVksVUFBVSxNQUFNLFNBQVMsY0FBYyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7QUFBQSxFQUN4RSxDQUFDO0FBQ0g7QUFFTyxTQUFTLFlBQVksU0FBUyxNQUFNO0FBQ3pDLE1BQUksSUFBSSxFQUFFLE9BQU8sR0FBRyxNQUFNLFdBQVc7QUFBRSxRQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUcsT0FBTSxFQUFFLENBQUM7QUFBRyxXQUFPLEVBQUUsQ0FBQztBQUFBLEVBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksT0FBTyxRQUFRLE9BQU8sYUFBYSxhQUFhLFdBQVcsUUFBUSxTQUFTO0FBQy9MLFNBQU8sRUFBRSxPQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsUUFBUSxJQUFJLEtBQUssQ0FBQyxHQUFHLE9BQU8sV0FBVyxlQUFlLEVBQUUsT0FBTyxRQUFRLElBQUksV0FBVztBQUFFLFdBQU87QUFBQSxFQUFNLElBQUk7QUFDMUosV0FBUyxLQUFLLEdBQUc7QUFBRSxXQUFPLFNBQVUsR0FBRztBQUFFLGFBQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQUEsSUFBRztBQUFBLEVBQUc7QUFDakUsV0FBUyxLQUFLQSxLQUFJO0FBQ2QsUUFBSSxFQUFHLE9BQU0sSUFBSSxVQUFVLGlDQUFpQztBQUM1RCxXQUFPLE1BQU0sSUFBSSxHQUFHQSxJQUFHLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRyxLQUFJO0FBQzFDLFVBQUksSUFBSSxHQUFHLE1BQU0sSUFBSUEsSUFBRyxDQUFDLElBQUksSUFBSSxFQUFFLFFBQVEsSUFBSUEsSUFBRyxDQUFDLElBQUksRUFBRSxPQUFPLE9BQU8sSUFBSSxFQUFFLFFBQVEsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBR0EsSUFBRyxDQUFDLENBQUMsR0FBRyxLQUFNLFFBQU87QUFDM0osVUFBSSxJQUFJLEdBQUcsRUFBRyxDQUFBQSxNQUFLLENBQUNBLElBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxLQUFLO0FBQ3RDLGNBQVFBLElBQUcsQ0FBQyxHQUFHO0FBQUEsUUFDWCxLQUFLO0FBQUEsUUFBRyxLQUFLO0FBQUcsY0FBSUE7QUFBSTtBQUFBLFFBQ3hCLEtBQUs7QUFBRyxZQUFFO0FBQVMsaUJBQU8sRUFBRSxPQUFPQSxJQUFHLENBQUMsR0FBRyxNQUFNLE1BQU07QUFBQSxRQUN0RCxLQUFLO0FBQUcsWUFBRTtBQUFTLGNBQUlBLElBQUcsQ0FBQztBQUFHLFVBQUFBLE1BQUssQ0FBQyxDQUFDO0FBQUc7QUFBQSxRQUN4QyxLQUFLO0FBQUcsVUFBQUEsTUFBSyxFQUFFLElBQUksSUFBSTtBQUFHLFlBQUUsS0FBSyxJQUFJO0FBQUc7QUFBQSxRQUN4QztBQUNJLGNBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxJQUFJLEVBQUUsU0FBUyxLQUFLLEVBQUUsRUFBRSxTQUFTLENBQUMsT0FBT0EsSUFBRyxDQUFDLE1BQU0sS0FBS0EsSUFBRyxDQUFDLE1BQU0sSUFBSTtBQUFFLGdCQUFJO0FBQUc7QUFBQSxVQUFVO0FBQzNHLGNBQUlBLElBQUcsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxLQUFNQSxJQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBS0EsSUFBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUs7QUFBRSxjQUFFLFFBQVFBLElBQUcsQ0FBQztBQUFHO0FBQUEsVUFBTztBQUNyRixjQUFJQSxJQUFHLENBQUMsTUFBTSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRztBQUFFLGNBQUUsUUFBUSxFQUFFLENBQUM7QUFBRyxnQkFBSUE7QUFBSTtBQUFBLFVBQU87QUFDcEUsY0FBSSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRztBQUFFLGNBQUUsUUFBUSxFQUFFLENBQUM7QUFBRyxjQUFFLElBQUksS0FBS0EsR0FBRTtBQUFHO0FBQUEsVUFBTztBQUNsRSxjQUFJLEVBQUUsQ0FBQyxFQUFHLEdBQUUsSUFBSSxJQUFJO0FBQ3BCLFlBQUUsS0FBSyxJQUFJO0FBQUc7QUFBQSxNQUN0QjtBQUNBLE1BQUFBLE1BQUssS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUFBLElBQzdCLFNBQVMsR0FBRztBQUFFLE1BQUFBLE1BQUssQ0FBQyxHQUFHLENBQUM7QUFBRyxVQUFJO0FBQUEsSUFBRyxVQUFFO0FBQVUsVUFBSSxJQUFJO0FBQUEsSUFBRztBQUN6RCxRQUFJQSxJQUFHLENBQUMsSUFBSSxFQUFHLE9BQU1BLElBQUcsQ0FBQztBQUFHLFdBQU8sRUFBRSxPQUFPQSxJQUFHLENBQUMsSUFBSUEsSUFBRyxDQUFDLElBQUksUUFBUSxNQUFNLEtBQUs7QUFBQSxFQUNuRjtBQUNGO0FBY08sU0FBUyxhQUFhLEdBQUcsR0FBRztBQUNqQyxXQUFTLEtBQUssRUFBRyxLQUFJLE1BQU0sYUFBYSxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssR0FBRyxDQUFDLEVBQUcsaUJBQWdCLEdBQUcsR0FBRyxDQUFDO0FBQzlHO0FBRU8sU0FBUyxTQUFTLEdBQUc7QUFDMUIsTUFBSSxJQUFJLE9BQU8sV0FBVyxjQUFjLE9BQU8sVUFBVSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSTtBQUM1RSxNQUFJLEVBQUcsUUFBTyxFQUFFLEtBQUssQ0FBQztBQUN0QixNQUFJLEtBQUssT0FBTyxFQUFFLFdBQVcsU0FBVSxRQUFPO0FBQUEsSUFDMUMsTUFBTSxXQUFZO0FBQ2QsVUFBSSxLQUFLLEtBQUssRUFBRSxPQUFRLEtBQUk7QUFDNUIsYUFBTyxFQUFFLE9BQU8sS0FBSyxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRTtBQUFBLElBQzFDO0FBQUEsRUFDSjtBQUNBLFFBQU0sSUFBSSxVQUFVLElBQUksNEJBQTRCLGlDQUFpQztBQUN2RjtBQUVPLFNBQVMsT0FBTyxHQUFHLEdBQUc7QUFDM0IsTUFBSSxJQUFJLE9BQU8sV0FBVyxjQUFjLEVBQUUsT0FBTyxRQUFRO0FBQ3pELE1BQUksQ0FBQyxFQUFHLFFBQU87QUFDZixNQUFJLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHO0FBQy9CLE1BQUk7QUFDQSxZQUFRLE1BQU0sVUFBVSxNQUFNLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLEtBQU0sSUFBRyxLQUFLLEVBQUUsS0FBSztBQUFBLEVBQzdFLFNBQ09DLFFBQU87QUFBRSxRQUFJLEVBQUUsT0FBT0EsT0FBTTtBQUFBLEVBQUcsVUFDdEM7QUFDSSxRQUFJO0FBQ0EsVUFBSSxLQUFLLENBQUMsRUFBRSxTQUFTLElBQUksRUFBRSxRQUFRLEdBQUksR0FBRSxLQUFLLENBQUM7QUFBQSxJQUNuRCxVQUNBO0FBQVUsVUFBSSxFQUFHLE9BQU0sRUFBRTtBQUFBLElBQU87QUFBQSxFQUNwQztBQUNBLFNBQU87QUFDVDtBQUdPLFNBQVMsV0FBVztBQUN6QixXQUFTLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUTtBQUMzQyxTQUFLLEdBQUcsT0FBTyxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDdkMsU0FBTztBQUNUO0FBR08sU0FBUyxpQkFBaUI7QUFDL0IsV0FBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssVUFBVSxRQUFRLElBQUksSUFBSSxJQUFLLE1BQUssVUFBVSxDQUFDLEVBQUU7QUFDN0UsV0FBUyxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJO0FBQ3pDLGFBQVMsSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFFLFFBQVEsSUFBSSxJQUFJLEtBQUs7QUFDMUQsUUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xCLFNBQU87QUFDVDtBQUVPLFNBQVMsY0FBYyxJQUFJLE1BQU0sTUFBTTtBQUM1QyxNQUFJLFFBQVEsVUFBVSxXQUFXLEVBQUcsVUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLEdBQUcsS0FBSztBQUNqRixRQUFJLE1BQU0sRUFBRSxLQUFLLE9BQU87QUFDcEIsVUFBSSxDQUFDLEdBQUksTUFBSyxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sR0FBRyxDQUFDO0FBQ25ELFNBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUFBLElBQ2xCO0FBQUEsRUFDSjtBQUNBLFNBQU8sR0FBRyxPQUFPLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxJQUFJLENBQUM7QUFDekQ7QUFFTyxTQUFTLFFBQVEsR0FBRztBQUN6QixTQUFPLGdCQUFnQixXQUFXLEtBQUssSUFBSSxHQUFHLFFBQVEsSUFBSSxRQUFRLENBQUM7QUFDckU7QUFFTyxTQUFTLGlCQUFpQixTQUFTLFlBQVksV0FBVztBQUMvRCxNQUFJLENBQUMsT0FBTyxjQUFlLE9BQU0sSUFBSSxVQUFVLHNDQUFzQztBQUNyRixNQUFJLElBQUksVUFBVSxNQUFNLFNBQVMsY0FBYyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztBQUM1RCxTQUFPLElBQUksT0FBTyxRQUFRLE9BQU8sa0JBQWtCLGFBQWEsZ0JBQWdCLFFBQVEsU0FBUyxHQUFHLEtBQUssTUFBTSxHQUFHLEtBQUssT0FBTyxHQUFHLEtBQUssVUFBVSxXQUFXLEdBQUcsRUFBRSxPQUFPLGFBQWEsSUFBSSxXQUFZO0FBQUUsV0FBTztBQUFBLEVBQU0sR0FBRztBQUN0TixXQUFTLFlBQVksR0FBRztBQUFFLFdBQU8sU0FBVSxHQUFHO0FBQUUsYUFBTyxRQUFRLFFBQVEsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNO0FBQUEsSUFBRztBQUFBLEVBQUc7QUFDOUYsV0FBUyxLQUFLLEdBQUcsR0FBRztBQUFFLFFBQUksRUFBRSxDQUFDLEdBQUc7QUFBRSxRQUFFLENBQUMsSUFBSSxTQUFVLEdBQUc7QUFBRSxlQUFPLElBQUksUUFBUSxTQUFVLEdBQUcsR0FBRztBQUFFLFlBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxHQUFHLENBQUM7QUFBQSxRQUFHLENBQUM7QUFBQSxNQUFHO0FBQUcsVUFBSSxFQUFHLEdBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFBQSxJQUFHO0FBQUEsRUFBRTtBQUN2SyxXQUFTLE9BQU8sR0FBRyxHQUFHO0FBQUUsUUFBSTtBQUFFLFdBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQUEsSUFBRyxTQUFTLEdBQUc7QUFBRSxhQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0FBQUEsSUFBRztBQUFBLEVBQUU7QUFDakYsV0FBUyxLQUFLLEdBQUc7QUFBRSxNQUFFLGlCQUFpQixVQUFVLFFBQVEsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssU0FBUyxNQUFNLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUFBLEVBQUc7QUFDdkgsV0FBUyxRQUFRLE9BQU87QUFBRSxXQUFPLFFBQVEsS0FBSztBQUFBLEVBQUc7QUFDakQsV0FBUyxPQUFPLE9BQU87QUFBRSxXQUFPLFNBQVMsS0FBSztBQUFBLEVBQUc7QUFDakQsV0FBUyxPQUFPLEdBQUcsR0FBRztBQUFFLFFBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLEdBQUcsRUFBRSxPQUFRLFFBQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUFBLEVBQUc7QUFDbkY7QUFFTyxTQUFTLGlCQUFpQixHQUFHO0FBQ2xDLE1BQUksR0FBRztBQUNQLFNBQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLFNBQVUsR0FBRztBQUFFLFVBQU07QUFBQSxFQUFHLENBQUMsR0FBRyxLQUFLLFFBQVEsR0FBRyxFQUFFLE9BQU8sUUFBUSxJQUFJLFdBQVk7QUFBRSxXQUFPO0FBQUEsRUFBTSxHQUFHO0FBQzFJLFdBQVMsS0FBSyxHQUFHLEdBQUc7QUFBRSxNQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxTQUFVLEdBQUc7QUFBRSxjQUFRLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDLElBQUk7QUFBQSxJQUFHLElBQUk7QUFBQSxFQUFHO0FBQ3ZJO0FBRU8sU0FBUyxjQUFjLEdBQUc7QUFDL0IsTUFBSSxDQUFDLE9BQU8sY0FBZSxPQUFNLElBQUksVUFBVSxzQ0FBc0M7QUFDckYsTUFBSSxJQUFJLEVBQUUsT0FBTyxhQUFhLEdBQUc7QUFDakMsU0FBTyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxPQUFPLGFBQWEsYUFBYSxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSyxNQUFNLEdBQUcsS0FBSyxPQUFPLEdBQUcsS0FBSyxRQUFRLEdBQUcsRUFBRSxPQUFPLGFBQWEsSUFBSSxXQUFZO0FBQUUsV0FBTztBQUFBLEVBQU0sR0FBRztBQUM5TSxXQUFTLEtBQUssR0FBRztBQUFFLE1BQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLFNBQVUsR0FBRztBQUFFLGFBQU8sSUFBSSxRQUFRLFNBQVUsU0FBUyxRQUFRO0FBQUUsWUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxTQUFTLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSztBQUFBLE1BQUcsQ0FBQztBQUFBLElBQUc7QUFBQSxFQUFHO0FBQy9KLFdBQVMsT0FBTyxTQUFTLFFBQVEsR0FBRyxHQUFHO0FBQUUsWUFBUSxRQUFRLENBQUMsRUFBRSxLQUFLLFNBQVNDLElBQUc7QUFBRSxjQUFRLEVBQUUsT0FBT0EsSUFBRyxNQUFNLEVBQUUsQ0FBQztBQUFBLElBQUcsR0FBRyxNQUFNO0FBQUEsRUFBRztBQUM3SDtBQUVPLFNBQVMscUJBQXFCLFFBQVEsS0FBSztBQUNoRCxNQUFJLE9BQU8sZ0JBQWdCO0FBQUUsV0FBTyxlQUFlLFFBQVEsT0FBTyxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQUEsRUFBRyxPQUFPO0FBQUUsV0FBTyxNQUFNO0FBQUEsRUFBSztBQUM5RyxTQUFPO0FBQ1Q7QUFpQk8sU0FBUyxhQUFhLEtBQUs7QUFDaEMsTUFBSSxPQUFPLElBQUksV0FBWSxRQUFPO0FBQ2xDLE1BQUksU0FBUyxDQUFDO0FBQ2QsTUFBSSxPQUFPO0FBQU0sYUFBUyxJQUFJLFFBQVEsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxJQUFLLEtBQUksRUFBRSxDQUFDLE1BQU0sVUFBVyxpQkFBZ0IsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUE7QUFDL0gscUJBQW1CLFFBQVEsR0FBRztBQUM5QixTQUFPO0FBQ1Q7QUFFTyxTQUFTLGdCQUFnQixLQUFLO0FBQ25DLFNBQVEsT0FBTyxJQUFJLGFBQWMsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUN4RDtBQUVPLFNBQVMsdUJBQXVCLFVBQVUsT0FBTyxNQUFNLEdBQUc7QUFDL0QsTUFBSSxTQUFTLE9BQU8sQ0FBQyxFQUFHLE9BQU0sSUFBSSxVQUFVLCtDQUErQztBQUMzRixNQUFJLE9BQU8sVUFBVSxhQUFhLGFBQWEsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxFQUFHLE9BQU0sSUFBSSxVQUFVLDBFQUEwRTtBQUNqTCxTQUFPLFNBQVMsTUFBTSxJQUFJLFNBQVMsTUFBTSxFQUFFLEtBQUssUUFBUSxJQUFJLElBQUksRUFBRSxRQUFRLE1BQU0sSUFBSSxRQUFRO0FBQzlGO0FBRU8sU0FBUyx1QkFBdUIsVUFBVSxPQUFPLE9BQU8sTUFBTSxHQUFHO0FBQ3RFLE1BQUksU0FBUyxJQUFLLE9BQU0sSUFBSSxVQUFVLGdDQUFnQztBQUN0RSxNQUFJLFNBQVMsT0FBTyxDQUFDLEVBQUcsT0FBTSxJQUFJLFVBQVUsK0NBQStDO0FBQzNGLE1BQUksT0FBTyxVQUFVLGFBQWEsYUFBYSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUcsT0FBTSxJQUFJLFVBQVUseUVBQXlFO0FBQ2hMLFNBQVEsU0FBUyxNQUFNLEVBQUUsS0FBSyxVQUFVLEtBQUssSUFBSSxJQUFJLEVBQUUsUUFBUSxRQUFRLE1BQU0sSUFBSSxVQUFVLEtBQUssR0FBSTtBQUN0RztBQUVPLFNBQVMsc0JBQXNCLE9BQU8sVUFBVTtBQUNyRCxNQUFJLGFBQWEsUUFBUyxPQUFPLGFBQWEsWUFBWSxPQUFPLGFBQWEsV0FBYSxPQUFNLElBQUksVUFBVSx3Q0FBd0M7QUFDdkosU0FBTyxPQUFPLFVBQVUsYUFBYSxhQUFhLFFBQVEsTUFBTSxJQUFJLFFBQVE7QUFDOUU7QUFFTyxTQUFTLHdCQUF3QixLQUFLLE9BQU8sT0FBTztBQUN6RCxNQUFJLFVBQVUsUUFBUSxVQUFVLFFBQVE7QUFDdEMsUUFBSSxPQUFPLFVBQVUsWUFBWSxPQUFPLFVBQVUsV0FBWSxPQUFNLElBQUksVUFBVSxrQkFBa0I7QUFDcEcsUUFBSSxTQUFTO0FBQ2IsUUFBSSxPQUFPO0FBQ1QsVUFBSSxDQUFDLE9BQU8sYUFBYyxPQUFNLElBQUksVUFBVSxxQ0FBcUM7QUFDbkYsZ0JBQVUsTUFBTSxPQUFPLFlBQVk7QUFBQSxJQUNyQztBQUNBLFFBQUksWUFBWSxRQUFRO0FBQ3RCLFVBQUksQ0FBQyxPQUFPLFFBQVMsT0FBTSxJQUFJLFVBQVUsZ0NBQWdDO0FBQ3pFLGdCQUFVLE1BQU0sT0FBTyxPQUFPO0FBQzlCLFVBQUksTUFBTyxTQUFRO0FBQUEsSUFDckI7QUFDQSxRQUFJLE9BQU8sWUFBWSxXQUFZLE9BQU0sSUFBSSxVQUFVLHdCQUF3QjtBQUMvRSxRQUFJLE1BQU8sV0FBVSxXQUFXO0FBQUUsVUFBSTtBQUFFLGNBQU0sS0FBSyxJQUFJO0FBQUEsTUFBRyxTQUFTLEdBQUc7QUFBRSxlQUFPLFFBQVEsT0FBTyxDQUFDO0FBQUEsTUFBRztBQUFBLElBQUU7QUFDcEcsUUFBSSxNQUFNLEtBQUssRUFBRSxPQUFjLFNBQWtCLE1BQWEsQ0FBQztBQUFBLEVBQ2pFLFdBQ1MsT0FBTztBQUNkLFFBQUksTUFBTSxLQUFLLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxFQUNoQztBQUNBLFNBQU87QUFDVDtBQU9PLFNBQVMsbUJBQW1CLEtBQUs7QUFDdEMsV0FBUyxLQUFLLEdBQUc7QUFDZixRQUFJLFFBQVEsSUFBSSxXQUFXLElBQUksaUJBQWlCLEdBQUcsSUFBSSxPQUFPLDBDQUEwQyxJQUFJO0FBQzVHLFFBQUksV0FBVztBQUFBLEVBQ2pCO0FBQ0EsTUFBSSxHQUFHLElBQUk7QUFDWCxXQUFTLE9BQU87QUFDZCxXQUFPLElBQUksSUFBSSxNQUFNLElBQUksR0FBRztBQUMxQixVQUFJO0FBQ0YsWUFBSSxDQUFDLEVBQUUsU0FBUyxNQUFNLEVBQUcsUUFBTyxJQUFJLEdBQUcsSUFBSSxNQUFNLEtBQUssQ0FBQyxHQUFHLFFBQVEsUUFBUSxFQUFFLEtBQUssSUFBSTtBQUNyRixZQUFJLEVBQUUsU0FBUztBQUNiLGNBQUksU0FBUyxFQUFFLFFBQVEsS0FBSyxFQUFFLEtBQUs7QUFDbkMsY0FBSSxFQUFFLE1BQU8sUUFBTyxLQUFLLEdBQUcsUUFBUSxRQUFRLE1BQU0sRUFBRSxLQUFLLE1BQU0sU0FBUyxHQUFHO0FBQUUsaUJBQUssQ0FBQztBQUFHLG1CQUFPLEtBQUs7QUFBQSxVQUFHLENBQUM7QUFBQSxRQUN4RyxNQUNLLE1BQUs7QUFBQSxNQUNaLFNBQ08sR0FBRztBQUNSLGFBQUssQ0FBQztBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQ0EsUUFBSSxNQUFNLEVBQUcsUUFBTyxJQUFJLFdBQVcsUUFBUSxPQUFPLElBQUksS0FBSyxJQUFJLFFBQVEsUUFBUTtBQUMvRSxRQUFJLElBQUksU0FBVSxPQUFNLElBQUk7QUFBQSxFQUM5QjtBQUNBLFNBQU8sS0FBSztBQUNkO0FBRU8sU0FBUyxpQ0FBaUMsTUFBTSxhQUFhO0FBQ2xFLE1BQUksT0FBTyxTQUFTLFlBQVksV0FBVyxLQUFLLElBQUksR0FBRztBQUNuRCxXQUFPLEtBQUssUUFBUSxvREFBb0QsU0FBVSxHQUFHLEtBQUssR0FBRyxLQUFLLElBQUk7QUFDbEcsYUFBTyxNQUFNLGNBQWMsU0FBUyxRQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFLLElBQUksTUFBTSxNQUFNLEdBQUcsWUFBWSxJQUFJO0FBQUEsSUFDN0csQ0FBQztBQUFBLEVBQ0w7QUFDQSxTQUFPO0FBQ1Q7QUE3V0EsSUFnQkksZUFlTyxVQXlIQSxpQkEyR1Asb0JBTUEsU0E4REEsa0JBd0NHO0FBL1dQO0FBQUE7QUFnQkEsSUFBSSxnQkFBZ0IsU0FBUyxHQUFHLEdBQUc7QUFDakMsc0JBQWdCLE9BQU8sa0JBQ2xCLEVBQUUsV0FBVyxDQUFDLEVBQUUsYUFBYSxTQUFTLFNBQVVDLElBQUdDLElBQUc7QUFBRSxRQUFBRCxHQUFFLFlBQVlDO0FBQUEsTUFBRyxLQUMxRSxTQUFVRCxJQUFHQyxJQUFHO0FBQUUsaUJBQVMsS0FBS0EsR0FBRyxLQUFJLE9BQU8sVUFBVSxlQUFlLEtBQUtBLElBQUcsQ0FBQyxFQUFHLENBQUFELEdBQUUsQ0FBQyxJQUFJQyxHQUFFLENBQUM7QUFBQSxNQUFHO0FBQ3BHLGFBQU8sY0FBYyxHQUFHLENBQUM7QUFBQSxJQUMzQjtBQVVPLElBQUksV0FBVyxXQUFXO0FBQy9CLGlCQUFXLE9BQU8sVUFBVSxTQUFTQyxVQUFTLEdBQUc7QUFDN0MsaUJBQVMsR0FBRyxJQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVEsSUFBSSxHQUFHLEtBQUs7QUFDakQsY0FBSSxVQUFVLENBQUM7QUFDZixtQkFBUyxLQUFLLEVBQUcsS0FBSSxPQUFPLFVBQVUsZUFBZSxLQUFLLEdBQUcsQ0FBQyxFQUFHLEdBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUFBLFFBQy9FO0FBQ0EsZUFBTztBQUFBLE1BQ1g7QUFDQSxhQUFPLFNBQVMsTUFBTSxNQUFNLFNBQVM7QUFBQSxJQUN2QztBQWdITyxJQUFJLGtCQUFrQixPQUFPLFVBQVUsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJO0FBQ2xFLFVBQUksT0FBTyxPQUFXLE1BQUs7QUFDM0IsVUFBSSxPQUFPLE9BQU8seUJBQXlCLEdBQUcsQ0FBQztBQUMvQyxVQUFJLENBQUMsU0FBUyxTQUFTLE9BQU8sQ0FBQyxFQUFFLGFBQWEsS0FBSyxZQUFZLEtBQUssZUFBZTtBQUMvRSxlQUFPLEVBQUUsWUFBWSxNQUFNLEtBQUssV0FBVztBQUFFLGlCQUFPLEVBQUUsQ0FBQztBQUFBLFFBQUcsRUFBRTtBQUFBLE1BQ2hFO0FBQ0EsYUFBTyxlQUFlLEdBQUcsSUFBSSxJQUFJO0FBQUEsSUFDbkMsTUFBTSxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUk7QUFDMUIsVUFBSSxPQUFPLE9BQVcsTUFBSztBQUMzQixRQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFBQSxJQUNiO0FBaUdBLElBQUkscUJBQXFCLE9BQU8sVUFBVSxTQUFTLEdBQUcsR0FBRztBQUN2RCxhQUFPLGVBQWUsR0FBRyxXQUFXLEVBQUUsWUFBWSxNQUFNLE9BQU8sRUFBRSxDQUFDO0FBQUEsSUFDcEUsS0FBSyxTQUFTLEdBQUcsR0FBRztBQUNsQixRQUFFLFNBQVMsSUFBSTtBQUFBLElBQ2pCO0FBRUEsSUFBSSxVQUFVLFNBQVMsR0FBRztBQUN4QixnQkFBVSxPQUFPLHVCQUF1QixTQUFVQyxJQUFHO0FBQ25ELFlBQUksS0FBSyxDQUFDO0FBQ1YsaUJBQVMsS0FBS0EsR0FBRyxLQUFJLE9BQU8sVUFBVSxlQUFlLEtBQUtBLElBQUcsQ0FBQyxFQUFHLElBQUcsR0FBRyxNQUFNLElBQUk7QUFDakYsZUFBTztBQUFBLE1BQ1Q7QUFDQSxhQUFPLFFBQVEsQ0FBQztBQUFBLElBQ2xCO0FBdURBLElBQUksbUJBQW1CLE9BQU8sb0JBQW9CLGFBQWEsa0JBQWtCLFNBQVVMLFFBQU8sWUFBWSxTQUFTO0FBQ3JILFVBQUksSUFBSSxJQUFJLE1BQU0sT0FBTztBQUN6QixhQUFPLEVBQUUsT0FBTyxtQkFBbUIsRUFBRSxRQUFRQSxRQUFPLEVBQUUsYUFBYSxZQUFZO0FBQUEsSUFDakY7QUFxQ0EsSUFBTyxvQkFBUTtBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ2haQSxJQUFhO0FBQWI7QUFBQTtBQUFPLElBQU0sUUFBUSxDQUFDLGNBQWM7QUFDaEMsVUFBSSxPQUFPLGNBQWMsWUFBWTtBQUNqQyxlQUFPLFVBQVU7QUFBQSxNQUNyQjtBQUNBLGFBQU87QUFBQSxJQUNYO0FBQUE7QUFBQTs7O0FDTEEsSUFBQU0sb0JBQUE7QUFBQTtBQUFBO0FBRUEsUUFBSSxRQUFRO0FBRVosUUFBTUMsb0JBQW1CLENBQUMsWUFBWSxRQUFRLE1BQU0sa0JBQWtCLE1BQU0sUUFBUSxNQUFNLGtCQUFrQixJQUFJLENBQUM7QUFFakgsUUFBTSxvQkFBb0IsQ0FBQyxVQUFVO0FBQ2pDLFVBQUksT0FBTyxVQUFVO0FBQ2pCLGVBQU87QUFDWCxZQUFNLGNBQWMsUUFBUSxRQUFRLEtBQUs7QUFDekMsYUFBTyxNQUFNO0FBQUEsSUFDakI7QUFFQSxZQUFRLG1CQUFtQkE7QUFDM0IsWUFBUSxvQkFBb0I7QUFBQTtBQUFBOzs7QUNkNUIsSUFBYTtBQUFiO0FBQUE7QUFBTyxJQUFNLFlBQVksQ0FBQyxXQUFXLE1BQU0sUUFBUSxPQUFPLFlBQVk7QUFBQSxNQUNsRTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNKO0FBQUE7QUFBQTs7O0FDTkEsMEJBQ0Esd0JBRWEsaUNBeURQO0FBNUROO0FBQUE7QUFBQSwyQkFBNkI7QUFDN0IsNkJBQWlDO0FBQ2pDO0FBQ08sSUFBTSxrQ0FBa0MsQ0FBQyxXQUFXLENBQUMsTUFBTSxZQUFZLE9BQU8sU0FBUztBQUMxRixZQUFNLEVBQUUsU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJO0FBQ3BDLFlBQU0sRUFBRSxnQkFBZ0IsUUFBSSx5Q0FBaUIsT0FBTztBQUNwRCxZQUFNLENBQUMsRUFBRSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxtQkFBbUIsQ0FBQztBQUMvQyxVQUFJO0FBQ0EsY0FBTSxTQUFTLE1BQU0sT0FBTyxTQUFTLG9CQUFvQixVQUFVLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUEsVUFDaEYsR0FBRztBQUFBLFVBQ0gsR0FBRztBQUFBLFFBQ1AsR0FBRyxRQUFRO0FBQ1gsZUFBTztBQUFBLFVBQ0g7QUFBQSxVQUNBLFFBQVE7QUFBQSxRQUNaO0FBQUEsTUFDSixTQUNPQyxRQUFPO0FBQ1YsZUFBTyxlQUFlQSxRQUFPLGFBQWE7QUFBQSxVQUN0QyxPQUFPO0FBQUEsVUFDUCxZQUFZO0FBQUEsVUFDWixVQUFVO0FBQUEsVUFDVixjQUFjO0FBQUEsUUFDbEIsQ0FBQztBQUNELFlBQUksRUFBRSxlQUFlQSxTQUFRO0FBQ3pCLGdCQUFNLE9BQU87QUFDYixjQUFJO0FBQ0EsWUFBQUEsT0FBTSxXQUFXLFNBQVM7QUFBQSxVQUM5QixTQUNPLEdBQUc7QUFDTixnQkFBSSxDQUFDLFFBQVEsVUFBVSxRQUFRLFFBQVEsYUFBYSxTQUFTLGNBQWM7QUFDdkUsc0JBQVEsS0FBSyxJQUFJO0FBQUEsWUFDckIsT0FDSztBQUNELHNCQUFRLFFBQVEsT0FBTyxJQUFJO0FBQUEsWUFDL0I7QUFBQSxVQUNKO0FBQ0EsY0FBSSxPQUFPQSxPQUFNLHNCQUFzQixhQUFhO0FBQ2hELGdCQUFJQSxPQUFNLFdBQVc7QUFDakIsY0FBQUEsT0FBTSxVQUFVLE9BQU9BLE9BQU07QUFBQSxZQUNqQztBQUFBLFVBQ0o7QUFDQSxjQUFJO0FBQ0EsZ0JBQUksa0NBQWEsV0FBVyxRQUFRLEdBQUc7QUFDbkMsb0JBQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxJQUFJO0FBQ3pCLG9CQUFNLGdCQUFnQixPQUFPLFFBQVEsT0FBTztBQUM1QyxjQUFBQSxPQUFNLFlBQVk7QUFBQSxnQkFDZCxnQkFBZ0IsU0FBUztBQUFBLGdCQUN6QixXQUFXLFdBQVcsMEJBQTBCLGFBQWE7QUFBQSxnQkFDN0QsbUJBQW1CLFdBQVcsbUJBQW1CLGFBQWE7QUFBQSxnQkFDOUQsTUFBTSxXQUFXLG9CQUFvQixhQUFhO0FBQUEsY0FDdEQ7QUFBQSxZQUNKO0FBQUEsVUFDSixTQUNPLEdBQUc7QUFBQSxVQUNWO0FBQUEsUUFDSjtBQUNBLGNBQU1BO0FBQUEsTUFDVjtBQUFBLElBQ0o7QUFDQSxJQUFNLGFBQWEsQ0FBQyxTQUFTLFlBQVk7QUFDckMsY0FBUSxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTTtBQUMxQixlQUFPLEVBQUUsTUFBTSxPQUFPO0FBQUEsTUFDMUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxNQUFNLEdBQUcsQ0FBQztBQUFBLElBQzdCO0FBQUE7QUFBQTs7O0FDaEVBLHVCQUNhO0FBRGI7QUFBQTtBQUFBLHdCQUF5QjtBQUNsQixJQUFNLGVBQWUsQ0FBQyxhQUFhO0FBQ3RDLFVBQUksT0FBTyxhQUFhLFVBQVU7QUFDOUIsWUFBSSxTQUFTLFVBQVU7QUFDbkIsZ0JBQU0saUJBQWEsNEJBQVMsU0FBUyxHQUFHO0FBQ3hDLGNBQUksU0FBUyxTQUFTO0FBQ2xCLHVCQUFXLFVBQVUsQ0FBQztBQUN0Qix1QkFBVyxDQUFDLE1BQU0sTUFBTSxLQUFLLE9BQU8sUUFBUSxTQUFTLE9BQU8sR0FBRztBQUMzRCx5QkFBVyxRQUFRLEtBQUssWUFBWSxDQUFDLElBQUksT0FBTyxLQUFLLElBQUk7QUFBQSxZQUM3RDtBQUFBLFVBQ0o7QUFDQSxpQkFBTztBQUFBLFFBQ1g7QUFDQSxlQUFPO0FBQUEsTUFDWDtBQUNBLGlCQUFPLDRCQUFTLFFBQVE7QUFBQSxJQUM1QjtBQUFBO0FBQUE7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQ0FDLHlCQUVhO0FBSGI7QUFBQTtBQUFBO0FBQ0EsSUFBQUEsMEJBQWlDO0FBQ2pDO0FBQ08sSUFBTSxnQ0FBZ0MsQ0FBQyxXQUFXLENBQUMsTUFBTSxZQUFZLE9BQU8sU0FBUztBQUN4RixZQUFNLEVBQUUsZ0JBQWdCLFFBQUksMENBQWlCLE9BQU87QUFDcEQsWUFBTSxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksbUJBQW1CLENBQUM7QUFDL0MsWUFBTSxXQUFXLFFBQVEsYUFDbkIsWUFBWSxhQUFhLFFBQVEsVUFBVSxJQUMzQyxPQUFPO0FBQ2IsWUFBTSxVQUFVLE1BQU0sT0FBTyxTQUFTLGlCQUFpQixVQUFVLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssT0FBTztBQUFBLFFBQzFGLEdBQUc7QUFBQSxRQUNILEdBQUc7QUFBQSxRQUNIO0FBQUEsTUFDSixDQUFDO0FBQ0QsYUFBTyxLQUFLO0FBQUEsUUFDUixHQUFHO0FBQUEsUUFDSDtBQUFBLE1BQ0osQ0FBQztBQUFBLElBQ0w7QUFBQTtBQUFBOzs7QUNKTyxTQUFTLHFCQUFxQixRQUFRO0FBQ3pDLFNBQU87QUFBQSxJQUNILGNBQWMsQ0FBQyxpQkFBaUI7QUFDNUIsbUJBQWEsSUFBSSw4QkFBOEIsTUFBTSxHQUFHLDBCQUEwQjtBQUNsRixtQkFBYSxJQUFJLGdDQUFnQyxNQUFNLEdBQUcsNEJBQTRCO0FBQ3RGLGFBQU8sU0FBUyxnQkFBZ0IsTUFBTTtBQUFBLElBQzFDO0FBQUEsRUFDSjtBQUNKO0FBdEJBLElBRWEsOEJBTUE7QUFSYjtBQUFBO0FBQUE7QUFDQTtBQUNPLElBQU0sK0JBQStCO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTSxDQUFDLGNBQWM7QUFBQSxNQUNyQixVQUFVO0FBQUEsSUFDZDtBQUNPLElBQU0sNkJBQTZCO0FBQUEsTUFDdEMsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTSxDQUFDLFlBQVk7QUFBQSxNQUNuQixVQUFVO0FBQUEsSUFDZDtBQUFBO0FBQUE7OztBQ2JBLElBQWE7QUFBYjtBQUFBO0FBQU8sSUFBTSxTQUFOLE1BQWE7QUFBQSxNQUNoQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxPQUFPLE9BQU8sVUFBVSxRQUFRO0FBQzVCLGNBQU0sU0FBUyxPQUFPLE9BQU8sVUFBVSxNQUFNO0FBQzdDLGVBQU87QUFBQSxNQUNYO0FBQUEsTUFDQSxRQUFRLE9BQU8sV0FBVyxFQUFFLEtBQUs7QUFDN0IsY0FBTSxjQUFjLEtBQUssVUFBVSxjQUFjLEdBQUc7QUFDcEQsWUFBSSxDQUFDLGVBQWUsT0FBTyxRQUFRLFlBQVksUUFBUSxNQUFNO0FBQ3pELGdCQUFNQyxRQUFPO0FBQ2IsaUJBQU9BLE1BQUssV0FBVyxLQUFLO0FBQUEsUUFDaEM7QUFDQSxlQUFPO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVTtBQUNOLGVBQU8sS0FBSyxZQUFZLE1BQU0sS0FBSztBQUFBLE1BQ3ZDO0FBQUEsSUFDSjtBQUFBO0FBQUE7OztBQ25CQSxJQUNhLFlBT0E7QUFSYjtBQUFBO0FBQUE7QUFDTyxJQUFNLGFBQU4sTUFBTSxvQkFBbUIsT0FBTztBQUFBLE1BQ25DLE9BQU8sU0FBUyx1QkFBTyxJQUFJLGFBQWE7QUFBQSxNQUN4QztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxTQUFTLFlBQVc7QUFBQSxJQUN4QjtBQUNPLElBQU0sT0FBTyxDQUFDLFdBQVcsTUFBTSxRQUFRLGdCQUFnQixPQUFPLE9BQU8sSUFBSSxXQUFXLEdBQUc7QUFBQSxNQUMxRjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0osQ0FBQztBQUFBO0FBQUE7OztBQ2JELElBQ2EsV0FRQTtBQVRiO0FBQUE7QUFBQTtBQUNPLElBQU0sWUFBTixNQUFNLG1CQUFrQixPQUFPO0FBQUEsTUFDbEMsT0FBTyxTQUFTLHVCQUFPLElBQUksYUFBYTtBQUFBLE1BQ3hDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxTQUFTLFdBQVU7QUFBQSxJQUN2QjtBQUNPLElBQU0sTUFBTSxDQUFDLFdBQVcsTUFBTSxRQUFRLFdBQVcsZ0JBQWdCLE9BQU8sT0FBTyxJQUFJLFVBQVUsR0FBRztBQUFBLE1BQ25HO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0osQ0FBQztBQUFBO0FBQUE7OztBQ2ZELElBQ2EsaUJBUUE7QUFUYjtBQUFBO0FBQUE7QUFDTyxJQUFNLGtCQUFOLE1BQU0seUJBQXdCLE9BQU87QUFBQSxNQUN4QyxPQUFPLFNBQVMsdUJBQU8sSUFBSSxhQUFhO0FBQUEsTUFDeEM7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLFNBQVMsaUJBQWdCO0FBQUEsSUFDN0I7QUFDTyxJQUFNLEtBQUssQ0FBQyxXQUFXLE1BQU0sUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLElBQUksZ0JBQWdCLEdBQUc7QUFBQSxNQUMvRjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNKLENBQUM7QUFBQTtBQUFBOzs7QUNmRCxJQUNhLGlCQVFBO0FBVGI7QUFBQTtBQUFBO0FBQ08sSUFBTSxrQkFBTixNQUFNLHlCQUF3QixPQUFPO0FBQUEsTUFDeEMsT0FBTyxTQUFTLHVCQUFPLElBQUksYUFBYTtBQUFBLE1BQ3hDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxTQUFTLGlCQUFnQjtBQUFBLElBQzdCO0FBQ08sSUFBTSxTQUFTLENBQUMsV0FBVyxNQUFNLFFBQVEsYUFBYSxlQUFlLE9BQU8sT0FBTyxJQUFJLGdCQUFnQixHQUFHO0FBQUEsTUFDN0c7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSixDQUFDO0FBQUE7QUFBQTs7O0FDZkQsSUFFYSxhQUtBO0FBUGI7QUFBQTtBQUFBO0FBQ0E7QUFDTyxJQUFNLGNBQU4sTUFBTSxxQkFBb0IsZ0JBQWdCO0FBQUEsTUFDN0MsT0FBTyxTQUFTLHVCQUFPLElBQUksYUFBYTtBQUFBLE1BQ3hDO0FBQUEsTUFDQSxTQUFTLGFBQVk7QUFBQSxJQUN6QjtBQUNPLElBQU0sUUFBUSxDQUFDLFdBQVcsTUFBTSxRQUFRLGFBQWEsWUFBWSxTQUFTLE9BQU8sT0FBTyxJQUFJLFlBQVksR0FBRztBQUFBLE1BQzlHO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsTUFBTTtBQUFBLElBQ1YsQ0FBQztBQUFBO0FBQUE7OztBQ2JNLFNBQVMsZ0JBQWdCLFdBQVc7QUFDdkMsTUFBSSxPQUFPLGNBQWMsVUFBVTtBQUMvQixXQUFPO0FBQUEsRUFDWDtBQUNBLGNBQVksWUFBWTtBQUN4QixNQUFJLFlBQVksU0FBUyxHQUFHO0FBQ3hCLFdBQU8sWUFBWSxTQUFTO0FBQUEsRUFDaEM7QUFDQSxRQUFNLFNBQVMsQ0FBQztBQUNoQixNQUFJLElBQUk7QUFDUixhQUFXLFNBQVM7QUFBQSxJQUNoQjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0osR0FBRztBQUNDLFNBQU0sYUFBYSxNQUFPLE9BQU8sR0FBRztBQUNoQyxhQUFPLEtBQUssSUFBSTtBQUFBLElBQ3BCO0FBQUEsRUFDSjtBQUNBLFNBQVEsWUFBWSxTQUFTLElBQUk7QUFDckM7QUF6QkEsSUFBYTtBQUFiO0FBQUE7QUFBTyxJQUFNLGNBQWMsQ0FBQztBQUFBO0FBQUE7OztBQ21TNUIsU0FBUyxPQUFPLGNBQWMsWUFBWTtBQUN0QyxNQUFJLHdCQUF3QixrQkFBa0I7QUFDMUMsV0FBTyxPQUFPLE9BQU8sY0FBYztBQUFBLE1BQy9CO0FBQUEsTUFDQSxpQkFBaUI7QUFBQSxJQUNyQixDQUFDO0FBQUEsRUFDTDtBQUNBLFFBQU0scUJBQXFCO0FBQzNCLFNBQU8sSUFBSSxtQkFBbUIsY0FBYyxVQUFVO0FBQzFEO0FBNVNBLElBRU0sTUFJTyxvQkFDQSxvQkFDQSxrQkFxU1AsZ0JBQ087QUE5U2I7QUFBQTtBQUFBO0FBQ0E7QUFDQSxJQUFNLE9BQU87QUFBQSxNQUNULElBQUksdUJBQU8sSUFBSSx1QkFBdUI7QUFBQSxNQUN0QyxJQUFJLHVCQUFPLElBQUksWUFBWTtBQUFBLElBQy9CO0FBQ08sSUFBTSxxQkFBcUIsQ0FBQztBQUM1QixJQUFNLHFCQUFxQixDQUFDO0FBQzVCLElBQU0sbUJBQU4sTUFBTSxrQkFBaUI7QUFBQSxNQUMxQjtBQUFBLE1BQ0E7QUFBQSxNQUNBLE9BQU8sU0FBUyx1QkFBTyxJQUFJLGFBQWE7QUFBQSxNQUN4QyxTQUFTLGtCQUFpQjtBQUFBLE1BQzFCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLFlBQVksS0FBSyxZQUFZO0FBQ3pCLGFBQUssTUFBTTtBQUNYLGFBQUssYUFBYTtBQUNsQixjQUFNLGFBQWEsQ0FBQztBQUNwQixZQUFJLE9BQU87QUFDWCxZQUFJLFNBQVM7QUFDYixhQUFLLGtCQUFrQjtBQUN2QixlQUFPLGVBQWUsSUFBSSxHQUFHO0FBQ3pCLHFCQUFXLEtBQUssS0FBSyxDQUFDLENBQUM7QUFDdkIsaUJBQU8sS0FBSyxDQUFDO0FBQ2IsbUJBQVMsTUFBTSxJQUFJO0FBQ25CLGVBQUssa0JBQWtCO0FBQUEsUUFDM0I7QUFDQSxZQUFJLFdBQVcsU0FBUyxHQUFHO0FBQ3ZCLGVBQUssZUFBZSxDQUFDO0FBQ3JCLG1CQUFTLElBQUksV0FBVyxTQUFTLEdBQUcsS0FBSyxHQUFHLEVBQUUsR0FBRztBQUM3QyxrQkFBTSxXQUFXLFdBQVcsQ0FBQztBQUM3QixtQkFBTyxPQUFPLEtBQUssY0FBYyxnQkFBZ0IsUUFBUSxDQUFDO0FBQUEsVUFDOUQ7QUFBQSxRQUNKLE9BQ0s7QUFDRCxlQUFLLGVBQWU7QUFBQSxRQUN4QjtBQUNBLFlBQUksa0JBQWtCLG1CQUFrQjtBQUNwQyxnQkFBTSx1QkFBdUIsS0FBSztBQUNsQyxpQkFBTyxPQUFPLE1BQU0sTUFBTTtBQUMxQixlQUFLLGVBQWUsT0FBTyxPQUFPLENBQUMsR0FBRyxzQkFBc0IsT0FBTyxnQkFBZ0IsR0FBRyxLQUFLLGdCQUFnQixDQUFDO0FBQzVHLGVBQUssbUJBQW1CO0FBQ3hCLGVBQUssYUFBYSxjQUFjLE9BQU87QUFDdkM7QUFBQSxRQUNKO0FBQ0EsYUFBSyxTQUFTLE1BQU0sTUFBTTtBQUMxQixZQUFJLGVBQWUsS0FBSyxNQUFNLEdBQUc7QUFDN0IsZUFBSyxPQUFPLEdBQUcsS0FBSyxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUM7QUFDL0MsZUFBSyxTQUFTLEtBQUssT0FBTyxDQUFDO0FBQUEsUUFDL0IsT0FDSztBQUNELGVBQUssT0FBTyxLQUFLLGNBQWMsT0FBTyxNQUFNO0FBQzVDLGVBQUssU0FBUztBQUFBLFFBQ2xCO0FBQ0EsWUFBSSxLQUFLLG1CQUFtQixDQUFDLFlBQVk7QUFDckMsZ0JBQU0sSUFBSSxNQUFNLHNEQUFzRCxLQUFLLFFBQVEsSUFBSSxDQUFDLHVCQUF1QjtBQUFBLFFBQ25IO0FBQUEsTUFDSjtBQUFBLE1BQ0EsUUFBUSxPQUFPLFdBQVcsRUFBRSxLQUFLO0FBQzdCLGNBQU0sY0FBYyxLQUFLLFVBQVUsY0FBYyxHQUFHO0FBQ3BELFlBQUksQ0FBQyxlQUFlLE9BQU8sUUFBUSxZQUFZLFFBQVEsTUFBTTtBQUN6RCxnQkFBTSxLQUFLO0FBQ1gsaUJBQU8sR0FBRyxXQUFXLEtBQUs7QUFBQSxRQUM5QjtBQUNBLGVBQU87QUFBQSxNQUNYO0FBQUEsTUFDQSxPQUFPLEdBQUcsS0FBSztBQUNYLGNBQU0sVUFBVSxPQUFPLFFBQVEsY0FBZSxPQUFPLFFBQVEsWUFBWSxRQUFRO0FBQ2pGLFlBQUksT0FBTyxRQUFRLFVBQVU7QUFDekIsY0FBSSxtQkFBbUIsR0FBRyxHQUFHO0FBQ3pCLG1CQUFPLG1CQUFtQixHQUFHO0FBQUEsVUFDakM7QUFBQSxRQUNKLFdBQ1MsT0FBTyxRQUFRLFVBQVU7QUFDOUIsY0FBSSxtQkFBbUIsR0FBRyxHQUFHO0FBQ3pCLG1CQUFPLG1CQUFtQixHQUFHO0FBQUEsVUFDakM7QUFBQSxRQUNKLFdBQ1MsU0FBUztBQUNkLGNBQUksSUFBSSxLQUFLLEVBQUUsR0FBRztBQUNkLG1CQUFPLElBQUksS0FBSyxFQUFFO0FBQUEsVUFDdEI7QUFBQSxRQUNKO0FBQ0EsY0FBTSxLQUFLLE1BQU0sR0FBRztBQUNwQixZQUFJLGNBQWMsbUJBQWtCO0FBQ2hDLGlCQUFPO0FBQUEsUUFDWDtBQUNBLFlBQUksZUFBZSxFQUFFLEdBQUc7QUFDcEIsZ0JBQU0sQ0FBQ0MsS0FBSSxNQUFNLElBQUk7QUFDckIsY0FBSUEsZUFBYyxtQkFBa0I7QUFDaEMsbUJBQU8sT0FBT0EsSUFBRyxnQkFBZ0IsR0FBRyxnQkFBZ0IsTUFBTSxDQUFDO0FBQzNELG1CQUFPQTtBQUFBLFVBQ1g7QUFDQSxnQkFBTSxJQUFJLE1BQU0sOERBQThELEtBQUssVUFBVSxLQUFLLE1BQU0sQ0FBQyxDQUFDLEdBQUc7QUFBQSxRQUNqSDtBQUNBLGNBQU0sS0FBSyxJQUFJLGtCQUFpQixFQUFFO0FBQ2xDLFlBQUksU0FBUztBQUNULGlCQUFRLElBQUksS0FBSyxFQUFFLElBQUk7QUFBQSxRQUMzQjtBQUNBLFlBQUksT0FBTyxPQUFPLFVBQVU7QUFDeEIsaUJBQVEsbUJBQW1CLEVBQUUsSUFBSTtBQUFBLFFBQ3JDO0FBQ0EsWUFBSSxPQUFPLE9BQU8sVUFBVTtBQUN4QixpQkFBUSxtQkFBbUIsRUFBRSxJQUFJO0FBQUEsUUFDckM7QUFDQSxlQUFPO0FBQUEsTUFDWDtBQUFBLE1BQ0EsWUFBWTtBQUNSLGNBQU0sS0FBSyxLQUFLO0FBQ2hCLFlBQUksTUFBTSxRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFHO0FBQ2xDLGlCQUFPLEdBQUcsQ0FBQztBQUFBLFFBQ2Y7QUFDQSxlQUFPO0FBQUEsTUFDWDtBQUFBLE1BQ0EsUUFBUSxnQkFBZ0IsT0FBTztBQUMzQixjQUFNLEVBQUUsS0FBSyxJQUFJO0FBQ2pCLGNBQU0sUUFBUSxDQUFDLGlCQUFpQixRQUFRLEtBQUssU0FBUyxHQUFHO0FBQ3pELGVBQU8sUUFBUSxLQUFLLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxRQUFRO0FBQUEsTUFDaEQ7QUFBQSxNQUNBLGdCQUFnQjtBQUNaLGVBQU8sS0FBSztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxpQkFBaUI7QUFDYixlQUFPLEtBQUs7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsZUFBZTtBQUNYLGNBQU0sS0FBSyxLQUFLLFVBQVU7QUFDMUIsZUFBTyxPQUFPLE9BQU8sV0FDZixNQUFNLE1BQU0sS0FBSyxNQUNqQixHQUFHLENBQUMsTUFBTTtBQUFBLE1BQ3BCO0FBQUEsTUFDQSxjQUFjO0FBQ1YsY0FBTSxLQUFLLEtBQUssVUFBVTtBQUMxQixlQUFPLE9BQU8sT0FBTyxXQUNmLE1BQU0sT0FBTyxNQUFNLE1BQ25CLEdBQUcsQ0FBQyxNQUFNO0FBQUEsTUFDcEI7QUFBQSxNQUNBLGlCQUFpQjtBQUNiLGNBQU0sS0FBSyxLQUFLLFVBQVU7QUFDMUIsWUFBSSxPQUFPLE9BQU8sVUFBVTtBQUN4QixpQkFBTztBQUFBLFFBQ1g7QUFDQSxjQUFNLEtBQUssR0FBRyxDQUFDO0FBQ2YsZUFBUSxPQUFPLEtBQ1gsT0FBTyxNQUNQLE9BQU87QUFBQSxNQUNmO0FBQUEsTUFDQSxnQkFBZ0I7QUFDWixjQUFNLEtBQUssS0FBSyxVQUFVO0FBQzFCLFlBQUksT0FBTyxPQUFPLFVBQVU7QUFDeEIsaUJBQU87QUFBQSxRQUNYO0FBQ0EsZUFBTyxHQUFHLENBQUMsTUFBTTtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxlQUFlO0FBQ1gsY0FBTSxLQUFLLEtBQUssVUFBVTtBQUMxQixlQUFPLE9BQU8sTUFBTSxPQUFPO0FBQUEsTUFDL0I7QUFBQSxNQUNBLG9CQUFvQjtBQUNoQixjQUFNLEtBQUssS0FBSyxVQUFVO0FBQzFCLGVBQVEsT0FBTyxPQUFPLFlBQ2xCLE1BQU0sS0FDTixNQUFNO0FBQUEsTUFDZDtBQUFBLE1BQ0EsZUFBZTtBQUNYLGVBQU8sS0FBSyxVQUFVLE1BQU07QUFBQSxNQUNoQztBQUFBLE1BQ0EsbUJBQW1CO0FBQ2YsZUFBTyxLQUFLLFVBQVUsTUFBTTtBQUFBLE1BQ2hDO0FBQUEsTUFDQSxpQkFBaUI7QUFDYixlQUFPLEtBQUssVUFBVSxNQUFNO0FBQUEsTUFDaEM7QUFBQSxNQUNBLGtCQUFrQjtBQUNkLGVBQU8sS0FBSyxVQUFVLE1BQU07QUFBQSxNQUNoQztBQUFBLE1BQ0Esa0JBQWtCO0FBQ2QsZUFBTyxLQUFLLFVBQVUsTUFBTTtBQUFBLE1BQ2hDO0FBQUEsTUFDQSxxQkFBcUI7QUFDakIsZUFBTyxLQUFLLFVBQVUsTUFBTTtBQUFBLE1BQ2hDO0FBQUEsTUFDQSxxQkFBcUI7QUFDakIsZUFBTyxLQUFLLFVBQVUsTUFBTTtBQUFBLE1BQ2hDO0FBQUEsTUFDQSxjQUFjO0FBQ1YsY0FBTSxFQUFFLFVBQVUsSUFBSSxLQUFLLGdCQUFnQjtBQUMzQyxlQUFPLENBQUMsQ0FBQyxhQUFhLEtBQUssVUFBVSxNQUFNO0FBQUEsTUFDL0M7QUFBQSxNQUNBLHFCQUFxQjtBQUNqQixlQUFPLENBQUMsQ0FBQyxLQUFLLGdCQUFnQixFQUFFO0FBQUEsTUFDcEM7QUFBQSxNQUNBLGtCQUFrQjtBQUNkLGVBQVEsS0FBSyxxQkFDUixLQUFLLG1CQUFtQjtBQUFBLFVBQ3JCLEdBQUcsS0FBSyxhQUFhO0FBQUEsVUFDckIsR0FBRyxLQUFLLGdCQUFnQjtBQUFBLFFBQzVCO0FBQUEsTUFDUjtBQUFBLE1BQ0Esa0JBQWtCO0FBQ2QsZUFBTyxnQkFBZ0IsS0FBSyxZQUFZO0FBQUEsTUFDNUM7QUFBQSxNQUNBLGVBQWU7QUFDWCxlQUFPLGdCQUFnQixLQUFLLE1BQU07QUFBQSxNQUN0QztBQUFBLE1BQ0EsZUFBZTtBQUNYLGNBQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEtBQUssaUJBQWlCLEdBQUcsS0FBSyxZQUFZLENBQUM7QUFDbkUsWUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO0FBQ2xCLGdCQUFNLElBQUksTUFBTSxxREFBcUQsS0FBSyxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQUEsUUFDN0Y7QUFDQSxjQUFNLFNBQVMsS0FBSyxVQUFVO0FBQzlCLGNBQU0sZUFBZSxRQUNmLEtBQ0EsT0FBTyxDQUFDLEtBQUs7QUFDbkIsZUFBTyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsS0FBSztBQUFBLE1BQzFDO0FBQUEsTUFDQSxpQkFBaUI7QUFDYixjQUFNLEtBQUssS0FBSyxVQUFVO0FBQzFCLGNBQU0sQ0FBQyxPQUFPLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxpQkFBaUIsR0FBRyxLQUFLLFlBQVksR0FBRyxLQUFLLGFBQWEsQ0FBQztBQUNoRyxjQUFNLGVBQWUsT0FBTyxPQUFPLFdBQzdCLEtBQWMsS0FDZCxNQUFNLE9BQU8sT0FBTyxhQUFhLFNBQVMsVUFDdEMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQ1osUUFDSSxLQUNBO0FBQ2QsWUFBSSxnQkFBZ0IsTUFBTTtBQUN0QixpQkFBTyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsUUFBUSxVQUFVLFFBQVE7QUFBQSxRQUMvRDtBQUNBLGNBQU0sSUFBSSxNQUFNLHlCQUF5QixLQUFLLFFBQVEsSUFBSSxDQUFDLHVCQUF1QjtBQUFBLE1BQ3RGO0FBQUEsTUFDQSxnQkFBZ0IsWUFBWTtBQUN4QixjQUFNQyxVQUFTLEtBQUssVUFBVTtBQUM5QixZQUFJLEtBQUssZUFBZSxLQUFLQSxRQUFPLENBQUMsRUFBRSxTQUFTLFVBQVUsR0FBRztBQUN6RCxnQkFBTSxJQUFJQSxRQUFPLENBQUMsRUFBRSxRQUFRLFVBQVU7QUFDdEMsZ0JBQU0sZUFBZUEsUUFBTyxDQUFDLEVBQUUsQ0FBQztBQUNoQyxpQkFBTyxPQUFPLGVBQWUsWUFBWSxJQUFJLGVBQWUsQ0FBQyxjQUFjLENBQUMsR0FBRyxVQUFVO0FBQUEsUUFDN0Y7QUFDQSxZQUFJLEtBQUssaUJBQWlCLEdBQUc7QUFDekIsaUJBQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVU7QUFBQSxRQUNyQztBQUNBLGNBQU0sSUFBSSxNQUFNLHlCQUF5QixLQUFLLFFBQVEsSUFBSSxDQUFDLGtCQUFrQixVQUFVLEdBQUc7QUFBQSxNQUM5RjtBQUFBLE1BQ0EsbUJBQW1CO0FBQ2YsY0FBTSxTQUFTLENBQUM7QUFDaEIsWUFBSTtBQUNBLHFCQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxlQUFlLEdBQUc7QUFDeEMsbUJBQU8sQ0FBQyxJQUFJO0FBQUEsVUFDaEI7QUFBQSxRQUNKLFNBQ08sU0FBUztBQUFBLFFBQUU7QUFDbEIsZUFBTztBQUFBLE1BQ1g7QUFBQSxNQUNBLHVCQUF1QjtBQUNuQixZQUFJLEtBQUssZUFBZSxHQUFHO0FBQ3ZCLHFCQUFXLENBQUMsWUFBWSxZQUFZLEtBQUssS0FBSyxlQUFlLEdBQUc7QUFDNUQsZ0JBQUksYUFBYSxZQUFZLEtBQUssYUFBYSxlQUFlLEdBQUc7QUFDN0QscUJBQU87QUFBQSxZQUNYO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFDQSxlQUFPO0FBQUEsTUFDWDtBQUFBLE1BQ0EsQ0FBQyxpQkFBaUI7QUFDZCxZQUFJLEtBQUssYUFBYSxHQUFHO0FBQ3JCO0FBQUEsUUFDSjtBQUNBLFlBQUksQ0FBQyxLQUFLLGVBQWUsR0FBRztBQUN4QixnQkFBTSxJQUFJLE1BQU0seURBQXlEO0FBQUEsUUFDN0U7QUFDQSxjQUFNQSxVQUFTLEtBQUssVUFBVTtBQUM5QixjQUFNLElBQUlBLFFBQU8sQ0FBQyxFQUFFO0FBQ3BCLFlBQUksS0FBS0EsUUFBTyxLQUFLLEVBQUU7QUFDdkIsWUFBSSxNQUFNLE1BQU0sR0FBRyxRQUFRO0FBQ3ZCLGlCQUFPO0FBQ1A7QUFBQSxRQUNKO0FBQ0EsYUFBSyxNQUFNLENBQUM7QUFDWixpQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUN4QixnQkFBTSxJQUFJQSxRQUFPLENBQUMsRUFBRSxDQUFDO0FBQ3JCLGdCQUFNLElBQUksT0FBTyxDQUFDQSxRQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDckMsZ0JBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFBQSxRQUN4QjtBQUNBLFFBQUFBLFFBQU8sS0FBSyxFQUFFLElBQUk7QUFBQSxNQUN0QjtBQUFBLElBQ0o7QUFXQSxJQUFNLGlCQUFpQixDQUFDLE9BQU8sTUFBTSxRQUFRLEVBQUUsS0FBSyxHQUFHLFdBQVc7QUFDM0QsSUFBTSxpQkFBaUIsQ0FBQyxPQUFPLE1BQU0sUUFBUSxFQUFFLEtBQUssR0FBRyxVQUFVO0FBQUE7QUFBQTs7O0FDOVN4RSxJQUNhLGNBT0EsS0FNQTtBQWRiO0FBQUE7QUFBQTtBQUNPLElBQU0sZUFBTixNQUFNLHNCQUFxQixPQUFPO0FBQUEsTUFDckMsT0FBTyxTQUFTLHVCQUFPLElBQUksYUFBYTtBQUFBLE1BQ3hDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLFNBQVMsY0FBYTtBQUFBLElBQzFCO0FBQ08sSUFBTSxNQUFNLENBQUMsV0FBVyxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sSUFBSSxhQUFhLEdBQUc7QUFBQSxNQUN6RjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0osQ0FBQztBQUNNLElBQU0sYUFBYSxDQUFDLFdBQVcsTUFBTSxRQUFRLGNBQWMsT0FBTyxPQUFPLElBQUksYUFBYSxHQUFHO0FBQUEsTUFDaEc7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNKLENBQUM7QUFBQTtBQUFBOzs7QUNuQkQsSUFBYTtBQUFiO0FBQUE7QUFBTyxJQUFNLFNBQVM7QUFBQSxNQUNsQixNQUFNO0FBQUEsTUFDTixnQkFBZ0I7QUFBQSxNQUNoQixTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsTUFDVixtQkFBbUI7QUFBQSxNQUNuQixxQkFBcUI7QUFBQSxNQUNyQixxQkFBcUI7QUFBQSxNQUNyQix5QkFBeUI7QUFBQSxNQUN6QixlQUFlO0FBQUEsTUFDZixjQUFjO0FBQUEsSUFDbEI7QUFBQTtBQUFBOzs7QUNmQSxJQUFhO0FBQWI7QUFBQTtBQUFPLElBQU0sZUFBTixNQUFNLGNBQWE7QUFBQSxNQUN0QjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxPQUFPLGFBQWEsb0JBQUksSUFBSTtBQUFBLE1BQzVCLFlBQVksV0FBVyxVQUFVLG9CQUFJLElBQUksR0FBRyxhQUFhLG9CQUFJLElBQUksR0FBRztBQUNoRSxhQUFLLFlBQVk7QUFDakIsYUFBSyxVQUFVO0FBQ2YsYUFBSyxhQUFhO0FBQUEsTUFDdEI7QUFBQSxNQUNBLE9BQU8sSUFBSSxXQUFXO0FBQ2xCLFlBQUksQ0FBQyxjQUFhLFdBQVcsSUFBSSxTQUFTLEdBQUc7QUFDekMsd0JBQWEsV0FBVyxJQUFJLFdBQVcsSUFBSSxjQUFhLFNBQVMsQ0FBQztBQUFBLFFBQ3RFO0FBQ0EsZUFBTyxjQUFhLFdBQVcsSUFBSSxTQUFTO0FBQUEsTUFDaEQ7QUFBQSxNQUNBLFNBQVMsT0FBTztBQUNaLGNBQU0sRUFBRSxTQUFTLFdBQVcsSUFBSTtBQUNoQyxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE1BQU0sU0FBUztBQUNoQyxjQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsR0FBRztBQUNqQixvQkFBUSxJQUFJLEdBQUcsQ0FBQztBQUFBLFVBQ3BCO0FBQUEsUUFDSjtBQUNBLG1CQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssTUFBTSxZQUFZO0FBQ25DLGNBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHO0FBQ3BCLHVCQUFXLElBQUksR0FBRyxDQUFDO0FBQUEsVUFDdkI7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLE1BQ0EsU0FBUyxTQUFTLFFBQVE7QUFDdEIsY0FBTSxnQkFBZ0IsS0FBSyxpQkFBaUIsT0FBTztBQUNuRCxtQkFBVyxLQUFLLENBQUMsTUFBTSxjQUFhLElBQUksY0FBYyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHO0FBQ25FLFlBQUUsUUFBUSxJQUFJLGVBQWUsTUFBTTtBQUFBLFFBQ3ZDO0FBQUEsTUFDSjtBQUFBLE1BQ0EsVUFBVSxTQUFTO0FBQ2YsY0FBTSxLQUFLLEtBQUssaUJBQWlCLE9BQU87QUFDeEMsWUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJLEVBQUUsR0FBRztBQUN2QixnQkFBTSxJQUFJLE1BQU0sOENBQThDLEVBQUUsRUFBRTtBQUFBLFFBQ3RFO0FBQ0EsZUFBTyxLQUFLLFFBQVEsSUFBSSxFQUFFO0FBQUEsTUFDOUI7QUFBQSxNQUNBLGNBQWMsSUFBSSxNQUFNO0FBQ3BCLGNBQU0sU0FBUztBQUNmLGNBQU0sS0FBSyxPQUFPLENBQUM7QUFDbkIsbUJBQVcsS0FBSyxDQUFDLE1BQU0sY0FBYSxJQUFJLEVBQUUsQ0FBQyxHQUFHO0FBQzFDLFlBQUUsUUFBUSxJQUFJLEtBQUssTUFBTSxPQUFPLENBQUMsR0FBRyxNQUFNO0FBQzFDLFlBQUUsV0FBVyxJQUFJLFFBQVEsSUFBSTtBQUFBLFFBQ2pDO0FBQUEsTUFDSjtBQUFBLE1BQ0EsYUFBYSxJQUFJO0FBQ2IsY0FBTSxTQUFTO0FBQ2YsWUFBSSxLQUFLLFdBQVcsSUFBSSxNQUFNLEdBQUc7QUFDN0IsaUJBQU8sS0FBSyxXQUFXLElBQUksTUFBTTtBQUFBLFFBQ3JDO0FBQ0EsY0FBTSxXQUFXLGNBQWEsSUFBSSxPQUFPLENBQUMsQ0FBQztBQUMzQyxlQUFPLFNBQVMsV0FBVyxJQUFJLE1BQU07QUFBQSxNQUN6QztBQUFBLE1BQ0EsbUJBQW1CO0FBQ2YsbUJBQVcsZ0JBQWdCLEtBQUssV0FBVyxLQUFLLEdBQUc7QUFDL0MsY0FBSSxNQUFNLFFBQVEsWUFBWSxHQUFHO0FBQzdCLGtCQUFNLENBQUMsRUFBRSxJQUFJLElBQUksSUFBSTtBQUNyQixrQkFBTSxLQUFLLEtBQUssTUFBTTtBQUN0QixnQkFBSSxHQUFHLFdBQVcsMEJBQTBCLEtBQUssR0FBRyxTQUFTLGtCQUFrQixHQUFHO0FBQzlFLHFCQUFPO0FBQUEsWUFDWDtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQ0EsZUFBTztBQUFBLE1BQ1g7QUFBQSxNQUNBLEtBQUssV0FBVztBQUNaLGVBQU8sQ0FBQyxHQUFHLEtBQUssUUFBUSxPQUFPLENBQUMsRUFBRSxLQUFLLFNBQVM7QUFBQSxNQUNwRDtBQUFBLE1BQ0EsUUFBUTtBQUNKLGFBQUssUUFBUSxNQUFNO0FBQ25CLGFBQUssV0FBVyxNQUFNO0FBQUEsTUFDMUI7QUFBQSxNQUNBLGlCQUFpQixTQUFTO0FBQ3RCLFlBQUksUUFBUSxTQUFTLEdBQUcsR0FBRztBQUN2QixpQkFBTztBQUFBLFFBQ1g7QUFDQSxlQUFPLEtBQUssWUFBWSxNQUFNO0FBQUEsTUFDbEM7QUFBQSxJQUNKO0FBQUE7QUFBQTs7O0FDbkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7O0FDYk8sU0FBUywyQkFBMkIsS0FBSztBQUM1QyxTQUFPLG1CQUFtQixHQUFHLEVBQUUsUUFBUSxZQUFZLFNBQVUsR0FBRztBQUM1RCxXQUFPLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxZQUFZO0FBQUEsRUFDMUQsQ0FBQztBQUNMO0FBSkE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQ2E7QUFEYjtBQUFBO0FBQUE7QUFDTyxJQUFNLGVBQWUsQ0FBQ0MsZUFBYyxPQUFPLFlBQVksb0JBQW9CLFVBQVUsa0JBQWtCO0FBQzFHLFVBQUksU0FBUyxRQUFRLE1BQU0sVUFBVSxNQUFNLFFBQVc7QUFDbEQsY0FBTSxhQUFhLG1CQUFtQjtBQUN0QyxZQUFJLGNBQWMsUUFBUSxXQUFXLFVBQVUsR0FBRztBQUM5QyxnQkFBTSxJQUFJLE1BQU0sZ0RBQWdELGFBQWEsR0FBRztBQUFBLFFBQ3BGO0FBQ0EsUUFBQUEsZ0JBQWVBLGNBQWEsUUFBUSxVQUFVLGdCQUN4QyxXQUNHLE1BQU0sR0FBRyxFQUNULElBQUksQ0FBQyxZQUFZLDJCQUEyQixPQUFPLENBQUMsRUFDcEQsS0FBSyxHQUFHLElBQ1gsMkJBQTJCLFVBQVUsQ0FBQztBQUFBLE1BQ2hELE9BQ0s7QUFDRCxjQUFNLElBQUksTUFBTSw2Q0FBNkMsYUFBYSxHQUFHO0FBQUEsTUFDakY7QUFDQSxhQUFPQTtBQUFBLElBQ1g7QUFBQTtBQUFBOzs7QUNoQk8sU0FBUyxlQUFlLE9BQU8sU0FBUztBQUMzQyxTQUFPLElBQUksZUFBZSxPQUFPLE9BQU87QUFDNUM7QUFKQSxJQUFBQyx1QkFLYTtBQUxiO0FBQUE7QUFBQSxJQUFBQSx3QkFBNEI7QUFDNUI7QUFJTyxJQUFNLGlCQUFOLE1BQXFCO0FBQUEsTUFDeEI7QUFBQSxNQUNBO0FBQUEsTUFDQSxRQUFRLENBQUM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFVBQVUsQ0FBQztBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsbUJBQW1CLENBQUM7QUFBQSxNQUNwQixZQUFZLE9BQU8sU0FBUztBQUN4QixhQUFLLFFBQVE7QUFDYixhQUFLLFVBQVU7QUFBQSxNQUNuQjtBQUFBLE1BQ0EsTUFBTSxRQUFRO0FBQ1YsY0FBTSxFQUFFLFVBQVUsV0FBVyxTQUFTLE1BQU0sTUFBTSxTQUFTLElBQUksTUFBTSxLQUFLLFFBQVEsU0FBUztBQUMzRixhQUFLLE9BQU87QUFDWixtQkFBVyxlQUFlLEtBQUssa0JBQWtCO0FBQzdDLHNCQUFZLEtBQUssSUFBSTtBQUFBLFFBQ3pCO0FBQ0EsZUFBTyxJQUFJLGtDQUFZO0FBQUEsVUFDbkI7QUFBQSxVQUNBLFVBQVUsS0FBSyxZQUFZO0FBQUEsVUFDM0I7QUFBQSxVQUNBLFFBQVEsS0FBSztBQUFBLFVBQ2IsTUFBTSxLQUFLO0FBQUEsVUFDWCxPQUFPLEtBQUs7QUFBQSxVQUNaLE1BQU0sS0FBSztBQUFBLFVBQ1gsU0FBUyxLQUFLO0FBQUEsUUFDbEIsQ0FBQztBQUFBLE1BQ0w7QUFBQSxNQUNBLEdBQUcsVUFBVTtBQUNULGFBQUssV0FBVztBQUNoQixlQUFPO0FBQUEsTUFDWDtBQUFBLE1BQ0EsR0FBRyxVQUFVO0FBQ1QsYUFBSyxpQkFBaUIsS0FBSyxDQUFDLGFBQWE7QUFDckMsZUFBSyxPQUFPLEdBQUcsVUFBVSxTQUFTLEdBQUcsSUFBSSxTQUFTLE1BQU0sR0FBRyxFQUFFLElBQUksWUFBWSxFQUFFLEtBQUs7QUFBQSxRQUN4RixDQUFDO0FBQ0QsZUFBTztBQUFBLE1BQ1g7QUFBQSxNQUNBLEVBQUUsWUFBWSxvQkFBb0IsVUFBVSxlQUFlO0FBQ3ZELGFBQUssaUJBQWlCLEtBQUssQ0FBQyxTQUFTO0FBQ2pDLGVBQUssT0FBTyxhQUFhLE1BQU0sS0FBSyxPQUFPLFlBQVksb0JBQW9CLFVBQVUsYUFBYTtBQUFBLFFBQ3RHLENBQUM7QUFDRCxlQUFPO0FBQUEsTUFDWDtBQUFBLE1BQ0EsRUFBRSxTQUFTO0FBQ1AsYUFBSyxVQUFVO0FBQ2YsZUFBTztBQUFBLE1BQ1g7QUFBQSxNQUNBLEVBQUUsT0FBTztBQUNMLGFBQUssUUFBUTtBQUNiLGVBQU87QUFBQSxNQUNYO0FBQUEsTUFDQSxFQUFFLE1BQU07QUFDSixhQUFLLE9BQU87QUFDWixlQUFPO0FBQUEsTUFDWDtBQUFBLE1BQ0EsRUFBRSxRQUFRO0FBQ04sYUFBSyxTQUFTO0FBQ2QsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNKO0FBQUE7QUFBQTs7O0FDcEVBO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLGFBQWE7QUFDckIsUUFBTSxxQkFBcUI7QUFDM0IsUUFBTSxlQUFlO0FBQ3JCLFFBQU1DLGNBQWEsQ0FBQyxVQUFVO0FBQzFCLFVBQUssTUFBTSxTQUFTLElBQUssTUFBTSxHQUFHO0FBQzlCLGNBQU0sSUFBSSxVQUFVLHFDQUFxQztBQUFBLE1BQzdEO0FBQ0EsVUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLEdBQUc7QUFDM0IsY0FBTSxJQUFJLFVBQVUsd0JBQXdCO0FBQUEsTUFDaEQ7QUFDQSxZQUFNLFVBQVUsR0FBRyxtQkFBbUIsWUFBWSxPQUFPLFFBQVE7QUFDakUsYUFBTyxJQUFJLFdBQVcsT0FBTyxRQUFRLE9BQU8sWUFBWSxPQUFPLFVBQVU7QUFBQSxJQUM3RTtBQUNBLFlBQVEsYUFBYUE7QUFBQTtBQUFBOzs7QUNmckI7QUFBQTtBQUFBO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsV0FBVztBQUNuQixRQUFNLHFCQUFxQjtBQUMzQixRQUFNLGNBQWM7QUFDcEIsUUFBTUMsWUFBVyxDQUFDLFdBQVc7QUFDekIsVUFBSTtBQUNKLFVBQUksT0FBTyxXQUFXLFVBQVU7QUFDNUIsaUJBQVMsR0FBRyxZQUFZLFVBQVUsTUFBTTtBQUFBLE1BQzVDLE9BQ0s7QUFDRCxnQkFBUTtBQUFBLE1BQ1o7QUFDQSxVQUFJLE9BQU8sVUFBVSxZQUFZLE9BQU8sTUFBTSxlQUFlLFlBQVksT0FBTyxNQUFNLGVBQWUsVUFBVTtBQUMzRyxjQUFNLElBQUksTUFBTSxrRkFBa0Y7QUFBQSxNQUN0RztBQUNBLGNBQVEsR0FBRyxtQkFBbUIsaUJBQWlCLE1BQU0sUUFBUSxNQUFNLFlBQVksTUFBTSxVQUFVLEVBQUUsU0FBUyxRQUFRO0FBQUEsSUFDdEg7QUFDQSxZQUFRLFdBQVdBO0FBQUE7QUFBQTs7O0FDbEJuQixJQUFBQyxvQkFBQTtBQUFBO0FBQUE7QUFFQSxRQUFJQyxjQUFhO0FBQ2pCLFFBQUlDLFlBQVc7QUFJZixXQUFPLFVBQVUsZUFBZSxLQUFLRCxhQUFZLFdBQVcsS0FDM0QsQ0FBQyxPQUFPLFVBQVUsZUFBZSxLQUFLLFNBQVMsV0FBVyxLQUMxRCxPQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osT0FBT0EsWUFBVyxXQUFXO0FBQUEsSUFDOUIsQ0FBQztBQUVGLFdBQU8sS0FBS0EsV0FBVSxFQUFFLFFBQVEsU0FBVSxHQUFHO0FBQzVDLFVBQUksTUFBTSxhQUFhLENBQUMsT0FBTyxVQUFVLGVBQWUsS0FBSyxTQUFTLENBQUMsRUFBRyxTQUFRLENBQUMsSUFBSUEsWUFBVyxDQUFDO0FBQUEsSUFDcEcsQ0FBQztBQUNELFdBQU8sVUFBVSxlQUFlLEtBQUtDLFdBQVUsV0FBVyxLQUN6RCxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssU0FBUyxXQUFXLEtBQzFELE9BQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixPQUFPQSxVQUFTLFdBQVc7QUFBQSxJQUM1QixDQUFDO0FBRUYsV0FBTyxLQUFLQSxTQUFRLEVBQUUsUUFBUSxTQUFVLEdBQUc7QUFDMUMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxPQUFPLFVBQVUsZUFBZSxLQUFLLFNBQVMsQ0FBQyxFQUFHLFNBQVEsQ0FBQyxJQUFJQSxVQUFTLENBQUM7QUFBQSxJQUNsRyxDQUFDO0FBQUE7QUFBQTs7O0FDMUJELElBQUFDLHFCQUFBO0FBQUE7QUFBQTtBQUVBLFFBQUksZUFBZTtBQUNuQixRQUFJLHFCQUFxQjtBQUN6QixRQUFJLGFBQWE7QUFFakIsYUFBUyxjQUFjLEtBQUssZ0JBQWdCO0FBQ3hDLGFBQU8sSUFBSSxRQUFRLEtBQUssY0FBYztBQUFBLElBQzFDO0FBRUEsYUFBUyxlQUFlLGNBQWMsR0FBRztBQUNyQyxhQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUNwQyxZQUFJLGFBQWE7QUFDYixxQkFBVyxNQUFNO0FBQ2Isa0JBQU0sZUFBZSxJQUFJLE1BQU0sbUNBQW1DLFdBQVcsS0FBSztBQUNsRix5QkFBYSxPQUFPO0FBQ3BCLG1CQUFPLFlBQVk7QUFBQSxVQUN2QixHQUFHLFdBQVc7QUFBQSxRQUNsQjtBQUFBLE1BQ0osQ0FBQztBQUFBLElBQ0w7QUFFQSxRQUFNLG1CQUFtQjtBQUFBLE1BQ3JCLFdBQVc7QUFBQSxJQUNmO0FBQ0EsUUFBTSxtQkFBTixNQUFNLGtCQUFpQjtBQUFBLE1BQ25CO0FBQUEsTUFDQTtBQUFBLE1BQ0EsT0FBTyxPQUFPLG1CQUFtQjtBQUM3QixZQUFJLE9BQU8sbUJBQW1CLFdBQVcsWUFBWTtBQUNqRCxpQkFBTztBQUFBLFFBQ1g7QUFDQSxlQUFPLElBQUksa0JBQWlCLGlCQUFpQjtBQUFBLE1BQ2pEO0FBQUEsTUFDQSxZQUFZLFNBQVM7QUFDakIsWUFBSSxPQUFPLFlBQVksWUFBWTtBQUMvQixlQUFLLGlCQUFpQixRQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsUUFBUSxDQUFDLENBQUM7QUFBQSxRQUM3RCxPQUNLO0FBQ0QsZUFBSyxTQUFTLFdBQVcsQ0FBQztBQUMxQixlQUFLLGlCQUFpQixRQUFRLFFBQVEsS0FBSyxNQUFNO0FBQUEsUUFDckQ7QUFDQSxZQUFJLGlCQUFpQixjQUFjLFFBQVc7QUFDMUMsMkJBQWlCLFlBQVksUUFBUSxPQUFPLFlBQVksZUFBZSxlQUFlLGNBQWMsZUFBZSxDQUFDO0FBQUEsUUFDeEg7QUFBQSxNQUNKO0FBQUEsTUFDQSxVQUFVO0FBQUEsTUFDVjtBQUFBLE1BQ0EsTUFBTSxPQUFPLFNBQVMsRUFBRSxhQUFhLGdCQUFnQixpQkFBaUIsSUFBSSxDQUFDLEdBQUc7QUFDMUUsWUFBSSxDQUFDLEtBQUssUUFBUTtBQUNkLGVBQUssU0FBUyxNQUFNLEtBQUs7QUFBQSxRQUM3QjtBQUNBLGNBQU0scUJBQXFCLG9CQUFvQixLQUFLLE9BQU87QUFDM0QsY0FBTSxZQUFZLEtBQUssT0FBTyxjQUFjO0FBQzVDLGNBQU0sY0FBYyxLQUFLLE9BQU87QUFDaEMsWUFBSSxhQUFhLFNBQVM7QUFDdEIsZ0JBQU0sYUFBYSxnQkFBZ0IsV0FBVztBQUM5QyxpQkFBTyxRQUFRLE9BQU8sVUFBVTtBQUFBLFFBQ3BDO0FBQ0EsWUFBSSxPQUFPLFFBQVE7QUFDbkIsY0FBTSxjQUFjLG1CQUFtQixpQkFBaUIsUUFBUSxTQUFTLENBQUMsQ0FBQztBQUMzRSxZQUFJLGFBQWE7QUFDYixrQkFBUSxJQUFJLFdBQVc7QUFBQSxRQUMzQjtBQUNBLFlBQUksUUFBUSxVQUFVO0FBQ2xCLGtCQUFRLElBQUksUUFBUSxRQUFRO0FBQUEsUUFDaEM7QUFDQSxZQUFJLE9BQU87QUFDWCxZQUFJLFFBQVEsWUFBWSxRQUFRLFFBQVEsWUFBWSxNQUFNO0FBQ3RELGdCQUFNLFdBQVcsUUFBUSxZQUFZO0FBQ3JDLGdCQUFNLFdBQVcsUUFBUSxZQUFZO0FBQ3JDLGlCQUFPLEdBQUcsUUFBUSxJQUFJLFFBQVE7QUFBQSxRQUNsQztBQUNBLGNBQU0sRUFBRSxNQUFNLE9BQU8sSUFBSTtBQUN6QixjQUFNLE1BQU0sR0FBRyxRQUFRLFFBQVEsS0FBSyxJQUFJLEdBQUcsUUFBUSxRQUFRLEdBQUcsT0FBTyxJQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsSUFBSTtBQUMzRixjQUFNLE9BQU8sV0FBVyxTQUFTLFdBQVcsU0FBUyxTQUFZLFFBQVE7QUFDekUsY0FBTSxpQkFBaUI7QUFBQSxVQUNuQjtBQUFBLFVBQ0EsU0FBUyxJQUFJLFFBQVEsUUFBUSxPQUFPO0FBQUEsVUFDcEM7QUFBQSxVQUNBO0FBQUEsUUFDSjtBQUNBLFlBQUksS0FBSyxRQUFRLE9BQU87QUFDcEIseUJBQWUsUUFBUSxLQUFLLE9BQU87QUFBQSxRQUN2QztBQUNBLFlBQUksTUFBTTtBQUNOLHlCQUFlLFNBQVM7QUFBQSxRQUM1QjtBQUNBLFlBQUksT0FBTyxvQkFBb0IsYUFBYTtBQUN4Qyx5QkFBZSxTQUFTO0FBQUEsUUFDNUI7QUFDQSxZQUFJLGlCQUFpQixXQUFXO0FBQzVCLHlCQUFlLFlBQVk7QUFBQSxRQUMvQjtBQUNBLFlBQUksT0FBTyxLQUFLLE9BQU8sZ0JBQWdCLFlBQVk7QUFDL0MsaUJBQU8sT0FBTyxnQkFBZ0IsS0FBSyxPQUFPLFlBQVksT0FBTyxDQUFDO0FBQUEsUUFDbEU7QUFDQSxZQUFJLDRCQUE0QixNQUFNO0FBQUEsUUFBRTtBQUN4QyxjQUFNLGVBQWUsY0FBYyxLQUFLLGNBQWM7QUFDdEQsY0FBTSxpQkFBaUI7QUFBQSxVQUNuQixNQUFNLFlBQVksRUFBRSxLQUFLLENBQUMsYUFBYTtBQUNuQyxrQkFBTSxlQUFlLFNBQVM7QUFDOUIsa0JBQU0scUJBQXFCLENBQUM7QUFDNUIsdUJBQVcsUUFBUSxhQUFhLFFBQVEsR0FBRztBQUN2QyxpQ0FBbUIsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7QUFBQSxZQUN4QztBQUNBLGtCQUFNLG9CQUFvQixTQUFTLFFBQVE7QUFDM0MsZ0JBQUksQ0FBQyxtQkFBbUI7QUFDcEIscUJBQU8sU0FBUyxLQUFLLEVBQUUsS0FBSyxDQUFDQyxXQUFVO0FBQUEsZ0JBQ25DLFVBQVUsSUFBSSxhQUFhLGFBQWE7QUFBQSxrQkFDcEMsU0FBUztBQUFBLGtCQUNULFFBQVEsU0FBUztBQUFBLGtCQUNqQixZQUFZLFNBQVM7QUFBQSxrQkFDckIsTUFBQUE7QUFBQSxnQkFDSixDQUFDO0FBQUEsY0FDTCxFQUFFO0FBQUEsWUFDTjtBQUNBLG1CQUFPO0FBQUEsY0FDSCxVQUFVLElBQUksYUFBYSxhQUFhO0FBQUEsZ0JBQ3BDLFNBQVM7QUFBQSxnQkFDVCxRQUFRLFNBQVM7QUFBQSxnQkFDakIsWUFBWSxTQUFTO0FBQUEsZ0JBQ3JCLE1BQU0sU0FBUztBQUFBLGNBQ25CLENBQUM7QUFBQSxZQUNMO0FBQUEsVUFDSixDQUFDO0FBQUEsVUFDRCxlQUFlLGtCQUFrQjtBQUFBLFFBQ3JDO0FBQ0EsWUFBSSxhQUFhO0FBQ2IseUJBQWUsS0FBSyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDakQsa0JBQU0sVUFBVSxNQUFNO0FBQ2xCLG9CQUFNLGFBQWEsZ0JBQWdCLFdBQVc7QUFDOUMscUJBQU8sVUFBVTtBQUFBLFlBQ3JCO0FBQ0EsZ0JBQUksT0FBTyxZQUFZLHFCQUFxQixZQUFZO0FBQ3BELG9CQUFNLFNBQVM7QUFDZixxQkFBTyxpQkFBaUIsU0FBUyxTQUFTLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDeEQsMENBQTRCLE1BQU0sT0FBTyxvQkFBb0IsU0FBUyxPQUFPO0FBQUEsWUFDakYsT0FDSztBQUNELDBCQUFZLFVBQVU7QUFBQSxZQUMxQjtBQUFBLFVBQ0osQ0FBQyxDQUFDO0FBQUEsUUFDTjtBQUNBLGVBQU8sUUFBUSxLQUFLLGNBQWMsRUFBRSxRQUFRLHlCQUF5QjtBQUFBLE1BQ3pFO0FBQUEsTUFDQSx1QkFBdUIsS0FBSyxPQUFPO0FBQy9CLGFBQUssU0FBUztBQUNkLGFBQUssaUJBQWlCLEtBQUssZUFBZSxLQUFLLENBQUMsV0FBVztBQUN2RCxpQkFBTyxHQUFHLElBQUk7QUFDZCxpQkFBTztBQUFBLFFBQ1gsQ0FBQztBQUFBLE1BQ0w7QUFBQSxNQUNBLHFCQUFxQjtBQUNqQixlQUFPLEtBQUssVUFBVSxDQUFDO0FBQUEsTUFDM0I7QUFBQSxJQUNKO0FBQ0EsYUFBUyxnQkFBZ0IsYUFBYTtBQUNsQyxZQUFNLFNBQVMsZUFBZSxPQUFPLGdCQUFnQixZQUFZLFlBQVksY0FDdkUsWUFBWSxTQUNaO0FBQ04sVUFBSSxRQUFRO0FBQ1IsWUFBSSxrQkFBa0IsT0FBTztBQUN6QixnQkFBTUMsY0FBYSxJQUFJLE1BQU0saUJBQWlCO0FBQzlDLFVBQUFBLFlBQVcsT0FBTztBQUNsQixVQUFBQSxZQUFXLFFBQVE7QUFDbkIsaUJBQU9BO0FBQUEsUUFDWDtBQUNBLGNBQU1BLGNBQWEsSUFBSSxNQUFNLE9BQU8sTUFBTSxDQUFDO0FBQzNDLFFBQUFBLFlBQVcsT0FBTztBQUNsQixlQUFPQTtBQUFBLE1BQ1g7QUFDQSxZQUFNLGFBQWEsSUFBSSxNQUFNLGlCQUFpQjtBQUM5QyxpQkFBVyxPQUFPO0FBQ2xCLGFBQU87QUFBQSxJQUNYO0FBRUEsUUFBTSxrQkFBa0IsT0FBTyxXQUFXO0FBQ3RDLFVBQUssT0FBTyxTQUFTLGNBQWMsa0JBQWtCLFFBQVMsT0FBTyxhQUFhLFNBQVMsUUFBUTtBQUMvRixZQUFJLEtBQUssVUFBVSxnQkFBZ0IsUUFBVztBQUMxQyxpQkFBTyxJQUFJLFdBQVcsTUFBTSxPQUFPLFlBQVksQ0FBQztBQUFBLFFBQ3BEO0FBQ0EsZUFBTyxZQUFZLE1BQU07QUFBQSxNQUM3QjtBQUNBLGFBQU8sY0FBYyxNQUFNO0FBQUEsSUFDL0I7QUFDQSxtQkFBZSxZQUFZLE1BQU07QUFDN0IsWUFBTSxTQUFTLE1BQU0sYUFBYSxJQUFJO0FBQ3RDLFlBQU0sY0FBYyxXQUFXLFdBQVcsTUFBTTtBQUNoRCxhQUFPLElBQUksV0FBVyxXQUFXO0FBQUEsSUFDckM7QUFDQSxtQkFBZSxjQUFjLFFBQVE7QUFDakMsWUFBTSxTQUFTLENBQUM7QUFDaEIsWUFBTSxTQUFTLE9BQU8sVUFBVTtBQUNoQyxVQUFJLFNBQVM7QUFDYixVQUFJLFNBQVM7QUFDYixhQUFPLENBQUMsUUFBUTtBQUNaLGNBQU0sRUFBRSxNQUFNLE1BQU0sSUFBSSxNQUFNLE9BQU8sS0FBSztBQUMxQyxZQUFJLE9BQU87QUFDUCxpQkFBTyxLQUFLLEtBQUs7QUFDakIsb0JBQVUsTUFBTTtBQUFBLFFBQ3BCO0FBQ0EsaUJBQVM7QUFBQSxNQUNiO0FBQ0EsWUFBTSxZQUFZLElBQUksV0FBVyxNQUFNO0FBQ3ZDLFVBQUksU0FBUztBQUNiLGlCQUFXLFNBQVMsUUFBUTtBQUN4QixrQkFBVSxJQUFJLE9BQU8sTUFBTTtBQUMzQixrQkFBVSxNQUFNO0FBQUEsTUFDcEI7QUFDQSxhQUFPO0FBQUEsSUFDWDtBQUNBLGFBQVMsYUFBYSxNQUFNO0FBQ3hCLGFBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3BDLGNBQU0sU0FBUyxJQUFJLFdBQVc7QUFDOUIsZUFBTyxZQUFZLE1BQU07QUFDckIsY0FBSSxPQUFPLGVBQWUsR0FBRztBQUN6QixtQkFBTyxPQUFPLElBQUksTUFBTSwwQkFBMEIsQ0FBQztBQUFBLFVBQ3ZEO0FBQ0EsZ0JBQU0sU0FBVSxPQUFPLFVBQVU7QUFDakMsZ0JBQU0sYUFBYSxPQUFPLFFBQVEsR0FBRztBQUNyQyxnQkFBTSxhQUFhLGFBQWEsS0FBSyxhQUFhLElBQUksT0FBTztBQUM3RCxrQkFBUSxPQUFPLFVBQVUsVUFBVSxDQUFDO0FBQUEsUUFDeEM7QUFDQSxlQUFPLFVBQVUsTUFBTSxPQUFPLElBQUksTUFBTSxjQUFjLENBQUM7QUFDdkQsZUFBTyxVQUFVLE1BQU0sT0FBTyxPQUFPLEtBQUs7QUFDMUMsZUFBTyxjQUFjLElBQUk7QUFBQSxNQUM3QixDQUFDO0FBQUEsSUFDTDtBQUVBLFlBQVEsbUJBQW1CO0FBQzNCLFlBQVEsbUJBQW1CO0FBQzNCLFlBQVEsa0JBQWtCO0FBQUE7QUFBQTs7O0FDeE8xQixJQUFBQyxxQkFBQTtBQUFBO0FBQUE7QUFFQSxRQUFNLGVBQWUsQ0FBQztBQUN0QixRQUFNLGVBQWUsQ0FBQztBQUN0QixhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUMxQixVQUFJLGNBQWMsRUFBRSxTQUFTLEVBQUUsRUFBRSxZQUFZO0FBQzdDLFVBQUksWUFBWSxXQUFXLEdBQUc7QUFDMUIsc0JBQWMsSUFBSSxXQUFXO0FBQUEsTUFDakM7QUFDQSxtQkFBYSxDQUFDLElBQUk7QUFDbEIsbUJBQWEsV0FBVyxJQUFJO0FBQUEsSUFDaEM7QUFDQSxhQUFTLFFBQVEsU0FBUztBQUN0QixVQUFJLFFBQVEsU0FBUyxNQUFNLEdBQUc7QUFDMUIsY0FBTSxJQUFJLE1BQU0scURBQXFEO0FBQUEsTUFDekU7QUFDQSxZQUFNLE1BQU0sSUFBSSxXQUFXLFFBQVEsU0FBUyxDQUFDO0FBQzdDLGVBQVMsSUFBSSxHQUFHLElBQUksUUFBUSxRQUFRLEtBQUssR0FBRztBQUN4QyxjQUFNLGNBQWMsUUFBUSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsWUFBWTtBQUN4RCxZQUFJLGVBQWUsY0FBYztBQUM3QixjQUFJLElBQUksQ0FBQyxJQUFJLGFBQWEsV0FBVztBQUFBLFFBQ3pDLE9BQ0s7QUFDRCxnQkFBTSxJQUFJLE1BQU0sdUNBQXVDLFdBQVcsaUJBQWlCO0FBQUEsUUFDdkY7QUFBQSxNQUNKO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDQSxhQUFTLE1BQU0sT0FBTztBQUNsQixVQUFJLE1BQU07QUFDVixlQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sWUFBWSxLQUFLO0FBQ3ZDLGVBQU8sYUFBYSxNQUFNLENBQUMsQ0FBQztBQUFBLE1BQ2hDO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFFQSxZQUFRLFVBQVU7QUFDbEIsWUFBUSxRQUFRO0FBQUE7QUFBQTs7O0FDckNoQjtBQUFBO0FBQUE7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsWUFBUSxhQUFhO0FBQ3JCLFFBQU0sVUFBVTtBQUNoQixRQUFNLFdBQVcsUUFBUSxnQkFBZ0IsVUFBUSxRQUFRLENBQUM7QUFDMUQsWUFBUSxhQUFhLFNBQVMsUUFBUSxXQUFXLEtBQUssU0FBUyxPQUFPO0FBQUE7QUFBQTs7O0FDTHRFLElBQUFDLHFCQUFBO0FBQUE7QUFBQTtBQUVBLFFBQUksYUFBYTtBQUVqQixRQUFNLGVBQWUsTUFBTSxLQUFLLEVBQUUsUUFBUSxJQUFJLEdBQUcsQ0FBQyxHQUFHLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBQzFGLFFBQU0sS0FBSyxNQUFNO0FBQ2IsVUFBSSxXQUFXLFlBQVk7QUFDdkIsZUFBTyxXQUFXLFdBQVc7QUFBQSxNQUNqQztBQUNBLFlBQU0sT0FBTyxJQUFJLFdBQVcsRUFBRTtBQUM5QixhQUFPLGdCQUFnQixJQUFJO0FBQzNCLFdBQUssQ0FBQyxJQUFLLEtBQUssQ0FBQyxJQUFJLEtBQVE7QUFDN0IsV0FBSyxDQUFDLElBQUssS0FBSyxDQUFDLElBQUksS0FBUTtBQUM3QixhQUFRLGFBQWEsS0FBSyxDQUFDLENBQUMsSUFDeEIsYUFBYSxLQUFLLENBQUMsQ0FBQyxJQUNwQixhQUFhLEtBQUssQ0FBQyxDQUFDLElBQ3BCLGFBQWEsS0FBSyxDQUFDLENBQUMsSUFDcEIsTUFDQSxhQUFhLEtBQUssQ0FBQyxDQUFDLElBQ3BCLGFBQWEsS0FBSyxDQUFDLENBQUMsSUFDcEIsTUFDQSxhQUFhLEtBQUssQ0FBQyxDQUFDLElBQ3BCLGFBQWEsS0FBSyxDQUFDLENBQUMsSUFDcEIsTUFDQSxhQUFhLEtBQUssQ0FBQyxDQUFDLElBQ3BCLGFBQWEsS0FBSyxDQUFDLENBQUMsSUFDcEIsTUFDQSxhQUFhLEtBQUssRUFBRSxDQUFDLElBQ3JCLGFBQWEsS0FBSyxFQUFFLENBQUMsSUFDckIsYUFBYSxLQUFLLEVBQUUsQ0FBQyxJQUNyQixhQUFhLEtBQUssRUFBRSxDQUFDLElBQ3JCLGFBQWEsS0FBSyxFQUFFLENBQUMsSUFDckIsYUFBYSxLQUFLLEVBQUUsQ0FBQztBQUFBLElBQzdCO0FBRUEsWUFBUSxLQUFLO0FBQUE7QUFBQTs7O0FDbkNiLElBQWE7QUFBYjtBQUFBO0FBQU8sSUFBTSw0QkFBNEIsQ0FBQyxRQUFRLFdBQVcsWUFBWSxDQUFDLE1BQU0sTUFBTTtBQUFBO0FBQUE7OztBQ0F0RixJQUFhLGNBVUEsZUFnQ0EsY0FrQlAsV0FDTyxlQVNBLFlBU0EsV0FDQSxhQUNBLGFBQ0EsWUFDUCxnQkFPQSxTQVVPLGVBU0EsY0FVQSxjQWFBLGFBZ0JBLG1CQU1BLGtCQUNBLG9CQU1QLGNBQ0EsYUFPTyxvQkFNQSxhQUNBLG1CQUNBLHFCQU1QLGtCQVlPLGlCQU1BLGdCQUNBLGtCQU1BLGtCQU1BLGlCQU1QLG1CQU9PO0FBbk9iO0FBQUE7QUFBTyxJQUFNLGVBQWUsQ0FBQyxVQUFVO0FBQ25DLGNBQVEsT0FBTztBQUFBLFFBQ1gsS0FBSztBQUNELGlCQUFPO0FBQUEsUUFDWCxLQUFLO0FBQ0QsaUJBQU87QUFBQSxRQUNYO0FBQ0ksZ0JBQU0sSUFBSSxNQUFNLGtDQUFrQyxLQUFLLEdBQUc7QUFBQSxNQUNsRTtBQUFBLElBQ0o7QUFDTyxJQUFNLGdCQUFnQixDQUFDLFVBQVU7QUFDcEMsVUFBSSxVQUFVLFFBQVEsVUFBVSxRQUFXO0FBQ3ZDLGVBQU87QUFBQSxNQUNYO0FBQ0EsVUFBSSxPQUFPLFVBQVUsVUFBVTtBQUMzQixZQUFJLFVBQVUsS0FBSyxVQUFVLEdBQUc7QUFDNUIsaUJBQU8sS0FBSyxrQkFBa0IseUJBQXlCLE9BQU8sS0FBSyxLQUFLLEtBQUssRUFBRSxDQUFDO0FBQUEsUUFDcEY7QUFDQSxZQUFJLFVBQVUsR0FBRztBQUNiLGlCQUFPO0FBQUEsUUFDWDtBQUNBLFlBQUksVUFBVSxHQUFHO0FBQ2IsaUJBQU87QUFBQSxRQUNYO0FBQUEsTUFDSjtBQUNBLFVBQUksT0FBTyxVQUFVLFVBQVU7QUFDM0IsY0FBTSxRQUFRLE1BQU0sWUFBWTtBQUNoQyxZQUFJLFVBQVUsV0FBVyxVQUFVLFFBQVE7QUFDdkMsaUJBQU8sS0FBSyxrQkFBa0IseUJBQXlCLE9BQU8sS0FBSyxLQUFLLEtBQUssRUFBRSxDQUFDO0FBQUEsUUFDcEY7QUFDQSxZQUFJLFVBQVUsU0FBUztBQUNuQixpQkFBTztBQUFBLFFBQ1g7QUFDQSxZQUFJLFVBQVUsUUFBUTtBQUNsQixpQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBQ0EsVUFBSSxPQUFPLFVBQVUsV0FBVztBQUM1QixlQUFPO0FBQUEsTUFDWDtBQUNBLFlBQU0sSUFBSSxVQUFVLHlCQUF5QixPQUFPLEtBQUssS0FBSyxLQUFLLEVBQUU7QUFBQSxJQUN6RTtBQUNPLElBQU0sZUFBZSxDQUFDLFVBQVU7QUFDbkMsVUFBSSxVQUFVLFFBQVEsVUFBVSxRQUFXO0FBQ3ZDLGVBQU87QUFBQSxNQUNYO0FBQ0EsVUFBSSxPQUFPLFVBQVUsVUFBVTtBQUMzQixjQUFNLFNBQVMsV0FBVyxLQUFLO0FBQy9CLFlBQUksQ0FBQyxPQUFPLE1BQU0sTUFBTSxHQUFHO0FBQ3ZCLGNBQUksT0FBTyxNQUFNLE1BQU0sT0FBTyxLQUFLLEdBQUc7QUFDbEMsbUJBQU8sS0FBSyxrQkFBa0Isd0NBQXdDLEtBQUssRUFBRSxDQUFDO0FBQUEsVUFDbEY7QUFDQSxpQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBQ0EsVUFBSSxPQUFPLFVBQVUsVUFBVTtBQUMzQixlQUFPO0FBQUEsTUFDWDtBQUNBLFlBQU0sSUFBSSxVQUFVLHdCQUF3QixPQUFPLEtBQUssS0FBSyxLQUFLLEVBQUU7QUFBQSxJQUN4RTtBQUNBLElBQU0sWUFBWSxLQUFLLEtBQUssS0FBSyxPQUFPLElBQUksS0FBSyxJQUFJO0FBQzlDLElBQU0sZ0JBQWdCLENBQUMsVUFBVTtBQUNwQyxZQUFNLFdBQVcsYUFBYSxLQUFLO0FBQ25DLFVBQUksYUFBYSxVQUFhLENBQUMsT0FBTyxNQUFNLFFBQVEsS0FBSyxhQUFhLFlBQVksYUFBYSxXQUFXO0FBQ3RHLFlBQUksS0FBSyxJQUFJLFFBQVEsSUFBSSxXQUFXO0FBQ2hDLGdCQUFNLElBQUksVUFBVSw4QkFBOEIsS0FBSyxFQUFFO0FBQUEsUUFDN0Q7QUFBQSxNQUNKO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDTyxJQUFNLGFBQWEsQ0FBQyxVQUFVO0FBQ2pDLFVBQUksVUFBVSxRQUFRLFVBQVUsUUFBVztBQUN2QyxlQUFPO0FBQUEsTUFDWDtBQUNBLFVBQUksT0FBTyxVQUFVLEtBQUssS0FBSyxDQUFDLE9BQU8sTUFBTSxLQUFLLEdBQUc7QUFDakQsZUFBTztBQUFBLE1BQ1g7QUFDQSxZQUFNLElBQUksVUFBVSx5QkFBeUIsT0FBTyxLQUFLLEtBQUssS0FBSyxFQUFFO0FBQUEsSUFDekU7QUFDTyxJQUFNLFlBQVk7QUFDbEIsSUFBTSxjQUFjLENBQUMsVUFBVSxlQUFlLE9BQU8sRUFBRTtBQUN2RCxJQUFNLGNBQWMsQ0FBQyxVQUFVLGVBQWUsT0FBTyxFQUFFO0FBQ3ZELElBQU0sYUFBYSxDQUFDLFVBQVUsZUFBZSxPQUFPLENBQUM7QUFDNUQsSUFBTSxpQkFBaUIsQ0FBQyxPQUFPLFNBQVM7QUFDcEMsWUFBTSxXQUFXLFdBQVcsS0FBSztBQUNqQyxVQUFJLGFBQWEsVUFBYSxRQUFRLFVBQVUsSUFBSSxNQUFNLFVBQVU7QUFDaEUsY0FBTSxJQUFJLFVBQVUsWUFBWSxJQUFJLHFCQUFxQixLQUFLLEVBQUU7QUFBQSxNQUNwRTtBQUNBLGFBQU87QUFBQSxJQUNYO0FBQ0EsSUFBTSxVQUFVLENBQUMsT0FBTyxTQUFTO0FBQzdCLGNBQVEsTUFBTTtBQUFBLFFBQ1YsS0FBSztBQUNELGlCQUFPLFdBQVcsR0FBRyxLQUFLLEVBQUUsQ0FBQztBQUFBLFFBQ2pDLEtBQUs7QUFDRCxpQkFBTyxXQUFXLEdBQUcsS0FBSyxFQUFFLENBQUM7QUFBQSxRQUNqQyxLQUFLO0FBQ0QsaUJBQU8sVUFBVSxHQUFHLEtBQUssRUFBRSxDQUFDO0FBQUEsTUFDcEM7QUFBQSxJQUNKO0FBQ08sSUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLGFBQWE7QUFDOUMsVUFBSSxVQUFVLFFBQVEsVUFBVSxRQUFXO0FBQ3ZDLFlBQUksVUFBVTtBQUNWLGdCQUFNLElBQUksVUFBVSxpQ0FBaUMsUUFBUSxFQUFFO0FBQUEsUUFDbkU7QUFDQSxjQUFNLElBQUksVUFBVSwyQkFBMkI7QUFBQSxNQUNuRDtBQUNBLGFBQU87QUFBQSxJQUNYO0FBQ08sSUFBTSxlQUFlLENBQUMsVUFBVTtBQUNuQyxVQUFJLFVBQVUsUUFBUSxVQUFVLFFBQVc7QUFDdkMsZUFBTztBQUFBLE1BQ1g7QUFDQSxVQUFJLE9BQU8sVUFBVSxZQUFZLENBQUMsTUFBTSxRQUFRLEtBQUssR0FBRztBQUNwRCxlQUFPO0FBQUEsTUFDWDtBQUNBLFlBQU0sZUFBZSxNQUFNLFFBQVEsS0FBSyxJQUFJLFVBQVUsT0FBTztBQUM3RCxZQUFNLElBQUksVUFBVSx3QkFBd0IsWUFBWSxLQUFLLEtBQUssRUFBRTtBQUFBLElBQ3hFO0FBQ08sSUFBTSxlQUFlLENBQUMsVUFBVTtBQUNuQyxVQUFJLFVBQVUsUUFBUSxVQUFVLFFBQVc7QUFDdkMsZUFBTztBQUFBLE1BQ1g7QUFDQSxVQUFJLE9BQU8sVUFBVSxVQUFVO0FBQzNCLGVBQU87QUFBQSxNQUNYO0FBQ0EsVUFBSSxDQUFDLFdBQVcsVUFBVSxRQUFRLEVBQUUsU0FBUyxPQUFPLEtBQUssR0FBRztBQUN4RCxlQUFPLEtBQUssa0JBQWtCLHdCQUF3QixPQUFPLEtBQUssS0FBSyxLQUFLLEVBQUUsQ0FBQztBQUMvRSxlQUFPLE9BQU8sS0FBSztBQUFBLE1BQ3ZCO0FBQ0EsWUFBTSxJQUFJLFVBQVUsd0JBQXdCLE9BQU8sS0FBSyxLQUFLLEtBQUssRUFBRTtBQUFBLElBQ3hFO0FBQ08sSUFBTSxjQUFjLENBQUMsVUFBVTtBQUNsQyxVQUFJLFVBQVUsUUFBUSxVQUFVLFFBQVc7QUFDdkMsZUFBTztBQUFBLE1BQ1g7QUFDQSxZQUFNLFdBQVcsYUFBYSxLQUFLO0FBQ25DLFlBQU0sVUFBVSxPQUFPLFFBQVEsUUFBUSxFQUNsQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksRUFDM0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDbkIsVUFBSSxRQUFRLFdBQVcsR0FBRztBQUN0QixjQUFNLElBQUksVUFBVSxnRUFBZ0U7QUFBQSxNQUN4RjtBQUNBLFVBQUksUUFBUSxTQUFTLEdBQUc7QUFDcEIsY0FBTSxJQUFJLFVBQVUsc0RBQXNELE9BQU8saUJBQWlCO0FBQUEsTUFDdEc7QUFDQSxhQUFPO0FBQUEsSUFDWDtBQUNPLElBQU0sb0JBQW9CLENBQUMsVUFBVTtBQUN4QyxVQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzFCLGVBQU8sYUFBYSxZQUFZLEtBQUssQ0FBQztBQUFBLE1BQzFDO0FBQ0EsYUFBTyxhQUFhLEtBQUs7QUFBQSxJQUM3QjtBQUNPLElBQU0sbUJBQW1CO0FBQ3pCLElBQU0scUJBQXFCLENBQUMsVUFBVTtBQUN6QyxVQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzFCLGVBQU8sY0FBYyxZQUFZLEtBQUssQ0FBQztBQUFBLE1BQzNDO0FBQ0EsYUFBTyxjQUFjLEtBQUs7QUFBQSxJQUM5QjtBQUNBLElBQU0sZUFBZTtBQUNyQixJQUFNLGNBQWMsQ0FBQyxVQUFVO0FBQzNCLFlBQU0sVUFBVSxNQUFNLE1BQU0sWUFBWTtBQUN4QyxVQUFJLFlBQVksUUFBUSxRQUFRLENBQUMsRUFBRSxXQUFXLE1BQU0sUUFBUTtBQUN4RCxjQUFNLElBQUksVUFBVSx3Q0FBd0M7QUFBQSxNQUNoRTtBQUNBLGFBQU8sV0FBVyxLQUFLO0FBQUEsSUFDM0I7QUFDTyxJQUFNLHFCQUFxQixDQUFDLFVBQVU7QUFDekMsVUFBSSxPQUFPLFNBQVMsVUFBVTtBQUMxQixlQUFPLGlCQUFpQixLQUFLO0FBQUEsTUFDakM7QUFDQSxhQUFPLGFBQWEsS0FBSztBQUFBLElBQzdCO0FBQ08sSUFBTSxjQUFjO0FBQ3BCLElBQU0sb0JBQW9CO0FBQzFCLElBQU0sc0JBQXNCLENBQUMsVUFBVTtBQUMxQyxVQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzFCLGVBQU8saUJBQWlCLEtBQUs7QUFBQSxNQUNqQztBQUNBLGFBQU8sY0FBYyxLQUFLO0FBQUEsSUFDOUI7QUFDQSxJQUFNLG1CQUFtQixDQUFDLFVBQVU7QUFDaEMsY0FBUSxPQUFPO0FBQUEsUUFDWCxLQUFLO0FBQ0QsaUJBQU87QUFBQSxRQUNYLEtBQUs7QUFDRCxpQkFBTztBQUFBLFFBQ1gsS0FBSztBQUNELGlCQUFPO0FBQUEsUUFDWDtBQUNJLGdCQUFNLElBQUksTUFBTSxnQ0FBZ0MsS0FBSyxFQUFFO0FBQUEsTUFDL0Q7QUFBQSxJQUNKO0FBQ08sSUFBTSxrQkFBa0IsQ0FBQyxVQUFVO0FBQ3RDLFVBQUksT0FBTyxVQUFVLFVBQVU7QUFDM0IsZUFBTyxXQUFXLFlBQVksS0FBSyxDQUFDO0FBQUEsTUFDeEM7QUFDQSxhQUFPLFdBQVcsS0FBSztBQUFBLElBQzNCO0FBQ08sSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxtQkFBbUIsQ0FBQyxVQUFVO0FBQ3ZDLFVBQUksT0FBTyxVQUFVLFVBQVU7QUFDM0IsZUFBTyxZQUFZLFlBQVksS0FBSyxDQUFDO0FBQUEsTUFDekM7QUFDQSxhQUFPLFlBQVksS0FBSztBQUFBLElBQzVCO0FBQ08sSUFBTSxtQkFBbUIsQ0FBQyxVQUFVO0FBQ3ZDLFVBQUksT0FBTyxVQUFVLFVBQVU7QUFDM0IsZUFBTyxZQUFZLFlBQVksS0FBSyxDQUFDO0FBQUEsTUFDekM7QUFDQSxhQUFPLFlBQVksS0FBSztBQUFBLElBQzVCO0FBQ08sSUFBTSxrQkFBa0IsQ0FBQyxVQUFVO0FBQ3RDLFVBQUksT0FBTyxVQUFVLFVBQVU7QUFDM0IsZUFBTyxXQUFXLFlBQVksS0FBSyxDQUFDO0FBQUEsTUFDeEM7QUFDQSxhQUFPLFdBQVcsS0FBSztBQUFBLElBQzNCO0FBQ0EsSUFBTSxvQkFBb0IsQ0FBQyxZQUFZO0FBQ25DLGFBQU8sT0FBTyxJQUFJLFVBQVUsT0FBTyxFQUFFLFNBQVMsT0FBTyxFQUNoRCxNQUFNLElBQUksRUFDVixNQUFNLEdBQUcsQ0FBQyxFQUNWLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLG1CQUFtQixDQUFDLEVBQzlDLEtBQUssSUFBSTtBQUFBLElBQ2xCO0FBQ08sSUFBTSxTQUFTO0FBQUEsTUFDbEIsTUFBTSxRQUFRO0FBQUEsSUFDbEI7QUFBQTtBQUFBOzs7QUNsT08sU0FBUyxnQkFBZ0JDLE9BQU07QUFDbEMsUUFBTUMsUUFBT0QsTUFBSyxlQUFlO0FBQ2pDLFFBQU0sUUFBUUEsTUFBSyxZQUFZO0FBQy9CLFFBQU0sWUFBWUEsTUFBSyxVQUFVO0FBQ2pDLFFBQU0sZ0JBQWdCQSxNQUFLLFdBQVc7QUFDdEMsUUFBTSxXQUFXQSxNQUFLLFlBQVk7QUFDbEMsUUFBTSxhQUFhQSxNQUFLLGNBQWM7QUFDdEMsUUFBTSxhQUFhQSxNQUFLLGNBQWM7QUFDdEMsUUFBTSxtQkFBbUIsZ0JBQWdCLEtBQUssSUFBSSxhQUFhLEtBQUssR0FBRyxhQUFhO0FBQ3BGLFFBQU0sY0FBYyxXQUFXLEtBQUssSUFBSSxRQUFRLEtBQUssR0FBRyxRQUFRO0FBQ2hFLFFBQU0sZ0JBQWdCLGFBQWEsS0FBSyxJQUFJLFVBQVUsS0FBSyxHQUFHLFVBQVU7QUFDeEUsUUFBTSxnQkFBZ0IsYUFBYSxLQUFLLElBQUksVUFBVSxLQUFLLEdBQUcsVUFBVTtBQUN4RSxTQUFPLEdBQUcsS0FBSyxTQUFTLENBQUMsS0FBSyxnQkFBZ0IsSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJQyxLQUFJLElBQUksV0FBVyxJQUFJLGFBQWEsSUFBSSxhQUFhO0FBQzVIO0FBaEJBLElBQ00sTUFDQSxRQWVBLFNBQ08sc0JBaUJQLHFCQUNPLGdDQXFCUCxhQUNBLGNBQ0EsVUFDTyxzQkE2QkEscUJBc0JQLFdBS0EsbUJBUUEsdUJBQ0Esa0JBTUEsdUJBT0EsZUFDQSxvQkFTQSxZQUdBLGdCQU9BLG1CQU1BLDJCQWdCQTtBQXBMTjtBQUFBO0FBQUE7QUFDQSxJQUFNLE9BQU8sQ0FBQyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxLQUFLO0FBQzdELElBQU0sU0FBUyxDQUFDLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxLQUFLO0FBZWxHLElBQU0sVUFBVSxJQUFJLE9BQU8sc0VBQXNFO0FBQzFGLElBQU0sdUJBQXVCLENBQUMsVUFBVTtBQUMzQyxVQUFJLFVBQVUsUUFBUSxVQUFVLFFBQVc7QUFDdkMsZUFBTztBQUFBLE1BQ1g7QUFDQSxVQUFJLE9BQU8sVUFBVSxVQUFVO0FBQzNCLGNBQU0sSUFBSSxVQUFVLGtEQUFrRDtBQUFBLE1BQzFFO0FBQ0EsWUFBTSxRQUFRLFFBQVEsS0FBSyxLQUFLO0FBQ2hDLFVBQUksQ0FBQyxPQUFPO0FBQ1IsY0FBTSxJQUFJLFVBQVUsa0NBQWtDO0FBQUEsTUFDMUQ7QUFDQSxZQUFNLENBQUMsR0FBRyxTQUFTLFVBQVUsUUFBUSxPQUFPLFNBQVMsU0FBUyxzQkFBc0IsSUFBSTtBQUN4RixZQUFNQSxRQUFPLGlCQUFpQixtQkFBbUIsT0FBTyxDQUFDO0FBQ3pELFlBQU0sUUFBUSxlQUFlLFVBQVUsU0FBUyxHQUFHLEVBQUU7QUFDckQsWUFBTSxNQUFNLGVBQWUsUUFBUSxPQUFPLEdBQUcsRUFBRTtBQUMvQyxhQUFPLFVBQVVBLE9BQU0sT0FBTyxLQUFLLEVBQUUsT0FBTyxTQUFTLFNBQVMsdUJBQXVCLENBQUM7QUFBQSxJQUMxRjtBQUNBLElBQU0sc0JBQXNCLElBQUksT0FBTywyRkFBMkY7QUFDM0gsSUFBTSxpQ0FBaUMsQ0FBQyxVQUFVO0FBQ3JELFVBQUksVUFBVSxRQUFRLFVBQVUsUUFBVztBQUN2QyxlQUFPO0FBQUEsTUFDWDtBQUNBLFVBQUksT0FBTyxVQUFVLFVBQVU7QUFDM0IsY0FBTSxJQUFJLFVBQVUsa0RBQWtEO0FBQUEsTUFDMUU7QUFDQSxZQUFNLFFBQVEsb0JBQW9CLEtBQUssS0FBSztBQUM1QyxVQUFJLENBQUMsT0FBTztBQUNSLGNBQU0sSUFBSSxVQUFVLGtDQUFrQztBQUFBLE1BQzFEO0FBQ0EsWUFBTSxDQUFDLEdBQUcsU0FBUyxVQUFVLFFBQVEsT0FBTyxTQUFTLFNBQVMsd0JBQXdCLFNBQVMsSUFBSTtBQUNuRyxZQUFNQSxRQUFPLGlCQUFpQixtQkFBbUIsT0FBTyxDQUFDO0FBQ3pELFlBQU0sUUFBUSxlQUFlLFVBQVUsU0FBUyxHQUFHLEVBQUU7QUFDckQsWUFBTSxNQUFNLGVBQWUsUUFBUSxPQUFPLEdBQUcsRUFBRTtBQUMvQyxZQUFNRCxRQUFPLFVBQVVDLE9BQU0sT0FBTyxLQUFLLEVBQUUsT0FBTyxTQUFTLFNBQVMsdUJBQXVCLENBQUM7QUFDNUYsVUFBSSxVQUFVLFlBQVksS0FBSyxLQUFLO0FBQ2hDLFFBQUFELE1BQUssUUFBUUEsTUFBSyxRQUFRLElBQUksMEJBQTBCLFNBQVMsQ0FBQztBQUFBLE1BQ3RFO0FBQ0EsYUFBT0E7QUFBQSxJQUNYO0FBQ0EsSUFBTSxjQUFjLElBQUksT0FBTyxnSkFBZ0o7QUFDL0ssSUFBTSxlQUFlLElBQUksT0FBTyw2S0FBNks7QUFDN00sSUFBTSxXQUFXLElBQUksT0FBTyxrSkFBa0o7QUFDdkssSUFBTSx1QkFBdUIsQ0FBQyxVQUFVO0FBQzNDLFVBQUksVUFBVSxRQUFRLFVBQVUsUUFBVztBQUN2QyxlQUFPO0FBQUEsTUFDWDtBQUNBLFVBQUksT0FBTyxVQUFVLFVBQVU7QUFDM0IsY0FBTSxJQUFJLFVBQVUsa0RBQWtEO0FBQUEsTUFDMUU7QUFDQSxVQUFJLFFBQVEsWUFBWSxLQUFLLEtBQUs7QUFDbEMsVUFBSSxPQUFPO0FBQ1AsY0FBTSxDQUFDLEdBQUcsUUFBUSxVQUFVLFNBQVMsT0FBTyxTQUFTLFNBQVMsc0JBQXNCLElBQUk7QUFDeEYsZUFBTyxVQUFVLGlCQUFpQixtQkFBbUIsT0FBTyxDQUFDLEdBQUcsc0JBQXNCLFFBQVEsR0FBRyxlQUFlLFFBQVEsT0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sU0FBUyxTQUFTLHVCQUF1QixDQUFDO0FBQUEsTUFDOUw7QUFDQSxjQUFRLGFBQWEsS0FBSyxLQUFLO0FBQy9CLFVBQUksT0FBTztBQUNQLGNBQU0sQ0FBQyxHQUFHLFFBQVEsVUFBVSxTQUFTLE9BQU8sU0FBUyxTQUFTLHNCQUFzQixJQUFJO0FBQ3hGLGVBQU8saUJBQWlCLFVBQVUsa0JBQWtCLE9BQU8sR0FBRyxzQkFBc0IsUUFBUSxHQUFHLGVBQWUsUUFBUSxPQUFPLEdBQUcsRUFBRSxHQUFHO0FBQUEsVUFDakk7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNKLENBQUMsQ0FBQztBQUFBLE1BQ047QUFDQSxjQUFRLFNBQVMsS0FBSyxLQUFLO0FBQzNCLFVBQUksT0FBTztBQUNQLGNBQU0sQ0FBQyxHQUFHLFVBQVUsUUFBUSxPQUFPLFNBQVMsU0FBUyx3QkFBd0IsT0FBTyxJQUFJO0FBQ3hGLGVBQU8sVUFBVSxpQkFBaUIsbUJBQW1CLE9BQU8sQ0FBQyxHQUFHLHNCQUFzQixRQUFRLEdBQUcsZUFBZSxPQUFPLFNBQVMsR0FBRyxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxTQUFTLFNBQVMsdUJBQXVCLENBQUM7QUFBQSxNQUN6TTtBQUNBLFlBQU0sSUFBSSxVQUFVLGtDQUFrQztBQUFBLElBQzFEO0FBQ08sSUFBTSxzQkFBc0IsQ0FBQyxVQUFVO0FBQzFDLFVBQUksVUFBVSxRQUFRLFVBQVUsUUFBVztBQUN2QyxlQUFPO0FBQUEsTUFDWDtBQUNBLFVBQUk7QUFDSixVQUFJLE9BQU8sVUFBVSxVQUFVO0FBQzNCLHdCQUFnQjtBQUFBLE1BQ3BCLFdBQ1MsT0FBTyxVQUFVLFVBQVU7QUFDaEMsd0JBQWdCLGtCQUFrQixLQUFLO0FBQUEsTUFDM0MsV0FDUyxPQUFPLFVBQVUsWUFBWSxNQUFNLFFBQVEsR0FBRztBQUNuRCx3QkFBZ0IsTUFBTTtBQUFBLE1BQzFCLE9BQ0s7QUFDRCxjQUFNLElBQUksVUFBVSw2RkFBNkY7QUFBQSxNQUNySDtBQUNBLFVBQUksT0FBTyxNQUFNLGFBQWEsS0FBSyxrQkFBa0IsWUFBWSxrQkFBa0IsV0FBVztBQUMxRixjQUFNLElBQUksVUFBVSxnRUFBZ0U7QUFBQSxNQUN4RjtBQUNBLGFBQU8sSUFBSSxLQUFLLEtBQUssTUFBTSxnQkFBZ0IsR0FBSSxDQUFDO0FBQUEsSUFDcEQ7QUFDQSxJQUFNLFlBQVksQ0FBQ0MsT0FBTSxPQUFPLEtBQUtDLFVBQVM7QUFDMUMsWUFBTSxnQkFBZ0IsUUFBUTtBQUM5Qix5QkFBbUJELE9BQU0sZUFBZSxHQUFHO0FBQzNDLGFBQU8sSUFBSSxLQUFLLEtBQUssSUFBSUEsT0FBTSxlQUFlLEtBQUssZUFBZUMsTUFBSyxPQUFPLFFBQVEsR0FBRyxFQUFFLEdBQUcsZUFBZUEsTUFBSyxTQUFTLFVBQVUsR0FBRyxFQUFFLEdBQUcsZUFBZUEsTUFBSyxTQUFTLFdBQVcsR0FBRyxFQUFFLEdBQUcsa0JBQWtCQSxNQUFLLHNCQUFzQixDQUFDLENBQUM7QUFBQSxJQUNoUDtBQUNBLElBQU0sb0JBQW9CLENBQUMsVUFBVTtBQUNqQyxZQUFNLFlBQVcsb0JBQUksS0FBSyxHQUFFLGVBQWU7QUFDM0MsWUFBTSxxQkFBcUIsS0FBSyxNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0saUJBQWlCLG1CQUFtQixLQUFLLENBQUM7QUFDeEcsVUFBSSxxQkFBcUIsVUFBVTtBQUMvQixlQUFPLHFCQUFxQjtBQUFBLE1BQ2hDO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDQSxJQUFNLHdCQUF3QixLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUs7QUFDeEQsSUFBTSxtQkFBbUIsQ0FBQyxVQUFVO0FBQ2hDLFVBQUksTUFBTSxRQUFRLEtBQUksb0JBQUksS0FBSyxHQUFFLFFBQVEsSUFBSSx1QkFBdUI7QUFDaEUsZUFBTyxJQUFJLEtBQUssS0FBSyxJQUFJLE1BQU0sZUFBZSxJQUFJLEtBQUssTUFBTSxZQUFZLEdBQUcsTUFBTSxXQUFXLEdBQUcsTUFBTSxZQUFZLEdBQUcsTUFBTSxjQUFjLEdBQUcsTUFBTSxjQUFjLEdBQUcsTUFBTSxtQkFBbUIsQ0FBQyxDQUFDO0FBQUEsTUFDbE07QUFDQSxhQUFPO0FBQUEsSUFDWDtBQUNBLElBQU0sd0JBQXdCLENBQUMsVUFBVTtBQUNyQyxZQUFNLFdBQVcsT0FBTyxRQUFRLEtBQUs7QUFDckMsVUFBSSxXQUFXLEdBQUc7QUFDZCxjQUFNLElBQUksVUFBVSxrQkFBa0IsS0FBSyxFQUFFO0FBQUEsTUFDakQ7QUFDQSxhQUFPLFdBQVc7QUFBQSxJQUN0QjtBQUNBLElBQU0sZ0JBQWdCLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDckUsSUFBTSxxQkFBcUIsQ0FBQ0QsT0FBTSxPQUFPLFFBQVE7QUFDN0MsVUFBSSxVQUFVLGNBQWMsS0FBSztBQUNqQyxVQUFJLFVBQVUsS0FBSyxXQUFXQSxLQUFJLEdBQUc7QUFDakMsa0JBQVU7QUFBQSxNQUNkO0FBQ0EsVUFBSSxNQUFNLFNBQVM7QUFDZixjQUFNLElBQUksVUFBVSxtQkFBbUIsT0FBTyxLQUFLLENBQUMsT0FBT0EsS0FBSSxLQUFLLEdBQUcsRUFBRTtBQUFBLE1BQzdFO0FBQUEsSUFDSjtBQUNBLElBQU0sYUFBYSxDQUFDQSxVQUFTO0FBQ3pCLGFBQU9BLFFBQU8sTUFBTSxNQUFNQSxRQUFPLFFBQVEsS0FBS0EsUUFBTyxRQUFRO0FBQUEsSUFDakU7QUFDQSxJQUFNLGlCQUFpQixDQUFDLE9BQU8sTUFBTSxPQUFPLFVBQVU7QUFDbEQsWUFBTSxVQUFVLGdCQUFnQixtQkFBbUIsS0FBSyxDQUFDO0FBQ3pELFVBQUksVUFBVSxTQUFTLFVBQVUsT0FBTztBQUNwQyxjQUFNLElBQUksVUFBVSxHQUFHLElBQUksb0JBQW9CLEtBQUssUUFBUSxLQUFLLGFBQWE7QUFBQSxNQUNsRjtBQUNBLGFBQU87QUFBQSxJQUNYO0FBQ0EsSUFBTSxvQkFBb0IsQ0FBQyxVQUFVO0FBQ2pDLFVBQUksVUFBVSxRQUFRLFVBQVUsUUFBVztBQUN2QyxlQUFPO0FBQUEsTUFDWDtBQUNBLGFBQU8sbUJBQW1CLE9BQU8sS0FBSyxJQUFJO0FBQUEsSUFDOUM7QUFDQSxJQUFNLDRCQUE0QixDQUFDLFVBQVU7QUFDekMsWUFBTSxlQUFlLE1BQU0sQ0FBQztBQUM1QixVQUFJLFlBQVk7QUFDaEIsVUFBSSxnQkFBZ0IsS0FBSztBQUNyQixvQkFBWTtBQUFBLE1BQ2hCLFdBQ1MsZ0JBQWdCLEtBQUs7QUFDMUIsb0JBQVk7QUFBQSxNQUNoQixPQUNLO0FBQ0QsY0FBTSxJQUFJLFVBQVUscUJBQXFCLFlBQVksc0JBQXNCO0FBQUEsTUFDL0U7QUFDQSxZQUFNLE9BQU8sT0FBTyxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDekMsWUFBTSxTQUFTLE9BQU8sTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLGFBQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLO0FBQUEsSUFDbkQ7QUFDQSxJQUFNLHFCQUFxQixDQUFDLFVBQVU7QUFDbEMsVUFBSSxNQUFNO0FBQ1YsYUFBTyxNQUFNLE1BQU0sU0FBUyxLQUFLLE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSztBQUN4RDtBQUFBLE1BQ0o7QUFDQSxVQUFJLFFBQVEsR0FBRztBQUNYLGVBQU87QUFBQSxNQUNYO0FBQ0EsYUFBTyxNQUFNLE1BQU0sR0FBRztBQUFBLElBQzFCO0FBQUE7QUFBQTs7O0FDN0xBO0FBQUE7QUFBQTtBQUFBLGtCQUErQztBQUFBO0FBQUE7OztBQ0EvQyxJQUFhO0FBQWI7QUFBQTtBQUFPLElBQU0saUJBQWlCLFNBQVNFLGdCQUFlLEtBQUs7QUFDdkQsWUFBTSxNQUFNLE9BQU8sT0FBTyxJQUFJLE9BQU8sR0FBRyxHQUFHO0FBQUEsUUFDdkMsa0JBQWtCO0FBQ2QsaUJBQU8sS0FBSyxNQUFNLE9BQU8sR0FBRyxDQUFDO0FBQUEsUUFDakM7QUFBQSxRQUNBLFdBQVc7QUFDUCxpQkFBTyxPQUFPLEdBQUc7QUFBQSxRQUNyQjtBQUFBLFFBQ0EsU0FBUztBQUNMLGlCQUFPLE9BQU8sR0FBRztBQUFBLFFBQ3JCO0FBQUEsTUFDSixDQUFDO0FBQ0QsYUFBTztBQUFBLElBQ1g7QUFDQSxtQkFBZSxPQUFPLENBQUMsV0FBVztBQUM5QixVQUFJLFVBQVUsT0FBTyxXQUFXLGFBQWEsa0JBQWtCLGtCQUFrQixxQkFBcUIsU0FBUztBQUMzRyxlQUFPO0FBQUEsTUFDWCxXQUNTLE9BQU8sV0FBVyxZQUFZLE9BQU8sZUFBZSxNQUFNLE1BQU0sT0FBTyxXQUFXO0FBQ3ZGLGVBQU8sZUFBZSxPQUFPLE1BQU0sQ0FBQztBQUFBLE1BQ3hDO0FBQ0EsYUFBTyxlQUFlLEtBQUssVUFBVSxNQUFNLENBQUM7QUFBQSxJQUNoRDtBQUNBLG1CQUFlLGFBQWEsZUFBZTtBQUFBO0FBQUE7OztBQ3ZCcEMsU0FBUyxZQUFZLE1BQU07QUFDOUIsTUFBSSxLQUFLLFNBQVMsR0FBRyxLQUFLLEtBQUssU0FBUyxHQUFHLEdBQUc7QUFDMUMsV0FBTyxJQUFJLEtBQUssUUFBUSxNQUFNLEtBQUssQ0FBQztBQUFBLEVBQ3hDO0FBQ0EsU0FBTztBQUNYO0FBTEE7QUFBQTtBQUFBO0FBQUE7OztBQytGQSxTQUFTLE1BQU0sR0FBRyxLQUFLLEtBQUs7QUFDeEIsUUFBTSxLQUFLLE9BQU8sQ0FBQztBQUNuQixNQUFJLEtBQUssT0FBTyxLQUFLLEtBQUs7QUFDdEIsVUFBTSxJQUFJLE1BQU0sU0FBUyxFQUFFLGtCQUFrQixHQUFHLEtBQUssR0FBRyxHQUFHO0FBQUEsRUFDL0Q7QUFDSjtBQXBHQSxJQUFNLEtBQ0EsS0FDQSxNQUNBLE1BQ0EsTUFDQUMsc0JBQ0FDLGNBQ0FDLGVBQ0FDLFdBQ0EsUUFDTyxzQkFzQkEsaUNBMEJBO0FBMURiO0FBQUE7QUFBQSxJQUFNLE1BQU07QUFDWixJQUFNLE1BQU07QUFDWixJQUFNLE9BQU87QUFDYixJQUFNLE9BQU87QUFDYixJQUFNLE9BQU87QUFDYixJQUFNSCx1QkFBc0IsSUFBSSxPQUFPLGlGQUFpRjtBQUN4SCxJQUFNQyxlQUFjLElBQUksT0FBTyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLE9BQU87QUFDN0UsSUFBTUMsZ0JBQWUsSUFBSSxPQUFPLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLGFBQWEsSUFBSSxPQUFPO0FBQy9FLElBQU1DLFlBQVcsSUFBSSxPQUFPLElBQUksR0FBRyxJQUFJLEdBQUcsb0JBQW9CLElBQUksSUFBSSxJQUFJLEdBQUc7QUFDN0UsSUFBTSxTQUFTLENBQUMsT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLEtBQUs7QUFDM0YsSUFBTSx1QkFBdUIsQ0FBQyxVQUFVO0FBQzNDLFVBQUksU0FBUyxNQUFNO0FBQ2YsZUFBTztBQUFBLE1BQ1g7QUFDQSxVQUFJLE1BQU07QUFDVixVQUFJLE9BQU8sVUFBVSxVQUFVO0FBQzNCLGNBQU07QUFBQSxNQUNWLFdBQ1MsT0FBTyxVQUFVLFVBQVU7QUFDaEMsWUFBSSxDQUFDLGdCQUFnQixLQUFLLEtBQUssR0FBRztBQUM5QixnQkFBTSxJQUFJLFVBQVUsK0NBQStDO0FBQUEsUUFDdkU7QUFDQSxjQUFNLE9BQU8sV0FBVyxLQUFLO0FBQUEsTUFDakMsV0FDUyxPQUFPLFVBQVUsWUFBWSxNQUFNLFFBQVEsR0FBRztBQUNuRCxjQUFNLE1BQU07QUFBQSxNQUNoQjtBQUNBLFVBQUksTUFBTSxHQUFHLEtBQUssS0FBSyxJQUFJLEdBQUcsTUFBTSxVQUFVO0FBQzFDLGNBQU0sSUFBSSxVQUFVLGdEQUFnRDtBQUFBLE1BQ3hFO0FBQ0EsYUFBTyxJQUFJLEtBQUssS0FBSyxNQUFNLE1BQU0sR0FBSSxDQUFDO0FBQUEsSUFDMUM7QUFDTyxJQUFNLGtDQUFrQyxDQUFDLFVBQVU7QUFDdEQsVUFBSSxTQUFTLE1BQU07QUFDZixlQUFPO0FBQUEsTUFDWDtBQUNBLFVBQUksT0FBTyxVQUFVLFVBQVU7QUFDM0IsY0FBTSxJQUFJLFVBQVUsb0NBQW9DO0FBQUEsTUFDNUQ7QUFDQSxZQUFNLFVBQVVILHFCQUFvQixLQUFLLEtBQUs7QUFDOUMsVUFBSSxDQUFDLFNBQVM7QUFDVixjQUFNLElBQUksVUFBVSxvQ0FBb0MsS0FBSyxFQUFFO0FBQUEsTUFDbkU7QUFDQSxZQUFNLENBQUMsRUFBRSxTQUFTLFVBQVUsUUFBUSxPQUFPLFNBQVMsU0FBUyxFQUFFLElBQUksU0FBUyxJQUFJO0FBQ2hGLFlBQU0sVUFBVSxHQUFHLEVBQUU7QUFDckIsWUFBTSxRQUFRLEdBQUcsRUFBRTtBQUNuQixZQUFNLE9BQU8sR0FBRyxFQUFFO0FBQ2xCLFlBQU0sU0FBUyxHQUFHLEVBQUU7QUFDcEIsWUFBTSxTQUFTLEdBQUcsRUFBRTtBQUNwQixZQUFNSSxRQUFPLElBQUksS0FBSyxLQUFLLElBQUksT0FBTyxPQUFPLEdBQUcsT0FBTyxRQUFRLElBQUksR0FBRyxPQUFPLE1BQU0sR0FBRyxPQUFPLEtBQUssR0FBRyxPQUFPLE9BQU8sR0FBRyxPQUFPLE9BQU8sR0FBRyxPQUFPLEVBQUUsSUFBSSxLQUFLLE1BQU0sV0FBVyxLQUFLLEVBQUUsRUFBRSxJQUFJLEdBQUksSUFBSSxDQUFDLENBQUM7QUFDak0sTUFBQUEsTUFBSyxlQUFlLE9BQU8sT0FBTyxDQUFDO0FBQ25DLFVBQUksVUFBVSxZQUFZLEtBQUssS0FBSztBQUNoQyxjQUFNLENBQUMsRUFBRSxNQUFNLFNBQVMsT0FBTyxJQUFJLHNCQUFzQixLQUFLLFNBQVMsS0FBSyxDQUFDLFFBQVEsS0FBSyxHQUFHLENBQUM7QUFDOUYsY0FBTSxTQUFTLFNBQVMsTUFBTSxJQUFJO0FBQ2xDLFFBQUFBLE1BQUssUUFBUUEsTUFBSyxRQUFRLElBQUksVUFBVSxPQUFPLE9BQU8sSUFBSSxLQUFLLEtBQUssTUFBTyxPQUFPLE9BQU8sSUFBSSxLQUFLLElBQUs7QUFBQSxNQUMzRztBQUNBLGFBQU9BO0FBQUEsSUFDWDtBQUNPLElBQU0sd0JBQXdCLENBQUMsVUFBVTtBQUM1QyxVQUFJLFNBQVMsTUFBTTtBQUNmLGVBQU87QUFBQSxNQUNYO0FBQ0EsVUFBSSxPQUFPLFVBQVUsVUFBVTtBQUMzQixjQUFNLElBQUksVUFBVSxxQ0FBcUM7QUFBQSxNQUM3RDtBQUNBLFVBQUk7QUFDSixVQUFJO0FBQ0osVUFBSUM7QUFDSixVQUFJO0FBQ0osVUFBSTtBQUNKLFVBQUk7QUFDSixVQUFJO0FBQ0osVUFBSTtBQUNKLFVBQUssVUFBVUosYUFBWSxLQUFLLEtBQUssR0FBSTtBQUNyQyxTQUFDLEVBQUUsS0FBSyxPQUFPSSxPQUFNLE1BQU0sUUFBUSxRQUFRLFFBQVEsSUFBSTtBQUFBLE1BQzNELFdBQ1UsVUFBVUgsY0FBYSxLQUFLLEtBQUssR0FBSTtBQUMzQyxTQUFDLEVBQUUsS0FBSyxPQUFPRyxPQUFNLE1BQU0sUUFBUSxRQUFRLFFBQVEsSUFBSTtBQUN2RCxRQUFBQSxTQUFRLE9BQU9BLEtBQUksSUFBSSxNQUFNLFNBQVM7QUFBQSxNQUMxQyxXQUNVLFVBQVVGLFVBQVMsS0FBSyxLQUFLLEdBQUk7QUFDdkMsU0FBQyxFQUFFLE9BQU8sS0FBSyxNQUFNLFFBQVEsUUFBUSxVQUFVRSxLQUFJLElBQUk7QUFBQSxNQUMzRDtBQUNBLFVBQUlBLFNBQVEsUUFBUTtBQUNoQixjQUFNLFlBQVksS0FBSyxJQUFJLE9BQU9BLEtBQUksR0FBRyxPQUFPLFFBQVEsS0FBSyxHQUFHLE9BQU8sR0FBRyxHQUFHLE9BQU8sSUFBSSxHQUFHLE9BQU8sTUFBTSxHQUFHLE9BQU8sTUFBTSxHQUFHLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxRQUFRLEVBQUUsSUFBSSxHQUFJLElBQUksQ0FBQztBQUN4TCxjQUFNLEtBQUssR0FBRyxFQUFFO0FBQ2hCLGNBQU0sTUFBTSxHQUFHLEVBQUU7QUFDakIsY0FBTSxRQUFRLEdBQUcsRUFBRTtBQUNuQixjQUFNLFFBQVEsR0FBRyxFQUFFO0FBQ25CLGNBQU1ELFFBQU8sSUFBSSxLQUFLLFNBQVM7QUFDL0IsUUFBQUEsTUFBSyxlQUFlLE9BQU9DLEtBQUksQ0FBQztBQUNoQyxlQUFPRDtBQUFBLE1BQ1g7QUFDQSxZQUFNLElBQUksVUFBVSxtQ0FBbUMsS0FBSyxHQUFHO0FBQUEsSUFDbkU7QUFBQTtBQUFBOzs7QUM5Rk8sU0FBUyxXQUFXLE9BQU8sV0FBVyxlQUFlO0FBQ3hELE1BQUksaUJBQWlCLEtBQUssQ0FBQyxPQUFPLFVBQVUsYUFBYSxHQUFHO0FBQ3hELFVBQU0sSUFBSSxNQUFNLG1DQUFtQyxnQkFBZ0IsbUJBQW1CO0FBQUEsRUFDMUY7QUFDQSxRQUFNLFdBQVcsTUFBTSxNQUFNLFNBQVM7QUFDdEMsTUFBSSxrQkFBa0IsR0FBRztBQUNyQixXQUFPO0FBQUEsRUFDWDtBQUNBLFFBQU0sbUJBQW1CLENBQUM7QUFDMUIsTUFBSSxpQkFBaUI7QUFDckIsV0FBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLFFBQVEsS0FBSztBQUN0QyxRQUFJLG1CQUFtQixJQUFJO0FBQ3ZCLHVCQUFpQixTQUFTLENBQUM7QUFBQSxJQUMvQixPQUNLO0FBQ0Qsd0JBQWtCLFlBQVksU0FBUyxDQUFDO0FBQUEsSUFDNUM7QUFDQSxTQUFLLElBQUksS0FBSyxrQkFBa0IsR0FBRztBQUMvQix1QkFBaUIsS0FBSyxjQUFjO0FBQ3BDLHVCQUFpQjtBQUFBLElBQ3JCO0FBQUEsRUFDSjtBQUNBLE1BQUksbUJBQW1CLElBQUk7QUFDdkIscUJBQWlCLEtBQUssY0FBYztBQUFBLEVBQ3hDO0FBQ0EsU0FBTztBQUNYO0FBMUJBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFhO0FBQWI7QUFBQTtBQUFPLElBQU0sY0FBYyxDQUFDLFVBQVU7QUFDbEMsWUFBTSxJQUFJLE1BQU07QUFDaEIsWUFBTSxTQUFTLENBQUM7QUFDaEIsVUFBSSxlQUFlO0FBQ25CLFVBQUksV0FBVztBQUNmLFVBQUksU0FBUztBQUNiLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDeEIsY0FBTSxPQUFPLE1BQU0sQ0FBQztBQUNwQixnQkFBUSxNQUFNO0FBQUEsVUFDVixLQUFLO0FBQ0QsZ0JBQUksYUFBYSxNQUFNO0FBQ25CLDZCQUFlLENBQUM7QUFBQSxZQUNwQjtBQUNBO0FBQUEsVUFDSixLQUFLO0FBQ0QsZ0JBQUksQ0FBQyxjQUFjO0FBQ2YscUJBQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDLENBQUM7QUFDbEMsdUJBQVMsSUFBSTtBQUFBLFlBQ2pCO0FBQ0E7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUNBLG1CQUFXO0FBQUEsTUFDZjtBQUNBLGFBQU8sS0FBSyxNQUFNLE1BQU0sTUFBTSxDQUFDO0FBQy9CLGFBQU8sT0FBTyxJQUFJLENBQUMsTUFBTTtBQUNyQixZQUFJLEVBQUUsS0FBSztBQUNYLGNBQU1FLEtBQUksRUFBRTtBQUNaLFlBQUlBLEtBQUksR0FBRztBQUNQLGlCQUFPO0FBQUEsUUFDWDtBQUNBLFlBQUksRUFBRSxDQUFDLE1BQU0sT0FBTyxFQUFFQSxLQUFJLENBQUMsTUFBTSxLQUFLO0FBQ2xDLGNBQUksRUFBRSxNQUFNLEdBQUdBLEtBQUksQ0FBQztBQUFBLFFBQ3hCO0FBQ0EsZUFBTyxFQUFFLFFBQVEsUUFBUSxHQUFHO0FBQUEsTUFDaEMsQ0FBQztBQUFBLElBQ0w7QUFBQTtBQUFBOzs7QUNkTyxTQUFTLEdBQUcsT0FBTztBQUN0QixTQUFPLElBQUksYUFBYSxPQUFPLEtBQUssR0FBRyxZQUFZO0FBQ3ZEO0FBeEJBLElBQU0sUUFDTztBQURiO0FBQUE7QUFBQSxJQUFNLFNBQVM7QUFDUixJQUFNLGVBQU4sTUFBTSxjQUFhO0FBQUEsTUFDdEI7QUFBQSxNQUNBO0FBQUEsTUFDQSxZQUFZLFFBQVEsTUFBTTtBQUN0QixhQUFLLFNBQVM7QUFDZCxhQUFLLE9BQU87QUFDWixZQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sR0FBRztBQUN0QixnQkFBTSxJQUFJLE1BQU0sZ0lBQWdJO0FBQUEsUUFDcEo7QUFBQSxNQUNKO0FBQUEsTUFDQSxXQUFXO0FBQ1AsZUFBTyxLQUFLO0FBQUEsTUFDaEI7QUFBQSxNQUNBLFFBQVEsT0FBTyxXQUFXLEVBQUUsUUFBUTtBQUNoQyxZQUFJLENBQUMsVUFBVSxPQUFPLFdBQVcsVUFBVTtBQUN2QyxpQkFBTztBQUFBLFFBQ1g7QUFDQSxjQUFNLE1BQU07QUFDWixlQUFPLGNBQWEsVUFBVSxjQUFjLE1BQU0sS0FBTSxJQUFJLFNBQVMsZ0JBQWdCLE9BQU8sS0FBSyxJQUFJLE1BQU07QUFBQSxNQUMvRztBQUFBLElBQ0o7QUFBQTtBQUFBOzs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQUFDO0FBQUEsRUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7O0FDVEE7QUFBQTtBQUFBO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsaUJBQWlCO0FBQ3pCLFFBQU0sZ0JBQWdCO0FBQ3RCLFFBQU0sV0FBVyxVQUFRLFFBQVE7QUFDakMsUUFBTSxpQkFBTixjQUE2QixTQUFTLE9BQU87QUFBQSxNQUN6QztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLGtCQUFrQjtBQUFBLE1BQ2xCLFlBQVksRUFBRSxrQkFBa0IsVUFBVSxRQUFRLHdCQUF3QixjQUFlLEdBQUc7QUFDeEYsY0FBTTtBQUNOLFlBQUksT0FBTyxPQUFPLFNBQVMsWUFBWTtBQUNuQyxlQUFLLFNBQVM7QUFBQSxRQUNsQixPQUNLO0FBQ0QsZ0JBQU0sSUFBSSxNQUFNLGdEQUFnRCxRQUFRLGFBQWEsUUFBUSxNQUFNLHFCQUFxQjtBQUFBLFFBQzVIO0FBQ0EsYUFBSyxnQkFBZ0IsaUJBQWlCLGNBQWM7QUFDcEQsYUFBSyxtQkFBbUI7QUFDeEIsYUFBSyxXQUFXO0FBQ2hCLGFBQUsseUJBQXlCO0FBQzlCLGFBQUssT0FBTyxLQUFLLElBQUk7QUFBQSxNQUN6QjtBQUFBLE1BQ0EsTUFBTSxNQUFNO0FBQ1IsWUFBSSxLQUFLLGlCQUFpQjtBQUN0QixnQkFBTSxXQUFXLEtBQUs7QUFDdEIsZUFBSyxrQkFBa0I7QUFDdkIsbUJBQVM7QUFBQSxRQUNiO0FBQUEsTUFDSjtBQUFBLE1BQ0EsT0FBTyxPQUFPLFVBQVUsVUFBVTtBQUM5QixZQUFJO0FBQ0EsZUFBSyxTQUFTLE9BQU8sS0FBSztBQUMxQixnQkFBTSxjQUFjLEtBQUssS0FBSyxLQUFLO0FBQ25DLGNBQUksQ0FBQyxhQUFhO0FBQ2QsaUJBQUssa0JBQWtCO0FBQ3ZCO0FBQUEsVUFDSjtBQUFBLFFBQ0osU0FDTyxHQUFHO0FBQ04saUJBQU8sU0FBUyxDQUFDO0FBQUEsUUFDckI7QUFDQSxlQUFPLFNBQVM7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsTUFBTSxPQUFPLFVBQVU7QUFDbkIsWUFBSTtBQUNBLGdCQUFNLFNBQVMsTUFBTSxLQUFLLFNBQVMsT0FBTztBQUMxQyxnQkFBTSxXQUFXLEtBQUssY0FBYyxNQUFNO0FBQzFDLGNBQUksS0FBSyxxQkFBcUIsVUFBVTtBQUNwQyxtQkFBTyxTQUFTLElBQUksTUFBTSxnQ0FBZ0MsS0FBSyxnQkFBZ0IsbUJBQW1CLFFBQVEseUJBQzlFLEtBQUssc0JBQXNCLElBQUksQ0FBQztBQUFBLFVBQ2hFO0FBQUEsUUFDSixTQUNPLEdBQUc7QUFDTixpQkFBTyxTQUFTLENBQUM7QUFBQSxRQUNyQjtBQUNBLGFBQUssS0FBSyxJQUFJO0FBQ2QsZUFBTyxTQUFTO0FBQUEsTUFDcEI7QUFBQSxJQUNKO0FBQ0EsWUFBUSxpQkFBaUI7QUFBQTtBQUFBOzs7QUMvRHpCO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLFNBQVMsUUFBUSxtQkFBbUI7QUFDNUMsUUFBTSxtQkFBbUIsQ0FBQyxXQUFXLE9BQU8sbUJBQW1CLGVBQzFELFFBQVEsYUFBYSxTQUFTLGVBQWUsUUFBUSxrQkFBa0I7QUFDNUUsWUFBUSxtQkFBbUI7QUFDM0IsUUFBTSxTQUFTLENBQUMsU0FBUztBQUNyQixhQUFPLE9BQU8sU0FBUyxlQUFlLE1BQU0sYUFBYSxTQUFTLEtBQUssUUFBUSxnQkFBZ0I7QUFBQSxJQUNuRztBQUNBLFlBQVEsU0FBUztBQUFBO0FBQUE7OztBQ1RqQjtBQUFBO0FBQUE7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsWUFBUSxpQkFBaUI7QUFDekIsUUFBTSxvQkFBb0IsT0FBTyxtQkFBbUIsYUFBYSxpQkFBaUIsV0FBWTtBQUFBLElBQUU7QUFDaEcsUUFBTSxpQkFBTixjQUE2QixrQkFBa0I7QUFBQSxJQUMvQztBQUNBLFlBQVEsaUJBQWlCO0FBQUE7QUFBQTs7O0FDTnpCO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLHVCQUF1QjtBQUMvQixRQUFNLGdCQUFnQjtBQUN0QixRQUFNLHNCQUFzQjtBQUM1QixRQUFNLDJCQUEyQjtBQUNqQyxRQUFNLHVCQUF1QixDQUFDLEVBQUUsa0JBQWtCLFVBQVUsUUFBUSx3QkFBd0IsY0FBZSxNQUFNO0FBQzdHLFVBQUksRUFBRSxHQUFHLG9CQUFvQixrQkFBa0IsTUFBTSxHQUFHO0FBQ3BELGNBQU0sSUFBSSxNQUFNLGdEQUFnRCxRQUFRLGFBQWEsUUFBUSxNQUFNLHFCQUFxQjtBQUFBLE1BQzVIO0FBQ0EsWUFBTSxVQUFVLGlCQUFpQixjQUFjO0FBQy9DLFVBQUksT0FBTyxvQkFBb0IsWUFBWTtBQUN2QyxjQUFNLElBQUksTUFBTSxvSEFBb0g7QUFBQSxNQUN4STtBQUNBLFlBQU0sWUFBWSxJQUFJLGdCQUFnQjtBQUFBLFFBQ2xDLFFBQVE7QUFBQSxRQUFFO0FBQUEsUUFDVixNQUFNLFVBQVUsT0FBTyxZQUFZO0FBQy9CLG1CQUFTLE9BQU8sS0FBSztBQUNyQixxQkFBVyxRQUFRLEtBQUs7QUFBQSxRQUM1QjtBQUFBLFFBQ0EsTUFBTSxNQUFNLFlBQVk7QUFDcEIsZ0JBQU0sU0FBUyxNQUFNLFNBQVMsT0FBTztBQUNyQyxnQkFBTSxXQUFXLFFBQVEsTUFBTTtBQUMvQixjQUFJLHFCQUFxQixVQUFVO0FBQy9CLGtCQUFNQyxTQUFRLElBQUksTUFBTSxnQ0FBZ0MsZ0JBQWdCLG1CQUFtQixRQUFRLHlCQUN2RSxzQkFBc0IsSUFBSTtBQUN0RCx1QkFBVyxNQUFNQSxNQUFLO0FBQUEsVUFDMUIsT0FDSztBQUNELHVCQUFXLFVBQVU7QUFBQSxVQUN6QjtBQUFBLFFBQ0o7QUFBQSxNQUNKLENBQUM7QUFDRCxhQUFPLFlBQVksU0FBUztBQUM1QixZQUFNLFdBQVcsVUFBVTtBQUMzQixhQUFPLGVBQWUsVUFBVSx5QkFBeUIsZUFBZSxTQUFTO0FBQ2pGLGFBQU87QUFBQSxJQUNYO0FBQ0EsWUFBUSx1QkFBdUI7QUFBQTtBQUFBOzs7QUN0Qy9CO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLHVCQUF1QjtBQUMvQixRQUFNLHNCQUFzQjtBQUM1QixRQUFNLG1CQUFtQjtBQUN6QixRQUFNLGlDQUFpQztBQUN2QyxhQUFTLHFCQUFxQixNQUFNO0FBQ2hDLFVBQUksT0FBTyxtQkFBbUIsZUFBZSxHQUFHLG9CQUFvQixrQkFBa0IsS0FBSyxNQUFNLEdBQUc7QUFDaEcsZ0JBQVEsR0FBRywrQkFBK0Isc0JBQXNCLElBQUk7QUFBQSxNQUN4RTtBQUNBLGFBQU8sSUFBSSxpQkFBaUIsZUFBZSxJQUFJO0FBQUEsSUFDbkQ7QUFBQTtBQUFBOzs7QUNYQTtBQUFBO0FBQUE7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsWUFBUSxxQkFBcUI7QUFDN0IsUUFBTSxxQkFBTixNQUF5QjtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixhQUFhLENBQUM7QUFBQSxNQUNkLFlBQVksZ0JBQWdCO0FBQ3hCLGFBQUssaUJBQWlCO0FBQUEsTUFDMUI7QUFBQSxNQUNBLEtBQUssV0FBVztBQUNaLGFBQUssV0FBVyxLQUFLLFNBQVM7QUFDOUIsYUFBSyxjQUFjLFVBQVU7QUFBQSxNQUNqQztBQUFBLE1BQ0EsUUFBUTtBQUNKLFlBQUksS0FBSyxXQUFXLFdBQVcsR0FBRztBQUM5QixnQkFBTSxRQUFRLEtBQUssV0FBVyxDQUFDO0FBQy9CLGVBQUssTUFBTTtBQUNYLGlCQUFPO0FBQUEsUUFDWDtBQUNBLGNBQU0sY0FBYyxLQUFLLGVBQWUsS0FBSyxVQUFVO0FBQ3ZELFlBQUksU0FBUztBQUNiLGlCQUFTLElBQUksR0FBRyxJQUFJLEtBQUssV0FBVyxRQUFRLEVBQUUsR0FBRztBQUM3QyxnQkFBTSxRQUFRLEtBQUssV0FBVyxDQUFDO0FBQy9CLHNCQUFZLElBQUksT0FBTyxNQUFNO0FBQzdCLG9CQUFVLE1BQU07QUFBQSxRQUNwQjtBQUNBLGFBQUssTUFBTTtBQUNYLGVBQU87QUFBQSxNQUNYO0FBQUEsTUFDQSxRQUFRO0FBQ0osYUFBSyxhQUFhLENBQUM7QUFDbkIsYUFBSyxhQUFhO0FBQUEsTUFDdEI7QUFBQSxJQUNKO0FBQ0EsWUFBUSxxQkFBcUI7QUFBQTtBQUFBOzs7QUNuQzdCO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLHlCQUF5QjtBQUNqQyxZQUFRLCtCQUErQjtBQUN2QyxZQUFRLFFBQVE7QUFDaEIsWUFBUSxRQUFRO0FBQ2hCLFlBQVEsU0FBUztBQUNqQixZQUFRLFNBQVM7QUFDakIsUUFBTSx1QkFBdUI7QUFDN0IsYUFBUyw2QkFBNkIsVUFBVSxNQUFNQyxTQUFRO0FBQzFELFlBQU0sU0FBUyxTQUFTLFVBQVU7QUFDbEMsVUFBSSwrQkFBK0I7QUFDbkMsVUFBSSxZQUFZO0FBQ2hCLFlBQU0sVUFBVSxDQUFDLElBQUksSUFBSSxxQkFBcUIsbUJBQW1CLENBQUNDLFVBQVMsSUFBSSxXQUFXQSxLQUFJLENBQUMsQ0FBQztBQUNoRyxVQUFJLE9BQU87QUFDWCxZQUFNLE9BQU8sT0FBTyxlQUFlO0FBQy9CLGNBQU0sRUFBRSxPQUFPLEtBQUssSUFBSSxNQUFNLE9BQU8sS0FBSztBQUMxQyxjQUFNLFFBQVE7QUFDZCxZQUFJLE1BQU07QUFDTixjQUFJLFNBQVMsSUFBSTtBQUNiLGtCQUFNLFlBQVksTUFBTSxTQUFTLElBQUk7QUFDckMsZ0JBQUksT0FBTyxTQUFTLElBQUksR0FBRztBQUN2Qix5QkFBVyxRQUFRLFNBQVM7QUFBQSxZQUNoQztBQUFBLFVBQ0o7QUFDQSxxQkFBVyxNQUFNO0FBQUEsUUFDckIsT0FDSztBQUNELGdCQUFNLFlBQVksT0FBTyxPQUFPLEtBQUs7QUFDckMsY0FBSSxTQUFTLFdBQVc7QUFDcEIsZ0JBQUksUUFBUSxHQUFHO0FBQ1gseUJBQVcsUUFBUSxNQUFNLFNBQVMsSUFBSSxDQUFDO0FBQUEsWUFDM0M7QUFDQSxtQkFBTztBQUFBLFVBQ1g7QUFDQSxjQUFJLFNBQVMsSUFBSTtBQUNiLHVCQUFXLFFBQVEsS0FBSztBQUN4QjtBQUFBLFVBQ0o7QUFDQSxnQkFBTSxZQUFZLE9BQU8sS0FBSztBQUM5Qix1QkFBYTtBQUNiLGdCQUFNLGFBQWEsT0FBTyxRQUFRLElBQUksQ0FBQztBQUN2QyxjQUFJLGFBQWEsUUFBUSxlQUFlLEdBQUc7QUFDdkMsdUJBQVcsUUFBUSxLQUFLO0FBQUEsVUFDNUIsT0FDSztBQUNELGtCQUFNLFVBQVUsTUFBTSxTQUFTLE1BQU0sS0FBSztBQUMxQyxnQkFBSSxDQUFDLGdDQUFnQyxZQUFZLE9BQU8sR0FBRztBQUN2RCw2Q0FBK0I7QUFDL0IsY0FBQUQsU0FBUSxLQUFLLDJDQUEyQyxTQUFTLDBCQUEwQixJQUFJLDRCQUE0QjtBQUFBLFlBQy9IO0FBQ0EsZ0JBQUksV0FBVyxNQUFNO0FBQ2pCLHlCQUFXLFFBQVEsTUFBTSxTQUFTLElBQUksQ0FBQztBQUFBLFlBQzNDLE9BQ0s7QUFDRCxvQkFBTSxLQUFLLFVBQVU7QUFBQSxZQUN6QjtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUNBLGFBQU8sSUFBSSxlQUFlO0FBQUEsUUFDdEI7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNMO0FBQ0EsWUFBUSx5QkFBeUI7QUFDakMsYUFBUyxNQUFNLFNBQVMsTUFBTSxPQUFPO0FBQ2pDLGNBQVEsTUFBTTtBQUFBLFFBQ1YsS0FBSztBQUNELGtCQUFRLENBQUMsS0FBSztBQUNkLGlCQUFPLE9BQU8sUUFBUSxDQUFDLENBQUM7QUFBQSxRQUM1QixLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQ0Qsa0JBQVEsSUFBSSxFQUFFLEtBQUssS0FBSztBQUN4QixpQkFBTyxPQUFPLFFBQVEsSUFBSSxDQUFDO0FBQUEsTUFDbkM7QUFBQSxJQUNKO0FBQ0EsYUFBUyxNQUFNLFNBQVMsTUFBTTtBQUMxQixjQUFRLE1BQU07QUFBQSxRQUNWLEtBQUs7QUFDRCxnQkFBTSxJQUFJLFFBQVEsQ0FBQztBQUNuQixrQkFBUSxDQUFDLElBQUk7QUFDYixpQkFBTztBQUFBLFFBQ1gsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUNELGlCQUFPLFFBQVEsSUFBSSxFQUFFLE1BQU07QUFBQSxNQUNuQztBQUNBLFlBQU0sSUFBSSxNQUFNLHVDQUF1QyxJQUFJLG1CQUFtQjtBQUFBLElBQ2xGO0FBQ0EsYUFBUyxPQUFPLE9BQU87QUFDbkIsYUFBTyxPQUFPLGNBQWMsT0FBTyxVQUFVO0FBQUEsSUFDakQ7QUFDQSxhQUFTLE9BQU8sT0FBTyxjQUFjLE1BQU07QUFDdkMsVUFBSSxlQUFlLE9BQU8sV0FBVyxlQUFlLGlCQUFpQixRQUFRO0FBQ3pFLGVBQU87QUFBQSxNQUNYO0FBQ0EsVUFBSSxpQkFBaUIsWUFBWTtBQUM3QixlQUFPO0FBQUEsTUFDWDtBQUNBLFVBQUksT0FBTyxVQUFVLFVBQVU7QUFDM0IsZUFBTztBQUFBLE1BQ1g7QUFDQSxhQUFPO0FBQUEsSUFDWDtBQUFBO0FBQUE7OztBQ3RHQTtBQUFBO0FBQUE7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsWUFBUSx5QkFBeUI7QUFDakMsUUFBTSxnQkFBZ0IsVUFBUSxhQUFhO0FBQzNDLFFBQU0sdUJBQXVCO0FBQzdCLFFBQU0saUNBQWlDO0FBQ3ZDLFFBQU0sc0JBQXNCO0FBQzVCLGFBQVMsdUJBQXVCLFVBQVUsTUFBTUUsU0FBUTtBQUNwRCxXQUFLLEdBQUcsb0JBQW9CLGtCQUFrQixRQUFRLEdBQUc7QUFDckQsZ0JBQVEsR0FBRywrQkFBK0IsOEJBQThCLFVBQVUsTUFBTUEsT0FBTTtBQUFBLE1BQ2xHO0FBQ0EsWUFBTSxhQUFhLElBQUksY0FBYyxTQUFTLEVBQUUsT0FBTztBQUFBLE1BQUUsRUFBRSxDQUFDO0FBQzVELFVBQUksK0JBQStCO0FBQ25DLFVBQUksWUFBWTtBQUNoQixZQUFNLFVBQVU7QUFBQSxRQUNaO0FBQUEsUUFDQSxJQUFJLHFCQUFxQixtQkFBbUIsQ0FBQ0MsVUFBUyxJQUFJLFdBQVdBLEtBQUksQ0FBQztBQUFBLFFBQzFFLElBQUkscUJBQXFCLG1CQUFtQixDQUFDQSxVQUFTLE9BQU8sS0FBSyxJQUFJLFdBQVdBLEtBQUksQ0FBQyxDQUFDO0FBQUEsTUFDM0Y7QUFDQSxVQUFJLE9BQU87QUFDWCxlQUFTLEdBQUcsUUFBUSxDQUFDLFVBQVU7QUFDM0IsY0FBTSxhQUFhLEdBQUcsK0JBQStCLFFBQVEsT0FBTyxJQUFJO0FBQ3hFLFlBQUksU0FBUyxXQUFXO0FBQ3BCLGNBQUksUUFBUSxHQUFHO0FBQ1gsdUJBQVcsTUFBTSxHQUFHLCtCQUErQixPQUFPLFNBQVMsSUFBSSxDQUFDO0FBQUEsVUFDNUU7QUFDQSxpQkFBTztBQUFBLFFBQ1g7QUFDQSxZQUFJLFNBQVMsSUFBSTtBQUNiLHFCQUFXLEtBQUssS0FBSztBQUNyQjtBQUFBLFFBQ0o7QUFDQSxjQUFNLGFBQWEsR0FBRywrQkFBK0IsUUFBUSxLQUFLO0FBQ2xFLHFCQUFhO0FBQ2IsY0FBTSxjQUFjLEdBQUcsK0JBQStCLFFBQVEsUUFBUSxJQUFJLENBQUM7QUFDM0UsWUFBSSxhQUFhLFFBQVEsZUFBZSxHQUFHO0FBQ3ZDLHFCQUFXLEtBQUssS0FBSztBQUFBLFFBQ3pCLE9BQ0s7QUFDRCxnQkFBTSxXQUFXLEdBQUcsK0JBQStCLE9BQU8sU0FBUyxNQUFNLEtBQUs7QUFDOUUsY0FBSSxDQUFDLGdDQUFnQyxZQUFZLE9BQU8sR0FBRztBQUN2RCwyQ0FBK0I7QUFDL0IsWUFBQUQsU0FBUSxLQUFLLDJDQUEyQyxTQUFTLDBCQUEwQixJQUFJLDRCQUE0QjtBQUFBLFVBQy9IO0FBQ0EsY0FBSSxXQUFXLE1BQU07QUFDakIsdUJBQVcsTUFBTSxHQUFHLCtCQUErQixPQUFPLFNBQVMsSUFBSSxDQUFDO0FBQUEsVUFDNUU7QUFBQSxRQUNKO0FBQUEsTUFDSixDQUFDO0FBQ0QsZUFBUyxHQUFHLE9BQU8sTUFBTTtBQUNyQixZQUFJLFNBQVMsSUFBSTtBQUNiLGdCQUFNLGFBQWEsR0FBRywrQkFBK0IsT0FBTyxTQUFTLElBQUk7QUFDekUsZUFBSyxHQUFHLCtCQUErQixRQUFRLFNBQVMsSUFBSSxHQUFHO0FBQzNELHVCQUFXLEtBQUssU0FBUztBQUFBLFVBQzdCO0FBQUEsUUFDSjtBQUNBLG1CQUFXLEtBQUssSUFBSTtBQUFBLE1BQ3hCLENBQUM7QUFDRCxhQUFPO0FBQUEsSUFDWDtBQUFBO0FBQUE7OztBQzNEQTtBQUFBO0FBQUE7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsWUFBUSw4QkFBOEI7QUFDdEMsUUFBTSw4QkFBOEIsQ0FBQyxnQkFBZ0IsWUFBWTtBQUM3RCxZQUFNLEVBQUUsZUFBZSxtQkFBbUIscUJBQXFCLHNCQUFzQixhQUFhLElBQUk7QUFDdEcsWUFBTSxtQkFBbUIsa0JBQWtCLFVBQ3ZDLHNCQUFzQixVQUN0Qix3QkFBd0IsVUFDeEIseUJBQXlCLFVBQ3pCLGlCQUFpQjtBQUNyQixZQUFNLFNBQVMsbUJBQW1CLGFBQWEscUJBQXFCLGNBQWMsSUFBSTtBQUN0RixZQUFNLFNBQVMsZUFBZSxVQUFVO0FBQ3hDLGFBQU8sSUFBSSxlQUFlO0FBQUEsUUFDdEIsTUFBTSxLQUFLLFlBQVk7QUFDbkIsZ0JBQU0sRUFBRSxPQUFPLEtBQUssSUFBSSxNQUFNLE9BQU8sS0FBSztBQUMxQyxjQUFJLE1BQU07QUFDTix1QkFBVyxRQUFRO0FBQUEsQ0FBTztBQUMxQixnQkFBSSxrQkFBa0I7QUFDbEIsb0JBQU0sV0FBVyxjQUFjLE1BQU0sTUFBTTtBQUMzQyx5QkFBVyxRQUFRLEdBQUcsb0JBQW9CLElBQUksUUFBUTtBQUFBLENBQU07QUFDNUQseUJBQVcsUUFBUTtBQUFBLENBQU07QUFBQSxZQUM3QjtBQUNBLHVCQUFXLE1BQU07QUFBQSxVQUNyQixPQUNLO0FBQ0QsdUJBQVcsUUFBUSxJQUFJLGtCQUFrQixLQUFLLEtBQUssR0FBRyxTQUFTLEVBQUUsQ0FBQztBQUFBLEVBQU8sS0FBSztBQUFBLENBQU07QUFBQSxVQUN4RjtBQUFBLFFBQ0o7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNMO0FBQ0EsWUFBUSw4QkFBOEI7QUFBQTtBQUFBOzs7QUM5QnRDO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLDhCQUE4QjtBQUN0QyxRQUFNLGdCQUFnQixVQUFRLGFBQWE7QUFDM0MsUUFBTSx3Q0FBd0M7QUFDOUMsUUFBTSxzQkFBc0I7QUFDNUIsYUFBUyw0QkFBNEIsUUFBUSxTQUFTO0FBQ2xELFlBQU0sV0FBVztBQUNqQixZQUFNLGlCQUFpQjtBQUN2QixXQUFLLEdBQUcsb0JBQW9CLGtCQUFrQixjQUFjLEdBQUc7QUFDM0QsZ0JBQVEsR0FBRyxzQ0FBc0MsNkJBQTZCLGdCQUFnQixPQUFPO0FBQUEsTUFDekc7QUFDQSxZQUFNLEVBQUUsZUFBZSxtQkFBbUIscUJBQXFCLHNCQUFzQixhQUFhLElBQUk7QUFDdEcsWUFBTSxtQkFBbUIsa0JBQWtCLFVBQ3ZDLHdCQUF3QixVQUN4Qix5QkFBeUIsVUFDekIsaUJBQWlCO0FBQ3JCLFlBQU0sU0FBUyxtQkFBbUIsYUFBYSxxQkFBcUIsUUFBUSxJQUFJO0FBQ2hGLFlBQU0sMkJBQTJCLElBQUksY0FBYyxTQUFTO0FBQUEsUUFDeEQsTUFBTSxNQUFNO0FBQUEsUUFBRTtBQUFBLE1BQ2xCLENBQUM7QUFDRCxlQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVM7QUFDMUIsY0FBTSxTQUFTLGtCQUFrQixJQUFJLEtBQUs7QUFDMUMsWUFBSSxXQUFXLEdBQUc7QUFDZDtBQUFBLFFBQ0o7QUFDQSxpQ0FBeUIsS0FBSyxHQUFHLE9BQU8sU0FBUyxFQUFFLENBQUM7QUFBQSxDQUFNO0FBQzFELGlDQUF5QixLQUFLLElBQUk7QUFDbEMsaUNBQXlCLEtBQUssTUFBTTtBQUFBLE1BQ3hDLENBQUM7QUFDRCxlQUFTLEdBQUcsT0FBTyxZQUFZO0FBQzNCLGlDQUF5QixLQUFLO0FBQUEsQ0FBTztBQUNyQyxZQUFJLGtCQUFrQjtBQUNsQixnQkFBTSxXQUFXLGNBQWMsTUFBTSxNQUFNO0FBQzNDLG1DQUF5QixLQUFLLEdBQUcsb0JBQW9CLElBQUksUUFBUTtBQUFBLENBQU07QUFDdkUsbUNBQXlCLEtBQUs7QUFBQSxDQUFNO0FBQUEsUUFDeEM7QUFDQSxpQ0FBeUIsS0FBSyxJQUFJO0FBQUEsTUFDdEMsQ0FBQztBQUNELGFBQU87QUFBQSxJQUNYO0FBQUE7QUFBQTs7O0FDeENBO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLGFBQWE7QUFDckIsbUJBQWUsV0FBVyxRQUFRLE9BQU87QUFDckMsVUFBSSxvQkFBb0I7QUFDeEIsWUFBTSxTQUFTLENBQUM7QUFDaEIsWUFBTSxTQUFTLE9BQU8sVUFBVTtBQUNoQyxVQUFJLFNBQVM7QUFDYixhQUFPLENBQUMsUUFBUTtBQUNaLGNBQU0sRUFBRSxNQUFNLE1BQU0sSUFBSSxNQUFNLE9BQU8sS0FBSztBQUMxQyxZQUFJLE9BQU87QUFDUCxpQkFBTyxLQUFLLEtBQUs7QUFDakIsK0JBQXFCLE9BQU8sY0FBYztBQUFBLFFBQzlDO0FBQ0EsWUFBSSxxQkFBcUIsT0FBTztBQUM1QjtBQUFBLFFBQ0o7QUFDQSxpQkFBUztBQUFBLE1BQ2I7QUFDQSxhQUFPLFlBQVk7QUFDbkIsWUFBTSxZQUFZLElBQUksV0FBVyxLQUFLLElBQUksT0FBTyxpQkFBaUIsQ0FBQztBQUNuRSxVQUFJLFNBQVM7QUFDYixpQkFBVyxTQUFTLFFBQVE7QUFDeEIsWUFBSSxNQUFNLGFBQWEsVUFBVSxhQUFhLFFBQVE7QUFDbEQsb0JBQVUsSUFBSSxNQUFNLFNBQVMsR0FBRyxVQUFVLGFBQWEsTUFBTSxHQUFHLE1BQU07QUFDdEU7QUFBQSxRQUNKLE9BQ0s7QUFDRCxvQkFBVSxJQUFJLE9BQU8sTUFBTTtBQUFBLFFBQy9CO0FBQ0Esa0JBQVUsTUFBTTtBQUFBLE1BQ3BCO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFBQTtBQUFBOzs7QUNqQ0E7QUFBQTtBQUFBO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsYUFBYTtBQUNyQixRQUFNLFdBQVcsVUFBUSxRQUFRO0FBQ2pDLFFBQU0sdUJBQXVCO0FBQzdCLFFBQU0sc0JBQXNCO0FBQzVCLFFBQU0sYUFBYSxDQUFDLFFBQVEsVUFBVTtBQUNsQyxXQUFLLEdBQUcsb0JBQW9CLGtCQUFrQixNQUFNLEdBQUc7QUFDbkQsZ0JBQVEsR0FBRyxxQkFBcUIsWUFBWSxRQUFRLEtBQUs7QUFBQSxNQUM3RDtBQUNBLGFBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3BDLGNBQU0sWUFBWSxJQUFJLFVBQVU7QUFDaEMsa0JBQVUsUUFBUTtBQUNsQixlQUFPLEtBQUssU0FBUztBQUNyQixlQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVE7QUFDeEIsb0JBQVUsSUFBSTtBQUNkLGlCQUFPLEdBQUc7QUFBQSxRQUNkLENBQUM7QUFDRCxrQkFBVSxHQUFHLFNBQVMsTUFBTTtBQUM1QixrQkFBVSxHQUFHLFVBQVUsV0FBWTtBQUMvQixnQkFBTUUsU0FBUSxJQUFJLFdBQVcsT0FBTyxPQUFPLEtBQUssT0FBTyxDQUFDO0FBQ3hELGtCQUFRQSxNQUFLO0FBQUEsUUFDakIsQ0FBQztBQUFBLE1BQ0wsQ0FBQztBQUFBLElBQ0w7QUFDQSxZQUFRLGFBQWE7QUFDckIsUUFBTSxZQUFOLGNBQXdCLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFVBQVUsQ0FBQztBQUFBLE1BQ1gsUUFBUTtBQUFBLE1BQ1IsZ0JBQWdCO0FBQUEsTUFDaEIsT0FBTyxPQUFPLFVBQVUsVUFBVTtBQUM5QixhQUFLLFFBQVEsS0FBSyxLQUFLO0FBQ3ZCLGFBQUssaUJBQWlCLE1BQU0sY0FBYztBQUMxQyxZQUFJLEtBQUssaUJBQWlCLEtBQUssT0FBTztBQUNsQyxnQkFBTSxTQUFTLEtBQUssZ0JBQWdCLEtBQUs7QUFDekMsZ0JBQU0sYUFBYSxLQUFLLFFBQVEsS0FBSyxRQUFRLFNBQVMsQ0FBQztBQUN2RCxlQUFLLFFBQVEsS0FBSyxRQUFRLFNBQVMsQ0FBQyxJQUFJLFdBQVcsU0FBUyxHQUFHLFdBQVcsYUFBYSxNQUFNO0FBQzdGLGVBQUssS0FBSyxRQUFRO0FBQUEsUUFDdEI7QUFDQSxpQkFBUztBQUFBLE1BQ2I7QUFBQSxJQUNKO0FBQUE7QUFBQTs7O0FDekNBO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLGlCQUFpQjtBQUN6QixRQUFNLHVCQUF1QjtBQUM3QixRQUFNLGdCQUFnQjtBQUN0QixRQUFNLHNCQUFzQjtBQUM1QixRQUFNLGNBQWM7QUFDcEIsUUFBTSxzQkFBc0I7QUFDNUIsUUFBTSxzQ0FBc0M7QUFDNUMsUUFBTUMsa0JBQWlCLENBQUMsV0FBVztBQUMvQixVQUFJLENBQUMsZUFBZSxNQUFNLEtBQUssRUFBRSxHQUFHLG9CQUFvQixrQkFBa0IsTUFBTSxHQUFHO0FBQy9FLGNBQU0sT0FBTyxRQUFRLFdBQVcsYUFBYSxRQUFRO0FBQ3JELGNBQU0sSUFBSSxNQUFNLHdFQUF3RSxJQUFJLEVBQUU7QUFBQSxNQUNsRztBQUNBLFVBQUksY0FBYztBQUNsQixZQUFNLHVCQUF1QixZQUFZO0FBQ3JDLFlBQUksYUFBYTtBQUNiLGdCQUFNLElBQUksTUFBTSxtQ0FBbUM7QUFBQSxRQUN2RDtBQUNBLHNCQUFjO0FBQ2QsZUFBTyxPQUFPLEdBQUcscUJBQXFCLGlCQUFpQixNQUFNO0FBQUEsTUFDakU7QUFDQSxZQUFNLGtCQUFrQixDQUFDLFNBQVM7QUFDOUIsWUFBSSxPQUFPLEtBQUssV0FBVyxZQUFZO0FBQ25DLGdCQUFNLElBQUksTUFBTSwwT0FDOEg7QUFBQSxRQUNsSjtBQUNBLGVBQU8sS0FBSyxPQUFPO0FBQUEsTUFDdkI7QUFDQSxhQUFPLE9BQU8sT0FBTyxRQUFRO0FBQUEsUUFDekI7QUFBQSxRQUNBLG1CQUFtQixPQUFPLGFBQWE7QUFDbkMsZ0JBQU0sTUFBTSxNQUFNLHFCQUFxQjtBQUN2QyxjQUFJLGFBQWEsVUFBVTtBQUN2QixvQkFBUSxHQUFHLGNBQWMsVUFBVSxHQUFHO0FBQUEsVUFDMUMsV0FDUyxhQUFhLE9BQU87QUFDekIsb0JBQVEsR0FBRyxvQkFBb0IsT0FBTyxHQUFHO0FBQUEsVUFDN0MsV0FDUyxhQUFhLFVBQWEsYUFBYSxVQUFVLGFBQWEsU0FBUztBQUM1RSxvQkFBUSxHQUFHLFlBQVksUUFBUSxHQUFHO0FBQUEsVUFDdEMsV0FDUyxPQUFPLGdCQUFnQixZQUFZO0FBQ3hDLG1CQUFPLElBQUksWUFBWSxRQUFRLEVBQUUsT0FBTyxHQUFHO0FBQUEsVUFDL0MsT0FDSztBQUNELGtCQUFNLElBQUksTUFBTSxzRUFBc0U7QUFBQSxVQUMxRjtBQUFBLFFBQ0o7QUFBQSxRQUNBLHNCQUFzQixNQUFNO0FBQ3hCLGNBQUksYUFBYTtBQUNiLGtCQUFNLElBQUksTUFBTSxtQ0FBbUM7QUFBQSxVQUN2RDtBQUNBLHdCQUFjO0FBQ2QsY0FBSSxlQUFlLE1BQU0sR0FBRztBQUN4QixtQkFBTyxnQkFBZ0IsTUFBTTtBQUFBLFVBQ2pDLFlBQ1UsR0FBRyxvQkFBb0Isa0JBQWtCLE1BQU0sR0FBRztBQUN4RCxtQkFBTztBQUFBLFVBQ1gsT0FDSztBQUNELGtCQUFNLElBQUksTUFBTSwrQ0FBK0MsTUFBTSxFQUFFO0FBQUEsVUFDM0U7QUFBQSxRQUNKO0FBQUEsTUFDSixDQUFDO0FBQUEsSUFDTDtBQUNBLFlBQVEsaUJBQWlCQTtBQUN6QixRQUFNLGlCQUFpQixDQUFDLFdBQVcsT0FBTyxTQUFTLGNBQWMsa0JBQWtCO0FBQUE7QUFBQTs7O0FDbkVuRjtBQUFBO0FBQUE7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsWUFBUSxpQkFBaUI7QUFDekIsUUFBTSxzQkFBc0I7QUFDNUIsUUFBTSxxQkFBcUI7QUFDM0IsUUFBTSxXQUFXLFVBQVEsUUFBUTtBQUNqQyxRQUFNLDZCQUE2QjtBQUNuQyxRQUFNLHNDQUFzQztBQUM1QyxRQUFNQyxrQkFBaUIsQ0FBQyxXQUFXO0FBQy9CLFVBQUksRUFBRSxrQkFBa0IsU0FBUyxXQUFXO0FBQ3hDLFlBQUk7QUFDQSxrQkFBUSxHQUFHLDJCQUEyQixnQkFBZ0IsTUFBTTtBQUFBLFFBQ2hFLFNBQ08sR0FBRztBQUNOLGdCQUFNLE9BQU8sUUFBUSxXQUFXLGFBQWEsUUFBUTtBQUNyRCxnQkFBTSxJQUFJLE1BQU0sMEVBQTBFLElBQUksRUFBRTtBQUFBLFFBQ3BHO0FBQUEsTUFDSjtBQUNBLFVBQUksY0FBYztBQUNsQixZQUFNLHVCQUF1QixZQUFZO0FBQ3JDLFlBQUksYUFBYTtBQUNiLGdCQUFNLElBQUksTUFBTSxtQ0FBbUM7QUFBQSxRQUN2RDtBQUNBLHNCQUFjO0FBQ2QsZUFBTyxPQUFPLEdBQUcsb0JBQW9CLGlCQUFpQixNQUFNO0FBQUEsTUFDaEU7QUFDQSxhQUFPLE9BQU8sT0FBTyxRQUFRO0FBQUEsUUFDekI7QUFBQSxRQUNBLG1CQUFtQixPQUFPLGFBQWE7QUFDbkMsZ0JBQU0sTUFBTSxNQUFNLHFCQUFxQjtBQUN2QyxjQUFJLGFBQWEsVUFBYSxPQUFPLFdBQVcsUUFBUSxHQUFHO0FBQ3ZELG9CQUFRLEdBQUcsbUJBQW1CLGlCQUFpQixJQUFJLFFBQVEsSUFBSSxZQUFZLElBQUksVUFBVSxFQUFFLFNBQVMsUUFBUTtBQUFBLFVBQ2hILE9BQ0s7QUFDRCxrQkFBTSxVQUFVLElBQUksWUFBWSxRQUFRO0FBQ3hDLG1CQUFPLFFBQVEsT0FBTyxHQUFHO0FBQUEsVUFDN0I7QUFBQSxRQUNKO0FBQUEsUUFDQSxzQkFBc0IsTUFBTTtBQUN4QixjQUFJLGFBQWE7QUFDYixrQkFBTSxJQUFJLE1BQU0sbUNBQW1DO0FBQUEsVUFDdkQ7QUFDQSxjQUFJLE9BQU8sb0JBQW9CLE1BQU07QUFDakMsa0JBQU0sSUFBSSxNQUFNLGtEQUFrRDtBQUFBLFVBQ3RFO0FBQ0EsY0FBSSxPQUFPLFNBQVMsU0FBUyxVQUFVLFlBQVk7QUFDL0Msa0JBQU0sSUFBSSxNQUFNLDJFQUEyRTtBQUFBLFVBQy9GO0FBQ0Esd0JBQWM7QUFDZCxpQkFBTyxTQUFTLFNBQVMsTUFBTSxNQUFNO0FBQUEsUUFDekM7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNMO0FBQ0EsWUFBUSxpQkFBaUJBO0FBQUE7QUFBQTs7O0FDckR6QjtBQUFBO0FBQUE7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsWUFBUSxjQUFjO0FBQ3RCLG1CQUFlLFlBQVksUUFBUTtBQUMvQixVQUFJLE9BQU8sT0FBTyxXQUFXLFlBQVk7QUFDckMsaUJBQVMsT0FBTyxPQUFPO0FBQUEsTUFDM0I7QUFDQSxZQUFNLGlCQUFpQjtBQUN2QixhQUFPLGVBQWUsSUFBSTtBQUFBLElBQzlCO0FBQUE7QUFBQTs7O0FDVEE7QUFBQTtBQUFBO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsY0FBYztBQUN0QixRQUFNLFdBQVcsVUFBUSxRQUFRO0FBQ2pDLFFBQU0sd0JBQXdCO0FBQzlCLFFBQU0sc0JBQXNCO0FBQzVCLG1CQUFlLFlBQVksUUFBUTtBQUMvQixXQUFLLEdBQUcsb0JBQW9CLGtCQUFrQixNQUFNLE1BQU0sR0FBRyxvQkFBb0IsUUFBUSxNQUFNLEdBQUc7QUFDOUYsZ0JBQVEsR0FBRyxzQkFBc0IsYUFBYSxNQUFNO0FBQUEsTUFDeEQ7QUFDQSxZQUFNLFVBQVUsSUFBSSxTQUFTLFlBQVk7QUFDekMsWUFBTSxVQUFVLElBQUksU0FBUyxZQUFZO0FBQ3pDLGFBQU8sS0FBSyxPQUFPO0FBQ25CLGFBQU8sS0FBSyxPQUFPO0FBQ25CLGFBQU8sQ0FBQyxTQUFTLE9BQU87QUFBQSxJQUM1QjtBQUFBO0FBQUE7OztBQ2ZBLElBQUFDLHFCQUFBO0FBQUE7QUFBQTtBQUVBLFFBQUksYUFBYTtBQUNqQixRQUFJLFdBQVc7QUFDZixRQUFJLGlCQUFpQjtBQUNyQixRQUFJLHVCQUF1QjtBQUMzQixRQUFJLHlCQUF5QjtBQUM3QixRQUFJLDhCQUE4QjtBQUNsQyxRQUFJLGFBQWE7QUFDakIsUUFBSUMsa0JBQWlCO0FBQ3JCLFFBQUksY0FBYztBQUNsQixRQUFJLGtCQUFrQjtBQUV0QixRQUFNQyx5QkFBTixNQUFNLCtCQUE4QixXQUFXO0FBQUEsTUFDM0MsT0FBTyxXQUFXLFFBQVEsV0FBVyxTQUFTO0FBQzFDLFlBQUksT0FBTyxXQUFXLFVBQVU7QUFDNUIsY0FBSSxhQUFhLFVBQVU7QUFDdkIsbUJBQU8sdUJBQXNCLE9BQU8sV0FBVyxXQUFXLE1BQU0sQ0FBQztBQUFBLFVBQ3JFO0FBQ0EsaUJBQU8sdUJBQXNCLE9BQU8sU0FBUyxTQUFTLE1BQU0sQ0FBQztBQUFBLFFBQ2pFO0FBQ0EsY0FBTSxJQUFJLE1BQU0sK0JBQStCLE9BQU8sTUFBTSw0QkFBNEI7QUFBQSxNQUM1RjtBQUFBLE1BQ0EsT0FBTyxPQUFPLFFBQVE7QUFDbEIsZUFBTyxlQUFlLFFBQVEsdUJBQXNCLFNBQVM7QUFDN0QsZUFBTztBQUFBLE1BQ1g7QUFBQSxNQUNBLGtCQUFrQixXQUFXLFNBQVM7QUFDbEMsWUFBSSxhQUFhLFVBQVU7QUFDdkIsaUJBQU8sV0FBVyxTQUFTLElBQUk7QUFBQSxRQUNuQztBQUNBLGVBQU8sU0FBUyxPQUFPLElBQUk7QUFBQSxNQUMvQjtBQUFBLElBQ0o7QUFFQSxZQUFRLFNBQVMsZ0JBQWdCO0FBQ2pDLFlBQVEsbUJBQW1CLGdCQUFnQjtBQUMzQyxZQUFRLHdCQUF3QkE7QUFDaEMsV0FBTyxVQUFVLGVBQWUsS0FBSyxnQkFBZ0IsV0FBVyxLQUM1RCxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssU0FBUyxXQUFXLEtBQzFELE9BQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixPQUFPLGVBQWUsV0FBVztBQUFBLElBQ3JDLENBQUM7QUFFTCxXQUFPLEtBQUssY0FBYyxFQUFFLFFBQVEsU0FBVSxHQUFHO0FBQzdDLFVBQUksTUFBTSxhQUFhLENBQUMsT0FBTyxVQUFVLGVBQWUsS0FBSyxTQUFTLENBQUMsRUFBRyxTQUFRLENBQUMsSUFBSSxlQUFlLENBQUM7QUFBQSxJQUMzRyxDQUFDO0FBQ0QsV0FBTyxVQUFVLGVBQWUsS0FBSyxzQkFBc0IsV0FBVyxLQUNsRSxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssU0FBUyxXQUFXLEtBQzFELE9BQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixPQUFPLHFCQUFxQixXQUFXO0FBQUEsSUFDM0MsQ0FBQztBQUVMLFdBQU8sS0FBSyxvQkFBb0IsRUFBRSxRQUFRLFNBQVUsR0FBRztBQUNuRCxVQUFJLE1BQU0sYUFBYSxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssU0FBUyxDQUFDLEVBQUcsU0FBUSxDQUFDLElBQUkscUJBQXFCLENBQUM7QUFBQSxJQUNqSCxDQUFDO0FBQ0QsV0FBTyxVQUFVLGVBQWUsS0FBSyx3QkFBd0IsV0FBVyxLQUNwRSxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssU0FBUyxXQUFXLEtBQzFELE9BQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixPQUFPLHVCQUF1QixXQUFXO0FBQUEsSUFDN0MsQ0FBQztBQUVMLFdBQU8sS0FBSyxzQkFBc0IsRUFBRSxRQUFRLFNBQVUsR0FBRztBQUNyRCxVQUFJLE1BQU0sYUFBYSxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssU0FBUyxDQUFDLEVBQUcsU0FBUSxDQUFDLElBQUksdUJBQXVCLENBQUM7QUFBQSxJQUNuSCxDQUFDO0FBQ0QsV0FBTyxVQUFVLGVBQWUsS0FBSyw2QkFBNkIsV0FBVyxLQUN6RSxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssU0FBUyxXQUFXLEtBQzFELE9BQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixPQUFPLDRCQUE0QixXQUFXO0FBQUEsSUFDbEQsQ0FBQztBQUVMLFdBQU8sS0FBSywyQkFBMkIsRUFBRSxRQUFRLFNBQVUsR0FBRztBQUMxRCxVQUFJLE1BQU0sYUFBYSxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssU0FBUyxDQUFDLEVBQUcsU0FBUSxDQUFDLElBQUksNEJBQTRCLENBQUM7QUFBQSxJQUN4SCxDQUFDO0FBQ0QsV0FBTyxVQUFVLGVBQWUsS0FBSyxZQUFZLFdBQVcsS0FDeEQsQ0FBQyxPQUFPLFVBQVUsZUFBZSxLQUFLLFNBQVMsV0FBVyxLQUMxRCxPQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osT0FBTyxXQUFXLFdBQVc7QUFBQSxJQUNqQyxDQUFDO0FBRUwsV0FBTyxLQUFLLFVBQVUsRUFBRSxRQUFRLFNBQVUsR0FBRztBQUN6QyxVQUFJLE1BQU0sYUFBYSxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssU0FBUyxDQUFDLEVBQUcsU0FBUSxDQUFDLElBQUksV0FBVyxDQUFDO0FBQUEsSUFDdkcsQ0FBQztBQUNELFdBQU8sVUFBVSxlQUFlLEtBQUtELGlCQUFnQixXQUFXLEtBQzVELENBQUMsT0FBTyxVQUFVLGVBQWUsS0FBSyxTQUFTLFdBQVcsS0FDMUQsT0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLE9BQU9BLGdCQUFlLFdBQVc7QUFBQSxJQUNyQyxDQUFDO0FBRUwsV0FBTyxLQUFLQSxlQUFjLEVBQUUsUUFBUSxTQUFVLEdBQUc7QUFDN0MsVUFBSSxNQUFNLGFBQWEsQ0FBQyxPQUFPLFVBQVUsZUFBZSxLQUFLLFNBQVMsQ0FBQyxFQUFHLFNBQVEsQ0FBQyxJQUFJQSxnQkFBZSxDQUFDO0FBQUEsSUFDM0csQ0FBQztBQUNELFdBQU8sVUFBVSxlQUFlLEtBQUssYUFBYSxXQUFXLEtBQ3pELENBQUMsT0FBTyxVQUFVLGVBQWUsS0FBSyxTQUFTLFdBQVcsS0FDMUQsT0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLE9BQU8sWUFBWSxXQUFXO0FBQUEsSUFDbEMsQ0FBQztBQUVMLFdBQU8sS0FBSyxXQUFXLEVBQUUsUUFBUSxTQUFVLEdBQUc7QUFDMUMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxPQUFPLFVBQVUsZUFBZSxLQUFLLFNBQVMsQ0FBQyxFQUFHLFNBQVEsQ0FBQyxJQUFJLFlBQVksQ0FBQztBQUFBLElBQ3hHLENBQUM7QUFBQTtBQUFBOzs7QUMzR0Qsd0JBQ2E7QUFEYjtBQUFBO0FBQUEseUJBQXNDO0FBQy9CLElBQU0sY0FBYyxPQUFPLGFBQWEsSUFBSSxXQUFXLEdBQUcsWUFBWTtBQUN6RSxVQUFJLHNCQUFzQixZQUFZO0FBQ2xDLGVBQU8seUNBQXNCLE9BQU8sVUFBVTtBQUFBLE1BQ2xEO0FBQ0EsVUFBSSxDQUFDLFlBQVk7QUFDYixlQUFPLHlDQUFzQixPQUFPLElBQUksV0FBVyxDQUFDO0FBQUEsTUFDeEQ7QUFDQSxZQUFNLGNBQWMsUUFBUSxnQkFBZ0IsVUFBVTtBQUN0RCxhQUFPLHlDQUFzQixPQUFPLE1BQU0sV0FBVztBQUFBLElBQ3pEO0FBQUE7QUFBQTs7O0FDVkEsSUFBYTtBQUFiO0FBQUE7QUFBTyxJQUFNLGVBQU4sTUFBbUI7QUFBQSxNQUN0QjtBQUFBLE1BQ0EsZ0JBQWdCLGNBQWM7QUFDMUIsYUFBSyxlQUFlO0FBQUEsTUFDeEI7QUFBQSxJQUNKO0FBQUE7QUFBQTs7O0FDTEEsSUFDQUUsdUJBRWE7QUFIYjtBQUFBO0FBQUE7QUFDQSxJQUFBQSx3QkFBMEM7QUFDMUM7QUFDTyxJQUFNLGVBQU4sY0FBMkIsYUFBYTtBQUFBLE1BQzNDO0FBQUEsTUFDQTtBQUFBLE1BQ0EsWUFBWSxTQUFTO0FBQ2pCLGNBQU07QUFDTixhQUFLLFVBQVU7QUFDZixhQUFLLHlCQUF5QixhQUFhLElBQUksUUFBUSxnQkFBZ0I7QUFDdkUsbUJBQVcsT0FBTyxRQUFRLHVCQUF1QixDQUFDLEdBQUc7QUFDakQsZUFBSyx1QkFBdUIsU0FBUyxHQUFHO0FBQUEsUUFDNUM7QUFBQSxNQUNKO0FBQUEsTUFDQSxpQkFBaUI7QUFDYixlQUFPO0FBQUEsTUFDWDtBQUFBLE1BQ0Esa0JBQWtCO0FBQ2QsZUFBTztBQUFBLE1BQ1g7QUFBQSxNQUNBLGdCQUFnQixjQUFjO0FBQzFCLGFBQUssZUFBZTtBQUNwQixhQUFLLFdBQVcsZ0JBQWdCLFlBQVk7QUFDNUMsYUFBSyxhQUFhLGdCQUFnQixZQUFZO0FBQzlDLFlBQUksS0FBSyxnQkFBZ0IsR0FBRztBQUN4QixlQUFLLGdCQUFnQixFQUFFLGdCQUFnQixZQUFZO0FBQUEsUUFDdkQ7QUFBQSxNQUNKO0FBQUEsTUFDQSxzQkFBc0IsU0FBUyxVQUFVO0FBQ3JDLFlBQUksU0FBUyxVQUFVO0FBQ25CLGtCQUFRLFdBQVcsU0FBUyxJQUFJO0FBQ2hDLGtCQUFRLFdBQVcsU0FBUyxJQUFJO0FBQ2hDLGtCQUFRLE9BQU8sU0FBUyxJQUFJLE9BQU8sT0FBTyxTQUFTLElBQUksSUFBSSxJQUFJO0FBQy9ELGtCQUFRLE9BQU8sU0FBUyxJQUFJO0FBQzVCLGtCQUFRLFdBQVcsU0FBUyxJQUFJLFFBQVE7QUFDeEMsa0JBQVEsV0FBVyxTQUFTLElBQUksWUFBWTtBQUM1QyxrQkFBUSxXQUFXLFNBQVMsSUFBSSxZQUFZO0FBQzVDLGNBQUksQ0FBQyxRQUFRLE9BQU87QUFDaEIsb0JBQVEsUUFBUSxDQUFDO0FBQUEsVUFDckI7QUFDQSxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxhQUFhLFFBQVEsR0FBRztBQUN0RCxvQkFBUSxNQUFNLENBQUMsSUFBSTtBQUFBLFVBQ3ZCO0FBQ0EsY0FBSSxTQUFTLFNBQVM7QUFDbEIsdUJBQVcsQ0FBQyxNQUFNLE1BQU0sS0FBSyxPQUFPLFFBQVEsU0FBUyxPQUFPLEdBQUc7QUFDM0Qsc0JBQVEsUUFBUSxJQUFJLElBQUksT0FBTyxLQUFLLElBQUk7QUFBQSxZQUM1QztBQUFBLFVBQ0o7QUFDQSxpQkFBTztBQUFBLFFBQ1gsT0FDSztBQUNELGtCQUFRLFdBQVcsU0FBUztBQUM1QixrQkFBUSxXQUFXLFNBQVM7QUFDNUIsa0JBQVEsT0FBTyxTQUFTLE9BQU8sT0FBTyxTQUFTLElBQUksSUFBSTtBQUN2RCxrQkFBUSxPQUFPLFNBQVM7QUFDeEIsa0JBQVEsUUFBUTtBQUFBLFlBQ1osR0FBRyxTQUFTO0FBQUEsVUFDaEI7QUFDQSxjQUFJLFNBQVMsU0FBUztBQUNsQix1QkFBVyxDQUFDLE1BQU0sS0FBSyxLQUFLLE9BQU8sUUFBUSxTQUFTLE9BQU8sR0FBRztBQUMxRCxzQkFBUSxRQUFRLElBQUksSUFBSTtBQUFBLFlBQzVCO0FBQUEsVUFDSjtBQUNBLGlCQUFPO0FBQUEsUUFDWDtBQUFBLE1BQ0o7QUFBQSxNQUNBLGNBQWMsU0FBUyxpQkFBaUIsT0FBTztBQUMzQyxZQUFJLEtBQUssY0FBYyxtQkFBbUI7QUFDdEM7QUFBQSxRQUNKO0FBQ0EsY0FBTSxVQUFVLGlCQUFpQixHQUFHLGdCQUFnQixLQUFLO0FBQ3pELGNBQU0sV0FBVyxnQkFBZ0IsZ0JBQWdCLFVBQVUsQ0FBQyxDQUFDO0FBQzdELFlBQUksU0FBUyxVQUFVO0FBQ25CLGNBQUksYUFBYSxTQUFTLFdBQVcsQ0FBQztBQUN0QyxjQUFJLE9BQU8sZUFBZSxVQUFVO0FBQ2hDLGtCQUFNLGtCQUFrQixDQUFDLEdBQUcsUUFBUSxlQUFlLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFQyxPQUFNLE1BQU1BLFFBQU8sZ0JBQWdCLEVBQUUsU0FBUztBQUMvRyx1QkFBVyxDQUFDLElBQUksS0FBSyxpQkFBaUI7QUFDbEMsb0JBQU0sY0FBYyxNQUFNLElBQUk7QUFDOUIsa0JBQUksT0FBTyxnQkFBZ0IsVUFBVTtBQUNqQyxzQkFBTSxJQUFJLE1BQU0seUJBQXlCLElBQUksMENBQTBDO0FBQUEsY0FDM0Y7QUFDQSwyQkFBYSxXQUFXLFFBQVEsSUFBSSxJQUFJLEtBQUssV0FBVztBQUFBLFlBQzVEO0FBQ0Esb0JBQVEsV0FBVyxhQUFhLFFBQVE7QUFBQSxVQUM1QztBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsTUFDQSxvQkFBb0IsUUFBUTtBQUN4QixlQUFPO0FBQUEsVUFDSCxnQkFBZ0IsT0FBTztBQUFBLFVBQ3ZCLFdBQVcsT0FBTyxRQUFRLGtCQUFrQixLQUFLLE9BQU8sUUFBUSxtQkFBbUIsS0FBSyxPQUFPLFFBQVEsa0JBQWtCO0FBQUEsVUFDekgsbUJBQW1CLE9BQU8sUUFBUSxZQUFZO0FBQUEsVUFDOUMsTUFBTSxPQUFPLFFBQVEsYUFBYTtBQUFBLFFBQ3RDO0FBQUEsTUFDSjtBQUFBLE1BQ0EsTUFBTSxxQkFBcUIsRUFBRSxhQUFhLGVBQWUsZUFBZ0IsR0FBRztBQUN4RSxjQUFNLG1CQUFtQixNQUFNLEtBQUssMEJBQTBCO0FBQzlELGVBQU8saUJBQWlCLHFCQUFxQjtBQUFBLFVBQ3pDO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNKLENBQUM7QUFBQSxNQUNMO0FBQUEsTUFDQSxNQUFNLHVCQUF1QixFQUFFLFVBQVUsZ0JBQWdCLHlCQUEwQixHQUFHO0FBQ2xGLGNBQU0sbUJBQW1CLE1BQU0sS0FBSywwQkFBMEI7QUFDOUQsZUFBTyxpQkFBaUIsdUJBQXVCO0FBQUEsVUFDM0M7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0osQ0FBQztBQUFBLE1BQ0w7QUFBQSxNQUNBLE1BQU0sNEJBQTRCO0FBQzlCLGNBQU0sRUFBRSxpQkFBaUIsSUFBSSxNQUFNLE9BQU8sOEJBQTRCO0FBQ3RFLGVBQU8sSUFBSSxpQkFBaUI7QUFBQSxVQUN4QixZQUFZLEtBQUsseUJBQXlCO0FBQUEsVUFDMUMsWUFBWSxLQUFLO0FBQUEsVUFDakIsY0FBYyxLQUFLO0FBQUEsVUFDbkIsY0FBYyxLQUFLO0FBQUEsVUFDbkIsb0JBQW9CLEtBQUssc0JBQXNCO0FBQUEsUUFDbkQsQ0FBQztBQUFBLE1BQ0w7QUFBQSxNQUNBLHdCQUF3QjtBQUNwQixjQUFNLElBQUksTUFBTSw0QkFBNEIsS0FBSyxZQUFZLElBQUksa0RBQWtEO0FBQUEsTUFDdkg7QUFBQSxNQUNBLE1BQU0sdUJBQXVCLFFBQVEsU0FBUyxVQUFVLE1BQU0sTUFBTTtBQUNoRSxhQUFLO0FBQ0wsYUFBSztBQUNMLGFBQUs7QUFDTCxhQUFLO0FBQ0wsYUFBSztBQUNMLGVBQU8sQ0FBQztBQUFBLE1BQ1o7QUFBQSxNQUNBLDJCQUEyQjtBQUN2QixjQUFNLFVBQVUsS0FBSztBQUNyQixZQUFJLENBQUMsUUFBUSx1QkFBdUI7QUFDaEMsZ0JBQU0sSUFBSSxNQUFNLDZFQUE2RTtBQUFBLFFBQ2pHO0FBQ0EsZUFBTyxRQUFRO0FBQUEsTUFDbkI7QUFBQSxJQUNKO0FBQUE7QUFBQTs7O0FDM0lBLElBRUFDLHVCQUNBQyxxQkFJYTtBQVBiO0FBQUE7QUFBQTtBQUNBO0FBQ0EsSUFBQUQsd0JBQTRCO0FBQzVCLElBQUFDLHNCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDTyxJQUFNLHNCQUFOLGNBQWtDLGFBQWE7QUFBQSxNQUNsRCxNQUFNLGlCQUFpQixpQkFBaUIsUUFBUSxTQUFTO0FBQ3JELGNBQU0sUUFBUSxVQUFVLE9BQU8sV0FBVyxXQUFXLFNBQVMsQ0FBQztBQUMvRCxjQUFNLGFBQWEsS0FBSztBQUN4QixjQUFNLFFBQVEsQ0FBQztBQUNmLGNBQU0sVUFBVSxDQUFDO0FBQ2pCLGNBQU0sV0FBVyxNQUFNLFFBQVEsU0FBUztBQUN4QyxjQUFNLEtBQUssaUJBQWlCLEdBQUcsaUJBQWlCLEtBQUs7QUFDckQsY0FBTSxxQkFBcUIsQ0FBQztBQUM1QixjQUFNLHVCQUF1QixDQUFDO0FBQzlCLFlBQUksMEJBQTBCO0FBQzlCLFlBQUk7QUFDSixjQUFNLFVBQVUsSUFBSSxrQ0FBWTtBQUFBLFVBQzVCLFVBQVU7QUFBQSxVQUNWLFVBQVU7QUFBQSxVQUNWLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFVBQ0EsTUFBTTtBQUFBLFFBQ1YsQ0FBQztBQUNELFlBQUksVUFBVTtBQUNWLGVBQUssc0JBQXNCLFNBQVMsUUFBUTtBQUM1QyxlQUFLLGNBQWMsU0FBUyxpQkFBaUIsS0FBSztBQUNsRCxnQkFBTSxXQUFXLGdCQUFnQixnQkFBZ0IsTUFBTTtBQUN2RCxjQUFJLFNBQVMsTUFBTTtBQUNmLG9CQUFRLFNBQVMsU0FBUyxLQUFLLENBQUM7QUFDaEMsa0JBQU0sQ0FBQyxNQUFNLE1BQU0sSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFLE1BQU0sR0FBRztBQUNqRCxnQkFBSSxRQUFRLFFBQVEsS0FBSztBQUNyQixzQkFBUSxPQUFPO0FBQUEsWUFDbkIsT0FDSztBQUNELHNCQUFRLFFBQVE7QUFBQSxZQUNwQjtBQUNBLGtCQUFNLG9CQUFvQixJQUFJLGdCQUFnQixVQUFVLEVBQUU7QUFDMUQsbUJBQU8sT0FBTyxPQUFPLE9BQU8sWUFBWSxpQkFBaUIsQ0FBQztBQUFBLFVBQzlEO0FBQUEsUUFDSjtBQUNBLG1CQUFXLENBQUMsWUFBWSxRQUFRLEtBQUssR0FBRyxlQUFlLEdBQUc7QUFDdEQsZ0JBQU0sZUFBZSxTQUFTLGdCQUFnQixLQUFLLENBQUM7QUFDcEQsZ0JBQU0sbUJBQW1CLE1BQU0sVUFBVTtBQUN6QyxjQUFJLG9CQUFvQixRQUFRLENBQUMsU0FBUyxtQkFBbUIsR0FBRztBQUM1RCxnQkFBSSxhQUFhLFdBQVc7QUFDeEIsa0JBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxVQUFVLElBQUksS0FBSyxRQUFRLEtBQUssU0FBUyxJQUFJLFVBQVUsR0FBRyxHQUFHO0FBQ3ZGLHNCQUFNLElBQUksTUFBTSwyQ0FBMkMsVUFBVSxHQUFHO0FBQUEsY0FDNUU7QUFBQSxZQUNKO0FBQ0E7QUFBQSxVQUNKO0FBQ0EsY0FBSSxhQUFhLGFBQWE7QUFDMUIsa0JBQU0sY0FBYyxTQUFTLFlBQVk7QUFDekMsZ0JBQUksYUFBYTtBQUNiLG9CQUFNLGdCQUFnQixTQUFTLGVBQWU7QUFDOUMsa0JBQUksZUFBZTtBQUNmLG9CQUFJLE1BQU0sVUFBVSxHQUFHO0FBQ25CLDRCQUFVLE1BQU0sS0FBSyxxQkFBcUI7QUFBQSxvQkFDdEMsYUFBYSxNQUFNLFVBQVU7QUFBQSxvQkFDN0IsZUFBZTtBQUFBLGtCQUNuQixDQUFDO0FBQUEsZ0JBQ0w7QUFBQSxjQUNKLE9BQ0s7QUFDRCwwQkFBVTtBQUFBLGNBQ2Q7QUFBQSxZQUNKLE9BQ0s7QUFDRCx5QkFBVyxNQUFNLFVBQVUsZ0JBQWdCO0FBQzNDLHdCQUFVLFdBQVcsTUFBTTtBQUFBLFlBQy9CO0FBQUEsVUFDSixXQUNTLGFBQWEsV0FBVztBQUM3Qix1QkFBVyxNQUFNLFVBQVUsZ0JBQWdCO0FBQzNDLGtCQUFNLGNBQWMsV0FBVyxNQUFNO0FBQ3JDLGdCQUFJLFFBQVEsS0FBSyxTQUFTLElBQUksVUFBVSxJQUFJLEdBQUc7QUFDM0Msc0JBQVEsT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLFVBQVUsTUFBTSxZQUFZLE1BQU0sR0FBRyxFQUFFLElBQUksMEJBQTBCLEVBQUUsS0FBSyxHQUFHLENBQUM7QUFBQSxZQUM1SCxXQUNTLFFBQVEsS0FBSyxTQUFTLElBQUksVUFBVSxHQUFHLEdBQUc7QUFDL0Msc0JBQVEsT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLFVBQVUsS0FBSywyQkFBMkIsV0FBVyxDQUFDO0FBQUEsWUFDbEc7QUFBQSxVQUNKLFdBQ1MsYUFBYSxZQUFZO0FBQzlCLHVCQUFXLE1BQU0sVUFBVSxnQkFBZ0I7QUFDM0Msb0JBQVEsYUFBYSxXQUFXLFlBQVksQ0FBQyxJQUFJLE9BQU8sV0FBVyxNQUFNLENBQUM7QUFBQSxVQUM5RSxXQUNTLE9BQU8sYUFBYSxzQkFBc0IsVUFBVTtBQUN6RCx1QkFBVyxDQUFDLEtBQUssR0FBRyxLQUFLLE9BQU8sUUFBUSxnQkFBZ0IsR0FBRztBQUN2RCxvQkFBTSxVQUFVLGFBQWEsb0JBQW9CO0FBQ2pELHlCQUFXLE1BQU0sQ0FBQyxTQUFTLGVBQWUsR0FBRyxFQUFFLFlBQVksUUFBUSxDQUFDLEdBQUcsR0FBRztBQUMxRSxzQkFBUSxRQUFRLFlBQVksQ0FBQyxJQUFJLFdBQVcsTUFBTTtBQUFBLFlBQ3REO0FBQUEsVUFDSixXQUNTLGFBQWEsYUFBYSxhQUFhLGlCQUFpQjtBQUM3RCxpQkFBSyxlQUFlLFVBQVUsa0JBQWtCLEtBQUs7QUFBQSxVQUN6RCxPQUNLO0FBQ0Qsc0NBQTBCO0FBQzFCLCtCQUFtQixLQUFLLFVBQVU7QUFDbEMsaUNBQXFCLEtBQUssUUFBUTtBQUFBLFVBQ3RDO0FBQUEsUUFDSjtBQUNBLFlBQUksMkJBQTJCLE9BQU87QUFDbEMsZ0JBQU0sQ0FBQyxXQUFXLElBQUksS0FBSyxHQUFHLFFBQVEsSUFBSSxLQUFLLFlBQVksTUFBTSxHQUFHO0FBQ3BFLGdCQUFNLGtCQUFrQixHQUFHLFVBQVUsRUFBRSxDQUFDO0FBQ3hDLGdCQUFNLGdCQUFnQjtBQUFBLFlBQ2xCO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBLEdBQUcsZ0JBQWdCO0FBQUEsWUFDbkI7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0o7QUFDQSxjQUFJLGlCQUFpQjtBQUNqQiwwQkFBYyxDQUFDLElBQUk7QUFBQSxVQUN2QixPQUNLO0FBQ0QsMEJBQWMsSUFBSTtBQUFBLFVBQ3RCO0FBQ0EscUJBQVcsTUFBTSxlQUFlLEtBQUs7QUFDckMsb0JBQVUsV0FBVyxNQUFNO0FBQUEsUUFDL0I7QUFDQSxnQkFBUSxVQUFVO0FBQ2xCLGdCQUFRLFFBQVE7QUFDaEIsZ0JBQVEsT0FBTztBQUNmLGVBQU87QUFBQSxNQUNYO0FBQUEsTUFDQSxlQUFlLElBQUksTUFBTSxPQUFPO0FBQzVCLGNBQU0sYUFBYSxLQUFLO0FBQ3hCLGNBQU0sU0FBUyxHQUFHLGdCQUFnQjtBQUNsQyxZQUFJLE9BQU8saUJBQWlCO0FBQ3hCLHFCQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssT0FBTyxRQUFRLElBQUksR0FBRztBQUMzQyxnQkFBSSxFQUFFLE9BQU8sUUFBUTtBQUNqQixvQkFBTSxjQUFjLEdBQUcsZUFBZTtBQUN0QyxxQkFBTyxPQUFPLFlBQVksZ0JBQWdCLEdBQUc7QUFBQSxnQkFDekMsR0FBRztBQUFBLGdCQUNILFdBQVc7QUFBQSxnQkFDWCxpQkFBaUI7QUFBQSxjQUNyQixDQUFDO0FBQ0QsbUJBQUssZUFBZSxhQUFhLEtBQUssS0FBSztBQUFBLFlBQy9DO0FBQUEsVUFDSjtBQUNBO0FBQUEsUUFDSjtBQUNBLFlBQUksR0FBRyxhQUFhLEdBQUc7QUFDbkIsZ0JBQU0sU0FBUyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsRUFBRTtBQUN0QyxnQkFBTSxTQUFTLENBQUM7QUFDaEIscUJBQVcsUUFBUSxNQUFNO0FBQ3JCLHVCQUFXLE1BQU0sQ0FBQyxHQUFHLGVBQWUsR0FBRyxNQUFNLEdBQUcsSUFBSTtBQUNwRCxrQkFBTSxlQUFlLFdBQVcsTUFBTTtBQUN0QyxnQkFBSSxVQUFVLGlCQUFpQixRQUFXO0FBQ3RDLHFCQUFPLEtBQUssWUFBWTtBQUFBLFlBQzVCO0FBQUEsVUFDSjtBQUNBLGdCQUFNLE9BQU8sU0FBUyxJQUFJO0FBQUEsUUFDOUIsT0FDSztBQUNELHFCQUFXLE1BQU0sQ0FBQyxJQUFJLE1BQU0sR0FBRyxJQUFJO0FBQ25DLGdCQUFNLE9BQU8sU0FBUyxJQUFJLFdBQVcsTUFBTTtBQUFBLFFBQy9DO0FBQUEsTUFDSjtBQUFBLE1BQ0EsTUFBTSxvQkFBb0IsaUJBQWlCLFNBQVMsVUFBVTtBQUMxRCxjQUFNLGVBQWUsS0FBSztBQUMxQixjQUFNLEtBQUssaUJBQWlCLEdBQUcsZ0JBQWdCLE1BQU07QUFDckQsY0FBTSxhQUFhLENBQUM7QUFDcEIsWUFBSSxTQUFTLGNBQWMsS0FBSztBQUM1QixnQkFBTSxRQUFRLE1BQU0sWUFBWSxTQUFTLE1BQU0sT0FBTztBQUN0RCxjQUFJLE1BQU0sYUFBYSxHQUFHO0FBQ3RCLG1CQUFPLE9BQU8sWUFBWSxNQUFNLGFBQWEsS0FBSyxJQUFJLEtBQUssQ0FBQztBQUFBLFVBQ2hFO0FBQ0EsZ0JBQU0sS0FBSyxZQUFZLGlCQUFpQixTQUFTLFVBQVUsWUFBWSxLQUFLLG9CQUFvQixRQUFRLENBQUM7QUFDekcsZ0JBQU0sSUFBSSxNQUFNLHVFQUF1RTtBQUFBLFFBQzNGO0FBQ0EsbUJBQVcsVUFBVSxTQUFTLFNBQVM7QUFDbkMsZ0JBQU0sUUFBUSxTQUFTLFFBQVEsTUFBTTtBQUNyQyxpQkFBTyxTQUFTLFFBQVEsTUFBTTtBQUM5QixtQkFBUyxRQUFRLE9BQU8sWUFBWSxDQUFDLElBQUk7QUFBQSxRQUM3QztBQUNBLGNBQU0sd0JBQXdCLE1BQU0sS0FBSyx1QkFBdUIsSUFBSSxTQUFTLFVBQVUsVUFBVTtBQUNqRyxZQUFJLHNCQUFzQixRQUFRO0FBQzlCLGdCQUFNLFFBQVEsTUFBTSxZQUFZLFNBQVMsTUFBTSxPQUFPO0FBQ3RELGNBQUksTUFBTSxhQUFhLEdBQUc7QUFDdEIsa0JBQU0sZUFBZSxNQUFNLGFBQWEsS0FBSyxJQUFJLEtBQUs7QUFDdEQsdUJBQVdDLFdBQVUsdUJBQXVCO0FBQ3hDLGtCQUFJLGFBQWFBLE9BQU0sS0FBSyxNQUFNO0FBQzlCLDJCQUFXQSxPQUFNLElBQUksYUFBYUEsT0FBTTtBQUFBLGNBQzVDO0FBQUEsWUFDSjtBQUFBLFVBQ0o7QUFBQSxRQUNKLFdBQ1Msc0JBQXNCLHFCQUFxQjtBQUNoRCxnQkFBTSxZQUFZLFNBQVMsTUFBTSxPQUFPO0FBQUEsUUFDNUM7QUFDQSxtQkFBVyxZQUFZLEtBQUssb0JBQW9CLFFBQVE7QUFDeEQsZUFBTztBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU0sdUJBQXVCLFFBQVEsU0FBUyxVQUFVLE1BQU0sTUFBTTtBQUNoRSxZQUFJO0FBQ0osWUFBSSxnQkFBZ0IsS0FBSztBQUNyQix1QkFBYTtBQUFBLFFBQ2pCLE9BQ0s7QUFDRCx1QkFBYTtBQUFBLFFBQ2pCO0FBQ0EsWUFBSSxzQkFBc0I7QUFDMUIsY0FBTSxlQUFlLEtBQUs7QUFDMUIsY0FBTSxLQUFLLGlCQUFpQixHQUFHLE1BQU07QUFDckMsY0FBTSx3QkFBd0IsQ0FBQztBQUMvQixtQkFBVyxDQUFDLFlBQVksWUFBWSxLQUFLLEdBQUcsZUFBZSxHQUFHO0FBQzFELGdCQUFNLGVBQWUsYUFBYSxnQkFBZ0I7QUFDbEQsY0FBSSxhQUFhLGFBQWE7QUFDMUIsa0NBQXNCO0FBQ3RCLGtCQUFNLGNBQWMsYUFBYSxZQUFZO0FBQzdDLGdCQUFJLGFBQWE7QUFDYixvQkFBTSxnQkFBZ0IsYUFBYSxlQUFlO0FBQ2xELGtCQUFJLGVBQWU7QUFDZiwyQkFBVyxVQUFVLElBQUksTUFBTSxLQUFLLHVCQUF1QjtBQUFBLGtCQUN2RDtBQUFBLGtCQUNBLGdCQUFnQjtBQUFBLGdCQUNwQixDQUFDO0FBQUEsY0FDTCxPQUNLO0FBQ0QsMkJBQVcsVUFBVSxRQUFJLG9DQUFlLFNBQVMsSUFBSTtBQUFBLGNBQ3pEO0FBQUEsWUFDSixXQUNTLFNBQVMsTUFBTTtBQUNwQixvQkFBTSxRQUFRLE1BQU0sWUFBWSxTQUFTLE1BQU0sT0FBTztBQUN0RCxrQkFBSSxNQUFNLGFBQWEsR0FBRztBQUN0QiwyQkFBVyxVQUFVLElBQUksTUFBTSxhQUFhLEtBQUssY0FBYyxLQUFLO0FBQUEsY0FDeEU7QUFBQSxZQUNKO0FBQUEsVUFDSixXQUNTLGFBQWEsWUFBWTtBQUM5QixrQkFBTSxNQUFNLE9BQU8sYUFBYSxVQUFVLEVBQUUsWUFBWTtBQUN4RCxrQkFBTSxRQUFRLFNBQVMsUUFBUSxHQUFHO0FBQ2xDLGdCQUFJLFFBQVEsT0FBTztBQUNmLGtCQUFJLGFBQWEsYUFBYSxHQUFHO0FBQzdCLHNCQUFNLHdCQUF3QixhQUFhLGVBQWU7QUFDMUQsc0NBQXNCLGdCQUFnQixFQUFFLGFBQWE7QUFDckQsb0JBQUk7QUFDSixvQkFBSSxzQkFBc0Isa0JBQWtCLEtBQ3hDLHNCQUFzQixVQUFVLE1BQU0sR0FBRztBQUN6Qyw2QkFBVyxXQUFXLE9BQU8sS0FBSyxDQUFDO0FBQUEsZ0JBQ3ZDLE9BQ0s7QUFDRCw2QkFBVyxZQUFZLEtBQUs7QUFBQSxnQkFDaEM7QUFDQSxzQkFBTUMsUUFBTyxDQUFDO0FBQ2QsMkJBQVcsV0FBVyxVQUFVO0FBQzVCLGtCQUFBQSxNQUFLLEtBQUssTUFBTSxhQUFhLEtBQUssdUJBQXVCLFFBQVEsS0FBSyxDQUFDLENBQUM7QUFBQSxnQkFDNUU7QUFDQSwyQkFBVyxVQUFVLElBQUlBO0FBQUEsY0FDN0IsT0FDSztBQUNELDJCQUFXLFVBQVUsSUFBSSxNQUFNLGFBQWEsS0FBSyxjQUFjLEtBQUs7QUFBQSxjQUN4RTtBQUFBLFlBQ0o7QUFBQSxVQUNKLFdBQ1MsYUFBYSxzQkFBc0IsUUFBVztBQUNuRCx1QkFBVyxVQUFVLElBQUksQ0FBQztBQUMxQix1QkFBVyxDQUFDLFFBQVEsS0FBSyxLQUFLLE9BQU8sUUFBUSxTQUFTLE9BQU8sR0FBRztBQUM1RCxrQkFBSSxPQUFPLFdBQVcsYUFBYSxpQkFBaUIsR0FBRztBQUNuRCxzQkFBTSxjQUFjLGFBQWEsZUFBZTtBQUNoRCw0QkFBWSxnQkFBZ0IsRUFBRSxhQUFhO0FBQzNDLDJCQUFXLFVBQVUsRUFBRSxPQUFPLE1BQU0sYUFBYSxrQkFBa0IsTUFBTSxDQUFDLElBQUksTUFBTSxhQUFhLEtBQUssYUFBYSxLQUFLO0FBQUEsY0FDNUg7QUFBQSxZQUNKO0FBQUEsVUFDSixXQUNTLGFBQWEsa0JBQWtCO0FBQ3BDLHVCQUFXLFVBQVUsSUFBSSxTQUFTO0FBQUEsVUFDdEMsT0FDSztBQUNELGtDQUFzQixLQUFLLFVBQVU7QUFBQSxVQUN6QztBQUFBLFFBQ0o7QUFDQSw4QkFBc0Isc0JBQXNCO0FBQzVDLGVBQU87QUFBQSxNQUNYO0FBQUEsSUFDSjtBQUFBO0FBQUE7OztBQzdSQSxJQUNBQyx1QkFHYTtBQUpiO0FBQUE7QUFBQTtBQUNBLElBQUFBLHdCQUE0QjtBQUM1QjtBQUNBO0FBQ08sSUFBTSxjQUFOLGNBQTBCLGFBQWE7QUFBQSxNQUMxQyxNQUFNLGlCQUFpQixpQkFBaUIsUUFBUSxTQUFTO0FBQ3JELGNBQU0sYUFBYSxLQUFLO0FBQ3hCLGNBQU0sUUFBUSxDQUFDO0FBQ2YsY0FBTSxVQUFVLENBQUM7QUFDakIsY0FBTSxXQUFXLE1BQU0sUUFBUSxTQUFTO0FBQ3hDLGNBQU0sS0FBSyxpQkFBaUIsR0FBRyxpQkFBaUIsS0FBSztBQUNyRCxjQUFNLFNBQVMsR0FBRyxVQUFVO0FBQzVCLFlBQUk7QUFDSixjQUFNLFFBQVEsVUFBVSxPQUFPLFdBQVcsV0FBVyxTQUFTLENBQUM7QUFDL0QsY0FBTSxVQUFVLElBQUksa0NBQVk7QUFBQSxVQUM1QixVQUFVO0FBQUEsVUFDVixVQUFVO0FBQUEsVUFDVixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxVQUNBLE1BQU07QUFBQSxRQUNWLENBQUM7QUFDRCxZQUFJLFVBQVU7QUFDVixlQUFLLHNCQUFzQixTQUFTLFFBQVE7QUFDNUMsZUFBSyxjQUFjLFNBQVMsaUJBQWlCLEtBQUs7QUFBQSxRQUN0RDtBQUNBLFlBQUksT0FBTztBQUNQLGdCQUFNLG9CQUFvQixHQUFHLHFCQUFxQjtBQUNsRCxjQUFJLG1CQUFtQjtBQUNuQixnQkFBSSxNQUFNLGlCQUFpQixHQUFHO0FBQzFCLG9CQUFNLGlCQUFpQixDQUFDO0FBQ3hCLHlCQUFXLENBQUMsWUFBWSxZQUFZLEtBQUssR0FBRyxlQUFlLEdBQUc7QUFDMUQsb0JBQUksZUFBZSxxQkFBcUIsTUFBTSxVQUFVLEdBQUc7QUFDdkQsNkJBQVcsTUFBTSxjQUFjLE1BQU0sVUFBVSxDQUFDO0FBQ2hELGlDQUFlLFVBQVUsSUFBSSxXQUFXLE1BQU07QUFBQSxnQkFDbEQ7QUFBQSxjQUNKO0FBQ0Esd0JBQVUsTUFBTSxLQUFLLHFCQUFxQjtBQUFBLGdCQUN0QyxhQUFhLE1BQU0saUJBQWlCO0FBQUEsZ0JBQ3BDLGVBQWU7QUFBQSxnQkFDZjtBQUFBLGNBQ0osQ0FBQztBQUFBLFlBQ0w7QUFBQSxVQUNKLE9BQ0s7QUFDRCx1QkFBVyxNQUFNLFFBQVEsS0FBSztBQUM5QixzQkFBVSxXQUFXLE1BQU07QUFBQSxVQUMvQjtBQUFBLFFBQ0o7QUFDQSxnQkFBUSxVQUFVLE9BQU8sT0FBTyxRQUFRLFNBQVMsT0FBTztBQUN4RCxnQkFBUSxRQUFRO0FBQ2hCLGdCQUFRLE9BQU87QUFDZixnQkFBUSxTQUFTO0FBQ2pCLGVBQU87QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNLG9CQUFvQixpQkFBaUIsU0FBUyxVQUFVO0FBQzFELGNBQU0sZUFBZSxLQUFLO0FBQzFCLGNBQU0sS0FBSyxpQkFBaUIsR0FBRyxnQkFBZ0IsTUFBTTtBQUNyRCxjQUFNLGFBQWEsQ0FBQztBQUNwQixZQUFJLFNBQVMsY0FBYyxLQUFLO0FBQzVCLGdCQUFNLFFBQVEsTUFBTSxZQUFZLFNBQVMsTUFBTSxPQUFPO0FBQ3RELGNBQUksTUFBTSxhQUFhLEdBQUc7QUFDdEIsbUJBQU8sT0FBTyxZQUFZLE1BQU0sYUFBYSxLQUFLLElBQUksS0FBSyxDQUFDO0FBQUEsVUFDaEU7QUFDQSxnQkFBTSxLQUFLLFlBQVksaUJBQWlCLFNBQVMsVUFBVSxZQUFZLEtBQUssb0JBQW9CLFFBQVEsQ0FBQztBQUN6RyxnQkFBTSxJQUFJLE1BQU0sc0VBQXNFO0FBQUEsUUFDMUY7QUFDQSxtQkFBVyxVQUFVLFNBQVMsU0FBUztBQUNuQyxnQkFBTSxRQUFRLFNBQVMsUUFBUSxNQUFNO0FBQ3JDLGlCQUFPLFNBQVMsUUFBUSxNQUFNO0FBQzlCLG1CQUFTLFFBQVEsT0FBTyxZQUFZLENBQUMsSUFBSTtBQUFBLFFBQzdDO0FBQ0EsY0FBTSxvQkFBb0IsR0FBRyxxQkFBcUI7QUFDbEQsWUFBSSxtQkFBbUI7QUFDbkIscUJBQVcsaUJBQWlCLElBQUksTUFBTSxLQUFLLHVCQUF1QjtBQUFBLFlBQzlEO0FBQUEsWUFDQSxnQkFBZ0I7QUFBQSxZQUNoQiwwQkFBMEI7QUFBQSxVQUM5QixDQUFDO0FBQUEsUUFDTCxPQUNLO0FBQ0QsZ0JBQU0sUUFBUSxNQUFNLFlBQVksU0FBUyxNQUFNLE9BQU87QUFDdEQsY0FBSSxNQUFNLGFBQWEsR0FBRztBQUN0QixtQkFBTyxPQUFPLFlBQVksTUFBTSxhQUFhLEtBQUssSUFBSSxLQUFLLENBQUM7QUFBQSxVQUNoRTtBQUFBLFFBQ0o7QUFDQSxtQkFBVyxZQUFZLEtBQUssb0JBQW9CLFFBQVE7QUFDeEQsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNKO0FBQUE7QUFBQTs7O0FDM0ZPLFNBQVMseUJBQXlCLElBQUksVUFBVTtBQUNuRCxNQUFJLFNBQVMsZ0JBQWdCLFVBQVU7QUFDbkMsUUFBSSxHQUFHLGtCQUFrQixNQUNwQixHQUFHLFVBQVUsTUFBTSxLQUNoQixHQUFHLFVBQVUsTUFBTSxLQUNuQixHQUFHLFVBQVUsTUFBTSxJQUFJO0FBQzNCLGFBQU8sR0FBRyxVQUFVO0FBQUEsSUFDeEI7QUFBQSxFQUNKO0FBQ0EsUUFBTSxFQUFFLFdBQVcsbUJBQW1CLFlBQVksVUFBVSxJQUFJLEdBQUcsZ0JBQWdCO0FBQ25GLFFBQU0sZ0JBQWdCLFNBQVMsZUFDekIsT0FBTyxzQkFBc0IsWUFBWSxRQUFRLFVBQVUsSUFDdkQsSUFDQSxRQUFRLFNBQVMsS0FBSyxRQUFRLFNBQVMsSUFDbkMsSUFDQSxTQUNSO0FBQ04sU0FBTyxpQkFBaUIsU0FBUyxnQkFBZ0I7QUFDckQ7QUFsQkE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBRUEsb0JBQ0Esa0JBR2E7QUFOYjtBQUFBO0FBQUE7QUFDQTtBQUNBLHlCQUEyQjtBQUMzQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNPLElBQU0sOEJBQU4sY0FBMEMsYUFBYTtBQUFBLE1BQzFEO0FBQUEsTUFDQSxZQUFZLFVBQVU7QUFDbEIsY0FBTTtBQUNOLGFBQUssV0FBVztBQUFBLE1BQ3BCO0FBQUEsTUFDQSxLQUFLLFNBQVMsTUFBTTtBQUNoQixjQUFNLEtBQUssaUJBQWlCLEdBQUcsT0FBTztBQUN0QyxZQUFJLEdBQUcsYUFBYSxHQUFHO0FBQ25CLGlCQUFPLFlBQVksSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUM7QUFBQSxRQUMvRTtBQUNBLFlBQUksR0FBRyxhQUFhLEdBQUc7QUFDbkIsa0JBQVEsS0FBSyxjQUFjLGlCQUFpQiwrQkFBWSxJQUFJO0FBQUEsUUFDaEU7QUFDQSxZQUFJLEdBQUcsa0JBQWtCLEdBQUc7QUFDeEIsZ0JBQU1DLFVBQVMseUJBQXlCLElBQUksS0FBSyxRQUFRO0FBQ3pELGtCQUFRQSxTQUFRO0FBQUEsWUFDWixLQUFLO0FBQ0QscUJBQU8sZ0NBQWdDLElBQUk7QUFBQSxZQUMvQyxLQUFLO0FBQ0QscUJBQU8sc0JBQXNCLElBQUk7QUFBQSxZQUNyQyxLQUFLO0FBQ0QscUJBQU8scUJBQXFCLElBQUk7QUFBQSxZQUNwQztBQUNJLHNCQUFRLEtBQUssa0VBQWtFLElBQUk7QUFDbkYscUJBQU8sSUFBSSxLQUFLLElBQUk7QUFBQSxVQUM1QjtBQUFBLFFBQ0o7QUFDQSxZQUFJLEdBQUcsZUFBZSxHQUFHO0FBQ3JCLGdCQUFNLFlBQVksR0FBRyxnQkFBZ0IsRUFBRTtBQUN2QyxjQUFJLG9CQUFvQjtBQUN4QixjQUFJLFdBQVc7QUFDWCxnQkFBSSxHQUFHLGdCQUFnQixFQUFFLFlBQVk7QUFDakMsa0NBQW9CLEtBQUssYUFBYSxpQkFBaUI7QUFBQSxZQUMzRDtBQUNBLGtCQUFNLFNBQVMsY0FBYyxzQkFBc0IsVUFBVSxTQUFTLE9BQU87QUFDN0UsZ0JBQUksUUFBUTtBQUNSLGtDQUFvQixlQUFlLEtBQUssaUJBQWlCO0FBQUEsWUFDN0Q7QUFDQSxtQkFBTztBQUFBLFVBQ1g7QUFBQSxRQUNKO0FBQ0EsWUFBSSxHQUFHLGdCQUFnQixHQUFHO0FBQ3RCLGlCQUFPLE9BQU8sSUFBSTtBQUFBLFFBQ3RCO0FBQ0EsWUFBSSxHQUFHLG1CQUFtQixHQUFHO0FBQ3pCLGlCQUFPLE9BQU8sSUFBSTtBQUFBLFFBQ3RCO0FBQ0EsWUFBSSxHQUFHLG1CQUFtQixHQUFHO0FBQ3pCLGlCQUFPLElBQUksYUFBYSxNQUFNLFlBQVk7QUFBQSxRQUM5QztBQUNBLFlBQUksR0FBRyxnQkFBZ0IsR0FBRztBQUN0QixpQkFBTyxPQUFPLElBQUksRUFBRSxZQUFZLE1BQU07QUFBQSxRQUMxQztBQUNBLGVBQU87QUFBQSxNQUNYO0FBQUEsTUFDQSxhQUFhLGNBQWM7QUFDdkIsZ0JBQVEsS0FBSyxjQUFjLGVBQWUsMEJBQVMsS0FBSyxjQUFjLGlCQUFpQiwrQkFBWSxZQUFZLENBQUM7QUFBQSxNQUNwSDtBQUFBLElBQ0o7QUFBQTtBQUFBOzs7QUNqRUEsSUFDQUMsbUJBR2E7QUFKYjtBQUFBO0FBQUE7QUFDQSxJQUFBQSxvQkFBaUM7QUFDakM7QUFDQTtBQUNPLElBQU0sb0NBQU4sY0FBZ0QsYUFBYTtBQUFBLE1BQ2hFO0FBQUEsTUFDQTtBQUFBLE1BQ0EsWUFBWSxtQkFBbUIsZUFBZTtBQUMxQyxjQUFNO0FBQ04sYUFBSyxvQkFBb0I7QUFDekIsYUFBSyxxQkFBcUIsSUFBSSw0QkFBNEIsYUFBYTtBQUFBLE1BQzNFO0FBQUEsTUFDQSxnQkFBZ0IsY0FBYztBQUMxQixhQUFLLG1CQUFtQixnQkFBZ0IsWUFBWTtBQUNwRCxhQUFLLGtCQUFrQixnQkFBZ0IsWUFBWTtBQUNuRCxhQUFLLGVBQWU7QUFBQSxNQUN4QjtBQUFBLE1BQ0EsS0FBSyxRQUFRLE1BQU07QUFDZixjQUFNLEtBQUssaUJBQWlCLEdBQUcsTUFBTTtBQUNyQyxjQUFNLFNBQVMsR0FBRyxnQkFBZ0I7QUFDbEMsY0FBTSxXQUFXLEtBQUssY0FBYyxlQUFlO0FBQ25ELFlBQUksT0FBTyxjQUFjLE9BQU8sa0JBQWtCO0FBQzlDLGlCQUFPLEtBQUssbUJBQW1CLEtBQUssSUFBSSxTQUFTLElBQUksQ0FBQztBQUFBLFFBQzFEO0FBQ0EsWUFBSSxPQUFPLGFBQWE7QUFDcEIsY0FBSSxHQUFHLGFBQWEsR0FBRztBQUNuQixrQkFBTSxVQUFVLEtBQUssY0FBYyxlQUFlO0FBQ2xELGdCQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzFCLHFCQUFPLFFBQVEsSUFBSTtBQUFBLFlBQ3ZCO0FBQ0EsbUJBQU87QUFBQSxVQUNYLFdBQ1MsR0FBRyxlQUFlLEdBQUc7QUFDMUIsZ0JBQUksZ0JBQWdCLE1BQU07QUFDdEIscUJBQU8sU0FBUyxJQUFJO0FBQUEsWUFDeEI7QUFDQSxtQkFBTztBQUFBLFVBQ1g7QUFBQSxRQUNKO0FBQ0EsZUFBTyxLQUFLLGtCQUFrQixLQUFLLElBQUksSUFBSTtBQUFBLE1BQy9DO0FBQUEsSUFDSjtBQUFBO0FBQUE7OztBQ3pDQSxJQUVBQyxxQkFHYTtBQUxiO0FBQUE7QUFBQTtBQUNBO0FBQ0EsSUFBQUEsc0JBQXlCO0FBQ3pCO0FBQ0E7QUFDTyxJQUFNLDBCQUFOLGNBQXNDLGFBQWE7QUFBQSxNQUN0RDtBQUFBLE1BQ0EsZUFBZTtBQUFBLE1BQ2YsWUFBWSxVQUFVO0FBQ2xCLGNBQU07QUFDTixhQUFLLFdBQVc7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsTUFBTSxRQUFRLE9BQU87QUFDakIsY0FBTSxLQUFLLGlCQUFpQixHQUFHLE1BQU07QUFDckMsZ0JBQVEsT0FBTyxPQUFPO0FBQUEsVUFDbEIsS0FBSztBQUNELGdCQUFJLFVBQVUsTUFBTTtBQUNoQixtQkFBSyxlQUFlO0FBQ3BCO0FBQUEsWUFDSjtBQUNBLGdCQUFJLEdBQUcsa0JBQWtCLEdBQUc7QUFDeEIsa0JBQUksRUFBRSxpQkFBaUIsT0FBTztBQUMxQixzQkFBTSxJQUFJLE1BQU0sb0RBQW9ELEtBQUssaUNBQWlDLEdBQUcsUUFBUSxJQUFJLENBQUMsRUFBRTtBQUFBLGNBQ2hJO0FBQ0Esb0JBQU1DLFVBQVMseUJBQXlCLElBQUksS0FBSyxRQUFRO0FBQ3pELHNCQUFRQSxTQUFRO0FBQUEsZ0JBQ1osS0FBSztBQUNELHVCQUFLLGVBQWUsTUFBTSxZQUFZLEVBQUUsUUFBUSxTQUFTLEdBQUc7QUFDNUQ7QUFBQSxnQkFDSixLQUFLO0FBQ0QsdUJBQUssZUFBZSxnQkFBZ0IsS0FBSztBQUN6QztBQUFBLGdCQUNKLEtBQUs7QUFDRCx1QkFBSyxlQUFlLE9BQU8sTUFBTSxRQUFRLElBQUksR0FBSTtBQUNqRDtBQUFBLGdCQUNKO0FBQ0ksMEJBQVEsS0FBSyxpREFBaUQsS0FBSztBQUNuRSx1QkFBSyxlQUFlLE9BQU8sTUFBTSxRQUFRLElBQUksR0FBSTtBQUFBLGNBQ3pEO0FBQ0E7QUFBQSxZQUNKO0FBQ0EsZ0JBQUksR0FBRyxhQUFhLEtBQUssZ0JBQWdCLE9BQU87QUFDNUMsbUJBQUssZ0JBQWdCLEtBQUssY0FBYyxpQkFBaUIsOEJBQVUsS0FBSztBQUN4RTtBQUFBLFlBQ0o7QUFDQSxnQkFBSSxHQUFHLGFBQWEsS0FBSyxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQzNDLGtCQUFJLFNBQVM7QUFDYix5QkFBVyxRQUFRLE9BQU87QUFDdEIscUJBQUssTUFBTSxDQUFDLEdBQUcsZUFBZSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxJQUFJO0FBQzVELHNCQUFNLGFBQWEsS0FBSyxNQUFNO0FBQzlCLHNCQUFNLGFBQWEsR0FBRyxlQUFlLEVBQUUsa0JBQWtCLElBQUksYUFBYSxZQUFZLFVBQVU7QUFDaEcsb0JBQUksV0FBVyxJQUFJO0FBQ2YsNEJBQVU7QUFBQSxnQkFDZDtBQUNBLDBCQUFVO0FBQUEsY0FDZDtBQUNBLG1CQUFLLGVBQWU7QUFDcEI7QUFBQSxZQUNKO0FBQ0EsaUJBQUssZUFBZSxLQUFLLFVBQVUsT0FBTyxNQUFNLENBQUM7QUFDakQ7QUFBQSxVQUNKLEtBQUs7QUFDRCxrQkFBTSxZQUFZLEdBQUcsZ0JBQWdCLEVBQUU7QUFDdkMsZ0JBQUksb0JBQW9CO0FBQ3hCLGdCQUFJLFdBQVc7QUFDWCxvQkFBTSxTQUFTLGNBQWMsc0JBQXNCLFVBQVUsU0FBUyxPQUFPO0FBQzdFLGtCQUFJLFFBQVE7QUFDUixvQ0FBb0IsZUFBZSxLQUFLLGlCQUFpQjtBQUFBLGNBQzdEO0FBQ0Esa0JBQUksR0FBRyxnQkFBZ0IsRUFBRSxZQUFZO0FBQ2pDLHFCQUFLLGdCQUFnQixLQUFLLGNBQWMsaUJBQWlCLDhCQUFVLGtCQUFrQixTQUFTLENBQUM7QUFDL0Y7QUFBQSxjQUNKO0FBQUEsWUFDSjtBQUNBLGlCQUFLLGVBQWU7QUFDcEI7QUFBQSxVQUNKO0FBQ0ksZ0JBQUksR0FBRyxtQkFBbUIsR0FBRztBQUN6QixtQkFBSyxtQkFBZSxZQUFBQyxJQUF5QjtBQUFBLFlBQ2pELE9BQ0s7QUFDRCxtQkFBSyxlQUFlLE9BQU8sS0FBSztBQUFBLFlBQ3BDO0FBQUEsUUFDUjtBQUFBLE1BQ0o7QUFBQSxNQUNBLFFBQVE7QUFDSixjQUFNLFNBQVMsS0FBSztBQUNwQixhQUFLLGVBQWU7QUFDcEIsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNKO0FBQUE7QUFBQTs7O0FDMUZBLElBRWE7QUFGYjtBQUFBO0FBQUE7QUFDQTtBQUNPLElBQU0sa0NBQU4sTUFBc0M7QUFBQSxNQUN6QztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxZQUFZLGlCQUFpQixlQUFlLG1CQUFtQixJQUFJLHdCQUF3QixhQUFhLEdBQUc7QUFDdkcsYUFBSyxrQkFBa0I7QUFDdkIsYUFBSyxtQkFBbUI7QUFBQSxNQUM1QjtBQUFBLE1BQ0EsZ0JBQWdCLGNBQWM7QUFDMUIsYUFBSyxnQkFBZ0IsZ0JBQWdCLFlBQVk7QUFDakQsYUFBSyxpQkFBaUIsZ0JBQWdCLFlBQVk7QUFBQSxNQUN0RDtBQUFBLE1BQ0EsTUFBTSxRQUFRLE9BQU87QUFDakIsY0FBTSxLQUFLLGlCQUFpQixHQUFHLE1BQU07QUFDckMsY0FBTSxTQUFTLEdBQUcsZ0JBQWdCO0FBQ2xDLFlBQUksT0FBTyxjQUFjLE9BQU8sYUFBYSxPQUFPLFdBQVc7QUFDM0QsZUFBSyxpQkFBaUIsTUFBTSxJQUFJLEtBQUs7QUFDckMsZUFBSyxTQUFTLEtBQUssaUJBQWlCLE1BQU07QUFDMUM7QUFBQSxRQUNKO0FBQ0EsZUFBTyxLQUFLLGdCQUFnQixNQUFNLElBQUksS0FBSztBQUFBLE1BQy9DO0FBQUEsTUFDQSxRQUFRO0FBQ0osWUFBSSxLQUFLLFdBQVcsUUFBVztBQUMzQixnQkFBTSxTQUFTLEtBQUs7QUFDcEIsZUFBSyxTQUFTO0FBQ2QsaUJBQU87QUFBQSxRQUNYO0FBQ0EsZUFBTyxLQUFLLGdCQUFnQixNQUFNO0FBQUEsTUFDdEM7QUFBQSxJQUNKO0FBQUE7QUFBQTs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJvcCIsICJlcnJvciIsICJ2IiwgImQiLCAiYiIsICJfX2Fzc2lnbiIsICJvIiwgInJlcXVpcmVfZGlzdF9janMiLCAiZ2V0U21pdGh5Q29udGV4dCIsICJlcnJvciIsICJpbXBvcnRfdXRpbF9taWRkbGV3YXJlIiwgImxpc3QiLCAibnMiLCAic3RydWN0IiwgInJlc29sdmVkUGF0aCIsICJpbXBvcnRfcHJvdG9jb2xfaHR0cCIsICJmcm9tQmFzZTY0IiwgInRvQmFzZTY0IiwgInJlcXVpcmVfZGlzdF9janMiLCAiZnJvbUJhc2U2NCIsICJ0b0Jhc2U2NCIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgImJvZHkiLCAiYWJvcnRFcnJvciIsICJyZXF1aXJlX2Rpc3RfY2pzIiwgInJlcXVpcmVfZGlzdF9janMiLCAiZGF0ZSIsICJ5ZWFyIiwgInRpbWUiLCAiTGF6eUpzb25TdHJpbmciLCAiUkZDMzMzOV9XSVRIX09GRlNFVCIsICJJTUZfRklYREFURSIsICJSRkNfODUwX0RBVEUiLCAiQVNDX1RJTUUiLCAiZGF0ZSIsICJ5ZWFyIiwgInoiLCAiZ2VuZXJhdGVJZGVtcG90ZW5jeVRva2VuIiwgImVycm9yIiwgImxvZ2dlciIsICJzaXplIiwgImxvZ2dlciIsICJzaXplIiwgImJ5dGVzIiwgInNka1N0cmVhbU1peGluIiwgInNka1N0cmVhbU1peGluIiwgInJlcXVpcmVfZGlzdF9janMiLCAic2RrU3RyZWFtTWl4aW4iLCAiVWludDhBcnJheUJsb2JBZGFwdGVyIiwgImltcG9ydF9wcm90b2NvbF9odHRwIiwgIm1lbWJlciIsICJpbXBvcnRfcHJvdG9jb2xfaHR0cCIsICJpbXBvcnRfdXRpbF9zdHJlYW0iLCAibWVtYmVyIiwgImxpc3QiLCAiaW1wb3J0X3Byb3RvY29sX2h0dHAiLCAiZm9ybWF0IiwgImltcG9ydF91dGlsX3V0ZjgiLCAiaW1wb3J0X3V0aWxfYmFzZTY0IiwgImZvcm1hdCIsICJnZW5lcmF0ZUlkZW1wb3RlbmN5VG9rZW4iXQp9Cg==
