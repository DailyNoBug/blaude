#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ListCache_default,
  MapCache_default,
  Map_default,
  Symbol_default,
  baseGetTag_default,
  eq_default,
  freeGlobal_default,
  getNative_default,
  init_ListCache,
  init_Map,
  init_MapCache,
  init_Symbol,
  init_baseGetTag,
  init_eq,
  init_freeGlobal,
  init_getNative,
  init_isFunction,
  init_isObject,
  init_memoize,
  init_root,
  init_toSource,
  isFunction_default,
  isObject_default,
  memoize_default,
  root_default,
  toSource_default
} from "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default;
var init_stackClear = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_stackClear.js"() {
    init_ListCache();
    stackClear_default = stackClear;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default;
var init_stackDelete = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_stackDelete.js"() {
    stackDelete_default = stackDelete;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default;
var init_stackGet = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_stackGet.js"() {
    stackGet_default = stackGet;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default;
var init_stackHas = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_stackHas.js"() {
    stackHas_default = stackHas;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_stackSet.js
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var LARGE_ARRAY_SIZE, stackSet_default;
var init_stackSet = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_stackSet.js"() {
    init_ListCache();
    init_Map();
    init_MapCache();
    LARGE_ARRAY_SIZE = 200;
    stackSet_default = stackSet;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
var Stack_default;
var init_Stack = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_Stack.js"() {
    init_ListCache();
    init_stackClear();
    init_stackDelete();
    init_stackGet();
    init_stackHas();
    init_stackSet();
    Stack.prototype.clear = stackClear_default;
    Stack.prototype["delete"] = stackDelete_default;
    Stack.prototype.get = stackGet_default;
    Stack.prototype.has = stackHas_default;
    Stack.prototype.set = stackSet_default;
    Stack_default = Stack;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_setCacheAdd.js
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var HASH_UNDEFINED, setCacheAdd_default;
var init_setCacheAdd = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_setCacheAdd.js"() {
    HASH_UNDEFINED = "__lodash_hash_undefined__";
    setCacheAdd_default = setCacheAdd;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default;
var init_setCacheHas = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_setCacheHas.js"() {
    setCacheHas_default = setCacheHas;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_SetCache.js
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache_default();
  while (++index < length) {
    this.add(values[index]);
  }
}
var SetCache_default;
var init_SetCache = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_SetCache.js"() {
    init_MapCache();
    init_setCacheAdd();
    init_setCacheHas();
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
    SetCache.prototype.has = setCacheHas_default;
    SetCache_default = SetCache;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_arraySome.js
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var arraySome_default;
var init_arraySome = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_arraySome.js"() {
    arraySome_default = arraySome;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cacheHas.js
function cacheHas(cache, key) {
  return cache.has(key);
}
var cacheHas_default;
var init_cacheHas = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_cacheHas.js"() {
    cacheHas_default = cacheHas;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_equalArrays.js
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome_default(other, function(othValue2, othIndex) {
        if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG, COMPARE_UNORDERED_FLAG, equalArrays_default;
var init_equalArrays = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_equalArrays.js"() {
    init_SetCache();
    init_arraySome();
    init_cacheHas();
    COMPARE_PARTIAL_FLAG = 1;
    COMPARE_UNORDERED_FLAG = 2;
    equalArrays_default = equalArrays;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_Uint8Array.js
var Uint8Array, Uint8Array_default;
var init_Uint8Array = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_Uint8Array.js"() {
    init_root();
    Uint8Array = root_default.Uint8Array;
    Uint8Array_default = Uint8Array;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_mapToArray.js
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var mapToArray_default;
var init_mapToArray = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_mapToArray.js"() {
    mapToArray_default = mapToArray;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_setToArray.js
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var setToArray_default;
var init_setToArray = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_setToArray.js"() {
    setToArray_default = setToArray;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_equalByTag.js
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq_default(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray_default;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
      convert || (convert = setToArray_default);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG2;
      stack.set(object, other);
      var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG2, COMPARE_UNORDERED_FLAG2, boolTag, dateTag, errorTag, mapTag, numberTag, regexpTag, setTag, stringTag, symbolTag, arrayBufferTag, dataViewTag, symbolProto, symbolValueOf, equalByTag_default;
var init_equalByTag = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_equalByTag.js"() {
    init_Symbol();
    init_Uint8Array();
    init_eq();
    init_equalArrays();
    init_mapToArray();
    init_setToArray();
    COMPARE_PARTIAL_FLAG2 = 1;
    COMPARE_UNORDERED_FLAG2 = 2;
    boolTag = "[object Boolean]";
    dateTag = "[object Date]";
    errorTag = "[object Error]";
    mapTag = "[object Map]";
    numberTag = "[object Number]";
    regexpTag = "[object RegExp]";
    setTag = "[object Set]";
    stringTag = "[object String]";
    symbolTag = "[object Symbol]";
    arrayBufferTag = "[object ArrayBuffer]";
    dataViewTag = "[object DataView]";
    symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
    symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    equalByTag_default = equalByTag;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_arrayPush.js
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var arrayPush_default;
var init_arrayPush = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_arrayPush.js"() {
    arrayPush_default = arrayPush;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isArray.js
var isArray, isArray_default;
var init_isArray = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isArray.js"() {
    isArray = Array.isArray;
    isArray_default = isArray;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
}
var baseGetAllKeys_default;
var init_baseGetAllKeys = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseGetAllKeys.js"() {
    init_arrayPush();
    init_isArray();
    baseGetAllKeys_default = baseGetAllKeys;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_arrayFilter.js
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var arrayFilter_default;
var init_arrayFilter = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_arrayFilter.js"() {
    arrayFilter_default = arrayFilter;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/stubArray.js
function stubArray() {
  return [];
}
var stubArray_default;
var init_stubArray = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/stubArray.js"() {
    stubArray_default = stubArray;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getSymbols.js
var objectProto, propertyIsEnumerable, nativeGetSymbols, getSymbols, getSymbols_default;
var init_getSymbols = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getSymbols.js"() {
    init_arrayFilter();
    init_stubArray();
    objectProto = Object.prototype;
    propertyIsEnumerable = objectProto.propertyIsEnumerable;
    nativeGetSymbols = Object.getOwnPropertySymbols;
    getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    getSymbols_default = getSymbols;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default;
var init_baseTimes = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseTimes.js"() {
    baseTimes_default = baseTimes;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default;
var init_isObjectLike = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isObjectLike.js"() {
    isObjectLike_default = isObjectLike;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsArguments.js
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var argsTag, baseIsArguments_default;
var init_baseIsArguments = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsArguments.js"() {
    init_baseGetTag();
    init_isObjectLike();
    argsTag = "[object Arguments]";
    baseIsArguments_default = baseIsArguments;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isArguments.js
var objectProto2, hasOwnProperty, propertyIsEnumerable2, isArguments, isArguments_default;
var init_isArguments = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isArguments.js"() {
    init_baseIsArguments();
    init_isObjectLike();
    objectProto2 = Object.prototype;
    hasOwnProperty = objectProto2.hasOwnProperty;
    propertyIsEnumerable2 = objectProto2.propertyIsEnumerable;
    isArguments = baseIsArguments_default(/* @__PURE__ */ (function() {
      return arguments;
    })()) ? baseIsArguments_default : function(value) {
      return isObjectLike_default(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable2.call(value, "callee");
    };
    isArguments_default = isArguments;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default;
var init_stubFalse = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/stubFalse.js"() {
    stubFalse_default = stubFalse;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isBuffer.js
var freeExports, freeModule, moduleExports, Buffer, nativeIsBuffer, isBuffer, isBuffer_default;
var init_isBuffer = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isBuffer.js"() {
    init_root();
    init_stubFalse();
    freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    moduleExports = freeModule && freeModule.exports === freeExports;
    Buffer = moduleExports ? root_default.Buffer : void 0;
    nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    isBuffer = nativeIsBuffer || stubFalse_default;
    isBuffer_default = isBuffer;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_isIndex.js
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var MAX_SAFE_INTEGER, reIsUint, isIndex_default;
var init_isIndex = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_isIndex.js"() {
    MAX_SAFE_INTEGER = 9007199254740991;
    reIsUint = /^(?:0|[1-9]\d*)$/;
    isIndex_default = isIndex;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isLength.js
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var MAX_SAFE_INTEGER2, isLength_default;
var init_isLength = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isLength.js"() {
    MAX_SAFE_INTEGER2 = 9007199254740991;
    isLength_default = isLength;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsTypedArray.js
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var argsTag2, arrayTag, boolTag2, dateTag2, errorTag2, funcTag, mapTag2, numberTag2, objectTag, regexpTag2, setTag2, stringTag2, weakMapTag, arrayBufferTag2, dataViewTag2, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, typedArrayTags, baseIsTypedArray_default;
var init_baseIsTypedArray = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsTypedArray.js"() {
    init_baseGetTag();
    init_isLength();
    init_isObjectLike();
    argsTag2 = "[object Arguments]";
    arrayTag = "[object Array]";
    boolTag2 = "[object Boolean]";
    dateTag2 = "[object Date]";
    errorTag2 = "[object Error]";
    funcTag = "[object Function]";
    mapTag2 = "[object Map]";
    numberTag2 = "[object Number]";
    objectTag = "[object Object]";
    regexpTag2 = "[object RegExp]";
    setTag2 = "[object Set]";
    stringTag2 = "[object String]";
    weakMapTag = "[object WeakMap]";
    arrayBufferTag2 = "[object ArrayBuffer]";
    dataViewTag2 = "[object DataView]";
    float32Tag = "[object Float32Array]";
    float64Tag = "[object Float64Array]";
    int8Tag = "[object Int8Array]";
    int16Tag = "[object Int16Array]";
    int32Tag = "[object Int32Array]";
    uint8Tag = "[object Uint8Array]";
    uint8ClampedTag = "[object Uint8ClampedArray]";
    uint16Tag = "[object Uint16Array]";
    uint32Tag = "[object Uint32Array]";
    typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag2] = typedArrayTags[boolTag2] = typedArrayTags[dataViewTag2] = typedArrayTags[dateTag2] = typedArrayTags[errorTag2] = typedArrayTags[funcTag] = typedArrayTags[mapTag2] = typedArrayTags[numberTag2] = typedArrayTags[objectTag] = typedArrayTags[regexpTag2] = typedArrayTags[setTag2] = typedArrayTags[stringTag2] = typedArrayTags[weakMapTag] = false;
    baseIsTypedArray_default = baseIsTypedArray;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default;
var init_baseUnary = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseUnary.js"() {
    baseUnary_default = baseUnary;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_nodeUtil.js
var freeExports2, freeModule2, moduleExports2, freeProcess, nodeUtil, nodeUtil_default;
var init_nodeUtil = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_nodeUtil.js"() {
    init_freeGlobal();
    freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
    freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
    moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
    freeProcess = moduleExports2 && freeGlobal_default.process;
    nodeUtil = (function() {
      try {
        var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    })();
    nodeUtil_default = nodeUtil;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray, isTypedArray, isTypedArray_default;
var init_isTypedArray = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isTypedArray.js"() {
    init_baseIsTypedArray();
    init_baseUnary();
    init_nodeUtil();
    nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
    isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
    isTypedArray_default = isTypedArray;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_arrayLikeKeys.js
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var objectProto3, hasOwnProperty2, arrayLikeKeys_default;
var init_arrayLikeKeys = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_arrayLikeKeys.js"() {
    init_baseTimes();
    init_isArguments();
    init_isArray();
    init_isBuffer();
    init_isIndex();
    init_isTypedArray();
    objectProto3 = Object.prototype;
    hasOwnProperty2 = objectProto3.hasOwnProperty;
    arrayLikeKeys_default = arrayLikeKeys;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_isPrototype.js
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto4;
  return value === proto;
}
var objectProto4, isPrototype_default;
var init_isPrototype = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_isPrototype.js"() {
    objectProto4 = Object.prototype;
    isPrototype_default = isPrototype;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default;
var init_overArg = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_overArg.js"() {
    overArg_default = overArg;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_nativeKeys.js
var nativeKeys, nativeKeys_default;
var init_nativeKeys = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_nativeKeys.js"() {
    init_overArg();
    nativeKeys = overArg_default(Object.keys, Object);
    nativeKeys_default = nativeKeys;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseKeys.js
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty3.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var objectProto5, hasOwnProperty3, baseKeys_default;
var init_baseKeys = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseKeys.js"() {
    init_isPrototype();
    init_nativeKeys();
    objectProto5 = Object.prototype;
    hasOwnProperty3 = objectProto5.hasOwnProperty;
    baseKeys_default = baseKeys;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default;
var init_isArrayLike = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isArrayLike.js"() {
    init_isFunction();
    init_isLength();
    isArrayLike_default = isArrayLike;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/keys.js
function keys(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default;
var init_keys = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/keys.js"() {
    init_arrayLikeKeys();
    init_baseKeys();
    init_isArrayLike();
    keys_default = keys;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default;
var init_getAllKeys = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getAllKeys.js"() {
    init_baseGetAllKeys();
    init_getSymbols();
    init_keys();
    getAllKeys_default = getAllKeys;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_equalObjects.js
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty4.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG3, objectProto6, hasOwnProperty4, equalObjects_default;
var init_equalObjects = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_equalObjects.js"() {
    init_getAllKeys();
    COMPARE_PARTIAL_FLAG3 = 1;
    objectProto6 = Object.prototype;
    hasOwnProperty4 = objectProto6.hasOwnProperty;
    equalObjects_default = equalObjects;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_DataView.js
var DataView, DataView_default;
var init_DataView = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_DataView.js"() {
    init_getNative();
    init_root();
    DataView = getNative_default(root_default, "DataView");
    DataView_default = DataView;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_Promise.js
var Promise2, Promise_default;
var init_Promise = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_Promise.js"() {
    init_getNative();
    init_root();
    Promise2 = getNative_default(root_default, "Promise");
    Promise_default = Promise2;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_Set.js
var Set2, Set_default;
var init_Set = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_Set.js"() {
    init_getNative();
    init_root();
    Set2 = getNative_default(root_default, "Set");
    Set_default = Set2;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_WeakMap.js
var WeakMap, WeakMap_default;
var init_WeakMap = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_WeakMap.js"() {
    init_getNative();
    init_root();
    WeakMap = getNative_default(root_default, "WeakMap");
    WeakMap_default = WeakMap;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getTag.js
var mapTag3, objectTag2, promiseTag, setTag3, weakMapTag2, dataViewTag3, dataViewCtorString, mapCtorString, promiseCtorString, setCtorString, weakMapCtorString, getTag, getTag_default;
var init_getTag = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getTag.js"() {
    init_DataView();
    init_Map();
    init_Promise();
    init_Set();
    init_WeakMap();
    init_baseGetTag();
    init_toSource();
    mapTag3 = "[object Map]";
    objectTag2 = "[object Object]";
    promiseTag = "[object Promise]";
    setTag3 = "[object Set]";
    weakMapTag2 = "[object WeakMap]";
    dataViewTag3 = "[object DataView]";
    dataViewCtorString = toSource_default(DataView_default);
    mapCtorString = toSource_default(Map_default);
    promiseCtorString = toSource_default(Promise_default);
    setCtorString = toSource_default(Set_default);
    weakMapCtorString = toSource_default(WeakMap_default);
    getTag = baseGetTag_default;
    if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag3 || Map_default && getTag(new Map_default()) != mapTag3 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag3 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
      getTag = function(value) {
        var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag3;
            case mapCtorString:
              return mapTag3;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag3;
            case weakMapCtorString:
              return weakMapTag2;
          }
        }
        return result;
      };
    }
    getTag_default = getTag;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsEqualDeep.js
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag2 : getTag_default(object), othTag = othIsArr ? arrayTag2 : getTag_default(other);
  objTag = objTag == argsTag3 ? objectTag3 : objTag;
  othTag = othTag == argsTag3 ? objectTag3 : othTag;
  var objIsObj = objTag == objectTag3, othIsObj = othTag == objectTag3, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_default(object)) {
    if (!isBuffer_default(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack_default());
    return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
    var objIsWrapped = objIsObj && hasOwnProperty5.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty5.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack_default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack_default());
  return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
}
var COMPARE_PARTIAL_FLAG4, argsTag3, arrayTag2, objectTag3, objectProto7, hasOwnProperty5, baseIsEqualDeep_default;
var init_baseIsEqualDeep = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsEqualDeep.js"() {
    init_Stack();
    init_equalArrays();
    init_equalByTag();
    init_equalObjects();
    init_getTag();
    init_isArray();
    init_isBuffer();
    init_isTypedArray();
    COMPARE_PARTIAL_FLAG4 = 1;
    argsTag3 = "[object Arguments]";
    arrayTag2 = "[object Array]";
    objectTag3 = "[object Object]";
    objectProto7 = Object.prototype;
    hasOwnProperty5 = objectProto7.hasOwnProperty;
    baseIsEqualDeep_default = baseIsEqualDeep;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsEqual.js
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
var baseIsEqual_default;
var init_baseIsEqual = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsEqual.js"() {
    init_baseIsEqualDeep();
    init_isObjectLike();
    baseIsEqual_default = baseIsEqual;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsMatch.js
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack_default();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var COMPARE_PARTIAL_FLAG5, COMPARE_UNORDERED_FLAG3, baseIsMatch_default;
var init_baseIsMatch = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIsMatch.js"() {
    init_Stack();
    init_baseIsEqual();
    COMPARE_PARTIAL_FLAG5 = 1;
    COMPARE_UNORDERED_FLAG3 = 2;
    baseIsMatch_default = baseIsMatch;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_isStrictComparable.js
function isStrictComparable(value) {
  return value === value && !isObject_default(value);
}
var isStrictComparable_default;
var init_isStrictComparable = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_isStrictComparable.js"() {
    init_isObject();
    isStrictComparable_default = isStrictComparable;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getMatchData.js
function getMatchData(object) {
  var result = keys_default(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable_default(value)];
  }
  return result;
}
var getMatchData_default;
var init_getMatchData = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_getMatchData.js"() {
    init_isStrictComparable();
    init_keys();
    getMatchData_default = getMatchData;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_matchesStrictComparable.js
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var matchesStrictComparable_default;
var init_matchesStrictComparable = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_matchesStrictComparable.js"() {
    matchesStrictComparable_default = matchesStrictComparable;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseMatches.js
function baseMatches(source) {
  var matchData = getMatchData_default(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch_default(object, source, matchData);
  };
}
var baseMatches_default;
var init_baseMatches = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseMatches.js"() {
    init_baseIsMatch();
    init_getMatchData();
    init_matchesStrictComparable();
    baseMatches_default = baseMatches;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isSymbol.js
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag2;
}
var symbolTag2, isSymbol_default;
var init_isSymbol = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/isSymbol.js"() {
    init_baseGetTag();
    init_isObjectLike();
    symbolTag2 = "[object Symbol]";
    isSymbol_default = isSymbol;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_isKey.js
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var reIsDeepProp, reIsPlainProp, isKey_default;
var init_isKey = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_isKey.js"() {
    init_isArray();
    init_isSymbol();
    reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    reIsPlainProp = /^\w*$/;
    isKey_default = isKey;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_memoizeCapped.js
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var MAX_MEMOIZE_SIZE, memoizeCapped_default;
var init_memoizeCapped = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_memoizeCapped.js"() {
    init_memoize();
    MAX_MEMOIZE_SIZE = 500;
    memoizeCapped_default = memoizeCapped;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_stringToPath.js
var rePropName, reEscapeChar, stringToPath, stringToPath_default;
var init_stringToPath = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_stringToPath.js"() {
    init_memoizeCapped();
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    reEscapeChar = /\\(\\)?/g;
    stringToPath = memoizeCapped_default(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    stringToPath_default = stringToPath;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default;
var init_arrayMap = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_arrayMap.js"() {
    arrayMap_default = arrayMap;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseToString.js
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var INFINITY, symbolProto2, symbolToString, baseToString_default;
var init_baseToString = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseToString.js"() {
    init_Symbol();
    init_arrayMap();
    init_isArray();
    init_isSymbol();
    INFINITY = 1 / 0;
    symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
    symbolToString = symbolProto2 ? symbolProto2.toString : void 0;
    baseToString_default = baseToString;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default;
var init_toString = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/toString.js"() {
    init_baseToString();
    toString_default = toString;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default;
var init_castPath = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_castPath.js"() {
    init_isArray();
    init_isKey();
    init_stringToPath();
    init_toString();
    castPath_default = castPath;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_toKey.js
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
var INFINITY2, toKey_default;
var init_toKey = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_toKey.js"() {
    init_isSymbol();
    INFINITY2 = 1 / 0;
    toKey_default = toKey;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default;
var init_baseGet = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseGet.js"() {
    init_castPath();
    init_toKey();
    baseGet_default = baseGet;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/get.js
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet_default(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_default;
var init_get = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/get.js"() {
    init_baseGet();
    get_default = get;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseHasIn.js
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var baseHasIn_default;
var init_baseHasIn = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseHasIn.js"() {
    baseHasIn_default = baseHasIn;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_hasPath.js
function hasPath(object, path, hasFunc) {
  path = castPath_default(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey_default(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
}
var hasPath_default;
var init_hasPath = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_hasPath.js"() {
    init_castPath();
    init_isArguments();
    init_isArray();
    init_isIndex();
    init_isLength();
    init_toKey();
    hasPath_default = hasPath;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/hasIn.js
function hasIn(object, path) {
  return object != null && hasPath_default(object, path, baseHasIn_default);
}
var hasIn_default;
var init_hasIn = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/hasIn.js"() {
    init_baseHasIn();
    init_hasPath();
    hasIn_default = hasIn;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseMatchesProperty.js
function baseMatchesProperty(path, srcValue) {
  if (isKey_default(path) && isStrictComparable_default(srcValue)) {
    return matchesStrictComparable_default(toKey_default(path), srcValue);
  }
  return function(object) {
    var objValue = get_default(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
  };
}
var COMPARE_PARTIAL_FLAG6, COMPARE_UNORDERED_FLAG4, baseMatchesProperty_default;
var init_baseMatchesProperty = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseMatchesProperty.js"() {
    init_baseIsEqual();
    init_get();
    init_hasIn();
    init_isKey();
    init_isStrictComparable();
    init_matchesStrictComparable();
    init_toKey();
    COMPARE_PARTIAL_FLAG6 = 1;
    COMPARE_UNORDERED_FLAG4 = 2;
    baseMatchesProperty_default = baseMatchesProperty;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default;
var init_identity = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/identity.js"() {
    identity_default = identity;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseProperty.js
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var baseProperty_default;
var init_baseProperty = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseProperty.js"() {
    baseProperty_default = baseProperty;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_basePropertyDeep.js
function basePropertyDeep(path) {
  return function(object) {
    return baseGet_default(object, path);
  };
}
var basePropertyDeep_default;
var init_basePropertyDeep = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_basePropertyDeep.js"() {
    init_baseGet();
    basePropertyDeep_default = basePropertyDeep;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/property.js
function property(path) {
  return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
}
var property_default;
var init_property = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/property.js"() {
    init_baseProperty();
    init_basePropertyDeep();
    init_isKey();
    init_toKey();
    property_default = property;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIteratee.js
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity_default;
  }
  if (typeof value == "object") {
    return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
  }
  return property_default(value);
}
var baseIteratee_default;
var init_baseIteratee = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseIteratee.js"() {
    init_baseMatches();
    init_baseMatchesProperty();
    init_identity();
    init_isArray();
    init_property();
    baseIteratee_default = baseIteratee;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseSum.js
function baseSum(array, iteratee) {
  var result, index = -1, length = array.length;
  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== void 0) {
      result = result === void 0 ? current : result + current;
    }
  }
  return result;
}
var baseSum_default;
var init_baseSum = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/_baseSum.js"() {
    baseSum_default = baseSum;
  }
});

// node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/sumBy.js
function sumBy(array, iteratee) {
  return array && array.length ? baseSum_default(array, baseIteratee_default(iteratee, 2)) : 0;
}
var sumBy_default;
var init_sumBy = __esm({
  "node_modules/.pnpm/lodash-es@4.18.0/node_modules/lodash-es/sumBy.js"() {
    init_baseIteratee();
    init_baseSum();
    sumBy_default = sumBy;
  }
});

// src/utils/crypto.ts
import { randomUUID } from "crypto";
var init_crypto = __esm({
  "src/utils/crypto.ts"() {
  }
});

// src/utils/settings/settingsCache.ts
function getSessionSettingsCache() {
  return sessionSettingsCache;
}
function setSessionSettingsCache(value) {
  sessionSettingsCache = value;
}
function getCachedSettingsForSource(source) {
  return perSourceCache.has(source) ? perSourceCache.get(source) : void 0;
}
function setCachedSettingsForSource(source, value) {
  perSourceCache.set(source, value);
}
function getCachedParsedFile(path) {
  return parseFileCache.get(path);
}
function setCachedParsedFile(path, value) {
  parseFileCache.set(path, value);
}
function resetSettingsCache() {
  sessionSettingsCache = null;
  perSourceCache.clear();
  parseFileCache.clear();
}
function getPluginSettingsBase() {
  return pluginSettingsBase;
}
function setPluginSettingsBase(settings) {
  pluginSettingsBase = settings;
}
function clearPluginSettingsBase() {
  pluginSettingsBase = void 0;
}
var sessionSettingsCache, perSourceCache, parseFileCache, pluginSettingsBase;
var init_settingsCache = __esm({
  "src/utils/settings/settingsCache.ts"() {
    sessionSettingsCache = null;
    perSourceCache = /* @__PURE__ */ new Map();
    parseFileCache = /* @__PURE__ */ new Map();
  }
});

// src/utils/signal.ts
function createSignal() {
  const listeners = /* @__PURE__ */ new Set();
  return {
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    emit(...args) {
      for (const listener of listeners) listener(...args);
    },
    clear() {
      listeners.clear();
    }
  };
}
var init_signal = __esm({
  "src/utils/signal.ts"() {
  }
});

// src/bootstrap/state.ts
import { realpathSync } from "fs";
import { cwd } from "process";
function getInitialState() {
  let resolvedCwd = "";
  if (typeof process !== "undefined" && typeof process.cwd === "function" && typeof realpathSync === "function") {
    const rawCwd = cwd();
    try {
      resolvedCwd = realpathSync(rawCwd).normalize("NFC");
    } catch {
      resolvedCwd = rawCwd.normalize("NFC");
    }
  }
  const state = {
    originalCwd: resolvedCwd,
    projectRoot: resolvedCwd,
    totalCostUSD: 0,
    totalAPIDuration: 0,
    totalAPIDurationWithoutRetries: 0,
    totalToolDuration: 0,
    turnHookDurationMs: 0,
    turnToolDurationMs: 0,
    turnClassifierDurationMs: 0,
    turnToolCount: 0,
    turnHookCount: 0,
    turnClassifierCount: 0,
    startTime: Date.now(),
    lastInteractionTime: Date.now(),
    totalLinesAdded: 0,
    totalLinesRemoved: 0,
    hasUnknownModelCost: false,
    cwd: resolvedCwd,
    modelUsage: {},
    mainLoopModelOverride: void 0,
    initialMainLoopModel: null,
    modelStrings: null,
    isInteractive: false,
    kairosActive: false,
    strictToolResultPairing: false,
    sdkAgentProgressSummariesEnabled: false,
    userMsgOptIn: false,
    clientType: "cli",
    sessionSource: void 0,
    questionPreviewFormat: void 0,
    sessionIngressToken: void 0,
    oauthTokenFromFd: void 0,
    apiKeyFromFd: void 0,
    flagSettingsPath: void 0,
    flagSettingsInline: null,
    allowedSettingSources: [
      "userSettings",
      "projectSettings",
      "localSettings",
      "flagSettings",
      "policySettings"
    ],
    // Telemetry state
    meter: null,
    sessionCounter: null,
    locCounter: null,
    prCounter: null,
    commitCounter: null,
    costCounter: null,
    tokenCounter: null,
    codeEditToolDecisionCounter: null,
    activeTimeCounter: null,
    statsStore: null,
    sessionId: randomUUID(),
    parentSessionId: void 0,
    // Logger state
    loggerProvider: null,
    eventLogger: null,
    // Meter provider state
    meterProvider: null,
    tracerProvider: null,
    // Agent color state
    agentColorMap: /* @__PURE__ */ new Map(),
    agentColorIndex: 0,
    // Last API request for bug reports
    lastAPIRequest: null,
    lastAPIRequestMessages: null,
    // Last auto-mode classifier request(s) for /share transcript
    lastClassifierRequests: null,
    cachedClaudeMdContent: null,
    // In-memory error log for recent errors
    inMemoryErrorLog: [],
    // Session-only plugins from --plugin-dir flag
    inlinePlugins: [],
    // Explicit --chrome / --no-chrome flag value (undefined = not set on CLI)
    chromeFlagOverride: void 0,
    // Use cowork_plugins directory instead of plugins
    useCoworkPlugins: false,
    // Session-only bypass permissions mode flag (not persisted)
    sessionBypassPermissionsMode: false,
    // Scheduled tasks disabled until flag or dialog enables them
    scheduledTasksEnabled: false,
    sessionCronTasks: [],
    sessionCreatedTeams: /* @__PURE__ */ new Set(),
    // Session-only trust flag (not persisted to disk)
    sessionTrustAccepted: false,
    // Session-only flag to disable session persistence to disk
    sessionPersistenceDisabled: false,
    // Track if user has exited plan mode in this session
    hasExitedPlanMode: false,
    // Track if we need to show the plan mode exit attachment
    needsPlanModeExitAttachment: false,
    // Track if we need to show the auto mode exit attachment
    needsAutoModeExitAttachment: false,
    // Track if LSP plugin recommendation has been shown this session
    lspRecommendationShownThisSession: false,
    // SDK init event state
    initJsonSchema: null,
    registeredHooks: null,
    // Cache for plan slugs
    planSlugCache: /* @__PURE__ */ new Map(),
    // Track teleported session for reliability logging
    teleportedSessionInfo: null,
    // Track invoked skills for preservation across compaction
    invokedSkills: /* @__PURE__ */ new Map(),
    // Track slow operations for dev bar display
    slowOperations: [],
    // SDK-provided betas
    sdkBetas: void 0,
    // Main thread agent type
    mainThreadAgentType: void 0,
    // Remote mode
    isRemoteMode: false,
    ...process.env.USER_TYPE === "ant" ? {
      replBridgeActive: false
    } : {},
    // Direct connect server URL
    directConnectServerUrl: void 0,
    // System prompt section cache state
    systemPromptSectionCache: /* @__PURE__ */ new Map(),
    // Last date emitted to the model
    lastEmittedDate: null,
    // Additional directories from --add-dir flag (for CLAUDE.md loading)
    additionalDirectoriesForClaudeMd: [],
    // Channel server allowlist from --channels flag
    allowedChannels: [],
    hasDevChannels: false,
    // Session project dir (null = derive from originalCwd)
    sessionProjectDir: null,
    // Prompt cache 1h allowlist (null = not yet fetched from GrowthBook)
    promptCache1hAllowlist: null,
    // Prompt cache 1h eligibility (null = not yet evaluated)
    promptCache1hEligible: null,
    // Beta header latches (null = not yet triggered)
    afkModeHeaderLatched: null,
    fastModeHeaderLatched: null,
    cacheEditingHeaderLatched: null,
    thinkingClearLatched: null,
    // Current prompt ID
    promptId: null,
    lastMainRequestId: void 0,
    lastApiCompletionTimestamp: null,
    pendingPostCompaction: false
  };
  return state;
}
function getSessionId() {
  return STATE.sessionId;
}
function regenerateSessionId(options = {}) {
  if (options.setCurrentAsParent) {
    STATE.parentSessionId = STATE.sessionId;
  }
  STATE.planSlugCache.delete(STATE.sessionId);
  STATE.sessionId = randomUUID();
  STATE.sessionProjectDir = null;
  return STATE.sessionId;
}
function getParentSessionId() {
  return STATE.parentSessionId;
}
function switchSession(sessionId, projectDir = null) {
  STATE.planSlugCache.delete(STATE.sessionId);
  STATE.sessionId = sessionId;
  STATE.sessionProjectDir = projectDir;
  sessionSwitched.emit(sessionId);
}
function getSessionProjectDir() {
  return STATE.sessionProjectDir;
}
function getOriginalCwd() {
  return STATE.originalCwd;
}
function getProjectRoot() {
  return STATE.projectRoot;
}
function setOriginalCwd(cwd2) {
  STATE.originalCwd = cwd2.normalize("NFC");
}
function setProjectRoot(cwd2) {
  STATE.projectRoot = cwd2.normalize("NFC");
}
function getCwdState() {
  return STATE.cwd;
}
function setCwdState(cwd2) {
  STATE.cwd = cwd2.normalize("NFC");
}
function getDirectConnectServerUrl() {
  return STATE.directConnectServerUrl;
}
function isReplBridgeActive() {
  return STATE.replBridgeActive === true;
}
function setDirectConnectServerUrl(url) {
  STATE.directConnectServerUrl = url;
}
function addToTotalDurationState(duration, durationWithoutRetries) {
  STATE.totalAPIDuration += duration;
  STATE.totalAPIDurationWithoutRetries += durationWithoutRetries;
}
function resetTotalDurationStateAndCost_FOR_TESTS_ONLY() {
  STATE.totalAPIDuration = 0;
  STATE.totalAPIDurationWithoutRetries = 0;
  STATE.totalCostUSD = 0;
}
function addToTotalCostState(cost, modelUsage, model) {
  STATE.modelUsage[model] = modelUsage;
  STATE.totalCostUSD += cost;
}
function getTotalCostUSD() {
  return STATE.totalCostUSD;
}
function getTotalAPIDuration() {
  return STATE.totalAPIDuration;
}
function getTotalDuration() {
  return Date.now() - STATE.startTime;
}
function getTotalAPIDurationWithoutRetries() {
  return STATE.totalAPIDurationWithoutRetries;
}
function getTotalToolDuration() {
  return STATE.totalToolDuration;
}
function addToToolDuration(duration) {
  STATE.totalToolDuration += duration;
  STATE.turnToolDurationMs += duration;
  STATE.turnToolCount++;
}
function getTurnHookDurationMs() {
  return STATE.turnHookDurationMs;
}
function addToTurnHookDuration(duration) {
  STATE.turnHookDurationMs += duration;
  STATE.turnHookCount++;
}
function resetTurnHookDuration() {
  STATE.turnHookDurationMs = 0;
  STATE.turnHookCount = 0;
}
function getTurnHookCount() {
  return STATE.turnHookCount;
}
function getTurnToolDurationMs() {
  return STATE.turnToolDurationMs;
}
function resetTurnToolDuration() {
  STATE.turnToolDurationMs = 0;
  STATE.turnToolCount = 0;
}
function getTurnToolCount() {
  return STATE.turnToolCount;
}
function getTurnClassifierDurationMs() {
  return STATE.turnClassifierDurationMs;
}
function addToTurnClassifierDuration(duration) {
  STATE.turnClassifierDurationMs += duration;
  STATE.turnClassifierCount++;
}
function resetTurnClassifierDuration() {
  STATE.turnClassifierDurationMs = 0;
  STATE.turnClassifierCount = 0;
}
function getTurnClassifierCount() {
  return STATE.turnClassifierCount;
}
function getStatsStore() {
  return STATE.statsStore;
}
function setStatsStore(store) {
  STATE.statsStore = store;
}
function updateLastInteractionTime(immediate) {
  if (immediate) {
    flushInteractionTime_inner();
  } else {
    interactionTimeDirty = true;
  }
}
function flushInteractionTime() {
  if (interactionTimeDirty) {
    flushInteractionTime_inner();
  }
}
function flushInteractionTime_inner() {
  STATE.lastInteractionTime = Date.now();
  interactionTimeDirty = false;
}
function addToTotalLinesChanged(added, removed) {
  STATE.totalLinesAdded += added;
  STATE.totalLinesRemoved += removed;
}
function getTotalLinesAdded() {
  return STATE.totalLinesAdded;
}
function getTotalLinesRemoved() {
  return STATE.totalLinesRemoved;
}
function getTotalInputTokens() {
  return sumBy_default(Object.values(STATE.modelUsage), "inputTokens");
}
function getTotalOutputTokens() {
  return sumBy_default(Object.values(STATE.modelUsage), "outputTokens");
}
function getTotalCacheReadInputTokens() {
  return sumBy_default(Object.values(STATE.modelUsage), "cacheReadInputTokens");
}
function getTotalCacheCreationInputTokens() {
  return sumBy_default(Object.values(STATE.modelUsage), "cacheCreationInputTokens");
}
function getTotalWebSearchRequests() {
  return sumBy_default(Object.values(STATE.modelUsage), "webSearchRequests");
}
function getTurnOutputTokens() {
  return getTotalOutputTokens() - outputTokensAtTurnStart;
}
function getCurrentTurnTokenBudget() {
  return currentTurnTokenBudget;
}
function snapshotOutputTokensForTurn(budget) {
  outputTokensAtTurnStart = getTotalOutputTokens();
  currentTurnTokenBudget = budget;
  budgetContinuationCount = 0;
}
function getBudgetContinuationCount() {
  return budgetContinuationCount;
}
function incrementBudgetContinuationCount() {
  budgetContinuationCount++;
}
function setHasUnknownModelCost() {
  STATE.hasUnknownModelCost = true;
}
function hasUnknownModelCost() {
  return STATE.hasUnknownModelCost;
}
function getLastMainRequestId() {
  return STATE.lastMainRequestId;
}
function setLastMainRequestId(requestId) {
  STATE.lastMainRequestId = requestId;
}
function getLastApiCompletionTimestamp() {
  return STATE.lastApiCompletionTimestamp;
}
function setLastApiCompletionTimestamp(timestamp) {
  STATE.lastApiCompletionTimestamp = timestamp;
}
function markPostCompaction() {
  STATE.pendingPostCompaction = true;
}
function consumePostCompaction() {
  const was = STATE.pendingPostCompaction;
  STATE.pendingPostCompaction = false;
  return was;
}
function getLastInteractionTime() {
  return STATE.lastInteractionTime;
}
function markScrollActivity() {
  scrollDraining = true;
  if (scrollDrainTimer) clearTimeout(scrollDrainTimer);
  scrollDrainTimer = setTimeout(() => {
    scrollDraining = false;
    scrollDrainTimer = void 0;
  }, SCROLL_DRAIN_IDLE_MS);
  scrollDrainTimer.unref?.();
}
function getIsScrollDraining() {
  return scrollDraining;
}
async function waitForScrollIdle() {
  while (scrollDraining) {
    await new Promise((r) => setTimeout(r, SCROLL_DRAIN_IDLE_MS).unref?.());
  }
}
function getModelUsage() {
  return STATE.modelUsage;
}
function getUsageForModel(model) {
  return STATE.modelUsage[model];
}
function getMainLoopModelOverride() {
  return STATE.mainLoopModelOverride;
}
function getInitialMainLoopModel() {
  return STATE.initialMainLoopModel;
}
function setMainLoopModelOverride(model) {
  STATE.mainLoopModelOverride = model;
}
function setInitialMainLoopModel(model) {
  STATE.initialMainLoopModel = model;
}
function getSdkBetas() {
  return STATE.sdkBetas;
}
function setSdkBetas(betas) {
  STATE.sdkBetas = betas;
}
function resetCostState() {
  STATE.totalCostUSD = 0;
  STATE.totalAPIDuration = 0;
  STATE.totalAPIDurationWithoutRetries = 0;
  STATE.totalToolDuration = 0;
  STATE.startTime = Date.now();
  STATE.totalLinesAdded = 0;
  STATE.totalLinesRemoved = 0;
  STATE.hasUnknownModelCost = false;
  STATE.modelUsage = {};
  STATE.promptId = null;
}
function setCostStateForRestore({
  totalCostUSD,
  totalAPIDuration,
  totalAPIDurationWithoutRetries,
  totalToolDuration,
  totalLinesAdded,
  totalLinesRemoved,
  lastDuration,
  modelUsage
}) {
  STATE.totalCostUSD = totalCostUSD;
  STATE.totalAPIDuration = totalAPIDuration;
  STATE.totalAPIDurationWithoutRetries = totalAPIDurationWithoutRetries;
  STATE.totalToolDuration = totalToolDuration;
  STATE.totalLinesAdded = totalLinesAdded;
  STATE.totalLinesRemoved = totalLinesRemoved;
  if (modelUsage) {
    STATE.modelUsage = modelUsage;
  }
  if (lastDuration) {
    STATE.startTime = Date.now() - lastDuration;
  }
}
function resetStateForTests() {
  if (process.env.NODE_ENV !== "test") {
    throw new Error("resetStateForTests can only be called in tests");
  }
  Object.entries(getInitialState()).forEach(([key, value]) => {
    STATE[key] = value;
  });
  outputTokensAtTurnStart = 0;
  currentTurnTokenBudget = null;
  budgetContinuationCount = 0;
  sessionSwitched.clear();
}
function getModelStrings() {
  return STATE.modelStrings;
}
function setModelStrings(modelStrings) {
  STATE.modelStrings = modelStrings;
}
function resetModelStringsForTestingOnly() {
  STATE.modelStrings = null;
}
function setMeter(meter, createCounter) {
  STATE.meter = meter;
  STATE.sessionCounter = createCounter("claude_code.session.count", {
    description: "Count of CLI sessions started"
  });
  STATE.locCounter = createCounter("claude_code.lines_of_code.count", {
    description: "Count of lines of code modified, with the 'type' attribute indicating whether lines were added or removed"
  });
  STATE.prCounter = createCounter("claude_code.pull_request.count", {
    description: "Number of pull requests created"
  });
  STATE.commitCounter = createCounter("claude_code.commit.count", {
    description: "Number of git commits created"
  });
  STATE.costCounter = createCounter("claude_code.cost.usage", {
    description: "Cost of the Claude Code session",
    unit: "USD"
  });
  STATE.tokenCounter = createCounter("claude_code.token.usage", {
    description: "Number of tokens used",
    unit: "tokens"
  });
  STATE.codeEditToolDecisionCounter = createCounter(
    "claude_code.code_edit_tool.decision",
    {
      description: "Count of code editing tool permission decisions (accept/reject) for Edit, Write, and NotebookEdit tools"
    }
  );
  STATE.activeTimeCounter = createCounter("claude_code.active_time.total", {
    description: "Total active time in seconds",
    unit: "s"
  });
}
function getMeter() {
  return STATE.meter;
}
function getSessionCounter() {
  return STATE.sessionCounter;
}
function getLocCounter() {
  return STATE.locCounter;
}
function getPrCounter() {
  return STATE.prCounter;
}
function getCommitCounter() {
  return STATE.commitCounter;
}
function getCostCounter() {
  return STATE.costCounter;
}
function getTokenCounter() {
  return STATE.tokenCounter;
}
function getCodeEditToolDecisionCounter() {
  return STATE.codeEditToolDecisionCounter;
}
function getActiveTimeCounter() {
  return STATE.activeTimeCounter;
}
function getLoggerProvider() {
  return STATE.loggerProvider;
}
function setLoggerProvider(provider) {
  STATE.loggerProvider = provider;
}
function getEventLogger() {
  return STATE.eventLogger;
}
function setEventLogger(logger) {
  STATE.eventLogger = logger;
}
function getMeterProvider() {
  return STATE.meterProvider;
}
function setMeterProvider(provider) {
  STATE.meterProvider = provider;
}
function getTracerProvider() {
  return STATE.tracerProvider;
}
function setTracerProvider(provider) {
  STATE.tracerProvider = provider;
}
function getIsNonInteractiveSession() {
  return !STATE.isInteractive;
}
function getIsInteractive() {
  return STATE.isInteractive;
}
function setIsInteractive(value) {
  STATE.isInteractive = value;
}
function getClientType() {
  return STATE.clientType;
}
function setClientType(type) {
  STATE.clientType = type;
}
function getSdkAgentProgressSummariesEnabled() {
  return STATE.sdkAgentProgressSummariesEnabled;
}
function setSdkAgentProgressSummariesEnabled(value) {
  STATE.sdkAgentProgressSummariesEnabled = value;
}
function getKairosActive() {
  return STATE.kairosActive;
}
function setKairosActive(value) {
  STATE.kairosActive = value;
}
function getStrictToolResultPairing() {
  return STATE.strictToolResultPairing;
}
function setStrictToolResultPairing(value) {
  STATE.strictToolResultPairing = value;
}
function getUserMsgOptIn() {
  return STATE.userMsgOptIn;
}
function setUserMsgOptIn(value) {
  STATE.userMsgOptIn = value;
}
function getSessionSource() {
  return STATE.sessionSource;
}
function setSessionSource(source) {
  STATE.sessionSource = source;
}
function getQuestionPreviewFormat() {
  return STATE.questionPreviewFormat;
}
function setQuestionPreviewFormat(format) {
  STATE.questionPreviewFormat = format;
}
function getAgentColorMap() {
  return STATE.agentColorMap;
}
function getFlagSettingsPath() {
  return STATE.flagSettingsPath;
}
function setFlagSettingsPath(path) {
  STATE.flagSettingsPath = path;
}
function getFlagSettingsInline() {
  return STATE.flagSettingsInline;
}
function setFlagSettingsInline(settings) {
  STATE.flagSettingsInline = settings;
}
function getSessionIngressToken() {
  return STATE.sessionIngressToken;
}
function setSessionIngressToken(token) {
  STATE.sessionIngressToken = token;
}
function getOauthTokenFromFd() {
  return STATE.oauthTokenFromFd;
}
function setOauthTokenFromFd(token) {
  STATE.oauthTokenFromFd = token;
}
function getApiKeyFromFd() {
  return STATE.apiKeyFromFd;
}
function setApiKeyFromFd(key) {
  STATE.apiKeyFromFd = key;
}
function setLastAPIRequest(params) {
  STATE.lastAPIRequest = params;
}
function getLastAPIRequest() {
  return STATE.lastAPIRequest;
}
function setLastAPIRequestMessages(messages) {
  STATE.lastAPIRequestMessages = messages;
}
function getLastAPIRequestMessages() {
  return STATE.lastAPIRequestMessages;
}
function setLastClassifierRequests(requests) {
  STATE.lastClassifierRequests = requests;
}
function getLastClassifierRequests() {
  return STATE.lastClassifierRequests;
}
function setCachedClaudeMdContent(content) {
  STATE.cachedClaudeMdContent = content;
}
function getCachedClaudeMdContent() {
  return STATE.cachedClaudeMdContent;
}
function addToInMemoryErrorLog(errorInfo) {
  const MAX_IN_MEMORY_ERRORS = 100;
  if (STATE.inMemoryErrorLog.length >= MAX_IN_MEMORY_ERRORS) {
    STATE.inMemoryErrorLog.shift();
  }
  STATE.inMemoryErrorLog.push(errorInfo);
}
function getAllowedSettingSources() {
  return STATE.allowedSettingSources;
}
function setAllowedSettingSources(sources) {
  STATE.allowedSettingSources = sources;
}
function preferThirdPartyAuthentication() {
  return getIsNonInteractiveSession() && STATE.clientType !== "claude-vscode";
}
function setInlinePlugins(plugins) {
  STATE.inlinePlugins = plugins;
}
function getInlinePlugins() {
  return STATE.inlinePlugins;
}
function setChromeFlagOverride(value) {
  STATE.chromeFlagOverride = value;
}
function getChromeFlagOverride() {
  return STATE.chromeFlagOverride;
}
function setUseCoworkPlugins(value) {
  STATE.useCoworkPlugins = value;
  resetSettingsCache();
}
function getUseCoworkPlugins() {
  return STATE.useCoworkPlugins;
}
function setSessionBypassPermissionsMode(enabled) {
  STATE.sessionBypassPermissionsMode = enabled;
}
function getSessionBypassPermissionsMode() {
  return STATE.sessionBypassPermissionsMode;
}
function setScheduledTasksEnabled(enabled) {
  STATE.scheduledTasksEnabled = enabled;
}
function getScheduledTasksEnabled() {
  return STATE.scheduledTasksEnabled;
}
function getSessionCronTasks() {
  return STATE.sessionCronTasks;
}
function addSessionCronTask(task) {
  STATE.sessionCronTasks.push(task);
}
function removeSessionCronTasks(ids) {
  if (ids.length === 0) return 0;
  const idSet = new Set(ids);
  const remaining = STATE.sessionCronTasks.filter((t) => !idSet.has(t.id));
  const removed = STATE.sessionCronTasks.length - remaining.length;
  if (removed === 0) return 0;
  STATE.sessionCronTasks = remaining;
  return removed;
}
function setSessionTrustAccepted(accepted) {
  STATE.sessionTrustAccepted = accepted;
}
function getSessionTrustAccepted() {
  return STATE.sessionTrustAccepted;
}
function setSessionPersistenceDisabled(disabled) {
  STATE.sessionPersistenceDisabled = disabled;
}
function isSessionPersistenceDisabled() {
  return STATE.sessionPersistenceDisabled;
}
function hasExitedPlanModeInSession() {
  return STATE.hasExitedPlanMode;
}
function setHasExitedPlanMode(value) {
  STATE.hasExitedPlanMode = value;
}
function needsPlanModeExitAttachment() {
  return STATE.needsPlanModeExitAttachment;
}
function setNeedsPlanModeExitAttachment(value) {
  STATE.needsPlanModeExitAttachment = value;
}
function handlePlanModeTransition(fromMode, toMode) {
  if (toMode === "plan" && fromMode !== "plan") {
    STATE.needsPlanModeExitAttachment = false;
  }
  if (fromMode === "plan" && toMode !== "plan") {
    STATE.needsPlanModeExitAttachment = true;
  }
}
function needsAutoModeExitAttachment() {
  return STATE.needsAutoModeExitAttachment;
}
function setNeedsAutoModeExitAttachment(value) {
  STATE.needsAutoModeExitAttachment = value;
}
function handleAutoModeTransition(fromMode, toMode) {
  if (fromMode === "auto" && toMode === "plan" || fromMode === "plan" && toMode === "auto") {
    return;
  }
  const fromIsAuto = fromMode === "auto";
  const toIsAuto = toMode === "auto";
  if (toIsAuto && !fromIsAuto) {
    STATE.needsAutoModeExitAttachment = false;
  }
  if (fromIsAuto && !toIsAuto) {
    STATE.needsAutoModeExitAttachment = true;
  }
}
function hasShownLspRecommendationThisSession() {
  return STATE.lspRecommendationShownThisSession;
}
function setLspRecommendationShownThisSession(value) {
  STATE.lspRecommendationShownThisSession = value;
}
function setInitJsonSchema(schema) {
  STATE.initJsonSchema = schema;
}
function getInitJsonSchema() {
  return STATE.initJsonSchema;
}
function registerHookCallbacks(hooks) {
  if (!STATE.registeredHooks) {
    STATE.registeredHooks = {};
  }
  for (const [event, matchers] of Object.entries(hooks)) {
    const eventKey = event;
    if (!STATE.registeredHooks[eventKey]) {
      STATE.registeredHooks[eventKey] = [];
    }
    STATE.registeredHooks[eventKey].push(...matchers);
  }
}
function getRegisteredHooks() {
  return STATE.registeredHooks;
}
function clearRegisteredHooks() {
  STATE.registeredHooks = null;
}
function clearRegisteredPluginHooks() {
  if (!STATE.registeredHooks) {
    return;
  }
  const filtered = {};
  for (const [event, matchers] of Object.entries(STATE.registeredHooks)) {
    const callbackHooks = matchers.filter((m) => !("pluginRoot" in m));
    if (callbackHooks.length > 0) {
      filtered[event] = callbackHooks;
    }
  }
  STATE.registeredHooks = Object.keys(filtered).length > 0 ? filtered : null;
}
function resetSdkInitState() {
  STATE.initJsonSchema = null;
  STATE.registeredHooks = null;
}
function getPlanSlugCache() {
  return STATE.planSlugCache;
}
function getSessionCreatedTeams() {
  return STATE.sessionCreatedTeams;
}
function setTeleportedSessionInfo(info) {
  STATE.teleportedSessionInfo = {
    isTeleported: true,
    hasLoggedFirstMessage: false,
    sessionId: info.sessionId
  };
}
function getTeleportedSessionInfo() {
  return STATE.teleportedSessionInfo;
}
function markFirstTeleportMessageLogged() {
  if (STATE.teleportedSessionInfo) {
    STATE.teleportedSessionInfo.hasLoggedFirstMessage = true;
  }
}
function addInvokedSkill(skillName, skillPath, content, agentId = null) {
  const key = `${agentId ?? ""}:${skillName}`;
  STATE.invokedSkills.set(key, {
    skillName,
    skillPath,
    content,
    invokedAt: Date.now(),
    agentId
  });
}
function getInvokedSkills() {
  return STATE.invokedSkills;
}
function getInvokedSkillsForAgent(agentId) {
  const normalizedId = agentId ?? null;
  const filtered = /* @__PURE__ */ new Map();
  for (const [key, skill] of STATE.invokedSkills) {
    if (skill.agentId === normalizedId) {
      filtered.set(key, skill);
    }
  }
  return filtered;
}
function clearInvokedSkills(preservedAgentIds) {
  if (!preservedAgentIds || preservedAgentIds.size === 0) {
    STATE.invokedSkills.clear();
    return;
  }
  for (const [key, skill] of STATE.invokedSkills) {
    if (skill.agentId === null || !preservedAgentIds.has(skill.agentId)) {
      STATE.invokedSkills.delete(key);
    }
  }
}
function clearInvokedSkillsForAgent(agentId) {
  for (const [key, skill] of STATE.invokedSkills) {
    if (skill.agentId === agentId) {
      STATE.invokedSkills.delete(key);
    }
  }
}
function addSlowOperation(operation, durationMs) {
  if (process.env.USER_TYPE !== "ant") return;
  if (operation.includes("exec") && operation.includes("claude-prompt-")) {
    return;
  }
  const now = Date.now();
  STATE.slowOperations = STATE.slowOperations.filter(
    (op) => now - op.timestamp < SLOW_OPERATION_TTL_MS
  );
  STATE.slowOperations.push({ operation, durationMs, timestamp: now });
  if (STATE.slowOperations.length > MAX_SLOW_OPERATIONS) {
    STATE.slowOperations = STATE.slowOperations.slice(-MAX_SLOW_OPERATIONS);
  }
}
function getSlowOperations() {
  if (STATE.slowOperations.length === 0) {
    return EMPTY_SLOW_OPERATIONS;
  }
  const now = Date.now();
  if (STATE.slowOperations.some((op) => now - op.timestamp >= SLOW_OPERATION_TTL_MS)) {
    STATE.slowOperations = STATE.slowOperations.filter(
      (op) => now - op.timestamp < SLOW_OPERATION_TTL_MS
    );
    if (STATE.slowOperations.length === 0) {
      return EMPTY_SLOW_OPERATIONS;
    }
  }
  return STATE.slowOperations;
}
function getMainThreadAgentType() {
  return STATE.mainThreadAgentType;
}
function setMainThreadAgentType(agentType) {
  STATE.mainThreadAgentType = agentType;
}
function getIsRemoteMode() {
  return STATE.isRemoteMode;
}
function setIsRemoteMode(value) {
  STATE.isRemoteMode = value;
}
function getSystemPromptSectionCache() {
  return STATE.systemPromptSectionCache;
}
function setSystemPromptSectionCacheEntry(name, value) {
  STATE.systemPromptSectionCache.set(name, value);
}
function clearSystemPromptSectionState() {
  STATE.systemPromptSectionCache.clear();
}
function getLastEmittedDate() {
  return STATE.lastEmittedDate;
}
function setLastEmittedDate(date) {
  STATE.lastEmittedDate = date;
}
function getAdditionalDirectoriesForClaudeMd() {
  return STATE.additionalDirectoriesForClaudeMd;
}
function setAdditionalDirectoriesForClaudeMd(directories) {
  STATE.additionalDirectoriesForClaudeMd = directories;
}
function getAllowedChannels() {
  return STATE.allowedChannels;
}
function setAllowedChannels(entries) {
  STATE.allowedChannels = entries;
}
function getHasDevChannels() {
  return STATE.hasDevChannels;
}
function setHasDevChannels(value) {
  STATE.hasDevChannels = value;
}
function getPromptCache1hAllowlist() {
  return STATE.promptCache1hAllowlist;
}
function setPromptCache1hAllowlist(allowlist) {
  STATE.promptCache1hAllowlist = allowlist;
}
function getPromptCache1hEligible() {
  return STATE.promptCache1hEligible;
}
function setPromptCache1hEligible(eligible) {
  STATE.promptCache1hEligible = eligible;
}
function getAfkModeHeaderLatched() {
  return STATE.afkModeHeaderLatched;
}
function setAfkModeHeaderLatched(v) {
  STATE.afkModeHeaderLatched = v;
}
function getFastModeHeaderLatched() {
  return STATE.fastModeHeaderLatched;
}
function setFastModeHeaderLatched(v) {
  STATE.fastModeHeaderLatched = v;
}
function getCacheEditingHeaderLatched() {
  return STATE.cacheEditingHeaderLatched;
}
function setCacheEditingHeaderLatched(v) {
  STATE.cacheEditingHeaderLatched = v;
}
function getThinkingClearLatched() {
  return STATE.thinkingClearLatched;
}
function setThinkingClearLatched(v) {
  STATE.thinkingClearLatched = v;
}
function clearBetaHeaderLatches() {
  STATE.afkModeHeaderLatched = null;
  STATE.fastModeHeaderLatched = null;
  STATE.cacheEditingHeaderLatched = null;
  STATE.thinkingClearLatched = null;
}
function getPromptId() {
  return STATE.promptId;
}
function setPromptId(id) {
  STATE.promptId = id;
}
var STATE, sessionSwitched, onSessionSwitch, interactionTimeDirty, outputTokensAtTurnStart, currentTurnTokenBudget, budgetContinuationCount, scrollDraining, scrollDrainTimer, SCROLL_DRAIN_IDLE_MS, MAX_SLOW_OPERATIONS, SLOW_OPERATION_TTL_MS, EMPTY_SLOW_OPERATIONS;
var init_state = __esm({
  "src/bootstrap/state.ts"() {
    init_sumBy();
    init_crypto();
    init_settingsCache();
    init_signal();
    STATE = getInitialState();
    sessionSwitched = createSignal();
    onSessionSwitch = sessionSwitched.subscribe;
    interactionTimeDirty = false;
    outputTokensAtTurnStart = 0;
    currentTurnTokenBudget = null;
    budgetContinuationCount = 0;
    scrollDraining = false;
    SCROLL_DRAIN_IDLE_MS = 150;
    MAX_SLOW_OPERATIONS = 10;
    SLOW_OPERATION_TTL_MS = 1e4;
    EMPTY_SLOW_OPERATIONS = [];
  }
});

export {
  Stack_default,
  init_Stack,
  SetCache_default,
  init_SetCache,
  arraySome_default,
  init_arraySome,
  cacheHas_default,
  init_cacheHas,
  Uint8Array_default,
  init_Uint8Array,
  mapToArray_default,
  init_mapToArray,
  setToArray_default,
  init_setToArray,
  arrayPush_default,
  init_arrayPush,
  isArray_default,
  init_isArray,
  baseGetAllKeys_default,
  init_baseGetAllKeys,
  arrayFilter_default,
  init_arrayFilter,
  stubArray_default,
  init_stubArray,
  getSymbols_default,
  init_getSymbols,
  baseTimes_default,
  init_baseTimes,
  isObjectLike_default,
  init_isObjectLike,
  isArguments_default,
  init_isArguments,
  stubFalse_default,
  init_stubFalse,
  isBuffer_default,
  init_isBuffer,
  isIndex_default,
  init_isIndex,
  isLength_default,
  init_isLength,
  baseUnary_default,
  init_baseUnary,
  nodeUtil_default,
  init_nodeUtil,
  isTypedArray_default,
  init_isTypedArray,
  arrayLikeKeys_default,
  init_arrayLikeKeys,
  isPrototype_default,
  init_isPrototype,
  overArg_default,
  init_overArg,
  baseKeys_default,
  init_baseKeys,
  isArrayLike_default,
  init_isArrayLike,
  keys_default,
  init_keys,
  getAllKeys_default,
  init_getAllKeys,
  Set_default,
  init_Set,
  WeakMap_default,
  init_WeakMap,
  getTag_default,
  init_getTag,
  baseIsEqual_default,
  init_baseIsEqual,
  baseIsMatch_default,
  init_baseIsMatch,
  getMatchData_default,
  init_getMatchData,
  baseMatches_default,
  init_baseMatches,
  isSymbol_default,
  init_isSymbol,
  stringToPath_default,
  init_stringToPath,
  arrayMap_default,
  init_arrayMap,
  baseToString_default,
  init_baseToString,
  toString_default,
  init_toString,
  castPath_default,
  init_castPath,
  toKey_default,
  init_toKey,
  baseGet_default,
  init_baseGet,
  get_default,
  init_get,
  hasPath_default,
  init_hasPath,
  hasIn_default,
  init_hasIn,
  baseMatchesProperty_default,
  init_baseMatchesProperty,
  identity_default,
  init_identity,
  baseProperty_default,
  init_baseProperty,
  property_default,
  init_property,
  baseIteratee_default,
  init_baseIteratee,
  baseSum_default,
  init_baseSum,
  sumBy_default,
  init_sumBy,
  getSessionSettingsCache,
  setSessionSettingsCache,
  getCachedSettingsForSource,
  setCachedSettingsForSource,
  getCachedParsedFile,
  setCachedParsedFile,
  resetSettingsCache,
  getPluginSettingsBase,
  setPluginSettingsBase,
  clearPluginSettingsBase,
  init_settingsCache,
  createSignal,
  init_signal,
  getSessionId,
  regenerateSessionId,
  getParentSessionId,
  switchSession,
  onSessionSwitch,
  getSessionProjectDir,
  getOriginalCwd,
  getProjectRoot,
  setOriginalCwd,
  setProjectRoot,
  getCwdState,
  setCwdState,
  getDirectConnectServerUrl,
  isReplBridgeActive,
  setDirectConnectServerUrl,
  addToTotalDurationState,
  resetTotalDurationStateAndCost_FOR_TESTS_ONLY,
  addToTotalCostState,
  getTotalCostUSD,
  getTotalAPIDuration,
  getTotalDuration,
  getTotalAPIDurationWithoutRetries,
  getTotalToolDuration,
  addToToolDuration,
  getTurnHookDurationMs,
  addToTurnHookDuration,
  resetTurnHookDuration,
  getTurnHookCount,
  getTurnToolDurationMs,
  resetTurnToolDuration,
  getTurnToolCount,
  getTurnClassifierDurationMs,
  addToTurnClassifierDuration,
  resetTurnClassifierDuration,
  getTurnClassifierCount,
  getStatsStore,
  setStatsStore,
  updateLastInteractionTime,
  flushInteractionTime,
  addToTotalLinesChanged,
  getTotalLinesAdded,
  getTotalLinesRemoved,
  getTotalInputTokens,
  getTotalOutputTokens,
  getTotalCacheReadInputTokens,
  getTotalCacheCreationInputTokens,
  getTotalWebSearchRequests,
  getTurnOutputTokens,
  getCurrentTurnTokenBudget,
  snapshotOutputTokensForTurn,
  getBudgetContinuationCount,
  incrementBudgetContinuationCount,
  setHasUnknownModelCost,
  hasUnknownModelCost,
  getLastMainRequestId,
  setLastMainRequestId,
  getLastApiCompletionTimestamp,
  setLastApiCompletionTimestamp,
  markPostCompaction,
  consumePostCompaction,
  getLastInteractionTime,
  markScrollActivity,
  getIsScrollDraining,
  waitForScrollIdle,
  getModelUsage,
  getUsageForModel,
  getMainLoopModelOverride,
  getInitialMainLoopModel,
  setMainLoopModelOverride,
  setInitialMainLoopModel,
  getSdkBetas,
  setSdkBetas,
  resetCostState,
  setCostStateForRestore,
  resetStateForTests,
  getModelStrings,
  setModelStrings,
  resetModelStringsForTestingOnly,
  setMeter,
  getMeter,
  getSessionCounter,
  getLocCounter,
  getPrCounter,
  getCommitCounter,
  getCostCounter,
  getTokenCounter,
  getCodeEditToolDecisionCounter,
  getActiveTimeCounter,
  getLoggerProvider,
  setLoggerProvider,
  getEventLogger,
  setEventLogger,
  getMeterProvider,
  setMeterProvider,
  getTracerProvider,
  setTracerProvider,
  getIsNonInteractiveSession,
  getIsInteractive,
  setIsInteractive,
  getClientType,
  setClientType,
  getSdkAgentProgressSummariesEnabled,
  setSdkAgentProgressSummariesEnabled,
  getKairosActive,
  setKairosActive,
  getStrictToolResultPairing,
  setStrictToolResultPairing,
  getUserMsgOptIn,
  setUserMsgOptIn,
  getSessionSource,
  setSessionSource,
  getQuestionPreviewFormat,
  setQuestionPreviewFormat,
  getAgentColorMap,
  getFlagSettingsPath,
  setFlagSettingsPath,
  getFlagSettingsInline,
  setFlagSettingsInline,
  getSessionIngressToken,
  setSessionIngressToken,
  getOauthTokenFromFd,
  setOauthTokenFromFd,
  getApiKeyFromFd,
  setApiKeyFromFd,
  setLastAPIRequest,
  getLastAPIRequest,
  setLastAPIRequestMessages,
  getLastAPIRequestMessages,
  setLastClassifierRequests,
  getLastClassifierRequests,
  setCachedClaudeMdContent,
  getCachedClaudeMdContent,
  addToInMemoryErrorLog,
  getAllowedSettingSources,
  setAllowedSettingSources,
  preferThirdPartyAuthentication,
  setInlinePlugins,
  getInlinePlugins,
  setChromeFlagOverride,
  getChromeFlagOverride,
  setUseCoworkPlugins,
  getUseCoworkPlugins,
  setSessionBypassPermissionsMode,
  getSessionBypassPermissionsMode,
  setScheduledTasksEnabled,
  getScheduledTasksEnabled,
  getSessionCronTasks,
  addSessionCronTask,
  removeSessionCronTasks,
  setSessionTrustAccepted,
  getSessionTrustAccepted,
  setSessionPersistenceDisabled,
  isSessionPersistenceDisabled,
  hasExitedPlanModeInSession,
  setHasExitedPlanMode,
  needsPlanModeExitAttachment,
  setNeedsPlanModeExitAttachment,
  handlePlanModeTransition,
  needsAutoModeExitAttachment,
  setNeedsAutoModeExitAttachment,
  handleAutoModeTransition,
  hasShownLspRecommendationThisSession,
  setLspRecommendationShownThisSession,
  setInitJsonSchema,
  getInitJsonSchema,
  registerHookCallbacks,
  getRegisteredHooks,
  clearRegisteredHooks,
  clearRegisteredPluginHooks,
  resetSdkInitState,
  getPlanSlugCache,
  getSessionCreatedTeams,
  setTeleportedSessionInfo,
  getTeleportedSessionInfo,
  markFirstTeleportMessageLogged,
  addInvokedSkill,
  getInvokedSkills,
  getInvokedSkillsForAgent,
  clearInvokedSkills,
  clearInvokedSkillsForAgent,
  addSlowOperation,
  getSlowOperations,
  getMainThreadAgentType,
  setMainThreadAgentType,
  getIsRemoteMode,
  setIsRemoteMode,
  getSystemPromptSectionCache,
  setSystemPromptSectionCacheEntry,
  clearSystemPromptSectionState,
  getLastEmittedDate,
  setLastEmittedDate,
  getAdditionalDirectoriesForClaudeMd,
  setAdditionalDirectoriesForClaudeMd,
  getAllowedChannels,
  setAllowedChannels,
  getHasDevChannels,
  setHasDevChannels,
  getPromptCache1hAllowlist,
  setPromptCache1hAllowlist,
  getPromptCache1hEligible,
  setPromptCache1hEligible,
  getAfkModeHeaderLatched,
  setAfkModeHeaderLatched,
  getFastModeHeaderLatched,
  setFastModeHeaderLatched,
  getCacheEditingHeaderLatched,
  setCacheEditingHeaderLatched,
  getThinkingClearLatched,
  setThinkingClearLatched,
  clearBetaHeaderLatches,
  getPromptId,
  setPromptId,
  init_state
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RhY2tDbGVhci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdGFja0RlbGV0ZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdGFja0dldC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdGFja0hhcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdGFja1NldC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TdGFjay5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zZXRDYWNoZUFkZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zZXRDYWNoZUhhcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TZXRDYWNoZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheVNvbWUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2FjaGVIYXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZXF1YWxBcnJheXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fVWludDhBcnJheS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBUb0FycmF5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3NldFRvQXJyYXkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZXF1YWxCeVRhZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheVB1c2guanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0FycmF5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRBbGxLZXlzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5RmlsdGVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvc3R1YkFycmF5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFN5bWJvbHMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVRpbWVzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJndW1lbnRzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvc3R1YkZhbHNlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNCdWZmZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faXNJbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzTGVuZ3RoLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVVuYXJ5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25vZGVVdGlsLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNUeXBlZEFycmF5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5TGlrZUtleXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faXNQcm90b3R5cGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb3ZlckFyZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19uYXRpdmVLZXlzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VLZXlzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNBcnJheUxpa2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9rZXlzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldEFsbEtleXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZXF1YWxPYmplY3RzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX0RhdGFWaWV3LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1Byb21pc2UuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU2V0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1dlYWtNYXAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0VGFnLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNFcXVhbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNNYXRjaC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc1N0cmljdENvbXBhcmFibGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0TWF0Y2hEYXRhLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VNYXRjaGVzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNTeW1ib2wuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faXNLZXkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWVtb2l6ZUNhcHBlZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdHJpbmdUb1BhdGguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYXJyYXlNYXAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVRvU3RyaW5nLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdG9TdHJpbmcuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2FzdFBhdGguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fdG9LZXkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUdldC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2dldC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSGFzSW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzUGF0aC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2hhc0luLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pZGVudGl0eS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlUHJvcGVydHkuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE4LjAvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVByb3BlcnR5RGVlcC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3Byb3BlcnR5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJdGVyYXRlZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTguMC9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlU3VtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xOC4wL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvc3VtQnkuanMiLCAiLi4vLi4vc3JjL3V0aWxzL2NyeXB0by50cyIsICIuLi8uLi9zcmMvdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3NDYWNoZS50cyIsICIuLi8uLi9zcmMvdXRpbHMvc2lnbmFsLnRzIiwgIi4uLy4uL3NyYy9ib290c3RyYXAvc3RhdGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBMaXN0Q2FjaGUgZnJvbSAnLi9fTGlzdENhY2hlLmpzJztcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhY2tDbGVhcjtcbiIsICIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWNrRGVsZXRlO1xuIiwgIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhY2tHZXQ7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhY2tIYXM7XG4iLCAiaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuaW1wb3J0IE1hcENhY2hlIGZyb20gJy4vX01hcENhY2hlLmpzJztcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWNrU2V0O1xuIiwgImltcG9ydCBMaXN0Q2FjaGUgZnJvbSAnLi9fTGlzdENhY2hlLmpzJztcbmltcG9ydCBzdGFja0NsZWFyIGZyb20gJy4vX3N0YWNrQ2xlYXIuanMnO1xuaW1wb3J0IHN0YWNrRGVsZXRlIGZyb20gJy4vX3N0YWNrRGVsZXRlLmpzJztcbmltcG9ydCBzdGFja0dldCBmcm9tICcuL19zdGFja0dldC5qcyc7XG5pbXBvcnQgc3RhY2tIYXMgZnJvbSAnLi9fc3RhY2tIYXMuanMnO1xuaW1wb3J0IHN0YWNrU2V0IGZyb20gJy4vX3N0YWNrU2V0LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFjaztcbiIsICIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0Q2FjaGVBZGQ7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0Q2FjaGVIYXM7XG4iLCAiaW1wb3J0IE1hcENhY2hlIGZyb20gJy4vX01hcENhY2hlLmpzJztcbmltcG9ydCBzZXRDYWNoZUFkZCBmcm9tICcuL19zZXRDYWNoZUFkZC5qcyc7XG5pbXBvcnQgc2V0Q2FjaGVIYXMgZnJvbSAnLi9fc2V0Q2FjaGVIYXMuanMnO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbmV4cG9ydCBkZWZhdWx0IFNldENhY2hlO1xuIiwgIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5U29tZTtcbiIsICIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FjaGVIYXM7XG4iLCAiaW1wb3J0IFNldENhY2hlIGZyb20gJy4vX1NldENhY2hlLmpzJztcbmltcG9ydCBhcnJheVNvbWUgZnJvbSAnLi9fYXJyYXlTb21lLmpzJztcbmltcG9ydCBjYWNoZUhhcyBmcm9tICcuL19jYWNoZUhhcy5qcyc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQ2hlY2sgdGhhdCBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIGFyclN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICB2YXIgb3RoU3RhY2tlZCA9IHN0YWNrLmdldChvdGhlcik7XG4gIGlmIChhcnJTdGFja2VkICYmIG90aFN0YWNrZWQpIHtcbiAgICByZXR1cm4gYXJyU3RhY2tlZCA9PSBvdGhlciAmJiBvdGhTdGFja2VkID09IGFycmF5O1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXF1YWxBcnJheXM7XG4iLCAiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbmV4cG9ydCBkZWZhdWx0IFVpbnQ4QXJyYXk7XG4iLCAiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwVG9BcnJheTtcbiIsICIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRUb0FycmF5O1xuIiwgImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBVaW50OEFycmF5IGZyb20gJy4vX1VpbnQ4QXJyYXkuanMnO1xuaW1wb3J0IGVxIGZyb20gJy4vZXEuanMnO1xuaW1wb3J0IGVxdWFsQXJyYXlzIGZyb20gJy4vX2VxdWFsQXJyYXlzLmpzJztcbmltcG9ydCBtYXBUb0FycmF5IGZyb20gJy4vX21hcFRvQXJyYXkuanMnO1xuaW1wb3J0IHNldFRvQXJyYXkgZnJvbSAnLi9fc2V0VG9BcnJheS5qcyc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWFsQnlUYWc7XG4iLCAiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheVB1c2g7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJyYXk7XG4iLCAiaW1wb3J0IGFycmF5UHVzaCBmcm9tICcuL19hcnJheVB1c2guanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0QWxsS2V5cztcbiIsICIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5RmlsdGVyO1xuIiwgIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0dWJBcnJheTtcbiIsICJpbXBvcnQgYXJyYXlGaWx0ZXIgZnJvbSAnLi9fYXJyYXlGaWx0ZXIuanMnO1xuaW1wb3J0IHN0dWJBcnJheSBmcm9tICcuL3N0dWJBcnJheS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U3ltYm9scztcbiIsICIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlVGltZXM7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcbiIsICJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXNBcmd1bWVudHM7XG4iLCAiaW1wb3J0IGJhc2VJc0FyZ3VtZW50cyBmcm9tICcuL19iYXNlSXNBcmd1bWVudHMuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0FyZ3VtZW50cztcbiIsICIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0dWJGYWxzZTtcbiIsICJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcbmltcG9ydCBzdHViRmFsc2UgZnJvbSAnLi9zdHViRmFsc2UuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQnVmZmVyO1xuIiwgIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNJbmRleDtcbiIsICIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzTGVuZ3RoO1xuIiwgImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzTGVuZ3RoIGZyb20gJy4vaXNMZW5ndGguanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzVHlwZWRBcnJheTtcbiIsICIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VVbmFyeTtcbiIsICJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZVV0aWw7XG4iLCAiaW1wb3J0IGJhc2VJc1R5cGVkQXJyYXkgZnJvbSAnLi9fYmFzZUlzVHlwZWRBcnJheS5qcyc7XG5pbXBvcnQgYmFzZVVuYXJ5IGZyb20gJy4vX2Jhc2VVbmFyeS5qcyc7XG5pbXBvcnQgbm9kZVV0aWwgZnJvbSAnLi9fbm9kZVV0aWwuanMnO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuZXhwb3J0IGRlZmF1bHQgaXNUeXBlZEFycmF5O1xuIiwgImltcG9ydCBiYXNlVGltZXMgZnJvbSAnLi9fYmFzZVRpbWVzLmpzJztcbmltcG9ydCBpc0FyZ3VtZW50cyBmcm9tICcuL2lzQXJndW1lbnRzLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNCdWZmZXIgZnJvbSAnLi9pc0J1ZmZlci5qcyc7XG5pbXBvcnQgaXNJbmRleCBmcm9tICcuL19pc0luZGV4LmpzJztcbmltcG9ydCBpc1R5cGVkQXJyYXkgZnJvbSAnLi9pc1R5cGVkQXJyYXkuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5TGlrZUtleXM7XG4iLCAiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1Byb3RvdHlwZTtcbiIsICIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3ZlckFyZztcbiIsICJpbXBvcnQgb3ZlckFyZyBmcm9tICcuL19vdmVyQXJnLmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBuYXRpdmVLZXlzO1xuIiwgImltcG9ydCBpc1Byb3RvdHlwZSBmcm9tICcuL19pc1Byb3RvdHlwZS5qcyc7XG5pbXBvcnQgbmF0aXZlS2V5cyBmcm9tICcuL19uYXRpdmVLZXlzLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlS2V5cztcbiIsICJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IGlzTGVuZ3RoIGZyb20gJy4vaXNMZW5ndGguanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNBcnJheUxpa2U7XG4iLCAiaW1wb3J0IGFycmF5TGlrZUtleXMgZnJvbSAnLi9fYXJyYXlMaWtlS2V5cy5qcyc7XG5pbXBvcnQgYmFzZUtleXMgZnJvbSAnLi9fYmFzZUtleXMuanMnO1xuaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vaXNBcnJheUxpa2UuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQga2V5cztcbiIsICJpbXBvcnQgYmFzZUdldEFsbEtleXMgZnJvbSAnLi9fYmFzZUdldEFsbEtleXMuanMnO1xuaW1wb3J0IGdldFN5bWJvbHMgZnJvbSAnLi9fZ2V0U3ltYm9scy5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBbGxLZXlzO1xuIiwgImltcG9ydCBnZXRBbGxLZXlzIGZyb20gJy4vX2dldEFsbEtleXMuanMnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayB0aGF0IGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgb2JqU3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICB2YXIgb3RoU3RhY2tlZCA9IHN0YWNrLmdldChvdGhlcik7XG4gIGlmIChvYmpTdGFja2VkICYmIG90aFN0YWNrZWQpIHtcbiAgICByZXR1cm4gb2JqU3RhY2tlZCA9PSBvdGhlciAmJiBvdGhTdGFja2VkID09IG9iamVjdDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXF1YWxPYmplY3RzO1xuIiwgImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFWaWV3O1xuIiwgImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9taXNlO1xuIiwgImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0O1xuIiwgImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5leHBvcnQgZGVmYXVsdCBXZWFrTWFwO1xuIiwgImltcG9ydCBEYXRhVmlldyBmcm9tICcuL19EYXRhVmlldy5qcyc7XG5pbXBvcnQgTWFwIGZyb20gJy4vX01hcC5qcyc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuL19Qcm9taXNlLmpzJztcbmltcG9ydCBTZXQgZnJvbSAnLi9fU2V0LmpzJztcbmltcG9ydCBXZWFrTWFwIGZyb20gJy4vX1dlYWtNYXAuanMnO1xuaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgdG9Tb3VyY2UgZnJvbSAnLi9fdG9Tb3VyY2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRUYWc7XG4iLCAiaW1wb3J0IFN0YWNrIGZyb20gJy4vX1N0YWNrLmpzJztcbmltcG9ydCBlcXVhbEFycmF5cyBmcm9tICcuL19lcXVhbEFycmF5cy5qcyc7XG5pbXBvcnQgZXF1YWxCeVRhZyBmcm9tICcuL19lcXVhbEJ5VGFnLmpzJztcbmltcG9ydCBlcXVhbE9iamVjdHMgZnJvbSAnLi9fZXF1YWxPYmplY3RzLmpzJztcbmltcG9ydCBnZXRUYWcgZnJvbSAnLi9fZ2V0VGFnLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNCdWZmZXIgZnJvbSAnLi9pc0J1ZmZlci5qcyc7XG5pbXBvcnQgaXNUeXBlZEFycmF5IGZyb20gJy4vaXNUeXBlZEFycmF5LmpzJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc0VxdWFsRGVlcDtcbiIsICJpbXBvcnQgYmFzZUlzRXF1YWxEZWVwIGZyb20gJy4vX2Jhc2VJc0VxdWFsRGVlcC5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc0VxdWFsO1xuIiwgImltcG9ydCBTdGFjayBmcm9tICcuL19TdGFjay5qcyc7XG5pbXBvcnQgYmFzZUlzRXF1YWwgZnJvbSAnLi9fYmFzZUlzRXF1YWwuanMnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzTWF0Y2g7XG4iLCAiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3RyaWN0Q29tcGFyYWJsZTtcbiIsICJpbXBvcnQgaXNTdHJpY3RDb21wYXJhYmxlIGZyb20gJy4vX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGtleSA9IHJlc3VsdFtsZW5ndGhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSBba2V5LCB2YWx1ZSwgaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TWF0Y2hEYXRhO1xuIiwgIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWUgJiZcbiAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG4iLCAiaW1wb3J0IGJhc2VJc01hdGNoIGZyb20gJy4vX2Jhc2VJc01hdGNoLmpzJztcbmltcG9ydCBnZXRNYXRjaERhdGEgZnJvbSAnLi9fZ2V0TWF0Y2hEYXRhLmpzJztcbmltcG9ydCBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSBmcm9tICcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWF0Y2hlcztcbiIsICJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3ltYm9sO1xuIiwgImltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pc1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNLZXk7XG4iLCAiaW1wb3J0IG1lbW9pemUgZnJvbSAnLi9tZW1vaXplLmpzJztcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2FwcGVkO1xuIiwgImltcG9ydCBtZW1vaXplQ2FwcGVkIGZyb20gJy4vX21lbW9pemVDYXBwZWQuanMnO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHN0cmluZy5jaGFyQ29kZUF0KDApID09PSA0NiAvKiAuICovKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN1YlN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ1RvUGF0aDtcbiIsICIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheU1hcDtcbiIsICJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi9fYXJyYXlNYXAuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBpc1N5bWJvbCBmcm9tICcuL2lzU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVRvU3RyaW5nO1xuIiwgImltcG9ydCBiYXNlVG9TdHJpbmcgZnJvbSAnLi9fYmFzZVRvU3RyaW5nLmpzJztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1N0cmluZztcbiIsICJpbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IGlzS2V5IGZyb20gJy4vX2lzS2V5LmpzJztcbmltcG9ydCBzdHJpbmdUb1BhdGggZnJvbSAnLi9fc3RyaW5nVG9QYXRoLmpzJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICcuL3RvU3RyaW5nLmpzJztcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FzdFBhdGg7XG4iLCAiaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXNTeW1ib2wuanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9LZXk7XG4iLCAiaW1wb3J0IGNhc3RQYXRoIGZyb20gJy4vX2Nhc3RQYXRoLmpzJztcbmltcG9ydCB0b0tleSBmcm9tICcuL190b0tleS5qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXQ7XG4iLCAiaW1wb3J0IGJhc2VHZXQgZnJvbSAnLi9fYmFzZUdldC5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0O1xuIiwgIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXNJbihvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYga2V5IGluIE9iamVjdChvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSGFzSW47XG4iLCAiaW1wb3J0IGNhc3RQYXRoIGZyb20gJy4vX2Nhc3RQYXRoLmpzJztcbmltcG9ydCBpc0FyZ3VtZW50cyBmcm9tICcuL2lzQXJndW1lbnRzLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNJbmRleCBmcm9tICcuL19pc0luZGV4LmpzJztcbmltcG9ydCBpc0xlbmd0aCBmcm9tICcuL2lzTGVuZ3RoLmpzJztcbmltcG9ydCB0b0tleSBmcm9tICcuL190b0tleS5qcyc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBleGlzdHMgb24gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFzRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBoYXNGdW5jKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBmYWxzZTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSk7XG4gICAgaWYgKCEocmVzdWx0ID0gb2JqZWN0ICE9IG51bGwgJiYgaGFzRnVuYyhvYmplY3QsIGtleSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gIH1cbiAgaWYgKHJlc3VsdCB8fCArK2luZGV4ICE9IGxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogb2JqZWN0Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNQYXRoO1xuIiwgImltcG9ydCBiYXNlSGFzSW4gZnJvbSAnLi9fYmFzZUhhc0luLmpzJztcbmltcG9ydCBoYXNQYXRoIGZyb20gJy4vX2hhc1BhdGguanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3Qgb3IgaW5oZXJpdGVkIHByb3BlcnR5IG9mIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IF8uY3JlYXRlKHsgJ2EnOiBfLmNyZWF0ZSh7ICdiJzogMiB9KSB9KTtcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EuYicpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2InKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhc0luKG9iamVjdCwgcGF0aCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzUGF0aChvYmplY3QsIHBhdGgsIGJhc2VIYXNJbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc0luO1xuIiwgImltcG9ydCBiYXNlSXNFcXVhbCBmcm9tICcuL19iYXNlSXNFcXVhbC5qcyc7XG5pbXBvcnQgZ2V0IGZyb20gJy4vZ2V0LmpzJztcbmltcG9ydCBoYXNJbiBmcm9tICcuL2hhc0luLmpzJztcbmltcG9ydCBpc0tleSBmcm9tICcuL19pc0tleS5qcyc7XG5pbXBvcnQgaXNTdHJpY3RDb21wYXJhYmxlIGZyb20gJy4vX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyc7XG5pbXBvcnQgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgZnJvbSAnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMnO1xuaW1wb3J0IHRvS2V5IGZyb20gJy4vX3RvS2V5LmpzJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lc24ndCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKHRvS2V5KHBhdGgpLCBzcmNWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBvYmpWYWx1ZSA9IGdldChvYmplY3QsIHBhdGgpO1xuICAgIHJldHVybiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBvYmpWYWx1ZSA9PT0gc3JjVmFsdWUpXG4gICAgICA/IGhhc0luKG9iamVjdCwgcGF0aClcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuIiwgIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlkZW50aXR5O1xuIiwgIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VQcm9wZXJ0eTtcbiIsICJpbXBvcnQgYmFzZUdldCBmcm9tICcuL19iYXNlR2V0LmpzJztcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCAiaW1wb3J0IGJhc2VQcm9wZXJ0eSBmcm9tICcuL19iYXNlUHJvcGVydHkuanMnO1xuaW1wb3J0IGJhc2VQcm9wZXJ0eURlZXAgZnJvbSAnLi9fYmFzZVByb3BlcnR5RGVlcC5qcyc7XG5pbXBvcnQgaXNLZXkgZnJvbSAnLi9faXNLZXkuanMnO1xuaW1wb3J0IHRvS2V5IGZyb20gJy4vX3RvS2V5LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9wZXJ0eTtcbiIsICJpbXBvcnQgYmFzZU1hdGNoZXMgZnJvbSAnLi9fYmFzZU1hdGNoZXMuanMnO1xuaW1wb3J0IGJhc2VNYXRjaGVzUHJvcGVydHkgZnJvbSAnLi9fYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyc7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSAnLi9pZGVudGl0eS5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IHByb3BlcnR5IGZyb20gJy4vcHJvcGVydHkuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLml0ZXJhdGVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbdmFsdWU9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYW4gaXRlcmF0ZWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGl0ZXJhdGVlLlxuICovXG5mdW5jdGlvbiBiYXNlSXRlcmF0ZWUodmFsdWUpIHtcbiAgLy8gRG9uJ3Qgc3RvcmUgdGhlIGB0eXBlb2ZgIHJlc3VsdCBpbiBhIHZhcmlhYmxlIHRvIGF2b2lkIGEgSklUIGJ1ZyBpbiBTYWZhcmkgOS5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICA6IGJhc2VNYXRjaGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXRlcmF0ZWU7XG4iLCAiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zdW1gIGFuZCBgXy5zdW1CeWAgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdW0uXG4gKi9cbmZ1bmN0aW9uIGJhc2VTdW0oYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciByZXN1bHQsXG4gICAgICBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBpdGVyYXRlZShhcnJheVtpbmRleF0pO1xuICAgIGlmIChjdXJyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gY3VycmVudCA6IChyZXN1bHQgKyBjdXJyZW50KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVN1bTtcbiIsICJpbXBvcnQgYmFzZUl0ZXJhdGVlIGZyb20gJy4vX2Jhc2VJdGVyYXRlZS5qcyc7XG5pbXBvcnQgYmFzZVN1bSBmcm9tICcuL19iYXNlU3VtLmpzJztcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnN1bWAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgaXRlcmF0ZWVgIHdoaWNoIGlzXG4gKiBpbnZva2VkIGZvciBlYWNoIGVsZW1lbnQgaW4gYGFycmF5YCB0byBnZW5lcmF0ZSB0aGUgdmFsdWUgdG8gYmUgc3VtbWVkLlxuICogVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6ICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdW0uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ24nOiA0IH0sIHsgJ24nOiAyIH0sIHsgJ24nOiA4IH0sIHsgJ24nOiA2IH1dO1xuICpcbiAqIF8uc3VtQnkob2JqZWN0cywgZnVuY3Rpb24obykgeyByZXR1cm4gby5uOyB9KTtcbiAqIC8vID0+IDIwXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLnN1bUJ5KG9iamVjdHMsICduJyk7XG4gKiAvLyA9PiAyMFxuICovXG5mdW5jdGlvbiBzdW1CeShhcnJheSwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpXG4gICAgPyBiYXNlU3VtKGFycmF5LCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDIpKVxuICAgIDogMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3VtQnk7XG4iLCAiLy8gSW5kaXJlY3Rpb24gcG9pbnQgZm9yIHRoZSBwYWNrYWdlLmpzb24gXCJicm93c2VyXCIgZmllbGQuIFdoZW4gYnVuIGJ1aWxkc1xuLy8gYnJvd3Nlci1zZGsuanMgd2l0aCAtLXRhcmdldCBicm93c2VyLCB0aGlzIGZpbGUgaXMgc3dhcHBlZCBmb3Jcbi8vIGNyeXB0by5icm93c2VyLnRzIFx1MjAxNCBhdm9pZGluZyBhIH41MDBLQiBjcnlwdG8tYnJvd3NlcmlmeSBwb2x5ZmlsbCB0aGF0IEJ1blxuLy8gd291bGQgb3RoZXJ3aXNlIGlubGluZSBmb3IgYGltcG9ydCAuLi4gZnJvbSAnY3J5cHRvJ2AuIE5vZGUvYnVuIGJ1aWxkcyB1c2Vcbi8vIHRoaXMgZmlsZSB1bmNoYW5nZWQuXG4vL1xuLy8gTk9URTogYGV4cG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nYCAocmUtZXhwb3J0IHN5bnRheCkgYnJlYWtzIHVuZGVyXG4vLyBidW4taW50ZXJuYWwncyBieXRlY29kZSBjb21waWxhdGlvbiBcdTIwMTQgdGhlIGdlbmVyYXRlZCBieXRlY29kZSBzaG93cyB0aGVcbi8vIGltcG9ydCBidXQgdGhlIGJpbmRpbmcgZG9lc24ndCBsaW5rIChgUmVmZXJlbmNlRXJyb3I6IHJhbmRvbVVVSUQgaXMgbm90XG4vLyBkZWZpbmVkYCkuIFRoZSBleHBsaWNpdCBpbXBvcnQtdGhlbi1leHBvcnQgYmVsb3cgcHJvZHVjZXMgYSBjb3JyZWN0IGxpdmVcbi8vIGJpbmRpbmcuIFNlZSBpbnRlZ3JhdGlvbi10ZXN0cy1hbnQtbmF0aXZlIGZhaWx1cmUgb24gUFIgIzIwOTU3LyMyMTE3OC5cbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG5leHBvcnQgeyByYW5kb21VVUlEIH1cbiIsICJpbXBvcnQgdHlwZSB7IFNldHRpbmdTb3VyY2UgfSBmcm9tICcuL2NvbnN0YW50cy5qcydcbmltcG9ydCB0eXBlIHsgU2V0dGluZ3NKc29uIH0gZnJvbSAnLi90eXBlcy5qcydcbmltcG9ydCB0eXBlIHsgU2V0dGluZ3NXaXRoRXJyb3JzLCBWYWxpZGF0aW9uRXJyb3IgfSBmcm9tICcuL3ZhbGlkYXRpb24uanMnXG5cbmxldCBzZXNzaW9uU2V0dGluZ3NDYWNoZTogU2V0dGluZ3NXaXRoRXJyb3JzIHwgbnVsbCA9IG51bGxcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlc3Npb25TZXR0aW5nc0NhY2hlKCk6IFNldHRpbmdzV2l0aEVycm9ycyB8IG51bGwge1xuICByZXR1cm4gc2Vzc2lvblNldHRpbmdzQ2FjaGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlc3Npb25TZXR0aW5nc0NhY2hlKHZhbHVlOiBTZXR0aW5nc1dpdGhFcnJvcnMpOiB2b2lkIHtcbiAgc2Vzc2lvblNldHRpbmdzQ2FjaGUgPSB2YWx1ZVxufVxuXG4vKipcbiAqIFBlci1zb3VyY2UgY2FjaGUgZm9yIGdldFNldHRpbmdzRm9yU291cmNlLiBJbnZhbGlkYXRlZCBhbG9uZ3NpZGUgdGhlXG4gKiBtZXJnZWQgc2Vzc2lvblNldHRpbmdzQ2FjaGUgXHUyMDE0IHNhbWUgcmVzZXRTZXR0aW5nc0NhY2hlKCkgdHJpZ2dlcnNcbiAqIChzZXR0aW5ncyB3cml0ZSwgLS1hZGQtZGlyLCBwbHVnaW4gaW5pdCwgaG9va3MgcmVmcmVzaCkuXG4gKi9cbmNvbnN0IHBlclNvdXJjZUNhY2hlID0gbmV3IE1hcDxTZXR0aW5nU291cmNlLCBTZXR0aW5nc0pzb24gfCBudWxsPigpXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYWNoZWRTZXR0aW5nc0ZvclNvdXJjZShcbiAgc291cmNlOiBTZXR0aW5nU291cmNlLFxuKTogU2V0dGluZ3NKc29uIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gIC8vIHVuZGVmaW5lZCA9IGNhY2hlIG1pc3M7IG51bGwgPSBjYWNoZWQgXCJubyBzZXR0aW5ncyBmb3IgdGhpcyBzb3VyY2VcIlxuICByZXR1cm4gcGVyU291cmNlQ2FjaGUuaGFzKHNvdXJjZSkgPyBwZXJTb3VyY2VDYWNoZS5nZXQoc291cmNlKSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FjaGVkU2V0dGluZ3NGb3JTb3VyY2UoXG4gIHNvdXJjZTogU2V0dGluZ1NvdXJjZSxcbiAgdmFsdWU6IFNldHRpbmdzSnNvbiB8IG51bGwsXG4pOiB2b2lkIHtcbiAgcGVyU291cmNlQ2FjaGUuc2V0KHNvdXJjZSwgdmFsdWUpXG59XG5cbi8qKlxuICogUGF0aC1rZXllZCBjYWNoZSBmb3IgcGFyc2VTZXR0aW5nc0ZpbGUuIEJvdGggZ2V0U2V0dGluZ3NGb3JTb3VyY2UgYW5kXG4gKiBsb2FkU2V0dGluZ3NGcm9tRGlzayBjYWxsIHBhcnNlU2V0dGluZ3NGaWxlIG9uIHRoZSBzYW1lIHBhdGhzIGR1cmluZ1xuICogc3RhcnR1cCBcdTIwMTQgdGhpcyBkZWR1cGVzIHRoZSBkaXNrIHJlYWQgKyB6b2QgcGFyc2UuXG4gKi9cbnR5cGUgUGFyc2VkU2V0dGluZ3MgPSB7XG4gIHNldHRpbmdzOiBTZXR0aW5nc0pzb24gfCBudWxsXG4gIGVycm9yczogVmFsaWRhdGlvbkVycm9yW11cbn1cbmNvbnN0IHBhcnNlRmlsZUNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIFBhcnNlZFNldHRpbmdzPigpXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYWNoZWRQYXJzZWRGaWxlKHBhdGg6IHN0cmluZyk6IFBhcnNlZFNldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHBhcnNlRmlsZUNhY2hlLmdldChwYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FjaGVkUGFyc2VkRmlsZShwYXRoOiBzdHJpbmcsIHZhbHVlOiBQYXJzZWRTZXR0aW5ncyk6IHZvaWQge1xuICBwYXJzZUZpbGVDYWNoZS5zZXQocGF0aCwgdmFsdWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFNldHRpbmdzQ2FjaGUoKTogdm9pZCB7XG4gIHNlc3Npb25TZXR0aW5nc0NhY2hlID0gbnVsbFxuICBwZXJTb3VyY2VDYWNoZS5jbGVhcigpXG4gIHBhcnNlRmlsZUNhY2hlLmNsZWFyKClcbn1cblxuLyoqXG4gKiBQbHVnaW4gc2V0dGluZ3MgYmFzZSBsYXllciBmb3IgdGhlIHNldHRpbmdzIGNhc2NhZGUuXG4gKiBwbHVnaW5Mb2FkZXIgd3JpdGVzIGhlcmUgYWZ0ZXIgbG9hZGluZyBwbHVnaW5zO1xuICogbG9hZFNldHRpbmdzRnJvbURpc2sgcmVhZHMgaXQgYXMgdGhlIGxvd2VzdC1wcmlvcml0eSBiYXNlLlxuICovXG5sZXQgcGx1Z2luU2V0dGluZ3NCYXNlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZFxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGx1Z2luU2V0dGluZ3NCYXNlKCk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHBsdWdpblNldHRpbmdzQmFzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UGx1Z2luU2V0dGluZ3NCYXNlKFxuICBzZXR0aW5nczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQsXG4pOiB2b2lkIHtcbiAgcGx1Z2luU2V0dGluZ3NCYXNlID0gc2V0dGluZ3Ncbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUGx1Z2luU2V0dGluZ3NCYXNlKCk6IHZvaWQge1xuICBwbHVnaW5TZXR0aW5nc0Jhc2UgPSB1bmRlZmluZWRcbn1cbiIsICIvKipcbiAqIFRpbnkgbGlzdGVuZXItc2V0IHByaW1pdGl2ZSBmb3IgcHVyZSBldmVudCBzaWduYWxzIChubyBzdG9yZWQgc3RhdGUpLlxuICpcbiAqIENvbGxhcHNlcyB0aGUgfjgtbGluZSBgY29uc3QgbGlzdGVuZXJzID0gbmV3IFNldCgpOyBmdW5jdGlvbiBzdWJzY3JpYmUoKXtcdTIwMjZ9O1xuICogZnVuY3Rpb24gbm90aWZ5KCl7Zm9yKGNvbnN0IGwgb2YgbGlzdGVuZXJzKSBsKCl9YCBib2lsZXJwbGF0ZSB0aGF0IHdhc1xuICogZHVwbGljYXRlZCB+MTVcdTAwRDcgYWNyb3NzIHRoZSBjb2RlYmFzZSBpbnRvIGEgb25lLWxpbmVyLlxuICpcbiAqIERpc3RpbmN0IGZyb20gYSBzdG9yZSAoQXBwU3RhdGUsIGNyZWF0ZVN0b3JlKSBcdTIwMTQgdGhlcmUgaXMgbm8gc25hcHNob3QsIG5vXG4gKiBnZXRTdGF0ZS4gVXNlIHRoaXMgd2hlbiBzdWJzY3JpYmVycyBvbmx5IG5lZWQgdG8ga25vdyBcInNvbWV0aGluZyBoYXBwZW5lZFwiLFxuICogb3B0aW9uYWxseSB3aXRoIGV2ZW50IGFyZ3MsIG5vdCBcIndoYXQgaXMgdGhlIGN1cnJlbnQgdmFsdWVcIi5cbiAqXG4gKiBVc2FnZTpcbiAqICAgY29uc3QgY2hhbmdlZCA9IGNyZWF0ZVNpZ25hbDxbU2V0dGluZ1NvdXJjZV0+KClcbiAqICAgZXhwb3J0IGNvbnN0IHN1YnNjcmliZSA9IGNoYW5nZWQuc3Vic2NyaWJlXG4gKiAgIC8vIGxhdGVyOiBjaGFuZ2VkLmVtaXQoJ3VzZXJTZXR0aW5ncycpXG4gKi9cblxuZXhwb3J0IHR5cGUgU2lnbmFsPEFyZ3MgZXh0ZW5kcyB1bmtub3duW10gPSBbXT4gPSB7XG4gIC8qKiBTdWJzY3JpYmUgYSBsaXN0ZW5lci4gUmV0dXJucyBhbiB1bnN1YnNjcmliZSBmdW5jdGlvbi4gKi9cbiAgc3Vic2NyaWJlOiAobGlzdGVuZXI6ICguLi5hcmdzOiBBcmdzKSA9PiB2b2lkKSA9PiAoKSA9PiB2b2lkXG4gIC8qKiBDYWxsIGFsbCBzdWJzY3JpYmVkIGxpc3RlbmVycyB3aXRoIHRoZSBnaXZlbiBhcmd1bWVudHMuICovXG4gIGVtaXQ6ICguLi5hcmdzOiBBcmdzKSA9PiB2b2lkXG4gIC8qKiBSZW1vdmUgYWxsIGxpc3RlbmVycy4gVXNlZnVsIGluIGRpc3Bvc2UvcmVzZXQgcGF0aHMuICovXG4gIGNsZWFyOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaWduYWw8QXJncyBleHRlbmRzIHVua25vd25bXSA9IFtdPigpOiBTaWduYWw8QXJncz4ge1xuICBjb25zdCBsaXN0ZW5lcnMgPSBuZXcgU2V0PCguLi5hcmdzOiBBcmdzKSA9PiB2b2lkPigpXG4gIHJldHVybiB7XG4gICAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKVxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcilcbiAgICAgIH1cbiAgICB9LFxuICAgIGVtaXQoLi4uYXJncykge1xuICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIGxpc3RlbmVyKC4uLmFyZ3MpXG4gICAgfSxcbiAgICBjbGVhcigpIHtcbiAgICAgIGxpc3RlbmVycy5jbGVhcigpXG4gICAgfSxcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgQmV0YU1lc3NhZ2VTdHJlYW1QYXJhbXMgfSBmcm9tICdAYW50aHJvcGljLWFpL3Nkay9yZXNvdXJjZXMvYmV0YS9tZXNzYWdlcy9tZXNzYWdlcy5tanMnXG5pbXBvcnQgdHlwZSB7IEF0dHJpYnV0ZXMsIE1ldGVyLCBNZXRyaWNPcHRpb25zIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvYXBpJ1xuaW1wb3J0IHR5cGUgeyBsb2dzIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvYXBpLWxvZ3MnXG5pbXBvcnQgdHlwZSB7IExvZ2dlclByb3ZpZGVyIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvc2RrLWxvZ3MnXG5pbXBvcnQgdHlwZSB7IE1ldGVyUHJvdmlkZXIgfSBmcm9tICdAb3BlbnRlbGVtZXRyeS9zZGstbWV0cmljcydcbmltcG9ydCB0eXBlIHsgQmFzaWNUcmFjZXJQcm92aWRlciB9IGZyb20gJ0BvcGVudGVsZW1ldHJ5L3Nkay10cmFjZS1iYXNlJ1xuaW1wb3J0IHsgcmVhbHBhdGhTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgc3VtQnkgZnJvbSAnbG9kYXNoLWVzL3N1bUJ5LmpzJ1xuaW1wb3J0IHsgY3dkIH0gZnJvbSAncHJvY2VzcydcbmltcG9ydCB0eXBlIHsgSG9va0V2ZW50LCBNb2RlbFVzYWdlIH0gZnJvbSAnc3JjL2VudHJ5cG9pbnRzL2FnZW50U2RrVHlwZXMuanMnXG5pbXBvcnQgdHlwZSB7IEFnZW50Q29sb3JOYW1lIH0gZnJvbSAnc3JjL3Rvb2xzL0FnZW50VG9vbC9hZ2VudENvbG9yTWFuYWdlci5qcydcbmltcG9ydCB0eXBlIHsgSG9va0NhbGxiYWNrTWF0Y2hlciB9IGZyb20gJ3NyYy90eXBlcy9ob29rcy5qcydcbi8vIEluZGlyZWN0aW9uIGZvciBicm93c2VyLXNkayBidWlsZCAocGFja2FnZS5qc29uIFwiYnJvd3NlclwiIGZpZWxkIHN3YXBzXG4vLyBjcnlwdG8udHMgZm9yIGNyeXB0by5icm93c2VyLnRzKS4gUHVyZSBsZWFmIHJlLWV4cG9ydCBvZiBub2RlOmNyeXB0byBcdTIwMTRcbi8vIHplcm8gY2lyY3VsYXItZGVwIHJpc2suIFBhdGgtYWxpYXMgaW1wb3J0IGJ5cGFzc2VzIGJvb3RzdHJhcC1pc29sYXRpb25cbi8vIChydWxlIG9ubHkgY2hlY2tzIC4vIGFuZCAvIHByZWZpeGVzKTsgZXhwbGljaXQgZGlzYWJsZSBkb2N1bWVudHMgaW50ZW50LlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9ib290c3RyYXAtaXNvbGF0aW9uXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnc3JjL3V0aWxzL2NyeXB0by5qcydcbmltcG9ydCB0eXBlIHsgTW9kZWxTZXR0aW5nIH0gZnJvbSAnc3JjL3V0aWxzL21vZGVsL21vZGVsLmpzJ1xuaW1wb3J0IHR5cGUgeyBNb2RlbFN0cmluZ3MgfSBmcm9tICdzcmMvdXRpbHMvbW9kZWwvbW9kZWxTdHJpbmdzLmpzJ1xuaW1wb3J0IHR5cGUgeyBTZXR0aW5nU291cmNlIH0gZnJvbSAnc3JjL3V0aWxzL3NldHRpbmdzL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IHJlc2V0U2V0dGluZ3NDYWNoZSB9IGZyb20gJ3NyYy91dGlscy9zZXR0aW5ncy9zZXR0aW5nc0NhY2hlLmpzJ1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5Ib29rTWF0Y2hlciB9IGZyb20gJ3NyYy91dGlscy9zZXR0aW5ncy90eXBlcy5qcydcbmltcG9ydCB7IGNyZWF0ZVNpZ25hbCB9IGZyb20gJ3NyYy91dGlscy9zaWduYWwuanMnXG5cbi8vIFVuaW9uIHR5cGUgZm9yIHJlZ2lzdGVyZWQgaG9va3MgLSBjYW4gYmUgU0RLIGNhbGxiYWNrcyBvciBuYXRpdmUgcGx1Z2luIGhvb2tzXG50eXBlIFJlZ2lzdGVyZWRIb29rTWF0Y2hlciA9IEhvb2tDYWxsYmFja01hdGNoZXIgfCBQbHVnaW5Ib29rTWF0Y2hlclxuXG5pbXBvcnQgdHlwZSB7IFNlc3Npb25JZCB9IGZyb20gJ3NyYy90eXBlcy9pZHMuanMnXG5cbi8vIERPIE5PVCBBREQgTU9SRSBTVEFURSBIRVJFIC0gQkUgSlVESUNJT1VTIFdJVEggR0xPQkFMIFNUQVRFXG5cbi8vIGRldjogdHJ1ZSBvbiBlbnRyaWVzIHRoYXQgY2FtZSB2aWEgLS1kYW5nZXJvdXNseS1sb2FkLWRldmVsb3BtZW50LWNoYW5uZWxzLlxuLy8gVGhlIGFsbG93bGlzdCBnYXRlIGNoZWNrcyB0aGlzIHBlci1lbnRyeSAobm90IHRoZSBzZXNzaW9uLXdpZGVcbi8vIGhhc0RldkNoYW5uZWxzIGJpdCkgc28gcGFzc2luZyBib3RoIGZsYWdzIGRvZXNuJ3QgbGV0IHRoZSBkZXYgZGlhbG9nJ3Ncbi8vIGFjY2VwdGFuY2UgbGVhayBhbGxvd2xpc3QtYnlwYXNzIHRvIHRoZSAtLWNoYW5uZWxzIGVudHJpZXMuXG5leHBvcnQgdHlwZSBDaGFubmVsRW50cnkgPVxuICB8IHsga2luZDogJ3BsdWdpbic7IG5hbWU6IHN0cmluZzsgbWFya2V0cGxhY2U6IHN0cmluZzsgZGV2PzogYm9vbGVhbiB9XG4gIHwgeyBraW5kOiAnc2VydmVyJzsgbmFtZTogc3RyaW5nOyBkZXY/OiBib29sZWFuIH1cblxuZXhwb3J0IHR5cGUgQXR0cmlidXRlZENvdW50ZXIgPSB7XG4gIGFkZCh2YWx1ZTogbnVtYmVyLCBhZGRpdGlvbmFsQXR0cmlidXRlcz86IEF0dHJpYnV0ZXMpOiB2b2lkXG59XG5cbnR5cGUgU3RhdGUgPSB7XG4gIG9yaWdpbmFsQ3dkOiBzdHJpbmdcbiAgLy8gU3RhYmxlIHByb2plY3Qgcm9vdCAtIHNldCBvbmNlIGF0IHN0YXJ0dXAgKGluY2x1ZGluZyBieSAtLXdvcmt0cmVlIGZsYWcpLFxuICAvLyBuZXZlciB1cGRhdGVkIGJ5IG1pZC1zZXNzaW9uIEVudGVyV29ya3RyZWVUb29sLlxuICAvLyBVc2UgZm9yIHByb2plY3QgaWRlbnRpdHkgKGhpc3RvcnksIHNraWxscywgc2Vzc2lvbnMpIG5vdCBmaWxlIG9wZXJhdGlvbnMuXG4gIHByb2plY3RSb290OiBzdHJpbmdcbiAgdG90YWxDb3N0VVNEOiBudW1iZXJcbiAgdG90YWxBUElEdXJhdGlvbjogbnVtYmVyXG4gIHRvdGFsQVBJRHVyYXRpb25XaXRob3V0UmV0cmllczogbnVtYmVyXG4gIHRvdGFsVG9vbER1cmF0aW9uOiBudW1iZXJcbiAgdHVybkhvb2tEdXJhdGlvbk1zOiBudW1iZXJcbiAgdHVyblRvb2xEdXJhdGlvbk1zOiBudW1iZXJcbiAgdHVybkNsYXNzaWZpZXJEdXJhdGlvbk1zOiBudW1iZXJcbiAgdHVyblRvb2xDb3VudDogbnVtYmVyXG4gIHR1cm5Ib29rQ291bnQ6IG51bWJlclxuICB0dXJuQ2xhc3NpZmllckNvdW50OiBudW1iZXJcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgbGFzdEludGVyYWN0aW9uVGltZTogbnVtYmVyXG4gIHRvdGFsTGluZXNBZGRlZDogbnVtYmVyXG4gIHRvdGFsTGluZXNSZW1vdmVkOiBudW1iZXJcbiAgaGFzVW5rbm93bk1vZGVsQ29zdDogYm9vbGVhblxuICBjd2Q6IHN0cmluZ1xuICBtb2RlbFVzYWdlOiB7IFttb2RlbE5hbWU6IHN0cmluZ106IE1vZGVsVXNhZ2UgfVxuICBtYWluTG9vcE1vZGVsT3ZlcnJpZGU6IE1vZGVsU2V0dGluZyB8IHVuZGVmaW5lZFxuICBpbml0aWFsTWFpbkxvb3BNb2RlbDogTW9kZWxTZXR0aW5nXG4gIG1vZGVsU3RyaW5nczogTW9kZWxTdHJpbmdzIHwgbnVsbFxuICBpc0ludGVyYWN0aXZlOiBib29sZWFuXG4gIGthaXJvc0FjdGl2ZTogYm9vbGVhblxuICAvLyBXaGVuIHRydWUsIGVuc3VyZVRvb2xSZXN1bHRQYWlyaW5nIHRocm93cyBvbiBtaXNtYXRjaCBpbnN0ZWFkIG9mXG4gIC8vIHJlcGFpcmluZyB3aXRoIHN5bnRoZXRpYyBwbGFjZWhvbGRlcnMuIEhGSSBvcHRzIGluIGF0IHN0YXJ0dXAgc29cbiAgLy8gdHJhamVjdG9yaWVzIGZhaWwgZmFzdCByYXRoZXIgdGhhbiBjb25kaXRpb25pbmcgdGhlIG1vZGVsIG9uIGZha2VcbiAgLy8gdG9vbF9yZXN1bHRzLlxuICBzdHJpY3RUb29sUmVzdWx0UGFpcmluZzogYm9vbGVhblxuICBzZGtBZ2VudFByb2dyZXNzU3VtbWFyaWVzRW5hYmxlZDogYm9vbGVhblxuICB1c2VyTXNnT3B0SW46IGJvb2xlYW5cbiAgY2xpZW50VHlwZTogc3RyaW5nXG4gIHNlc3Npb25Tb3VyY2U6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBxdWVzdGlvblByZXZpZXdGb3JtYXQ6ICdtYXJrZG93bicgfCAnaHRtbCcgfCB1bmRlZmluZWRcbiAgZmxhZ1NldHRpbmdzUGF0aDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGZsYWdTZXR0aW5nc0lubGluZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsXG4gIGFsbG93ZWRTZXR0aW5nU291cmNlczogU2V0dGluZ1NvdXJjZVtdXG4gIHNlc3Npb25JbmdyZXNzVG9rZW46IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWRcbiAgb2F1dGhUb2tlbkZyb21GZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZFxuICBhcGlLZXlGcm9tRmQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWRcbiAgLy8gVGVsZW1ldHJ5IHN0YXRlXG4gIG1ldGVyOiBNZXRlciB8IG51bGxcbiAgc2Vzc2lvbkNvdW50ZXI6IEF0dHJpYnV0ZWRDb3VudGVyIHwgbnVsbFxuICBsb2NDb3VudGVyOiBBdHRyaWJ1dGVkQ291bnRlciB8IG51bGxcbiAgcHJDb3VudGVyOiBBdHRyaWJ1dGVkQ291bnRlciB8IG51bGxcbiAgY29tbWl0Q291bnRlcjogQXR0cmlidXRlZENvdW50ZXIgfCBudWxsXG4gIGNvc3RDb3VudGVyOiBBdHRyaWJ1dGVkQ291bnRlciB8IG51bGxcbiAgdG9rZW5Db3VudGVyOiBBdHRyaWJ1dGVkQ291bnRlciB8IG51bGxcbiAgY29kZUVkaXRUb29sRGVjaXNpb25Db3VudGVyOiBBdHRyaWJ1dGVkQ291bnRlciB8IG51bGxcbiAgYWN0aXZlVGltZUNvdW50ZXI6IEF0dHJpYnV0ZWRDb3VudGVyIHwgbnVsbFxuICBzdGF0c1N0b3JlOiB7IG9ic2VydmUobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB9IHwgbnVsbFxuICBzZXNzaW9uSWQ6IFNlc3Npb25JZFxuICAvLyBQYXJlbnQgc2Vzc2lvbiBJRCBmb3IgdHJhY2tpbmcgc2Vzc2lvbiBsaW5lYWdlIChlLmcuLCBwbGFuIG1vZGUgLT4gaW1wbGVtZW50YXRpb24pXG4gIHBhcmVudFNlc3Npb25JZDogU2Vzc2lvbklkIHwgdW5kZWZpbmVkXG4gIC8vIExvZ2dlciBzdGF0ZVxuICBsb2dnZXJQcm92aWRlcjogTG9nZ2VyUHJvdmlkZXIgfCBudWxsXG4gIGV2ZW50TG9nZ2VyOiBSZXR1cm5UeXBlPHR5cGVvZiBsb2dzLmdldExvZ2dlcj4gfCBudWxsXG4gIC8vIE1ldGVyIHByb3ZpZGVyIHN0YXRlXG4gIG1ldGVyUHJvdmlkZXI6IE1ldGVyUHJvdmlkZXIgfCBudWxsXG4gIC8vIFRyYWNlciBwcm92aWRlciBzdGF0ZVxuICB0cmFjZXJQcm92aWRlcjogQmFzaWNUcmFjZXJQcm92aWRlciB8IG51bGxcbiAgLy8gQWdlbnQgY29sb3Igc3RhdGVcbiAgYWdlbnRDb2xvck1hcDogTWFwPHN0cmluZywgQWdlbnRDb2xvck5hbWU+XG4gIGFnZW50Q29sb3JJbmRleDogbnVtYmVyXG4gIC8vIExhc3QgQVBJIHJlcXVlc3QgZm9yIGJ1ZyByZXBvcnRzXG4gIGxhc3RBUElSZXF1ZXN0OiBPbWl0PEJldGFNZXNzYWdlU3RyZWFtUGFyYW1zLCAnbWVzc2FnZXMnPiB8IG51bGxcbiAgLy8gTWVzc2FnZXMgZnJvbSB0aGUgbGFzdCBBUEkgcmVxdWVzdCAoYW50LW9ubHk7IHJlZmVyZW5jZSwgbm90IGNsb25lKS5cbiAgLy8gQ2FwdHVyZXMgdGhlIGV4YWN0IHBvc3QtY29tcGFjdGlvbiwgQ0xBVURFLm1kLWluamVjdGVkIG1lc3NhZ2Ugc2V0IHNlbnRcbiAgLy8gdG8gdGhlIEFQSSBzbyAvc2hhcmUncyBzZXJpYWxpemVkX2NvbnZlcnNhdGlvbi5qc29uIHJlZmxlY3RzIHJlYWxpdHkuXG4gIGxhc3RBUElSZXF1ZXN0TWVzc2FnZXM6IEJldGFNZXNzYWdlU3RyZWFtUGFyYW1zWydtZXNzYWdlcyddIHwgbnVsbFxuICAvLyBMYXN0IGF1dG8tbW9kZSBjbGFzc2lmaWVyIHJlcXVlc3QocykgZm9yIC9zaGFyZSB0cmFuc2NyaXB0XG4gIGxhc3RDbGFzc2lmaWVyUmVxdWVzdHM6IHVua25vd25bXSB8IG51bGxcbiAgLy8gQ0xBVURFLm1kIGNvbnRlbnQgY2FjaGVkIGJ5IGNvbnRleHQudHMgZm9yIHRoZSBhdXRvLW1vZGUgY2xhc3NpZmllci5cbiAgLy8gQnJlYWtzIHRoZSB5b2xvQ2xhc3NpZmllciBcdTIxOTIgY2xhdWRlbWQgXHUyMTkyIGZpbGVzeXN0ZW0gXHUyMTkyIHBlcm1pc3Npb25zIGN5Y2xlLlxuICBjYWNoZWRDbGF1ZGVNZENvbnRlbnQ6IHN0cmluZyB8IG51bGxcbiAgLy8gSW4tbWVtb3J5IGVycm9yIGxvZyBmb3IgcmVjZW50IGVycm9yc1xuICBpbk1lbW9yeUVycm9yTG9nOiBBcnJheTx7IGVycm9yOiBzdHJpbmc7IHRpbWVzdGFtcDogc3RyaW5nIH0+XG4gIC8vIFNlc3Npb24tb25seSBwbHVnaW5zIGZyb20gLS1wbHVnaW4tZGlyIGZsYWdcbiAgaW5saW5lUGx1Z2luczogQXJyYXk8c3RyaW5nPlxuICAvLyBFeHBsaWNpdCAtLWNocm9tZSAvIC0tbm8tY2hyb21lIGZsYWcgdmFsdWUgKHVuZGVmaW5lZCA9IG5vdCBzZXQgb24gQ0xJKVxuICBjaHJvbWVGbGFnT3ZlcnJpZGU6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgLy8gVXNlIGNvd29ya19wbHVnaW5zIGRpcmVjdG9yeSBpbnN0ZWFkIG9mIHBsdWdpbnMgKC0tY293b3JrIGZsYWcgb3IgZW52IHZhcilcbiAgdXNlQ293b3JrUGx1Z2luczogYm9vbGVhblxuICAvLyBTZXNzaW9uLW9ubHkgYnlwYXNzIHBlcm1pc3Npb25zIG1vZGUgZmxhZyAobm90IHBlcnNpc3RlZClcbiAgc2Vzc2lvbkJ5cGFzc1Blcm1pc3Npb25zTW9kZTogYm9vbGVhblxuICAvLyBTZXNzaW9uLW9ubHkgZmxhZyBnYXRpbmcgdGhlIC5jbGF1ZGUvc2NoZWR1bGVkX3Rhc2tzLmpzb24gd2F0Y2hlclxuICAvLyAodXNlU2NoZWR1bGVkVGFza3MpLiBTZXQgYnkgY3JvblNjaGVkdWxlci5zdGFydCgpIHdoZW4gdGhlIEpTT04gaGFzXG4gIC8vIGVudHJpZXMsIG9yIGJ5IENyb25DcmVhdGVUb29sLiBOb3QgcGVyc2lzdGVkLlxuICBzY2hlZHVsZWRUYXNrc0VuYWJsZWQ6IGJvb2xlYW5cbiAgLy8gU2Vzc2lvbi1vbmx5IGNyb24gdGFza3MgY3JlYXRlZCB2aWEgQ3JvbkNyZWF0ZSB3aXRoIGR1cmFibGU6IGZhbHNlLlxuICAvLyBGaXJlIG9uIHNjaGVkdWxlIGxpa2UgZmlsZS1iYWNrZWQgdGFza3MgYnV0IGFyZSBuZXZlciB3cml0dGVuIHRvXG4gIC8vIC5jbGF1ZGUvc2NoZWR1bGVkX3Rhc2tzLmpzb24gXHUyMDE0IHRoZXkgZGllIHdpdGggdGhlIHByb2Nlc3MuIFR5cGVkIHZpYVxuICAvLyBTZXNzaW9uQ3JvblRhc2sgYmVsb3cgKG5vdCBpbXBvcnRpbmcgZnJvbSBjcm9uVGFza3MudHMga2VlcHNcbiAgLy8gYm9vdHN0cmFwIGEgbGVhZiBvZiB0aGUgaW1wb3J0IERBRykuXG4gIHNlc3Npb25Dcm9uVGFza3M6IFNlc3Npb25Dcm9uVGFza1tdXG4gIC8vIFRlYW1zIGNyZWF0ZWQgdGhpcyBzZXNzaW9uIHZpYSBUZWFtQ3JlYXRlLiBjbGVhbnVwU2Vzc2lvblRlYW1zKClcbiAgLy8gcmVtb3ZlcyB0aGVzZSBvbiBncmFjZWZ1bFNodXRkb3duIHNvIHN1YmFnZW50LWNyZWF0ZWQgdGVhbXMgZG9uJ3RcbiAgLy8gcGVyc2lzdCBvbiBkaXNrIGZvcmV2ZXIgKGdoLTMyNzMwKS4gVGVhbURlbGV0ZSByZW1vdmVzIGVudHJpZXMgdG9cbiAgLy8gYXZvaWQgZG91YmxlLWNsZWFudXAuIExpdmVzIGhlcmUgKG5vdCB0ZWFtSGVscGVycy50cykgc29cbiAgLy8gcmVzZXRTdGF0ZUZvclRlc3RzKCkgY2xlYXJzIGl0IGJldHdlZW4gdGVzdHMuXG4gIHNlc3Npb25DcmVhdGVkVGVhbXM6IFNldDxzdHJpbmc+XG4gIC8vIFNlc3Npb24tb25seSB0cnVzdCBmbGFnIGZvciBob21lIGRpcmVjdG9yeSAobm90IHBlcnNpc3RlZCB0byBkaXNrKVxuICAvLyBXaGVuIHJ1bm5pbmcgZnJvbSBob21lIGRpciwgdHJ1c3QgZGlhbG9nIGlzIHNob3duIGJ1dCBub3Qgc2F2ZWQgdG8gZGlzay5cbiAgLy8gVGhpcyBmbGFnIGFsbG93cyBmZWF0dXJlcyByZXF1aXJpbmcgdHJ1c3QgdG8gd29yayBkdXJpbmcgdGhlIHNlc3Npb24uXG4gIHNlc3Npb25UcnVzdEFjY2VwdGVkOiBib29sZWFuXG4gIC8vIFNlc3Npb24tb25seSBmbGFnIHRvIGRpc2FibGUgc2Vzc2lvbiBwZXJzaXN0ZW5jZSB0byBkaXNrXG4gIHNlc3Npb25QZXJzaXN0ZW5jZURpc2FibGVkOiBib29sZWFuXG4gIC8vIFRyYWNrIGlmIHVzZXIgaGFzIGV4aXRlZCBwbGFuIG1vZGUgaW4gdGhpcyBzZXNzaW9uIChmb3IgcmUtZW50cnkgZ3VpZGFuY2UpXG4gIGhhc0V4aXRlZFBsYW5Nb2RlOiBib29sZWFuXG4gIC8vIFRyYWNrIGlmIHdlIG5lZWQgdG8gc2hvdyB0aGUgcGxhbiBtb2RlIGV4aXQgYXR0YWNobWVudCAob25lLXRpbWUgbm90aWZpY2F0aW9uKVxuICBuZWVkc1BsYW5Nb2RlRXhpdEF0dGFjaG1lbnQ6IGJvb2xlYW5cbiAgLy8gVHJhY2sgaWYgd2UgbmVlZCB0byBzaG93IHRoZSBhdXRvIG1vZGUgZXhpdCBhdHRhY2htZW50IChvbmUtdGltZSBub3RpZmljYXRpb24pXG4gIG5lZWRzQXV0b01vZGVFeGl0QXR0YWNobWVudDogYm9vbGVhblxuICAvLyBUcmFjayBpZiBMU1AgcGx1Z2luIHJlY29tbWVuZGF0aW9uIGhhcyBiZWVuIHNob3duIHRoaXMgc2Vzc2lvbiAob25seSBzaG93IG9uY2UpXG4gIGxzcFJlY29tbWVuZGF0aW9uU2hvd25UaGlzU2Vzc2lvbjogYm9vbGVhblxuICAvLyBTREsgaW5pdCBldmVudCBzdGF0ZSAtIGpzb25TY2hlbWEgZm9yIHN0cnVjdHVyZWQgb3V0cHV0XG4gIGluaXRKc29uU2NoZW1hOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGxcbiAgLy8gUmVnaXN0ZXJlZCBob29rcyAtIFNESyBjYWxsYmFja3MgYW5kIHBsdWdpbiBuYXRpdmUgaG9va3NcbiAgcmVnaXN0ZXJlZEhvb2tzOiBQYXJ0aWFsPFJlY29yZDxIb29rRXZlbnQsIFJlZ2lzdGVyZWRIb29rTWF0Y2hlcltdPj4gfCBudWxsXG4gIC8vIENhY2hlIGZvciBwbGFuIHNsdWdzOiBzZXNzaW9uSWQgLT4gd29yZFNsdWdcbiAgcGxhblNsdWdDYWNoZTogTWFwPHN0cmluZywgc3RyaW5nPlxuICAvLyBUcmFjayB0ZWxlcG9ydGVkIHNlc3Npb24gZm9yIHJlbGlhYmlsaXR5IGxvZ2dpbmdcbiAgdGVsZXBvcnRlZFNlc3Npb25JbmZvOiB7XG4gICAgaXNUZWxlcG9ydGVkOiBib29sZWFuXG4gICAgaGFzTG9nZ2VkRmlyc3RNZXNzYWdlOiBib29sZWFuXG4gICAgc2Vzc2lvbklkOiBzdHJpbmcgfCBudWxsXG4gIH0gfCBudWxsXG4gIC8vIFRyYWNrIGludm9rZWQgc2tpbGxzIGZvciBwcmVzZXJ2YXRpb24gYWNyb3NzIGNvbXBhY3Rpb25cbiAgLy8gS2V5cyBhcmUgY29tcG9zaXRlOiBgJHthZ2VudElkID8/ICcnfToke3NraWxsTmFtZX1gIHRvIHByZXZlbnQgY3Jvc3MtYWdlbnQgb3ZlcndyaXRlc1xuICBpbnZva2VkU2tpbGxzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIHtcbiAgICAgIHNraWxsTmFtZTogc3RyaW5nXG4gICAgICBza2lsbFBhdGg6IHN0cmluZ1xuICAgICAgY29udGVudDogc3RyaW5nXG4gICAgICBpbnZva2VkQXQ6IG51bWJlclxuICAgICAgYWdlbnRJZDogc3RyaW5nIHwgbnVsbFxuICAgIH1cbiAgPlxuICAvLyBUcmFjayBzbG93IG9wZXJhdGlvbnMgZm9yIGRldiBiYXIgZGlzcGxheSAoYW50LW9ubHkpXG4gIHNsb3dPcGVyYXRpb25zOiBBcnJheTx7XG4gICAgb3BlcmF0aW9uOiBzdHJpbmdcbiAgICBkdXJhdGlvbk1zOiBudW1iZXJcbiAgICB0aW1lc3RhbXA6IG51bWJlclxuICB9PlxuICAvLyBTREstcHJvdmlkZWQgYmV0YXMgKGUuZy4sIGNvbnRleHQtMW0tMjAyNS0wOC0wNylcbiAgc2RrQmV0YXM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkXG4gIC8vIE1haW4gdGhyZWFkIGFnZW50IHR5cGUgKGZyb20gLS1hZ2VudCBmbGFnIG9yIHNldHRpbmdzKVxuICBtYWluVGhyZWFkQWdlbnRUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gUmVtb3RlIG1vZGUgKC0tcmVtb3RlIGZsYWcpXG4gIGlzUmVtb3RlTW9kZTogYm9vbGVhblxuICByZXBsQnJpZGdlQWN0aXZlPzogYm9vbGVhblxuICAvLyBEaXJlY3QgY29ubmVjdCBzZXJ2ZXIgVVJMIChmb3IgZGlzcGxheSBpbiBoZWFkZXIpXG4gIGRpcmVjdENvbm5lY3RTZXJ2ZXJVcmw6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBTeXN0ZW0gcHJvbXB0IHNlY3Rpb24gY2FjaGUgc3RhdGVcbiAgc3lzdGVtUHJvbXB0U2VjdGlvbkNhY2hlOiBNYXA8c3RyaW5nLCBzdHJpbmcgfCBudWxsPlxuICAvLyBMYXN0IGRhdGUgZW1pdHRlZCB0byB0aGUgbW9kZWwgKGZvciBkZXRlY3RpbmcgbWlkbmlnaHQgZGF0ZSBjaGFuZ2VzKVxuICBsYXN0RW1pdHRlZERhdGU6IHN0cmluZyB8IG51bGxcbiAgLy8gQWRkaXRpb25hbCBkaXJlY3RvcmllcyBmcm9tIC0tYWRkLWRpciBmbGFnIChmb3IgQ0xBVURFLm1kIGxvYWRpbmcpXG4gIGFkZGl0aW9uYWxEaXJlY3Rvcmllc0ZvckNsYXVkZU1kOiBzdHJpbmdbXVxuICAvLyBDaGFubmVsIHNlcnZlciBhbGxvd2xpc3QgZnJvbSAtLWNoYW5uZWxzIGZsYWcgKHNlcnZlcnMgd2hvc2UgY2hhbm5lbFxuICAvLyBub3RpZmljYXRpb25zIHNob3VsZCByZWdpc3RlciB0aGlzIHNlc3Npb24pLiBQYXJzZWQgb25jZSBpbiBtYWluLnRzeCBcdTIwMTRcbiAgLy8gdGhlIHRhZyBkZWNpZGVzIHRydXN0IG1vZGVsOiAncGx1Z2luJyBcdTIxOTIgbWFya2V0cGxhY2UgdmVyaWZpY2F0aW9uICtcbiAgLy8gYWxsb3dsaXN0LCAnc2VydmVyJyBcdTIxOTIgYWxsb3dsaXN0IGFsd2F5cyBmYWlscyAoc2NoZW1hIGlzIHBsdWdpbi1vbmx5KS5cbiAgLy8gRWl0aGVyIGtpbmQgbmVlZHMgZW50cnkuZGV2IHRvIGJ5cGFzcyBhbGxvd2xpc3QuXG4gIGFsbG93ZWRDaGFubmVsczogQ2hhbm5lbEVudHJ5W11cbiAgLy8gVHJ1ZSBpZiBhbnkgZW50cnkgaW4gYWxsb3dlZENoYW5uZWxzIGNhbWUgZnJvbVxuICAvLyAtLWRhbmdlcm91c2x5LWxvYWQtZGV2ZWxvcG1lbnQtY2hhbm5lbHMgKHNvIENoYW5uZWxzTm90aWNlIGNhbiBuYW1lIHRoZVxuICAvLyByaWdodCBmbGFnIGluIHBvbGljeS1ibG9ja2VkIG1lc3NhZ2VzKVxuICBoYXNEZXZDaGFubmVsczogYm9vbGVhblxuICAvLyBEaXIgY29udGFpbmluZyB0aGUgc2Vzc2lvbidzIGAuanNvbmxgOyBudWxsID0gZGVyaXZlIGZyb20gb3JpZ2luYWxDd2QuXG4gIHNlc3Npb25Qcm9qZWN0RGlyOiBzdHJpbmcgfCBudWxsXG4gIC8vIENhY2hlZCBwcm9tcHQgY2FjaGUgMWggVFRMIGFsbG93bGlzdCBmcm9tIEdyb3d0aEJvb2sgKHNlc3Npb24tc3RhYmxlKVxuICBwcm9tcHRDYWNoZTFoQWxsb3dsaXN0OiBzdHJpbmdbXSB8IG51bGxcbiAgLy8gQ2FjaGVkIDFoIFRUTCB1c2VyIGVsaWdpYmlsaXR5IChzZXNzaW9uLXN0YWJsZSkuIExhdGNoZWQgb24gZmlyc3RcbiAgLy8gZXZhbHVhdGlvbiBzbyBtaWQtc2Vzc2lvbiBvdmVyYWdlIGZsaXBzIGRvbid0IGNoYW5nZSB0aGUgY2FjaGVfY29udHJvbFxuICAvLyBUVEwsIHdoaWNoIHdvdWxkIGJ1c3QgdGhlIHNlcnZlci1zaWRlIHByb21wdCBjYWNoZS5cbiAgcHJvbXB0Q2FjaGUxaEVsaWdpYmxlOiBib29sZWFuIHwgbnVsbFxuICAvLyBTdGlja3ktb24gbGF0Y2ggZm9yIEFGS19NT0RFX0JFVEFfSEVBREVSLiBPbmNlIGF1dG8gbW9kZSBpcyBmaXJzdFxuICAvLyBhY3RpdmF0ZWQsIGtlZXAgc2VuZGluZyB0aGUgaGVhZGVyIGZvciB0aGUgcmVzdCBvZiB0aGUgc2Vzc2lvbiBzb1xuICAvLyBTaGlmdCtUYWIgdG9nZ2xlcyBkb24ndCBidXN0IHRoZSB+NTAtNzBLIHRva2VuIHByb21wdCBjYWNoZS5cbiAgYWZrTW9kZUhlYWRlckxhdGNoZWQ6IGJvb2xlYW4gfCBudWxsXG4gIC8vIFN0aWNreS1vbiBsYXRjaCBmb3IgRkFTVF9NT0RFX0JFVEFfSEVBREVSLiBPbmNlIGZhc3QgbW9kZSBpcyBmaXJzdFxuICAvLyBlbmFibGVkLCBrZWVwIHNlbmRpbmcgdGhlIGhlYWRlciBzbyBjb29sZG93biBlbnRlci9leGl0IGRvZXNuJ3RcbiAgLy8gZG91YmxlLWJ1c3QgdGhlIHByb21wdCBjYWNoZS4gVGhlIGBzcGVlZGAgYm9keSBwYXJhbSBzdGF5cyBkeW5hbWljLlxuICBmYXN0TW9kZUhlYWRlckxhdGNoZWQ6IGJvb2xlYW4gfCBudWxsXG4gIC8vIFN0aWNreS1vbiBsYXRjaCBmb3IgdGhlIGNhY2hlLWVkaXRpbmcgYmV0YSBoZWFkZXIuIE9uY2UgY2FjaGVkXG4gIC8vIG1pY3JvY29tcGFjdCBpcyBmaXJzdCBlbmFibGVkLCBrZWVwIHNlbmRpbmcgdGhlIGhlYWRlciBzbyBtaWQtc2Vzc2lvblxuICAvLyBHcm93dGhCb29rL3NldHRpbmdzIHRvZ2dsZXMgZG9uJ3QgYnVzdCB0aGUgcHJvbXB0IGNhY2hlLlxuICBjYWNoZUVkaXRpbmdIZWFkZXJMYXRjaGVkOiBib29sZWFuIHwgbnVsbFxuICAvLyBTdGlja3ktb24gbGF0Y2ggZm9yIGNsZWFyaW5nIHRoaW5raW5nIGZyb20gcHJpb3IgdG9vbCBsb29wcy4gVHJpZ2dlcmVkXG4gIC8vIHdoZW4gPjFoIHNpbmNlIGxhc3QgQVBJIGNhbGwgKGNvbmZpcm1lZCBjYWNoZSBtaXNzIFx1MjAxNCBubyBjYWNoZS1oaXRcbiAgLy8gYmVuZWZpdCB0byBrZWVwaW5nIHRoaW5raW5nKS4gT25jZSBsYXRjaGVkLCBzdGF5cyBvbiBzbyB0aGUgbmV3bHktd2FybWVkXG4gIC8vIHRoaW5raW5nLWNsZWFyZWQgY2FjaGUgaXNuJ3QgYnVzdGVkIGJ5IGZsaXBwaW5nIGJhY2sgdG8ga2VlcDonYWxsJy5cbiAgdGhpbmtpbmdDbGVhckxhdGNoZWQ6IGJvb2xlYW4gfCBudWxsXG4gIC8vIEN1cnJlbnQgcHJvbXB0IElEIChVVUlEKSBjb3JyZWxhdGluZyBhIHVzZXIgcHJvbXB0IHdpdGggc3Vic2VxdWVudCBPVGVsIGV2ZW50c1xuICBwcm9tcHRJZDogc3RyaW5nIHwgbnVsbFxuICAvLyBMYXN0IEFQSSByZXF1ZXN0SWQgZm9yIHRoZSBtYWluIGNvbnZlcnNhdGlvbiBjaGFpbiAobm90IHN1YmFnZW50cykuXG4gIC8vIFVwZGF0ZWQgYWZ0ZXIgZWFjaCBzdWNjZXNzZnVsIEFQSSByZXNwb25zZSBmb3IgbWFpbi1zZXNzaW9uIHF1ZXJpZXMuXG4gIC8vIFJlYWQgYXQgc2h1dGRvd24gdG8gc2VuZCBjYWNoZSBldmljdGlvbiBoaW50cyB0byBpbmZlcmVuY2UuXG4gIGxhc3RNYWluUmVxdWVzdElkOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gVGltZXN0YW1wIChEYXRlLm5vdygpKSBvZiB0aGUgbGFzdCBzdWNjZXNzZnVsIEFQSSBjYWxsIGNvbXBsZXRpb24uXG4gIC8vIFVzZWQgdG8gY29tcHV0ZSB0aW1lU2luY2VMYXN0QXBpQ2FsbE1zIGluIHRlbmd1X2FwaV9zdWNjZXNzIGZvclxuICAvLyBjb3JyZWxhdGluZyBjYWNoZSBtaXNzZXMgd2l0aCBpZGxlIHRpbWUgKGNhY2hlIFRUTCBpcyB+NW1pbikuXG4gIGxhc3RBcGlDb21wbGV0aW9uVGltZXN0YW1wOiBudW1iZXIgfCBudWxsXG4gIC8vIFNldCB0byB0cnVlIGFmdGVyIGNvbXBhY3Rpb24gKGF1dG8gb3IgbWFudWFsIC9jb21wYWN0KS4gQ29uc3VtZWQgYnlcbiAgLy8gbG9nQVBJU3VjY2VzcyB0byB0YWcgdGhlIGZpcnN0IHBvc3QtY29tcGFjdGlvbiBBUEkgY2FsbCBzbyB3ZSBjYW5cbiAgLy8gZGlzdGluZ3Vpc2ggY29tcGFjdGlvbi1pbmR1Y2VkIGNhY2hlIG1pc3NlcyBmcm9tIFRUTCBleHBpcnkuXG4gIHBlbmRpbmdQb3N0Q29tcGFjdGlvbjogYm9vbGVhblxufVxuXG4vLyBBTFNPIEhFUkUgLSBUSElOSyBUSFJJQ0UgQkVGT1JFIE1PRElGWUlOR1xuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCk6IFN0YXRlIHtcbiAgLy8gUmVzb2x2ZSBzeW1saW5rcyBpbiBjd2QgdG8gbWF0Y2ggYmVoYXZpb3Igb2Ygc2hlbGwudHMgc2V0Q3dkXG4gIC8vIFRoaXMgZW5zdXJlcyBjb25zaXN0ZW5jeSB3aXRoIGhvdyBwYXRocyBhcmUgc2FuaXRpemVkIGZvciBzZXNzaW9uIHN0b3JhZ2VcbiAgbGV0IHJlc29sdmVkQ3dkID0gJydcbiAgaWYgKFxuICAgIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBwcm9jZXNzLmN3ZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiByZWFscGF0aFN5bmMgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgY29uc3QgcmF3Q3dkID0gY3dkKClcbiAgICB0cnkge1xuICAgICAgcmVzb2x2ZWRDd2QgPSByZWFscGF0aFN5bmMocmF3Q3dkKS5ub3JtYWxpemUoJ05GQycpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBGaWxlIFByb3ZpZGVyIEVQRVJNIG9uIENsb3VkU3RvcmFnZSBtb3VudHMgKGxzdGF0IHBlciBwYXRoIGNvbXBvbmVudCkuXG4gICAgICByZXNvbHZlZEN3ZCA9IHJhd0N3ZC5ub3JtYWxpemUoJ05GQycpXG4gICAgfVxuICB9XG4gIGNvbnN0IHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBvcmlnaW5hbEN3ZDogcmVzb2x2ZWRDd2QsXG4gICAgcHJvamVjdFJvb3Q6IHJlc29sdmVkQ3dkLFxuICAgIHRvdGFsQ29zdFVTRDogMCxcbiAgICB0b3RhbEFQSUR1cmF0aW9uOiAwLFxuICAgIHRvdGFsQVBJRHVyYXRpb25XaXRob3V0UmV0cmllczogMCxcbiAgICB0b3RhbFRvb2xEdXJhdGlvbjogMCxcbiAgICB0dXJuSG9va0R1cmF0aW9uTXM6IDAsXG4gICAgdHVyblRvb2xEdXJhdGlvbk1zOiAwLFxuICAgIHR1cm5DbGFzc2lmaWVyRHVyYXRpb25NczogMCxcbiAgICB0dXJuVG9vbENvdW50OiAwLFxuICAgIHR1cm5Ib29rQ291bnQ6IDAsXG4gICAgdHVybkNsYXNzaWZpZXJDb3VudDogMCxcbiAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgbGFzdEludGVyYWN0aW9uVGltZTogRGF0ZS5ub3coKSxcbiAgICB0b3RhbExpbmVzQWRkZWQ6IDAsXG4gICAgdG90YWxMaW5lc1JlbW92ZWQ6IDAsXG4gICAgaGFzVW5rbm93bk1vZGVsQ29zdDogZmFsc2UsXG4gICAgY3dkOiByZXNvbHZlZEN3ZCxcbiAgICBtb2RlbFVzYWdlOiB7fSxcbiAgICBtYWluTG9vcE1vZGVsT3ZlcnJpZGU6IHVuZGVmaW5lZCxcbiAgICBpbml0aWFsTWFpbkxvb3BNb2RlbDogbnVsbCxcbiAgICBtb2RlbFN0cmluZ3M6IG51bGwsXG4gICAgaXNJbnRlcmFjdGl2ZTogZmFsc2UsXG4gICAga2Fpcm9zQWN0aXZlOiBmYWxzZSxcbiAgICBzdHJpY3RUb29sUmVzdWx0UGFpcmluZzogZmFsc2UsXG4gICAgc2RrQWdlbnRQcm9ncmVzc1N1bW1hcmllc0VuYWJsZWQ6IGZhbHNlLFxuICAgIHVzZXJNc2dPcHRJbjogZmFsc2UsXG4gICAgY2xpZW50VHlwZTogJ2NsaScsXG4gICAgc2Vzc2lvblNvdXJjZTogdW5kZWZpbmVkLFxuICAgIHF1ZXN0aW9uUHJldmlld0Zvcm1hdDogdW5kZWZpbmVkLFxuICAgIHNlc3Npb25JbmdyZXNzVG9rZW46IHVuZGVmaW5lZCxcbiAgICBvYXV0aFRva2VuRnJvbUZkOiB1bmRlZmluZWQsXG4gICAgYXBpS2V5RnJvbUZkOiB1bmRlZmluZWQsXG4gICAgZmxhZ1NldHRpbmdzUGF0aDogdW5kZWZpbmVkLFxuICAgIGZsYWdTZXR0aW5nc0lubGluZTogbnVsbCxcbiAgICBhbGxvd2VkU2V0dGluZ1NvdXJjZXM6IFtcbiAgICAgICd1c2VyU2V0dGluZ3MnLFxuICAgICAgJ3Byb2plY3RTZXR0aW5ncycsXG4gICAgICAnbG9jYWxTZXR0aW5ncycsXG4gICAgICAnZmxhZ1NldHRpbmdzJyxcbiAgICAgICdwb2xpY3lTZXR0aW5ncycsXG4gICAgXSxcbiAgICAvLyBUZWxlbWV0cnkgc3RhdGVcbiAgICBtZXRlcjogbnVsbCxcbiAgICBzZXNzaW9uQ291bnRlcjogbnVsbCxcbiAgICBsb2NDb3VudGVyOiBudWxsLFxuICAgIHByQ291bnRlcjogbnVsbCxcbiAgICBjb21taXRDb3VudGVyOiBudWxsLFxuICAgIGNvc3RDb3VudGVyOiBudWxsLFxuICAgIHRva2VuQ291bnRlcjogbnVsbCxcbiAgICBjb2RlRWRpdFRvb2xEZWNpc2lvbkNvdW50ZXI6IG51bGwsXG4gICAgYWN0aXZlVGltZUNvdW50ZXI6IG51bGwsXG4gICAgc3RhdHNTdG9yZTogbnVsbCxcbiAgICBzZXNzaW9uSWQ6IHJhbmRvbVVVSUQoKSBhcyBTZXNzaW9uSWQsXG4gICAgcGFyZW50U2Vzc2lvbklkOiB1bmRlZmluZWQsXG4gICAgLy8gTG9nZ2VyIHN0YXRlXG4gICAgbG9nZ2VyUHJvdmlkZXI6IG51bGwsXG4gICAgZXZlbnRMb2dnZXI6IG51bGwsXG4gICAgLy8gTWV0ZXIgcHJvdmlkZXIgc3RhdGVcbiAgICBtZXRlclByb3ZpZGVyOiBudWxsLFxuICAgIHRyYWNlclByb3ZpZGVyOiBudWxsLFxuICAgIC8vIEFnZW50IGNvbG9yIHN0YXRlXG4gICAgYWdlbnRDb2xvck1hcDogbmV3IE1hcCgpLFxuICAgIGFnZW50Q29sb3JJbmRleDogMCxcbiAgICAvLyBMYXN0IEFQSSByZXF1ZXN0IGZvciBidWcgcmVwb3J0c1xuICAgIGxhc3RBUElSZXF1ZXN0OiBudWxsLFxuICAgIGxhc3RBUElSZXF1ZXN0TWVzc2FnZXM6IG51bGwsXG4gICAgLy8gTGFzdCBhdXRvLW1vZGUgY2xhc3NpZmllciByZXF1ZXN0KHMpIGZvciAvc2hhcmUgdHJhbnNjcmlwdFxuICAgIGxhc3RDbGFzc2lmaWVyUmVxdWVzdHM6IG51bGwsXG4gICAgY2FjaGVkQ2xhdWRlTWRDb250ZW50OiBudWxsLFxuICAgIC8vIEluLW1lbW9yeSBlcnJvciBsb2cgZm9yIHJlY2VudCBlcnJvcnNcbiAgICBpbk1lbW9yeUVycm9yTG9nOiBbXSxcbiAgICAvLyBTZXNzaW9uLW9ubHkgcGx1Z2lucyBmcm9tIC0tcGx1Z2luLWRpciBmbGFnXG4gICAgaW5saW5lUGx1Z2luczogW10sXG4gICAgLy8gRXhwbGljaXQgLS1jaHJvbWUgLyAtLW5vLWNocm9tZSBmbGFnIHZhbHVlICh1bmRlZmluZWQgPSBub3Qgc2V0IG9uIENMSSlcbiAgICBjaHJvbWVGbGFnT3ZlcnJpZGU6IHVuZGVmaW5lZCxcbiAgICAvLyBVc2UgY293b3JrX3BsdWdpbnMgZGlyZWN0b3J5IGluc3RlYWQgb2YgcGx1Z2luc1xuICAgIHVzZUNvd29ya1BsdWdpbnM6IGZhbHNlLFxuICAgIC8vIFNlc3Npb24tb25seSBieXBhc3MgcGVybWlzc2lvbnMgbW9kZSBmbGFnIChub3QgcGVyc2lzdGVkKVxuICAgIHNlc3Npb25CeXBhc3NQZXJtaXNzaW9uc01vZGU6IGZhbHNlLFxuICAgIC8vIFNjaGVkdWxlZCB0YXNrcyBkaXNhYmxlZCB1bnRpbCBmbGFnIG9yIGRpYWxvZyBlbmFibGVzIHRoZW1cbiAgICBzY2hlZHVsZWRUYXNrc0VuYWJsZWQ6IGZhbHNlLFxuICAgIHNlc3Npb25Dcm9uVGFza3M6IFtdLFxuICAgIHNlc3Npb25DcmVhdGVkVGVhbXM6IG5ldyBTZXQoKSxcbiAgICAvLyBTZXNzaW9uLW9ubHkgdHJ1c3QgZmxhZyAobm90IHBlcnNpc3RlZCB0byBkaXNrKVxuICAgIHNlc3Npb25UcnVzdEFjY2VwdGVkOiBmYWxzZSxcbiAgICAvLyBTZXNzaW9uLW9ubHkgZmxhZyB0byBkaXNhYmxlIHNlc3Npb24gcGVyc2lzdGVuY2UgdG8gZGlza1xuICAgIHNlc3Npb25QZXJzaXN0ZW5jZURpc2FibGVkOiBmYWxzZSxcbiAgICAvLyBUcmFjayBpZiB1c2VyIGhhcyBleGl0ZWQgcGxhbiBtb2RlIGluIHRoaXMgc2Vzc2lvblxuICAgIGhhc0V4aXRlZFBsYW5Nb2RlOiBmYWxzZSxcbiAgICAvLyBUcmFjayBpZiB3ZSBuZWVkIHRvIHNob3cgdGhlIHBsYW4gbW9kZSBleGl0IGF0dGFjaG1lbnRcbiAgICBuZWVkc1BsYW5Nb2RlRXhpdEF0dGFjaG1lbnQ6IGZhbHNlLFxuICAgIC8vIFRyYWNrIGlmIHdlIG5lZWQgdG8gc2hvdyB0aGUgYXV0byBtb2RlIGV4aXQgYXR0YWNobWVudFxuICAgIG5lZWRzQXV0b01vZGVFeGl0QXR0YWNobWVudDogZmFsc2UsXG4gICAgLy8gVHJhY2sgaWYgTFNQIHBsdWdpbiByZWNvbW1lbmRhdGlvbiBoYXMgYmVlbiBzaG93biB0aGlzIHNlc3Npb25cbiAgICBsc3BSZWNvbW1lbmRhdGlvblNob3duVGhpc1Nlc3Npb246IGZhbHNlLFxuICAgIC8vIFNESyBpbml0IGV2ZW50IHN0YXRlXG4gICAgaW5pdEpzb25TY2hlbWE6IG51bGwsXG4gICAgcmVnaXN0ZXJlZEhvb2tzOiBudWxsLFxuICAgIC8vIENhY2hlIGZvciBwbGFuIHNsdWdzXG4gICAgcGxhblNsdWdDYWNoZTogbmV3IE1hcCgpLFxuICAgIC8vIFRyYWNrIHRlbGVwb3J0ZWQgc2Vzc2lvbiBmb3IgcmVsaWFiaWxpdHkgbG9nZ2luZ1xuICAgIHRlbGVwb3J0ZWRTZXNzaW9uSW5mbzogbnVsbCxcbiAgICAvLyBUcmFjayBpbnZva2VkIHNraWxscyBmb3IgcHJlc2VydmF0aW9uIGFjcm9zcyBjb21wYWN0aW9uXG4gICAgaW52b2tlZFNraWxsczogbmV3IE1hcCgpLFxuICAgIC8vIFRyYWNrIHNsb3cgb3BlcmF0aW9ucyBmb3IgZGV2IGJhciBkaXNwbGF5XG4gICAgc2xvd09wZXJhdGlvbnM6IFtdLFxuICAgIC8vIFNESy1wcm92aWRlZCBiZXRhc1xuICAgIHNka0JldGFzOiB1bmRlZmluZWQsXG4gICAgLy8gTWFpbiB0aHJlYWQgYWdlbnQgdHlwZVxuICAgIG1haW5UaHJlYWRBZ2VudFR5cGU6IHVuZGVmaW5lZCxcbiAgICAvLyBSZW1vdGUgbW9kZVxuICAgIGlzUmVtb3RlTW9kZTogZmFsc2UsXG4gICAgLi4uKHByb2Nlc3MuZW52LlVTRVJfVFlQRSA9PT0gJ2FudCdcbiAgICAgID8ge1xuICAgICAgICAgIHJlcGxCcmlkZ2VBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9XG4gICAgICA6IHt9KSxcbiAgICAvLyBEaXJlY3QgY29ubmVjdCBzZXJ2ZXIgVVJMXG4gICAgZGlyZWN0Q29ubmVjdFNlcnZlclVybDogdW5kZWZpbmVkLFxuICAgIC8vIFN5c3RlbSBwcm9tcHQgc2VjdGlvbiBjYWNoZSBzdGF0ZVxuICAgIHN5c3RlbVByb21wdFNlY3Rpb25DYWNoZTogbmV3IE1hcCgpLFxuICAgIC8vIExhc3QgZGF0ZSBlbWl0dGVkIHRvIHRoZSBtb2RlbFxuICAgIGxhc3RFbWl0dGVkRGF0ZTogbnVsbCxcbiAgICAvLyBBZGRpdGlvbmFsIGRpcmVjdG9yaWVzIGZyb20gLS1hZGQtZGlyIGZsYWcgKGZvciBDTEFVREUubWQgbG9hZGluZylcbiAgICBhZGRpdGlvbmFsRGlyZWN0b3JpZXNGb3JDbGF1ZGVNZDogW10sXG4gICAgLy8gQ2hhbm5lbCBzZXJ2ZXIgYWxsb3dsaXN0IGZyb20gLS1jaGFubmVscyBmbGFnXG4gICAgYWxsb3dlZENoYW5uZWxzOiBbXSxcbiAgICBoYXNEZXZDaGFubmVsczogZmFsc2UsXG4gICAgLy8gU2Vzc2lvbiBwcm9qZWN0IGRpciAobnVsbCA9IGRlcml2ZSBmcm9tIG9yaWdpbmFsQ3dkKVxuICAgIHNlc3Npb25Qcm9qZWN0RGlyOiBudWxsLFxuICAgIC8vIFByb21wdCBjYWNoZSAxaCBhbGxvd2xpc3QgKG51bGwgPSBub3QgeWV0IGZldGNoZWQgZnJvbSBHcm93dGhCb29rKVxuICAgIHByb21wdENhY2hlMWhBbGxvd2xpc3Q6IG51bGwsXG4gICAgLy8gUHJvbXB0IGNhY2hlIDFoIGVsaWdpYmlsaXR5IChudWxsID0gbm90IHlldCBldmFsdWF0ZWQpXG4gICAgcHJvbXB0Q2FjaGUxaEVsaWdpYmxlOiBudWxsLFxuICAgIC8vIEJldGEgaGVhZGVyIGxhdGNoZXMgKG51bGwgPSBub3QgeWV0IHRyaWdnZXJlZClcbiAgICBhZmtNb2RlSGVhZGVyTGF0Y2hlZDogbnVsbCxcbiAgICBmYXN0TW9kZUhlYWRlckxhdGNoZWQ6IG51bGwsXG4gICAgY2FjaGVFZGl0aW5nSGVhZGVyTGF0Y2hlZDogbnVsbCxcbiAgICB0aGlua2luZ0NsZWFyTGF0Y2hlZDogbnVsbCxcbiAgICAvLyBDdXJyZW50IHByb21wdCBJRFxuICAgIHByb21wdElkOiBudWxsLFxuICAgIGxhc3RNYWluUmVxdWVzdElkOiB1bmRlZmluZWQsXG4gICAgbGFzdEFwaUNvbXBsZXRpb25UaW1lc3RhbXA6IG51bGwsXG4gICAgcGVuZGluZ1Bvc3RDb21wYWN0aW9uOiBmYWxzZSxcbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG4vLyBBTkQgRVNQRUNJQUxMWSBIRVJFXG5jb25zdCBTVEFURTogU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Vzc2lvbklkKCk6IFNlc3Npb25JZCB7XG4gIHJldHVybiBTVEFURS5zZXNzaW9uSWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2VuZXJhdGVTZXNzaW9uSWQoXG4gIG9wdGlvbnM6IHsgc2V0Q3VycmVudEFzUGFyZW50PzogYm9vbGVhbiB9ID0ge30sXG4pOiBTZXNzaW9uSWQge1xuICBpZiAob3B0aW9ucy5zZXRDdXJyZW50QXNQYXJlbnQpIHtcbiAgICBTVEFURS5wYXJlbnRTZXNzaW9uSWQgPSBTVEFURS5zZXNzaW9uSWRcbiAgfVxuICAvLyBEcm9wIHRoZSBvdXRnb2luZyBzZXNzaW9uJ3MgcGxhbi1zbHVnIGVudHJ5IHNvIHRoZSBNYXAgZG9lc24ndFxuICAvLyBhY2N1bXVsYXRlIHN0YWxlIGtleXMuIENhbGxlcnMgdGhhdCBuZWVkIHRvIGNhcnJ5IHRoZSBzbHVnIGFjcm9zc1xuICAvLyAoUkVQTC50c3ggY2xlYXJDb250ZXh0KSByZWFkIGl0IGJlZm9yZSBjYWxsaW5nIGNsZWFyQ29udmVyc2F0aW9uLlxuICBTVEFURS5wbGFuU2x1Z0NhY2hlLmRlbGV0ZShTVEFURS5zZXNzaW9uSWQpXG4gIC8vIFJlZ2VuZXJhdGVkIHNlc3Npb25zIGxpdmUgaW4gdGhlIGN1cnJlbnQgcHJvamVjdDogcmVzZXQgcHJvamVjdERpciB0b1xuICAvLyBudWxsIHNvIGdldFRyYW5zY3JpcHRQYXRoKCkgZGVyaXZlcyBmcm9tIG9yaWdpbmFsQ3dkLlxuICBTVEFURS5zZXNzaW9uSWQgPSByYW5kb21VVUlEKCkgYXMgU2Vzc2lvbklkXG4gIFNUQVRFLnNlc3Npb25Qcm9qZWN0RGlyID0gbnVsbFxuICByZXR1cm4gU1RBVEUuc2Vzc2lvbklkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRTZXNzaW9uSWQoKTogU2Vzc2lvbklkIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIFNUQVRFLnBhcmVudFNlc3Npb25JZFxufVxuXG4vKipcbiAqIEF0b21pY2FsbHkgc3dpdGNoIHRoZSBhY3RpdmUgc2Vzc2lvbi4gYHNlc3Npb25JZGAgYW5kIGBzZXNzaW9uUHJvamVjdERpcmBcbiAqIGFsd2F5cyBjaGFuZ2UgdG9nZXRoZXIgXHUyMDE0IHRoZXJlIGlzIG5vIHNlcGFyYXRlIHNldHRlciBmb3IgZWl0aGVyLCBzbyB0aGV5XG4gKiBjYW5ub3QgZHJpZnQgb3V0IG9mIHN5bmMgKENDLTM0KS5cbiAqXG4gKiBAcGFyYW0gcHJvamVjdERpciBcdTIwMTQgZGlyZWN0b3J5IGNvbnRhaW5pbmcgYDxzZXNzaW9uSWQ+Lmpzb25sYC4gT21pdCAob3JcbiAqICAgcGFzcyBgbnVsbGApIGZvciBzZXNzaW9ucyBpbiB0aGUgY3VycmVudCBwcm9qZWN0IFx1MjAxNCB0aGUgcGF0aCB3aWxsIGRlcml2ZVxuICogICBmcm9tIG9yaWdpbmFsQ3dkIGF0IHJlYWQgdGltZS4gUGFzcyBgZGlybmFtZSh0cmFuc2NyaXB0UGF0aClgIHdoZW4gdGhlXG4gKiAgIHNlc3Npb24gbGl2ZXMgaW4gYSBkaWZmZXJlbnQgcHJvamVjdCBkaXJlY3RvcnkgKGdpdCB3b3JrdHJlZXMsXG4gKiAgIGNyb3NzLXByb2plY3QgcmVzdW1lKS4gRXZlcnkgY2FsbCByZXNldHMgdGhlIHByb2plY3QgZGlyOyBpdCBuZXZlclxuICogICBjYXJyaWVzIG92ZXIgZnJvbSB0aGUgcHJldmlvdXMgc2Vzc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFNlc3Npb24oXG4gIHNlc3Npb25JZDogU2Vzc2lvbklkLFxuICBwcm9qZWN0RGlyOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbik6IHZvaWQge1xuICAvLyBEcm9wIHRoZSBvdXRnb2luZyBzZXNzaW9uJ3MgcGxhbi1zbHVnIGVudHJ5IHNvIHRoZSBNYXAgc3RheXMgYm91bmRlZFxuICAvLyBhY3Jvc3MgcmVwZWF0ZWQgL3Jlc3VtZS4gT25seSB0aGUgY3VycmVudCBzZXNzaW9uJ3Mgc2x1ZyBpcyBldmVyIHJlYWRcbiAgLy8gKHBsYW5zLnRzIGdldFBsYW5TbHVnIGRlZmF1bHRzIHRvIGdldFNlc3Npb25JZCgpKS5cbiAgU1RBVEUucGxhblNsdWdDYWNoZS5kZWxldGUoU1RBVEUuc2Vzc2lvbklkKVxuICBTVEFURS5zZXNzaW9uSWQgPSBzZXNzaW9uSWRcbiAgU1RBVEUuc2Vzc2lvblByb2plY3REaXIgPSBwcm9qZWN0RGlyXG4gIHNlc3Npb25Td2l0Y2hlZC5lbWl0KHNlc3Npb25JZClcbn1cblxuY29uc3Qgc2Vzc2lvblN3aXRjaGVkID0gY3JlYXRlU2lnbmFsPFtpZDogU2Vzc2lvbklkXT4oKVxuXG4vKipcbiAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdGhhdCBmaXJlcyB3aGVuIHN3aXRjaFNlc3Npb24gY2hhbmdlcyB0aGUgYWN0aXZlXG4gKiBzZXNzaW9uSWQuIGJvb3RzdHJhcCBjYW4ndCBpbXBvcnQgbGlzdGVuZXJzIGRpcmVjdGx5IChEQUcgbGVhZiksIHNvXG4gKiBjYWxsZXJzIHJlZ2lzdGVyIHRoZW1zZWx2ZXMuIGNvbmN1cnJlbnRTZXNzaW9ucy50cyB1c2VzIHRoaXMgdG8ga2VlcCB0aGVcbiAqIFBJRCBmaWxlJ3Mgc2Vzc2lvbklkIGluIHN5bmMgd2l0aCAtLXJlc3VtZS5cbiAqL1xuZXhwb3J0IGNvbnN0IG9uU2Vzc2lvblN3aXRjaCA9IHNlc3Npb25Td2l0Y2hlZC5zdWJzY3JpYmVcblxuLyoqXG4gKiBQcm9qZWN0IGRpcmVjdG9yeSB0aGUgY3VycmVudCBzZXNzaW9uJ3MgdHJhbnNjcmlwdCBsaXZlcyBpbiwgb3IgYG51bGxgIGlmXG4gKiB0aGUgc2Vzc2lvbiB3YXMgY3JlYXRlZCBpbiB0aGUgY3VycmVudCBwcm9qZWN0IChjb21tb24gY2FzZSBcdTIwMTQgZGVyaXZlIGZyb21cbiAqIG9yaWdpbmFsQ3dkKS4gU2VlIGBzd2l0Y2hTZXNzaW9uKClgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Vzc2lvblByb2plY3REaXIoKTogc3RyaW5nIHwgbnVsbCB7XG4gIHJldHVybiBTVEFURS5zZXNzaW9uUHJvamVjdERpclxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZ2luYWxDd2QoKTogc3RyaW5nIHtcbiAgcmV0dXJuIFNUQVRFLm9yaWdpbmFsQ3dkXG59XG5cbi8qKlxuICogR2V0IHRoZSBzdGFibGUgcHJvamVjdCByb290IGRpcmVjdG9yeS5cbiAqIFVubGlrZSBnZXRPcmlnaW5hbEN3ZCgpLCB0aGlzIGlzIG5ldmVyIHVwZGF0ZWQgYnkgbWlkLXNlc3Npb24gRW50ZXJXb3JrdHJlZVRvb2xcbiAqIChzbyBza2lsbHMvaGlzdG9yeSBzdGF5IHN0YWJsZSB3aGVuIGVudGVyaW5nIGEgdGhyb3dhd2F5IHdvcmt0cmVlKS5cbiAqIEl0IElTIHNldCBhdCBzdGFydHVwIGJ5IC0td29ya3RyZWUsIHNpbmNlIHRoYXQgd29ya3RyZWUgaXMgdGhlIHNlc3Npb24ncyBwcm9qZWN0LlxuICogVXNlIGZvciBwcm9qZWN0IGlkZW50aXR5IChoaXN0b3J5LCBza2lsbHMsIHNlc3Npb25zKSBub3QgZmlsZSBvcGVyYXRpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdFJvb3QoKTogc3RyaW5nIHtcbiAgcmV0dXJuIFNUQVRFLnByb2plY3RSb290XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPcmlnaW5hbEN3ZChjd2Q6IHN0cmluZyk6IHZvaWQge1xuICBTVEFURS5vcmlnaW5hbEN3ZCA9IGN3ZC5ub3JtYWxpemUoJ05GQycpXG59XG5cbi8qKlxuICogT25seSBmb3IgLS13b3JrdHJlZSBzdGFydHVwIGZsYWcuIE1pZC1zZXNzaW9uIEVudGVyV29ya3RyZWVUb29sIG11c3QgTk9UXG4gKiBjYWxsIHRoaXMgXHUyMDE0IHNraWxscy9oaXN0b3J5IHNob3VsZCBzdGF5IGFuY2hvcmVkIHRvIHdoZXJlIHRoZSBzZXNzaW9uIHN0YXJ0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9qZWN0Um9vdChjd2Q6IHN0cmluZyk6IHZvaWQge1xuICBTVEFURS5wcm9qZWN0Um9vdCA9IGN3ZC5ub3JtYWxpemUoJ05GQycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDd2RTdGF0ZSgpOiBzdHJpbmcge1xuICByZXR1cm4gU1RBVEUuY3dkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDd2RTdGF0ZShjd2Q6IHN0cmluZyk6IHZvaWQge1xuICBTVEFURS5jd2QgPSBjd2Qubm9ybWFsaXplKCdORkMnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0Q29ubmVjdFNlcnZlclVybCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICByZXR1cm4gU1RBVEUuZGlyZWN0Q29ubmVjdFNlcnZlclVybFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXBsQnJpZGdlQWN0aXZlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gU1RBVEUucmVwbEJyaWRnZUFjdGl2ZSA9PT0gdHJ1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGlyZWN0Q29ubmVjdFNlcnZlclVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICBTVEFURS5kaXJlY3RDb25uZWN0U2VydmVyVXJsID0gdXJsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb1RvdGFsRHVyYXRpb25TdGF0ZShcbiAgZHVyYXRpb246IG51bWJlcixcbiAgZHVyYXRpb25XaXRob3V0UmV0cmllczogbnVtYmVyLFxuKTogdm9pZCB7XG4gIFNUQVRFLnRvdGFsQVBJRHVyYXRpb24gKz0gZHVyYXRpb25cbiAgU1RBVEUudG90YWxBUElEdXJhdGlvbldpdGhvdXRSZXRyaWVzICs9IGR1cmF0aW9uV2l0aG91dFJldHJpZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VG90YWxEdXJhdGlvblN0YXRlQW5kQ29zdF9GT1JfVEVTVFNfT05MWSgpOiB2b2lkIHtcbiAgU1RBVEUudG90YWxBUElEdXJhdGlvbiA9IDBcbiAgU1RBVEUudG90YWxBUElEdXJhdGlvbldpdGhvdXRSZXRyaWVzID0gMFxuICBTVEFURS50b3RhbENvc3RVU0QgPSAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb1RvdGFsQ29zdFN0YXRlKFxuICBjb3N0OiBudW1iZXIsXG4gIG1vZGVsVXNhZ2U6IE1vZGVsVXNhZ2UsXG4gIG1vZGVsOiBzdHJpbmcsXG4pOiB2b2lkIHtcbiAgU1RBVEUubW9kZWxVc2FnZVttb2RlbF0gPSBtb2RlbFVzYWdlXG4gIFNUQVRFLnRvdGFsQ29zdFVTRCArPSBjb3N0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3RhbENvc3RVU0QoKTogbnVtYmVyIHtcbiAgcmV0dXJuIFNUQVRFLnRvdGFsQ29zdFVTRFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG90YWxBUElEdXJhdGlvbigpOiBudW1iZXIge1xuICByZXR1cm4gU1RBVEUudG90YWxBUElEdXJhdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG90YWxEdXJhdGlvbigpOiBudW1iZXIge1xuICByZXR1cm4gRGF0ZS5ub3coKSAtIFNUQVRFLnN0YXJ0VGltZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG90YWxBUElEdXJhdGlvbldpdGhvdXRSZXRyaWVzKCk6IG51bWJlciB7XG4gIHJldHVybiBTVEFURS50b3RhbEFQSUR1cmF0aW9uV2l0aG91dFJldHJpZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdGFsVG9vbER1cmF0aW9uKCk6IG51bWJlciB7XG4gIHJldHVybiBTVEFURS50b3RhbFRvb2xEdXJhdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Ub29sRHVyYXRpb24oZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xuICBTVEFURS50b3RhbFRvb2xEdXJhdGlvbiArPSBkdXJhdGlvblxuICBTVEFURS50dXJuVG9vbER1cmF0aW9uTXMgKz0gZHVyYXRpb25cbiAgU1RBVEUudHVyblRvb2xDb3VudCsrXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUdXJuSG9va0R1cmF0aW9uTXMoKTogbnVtYmVyIHtcbiAgcmV0dXJuIFNUQVRFLnR1cm5Ib29rRHVyYXRpb25Nc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9UdXJuSG9va0R1cmF0aW9uKGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgU1RBVEUudHVybkhvb2tEdXJhdGlvbk1zICs9IGR1cmF0aW9uXG4gIFNUQVRFLnR1cm5Ib29rQ291bnQrK1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRUdXJuSG9va0R1cmF0aW9uKCk6IHZvaWQge1xuICBTVEFURS50dXJuSG9va0R1cmF0aW9uTXMgPSAwXG4gIFNUQVRFLnR1cm5Ib29rQ291bnQgPSAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUdXJuSG9va0NvdW50KCk6IG51bWJlciB7XG4gIHJldHVybiBTVEFURS50dXJuSG9va0NvdW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUdXJuVG9vbER1cmF0aW9uTXMoKTogbnVtYmVyIHtcbiAgcmV0dXJuIFNUQVRFLnR1cm5Ub29sRHVyYXRpb25Nc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRUdXJuVG9vbER1cmF0aW9uKCk6IHZvaWQge1xuICBTVEFURS50dXJuVG9vbER1cmF0aW9uTXMgPSAwXG4gIFNUQVRFLnR1cm5Ub29sQ291bnQgPSAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUdXJuVG9vbENvdW50KCk6IG51bWJlciB7XG4gIHJldHVybiBTVEFURS50dXJuVG9vbENvdW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUdXJuQ2xhc3NpZmllckR1cmF0aW9uTXMoKTogbnVtYmVyIHtcbiAgcmV0dXJuIFNUQVRFLnR1cm5DbGFzc2lmaWVyRHVyYXRpb25Nc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9UdXJuQ2xhc3NpZmllckR1cmF0aW9uKGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgU1RBVEUudHVybkNsYXNzaWZpZXJEdXJhdGlvbk1zICs9IGR1cmF0aW9uXG4gIFNUQVRFLnR1cm5DbGFzc2lmaWVyQ291bnQrK1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRUdXJuQ2xhc3NpZmllckR1cmF0aW9uKCk6IHZvaWQge1xuICBTVEFURS50dXJuQ2xhc3NpZmllckR1cmF0aW9uTXMgPSAwXG4gIFNUQVRFLnR1cm5DbGFzc2lmaWVyQ291bnQgPSAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUdXJuQ2xhc3NpZmllckNvdW50KCk6IG51bWJlciB7XG4gIHJldHVybiBTVEFURS50dXJuQ2xhc3NpZmllckNvdW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0c1N0b3JlKCk6IHtcbiAgb2JzZXJ2ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiB2b2lkXG59IHwgbnVsbCB7XG4gIHJldHVybiBTVEFURS5zdGF0c1N0b3JlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0c1N0b3JlKFxuICBzdG9yZTogeyBvYnNlcnZlKG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcik6IHZvaWQgfSB8IG51bGwsXG4pOiB2b2lkIHtcbiAgU1RBVEUuc3RhdHNTdG9yZSA9IHN0b3JlXG59XG5cbi8qKlxuICogTWFya3MgdGhhdCBhbiBpbnRlcmFjdGlvbiBvY2N1cnJlZC5cbiAqXG4gKiBCeSBkZWZhdWx0IHRoZSBhY3R1YWwgRGF0ZS5ub3coKSBjYWxsIGlzIGRlZmVycmVkIHVudGlsIHRoZSBuZXh0IEluayByZW5kZXJcbiAqIGZyYW1lICh2aWEgZmx1c2hJbnRlcmFjdGlvblRpbWUoKSkgc28gd2UgYXZvaWQgY2FsbGluZyBEYXRlLm5vdygpIG9uIGV2ZXJ5XG4gKiBzaW5nbGUga2V5cHJlc3MuXG4gKlxuICogUGFzcyBgaW1tZWRpYXRlID0gdHJ1ZWAgd2hlbiBjYWxsaW5nIGZyb20gUmVhY3QgdXNlRWZmZWN0IGNhbGxiYWNrcyBvclxuICogb3RoZXIgY29kZSB0aGF0IHJ1bnMgKmFmdGVyKiB0aGUgSW5rIHJlbmRlciBjeWNsZSBoYXMgYWxyZWFkeSBmbHVzaGVkLlxuICogV2l0aG91dCBpdCB0aGUgdGltZXN0YW1wIHN0YXlzIHN0YWxlIHVudGlsIHRoZSBuZXh0IHJlbmRlciwgd2hpY2ggbWF5IG5ldmVyXG4gKiBjb21lIGlmIHRoZSB1c2VyIGlzIGlkbGUgKGUuZy4gcGVybWlzc2lvbiBkaWFsb2cgd2FpdGluZyBmb3IgaW5wdXQpLlxuICovXG5sZXQgaW50ZXJhY3Rpb25UaW1lRGlydHkgPSBmYWxzZVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGFzdEludGVyYWN0aW9uVGltZShpbW1lZGlhdGU/OiBib29sZWFuKTogdm9pZCB7XG4gIGlmIChpbW1lZGlhdGUpIHtcbiAgICBmbHVzaEludGVyYWN0aW9uVGltZV9pbm5lcigpXG4gIH0gZWxzZSB7XG4gICAgaW50ZXJhY3Rpb25UaW1lRGlydHkgPSB0cnVlXG4gIH1cbn1cblxuLyoqXG4gKiBJZiBhbiBpbnRlcmFjdGlvbiB3YXMgcmVjb3JkZWQgc2luY2UgdGhlIGxhc3QgZmx1c2gsIHVwZGF0ZSB0aGUgdGltZXN0YW1wXG4gKiBub3cuIENhbGxlZCBieSBJbmsgYmVmb3JlIGVhY2ggcmVuZGVyIGN5Y2xlIHNvIHdlIGJhdGNoIG1hbnkga2V5cHJlc3NlcyBpbnRvXG4gKiBhIHNpbmdsZSBEYXRlLm5vdygpIGNhbGwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbHVzaEludGVyYWN0aW9uVGltZSgpOiB2b2lkIHtcbiAgaWYgKGludGVyYWN0aW9uVGltZURpcnR5KSB7XG4gICAgZmx1c2hJbnRlcmFjdGlvblRpbWVfaW5uZXIoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGZsdXNoSW50ZXJhY3Rpb25UaW1lX2lubmVyKCk6IHZvaWQge1xuICBTVEFURS5sYXN0SW50ZXJhY3Rpb25UaW1lID0gRGF0ZS5ub3coKVxuICBpbnRlcmFjdGlvblRpbWVEaXJ0eSA9IGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb1RvdGFsTGluZXNDaGFuZ2VkKGFkZGVkOiBudW1iZXIsIHJlbW92ZWQ6IG51bWJlcik6IHZvaWQge1xuICBTVEFURS50b3RhbExpbmVzQWRkZWQgKz0gYWRkZWRcbiAgU1RBVEUudG90YWxMaW5lc1JlbW92ZWQgKz0gcmVtb3ZlZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG90YWxMaW5lc0FkZGVkKCk6IG51bWJlciB7XG4gIHJldHVybiBTVEFURS50b3RhbExpbmVzQWRkZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdGFsTGluZXNSZW1vdmVkKCk6IG51bWJlciB7XG4gIHJldHVybiBTVEFURS50b3RhbExpbmVzUmVtb3ZlZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG90YWxJbnB1dFRva2VucygpOiBudW1iZXIge1xuICByZXR1cm4gc3VtQnkoT2JqZWN0LnZhbHVlcyhTVEFURS5tb2RlbFVzYWdlKSwgJ2lucHV0VG9rZW5zJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdGFsT3V0cHV0VG9rZW5zKCk6IG51bWJlciB7XG4gIHJldHVybiBzdW1CeShPYmplY3QudmFsdWVzKFNUQVRFLm1vZGVsVXNhZ2UpLCAnb3V0cHV0VG9rZW5zJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdGFsQ2FjaGVSZWFkSW5wdXRUb2tlbnMoKTogbnVtYmVyIHtcbiAgcmV0dXJuIHN1bUJ5KE9iamVjdC52YWx1ZXMoU1RBVEUubW9kZWxVc2FnZSksICdjYWNoZVJlYWRJbnB1dFRva2VucycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3RhbENhY2hlQ3JlYXRpb25JbnB1dFRva2VucygpOiBudW1iZXIge1xuICByZXR1cm4gc3VtQnkoT2JqZWN0LnZhbHVlcyhTVEFURS5tb2RlbFVzYWdlKSwgJ2NhY2hlQ3JlYXRpb25JbnB1dFRva2VucycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3RhbFdlYlNlYXJjaFJlcXVlc3RzKCk6IG51bWJlciB7XG4gIHJldHVybiBzdW1CeShPYmplY3QudmFsdWVzKFNUQVRFLm1vZGVsVXNhZ2UpLCAnd2ViU2VhcmNoUmVxdWVzdHMnKVxufVxuXG5sZXQgb3V0cHV0VG9rZW5zQXRUdXJuU3RhcnQgPSAwXG5sZXQgY3VycmVudFR1cm5Ub2tlbkJ1ZGdldDogbnVtYmVyIHwgbnVsbCA9IG51bGxcbmV4cG9ydCBmdW5jdGlvbiBnZXRUdXJuT3V0cHV0VG9rZW5zKCk6IG51bWJlciB7XG4gIHJldHVybiBnZXRUb3RhbE91dHB1dFRva2VucygpIC0gb3V0cHV0VG9rZW5zQXRUdXJuU3RhcnRcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VHVyblRva2VuQnVkZ2V0KCk6IG51bWJlciB8IG51bGwge1xuICByZXR1cm4gY3VycmVudFR1cm5Ub2tlbkJ1ZGdldFxufVxubGV0IGJ1ZGdldENvbnRpbnVhdGlvbkNvdW50ID0gMFxuZXhwb3J0IGZ1bmN0aW9uIHNuYXBzaG90T3V0cHV0VG9rZW5zRm9yVHVybihidWRnZXQ6IG51bWJlciB8IG51bGwpOiB2b2lkIHtcbiAgb3V0cHV0VG9rZW5zQXRUdXJuU3RhcnQgPSBnZXRUb3RhbE91dHB1dFRva2VucygpXG4gIGN1cnJlbnRUdXJuVG9rZW5CdWRnZXQgPSBidWRnZXRcbiAgYnVkZ2V0Q29udGludWF0aW9uQ291bnQgPSAwXG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVkZ2V0Q29udGludWF0aW9uQ291bnQoKTogbnVtYmVyIHtcbiAgcmV0dXJuIGJ1ZGdldENvbnRpbnVhdGlvbkNvdW50XG59XG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50QnVkZ2V0Q29udGludWF0aW9uQ291bnQoKTogdm9pZCB7XG4gIGJ1ZGdldENvbnRpbnVhdGlvbkNvdW50Kytcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEhhc1Vua25vd25Nb2RlbENvc3QoKTogdm9pZCB7XG4gIFNUQVRFLmhhc1Vua25vd25Nb2RlbENvc3QgPSB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNVbmtub3duTW9kZWxDb3N0KCk6IGJvb2xlYW4ge1xuICByZXR1cm4gU1RBVEUuaGFzVW5rbm93bk1vZGVsQ29zdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdE1haW5SZXF1ZXN0SWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIFNUQVRFLmxhc3RNYWluUmVxdWVzdElkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMYXN0TWFpblJlcXVlc3RJZChyZXF1ZXN0SWQ6IHN0cmluZyk6IHZvaWQge1xuICBTVEFURS5sYXN0TWFpblJlcXVlc3RJZCA9IHJlcXVlc3RJZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdEFwaUNvbXBsZXRpb25UaW1lc3RhbXAoKTogbnVtYmVyIHwgbnVsbCB7XG4gIHJldHVybiBTVEFURS5sYXN0QXBpQ29tcGxldGlvblRpbWVzdGFtcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGFzdEFwaUNvbXBsZXRpb25UaW1lc3RhbXAodGltZXN0YW1wOiBudW1iZXIpOiB2b2lkIHtcbiAgU1RBVEUubGFzdEFwaUNvbXBsZXRpb25UaW1lc3RhbXAgPSB0aW1lc3RhbXBcbn1cblxuLyoqIE1hcmsgdGhhdCBhIGNvbXBhY3Rpb24ganVzdCBvY2N1cnJlZC4gVGhlIG5leHQgQVBJIHN1Y2Nlc3MgZXZlbnQgd2lsbFxuICogIGluY2x1ZGUgaXNQb3N0Q29tcGFjdGlvbj10cnVlLCB0aGVuIHRoZSBmbGFnIGF1dG8tcmVzZXRzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtQb3N0Q29tcGFjdGlvbigpOiB2b2lkIHtcbiAgU1RBVEUucGVuZGluZ1Bvc3RDb21wYWN0aW9uID0gdHJ1ZVxufVxuXG4vKiogQ29uc3VtZSB0aGUgcG9zdC1jb21wYWN0aW9uIGZsYWcuIFJldHVybnMgdHJ1ZSBvbmNlIGFmdGVyIGNvbXBhY3Rpb24sXG4gKiAgdGhlbiByZXR1cm5zIGZhbHNlIHVudGlsIHRoZSBuZXh0IGNvbXBhY3Rpb24uICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3VtZVBvc3RDb21wYWN0aW9uKCk6IGJvb2xlYW4ge1xuICBjb25zdCB3YXMgPSBTVEFURS5wZW5kaW5nUG9zdENvbXBhY3Rpb25cbiAgU1RBVEUucGVuZGluZ1Bvc3RDb21wYWN0aW9uID0gZmFsc2VcbiAgcmV0dXJuIHdhc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdEludGVyYWN0aW9uVGltZSgpOiBudW1iZXIge1xuICByZXR1cm4gU1RBVEUubGFzdEludGVyYWN0aW9uVGltZVxufVxuXG4vLyBTY3JvbGwgZHJhaW4gc3VzcGVuc2lvbiBcdTIwMTQgYmFja2dyb3VuZCBpbnRlcnZhbHMgY2hlY2sgdGhpcyBiZWZvcmUgZG9pbmcgd29ya1xuLy8gc28gdGhleSBkb24ndCBjb21wZXRlIHdpdGggc2Nyb2xsIGZyYW1lcyBmb3IgdGhlIGV2ZW50IGxvb3AuIFNldCBieVxuLy8gU2Nyb2xsQm94IHNjcm9sbEJ5L3Njcm9sbFRvLCBjbGVhcmVkIFNDUk9MTF9EUkFJTl9JRExFX01TIGFmdGVyIHRoZSBsYXN0XG4vLyBzY3JvbGwgZXZlbnQuIE1vZHVsZS1zY29wZSAobm90IGluIFNUQVRFKSBcdTIwMTQgZXBoZW1lcmFsIGhvdC1wYXRoIGZsYWcsIG5vXG4vLyB0ZXN0LXJlc2V0IG5lZWRlZCBzaW5jZSB0aGUgZGVib3VuY2UgdGltZXIgc2VsZi1jbGVhcnMuXG5sZXQgc2Nyb2xsRHJhaW5pbmcgPSBmYWxzZVxubGV0IHNjcm9sbERyYWluVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgdW5kZWZpbmVkXG5jb25zdCBTQ1JPTExfRFJBSU5fSURMRV9NUyA9IDE1MFxuXG4vKiogTWFyayB0aGF0IGEgc2Nyb2xsIGV2ZW50IGp1c3QgaGFwcGVuZWQuIEJhY2tncm91bmQgaW50ZXJ2YWxzIGdhdGUgb25cbiAqICBnZXRJc1Njcm9sbERyYWluaW5nKCkgYW5kIHNraXAgdGhlaXIgd29yayB1bnRpbCB0aGUgZGVib3VuY2UgY2xlYXJzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtTY3JvbGxBY3Rpdml0eSgpOiB2b2lkIHtcbiAgc2Nyb2xsRHJhaW5pbmcgPSB0cnVlXG4gIGlmIChzY3JvbGxEcmFpblRpbWVyKSBjbGVhclRpbWVvdXQoc2Nyb2xsRHJhaW5UaW1lcilcbiAgc2Nyb2xsRHJhaW5UaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNjcm9sbERyYWluaW5nID0gZmFsc2VcbiAgICBzY3JvbGxEcmFpblRpbWVyID0gdW5kZWZpbmVkXG4gIH0sIFNDUk9MTF9EUkFJTl9JRExFX01TKVxuICBzY3JvbGxEcmFpblRpbWVyLnVucmVmPy4oKVxufVxuXG4vKiogVHJ1ZSB3aGlsZSBzY3JvbGwgaXMgYWN0aXZlbHkgZHJhaW5pbmcgKHdpdGhpbiAxNTBtcyBvZiBsYXN0IGV2ZW50KS5cbiAqICBJbnRlcnZhbHMgc2hvdWxkIGVhcmx5LXJldHVybiB3aGVuIHRoaXMgaXMgc2V0IFx1MjAxNCB0aGUgd29yayBwaWNrcyB1cCBuZXh0XG4gKiAgdGljayBhZnRlciBzY3JvbGwgc2V0dGxlcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJc1Njcm9sbERyYWluaW5nKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gc2Nyb2xsRHJhaW5pbmdcbn1cblxuLyoqIEF3YWl0IHRoaXMgYmVmb3JlIGV4cGVuc2l2ZSBvbmUtc2hvdCB3b3JrIChuZXR3b3JrLCBzdWJwcm9jZXNzKSB0aGF0IGNvdWxkXG4gKiAgY29pbmNpZGUgd2l0aCBzY3JvbGwuIFJlc29sdmVzIGltbWVkaWF0ZWx5IGlmIG5vdCBzY3JvbGxpbmc7IG90aGVyd2lzZVxuICogIHBvbGxzIGF0IHRoZSBpZGxlIGludGVydmFsIHVudGlsIHRoZSBmbGFnIGNsZWFycy4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWl0Rm9yU2Nyb2xsSWRsZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgd2hpbGUgKHNjcm9sbERyYWluaW5nKSB7XG4gICAgLy8gYm9vdHN0cmFwLWlzb2xhdGlvbiBmb3JiaWRzIGltcG9ydGluZyBzbGVlcCgpIGZyb20gc3JjL3V0aWxzL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCBTQ1JPTExfRFJBSU5fSURMRV9NUykudW5yZWY/LigpKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2RlbFVzYWdlKCk6IHsgW21vZGVsTmFtZTogc3RyaW5nXTogTW9kZWxVc2FnZSB9IHtcbiAgcmV0dXJuIFNUQVRFLm1vZGVsVXNhZ2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzYWdlRm9yTW9kZWwobW9kZWw6IHN0cmluZyk6IE1vZGVsVXNhZ2UgfCB1bmRlZmluZWQge1xuICByZXR1cm4gU1RBVEUubW9kZWxVc2FnZVttb2RlbF1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtb2RlbCBvdmVycmlkZSBzZXQgZnJvbSB0aGUgLS1tb2RlbCBDTEkgZmxhZyBvciBhZnRlciB0aGUgdXNlclxuICogdXBkYXRlcyB0aGVpciBjb25maWd1cmVkIG1vZGVsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFpbkxvb3BNb2RlbE92ZXJyaWRlKCk6IE1vZGVsU2V0dGluZyB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBTVEFURS5tYWluTG9vcE1vZGVsT3ZlcnJpZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxNYWluTG9vcE1vZGVsKCk6IE1vZGVsU2V0dGluZyB7XG4gIHJldHVybiBTVEFURS5pbml0aWFsTWFpbkxvb3BNb2RlbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWFpbkxvb3BNb2RlbE92ZXJyaWRlKFxuICBtb2RlbDogTW9kZWxTZXR0aW5nIHwgdW5kZWZpbmVkLFxuKTogdm9pZCB7XG4gIFNUQVRFLm1haW5Mb29wTW9kZWxPdmVycmlkZSA9IG1vZGVsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbml0aWFsTWFpbkxvb3BNb2RlbChtb2RlbDogTW9kZWxTZXR0aW5nKTogdm9pZCB7XG4gIFNUQVRFLmluaXRpYWxNYWluTG9vcE1vZGVsID0gbW9kZWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNka0JldGFzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIFNUQVRFLnNka0JldGFzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZGtCZXRhcyhiZXRhczogc3RyaW5nW10gfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgU1RBVEUuc2RrQmV0YXMgPSBiZXRhc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRDb3N0U3RhdGUoKTogdm9pZCB7XG4gIFNUQVRFLnRvdGFsQ29zdFVTRCA9IDBcbiAgU1RBVEUudG90YWxBUElEdXJhdGlvbiA9IDBcbiAgU1RBVEUudG90YWxBUElEdXJhdGlvbldpdGhvdXRSZXRyaWVzID0gMFxuICBTVEFURS50b3RhbFRvb2xEdXJhdGlvbiA9IDBcbiAgU1RBVEUuc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICBTVEFURS50b3RhbExpbmVzQWRkZWQgPSAwXG4gIFNUQVRFLnRvdGFsTGluZXNSZW1vdmVkID0gMFxuICBTVEFURS5oYXNVbmtub3duTW9kZWxDb3N0ID0gZmFsc2VcbiAgU1RBVEUubW9kZWxVc2FnZSA9IHt9XG4gIFNUQVRFLnByb21wdElkID0gbnVsbFxufVxuXG4vKipcbiAqIFNldHMgY29zdCBzdGF0ZSB2YWx1ZXMgZm9yIHNlc3Npb24gcmVzdG9yZS5cbiAqIENhbGxlZCBieSByZXN0b3JlQ29zdFN0YXRlRm9yU2Vzc2lvbiBpbiBjb3N0LXRyYWNrZXIudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb3N0U3RhdGVGb3JSZXN0b3JlKHtcbiAgdG90YWxDb3N0VVNELFxuICB0b3RhbEFQSUR1cmF0aW9uLFxuICB0b3RhbEFQSUR1cmF0aW9uV2l0aG91dFJldHJpZXMsXG4gIHRvdGFsVG9vbER1cmF0aW9uLFxuICB0b3RhbExpbmVzQWRkZWQsXG4gIHRvdGFsTGluZXNSZW1vdmVkLFxuICBsYXN0RHVyYXRpb24sXG4gIG1vZGVsVXNhZ2UsXG59OiB7XG4gIHRvdGFsQ29zdFVTRDogbnVtYmVyXG4gIHRvdGFsQVBJRHVyYXRpb246IG51bWJlclxuICB0b3RhbEFQSUR1cmF0aW9uV2l0aG91dFJldHJpZXM6IG51bWJlclxuICB0b3RhbFRvb2xEdXJhdGlvbjogbnVtYmVyXG4gIHRvdGFsTGluZXNBZGRlZDogbnVtYmVyXG4gIHRvdGFsTGluZXNSZW1vdmVkOiBudW1iZXJcbiAgbGFzdER1cmF0aW9uOiBudW1iZXIgfCB1bmRlZmluZWRcbiAgbW9kZWxVc2FnZTogeyBbbW9kZWxOYW1lOiBzdHJpbmddOiBNb2RlbFVzYWdlIH0gfCB1bmRlZmluZWRcbn0pOiB2b2lkIHtcbiAgU1RBVEUudG90YWxDb3N0VVNEID0gdG90YWxDb3N0VVNEXG4gIFNUQVRFLnRvdGFsQVBJRHVyYXRpb24gPSB0b3RhbEFQSUR1cmF0aW9uXG4gIFNUQVRFLnRvdGFsQVBJRHVyYXRpb25XaXRob3V0UmV0cmllcyA9IHRvdGFsQVBJRHVyYXRpb25XaXRob3V0UmV0cmllc1xuICBTVEFURS50b3RhbFRvb2xEdXJhdGlvbiA9IHRvdGFsVG9vbER1cmF0aW9uXG4gIFNUQVRFLnRvdGFsTGluZXNBZGRlZCA9IHRvdGFsTGluZXNBZGRlZFxuICBTVEFURS50b3RhbExpbmVzUmVtb3ZlZCA9IHRvdGFsTGluZXNSZW1vdmVkXG5cbiAgLy8gUmVzdG9yZSBwZXItbW9kZWwgdXNhZ2UgYnJlYWtkb3duXG4gIGlmIChtb2RlbFVzYWdlKSB7XG4gICAgU1RBVEUubW9kZWxVc2FnZSA9IG1vZGVsVXNhZ2VcbiAgfVxuXG4gIC8vIEFkanVzdCBzdGFydFRpbWUgdG8gbWFrZSB3YWxsIGR1cmF0aW9uIGFjY3VtdWxhdGVcbiAgaWYgKGxhc3REdXJhdGlvbikge1xuICAgIFNUQVRFLnN0YXJ0VGltZSA9IERhdGUubm93KCkgLSBsYXN0RHVyYXRpb25cbiAgfVxufVxuXG4vLyBPbmx5IHVzZWQgaW4gdGVzdHNcbmV4cG9ydCBmdW5jdGlvbiByZXNldFN0YXRlRm9yVGVzdHMoKTogdm9pZCB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdyZXNldFN0YXRlRm9yVGVzdHMgY2FuIG9ubHkgYmUgY2FsbGVkIGluIHRlc3RzJylcbiAgfVxuICBPYmplY3QuZW50cmllcyhnZXRJbml0aWFsU3RhdGUoKSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgU1RBVEVba2V5IGFzIGtleW9mIFN0YXRlXSA9IHZhbHVlIGFzIG5ldmVyXG4gIH0pXG4gIG91dHB1dFRva2Vuc0F0VHVyblN0YXJ0ID0gMFxuICBjdXJyZW50VHVyblRva2VuQnVkZ2V0ID0gbnVsbFxuICBidWRnZXRDb250aW51YXRpb25Db3VudCA9IDBcbiAgc2Vzc2lvblN3aXRjaGVkLmNsZWFyKClcbn1cblxuLy8gWW91IHNob3VsZG4ndCB1c2UgdGhpcyBkaXJlY3RseS4gU2VlIHNyYy91dGlscy9tb2RlbC9tb2RlbFN0cmluZ3MudHM6OmdldE1vZGVsU3RyaW5ncygpXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kZWxTdHJpbmdzKCk6IE1vZGVsU3RyaW5ncyB8IG51bGwge1xuICByZXR1cm4gU1RBVEUubW9kZWxTdHJpbmdzXG59XG5cbi8vIFlvdSBzaG91bGRuJ3QgdXNlIHRoaXMgZGlyZWN0bHkuIFNlZSBzcmMvdXRpbHMvbW9kZWwvbW9kZWxTdHJpbmdzLnRzXG5leHBvcnQgZnVuY3Rpb24gc2V0TW9kZWxTdHJpbmdzKG1vZGVsU3RyaW5nczogTW9kZWxTdHJpbmdzKTogdm9pZCB7XG4gIFNUQVRFLm1vZGVsU3RyaW5ncyA9IG1vZGVsU3RyaW5nc1xufVxuXG4vLyBUZXN0IHV0aWxpdHkgZnVuY3Rpb24gdG8gcmVzZXQgbW9kZWwgc3RyaW5ncyBmb3IgcmUtaW5pdGlhbGl6YXRpb24uXG4vLyBTZXBhcmF0ZSBmcm9tIHNldE1vZGVsU3RyaW5ncyBiZWNhdXNlIHdlIG9ubHkgd2FudCB0byBhY2NlcHQgJ251bGwnIGluIHRlc3RzLlxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TW9kZWxTdHJpbmdzRm9yVGVzdGluZ09ubHkoKSB7XG4gIFNUQVRFLm1vZGVsU3RyaW5ncyA9IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1ldGVyKFxuICBtZXRlcjogTWV0ZXIsXG4gIGNyZWF0ZUNvdW50ZXI6IChuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IE1ldHJpY09wdGlvbnMpID0+IEF0dHJpYnV0ZWRDb3VudGVyLFxuKTogdm9pZCB7XG4gIFNUQVRFLm1ldGVyID0gbWV0ZXJcblxuICAvLyBJbml0aWFsaXplIGFsbCBjb3VudGVycyB1c2luZyB0aGUgcHJvdmlkZWQgZmFjdG9yeVxuICBTVEFURS5zZXNzaW9uQ291bnRlciA9IGNyZWF0ZUNvdW50ZXIoJ2NsYXVkZV9jb2RlLnNlc3Npb24uY291bnQnLCB7XG4gICAgZGVzY3JpcHRpb246ICdDb3VudCBvZiBDTEkgc2Vzc2lvbnMgc3RhcnRlZCcsXG4gIH0pXG4gIFNUQVRFLmxvY0NvdW50ZXIgPSBjcmVhdGVDb3VudGVyKCdjbGF1ZGVfY29kZS5saW5lc19vZl9jb2RlLmNvdW50Jywge1xuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJDb3VudCBvZiBsaW5lcyBvZiBjb2RlIG1vZGlmaWVkLCB3aXRoIHRoZSAndHlwZScgYXR0cmlidXRlIGluZGljYXRpbmcgd2hldGhlciBsaW5lcyB3ZXJlIGFkZGVkIG9yIHJlbW92ZWRcIixcbiAgfSlcbiAgU1RBVEUucHJDb3VudGVyID0gY3JlYXRlQ291bnRlcignY2xhdWRlX2NvZGUucHVsbF9yZXF1ZXN0LmNvdW50Jywge1xuICAgIGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHB1bGwgcmVxdWVzdHMgY3JlYXRlZCcsXG4gIH0pXG4gIFNUQVRFLmNvbW1pdENvdW50ZXIgPSBjcmVhdGVDb3VudGVyKCdjbGF1ZGVfY29kZS5jb21taXQuY291bnQnLCB7XG4gICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2YgZ2l0IGNvbW1pdHMgY3JlYXRlZCcsXG4gIH0pXG4gIFNUQVRFLmNvc3RDb3VudGVyID0gY3JlYXRlQ291bnRlcignY2xhdWRlX2NvZGUuY29zdC51c2FnZScsIHtcbiAgICBkZXNjcmlwdGlvbjogJ0Nvc3Qgb2YgdGhlIENsYXVkZSBDb2RlIHNlc3Npb24nLFxuICAgIHVuaXQ6ICdVU0QnLFxuICB9KVxuICBTVEFURS50b2tlbkNvdW50ZXIgPSBjcmVhdGVDb3VudGVyKCdjbGF1ZGVfY29kZS50b2tlbi51c2FnZScsIHtcbiAgICBkZXNjcmlwdGlvbjogJ051bWJlciBvZiB0b2tlbnMgdXNlZCcsXG4gICAgdW5pdDogJ3Rva2VucycsXG4gIH0pXG4gIFNUQVRFLmNvZGVFZGl0VG9vbERlY2lzaW9uQ291bnRlciA9IGNyZWF0ZUNvdW50ZXIoXG4gICAgJ2NsYXVkZV9jb2RlLmNvZGVfZWRpdF90b29sLmRlY2lzaW9uJyxcbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NvdW50IG9mIGNvZGUgZWRpdGluZyB0b29sIHBlcm1pc3Npb24gZGVjaXNpb25zIChhY2NlcHQvcmVqZWN0KSBmb3IgRWRpdCwgV3JpdGUsIGFuZCBOb3RlYm9va0VkaXQgdG9vbHMnLFxuICAgIH0sXG4gIClcbiAgU1RBVEUuYWN0aXZlVGltZUNvdW50ZXIgPSBjcmVhdGVDb3VudGVyKCdjbGF1ZGVfY29kZS5hY3RpdmVfdGltZS50b3RhbCcsIHtcbiAgICBkZXNjcmlwdGlvbjogJ1RvdGFsIGFjdGl2ZSB0aW1lIGluIHNlY29uZHMnLFxuICAgIHVuaXQ6ICdzJyxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1ldGVyKCk6IE1ldGVyIHwgbnVsbCB7XG4gIHJldHVybiBTVEFURS5tZXRlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Vzc2lvbkNvdW50ZXIoKTogQXR0cmlidXRlZENvdW50ZXIgfCBudWxsIHtcbiAgcmV0dXJuIFNUQVRFLnNlc3Npb25Db3VudGVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NDb3VudGVyKCk6IEF0dHJpYnV0ZWRDb3VudGVyIHwgbnVsbCB7XG4gIHJldHVybiBTVEFURS5sb2NDb3VudGVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQckNvdW50ZXIoKTogQXR0cmlidXRlZENvdW50ZXIgfCBudWxsIHtcbiAgcmV0dXJuIFNUQVRFLnByQ291bnRlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tbWl0Q291bnRlcigpOiBBdHRyaWJ1dGVkQ291bnRlciB8IG51bGwge1xuICByZXR1cm4gU1RBVEUuY29tbWl0Q291bnRlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29zdENvdW50ZXIoKTogQXR0cmlidXRlZENvdW50ZXIgfCBudWxsIHtcbiAgcmV0dXJuIFNUQVRFLmNvc3RDb3VudGVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbkNvdW50ZXIoKTogQXR0cmlidXRlZENvdW50ZXIgfCBudWxsIHtcbiAgcmV0dXJuIFNUQVRFLnRva2VuQ291bnRlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29kZUVkaXRUb29sRGVjaXNpb25Db3VudGVyKCk6IEF0dHJpYnV0ZWRDb3VudGVyIHwgbnVsbCB7XG4gIHJldHVybiBTVEFURS5jb2RlRWRpdFRvb2xEZWNpc2lvbkNvdW50ZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZVRpbWVDb3VudGVyKCk6IEF0dHJpYnV0ZWRDb3VudGVyIHwgbnVsbCB7XG4gIHJldHVybiBTVEFURS5hY3RpdmVUaW1lQ291bnRlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9nZ2VyUHJvdmlkZXIoKTogTG9nZ2VyUHJvdmlkZXIgfCBudWxsIHtcbiAgcmV0dXJuIFNUQVRFLmxvZ2dlclByb3ZpZGVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dnZXJQcm92aWRlcihwcm92aWRlcjogTG9nZ2VyUHJvdmlkZXIgfCBudWxsKTogdm9pZCB7XG4gIFNUQVRFLmxvZ2dlclByb3ZpZGVyID0gcHJvdmlkZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50TG9nZ2VyKCk6IFJldHVyblR5cGU8dHlwZW9mIGxvZ3MuZ2V0TG9nZ2VyPiB8IG51bGwge1xuICByZXR1cm4gU1RBVEUuZXZlbnRMb2dnZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEV2ZW50TG9nZ2VyKFxuICBsb2dnZXI6IFJldHVyblR5cGU8dHlwZW9mIGxvZ3MuZ2V0TG9nZ2VyPiB8IG51bGwsXG4pOiB2b2lkIHtcbiAgU1RBVEUuZXZlbnRMb2dnZXIgPSBsb2dnZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1ldGVyUHJvdmlkZXIoKTogTWV0ZXJQcm92aWRlciB8IG51bGwge1xuICByZXR1cm4gU1RBVEUubWV0ZXJQcm92aWRlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWV0ZXJQcm92aWRlcihwcm92aWRlcjogTWV0ZXJQcm92aWRlciB8IG51bGwpOiB2b2lkIHtcbiAgU1RBVEUubWV0ZXJQcm92aWRlciA9IHByb3ZpZGVyXG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhY2VyUHJvdmlkZXIoKTogQmFzaWNUcmFjZXJQcm92aWRlciB8IG51bGwge1xuICByZXR1cm4gU1RBVEUudHJhY2VyUHJvdmlkZXJcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRUcmFjZXJQcm92aWRlcihwcm92aWRlcjogQmFzaWNUcmFjZXJQcm92aWRlciB8IG51bGwpOiB2b2lkIHtcbiAgU1RBVEUudHJhY2VyUHJvdmlkZXIgPSBwcm92aWRlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXNOb25JbnRlcmFjdGl2ZVNlc3Npb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiAhU1RBVEUuaXNJbnRlcmFjdGl2ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXNJbnRlcmFjdGl2ZSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIFNUQVRFLmlzSW50ZXJhY3RpdmVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldElzSW50ZXJhY3RpdmUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgU1RBVEUuaXNJbnRlcmFjdGl2ZSA9IHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRUeXBlKCk6IHN0cmluZyB7XG4gIHJldHVybiBTVEFURS5jbGllbnRUeXBlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDbGllbnRUeXBlKHR5cGU6IHN0cmluZyk6IHZvaWQge1xuICBTVEFURS5jbGllbnRUeXBlID0gdHlwZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2RrQWdlbnRQcm9ncmVzc1N1bW1hcmllc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBTVEFURS5zZGtBZ2VudFByb2dyZXNzU3VtbWFyaWVzRW5hYmxlZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2RrQWdlbnRQcm9ncmVzc1N1bW1hcmllc0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgU1RBVEUuc2RrQWdlbnRQcm9ncmVzc1N1bW1hcmllc0VuYWJsZWQgPSB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2Fpcm9zQWN0aXZlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gU1RBVEUua2Fpcm9zQWN0aXZlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRLYWlyb3NBY3RpdmUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgU1RBVEUua2Fpcm9zQWN0aXZlID0gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmljdFRvb2xSZXN1bHRQYWlyaW5nKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gU1RBVEUuc3RyaWN0VG9vbFJlc3VsdFBhaXJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0cmljdFRvb2xSZXN1bHRQYWlyaW5nKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gIFNUQVRFLnN0cmljdFRvb2xSZXN1bHRQYWlyaW5nID0gdmFsdWVcbn1cblxuLy8gRmllbGQgbmFtZSAndXNlck1zZ09wdEluJyBhdm9pZHMgZXhjbHVkZWQtc3RyaW5nIHN1YnN0cmluZ3MgKCdCcmllZlRvb2wnLFxuLy8gJ1NlbmRVc2VyTWVzc2FnZScgXHUyMDE0IGNhc2UtaW5zZW5zaXRpdmUpLiBBbGwgY2FsbGVycyBhcmUgaW5zaWRlIGZlYXR1cmUoKVxuLy8gZ3VhcmRzIHNvIHRoZXNlIGFjY2Vzc29ycyBkb24ndCBuZWVkIHRoZWlyIG93biAobWF0Y2hlcyBnZXRLYWlyb3NBY3RpdmUpLlxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJNc2dPcHRJbigpOiBib29sZWFuIHtcbiAgcmV0dXJuIFNUQVRFLnVzZXJNc2dPcHRJblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlck1zZ09wdEluKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gIFNUQVRFLnVzZXJNc2dPcHRJbiA9IHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXNzaW9uU291cmNlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBTVEFURS5zZXNzaW9uU291cmNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZXNzaW9uU291cmNlKHNvdXJjZTogc3RyaW5nKTogdm9pZCB7XG4gIFNUQVRFLnNlc3Npb25Tb3VyY2UgPSBzb3VyY2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXN0aW9uUHJldmlld0Zvcm1hdCgpOiAnbWFya2Rvd24nIHwgJ2h0bWwnIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIFNUQVRFLnF1ZXN0aW9uUHJldmlld0Zvcm1hdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UXVlc3Rpb25QcmV2aWV3Rm9ybWF0KGZvcm1hdDogJ21hcmtkb3duJyB8ICdodG1sJyk6IHZvaWQge1xuICBTVEFURS5xdWVzdGlvblByZXZpZXdGb3JtYXQgPSBmb3JtYXRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFnZW50Q29sb3JNYXAoKTogTWFwPHN0cmluZywgQWdlbnRDb2xvck5hbWU+IHtcbiAgcmV0dXJuIFNUQVRFLmFnZW50Q29sb3JNYXBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZsYWdTZXR0aW5nc1BhdGgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIFNUQVRFLmZsYWdTZXR0aW5nc1BhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZsYWdTZXR0aW5nc1BhdGgocGF0aDogc3RyaW5nIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gIFNUQVRFLmZsYWdTZXR0aW5nc1BhdGggPSBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGbGFnU2V0dGluZ3NJbmxpbmUoKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsIHtcbiAgcmV0dXJuIFNUQVRFLmZsYWdTZXR0aW5nc0lubGluZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RmxhZ1NldHRpbmdzSW5saW5lKFxuICBzZXR0aW5nczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsLFxuKTogdm9pZCB7XG4gIFNUQVRFLmZsYWdTZXR0aW5nc0lubGluZSA9IHNldHRpbmdzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXNzaW9uSW5ncmVzc1Rva2VuKCk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQge1xuICByZXR1cm4gU1RBVEUuc2Vzc2lvbkluZ3Jlc3NUb2tlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2Vzc2lvbkluZ3Jlc3NUb2tlbih0b2tlbjogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICBTVEFURS5zZXNzaW9uSW5ncmVzc1Rva2VuID0gdG9rZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9hdXRoVG9rZW5Gcm9tRmQoKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBTVEFURS5vYXV0aFRva2VuRnJvbUZkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPYXV0aFRva2VuRnJvbUZkKHRva2VuOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gIFNUQVRFLm9hdXRoVG9rZW5Gcm9tRmQgPSB0b2tlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBpS2V5RnJvbUZkKCk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQge1xuICByZXR1cm4gU1RBVEUuYXBpS2V5RnJvbUZkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBcGlLZXlGcm9tRmQoa2V5OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gIFNUQVRFLmFwaUtleUZyb21GZCA9IGtleVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGFzdEFQSVJlcXVlc3QoXG4gIHBhcmFtczogT21pdDxCZXRhTWVzc2FnZVN0cmVhbVBhcmFtcywgJ21lc3NhZ2VzJz4gfCBudWxsLFxuKTogdm9pZCB7XG4gIFNUQVRFLmxhc3RBUElSZXF1ZXN0ID0gcGFyYW1zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0QVBJUmVxdWVzdCgpOiBPbWl0PFxuICBCZXRhTWVzc2FnZVN0cmVhbVBhcmFtcyxcbiAgJ21lc3NhZ2VzJ1xuPiB8IG51bGwge1xuICByZXR1cm4gU1RBVEUubGFzdEFQSVJlcXVlc3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExhc3RBUElSZXF1ZXN0TWVzc2FnZXMoXG4gIG1lc3NhZ2VzOiBCZXRhTWVzc2FnZVN0cmVhbVBhcmFtc1snbWVzc2FnZXMnXSB8IG51bGwsXG4pOiB2b2lkIHtcbiAgU1RBVEUubGFzdEFQSVJlcXVlc3RNZXNzYWdlcyA9IG1lc3NhZ2VzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0QVBJUmVxdWVzdE1lc3NhZ2VzKCk6XG4gIHwgQmV0YU1lc3NhZ2VTdHJlYW1QYXJhbXNbJ21lc3NhZ2VzJ11cbiAgfCBudWxsIHtcbiAgcmV0dXJuIFNUQVRFLmxhc3RBUElSZXF1ZXN0TWVzc2FnZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExhc3RDbGFzc2lmaWVyUmVxdWVzdHMocmVxdWVzdHM6IHVua25vd25bXSB8IG51bGwpOiB2b2lkIHtcbiAgU1RBVEUubGFzdENsYXNzaWZpZXJSZXF1ZXN0cyA9IHJlcXVlc3RzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0Q2xhc3NpZmllclJlcXVlc3RzKCk6IHVua25vd25bXSB8IG51bGwge1xuICByZXR1cm4gU1RBVEUubGFzdENsYXNzaWZpZXJSZXF1ZXN0c1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FjaGVkQ2xhdWRlTWRDb250ZW50KGNvbnRlbnQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgU1RBVEUuY2FjaGVkQ2xhdWRlTWRDb250ZW50ID0gY29udGVudFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVkQ2xhdWRlTWRDb250ZW50KCk6IHN0cmluZyB8IG51bGwge1xuICByZXR1cm4gU1RBVEUuY2FjaGVkQ2xhdWRlTWRDb250ZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0luTWVtb3J5RXJyb3JMb2coZXJyb3JJbmZvOiB7XG4gIGVycm9yOiBzdHJpbmdcbiAgdGltZXN0YW1wOiBzdHJpbmdcbn0pOiB2b2lkIHtcbiAgY29uc3QgTUFYX0lOX01FTU9SWV9FUlJPUlMgPSAxMDBcbiAgaWYgKFNUQVRFLmluTWVtb3J5RXJyb3JMb2cubGVuZ3RoID49IE1BWF9JTl9NRU1PUllfRVJST1JTKSB7XG4gICAgU1RBVEUuaW5NZW1vcnlFcnJvckxvZy5zaGlmdCgpIC8vIFJlbW92ZSBvbGRlc3QgZXJyb3JcbiAgfVxuICBTVEFURS5pbk1lbW9yeUVycm9yTG9nLnB1c2goZXJyb3JJbmZvKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsb3dlZFNldHRpbmdTb3VyY2VzKCk6IFNldHRpbmdTb3VyY2VbXSB7XG4gIHJldHVybiBTVEFURS5hbGxvd2VkU2V0dGluZ1NvdXJjZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFsbG93ZWRTZXR0aW5nU291cmNlcyhzb3VyY2VzOiBTZXR0aW5nU291cmNlW10pOiB2b2lkIHtcbiAgU1RBVEUuYWxsb3dlZFNldHRpbmdTb3VyY2VzID0gc291cmNlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZmVyVGhpcmRQYXJ0eUF1dGhlbnRpY2F0aW9uKCk6IGJvb2xlYW4ge1xuICAvLyBJREUgZXh0ZW5zaW9uIHNob3VsZCBiZWhhdmUgYXMgMVAgZm9yIGF1dGhlbnRpY2F0aW9uIHJlYXNvbnMuXG4gIHJldHVybiBnZXRJc05vbkludGVyYWN0aXZlU2Vzc2lvbigpICYmIFNUQVRFLmNsaWVudFR5cGUgIT09ICdjbGF1ZGUtdnNjb2RlJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW5saW5lUGx1Z2lucyhwbHVnaW5zOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG4gIFNUQVRFLmlubGluZVBsdWdpbnMgPSBwbHVnaW5zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmxpbmVQbHVnaW5zKCk6IEFycmF5PHN0cmluZz4ge1xuICByZXR1cm4gU1RBVEUuaW5saW5lUGx1Z2luc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2hyb21lRmxhZ092ZXJyaWRlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gIFNUQVRFLmNocm9tZUZsYWdPdmVycmlkZSA9IHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaHJvbWVGbGFnT3ZlcnJpZGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBTVEFURS5jaHJvbWVGbGFnT3ZlcnJpZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZUNvd29ya1BsdWdpbnModmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgU1RBVEUudXNlQ293b3JrUGx1Z2lucyA9IHZhbHVlXG4gIHJlc2V0U2V0dGluZ3NDYWNoZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VDb3dvcmtQbHVnaW5zKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gU1RBVEUudXNlQ293b3JrUGx1Z2luc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2Vzc2lvbkJ5cGFzc1Blcm1pc3Npb25zTW9kZShlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIFNUQVRFLnNlc3Npb25CeXBhc3NQZXJtaXNzaW9uc01vZGUgPSBlbmFibGVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXNzaW9uQnlwYXNzUGVybWlzc2lvbnNNb2RlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gU1RBVEUuc2Vzc2lvbkJ5cGFzc1Blcm1pc3Npb25zTW9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2NoZWR1bGVkVGFza3NFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgU1RBVEUuc2NoZWR1bGVkVGFza3NFbmFibGVkID0gZW5hYmxlZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZWR1bGVkVGFza3NFbmFibGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gU1RBVEUuc2NoZWR1bGVkVGFza3NFbmFibGVkXG59XG5cbmV4cG9ydCB0eXBlIFNlc3Npb25Dcm9uVGFzayA9IHtcbiAgaWQ6IHN0cmluZ1xuICBjcm9uOiBzdHJpbmdcbiAgcHJvbXB0OiBzdHJpbmdcbiAgY3JlYXRlZEF0OiBudW1iZXJcbiAgcmVjdXJyaW5nPzogYm9vbGVhblxuICAvKipcbiAgICogV2hlbiBzZXQsIHRoZSB0YXNrIHdhcyBjcmVhdGVkIGJ5IGFuIGluLXByb2Nlc3MgdGVhbW1hdGUgKG5vdCB0aGUgdGVhbSBsZWFkKS5cbiAgICogVGhlIHNjaGVkdWxlciByb3V0ZXMgZmlyZXMgdG8gdGhhdCB0ZWFtbWF0ZSdzIHBlbmRpbmdVc2VyTWVzc2FnZXMgcXVldWVcbiAgICogaW5zdGVhZCBvZiB0aGUgbWFpbiBSRVBMIGNvbW1hbmQgcXVldWUuIFNlc3Npb24tb25seSBcdTIwMTQgbmV2ZXIgd3JpdHRlbiB0byBkaXNrLlxuICAgKi9cbiAgYWdlbnRJZD86IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Vzc2lvbkNyb25UYXNrcygpOiBTZXNzaW9uQ3JvblRhc2tbXSB7XG4gIHJldHVybiBTVEFURS5zZXNzaW9uQ3JvblRhc2tzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTZXNzaW9uQ3JvblRhc2sodGFzazogU2Vzc2lvbkNyb25UYXNrKTogdm9pZCB7XG4gIFNUQVRFLnNlc3Npb25Dcm9uVGFza3MucHVzaCh0YXNrKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiB0YXNrcyBhY3R1YWxseSByZW1vdmVkLiBDYWxsZXJzIHVzZSB0aGlzIHRvIHNraXBcbiAqIGRvd25zdHJlYW0gd29yayAoZS5nLiB0aGUgZGlzayByZWFkIGluIHJlbW92ZUNyb25UYXNrcykgd2hlbiBhbGwgaWRzXG4gKiB3ZXJlIGFjY291bnRlZCBmb3IgaGVyZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNlc3Npb25Dcm9uVGFza3MoaWRzOiByZWFkb25seSBzdHJpbmdbXSk6IG51bWJlciB7XG4gIGlmIChpZHMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuICBjb25zdCBpZFNldCA9IG5ldyBTZXQoaWRzKVxuICBjb25zdCByZW1haW5pbmcgPSBTVEFURS5zZXNzaW9uQ3JvblRhc2tzLmZpbHRlcih0ID0+ICFpZFNldC5oYXModC5pZCkpXG4gIGNvbnN0IHJlbW92ZWQgPSBTVEFURS5zZXNzaW9uQ3JvblRhc2tzLmxlbmd0aCAtIHJlbWFpbmluZy5sZW5ndGhcbiAgaWYgKHJlbW92ZWQgPT09IDApIHJldHVybiAwXG4gIFNUQVRFLnNlc3Npb25Dcm9uVGFza3MgPSByZW1haW5pbmdcbiAgcmV0dXJuIHJlbW92ZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlc3Npb25UcnVzdEFjY2VwdGVkKGFjY2VwdGVkOiBib29sZWFuKTogdm9pZCB7XG4gIFNUQVRFLnNlc3Npb25UcnVzdEFjY2VwdGVkID0gYWNjZXB0ZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlc3Npb25UcnVzdEFjY2VwdGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gU1RBVEUuc2Vzc2lvblRydXN0QWNjZXB0ZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlc3Npb25QZXJzaXN0ZW5jZURpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIFNUQVRFLnNlc3Npb25QZXJzaXN0ZW5jZURpc2FibGVkID0gZGlzYWJsZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2Vzc2lvblBlcnNpc3RlbmNlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBTVEFURS5zZXNzaW9uUGVyc2lzdGVuY2VEaXNhYmxlZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzRXhpdGVkUGxhbk1vZGVJblNlc3Npb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiBTVEFURS5oYXNFeGl0ZWRQbGFuTW9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SGFzRXhpdGVkUGxhbk1vZGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgU1RBVEUuaGFzRXhpdGVkUGxhbk1vZGUgPSB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVlZHNQbGFuTW9kZUV4aXRBdHRhY2htZW50KCk6IGJvb2xlYW4ge1xuICByZXR1cm4gU1RBVEUubmVlZHNQbGFuTW9kZUV4aXRBdHRhY2htZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROZWVkc1BsYW5Nb2RlRXhpdEF0dGFjaG1lbnQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgU1RBVEUubmVlZHNQbGFuTW9kZUV4aXRBdHRhY2htZW50ID0gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVBsYW5Nb2RlVHJhbnNpdGlvbihcbiAgZnJvbU1vZGU6IHN0cmluZyxcbiAgdG9Nb2RlOiBzdHJpbmcsXG4pOiB2b2lkIHtcbiAgLy8gSWYgc3dpdGNoaW5nIFRPIHBsYW4gbW9kZSwgY2xlYXIgYW55IHBlbmRpbmcgZXhpdCBhdHRhY2htZW50XG4gIC8vIFRoaXMgcHJldmVudHMgc2VuZGluZyBib3RoIHBsYW5fbW9kZSBhbmQgcGxhbl9tb2RlX2V4aXQgd2hlbiB1c2VyIHRvZ2dsZXMgcXVpY2tseVxuICBpZiAodG9Nb2RlID09PSAncGxhbicgJiYgZnJvbU1vZGUgIT09ICdwbGFuJykge1xuICAgIFNUQVRFLm5lZWRzUGxhbk1vZGVFeGl0QXR0YWNobWVudCA9IGZhbHNlXG4gIH1cblxuICAvLyBJZiBzd2l0Y2hpbmcgb3V0IG9mIHBsYW4gbW9kZSwgdHJpZ2dlciB0aGUgcGxhbl9tb2RlX2V4aXQgYXR0YWNobWVudFxuICBpZiAoZnJvbU1vZGUgPT09ICdwbGFuJyAmJiB0b01vZGUgIT09ICdwbGFuJykge1xuICAgIFNUQVRFLm5lZWRzUGxhbk1vZGVFeGl0QXR0YWNobWVudCA9IHRydWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVlZHNBdXRvTW9kZUV4aXRBdHRhY2htZW50KCk6IGJvb2xlYW4ge1xuICByZXR1cm4gU1RBVEUubmVlZHNBdXRvTW9kZUV4aXRBdHRhY2htZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROZWVkc0F1dG9Nb2RlRXhpdEF0dGFjaG1lbnQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgU1RBVEUubmVlZHNBdXRvTW9kZUV4aXRBdHRhY2htZW50ID0gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUF1dG9Nb2RlVHJhbnNpdGlvbihcbiAgZnJvbU1vZGU6IHN0cmluZyxcbiAgdG9Nb2RlOiBzdHJpbmcsXG4pOiB2b2lkIHtcbiAgLy8gQXV0b1x1MjE5NHBsYW4gdHJhbnNpdGlvbnMgYXJlIGhhbmRsZWQgYnkgcHJlcGFyZUNvbnRleHRGb3JQbGFuTW9kZSAoYXV0byBtYXlcbiAgLy8gc3RheSBhY3RpdmUgdGhyb3VnaCBwbGFuIGlmIG9wdGVkIGluKSBhbmQgRXhpdFBsYW5Nb2RlIChyZXN0b3JlcyBtb2RlKS5cbiAgLy8gU2tpcCBib3RoIGRpcmVjdGlvbnMgc28gdGhpcyBmdW5jdGlvbiBvbmx5IGhhbmRsZXMgZGlyZWN0IGF1dG8gdHJhbnNpdGlvbnMuXG4gIGlmIChcbiAgICAoZnJvbU1vZGUgPT09ICdhdXRvJyAmJiB0b01vZGUgPT09ICdwbGFuJykgfHxcbiAgICAoZnJvbU1vZGUgPT09ICdwbGFuJyAmJiB0b01vZGUgPT09ICdhdXRvJylcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZnJvbUlzQXV0byA9IGZyb21Nb2RlID09PSAnYXV0bydcbiAgY29uc3QgdG9Jc0F1dG8gPSB0b01vZGUgPT09ICdhdXRvJ1xuXG4gIC8vIElmIHN3aXRjaGluZyBUTyBhdXRvIG1vZGUsIGNsZWFyIGFueSBwZW5kaW5nIGV4aXQgYXR0YWNobWVudFxuICAvLyBUaGlzIHByZXZlbnRzIHNlbmRpbmcgYm90aCBhdXRvX21vZGUgYW5kIGF1dG9fbW9kZV9leGl0IHdoZW4gdXNlciB0b2dnbGVzIHF1aWNrbHlcbiAgaWYgKHRvSXNBdXRvICYmICFmcm9tSXNBdXRvKSB7XG4gICAgU1RBVEUubmVlZHNBdXRvTW9kZUV4aXRBdHRhY2htZW50ID0gZmFsc2VcbiAgfVxuXG4gIC8vIElmIHN3aXRjaGluZyBvdXQgb2YgYXV0byBtb2RlLCB0cmlnZ2VyIHRoZSBhdXRvX21vZGVfZXhpdCBhdHRhY2htZW50XG4gIGlmIChmcm9tSXNBdXRvICYmICF0b0lzQXV0bykge1xuICAgIFNUQVRFLm5lZWRzQXV0b01vZGVFeGl0QXR0YWNobWVudCA9IHRydWVcbiAgfVxufVxuXG4vLyBMU1AgcGx1Z2luIHJlY29tbWVuZGF0aW9uIHNlc3Npb24gdHJhY2tpbmdcbmV4cG9ydCBmdW5jdGlvbiBoYXNTaG93bkxzcFJlY29tbWVuZGF0aW9uVGhpc1Nlc3Npb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiBTVEFURS5sc3BSZWNvbW1lbmRhdGlvblNob3duVGhpc1Nlc3Npb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExzcFJlY29tbWVuZGF0aW9uU2hvd25UaGlzU2Vzc2lvbih2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICBTVEFURS5sc3BSZWNvbW1lbmRhdGlvblNob3duVGhpc1Nlc3Npb24gPSB2YWx1ZVxufVxuXG4vLyBTREsgaW5pdCBldmVudCBzdGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHNldEluaXRKc29uU2NoZW1hKHNjaGVtYTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiB2b2lkIHtcbiAgU1RBVEUuaW5pdEpzb25TY2hlbWEgPSBzY2hlbWFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRKc29uU2NoZW1hKCk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbCB7XG4gIHJldHVybiBTVEFURS5pbml0SnNvblNjaGVtYVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJIb29rQ2FsbGJhY2tzKFxuICBob29rczogUGFydGlhbDxSZWNvcmQ8SG9va0V2ZW50LCBSZWdpc3RlcmVkSG9va01hdGNoZXJbXT4+LFxuKTogdm9pZCB7XG4gIGlmICghU1RBVEUucmVnaXN0ZXJlZEhvb2tzKSB7XG4gICAgU1RBVEUucmVnaXN0ZXJlZEhvb2tzID0ge31cbiAgfVxuXG4gIC8vIGByZWdpc3Rlckhvb2tDYWxsYmFja3NgIG1heSBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMsIHNvIHdlIG5lZWQgdG8gbWVyZ2UgKG5vdCBvdmVyd3JpdGUpXG4gIGZvciAoY29uc3QgW2V2ZW50LCBtYXRjaGVyc10gb2YgT2JqZWN0LmVudHJpZXMoaG9va3MpKSB7XG4gICAgY29uc3QgZXZlbnRLZXkgPSBldmVudCBhcyBIb29rRXZlbnRcbiAgICBpZiAoIVNUQVRFLnJlZ2lzdGVyZWRIb29rc1tldmVudEtleV0pIHtcbiAgICAgIFNUQVRFLnJlZ2lzdGVyZWRIb29rc1tldmVudEtleV0gPSBbXVxuICAgIH1cbiAgICBTVEFURS5yZWdpc3RlcmVkSG9va3NbZXZlbnRLZXldIS5wdXNoKC4uLm1hdGNoZXJzKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWdpc3RlcmVkSG9va3MoKTogUGFydGlhbDxcbiAgUmVjb3JkPEhvb2tFdmVudCwgUmVnaXN0ZXJlZEhvb2tNYXRjaGVyW10+XG4+IHwgbnVsbCB7XG4gIHJldHVybiBTVEFURS5yZWdpc3RlcmVkSG9va3Ncbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUmVnaXN0ZXJlZEhvb2tzKCk6IHZvaWQge1xuICBTVEFURS5yZWdpc3RlcmVkSG9va3MgPSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlZ2lzdGVyZWRQbHVnaW5Ib29rcygpOiB2b2lkIHtcbiAgaWYgKCFTVEFURS5yZWdpc3RlcmVkSG9va3MpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGZpbHRlcmVkOiBQYXJ0aWFsPFJlY29yZDxIb29rRXZlbnQsIFJlZ2lzdGVyZWRIb29rTWF0Y2hlcltdPj4gPSB7fVxuICBmb3IgKGNvbnN0IFtldmVudCwgbWF0Y2hlcnNdIG9mIE9iamVjdC5lbnRyaWVzKFNUQVRFLnJlZ2lzdGVyZWRIb29rcykpIHtcbiAgICAvLyBLZWVwIG9ubHkgY2FsbGJhY2sgaG9va3MgKHRob3NlIHdpdGhvdXQgcGx1Z2luUm9vdClcbiAgICBjb25zdCBjYWxsYmFja0hvb2tzID0gbWF0Y2hlcnMuZmlsdGVyKG0gPT4gISgncGx1Z2luUm9vdCcgaW4gbSkpXG4gICAgaWYgKGNhbGxiYWNrSG9va3MubGVuZ3RoID4gMCkge1xuICAgICAgZmlsdGVyZWRbZXZlbnQgYXMgSG9va0V2ZW50XSA9IGNhbGxiYWNrSG9va3NcbiAgICB9XG4gIH1cblxuICBTVEFURS5yZWdpc3RlcmVkSG9va3MgPSBPYmplY3Qua2V5cyhmaWx0ZXJlZCkubGVuZ3RoID4gMCA/IGZpbHRlcmVkIDogbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRTZGtJbml0U3RhdGUoKTogdm9pZCB7XG4gIFNUQVRFLmluaXRKc29uU2NoZW1hID0gbnVsbFxuICBTVEFURS5yZWdpc3RlcmVkSG9va3MgPSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGFuU2x1Z0NhY2hlKCk6IE1hcDxzdHJpbmcsIHN0cmluZz4ge1xuICByZXR1cm4gU1RBVEUucGxhblNsdWdDYWNoZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Vzc2lvbkNyZWF0ZWRUZWFtcygpOiBTZXQ8c3RyaW5nPiB7XG4gIHJldHVybiBTVEFURS5zZXNzaW9uQ3JlYXRlZFRlYW1zXG59XG5cbi8vIFRlbGVwb3J0ZWQgc2Vzc2lvbiB0cmFja2luZyBmb3IgcmVsaWFiaWxpdHkgbG9nZ2luZ1xuZXhwb3J0IGZ1bmN0aW9uIHNldFRlbGVwb3J0ZWRTZXNzaW9uSW5mbyhpbmZvOiB7XG4gIHNlc3Npb25JZDogc3RyaW5nIHwgbnVsbFxufSk6IHZvaWQge1xuICBTVEFURS50ZWxlcG9ydGVkU2Vzc2lvbkluZm8gPSB7XG4gICAgaXNUZWxlcG9ydGVkOiB0cnVlLFxuICAgIGhhc0xvZ2dlZEZpcnN0TWVzc2FnZTogZmFsc2UsXG4gICAgc2Vzc2lvbklkOiBpbmZvLnNlc3Npb25JZCxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVsZXBvcnRlZFNlc3Npb25JbmZvKCk6IHtcbiAgaXNUZWxlcG9ydGVkOiBib29sZWFuXG4gIGhhc0xvZ2dlZEZpcnN0TWVzc2FnZTogYm9vbGVhblxuICBzZXNzaW9uSWQ6IHN0cmluZyB8IG51bGxcbn0gfCBudWxsIHtcbiAgcmV0dXJuIFNUQVRFLnRlbGVwb3J0ZWRTZXNzaW9uSW5mb1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya0ZpcnN0VGVsZXBvcnRNZXNzYWdlTG9nZ2VkKCk6IHZvaWQge1xuICBpZiAoU1RBVEUudGVsZXBvcnRlZFNlc3Npb25JbmZvKSB7XG4gICAgU1RBVEUudGVsZXBvcnRlZFNlc3Npb25JbmZvLmhhc0xvZ2dlZEZpcnN0TWVzc2FnZSA9IHRydWVcbiAgfVxufVxuXG4vLyBJbnZva2VkIHNraWxscyB0cmFja2luZyBmb3IgcHJlc2VydmF0aW9uIGFjcm9zcyBjb21wYWN0aW9uXG5leHBvcnQgdHlwZSBJbnZva2VkU2tpbGxJbmZvID0ge1xuICBza2lsbE5hbWU6IHN0cmluZ1xuICBza2lsbFBhdGg6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbiAgaW52b2tlZEF0OiBudW1iZXJcbiAgYWdlbnRJZDogc3RyaW5nIHwgbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSW52b2tlZFNraWxsKFxuICBza2lsbE5hbWU6IHN0cmluZyxcbiAgc2tpbGxQYXRoOiBzdHJpbmcsXG4gIGNvbnRlbnQ6IHN0cmluZyxcbiAgYWdlbnRJZDogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4pOiB2b2lkIHtcbiAgY29uc3Qga2V5ID0gYCR7YWdlbnRJZCA/PyAnJ306JHtza2lsbE5hbWV9YFxuICBTVEFURS5pbnZva2VkU2tpbGxzLnNldChrZXksIHtcbiAgICBza2lsbE5hbWUsXG4gICAgc2tpbGxQYXRoLFxuICAgIGNvbnRlbnQsXG4gICAgaW52b2tlZEF0OiBEYXRlLm5vdygpLFxuICAgIGFnZW50SWQsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnZva2VkU2tpbGxzKCk6IE1hcDxzdHJpbmcsIEludm9rZWRTa2lsbEluZm8+IHtcbiAgcmV0dXJuIFNUQVRFLmludm9rZWRTa2lsbHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEludm9rZWRTa2lsbHNGb3JBZ2VudChcbiAgYWdlbnRJZDogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCxcbik6IE1hcDxzdHJpbmcsIEludm9rZWRTa2lsbEluZm8+IHtcbiAgY29uc3Qgbm9ybWFsaXplZElkID0gYWdlbnRJZCA/PyBudWxsXG4gIGNvbnN0IGZpbHRlcmVkID0gbmV3IE1hcDxzdHJpbmcsIEludm9rZWRTa2lsbEluZm8+KClcbiAgZm9yIChjb25zdCBba2V5LCBza2lsbF0gb2YgU1RBVEUuaW52b2tlZFNraWxscykge1xuICAgIGlmIChza2lsbC5hZ2VudElkID09PSBub3JtYWxpemVkSWQpIHtcbiAgICAgIGZpbHRlcmVkLnNldChrZXksIHNraWxsKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmlsdGVyZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFySW52b2tlZFNraWxscyhcbiAgcHJlc2VydmVkQWdlbnRJZHM/OiBSZWFkb25seVNldDxzdHJpbmc+LFxuKTogdm9pZCB7XG4gIGlmICghcHJlc2VydmVkQWdlbnRJZHMgfHwgcHJlc2VydmVkQWdlbnRJZHMuc2l6ZSA9PT0gMCkge1xuICAgIFNUQVRFLmludm9rZWRTa2lsbHMuY2xlYXIoKVxuICAgIHJldHVyblxuICB9XG4gIGZvciAoY29uc3QgW2tleSwgc2tpbGxdIG9mIFNUQVRFLmludm9rZWRTa2lsbHMpIHtcbiAgICBpZiAoc2tpbGwuYWdlbnRJZCA9PT0gbnVsbCB8fCAhcHJlc2VydmVkQWdlbnRJZHMuaGFzKHNraWxsLmFnZW50SWQpKSB7XG4gICAgICBTVEFURS5pbnZva2VkU2tpbGxzLmRlbGV0ZShrZXkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckludm9rZWRTa2lsbHNGb3JBZ2VudChhZ2VudElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBba2V5LCBza2lsbF0gb2YgU1RBVEUuaW52b2tlZFNraWxscykge1xuICAgIGlmIChza2lsbC5hZ2VudElkID09PSBhZ2VudElkKSB7XG4gICAgICBTVEFURS5pbnZva2VkU2tpbGxzLmRlbGV0ZShrZXkpXG4gICAgfVxuICB9XG59XG5cbi8vIFNsb3cgb3BlcmF0aW9ucyB0cmFja2luZyBmb3IgZGV2IGJhclxuY29uc3QgTUFYX1NMT1dfT1BFUkFUSU9OUyA9IDEwXG5jb25zdCBTTE9XX09QRVJBVElPTl9UVExfTVMgPSAxMDAwMFxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2xvd09wZXJhdGlvbihvcGVyYXRpb246IHN0cmluZywgZHVyYXRpb25NczogbnVtYmVyKTogdm9pZCB7XG4gIGlmIChwcm9jZXNzLmVudi5VU0VSX1RZUEUgIT09ICdhbnQnKSByZXR1cm5cbiAgLy8gU2tpcCB0cmFja2luZyBmb3IgZWRpdG9yIHNlc3Npb25zICh1c2VyIGVkaXRpbmcgYSBwcm9tcHQgZmlsZSBpbiAkRURJVE9SKVxuICAvLyBUaGVzZSBhcmUgaW50ZW50aW9uYWxseSBzbG93IHNpbmNlIHRoZSB1c2VyIGlzIGRyYWZ0aW5nIHRleHRcbiAgaWYgKG9wZXJhdGlvbi5pbmNsdWRlcygnZXhlYycpICYmIG9wZXJhdGlvbi5pbmNsdWRlcygnY2xhdWRlLXByb21wdC0nKSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgLy8gUmVtb3ZlIHN0YWxlIG9wZXJhdGlvbnNcbiAgU1RBVEUuc2xvd09wZXJhdGlvbnMgPSBTVEFURS5zbG93T3BlcmF0aW9ucy5maWx0ZXIoXG4gICAgb3AgPT4gbm93IC0gb3AudGltZXN0YW1wIDwgU0xPV19PUEVSQVRJT05fVFRMX01TLFxuICApXG4gIC8vIEFkZCBuZXcgb3BlcmF0aW9uXG4gIFNUQVRFLnNsb3dPcGVyYXRpb25zLnB1c2goeyBvcGVyYXRpb24sIGR1cmF0aW9uTXMsIHRpbWVzdGFtcDogbm93IH0pXG4gIC8vIEtlZXAgb25seSB0aGUgbW9zdCByZWNlbnQgb3BlcmF0aW9uc1xuICBpZiAoU1RBVEUuc2xvd09wZXJhdGlvbnMubGVuZ3RoID4gTUFYX1NMT1dfT1BFUkFUSU9OUykge1xuICAgIFNUQVRFLnNsb3dPcGVyYXRpb25zID0gU1RBVEUuc2xvd09wZXJhdGlvbnMuc2xpY2UoLU1BWF9TTE9XX09QRVJBVElPTlMpXG4gIH1cbn1cblxuY29uc3QgRU1QVFlfU0xPV19PUEVSQVRJT05TOiBSZWFkb25seUFycmF5PHtcbiAgb3BlcmF0aW9uOiBzdHJpbmdcbiAgZHVyYXRpb25NczogbnVtYmVyXG4gIHRpbWVzdGFtcDogbnVtYmVyXG59PiA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTbG93T3BlcmF0aW9ucygpOiBSZWFkb25seUFycmF5PHtcbiAgb3BlcmF0aW9uOiBzdHJpbmdcbiAgZHVyYXRpb25NczogbnVtYmVyXG4gIHRpbWVzdGFtcDogbnVtYmVyXG59PiB7XG4gIC8vIE1vc3QgY29tbW9uIGNhc2U6IG5vdGhpbmcgdHJhY2tlZC4gUmV0dXJuIGEgc3RhYmxlIHJlZmVyZW5jZSBzbyB0aGVcbiAgLy8gY2FsbGVyJ3Mgc2V0U3RhdGUoKSBjYW4gYmFpbCB2aWEgT2JqZWN0LmlzIGluc3RlYWQgb2YgcmUtcmVuZGVyaW5nIGF0IDJmcHMuXG4gIGlmIChTVEFURS5zbG93T3BlcmF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gRU1QVFlfU0xPV19PUEVSQVRJT05TXG4gIH1cbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAvLyBPbmx5IGFsbG9jYXRlIGEgbmV3IGFycmF5IHdoZW4gc29tZXRoaW5nIGFjdHVhbGx5IGV4cGlyZWQ7IG90aGVyd2lzZSBrZWVwXG4gIC8vIHRoZSByZWZlcmVuY2Ugc3RhYmxlIGFjcm9zcyBwb2xscyB3aGlsZSBvcHMgYXJlIHN0aWxsIGZyZXNoLlxuICBpZiAoXG4gICAgU1RBVEUuc2xvd09wZXJhdGlvbnMuc29tZShvcCA9PiBub3cgLSBvcC50aW1lc3RhbXAgPj0gU0xPV19PUEVSQVRJT05fVFRMX01TKVxuICApIHtcbiAgICBTVEFURS5zbG93T3BlcmF0aW9ucyA9IFNUQVRFLnNsb3dPcGVyYXRpb25zLmZpbHRlcihcbiAgICAgIG9wID0+IG5vdyAtIG9wLnRpbWVzdGFtcCA8IFNMT1dfT1BFUkFUSU9OX1RUTF9NUyxcbiAgICApXG4gICAgaWYgKFNUQVRFLnNsb3dPcGVyYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEVNUFRZX1NMT1dfT1BFUkFUSU9OU1xuICAgIH1cbiAgfVxuICAvLyBTYWZlIHRvIHJldHVybiBkaXJlY3RseTogYWRkU2xvd09wZXJhdGlvbigpIHJlYXNzaWducyBTVEFURS5zbG93T3BlcmF0aW9uc1xuICAvLyBiZWZvcmUgcHVzaGluZywgc28gdGhlIGFycmF5IGhlbGQgaW4gUmVhY3Qgc3RhdGUgaXMgbmV2ZXIgbXV0YXRlZC5cbiAgcmV0dXJuIFNUQVRFLnNsb3dPcGVyYXRpb25zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYWluVGhyZWFkQWdlbnRUeXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBTVEFURS5tYWluVGhyZWFkQWdlbnRUeXBlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNYWluVGhyZWFkQWdlbnRUeXBlKGFnZW50VHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gIFNUQVRFLm1haW5UaHJlYWRBZ2VudFR5cGUgPSBhZ2VudFR5cGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElzUmVtb3RlTW9kZSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIFNUQVRFLmlzUmVtb3RlTW9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SXNSZW1vdGVNb2RlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gIFNUQVRFLmlzUmVtb3RlTW9kZSA9IHZhbHVlXG59XG5cbi8vIFN5c3RlbSBwcm9tcHQgc2VjdGlvbiBhY2Nlc3NvcnNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5c3RlbVByb21wdFNlY3Rpb25DYWNoZSgpOiBNYXA8c3RyaW5nLCBzdHJpbmcgfCBudWxsPiB7XG4gIHJldHVybiBTVEFURS5zeXN0ZW1Qcm9tcHRTZWN0aW9uQ2FjaGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN5c3RlbVByb21wdFNlY3Rpb25DYWNoZUVudHJ5KFxuICBuYW1lOiBzdHJpbmcsXG4gIHZhbHVlOiBzdHJpbmcgfCBudWxsLFxuKTogdm9pZCB7XG4gIFNUQVRFLnN5c3RlbVByb21wdFNlY3Rpb25DYWNoZS5zZXQobmFtZSwgdmFsdWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclN5c3RlbVByb21wdFNlY3Rpb25TdGF0ZSgpOiB2b2lkIHtcbiAgU1RBVEUuc3lzdGVtUHJvbXB0U2VjdGlvbkNhY2hlLmNsZWFyKClcbn1cblxuLy8gTGFzdCBlbWl0dGVkIGRhdGUgYWNjZXNzb3JzIChmb3IgZGV0ZWN0aW5nIG1pZG5pZ2h0IGRhdGUgY2hhbmdlcylcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RFbWl0dGVkRGF0ZSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgcmV0dXJuIFNUQVRFLmxhc3RFbWl0dGVkRGF0ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGFzdEVtaXR0ZWREYXRlKGRhdGU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgU1RBVEUubGFzdEVtaXR0ZWREYXRlID0gZGF0ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWRkaXRpb25hbERpcmVjdG9yaWVzRm9yQ2xhdWRlTWQoKTogc3RyaW5nW10ge1xuICByZXR1cm4gU1RBVEUuYWRkaXRpb25hbERpcmVjdG9yaWVzRm9yQ2xhdWRlTWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFkZGl0aW9uYWxEaXJlY3Rvcmllc0ZvckNsYXVkZU1kKFxuICBkaXJlY3Rvcmllczogc3RyaW5nW10sXG4pOiB2b2lkIHtcbiAgU1RBVEUuYWRkaXRpb25hbERpcmVjdG9yaWVzRm9yQ2xhdWRlTWQgPSBkaXJlY3Rvcmllc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsb3dlZENoYW5uZWxzKCk6IENoYW5uZWxFbnRyeVtdIHtcbiAgcmV0dXJuIFNUQVRFLmFsbG93ZWRDaGFubmVsc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QWxsb3dlZENoYW5uZWxzKGVudHJpZXM6IENoYW5uZWxFbnRyeVtdKTogdm9pZCB7XG4gIFNUQVRFLmFsbG93ZWRDaGFubmVscyA9IGVudHJpZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhhc0RldkNoYW5uZWxzKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gU1RBVEUuaGFzRGV2Q2hhbm5lbHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEhhc0RldkNoYW5uZWxzKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gIFNUQVRFLmhhc0RldkNoYW5uZWxzID0gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb21wdENhY2hlMWhBbGxvd2xpc3QoKTogc3RyaW5nW10gfCBudWxsIHtcbiAgcmV0dXJuIFNUQVRFLnByb21wdENhY2hlMWhBbGxvd2xpc3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb21wdENhY2hlMWhBbGxvd2xpc3QoYWxsb3dsaXN0OiBzdHJpbmdbXSB8IG51bGwpOiB2b2lkIHtcbiAgU1RBVEUucHJvbXB0Q2FjaGUxaEFsbG93bGlzdCA9IGFsbG93bGlzdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvbXB0Q2FjaGUxaEVsaWdpYmxlKCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgcmV0dXJuIFNUQVRFLnByb21wdENhY2hlMWhFbGlnaWJsZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvbXB0Q2FjaGUxaEVsaWdpYmxlKGVsaWdpYmxlOiBib29sZWFuIHwgbnVsbCk6IHZvaWQge1xuICBTVEFURS5wcm9tcHRDYWNoZTFoRWxpZ2libGUgPSBlbGlnaWJsZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWZrTW9kZUhlYWRlckxhdGNoZWQoKTogYm9vbGVhbiB8IG51bGwge1xuICByZXR1cm4gU1RBVEUuYWZrTW9kZUhlYWRlckxhdGNoZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFma01vZGVIZWFkZXJMYXRjaGVkKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgU1RBVEUuYWZrTW9kZUhlYWRlckxhdGNoZWQgPSB2XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYXN0TW9kZUhlYWRlckxhdGNoZWQoKTogYm9vbGVhbiB8IG51bGwge1xuICByZXR1cm4gU1RBVEUuZmFzdE1vZGVIZWFkZXJMYXRjaGVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGYXN0TW9kZUhlYWRlckxhdGNoZWQodjogYm9vbGVhbik6IHZvaWQge1xuICBTVEFURS5mYXN0TW9kZUhlYWRlckxhdGNoZWQgPSB2XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYWNoZUVkaXRpbmdIZWFkZXJMYXRjaGVkKCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgcmV0dXJuIFNUQVRFLmNhY2hlRWRpdGluZ0hlYWRlckxhdGNoZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENhY2hlRWRpdGluZ0hlYWRlckxhdGNoZWQodjogYm9vbGVhbik6IHZvaWQge1xuICBTVEFURS5jYWNoZUVkaXRpbmdIZWFkZXJMYXRjaGVkID0gdlxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGhpbmtpbmdDbGVhckxhdGNoZWQoKTogYm9vbGVhbiB8IG51bGwge1xuICByZXR1cm4gU1RBVEUudGhpbmtpbmdDbGVhckxhdGNoZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRoaW5raW5nQ2xlYXJMYXRjaGVkKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgU1RBVEUudGhpbmtpbmdDbGVhckxhdGNoZWQgPSB2XG59XG5cbi8qKlxuICogUmVzZXQgYmV0YSBoZWFkZXIgbGF0Y2hlcyB0byBudWxsLiBDYWxsZWQgb24gL2NsZWFyIGFuZCAvY29tcGFjdCBzbyBhXG4gKiBmcmVzaCBjb252ZXJzYXRpb24gZ2V0cyBmcmVzaCBoZWFkZXIgZXZhbHVhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQmV0YUhlYWRlckxhdGNoZXMoKTogdm9pZCB7XG4gIFNUQVRFLmFma01vZGVIZWFkZXJMYXRjaGVkID0gbnVsbFxuICBTVEFURS5mYXN0TW9kZUhlYWRlckxhdGNoZWQgPSBudWxsXG4gIFNUQVRFLmNhY2hlRWRpdGluZ0hlYWRlckxhdGNoZWQgPSBudWxsXG4gIFNUQVRFLnRoaW5raW5nQ2xlYXJMYXRjaGVkID0gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvbXB0SWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gIHJldHVybiBTVEFURS5wcm9tcHRJZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvbXB0SWQoaWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgU1RBVEUucHJvbXB0SWQgPSBpZFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsU0FBUyxhQUFhO0FBQ3BCLE9BQUssV0FBVyxJQUFJO0FBQ3BCLE9BQUssT0FBTztBQUNkO0FBWkEsSUFjTztBQWRQO0FBQUE7QUFBQTtBQWNBLElBQU8scUJBQVE7QUFBQTtBQUFBOzs7QUNMZixTQUFTLFlBQVksS0FBSztBQUN4QixNQUFJLE9BQU8sS0FBSyxVQUNaLFNBQVMsS0FBSyxRQUFRLEVBQUUsR0FBRztBQUUvQixPQUFLLE9BQU8sS0FBSztBQUNqQixTQUFPO0FBQ1Q7QUFmQSxJQWlCTztBQWpCUDtBQUFBO0FBaUJBLElBQU8sc0JBQVE7QUFBQTtBQUFBOzs7QUNSZixTQUFTLFNBQVMsS0FBSztBQUNyQixTQUFPLEtBQUssU0FBUyxJQUFJLEdBQUc7QUFDOUI7QUFYQSxJQWFPO0FBYlA7QUFBQTtBQWFBLElBQU8sbUJBQVE7QUFBQTtBQUFBOzs7QUNKZixTQUFTLFNBQVMsS0FBSztBQUNyQixTQUFPLEtBQUssU0FBUyxJQUFJLEdBQUc7QUFDOUI7QUFYQSxJQWFPO0FBYlA7QUFBQTtBQWFBLElBQU8sbUJBQVE7QUFBQTtBQUFBOzs7QUNJZixTQUFTLFNBQVMsS0FBSyxPQUFPO0FBQzVCLE1BQUksT0FBTyxLQUFLO0FBQ2hCLE1BQUksZ0JBQWdCLG1CQUFXO0FBQzdCLFFBQUksUUFBUSxLQUFLO0FBQ2pCLFFBQUksQ0FBQyxlQUFRLE1BQU0sU0FBUyxtQkFBbUIsR0FBSTtBQUNqRCxZQUFNLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQztBQUN2QixXQUFLLE9BQU8sRUFBRSxLQUFLO0FBQ25CLGFBQU87QUFBQSxJQUNUO0FBQ0EsV0FBTyxLQUFLLFdBQVcsSUFBSSxpQkFBUyxLQUFLO0FBQUEsRUFDM0M7QUFDQSxPQUFLLElBQUksS0FBSyxLQUFLO0FBQ25CLE9BQUssT0FBTyxLQUFLO0FBQ2pCLFNBQU87QUFDVDtBQS9CQSxJQUtJLGtCQTRCRztBQWpDUDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBSSxtQkFBbUI7QUE0QnZCLElBQU8sbUJBQVE7QUFBQTtBQUFBOzs7QUNuQmYsU0FBUyxNQUFNLFNBQVM7QUFDdEIsTUFBSSxPQUFPLEtBQUssV0FBVyxJQUFJLGtCQUFVLE9BQU87QUFDaEQsT0FBSyxPQUFPLEtBQUs7QUFDbkI7QUFqQkEsSUEwQk87QUExQlA7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBLFVBQU0sVUFBVSxRQUFRO0FBQ3hCLFVBQU0sVUFBVSxRQUFRLElBQUk7QUFDNUIsVUFBTSxVQUFVLE1BQU07QUFDdEIsVUFBTSxVQUFVLE1BQU07QUFDdEIsVUFBTSxVQUFVLE1BQU07QUFFdEIsSUFBTyxnQkFBUTtBQUFBO0FBQUE7OztBQ2JmLFNBQVMsWUFBWSxPQUFPO0FBQzFCLE9BQUssU0FBUyxJQUFJLE9BQU8sY0FBYztBQUN2QyxTQUFPO0FBQ1Q7QUFoQkEsSUFDSSxnQkFpQkc7QUFsQlA7QUFBQTtBQUNBLElBQUksaUJBQWlCO0FBaUJyQixJQUFPLHNCQUFRO0FBQUE7QUFBQTs7O0FDVGYsU0FBUyxZQUFZLE9BQU87QUFDMUIsU0FBTyxLQUFLLFNBQVMsSUFBSSxLQUFLO0FBQ2hDO0FBWEEsSUFhTztBQWJQO0FBQUE7QUFhQSxJQUFPLHNCQUFRO0FBQUE7QUFBQTs7O0FDRGYsU0FBUyxTQUFTLFFBQVE7QUFDeEIsTUFBSSxRQUFRLElBQ1IsU0FBUyxVQUFVLE9BQU8sSUFBSSxPQUFPO0FBRXpDLE9BQUssV0FBVyxJQUFJO0FBQ3BCLFNBQU8sRUFBRSxRQUFRLFFBQVE7QUFDdkIsU0FBSyxJQUFJLE9BQU8sS0FBSyxDQUFDO0FBQUEsRUFDeEI7QUFDRjtBQXBCQSxJQTBCTztBQTFCUDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBcUJBLGFBQVMsVUFBVSxNQUFNLFNBQVMsVUFBVSxPQUFPO0FBQ25ELGFBQVMsVUFBVSxNQUFNO0FBRXpCLElBQU8sbUJBQVE7QUFBQTtBQUFBOzs7QUNoQmYsU0FBUyxVQUFVLE9BQU8sV0FBVztBQUNuQyxNQUFJLFFBQVEsSUFDUixTQUFTLFNBQVMsT0FBTyxJQUFJLE1BQU07QUFFdkMsU0FBTyxFQUFFLFFBQVEsUUFBUTtBQUN2QixRQUFJLFVBQVUsTUFBTSxLQUFLLEdBQUcsT0FBTyxLQUFLLEdBQUc7QUFDekMsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBcEJBLElBc0JPO0FBdEJQO0FBQUE7QUFzQkEsSUFBTyxvQkFBUTtBQUFBO0FBQUE7OztBQ2RmLFNBQVMsU0FBUyxPQUFPLEtBQUs7QUFDNUIsU0FBTyxNQUFNLElBQUksR0FBRztBQUN0QjtBQVZBLElBWU87QUFaUDtBQUFBO0FBWUEsSUFBTyxtQkFBUTtBQUFBO0FBQUE7OztBQ1NmLFNBQVMsWUFBWSxPQUFPLE9BQU8sU0FBUyxZQUFZLFdBQVcsT0FBTztBQUN4RSxNQUFJLFlBQVksVUFBVSxzQkFDdEIsWUFBWSxNQUFNLFFBQ2xCLFlBQVksTUFBTTtBQUV0QixNQUFJLGFBQWEsYUFBYSxFQUFFLGFBQWEsWUFBWSxZQUFZO0FBQ25FLFdBQU87QUFBQSxFQUNUO0FBRUEsTUFBSSxhQUFhLE1BQU0sSUFBSSxLQUFLO0FBQ2hDLE1BQUksYUFBYSxNQUFNLElBQUksS0FBSztBQUNoQyxNQUFJLGNBQWMsWUFBWTtBQUM1QixXQUFPLGNBQWMsU0FBUyxjQUFjO0FBQUEsRUFDOUM7QUFDQSxNQUFJLFFBQVEsSUFDUixTQUFTLE1BQ1QsT0FBUSxVQUFVLHlCQUEwQixJQUFJLHFCQUFXO0FBRS9ELFFBQU0sSUFBSSxPQUFPLEtBQUs7QUFDdEIsUUFBTSxJQUFJLE9BQU8sS0FBSztBQUd0QixTQUFPLEVBQUUsUUFBUSxXQUFXO0FBQzFCLFFBQUksV0FBVyxNQUFNLEtBQUssR0FDdEIsV0FBVyxNQUFNLEtBQUs7QUFFMUIsUUFBSSxZQUFZO0FBQ2QsVUFBSSxXQUFXLFlBQ1gsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLE9BQU8sS0FBSyxJQUN6RCxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sT0FBTyxLQUFLO0FBQUEsSUFDL0Q7QUFDQSxRQUFJLGFBQWEsUUFBVztBQUMxQixVQUFJLFVBQVU7QUFDWjtBQUFBLE1BQ0Y7QUFDQSxlQUFTO0FBQ1Q7QUFBQSxJQUNGO0FBRUEsUUFBSSxNQUFNO0FBQ1IsVUFBSSxDQUFDLGtCQUFVLE9BQU8sU0FBU0EsV0FBVSxVQUFVO0FBQzdDLFlBQUksQ0FBQyxpQkFBUyxNQUFNLFFBQVEsTUFDdkIsYUFBYUEsYUFBWSxVQUFVLFVBQVVBLFdBQVUsU0FBUyxZQUFZLEtBQUssSUFBSTtBQUN4RixpQkFBTyxLQUFLLEtBQUssUUFBUTtBQUFBLFFBQzNCO0FBQUEsTUFDRixDQUFDLEdBQUc7QUFDTixpQkFBUztBQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0YsV0FBVyxFQUNMLGFBQWEsWUFDWCxVQUFVLFVBQVUsVUFBVSxTQUFTLFlBQVksS0FBSyxJQUN6RDtBQUNMLGVBQVM7QUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsUUFBTSxRQUFRLEVBQUUsS0FBSztBQUNyQixRQUFNLFFBQVEsRUFBRSxLQUFLO0FBQ3JCLFNBQU87QUFDVDtBQWpGQSxJQUtJLHNCQUNBLHdCQTZFRztBQW5GUDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBSSx1QkFBdUI7QUFBM0IsSUFDSSx5QkFBeUI7QUE2RTdCLElBQU8sc0JBQVE7QUFBQTtBQUFBOzs7QUNuRmYsSUFHSSxZQUVHO0FBTFA7QUFBQTtBQUFBO0FBR0EsSUFBSSxhQUFhLGFBQUs7QUFFdEIsSUFBTyxxQkFBUTtBQUFBO0FBQUE7OztBQ0VmLFNBQVMsV0FBVyxLQUFLO0FBQ3ZCLE1BQUksUUFBUSxJQUNSLFNBQVMsTUFBTSxJQUFJLElBQUk7QUFFM0IsTUFBSSxRQUFRLFNBQVMsT0FBTyxLQUFLO0FBQy9CLFdBQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLEtBQUs7QUFBQSxFQUMvQixDQUFDO0FBQ0QsU0FBTztBQUNUO0FBZkEsSUFpQk87QUFqQlA7QUFBQTtBQWlCQSxJQUFPLHFCQUFRO0FBQUE7QUFBQTs7O0FDVmYsU0FBUyxXQUFXLEtBQUs7QUFDdkIsTUFBSSxRQUFRLElBQ1IsU0FBUyxNQUFNLElBQUksSUFBSTtBQUUzQixNQUFJLFFBQVEsU0FBUyxPQUFPO0FBQzFCLFdBQU8sRUFBRSxLQUFLLElBQUk7QUFBQSxFQUNwQixDQUFDO0FBQ0QsU0FBTztBQUNUO0FBZkEsSUFpQk87QUFqQlA7QUFBQTtBQWlCQSxJQUFPLHFCQUFRO0FBQUE7QUFBQTs7O0FDNkJmLFNBQVMsV0FBVyxRQUFRLE9BQU8sS0FBSyxTQUFTLFlBQVksV0FBVyxPQUFPO0FBQzdFLFVBQVEsS0FBSztBQUFBLElBQ1gsS0FBSztBQUNILFVBQUssT0FBTyxjQUFjLE1BQU0sY0FDM0IsT0FBTyxjQUFjLE1BQU0sWUFBYTtBQUMzQyxlQUFPO0FBQUEsTUFDVDtBQUNBLGVBQVMsT0FBTztBQUNoQixjQUFRLE1BQU07QUFBQSxJQUVoQixLQUFLO0FBQ0gsVUFBSyxPQUFPLGNBQWMsTUFBTSxjQUM1QixDQUFDLFVBQVUsSUFBSSxtQkFBVyxNQUFNLEdBQUcsSUFBSSxtQkFBVyxLQUFLLENBQUMsR0FBRztBQUM3RCxlQUFPO0FBQUEsTUFDVDtBQUNBLGFBQU87QUFBQSxJQUVULEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFHSCxhQUFPLFdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSztBQUFBLElBRTNCLEtBQUs7QUFDSCxhQUFPLE9BQU8sUUFBUSxNQUFNLFFBQVEsT0FBTyxXQUFXLE1BQU07QUFBQSxJQUU5RCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBSUgsYUFBTyxVQUFXLFFBQVE7QUFBQSxJQUU1QixLQUFLO0FBQ0gsVUFBSSxVQUFVO0FBQUEsSUFFaEIsS0FBSztBQUNILFVBQUksWUFBWSxVQUFVQztBQUMxQixrQkFBWSxVQUFVO0FBRXRCLFVBQUksT0FBTyxRQUFRLE1BQU0sUUFBUSxDQUFDLFdBQVc7QUFDM0MsZUFBTztBQUFBLE1BQ1Q7QUFFQSxVQUFJLFVBQVUsTUFBTSxJQUFJLE1BQU07QUFDOUIsVUFBSSxTQUFTO0FBQ1gsZUFBTyxXQUFXO0FBQUEsTUFDcEI7QUFDQSxpQkFBV0M7QUFHWCxZQUFNLElBQUksUUFBUSxLQUFLO0FBQ3ZCLFVBQUksU0FBUyxvQkFBWSxRQUFRLE1BQU0sR0FBRyxRQUFRLEtBQUssR0FBRyxTQUFTLFlBQVksV0FBVyxLQUFLO0FBQy9GLFlBQU0sUUFBUSxFQUFFLE1BQU07QUFDdEIsYUFBTztBQUFBLElBRVQsS0FBSztBQUNILFVBQUksZUFBZTtBQUNqQixlQUFPLGNBQWMsS0FBSyxNQUFNLEtBQUssY0FBYyxLQUFLLEtBQUs7QUFBQSxNQUMvRDtBQUFBLEVBQ0o7QUFDQSxTQUFPO0FBQ1Q7QUE3R0EsSUFRSUQsdUJBQ0FDLHlCQUdBLFNBQ0EsU0FDQSxVQUNBLFFBQ0EsV0FDQSxXQUNBLFFBQ0EsV0FDQSxXQUVBLGdCQUNBLGFBR0EsYUFDQSxlQW9GRztBQS9HUDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBSUQsd0JBQXVCO0FBQTNCLElBQ0lDLDBCQUF5QjtBQUc3QixJQUFJLFVBQVU7QUFBZCxJQUNJLFVBQVU7QUFEZCxJQUVJLFdBQVc7QUFGZixJQUdJLFNBQVM7QUFIYixJQUlJLFlBQVk7QUFKaEIsSUFLSSxZQUFZO0FBTGhCLElBTUksU0FBUztBQU5iLElBT0ksWUFBWTtBQVBoQixJQVFJLFlBQVk7QUFFaEIsSUFBSSxpQkFBaUI7QUFBckIsSUFDSSxjQUFjO0FBR2xCLElBQUksY0FBYyxpQkFBUyxlQUFPLFlBQVk7QUFBOUMsSUFDSSxnQkFBZ0IsY0FBYyxZQUFZLFVBQVU7QUFvRnhELElBQU8scUJBQVE7QUFBQTtBQUFBOzs7QUN2R2YsU0FBUyxVQUFVLE9BQU8sUUFBUTtBQUNoQyxNQUFJLFFBQVEsSUFDUixTQUFTLE9BQU8sUUFDaEIsU0FBUyxNQUFNO0FBRW5CLFNBQU8sRUFBRSxRQUFRLFFBQVE7QUFDdkIsVUFBTSxTQUFTLEtBQUssSUFBSSxPQUFPLEtBQUs7QUFBQSxFQUN0QztBQUNBLFNBQU87QUFDVDtBQWpCQSxJQW1CTztBQW5CUDtBQUFBO0FBbUJBLElBQU8sb0JBQVE7QUFBQTtBQUFBOzs7QUNuQmYsSUF1QkksU0FFRztBQXpCUDtBQUFBO0FBdUJBLElBQUksVUFBVSxNQUFNO0FBRXBCLElBQU8sa0JBQVE7QUFBQTtBQUFBOzs7QUNYZixTQUFTLGVBQWUsUUFBUSxVQUFVLGFBQWE7QUFDckQsTUFBSSxTQUFTLFNBQVMsTUFBTTtBQUM1QixTQUFPLGdCQUFRLE1BQU0sSUFBSSxTQUFTLGtCQUFVLFFBQVEsWUFBWSxNQUFNLENBQUM7QUFDekU7QUFqQkEsSUFtQk87QUFuQlA7QUFBQTtBQUFBO0FBQ0E7QUFrQkEsSUFBTyx5QkFBUTtBQUFBO0FBQUE7OztBQ1ZmLFNBQVMsWUFBWSxPQUFPLFdBQVc7QUFDckMsTUFBSSxRQUFRLElBQ1IsU0FBUyxTQUFTLE9BQU8sSUFBSSxNQUFNLFFBQ25DLFdBQVcsR0FDWCxTQUFTLENBQUM7QUFFZCxTQUFPLEVBQUUsUUFBUSxRQUFRO0FBQ3ZCLFFBQUksUUFBUSxNQUFNLEtBQUs7QUFDdkIsUUFBSSxVQUFVLE9BQU8sT0FBTyxLQUFLLEdBQUc7QUFDbEMsYUFBTyxVQUFVLElBQUk7QUFBQSxJQUN2QjtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUF0QkEsSUF3Qk87QUF4QlA7QUFBQTtBQXdCQSxJQUFPLHNCQUFRO0FBQUE7QUFBQTs7O0FDTmYsU0FBUyxZQUFZO0FBQ25CLFNBQU8sQ0FBQztBQUNWO0FBcEJBLElBc0JPO0FBdEJQO0FBQUE7QUFzQkEsSUFBTyxvQkFBUTtBQUFBO0FBQUE7OztBQ3RCZixJQUlJLGFBR0Esc0JBR0Esa0JBU0EsWUFVRztBQTdCUDtBQUFBO0FBQUE7QUFDQTtBQUdBLElBQUksY0FBYyxPQUFPO0FBR3pCLElBQUksdUJBQXVCLFlBQVk7QUFHdkMsSUFBSSxtQkFBbUIsT0FBTztBQVM5QixJQUFJLGFBQWEsQ0FBQyxtQkFBbUIsb0JBQVksU0FBUyxRQUFRO0FBQ2hFLFVBQUksVUFBVSxNQUFNO0FBQ2xCLGVBQU8sQ0FBQztBQUFBLE1BQ1Y7QUFDQSxlQUFTLE9BQU8sTUFBTTtBQUN0QixhQUFPLG9CQUFZLGlCQUFpQixNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQzVELGVBQU8scUJBQXFCLEtBQUssUUFBUSxNQUFNO0FBQUEsTUFDakQsQ0FBQztBQUFBLElBQ0g7QUFFQSxJQUFPLHFCQUFRO0FBQUE7QUFBQTs7O0FDcEJmLFNBQVMsVUFBVSxHQUFHLFVBQVU7QUFDOUIsTUFBSSxRQUFRLElBQ1IsU0FBUyxNQUFNLENBQUM7QUFFcEIsU0FBTyxFQUFFLFFBQVEsR0FBRztBQUNsQixXQUFPLEtBQUssSUFBSSxTQUFTLEtBQUs7QUFBQSxFQUNoQztBQUNBLFNBQU87QUFDVDtBQWpCQSxJQW1CTztBQW5CUDtBQUFBO0FBbUJBLElBQU8sb0JBQVE7QUFBQTtBQUFBOzs7QUNLZixTQUFTLGFBQWEsT0FBTztBQUMzQixTQUFPLFNBQVMsUUFBUSxPQUFPLFNBQVM7QUFDMUM7QUExQkEsSUE0Qk87QUE1QlA7QUFBQTtBQTRCQSxJQUFPLHVCQUFRO0FBQUE7QUFBQTs7O0FDZmYsU0FBUyxnQkFBZ0IsT0FBTztBQUM5QixTQUFPLHFCQUFhLEtBQUssS0FBSyxtQkFBVyxLQUFLLEtBQUs7QUFDckQ7QUFmQSxJQUlJLFNBYUc7QUFqQlA7QUFBQTtBQUFBO0FBQ0E7QUFHQSxJQUFJLFVBQVU7QUFhZCxJQUFPLDBCQUFRO0FBQUE7QUFBQTs7O0FDakJmLElBSUlDLGNBR0EsZ0JBR0FDLHVCQW9CQSxhQUtHO0FBbkNQO0FBQUE7QUFBQTtBQUNBO0FBR0EsSUFBSUQsZUFBYyxPQUFPO0FBR3pCLElBQUksaUJBQWlCQSxhQUFZO0FBR2pDLElBQUlDLHdCQUF1QkQsYUFBWTtBQW9CdkMsSUFBSSxjQUFjLHdCQUFnQiw0QkFBVztBQUFFLGFBQU87QUFBQSxJQUFXLEdBQUUsQ0FBQyxJQUFJLDBCQUFrQixTQUFTLE9BQU87QUFDeEcsYUFBTyxxQkFBYSxLQUFLLEtBQUssZUFBZSxLQUFLLE9BQU8sUUFBUSxLQUMvRCxDQUFDQyxzQkFBcUIsS0FBSyxPQUFPLFFBQVE7QUFBQSxJQUM5QztBQUVBLElBQU8sc0JBQVE7QUFBQTtBQUFBOzs7QUN0QmYsU0FBUyxZQUFZO0FBQ25CLFNBQU87QUFDVDtBQWZBLElBaUJPO0FBakJQO0FBQUE7QUFpQkEsSUFBTyxvQkFBUTtBQUFBO0FBQUE7OztBQ2pCZixJQUlJLGFBR0EsWUFHQSxlQUdBLFFBR0EsZ0JBbUJBLFVBRUc7QUFyQ1A7QUFBQTtBQUFBO0FBQ0E7QUFHQSxJQUFJLGNBQWMsT0FBTyxXQUFXLFlBQVksV0FBVyxDQUFDLFFBQVEsWUFBWTtBQUdoRixJQUFJLGFBQWEsZUFBZSxPQUFPLFVBQVUsWUFBWSxVQUFVLENBQUMsT0FBTyxZQUFZO0FBRzNGLElBQUksZ0JBQWdCLGNBQWMsV0FBVyxZQUFZO0FBR3pELElBQUksU0FBUyxnQkFBZ0IsYUFBSyxTQUFTO0FBRzNDLElBQUksaUJBQWlCLFNBQVMsT0FBTyxXQUFXO0FBbUJoRCxJQUFJLFdBQVcsa0JBQWtCO0FBRWpDLElBQU8sbUJBQVE7QUFBQTtBQUFBOzs7QUN2QmYsU0FBUyxRQUFRLE9BQU8sUUFBUTtBQUM5QixNQUFJLE9BQU8sT0FBTztBQUNsQixXQUFTLFVBQVUsT0FBTyxtQkFBbUI7QUFFN0MsU0FBTyxDQUFDLENBQUMsV0FDTixRQUFRLFlBQ04sUUFBUSxZQUFZLFNBQVMsS0FBSyxLQUFLLE9BQ3JDLFFBQVEsTUFBTSxRQUFRLEtBQUssS0FBSyxRQUFRO0FBQ2pEO0FBdEJBLElBQ0ksa0JBR0EsVUFvQkc7QUF4QlA7QUFBQTtBQUNBLElBQUksbUJBQW1CO0FBR3ZCLElBQUksV0FBVztBQW9CZixJQUFPLGtCQUFRO0FBQUE7QUFBQTs7O0FDS2YsU0FBUyxTQUFTLE9BQU87QUFDdkIsU0FBTyxPQUFPLFNBQVMsWUFDckIsUUFBUSxNQUFNLFFBQVEsS0FBSyxLQUFLLFNBQVNDO0FBQzdDO0FBaENBLElBQ0lBLG1CQWlDRztBQWxDUDtBQUFBO0FBQ0EsSUFBSUEsb0JBQW1CO0FBaUN2QixJQUFPLG1CQUFRO0FBQUE7QUFBQTs7O0FDb0JmLFNBQVMsaUJBQWlCLE9BQU87QUFDL0IsU0FBTyxxQkFBYSxLQUFLLEtBQ3ZCLGlCQUFTLE1BQU0sTUFBTSxLQUFLLENBQUMsQ0FBQyxlQUFlLG1CQUFXLEtBQUssQ0FBQztBQUNoRTtBQXpEQSxJQUtJQyxVQUNBLFVBQ0FDLFVBQ0FDLFVBQ0FDLFdBQ0EsU0FDQUMsU0FDQUMsWUFDQSxXQUNBQyxZQUNBQyxTQUNBQyxZQUNBLFlBRUFDLGlCQUNBQyxjQUNBLFlBQ0EsWUFDQSxTQUNBLFVBQ0EsVUFDQSxVQUNBLGlCQUNBLFdBQ0EsV0FHQSxnQkEyQkc7QUEzRFA7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQUlWLFdBQVU7QUFBZCxJQUNJLFdBQVc7QUFEZixJQUVJQyxXQUFVO0FBRmQsSUFHSUMsV0FBVTtBQUhkLElBSUlDLFlBQVc7QUFKZixJQUtJLFVBQVU7QUFMZCxJQU1JQyxVQUFTO0FBTmIsSUFPSUMsYUFBWTtBQVBoQixJQVFJLFlBQVk7QUFSaEIsSUFTSUMsYUFBWTtBQVRoQixJQVVJQyxVQUFTO0FBVmIsSUFXSUMsYUFBWTtBQVhoQixJQVlJLGFBQWE7QUFFakIsSUFBSUMsa0JBQWlCO0FBQXJCLElBQ0lDLGVBQWM7QUFEbEIsSUFFSSxhQUFhO0FBRmpCLElBR0ksYUFBYTtBQUhqQixJQUlJLFVBQVU7QUFKZCxJQUtJLFdBQVc7QUFMZixJQU1JLFdBQVc7QUFOZixJQU9JLFdBQVc7QUFQZixJQVFJLGtCQUFrQjtBQVJ0QixJQVNJLFlBQVk7QUFUaEIsSUFVSSxZQUFZO0FBR2hCLElBQUksaUJBQWlCLENBQUM7QUFDdEIsbUJBQWUsVUFBVSxJQUFJLGVBQWUsVUFBVSxJQUN0RCxlQUFlLE9BQU8sSUFBSSxlQUFlLFFBQVEsSUFDakQsZUFBZSxRQUFRLElBQUksZUFBZSxRQUFRLElBQ2xELGVBQWUsZUFBZSxJQUFJLGVBQWUsU0FBUyxJQUMxRCxlQUFlLFNBQVMsSUFBSTtBQUM1QixtQkFBZVYsUUFBTyxJQUFJLGVBQWUsUUFBUSxJQUNqRCxlQUFlUyxlQUFjLElBQUksZUFBZVIsUUFBTyxJQUN2RCxlQUFlUyxZQUFXLElBQUksZUFBZVIsUUFBTyxJQUNwRCxlQUFlQyxTQUFRLElBQUksZUFBZSxPQUFPLElBQ2pELGVBQWVDLE9BQU0sSUFBSSxlQUFlQyxVQUFTLElBQ2pELGVBQWUsU0FBUyxJQUFJLGVBQWVDLFVBQVMsSUFDcEQsZUFBZUMsT0FBTSxJQUFJLGVBQWVDLFVBQVMsSUFDakQsZUFBZSxVQUFVLElBQUk7QUFjN0IsSUFBTywyQkFBUTtBQUFBO0FBQUE7OztBQ3BEZixTQUFTLFVBQVUsTUFBTTtBQUN2QixTQUFPLFNBQVMsT0FBTztBQUNyQixXQUFPLEtBQUssS0FBSztBQUFBLEVBQ25CO0FBQ0Y7QUFYQSxJQWFPO0FBYlA7QUFBQTtBQWFBLElBQU8sb0JBQVE7QUFBQTtBQUFBOzs7QUNiZixJQUdJRyxjQUdBQyxhQUdBQyxnQkFHQSxhQUdBLFVBY0c7QUE3QlA7QUFBQTtBQUFBO0FBR0EsSUFBSUYsZUFBYyxPQUFPLFdBQVcsWUFBWSxXQUFXLENBQUMsUUFBUSxZQUFZO0FBR2hGLElBQUlDLGNBQWFELGdCQUFlLE9BQU8sVUFBVSxZQUFZLFVBQVUsQ0FBQyxPQUFPLFlBQVk7QUFHM0YsSUFBSUUsaUJBQWdCRCxlQUFjQSxZQUFXLFlBQVlEO0FBR3pELElBQUksY0FBY0Usa0JBQWlCLG1CQUFXO0FBRzlDLElBQUksWUFBWSxXQUFXO0FBQ3pCLFVBQUk7QUFFRixZQUFJLFFBQVFELGVBQWNBLFlBQVcsV0FBV0EsWUFBVyxRQUFRLE1BQU0sRUFBRTtBQUUzRSxZQUFJLE9BQU87QUFDVCxpQkFBTztBQUFBLFFBQ1Q7QUFHQSxlQUFPLGVBQWUsWUFBWSxXQUFXLFlBQVksUUFBUSxNQUFNO0FBQUEsTUFDekUsU0FBUyxHQUFHO0FBQUEsTUFBQztBQUFBLElBQ2YsR0FBRTtBQUVGLElBQU8sbUJBQVE7QUFBQTtBQUFBOzs7QUM3QmYsSUFLSSxrQkFtQkEsY0FFRztBQTFCUDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBSSxtQkFBbUIsb0JBQVksaUJBQVM7QUFtQjVDLElBQUksZUFBZSxtQkFBbUIsa0JBQVUsZ0JBQWdCLElBQUk7QUFFcEUsSUFBTyx1QkFBUTtBQUFBO0FBQUE7OztBQ0xmLFNBQVMsY0FBYyxPQUFPLFdBQVc7QUFDdkMsTUFBSSxRQUFRLGdCQUFRLEtBQUssR0FDckIsUUFBUSxDQUFDLFNBQVMsb0JBQVksS0FBSyxHQUNuQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsaUJBQVMsS0FBSyxHQUMzQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLHFCQUFhLEtBQUssR0FDMUQsY0FBYyxTQUFTLFNBQVMsVUFBVSxRQUMxQyxTQUFTLGNBQWMsa0JBQVUsTUFBTSxRQUFRLE1BQU0sSUFBSSxDQUFDLEdBQzFELFNBQVMsT0FBTztBQUVwQixXQUFTLE9BQU8sT0FBTztBQUNyQixTQUFLLGFBQWFFLGdCQUFlLEtBQUssT0FBTyxHQUFHLE1BQzVDLEVBQUU7QUFBQSxLQUVDLE9BQU87QUFBQSxJQUVOLFdBQVcsT0FBTyxZQUFZLE9BQU87QUFBQSxJQUVyQyxXQUFXLE9BQU8sWUFBWSxPQUFPLGdCQUFnQixPQUFPO0FBQUEsSUFFN0QsZ0JBQVEsS0FBSyxNQUFNLEtBQ2xCO0FBQ04sYUFBTyxLQUFLLEdBQUc7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUE5Q0EsSUFRSUMsY0FHQUQsaUJBcUNHO0FBaERQO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJQyxlQUFjLE9BQU87QUFHekIsSUFBSUQsa0JBQWlCQyxhQUFZO0FBcUNqQyxJQUFPLHdCQUFRO0FBQUE7QUFBQTs7O0FDdENmLFNBQVMsWUFBWSxPQUFPO0FBQzFCLE1BQUksT0FBTyxTQUFTLE1BQU0sYUFDdEIsUUFBUyxPQUFPLFFBQVEsY0FBYyxLQUFLLGFBQWNDO0FBRTdELFNBQU8sVUFBVTtBQUNuQjtBQWZBLElBQ0lBLGNBZ0JHO0FBakJQO0FBQUE7QUFDQSxJQUFJQSxlQUFjLE9BQU87QUFnQnpCLElBQU8sc0JBQVE7QUFBQTtBQUFBOzs7QUNUZixTQUFTLFFBQVEsTUFBTSxXQUFXO0FBQ2hDLFNBQU8sU0FBUyxLQUFLO0FBQ25CLFdBQU8sS0FBSyxVQUFVLEdBQUcsQ0FBQztBQUFBLEVBQzVCO0FBQ0Y7QUFaQSxJQWNPO0FBZFA7QUFBQTtBQWNBLElBQU8sa0JBQVE7QUFBQTtBQUFBOzs7QUNkZixJQUdJLFlBRUc7QUFMUDtBQUFBO0FBQUE7QUFHQSxJQUFJLGFBQWEsZ0JBQVEsT0FBTyxNQUFNLE1BQU07QUFFNUMsSUFBTyxxQkFBUTtBQUFBO0FBQUE7OztBQ1dmLFNBQVMsU0FBUyxRQUFRO0FBQ3hCLE1BQUksQ0FBQyxvQkFBWSxNQUFNLEdBQUc7QUFDeEIsV0FBTyxtQkFBVyxNQUFNO0FBQUEsRUFDMUI7QUFDQSxNQUFJLFNBQVMsQ0FBQztBQUNkLFdBQVMsT0FBTyxPQUFPLE1BQU0sR0FBRztBQUM5QixRQUFJQyxnQkFBZSxLQUFLLFFBQVEsR0FBRyxLQUFLLE9BQU8sZUFBZTtBQUM1RCxhQUFPLEtBQUssR0FBRztBQUFBLElBQ2pCO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDtBQTNCQSxJQUlJQyxjQUdBRCxpQkFzQkc7QUE3QlA7QUFBQTtBQUFBO0FBQ0E7QUFHQSxJQUFJQyxlQUFjLE9BQU87QUFHekIsSUFBSUQsa0JBQWlCQyxhQUFZO0FBc0JqQyxJQUFPLG1CQUFRO0FBQUE7QUFBQTs7O0FDRGYsU0FBUyxZQUFZLE9BQU87QUFDMUIsU0FBTyxTQUFTLFFBQVEsaUJBQVMsTUFBTSxNQUFNLEtBQUssQ0FBQyxtQkFBVyxLQUFLO0FBQ3JFO0FBOUJBLElBZ0NPO0FBaENQO0FBQUE7QUFBQTtBQUNBO0FBK0JBLElBQU8sc0JBQVE7QUFBQTtBQUFBOzs7QUNBZixTQUFTLEtBQUssUUFBUTtBQUNwQixTQUFPLG9CQUFZLE1BQU0sSUFBSSxzQkFBYyxNQUFNLElBQUksaUJBQVMsTUFBTTtBQUN0RTtBQWxDQSxJQW9DTztBQXBDUDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBa0NBLElBQU8sZUFBUTtBQUFBO0FBQUE7OztBQ3pCZixTQUFTLFdBQVcsUUFBUTtBQUMxQixTQUFPLHVCQUFlLFFBQVEsY0FBTSxrQkFBVTtBQUNoRDtBQWJBLElBZU87QUFmUDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBYUEsSUFBTyxxQkFBUTtBQUFBO0FBQUE7OztBQ1NmLFNBQVMsYUFBYSxRQUFRLE9BQU8sU0FBUyxZQUFZLFdBQVcsT0FBTztBQUMxRSxNQUFJLFlBQVksVUFBVUMsdUJBQ3RCLFdBQVcsbUJBQVcsTUFBTSxHQUM1QixZQUFZLFNBQVMsUUFDckIsV0FBVyxtQkFBVyxLQUFLLEdBQzNCLFlBQVksU0FBUztBQUV6QixNQUFJLGFBQWEsYUFBYSxDQUFDLFdBQVc7QUFDeEMsV0FBTztBQUFBLEVBQ1Q7QUFDQSxNQUFJLFFBQVE7QUFDWixTQUFPLFNBQVM7QUFDZCxRQUFJLE1BQU0sU0FBUyxLQUFLO0FBQ3hCLFFBQUksRUFBRSxZQUFZLE9BQU8sUUFBUUMsZ0JBQWUsS0FBSyxPQUFPLEdBQUcsSUFBSTtBQUNqRSxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFFQSxNQUFJLGFBQWEsTUFBTSxJQUFJLE1BQU07QUFDakMsTUFBSSxhQUFhLE1BQU0sSUFBSSxLQUFLO0FBQ2hDLE1BQUksY0FBYyxZQUFZO0FBQzVCLFdBQU8sY0FBYyxTQUFTLGNBQWM7QUFBQSxFQUM5QztBQUNBLE1BQUksU0FBUztBQUNiLFFBQU0sSUFBSSxRQUFRLEtBQUs7QUFDdkIsUUFBTSxJQUFJLE9BQU8sTUFBTTtBQUV2QixNQUFJLFdBQVc7QUFDZixTQUFPLEVBQUUsUUFBUSxXQUFXO0FBQzFCLFVBQU0sU0FBUyxLQUFLO0FBQ3BCLFFBQUksV0FBVyxPQUFPLEdBQUcsR0FDckIsV0FBVyxNQUFNLEdBQUc7QUFFeEIsUUFBSSxZQUFZO0FBQ2QsVUFBSSxXQUFXLFlBQ1gsV0FBVyxVQUFVLFVBQVUsS0FBSyxPQUFPLFFBQVEsS0FBSyxJQUN4RCxXQUFXLFVBQVUsVUFBVSxLQUFLLFFBQVEsT0FBTyxLQUFLO0FBQUEsSUFDOUQ7QUFFQSxRQUFJLEVBQUUsYUFBYSxTQUNWLGFBQWEsWUFBWSxVQUFVLFVBQVUsVUFBVSxTQUFTLFlBQVksS0FBSyxJQUNsRixXQUNEO0FBQ0wsZUFBUztBQUNUO0FBQUEsSUFDRjtBQUNBLGlCQUFhLFdBQVcsT0FBTztBQUFBLEVBQ2pDO0FBQ0EsTUFBSSxVQUFVLENBQUMsVUFBVTtBQUN2QixRQUFJLFVBQVUsT0FBTyxhQUNqQixVQUFVLE1BQU07QUFHcEIsUUFBSSxXQUFXLFlBQ1YsaUJBQWlCLFVBQVUsaUJBQWlCLFVBQzdDLEVBQUUsT0FBTyxXQUFXLGNBQWMsbUJBQW1CLFdBQ25ELE9BQU8sV0FBVyxjQUFjLG1CQUFtQixVQUFVO0FBQ2pFLGVBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUNBLFFBQU0sUUFBUSxFQUFFLE1BQU07QUFDdEIsUUFBTSxRQUFRLEVBQUUsS0FBSztBQUNyQixTQUFPO0FBQ1Q7QUF2RkEsSUFHSUQsdUJBR0FFLGNBR0FELGlCQWdGRztBQXpGUDtBQUFBO0FBQUE7QUFHQSxJQUFJRCx3QkFBdUI7QUFHM0IsSUFBSUUsZUFBYyxPQUFPO0FBR3pCLElBQUlELGtCQUFpQkMsYUFBWTtBQWdGakMsSUFBTyx1QkFBUTtBQUFBO0FBQUE7OztBQ3pGZixJQUlJLFVBRUc7QUFOUDtBQUFBO0FBQUE7QUFDQTtBQUdBLElBQUksV0FBVyxrQkFBVSxjQUFNLFVBQVU7QUFFekMsSUFBTyxtQkFBUTtBQUFBO0FBQUE7OztBQ05mLElBSUlDLFVBRUc7QUFOUDtBQUFBO0FBQUE7QUFDQTtBQUdBLElBQUlBLFdBQVUsa0JBQVUsY0FBTSxTQUFTO0FBRXZDLElBQU8sa0JBQVFBO0FBQUE7QUFBQTs7O0FDTmYsSUFJSUMsTUFFRztBQU5QO0FBQUE7QUFBQTtBQUNBO0FBR0EsSUFBSUEsT0FBTSxrQkFBVSxjQUFNLEtBQUs7QUFFL0IsSUFBTyxjQUFRQTtBQUFBO0FBQUE7OztBQ05mLElBSUksU0FFRztBQU5QO0FBQUE7QUFBQTtBQUNBO0FBR0EsSUFBSSxVQUFVLGtCQUFVLGNBQU0sU0FBUztBQUV2QyxJQUFPLGtCQUFRO0FBQUE7QUFBQTs7O0FDTmYsSUFTSUMsU0FDQUMsWUFDQSxZQUNBQyxTQUNBQyxhQUVBQyxjQUdBLG9CQUNBLGVBQ0EsbUJBQ0EsZUFDQSxtQkFTQSxRQTBCRztBQXpEUDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJSixVQUFTO0FBQWIsSUFDSUMsYUFBWTtBQURoQixJQUVJLGFBQWE7QUFGakIsSUFHSUMsVUFBUztBQUhiLElBSUlDLGNBQWE7QUFFakIsSUFBSUMsZUFBYztBQUdsQixJQUFJLHFCQUFxQixpQkFBUyxnQkFBUTtBQUExQyxJQUNJLGdCQUFnQixpQkFBUyxXQUFHO0FBRGhDLElBRUksb0JBQW9CLGlCQUFTLGVBQU87QUFGeEMsSUFHSSxnQkFBZ0IsaUJBQVMsV0FBRztBQUhoQyxJQUlJLG9CQUFvQixpQkFBUyxlQUFPO0FBU3hDLElBQUksU0FBUztBQUdiLFFBQUssb0JBQVksT0FBTyxJQUFJLGlCQUFTLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLQSxnQkFDeEQsZUFBTyxPQUFPLElBQUksYUFBRyxLQUFLSixXQUMxQixtQkFBVyxPQUFPLGdCQUFRLFFBQVEsQ0FBQyxLQUFLLGNBQ3hDLGVBQU8sT0FBTyxJQUFJLGFBQUcsS0FBS0UsV0FDMUIsbUJBQVcsT0FBTyxJQUFJLGlCQUFPLEtBQUtDLGFBQWE7QUFDbEQsZUFBUyxTQUFTLE9BQU87QUFDdkIsWUFBSSxTQUFTLG1CQUFXLEtBQUssR0FDekIsT0FBTyxVQUFVRixhQUFZLE1BQU0sY0FBYyxRQUNqRCxhQUFhLE9BQU8saUJBQVMsSUFBSSxJQUFJO0FBRXpDLFlBQUksWUFBWTtBQUNkLGtCQUFRLFlBQVk7QUFBQSxZQUNsQixLQUFLO0FBQW9CLHFCQUFPRztBQUFBLFlBQ2hDLEtBQUs7QUFBZSxxQkFBT0o7QUFBQSxZQUMzQixLQUFLO0FBQW1CLHFCQUFPO0FBQUEsWUFDL0IsS0FBSztBQUFlLHFCQUFPRTtBQUFBLFlBQzNCLEtBQUs7QUFBbUIscUJBQU9DO0FBQUEsVUFDakM7QUFBQSxRQUNGO0FBQ0EsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBRUEsSUFBTyxpQkFBUTtBQUFBO0FBQUE7OztBQ3BCZixTQUFTLGdCQUFnQixRQUFRLE9BQU8sU0FBUyxZQUFZLFdBQVcsT0FBTztBQUM3RSxNQUFJLFdBQVcsZ0JBQVEsTUFBTSxHQUN6QixXQUFXLGdCQUFRLEtBQUssR0FDeEIsU0FBUyxXQUFXRSxZQUFXLGVBQU8sTUFBTSxHQUM1QyxTQUFTLFdBQVdBLFlBQVcsZUFBTyxLQUFLO0FBRS9DLFdBQVMsVUFBVUMsV0FBVUMsYUFBWTtBQUN6QyxXQUFTLFVBQVVELFdBQVVDLGFBQVk7QUFFekMsTUFBSSxXQUFXLFVBQVVBLFlBQ3JCLFdBQVcsVUFBVUEsWUFDckIsWUFBWSxVQUFVO0FBRTFCLE1BQUksYUFBYSxpQkFBUyxNQUFNLEdBQUc7QUFDakMsUUFBSSxDQUFDLGlCQUFTLEtBQUssR0FBRztBQUNwQixhQUFPO0FBQUEsSUFDVDtBQUNBLGVBQVc7QUFDWCxlQUFXO0FBQUEsRUFDYjtBQUNBLE1BQUksYUFBYSxDQUFDLFVBQVU7QUFDMUIsY0FBVSxRQUFRLElBQUk7QUFDdEIsV0FBUSxZQUFZLHFCQUFhLE1BQU0sSUFDbkMsb0JBQVksUUFBUSxPQUFPLFNBQVMsWUFBWSxXQUFXLEtBQUssSUFDaEUsbUJBQVcsUUFBUSxPQUFPLFFBQVEsU0FBUyxZQUFZLFdBQVcsS0FBSztBQUFBLEVBQzdFO0FBQ0EsTUFBSSxFQUFFLFVBQVVDLHdCQUF1QjtBQUNyQyxRQUFJLGVBQWUsWUFBWUMsZ0JBQWUsS0FBSyxRQUFRLGFBQWEsR0FDcEUsZUFBZSxZQUFZQSxnQkFBZSxLQUFLLE9BQU8sYUFBYTtBQUV2RSxRQUFJLGdCQUFnQixjQUFjO0FBQ2hDLFVBQUksZUFBZSxlQUFlLE9BQU8sTUFBTSxJQUFJLFFBQy9DLGVBQWUsZUFBZSxNQUFNLE1BQU0sSUFBSTtBQUVsRCxnQkFBVSxRQUFRLElBQUk7QUFDdEIsYUFBTyxVQUFVLGNBQWMsY0FBYyxTQUFTLFlBQVksS0FBSztBQUFBLElBQ3pFO0FBQUEsRUFDRjtBQUNBLE1BQUksQ0FBQyxXQUFXO0FBQ2QsV0FBTztBQUFBLEVBQ1Q7QUFDQSxZQUFVLFFBQVEsSUFBSTtBQUN0QixTQUFPLHFCQUFhLFFBQVEsT0FBTyxTQUFTLFlBQVksV0FBVyxLQUFLO0FBQzFFO0FBaEZBLElBVUlELHVCQUdBRixVQUNBRCxXQUNBRSxZQUdBRyxjQUdBRCxpQkE2REc7QUFsRlA7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJRCx3QkFBdUI7QUFHM0IsSUFBSUYsV0FBVTtBQUFkLElBQ0lELFlBQVc7QUFEZixJQUVJRSxhQUFZO0FBR2hCLElBQUlHLGVBQWMsT0FBTztBQUd6QixJQUFJRCxrQkFBaUJDLGFBQVk7QUE2RGpDLElBQU8sMEJBQVE7QUFBQTtBQUFBOzs7QUNqRWYsU0FBUyxZQUFZLE9BQU8sT0FBTyxTQUFTLFlBQVksT0FBTztBQUM3RCxNQUFJLFVBQVUsT0FBTztBQUNuQixXQUFPO0FBQUEsRUFDVDtBQUNBLE1BQUksU0FBUyxRQUFRLFNBQVMsUUFBUyxDQUFDLHFCQUFhLEtBQUssS0FBSyxDQUFDLHFCQUFhLEtBQUssR0FBSTtBQUNwRixXQUFPLFVBQVUsU0FBUyxVQUFVO0FBQUEsRUFDdEM7QUFDQSxTQUFPLHdCQUFnQixPQUFPLE9BQU8sU0FBUyxZQUFZLGFBQWEsS0FBSztBQUM5RTtBQXpCQSxJQTJCTztBQTNCUDtBQUFBO0FBQUE7QUFDQTtBQTBCQSxJQUFPLHNCQUFRO0FBQUE7QUFBQTs7O0FDVmYsU0FBUyxZQUFZLFFBQVEsUUFBUSxXQUFXLFlBQVk7QUFDMUQsTUFBSSxRQUFRLFVBQVUsUUFDbEIsU0FBUyxPQUNULGVBQWUsQ0FBQztBQUVwQixNQUFJLFVBQVUsTUFBTTtBQUNsQixXQUFPLENBQUM7QUFBQSxFQUNWO0FBQ0EsV0FBUyxPQUFPLE1BQU07QUFDdEIsU0FBTyxTQUFTO0FBQ2QsUUFBSSxPQUFPLFVBQVUsS0FBSztBQUMxQixRQUFLLGdCQUFnQixLQUFLLENBQUMsSUFDbkIsS0FBSyxDQUFDLE1BQU0sT0FBTyxLQUFLLENBQUMsQ0FBQyxJQUMxQixFQUFFLEtBQUssQ0FBQyxLQUFLLFNBQ2Y7QUFDSixhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDQSxTQUFPLEVBQUUsUUFBUSxRQUFRO0FBQ3ZCLFdBQU8sVUFBVSxLQUFLO0FBQ3RCLFFBQUksTUFBTSxLQUFLLENBQUMsR0FDWixXQUFXLE9BQU8sR0FBRyxHQUNyQixXQUFXLEtBQUssQ0FBQztBQUVyQixRQUFJLGdCQUFnQixLQUFLLENBQUMsR0FBRztBQUMzQixVQUFJLGFBQWEsVUFBYSxFQUFFLE9BQU8sU0FBUztBQUM5QyxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0YsT0FBTztBQUNMLFVBQUksUUFBUSxJQUFJO0FBQ2hCLFVBQUksWUFBWTtBQUNkLFlBQUksU0FBUyxXQUFXLFVBQVUsVUFBVSxLQUFLLFFBQVEsUUFBUSxLQUFLO0FBQUEsTUFDeEU7QUFDQSxVQUFJLEVBQUUsV0FBVyxTQUNULG9CQUFZLFVBQVUsVUFBVUMsd0JBQXVCQyx5QkFBd0IsWUFBWSxLQUFLLElBQ2hHLFNBQ0Q7QUFDTCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBM0RBLElBSUlELHVCQUNBQyx5QkF3REc7QUE3RFA7QUFBQTtBQUFBO0FBQ0E7QUFHQSxJQUFJRCx3QkFBdUI7QUFBM0IsSUFDSUMsMEJBQXlCO0FBd0Q3QixJQUFPLHNCQUFRO0FBQUE7QUFBQTs7O0FDbkRmLFNBQVMsbUJBQW1CLE9BQU87QUFDakMsU0FBTyxVQUFVLFNBQVMsQ0FBQyxpQkFBUyxLQUFLO0FBQzNDO0FBWkEsSUFjTztBQWRQO0FBQUE7QUFBQTtBQWNBLElBQU8sNkJBQVE7QUFBQTtBQUFBOzs7QUNKZixTQUFTLGFBQWEsUUFBUTtBQUM1QixNQUFJLFNBQVMsYUFBSyxNQUFNLEdBQ3BCLFNBQVMsT0FBTztBQUVwQixTQUFPLFVBQVU7QUFDZixRQUFJLE1BQU0sT0FBTyxNQUFNLEdBQ25CLFFBQVEsT0FBTyxHQUFHO0FBRXRCLFdBQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxPQUFPLDJCQUFtQixLQUFLLENBQUM7QUFBQSxFQUN6RDtBQUNBLFNBQU87QUFDVDtBQXJCQSxJQXVCTztBQXZCUDtBQUFBO0FBQUE7QUFDQTtBQXNCQSxJQUFPLHVCQUFRO0FBQUE7QUFBQTs7O0FDZGYsU0FBUyx3QkFBd0IsS0FBSyxVQUFVO0FBQzlDLFNBQU8sU0FBUyxRQUFRO0FBQ3RCLFFBQUksVUFBVSxNQUFNO0FBQ2xCLGFBQU87QUFBQSxJQUNUO0FBQ0EsV0FBTyxPQUFPLEdBQUcsTUFBTSxhQUNwQixhQUFhLFVBQWMsT0FBTyxPQUFPLE1BQU07QUFBQSxFQUNwRDtBQUNGO0FBakJBLElBbUJPO0FBbkJQO0FBQUE7QUFtQkEsSUFBTyxrQ0FBUTtBQUFBO0FBQUE7OztBQ1JmLFNBQVMsWUFBWSxRQUFRO0FBQzNCLE1BQUksWUFBWSxxQkFBYSxNQUFNO0FBQ25DLE1BQUksVUFBVSxVQUFVLEtBQUssVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHO0FBQzVDLFdBQU8sZ0NBQXdCLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFBQSxFQUNqRTtBQUNBLFNBQU8sU0FBUyxRQUFRO0FBQ3RCLFdBQU8sV0FBVyxVQUFVLG9CQUFZLFFBQVEsUUFBUSxTQUFTO0FBQUEsRUFDbkU7QUFDRjtBQW5CQSxJQXFCTztBQXJCUDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBbUJBLElBQU8sc0JBQVE7QUFBQTtBQUFBOzs7QUNFZixTQUFTLFNBQVMsT0FBTztBQUN2QixTQUFPLE9BQU8sU0FBUyxZQUNwQixxQkFBYSxLQUFLLEtBQUssbUJBQVcsS0FBSyxLQUFLQztBQUNqRDtBQTFCQSxJQUlJQSxZQXdCRztBQTVCUDtBQUFBO0FBQUE7QUFDQTtBQUdBLElBQUlBLGFBQVk7QUF3QmhCLElBQU8sbUJBQVE7QUFBQTtBQUFBOzs7QUNiZixTQUFTLE1BQU0sT0FBTyxRQUFRO0FBQzVCLE1BQUksZ0JBQVEsS0FBSyxHQUFHO0FBQ2xCLFdBQU87QUFBQSxFQUNUO0FBQ0EsTUFBSSxPQUFPLE9BQU87QUFDbEIsTUFBSSxRQUFRLFlBQVksUUFBUSxZQUFZLFFBQVEsYUFDaEQsU0FBUyxRQUFRLGlCQUFTLEtBQUssR0FBRztBQUNwQyxXQUFPO0FBQUEsRUFDVDtBQUNBLFNBQU8sY0FBYyxLQUFLLEtBQUssS0FBSyxDQUFDLGFBQWEsS0FBSyxLQUFLLEtBQ3pELFVBQVUsUUFBUSxTQUFTLE9BQU8sTUFBTTtBQUM3QztBQTFCQSxJQUlJLGNBQ0EsZUF1Qkc7QUE1QlA7QUFBQTtBQUFBO0FBQ0E7QUFHQSxJQUFJLGVBQWU7QUFBbkIsSUFDSSxnQkFBZ0I7QUF1QnBCLElBQU8sZ0JBQVE7QUFBQTtBQUFBOzs7QUNmZixTQUFTLGNBQWMsTUFBTTtBQUMzQixNQUFJLFNBQVMsZ0JBQVEsTUFBTSxTQUFTLEtBQUs7QUFDdkMsUUFBSSxNQUFNLFNBQVMsa0JBQWtCO0FBQ25DLFlBQU0sTUFBTTtBQUFBLElBQ2Q7QUFDQSxXQUFPO0FBQUEsRUFDVCxDQUFDO0FBRUQsTUFBSSxRQUFRLE9BQU87QUFDbkIsU0FBTztBQUNUO0FBdkJBLElBR0ksa0JBc0JHO0FBekJQO0FBQUE7QUFBQTtBQUdBLElBQUksbUJBQW1CO0FBc0J2QixJQUFPLHdCQUFRO0FBQUE7QUFBQTs7O0FDekJmLElBR0ksWUFHQSxjQVNBLGNBV0c7QUExQlA7QUFBQTtBQUFBO0FBR0EsSUFBSSxhQUFhO0FBR2pCLElBQUksZUFBZTtBQVNuQixJQUFJLGVBQWUsc0JBQWMsU0FBUyxRQUFRO0FBQ2hELFVBQUksU0FBUyxDQUFDO0FBQ2QsVUFBSSxPQUFPLFdBQVcsQ0FBQyxNQUFNLElBQVk7QUFDdkMsZUFBTyxLQUFLLEVBQUU7QUFBQSxNQUNoQjtBQUNBLGFBQU8sUUFBUSxZQUFZLFNBQVMsT0FBTyxRQUFRLE9BQU8sV0FBVztBQUNuRSxlQUFPLEtBQUssUUFBUSxVQUFVLFFBQVEsY0FBYyxJQUFJLElBQUssVUFBVSxLQUFNO0FBQUEsTUFDL0UsQ0FBQztBQUNELGFBQU87QUFBQSxJQUNULENBQUM7QUFFRCxJQUFPLHVCQUFRO0FBQUE7QUFBQTs7O0FDakJmLFNBQVMsU0FBUyxPQUFPLFVBQVU7QUFDakMsTUFBSSxRQUFRLElBQ1IsU0FBUyxTQUFTLE9BQU8sSUFBSSxNQUFNLFFBQ25DLFNBQVMsTUFBTSxNQUFNO0FBRXpCLFNBQU8sRUFBRSxRQUFRLFFBQVE7QUFDdkIsV0FBTyxLQUFLLElBQUksU0FBUyxNQUFNLEtBQUssR0FBRyxPQUFPLEtBQUs7QUFBQSxFQUNyRDtBQUNBLFNBQU87QUFDVDtBQWxCQSxJQW9CTztBQXBCUDtBQUFBO0FBb0JBLElBQU8sbUJBQVE7QUFBQTtBQUFBOzs7QUNBZixTQUFTLGFBQWEsT0FBTztBQUUzQixNQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzVCLFdBQU87QUFBQSxFQUNUO0FBQ0EsTUFBSSxnQkFBUSxLQUFLLEdBQUc7QUFFbEIsV0FBTyxpQkFBUyxPQUFPLFlBQVksSUFBSTtBQUFBLEVBQ3pDO0FBQ0EsTUFBSSxpQkFBUyxLQUFLLEdBQUc7QUFDbkIsV0FBTyxpQkFBaUIsZUFBZSxLQUFLLEtBQUssSUFBSTtBQUFBLEVBQ3ZEO0FBQ0EsTUFBSSxTQUFVLFFBQVE7QUFDdEIsU0FBUSxVQUFVLE9BQVEsSUFBSSxTQUFVLENBQUMsV0FBWSxPQUFPO0FBQzlEO0FBbENBLElBTUksVUFHQUMsY0FDQSxnQkEwQkc7QUFwQ1A7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBSSxXQUFXLElBQUk7QUFHbkIsSUFBSUEsZUFBYyxpQkFBUyxlQUFPLFlBQVk7QUFBOUMsSUFDSSxpQkFBaUJBLGVBQWNBLGFBQVksV0FBVztBQTBCMUQsSUFBTyx1QkFBUTtBQUFBO0FBQUE7OztBQ2JmLFNBQVMsU0FBUyxPQUFPO0FBQ3ZCLFNBQU8sU0FBUyxPQUFPLEtBQUsscUJBQWEsS0FBSztBQUNoRDtBQXpCQSxJQTJCTztBQTNCUDtBQUFBO0FBQUE7QUEyQkEsSUFBTyxtQkFBUTtBQUFBO0FBQUE7OztBQ2RmLFNBQVMsU0FBUyxPQUFPLFFBQVE7QUFDL0IsTUFBSSxnQkFBUSxLQUFLLEdBQUc7QUFDbEIsV0FBTztBQUFBLEVBQ1Q7QUFDQSxTQUFPLGNBQU0sT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLElBQUkscUJBQWEsaUJBQVMsS0FBSyxDQUFDO0FBQ3RFO0FBbEJBLElBb0JPO0FBcEJQO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWlCQSxJQUFPLG1CQUFRO0FBQUE7QUFBQTs7O0FDUmYsU0FBUyxNQUFNLE9BQU87QUFDcEIsTUFBSSxPQUFPLFNBQVMsWUFBWSxpQkFBUyxLQUFLLEdBQUc7QUFDL0MsV0FBTztBQUFBLEVBQ1Q7QUFDQSxNQUFJLFNBQVUsUUFBUTtBQUN0QixTQUFRLFVBQVUsT0FBUSxJQUFJLFNBQVUsQ0FBQ0MsWUFBWSxPQUFPO0FBQzlEO0FBbEJBLElBR0lBLFdBaUJHO0FBcEJQO0FBQUE7QUFBQTtBQUdBLElBQUlBLFlBQVcsSUFBSTtBQWlCbkIsSUFBTyxnQkFBUTtBQUFBO0FBQUE7OztBQ1RmLFNBQVMsUUFBUSxRQUFRLE1BQU07QUFDN0IsU0FBTyxpQkFBUyxNQUFNLE1BQU07QUFFNUIsTUFBSSxRQUFRLEdBQ1IsU0FBUyxLQUFLO0FBRWxCLFNBQU8sVUFBVSxRQUFRLFFBQVEsUUFBUTtBQUN2QyxhQUFTLE9BQU8sY0FBTSxLQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQUEsRUFDdEM7QUFDQSxTQUFRLFNBQVMsU0FBUyxTQUFVLFNBQVM7QUFDL0M7QUFyQkEsSUF1Qk87QUF2QlA7QUFBQTtBQUFBO0FBQ0E7QUFzQkEsSUFBTyxrQkFBUTtBQUFBO0FBQUE7OztBQ0lmLFNBQVMsSUFBSSxRQUFRLE1BQU0sY0FBYztBQUN2QyxNQUFJLFNBQVMsVUFBVSxPQUFPLFNBQVksZ0JBQVEsUUFBUSxJQUFJO0FBQzlELFNBQU8sV0FBVyxTQUFZLGVBQWU7QUFDL0M7QUE5QkEsSUFnQ087QUFoQ1A7QUFBQTtBQUFBO0FBZ0NBLElBQU8sY0FBUTtBQUFBO0FBQUE7OztBQ3hCZixTQUFTLFVBQVUsUUFBUSxLQUFLO0FBQzlCLFNBQU8sVUFBVSxRQUFRLE9BQU8sT0FBTyxNQUFNO0FBQy9DO0FBVkEsSUFZTztBQVpQO0FBQUE7QUFZQSxJQUFPLG9CQUFRO0FBQUE7QUFBQTs7O0FDSWYsU0FBUyxRQUFRLFFBQVEsTUFBTSxTQUFTO0FBQ3RDLFNBQU8saUJBQVMsTUFBTSxNQUFNO0FBRTVCLE1BQUksUUFBUSxJQUNSLFNBQVMsS0FBSyxRQUNkLFNBQVM7QUFFYixTQUFPLEVBQUUsUUFBUSxRQUFRO0FBQ3ZCLFFBQUksTUFBTSxjQUFNLEtBQUssS0FBSyxDQUFDO0FBQzNCLFFBQUksRUFBRSxTQUFTLFVBQVUsUUFBUSxRQUFRLFFBQVEsR0FBRyxJQUFJO0FBQ3REO0FBQUEsSUFDRjtBQUNBLGFBQVMsT0FBTyxHQUFHO0FBQUEsRUFDckI7QUFDQSxNQUFJLFVBQVUsRUFBRSxTQUFTLFFBQVE7QUFDL0IsV0FBTztBQUFBLEVBQ1Q7QUFDQSxXQUFTLFVBQVUsT0FBTyxJQUFJLE9BQU87QUFDckMsU0FBTyxDQUFDLENBQUMsVUFBVSxpQkFBUyxNQUFNLEtBQUssZ0JBQVEsS0FBSyxNQUFNLE1BQ3ZELGdCQUFRLE1BQU0sS0FBSyxvQkFBWSxNQUFNO0FBQzFDO0FBcENBLElBc0NPO0FBdENQO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQ0EsSUFBTyxrQkFBUTtBQUFBO0FBQUE7OztBQ1RmLFNBQVMsTUFBTSxRQUFRLE1BQU07QUFDM0IsU0FBTyxVQUFVLFFBQVEsZ0JBQVEsUUFBUSxNQUFNLGlCQUFTO0FBQzFEO0FBL0JBLElBaUNPO0FBakNQO0FBQUE7QUFBQTtBQUNBO0FBZ0NBLElBQU8sZ0JBQVE7QUFBQTtBQUFBOzs7QUNiZixTQUFTLG9CQUFvQixNQUFNLFVBQVU7QUFDM0MsTUFBSSxjQUFNLElBQUksS0FBSywyQkFBbUIsUUFBUSxHQUFHO0FBQy9DLFdBQU8sZ0NBQXdCLGNBQU0sSUFBSSxHQUFHLFFBQVE7QUFBQSxFQUN0RDtBQUNBLFNBQU8sU0FBUyxRQUFRO0FBQ3RCLFFBQUksV0FBVyxZQUFJLFFBQVEsSUFBSTtBQUMvQixXQUFRLGFBQWEsVUFBYSxhQUFhLFdBQzNDLGNBQU0sUUFBUSxJQUFJLElBQ2xCLG9CQUFZLFVBQVUsVUFBVUMsd0JBQXVCQyx1QkFBc0I7QUFBQSxFQUNuRjtBQUNGO0FBOUJBLElBU0lELHVCQUNBQyx5QkFzQkc7QUFoQ1A7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBSUQsd0JBQXVCO0FBQTNCLElBQ0lDLDBCQUF5QjtBQXNCN0IsSUFBTyw4QkFBUTtBQUFBO0FBQUE7OztBQ2hCZixTQUFTLFNBQVMsT0FBTztBQUN2QixTQUFPO0FBQ1Q7QUFsQkEsSUFvQk87QUFwQlA7QUFBQTtBQW9CQSxJQUFPLG1CQUFRO0FBQUE7QUFBQTs7O0FDYmYsU0FBUyxhQUFhLEtBQUs7QUFDekIsU0FBTyxTQUFTLFFBQVE7QUFDdEIsV0FBTyxVQUFVLE9BQU8sU0FBWSxPQUFPLEdBQUc7QUFBQSxFQUNoRDtBQUNGO0FBWEEsSUFhTztBQWJQO0FBQUE7QUFhQSxJQUFPLHVCQUFRO0FBQUE7QUFBQTs7O0FDSmYsU0FBUyxpQkFBaUIsTUFBTTtBQUM5QixTQUFPLFNBQVMsUUFBUTtBQUN0QixXQUFPLGdCQUFRLFFBQVEsSUFBSTtBQUFBLEVBQzdCO0FBQ0Y7QUFiQSxJQWVPO0FBZlA7QUFBQTtBQUFBO0FBZUEsSUFBTywyQkFBUTtBQUFBO0FBQUE7OztBQ1lmLFNBQVMsU0FBUyxNQUFNO0FBQ3RCLFNBQU8sY0FBTSxJQUFJLElBQUkscUJBQWEsY0FBTSxJQUFJLENBQUMsSUFBSSx5QkFBaUIsSUFBSTtBQUN4RTtBQTdCQSxJQStCTztBQS9CUDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE0QkEsSUFBTyxtQkFBUTtBQUFBO0FBQUE7OztBQ2xCZixTQUFTLGFBQWEsT0FBTztBQUczQixNQUFJLE9BQU8sU0FBUyxZQUFZO0FBQzlCLFdBQU87QUFBQSxFQUNUO0FBQ0EsTUFBSSxTQUFTLE1BQU07QUFDakIsV0FBTztBQUFBLEVBQ1Q7QUFDQSxNQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzVCLFdBQU8sZ0JBQVEsS0FBSyxJQUNoQiw0QkFBb0IsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFDdEMsb0JBQVksS0FBSztBQUFBLEVBQ3ZCO0FBQ0EsU0FBTyxpQkFBUyxLQUFLO0FBQ3ZCO0FBNUJBLElBOEJPO0FBOUJQO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMEJBLElBQU8sdUJBQVE7QUFBQTtBQUFBOzs7QUNyQmYsU0FBUyxRQUFRLE9BQU8sVUFBVTtBQUNoQyxNQUFJLFFBQ0EsUUFBUSxJQUNSLFNBQVMsTUFBTTtBQUVuQixTQUFPLEVBQUUsUUFBUSxRQUFRO0FBQ3ZCLFFBQUksVUFBVSxTQUFTLE1BQU0sS0FBSyxDQUFDO0FBQ25DLFFBQUksWUFBWSxRQUFXO0FBQ3pCLGVBQVMsV0FBVyxTQUFZLFVBQVcsU0FBUztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDtBQXJCQSxJQXVCTztBQXZCUDtBQUFBO0FBdUJBLElBQU8sa0JBQVE7QUFBQTtBQUFBOzs7QUNHZixTQUFTLE1BQU0sT0FBTyxVQUFVO0FBQzlCLFNBQVEsU0FBUyxNQUFNLFNBQ25CLGdCQUFRLE9BQU8scUJBQWEsVUFBVSxDQUFDLENBQUMsSUFDeEM7QUFDTjtBQTlCQSxJQWdDTztBQWhDUDtBQUFBO0FBQUE7QUFDQTtBQStCQSxJQUFPLGdCQUFRO0FBQUE7QUFBQTs7O0FDckJmLFNBQVMsa0JBQWtCO0FBWDNCO0FBQUE7QUFBQTtBQUFBOzs7QUNNTyxTQUFTLDBCQUFxRDtBQUNuRSxTQUFPO0FBQ1Q7QUFFTyxTQUFTLHdCQUF3QixPQUFpQztBQUN2RSx5QkFBdUI7QUFDekI7QUFTTyxTQUFTLDJCQUNkLFFBQ2lDO0FBRWpDLFNBQU8sZUFBZSxJQUFJLE1BQU0sSUFBSSxlQUFlLElBQUksTUFBTSxJQUFJO0FBQ25FO0FBRU8sU0FBUywyQkFDZCxRQUNBLE9BQ007QUFDTixpQkFBZSxJQUFJLFFBQVEsS0FBSztBQUNsQztBQWFPLFNBQVMsb0JBQW9CLE1BQTBDO0FBQzVFLFNBQU8sZUFBZSxJQUFJLElBQUk7QUFDaEM7QUFFTyxTQUFTLG9CQUFvQixNQUFjLE9BQTZCO0FBQzdFLGlCQUFlLElBQUksTUFBTSxLQUFLO0FBQ2hDO0FBRU8sU0FBUyxxQkFBMkI7QUFDekMseUJBQXVCO0FBQ3ZCLGlCQUFlLE1BQU07QUFDckIsaUJBQWUsTUFBTTtBQUN2QjtBQVNPLFNBQVMsd0JBQTZEO0FBQzNFLFNBQU87QUFDVDtBQUVPLFNBQVMsc0JBQ2QsVUFDTTtBQUNOLHVCQUFxQjtBQUN2QjtBQUVPLFNBQVMsMEJBQWdDO0FBQzlDLHVCQUFxQjtBQUN2QjtBQS9FQSxJQUlJLHNCQWVFLGdCQXlCQSxnQkFxQkY7QUFqRUo7QUFBQTtBQUlBLElBQUksdUJBQWtEO0FBZXRELElBQU0saUJBQWlCLG9CQUFJLElBQXdDO0FBeUJuRSxJQUFNLGlCQUFpQixvQkFBSSxJQUE0QjtBQUFBO0FBQUE7OztBQ2xCaEQsU0FBUyxlQUEwRDtBQUN4RSxRQUFNLFlBQVksb0JBQUksSUFBNkI7QUFDbkQsU0FBTztBQUFBLElBQ0wsVUFBVSxVQUFVO0FBQ2xCLGdCQUFVLElBQUksUUFBUTtBQUN0QixhQUFPLE1BQU07QUFDWCxrQkFBVSxPQUFPLFFBQVE7QUFBQSxNQUMzQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVEsTUFBTTtBQUNaLGlCQUFXLFlBQVksVUFBVyxVQUFTLEdBQUcsSUFBSTtBQUFBLElBQ3BEO0FBQUEsSUFDQSxRQUFRO0FBQ04sZ0JBQVUsTUFBTTtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUNGO0FBMUNBO0FBQUE7QUFBQTtBQUFBOzs7QUNNQSxTQUFTLG9CQUFvQjtBQUU3QixTQUFTLFdBQVc7QUE0UHBCLFNBQVMsa0JBQXlCO0FBR2hDLE1BQUksY0FBYztBQUNsQixNQUNFLE9BQU8sWUFBWSxlQUNuQixPQUFPLFFBQVEsUUFBUSxjQUN2QixPQUFPLGlCQUFpQixZQUN4QjtBQUNBLFVBQU0sU0FBUyxJQUFJO0FBQ25CLFFBQUk7QUFDRixvQkFBYyxhQUFhLE1BQU0sRUFBRSxVQUFVLEtBQUs7QUFBQSxJQUNwRCxRQUFRO0FBRU4sb0JBQWMsT0FBTyxVQUFVLEtBQUs7QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDQSxRQUFNLFFBQWU7QUFBQSxJQUNuQixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsSUFDZCxrQkFBa0I7QUFBQSxJQUNsQixnQ0FBZ0M7QUFBQSxJQUNoQyxtQkFBbUI7QUFBQSxJQUNuQixvQkFBb0I7QUFBQSxJQUNwQixvQkFBb0I7QUFBQSxJQUNwQiwwQkFBMEI7QUFBQSxJQUMxQixlQUFlO0FBQUEsSUFDZixlQUFlO0FBQUEsSUFDZixxQkFBcUI7QUFBQSxJQUNyQixXQUFXLEtBQUssSUFBSTtBQUFBLElBQ3BCLHFCQUFxQixLQUFLLElBQUk7QUFBQSxJQUM5QixpQkFBaUI7QUFBQSxJQUNqQixtQkFBbUI7QUFBQSxJQUNuQixxQkFBcUI7QUFBQSxJQUNyQixLQUFLO0FBQUEsSUFDTCxZQUFZLENBQUM7QUFBQSxJQUNiLHVCQUF1QjtBQUFBLElBQ3ZCLHNCQUFzQjtBQUFBLElBQ3RCLGNBQWM7QUFBQSxJQUNkLGVBQWU7QUFBQSxJQUNmLGNBQWM7QUFBQSxJQUNkLHlCQUF5QjtBQUFBLElBQ3pCLGtDQUFrQztBQUFBLElBQ2xDLGNBQWM7QUFBQSxJQUNkLFlBQVk7QUFBQSxJQUNaLGVBQWU7QUFBQSxJQUNmLHVCQUF1QjtBQUFBLElBQ3ZCLHFCQUFxQjtBQUFBLElBQ3JCLGtCQUFrQjtBQUFBLElBQ2xCLGNBQWM7QUFBQSxJQUNkLGtCQUFrQjtBQUFBLElBQ2xCLG9CQUFvQjtBQUFBLElBQ3BCLHVCQUF1QjtBQUFBLE1BQ3JCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsSUFDaEIsWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsY0FBYztBQUFBLElBQ2QsNkJBQTZCO0FBQUEsSUFDN0IsbUJBQW1CO0FBQUEsSUFDbkIsWUFBWTtBQUFBLElBQ1osV0FBVyxXQUFXO0FBQUEsSUFDdEIsaUJBQWlCO0FBQUE7QUFBQSxJQUVqQixnQkFBZ0I7QUFBQSxJQUNoQixhQUFhO0FBQUE7QUFBQSxJQUViLGVBQWU7QUFBQSxJQUNmLGdCQUFnQjtBQUFBO0FBQUEsSUFFaEIsZUFBZSxvQkFBSSxJQUFJO0FBQUEsSUFDdkIsaUJBQWlCO0FBQUE7QUFBQSxJQUVqQixnQkFBZ0I7QUFBQSxJQUNoQix3QkFBd0I7QUFBQTtBQUFBLElBRXhCLHdCQUF3QjtBQUFBLElBQ3hCLHVCQUF1QjtBQUFBO0FBQUEsSUFFdkIsa0JBQWtCLENBQUM7QUFBQTtBQUFBLElBRW5CLGVBQWUsQ0FBQztBQUFBO0FBQUEsSUFFaEIsb0JBQW9CO0FBQUE7QUFBQSxJQUVwQixrQkFBa0I7QUFBQTtBQUFBLElBRWxCLDhCQUE4QjtBQUFBO0FBQUEsSUFFOUIsdUJBQXVCO0FBQUEsSUFDdkIsa0JBQWtCLENBQUM7QUFBQSxJQUNuQixxQkFBcUIsb0JBQUksSUFBSTtBQUFBO0FBQUEsSUFFN0Isc0JBQXNCO0FBQUE7QUFBQSxJQUV0Qiw0QkFBNEI7QUFBQTtBQUFBLElBRTVCLG1CQUFtQjtBQUFBO0FBQUEsSUFFbkIsNkJBQTZCO0FBQUE7QUFBQSxJQUU3Qiw2QkFBNkI7QUFBQTtBQUFBLElBRTdCLG1DQUFtQztBQUFBO0FBQUEsSUFFbkMsZ0JBQWdCO0FBQUEsSUFDaEIsaUJBQWlCO0FBQUE7QUFBQSxJQUVqQixlQUFlLG9CQUFJLElBQUk7QUFBQTtBQUFBLElBRXZCLHVCQUF1QjtBQUFBO0FBQUEsSUFFdkIsZUFBZSxvQkFBSSxJQUFJO0FBQUE7QUFBQSxJQUV2QixnQkFBZ0IsQ0FBQztBQUFBO0FBQUEsSUFFakIsVUFBVTtBQUFBO0FBQUEsSUFFVixxQkFBcUI7QUFBQTtBQUFBLElBRXJCLGNBQWM7QUFBQSxJQUNkLEdBQUksUUFBUSxJQUFJLGNBQWMsUUFDMUI7QUFBQSxNQUNFLGtCQUFrQjtBQUFBLElBQ3BCLElBQ0EsQ0FBQztBQUFBO0FBQUEsSUFFTCx3QkFBd0I7QUFBQTtBQUFBLElBRXhCLDBCQUEwQixvQkFBSSxJQUFJO0FBQUE7QUFBQSxJQUVsQyxpQkFBaUI7QUFBQTtBQUFBLElBRWpCLGtDQUFrQyxDQUFDO0FBQUE7QUFBQSxJQUVuQyxpQkFBaUIsQ0FBQztBQUFBLElBQ2xCLGdCQUFnQjtBQUFBO0FBQUEsSUFFaEIsbUJBQW1CO0FBQUE7QUFBQSxJQUVuQix3QkFBd0I7QUFBQTtBQUFBLElBRXhCLHVCQUF1QjtBQUFBO0FBQUEsSUFFdkIsc0JBQXNCO0FBQUEsSUFDdEIsdUJBQXVCO0FBQUEsSUFDdkIsMkJBQTJCO0FBQUEsSUFDM0Isc0JBQXNCO0FBQUE7QUFBQSxJQUV0QixVQUFVO0FBQUEsSUFDVixtQkFBbUI7QUFBQSxJQUNuQiw0QkFBNEI7QUFBQSxJQUM1Qix1QkFBdUI7QUFBQSxFQUN6QjtBQUVBLFNBQU87QUFDVDtBQUtPLFNBQVMsZUFBMEI7QUFDeEMsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLG9CQUNkLFVBQTRDLENBQUMsR0FDbEM7QUFDWCxNQUFJLFFBQVEsb0JBQW9CO0FBQzlCLFVBQU0sa0JBQWtCLE1BQU07QUFBQSxFQUNoQztBQUlBLFFBQU0sY0FBYyxPQUFPLE1BQU0sU0FBUztBQUcxQyxRQUFNLFlBQVksV0FBVztBQUM3QixRQUFNLG9CQUFvQjtBQUMxQixTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMscUJBQTRDO0FBQzFELFNBQU8sTUFBTTtBQUNmO0FBY08sU0FBUyxjQUNkLFdBQ0EsYUFBNEIsTUFDdEI7QUFJTixRQUFNLGNBQWMsT0FBTyxNQUFNLFNBQVM7QUFDMUMsUUFBTSxZQUFZO0FBQ2xCLFFBQU0sb0JBQW9CO0FBQzFCLGtCQUFnQixLQUFLLFNBQVM7QUFDaEM7QUFpQk8sU0FBUyx1QkFBc0M7QUFDcEQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLGlCQUF5QjtBQUN2QyxTQUFPLE1BQU07QUFDZjtBQVNPLFNBQVMsaUJBQXlCO0FBQ3ZDLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxlQUFlQyxNQUFtQjtBQUNoRCxRQUFNLGNBQWNBLEtBQUksVUFBVSxLQUFLO0FBQ3pDO0FBTU8sU0FBUyxlQUFlQSxNQUFtQjtBQUNoRCxRQUFNLGNBQWNBLEtBQUksVUFBVSxLQUFLO0FBQ3pDO0FBRU8sU0FBUyxjQUFzQjtBQUNwQyxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsWUFBWUEsTUFBbUI7QUFDN0MsUUFBTSxNQUFNQSxLQUFJLFVBQVUsS0FBSztBQUNqQztBQUVPLFNBQVMsNEJBQWdEO0FBQzlELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxxQkFBOEI7QUFDNUMsU0FBTyxNQUFNLHFCQUFxQjtBQUNwQztBQUVPLFNBQVMsMEJBQTBCLEtBQW1CO0FBQzNELFFBQU0seUJBQXlCO0FBQ2pDO0FBRU8sU0FBUyx3QkFDZCxVQUNBLHdCQUNNO0FBQ04sUUFBTSxvQkFBb0I7QUFDMUIsUUFBTSxrQ0FBa0M7QUFDMUM7QUFFTyxTQUFTLGdEQUFzRDtBQUNwRSxRQUFNLG1CQUFtQjtBQUN6QixRQUFNLGlDQUFpQztBQUN2QyxRQUFNLGVBQWU7QUFDdkI7QUFFTyxTQUFTLG9CQUNkLE1BQ0EsWUFDQSxPQUNNO0FBQ04sUUFBTSxXQUFXLEtBQUssSUFBSTtBQUMxQixRQUFNLGdCQUFnQjtBQUN4QjtBQUVPLFNBQVMsa0JBQTBCO0FBQ3hDLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxzQkFBOEI7QUFDNUMsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLG1CQUEyQjtBQUN6QyxTQUFPLEtBQUssSUFBSSxJQUFJLE1BQU07QUFDNUI7QUFFTyxTQUFTLG9DQUE0QztBQUMxRCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsdUJBQStCO0FBQzdDLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxrQkFBa0IsVUFBd0I7QUFDeEQsUUFBTSxxQkFBcUI7QUFDM0IsUUFBTSxzQkFBc0I7QUFDNUIsUUFBTTtBQUNSO0FBRU8sU0FBUyx3QkFBZ0M7QUFDOUMsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHNCQUFzQixVQUF3QjtBQUM1RCxRQUFNLHNCQUFzQjtBQUM1QixRQUFNO0FBQ1I7QUFFTyxTQUFTLHdCQUE4QjtBQUM1QyxRQUFNLHFCQUFxQjtBQUMzQixRQUFNLGdCQUFnQjtBQUN4QjtBQUVPLFNBQVMsbUJBQTJCO0FBQ3pDLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyx3QkFBZ0M7QUFDOUMsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHdCQUE4QjtBQUM1QyxRQUFNLHFCQUFxQjtBQUMzQixRQUFNLGdCQUFnQjtBQUN4QjtBQUVPLFNBQVMsbUJBQTJCO0FBQ3pDLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyw4QkFBc0M7QUFDcEQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLDRCQUE0QixVQUF3QjtBQUNsRSxRQUFNLDRCQUE0QjtBQUNsQyxRQUFNO0FBQ1I7QUFFTyxTQUFTLDhCQUFvQztBQUNsRCxRQUFNLDJCQUEyQjtBQUNqQyxRQUFNLHNCQUFzQjtBQUM5QjtBQUVPLFNBQVMseUJBQWlDO0FBQy9DLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxnQkFFUDtBQUNQLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxjQUNkLE9BQ007QUFDTixRQUFNLGFBQWE7QUFDckI7QUFnQk8sU0FBUywwQkFBMEIsV0FBMkI7QUFDbkUsTUFBSSxXQUFXO0FBQ2IsK0JBQTJCO0FBQUEsRUFDN0IsT0FBTztBQUNMLDJCQUF1QjtBQUFBLEVBQ3pCO0FBQ0Y7QUFPTyxTQUFTLHVCQUE2QjtBQUMzQyxNQUFJLHNCQUFzQjtBQUN4QiwrQkFBMkI7QUFBQSxFQUM3QjtBQUNGO0FBRUEsU0FBUyw2QkFBbUM7QUFDMUMsUUFBTSxzQkFBc0IsS0FBSyxJQUFJO0FBQ3JDLHlCQUF1QjtBQUN6QjtBQUVPLFNBQVMsdUJBQXVCLE9BQWUsU0FBdUI7QUFDM0UsUUFBTSxtQkFBbUI7QUFDekIsUUFBTSxxQkFBcUI7QUFDN0I7QUFFTyxTQUFTLHFCQUE2QjtBQUMzQyxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsdUJBQStCO0FBQzdDLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxzQkFBOEI7QUFDNUMsU0FBTyxjQUFNLE9BQU8sT0FBTyxNQUFNLFVBQVUsR0FBRyxhQUFhO0FBQzdEO0FBRU8sU0FBUyx1QkFBK0I7QUFDN0MsU0FBTyxjQUFNLE9BQU8sT0FBTyxNQUFNLFVBQVUsR0FBRyxjQUFjO0FBQzlEO0FBRU8sU0FBUywrQkFBdUM7QUFDckQsU0FBTyxjQUFNLE9BQU8sT0FBTyxNQUFNLFVBQVUsR0FBRyxzQkFBc0I7QUFDdEU7QUFFTyxTQUFTLG1DQUEyQztBQUN6RCxTQUFPLGNBQU0sT0FBTyxPQUFPLE1BQU0sVUFBVSxHQUFHLDBCQUEwQjtBQUMxRTtBQUVPLFNBQVMsNEJBQW9DO0FBQ2xELFNBQU8sY0FBTSxPQUFPLE9BQU8sTUFBTSxVQUFVLEdBQUcsbUJBQW1CO0FBQ25FO0FBSU8sU0FBUyxzQkFBOEI7QUFDNUMsU0FBTyxxQkFBcUIsSUFBSTtBQUNsQztBQUNPLFNBQVMsNEJBQTJDO0FBQ3pELFNBQU87QUFDVDtBQUVPLFNBQVMsNEJBQTRCLFFBQTZCO0FBQ3ZFLDRCQUEwQixxQkFBcUI7QUFDL0MsMkJBQXlCO0FBQ3pCLDRCQUEwQjtBQUM1QjtBQUNPLFNBQVMsNkJBQXFDO0FBQ25ELFNBQU87QUFDVDtBQUNPLFNBQVMsbUNBQXlDO0FBQ3ZEO0FBQ0Y7QUFFTyxTQUFTLHlCQUErQjtBQUM3QyxRQUFNLHNCQUFzQjtBQUM5QjtBQUVPLFNBQVMsc0JBQStCO0FBQzdDLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyx1QkFBMkM7QUFDekQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHFCQUFxQixXQUF5QjtBQUM1RCxRQUFNLG9CQUFvQjtBQUM1QjtBQUVPLFNBQVMsZ0NBQStDO0FBQzdELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyw4QkFBOEIsV0FBeUI7QUFDckUsUUFBTSw2QkFBNkI7QUFDckM7QUFJTyxTQUFTLHFCQUEyQjtBQUN6QyxRQUFNLHdCQUF3QjtBQUNoQztBQUlPLFNBQVMsd0JBQWlDO0FBQy9DLFFBQU0sTUFBTSxNQUFNO0FBQ2xCLFFBQU0sd0JBQXdCO0FBQzlCLFNBQU87QUFDVDtBQUVPLFNBQVMseUJBQWlDO0FBQy9DLFNBQU8sTUFBTTtBQUNmO0FBYU8sU0FBUyxxQkFBMkI7QUFDekMsbUJBQWlCO0FBQ2pCLE1BQUksaUJBQWtCLGNBQWEsZ0JBQWdCO0FBQ25ELHFCQUFtQixXQUFXLE1BQU07QUFDbEMscUJBQWlCO0FBQ2pCLHVCQUFtQjtBQUFBLEVBQ3JCLEdBQUcsb0JBQW9CO0FBQ3ZCLG1CQUFpQixRQUFRO0FBQzNCO0FBS08sU0FBUyxzQkFBK0I7QUFDN0MsU0FBTztBQUNUO0FBS0EsZUFBc0Isb0JBQW1DO0FBQ3ZELFNBQU8sZ0JBQWdCO0FBR3JCLFVBQU0sSUFBSSxRQUFRLE9BQUssV0FBVyxHQUFHLG9CQUFvQixFQUFFLFFBQVEsQ0FBQztBQUFBLEVBQ3RFO0FBQ0Y7QUFFTyxTQUFTLGdCQUFxRDtBQUNuRSxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsaUJBQWlCLE9BQXVDO0FBQ3RFLFNBQU8sTUFBTSxXQUFXLEtBQUs7QUFDL0I7QUFNTyxTQUFTLDJCQUFxRDtBQUNuRSxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsMEJBQXdDO0FBQ3RELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyx5QkFDZCxPQUNNO0FBQ04sUUFBTSx3QkFBd0I7QUFDaEM7QUFFTyxTQUFTLHdCQUF3QixPQUEyQjtBQUNqRSxRQUFNLHVCQUF1QjtBQUMvQjtBQUVPLFNBQVMsY0FBb0M7QUFDbEQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLFlBQVksT0FBbUM7QUFDN0QsUUFBTSxXQUFXO0FBQ25CO0FBRU8sU0FBUyxpQkFBdUI7QUFDckMsUUFBTSxlQUFlO0FBQ3JCLFFBQU0sbUJBQW1CO0FBQ3pCLFFBQU0saUNBQWlDO0FBQ3ZDLFFBQU0sb0JBQW9CO0FBQzFCLFFBQU0sWUFBWSxLQUFLLElBQUk7QUFDM0IsUUFBTSxrQkFBa0I7QUFDeEIsUUFBTSxvQkFBb0I7QUFDMUIsUUFBTSxzQkFBc0I7QUFDNUIsUUFBTSxhQUFhLENBQUM7QUFDcEIsUUFBTSxXQUFXO0FBQ25CO0FBTU8sU0FBUyx1QkFBdUI7QUFBQSxFQUNyQztBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRixHQVNTO0FBQ1AsUUFBTSxlQUFlO0FBQ3JCLFFBQU0sbUJBQW1CO0FBQ3pCLFFBQU0saUNBQWlDO0FBQ3ZDLFFBQU0sb0JBQW9CO0FBQzFCLFFBQU0sa0JBQWtCO0FBQ3hCLFFBQU0sb0JBQW9CO0FBRzFCLE1BQUksWUFBWTtBQUNkLFVBQU0sYUFBYTtBQUFBLEVBQ3JCO0FBR0EsTUFBSSxjQUFjO0FBQ2hCLFVBQU0sWUFBWSxLQUFLLElBQUksSUFBSTtBQUFBLEVBQ2pDO0FBQ0Y7QUFHTyxTQUFTLHFCQUEyQjtBQUN6QyxNQUFJLFFBQVEsSUFBSSxhQUFhLFFBQVE7QUFDbkMsVUFBTSxJQUFJLE1BQU0sZ0RBQWdEO0FBQUEsRUFDbEU7QUFDQSxTQUFPLFFBQVEsZ0JBQWdCLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTTtBQUMxRCxVQUFNLEdBQWtCLElBQUk7QUFBQSxFQUM5QixDQUFDO0FBQ0QsNEJBQTBCO0FBQzFCLDJCQUF5QjtBQUN6Qiw0QkFBMEI7QUFDMUIsa0JBQWdCLE1BQU07QUFDeEI7QUFHTyxTQUFTLGtCQUF1QztBQUNyRCxTQUFPLE1BQU07QUFDZjtBQUdPLFNBQVMsZ0JBQWdCLGNBQWtDO0FBQ2hFLFFBQU0sZUFBZTtBQUN2QjtBQUlPLFNBQVMsa0NBQWtDO0FBQ2hELFFBQU0sZUFBZTtBQUN2QjtBQUVPLFNBQVMsU0FDZCxPQUNBLGVBQ007QUFDTixRQUFNLFFBQVE7QUFHZCxRQUFNLGlCQUFpQixjQUFjLDZCQUE2QjtBQUFBLElBQ2hFLGFBQWE7QUFBQSxFQUNmLENBQUM7QUFDRCxRQUFNLGFBQWEsY0FBYyxtQ0FBbUM7QUFBQSxJQUNsRSxhQUNFO0FBQUEsRUFDSixDQUFDO0FBQ0QsUUFBTSxZQUFZLGNBQWMsa0NBQWtDO0FBQUEsSUFDaEUsYUFBYTtBQUFBLEVBQ2YsQ0FBQztBQUNELFFBQU0sZ0JBQWdCLGNBQWMsNEJBQTRCO0FBQUEsSUFDOUQsYUFBYTtBQUFBLEVBQ2YsQ0FBQztBQUNELFFBQU0sY0FBYyxjQUFjLDBCQUEwQjtBQUFBLElBQzFELGFBQWE7QUFBQSxJQUNiLE1BQU07QUFBQSxFQUNSLENBQUM7QUFDRCxRQUFNLGVBQWUsY0FBYywyQkFBMkI7QUFBQSxJQUM1RCxhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsRUFDUixDQUFDO0FBQ0QsUUFBTSw4QkFBOEI7QUFBQSxJQUNsQztBQUFBLElBQ0E7QUFBQSxNQUNFLGFBQ0U7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNBLFFBQU0sb0JBQW9CLGNBQWMsaUNBQWlDO0FBQUEsSUFDdkUsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLEVBQ1IsQ0FBQztBQUNIO0FBRU8sU0FBUyxXQUF5QjtBQUN2QyxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsb0JBQThDO0FBQzVELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxnQkFBMEM7QUFDeEQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLGVBQXlDO0FBQ3ZELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxtQkFBNkM7QUFDM0QsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLGlCQUEyQztBQUN6RCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsa0JBQTRDO0FBQzFELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxpQ0FBMkQ7QUFDekUsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHVCQUFpRDtBQUMvRCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsb0JBQTJDO0FBQ3pELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxrQkFBa0IsVUFBdUM7QUFDdkUsUUFBTSxpQkFBaUI7QUFDekI7QUFFTyxTQUFTLGlCQUEyRDtBQUN6RSxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsZUFDZCxRQUNNO0FBQ04sUUFBTSxjQUFjO0FBQ3RCO0FBRU8sU0FBUyxtQkFBeUM7QUFDdkQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLGlCQUFpQixVQUFzQztBQUNyRSxRQUFNLGdCQUFnQjtBQUN4QjtBQUNPLFNBQVMsb0JBQWdEO0FBQzlELFNBQU8sTUFBTTtBQUNmO0FBQ08sU0FBUyxrQkFBa0IsVUFBNEM7QUFDNUUsUUFBTSxpQkFBaUI7QUFDekI7QUFFTyxTQUFTLDZCQUFzQztBQUNwRCxTQUFPLENBQUMsTUFBTTtBQUNoQjtBQUVPLFNBQVMsbUJBQTRCO0FBQzFDLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxpQkFBaUIsT0FBc0I7QUFDckQsUUFBTSxnQkFBZ0I7QUFDeEI7QUFFTyxTQUFTLGdCQUF3QjtBQUN0QyxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsY0FBYyxNQUFvQjtBQUNoRCxRQUFNLGFBQWE7QUFDckI7QUFFTyxTQUFTLHNDQUErQztBQUM3RCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsb0NBQW9DLE9BQXNCO0FBQ3hFLFFBQU0sbUNBQW1DO0FBQzNDO0FBRU8sU0FBUyxrQkFBMkI7QUFDekMsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLGdCQUFnQixPQUFzQjtBQUNwRCxRQUFNLGVBQWU7QUFDdkI7QUFFTyxTQUFTLDZCQUFzQztBQUNwRCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsMkJBQTJCLE9BQXNCO0FBQy9ELFFBQU0sMEJBQTBCO0FBQ2xDO0FBS08sU0FBUyxrQkFBMkI7QUFDekMsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLGdCQUFnQixPQUFzQjtBQUNwRCxRQUFNLGVBQWU7QUFDdkI7QUFFTyxTQUFTLG1CQUF1QztBQUNyRCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsaUJBQWlCLFFBQXNCO0FBQ3JELFFBQU0sZ0JBQWdCO0FBQ3hCO0FBRU8sU0FBUywyQkFBNEQ7QUFDMUUsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHlCQUF5QixRQUFtQztBQUMxRSxRQUFNLHdCQUF3QjtBQUNoQztBQUVPLFNBQVMsbUJBQWdEO0FBQzlELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxzQkFBMEM7QUFDeEQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLG9CQUFvQixNQUFnQztBQUNsRSxRQUFNLG1CQUFtQjtBQUMzQjtBQUVPLFNBQVMsd0JBQXdEO0FBQ3RFLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxzQkFDZCxVQUNNO0FBQ04sUUFBTSxxQkFBcUI7QUFDN0I7QUFFTyxTQUFTLHlCQUFvRDtBQUNsRSxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsdUJBQXVCLE9BQTRCO0FBQ2pFLFFBQU0sc0JBQXNCO0FBQzlCO0FBRU8sU0FBUyxzQkFBaUQ7QUFDL0QsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLG9CQUFvQixPQUE0QjtBQUM5RCxRQUFNLG1CQUFtQjtBQUMzQjtBQUVPLFNBQVMsa0JBQTZDO0FBQzNELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxnQkFBZ0IsS0FBMEI7QUFDeEQsUUFBTSxlQUFlO0FBQ3ZCO0FBRU8sU0FBUyxrQkFDZCxRQUNNO0FBQ04sUUFBTSxpQkFBaUI7QUFDekI7QUFFTyxTQUFTLG9CQUdQO0FBQ1AsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLDBCQUNkLFVBQ007QUFDTixRQUFNLHlCQUF5QjtBQUNqQztBQUVPLFNBQVMsNEJBRVA7QUFDUCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsMEJBQTBCLFVBQWtDO0FBQzFFLFFBQU0seUJBQXlCO0FBQ2pDO0FBRU8sU0FBUyw0QkFBOEM7QUFDNUQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHlCQUF5QixTQUE4QjtBQUNyRSxRQUFNLHdCQUF3QjtBQUNoQztBQUVPLFNBQVMsMkJBQTBDO0FBQ3hELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxzQkFBc0IsV0FHN0I7QUFDUCxRQUFNLHVCQUF1QjtBQUM3QixNQUFJLE1BQU0saUJBQWlCLFVBQVUsc0JBQXNCO0FBQ3pELFVBQU0saUJBQWlCLE1BQU07QUFBQSxFQUMvQjtBQUNBLFFBQU0saUJBQWlCLEtBQUssU0FBUztBQUN2QztBQUVPLFNBQVMsMkJBQTRDO0FBQzFELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyx5QkFBeUIsU0FBZ0M7QUFDdkUsUUFBTSx3QkFBd0I7QUFDaEM7QUFFTyxTQUFTLGlDQUEwQztBQUV4RCxTQUFPLDJCQUEyQixLQUFLLE1BQU0sZUFBZTtBQUM5RDtBQUVPLFNBQVMsaUJBQWlCLFNBQThCO0FBQzdELFFBQU0sZ0JBQWdCO0FBQ3hCO0FBRU8sU0FBUyxtQkFBa0M7QUFDaEQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHNCQUFzQixPQUFrQztBQUN0RSxRQUFNLHFCQUFxQjtBQUM3QjtBQUVPLFNBQVMsd0JBQTZDO0FBQzNELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxvQkFBb0IsT0FBc0I7QUFDeEQsUUFBTSxtQkFBbUI7QUFDekIscUJBQW1CO0FBQ3JCO0FBRU8sU0FBUyxzQkFBK0I7QUFDN0MsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLGdDQUFnQyxTQUF3QjtBQUN0RSxRQUFNLCtCQUErQjtBQUN2QztBQUVPLFNBQVMsa0NBQTJDO0FBQ3pELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyx5QkFBeUIsU0FBd0I7QUFDL0QsUUFBTSx3QkFBd0I7QUFDaEM7QUFFTyxTQUFTLDJCQUFvQztBQUNsRCxTQUFPLE1BQU07QUFDZjtBQWdCTyxTQUFTLHNCQUF5QztBQUN2RCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsbUJBQW1CLE1BQTZCO0FBQzlELFFBQU0saUJBQWlCLEtBQUssSUFBSTtBQUNsQztBQU9PLFNBQVMsdUJBQXVCLEtBQWdDO0FBQ3JFLE1BQUksSUFBSSxXQUFXLEVBQUcsUUFBTztBQUM3QixRQUFNLFFBQVEsSUFBSSxJQUFJLEdBQUc7QUFDekIsUUFBTSxZQUFZLE1BQU0saUJBQWlCLE9BQU8sT0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUNyRSxRQUFNLFVBQVUsTUFBTSxpQkFBaUIsU0FBUyxVQUFVO0FBQzFELE1BQUksWUFBWSxFQUFHLFFBQU87QUFDMUIsUUFBTSxtQkFBbUI7QUFDekIsU0FBTztBQUNUO0FBRU8sU0FBUyx3QkFBd0IsVUFBeUI7QUFDL0QsUUFBTSx1QkFBdUI7QUFDL0I7QUFFTyxTQUFTLDBCQUFtQztBQUNqRCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsOEJBQThCLFVBQXlCO0FBQ3JFLFFBQU0sNkJBQTZCO0FBQ3JDO0FBRU8sU0FBUywrQkFBd0M7QUFDdEQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLDZCQUFzQztBQUNwRCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMscUJBQXFCLE9BQXNCO0FBQ3pELFFBQU0sb0JBQW9CO0FBQzVCO0FBRU8sU0FBUyw4QkFBdUM7QUFDckQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLCtCQUErQixPQUFzQjtBQUNuRSxRQUFNLDhCQUE4QjtBQUN0QztBQUVPLFNBQVMseUJBQ2QsVUFDQSxRQUNNO0FBR04sTUFBSSxXQUFXLFVBQVUsYUFBYSxRQUFRO0FBQzVDLFVBQU0sOEJBQThCO0FBQUEsRUFDdEM7QUFHQSxNQUFJLGFBQWEsVUFBVSxXQUFXLFFBQVE7QUFDNUMsVUFBTSw4QkFBOEI7QUFBQSxFQUN0QztBQUNGO0FBRU8sU0FBUyw4QkFBdUM7QUFDckQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLCtCQUErQixPQUFzQjtBQUNuRSxRQUFNLDhCQUE4QjtBQUN0QztBQUVPLFNBQVMseUJBQ2QsVUFDQSxRQUNNO0FBSU4sTUFDRyxhQUFhLFVBQVUsV0FBVyxVQUNsQyxhQUFhLFVBQVUsV0FBVyxRQUNuQztBQUNBO0FBQUEsRUFDRjtBQUNBLFFBQU0sYUFBYSxhQUFhO0FBQ2hDLFFBQU0sV0FBVyxXQUFXO0FBSTVCLE1BQUksWUFBWSxDQUFDLFlBQVk7QUFDM0IsVUFBTSw4QkFBOEI7QUFBQSxFQUN0QztBQUdBLE1BQUksY0FBYyxDQUFDLFVBQVU7QUFDM0IsVUFBTSw4QkFBOEI7QUFBQSxFQUN0QztBQUNGO0FBR08sU0FBUyx1Q0FBZ0Q7QUFDOUQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHFDQUFxQyxPQUFzQjtBQUN6RSxRQUFNLG9DQUFvQztBQUM1QztBQUdPLFNBQVMsa0JBQWtCLFFBQXVDO0FBQ3ZFLFFBQU0saUJBQWlCO0FBQ3pCO0FBRU8sU0FBUyxvQkFBb0Q7QUFDbEUsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHNCQUNkLE9BQ007QUFDTixNQUFJLENBQUMsTUFBTSxpQkFBaUI7QUFDMUIsVUFBTSxrQkFBa0IsQ0FBQztBQUFBLEVBQzNCO0FBR0EsYUFBVyxDQUFDLE9BQU8sUUFBUSxLQUFLLE9BQU8sUUFBUSxLQUFLLEdBQUc7QUFDckQsVUFBTSxXQUFXO0FBQ2pCLFFBQUksQ0FBQyxNQUFNLGdCQUFnQixRQUFRLEdBQUc7QUFDcEMsWUFBTSxnQkFBZ0IsUUFBUSxJQUFJLENBQUM7QUFBQSxJQUNyQztBQUNBLFVBQU0sZ0JBQWdCLFFBQVEsRUFBRyxLQUFLLEdBQUcsUUFBUTtBQUFBLEVBQ25EO0FBQ0Y7QUFFTyxTQUFTLHFCQUVQO0FBQ1AsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHVCQUE2QjtBQUMzQyxRQUFNLGtCQUFrQjtBQUMxQjtBQUVPLFNBQVMsNkJBQW1DO0FBQ2pELE1BQUksQ0FBQyxNQUFNLGlCQUFpQjtBQUMxQjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLFdBQWdFLENBQUM7QUFDdkUsYUFBVyxDQUFDLE9BQU8sUUFBUSxLQUFLLE9BQU8sUUFBUSxNQUFNLGVBQWUsR0FBRztBQUVyRSxVQUFNLGdCQUFnQixTQUFTLE9BQU8sT0FBSyxFQUFFLGdCQUFnQixFQUFFO0FBQy9ELFFBQUksY0FBYyxTQUFTLEdBQUc7QUFDNUIsZUFBUyxLQUFrQixJQUFJO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBRUEsUUFBTSxrQkFBa0IsT0FBTyxLQUFLLFFBQVEsRUFBRSxTQUFTLElBQUksV0FBVztBQUN4RTtBQUVPLFNBQVMsb0JBQTBCO0FBQ3hDLFFBQU0saUJBQWlCO0FBQ3ZCLFFBQU0sa0JBQWtCO0FBQzFCO0FBRU8sU0FBUyxtQkFBd0M7QUFDdEQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHlCQUFzQztBQUNwRCxTQUFPLE1BQU07QUFDZjtBQUdPLFNBQVMseUJBQXlCLE1BRWhDO0FBQ1AsUUFBTSx3QkFBd0I7QUFBQSxJQUM1QixjQUFjO0FBQUEsSUFDZCx1QkFBdUI7QUFBQSxJQUN2QixXQUFXLEtBQUs7QUFBQSxFQUNsQjtBQUNGO0FBRU8sU0FBUywyQkFJUDtBQUNQLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxpQ0FBdUM7QUFDckQsTUFBSSxNQUFNLHVCQUF1QjtBQUMvQixVQUFNLHNCQUFzQix3QkFBd0I7QUFBQSxFQUN0RDtBQUNGO0FBV08sU0FBUyxnQkFDZCxXQUNBLFdBQ0EsU0FDQSxVQUF5QixNQUNuQjtBQUNOLFFBQU0sTUFBTSxHQUFHLFdBQVcsRUFBRSxJQUFJLFNBQVM7QUFDekMsUUFBTSxjQUFjLElBQUksS0FBSztBQUFBLElBQzNCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLFdBQVcsS0FBSyxJQUFJO0FBQUEsSUFDcEI7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUVPLFNBQVMsbUJBQWtEO0FBQ2hFLFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyx5QkFDZCxTQUMrQjtBQUMvQixRQUFNLGVBQWUsV0FBVztBQUNoQyxRQUFNLFdBQVcsb0JBQUksSUFBOEI7QUFDbkQsYUFBVyxDQUFDLEtBQUssS0FBSyxLQUFLLE1BQU0sZUFBZTtBQUM5QyxRQUFJLE1BQU0sWUFBWSxjQUFjO0FBQ2xDLGVBQVMsSUFBSSxLQUFLLEtBQUs7QUFBQSxJQUN6QjtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUFFTyxTQUFTLG1CQUNkLG1CQUNNO0FBQ04sTUFBSSxDQUFDLHFCQUFxQixrQkFBa0IsU0FBUyxHQUFHO0FBQ3RELFVBQU0sY0FBYyxNQUFNO0FBQzFCO0FBQUEsRUFDRjtBQUNBLGFBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxNQUFNLGVBQWU7QUFDOUMsUUFBSSxNQUFNLFlBQVksUUFBUSxDQUFDLGtCQUFrQixJQUFJLE1BQU0sT0FBTyxHQUFHO0FBQ25FLFlBQU0sY0FBYyxPQUFPLEdBQUc7QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFDRjtBQUVPLFNBQVMsMkJBQTJCLFNBQXVCO0FBQ2hFLGFBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxNQUFNLGVBQWU7QUFDOUMsUUFBSSxNQUFNLFlBQVksU0FBUztBQUM3QixZQUFNLGNBQWMsT0FBTyxHQUFHO0FBQUEsSUFDaEM7QUFBQSxFQUNGO0FBQ0Y7QUFNTyxTQUFTLGlCQUFpQixXQUFtQixZQUEwQjtBQUM1RSxNQUFJLFFBQVEsSUFBSSxjQUFjLE1BQU87QUFHckMsTUFBSSxVQUFVLFNBQVMsTUFBTSxLQUFLLFVBQVUsU0FBUyxnQkFBZ0IsR0FBRztBQUN0RTtBQUFBLEVBQ0Y7QUFDQSxRQUFNLE1BQU0sS0FBSyxJQUFJO0FBRXJCLFFBQU0saUJBQWlCLE1BQU0sZUFBZTtBQUFBLElBQzFDLFFBQU0sTUFBTSxHQUFHLFlBQVk7QUFBQSxFQUM3QjtBQUVBLFFBQU0sZUFBZSxLQUFLLEVBQUUsV0FBVyxZQUFZLFdBQVcsSUFBSSxDQUFDO0FBRW5FLE1BQUksTUFBTSxlQUFlLFNBQVMscUJBQXFCO0FBQ3JELFVBQU0saUJBQWlCLE1BQU0sZUFBZSxNQUFNLENBQUMsbUJBQW1CO0FBQUEsRUFDeEU7QUFDRjtBQVFPLFNBQVMsb0JBSWI7QUFHRCxNQUFJLE1BQU0sZUFBZSxXQUFXLEdBQUc7QUFDckMsV0FBTztBQUFBLEVBQ1Q7QUFDQSxRQUFNLE1BQU0sS0FBSyxJQUFJO0FBR3JCLE1BQ0UsTUFBTSxlQUFlLEtBQUssUUFBTSxNQUFNLEdBQUcsYUFBYSxxQkFBcUIsR0FDM0U7QUFDQSxVQUFNLGlCQUFpQixNQUFNLGVBQWU7QUFBQSxNQUMxQyxRQUFNLE1BQU0sR0FBRyxZQUFZO0FBQUEsSUFDN0I7QUFDQSxRQUFJLE1BQU0sZUFBZSxXQUFXLEdBQUc7QUFDckMsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBR0EsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHlCQUE2QztBQUMzRCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsdUJBQXVCLFdBQXFDO0FBQzFFLFFBQU0sc0JBQXNCO0FBQzlCO0FBRU8sU0FBUyxrQkFBMkI7QUFDekMsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLGdCQUFnQixPQUFzQjtBQUNwRCxRQUFNLGVBQWU7QUFDdkI7QUFJTyxTQUFTLDhCQUEwRDtBQUN4RSxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsaUNBQ2QsTUFDQSxPQUNNO0FBQ04sUUFBTSx5QkFBeUIsSUFBSSxNQUFNLEtBQUs7QUFDaEQ7QUFFTyxTQUFTLGdDQUFzQztBQUNwRCxRQUFNLHlCQUF5QixNQUFNO0FBQ3ZDO0FBSU8sU0FBUyxxQkFBb0M7QUFDbEQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLG1CQUFtQixNQUEyQjtBQUM1RCxRQUFNLGtCQUFrQjtBQUMxQjtBQUVPLFNBQVMsc0NBQWdEO0FBQzlELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyxvQ0FDZCxhQUNNO0FBQ04sUUFBTSxtQ0FBbUM7QUFDM0M7QUFFTyxTQUFTLHFCQUFxQztBQUNuRCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsbUJBQW1CLFNBQStCO0FBQ2hFLFFBQU0sa0JBQWtCO0FBQzFCO0FBRU8sU0FBUyxvQkFBNkI7QUFDM0MsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLGtCQUFrQixPQUFzQjtBQUN0RCxRQUFNLGlCQUFpQjtBQUN6QjtBQUVPLFNBQVMsNEJBQTZDO0FBQzNELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUywwQkFBMEIsV0FBa0M7QUFDMUUsUUFBTSx5QkFBeUI7QUFDakM7QUFFTyxTQUFTLDJCQUEyQztBQUN6RCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMseUJBQXlCLFVBQWdDO0FBQ3ZFLFFBQU0sd0JBQXdCO0FBQ2hDO0FBRU8sU0FBUywwQkFBMEM7QUFDeEQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHdCQUF3QixHQUFrQjtBQUN4RCxRQUFNLHVCQUF1QjtBQUMvQjtBQUVPLFNBQVMsMkJBQTJDO0FBQ3pELFNBQU8sTUFBTTtBQUNmO0FBRU8sU0FBUyx5QkFBeUIsR0FBa0I7QUFDekQsUUFBTSx3QkFBd0I7QUFDaEM7QUFFTyxTQUFTLCtCQUErQztBQUM3RCxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsNkJBQTZCLEdBQWtCO0FBQzdELFFBQU0sNEJBQTRCO0FBQ3BDO0FBRU8sU0FBUywwQkFBMEM7QUFDeEQsU0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLHdCQUF3QixHQUFrQjtBQUN4RCxRQUFNLHVCQUF1QjtBQUMvQjtBQU1PLFNBQVMseUJBQStCO0FBQzdDLFFBQU0sdUJBQXVCO0FBQzdCLFFBQU0sd0JBQXdCO0FBQzlCLFFBQU0sNEJBQTRCO0FBQ2xDLFFBQU0sdUJBQXVCO0FBQy9CO0FBRU8sU0FBUyxjQUE2QjtBQUMzQyxTQUFPLE1BQU07QUFDZjtBQUVPLFNBQVMsWUFBWSxJQUF5QjtBQUNuRCxRQUFNLFdBQVc7QUFDbkI7QUFqdURBLElBNmFNLE9Bb0RBLGlCQVFPLGlCQW9MVCxzQkEyREEseUJBQ0Esd0JBT0EseUJBNERBLGdCQUNBLGtCQUNFLHNCQW93QkEscUJBQ0EsdUJBc0JBO0FBempETjtBQUFBO0FBT0E7QUFVQTtBQUlBO0FBRUE7QUFzWkEsSUFBTSxRQUFlLGdCQUFnQjtBQW9EckMsSUFBTSxrQkFBa0IsYUFBOEI7QUFRL0MsSUFBTSxrQkFBa0IsZ0JBQWdCO0FBb0wvQyxJQUFJLHVCQUF1QjtBQTJEM0IsSUFBSSwwQkFBMEI7QUFDOUIsSUFBSSx5QkFBd0M7QUFPNUMsSUFBSSwwQkFBMEI7QUE0RDlCLElBQUksaUJBQWlCO0FBRXJCLElBQU0sdUJBQXVCO0FBb3dCN0IsSUFBTSxzQkFBc0I7QUFDNUIsSUFBTSx3QkFBd0I7QUFzQjlCLElBQU0sd0JBSUQsQ0FBQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbIm90aFZhbHVlIiwgIkNPTVBBUkVfUEFSVElBTF9GTEFHIiwgIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCAib2JqZWN0UHJvdG8iLCAicHJvcGVydHlJc0VudW1lcmFibGUiLCAiTUFYX1NBRkVfSU5URUdFUiIsICJhcmdzVGFnIiwgImJvb2xUYWciLCAiZGF0ZVRhZyIsICJlcnJvclRhZyIsICJtYXBUYWciLCAibnVtYmVyVGFnIiwgInJlZ2V4cFRhZyIsICJzZXRUYWciLCAic3RyaW5nVGFnIiwgImFycmF5QnVmZmVyVGFnIiwgImRhdGFWaWV3VGFnIiwgImZyZWVFeHBvcnRzIiwgImZyZWVNb2R1bGUiLCAibW9kdWxlRXhwb3J0cyIsICJoYXNPd25Qcm9wZXJ0eSIsICJvYmplY3RQcm90byIsICJvYmplY3RQcm90byIsICJoYXNPd25Qcm9wZXJ0eSIsICJvYmplY3RQcm90byIsICJDT01QQVJFX1BBUlRJQUxfRkxBRyIsICJoYXNPd25Qcm9wZXJ0eSIsICJvYmplY3RQcm90byIsICJQcm9taXNlIiwgIlNldCIsICJtYXBUYWciLCAib2JqZWN0VGFnIiwgInNldFRhZyIsICJ3ZWFrTWFwVGFnIiwgImRhdGFWaWV3VGFnIiwgImFycmF5VGFnIiwgImFyZ3NUYWciLCAib2JqZWN0VGFnIiwgIkNPTVBBUkVfUEFSVElBTF9GTEFHIiwgImhhc093blByb3BlcnR5IiwgIm9iamVjdFByb3RvIiwgIkNPTVBBUkVfUEFSVElBTF9GTEFHIiwgIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCAic3ltYm9sVGFnIiwgInN5bWJvbFByb3RvIiwgIklORklOSVRZIiwgIkNPTVBBUkVfUEFSVElBTF9GTEFHIiwgIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCAiY3dkIl0KfQo=
