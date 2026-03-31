#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_sdk
} from "./chunk-3KOWL3LY.mjs";
import {
  APIUserAbortError
} from "./chunk-5K6GNWIX.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import {
  Stack_default,
  Uint8Array_default,
  addSlowOperation,
  arrayLikeKeys_default,
  arrayPush_default,
  baseGetAllKeys_default,
  baseUnary_default,
  getAllKeys_default,
  getSessionId,
  getSymbols_default,
  getTag_default,
  init_Stack,
  init_Uint8Array,
  init_arrayLikeKeys,
  init_arrayPush,
  init_baseGetAllKeys,
  init_baseUnary,
  init_getAllKeys,
  init_getSymbols,
  init_getTag,
  init_isArray,
  init_isArrayLike,
  init_isBuffer,
  init_isObjectLike,
  init_isPrototype,
  init_keys,
  init_nodeUtil,
  init_overArg,
  init_state,
  init_stubArray,
  isArrayLike_default,
  isArray_default,
  isBuffer_default,
  isObjectLike_default,
  isPrototype_default,
  keys_default,
  nodeUtil_default,
  overArg_default,
  stubArray_default
} from "./chunk-NGSB34MB.mjs";
import {
  init_process,
  writeToStderr
} from "./chunk-66ZH6W67.mjs";
import {
  getClaudeConfigHomeDir,
  init_envUtils,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import {
  Symbol_default,
  eq_default,
  getNative_default,
  init_Symbol,
  init_eq,
  init_getNative,
  init_isObject,
  init_memoize,
  init_root,
  isObject_default,
  memoize_default,
  root_default
} from "./chunk-AZFPZFFC.mjs";
import {
  __callDispose,
  __esm,
  __using
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/bufferedWriter.ts
function createBufferedWriter({
  writeFn,
  flushIntervalMs = 1e3,
  maxBufferSize = 100,
  maxBufferBytes = Infinity,
  immediateMode = false
}) {
  let buffer = [];
  let bufferBytes = 0;
  let flushTimer = null;
  let pendingOverflow = null;
  function clearTimer() {
    if (flushTimer) {
      clearTimeout(flushTimer);
      flushTimer = null;
    }
  }
  function flush() {
    if (pendingOverflow) {
      writeFn(pendingOverflow.join(""));
      pendingOverflow = null;
    }
    if (buffer.length === 0) return;
    writeFn(buffer.join(""));
    buffer = [];
    bufferBytes = 0;
    clearTimer();
  }
  function scheduleFlush() {
    if (!flushTimer) {
      flushTimer = setTimeout(flush, flushIntervalMs);
    }
  }
  function flushDeferred() {
    if (pendingOverflow) {
      pendingOverflow.push(...buffer);
      buffer = [];
      bufferBytes = 0;
      clearTimer();
      return;
    }
    const detached = buffer;
    buffer = [];
    bufferBytes = 0;
    clearTimer();
    pendingOverflow = detached;
    setImmediate(() => {
      const toWrite = pendingOverflow;
      pendingOverflow = null;
      if (toWrite) writeFn(toWrite.join(""));
    });
  }
  return {
    write(content) {
      if (immediateMode) {
        writeFn(content);
        return;
      }
      buffer.push(content);
      bufferBytes += content.length;
      scheduleFlush();
      if (buffer.length >= maxBufferSize || bufferBytes >= maxBufferBytes) {
        flushDeferred();
      }
    },
    flush,
    dispose() {
      flush();
    }
  };
}
var init_bufferedWriter = __esm({
  "src/utils/bufferedWriter.ts"() {
  }
});

// src/utils/cleanupRegistry.ts
function registerCleanup(cleanupFn) {
  cleanupFunctions.add(cleanupFn);
  return () => cleanupFunctions.delete(cleanupFn);
}
async function runCleanupFunctions() {
  await Promise.all(Array.from(cleanupFunctions).map((fn) => fn()));
}
var cleanupFunctions;
var init_cleanupRegistry = __esm({
  "src/utils/cleanupRegistry.ts"() {
    cleanupFunctions = /* @__PURE__ */ new Set();
  }
});

// src/utils/errors.ts
function isAbortError(e) {
  return e instanceof AbortError || e instanceof APIUserAbortError || e instanceof Error && e.name === "AbortError";
}
function hasExactErrorMessage(error, message) {
  return error instanceof Error && error.message === message;
}
function toError(e) {
  return e instanceof Error ? e : new Error(String(e));
}
function errorMessage(e) {
  return e instanceof Error ? e.message : String(e);
}
function getErrnoCode(e) {
  if (e && typeof e === "object" && "code" in e && typeof e.code === "string") {
    return e.code;
  }
  return void 0;
}
function isENOENT(e) {
  return getErrnoCode(e) === "ENOENT";
}
function getErrnoPath(e) {
  if (e && typeof e === "object" && "path" in e && typeof e.path === "string") {
    return e.path;
  }
  return void 0;
}
function isFsInaccessible(e) {
  const code = getErrnoCode(e);
  return code === "ENOENT" || code === "EACCES" || code === "EPERM" || code === "ENOTDIR" || code === "ELOOP";
}
function classifyAxiosError(e) {
  const message = errorMessage(e);
  if (!e || typeof e !== "object" || !("isAxiosError" in e) || !e.isAxiosError) {
    return { kind: "other", message };
  }
  const err = e;
  const status = err.response?.status;
  if (status === 401 || status === 403) return { kind: "auth", status, message };
  if (err.code === "ECONNABORTED") return { kind: "timeout", status, message };
  if (err.code === "ECONNREFUSED" || err.code === "ENOTFOUND") {
    return { kind: "network", status, message };
  }
  return { kind: "http", status, message };
}
var ClaudeError, MalformedCommandError, AbortError, ConfigParseError, ShellError, TeleportOperationError, TelemetrySafeError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS;
var init_errors = __esm({
  "src/utils/errors.ts"() {
    init_sdk();
    ClaudeError = class extends Error {
      constructor(message) {
        super(message);
        this.name = this.constructor.name;
      }
    };
    MalformedCommandError = class extends Error {
    };
    AbortError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "AbortError";
      }
    };
    ConfigParseError = class extends Error {
      filePath;
      defaultConfig;
      constructor(message, filePath, defaultConfig) {
        super(message);
        this.name = "ConfigParseError";
        this.filePath = filePath;
        this.defaultConfig = defaultConfig;
      }
    };
    ShellError = class extends Error {
      constructor(stdout, stderr, code, interrupted) {
        super("Shell command failed");
        this.stdout = stdout;
        this.stderr = stderr;
        this.code = code;
        this.interrupted = interrupted;
        this.name = "ShellError";
      }
    };
    TeleportOperationError = class extends Error {
      constructor(message, formattedMessage) {
        super(message);
        this.formattedMessage = formattedMessage;
        this.name = "TeleportOperationError";
      }
    };
    TelemetrySafeError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS = class extends Error {
      telemetryMessage;
      constructor(message, telemetryMessage) {
        super(message);
        this.name = "TelemetrySafeError";
        this.telemetryMessage = telemetryMessage ?? message;
      }
    };
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_arrayEach.js
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var arrayEach_default;
var init_arrayEach = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_arrayEach.js"() {
    arrayEach_default = arrayEach;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_defineProperty.js
var defineProperty, defineProperty_default;
var init_defineProperty = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_defineProperty.js"() {
    init_getNative();
    defineProperty = (function() {
      try {
        var func = getNative_default(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    })();
    defineProperty_default = defineProperty;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default;
var init_baseAssignValue = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseAssignValue.js"() {
    init_defineProperty();
    baseAssignValue_default = baseAssignValue;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_assignValue.js
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var objectProto, hasOwnProperty, assignValue_default;
var init_assignValue = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_assignValue.js"() {
    init_baseAssignValue();
    init_eq();
    objectProto = Object.prototype;
    hasOwnProperty = objectProto.hasOwnProperty;
    assignValue_default = assignValue;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_copyObject.js
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object, key, newValue);
    } else {
      assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var copyObject_default;
var init_copyObject = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_copyObject.js"() {
    init_assignValue();
    init_baseAssignValue();
    copyObject_default = copyObject;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseAssign.js
function baseAssign(object, source) {
  return object && copyObject_default(source, keys_default(source), object);
}
var baseAssign_default;
var init_baseAssign = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseAssign.js"() {
    init_copyObject();
    init_keys();
    baseAssign_default = baseAssign;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_nativeKeysIn.js
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var nativeKeysIn_default;
var init_nativeKeysIn = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_nativeKeysIn.js"() {
    nativeKeysIn_default = nativeKeysIn;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseKeysIn.js
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var objectProto2, hasOwnProperty2, baseKeysIn_default;
var init_baseKeysIn = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseKeysIn.js"() {
    init_isObject();
    init_isPrototype();
    init_nativeKeysIn();
    objectProto2 = Object.prototype;
    hasOwnProperty2 = objectProto2.hasOwnProperty;
    baseKeysIn_default = baseKeysIn;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
}
var keysIn_default;
var init_keysIn = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/keysIn.js"() {
    init_arrayLikeKeys();
    init_baseKeysIn();
    init_isArrayLike();
    keysIn_default = keysIn;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseAssignIn.js
function baseAssignIn(object, source) {
  return object && copyObject_default(source, keysIn_default(source), object);
}
var baseAssignIn_default;
var init_baseAssignIn = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseAssignIn.js"() {
    init_copyObject();
    init_keysIn();
    baseAssignIn_default = baseAssignIn;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cloneBuffer.js
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var freeExports, freeModule, moduleExports, Buffer2, allocUnsafe, cloneBuffer_default;
var init_cloneBuffer = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cloneBuffer.js"() {
    init_root();
    freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    moduleExports = freeModule && freeModule.exports === freeExports;
    Buffer2 = moduleExports ? root_default.Buffer : void 0;
    allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    cloneBuffer_default = cloneBuffer;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_copyArray.js
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var copyArray_default;
var init_copyArray = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_copyArray.js"() {
    copyArray_default = copyArray;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_copySymbols.js
function copySymbols(source, object) {
  return copyObject_default(source, getSymbols_default(source), object);
}
var copySymbols_default;
var init_copySymbols = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_copySymbols.js"() {
    init_copyObject();
    init_getSymbols();
    copySymbols_default = copySymbols;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getPrototype.js
var getPrototype, getPrototype_default;
var init_getPrototype = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getPrototype.js"() {
    init_overArg();
    getPrototype = overArg_default(Object.getPrototypeOf, Object);
    getPrototype_default = getPrototype;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getSymbolsIn.js
var nativeGetSymbols, getSymbolsIn, getSymbolsIn_default;
var init_getSymbolsIn = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getSymbolsIn.js"() {
    init_arrayPush();
    init_getPrototype();
    init_getSymbols();
    init_stubArray();
    nativeGetSymbols = Object.getOwnPropertySymbols;
    getSymbolsIn = !nativeGetSymbols ? stubArray_default : function(object) {
      var result = [];
      while (object) {
        arrayPush_default(result, getSymbols_default(object));
        object = getPrototype_default(object);
      }
      return result;
    };
    getSymbolsIn_default = getSymbolsIn;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_copySymbolsIn.js
function copySymbolsIn(source, object) {
  return copyObject_default(source, getSymbolsIn_default(source), object);
}
var copySymbolsIn_default;
var init_copySymbolsIn = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_copySymbolsIn.js"() {
    init_copyObject();
    init_getSymbolsIn();
    copySymbolsIn_default = copySymbolsIn;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getAllKeysIn.js
function getAllKeysIn(object) {
  return baseGetAllKeys_default(object, keysIn_default, getSymbolsIn_default);
}
var getAllKeysIn_default;
var init_getAllKeysIn = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getAllKeysIn.js"() {
    init_baseGetAllKeys();
    init_getSymbolsIn();
    init_keysIn();
    getAllKeysIn_default = getAllKeysIn;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_initCloneArray.js
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty3.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var objectProto3, hasOwnProperty3, initCloneArray_default;
var init_initCloneArray = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_initCloneArray.js"() {
    objectProto3 = Object.prototype;
    hasOwnProperty3 = objectProto3.hasOwnProperty;
    initCloneArray_default = initCloneArray;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
  return result;
}
var cloneArrayBuffer_default;
var init_cloneArrayBuffer = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cloneArrayBuffer.js"() {
    init_Uint8Array();
    cloneArrayBuffer_default = cloneArrayBuffer;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cloneDataView.js
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var cloneDataView_default;
var init_cloneDataView = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cloneDataView.js"() {
    init_cloneArrayBuffer();
    cloneDataView_default = cloneDataView;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cloneRegExp.js
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var reFlags, cloneRegExp_default;
var init_cloneRegExp = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cloneRegExp.js"() {
    reFlags = /\w*$/;
    cloneRegExp_default = cloneRegExp;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cloneSymbol.js
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var symbolProto, symbolValueOf, cloneSymbol_default;
var init_cloneSymbol = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cloneSymbol.js"() {
    init_Symbol();
    symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
    symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    cloneSymbol_default = cloneSymbol;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cloneTypedArray.js
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var cloneTypedArray_default;
var init_cloneTypedArray = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cloneTypedArray.js"() {
    init_cloneArrayBuffer();
    cloneTypedArray_default = cloneTypedArray;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_initCloneByTag.js
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer_default(object);
    case boolTag:
    case dateTag:
      return new Ctor(+object);
    case dataViewTag:
      return cloneDataView_default(object, isDeep);
    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return cloneTypedArray_default(object, isDeep);
    case mapTag:
      return new Ctor();
    case numberTag:
    case stringTag:
      return new Ctor(object);
    case regexpTag:
      return cloneRegExp_default(object);
    case setTag:
      return new Ctor();
    case symbolTag:
      return cloneSymbol_default(object);
  }
}
var boolTag, dateTag, mapTag, numberTag, regexpTag, setTag, stringTag, symbolTag, arrayBufferTag, dataViewTag, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, initCloneByTag_default;
var init_initCloneByTag = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_initCloneByTag.js"() {
    init_cloneArrayBuffer();
    init_cloneDataView();
    init_cloneRegExp();
    init_cloneSymbol();
    init_cloneTypedArray();
    boolTag = "[object Boolean]";
    dateTag = "[object Date]";
    mapTag = "[object Map]";
    numberTag = "[object Number]";
    regexpTag = "[object RegExp]";
    setTag = "[object Set]";
    stringTag = "[object String]";
    symbolTag = "[object Symbol]";
    arrayBufferTag = "[object ArrayBuffer]";
    dataViewTag = "[object DataView]";
    float32Tag = "[object Float32Array]";
    float64Tag = "[object Float64Array]";
    int8Tag = "[object Int8Array]";
    int16Tag = "[object Int16Array]";
    int32Tag = "[object Int32Array]";
    uint8Tag = "[object Uint8Array]";
    uint8ClampedTag = "[object Uint8ClampedArray]";
    uint16Tag = "[object Uint16Array]";
    uint32Tag = "[object Uint32Array]";
    initCloneByTag_default = initCloneByTag;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseCreate.js
var objectCreate, baseCreate, baseCreate_default;
var init_baseCreate = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseCreate.js"() {
    init_isObject();
    objectCreate = Object.create;
    baseCreate = /* @__PURE__ */ (function() {
      function object() {
      }
      return function(proto) {
        if (!isObject_default(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    })();
    baseCreate_default = baseCreate;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_initCloneObject.js
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
}
var initCloneObject_default;
var init_initCloneObject = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_initCloneObject.js"() {
    init_baseCreate();
    init_getPrototype();
    init_isPrototype();
    initCloneObject_default = initCloneObject;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsMap.js
function baseIsMap(value) {
  return isObjectLike_default(value) && getTag_default(value) == mapTag2;
}
var mapTag2, baseIsMap_default;
var init_baseIsMap = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsMap.js"() {
    init_getTag();
    init_isObjectLike();
    mapTag2 = "[object Map]";
    baseIsMap_default = baseIsMap;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isMap.js
var nodeIsMap, isMap, isMap_default;
var init_isMap = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isMap.js"() {
    init_baseIsMap();
    init_baseUnary();
    init_nodeUtil();
    nodeIsMap = nodeUtil_default && nodeUtil_default.isMap;
    isMap = nodeIsMap ? baseUnary_default(nodeIsMap) : baseIsMap_default;
    isMap_default = isMap;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsSet.js
function baseIsSet(value) {
  return isObjectLike_default(value) && getTag_default(value) == setTag2;
}
var setTag2, baseIsSet_default;
var init_baseIsSet = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsSet.js"() {
    init_getTag();
    init_isObjectLike();
    setTag2 = "[object Set]";
    baseIsSet_default = baseIsSet;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isSet.js
var nodeIsSet, isSet, isSet_default;
var init_isSet = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isSet.js"() {
    init_baseIsSet();
    init_baseUnary();
    init_nodeUtil();
    nodeIsSet = nodeUtil_default && nodeUtil_default.isSet;
    isSet = nodeIsSet ? baseUnary_default(nodeIsSet) : baseIsSet_default;
    isSet_default = isSet;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseClone.js
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject_default(value)) {
    return value;
  }
  var isArr = isArray_default(value);
  if (isArr) {
    result = initCloneArray_default(value);
    if (!isDeep) {
      return copyArray_default(value, result);
    }
  } else {
    var tag = getTag_default(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer_default(value)) {
      return cloneBuffer_default(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject_default(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn_default(value, baseAssignIn_default(result, value)) : copySymbols_default(value, baseAssign_default(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag_default(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack_default());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet_default(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_default(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn_default : getAllKeys_default : isFlat ? keysIn_default : keys_default;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach_default(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue_default(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG, CLONE_FLAT_FLAG, CLONE_SYMBOLS_FLAG, argsTag, arrayTag, boolTag2, dateTag2, errorTag, funcTag, genTag, mapTag3, numberTag2, objectTag, regexpTag2, setTag3, stringTag2, symbolTag2, weakMapTag, arrayBufferTag2, dataViewTag2, float32Tag2, float64Tag2, int8Tag2, int16Tag2, int32Tag2, uint8Tag2, uint8ClampedTag2, uint16Tag2, uint32Tag2, cloneableTags, baseClone_default;
var init_baseClone = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseClone.js"() {
    init_Stack();
    init_arrayEach();
    init_assignValue();
    init_baseAssign();
    init_baseAssignIn();
    init_cloneBuffer();
    init_copyArray();
    init_copySymbols();
    init_copySymbolsIn();
    init_getAllKeys();
    init_getAllKeysIn();
    init_getTag();
    init_initCloneArray();
    init_initCloneByTag();
    init_initCloneObject();
    init_isArray();
    init_isBuffer();
    init_isMap();
    init_isObject();
    init_isSet();
    init_keys();
    init_keysIn();
    CLONE_DEEP_FLAG = 1;
    CLONE_FLAT_FLAG = 2;
    CLONE_SYMBOLS_FLAG = 4;
    argsTag = "[object Arguments]";
    arrayTag = "[object Array]";
    boolTag2 = "[object Boolean]";
    dateTag2 = "[object Date]";
    errorTag = "[object Error]";
    funcTag = "[object Function]";
    genTag = "[object GeneratorFunction]";
    mapTag3 = "[object Map]";
    numberTag2 = "[object Number]";
    objectTag = "[object Object]";
    regexpTag2 = "[object RegExp]";
    setTag3 = "[object Set]";
    stringTag2 = "[object String]";
    symbolTag2 = "[object Symbol]";
    weakMapTag = "[object WeakMap]";
    arrayBufferTag2 = "[object ArrayBuffer]";
    dataViewTag2 = "[object DataView]";
    float32Tag2 = "[object Float32Array]";
    float64Tag2 = "[object Float64Array]";
    int8Tag2 = "[object Int8Array]";
    int16Tag2 = "[object Int16Array]";
    int32Tag2 = "[object Int32Array]";
    uint8Tag2 = "[object Uint8Array]";
    uint8ClampedTag2 = "[object Uint8ClampedArray]";
    uint16Tag2 = "[object Uint16Array]";
    uint32Tag2 = "[object Uint32Array]";
    cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag2] = cloneableTags[dataViewTag2] = cloneableTags[boolTag2] = cloneableTags[dateTag2] = cloneableTags[float32Tag2] = cloneableTags[float64Tag2] = cloneableTags[int8Tag2] = cloneableTags[int16Tag2] = cloneableTags[int32Tag2] = cloneableTags[mapTag3] = cloneableTags[numberTag2] = cloneableTags[objectTag] = cloneableTags[regexpTag2] = cloneableTags[setTag3] = cloneableTags[stringTag2] = cloneableTags[symbolTag2] = cloneableTags[uint8Tag2] = cloneableTags[uint8ClampedTag2] = cloneableTags[uint16Tag2] = cloneableTags[uint32Tag2] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    baseClone_default = baseClone;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/cloneDeep.js
function cloneDeep(value) {
  return baseClone_default(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG2);
}
var CLONE_DEEP_FLAG2, CLONE_SYMBOLS_FLAG2, cloneDeep_default;
var init_cloneDeep = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/cloneDeep.js"() {
    init_baseClone();
    CLONE_DEEP_FLAG2 = 1;
    CLONE_SYMBOLS_FLAG2 = 4;
    cloneDeep_default = cloneDeep;
  }
});

// src/utils/debugFilter.ts
function extractDebugCategories(message) {
  const categories = [];
  const mcpMatch = message.match(/^MCP server ["']([^"']+)["']/);
  if (mcpMatch && mcpMatch[1]) {
    categories.push("mcp");
    categories.push(mcpMatch[1].toLowerCase());
  } else {
    const prefixMatch = message.match(/^([^:[]+):/);
    if (prefixMatch && prefixMatch[1]) {
      categories.push(prefixMatch[1].trim().toLowerCase());
    }
  }
  const bracketMatch = message.match(/^\[([^\]]+)]/);
  if (bracketMatch && bracketMatch[1]) {
    categories.push(bracketMatch[1].trim().toLowerCase());
  }
  if (message.toLowerCase().includes("1p event:")) {
    categories.push("1p");
  }
  const secondaryMatch = message.match(
    /:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/
  );
  if (secondaryMatch && secondaryMatch[1]) {
    const secondary = secondaryMatch[1].trim().toLowerCase();
    if (secondary.length < 30 && !secondary.includes(" ")) {
      categories.push(secondary);
    }
  }
  return Array.from(new Set(categories));
}
function shouldShowDebugCategories(categories, filter) {
  if (!filter) {
    return true;
  }
  if (categories.length === 0) {
    return false;
  }
  if (filter.isExclusive) {
    return !categories.some((cat) => filter.exclude.includes(cat));
  } else {
    return categories.some((cat) => filter.include.includes(cat));
  }
}
function shouldShowDebugMessage(message, filter) {
  if (!filter) {
    return true;
  }
  const categories = extractDebugCategories(message);
  return shouldShowDebugCategories(categories, filter);
}
var parseDebugFilter;
var init_debugFilter = __esm({
  "src/utils/debugFilter.ts"() {
    init_memoize();
    parseDebugFilter = memoize_default(
      (filterString) => {
        if (!filterString || filterString.trim() === "") {
          return null;
        }
        const filters = filterString.split(",").map((f) => f.trim()).filter(Boolean);
        if (filters.length === 0) {
          return null;
        }
        const hasExclusive = filters.some((f) => f.startsWith("!"));
        const hasInclusive = filters.some((f) => !f.startsWith("!"));
        if (hasExclusive && hasInclusive) {
          return null;
        }
        const cleanFilters = filters.map((f) => f.replace(/^!/, "").toLowerCase());
        return {
          include: hasExclusive ? [] : cleanFilters,
          exclude: hasExclusive ? cleanFilters : [],
          isExclusive: hasExclusive
        };
      }
    );
  }
});

// src/utils/fsOperations.ts
import * as fs from "fs";
import {
  mkdir as mkdirPromise,
  open,
  readdir as readdirPromise,
  readFile as readFilePromise,
  rename as renamePromise,
  rmdir as rmdirPromise,
  rm as rmPromise,
  stat as statPromise,
  unlink as unlinkPromise
} from "fs/promises";
import { homedir } from "os";
import * as nodePath from "path";
function safeResolvePath(fs2, filePath) {
  if (filePath.startsWith("//") || filePath.startsWith("\\\\")) {
    return { resolvedPath: filePath, isSymlink: false, isCanonical: false };
  }
  try {
    const stats = fs2.lstatSync(filePath);
    if (stats.isFIFO() || stats.isSocket() || stats.isCharacterDevice() || stats.isBlockDevice()) {
      return { resolvedPath: filePath, isSymlink: false, isCanonical: false };
    }
    const resolvedPath = fs2.realpathSync(filePath);
    return {
      resolvedPath,
      isSymlink: resolvedPath !== filePath,
      // realpathSync returned: resolvedPath is canonical (all symlinks in
      // all path components resolved). Callers can skip further symlink
      // resolution on this path.
      isCanonical: true
    };
  } catch (_error) {
    return { resolvedPath: filePath, isSymlink: false, isCanonical: false };
  }
}
function isDuplicatePath(fs2, filePath, loadedPaths) {
  const { resolvedPath } = safeResolvePath(fs2, filePath);
  if (loadedPaths.has(resolvedPath)) {
    return true;
  }
  loadedPaths.add(resolvedPath);
  return false;
}
function resolveDeepestExistingAncestorSync(fs2, absolutePath) {
  let dir = absolutePath;
  const segments = [];
  while (dir !== nodePath.dirname(dir)) {
    let st;
    try {
      st = fs2.lstatSync(dir);
    } catch {
      segments.unshift(nodePath.basename(dir));
      dir = nodePath.dirname(dir);
      continue;
    }
    if (st.isSymbolicLink()) {
      try {
        const resolved = fs2.realpathSync(dir);
        return segments.length === 0 ? resolved : nodePath.join(resolved, ...segments);
      } catch {
        const target = fs2.readlinkSync(dir);
        const absTarget = nodePath.isAbsolute(target) ? target : nodePath.resolve(nodePath.dirname(dir), target);
        return segments.length === 0 ? absTarget : nodePath.join(absTarget, ...segments);
      }
    }
    try {
      const resolved = fs2.realpathSync(dir);
      if (resolved !== dir) {
        return segments.length === 0 ? resolved : nodePath.join(resolved, ...segments);
      }
    } catch {
    }
    return void 0;
  }
  return void 0;
}
function getPathsForPermissionCheck(inputPath) {
  let path = inputPath;
  if (path === "~") {
    path = homedir().normalize("NFC");
  } else if (path.startsWith("~/")) {
    path = nodePath.join(homedir().normalize("NFC"), path.slice(2));
  }
  const pathSet = /* @__PURE__ */ new Set();
  const fsImpl = getFsImplementation();
  pathSet.add(path);
  if (path.startsWith("//") || path.startsWith("\\\\")) {
    return Array.from(pathSet);
  }
  try {
    let currentPath = path;
    const visited = /* @__PURE__ */ new Set();
    const maxDepth = 40;
    for (let depth = 0; depth < maxDepth; depth++) {
      if (visited.has(currentPath)) {
        break;
      }
      visited.add(currentPath);
      if (!fsImpl.existsSync(currentPath)) {
        if (currentPath === path) {
          const resolved = resolveDeepestExistingAncestorSync(fsImpl, path);
          if (resolved !== void 0) {
            pathSet.add(resolved);
          }
        }
        break;
      }
      const stats = fsImpl.lstatSync(currentPath);
      if (stats.isFIFO() || stats.isSocket() || stats.isCharacterDevice() || stats.isBlockDevice()) {
        break;
      }
      if (!stats.isSymbolicLink()) {
        break;
      }
      const target = fsImpl.readlinkSync(currentPath);
      const absoluteTarget = nodePath.isAbsolute(target) ? target : nodePath.resolve(nodePath.dirname(currentPath), target);
      pathSet.add(absoluteTarget);
      currentPath = absoluteTarget;
    }
  } catch {
  }
  const { resolvedPath, isSymlink } = safeResolvePath(fsImpl, path);
  if (isSymlink && resolvedPath !== path) {
    pathSet.add(resolvedPath);
  }
  return Array.from(pathSet);
}
function getFsImplementation() {
  return activeFs;
}
async function readFileRange(path, offset, maxBytes) {
  var _stack = [];
  try {
    const fh = __using(_stack, await open(path, "r"), true);
    const size = (await fh.stat()).size;
    if (size <= offset) {
      return null;
    }
    const bytesToRead = Math.min(size - offset, maxBytes);
    const buffer = Buffer.allocUnsafe(bytesToRead);
    let totalRead = 0;
    while (totalRead < bytesToRead) {
      const { bytesRead } = await fh.read(
        buffer,
        totalRead,
        bytesToRead - totalRead,
        offset + totalRead
      );
      if (bytesRead === 0) {
        break;
      }
      totalRead += bytesRead;
    }
    return {
      content: buffer.toString("utf8", 0, totalRead),
      bytesRead: totalRead,
      bytesTotal: size
    };
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
async function tailFile(path, maxBytes) {
  var _stack = [];
  try {
    const fh = __using(_stack, await open(path, "r"), true);
    const size = (await fh.stat()).size;
    if (size === 0) {
      return { content: "", bytesRead: 0, bytesTotal: 0 };
    }
    const offset = Math.max(0, size - maxBytes);
    const bytesToRead = size - offset;
    const buffer = Buffer.allocUnsafe(bytesToRead);
    let totalRead = 0;
    while (totalRead < bytesToRead) {
      const { bytesRead } = await fh.read(
        buffer,
        totalRead,
        bytesToRead - totalRead,
        offset + totalRead
      );
      if (bytesRead === 0) {
        break;
      }
      totalRead += bytesRead;
    }
    return {
      content: buffer.toString("utf8", 0, totalRead),
      bytesRead: totalRead,
      bytesTotal: size
    };
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
async function* readLinesReverse(path) {
  const CHUNK_SIZE = 1024 * 4;
  const fileHandle = await open(path, "r");
  try {
    const stats = await fileHandle.stat();
    let position = stats.size;
    let remainder = Buffer.alloc(0);
    const buffer = Buffer.alloc(CHUNK_SIZE);
    while (position > 0) {
      const currentChunkSize = Math.min(CHUNK_SIZE, position);
      position -= currentChunkSize;
      await fileHandle.read(buffer, 0, currentChunkSize, position);
      const combined = Buffer.concat([
        buffer.subarray(0, currentChunkSize),
        remainder
      ]);
      const firstNewline = combined.indexOf(10);
      if (firstNewline === -1) {
        remainder = combined;
        continue;
      }
      remainder = Buffer.from(combined.subarray(0, firstNewline));
      const lines = combined.toString("utf8", firstNewline + 1).split("\n");
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i];
        if (line) {
          yield line;
        }
      }
    }
    if (remainder.length > 0) {
      yield remainder.toString("utf8");
    }
  } finally {
    await fileHandle.close();
  }
}
var NodeFsOperations, activeFs;
var init_fsOperations = __esm({
  "src/utils/fsOperations.ts"() {
    init_errors();
    init_slowOperations();
    NodeFsOperations = {
      cwd() {
        return process.cwd();
      },
      existsSync(fsPath) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.existsSync(${fsPath})`);
          return fs.existsSync(fsPath);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      async stat(fsPath) {
        return statPromise(fsPath);
      },
      async readdir(fsPath) {
        return readdirPromise(fsPath, { withFileTypes: true });
      },
      async unlink(fsPath) {
        return unlinkPromise(fsPath);
      },
      async rmdir(fsPath) {
        return rmdirPromise(fsPath);
      },
      async rm(fsPath, options) {
        return rmPromise(fsPath, options);
      },
      async mkdir(dirPath, options) {
        try {
          await mkdirPromise(dirPath, { recursive: true, ...options });
        } catch (e) {
          if (getErrnoCode(e) !== "EEXIST") throw e;
        }
      },
      async readFile(fsPath, options) {
        return readFilePromise(fsPath, { encoding: options.encoding });
      },
      async rename(oldPath, newPath) {
        return renamePromise(oldPath, newPath);
      },
      statSync(fsPath) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.statSync(${fsPath})`);
          return fs.statSync(fsPath);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      lstatSync(fsPath) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.lstatSync(${fsPath})`);
          return fs.lstatSync(fsPath);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      readFileSync(fsPath, options) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.readFileSync(${fsPath})`);
          return fs.readFileSync(fsPath, { encoding: options.encoding });
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      readFileBytesSync(fsPath) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.readFileBytesSync(${fsPath})`);
          return fs.readFileSync(fsPath);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      readSync(fsPath, options) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.readSync(${fsPath}, ${options.length} bytes)`);
          let fd = void 0;
          try {
            fd = fs.openSync(fsPath, "r");
            const buffer = Buffer.alloc(options.length);
            const bytesRead = fs.readSync(fd, buffer, 0, options.length, 0);
            return { buffer, bytesRead };
          } finally {
            if (fd) fs.closeSync(fd);
          }
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      appendFileSync(path, data, options) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.appendFileSync(${path}, ${data.length} chars)`);
          if (options?.mode !== void 0) {
            try {
              const fd = fs.openSync(path, "ax", options.mode);
              try {
                fs.appendFileSync(fd, data);
              } finally {
                fs.closeSync(fd);
              }
              return;
            } catch (e) {
              if (getErrnoCode(e) !== "EEXIST") throw e;
            }
          }
          fs.appendFileSync(path, data);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      copyFileSync(src, dest) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.copyFileSync(${src} → ${dest})`);
          fs.copyFileSync(src, dest);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      unlinkSync(path) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.unlinkSync(${path})`);
          fs.unlinkSync(path);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      renameSync(oldPath, newPath) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.renameSync(${oldPath} → ${newPath})`);
          fs.renameSync(oldPath, newPath);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      linkSync(target, path) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.linkSync(${target} → ${path})`);
          fs.linkSync(target, path);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      symlinkSync(target, path, type) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.symlinkSync(${target} → ${path})`);
          fs.symlinkSync(target, path, type);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      readlinkSync(path) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.readlinkSync(${path})`);
          return fs.readlinkSync(path);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      realpathSync(path) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.realpathSync(${path})`);
          return fs.realpathSync(path).normalize("NFC");
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      mkdirSync(dirPath, options) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.mkdirSync(${dirPath})`);
          const mkdirOptions = {
            recursive: true
          };
          if (options?.mode !== void 0) {
            mkdirOptions.mode = options.mode;
          }
          try {
            fs.mkdirSync(dirPath, mkdirOptions);
          } catch (e) {
            if (getErrnoCode(e) !== "EEXIST") throw e;
          }
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      readdirSync(dirPath) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.readdirSync(${dirPath})`);
          return fs.readdirSync(dirPath, { withFileTypes: true });
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      readdirStringSync(dirPath) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.readdirStringSync(${dirPath})`);
          return fs.readdirSync(dirPath);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      isDirEmptySync(dirPath) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.isDirEmptySync(${dirPath})`);
          const files = this.readdirSync(dirPath);
          return files.length === 0;
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      rmdirSync(dirPath) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.rmdirSync(${dirPath})`);
          fs.rmdirSync(dirPath);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      rmSync(path, options) {
        var _stack = [];
        try {
          const _ = __using(_stack, slowLogging`fs.rmSync(${path})`);
          fs.rmSync(path, options);
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      },
      createWriteStream(path) {
        return fs.createWriteStream(path);
      },
      async readFileBytes(fsPath, maxBytes) {
        if (maxBytes === void 0) {
          return readFilePromise(fsPath);
        }
        const handle = await open(fsPath, "r");
        try {
          const { size } = await handle.stat();
          const readSize = Math.min(size, maxBytes);
          const buffer = Buffer.allocUnsafe(readSize);
          let offset = 0;
          while (offset < readSize) {
            const { bytesRead } = await handle.read(
              buffer,
              offset,
              readSize - offset,
              offset
            );
            if (bytesRead === 0) break;
            offset += bytesRead;
          }
          return offset < readSize ? buffer.subarray(0, offset) : buffer;
        } finally {
          await handle.close();
        }
      }
    };
    activeFs = NodeFsOperations;
  }
});

// src/utils/debug.ts
import { appendFile, mkdir, symlink, unlink } from "fs/promises";
import { dirname as dirname2, join as join2 } from "path";
function enableDebugLogging() {
  const wasActive = isDebugMode() || process.env.USER_TYPE === "ant";
  runtimeDebugEnabled = true;
  isDebugMode.cache.clear?.();
  return wasActive;
}
function shouldLogDebugMessage(message) {
  if (process.env.NODE_ENV === "test" && !isDebugToStdErr()) {
    return false;
  }
  if (process.env.USER_TYPE !== "ant" && !isDebugMode()) {
    return false;
  }
  if (typeof process === "undefined" || typeof process.versions === "undefined" || typeof process.versions.node === "undefined") {
    return false;
  }
  const filter = getDebugFilter();
  return shouldShowDebugMessage(message, filter);
}
function setHasFormattedOutput(value) {
  hasFormattedOutput = value;
}
function getHasFormattedOutput() {
  return hasFormattedOutput;
}
async function appendAsync(needMkdir, dir, path, content) {
  if (needMkdir) {
    await mkdir(dir, { recursive: true }).catch(() => {
    });
  }
  await appendFile(path, content);
  void updateLatestDebugLogSymlink();
}
function noop() {
}
function getDebugWriter() {
  if (!debugWriter) {
    let ensuredDir = null;
    debugWriter = createBufferedWriter({
      writeFn: (content) => {
        const path = getDebugLogPath();
        const dir = dirname2(path);
        const needMkdir = ensuredDir !== dir;
        ensuredDir = dir;
        if (isDebugMode()) {
          if (needMkdir) {
            try {
              getFsImplementation().mkdirSync(dir);
            } catch {
            }
          }
          getFsImplementation().appendFileSync(path, content);
          void updateLatestDebugLogSymlink();
          return;
        }
        pendingWrite = pendingWrite.then(appendAsync.bind(null, needMkdir, dir, path, content)).catch(noop);
      },
      flushIntervalMs: 1e3,
      maxBufferSize: 100,
      immediateMode: isDebugMode()
    });
    registerCleanup(async () => {
      debugWriter?.dispose();
      await pendingWrite;
    });
  }
  return debugWriter;
}
function logForDebugging(message, { level } = {
  level: "debug"
}) {
  if (LEVEL_ORDER[level] < LEVEL_ORDER[getMinDebugLogLevel()]) {
    return;
  }
  if (!shouldLogDebugMessage(message)) {
    return;
  }
  if (hasFormattedOutput && message.includes("\n")) {
    message = jsonStringify(message);
  }
  const timestamp = (/* @__PURE__ */ new Date()).toISOString();
  const output = `${timestamp} [${level.toUpperCase()}] ${message.trim()}
`;
  if (isDebugToStdErr()) {
    writeToStderr(output);
    return;
  }
  getDebugWriter().write(output);
}
function getDebugLogPath() {
  return getDebugFilePath() ?? process.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? join2(getClaudeConfigHomeDir(), "debug", `${getSessionId()}.txt`);
}
function logAntError(context, error) {
  if (process.env.USER_TYPE !== "ant") {
    return;
  }
  if (error instanceof Error && error.stack) {
    logForDebugging(`[ANT-ONLY] ${context} stack trace:
${error.stack}`, {
      level: "error"
    });
  }
}
var LEVEL_ORDER, getMinDebugLogLevel, runtimeDebugEnabled, isDebugMode, getDebugFilter, isDebugToStdErr, getDebugFilePath, hasFormattedOutput, debugWriter, pendingWrite, updateLatestDebugLogSymlink;
var init_debug = __esm({
  "src/utils/debug.ts"() {
    init_memoize();
    init_state();
    init_bufferedWriter();
    init_cleanupRegistry();
    init_debugFilter();
    init_envUtils();
    init_fsOperations();
    init_process();
    init_slowOperations();
    LEVEL_ORDER = {
      verbose: 0,
      debug: 1,
      info: 2,
      warn: 3,
      error: 4
    };
    getMinDebugLogLevel = memoize_default(() => {
      const raw = process.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
      if (raw && Object.hasOwn(LEVEL_ORDER, raw)) {
        return raw;
      }
      return "debug";
    });
    runtimeDebugEnabled = false;
    isDebugMode = memoize_default(() => {
      return runtimeDebugEnabled || isEnvTruthy(process.env.DEBUG) || isEnvTruthy(process.env.DEBUG_SDK) || process.argv.includes("--debug") || process.argv.includes("-d") || isDebugToStdErr() || // Also check for --debug=pattern syntax
      process.argv.some((arg) => arg.startsWith("--debug=")) || // --debug-file implicitly enables debug mode
      getDebugFilePath() !== null;
    });
    getDebugFilter = memoize_default(() => {
      const debugArg = process.argv.find((arg) => arg.startsWith("--debug="));
      if (!debugArg) {
        return null;
      }
      const filterPattern = debugArg.substring("--debug=".length);
      return parseDebugFilter(filterPattern);
    });
    isDebugToStdErr = memoize_default(() => {
      return process.argv.includes("--debug-to-stderr") || process.argv.includes("-d2e");
    });
    getDebugFilePath = memoize_default(() => {
      for (let i = 0; i < process.argv.length; i++) {
        const arg = process.argv[i];
        if (arg.startsWith("--debug-file=")) {
          return arg.substring("--debug-file=".length);
        }
        if (arg === "--debug-file" && i + 1 < process.argv.length) {
          return process.argv[i + 1];
        }
      }
      return null;
    });
    hasFormattedOutput = false;
    debugWriter = null;
    pendingWrite = Promise.resolve();
    updateLatestDebugLogSymlink = memoize_default(async () => {
      try {
        const debugLogPath = getDebugLogPath();
        const debugLogsDir = dirname2(debugLogPath);
        const latestSymlinkPath = join2(debugLogsDir, "latest");
        await unlink(latestSymlinkPath).catch(() => {
        });
        await symlink(debugLogPath, latestSymlinkPath);
      } catch {
      }
    });
  }
});

// src/utils/slowOperations.ts
import {
  closeSync as closeSync2,
  writeFileSync as fsWriteFileSync,
  fsyncSync,
  openSync as openSync2
} from "fs";
function callerFrame(stack) {
  if (!stack) return "";
  for (const line of stack.split("\n")) {
    if (line.includes("slowOperations")) continue;
    const m = line.match(/([^/\\]+?):(\d+):\d+\)?$/);
    if (m) return ` @ ${m[1]}:${m[2]}`;
  }
  return "";
}
function buildDescription(args) {
  const strings = args[0];
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i + 1 < args.length) {
      const v = args[i + 1];
      if (Array.isArray(v)) {
        result += `Array[${v.length}]`;
      } else if (v !== null && typeof v === "object") {
        result += `Object{${Object.keys(v).length} keys}`;
      } else if (typeof v === "string") {
        result += v.length > 80 ? `${v.slice(0, 80)}\u2026` : v;
      } else {
        result += String(v);
      }
    }
  }
  return result;
}
function slowLoggingAnt(_strings, ..._values) {
  return new AntSlowLogger(arguments);
}
function slowLoggingExternal() {
  return NOOP_LOGGER;
}
function jsonStringify(value, replacer, space) {
  var _stack = [];
  try {
    const _ = __using(_stack, slowLogging`JSON.stringify(${value})`);
    return JSON.stringify(
      value,
      replacer,
      space
    );
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function clone(value, options) {
  var _stack = [];
  try {
    const _ = __using(_stack, slowLogging`structuredClone(${value})`);
    return structuredClone(value, options);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function writeFileSync_DEPRECATED(filePath, data, options) {
  var _stack = [];
  try {
    const _ = __using(_stack, slowLogging`fs.writeFileSync(${filePath}, ${data})`);
    const needsFlush = options !== null && typeof options === "object" && "flush" in options && options.flush === true;
    if (needsFlush) {
      const encoding = typeof options === "object" && "encoding" in options ? options.encoding : void 0;
      const mode = typeof options === "object" && "mode" in options ? options.mode : void 0;
      let fd;
      try {
        fd = openSync2(filePath, "w", mode);
        fsWriteFileSync(fd, data, { encoding: encoding ?? void 0 });
        fsyncSync(fd);
      } finally {
        if (fd !== void 0) {
          closeSync2(fd);
        }
      }
    } else {
      fsWriteFileSync(filePath, data, options);
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
var SLOW_OPERATION_THRESHOLD_MS, isLogging, AntSlowLogger, NOOP_LOGGER, slowLogging, jsonParse;
var init_slowOperations = __esm({
  "src/utils/slowOperations.ts"() {
    init_bun_bundle();
    init_state();
    init_debug();
    SLOW_OPERATION_THRESHOLD_MS = (() => {
      const envValue = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
      if (envValue !== void 0) {
        const parsed = Number(envValue);
        if (!Number.isNaN(parsed) && parsed >= 0) {
          return parsed;
        }
      }
      if (process.env.NODE_ENV === "development") {
        return 20;
      }
      if (process.env.USER_TYPE === "ant") {
        return 300;
      }
      return Infinity;
    })();
    isLogging = false;
    AntSlowLogger = class {
      startTime;
      args;
      err;
      constructor(args) {
        this.startTime = performance.now();
        this.args = args;
        this.err = new Error();
      }
      [Symbol.dispose]() {
        const duration = performance.now() - this.startTime;
        if (duration > SLOW_OPERATION_THRESHOLD_MS && !isLogging) {
          isLogging = true;
          try {
            const description = buildDescription(this.args) + callerFrame(this.err.stack);
            logForDebugging(
              `[SLOW OPERATION DETECTED] ${description} (${duration.toFixed(1)}ms)`
            );
            addSlowOperation(description, duration);
          } finally {
            isLogging = false;
          }
        }
      }
    };
    NOOP_LOGGER = { [Symbol.dispose]() {
    } };
    slowLogging = feature("SLOW_OPERATION_LOGGING") ? slowLoggingAnt : slowLoggingExternal;
    jsonParse = (text, reviver) => {
      var _stack = [];
      try {
        const _ = __using(_stack, slowLogging`JSON.parse(${text})`);
        return typeof reviver === "undefined" ? JSON.parse(text) : JSON.parse(text, reviver);
      } catch (_2) {
        var _error = _2, _hasError = true;
      } finally {
        __callDispose(_stack, _error, _hasError);
      }
    };
  }
});

export {
  createBufferedWriter,
  init_bufferedWriter,
  registerCleanup,
  runCleanupFunctions,
  init_cleanupRegistry,
  ClaudeError,
  MalformedCommandError,
  AbortError,
  isAbortError,
  ConfigParseError,
  ShellError,
  TeleportOperationError,
  TelemetrySafeError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
  hasExactErrorMessage,
  toError,
  errorMessage,
  getErrnoCode,
  isENOENT,
  getErrnoPath,
  isFsInaccessible,
  classifyAxiosError,
  init_errors,
  arrayEach_default,
  init_arrayEach,
  defineProperty_default,
  init_defineProperty,
  baseAssignValue_default,
  init_baseAssignValue,
  assignValue_default,
  init_assignValue,
  copyObject_default,
  init_copyObject,
  baseAssign_default,
  init_baseAssign,
  keysIn_default,
  init_keysIn,
  cloneBuffer_default,
  init_cloneBuffer,
  copyArray_default,
  init_copyArray,
  getPrototype_default,
  init_getPrototype,
  getAllKeysIn_default,
  init_getAllKeysIn,
  cloneTypedArray_default,
  init_cloneTypedArray,
  baseCreate_default,
  init_baseCreate,
  initCloneObject_default,
  init_initCloneObject,
  isMap_default,
  init_isMap,
  isSet_default,
  init_isSet,
  baseClone_default,
  init_baseClone,
  cloneDeep_default,
  init_cloneDeep,
  slowLogging,
  jsonStringify,
  jsonParse,
  clone,
  writeFileSync_DEPRECATED,
  init_slowOperations,
  safeResolvePath,
  isDuplicatePath,
  getPathsForPermissionCheck,
  getFsImplementation,
  readFileRange,
  tailFile,
  readLinesReverse,
  init_fsOperations,
  isDebugMode,
  enableDebugLogging,
  isDebugToStdErr,
  setHasFormattedOutput,
  getHasFormattedOutput,
  logForDebugging,
  getDebugLogPath,
  logAntError,
  init_debug
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2J1ZmZlcmVkV3JpdGVyLnRzIiwgIi4uLy4uL3NyYy91dGlscy9jbGVhbnVwUmVnaXN0cnkudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2Vycm9ycy50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheUVhY2guanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZGVmaW5lUHJvcGVydHkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUFzc2lnblZhbHVlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Fzc2lnblZhbHVlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcHlPYmplY3QuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUFzc2lnbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19uYXRpdmVLZXlzSW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUtleXNJbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2tleXNJbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlQXNzaWduSW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVCdWZmZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY29weUFycmF5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcHlTeW1ib2xzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRTeW1ib2xzSW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY29weVN5bWJvbHNJbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRBbGxLZXlzSW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faW5pdENsb25lQXJyYXkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jbG9uZURhdGFWaWV3LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Nsb25lUmVnRXhwLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Nsb25lU3ltYm9sLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Nsb25lVHlwZWRBcnJheS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pbml0Q2xvbmVCeVRhZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlQ3JlYXRlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2luaXRDbG9uZU9iamVjdC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNNYXAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc01hcC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNTZXQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1NldC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlQ2xvbmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9jbG9uZURlZXAuanMiLCAiLi4vLi4vc3JjL3V0aWxzL2RlYnVnRmlsdGVyLnRzIiwgIi4uLy4uL3NyYy91dGlscy9mc09wZXJhdGlvbnMudHMiLCAiLi4vLi4vc3JjL3V0aWxzL2RlYnVnLnRzIiwgIi4uLy4uL3NyYy91dGlscy9zbG93T3BlcmF0aW9ucy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsidHlwZSBXcml0ZUZuID0gKGNvbnRlbnQ6IHN0cmluZykgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBCdWZmZXJlZFdyaXRlciA9IHtcbiAgd3JpdGU6IChjb250ZW50OiBzdHJpbmcpID0+IHZvaWRcbiAgZmx1c2g6ICgpID0+IHZvaWRcbiAgZGlzcG9zZTogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnVmZmVyZWRXcml0ZXIoe1xuICB3cml0ZUZuLFxuICBmbHVzaEludGVydmFsTXMgPSAxMDAwLFxuICBtYXhCdWZmZXJTaXplID0gMTAwLFxuICBtYXhCdWZmZXJCeXRlcyA9IEluZmluaXR5LFxuICBpbW1lZGlhdGVNb2RlID0gZmFsc2UsXG59OiB7XG4gIHdyaXRlRm46IFdyaXRlRm5cbiAgZmx1c2hJbnRlcnZhbE1zPzogbnVtYmVyXG4gIG1heEJ1ZmZlclNpemU/OiBudW1iZXJcbiAgbWF4QnVmZmVyQnl0ZXM/OiBudW1iZXJcbiAgaW1tZWRpYXRlTW9kZT86IGJvb2xlYW5cbn0pOiBCdWZmZXJlZFdyaXRlciB7XG4gIGxldCBidWZmZXI6IHN0cmluZ1tdID0gW11cbiAgbGV0IGJ1ZmZlckJ5dGVzID0gMFxuICBsZXQgZmx1c2hUaW1lcjogTm9kZUpTLlRpbWVvdXQgfCBudWxsID0gbnVsbFxuICAvLyBCYXRjaCBkZXRhY2hlZCBieSBvdmVyZmxvdyB0aGF0IGhhc24ndCBiZWVuIHdyaXR0ZW4geWV0LiBUcmFja2VkIHNvXG4gIC8vIGZsdXNoKCkvZGlzcG9zZSgpIGNhbiBkcmFpbiBpdCBzeW5jaHJvbm91c2x5IGlmIHRoZSBwcm9jZXNzIGV4aXRzXG4gIC8vIGJlZm9yZSB0aGUgc2V0SW1tZWRpYXRlIGZpcmVzLlxuICBsZXQgcGVuZGluZ092ZXJmbG93OiBzdHJpbmdbXSB8IG51bGwgPSBudWxsXG5cbiAgZnVuY3Rpb24gY2xlYXJUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAoZmx1c2hUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KGZsdXNoVGltZXIpXG4gICAgICBmbHVzaFRpbWVyID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCk6IHZvaWQge1xuICAgIGlmIChwZW5kaW5nT3ZlcmZsb3cpIHtcbiAgICAgIHdyaXRlRm4ocGVuZGluZ092ZXJmbG93LmpvaW4oJycpKVxuICAgICAgcGVuZGluZ092ZXJmbG93ID0gbnVsbFxuICAgIH1cbiAgICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgd3JpdGVGbihidWZmZXIuam9pbignJykpXG4gICAgYnVmZmVyID0gW11cbiAgICBidWZmZXJCeXRlcyA9IDBcbiAgICBjbGVhclRpbWVyKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlRmx1c2goKTogdm9pZCB7XG4gICAgaWYgKCFmbHVzaFRpbWVyKSB7XG4gICAgICBmbHVzaFRpbWVyID0gc2V0VGltZW91dChmbHVzaCwgZmx1c2hJbnRlcnZhbE1zKVxuICAgIH1cbiAgfVxuXG4gIC8vIERldGFjaCB0aGUgYnVmZmVyIHN5bmNocm9ub3VzbHkgc28gdGhlIGNhbGxlciBuZXZlciB3YWl0cyBvbiB3cml0ZUZuLlxuICAvLyB3cml0ZUZuIG1heSBibG9jayAoZS5nLiBlcnJvckxvZ1NpbmsudHMgYXBwZW5kRmlsZVN5bmMpIFx1MjAxNCBpZiBvdmVyZmxvdyBmaXJlc1xuICAvLyBtaWQtcmVuZGVyIG9yIG1pZC1rZXlzdHJva2UsIGRlZmVycmluZyB0aGUgd3JpdGUga2VlcHMgdGhlIGN1cnJlbnQgdGlja1xuICAvLyBzaG9ydC4gVGltZXItYmFzZWQgZmx1c2hlcyBhbHJlYWR5IHJ1biBvdXRzaWRlIHVzZXIgY29kZSBwYXRocyBzbyB0aGV5XG4gIC8vIHN0YXkgc3luY2hyb25vdXMuXG4gIGZ1bmN0aW9uIGZsdXNoRGVmZXJyZWQoKTogdm9pZCB7XG4gICAgaWYgKHBlbmRpbmdPdmVyZmxvdykge1xuICAgICAgLy8gQSBwcmV2aW91cyBvdmVyZmxvdyB3cml0ZSBpcyBzdGlsbCBxdWV1ZWQuIENvYWxlc2NlIGludG8gaXQgdG9cbiAgICAgIC8vIHByZXNlcnZlIG9yZGVyaW5nIFx1MjAxNCB3cml0ZXMgbGFuZCBpbiBhIHNpbmdsZSBzZXRJbW1lZGlhdGUtb3JkZXJlZCBiYXRjaC5cbiAgICAgIHBlbmRpbmdPdmVyZmxvdy5wdXNoKC4uLmJ1ZmZlcilcbiAgICAgIGJ1ZmZlciA9IFtdXG4gICAgICBidWZmZXJCeXRlcyA9IDBcbiAgICAgIGNsZWFyVGltZXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGRldGFjaGVkID0gYnVmZmVyXG4gICAgYnVmZmVyID0gW11cbiAgICBidWZmZXJCeXRlcyA9IDBcbiAgICBjbGVhclRpbWVyKClcbiAgICBwZW5kaW5nT3ZlcmZsb3cgPSBkZXRhY2hlZFxuICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICBjb25zdCB0b1dyaXRlID0gcGVuZGluZ092ZXJmbG93XG4gICAgICBwZW5kaW5nT3ZlcmZsb3cgPSBudWxsXG4gICAgICBpZiAodG9Xcml0ZSkgd3JpdGVGbih0b1dyaXRlLmpvaW4oJycpKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdyaXRlKGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgaWYgKGltbWVkaWF0ZU1vZGUpIHtcbiAgICAgICAgd3JpdGVGbihjb250ZW50KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGJ1ZmZlci5wdXNoKGNvbnRlbnQpXG4gICAgICBidWZmZXJCeXRlcyArPSBjb250ZW50Lmxlbmd0aFxuICAgICAgc2NoZWR1bGVGbHVzaCgpXG4gICAgICBpZiAoYnVmZmVyLmxlbmd0aCA+PSBtYXhCdWZmZXJTaXplIHx8IGJ1ZmZlckJ5dGVzID49IG1heEJ1ZmZlckJ5dGVzKSB7XG4gICAgICAgIGZsdXNoRGVmZXJyZWQoKVxuICAgICAgfVxuICAgIH0sXG4gICAgZmx1c2gsXG4gICAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgIGZsdXNoKClcbiAgICB9LFxuICB9XG59XG4iLCAiLyoqXG4gKiBHbG9iYWwgcmVnaXN0cnkgZm9yIGNsZWFudXAgZnVuY3Rpb25zIHRoYXQgc2hvdWxkIHJ1biBkdXJpbmcgZ3JhY2VmdWwgc2h1dGRvd24uXG4gKiBUaGlzIG1vZHVsZSBpcyBzZXBhcmF0ZSBmcm9tIGdyYWNlZnVsU2h1dGRvd24udHMgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuICovXG5cbi8vIEdsb2JhbCByZWdpc3RyeSBmb3IgY2xlYW51cCBmdW5jdGlvbnNcbmNvbnN0IGNsZWFudXBGdW5jdGlvbnMgPSBuZXcgU2V0PCgpID0+IFByb21pc2U8dm9pZD4+KClcblxuLyoqXG4gKiBSZWdpc3RlciBhIGNsZWFudXAgZnVuY3Rpb24gdG8gcnVuIGR1cmluZyBncmFjZWZ1bCBzaHV0ZG93bi5cbiAqIEBwYXJhbSBjbGVhbnVwRm4gLSBGdW5jdGlvbiB0byBydW4gZHVyaW5nIGNsZWFudXAgKGNhbiBiZSBzeW5jIG9yIGFzeW5jKVxuICogQHJldHVybnMgVW5yZWdpc3RlciBmdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGNsZWFudXAgaGFuZGxlclxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDbGVhbnVwKGNsZWFudXBGbjogKCkgPT4gUHJvbWlzZTx2b2lkPik6ICgpID0+IHZvaWQge1xuICBjbGVhbnVwRnVuY3Rpb25zLmFkZChjbGVhbnVwRm4pXG4gIHJldHVybiAoKSA9PiBjbGVhbnVwRnVuY3Rpb25zLmRlbGV0ZShjbGVhbnVwRm4pIC8vIFJldHVybiB1bnJlZ2lzdGVyIGZ1bmN0aW9uXG59XG5cbi8qKlxuICogUnVuIGFsbCByZWdpc3RlcmVkIGNsZWFudXAgZnVuY3Rpb25zLlxuICogVXNlZCBpbnRlcm5hbGx5IGJ5IGdyYWNlZnVsU2h1dGRvd24uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5DbGVhbnVwRnVuY3Rpb25zKCk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBQcm9taXNlLmFsbChBcnJheS5mcm9tKGNsZWFudXBGdW5jdGlvbnMpLm1hcChmbiA9PiBmbigpKSlcbn1cbiIsICJpbXBvcnQgeyBBUElVc2VyQWJvcnRFcnJvciB9IGZyb20gJ0BhbnRocm9waWMtYWkvc2RrJ1xuXG5leHBvcnQgY2xhc3MgQ2xhdWRlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpXG4gICAgdGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hbGZvcm1lZENvbW1hbmRFcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbmV4cG9ydCBjbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSlcbiAgICB0aGlzLm5hbWUgPSAnQWJvcnRFcnJvcidcbiAgfVxufVxuXG4vKipcbiAqIFRydWUgaWZmIGBlYCBpcyBhbnkgb2YgdGhlIGFib3J0LXNoYXBlZCBlcnJvcnMgdGhlIGNvZGViYXNlIGVuY291bnRlcnM6XG4gKiBvdXIgQWJvcnRFcnJvciBjbGFzcywgYSBET01FeGNlcHRpb24gZnJvbSBBYm9ydENvbnRyb2xsZXIuYWJvcnQoKVxuICogKC5uYW1lID09PSAnQWJvcnRFcnJvcicpLCBvciB0aGUgU0RLJ3MgQVBJVXNlckFib3J0RXJyb3IuIFRoZSBTREsgY2xhc3NcbiAqIGlzIGNoZWNrZWQgdmlhIGluc3RhbmNlb2YgYmVjYXVzZSBtaW5pZmllZCBidWlsZHMgbWFuZ2xlIGNsYXNzIG5hbWVzIFx1MjAxNFxuICogY29uc3RydWN0b3IubmFtZSBiZWNvbWVzIHNvbWV0aGluZyBsaWtlICduSlQnIGFuZCB0aGUgU0RLIG5ldmVyIHNldHNcbiAqIHRoaXMubmFtZSwgc28gc3RyaW5nIG1hdGNoaW5nIHNpbGVudGx5IGZhaWxzIGluIHByb2R1Y3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Fib3J0RXJyb3IoZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGUgaW5zdGFuY2VvZiBBYm9ydEVycm9yIHx8XG4gICAgZSBpbnN0YW5jZW9mIEFQSVVzZXJBYm9ydEVycm9yIHx8XG4gICAgKGUgaW5zdGFuY2VvZiBFcnJvciAmJiBlLm5hbWUgPT09ICdBYm9ydEVycm9yJylcbiAgKVxufVxuXG4vKipcbiAqIEN1c3RvbSBlcnJvciBjbGFzcyBmb3IgY29uZmlndXJhdGlvbiBmaWxlIHBhcnNpbmcgZXJyb3JzXG4gKiBJbmNsdWRlcyB0aGUgZmlsZSBwYXRoIGFuZCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWRcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZpZ1BhcnNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGZpbGVQYXRoOiBzdHJpbmdcbiAgZGVmYXVsdENvbmZpZzogdW5rbm93blxuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgZmlsZVBhdGg6IHN0cmluZywgZGVmYXVsdENvbmZpZzogdW5rbm93bikge1xuICAgIHN1cGVyKG1lc3NhZ2UpXG4gICAgdGhpcy5uYW1lID0gJ0NvbmZpZ1BhcnNlRXJyb3InXG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoXG4gICAgdGhpcy5kZWZhdWx0Q29uZmlnID0gZGVmYXVsdENvbmZpZ1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaGVsbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3Rkb3V0OiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IHN0ZGVycjogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBjb2RlOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IGludGVycnVwdGVkOiBib29sZWFuLFxuICApIHtcbiAgICBzdXBlcignU2hlbGwgY29tbWFuZCBmYWlsZWQnKVxuICAgIHRoaXMubmFtZSA9ICdTaGVsbEVycm9yJ1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZWxlcG9ydE9wZXJhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IGZvcm1hdHRlZE1lc3NhZ2U6IHN0cmluZyxcbiAgKSB7XG4gICAgc3VwZXIobWVzc2FnZSlcbiAgICB0aGlzLm5hbWUgPSAnVGVsZXBvcnRPcGVyYXRpb25FcnJvcidcbiAgfVxufVxuXG4vKipcbiAqIEVycm9yIHdpdGggYSBtZXNzYWdlIHRoYXQgaXMgc2FmZSB0byBsb2cgdG8gdGVsZW1ldHJ5LlxuICogVXNlIHRoZSBsb25nIG5hbWUgdG8gY29uZmlybSB5b3UndmUgdmVyaWZpZWQgdGhlIG1lc3NhZ2UgY29udGFpbnMgbm9cbiAqIHNlbnNpdGl2ZSBkYXRhIChmaWxlIHBhdGhzLCBVUkxzLCBjb2RlIHNuaXBwZXRzKS5cbiAqXG4gKiBTaW5nbGUtYXJnOiBzYW1lIG1lc3NhZ2UgZm9yIHVzZXIgYW5kIHRlbGVtZXRyeVxuICogVHdvLWFyZzogZGlmZmVyZW50IG1lc3NhZ2VzIChlLmcuLCBmdWxsIG1lc3NhZ2UgaGFzIGZpbGUgcGF0aCwgdGVsZW1ldHJ5IGRvZXNuJ3QpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNhbWUgbWVzc2FnZSBmb3IgYm90aFxuICogdGhyb3cgbmV3IFRlbGVtZXRyeVNhZmVFcnJvcl9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTKFxuICogICAnTUNQIHNlcnZlciBcInNsYWNrXCIgY29ubmVjdGlvbiB0aW1lZCBvdXQnXG4gKiApXG4gKlxuICogLy8gRGlmZmVyZW50IG1lc3NhZ2VzXG4gKiB0aHJvdyBuZXcgVGVsZW1ldHJ5U2FmZUVycm9yX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMoXG4gKiAgIGBNQ1AgdG9vbCB0aW1lZCBvdXQgYWZ0ZXIgJHttc31tc2AsICAvLyBGdWxsIG1lc3NhZ2UgZm9yIGxvZ3MvdXNlclxuICogICAnTUNQIHRvb2wgdGltZWQgb3V0JyAgICAgICAgICAgICAgICAgIC8vIFRlbGVtZXRyeSBtZXNzYWdlXG4gKiApXG4gKi9cbmV4cG9ydCBjbGFzcyBUZWxlbWV0cnlTYWZlRXJyb3JfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyBleHRlbmRzIEVycm9yIHtcbiAgcmVhZG9ubHkgdGVsZW1ldHJ5TWVzc2FnZTogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCB0ZWxlbWV0cnlNZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSlcbiAgICB0aGlzLm5hbWUgPSAnVGVsZW1ldHJ5U2FmZUVycm9yJ1xuICAgIHRoaXMudGVsZW1ldHJ5TWVzc2FnZSA9IHRlbGVtZXRyeU1lc3NhZ2UgPz8gbWVzc2FnZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNFeGFjdEVycm9yTWVzc2FnZShlcnJvcjogdW5rbm93biwgbWVzc2FnZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm1lc3NhZ2UgPT09IG1lc3NhZ2Vcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYW4gdW5rbm93biB2YWx1ZSBpbnRvIGFuIEVycm9yLlxuICogVXNlIGF0IGNhdGNoLXNpdGUgYm91bmRhcmllcyB3aGVuIHlvdSBuZWVkIGFuIEVycm9yIGluc3RhbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9FcnJvcihlOiB1bmtub3duKTogRXJyb3Ige1xuICByZXR1cm4gZSBpbnN0YW5jZW9mIEVycm9yID8gZSA6IG5ldyBFcnJvcihTdHJpbmcoZSkpXG59XG5cbi8qKlxuICogRXh0cmFjdCBhIHN0cmluZyBtZXNzYWdlIGZyb20gYW4gdW5rbm93biBlcnJvci1saWtlIHZhbHVlLlxuICogVXNlIHdoZW4geW91IG9ubHkgbmVlZCB0aGUgbWVzc2FnZSAoZS5nLiwgZm9yIGxvZ2dpbmcgb3IgZGlzcGxheSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvck1lc3NhZ2UoZTogdW5rbm93bik6IHN0cmluZyB7XG4gIHJldHVybiBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiBTdHJpbmcoZSlcbn1cblxuLyoqXG4gKiBFeHRyYWN0IHRoZSBlcnJubyBjb2RlIChlLmcuLCAnRU5PRU5UJywgJ0VBQ0NFUycpIGZyb20gYSBjYXVnaHQgZXJyb3IuXG4gKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGUgZXJyb3IgaGFzIG5vIGNvZGUgb3IgaXMgbm90IGFuIEVycm5vRXhjZXB0aW9uLlxuICogUmVwbGFjZXMgdGhlIGAoZSBhcyBOb2RlSlMuRXJybm9FeGNlcHRpb24pLmNvZGVgIGNhc3QgcGF0dGVybi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm5vQ29kZShlOiB1bmtub3duKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgaWYgKGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdjb2RlJyBpbiBlICYmIHR5cGVvZiBlLmNvZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGUuY29kZVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBUcnVlIGlmIHRoZSBlcnJvciBpcyBFTk9FTlQgKGZpbGUgb3IgZGlyZWN0b3J5IGRvZXMgbm90IGV4aXN0KS5cbiAqIFJlcGxhY2VzIGAoZSBhcyBOb2RlSlMuRXJybm9FeGNlcHRpb24pLmNvZGUgPT09ICdFTk9FTlQnYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRU5PRU5UKGU6IHVua25vd24pOiBib29sZWFuIHtcbiAgcmV0dXJuIGdldEVycm5vQ29kZShlKSA9PT0gJ0VOT0VOVCdcbn1cblxuLyoqXG4gKiBFeHRyYWN0IHRoZSBlcnJubyBwYXRoICh0aGUgZmlsZXN5c3RlbSBwYXRoIHRoYXQgdHJpZ2dlcmVkIHRoZSBlcnJvcilcbiAqIGZyb20gYSBjYXVnaHQgZXJyb3IuIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoZSBlcnJvciBoYXMgbm8gcGF0aC5cbiAqIFJlcGxhY2VzIHRoZSBgKGUgYXMgTm9kZUpTLkVycm5vRXhjZXB0aW9uKS5wYXRoYCBjYXN0IHBhdHRlcm4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJub1BhdGgoZTogdW5rbm93bik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGlmIChlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAncGF0aCcgaW4gZSAmJiB0eXBlb2YgZS5wYXRoID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBlLnBhdGhcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbi8qKlxuICogRXh0cmFjdCBlcnJvciBtZXNzYWdlICsgdG9wIE4gc3RhY2sgZnJhbWVzIGZyb20gYW4gdW5rbm93biBlcnJvci5cbiAqIFVzZSB3aGVuIHRoZSBlcnJvciBmbG93cyB0byB0aGUgbW9kZWwgYXMgYSB0b29sX3Jlc3VsdCBcdTIwMTQgZnVsbCBzdGFja1xuICogdHJhY2VzIGFyZSB+NTAwLTIwMDAgY2hhcnMgb2YgbW9zdGx5LWlycmVsZXZhbnQgaW50ZXJuYWwgZnJhbWVzIGFuZFxuICogd2FzdGUgY29udGV4dCB0b2tlbnMuIEtlZXAgdGhlIGZ1bGwgc3RhY2sgaW4gZGVidWcgbG9ncyBpbnN0ZWFkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvcnRFcnJvclN0YWNrKGU6IHVua25vd24sIG1heEZyYW1lcyA9IDUpOiBzdHJpbmcge1xuICBpZiAoIShlIGluc3RhbmNlb2YgRXJyb3IpKSByZXR1cm4gU3RyaW5nKGUpXG4gIGlmICghZS5zdGFjaykgcmV0dXJuIGUubWVzc2FnZVxuICAvLyBWOC9CdW4gc3RhY2sgZm9ybWF0OiBcIk5hbWU6IG1lc3NhZ2VcXG4gICAgYXQgZnJhbWUxXFxuICAgIGF0IGZyYW1lMi4uLlwiXG4gIC8vIEZpcnN0IGxpbmUgaXMgdGhlIG1lc3NhZ2U7IHN1YnNlcXVlbnQgXCIgICAgYXQgXCIgbGluZXMgYXJlIGZyYW1lcy5cbiAgY29uc3QgbGluZXMgPSBlLnN0YWNrLnNwbGl0KCdcXG4nKVxuICBjb25zdCBoZWFkZXIgPSBsaW5lc1swXSA/PyBlLm1lc3NhZ2VcbiAgY29uc3QgZnJhbWVzID0gbGluZXMuc2xpY2UoMSkuZmlsdGVyKGwgPT4gbC50cmltKCkuc3RhcnRzV2l0aCgnYXQgJykpXG4gIGlmIChmcmFtZXMubGVuZ3RoIDw9IG1heEZyYW1lcykgcmV0dXJuIGUuc3RhY2tcbiAgcmV0dXJuIFtoZWFkZXIsIC4uLmZyYW1lcy5zbGljZSgwLCBtYXhGcmFtZXMpXS5qb2luKCdcXG4nKVxufVxuXG4vKipcbiAqIFRydWUgaWYgdGhlIGVycm9yIG1lYW5zIHRoZSBwYXRoIGlzIG1pc3NpbmcsIGluYWNjZXNzaWJsZSwgb3JcbiAqIHN0cnVjdHVyYWxseSB1bnJlYWNoYWJsZSBcdTIwMTQgdXNlIGluIGNhdGNoIGJsb2NrcyBhZnRlciBmcyBvcGVyYXRpb25zIHRvXG4gKiBkaXN0aW5ndWlzaCBleHBlY3RlZCBcIm5vdGhpbmcgdGhlcmUgLyBubyBhY2Nlc3NcIiBmcm9tIHVuZXhwZWN0ZWQgZXJyb3JzLlxuICpcbiAqIENvdmVyczpcbiAqICBFTk9FTlQgICAgXHUyMDE0IHBhdGggZG9lcyBub3QgZXhpc3RcbiAqICBFQUNDRVMgICAgXHUyMDE0IHBlcm1pc3Npb24gZGVuaWVkXG4gKiAgRVBFUk0gICAgIFx1MjAxNCBvcGVyYXRpb24gbm90IHBlcm1pdHRlZFxuICogIEVOT1RESVIgICBcdTIwMTQgYSBwYXRoIGNvbXBvbmVudCBpcyBub3QgYSBkaXJlY3RvcnkgKGUuZy4gYSBmaWxlIG5hbWVkXG4gKiAgICAgICAgICAgICAgYC5jbGF1ZGVgIGV4aXN0cyB3aGVyZSBhIGRpcmVjdG9yeSBpcyBleHBlY3RlZClcbiAqICBFTE9PUCAgICAgXHUyMDE0IHRvbyBtYW55IHN5bWxpbmsgbGV2ZWxzIChjaXJjdWxhciBzeW1saW5rcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRnNJbmFjY2Vzc2libGUoZTogdW5rbm93bik6IGUgaXMgTm9kZUpTLkVycm5vRXhjZXB0aW9uIHtcbiAgY29uc3QgY29kZSA9IGdldEVycm5vQ29kZShlKVxuICByZXR1cm4gKFxuICAgIGNvZGUgPT09ICdFTk9FTlQnIHx8XG4gICAgY29kZSA9PT0gJ0VBQ0NFUycgfHxcbiAgICBjb2RlID09PSAnRVBFUk0nIHx8XG4gICAgY29kZSA9PT0gJ0VOT1RESVInIHx8XG4gICAgY29kZSA9PT0gJ0VMT09QJ1xuICApXG59XG5cbmV4cG9ydCB0eXBlIEF4aW9zRXJyb3JLaW5kID1cbiAgfCAnYXV0aCcgLy8gNDAxLzQwMyBcdTIwMTQgY2FsbGVyIHR5cGljYWxseSBzZXRzIHNraXBSZXRyeVxuICB8ICd0aW1lb3V0JyAvLyBFQ09OTkFCT1JURURcbiAgfCAnbmV0d29yaycgLy8gRUNPTk5SRUZVU0VEL0VOT1RGT1VORFxuICB8ICdodHRwJyAvLyBvdGhlciBheGlvcyBlcnJvciAobWF5IGhhdmUgc3RhdHVzKVxuICB8ICdvdGhlcicgLy8gbm90IGFuIGF4aW9zIGVycm9yXG5cbi8qKlxuICogQ2xhc3NpZnkgYSBjYXVnaHQgZXJyb3IgZnJvbSBhbiBheGlvcyByZXF1ZXN0IGludG8gb25lIG9mIGEgZmV3IGJ1Y2tldHMuXG4gKiBSZXBsYWNlcyB0aGUgfjIwLWxpbmUgaXNBeGlvc0Vycm9yIFx1MjE5MiA0MDEvNDAzIFx1MjE5MiBFQ09OTkFCT1JURUQgXHUyMTkyIEVDT05OUkVGVVNFRFxuICogY2hhaW4gZHVwbGljYXRlZCBhY3Jvc3Mgc3luYy1zdHlsZSBzZXJ2aWNlcyAoc2V0dGluZ3NTeW5jLCBwb2xpY3lMaW1pdHMsXG4gKiByZW1vdGVNYW5hZ2VkU2V0dGluZ3MsIHRlYW1NZW1vcnlTeW5jKS5cbiAqXG4gKiBDaGVja3MgdGhlIGAuaXNBeGlvc0Vycm9yYCBtYXJrZXIgcHJvcGVydHkgZGlyZWN0bHkgKHNhbWUgYXNcbiAqIGF4aW9zLmlzQXhpb3NFcnJvcigpKSB0byBrZWVwIHRoaXMgbW9kdWxlIGRlcGVuZGVuY3ktZnJlZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5QXhpb3NFcnJvcihlOiB1bmtub3duKToge1xuICBraW5kOiBBeGlvc0Vycm9yS2luZFxuICBzdGF0dXM/OiBudW1iZXJcbiAgbWVzc2FnZTogc3RyaW5nXG59IHtcbiAgY29uc3QgbWVzc2FnZSA9IGVycm9yTWVzc2FnZShlKVxuICBpZiAoXG4gICAgIWUgfHxcbiAgICB0eXBlb2YgZSAhPT0gJ29iamVjdCcgfHxcbiAgICAhKCdpc0F4aW9zRXJyb3InIGluIGUpIHx8XG4gICAgIWUuaXNBeGlvc0Vycm9yXG4gICkge1xuICAgIHJldHVybiB7IGtpbmQ6ICdvdGhlcicsIG1lc3NhZ2UgfVxuICB9XG4gIGNvbnN0IGVyciA9IGUgYXMge1xuICAgIHJlc3BvbnNlPzogeyBzdGF0dXM/OiBudW1iZXIgfVxuICAgIGNvZGU/OiBzdHJpbmdcbiAgfVxuICBjb25zdCBzdGF0dXMgPSBlcnIucmVzcG9uc2U/LnN0YXR1c1xuICBpZiAoc3RhdHVzID09PSA0MDEgfHwgc3RhdHVzID09PSA0MDMpIHJldHVybiB7IGtpbmQ6ICdhdXRoJywgc3RhdHVzLCBtZXNzYWdlIH1cbiAgaWYgKGVyci5jb2RlID09PSAnRUNPTk5BQk9SVEVEJykgcmV0dXJuIHsga2luZDogJ3RpbWVvdXQnLCBzdGF0dXMsIG1lc3NhZ2UgfVxuICBpZiAoZXJyLmNvZGUgPT09ICdFQ09OTlJFRlVTRUQnIHx8IGVyci5jb2RlID09PSAnRU5PVEZPVU5EJykge1xuICAgIHJldHVybiB7IGtpbmQ6ICduZXR3b3JrJywgc3RhdHVzLCBtZXNzYWdlIH1cbiAgfVxuICByZXR1cm4geyBraW5kOiAnaHR0cCcsIHN0YXR1cywgbWVzc2FnZSB9XG59XG4iLCAiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheUVhY2g7XG4iLCAiaW1wb3J0IGdldE5hdGl2ZSBmcm9tICcuL19nZXROYXRpdmUuanMnO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lUHJvcGVydHk7XG4iLCAiaW1wb3J0IGRlZmluZVByb3BlcnR5IGZyb20gJy4vX2RlZmluZVByb3BlcnR5LmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUFzc2lnblZhbHVlO1xuIiwgImltcG9ydCBiYXNlQXNzaWduVmFsdWUgZnJvbSAnLi9fYmFzZUFzc2lnblZhbHVlLmpzJztcbmltcG9ydCBlcSBmcm9tICcuL2VxLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXNzaWduVmFsdWU7XG4iLCAiaW1wb3J0IGFzc2lnblZhbHVlIGZyb20gJy4vX2Fzc2lnblZhbHVlLmpzJztcbmltcG9ydCBiYXNlQXNzaWduVmFsdWUgZnJvbSAnLi9fYmFzZUFzc2lnblZhbHVlLmpzJztcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHlPYmplY3Q7XG4iLCAiaW1wb3J0IGNvcHlPYmplY3QgZnJvbSAnLi9fY29weU9iamVjdC5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VBc3NpZ247XG4iLCAiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdGl2ZUtleXNJbjtcbiIsICJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgaXNQcm90b3R5cGUgZnJvbSAnLi9faXNQcm90b3R5cGUuanMnO1xuaW1wb3J0IG5hdGl2ZUtleXNJbiBmcm9tICcuL19uYXRpdmVLZXlzSW4uanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlS2V5c0luO1xuIiwgImltcG9ydCBhcnJheUxpa2VLZXlzIGZyb20gJy4vX2FycmF5TGlrZUtleXMuanMnO1xuaW1wb3J0IGJhc2VLZXlzSW4gZnJvbSAnLi9fYmFzZUtleXNJbi5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9pc0FycmF5TGlrZS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlzSW47XG4iLCAiaW1wb3J0IGNvcHlPYmplY3QgZnJvbSAnLi9fY29weU9iamVjdC5qcyc7XG5pbXBvcnQga2V5c0luIGZyb20gJy4va2V5c0luLmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlQXNzaWduSW47XG4iLCAiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lQnVmZmVyO1xuIiwgIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3B5QXJyYXk7XG4iLCAiaW1wb3J0IGNvcHlPYmplY3QgZnJvbSAnLi9fY29weU9iamVjdC5qcyc7XG5pbXBvcnQgZ2V0U3ltYm9scyBmcm9tICcuL19nZXRTeW1ib2xzLmpzJztcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3B5U3ltYm9scztcbiIsICJpbXBvcnQgb3ZlckFyZyBmcm9tICcuL19vdmVyQXJnLmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFByb3RvdHlwZTtcbiIsICJpbXBvcnQgYXJyYXlQdXNoIGZyb20gJy4vX2FycmF5UHVzaC5qcyc7XG5pbXBvcnQgZ2V0UHJvdG90eXBlIGZyb20gJy4vX2dldFByb3RvdHlwZS5qcyc7XG5pbXBvcnQgZ2V0U3ltYm9scyBmcm9tICcuL19nZXRTeW1ib2xzLmpzJztcbmltcG9ydCBzdHViQXJyYXkgZnJvbSAnLi9zdHViQXJyYXkuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTeW1ib2xzSW47XG4iLCAiaW1wb3J0IGNvcHlPYmplY3QgZnJvbSAnLi9fY29weU9iamVjdC5qcyc7XG5pbXBvcnQgZ2V0U3ltYm9sc0luIGZyb20gJy4vX2dldFN5bWJvbHNJbi5qcyc7XG5cbi8qKlxuICogQ29waWVzIG93biBhbmQgaW5oZXJpdGVkIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzSW4oc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29weVN5bWJvbHNJbjtcbiIsICJpbXBvcnQgYmFzZUdldEFsbEtleXMgZnJvbSAnLi9fYmFzZUdldEFsbEtleXMuanMnO1xuaW1wb3J0IGdldFN5bWJvbHNJbiBmcm9tICcuL19nZXRTeW1ib2xzSW4uanMnO1xuaW1wb3J0IGtleXNJbiBmcm9tICcuL2tleXNJbi5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsbEtleXNJbjtcbiIsICIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gbmV3IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0Q2xvbmVBcnJheTtcbiIsICJpbXBvcnQgVWludDhBcnJheSBmcm9tICcuL19VaW50OEFycmF5LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZUFycmF5QnVmZmVyO1xuIiwgImltcG9ydCBjbG9uZUFycmF5QnVmZmVyIGZyb20gJy4vX2Nsb25lQXJyYXlCdWZmZXIuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZURhdGFWaWV3O1xuIiwgIi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lUmVnRXhwO1xuIiwgImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZVN5bWJvbDtcbiIsICJpbXBvcnQgY2xvbmVBcnJheUJ1ZmZlciBmcm9tICcuL19jbG9uZUFycmF5QnVmZmVyLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVUeXBlZEFycmF5O1xuIiwgImltcG9ydCBjbG9uZUFycmF5QnVmZmVyIGZyb20gJy4vX2Nsb25lQXJyYXlCdWZmZXIuanMnO1xuaW1wb3J0IGNsb25lRGF0YVZpZXcgZnJvbSAnLi9fY2xvbmVEYXRhVmlldy5qcyc7XG5pbXBvcnQgY2xvbmVSZWdFeHAgZnJvbSAnLi9fY2xvbmVSZWdFeHAuanMnO1xuaW1wb3J0IGNsb25lU3ltYm9sIGZyb20gJy4vX2Nsb25lU3ltYm9sLmpzJztcbmltcG9ydCBjbG9uZVR5cGVkQXJyYXkgZnJvbSAnLi9fY2xvbmVUeXBlZEFycmF5LmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE1hcGAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgYFNldGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcjtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3I7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRDbG9uZUJ5VGFnO1xuIiwgImltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgYmFzZUNyZWF0ZTtcbiIsICJpbXBvcnQgYmFzZUNyZWF0ZSBmcm9tICcuL19iYXNlQ3JlYXRlLmpzJztcbmltcG9ydCBnZXRQcm90b3R5cGUgZnJvbSAnLi9fZ2V0UHJvdG90eXBlLmpzJztcbmltcG9ydCBpc1Byb3RvdHlwZSBmcm9tICcuL19pc1Byb3RvdHlwZS5qcyc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdENsb25lT2JqZWN0O1xuIiwgImltcG9ydCBnZXRUYWcgZnJvbSAnLi9fZ2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXBgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hcCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IG1hcFRhZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzTWFwO1xuIiwgImltcG9ydCBiYXNlSXNNYXAgZnJvbSAnLi9fYmFzZUlzTWFwLmpzJztcbmltcG9ydCBiYXNlVW5hcnkgZnJvbSAnLi9fYmFzZVVuYXJ5LmpzJztcbmltcG9ydCBub2RlVXRpbCBmcm9tICcuL19ub2RlVXRpbC5qcyc7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzTWFwID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNNYXA7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBNYXBgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTWFwKG5ldyBNYXApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNNYXAobmV3IFdlYWtNYXApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzTWFwID0gbm9kZUlzTWFwID8gYmFzZVVuYXJ5KG5vZGVJc01hcCkgOiBiYXNlSXNNYXA7XG5cbmV4cG9ydCBkZWZhdWx0IGlzTWFwO1xuIiwgImltcG9ydCBnZXRUYWcgZnJvbSAnLi9fZ2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNTZXRgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1NldCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IHNldFRhZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzU2V0O1xuIiwgImltcG9ydCBiYXNlSXNTZXQgZnJvbSAnLi9fYmFzZUlzU2V0LmpzJztcbmltcG9ydCBiYXNlVW5hcnkgZnJvbSAnLi9fYmFzZVVuYXJ5LmpzJztcbmltcG9ydCBub2RlVXRpbCBmcm9tICcuL19ub2RlVXRpbC5qcyc7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzU2V0ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNTZXQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTZXRgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHNldCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU2V0KG5ldyBTZXQpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTZXQobmV3IFdlYWtTZXQpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzU2V0ID0gbm9kZUlzU2V0ID8gYmFzZVVuYXJ5KG5vZGVJc1NldCkgOiBiYXNlSXNTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGlzU2V0O1xuIiwgImltcG9ydCBTdGFjayBmcm9tICcuL19TdGFjay5qcyc7XG5pbXBvcnQgYXJyYXlFYWNoIGZyb20gJy4vX2FycmF5RWFjaC5qcyc7XG5pbXBvcnQgYXNzaWduVmFsdWUgZnJvbSAnLi9fYXNzaWduVmFsdWUuanMnO1xuaW1wb3J0IGJhc2VBc3NpZ24gZnJvbSAnLi9fYmFzZUFzc2lnbi5qcyc7XG5pbXBvcnQgYmFzZUFzc2lnbkluIGZyb20gJy4vX2Jhc2VBc3NpZ25Jbi5qcyc7XG5pbXBvcnQgY2xvbmVCdWZmZXIgZnJvbSAnLi9fY2xvbmVCdWZmZXIuanMnO1xuaW1wb3J0IGNvcHlBcnJheSBmcm9tICcuL19jb3B5QXJyYXkuanMnO1xuaW1wb3J0IGNvcHlTeW1ib2xzIGZyb20gJy4vX2NvcHlTeW1ib2xzLmpzJztcbmltcG9ydCBjb3B5U3ltYm9sc0luIGZyb20gJy4vX2NvcHlTeW1ib2xzSW4uanMnO1xuaW1wb3J0IGdldEFsbEtleXMgZnJvbSAnLi9fZ2V0QWxsS2V5cy5qcyc7XG5pbXBvcnQgZ2V0QWxsS2V5c0luIGZyb20gJy4vX2dldEFsbEtleXNJbi5qcyc7XG5pbXBvcnQgZ2V0VGFnIGZyb20gJy4vX2dldFRhZy5qcyc7XG5pbXBvcnQgaW5pdENsb25lQXJyYXkgZnJvbSAnLi9faW5pdENsb25lQXJyYXkuanMnO1xuaW1wb3J0IGluaXRDbG9uZUJ5VGFnIGZyb20gJy4vX2luaXRDbG9uZUJ5VGFnLmpzJztcbmltcG9ydCBpbml0Q2xvbmVPYmplY3QgZnJvbSAnLi9faW5pdENsb25lT2JqZWN0LmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNCdWZmZXIgZnJvbSAnLi9pc0J1ZmZlci5qcyc7XG5pbXBvcnQgaXNNYXAgZnJvbSAnLi9pc01hcC5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgaXNTZXQgZnJvbSAnLi9pc1NldC5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuaW1wb3J0IGtleXNJbiBmcm9tICcuL2tleXNJbi5qcyc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSkge1xuICAgICAgcmVzdWx0LmFkZChiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN1YlZhbHVlLCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc01hcCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlQ2xvbmU7XG4iLCAiaW1wb3J0IGJhc2VDbG9uZSBmcm9tICcuL19iYXNlQ2xvbmUuanMnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIENMT05FX0RFRVBfRkxBRyB8IENMT05FX1NZTUJPTFNfRkxBRyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lRGVlcDtcbiIsICJpbXBvcnQgbWVtb2l6ZSBmcm9tICdsb2Rhc2gtZXMvbWVtb2l6ZS5qcydcblxuZXhwb3J0IHR5cGUgRGVidWdGaWx0ZXIgPSB7XG4gIGluY2x1ZGU6IHN0cmluZ1tdXG4gIGV4Y2x1ZGU6IHN0cmluZ1tdXG4gIGlzRXhjbHVzaXZlOiBib29sZWFuXG59XG5cbi8qKlxuICogUGFyc2UgZGVidWcgZmlsdGVyIHN0cmluZyBpbnRvIGEgZmlsdGVyIGNvbmZpZ3VyYXRpb25cbiAqIEV4YW1wbGVzOlxuICogLSBcImFwaSxob29rc1wiIC0+IGluY2x1ZGUgb25seSBhcGkgYW5kIGhvb2tzIGNhdGVnb3JpZXNcbiAqIC0gXCIhMXAsIWZpbGVcIiAtPiBleGNsdWRlIGxvZ2dpbmcgYW5kIGZpbGUgY2F0ZWdvcmllc1xuICogLSB1bmRlZmluZWQvZW1wdHkgLT4gbm8gZmlsdGVyaW5nIChzaG93IGFsbClcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlRGVidWdGaWx0ZXIgPSBtZW1vaXplKFxuICAoZmlsdGVyU3RyaW5nPzogc3RyaW5nKTogRGVidWdGaWx0ZXIgfCBudWxsID0+IHtcbiAgICBpZiAoIWZpbHRlclN0cmluZyB8fCBmaWx0ZXJTdHJpbmcudHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gZmlsdGVyU3RyaW5nXG4gICAgICAuc3BsaXQoJywnKVxuICAgICAgLm1hcChmID0+IGYudHJpbSgpKVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuXG4gICAgLy8gSWYgbm8gdmFsaWQgZmlsdGVycyByZW1haW4sIHJldHVybiBudWxsXG4gICAgaWYgKGZpbHRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBtaXhlZCBpbmNsdXNpdmUvZXhjbHVzaXZlIGZpbHRlcnNcbiAgICBjb25zdCBoYXNFeGNsdXNpdmUgPSBmaWx0ZXJzLnNvbWUoZiA9PiBmLnN0YXJ0c1dpdGgoJyEnKSlcbiAgICBjb25zdCBoYXNJbmNsdXNpdmUgPSBmaWx0ZXJzLnNvbWUoZiA9PiAhZi5zdGFydHNXaXRoKCchJykpXG5cbiAgICBpZiAoaGFzRXhjbHVzaXZlICYmIGhhc0luY2x1c2l2ZSkge1xuICAgICAgLy8gRm9yIG5vdywgd2UnbGwgdHJlYXQgdGhpcyBhcyBhbiBlcnJvciBjYXNlIGFuZCBzaG93IGFsbCBtZXNzYWdlc1xuICAgICAgLy8gTG9nIGVycm9yIHVzaW5nIGxvZ0ZvckRlYnVnZ2luZyB0byBhdm9pZCBjb25zb2xlLmVycm9yIGxpbnQgcnVsZVxuICAgICAgLy8gV2UnbGwgaW1wb3J0IGFuZCB1c2UgaXQgbGF0ZXIgd2hlbiB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeSBpcyByZXNvbHZlZFxuICAgICAgLy8gRm9yIG5vdywganVzdCByZXR1cm4gbnVsbCBzaWxlbnRseVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBDbGVhbiB1cCBmaWx0ZXJzIChyZW1vdmUgISBwcmVmaXgpIGFuZCBub3JtYWxpemVcbiAgICBjb25zdCBjbGVhbkZpbHRlcnMgPSBmaWx0ZXJzLm1hcChmID0+IGYucmVwbGFjZSgvXiEvLCAnJykudG9Mb3dlckNhc2UoKSlcblxuICAgIHJldHVybiB7XG4gICAgICBpbmNsdWRlOiBoYXNFeGNsdXNpdmUgPyBbXSA6IGNsZWFuRmlsdGVycyxcbiAgICAgIGV4Y2x1ZGU6IGhhc0V4Y2x1c2l2ZSA/IGNsZWFuRmlsdGVycyA6IFtdLFxuICAgICAgaXNFeGNsdXNpdmU6IGhhc0V4Y2x1c2l2ZSxcbiAgICB9XG4gIH0sXG4pXG5cbi8qKlxuICogRXh0cmFjdCBkZWJ1ZyBjYXRlZ29yaWVzIGZyb20gYSBtZXNzYWdlXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBwYXR0ZXJuczpcbiAqIC0gXCJjYXRlZ29yeTogbWVzc2FnZVwiIC0+IFtcImNhdGVnb3J5XCJdXG4gKiAtIFwiW0NBVEVHT1JZXSBtZXNzYWdlXCIgLT4gW1wiY2F0ZWdvcnlcIl1cbiAqIC0gXCJNQ1Agc2VydmVyIFxcXCJuYW1lXFxcIjogbWVzc2FnZVwiIC0+IFtcIm1jcFwiLCBcIm5hbWVcIl1cbiAqIC0gXCJbQU5ULU9OTFldIDFQIGV2ZW50OiB0ZW5ndV90aW1lclwiIC0+IFtcImFudC1vbmx5XCIsIFwiMXBcIl1cbiAqXG4gKiBSZXR1cm5zIGxvd2VyY2FzZSBjYXRlZ29yaWVzIGZvciBjYXNlLWluc2Vuc2l0aXZlIG1hdGNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RGVidWdDYXRlZ29yaWVzKG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgY29uc3QgY2F0ZWdvcmllczogc3RyaW5nW10gPSBbXVxuXG4gIC8vIFBhdHRlcm4gMzogTUNQIHNlcnZlciBcInNlcnZlcm5hbWVcIiAtIENoZWNrIHRoaXMgZmlyc3QgdG8gYXZvaWQgZmFsc2UgcG9zaXRpdmVzXG4gIGNvbnN0IG1jcE1hdGNoID0gbWVzc2FnZS5tYXRjaCgvXk1DUCBzZXJ2ZXIgW1wiJ10oW15cIiddKylbXCInXS8pXG4gIGlmIChtY3BNYXRjaCAmJiBtY3BNYXRjaFsxXSkge1xuICAgIGNhdGVnb3JpZXMucHVzaCgnbWNwJylcbiAgICBjYXRlZ29yaWVzLnB1c2gobWNwTWF0Y2hbMV0udG9Mb3dlckNhc2UoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBQYXR0ZXJuIDE6IFwiY2F0ZWdvcnk6IG1lc3NhZ2VcIiAoc2ltcGxlIHByZWZpeCkgLSBvbmx5IGlmIG5vdCBNQ1AgcGF0dGVyblxuICAgIGNvbnN0IHByZWZpeE1hdGNoID0gbWVzc2FnZS5tYXRjaCgvXihbXjpbXSspOi8pXG4gICAgaWYgKHByZWZpeE1hdGNoICYmIHByZWZpeE1hdGNoWzFdKSB7XG4gICAgICBjYXRlZ29yaWVzLnB1c2gocHJlZml4TWF0Y2hbMV0udHJpbSgpLnRvTG93ZXJDYXNlKCkpXG4gICAgfVxuICB9XG5cbiAgLy8gUGF0dGVybiAyOiBbQ0FURUdPUlldIGF0IHRoZSBzdGFydFxuICBjb25zdCBicmFja2V0TWF0Y2ggPSBtZXNzYWdlLm1hdGNoKC9eXFxbKFteXFxdXSspXS8pXG4gIGlmIChicmFja2V0TWF0Y2ggJiYgYnJhY2tldE1hdGNoWzFdKSB7XG4gICAgY2F0ZWdvcmllcy5wdXNoKGJyYWNrZXRNYXRjaFsxXS50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgfVxuXG4gIC8vIFBhdHRlcm4gNDogQ2hlY2sgZm9yIGFkZGl0aW9uYWwgY2F0ZWdvcmllcyBpbiB0aGUgbWVzc2FnZVxuICAvLyBlLmcuLCBcIltBTlQtT05MWV0gMVAgZXZlbnQ6IHRlbmd1X3RpbWVyXCIgc2hvdWxkIG1hdGNoIGJvdGggXCJhbnQtb25seVwiIGFuZCBcIjFwXCJcbiAgaWYgKG1lc3NhZ2UudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnMXAgZXZlbnQ6JykpIHtcbiAgICBjYXRlZ29yaWVzLnB1c2goJzFwJylcbiAgfVxuXG4gIC8vIFBhdHRlcm4gNTogTG9vayBmb3Igc2Vjb25kYXJ5IGNhdGVnb3JpZXMgYWZ0ZXIgdGhlIGZpcnN0IHBhdHRlcm5cbiAgLy8gZS5nLiwgXCJBdXRvVXBkYXRlcldyYXBwZXI6IEluc3RhbGxhdGlvbiB0eXBlOiBkZXZlbG9wbWVudFwiXG4gIGNvbnN0IHNlY29uZGFyeU1hdGNoID0gbWVzc2FnZS5tYXRjaChcbiAgICAvOlxccyooW146XSs/KSg/OlxccysoPzp0eXBlfG1vZGV8c3RhdHVzfGV2ZW50KSk/Oi8sXG4gIClcbiAgaWYgKHNlY29uZGFyeU1hdGNoICYmIHNlY29uZGFyeU1hdGNoWzFdKSB7XG4gICAgY29uc3Qgc2Vjb25kYXJ5ID0gc2Vjb25kYXJ5TWF0Y2hbMV0udHJpbSgpLnRvTG93ZXJDYXNlKClcbiAgICAvLyBPbmx5IGFkZCBpZiBpdCdzIGEgcmVhc29uYWJsZSBjYXRlZ29yeSBuYW1lIChub3QgdG9vIGxvbmcsIG5vIHNwYWNlcylcbiAgICBpZiAoc2Vjb25kYXJ5Lmxlbmd0aCA8IDMwICYmICFzZWNvbmRhcnkuaW5jbHVkZXMoJyAnKSkge1xuICAgICAgY2F0ZWdvcmllcy5wdXNoKHNlY29uZGFyeSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBubyBjYXRlZ29yaWVzIGZvdW5kLCByZXR1cm4gZW1wdHkgYXJyYXkgKHVuY2F0ZWdvcml6ZWQpXG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoY2F0ZWdvcmllcykpIC8vIFJlbW92ZSBkdXBsaWNhdGVzXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgZGVidWcgbWVzc2FnZSBzaG91bGQgYmUgc2hvd24gYmFzZWQgb24gZmlsdGVyXG4gKiBAcGFyYW0gY2F0ZWdvcmllcyAtIENhdGVnb3JpZXMgZXh0cmFjdGVkIGZyb20gdGhlIG1lc3NhZ2VcbiAqIEBwYXJhbSBmaWx0ZXIgLSBQYXJzZWQgZmlsdGVyIGNvbmZpZ3VyYXRpb25cbiAqIEByZXR1cm5zIHRydWUgaWYgbWVzc2FnZSBzaG91bGQgYmUgc2hvd25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFNob3dEZWJ1Z0NhdGVnb3JpZXMoXG4gIGNhdGVnb3JpZXM6IHN0cmluZ1tdLFxuICBmaWx0ZXI6IERlYnVnRmlsdGVyIHwgbnVsbCxcbik6IGJvb2xlYW4ge1xuICAvLyBObyBmaWx0ZXIgbWVhbnMgc2hvdyBldmVyeXRoaW5nXG4gIGlmICghZmlsdGVyKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIElmIG5vIGNhdGVnb3JpZXMgZm91bmQsIGhhbmRsZSBiYXNlZCBvbiBmaWx0ZXIgbW9kZVxuICBpZiAoY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBJbiBleGNsdXNpdmUgbW9kZSwgdW5jYXRlZ29yaXplZCBtZXNzYWdlcyBhcmUgZXhjbHVkZWQgYnkgZGVmYXVsdCBmb3Igc2VjdXJpdHlcbiAgICAvLyBJbiBpbmNsdXNpdmUgbW9kZSwgdW5jYXRlZ29yaXplZCBtZXNzYWdlcyBhcmUgZXhjbHVkZWQgKG11c3QgbWF0Y2ggYSBjYXRlZ29yeSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChmaWx0ZXIuaXNFeGNsdXNpdmUpIHtcbiAgICAvLyBFeGNsdXNpdmUgbW9kZTogc2hvdyBpZiBub25lIG9mIHRoZSBjYXRlZ29yaWVzIGFyZSBpbiB0aGUgZXhjbHVkZSBsaXN0XG4gICAgcmV0dXJuICFjYXRlZ29yaWVzLnNvbWUoY2F0ID0+IGZpbHRlci5leGNsdWRlLmluY2x1ZGVzKGNhdCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gSW5jbHVzaXZlIG1vZGU6IHNob3cgaWYgYW55IG9mIHRoZSBjYXRlZ29yaWVzIGFyZSBpbiB0aGUgaW5jbHVkZSBsaXN0XG4gICAgcmV0dXJuIGNhdGVnb3JpZXMuc29tZShjYXQgPT4gZmlsdGVyLmluY2x1ZGUuaW5jbHVkZXMoY2F0KSlcbiAgfVxufVxuXG4vKipcbiAqIE1haW4gZnVuY3Rpb24gdG8gY2hlY2sgaWYgYSBkZWJ1ZyBtZXNzYWdlIHNob3VsZCBiZSBzaG93blxuICogQ29tYmluZXMgZXh0cmFjdGlvbiBhbmQgZmlsdGVyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRTaG93RGVidWdNZXNzYWdlKFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIGZpbHRlcjogRGVidWdGaWx0ZXIgfCBudWxsLFxuKTogYm9vbGVhbiB7XG4gIC8vIEZhc3QgcGF0aDogbm8gZmlsdGVyIG1lYW5zIHNob3cgZXZlcnl0aGluZ1xuICBpZiAoIWZpbHRlcikge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBPbmx5IGV4dHJhY3QgY2F0ZWdvcmllcyBpZiB3ZSBoYXZlIGEgZmlsdGVyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBleHRyYWN0RGVidWdDYXRlZ29yaWVzKG1lc3NhZ2UpXG4gIHJldHVybiBzaG91bGRTaG93RGVidWdDYXRlZ29yaWVzKGNhdGVnb3JpZXMsIGZpbHRlcilcbn1cbiIsICJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcydcbmltcG9ydCB7XG4gIG1rZGlyIGFzIG1rZGlyUHJvbWlzZSxcbiAgb3BlbixcbiAgcmVhZGRpciBhcyByZWFkZGlyUHJvbWlzZSxcbiAgcmVhZEZpbGUgYXMgcmVhZEZpbGVQcm9taXNlLFxuICByZW5hbWUgYXMgcmVuYW1lUHJvbWlzZSxcbiAgcm1kaXIgYXMgcm1kaXJQcm9taXNlLFxuICBybSBhcyBybVByb21pc2UsXG4gIHN0YXQgYXMgc3RhdFByb21pc2UsXG4gIHVubGluayBhcyB1bmxpbmtQcm9taXNlLFxufSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGhvbWVkaXIgfSBmcm9tICdvcydcbmltcG9ydCAqIGFzIG5vZGVQYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRFcnJub0NvZGUgfSBmcm9tICcuL2Vycm9ycy5qcydcbmltcG9ydCB7IHNsb3dMb2dnaW5nIH0gZnJvbSAnLi9zbG93T3BlcmF0aW9ucy5qcydcblxuLyoqXG4gKiBTaW1wbGlmaWVkIGZpbGVzeXN0ZW0gb3BlcmF0aW9ucyBpbnRlcmZhY2UgYmFzZWQgb24gTm9kZS5qcyBmcyBtb2R1bGUuXG4gKiBQcm92aWRlcyBhIHN1YnNldCBvZiBjb21tb25seSB1c2VkIHN5bmMgb3BlcmF0aW9ucyB3aXRoIHR5cGUgc2FmZXR5LlxuICogQWxsb3dzIGFic3RyYWN0aW9uIGZvciBhbHRlcm5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgKGUuZy4sIG1vY2ssIHZpcnR1YWwpLlxuICovXG5leHBvcnQgdHlwZSBGc09wZXJhdGlvbnMgPSB7XG4gIC8vIEZpbGUgYWNjZXNzIGFuZCBpbmZvcm1hdGlvbiBvcGVyYXRpb25zXG4gIC8qKiBHZXRzIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5ICovXG4gIGN3ZCgpOiBzdHJpbmdcbiAgLyoqIENoZWNrcyBpZiBhIGZpbGUgb3IgZGlyZWN0b3J5IGV4aXN0cyAqL1xuICBleGlzdHNTeW5jKHBhdGg6IHN0cmluZyk6IGJvb2xlYW5cbiAgLyoqIEdldHMgZmlsZSBzdGF0cyBhc3luY2hyb25vdXNseSAqL1xuICBzdGF0KHBhdGg6IHN0cmluZyk6IFByb21pc2U8ZnMuU3RhdHM+XG4gIC8qKiBMaXN0cyBkaXJlY3RvcnkgY29udGVudHMgd2l0aCBmaWxlIHR5cGUgaW5mb3JtYXRpb24gYXN5bmNocm9ub3VzbHkgKi9cbiAgcmVhZGRpcihwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGZzLkRpcmVudFtdPlxuICAvKiogRGVsZXRlcyBmaWxlIGFzeW5jaHJvbm91c2x5ICovXG4gIHVubGluayhwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG4gIC8qKiBSZW1vdmVzIGFuIGVtcHR5IGRpcmVjdG9yeSBhc3luY2hyb25vdXNseSAqL1xuICBybWRpcihwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG4gIC8qKiBSZW1vdmVzIGZpbGVzIGFuZCBkaXJlY3RvcmllcyBhc3luY2hyb25vdXNseSAod2l0aCByZWN1cnNpdmUgb3B0aW9uKSAqL1xuICBybShcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHsgcmVjdXJzaXZlPzogYm9vbGVhbjsgZm9yY2U/OiBib29sZWFuIH0sXG4gICk6IFByb21pc2U8dm9pZD5cbiAgLyoqIENyZWF0ZXMgZGlyZWN0b3J5IHJlY3Vyc2l2ZWx5IGFzeW5jaHJvbm91c2x5LiAqL1xuICBta2RpcihwYXRoOiBzdHJpbmcsIG9wdGlvbnM/OiB7IG1vZGU/OiBudW1iZXIgfSk6IFByb21pc2U8dm9pZD5cbiAgLyoqIFJlYWRzIGZpbGUgY29udGVudCBhcyBzdHJpbmcgYXN5bmNocm9ub3VzbHkgKi9cbiAgcmVhZEZpbGUocGF0aDogc3RyaW5nLCBvcHRpb25zOiB7IGVuY29kaW5nOiBCdWZmZXJFbmNvZGluZyB9KTogUHJvbWlzZTxzdHJpbmc+XG4gIC8qKiBSZW5hbWVzL21vdmVzIGZpbGUgYXN5bmNocm9ub3VzbHkgKi9cbiAgcmVuYW1lKG9sZFBhdGg6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxuICAvKiogR2V0cyBmaWxlIHN0YXRzICovXG4gIHN0YXRTeW5jKHBhdGg6IHN0cmluZyk6IGZzLlN0YXRzXG4gIC8qKiBHZXRzIGZpbGUgc3RhdHMgd2l0aG91dCBmb2xsb3dpbmcgc3ltbGlua3MgKi9cbiAgbHN0YXRTeW5jKHBhdGg6IHN0cmluZyk6IGZzLlN0YXRzXG5cbiAgLy8gRmlsZSBjb250ZW50IG9wZXJhdGlvbnNcbiAgLyoqIFJlYWRzIGZpbGUgY29udGVudCBhcyBzdHJpbmcgd2l0aCBzcGVjaWZpZWQgZW5jb2RpbmcgKi9cbiAgcmVhZEZpbGVTeW5jKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBlbmNvZGluZzogQnVmZmVyRW5jb2RpbmdcbiAgICB9LFxuICApOiBzdHJpbmdcbiAgLyoqIFJlYWRzIHJhdyBmaWxlIGJ5dGVzIGFzIEJ1ZmZlciAqL1xuICByZWFkRmlsZUJ5dGVzU3luYyhwYXRoOiBzdHJpbmcpOiBCdWZmZXJcbiAgLyoqIFJlYWRzIHNwZWNpZmllZCBudW1iZXIgb2YgYnl0ZXMgZnJvbSBmaWxlIHN0YXJ0ICovXG4gIHJlYWRTeW5jKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBsZW5ndGg6IG51bWJlclxuICAgIH0sXG4gICk6IHtcbiAgICBidWZmZXI6IEJ1ZmZlclxuICAgIGJ5dGVzUmVhZDogbnVtYmVyXG4gIH1cbiAgLyoqIEFwcGVuZHMgc3RyaW5nIHRvIGZpbGUgKi9cbiAgYXBwZW5kRmlsZVN5bmMocGF0aDogc3RyaW5nLCBkYXRhOiBzdHJpbmcsIG9wdGlvbnM/OiB7IG1vZGU/OiBudW1iZXIgfSk6IHZvaWRcbiAgLyoqIENvcGllcyBmaWxlIGZyb20gc291cmNlIHRvIGRlc3RpbmF0aW9uICovXG4gIGNvcHlGaWxlU3luYyhzcmM6IHN0cmluZywgZGVzdDogc3RyaW5nKTogdm9pZFxuICAvKiogRGVsZXRlcyBmaWxlICovXG4gIHVubGlua1N5bmMocGF0aDogc3RyaW5nKTogdm9pZFxuICAvKiogUmVuYW1lcy9tb3ZlcyBmaWxlICovXG4gIHJlbmFtZVN5bmMob2xkUGF0aDogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcpOiB2b2lkXG4gIC8qKiBDcmVhdGVzIGhhcmQgbGluayAqL1xuICBsaW5rU3luYyh0YXJnZXQ6IHN0cmluZywgcGF0aDogc3RyaW5nKTogdm9pZFxuICAvKiogQ3JlYXRlcyBzeW1ib2xpYyBsaW5rICovXG4gIHN5bWxpbmtTeW5jKFxuICAgIHRhcmdldDogc3RyaW5nLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICB0eXBlPzogJ2RpcicgfCAnZmlsZScgfCAnanVuY3Rpb24nLFxuICApOiB2b2lkXG4gIC8qKiBSZWFkcyBzeW1ib2xpYyBsaW5rICovXG4gIHJlYWRsaW5rU3luYyhwYXRoOiBzdHJpbmcpOiBzdHJpbmdcbiAgLyoqIFJlc29sdmVzIHN5bWJvbGljIGxpbmtzIGFuZCByZXR1cm5zIHRoZSBjYW5vbmljYWwgcGF0aG5hbWUgKi9cbiAgcmVhbHBhdGhTeW5jKHBhdGg6IHN0cmluZyk6IHN0cmluZ1xuXG4gIC8vIERpcmVjdG9yeSBvcGVyYXRpb25zXG4gIC8qKiBDcmVhdGVzIGRpcmVjdG9yeSByZWN1cnNpdmVseS4gTW9kZSBkZWZhdWx0cyB0byAwbzc3NyAmIH51bWFzayBpZiBub3Qgc3BlY2lmaWVkLiAqL1xuICBta2RpclN5bmMoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBtb2RlPzogbnVtYmVyXG4gICAgfSxcbiAgKTogdm9pZFxuICAvKiogTGlzdHMgZGlyZWN0b3J5IGNvbnRlbnRzIHdpdGggZmlsZSB0eXBlIGluZm9ybWF0aW9uICovXG4gIHJlYWRkaXJTeW5jKHBhdGg6IHN0cmluZyk6IGZzLkRpcmVudFtdXG4gIC8qKiBMaXN0cyBkaXJlY3RvcnkgY29udGVudHMgYXMgc3RyaW5ncyAqL1xuICByZWFkZGlyU3RyaW5nU3luYyhwYXRoOiBzdHJpbmcpOiBzdHJpbmdbXVxuICAvKiogQ2hlY2tzIGlmIHRoZSBkaXJlY3RvcnkgaXMgZW1wdHkgKi9cbiAgaXNEaXJFbXB0eVN5bmMocGF0aDogc3RyaW5nKTogYm9vbGVhblxuICAvKiogUmVtb3ZlcyBhbiBlbXB0eSBkaXJlY3RvcnkgKi9cbiAgcm1kaXJTeW5jKHBhdGg6IHN0cmluZyk6IHZvaWRcbiAgLyoqIFJlbW92ZXMgZmlsZXMgYW5kIGRpcmVjdG9yaWVzICh3aXRoIHJlY3Vyc2l2ZSBvcHRpb24pICovXG4gIHJtU3luYyhcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIHJlY3Vyc2l2ZT86IGJvb2xlYW5cbiAgICAgIGZvcmNlPzogYm9vbGVhblxuICAgIH0sXG4gICk6IHZvaWRcbiAgLyoqIENyZWF0ZSBhIHdyaXRhYmxlIHN0cmVhbSBmb3Igd3JpdGluZyBkYXRhIHRvIGEgZmlsZS4gKi9cbiAgY3JlYXRlV3JpdGVTdHJlYW0ocGF0aDogc3RyaW5nKTogZnMuV3JpdGVTdHJlYW1cbiAgLyoqIFJlYWRzIHJhdyBmaWxlIGJ5dGVzIGFzIEJ1ZmZlciBhc3luY2hyb25vdXNseS5cbiAgICogIFdoZW4gbWF4Qnl0ZXMgaXMgc2V0LCBvbmx5IHJlYWRzIHVwIHRvIHRoYXQgbWFueSBieXRlcy4gKi9cbiAgcmVhZEZpbGVCeXRlcyhwYXRoOiBzdHJpbmcsIG1heEJ5dGVzPzogbnVtYmVyKTogUHJvbWlzZTxCdWZmZXI+XG59XG5cbi8qKlxuICogU2FmZWx5IHJlc29sdmVzIGEgZmlsZSBwYXRoLCBoYW5kbGluZyBzeW1saW5rcyBhbmQgZXJyb3JzIGdyYWNlZnVsbHkuXG4gKlxuICogRXJyb3IgaGFuZGxpbmcgc3RyYXRlZ3k6XG4gKiAtIElmIHRoZSBmaWxlIGRvZXNuJ3QgZXhpc3QsIHJldHVybnMgdGhlIG9yaWdpbmFsIHBhdGggKGFsbG93cyBmb3IgZmlsZSBjcmVhdGlvbilcbiAqIC0gSWYgc3ltbGluayByZXNvbHV0aW9uIGZhaWxzIChicm9rZW4gc3ltbGluaywgcGVybWlzc2lvbiBkZW5pZWQsIGNpcmN1bGFyIGxpbmtzKSxcbiAqICAgcmV0dXJucyB0aGUgb3JpZ2luYWwgcGF0aCBhbmQgbWFya3MgaXQgYXMgbm90IGEgc3ltbGlua1xuICogLSBUaGlzIGVuc3VyZXMgb3BlcmF0aW9ucyBjYW4gY29udGludWUgd2l0aCB0aGUgb3JpZ2luYWwgcGF0aCByYXRoZXIgdGhhbiBmYWlsaW5nXG4gKlxuICogQHBhcmFtIGZzIFRoZSBmaWxlc3lzdGVtIGltcGxlbWVudGF0aW9uIHRvIHVzZVxuICogQHBhcmFtIGZpbGVQYXRoIFRoZSBwYXRoIHRvIHJlc29sdmVcbiAqIEByZXR1cm5zIE9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHZlZCBwYXRoIGFuZCB3aGV0aGVyIGl0IHdhcyBhIHN5bWxpbmtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhZmVSZXNvbHZlUGF0aChcbiAgZnM6IEZzT3BlcmF0aW9ucyxcbiAgZmlsZVBhdGg6IHN0cmluZyxcbik6IHsgcmVzb2x2ZWRQYXRoOiBzdHJpbmc7IGlzU3ltbGluazogYm9vbGVhbjsgaXNDYW5vbmljYWw6IGJvb2xlYW4gfSB7XG4gIC8vIEJsb2NrIFVOQyBwYXRocyBiZWZvcmUgYW55IGZpbGVzeXN0ZW0gYWNjZXNzIHRvIHByZXZlbnQgbmV0d29ya1xuICAvLyByZXF1ZXN0cyAoRE5TL1NNQikgZHVyaW5nIHZhbGlkYXRpb24gb24gV2luZG93c1xuICBpZiAoZmlsZVBhdGguc3RhcnRzV2l0aCgnLy8nKSB8fCBmaWxlUGF0aC5zdGFydHNXaXRoKCdcXFxcXFxcXCcpKSB7XG4gICAgcmV0dXJuIHsgcmVzb2x2ZWRQYXRoOiBmaWxlUGF0aCwgaXNTeW1saW5rOiBmYWxzZSwgaXNDYW5vbmljYWw6IGZhbHNlIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gQ2hlY2sgZm9yIHNwZWNpYWwgZmlsZSB0eXBlcyAoRklGT3MsIHNvY2tldHMsIGRldmljZXMpIGJlZm9yZSBjYWxsaW5nIHJlYWxwYXRoU3luYy5cbiAgICAvLyByZWFscGF0aFN5bmMgY2FuIGJsb2NrIG9uIEZJRk9zIHdhaXRpbmcgZm9yIGEgd3JpdGVyLCBjYXVzaW5nIGhhbmdzLlxuICAgIC8vIElmIHRoZSBmaWxlIGRvZXNuJ3QgZXhpc3QsIGxzdGF0U3luYyB0aHJvd3MgRU5PRU5UIHdoaWNoIHRoZSBjYXRjaFxuICAgIC8vIGJlbG93IGhhbmRsZXMgYnkgcmV0dXJuaW5nIHRoZSBvcmlnaW5hbCBwYXRoIChhbGxvd3MgZmlsZSBjcmVhdGlvbikuXG4gICAgY29uc3Qgc3RhdHMgPSBmcy5sc3RhdFN5bmMoZmlsZVBhdGgpXG4gICAgaWYgKFxuICAgICAgc3RhdHMuaXNGSUZPKCkgfHxcbiAgICAgIHN0YXRzLmlzU29ja2V0KCkgfHxcbiAgICAgIHN0YXRzLmlzQ2hhcmFjdGVyRGV2aWNlKCkgfHxcbiAgICAgIHN0YXRzLmlzQmxvY2tEZXZpY2UoKVxuICAgICkge1xuICAgICAgcmV0dXJuIHsgcmVzb2x2ZWRQYXRoOiBmaWxlUGF0aCwgaXNTeW1saW5rOiBmYWxzZSwgaXNDYW5vbmljYWw6IGZhbHNlIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXNvbHZlZFBhdGggPSBmcy5yZWFscGF0aFN5bmMoZmlsZVBhdGgpXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc29sdmVkUGF0aCxcbiAgICAgIGlzU3ltbGluazogcmVzb2x2ZWRQYXRoICE9PSBmaWxlUGF0aCxcbiAgICAgIC8vIHJlYWxwYXRoU3luYyByZXR1cm5lZDogcmVzb2x2ZWRQYXRoIGlzIGNhbm9uaWNhbCAoYWxsIHN5bWxpbmtzIGluXG4gICAgICAvLyBhbGwgcGF0aCBjb21wb25lbnRzIHJlc29sdmVkKS4gQ2FsbGVycyBjYW4gc2tpcCBmdXJ0aGVyIHN5bWxpbmtcbiAgICAgIC8vIHJlc29sdXRpb24gb24gdGhpcyBwYXRoLlxuICAgICAgaXNDYW5vbmljYWw6IHRydWUsXG4gICAgfVxuICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAvLyBJZiBsc3RhdC9yZWFscGF0aCBmYWlscyBmb3IgYW55IHJlYXNvbiAoRU5PRU5ULCBicm9rZW4gc3ltbGluayxcbiAgICAvLyBFQUNDRVMsIEVMT09QLCBldGMuKSwgcmV0dXJuIHRoZSBvcmlnaW5hbCBwYXRoIHRvIGFsbG93IG9wZXJhdGlvbnNcbiAgICAvLyB0byBwcm9jZWVkXG4gICAgcmV0dXJuIHsgcmVzb2x2ZWRQYXRoOiBmaWxlUGF0aCwgaXNTeW1saW5rOiBmYWxzZSwgaXNDYW5vbmljYWw6IGZhbHNlIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZmlsZSBwYXRoIGlzIGEgZHVwbGljYXRlIGFuZCBzaG91bGQgYmUgc2tpcHBlZC5cbiAqIFJlc29sdmVzIHN5bWxpbmtzIHRvIGRldGVjdCBkdXBsaWNhdGVzIHBvaW50aW5nIHRvIHRoZSBzYW1lIGZpbGUuXG4gKiBJZiBub3QgYSBkdXBsaWNhdGUsIGFkZHMgdGhlIHJlc29sdmVkIHBhdGggdG8gbG9hZGVkUGF0aHMuXG4gKlxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgZmlsZSBzaG91bGQgYmUgc2tpcHBlZCAoaXMgZHVwbGljYXRlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEdXBsaWNhdGVQYXRoKFxuICBmczogRnNPcGVyYXRpb25zLFxuICBmaWxlUGF0aDogc3RyaW5nLFxuICBsb2FkZWRQYXRoczogU2V0PHN0cmluZz4sXG4pOiBib29sZWFuIHtcbiAgY29uc3QgeyByZXNvbHZlZFBhdGggfSA9IHNhZmVSZXNvbHZlUGF0aChmcywgZmlsZVBhdGgpXG4gIGlmIChsb2FkZWRQYXRocy5oYXMocmVzb2x2ZWRQYXRoKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgbG9hZGVkUGF0aHMuYWRkKHJlc29sdmVkUGF0aClcbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogUmVzb2x2ZSB0aGUgZGVlcGVzdCBleGlzdGluZyBhbmNlc3RvciBvZiBhIHBhdGggdmlhIHJlYWxwYXRoU3luYywgd2Fsa2luZ1xuICogdXAgdW50aWwgaXQgc3VjY2VlZHMuIERldGVjdHMgZGFuZ2xpbmcgc3ltbGlua3MgKGxpbmsgZW50cnkgZXhpc3RzLCB0YXJnZXRcbiAqIGRvZXNuJ3QpIHZpYSBsc3RhdCBhbmQgcmVzb2x2ZXMgdGhlbSB2aWEgcmVhZGxpbmsuXG4gKlxuICogVXNlIHdoZW4gdGhlIGlucHV0IHBhdGggbWF5IG5vdCBleGlzdCAobmV3IGZpbGUgd3JpdGVzKSBhbmQgeW91IG5lZWQgdG9cbiAqIGtub3cgd2hlcmUgdGhlIHdyaXRlIHdvdWxkIEFDVFVBTExZIGxhbmQgYWZ0ZXIgdGhlIE9TIGZvbGxvd3Mgc3ltbGlua3MuXG4gKlxuICogUmV0dXJucyB0aGUgcmVzb2x2ZWQgYWJzb2x1dGUgcGF0aCB3aXRoIG5vbi1leGlzdGVudCB0YWlsIHNlZ21lbnRzXG4gKiByZWpvaW5lZCwgb3IgdW5kZWZpbmVkIGlmIG5vIHN5bWxpbmsgd2FzIGZvdW5kIGluIGFueSBleGlzdGluZyBhbmNlc3RvclxuICogKHRoZSBwYXRoJ3MgZXhpc3RpbmcgYW5jZXN0b3JzIGFsbCByZXNvbHZlIHRvIHRoZW1zZWx2ZXMpLlxuICpcbiAqIEhhbmRsZXM6IGxpdmUgcGFyZW50IHN5bWxpbmtzLCBkYW5nbGluZyBmaWxlIHN5bWxpbmtzLCBkYW5nbGluZyBwYXJlbnRcbiAqIHN5bWxpbmtzLiBTYW1lIGNvcmUgYWxnb3JpdGhtIGFzIHRlYW1NZW1QYXRocy50czpyZWFscGF0aERlZXBlc3RFeGlzdGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVEZWVwZXN0RXhpc3RpbmdBbmNlc3RvclN5bmMoXG4gIGZzOiBGc09wZXJhdGlvbnMsXG4gIGFic29sdXRlUGF0aDogc3RyaW5nLFxuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgbGV0IGRpciA9IGFic29sdXRlUGF0aFxuICBjb25zdCBzZWdtZW50czogc3RyaW5nW10gPSBbXVxuICAvLyBXYWxrIHVwIHVzaW5nIGxzdGF0IChjaGVhcCwgTygxKSkgdG8gZmluZCB0aGUgZmlyc3QgZXhpc3RpbmcgY29tcG9uZW50LlxuICAvLyBsc3RhdCBkb2VzIG5vdCBmb2xsb3cgc3ltbGlua3MsIHNvIGRhbmdsaW5nIHN5bWxpbmtzIGFyZSBkZXRlY3RlZCBoZXJlLlxuICAvLyBPbmx5IGNhbGwgcmVhbHBhdGhTeW5jIChleHBlbnNpdmUsIE8oZGVwdGgpKSBvbmNlIGF0IHRoZSBlbmQuXG4gIHdoaWxlIChkaXIgIT09IG5vZGVQYXRoLmRpcm5hbWUoZGlyKSkge1xuICAgIGxldCBzdDogZnMuU3RhdHNcbiAgICB0cnkge1xuICAgICAgc3QgPSBmcy5sc3RhdFN5bmMoZGlyKVxuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gbHN0YXQgZmFpbGVkOiB0cnVseSBub24tZXhpc3RlbnQuIFdhbGsgdXAuXG4gICAgICBzZWdtZW50cy51bnNoaWZ0KG5vZGVQYXRoLmJhc2VuYW1lKGRpcikpXG4gICAgICBkaXIgPSBub2RlUGF0aC5kaXJuYW1lKGRpcilcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChzdC5pc1N5bWJvbGljTGluaygpKSB7XG4gICAgICAvLyBGb3VuZCBhIHN5bWxpbmsgKGxpdmUgb3IgZGFuZ2xpbmcpLiBUcnkgcmVhbHBhdGggZmlyc3QgKHJlc29sdmVzXG4gICAgICAvLyBjaGFpbmVkIHN5bWxpbmtzKTsgZmFsbCBiYWNrIHRvIHJlYWRsaW5rIGZvciBkYW5nbGluZyBzeW1saW5rcy5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gZnMucmVhbHBhdGhTeW5jKGRpcilcbiAgICAgICAgcmV0dXJuIHNlZ21lbnRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gcmVzb2x2ZWRcbiAgICAgICAgICA6IG5vZGVQYXRoLmpvaW4ocmVzb2x2ZWQsIC4uLnNlZ21lbnRzKVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIERhbmdsaW5nOiByZWFscGF0aCBmYWlsZWQgYnV0IGxzdGF0IHNhdyB0aGUgbGluayBlbnRyeS5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZnMucmVhZGxpbmtTeW5jKGRpcilcbiAgICAgICAgY29uc3QgYWJzVGFyZ2V0ID0gbm9kZVBhdGguaXNBYnNvbHV0ZSh0YXJnZXQpXG4gICAgICAgICAgPyB0YXJnZXRcbiAgICAgICAgICA6IG5vZGVQYXRoLnJlc29sdmUobm9kZVBhdGguZGlybmFtZShkaXIpLCB0YXJnZXQpXG4gICAgICAgIHJldHVybiBzZWdtZW50cy5sZW5ndGggPT09IDBcbiAgICAgICAgICA/IGFic1RhcmdldFxuICAgICAgICAgIDogbm9kZVBhdGguam9pbihhYnNUYXJnZXQsIC4uLnNlZ21lbnRzKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBFeGlzdGluZyBub24tc3ltbGluayBjb21wb25lbnQuIE9uZSByZWFscGF0aCBjYWxsIHJlc29sdmVzIGFueVxuICAgIC8vIHN5bWxpbmtzIGluIGl0cyBhbmNlc3RvcnMuIElmIG5vbmUsIHJldHVybiB1bmRlZmluZWQgKG5vIHN5bWxpbmspLlxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNvbHZlZCA9IGZzLnJlYWxwYXRoU3luYyhkaXIpXG4gICAgICBpZiAocmVzb2x2ZWQgIT09IGRpcikge1xuICAgICAgICByZXR1cm4gc2VnbWVudHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgPyByZXNvbHZlZFxuICAgICAgICAgIDogbm9kZVBhdGguam9pbihyZXNvbHZlZCwgLi4uc2VnbWVudHMpXG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyByZWFscGF0aCBjYW4gc3RpbGwgZmFpbCAoZS5nLiBFQUNDRVMgaW4gYW5jZXN0b3JzKS4gUmV0dXJuXG4gICAgICAvLyB1bmRlZmluZWQgXHUyMDE0IHdlIGNhbid0IHJlc29sdmUsIGFuZCB0aGUgbG9naWNhbCBwYXRoIGlzIGFscmVhZHlcbiAgICAgIC8vIGluIHBhdGhTZXQgZm9yIHRoZSBjYWxsZXIuXG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbi8qKlxuICogR2V0cyBhbGwgcGF0aHMgdGhhdCBzaG91bGQgYmUgY2hlY2tlZCBmb3IgcGVybWlzc2lvbnMuXG4gKiBUaGlzIGluY2x1ZGVzIHRoZSBvcmlnaW5hbCBwYXRoLCBhbGwgaW50ZXJtZWRpYXRlIHN5bWxpbmsgdGFyZ2V0cyBpbiB0aGUgY2hhaW4sXG4gKiBhbmQgdGhlIGZpbmFsIHJlc29sdmVkIHBhdGguXG4gKlxuICogRm9yIGV4YW1wbGUsIGlmIHRlc3QudHh0IC0+IC9ldGMvcGFzc3dkIC0+IC9wcml2YXRlL2V0Yy9wYXNzd2Q6XG4gKiAtIHRlc3QudHh0IChvcmlnaW5hbCBwYXRoKVxuICogLSAvZXRjL3Bhc3N3ZCAoaW50ZXJtZWRpYXRlIHN5bWxpbmsgdGFyZ2V0KVxuICogLSAvcHJpdmF0ZS9ldGMvcGFzc3dkIChmaW5hbCByZXNvbHZlZCBwYXRoKVxuICpcbiAqIFRoaXMgaXMgaW1wb3J0YW50IGZvciBzZWN1cml0eTogYSBkZW55IHJ1bGUgZm9yIC9ldGMvcGFzc3dkIHNob3VsZCBibG9ja1xuICogYWNjZXNzIGV2ZW4gaWYgdGhlIGZpbGUgaXMgYWN0dWFsbHkgYXQgL3ByaXZhdGUvZXRjL3Bhc3N3ZCAoYXMgb24gbWFjT1MpLlxuICpcbiAqIEBwYXJhbSBwYXRoIC0gVGhlIHBhdGggdG8gY2hlY2sgKHdpbGwgYmUgY29udmVydGVkIHRvIGFic29sdXRlKVxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgYWJzb2x1dGUgcGF0aHMgdG8gY2hlY2sgcGVybWlzc2lvbnMgZm9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXRoc0ZvclBlcm1pc3Npb25DaGVjayhpbnB1dFBhdGg6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgLy8gRXhwYW5kIHRpbGRlIG5vdGF0aW9uIGRlZmVuc2l2ZWx5IC0gdG9vbHMgc2hvdWxkIGRvIHRoaXMgaW4gZ2V0UGF0aCgpLFxuICAvLyBidXQgd2Ugbm9ybWFsaXplIGhlcmUgYXMgZGVmZW5zZSBpbiBkZXB0aCBmb3IgcGVybWlzc2lvbiBjaGVja2luZ1xuICBsZXQgcGF0aCA9IGlucHV0UGF0aFxuICBpZiAocGF0aCA9PT0gJ34nKSB7XG4gICAgcGF0aCA9IGhvbWVkaXIoKS5ub3JtYWxpemUoJ05GQycpXG4gIH0gZWxzZSBpZiAocGF0aC5zdGFydHNXaXRoKCd+LycpKSB7XG4gICAgcGF0aCA9IG5vZGVQYXRoLmpvaW4oaG9tZWRpcigpLm5vcm1hbGl6ZSgnTkZDJyksIHBhdGguc2xpY2UoMikpXG4gIH1cblxuICBjb25zdCBwYXRoU2V0ID0gbmV3IFNldDxzdHJpbmc+KClcbiAgY29uc3QgZnNJbXBsID0gZ2V0RnNJbXBsZW1lbnRhdGlvbigpXG5cbiAgLy8gQWx3YXlzIGNoZWNrIHRoZSBvcmlnaW5hbCBwYXRoXG4gIHBhdGhTZXQuYWRkKHBhdGgpXG5cbiAgLy8gQmxvY2sgVU5DIHBhdGhzIGJlZm9yZSBhbnkgZmlsZXN5c3RlbSBhY2Nlc3MgdG8gcHJldmVudCBuZXR3b3JrXG4gIC8vIHJlcXVlc3RzIChETlMvU01CKSBkdXJpbmcgdmFsaWRhdGlvbiBvbiBXaW5kb3dzXG4gIGlmIChwYXRoLnN0YXJ0c1dpdGgoJy8vJykgfHwgcGF0aC5zdGFydHNXaXRoKCdcXFxcXFxcXCcpKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGF0aFNldClcbiAgfVxuXG4gIC8vIEZvbGxvdyB0aGUgc3ltbGluayBjaGFpbiwgY29sbGVjdGluZyBBTEwgaW50ZXJtZWRpYXRlIHRhcmdldHNcbiAgLy8gVGhpcyBoYW5kbGVzIGNhc2VzIGxpa2U6IHRlc3QudHh0IC0+IC9ldGMvcGFzc3dkIC0+IC9wcml2YXRlL2V0Yy9wYXNzd2RcbiAgLy8gV2Ugd2FudCB0byBjaGVjayBhbGwgdGhyZWUgcGF0aHMsIG5vdCBqdXN0IHRlc3QudHh0IGFuZCAvcHJpdmF0ZS9ldGMvcGFzc3dkXG4gIHRyeSB7XG4gICAgbGV0IGN1cnJlbnRQYXRoID0gcGF0aFxuICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0PHN0cmluZz4oKVxuICAgIGNvbnN0IG1heERlcHRoID0gNDAgLy8gUHJldmVudCBydW5hd2F5IGxvb3BzLCBtYXRjaGVzIHR5cGljYWwgU1lNTE9PUF9NQVhcblxuICAgIGZvciAobGV0IGRlcHRoID0gMDsgZGVwdGggPCBtYXhEZXB0aDsgZGVwdGgrKykge1xuICAgICAgLy8gUHJldmVudCBpbmZpbml0ZSBsb29wcyBmcm9tIGNpcmN1bGFyIHN5bWxpbmtzXG4gICAgICBpZiAodmlzaXRlZC5oYXMoY3VycmVudFBhdGgpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICB2aXNpdGVkLmFkZChjdXJyZW50UGF0aClcblxuICAgICAgaWYgKCFmc0ltcGwuZXhpc3RzU3luYyhjdXJyZW50UGF0aCkpIHtcbiAgICAgICAgLy8gUGF0aCBkb2Vzbid0IGV4aXN0IChuZXcgZmlsZSBjYXNlKS4gZXhpc3RzU3luYyBmb2xsb3dzIHN5bWxpbmtzLFxuICAgICAgICAvLyBzbyB0aGlzIGlzIGFsc28gcmVhY2hlZCBmb3IgREFOR0xJTkcgc3ltbGlua3MgKGxpbmsgZW50cnkgZXhpc3RzLFxuICAgICAgICAvLyB0YXJnZXQgZG9lc24ndCkuIFJlc29sdmUgc3ltbGlua3MgaW4gdGhlIHBhdGggYW5kIGl0cyBhbmNlc3RvcnNcbiAgICAgICAgLy8gc28gcGVybWlzc2lvbiBjaGVja3Mgc2VlIHRoZSByZWFsIGRlc3RpbmF0aW9uLiBXaXRob3V0IHRoaXMsXG4gICAgICAgIC8vIGAuL2RhdGEgLT4gL2V0Yy9jcm9uLmQvYCAobGl2ZSBwYXJlbnQgc3ltbGluaykgb3JcbiAgICAgICAgLy8gYC4vZXZpbC50eHQgLT4gfi8uc3NoL2F1dGhvcml6ZWRfa2V5czJgIChkYW5nbGluZyBmaWxlIHN5bWxpbmspXG4gICAgICAgIC8vIHdvdWxkIGFsbG93IHdyaXRlcyB0aGF0IGVzY2FwZSB0aGUgd29ya2luZyBkaXJlY3RvcnkuXG4gICAgICAgIGlmIChjdXJyZW50UGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZURlZXBlc3RFeGlzdGluZ0FuY2VzdG9yU3luYyhmc0ltcGwsIHBhdGgpXG4gICAgICAgICAgaWYgKHJlc29sdmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBhdGhTZXQuYWRkKHJlc29sdmVkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGF0cyA9IGZzSW1wbC5sc3RhdFN5bmMoY3VycmVudFBhdGgpXG5cbiAgICAgIC8vIFNraXAgc3BlY2lhbCBmaWxlIHR5cGVzIHRoYXQgY2FuIGNhdXNlIGlzc3Vlc1xuICAgICAgaWYgKFxuICAgICAgICBzdGF0cy5pc0ZJRk8oKSB8fFxuICAgICAgICBzdGF0cy5pc1NvY2tldCgpIHx8XG4gICAgICAgIHN0YXRzLmlzQ2hhcmFjdGVyRGV2aWNlKCkgfHxcbiAgICAgICAgc3RhdHMuaXNCbG9ja0RldmljZSgpXG4gICAgICApIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGF0cy5pc1N5bWJvbGljTGluaygpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB0aGUgaW1tZWRpYXRlIHN5bWxpbmsgdGFyZ2V0XG4gICAgICBjb25zdCB0YXJnZXQgPSBmc0ltcGwucmVhZGxpbmtTeW5jKGN1cnJlbnRQYXRoKVxuXG4gICAgICAvLyBJZiB0YXJnZXQgaXMgcmVsYXRpdmUsIHJlc29sdmUgaXQgcmVsYXRpdmUgdG8gdGhlIHN5bWxpbmsncyBkaXJlY3RvcnlcbiAgICAgIGNvbnN0IGFic29sdXRlVGFyZ2V0ID0gbm9kZVBhdGguaXNBYnNvbHV0ZSh0YXJnZXQpXG4gICAgICAgID8gdGFyZ2V0XG4gICAgICAgIDogbm9kZVBhdGgucmVzb2x2ZShub2RlUGF0aC5kaXJuYW1lKGN1cnJlbnRQYXRoKSwgdGFyZ2V0KVxuXG4gICAgICAvLyBBZGQgdGhpcyBpbnRlcm1lZGlhdGUgdGFyZ2V0IHRvIHRoZSBzZXRcbiAgICAgIHBhdGhTZXQuYWRkKGFic29sdXRlVGFyZ2V0KVxuICAgICAgY3VycmVudFBhdGggPSBhYnNvbHV0ZVRhcmdldFxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gSWYgYW55dGhpbmcgZmFpbHMgZHVyaW5nIGNoYWluIHRyYXZlcnNhbCwgY29udGludWUgd2l0aCB3aGF0IHdlIGhhdmVcbiAgfVxuXG4gIC8vIEFsc28gYWRkIHRoZSBmaW5hbCByZXNvbHZlZCBwYXRoIHVzaW5nIHJlYWxwYXRoU3luYyBmb3IgY29tcGxldGVuZXNzXG4gIC8vIFRoaXMgaGFuZGxlcyBhbnkgcmVtYWluaW5nIHN5bWxpbmtzIGluIGRpcmVjdG9yeSBjb21wb25lbnRzXG4gIGNvbnN0IHsgcmVzb2x2ZWRQYXRoLCBpc1N5bWxpbmsgfSA9IHNhZmVSZXNvbHZlUGF0aChmc0ltcGwsIHBhdGgpXG4gIGlmIChpc1N5bWxpbmsgJiYgcmVzb2x2ZWRQYXRoICE9PSBwYXRoKSB7XG4gICAgcGF0aFNldC5hZGQocmVzb2x2ZWRQYXRoKVxuICB9XG5cbiAgcmV0dXJuIEFycmF5LmZyb20ocGF0aFNldClcbn1cblxuZXhwb3J0IGNvbnN0IE5vZGVGc09wZXJhdGlvbnM6IEZzT3BlcmF0aW9ucyA9IHtcbiAgY3dkKCkge1xuICAgIHJldHVybiBwcm9jZXNzLmN3ZCgpXG4gIH0sXG5cbiAgZXhpc3RzU3luYyhmc1BhdGgpIHtcbiAgICB1c2luZyBfID0gc2xvd0xvZ2dpbmdgZnMuZXhpc3RzU3luYygke2ZzUGF0aH0pYFxuICAgIHJldHVybiBmcy5leGlzdHNTeW5jKGZzUGF0aClcbiAgfSxcblxuICBhc3luYyBzdGF0KGZzUGF0aCkge1xuICAgIHJldHVybiBzdGF0UHJvbWlzZShmc1BhdGgpXG4gIH0sXG5cbiAgYXN5bmMgcmVhZGRpcihmc1BhdGgpIHtcbiAgICByZXR1cm4gcmVhZGRpclByb21pc2UoZnNQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcbiAgfSxcblxuICBhc3luYyB1bmxpbmsoZnNQYXRoKSB7XG4gICAgcmV0dXJuIHVubGlua1Byb21pc2UoZnNQYXRoKVxuICB9LFxuXG4gIGFzeW5jIHJtZGlyKGZzUGF0aCkge1xuICAgIHJldHVybiBybWRpclByb21pc2UoZnNQYXRoKVxuICB9LFxuXG4gIGFzeW5jIHJtKGZzUGF0aCwgb3B0aW9ucykge1xuICAgIHJldHVybiBybVByb21pc2UoZnNQYXRoLCBvcHRpb25zKVxuICB9LFxuXG4gIGFzeW5jIG1rZGlyKGRpclBhdGgsIG9wdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbWtkaXJQcm9taXNlKGRpclBhdGgsIHsgcmVjdXJzaXZlOiB0cnVlLCAuLi5vcHRpb25zIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gQnVuL1dpbmRvd3M6IHJlY3Vyc2l2ZTp0cnVlIHRocm93cyBFRVhJU1Qgb24gZGlyZWN0b3JpZXMgd2l0aCB0aGVcbiAgICAgIC8vIEZJTEVfQVRUUklCVVRFX1JFQURPTkxZIGJpdCBzZXQgKEdyb3VwIFBvbGljeSwgT25lRHJpdmUsIGRlc2t0b3AuaW5pKS5cbiAgICAgIC8vIEJ1bidzIGRpcmVjdG9yeUV4aXN0c0F0IG1pc2NsYXNzaWZpZXMgRElSRUNUT1JZK1JFQURPTkxZIGFzIG5vdC1hLWRpclxuICAgICAgLy8gKGJ1bi1pbnRlcm5hbCBzcmMvc3lzLnppZyBleGlzdHNBdFR5cGUpLiBUaGUgZGlyIGV4aXN0czsgaWdub3JlLlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGhyb3BpY3MvY2xhdWRlLWNvZGUvaXNzdWVzLzMwOTI0XG4gICAgICBpZiAoZ2V0RXJybm9Db2RlKGUpICE9PSAnRUVYSVNUJykgdGhyb3cgZVxuICAgIH1cbiAgfSxcblxuICBhc3luYyByZWFkRmlsZShmc1BhdGgsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcmVhZEZpbGVQcm9taXNlKGZzUGF0aCwgeyBlbmNvZGluZzogb3B0aW9ucy5lbmNvZGluZyB9KVxuICB9LFxuXG4gIGFzeW5jIHJlbmFtZShvbGRQYXRoLCBuZXdQYXRoKSB7XG4gICAgcmV0dXJuIHJlbmFtZVByb21pc2Uob2xkUGF0aCwgbmV3UGF0aClcbiAgfSxcblxuICBzdGF0U3luYyhmc1BhdGgpIHtcbiAgICB1c2luZyBfID0gc2xvd0xvZ2dpbmdgZnMuc3RhdFN5bmMoJHtmc1BhdGh9KWBcbiAgICByZXR1cm4gZnMuc3RhdFN5bmMoZnNQYXRoKVxuICB9LFxuXG4gIGxzdGF0U3luYyhmc1BhdGgpIHtcbiAgICB1c2luZyBfID0gc2xvd0xvZ2dpbmdgZnMubHN0YXRTeW5jKCR7ZnNQYXRofSlgXG4gICAgcmV0dXJuIGZzLmxzdGF0U3luYyhmc1BhdGgpXG4gIH0sXG5cbiAgcmVhZEZpbGVTeW5jKGZzUGF0aCwgb3B0aW9ucykge1xuICAgIHVzaW5nIF8gPSBzbG93TG9nZ2luZ2Bmcy5yZWFkRmlsZVN5bmMoJHtmc1BhdGh9KWBcbiAgICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKGZzUGF0aCwgeyBlbmNvZGluZzogb3B0aW9ucy5lbmNvZGluZyB9KVxuICB9LFxuXG4gIHJlYWRGaWxlQnl0ZXNTeW5jKGZzUGF0aCkge1xuICAgIHVzaW5nIF8gPSBzbG93TG9nZ2luZ2Bmcy5yZWFkRmlsZUJ5dGVzU3luYygke2ZzUGF0aH0pYFxuICAgIHJldHVybiBmcy5yZWFkRmlsZVN5bmMoZnNQYXRoKVxuICB9LFxuXG4gIHJlYWRTeW5jKGZzUGF0aCwgb3B0aW9ucykge1xuICAgIHVzaW5nIF8gPSBzbG93TG9nZ2luZ2Bmcy5yZWFkU3luYygke2ZzUGF0aH0sICR7b3B0aW9ucy5sZW5ndGh9IGJ5dGVzKWBcbiAgICBsZXQgZmQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuICAgIHRyeSB7XG4gICAgICBmZCA9IGZzLm9wZW5TeW5jKGZzUGF0aCwgJ3InKVxuICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmFsbG9jKG9wdGlvbnMubGVuZ3RoKVxuICAgICAgY29uc3QgYnl0ZXNSZWFkID0gZnMucmVhZFN5bmMoZmQsIGJ1ZmZlciwgMCwgb3B0aW9ucy5sZW5ndGgsIDApXG4gICAgICByZXR1cm4geyBidWZmZXIsIGJ5dGVzUmVhZCB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChmZCkgZnMuY2xvc2VTeW5jKGZkKVxuICAgIH1cbiAgfSxcblxuICBhcHBlbmRGaWxlU3luYyhwYXRoLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgdXNpbmcgXyA9IHNsb3dMb2dnaW5nYGZzLmFwcGVuZEZpbGVTeW5jKCR7cGF0aH0sICR7ZGF0YS5sZW5ndGh9IGNoYXJzKWBcbiAgICAvLyBGb3IgbmV3IGZpbGVzIHdpdGggZXhwbGljaXQgbW9kZSwgdXNlICdheCcgKGF0b21pYyBjcmVhdGUtd2l0aC1tb2RlKSB0byBhdm9pZFxuICAgIC8vIFRPQ1RPVSByYWNlIGJldHdlZW4gZXhpc3RlbmNlIGNoZWNrIGFuZCBvcGVuLiBGYWxsIGJhY2sgdG8gbm9ybWFsIGFwcGVuZCBpZiBleGlzdHMuXG4gICAgaWYgKG9wdGlvbnM/Lm1vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmQgPSBmcy5vcGVuU3luYyhwYXRoLCAnYXgnLCBvcHRpb25zLm1vZGUpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZnMuYXBwZW5kRmlsZVN5bmMoZmQsIGRhdGEpXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgZnMuY2xvc2VTeW5jKGZkKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZ2V0RXJybm9Db2RlKGUpICE9PSAnRUVYSVNUJykgdGhyb3cgZVxuICAgICAgICAvLyBGaWxlIGV4aXN0cyBcdTIwMTQgZmFsbCB0aHJvdWdoIHRvIG5vcm1hbCBhcHBlbmRcbiAgICAgIH1cbiAgICB9XG4gICAgZnMuYXBwZW5kRmlsZVN5bmMocGF0aCwgZGF0YSlcbiAgfSxcblxuICBjb3B5RmlsZVN5bmMoc3JjLCBkZXN0KSB7XG4gICAgdXNpbmcgXyA9IHNsb3dMb2dnaW5nYGZzLmNvcHlGaWxlU3luYygke3NyY30gXHUyMTkyICR7ZGVzdH0pYFxuICAgIGZzLmNvcHlGaWxlU3luYyhzcmMsIGRlc3QpXG4gIH0sXG5cbiAgdW5saW5rU3luYyhwYXRoOiBzdHJpbmcpIHtcbiAgICB1c2luZyBfID0gc2xvd0xvZ2dpbmdgZnMudW5saW5rU3luYygke3BhdGh9KWBcbiAgICBmcy51bmxpbmtTeW5jKHBhdGgpXG4gIH0sXG5cbiAgcmVuYW1lU3luYyhvbGRQYXRoOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZykge1xuICAgIHVzaW5nIF8gPSBzbG93TG9nZ2luZ2Bmcy5yZW5hbWVTeW5jKCR7b2xkUGF0aH0gXHUyMTkyICR7bmV3UGF0aH0pYFxuICAgIGZzLnJlbmFtZVN5bmMob2xkUGF0aCwgbmV3UGF0aClcbiAgfSxcblxuICBsaW5rU3luYyh0YXJnZXQ6IHN0cmluZywgcGF0aDogc3RyaW5nKSB7XG4gICAgdXNpbmcgXyA9IHNsb3dMb2dnaW5nYGZzLmxpbmtTeW5jKCR7dGFyZ2V0fSBcdTIxOTIgJHtwYXRofSlgXG4gICAgZnMubGlua1N5bmModGFyZ2V0LCBwYXRoKVxuICB9LFxuXG4gIHN5bWxpbmtTeW5jKFxuICAgIHRhcmdldDogc3RyaW5nLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICB0eXBlPzogJ2RpcicgfCAnZmlsZScgfCAnanVuY3Rpb24nLFxuICApIHtcbiAgICB1c2luZyBfID0gc2xvd0xvZ2dpbmdgZnMuc3ltbGlua1N5bmMoJHt0YXJnZXR9IFx1MjE5MiAke3BhdGh9KWBcbiAgICBmcy5zeW1saW5rU3luYyh0YXJnZXQsIHBhdGgsIHR5cGUpXG4gIH0sXG5cbiAgcmVhZGxpbmtTeW5jKHBhdGg6IHN0cmluZykge1xuICAgIHVzaW5nIF8gPSBzbG93TG9nZ2luZ2Bmcy5yZWFkbGlua1N5bmMoJHtwYXRofSlgXG4gICAgcmV0dXJuIGZzLnJlYWRsaW5rU3luYyhwYXRoKVxuICB9LFxuXG4gIHJlYWxwYXRoU3luYyhwYXRoOiBzdHJpbmcpIHtcbiAgICB1c2luZyBfID0gc2xvd0xvZ2dpbmdgZnMucmVhbHBhdGhTeW5jKCR7cGF0aH0pYFxuICAgIHJldHVybiBmcy5yZWFscGF0aFN5bmMocGF0aCkubm9ybWFsaXplKCdORkMnKVxuICB9LFxuXG4gIG1rZGlyU3luYyhkaXJQYXRoLCBvcHRpb25zKSB7XG4gICAgdXNpbmcgXyA9IHNsb3dMb2dnaW5nYGZzLm1rZGlyU3luYygke2RpclBhdGh9KWBcbiAgICBjb25zdCBta2Rpck9wdGlvbnM6IHsgcmVjdXJzaXZlOiBib29sZWFuOyBtb2RlPzogbnVtYmVyIH0gPSB7XG4gICAgICByZWN1cnNpdmU6IHRydWUsXG4gICAgfVxuICAgIGlmIChvcHRpb25zPy5tb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG1rZGlyT3B0aW9ucy5tb2RlID0gb3B0aW9ucy5tb2RlXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBmcy5ta2RpclN5bmMoZGlyUGF0aCwgbWtkaXJPcHRpb25zKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIEJ1bi9XaW5kb3dzOiByZWN1cnNpdmU6dHJ1ZSB0aHJvd3MgRUVYSVNUIG9uIGRpcmVjdG9yaWVzIHdpdGggdGhlXG4gICAgICAvLyBGSUxFX0FUVFJJQlVURV9SRUFET05MWSBiaXQgc2V0IChHcm91cCBQb2xpY3ksIE9uZURyaXZlLCBkZXNrdG9wLmluaSkuXG4gICAgICAvLyBCdW4ncyBkaXJlY3RvcnlFeGlzdHNBdCBtaXNjbGFzc2lmaWVzIERJUkVDVE9SWStSRUFET05MWSBhcyBub3QtYS1kaXJcbiAgICAgIC8vIChidW4taW50ZXJuYWwgc3JjL3N5cy56aWcgZXhpc3RzQXRUeXBlKS4gVGhlIGRpciBleGlzdHM7IGlnbm9yZS5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jb2RlL2lzc3Vlcy8zMDkyNFxuICAgICAgaWYgKGdldEVycm5vQ29kZShlKSAhPT0gJ0VFWElTVCcpIHRocm93IGVcbiAgICB9XG4gIH0sXG5cbiAgcmVhZGRpclN5bmMoZGlyUGF0aCkge1xuICAgIHVzaW5nIF8gPSBzbG93TG9nZ2luZ2Bmcy5yZWFkZGlyU3luYygke2RpclBhdGh9KWBcbiAgICByZXR1cm4gZnMucmVhZGRpclN5bmMoZGlyUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gIH0sXG5cbiAgcmVhZGRpclN0cmluZ1N5bmMoZGlyUGF0aCkge1xuICAgIHVzaW5nIF8gPSBzbG93TG9nZ2luZ2Bmcy5yZWFkZGlyU3RyaW5nU3luYygke2RpclBhdGh9KWBcbiAgICByZXR1cm4gZnMucmVhZGRpclN5bmMoZGlyUGF0aClcbiAgfSxcblxuICBpc0RpckVtcHR5U3luYyhkaXJQYXRoKSB7XG4gICAgdXNpbmcgXyA9IHNsb3dMb2dnaW5nYGZzLmlzRGlyRW1wdHlTeW5jKCR7ZGlyUGF0aH0pYFxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5yZWFkZGlyU3luYyhkaXJQYXRoKVxuICAgIHJldHVybiBmaWxlcy5sZW5ndGggPT09IDBcbiAgfSxcblxuICBybWRpclN5bmMoZGlyUGF0aCkge1xuICAgIHVzaW5nIF8gPSBzbG93TG9nZ2luZ2Bmcy5ybWRpclN5bmMoJHtkaXJQYXRofSlgXG4gICAgZnMucm1kaXJTeW5jKGRpclBhdGgpXG4gIH0sXG5cbiAgcm1TeW5jKHBhdGgsIG9wdGlvbnMpIHtcbiAgICB1c2luZyBfID0gc2xvd0xvZ2dpbmdgZnMucm1TeW5jKCR7cGF0aH0pYFxuICAgIGZzLnJtU3luYyhwYXRoLCBvcHRpb25zKVxuICB9LFxuXG4gIGNyZWF0ZVdyaXRlU3RyZWFtKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiBmcy5jcmVhdGVXcml0ZVN0cmVhbShwYXRoKVxuICB9LFxuXG4gIGFzeW5jIHJlYWRGaWxlQnl0ZXMoZnNQYXRoOiBzdHJpbmcsIG1heEJ5dGVzPzogbnVtYmVyKSB7XG4gICAgaWYgKG1heEJ5dGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiByZWFkRmlsZVByb21pc2UoZnNQYXRoKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGUgPSBhd2FpdCBvcGVuKGZzUGF0aCwgJ3InKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHNpemUgfSA9IGF3YWl0IGhhbmRsZS5zdGF0KClcbiAgICAgIGNvbnN0IHJlYWRTaXplID0gTWF0aC5taW4oc2l6ZSwgbWF4Qnl0ZXMpXG4gICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUocmVhZFNpemUpXG4gICAgICBsZXQgb2Zmc2V0ID0gMFxuICAgICAgd2hpbGUgKG9mZnNldCA8IHJlYWRTaXplKSB7XG4gICAgICAgIGNvbnN0IHsgYnl0ZXNSZWFkIH0gPSBhd2FpdCBoYW5kbGUucmVhZChcbiAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIHJlYWRTaXplIC0gb2Zmc2V0LFxuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgKVxuICAgICAgICBpZiAoYnl0ZXNSZWFkID09PSAwKSBicmVha1xuICAgICAgICBvZmZzZXQgKz0gYnl0ZXNSZWFkXG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0IDwgcmVhZFNpemUgPyBidWZmZXIuc3ViYXJyYXkoMCwgb2Zmc2V0KSA6IGJ1ZmZlclxuICAgIH0gZmluYWxseSB7XG4gICAgICBhd2FpdCBoYW5kbGUuY2xvc2UoKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gVGhlIGN1cnJlbnRseSBhY3RpdmUgZmlsZXN5c3RlbSBpbXBsZW1lbnRhdGlvblxubGV0IGFjdGl2ZUZzOiBGc09wZXJhdGlvbnMgPSBOb2RlRnNPcGVyYXRpb25zXG5cbi8qKlxuICogT3ZlcnJpZGVzIHRoZSBmaWxlc3lzdGVtIGltcGxlbWVudGF0aW9uLiBOb3RlOiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90XG4gKiBhdXRvbWF0aWNhbGx5IHVwZGF0ZSBjd2QuXG4gKiBAcGFyYW0gaW1wbGVtZW50YXRpb24gVGhlIGZpbGVzeXN0ZW0gaW1wbGVtZW50YXRpb24gdG8gdXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGc0ltcGxlbWVudGF0aW9uKGltcGxlbWVudGF0aW9uOiBGc09wZXJhdGlvbnMpOiB2b2lkIHtcbiAgYWN0aXZlRnMgPSBpbXBsZW1lbnRhdGlvblxufVxuXG4vKipcbiAqIEdldHMgdGhlIGN1cnJlbnRseSBhY3RpdmUgZmlsZXN5c3RlbSBpbXBsZW1lbnRhdGlvblxuICogQHJldHVybnMgVGhlIGN1cnJlbnRseSBhY3RpdmUgZmlsZXN5c3RlbSBpbXBsZW1lbnRhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnNJbXBsZW1lbnRhdGlvbigpOiBGc09wZXJhdGlvbnMge1xuICByZXR1cm4gYWN0aXZlRnNcbn1cblxuLyoqXG4gKiBSZXNldHMgdGhlIGZpbGVzeXN0ZW0gaW1wbGVtZW50YXRpb24gdG8gdGhlIGRlZmF1bHQgTm9kZS5qcyBpbXBsZW1lbnRhdGlvbi5cbiAqIE5vdGU6IFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgYXV0b21hdGljYWxseSB1cGRhdGUgY3dkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0T3JpZ2luYWxGc0ltcGxlbWVudGF0aW9uKCk6IHZvaWQge1xuICBhY3RpdmVGcyA9IE5vZGVGc09wZXJhdGlvbnNcbn1cblxuZXhwb3J0IHR5cGUgUmVhZEZpbGVSYW5nZVJlc3VsdCA9IHtcbiAgY29udGVudDogc3RyaW5nXG4gIGJ5dGVzUmVhZDogbnVtYmVyXG4gIGJ5dGVzVG90YWw6IG51bWJlclxufVxuXG4vKipcbiAqIFJlYWQgdXAgdG8gYG1heEJ5dGVzYCBmcm9tIGEgZmlsZSBzdGFydGluZyBhdCBgb2Zmc2V0YC5cbiAqIFJldHVybnMgYSBmbGF0IHN0cmluZyBmcm9tIEJ1ZmZlciBcdTIwMTQgbm8gc2xpY2VkIHN0cmluZyByZWZlcmVuY2VzIHRvIGFcbiAqIGxhcmdlciBwYXJlbnQuIFJldHVybnMgbnVsbCBpZiB0aGUgZmlsZSBpcyBzbWFsbGVyIHRoYW4gdGhlIG9mZnNldC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRGaWxlUmFuZ2UoXG4gIHBhdGg6IHN0cmluZyxcbiAgb2Zmc2V0OiBudW1iZXIsXG4gIG1heEJ5dGVzOiBudW1iZXIsXG4pOiBQcm9taXNlPFJlYWRGaWxlUmFuZ2VSZXN1bHQgfCBudWxsPiB7XG4gIGF3YWl0IHVzaW5nIGZoID0gYXdhaXQgb3BlbihwYXRoLCAncicpXG4gIGNvbnN0IHNpemUgPSAoYXdhaXQgZmguc3RhdCgpKS5zaXplXG4gIGlmIChzaXplIDw9IG9mZnNldCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgYnl0ZXNUb1JlYWQgPSBNYXRoLm1pbihzaXplIC0gb2Zmc2V0LCBtYXhCeXRlcylcbiAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGJ5dGVzVG9SZWFkKVxuXG4gIGxldCB0b3RhbFJlYWQgPSAwXG4gIHdoaWxlICh0b3RhbFJlYWQgPCBieXRlc1RvUmVhZCkge1xuICAgIGNvbnN0IHsgYnl0ZXNSZWFkIH0gPSBhd2FpdCBmaC5yZWFkKFxuICAgICAgYnVmZmVyLFxuICAgICAgdG90YWxSZWFkLFxuICAgICAgYnl0ZXNUb1JlYWQgLSB0b3RhbFJlYWQsXG4gICAgICBvZmZzZXQgKyB0b3RhbFJlYWQsXG4gICAgKVxuICAgIGlmIChieXRlc1JlYWQgPT09IDApIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIHRvdGFsUmVhZCArPSBieXRlc1JlYWRcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGVudDogYnVmZmVyLnRvU3RyaW5nKCd1dGY4JywgMCwgdG90YWxSZWFkKSxcbiAgICBieXRlc1JlYWQ6IHRvdGFsUmVhZCxcbiAgICBieXRlc1RvdGFsOiBzaXplLFxuICB9XG59XG5cbi8qKlxuICogUmVhZCB0aGUgbGFzdCBgbWF4Qnl0ZXNgIG9mIGEgZmlsZS5cbiAqIFJldHVybnMgdGhlIHdob2xlIGZpbGUgaWYgaXQncyBzbWFsbGVyIHRoYW4gbWF4Qnl0ZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0YWlsRmlsZShcbiAgcGF0aDogc3RyaW5nLFxuICBtYXhCeXRlczogbnVtYmVyLFxuKTogUHJvbWlzZTxSZWFkRmlsZVJhbmdlUmVzdWx0PiB7XG4gIGF3YWl0IHVzaW5nIGZoID0gYXdhaXQgb3BlbihwYXRoLCAncicpXG4gIGNvbnN0IHNpemUgPSAoYXdhaXQgZmguc3RhdCgpKS5zaXplXG4gIGlmIChzaXplID09PSAwKSB7XG4gICAgcmV0dXJuIHsgY29udGVudDogJycsIGJ5dGVzUmVhZDogMCwgYnl0ZXNUb3RhbDogMCB9XG4gIH1cbiAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5tYXgoMCwgc2l6ZSAtIG1heEJ5dGVzKVxuICBjb25zdCBieXRlc1RvUmVhZCA9IHNpemUgLSBvZmZzZXRcbiAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGJ5dGVzVG9SZWFkKVxuXG4gIGxldCB0b3RhbFJlYWQgPSAwXG4gIHdoaWxlICh0b3RhbFJlYWQgPCBieXRlc1RvUmVhZCkge1xuICAgIGNvbnN0IHsgYnl0ZXNSZWFkIH0gPSBhd2FpdCBmaC5yZWFkKFxuICAgICAgYnVmZmVyLFxuICAgICAgdG90YWxSZWFkLFxuICAgICAgYnl0ZXNUb1JlYWQgLSB0b3RhbFJlYWQsXG4gICAgICBvZmZzZXQgKyB0b3RhbFJlYWQsXG4gICAgKVxuICAgIGlmIChieXRlc1JlYWQgPT09IDApIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIHRvdGFsUmVhZCArPSBieXRlc1JlYWRcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGVudDogYnVmZmVyLnRvU3RyaW5nKCd1dGY4JywgMCwgdG90YWxSZWFkKSxcbiAgICBieXRlc1JlYWQ6IHRvdGFsUmVhZCxcbiAgICBieXRlc1RvdGFsOiBzaXplLFxuICB9XG59XG5cbi8qKlxuICogQXN5bmMgZ2VuZXJhdG9yIHRoYXQgeWllbGRzIGxpbmVzIGZyb20gYSBmaWxlIGluIHJldmVyc2Ugb3JkZXIuXG4gKiBSZWFkcyB0aGUgZmlsZSBiYWNrd2FyZHMgaW4gY2h1bmtzIHRvIGF2b2lkIGxvYWRpbmcgdGhlIGVudGlyZSBmaWxlIGludG8gbWVtb3J5LlxuICogQHBhcmFtIHBhdGggLSBUaGUgcGF0aCB0byB0aGUgZmlsZSB0byByZWFkXG4gKiBAcmV0dXJucyBBbiBhc3luYyBnZW5lcmF0b3IgdGhhdCB5aWVsZHMgbGluZXMgaW4gcmV2ZXJzZSBvcmRlclxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24qIHJlYWRMaW5lc1JldmVyc2UoXG4gIHBhdGg6IHN0cmluZyxcbik6IEFzeW5jR2VuZXJhdG9yPHN0cmluZywgdm9pZCwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IENIVU5LX1NJWkUgPSAxMDI0ICogNFxuICBjb25zdCBmaWxlSGFuZGxlID0gYXdhaXQgb3BlbihwYXRoLCAncicpXG4gIHRyeSB7XG4gICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBmaWxlSGFuZGxlLnN0YXQoKVxuICAgIGxldCBwb3NpdGlvbiA9IHN0YXRzLnNpemVcbiAgICAvLyBDYXJyeSByYXcgYnl0ZXMgKG5vdCBhIGRlY29kZWQgc3RyaW5nKSBhY3Jvc3MgY2h1bmsgYm91bmRhcmllcyBzbyB0aGF0XG4gICAgLy8gbXVsdGktYnl0ZSBVVEYtOCBzZXF1ZW5jZXMgc3BsaXQgYnkgdGhlIDRLQiBib3VuZGFyeSBhcmUgbm90IGNvcnJ1cHRlZC5cbiAgICAvLyBEZWNvZGluZyBwZXItY2h1bmsgd291bGQgdHVybiBhIHNwbGl0IHNlcXVlbmNlIGludG8gVStGRkZEIG9uIGJvdGggc2lkZXMsXG4gICAgLy8gd2hpY2ggZm9yIGhpc3RvcnkuanNvbmwgbWVhbnMgSlNPTi5wYXJzZSB0aHJvd3MgYW5kIHRoZSBlbnRyeSBpcyBkcm9wcGVkLlxuICAgIGxldCByZW1haW5kZXIgPSBCdWZmZXIuYWxsb2MoMClcbiAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuYWxsb2MoQ0hVTktfU0laRSlcblxuICAgIHdoaWxlIChwb3NpdGlvbiA+IDApIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDaHVua1NpemUgPSBNYXRoLm1pbihDSFVOS19TSVpFLCBwb3NpdGlvbilcbiAgICAgIHBvc2l0aW9uIC09IGN1cnJlbnRDaHVua1NpemVcblxuICAgICAgYXdhaXQgZmlsZUhhbmRsZS5yZWFkKGJ1ZmZlciwgMCwgY3VycmVudENodW5rU2l6ZSwgcG9zaXRpb24pXG4gICAgICBjb25zdCBjb21iaW5lZCA9IEJ1ZmZlci5jb25jYXQoW1xuICAgICAgICBidWZmZXIuc3ViYXJyYXkoMCwgY3VycmVudENodW5rU2l6ZSksXG4gICAgICAgIHJlbWFpbmRlcixcbiAgICAgIF0pXG5cbiAgICAgIGNvbnN0IGZpcnN0TmV3bGluZSA9IGNvbWJpbmVkLmluZGV4T2YoMHgwYSlcbiAgICAgIGlmIChmaXJzdE5ld2xpbmUgPT09IC0xKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IGNvbWJpbmVkXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHJlbWFpbmRlciA9IEJ1ZmZlci5mcm9tKGNvbWJpbmVkLnN1YmFycmF5KDAsIGZpcnN0TmV3bGluZSkpXG4gICAgICBjb25zdCBsaW5lcyA9IGNvbWJpbmVkLnRvU3RyaW5nKCd1dGY4JywgZmlyc3ROZXdsaW5lICsgMSkuc3BsaXQoJ1xcbicpXG5cbiAgICAgIGZvciAobGV0IGkgPSBsaW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV0hXG4gICAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgICAgeWllbGQgbGluZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbWFpbmRlci5sZW5ndGggPiAwKSB7XG4gICAgICB5aWVsZCByZW1haW5kZXIudG9TdHJpbmcoJ3V0ZjgnKVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBmaWxlSGFuZGxlLmNsb3NlKClcbiAgfVxufVxuIiwgImltcG9ydCB7IGFwcGVuZEZpbGUsIG1rZGlyLCBzeW1saW5rLCB1bmxpbmsgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCBtZW1vaXplIGZyb20gJ2xvZGFzaC1lcy9tZW1vaXplLmpzJ1xuaW1wb3J0IHsgZGlybmFtZSwgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRTZXNzaW9uSWQgfSBmcm9tICdzcmMvYm9vdHN0cmFwL3N0YXRlLmpzJ1xuXG5pbXBvcnQgeyB0eXBlIEJ1ZmZlcmVkV3JpdGVyLCBjcmVhdGVCdWZmZXJlZFdyaXRlciB9IGZyb20gJy4vYnVmZmVyZWRXcml0ZXIuanMnXG5pbXBvcnQgeyByZWdpc3RlckNsZWFudXAgfSBmcm9tICcuL2NsZWFudXBSZWdpc3RyeS5qcydcbmltcG9ydCB7XG4gIHR5cGUgRGVidWdGaWx0ZXIsXG4gIHBhcnNlRGVidWdGaWx0ZXIsXG4gIHNob3VsZFNob3dEZWJ1Z01lc3NhZ2UsXG59IGZyb20gJy4vZGVidWdGaWx0ZXIuanMnXG5pbXBvcnQgeyBnZXRDbGF1ZGVDb25maWdIb21lRGlyLCBpc0VudlRydXRoeSB9IGZyb20gJy4vZW52VXRpbHMuanMnXG5pbXBvcnQgeyBnZXRGc0ltcGxlbWVudGF0aW9uIH0gZnJvbSAnLi9mc09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyB3cml0ZVRvU3RkZXJyIH0gZnJvbSAnLi9wcm9jZXNzLmpzJ1xuaW1wb3J0IHsganNvblN0cmluZ2lmeSB9IGZyb20gJy4vc2xvd09wZXJhdGlvbnMuanMnXG5cbmV4cG9ydCB0eXBlIERlYnVnTG9nTGV2ZWwgPSAndmVyYm9zZScgfCAnZGVidWcnIHwgJ2luZm8nIHwgJ3dhcm4nIHwgJ2Vycm9yJ1xuXG5jb25zdCBMRVZFTF9PUkRFUjogUmVjb3JkPERlYnVnTG9nTGV2ZWwsIG51bWJlcj4gPSB7XG4gIHZlcmJvc2U6IDAsXG4gIGRlYnVnOiAxLFxuICBpbmZvOiAyLFxuICB3YXJuOiAzLFxuICBlcnJvcjogNCxcbn1cblxuLyoqXG4gKiBNaW5pbXVtIGxvZyBsZXZlbCB0byBpbmNsdWRlIGluIGRlYnVnIG91dHB1dC4gRGVmYXVsdHMgdG8gJ2RlYnVnJywgd2hpY2hcbiAqIGZpbHRlcnMgb3V0ICd2ZXJib3NlJyBtZXNzYWdlcy4gU2V0IENMQVVERV9DT0RFX0RFQlVHX0xPR19MRVZFTD12ZXJib3NlIHRvXG4gKiBpbmNsdWRlIGhpZ2gtdm9sdW1lIGRpYWdub3N0aWNzIChlLmcuIGZ1bGwgc3RhdHVzTGluZSBjb21tYW5kLCBzaGVsbCwgY3dkLFxuICogc3Rkb3V0L3N0ZGVycikgdGhhdCB3b3VsZCBvdGhlcndpc2UgZHJvd24gb3V0IHVzZWZ1bCBkZWJ1ZyBvdXRwdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRNaW5EZWJ1Z0xvZ0xldmVsID0gbWVtb2l6ZSgoKTogRGVidWdMb2dMZXZlbCA9PiB7XG4gIGNvbnN0IHJhdyA9IHByb2Nlc3MuZW52LkNMQVVERV9DT0RFX0RFQlVHX0xPR19MRVZFTD8udG9Mb3dlckNhc2UoKS50cmltKClcbiAgaWYgKHJhdyAmJiBPYmplY3QuaGFzT3duKExFVkVMX09SREVSLCByYXcpKSB7XG4gICAgcmV0dXJuIHJhdyBhcyBEZWJ1Z0xvZ0xldmVsXG4gIH1cbiAgcmV0dXJuICdkZWJ1Zydcbn0pXG5cbmxldCBydW50aW1lRGVidWdFbmFibGVkID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IGlzRGVidWdNb2RlID0gbWVtb2l6ZSgoKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiAoXG4gICAgcnVudGltZURlYnVnRW5hYmxlZCB8fFxuICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkRFQlVHKSB8fFxuICAgIGlzRW52VHJ1dGh5KHByb2Nlc3MuZW52LkRFQlVHX1NESykgfHxcbiAgICBwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoJy0tZGVidWcnKSB8fFxuICAgIHByb2Nlc3MuYXJndi5pbmNsdWRlcygnLWQnKSB8fFxuICAgIGlzRGVidWdUb1N0ZEVycigpIHx8XG4gICAgLy8gQWxzbyBjaGVjayBmb3IgLS1kZWJ1Zz1wYXR0ZXJuIHN5bnRheFxuICAgIHByb2Nlc3MuYXJndi5zb21lKGFyZyA9PiBhcmcuc3RhcnRzV2l0aCgnLS1kZWJ1Zz0nKSkgfHxcbiAgICAvLyAtLWRlYnVnLWZpbGUgaW1wbGljaXRseSBlbmFibGVzIGRlYnVnIG1vZGVcbiAgICBnZXREZWJ1Z0ZpbGVQYXRoKCkgIT09IG51bGxcbiAgKVxufSlcblxuLyoqXG4gKiBFbmFibGVzIGRlYnVnIGxvZ2dpbmcgbWlkLXNlc3Npb24gKGUuZy4gdmlhIC9kZWJ1ZykuIE5vbi1hbnRzIGRvbid0IHdyaXRlXG4gKiBkZWJ1ZyBsb2dzIGJ5IGRlZmF1bHQsIHNvIHRoaXMgbGV0cyB0aGVtIHN0YXJ0IGNhcHR1cmluZyB3aXRob3V0IHJlc3RhcnRpbmdcbiAqIHdpdGggLS1kZWJ1Zy4gUmV0dXJucyB0cnVlIGlmIGxvZ2dpbmcgd2FzIGFscmVhZHkgYWN0aXZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlRGVidWdMb2dnaW5nKCk6IGJvb2xlYW4ge1xuICBjb25zdCB3YXNBY3RpdmUgPSBpc0RlYnVnTW9kZSgpIHx8IHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCdcbiAgcnVudGltZURlYnVnRW5hYmxlZCA9IHRydWVcbiAgaXNEZWJ1Z01vZGUuY2FjaGUuY2xlYXI/LigpXG4gIHJldHVybiB3YXNBY3RpdmVcbn1cblxuLy8gRXh0cmFjdCBhbmQgcGFyc2UgZGVidWcgZmlsdGVyIGZyb20gY29tbWFuZCBsaW5lIGFyZ3VtZW50c1xuLy8gRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXNcbmV4cG9ydCBjb25zdCBnZXREZWJ1Z0ZpbHRlciA9IG1lbW9pemUoKCk6IERlYnVnRmlsdGVyIHwgbnVsbCA9PiB7XG4gIC8vIExvb2sgZm9yIC0tZGVidWc9cGF0dGVybiBpbiBhcmd2XG4gIGNvbnN0IGRlYnVnQXJnID0gcHJvY2Vzcy5hcmd2LmZpbmQoYXJnID0+IGFyZy5zdGFydHNXaXRoKCctLWRlYnVnPScpKVxuICBpZiAoIWRlYnVnQXJnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIEV4dHJhY3QgdGhlIHBhdHRlcm4gYWZ0ZXIgdGhlIGVxdWFscyBzaWduXG4gIGNvbnN0IGZpbHRlclBhdHRlcm4gPSBkZWJ1Z0FyZy5zdWJzdHJpbmcoJy0tZGVidWc9Jy5sZW5ndGgpXG4gIHJldHVybiBwYXJzZURlYnVnRmlsdGVyKGZpbHRlclBhdHRlcm4pXG59KVxuXG5leHBvcnQgY29uc3QgaXNEZWJ1Z1RvU3RkRXJyID0gbWVtb2l6ZSgoKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiAoXG4gICAgcHJvY2Vzcy5hcmd2LmluY2x1ZGVzKCctLWRlYnVnLXRvLXN0ZGVycicpIHx8IHByb2Nlc3MuYXJndi5pbmNsdWRlcygnLWQyZScpXG4gIClcbn0pXG5cbmV4cG9ydCBjb25zdCBnZXREZWJ1Z0ZpbGVQYXRoID0gbWVtb2l6ZSgoKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvY2Vzcy5hcmd2Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYXJnID0gcHJvY2Vzcy5hcmd2W2ldIVxuICAgIGlmIChhcmcuc3RhcnRzV2l0aCgnLS1kZWJ1Zy1maWxlPScpKSB7XG4gICAgICByZXR1cm4gYXJnLnN1YnN0cmluZygnLS1kZWJ1Zy1maWxlPScubGVuZ3RoKVxuICAgIH1cbiAgICBpZiAoYXJnID09PSAnLS1kZWJ1Zy1maWxlJyAmJiBpICsgMSA8IHByb2Nlc3MuYXJndi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLmFyZ3ZbaSArIDFdIVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufSlcblxuZnVuY3Rpb24gc2hvdWxkTG9nRGVidWdNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JyAmJiAhaXNEZWJ1Z1RvU3RkRXJyKCkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIE5vbi1hbnRzIG9ubHkgd3JpdGUgZGVidWcgbG9ncyB3aGVuIGRlYnVnIG1vZGUgaXMgYWN0aXZlICh2aWEgLS1kZWJ1ZyBhdFxuICAvLyBzdGFydHVwIG9yIC9kZWJ1ZyBtaWQtc2Vzc2lvbikuIEFudHMgYWx3YXlzIGxvZyBmb3IgL3NoYXJlLCBidWcgcmVwb3J0cy5cbiAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSAhPT0gJ2FudCcgJiYgIWlzRGVidWdNb2RlKCkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICB0eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICB0eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlID09PSAndW5kZWZpbmVkJ1xuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGZpbHRlciA9IGdldERlYnVnRmlsdGVyKClcbiAgcmV0dXJuIHNob3VsZFNob3dEZWJ1Z01lc3NhZ2UobWVzc2FnZSwgZmlsdGVyKVxufVxuXG5sZXQgaGFzRm9ybWF0dGVkT3V0cHV0ID0gZmFsc2VcbmV4cG9ydCBmdW5jdGlvbiBzZXRIYXNGb3JtYXR0ZWRPdXRwdXQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgaGFzRm9ybWF0dGVkT3V0cHV0ID0gdmFsdWVcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRIYXNGb3JtYXR0ZWRPdXRwdXQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBoYXNGb3JtYXR0ZWRPdXRwdXRcbn1cblxubGV0IGRlYnVnV3JpdGVyOiBCdWZmZXJlZFdyaXRlciB8IG51bGwgPSBudWxsXG5sZXQgcGVuZGluZ1dyaXRlOiBQcm9taXNlPHZvaWQ+ID0gUHJvbWlzZS5yZXNvbHZlKClcblxuLy8gTW9kdWxlLWxldmVsIHNvIC5iaW5kIGNhcHR1cmVzIG9ubHkgaXRzIGV4cGxpY2l0IGFyZ3MsIG5vdCB0aGVcbi8vIHdyaXRlRm4gY2xvc3VyZSdzIHBhcmVudCBzY29wZSAoSmFycmVkLCAjMjIyNTcpLlxuYXN5bmMgZnVuY3Rpb24gYXBwZW5kQXN5bmMoXG4gIG5lZWRNa2RpcjogYm9vbGVhbixcbiAgZGlyOiBzdHJpbmcsXG4gIHBhdGg6IHN0cmluZyxcbiAgY29udGVudDogc3RyaW5nLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChuZWVkTWtkaXIpIHtcbiAgICBhd2FpdCBta2RpcihkaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KVxuICB9XG4gIGF3YWl0IGFwcGVuZEZpbGUocGF0aCwgY29udGVudClcbiAgdm9pZCB1cGRhdGVMYXRlc3REZWJ1Z0xvZ1N5bWxpbmsoKVxufVxuXG5mdW5jdGlvbiBub29wKCk6IHZvaWQge31cblxuZnVuY3Rpb24gZ2V0RGVidWdXcml0ZXIoKTogQnVmZmVyZWRXcml0ZXIge1xuICBpZiAoIWRlYnVnV3JpdGVyKSB7XG4gICAgbGV0IGVuc3VyZWREaXI6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICAgZGVidWdXcml0ZXIgPSBjcmVhdGVCdWZmZXJlZFdyaXRlcih7XG4gICAgICB3cml0ZUZuOiBjb250ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGdldERlYnVnTG9nUGF0aCgpXG4gICAgICAgIGNvbnN0IGRpciA9IGRpcm5hbWUocGF0aClcbiAgICAgICAgY29uc3QgbmVlZE1rZGlyID0gZW5zdXJlZERpciAhPT0gZGlyXG4gICAgICAgIGVuc3VyZWREaXIgPSBkaXJcbiAgICAgICAgaWYgKGlzRGVidWdNb2RlKCkpIHtcbiAgICAgICAgICAvLyBpbW1lZGlhdGVNb2RlOiBtdXN0IHN0YXkgc3luYy4gQXN5bmMgd3JpdGVzIGFyZSBsb3N0IG9uIGRpcmVjdFxuICAgICAgICAgIC8vIHByb2Nlc3MuZXhpdCgpIGFuZCBrZWVwIHRoZSBldmVudCBsb29wIGFsaXZlIGluIGJlZm9yZUV4aXRcbiAgICAgICAgICAvLyBoYW5kbGVycyAoaW5maW5pdGUgbG9vcCB3aXRoIFBlcmZldHRvIHRyYWNpbmcpLiBTZWUgIzIyMjU3LlxuICAgICAgICAgIGlmIChuZWVkTWtkaXIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGdldEZzSW1wbGVtZW50YXRpb24oKS5ta2RpclN5bmMoZGlyKVxuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgIC8vIERpcmVjdG9yeSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBnZXRGc0ltcGxlbWVudGF0aW9uKCkuYXBwZW5kRmlsZVN5bmMocGF0aCwgY29udGVudClcbiAgICAgICAgICB2b2lkIHVwZGF0ZUxhdGVzdERlYnVnTG9nU3ltbGluaygpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8gQnVmZmVyZWQgcGF0aCAoYW50cyB3aXRob3V0IC0tZGVidWcpOiBmbHVzaGVzIH4xL3NlYyBzbyBjaGFpblxuICAgICAgICAvLyBkZXB0aCBzdGF5cyB+MS4gLmJpbmQgb3ZlciBhIGNsb3N1cmUgc28gb25seSB0aGUgYm91bmQgYXJncyBhcmVcbiAgICAgICAgLy8gcmV0YWluZWQsIG5vdCB0aGlzIHNjb3BlLlxuICAgICAgICBwZW5kaW5nV3JpdGUgPSBwZW5kaW5nV3JpdGVcbiAgICAgICAgICAudGhlbihhcHBlbmRBc3luYy5iaW5kKG51bGwsIG5lZWRNa2RpciwgZGlyLCBwYXRoLCBjb250ZW50KSlcbiAgICAgICAgICAuY2F0Y2gobm9vcClcbiAgICAgIH0sXG4gICAgICBmbHVzaEludGVydmFsTXM6IDEwMDAsXG4gICAgICBtYXhCdWZmZXJTaXplOiAxMDAsXG4gICAgICBpbW1lZGlhdGVNb2RlOiBpc0RlYnVnTW9kZSgpLFxuICAgIH0pXG4gICAgcmVnaXN0ZXJDbGVhbnVwKGFzeW5jICgpID0+IHtcbiAgICAgIGRlYnVnV3JpdGVyPy5kaXNwb3NlKClcbiAgICAgIGF3YWl0IHBlbmRpbmdXcml0ZVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGRlYnVnV3JpdGVyXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmbHVzaERlYnVnTG9ncygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgZGVidWdXcml0ZXI/LmZsdXNoKClcbiAgYXdhaXQgcGVuZGluZ1dyaXRlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dGb3JEZWJ1Z2dpbmcoXG4gIG1lc3NhZ2U6IHN0cmluZyxcbiAgeyBsZXZlbCB9OiB7IGxldmVsOiBEZWJ1Z0xvZ0xldmVsIH0gPSB7XG4gICAgbGV2ZWw6ICdkZWJ1ZycsXG4gIH0sXG4pOiB2b2lkIHtcbiAgaWYgKExFVkVMX09SREVSW2xldmVsXSA8IExFVkVMX09SREVSW2dldE1pbkRlYnVnTG9nTGV2ZWwoKV0pIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIXNob3VsZExvZ0RlYnVnTWVzc2FnZShtZXNzYWdlKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gTXVsdGlsaW5lIG1lc3NhZ2VzIGJyZWFrIHRoZSBqc29ubCBvdXRwdXQgZm9ybWF0LCBzbyBtYWtlIGFueSBtdWx0aWxpbmUgbWVzc2FnZXMgSlNPTi5cbiAgaWYgKGhhc0Zvcm1hdHRlZE91dHB1dCAmJiBtZXNzYWdlLmluY2x1ZGVzKCdcXG4nKSkge1xuICAgIG1lc3NhZ2UgPSBqc29uU3RyaW5naWZ5KG1lc3NhZ2UpXG4gIH1cbiAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gIGNvbnN0IG91dHB1dCA9IGAke3RpbWVzdGFtcH0gWyR7bGV2ZWwudG9VcHBlckNhc2UoKX1dICR7bWVzc2FnZS50cmltKCl9XFxuYFxuICBpZiAoaXNEZWJ1Z1RvU3RkRXJyKCkpIHtcbiAgICB3cml0ZVRvU3RkZXJyKG91dHB1dClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGdldERlYnVnV3JpdGVyKCkud3JpdGUob3V0cHV0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVidWdMb2dQYXRoKCk6IHN0cmluZyB7XG4gIHJldHVybiAoXG4gICAgZ2V0RGVidWdGaWxlUGF0aCgpID8/XG4gICAgcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfREVCVUdfTE9HU19ESVIgPz9cbiAgICBqb2luKGdldENsYXVkZUNvbmZpZ0hvbWVEaXIoKSwgJ2RlYnVnJywgYCR7Z2V0U2Vzc2lvbklkKCl9LnR4dGApXG4gIClcbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBsYXRlc3QgZGVidWcgbG9nIHN5bWxpbmsgdG8gcG9pbnQgdG8gdGhlIGN1cnJlbnQgZGVidWcgbG9nIGZpbGUuXG4gKiBDcmVhdGVzIG9yIHVwZGF0ZXMgYSBzeW1saW5rIGF0IH4vLmNsYXVkZS9kZWJ1Zy9sYXRlc3RcbiAqL1xuY29uc3QgdXBkYXRlTGF0ZXN0RGVidWdMb2dTeW1saW5rID0gbWVtb2l6ZShhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGVidWdMb2dQYXRoID0gZ2V0RGVidWdMb2dQYXRoKClcbiAgICBjb25zdCBkZWJ1Z0xvZ3NEaXIgPSBkaXJuYW1lKGRlYnVnTG9nUGF0aClcbiAgICBjb25zdCBsYXRlc3RTeW1saW5rUGF0aCA9IGpvaW4oZGVidWdMb2dzRGlyLCAnbGF0ZXN0JylcblxuICAgIGF3YWl0IHVubGluayhsYXRlc3RTeW1saW5rUGF0aCkuY2F0Y2goKCkgPT4ge30pXG4gICAgYXdhaXQgc3ltbGluayhkZWJ1Z0xvZ1BhdGgsIGxhdGVzdFN5bWxpbmtQYXRoKVxuICB9IGNhdGNoIHtcbiAgICAvLyBTaWxlbnRseSBmYWlsIGlmIHN5bWxpbmsgY3JlYXRpb24gZmFpbHNcbiAgfVxufSlcblxuLyoqXG4gKiBMb2dzIGVycm9ycyBmb3IgQW50cyBvbmx5LCBhbHdheXMgdmlzaWJsZSBpbiBwcm9kdWN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9nQW50RXJyb3IoY29udGV4dDogc3RyaW5nLCBlcnJvcjogdW5rbm93bik6IHZvaWQge1xuICBpZiAocHJvY2Vzcy5lbnYuVVNFUl9UWVBFICE9PSAnYW50Jykge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3Iuc3RhY2spIHtcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoYFtBTlQtT05MWV0gJHtjb250ZXh0fSBzdGFjayB0cmFjZTpcXG4ke2Vycm9yLnN0YWNrfWAsIHtcbiAgICAgIGxldmVsOiAnZXJyb3InLFxuICAgIH0pXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCB0eXBlIHsgV3JpdGVGaWxlT3B0aW9ucyB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHtcbiAgY2xvc2VTeW5jLFxuICB3cml0ZUZpbGVTeW5jIGFzIGZzV3JpdGVGaWxlU3luYyxcbiAgZnN5bmNTeW5jLFxuICBvcGVuU3luYyxcbn0gZnJvbSAnZnMnXG4vLyBiaW9tZS1pZ25vcmUgbGludDogVGhpcyBmaWxlIElTIHRoZSBjbG9uZURlZXAgd3JhcHBlciAtIGl0IG11c3QgaW1wb3J0IHRoZSBvcmlnaW5hbFxuaW1wb3J0IGxvZGFzaENsb25lRGVlcCBmcm9tICdsb2Rhc2gtZXMvY2xvbmVEZWVwLmpzJ1xuaW1wb3J0IHsgYWRkU2xvd09wZXJhdGlvbiB9IGZyb20gJy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4vZGVidWcuanMnXG5cbi8vIEV4dGVuZGVkIFdyaXRlRmlsZU9wdGlvbnMgdG8gaW5jbHVkZSAnZmx1c2gnIHdoaWNoIGlzIGF2YWlsYWJsZSBpbiBOb2RlLmpzIDIwLjEuMCtcbi8vIGJ1dCBub3QgeWV0IGluIEB0eXBlcy9ub2RlXG50eXBlIFdyaXRlRmlsZU9wdGlvbnNXaXRoRmx1c2ggPVxuICB8IFdyaXRlRmlsZU9wdGlvbnNcbiAgfCAoV3JpdGVGaWxlT3B0aW9ucyAmIHsgZmx1c2g/OiBib29sZWFuIH0pXG5cbi8vIC0tLSBTbG93IG9wZXJhdGlvbiBsb2dnaW5nIGluZnJhc3RydWN0dXJlIC0tLVxuXG4vKipcbiAqIFRocmVzaG9sZCBpbiBtaWxsaXNlY29uZHMgZm9yIGxvZ2dpbmcgc2xvdyBKU09OL2Nsb25lIG9wZXJhdGlvbnMuXG4gKiBPcGVyYXRpb25zIHRha2luZyBsb25nZXIgdGhhbiB0aGlzIHdpbGwgYmUgbG9nZ2VkIGZvciBkZWJ1Z2dpbmcuXG4gKiAtIE92ZXJyaWRlOiBzZXQgQ0xBVURFX0NPREVfU0xPV19PUEVSQVRJT05fVEhSRVNIT0xEX01TIHRvIGEgbnVtYmVyXG4gKiAtIERldiBidWlsZHM6IDIwbXMgKGxvd2VyIHRocmVzaG9sZCBmb3IgZGV2ZWxvcG1lbnQpXG4gKiAtIEFudHM6IDMwMG1zIChlbmFibGVkIGZvciBhbGwgaW50ZXJuYWwgdXNlcnMpXG4gKi9cbmNvbnN0IFNMT1dfT1BFUkFUSU9OX1RIUkVTSE9MRF9NUyA9ICgoKSA9PiB7XG4gIGNvbnN0IGVudlZhbHVlID0gcHJvY2Vzcy5lbnYuQ0xBVURFX0NPREVfU0xPV19PUEVSQVRJT05fVEhSRVNIT0xEX01TXG4gIGlmIChlbnZWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgcGFyc2VkID0gTnVtYmVyKGVudlZhbHVlKVxuICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZCkgJiYgcGFyc2VkID49IDApIHtcbiAgICAgIHJldHVybiBwYXJzZWRcbiAgICB9XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIDIwXG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCcpIHtcbiAgICByZXR1cm4gMzAwXG4gIH1cbiAgcmV0dXJuIEluZmluaXR5XG59KSgpXG5cbi8vIFJlLWV4cG9ydCBmb3IgY2FsbGVycyB0aGF0IHN0aWxsIG5lZWQgdGhlIHRocmVzaG9sZCB2YWx1ZSBkaXJlY3RseVxuZXhwb3J0IHsgU0xPV19PUEVSQVRJT05fVEhSRVNIT0xEX01TIH1cblxuLy8gTW9kdWxlLWxldmVsIHJlLWVudHJhbmN5IGd1YXJkLiBsb2dGb3JEZWJ1Z2dpbmcgd3JpdGVzIHRvIGEgZGVidWcgZmlsZSB2aWFcbi8vIGFwcGVuZEZpbGVTeW5jLCB3aGljaCBnb2VzIHRocm91Z2ggc2xvd0xvZ2dpbmcgYWdhaW4uIFdpdGhvdXQgdGhpcyBndWFyZCxcbi8vIGEgc2xvdyBhcHBlbmRGaWxlU3luYyBcdTIxOTIgZGlzcG9zZSBcdTIxOTIgbG9nRm9yRGVidWdnaW5nIFx1MjE5MiBhcHBlbmRGaWxlU3luYyBcdTIxOTIgZGlzcG9zZSBcdTIxOTIgLi4uXG5sZXQgaXNMb2dnaW5nID0gZmFsc2VcblxuLyoqXG4gKiBFeHRyYWN0IHRoZSBmaXJzdCBzdGFjayBmcmFtZSBvdXRzaWRlIHRoaXMgZmlsZSwgc28gdGhlIERldkJhciB3YXJuaW5nXG4gKiBwb2ludHMgYXQgdGhlIGFjdHVhbCBjYWxsZXIgaW5zdGVhZCBvZiBhIHVzZWxlc3MgYE9iamVjdHtOIGtleXN9YC5cbiAqIE9ubHkgY2FsbGVkIHdoZW4gYW4gb3BlcmF0aW9uIHdhcyBhY3R1YWxseSBzbG93IFx1MjAxNCBuZXZlciBvbiB0aGUgZmFzdCBwYXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsbGVyRnJhbWUoc3RhY2s6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gIGlmICghc3RhY2spIHJldHVybiAnJ1xuICBmb3IgKGNvbnN0IGxpbmUgb2Ygc3RhY2suc3BsaXQoJ1xcbicpKSB7XG4gICAgaWYgKGxpbmUuaW5jbHVkZXMoJ3Nsb3dPcGVyYXRpb25zJykpIGNvbnRpbnVlXG4gICAgY29uc3QgbSA9IGxpbmUubWF0Y2goLyhbXi9cXFxcXSs/KTooXFxkKyk6XFxkK1xcKT8kLylcbiAgICBpZiAobSkgcmV0dXJuIGAgQCAke21bMV19OiR7bVsyXX1gXG4gIH1cbiAgcmV0dXJuICcnXG59XG5cbi8qKlxuICogQnVpbGRzIGEgaHVtYW4tcmVhZGFibGUgZGVzY3JpcHRpb24gZnJvbSB0YWdnZWQgdGVtcGxhdGUgYXJndW1lbnRzLlxuICogT25seSBjYWxsZWQgd2hlbiBhbiBvcGVyYXRpb24gd2FzIGFjdHVhbGx5IHNsb3cgXHUyMDE0IG5ldmVyIG9uIHRoZSBmYXN0IHBhdGguXG4gKlxuICogYXJnc1swXSA9IFRlbXBsYXRlU3RyaW5nc0FycmF5LCBhcmdzWzEuLm5dID0gaW50ZXJwb2xhdGVkIHZhbHVlc1xuICovXG5mdW5jdGlvbiBidWlsZERlc2NyaXB0aW9uKGFyZ3M6IElBcmd1bWVudHMpOiBzdHJpbmcge1xuICBjb25zdCBzdHJpbmdzID0gYXJnc1swXSBhcyBUZW1wbGF0ZVN0cmluZ3NBcnJheVxuICBsZXQgcmVzdWx0ID0gJydcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IHN0cmluZ3NbaV1cbiAgICBpZiAoaSArIDEgPCBhcmdzLmxlbmd0aCkge1xuICAgICAgY29uc3QgdiA9IGFyZ3NbaSArIDFdXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgICByZXN1bHQgKz0gYEFycmF5WyR7KHYgYXMgdW5rbm93bltdKS5sZW5ndGh9XWBcbiAgICAgIH0gZWxzZSBpZiAodiAhPT0gbnVsbCAmJiB0eXBlb2YgdiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVzdWx0ICs9IGBPYmplY3R7JHtPYmplY3Qua2V5cyh2IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KS5sZW5ndGh9IGtleXN9YFxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmVzdWx0ICs9IHYubGVuZ3RoID4gODAgPyBgJHt2LnNsaWNlKDAsIDgwKX1cdTIwMjZgIDogdlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IFN0cmluZyh2KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNsYXNzIEFudFNsb3dMb2dnZXIge1xuICBzdGFydFRpbWU6IG51bWJlclxuICBhcmdzOiBJQXJndW1lbnRzXG4gIGVycjogRXJyb3JcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBJQXJndW1lbnRzKSB7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgIHRoaXMuYXJncyA9IGFyZ3NcbiAgICAvLyBWOC9KU0MgY2FwdHVyZSB0aGUgc3RhY2sgYXQgY29uc3RydWN0aW9uIGJ1dCBkZWZlciB0aGUgZXhwZW5zaXZlIHN0cmluZ1xuICAgIC8vIGZvcm1hdHRpbmcgdW50aWwgLnN0YWNrIGlzIHJlYWQgXHUyMDE0IHNvIHRoaXMgc3RheXMgb2ZmIHRoZSBmYXN0IHBhdGguXG4gICAgdGhpcy5lcnIgPSBuZXcgRXJyb3IoKVxuICB9XG5cbiAgW1N5bWJvbC5kaXNwb3NlXSgpOiB2b2lkIHtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWVcbiAgICBpZiAoZHVyYXRpb24gPiBTTE9XX09QRVJBVElPTl9USFJFU0hPTERfTVMgJiYgIWlzTG9nZ2luZykge1xuICAgICAgaXNMb2dnaW5nID0gdHJ1ZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPVxuICAgICAgICAgIGJ1aWxkRGVzY3JpcHRpb24odGhpcy5hcmdzKSArIGNhbGxlckZyYW1lKHRoaXMuZXJyLnN0YWNrKVxuICAgICAgICBsb2dGb3JEZWJ1Z2dpbmcoXG4gICAgICAgICAgYFtTTE9XIE9QRVJBVElPTiBERVRFQ1RFRF0gJHtkZXNjcmlwdGlvbn0gKCR7ZHVyYXRpb24udG9GaXhlZCgxKX1tcylgLFxuICAgICAgICApXG4gICAgICAgIGFkZFNsb3dPcGVyYXRpb24oZGVzY3JpcHRpb24sIGR1cmF0aW9uKVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaXNMb2dnaW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgTk9PUF9MT0dHRVI6IERpc3Bvc2FibGUgPSB7IFtTeW1ib2wuZGlzcG9zZV0oKSB7fSB9XG5cbi8vIE11c3QgYmUgcmVndWxhciBmdW5jdGlvbnMgKG5vdCBhcnJvd3MpIHRvIGFjY2VzcyBgYXJndW1lbnRzYFxuZnVuY3Rpb24gc2xvd0xvZ2dpbmdBbnQoXG4gIF9zdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSxcbiAgLi4uX3ZhbHVlczogdW5rbm93bltdXG4pOiBBbnRTbG93TG9nZ2VyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICByZXR1cm4gbmV3IEFudFNsb3dMb2dnZXIoYXJndW1lbnRzKVxufVxuXG5mdW5jdGlvbiBzbG93TG9nZ2luZ0V4dGVybmFsKCk6IERpc3Bvc2FibGUge1xuICByZXR1cm4gTk9PUF9MT0dHRVJcbn1cblxuLyoqXG4gKiBUYWdnZWQgdGVtcGxhdGUgZm9yIHNsb3cgb3BlcmF0aW9uIGxvZ2dpbmcuXG4gKlxuICogSW4gQU5UIGJ1aWxkczogY3JlYXRlcyBhbiBBbnRTbG93TG9nZ2VyIHRoYXQgdGltZXMgdGhlIG9wZXJhdGlvbiBhbmQgbG9nc1xuICogaWYgaXQgZXhjZWVkcyB0aGUgdGhyZXNob2xkLiBEZXNjcmlwdGlvbiBpcyBidWlsdCBsYXppbHkgb25seSB3aGVuIHNsb3cuXG4gKlxuICogSW4gZXh0ZXJuYWwgYnVpbGRzOiByZXR1cm5zIGEgc2luZ2xldG9uIG5vLW9wIGRpc3Bvc2FibGUuIFplcm8gYWxsb2NhdGlvbnMsXG4gKiB6ZXJvIHRpbWluZy4gQW50U2xvd0xvZ2dlciBhbmQgYnVpbGREZXNjcmlwdGlvbiBhcmUgZGVhZC1jb2RlLWVsaW1pbmF0ZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIHVzaW5nIF8gPSBzbG93TG9nZ2luZ2BzdHJ1Y3R1cmVkQ2xvbmUoJHt2YWx1ZX0pYFxuICogY29uc3QgcmVzdWx0ID0gc3RydWN0dXJlZENsb25lKHZhbHVlKVxuICovXG5leHBvcnQgY29uc3Qgc2xvd0xvZ2dpbmc6IHtcbiAgKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IHVua25vd25bXSk6IERpc3Bvc2FibGVcbn0gPSBmZWF0dXJlKCdTTE9XX09QRVJBVElPTl9MT0dHSU5HJykgPyBzbG93TG9nZ2luZ0FudCA6IHNsb3dMb2dnaW5nRXh0ZXJuYWxcblxuLy8gLS0tIFdyYXBwZWQgb3BlcmF0aW9ucyAtLS1cblxuLyoqXG4gKiBXcmFwcGVkIEpTT04uc3RyaW5naWZ5IHdpdGggc2xvdyBvcGVyYXRpb24gbG9nZ2luZy5cbiAqIFVzZSB0aGlzIGluc3RlYWQgb2YgSlNPTi5zdHJpbmdpZnkgZGlyZWN0bHkgdG8gZGV0ZWN0IHBlcmZvcm1hbmNlIGlzc3Vlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsganNvblN0cmluZ2lmeSB9IGZyb20gJy4vc2xvd09wZXJhdGlvbnMuanMnXG4gKiBjb25zdCBqc29uID0ganNvblN0cmluZ2lmeShkYXRhKVxuICogY29uc3QgcHJldHR5SnNvbiA9IGpzb25TdHJpbmdpZnkoZGF0YSwgbnVsbCwgMilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpzb25TdHJpbmdpZnkoXG4gIHZhbHVlOiB1bmtub3duLFxuICByZXBsYWNlcj86ICh0aGlzOiB1bmtub3duLCBrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pID0+IHVua25vd24sXG4gIHNwYWNlPzogc3RyaW5nIHwgbnVtYmVyLFxuKTogc3RyaW5nXG5leHBvcnQgZnVuY3Rpb24ganNvblN0cmluZ2lmeShcbiAgdmFsdWU6IHVua25vd24sXG4gIHJlcGxhY2VyPzogKG51bWJlciB8IHN0cmluZylbXSB8IG51bGwsXG4gIHNwYWNlPzogc3RyaW5nIHwgbnVtYmVyLFxuKTogc3RyaW5nXG5leHBvcnQgZnVuY3Rpb24ganNvblN0cmluZ2lmeShcbiAgdmFsdWU6IHVua25vd24sXG4gIHJlcGxhY2VyPzpcbiAgICB8ICgodGhpczogdW5rbm93biwga2V5OiBzdHJpbmcsIHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duKVxuICAgIHwgKG51bWJlciB8IHN0cmluZylbXVxuICAgIHwgbnVsbCxcbiAgc3BhY2U/OiBzdHJpbmcgfCBudW1iZXIsXG4pOiBzdHJpbmcge1xuICB1c2luZyBfID0gc2xvd0xvZ2dpbmdgSlNPTi5zdHJpbmdpZnkoJHt2YWx1ZX0pYFxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoXG4gICAgdmFsdWUsXG4gICAgcmVwbGFjZXIgYXMgUGFyYW1ldGVyczx0eXBlb2YgSlNPTi5zdHJpbmdpZnk+WzFdLFxuICAgIHNwYWNlLFxuICApXG59XG5cbi8qKlxuICogV3JhcHBlZCBKU09OLnBhcnNlIHdpdGggc2xvdyBvcGVyYXRpb24gbG9nZ2luZy5cbiAqIFVzZSB0aGlzIGluc3RlYWQgb2YgSlNPTi5wYXJzZSBkaXJlY3RseSB0byBkZXRlY3QgcGVyZm9ybWFuY2UgaXNzdWVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBqc29uUGFyc2UgfSBmcm9tICcuL3Nsb3dPcGVyYXRpb25zLmpzJ1xuICogY29uc3QgZGF0YSA9IGpzb25QYXJzZShqc29uU3RyaW5nKVxuICovXG5leHBvcnQgY29uc3QganNvblBhcnNlOiB0eXBlb2YgSlNPTi5wYXJzZSA9ICh0ZXh0LCByZXZpdmVyKSA9PiB7XG4gIHVzaW5nIF8gPSBzbG93TG9nZ2luZ2BKU09OLnBhcnNlKCR7dGV4dH0pYFxuICAvLyBWOCBkZS1vcHRzIEpTT04ucGFyc2Ugd2hlbiBhIHNlY29uZCBhcmd1bWVudCBpcyBwYXNzZWQsIGV2ZW4gaWYgdW5kZWZpbmVkLlxuICAvLyBCcmFuY2ggZXhwbGljaXRseSBzbyB0aGUgY29tbW9uIChuby1yZXZpdmVyKSBwYXRoIHN0YXlzIG9uIHRoZSBmYXN0IHBhdGguXG4gIHJldHVybiB0eXBlb2YgcmV2aXZlciA9PT0gJ3VuZGVmaW5lZCdcbiAgICA/IEpTT04ucGFyc2UodGV4dClcbiAgICA6IEpTT04ucGFyc2UodGV4dCwgcmV2aXZlcilcbn1cblxuLyoqXG4gKiBXcmFwcGVkIHN0cnVjdHVyZWRDbG9uZSB3aXRoIHNsb3cgb3BlcmF0aW9uIGxvZ2dpbmcuXG4gKiBVc2UgdGhpcyBpbnN0ZWFkIG9mIHN0cnVjdHVyZWRDbG9uZSBkaXJlY3RseSB0byBkZXRlY3QgcGVyZm9ybWFuY2UgaXNzdWVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjbG9uZSB9IGZyb20gJy4vc2xvd09wZXJhdGlvbnMuanMnXG4gKiBjb25zdCBjb3B5ID0gY2xvbmUob3JpZ2luYWxPYmplY3QpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZTxUPih2YWx1ZTogVCwgb3B0aW9ucz86IFN0cnVjdHVyZWRTZXJpYWxpemVPcHRpb25zKTogVCB7XG4gIHVzaW5nIF8gPSBzbG93TG9nZ2luZ2BzdHJ1Y3R1cmVkQ2xvbmUoJHt2YWx1ZX0pYFxuICByZXR1cm4gc3RydWN0dXJlZENsb25lKHZhbHVlLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIFdyYXBwZWQgY2xvbmVEZWVwIHdpdGggc2xvdyBvcGVyYXRpb24gbG9nZ2luZy5cbiAqIFVzZSB0aGlzIGluc3RlYWQgb2YgbG9kYXNoIGNsb25lRGVlcCBkaXJlY3RseSB0byBkZXRlY3QgcGVyZm9ybWFuY2UgaXNzdWVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICcuL3Nsb3dPcGVyYXRpb25zLmpzJ1xuICogY29uc3QgY29weSA9IGNsb25lRGVlcChvcmlnaW5hbE9iamVjdClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRGVlcDxUPih2YWx1ZTogVCk6IFQge1xuICB1c2luZyBfID0gc2xvd0xvZ2dpbmdgY2xvbmVEZWVwKCR7dmFsdWV9KWBcbiAgcmV0dXJuIGxvZGFzaENsb25lRGVlcCh2YWx1ZSlcbn1cblxuLyoqXG4gKiBXcmFwcGVyIGFyb3VuZCBmcy53cml0ZUZpbGVTeW5jIHdpdGggc2xvdyBvcGVyYXRpb24gbG9nZ2luZy5cbiAqIFN1cHBvcnRzIGZsdXNoIG9wdGlvbiB0byBlbnN1cmUgZGF0YSBpcyB3cml0dGVuIHRvIGRpc2sgYmVmb3JlIHJldHVybmluZy5cbiAqIEBwYXJhbSBmaWxlUGF0aCBUaGUgcGF0aCB0byB0aGUgZmlsZSB0byB3cml0ZSB0b1xuICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gd3JpdGUgKHN0cmluZyBvciBCdWZmZXIpXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25hbCB3cml0ZSBvcHRpb25zIChlbmNvZGluZywgbW9kZSwgZmxhZywgZmx1c2gpXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGZzLnByb21pc2VzLndyaXRlRmlsZWAgaW5zdGVhZCBmb3Igbm9uLWJsb2NraW5nIHdyaXRlcy5cbiAqIFN5bmMgZmlsZSB3cml0ZXMgYmxvY2sgdGhlIGV2ZW50IGxvb3AgYW5kIGNhdXNlIHBlcmZvcm1hbmNlIGlzc3Vlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlRmlsZVN5bmNfREVQUkVDQVRFRChcbiAgZmlsZVBhdGg6IHN0cmluZyxcbiAgZGF0YTogc3RyaW5nIHwgTm9kZUpTLkFycmF5QnVmZmVyVmlldyxcbiAgb3B0aW9ucz86IFdyaXRlRmlsZU9wdGlvbnNXaXRoRmx1c2gsXG4pOiB2b2lkIHtcbiAgdXNpbmcgXyA9IHNsb3dMb2dnaW5nYGZzLndyaXRlRmlsZVN5bmMoJHtmaWxlUGF0aH0sICR7ZGF0YX0pYFxuXG4gIC8vIENoZWNrIGlmIGZsdXNoIGlzIHJlcXVlc3RlZCAoZm9yIG9iamVjdC1zdHlsZSBvcHRpb25zKVxuICBjb25zdCBuZWVkc0ZsdXNoID1cbiAgICBvcHRpb25zICE9PSBudWxsICYmXG4gICAgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmXG4gICAgJ2ZsdXNoJyBpbiBvcHRpb25zICYmXG4gICAgb3B0aW9ucy5mbHVzaCA9PT0gdHJ1ZVxuXG4gIGlmIChuZWVkc0ZsdXNoKSB7XG4gICAgLy8gTWFudWFsIGZsdXNoOiBvcGVuIGZpbGUsIHdyaXRlLCBmc3luYywgY2xvc2VcbiAgICBjb25zdCBlbmNvZGluZyA9XG4gICAgICB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgJ2VuY29kaW5nJyBpbiBvcHRpb25zXG4gICAgICAgID8gb3B0aW9ucy5lbmNvZGluZ1xuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIGNvbnN0IG1vZGUgPVxuICAgICAgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmICdtb2RlJyBpbiBvcHRpb25zXG4gICAgICAgID8gb3B0aW9ucy5tb2RlXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgbGV0IGZkOiBudW1iZXIgfCB1bmRlZmluZWRcbiAgICB0cnkge1xuICAgICAgZmQgPSBvcGVuU3luYyhmaWxlUGF0aCwgJ3cnLCBtb2RlKVxuICAgICAgZnNXcml0ZUZpbGVTeW5jKGZkLCBkYXRhLCB7IGVuY29kaW5nOiBlbmNvZGluZyA/PyB1bmRlZmluZWQgfSlcbiAgICAgIGZzeW5jU3luYyhmZClcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGZkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2xvc2VTeW5jKGZkKVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBObyBmbHVzaCBuZWVkZWQsIHVzZSBzdGFuZGFyZCB3cml0ZUZpbGVTeW5jXG4gICAgZnNXcml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBkYXRhLCBvcHRpb25zIGFzIFdyaXRlRmlsZU9wdGlvbnMpXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFPLFNBQVMscUJBQXFCO0FBQUEsRUFDbkM7QUFBQSxFQUNBLGtCQUFrQjtBQUFBLEVBQ2xCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGdCQUFnQjtBQUNsQixHQU1tQjtBQUNqQixNQUFJLFNBQW1CLENBQUM7QUFDeEIsTUFBSSxjQUFjO0FBQ2xCLE1BQUksYUFBb0M7QUFJeEMsTUFBSSxrQkFBbUM7QUFFdkMsV0FBUyxhQUFtQjtBQUMxQixRQUFJLFlBQVk7QUFDZCxtQkFB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d0JBQVk7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUEsSUFBTSxjQUEwQixFQUFFLENBQUMsT0FBTyxPQUFPLElBQUk7QUFBQSxJQUFDLEVBQUU7QUE0QmpELElBQU0sY0FFVCxRQUFRLHdCQUF3QixJQUFJLGlCQUFpQjtBQStDbEQsSUFBTSxZQUErQixDQUFDLE1BQU0sWUFBWTtBQUM3RDtBQUFBO0FBQUEsY0FBTSxJQUFJLHlDQUF5QixJQUFJO0FBR3ZDLGVBQU8sT0FBTyxZQUFZLGNBQ3RCLEtBQUssTUFBTSxJQUFJLElBQ2YsS0FBSyxNQUFNLE1BQU0sT0FBTztBQUFBLGVBTDVCQSxJQUFBO0FBQUEscUJBQUFBLElBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1GO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsiaGFzT3duUHJvcGVydHkiLCAib2JqZWN0UHJvdG8iLCAiQnVmZmVyIiwgImhhc093blByb3BlcnR5IiwgIm9iamVjdFByb3RvIiwgIm1hcFRhZyIsICJzZXRUYWciLCAia2V5IiwgImJvb2xUYWciLCAiZGF0ZVRhZyIsICJtYXBUYWciLCAibnVtYmVyVGFnIiwgInJlZ2V4cFRhZyIsICJzZXRUYWciLCAic3RyaW5nVGFnIiwgInN5bWJvbFRhZyIsICJhcnJheUJ1ZmZlclRhZyIsICJkYXRhVmlld1RhZyIsICJmbG9hdDMyVGFnIiwgImZsb2F0NjRUYWciLCAiaW50OFRhZyIsICJpbnQxNlRhZyIsICJpbnQzMlRhZyIsICJ1aW50OFRhZyIsICJ1aW50OENsYW1wZWRUYWciLCAidWludDE2VGFnIiwgInVpbnQzMlRhZyIsICJDTE9ORV9ERUVQX0ZMQUciLCAiQ0xPTkVfU1lNQk9MU19GTEFHIiwgImZzIiwgIl8iLCAiZGlybmFtZSIsICJqb2luIiwgImNsb3NlU3luYyIsICJvcGVuU3luYyIsICJfIl0KfQo=
