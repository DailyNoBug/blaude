#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __commonJS,
  __require
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js"(exports, module) {
    var buffer = __require("buffer");
    var Buffer = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer.prototype);
    copyProps(Buffer, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/.pnpm/ecdsa-sig-formatter@1.0.11/node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js
var require_param_bytes_for_alg = __commonJS({
  "node_modules/.pnpm/ecdsa-sig-formatter@1.0.11/node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js"(exports, module) {
    "use strict";
    function getParamSize(keySize) {
      var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
      return result;
    }
    var paramBytesForAlg = {
      ES256: getParamSize(256),
      ES384: getParamSize(384),
      ES512: getParamSize(521)
    };
    function getParamBytesForAlg(alg) {
      var paramBytes = paramBytesForAlg[alg];
      if (paramBytes) {
        return paramBytes;
      }
      throw new Error('Unknown algorithm "' + alg + '"');
    }
    module.exports = getParamBytesForAlg;
  }
});

// node_modules/.pnpm/ecdsa-sig-formatter@1.0.11/node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js
var require_ecdsa_sig_formatter = __commonJS({
  "node_modules/.pnpm/ecdsa-sig-formatter@1.0.11/node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js"(exports, module) {
    "use strict";
    var Buffer = require_safe_buffer().Buffer;
    var getParamBytesForAlg = require_param_bytes_for_alg();
    var MAX_OCTET = 128;
    var CLASS_UNIVERSAL = 0;
    var PRIMITIVE_BIT = 32;
    var TAG_SEQ = 16;
    var TAG_INT = 2;
    var ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
    var ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
    function base64Url(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function signatureAsBuffer(signature) {
      if (Buffer.isBuffer(signature)) {
        return signature;
      } else if ("string" === typeof signature) {
        return Buffer.from(signature, "base64");
      }
      throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
    }
    function derToJose(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var maxEncodedParamLength = paramBytes + 1;
      var inputLength = signature.length;
      var offset = 0;
      if (signature[offset++] !== ENCODED_TAG_SEQ) {
        throw new Error('Could not find expected "seq"');
      }
      var seqLength = signature[offset++];
      if (seqLength === (MAX_OCTET | 1)) {
        seqLength = signature[offset++];
      }
      if (inputLength - offset < seqLength) {
        throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
      }
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "r"');
      }
      var rLength = signature[offset++];
      if (inputLength - offset - 2 < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
      }
      if (maxEncodedParamLength < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var rOffset = offset;
      offset += rLength;
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "s"');
      }
      var sLength = signature[offset++];
      if (inputLength - offset !== sLength) {
        throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
      }
      if (maxEncodedParamLength < sLength) {
        throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var sOffset = offset;
      offset += sLength;
      if (offset !== inputLength) {
        throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
      }
      var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
      var dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);
      for (offset = 0; offset < rPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
      offset = paramBytes;
      for (var o = offset; offset < o + sPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
      dst = dst.toString("base64");
      dst = base64Url(dst);
      return dst;
    }
    function countPadding(buf, start, stop) {
      var padding = 0;
      while (start + padding < stop && buf[start + padding] === 0) {
        ++padding;
      }
      var needsSign = buf[start + padding] >= MAX_OCTET;
      if (needsSign) {
        --padding;
      }
      return padding;
    }
    function joseToDer(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var signatureBytes = signature.length;
      if (signatureBytes !== paramBytes * 2) {
        throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
      }
      var rPadding = countPadding(signature, 0, paramBytes);
      var sPadding = countPadding(signature, paramBytes, signature.length);
      var rLength = paramBytes - rPadding;
      var sLength = paramBytes - sPadding;
      var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
      var shortLength = rsBytes < MAX_OCTET;
      var dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
      var offset = 0;
      dst[offset++] = ENCODED_TAG_SEQ;
      if (shortLength) {
        dst[offset++] = rsBytes;
      } else {
        dst[offset++] = MAX_OCTET | 1;
        dst[offset++] = rsBytes & 255;
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = rLength;
      if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
      } else {
        offset += signature.copy(dst, offset, rPadding, paramBytes);
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = sLength;
      if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
      } else {
        signature.copy(dst, offset, paramBytes + sPadding);
      }
      return dst;
    }
    module.exports = {
      derToJose,
      joseToDer
    };
  }
});

// node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/data-stream.js
var require_data_stream = __commonJS({
  "node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/data-stream.js"(exports, module) {
    var Buffer = require_safe_buffer().Buffer;
    var Stream = __require("stream");
    var util = __require("util");
    function DataStream(data) {
      this.buffer = null;
      this.writable = true;
      this.readable = true;
      if (!data) {
        this.buffer = Buffer.alloc(0);
        return this;
      }
      if (typeof data.pipe === "function") {
        this.buffer = Buffer.alloc(0);
        data.pipe(this);
        return this;
      }
      if (data.length || typeof data === "object") {
        this.buffer = data;
        this.writable = false;
        process.nextTick(function() {
          this.emit("end", data);
          this.readable = false;
          this.emit("close");
        }.bind(this));
        return this;
      }
      throw new TypeError("Unexpected data type (" + typeof data + ")");
    }
    util.inherits(DataStream, Stream);
    DataStream.prototype.write = function write(data) {
      this.buffer = Buffer.concat([this.buffer, Buffer.from(data)]);
      this.emit("data", data);
    };
    DataStream.prototype.end = function end(data) {
      if (data)
        this.write(data);
      this.emit("end", data);
      this.emit("close");
      this.writable = false;
      this.readable = false;
    };
    module.exports = DataStream;
  }
});

// node_modules/.pnpm/buffer-equal-constant-time@1.0.1/node_modules/buffer-equal-constant-time/index.js
var require_buffer_equal_constant_time = __commonJS({
  "node_modules/.pnpm/buffer-equal-constant-time@1.0.1/node_modules/buffer-equal-constant-time/index.js"(exports, module) {
    "use strict";
    var Buffer = __require("buffer").Buffer;
    var SlowBuffer = __require("buffer").SlowBuffer;
    module.exports = bufferEq;
    function bufferEq(a, b) {
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        return false;
      }
      if (a.length !== b.length) {
        return false;
      }
      var c = 0;
      for (var i = 0; i < a.length; i++) {
        c |= a[i] ^ b[i];
      }
      return c === 0;
    }
    bufferEq.install = function() {
      Buffer.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
        return bufferEq(this, that);
      };
    };
    var origBufEqual = Buffer.prototype.equal;
    var origSlowBufEqual = SlowBuffer.prototype.equal;
    bufferEq.restore = function() {
      Buffer.prototype.equal = origBufEqual;
      SlowBuffer.prototype.equal = origSlowBufEqual;
    };
  }
});

// node_modules/.pnpm/jwa@2.0.1/node_modules/jwa/index.js
var require_jwa = __commonJS({
  "node_modules/.pnpm/jwa@2.0.1/node_modules/jwa/index.js"(exports, module) {
    var Buffer = require_safe_buffer().Buffer;
    var crypto = __require("crypto");
    var formatEcdsa = require_ecdsa_sig_formatter();
    var util = __require("util");
    var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
    var MSG_INVALID_SECRET = "secret must be a string or buffer";
    var MSG_INVALID_VERIFIER_KEY = "key must be a string or a buffer";
    var MSG_INVALID_SIGNER_KEY = "key must be a string, a buffer or an object";
    var supportsKeyObjects = typeof crypto.createPublicKey === "function";
    if (supportsKeyObjects) {
      MSG_INVALID_VERIFIER_KEY += " or a KeyObject";
      MSG_INVALID_SECRET += "or a KeyObject";
    }
    function checkIsPublicKey(key) {
      if (Buffer.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.type !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.asymmetricKeyType !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
    }
    function checkIsPrivateKey(key) {
      if (Buffer.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (typeof key === "object") {
        return;
      }
      throw typeError(MSG_INVALID_SIGNER_KEY);
    }
    function checkIsSecretKey(key) {
      if (Buffer.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return key;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (key.type !== "secret") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_SECRET);
      }
    }
    function fromBase64(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function toBase64(base64url) {
      base64url = base64url.toString();
      var padding = 4 - base64url.length % 4;
      if (padding !== 4) {
        for (var i = 0; i < padding; ++i) {
          base64url += "=";
        }
      }
      return base64url.replace(/\-/g, "+").replace(/_/g, "/");
    }
    function typeError(template) {
      var args = [].slice.call(arguments, 1);
      var errMsg = util.format.bind(util, template).apply(null, args);
      return new TypeError(errMsg);
    }
    function bufferOrString(obj) {
      return Buffer.isBuffer(obj) || typeof obj === "string";
    }
    function normalizeInput(thing) {
      if (!bufferOrString(thing))
        thing = JSON.stringify(thing);
      return thing;
    }
    function createHmacSigner(bits) {
      return function sign(thing, secret) {
        checkIsSecretKey(secret);
        thing = normalizeInput(thing);
        var hmac = crypto.createHmac("sha" + bits, secret);
        var sig = (hmac.update(thing), hmac.digest("base64"));
        return fromBase64(sig);
      };
    }
    var bufferEqual;
    var timingSafeEqual = "timingSafeEqual" in crypto ? function timingSafeEqual2(a, b) {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      return crypto.timingSafeEqual(a, b);
    } : function timingSafeEqual2(a, b) {
      if (!bufferEqual) {
        bufferEqual = require_buffer_equal_constant_time();
      }
      return bufferEqual(a, b);
    };
    function createHmacVerifier(bits) {
      return function verify(thing, signature, secret) {
        var computedSig = createHmacSigner(bits)(thing, secret);
        return timingSafeEqual(Buffer.from(signature), Buffer.from(computedSig));
      };
    }
    function createKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, "base64"));
        return fromBase64(sig);
      };
    }
    function createKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, "base64");
      };
    }
    function createPSSKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign({
          key: privateKey,
          padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, "base64"));
        return fromBase64(sig);
      };
    }
    function createPSSKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify({
          key: publicKey,
          padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, signature, "base64");
      };
    }
    function createECDSASigner(bits) {
      var inner = createKeySigner(bits);
      return function sign() {
        var signature = inner.apply(null, arguments);
        signature = formatEcdsa.derToJose(signature, "ES" + bits);
        return signature;
      };
    }
    function createECDSAVerifer(bits) {
      var inner = createKeyVerifier(bits);
      return function verify(thing, signature, publicKey) {
        signature = formatEcdsa.joseToDer(signature, "ES" + bits).toString("base64");
        var result = inner(thing, signature, publicKey);
        return result;
      };
    }
    function createNoneSigner() {
      return function sign() {
        return "";
      };
    }
    function createNoneVerifier() {
      return function verify(thing, signature) {
        return signature === "";
      };
    }
    module.exports = function jwa(algorithm) {
      var signerFactories = {
        hs: createHmacSigner,
        rs: createKeySigner,
        ps: createPSSKeySigner,
        es: createECDSASigner,
        none: createNoneSigner
      };
      var verifierFactories = {
        hs: createHmacVerifier,
        rs: createKeyVerifier,
        ps: createPSSKeyVerifier,
        es: createECDSAVerifer,
        none: createNoneVerifier
      };
      var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
      if (!match)
        throw typeError(MSG_INVALID_ALGORITHM, algorithm);
      var algo = (match[1] || match[3]).toLowerCase();
      var bits = match[2];
      return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
      };
    };
  }
});

// node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/tostring.js
var require_tostring = __commonJS({
  "node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/tostring.js"(exports, module) {
    var Buffer = __require("buffer").Buffer;
    module.exports = function toString(obj) {
      if (typeof obj === "string")
        return obj;
      if (typeof obj === "number" || Buffer.isBuffer(obj))
        return obj.toString();
      return JSON.stringify(obj);
    };
  }
});

// node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/sign-stream.js
var require_sign_stream = __commonJS({
  "node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/sign-stream.js"(exports, module) {
    var Buffer = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = __require("stream");
    var toString = require_tostring();
    var util = __require("util");
    function base64url(string, encoding) {
      return Buffer.from(string, encoding).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function jwsSecuredInput(header, payload, encoding) {
      encoding = encoding || "utf8";
      var encodedHeader = base64url(toString(header), "binary");
      var encodedPayload = base64url(toString(payload), encoding);
      return util.format("%s.%s", encodedHeader, encodedPayload);
    }
    function jwsSign(opts) {
      var header = opts.header;
      var payload = opts.payload;
      var secretOrKey = opts.secret || opts.privateKey;
      var encoding = opts.encoding;
      var algo = jwa(header.alg);
      var securedInput = jwsSecuredInput(header, payload, encoding);
      var signature = algo.sign(securedInput, secretOrKey);
      return util.format("%s.%s", securedInput, signature);
    }
    function SignStream(opts) {
      var secret = opts.secret;
      secret = secret == null ? opts.privateKey : secret;
      secret = secret == null ? opts.key : secret;
      if (/^hs/i.test(opts.header.alg) === true && secret == null) {
        throw new TypeError("secret must be a string or buffer or a KeyObject");
      }
      var secretStream = new DataStream(secret);
      this.readable = true;
      this.header = opts.header;
      this.encoding = opts.encoding;
      this.secret = this.privateKey = this.key = secretStream;
      this.payload = new DataStream(opts.payload);
      this.secret.once("close", function() {
        if (!this.payload.writable && this.readable)
          this.sign();
      }.bind(this));
      this.payload.once("close", function() {
        if (!this.secret.writable && this.readable)
          this.sign();
      }.bind(this));
    }
    util.inherits(SignStream, Stream);
    SignStream.prototype.sign = function sign() {
      try {
        var signature = jwsSign({
          header: this.header,
          payload: this.payload.buffer,
          secret: this.secret.buffer,
          encoding: this.encoding
        });
        this.emit("done", signature);
        this.emit("data", signature);
        this.emit("end");
        this.readable = false;
        return signature;
      } catch (e) {
        this.readable = false;
        this.emit("error", e);
        this.emit("close");
      }
    };
    SignStream.sign = jwsSign;
    module.exports = SignStream;
  }
});

// node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/verify-stream.js
var require_verify_stream = __commonJS({
  "node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/verify-stream.js"(exports, module) {
    var Buffer = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = __require("stream");
    var toString = require_tostring();
    var util = __require("util");
    var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
    function isObject(thing) {
      return Object.prototype.toString.call(thing) === "[object Object]";
    }
    function safeJsonParse(thing) {
      if (isObject(thing))
        return thing;
      try {
        return JSON.parse(thing);
      } catch (e) {
        return void 0;
      }
    }
    function headerFromJWS(jwsSig) {
      var encodedHeader = jwsSig.split(".", 1)[0];
      return safeJsonParse(Buffer.from(encodedHeader, "base64").toString("binary"));
    }
    function securedInputFromJWS(jwsSig) {
      return jwsSig.split(".", 2).join(".");
    }
    function signatureFromJWS(jwsSig) {
      return jwsSig.split(".")[2];
    }
    function payloadFromJWS(jwsSig, encoding) {
      encoding = encoding || "utf8";
      var payload = jwsSig.split(".")[1];
      return Buffer.from(payload, "base64").toString(encoding);
    }
    function isValidJws(string) {
      return JWS_REGEX.test(string) && !!headerFromJWS(string);
    }
    function jwsVerify(jwsSig, algorithm, secretOrKey) {
      if (!algorithm) {
        var err = new Error("Missing algorithm parameter for jws.verify");
        err.code = "MISSING_ALGORITHM";
        throw err;
      }
      jwsSig = toString(jwsSig);
      var signature = signatureFromJWS(jwsSig);
      var securedInput = securedInputFromJWS(jwsSig);
      var algo = jwa(algorithm);
      return algo.verify(securedInput, signature, secretOrKey);
    }
    function jwsDecode(jwsSig, opts) {
      opts = opts || {};
      jwsSig = toString(jwsSig);
      if (!isValidJws(jwsSig))
        return null;
      var header = headerFromJWS(jwsSig);
      if (!header)
        return null;
      var payload = payloadFromJWS(jwsSig);
      if (header.typ === "JWT" || opts.json)
        payload = JSON.parse(payload, opts.encoding);
      return {
        header,
        payload,
        signature: signatureFromJWS(jwsSig)
      };
    }
    function VerifyStream(opts) {
      opts = opts || {};
      var secretOrKey = opts.secret;
      secretOrKey = secretOrKey == null ? opts.publicKey : secretOrKey;
      secretOrKey = secretOrKey == null ? opts.key : secretOrKey;
      if (/^hs/i.test(opts.algorithm) === true && secretOrKey == null) {
        throw new TypeError("secret must be a string or buffer or a KeyObject");
      }
      var secretStream = new DataStream(secretOrKey);
      this.readable = true;
      this.algorithm = opts.algorithm;
      this.encoding = opts.encoding;
      this.secret = this.publicKey = this.key = secretStream;
      this.signature = new DataStream(opts.signature);
      this.secret.once("close", function() {
        if (!this.signature.writable && this.readable)
          this.verify();
      }.bind(this));
      this.signature.once("close", function() {
        if (!this.secret.writable && this.readable)
          this.verify();
      }.bind(this));
    }
    util.inherits(VerifyStream, Stream);
    VerifyStream.prototype.verify = function verify() {
      try {
        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = jwsDecode(this.signature.buffer, this.encoding);
        this.emit("done", valid, obj);
        this.emit("data", valid);
        this.emit("end");
        this.readable = false;
        return valid;
      } catch (e) {
        this.readable = false;
        this.emit("error", e);
        this.emit("close");
      }
    };
    VerifyStream.decode = jwsDecode;
    VerifyStream.isValid = isValidJws;
    VerifyStream.verify = jwsVerify;
    module.exports = VerifyStream;
  }
});

// node_modules/.pnpm/jws@4.0.1/node_modules/jws/index.js
var require_jws = __commonJS({
  "node_modules/.pnpm/jws@4.0.1/node_modules/jws/index.js"(exports) {
    var SignStream = require_sign_stream();
    var VerifyStream = require_verify_stream();
    var ALGORITHMS = [
      "HS256",
      "HS384",
      "HS512",
      "RS256",
      "RS384",
      "RS512",
      "PS256",
      "PS384",
      "PS512",
      "ES256",
      "ES384",
      "ES512"
    ];
    exports.ALGORITHMS = ALGORITHMS;
    exports.sign = SignStream.sign;
    exports.verify = VerifyStream.verify;
    exports.decode = VerifyStream.decode;
    exports.isValid = VerifyStream.isValid;
    exports.createSign = function createSign(opts) {
      return new SignStream(opts);
    };
    exports.createVerify = function createVerify(opts) {
      return new VerifyStream(opts);
    };
  }
});

export {
  require_ecdsa_sig_formatter,
  require_jws
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NhZmUtYnVmZmVyQDUuMi4xL25vZGVfbW9kdWxlcy9zYWZlLWJ1ZmZlci9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZWNkc2Etc2lnLWZvcm1hdHRlckAxLjAuMTEvbm9kZV9tb2R1bGVzL2VjZHNhLXNpZy1mb3JtYXR0ZXIvc3JjL3BhcmFtLWJ5dGVzLWZvci1hbGcuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2VjZHNhLXNpZy1mb3JtYXR0ZXJAMS4wLjExL25vZGVfbW9kdWxlcy9lY2RzYS1zaWctZm9ybWF0dGVyL3NyYy9lY2RzYS1zaWctZm9ybWF0dGVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9qd3NANC4wLjEvbm9kZV9tb2R1bGVzL2p3cy9saWIvZGF0YS1zdHJlYW0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2J1ZmZlci1lcXVhbC1jb25zdGFudC10aW1lQDEuMC4xL25vZGVfbW9kdWxlcy9idWZmZXItZXF1YWwtY29uc3RhbnQtdGltZS9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vandhQDIuMC4xL25vZGVfbW9kdWxlcy9qd2EvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2p3c0A0LjAuMS9ub2RlX21vZHVsZXMvandzL2xpYi90b3N0cmluZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vandzQDQuMC4xL25vZGVfbW9kdWxlcy9qd3MvbGliL3NpZ24tc3RyZWFtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9qd3NANC4wLjEvbm9kZV9tb2R1bGVzL2p3cy9saWIvdmVyaWZ5LXN0cmVhbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vandzQDQuMC4xL25vZGVfbW9kdWxlcy9qd3MvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qISBzYWZlLWJ1ZmZlci4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm9kZS9uby1kZXByZWNhdGVkLWFwaSAqL1xudmFyIGJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpXG52YXIgQnVmZmVyID0gYnVmZmVyLkJ1ZmZlclxuXG4vLyBhbHRlcm5hdGl2ZSB0byB1c2luZyBPYmplY3Qua2V5cyBmb3Igb2xkIGJyb3dzZXJzXG5mdW5jdGlvbiBjb3B5UHJvcHMgKHNyYywgZHN0KSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBkc3Rba2V5XSA9IHNyY1trZXldXG4gIH1cbn1cbmlmIChCdWZmZXIuZnJvbSAmJiBCdWZmZXIuYWxsb2MgJiYgQnVmZmVyLmFsbG9jVW5zYWZlICYmIEJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBidWZmZXJcbn0gZWxzZSB7XG4gIC8vIENvcHkgcHJvcGVydGllcyBmcm9tIHJlcXVpcmUoJ2J1ZmZlcicpXG4gIGNvcHlQcm9wcyhidWZmZXIsIGV4cG9ydHMpXG4gIGV4cG9ydHMuQnVmZmVyID0gU2FmZUJ1ZmZlclxufVxuXG5mdW5jdGlvbiBTYWZlQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5TYWZlQnVmZmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQnVmZmVyLnByb3RvdHlwZSlcblxuLy8gQ29weSBzdGF0aWMgbWV0aG9kcyBmcm9tIEJ1ZmZlclxuY29weVByb3BzKEJ1ZmZlciwgU2FmZUJ1ZmZlcilcblxuU2FmZUJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5TYWZlQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICB2YXIgYnVmID0gQnVmZmVyKHNpemUpXG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgYnVmLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5maWxsKGZpbGwpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJ1Zi5maWxsKDApXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5TYWZlQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBCdWZmZXIoc2l6ZSlcbn1cblxuU2FmZUJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlci5TbG93QnVmZmVyKHNpemUpXG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBnZXRQYXJhbVNpemUoa2V5U2l6ZSkge1xuXHR2YXIgcmVzdWx0ID0gKChrZXlTaXplIC8gOCkgfCAwKSArIChrZXlTaXplICUgOCA9PT0gMCA/IDAgOiAxKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIHBhcmFtQnl0ZXNGb3JBbGcgPSB7XG5cdEVTMjU2OiBnZXRQYXJhbVNpemUoMjU2KSxcblx0RVMzODQ6IGdldFBhcmFtU2l6ZSgzODQpLFxuXHRFUzUxMjogZ2V0UGFyYW1TaXplKDUyMSlcbn07XG5cbmZ1bmN0aW9uIGdldFBhcmFtQnl0ZXNGb3JBbGcoYWxnKSB7XG5cdHZhciBwYXJhbUJ5dGVzID0gcGFyYW1CeXRlc0ZvckFsZ1thbGddO1xuXHRpZiAocGFyYW1CeXRlcykge1xuXHRcdHJldHVybiBwYXJhbUJ5dGVzO1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGFsZ29yaXRobSBcIicgKyBhbGcgKyAnXCInKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQYXJhbUJ5dGVzRm9yQWxnO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xuXG52YXIgZ2V0UGFyYW1CeXRlc0ZvckFsZyA9IHJlcXVpcmUoJy4vcGFyYW0tYnl0ZXMtZm9yLWFsZycpO1xuXG52YXIgTUFYX09DVEVUID0gMHg4MCxcblx0Q0xBU1NfVU5JVkVSU0FMID0gMCxcblx0UFJJTUlUSVZFX0JJVCA9IDB4MjAsXG5cdFRBR19TRVEgPSAweDEwLFxuXHRUQUdfSU5UID0gMHgwMixcblx0RU5DT0RFRF9UQUdfU0VRID0gKFRBR19TRVEgfCBQUklNSVRJVkVfQklUKSB8IChDTEFTU19VTklWRVJTQUwgPDwgNiksXG5cdEVOQ09ERURfVEFHX0lOVCA9IFRBR19JTlQgfCAoQ0xBU1NfVU5JVkVSU0FMIDw8IDYpO1xuXG5mdW5jdGlvbiBiYXNlNjRVcmwoYmFzZTY0KSB7XG5cdHJldHVybiBiYXNlNjRcblx0XHQucmVwbGFjZSgvPS9nLCAnJylcblx0XHQucmVwbGFjZSgvXFwrL2csICctJylcblx0XHQucmVwbGFjZSgvXFwvL2csICdfJyk7XG59XG5cbmZ1bmN0aW9uIHNpZ25hdHVyZUFzQnVmZmVyKHNpZ25hdHVyZSkge1xuXHRpZiAoQnVmZmVyLmlzQnVmZmVyKHNpZ25hdHVyZSkpIHtcblx0XHRyZXR1cm4gc2lnbmF0dXJlO1xuXHR9IGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlb2Ygc2lnbmF0dXJlKSB7XG5cdFx0cmV0dXJuIEJ1ZmZlci5mcm9tKHNpZ25hdHVyZSwgJ2Jhc2U2NCcpO1xuXHR9XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcignRUNEU0Egc2lnbmF0dXJlIG11c3QgYmUgYSBCYXNlNjQgc3RyaW5nIG9yIGEgQnVmZmVyJyk7XG59XG5cbmZ1bmN0aW9uIGRlclRvSm9zZShzaWduYXR1cmUsIGFsZykge1xuXHRzaWduYXR1cmUgPSBzaWduYXR1cmVBc0J1ZmZlcihzaWduYXR1cmUpO1xuXHR2YXIgcGFyYW1CeXRlcyA9IGdldFBhcmFtQnl0ZXNGb3JBbGcoYWxnKTtcblxuXHQvLyB0aGUgREVSIGVuY29kZWQgcGFyYW0gc2hvdWxkIGF0IG1vc3QgYmUgdGhlIHBhcmFtIHNpemUsIHBsdXMgYSBwYWRkaW5nXG5cdC8vIHplcm8sIHNpbmNlIGR1ZSB0byBiZWluZyBhIHNpZ25lZCBpbnRlZ2VyXG5cdHZhciBtYXhFbmNvZGVkUGFyYW1MZW5ndGggPSBwYXJhbUJ5dGVzICsgMTtcblxuXHR2YXIgaW5wdXRMZW5ndGggPSBzaWduYXR1cmUubGVuZ3RoO1xuXG5cdHZhciBvZmZzZXQgPSAwO1xuXHRpZiAoc2lnbmF0dXJlW29mZnNldCsrXSAhPT0gRU5DT0RFRF9UQUdfU0VRKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBleHBlY3RlZCBcInNlcVwiJyk7XG5cdH1cblxuXHR2YXIgc2VxTGVuZ3RoID0gc2lnbmF0dXJlW29mZnNldCsrXTtcblx0aWYgKHNlcUxlbmd0aCA9PT0gKE1BWF9PQ1RFVCB8IDEpKSB7XG5cdFx0c2VxTGVuZ3RoID0gc2lnbmF0dXJlW29mZnNldCsrXTtcblx0fVxuXG5cdGlmIChpbnB1dExlbmd0aCAtIG9mZnNldCA8IHNlcUxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignXCJzZXFcIiBzcGVjaWZpZWQgbGVuZ3RoIG9mIFwiJyArIHNlcUxlbmd0aCArICdcIiwgb25seSBcIicgKyAoaW5wdXRMZW5ndGggLSBvZmZzZXQpICsgJ1wiIHJlbWFpbmluZycpO1xuXHR9XG5cblx0aWYgKHNpZ25hdHVyZVtvZmZzZXQrK10gIT09IEVOQ09ERURfVEFHX0lOVCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgZXhwZWN0ZWQgXCJpbnRcIiBmb3IgXCJyXCInKTtcblx0fVxuXG5cdHZhciByTGVuZ3RoID0gc2lnbmF0dXJlW29mZnNldCsrXTtcblxuXHRpZiAoaW5wdXRMZW5ndGggLSBvZmZzZXQgLSAyIDwgckxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignXCJyXCIgc3BlY2lmaWVkIGxlbmd0aCBvZiBcIicgKyByTGVuZ3RoICsgJ1wiLCBvbmx5IFwiJyArIChpbnB1dExlbmd0aCAtIG9mZnNldCAtIDIpICsgJ1wiIGF2YWlsYWJsZScpO1xuXHR9XG5cblx0aWYgKG1heEVuY29kZWRQYXJhbUxlbmd0aCA8IHJMZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1wiclwiIHNwZWNpZmllZCBsZW5ndGggb2YgXCInICsgckxlbmd0aCArICdcIiwgbWF4IG9mIFwiJyArIG1heEVuY29kZWRQYXJhbUxlbmd0aCArICdcIiBpcyBhY2NlcHRhYmxlJyk7XG5cdH1cblxuXHR2YXIgck9mZnNldCA9IG9mZnNldDtcblx0b2Zmc2V0ICs9IHJMZW5ndGg7XG5cblx0aWYgKHNpZ25hdHVyZVtvZmZzZXQrK10gIT09IEVOQ09ERURfVEFHX0lOVCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgZXhwZWN0ZWQgXCJpbnRcIiBmb3IgXCJzXCInKTtcblx0fVxuXG5cdHZhciBzTGVuZ3RoID0gc2lnbmF0dXJlW29mZnNldCsrXTtcblxuXHRpZiAoaW5wdXRMZW5ndGggLSBvZmZzZXQgIT09IHNMZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1wic1wiIHNwZWNpZmllZCBsZW5ndGggb2YgXCInICsgc0xlbmd0aCArICdcIiwgZXhwZWN0ZWQgXCInICsgKGlucHV0TGVuZ3RoIC0gb2Zmc2V0KSArICdcIicpO1xuXHR9XG5cblx0aWYgKG1heEVuY29kZWRQYXJhbUxlbmd0aCA8IHNMZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1wic1wiIHNwZWNpZmllZCBsZW5ndGggb2YgXCInICsgc0xlbmd0aCArICdcIiwgbWF4IG9mIFwiJyArIG1heEVuY29kZWRQYXJhbUxlbmd0aCArICdcIiBpcyBhY2NlcHRhYmxlJyk7XG5cdH1cblxuXHR2YXIgc09mZnNldCA9IG9mZnNldDtcblx0b2Zmc2V0ICs9IHNMZW5ndGg7XG5cblx0aWYgKG9mZnNldCAhPT0gaW5wdXRMZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRvIGNvbnN1bWUgZW50aXJlIGJ1ZmZlciwgYnV0IFwiJyArIChpbnB1dExlbmd0aCAtIG9mZnNldCkgKyAnXCIgYnl0ZXMgcmVtYWluJyk7XG5cdH1cblxuXHR2YXIgclBhZGRpbmcgPSBwYXJhbUJ5dGVzIC0gckxlbmd0aCxcblx0XHRzUGFkZGluZyA9IHBhcmFtQnl0ZXMgLSBzTGVuZ3RoO1xuXG5cdHZhciBkc3QgPSBCdWZmZXIuYWxsb2NVbnNhZmUoclBhZGRpbmcgKyByTGVuZ3RoICsgc1BhZGRpbmcgKyBzTGVuZ3RoKTtcblxuXHRmb3IgKG9mZnNldCA9IDA7IG9mZnNldCA8IHJQYWRkaW5nOyArK29mZnNldCkge1xuXHRcdGRzdFtvZmZzZXRdID0gMDtcblx0fVxuXHRzaWduYXR1cmUuY29weShkc3QsIG9mZnNldCwgck9mZnNldCArIE1hdGgubWF4KC1yUGFkZGluZywgMCksIHJPZmZzZXQgKyByTGVuZ3RoKTtcblxuXHRvZmZzZXQgPSBwYXJhbUJ5dGVzO1xuXG5cdGZvciAodmFyIG8gPSBvZmZzZXQ7IG9mZnNldCA8IG8gKyBzUGFkZGluZzsgKytvZmZzZXQpIHtcblx0XHRkc3Rbb2Zmc2V0XSA9IDA7XG5cdH1cblx0c2lnbmF0dXJlLmNvcHkoZHN0LCBvZmZzZXQsIHNPZmZzZXQgKyBNYXRoLm1heCgtc1BhZGRpbmcsIDApLCBzT2Zmc2V0ICsgc0xlbmd0aCk7XG5cblx0ZHN0ID0gZHN0LnRvU3RyaW5nKCdiYXNlNjQnKTtcblx0ZHN0ID0gYmFzZTY0VXJsKGRzdCk7XG5cblx0cmV0dXJuIGRzdDtcbn1cblxuZnVuY3Rpb24gY291bnRQYWRkaW5nKGJ1Ziwgc3RhcnQsIHN0b3ApIHtcblx0dmFyIHBhZGRpbmcgPSAwO1xuXHR3aGlsZSAoc3RhcnQgKyBwYWRkaW5nIDwgc3RvcCAmJiBidWZbc3RhcnQgKyBwYWRkaW5nXSA9PT0gMCkge1xuXHRcdCsrcGFkZGluZztcblx0fVxuXG5cdHZhciBuZWVkc1NpZ24gPSBidWZbc3RhcnQgKyBwYWRkaW5nXSA+PSBNQVhfT0NURVQ7XG5cdGlmIChuZWVkc1NpZ24pIHtcblx0XHQtLXBhZGRpbmc7XG5cdH1cblxuXHRyZXR1cm4gcGFkZGluZztcbn1cblxuZnVuY3Rpb24gam9zZVRvRGVyKHNpZ25hdHVyZSwgYWxnKSB7XG5cdHNpZ25hdHVyZSA9IHNpZ25hdHVyZUFzQnVmZmVyKHNpZ25hdHVyZSk7XG5cdHZhciBwYXJhbUJ5dGVzID0gZ2V0UGFyYW1CeXRlc0ZvckFsZyhhbGcpO1xuXG5cdHZhciBzaWduYXR1cmVCeXRlcyA9IHNpZ25hdHVyZS5sZW5ndGg7XG5cdGlmIChzaWduYXR1cmVCeXRlcyAhPT0gcGFyYW1CeXRlcyAqIDIpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdcIicgKyBhbGcgKyAnXCIgc2lnbmF0dXJlcyBtdXN0IGJlIFwiJyArIHBhcmFtQnl0ZXMgKiAyICsgJ1wiIGJ5dGVzLCBzYXcgXCInICsgc2lnbmF0dXJlQnl0ZXMgKyAnXCInKTtcblx0fVxuXG5cdHZhciByUGFkZGluZyA9IGNvdW50UGFkZGluZyhzaWduYXR1cmUsIDAsIHBhcmFtQnl0ZXMpO1xuXHR2YXIgc1BhZGRpbmcgPSBjb3VudFBhZGRpbmcoc2lnbmF0dXJlLCBwYXJhbUJ5dGVzLCBzaWduYXR1cmUubGVuZ3RoKTtcblx0dmFyIHJMZW5ndGggPSBwYXJhbUJ5dGVzIC0gclBhZGRpbmc7XG5cdHZhciBzTGVuZ3RoID0gcGFyYW1CeXRlcyAtIHNQYWRkaW5nO1xuXG5cdHZhciByc0J5dGVzID0gMSArIDEgKyByTGVuZ3RoICsgMSArIDEgKyBzTGVuZ3RoO1xuXG5cdHZhciBzaG9ydExlbmd0aCA9IHJzQnl0ZXMgPCBNQVhfT0NURVQ7XG5cblx0dmFyIGRzdCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZSgoc2hvcnRMZW5ndGggPyAyIDogMykgKyByc0J5dGVzKTtcblxuXHR2YXIgb2Zmc2V0ID0gMDtcblx0ZHN0W29mZnNldCsrXSA9IEVOQ09ERURfVEFHX1NFUTtcblx0aWYgKHNob3J0TGVuZ3RoKSB7XG5cdFx0Ly8gQml0IDggaGFzIHZhbHVlIFwiMFwiXG5cdFx0Ly8gYml0cyA3LTEgZ2l2ZSB0aGUgbGVuZ3RoLlxuXHRcdGRzdFtvZmZzZXQrK10gPSByc0J5dGVzO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEJpdCA4IG9mIGZpcnN0IG9jdGV0IGhhcyB2YWx1ZSBcIjFcIlxuXHRcdC8vIGJpdHMgNy0xIGdpdmUgdGhlIG51bWJlciBvZiBhZGRpdGlvbmFsIGxlbmd0aCBvY3RldHMuXG5cdFx0ZHN0W29mZnNldCsrXSA9IE1BWF9PQ1RFVFx0fCAxO1xuXHRcdC8vIGxlbmd0aCwgYmFzZSAyNTZcblx0XHRkc3Rbb2Zmc2V0KytdID0gcnNCeXRlcyAmIDB4ZmY7XG5cdH1cblx0ZHN0W29mZnNldCsrXSA9IEVOQ09ERURfVEFHX0lOVDtcblx0ZHN0W29mZnNldCsrXSA9IHJMZW5ndGg7XG5cdGlmIChyUGFkZGluZyA8IDApIHtcblx0XHRkc3Rbb2Zmc2V0KytdID0gMDtcblx0XHRvZmZzZXQgKz0gc2lnbmF0dXJlLmNvcHkoZHN0LCBvZmZzZXQsIDAsIHBhcmFtQnl0ZXMpO1xuXHR9IGVsc2Uge1xuXHRcdG9mZnNldCArPSBzaWduYXR1cmUuY29weShkc3QsIG9mZnNldCwgclBhZGRpbmcsIHBhcmFtQnl0ZXMpO1xuXHR9XG5cdGRzdFtvZmZzZXQrK10gPSBFTkNPREVEX1RBR19JTlQ7XG5cdGRzdFtvZmZzZXQrK10gPSBzTGVuZ3RoO1xuXHRpZiAoc1BhZGRpbmcgPCAwKSB7XG5cdFx0ZHN0W29mZnNldCsrXSA9IDA7XG5cdFx0c2lnbmF0dXJlLmNvcHkoZHN0LCBvZmZzZXQsIHBhcmFtQnl0ZXMpO1xuXHR9IGVsc2Uge1xuXHRcdHNpZ25hdHVyZS5jb3B5KGRzdCwgb2Zmc2V0LCBwYXJhbUJ5dGVzICsgc1BhZGRpbmcpO1xuXHR9XG5cblx0cmV0dXJuIGRzdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRlclRvSm9zZTogZGVyVG9Kb3NlLFxuXHRqb3NlVG9EZXI6IGpvc2VUb0RlclxufTtcbiIsICIvKmdsb2JhbCBtb2R1bGUsIHByb2Nlc3MqL1xudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xudmFyIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbmZ1bmN0aW9uIERhdGFTdHJlYW0oZGF0YSkge1xuICB0aGlzLmJ1ZmZlciA9IG51bGw7XG4gIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcblxuICAvLyBObyBpbnB1dFxuICBpZiAoIWRhdGEpIHtcbiAgICB0aGlzLmJ1ZmZlciA9IEJ1ZmZlci5hbGxvYygwKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIFN0cmVhbVxuICBpZiAodHlwZW9mIGRhdGEucGlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuYnVmZmVyID0gQnVmZmVyLmFsbG9jKDApO1xuICAgIGRhdGEucGlwZSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIEJ1ZmZlciBvciBTdHJpbmdcbiAgLy8gb3IgT2JqZWN0IChhc3N1bWVkbHkgYSBwYXNzd29yZGVkIGtleSlcbiAgaWYgKGRhdGEubGVuZ3RoIHx8IHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgIHRoaXMuYnVmZmVyID0gZGF0YTtcbiAgICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmVtaXQoJ2VuZCcsIGRhdGEpO1xuICAgICAgdGhpcy5yZWFkYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbWl0KCdjbG9zZScpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmV4cGVjdGVkIGRhdGEgdHlwZSAoJysgdHlwZW9mIGRhdGEgKyAnKScpO1xufVxudXRpbC5pbmhlcml0cyhEYXRhU3RyZWFtLCBTdHJlYW0pO1xuXG5EYXRhU3RyZWFtLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlKGRhdGEpIHtcbiAgdGhpcy5idWZmZXIgPSBCdWZmZXIuY29uY2F0KFt0aGlzLmJ1ZmZlciwgQnVmZmVyLmZyb20oZGF0YSldKTtcbiAgdGhpcy5lbWl0KCdkYXRhJywgZGF0YSk7XG59O1xuXG5EYXRhU3RyZWFtLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiBlbmQoZGF0YSkge1xuICBpZiAoZGF0YSlcbiAgICB0aGlzLndyaXRlKGRhdGEpO1xuICB0aGlzLmVtaXQoJ2VuZCcsIGRhdGEpO1xuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcbiAgdGhpcy5yZWFkYWJsZSA9IGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhU3RyZWFtO1xuIiwgIi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuJ3VzZSBzdHJpY3QnO1xudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjsgLy8gYnJvd3NlcmlmeVxudmFyIFNsb3dCdWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5TbG93QnVmZmVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlckVxO1xuXG5mdW5jdGlvbiBidWZmZXJFcShhLCBiKSB7XG5cbiAgLy8gc2hvcnRjdXR0aW5nIG9uIHR5cGUgaXMgbmVjZXNzYXJ5IGZvciBjb3JyZWN0bmVzc1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gYnVmZmVyIHNpemVzIHNob3VsZCBiZSB3ZWxsLWtub3duIGluZm9ybWF0aW9uLCBzbyBkZXNwaXRlIHRoaXNcbiAgLy8gc2hvcnRjdXR0aW5nLCBpdCBkb2Vzbid0IGxlYWsgYW55IGluZm9ybWF0aW9uIGFib3V0IHRoZSAqY29udGVudHMqIG9mIHRoZVxuICAvLyBidWZmZXJzLlxuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGMgPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAvKmpzaGludCBiaXR3aXNlOmZhbHNlICovXG4gICAgYyB8PSBhW2ldIF4gYltpXTsgLy8gWE9SXG4gIH1cbiAgcmV0dXJuIGMgPT09IDA7XG59XG5cbmJ1ZmZlckVxLmluc3RhbGwgPSBmdW5jdGlvbigpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5lcXVhbCA9IFNsb3dCdWZmZXIucHJvdG90eXBlLmVxdWFsID0gZnVuY3Rpb24gZXF1YWwodGhhdCkge1xuICAgIHJldHVybiBidWZmZXJFcSh0aGlzLCB0aGF0KTtcbiAgfTtcbn07XG5cbnZhciBvcmlnQnVmRXF1YWwgPSBCdWZmZXIucHJvdG90eXBlLmVxdWFsO1xudmFyIG9yaWdTbG93QnVmRXF1YWwgPSBTbG93QnVmZmVyLnByb3RvdHlwZS5lcXVhbDtcbmJ1ZmZlckVxLnJlc3RvcmUgPSBmdW5jdGlvbigpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5lcXVhbCA9IG9yaWdCdWZFcXVhbDtcbiAgU2xvd0J1ZmZlci5wcm90b3R5cGUuZXF1YWwgPSBvcmlnU2xvd0J1ZkVxdWFsO1xufTtcbiIsICJ2YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG52YXIgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG52YXIgZm9ybWF0RWNkc2EgPSByZXF1aXJlKCdlY2RzYS1zaWctZm9ybWF0dGVyJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxudmFyIE1TR19JTlZBTElEX0FMR09SSVRITSA9ICdcIiVzXCIgaXMgbm90IGEgdmFsaWQgYWxnb3JpdGhtLlxcbiAgU3VwcG9ydGVkIGFsZ29yaXRobXMgYXJlOlxcbiAgXCJIUzI1NlwiLCBcIkhTMzg0XCIsIFwiSFM1MTJcIiwgXCJSUzI1NlwiLCBcIlJTMzg0XCIsIFwiUlM1MTJcIiwgXCJQUzI1NlwiLCBcIlBTMzg0XCIsIFwiUFM1MTJcIiwgXCJFUzI1NlwiLCBcIkVTMzg0XCIsIFwiRVM1MTJcIiBhbmQgXCJub25lXCIuJ1xudmFyIE1TR19JTlZBTElEX1NFQ1JFVCA9ICdzZWNyZXQgbXVzdCBiZSBhIHN0cmluZyBvciBidWZmZXInO1xudmFyIE1TR19JTlZBTElEX1ZFUklGSUVSX0tFWSA9ICdrZXkgbXVzdCBiZSBhIHN0cmluZyBvciBhIGJ1ZmZlcic7XG52YXIgTVNHX0lOVkFMSURfU0lHTkVSX0tFWSA9ICdrZXkgbXVzdCBiZSBhIHN0cmluZywgYSBidWZmZXIgb3IgYW4gb2JqZWN0JztcblxudmFyIHN1cHBvcnRzS2V5T2JqZWN0cyA9IHR5cGVvZiBjcnlwdG8uY3JlYXRlUHVibGljS2V5ID09PSAnZnVuY3Rpb24nO1xuaWYgKHN1cHBvcnRzS2V5T2JqZWN0cykge1xuICBNU0dfSU5WQUxJRF9WRVJJRklFUl9LRVkgKz0gJyBvciBhIEtleU9iamVjdCc7XG4gIE1TR19JTlZBTElEX1NFQ1JFVCArPSAnb3IgYSBLZXlPYmplY3QnO1xufVxuXG5mdW5jdGlvbiBjaGVja0lzUHVibGljS2V5KGtleSkge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKGtleSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXN1cHBvcnRzS2V5T2JqZWN0cykge1xuICAgIHRocm93IHR5cGVFcnJvcihNU0dfSU5WQUxJRF9WRVJJRklFUl9LRVkpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZXkgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgdHlwZUVycm9yKE1TR19JTlZBTElEX1ZFUklGSUVSX0tFWSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGtleS50eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IHR5cGVFcnJvcihNU0dfSU5WQUxJRF9WRVJJRklFUl9LRVkpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZXkuYXN5bW1ldHJpY0tleVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgdHlwZUVycm9yKE1TR19JTlZBTElEX1ZFUklGSUVSX0tFWSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGtleS5leHBvcnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyB0eXBlRXJyb3IoTVNHX0lOVkFMSURfVkVSSUZJRVJfS0VZKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY2hlY2tJc1ByaXZhdGVLZXkoa2V5KSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoa2V5KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRocm93IHR5cGVFcnJvcihNU0dfSU5WQUxJRF9TSUdORVJfS0VZKTtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrSXNTZWNyZXRLZXkoa2V5KSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoa2V5KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBpZiAoIXN1cHBvcnRzS2V5T2JqZWN0cykge1xuICAgIHRocm93IHR5cGVFcnJvcihNU0dfSU5WQUxJRF9TRUNSRVQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZXkgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgdHlwZUVycm9yKE1TR19JTlZBTElEX1NFQ1JFVCk7XG4gIH1cblxuICBpZiAoa2V5LnR5cGUgIT09ICdzZWNyZXQnKSB7XG4gICAgdGhyb3cgdHlwZUVycm9yKE1TR19JTlZBTElEX1NFQ1JFVCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGtleS5leHBvcnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyB0eXBlRXJyb3IoTVNHX0lOVkFMSURfU0VDUkVUKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tQmFzZTY0KGJhc2U2NCkge1xuICByZXR1cm4gYmFzZTY0XG4gICAgLnJlcGxhY2UoLz0vZywgJycpXG4gICAgLnJlcGxhY2UoL1xcKy9nLCAnLScpXG4gICAgLnJlcGxhY2UoL1xcLy9nLCAnXycpO1xufVxuXG5mdW5jdGlvbiB0b0Jhc2U2NChiYXNlNjR1cmwpIHtcbiAgYmFzZTY0dXJsID0gYmFzZTY0dXJsLnRvU3RyaW5nKCk7XG5cbiAgdmFyIHBhZGRpbmcgPSA0IC0gYmFzZTY0dXJsLmxlbmd0aCAlIDQ7XG4gIGlmIChwYWRkaW5nICE9PSA0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWRkaW5nOyArK2kpIHtcbiAgICAgIGJhc2U2NHVybCArPSAnPSc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJhc2U2NHVybFxuICAgIC5yZXBsYWNlKC9cXC0vZywgJysnKVxuICAgIC5yZXBsYWNlKC9fL2csICcvJyk7XG59XG5cbmZ1bmN0aW9uIHR5cGVFcnJvcih0ZW1wbGF0ZSkge1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGVyck1zZyA9IHV0aWwuZm9ybWF0LmJpbmQodXRpbCwgdGVtcGxhdGUpLmFwcGx5KG51bGwsIGFyZ3MpO1xuICByZXR1cm4gbmV3IFR5cGVFcnJvcihlcnJNc2cpO1xufVxuXG5mdW5jdGlvbiBidWZmZXJPclN0cmluZyhvYmopIHtcbiAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihvYmopIHx8IHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVJbnB1dCh0aGluZykge1xuICBpZiAoIWJ1ZmZlck9yU3RyaW5nKHRoaW5nKSlcbiAgICB0aGluZyA9IEpTT04uc3RyaW5naWZ5KHRoaW5nKTtcbiAgcmV0dXJuIHRoaW5nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIbWFjU2lnbmVyKGJpdHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNpZ24odGhpbmcsIHNlY3JldCkge1xuICAgIGNoZWNrSXNTZWNyZXRLZXkoc2VjcmV0KTtcbiAgICB0aGluZyA9IG5vcm1hbGl6ZUlucHV0KHRoaW5nKTtcbiAgICB2YXIgaG1hYyA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGEnICsgYml0cywgc2VjcmV0KTtcbiAgICB2YXIgc2lnID0gKGhtYWMudXBkYXRlKHRoaW5nKSwgaG1hYy5kaWdlc3QoJ2Jhc2U2NCcpKVxuICAgIHJldHVybiBmcm9tQmFzZTY0KHNpZyk7XG4gIH1cbn1cblxudmFyIGJ1ZmZlckVxdWFsO1xudmFyIHRpbWluZ1NhZmVFcXVhbCA9ICd0aW1pbmdTYWZlRXF1YWwnIGluIGNyeXB0byA/IGZ1bmN0aW9uIHRpbWluZ1NhZmVFcXVhbChhLCBiKSB7XG4gIGlmIChhLmJ5dGVMZW5ndGggIT09IGIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjcnlwdG8udGltaW5nU2FmZUVxdWFsKGEsIGIpXG59IDogZnVuY3Rpb24gdGltaW5nU2FmZUVxdWFsKGEsIGIpIHtcbiAgaWYgKCFidWZmZXJFcXVhbCkge1xuICAgIGJ1ZmZlckVxdWFsID0gcmVxdWlyZSgnYnVmZmVyLWVxdWFsLWNvbnN0YW50LXRpbWUnKTtcbiAgfVxuXG4gIHJldHVybiBidWZmZXJFcXVhbChhLCBiKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIbWFjVmVyaWZpZXIoYml0cykge1xuICByZXR1cm4gZnVuY3Rpb24gdmVyaWZ5KHRoaW5nLCBzaWduYXR1cmUsIHNlY3JldCkge1xuICAgIHZhciBjb21wdXRlZFNpZyA9IGNyZWF0ZUhtYWNTaWduZXIoYml0cykodGhpbmcsIHNlY3JldCk7XG4gICAgcmV0dXJuIHRpbWluZ1NhZmVFcXVhbChCdWZmZXIuZnJvbShzaWduYXR1cmUpLCBCdWZmZXIuZnJvbShjb21wdXRlZFNpZykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleVNpZ25lcihiaXRzKSB7XG4gcmV0dXJuIGZ1bmN0aW9uIHNpZ24odGhpbmcsIHByaXZhdGVLZXkpIHtcbiAgICBjaGVja0lzUHJpdmF0ZUtleShwcml2YXRlS2V5KTtcbiAgICB0aGluZyA9IG5vcm1hbGl6ZUlucHV0KHRoaW5nKTtcbiAgICAvLyBFdmVuIHRob3VnaCB3ZSBhcmUgc3BlY2lmeWluZyBcIlJTQVwiIGhlcmUsIHRoaXMgd29ya3Mgd2l0aCBFQ0RTQVxuICAgIC8vIGtleXMgYXMgd2VsbC5cbiAgICB2YXIgc2lnbmVyID0gY3J5cHRvLmNyZWF0ZVNpZ24oJ1JTQS1TSEEnICsgYml0cyk7XG4gICAgdmFyIHNpZyA9IChzaWduZXIudXBkYXRlKHRoaW5nKSwgc2lnbmVyLnNpZ24ocHJpdmF0ZUtleSwgJ2Jhc2U2NCcpKTtcbiAgICByZXR1cm4gZnJvbUJhc2U2NChzaWcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleVZlcmlmaWVyKGJpdHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZlcmlmeSh0aGluZywgc2lnbmF0dXJlLCBwdWJsaWNLZXkpIHtcbiAgICBjaGVja0lzUHVibGljS2V5KHB1YmxpY0tleSk7XG4gICAgdGhpbmcgPSBub3JtYWxpemVJbnB1dCh0aGluZyk7XG4gICAgc2lnbmF0dXJlID0gdG9CYXNlNjQoc2lnbmF0dXJlKTtcbiAgICB2YXIgdmVyaWZpZXIgPSBjcnlwdG8uY3JlYXRlVmVyaWZ5KCdSU0EtU0hBJyArIGJpdHMpO1xuICAgIHZlcmlmaWVyLnVwZGF0ZSh0aGluZyk7XG4gICAgcmV0dXJuIHZlcmlmaWVyLnZlcmlmeShwdWJsaWNLZXksIHNpZ25hdHVyZSwgJ2Jhc2U2NCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBTU0tleVNpZ25lcihiaXRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzaWduKHRoaW5nLCBwcml2YXRlS2V5KSB7XG4gICAgY2hlY2tJc1ByaXZhdGVLZXkocHJpdmF0ZUtleSk7XG4gICAgdGhpbmcgPSBub3JtYWxpemVJbnB1dCh0aGluZyk7XG4gICAgdmFyIHNpZ25lciA9IGNyeXB0by5jcmVhdGVTaWduKCdSU0EtU0hBJyArIGJpdHMpO1xuICAgIHZhciBzaWcgPSAoc2lnbmVyLnVwZGF0ZSh0aGluZyksIHNpZ25lci5zaWduKHtcbiAgICAgIGtleTogcHJpdmF0ZUtleSxcbiAgICAgIHBhZGRpbmc6IGNyeXB0by5jb25zdGFudHMuUlNBX1BLQ1MxX1BTU19QQURESU5HLFxuICAgICAgc2FsdExlbmd0aDogY3J5cHRvLmNvbnN0YW50cy5SU0FfUFNTX1NBTFRMRU5fRElHRVNUXG4gICAgfSwgJ2Jhc2U2NCcpKTtcbiAgICByZXR1cm4gZnJvbUJhc2U2NChzaWcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBTU0tleVZlcmlmaWVyKGJpdHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZlcmlmeSh0aGluZywgc2lnbmF0dXJlLCBwdWJsaWNLZXkpIHtcbiAgICBjaGVja0lzUHVibGljS2V5KHB1YmxpY0tleSk7XG4gICAgdGhpbmcgPSBub3JtYWxpemVJbnB1dCh0aGluZyk7XG4gICAgc2lnbmF0dXJlID0gdG9CYXNlNjQoc2lnbmF0dXJlKTtcbiAgICB2YXIgdmVyaWZpZXIgPSBjcnlwdG8uY3JlYXRlVmVyaWZ5KCdSU0EtU0hBJyArIGJpdHMpO1xuICAgIHZlcmlmaWVyLnVwZGF0ZSh0aGluZyk7XG4gICAgcmV0dXJuIHZlcmlmaWVyLnZlcmlmeSh7XG4gICAgICBrZXk6IHB1YmxpY0tleSxcbiAgICAgIHBhZGRpbmc6IGNyeXB0by5jb25zdGFudHMuUlNBX1BLQ1MxX1BTU19QQURESU5HLFxuICAgICAgc2FsdExlbmd0aDogY3J5cHRvLmNvbnN0YW50cy5SU0FfUFNTX1NBTFRMRU5fRElHRVNUXG4gICAgfSwgc2lnbmF0dXJlLCAnYmFzZTY0Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRUNEU0FTaWduZXIoYml0cykge1xuICB2YXIgaW5uZXIgPSBjcmVhdGVLZXlTaWduZXIoYml0cyk7XG4gIHJldHVybiBmdW5jdGlvbiBzaWduKCkge1xuICAgIHZhciBzaWduYXR1cmUgPSBpbm5lci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIHNpZ25hdHVyZSA9IGZvcm1hdEVjZHNhLmRlclRvSm9zZShzaWduYXR1cmUsICdFUycgKyBiaXRzKTtcbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFQ0RTQVZlcmlmZXIoYml0cykge1xuICB2YXIgaW5uZXIgPSBjcmVhdGVLZXlWZXJpZmllcihiaXRzKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZlcmlmeSh0aGluZywgc2lnbmF0dXJlLCBwdWJsaWNLZXkpIHtcbiAgICBzaWduYXR1cmUgPSBmb3JtYXRFY2RzYS5qb3NlVG9EZXIoc2lnbmF0dXJlLCAnRVMnICsgYml0cykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgIHZhciByZXN1bHQgPSBpbm5lcih0aGluZywgc2lnbmF0dXJlLCBwdWJsaWNLZXkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vbmVTaWduZXIoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzaWduKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOb25lVmVyaWZpZXIoKSB7XG4gIHJldHVybiBmdW5jdGlvbiB2ZXJpZnkodGhpbmcsIHNpZ25hdHVyZSkge1xuICAgIHJldHVybiBzaWduYXR1cmUgPT09ICcnO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gandhKGFsZ29yaXRobSkge1xuICB2YXIgc2lnbmVyRmFjdG9yaWVzID0ge1xuICAgIGhzOiBjcmVhdGVIbWFjU2lnbmVyLFxuICAgIHJzOiBjcmVhdGVLZXlTaWduZXIsXG4gICAgcHM6IGNyZWF0ZVBTU0tleVNpZ25lcixcbiAgICBlczogY3JlYXRlRUNEU0FTaWduZXIsXG4gICAgbm9uZTogY3JlYXRlTm9uZVNpZ25lcixcbiAgfVxuICB2YXIgdmVyaWZpZXJGYWN0b3JpZXMgPSB7XG4gICAgaHM6IGNyZWF0ZUhtYWNWZXJpZmllcixcbiAgICByczogY3JlYXRlS2V5VmVyaWZpZXIsXG4gICAgcHM6IGNyZWF0ZVBTU0tleVZlcmlmaWVyLFxuICAgIGVzOiBjcmVhdGVFQ0RTQVZlcmlmZXIsXG4gICAgbm9uZTogY3JlYXRlTm9uZVZlcmlmaWVyLFxuICB9XG4gIHZhciBtYXRjaCA9IGFsZ29yaXRobS5tYXRjaCgvXihSU3xQU3xFU3xIUykoMjU2fDM4NHw1MTIpJHxeKG5vbmUpJC8pO1xuICBpZiAoIW1hdGNoKVxuICAgIHRocm93IHR5cGVFcnJvcihNU0dfSU5WQUxJRF9BTEdPUklUSE0sIGFsZ29yaXRobSk7XG4gIHZhciBhbGdvID0gKG1hdGNoWzFdIHx8IG1hdGNoWzNdKS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgYml0cyA9IG1hdGNoWzJdO1xuXG4gIHJldHVybiB7XG4gICAgc2lnbjogc2lnbmVyRmFjdG9yaWVzW2FsZ29dKGJpdHMpLFxuICAgIHZlcmlmeTogdmVyaWZpZXJGYWN0b3JpZXNbYWxnb10oYml0cyksXG4gIH1cbn07XG4iLCAiLypnbG9iYWwgbW9kdWxlKi9cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5CdWZmZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9TdHJpbmcob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJylcbiAgICByZXR1cm4gb2JqO1xuICBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicgfHwgQnVmZmVyLmlzQnVmZmVyKG9iaikpXG4gICAgcmV0dXJuIG9iai50b1N0cmluZygpO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbn07XG4iLCAiLypnbG9iYWwgbW9kdWxlKi9cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbnZhciBEYXRhU3RyZWFtID0gcmVxdWlyZSgnLi9kYXRhLXN0cmVhbScpO1xudmFyIGp3YSA9IHJlcXVpcmUoJ2p3YScpO1xudmFyIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b3N0cmluZycpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbmZ1bmN0aW9uIGJhc2U2NHVybChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIHJldHVybiBCdWZmZXJcbiAgICAuZnJvbShzdHJpbmcsIGVuY29kaW5nKVxuICAgIC50b1N0cmluZygnYmFzZTY0JylcbiAgICAucmVwbGFjZSgvPS9nLCAnJylcbiAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAucmVwbGFjZSgvXFwvL2csICdfJyk7XG59XG5cbmZ1bmN0aW9uIGp3c1NlY3VyZWRJbnB1dChoZWFkZXIsIHBheWxvYWQsIGVuY29kaW5nKSB7XG4gIGVuY29kaW5nID0gZW5jb2RpbmcgfHwgJ3V0ZjgnO1xuICB2YXIgZW5jb2RlZEhlYWRlciA9IGJhc2U2NHVybCh0b1N0cmluZyhoZWFkZXIpLCAnYmluYXJ5Jyk7XG4gIHZhciBlbmNvZGVkUGF5bG9hZCA9IGJhc2U2NHVybCh0b1N0cmluZyhwYXlsb2FkKSwgZW5jb2RpbmcpO1xuICByZXR1cm4gdXRpbC5mb3JtYXQoJyVzLiVzJywgZW5jb2RlZEhlYWRlciwgZW5jb2RlZFBheWxvYWQpO1xufVxuXG5mdW5jdGlvbiBqd3NTaWduKG9wdHMpIHtcbiAgdmFyIGhlYWRlciA9IG9wdHMuaGVhZGVyO1xuICB2YXIgcGF5bG9hZCA9IG9wdHMucGF5bG9hZDtcbiAgdmFyIHNlY3JldE9yS2V5ID0gb3B0cy5zZWNyZXQgfHwgb3B0cy5wcml2YXRlS2V5O1xuICB2YXIgZW5jb2RpbmcgPSBvcHRzLmVuY29kaW5nO1xuICB2YXIgYWxnbyA9IGp3YShoZWFkZXIuYWxnKTtcbiAgdmFyIHNlY3VyZWRJbnB1dCA9IGp3c1NlY3VyZWRJbnB1dChoZWFkZXIsIHBheWxvYWQsIGVuY29kaW5nKTtcbiAgdmFyIHNpZ25hdHVyZSA9IGFsZ28uc2lnbihzZWN1cmVkSW5wdXQsIHNlY3JldE9yS2V5KTtcbiAgcmV0dXJuIHV0aWwuZm9ybWF0KCclcy4lcycsIHNlY3VyZWRJbnB1dCwgc2lnbmF0dXJlKTtcbn1cblxuZnVuY3Rpb24gU2lnblN0cmVhbShvcHRzKSB7XG4gIHZhciBzZWNyZXQgPSBvcHRzLnNlY3JldDtcbiAgc2VjcmV0ID0gc2VjcmV0ID09IG51bGwgPyBvcHRzLnByaXZhdGVLZXkgOiBzZWNyZXQ7XG4gIHNlY3JldCA9IHNlY3JldCA9PSBudWxsID8gb3B0cy5rZXkgOiBzZWNyZXQ7XG4gIGlmICgvXmhzL2kudGVzdChvcHRzLmhlYWRlci5hbGcpID09PSB0cnVlICYmIHNlY3JldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignc2VjcmV0IG11c3QgYmUgYSBzdHJpbmcgb3IgYnVmZmVyIG9yIGEgS2V5T2JqZWN0JylcbiAgfVxuICB2YXIgc2VjcmV0U3RyZWFtID0gbmV3IERhdGFTdHJlYW0oc2VjcmV0KTtcbiAgdGhpcy5yZWFkYWJsZSA9IHRydWU7XG4gIHRoaXMuaGVhZGVyID0gb3B0cy5oZWFkZXI7XG4gIHRoaXMuZW5jb2RpbmcgPSBvcHRzLmVuY29kaW5nO1xuICB0aGlzLnNlY3JldCA9IHRoaXMucHJpdmF0ZUtleSA9IHRoaXMua2V5ID0gc2VjcmV0U3RyZWFtO1xuICB0aGlzLnBheWxvYWQgPSBuZXcgRGF0YVN0cmVhbShvcHRzLnBheWxvYWQpO1xuICB0aGlzLnNlY3JldC5vbmNlKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMucGF5bG9hZC53cml0YWJsZSAmJiB0aGlzLnJlYWRhYmxlKVxuICAgICAgdGhpcy5zaWduKCk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5wYXlsb2FkLm9uY2UoJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5zZWNyZXQud3JpdGFibGUgJiYgdGhpcy5yZWFkYWJsZSlcbiAgICAgIHRoaXMuc2lnbigpO1xuICB9LmJpbmQodGhpcykpO1xufVxudXRpbC5pbmhlcml0cyhTaWduU3RyZWFtLCBTdHJlYW0pO1xuXG5TaWduU3RyZWFtLnByb3RvdHlwZS5zaWduID0gZnVuY3Rpb24gc2lnbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgc2lnbmF0dXJlID0gandzU2lnbih7XG4gICAgICBoZWFkZXI6IHRoaXMuaGVhZGVyLFxuICAgICAgcGF5bG9hZDogdGhpcy5wYXlsb2FkLmJ1ZmZlcixcbiAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQuYnVmZmVyLFxuICAgICAgZW5jb2Rpbmc6IHRoaXMuZW5jb2RpbmdcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ2RvbmUnLCBzaWduYXR1cmUpO1xuICAgIHRoaXMuZW1pdCgnZGF0YScsIHNpZ25hdHVyZSk7XG4gICAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgICB0aGlzLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMucmVhZGFibGUgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZSk7XG4gICAgdGhpcy5lbWl0KCdjbG9zZScpO1xuICB9XG59O1xuXG5TaWduU3RyZWFtLnNpZ24gPSBqd3NTaWduO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25TdHJlYW07XG4iLCAiLypnbG9iYWwgbW9kdWxlKi9cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbnZhciBEYXRhU3RyZWFtID0gcmVxdWlyZSgnLi9kYXRhLXN0cmVhbScpO1xudmFyIGp3YSA9IHJlcXVpcmUoJ2p3YScpO1xudmFyIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b3N0cmluZycpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgSldTX1JFR0VYID0gL15bYS16QS1aMC05XFwtX10rP1xcLlthLXpBLVowLTlcXC1fXSs/XFwuKFthLXpBLVowLTlcXC1fXSspPyQvO1xuXG5mdW5jdGlvbiBpc09iamVjdCh0aGluZykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaW5nKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmZ1bmN0aW9uIHNhZmVKc29uUGFyc2UodGhpbmcpIHtcbiAgaWYgKGlzT2JqZWN0KHRoaW5nKSlcbiAgICByZXR1cm4gdGhpbmc7XG4gIHRyeSB7IHJldHVybiBKU09OLnBhcnNlKHRoaW5nKTsgfVxuICBjYXRjaCAoZSkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG59XG5cbmZ1bmN0aW9uIGhlYWRlckZyb21KV1MoandzU2lnKSB7XG4gIHZhciBlbmNvZGVkSGVhZGVyID0gandzU2lnLnNwbGl0KCcuJywgMSlbMF07XG4gIHJldHVybiBzYWZlSnNvblBhcnNlKEJ1ZmZlci5mcm9tKGVuY29kZWRIZWFkZXIsICdiYXNlNjQnKS50b1N0cmluZygnYmluYXJ5JykpO1xufVxuXG5mdW5jdGlvbiBzZWN1cmVkSW5wdXRGcm9tSldTKGp3c1NpZykge1xuICByZXR1cm4gandzU2lnLnNwbGl0KCcuJywgMikuam9pbignLicpO1xufVxuXG5mdW5jdGlvbiBzaWduYXR1cmVGcm9tSldTKGp3c1NpZykge1xuICByZXR1cm4gandzU2lnLnNwbGl0KCcuJylbMl07XG59XG5cbmZ1bmN0aW9uIHBheWxvYWRGcm9tSldTKGp3c1NpZywgZW5jb2RpbmcpIHtcbiAgZW5jb2RpbmcgPSBlbmNvZGluZyB8fCAndXRmOCc7XG4gIHZhciBwYXlsb2FkID0gandzU2lnLnNwbGl0KCcuJylbMV07XG4gIHJldHVybiBCdWZmZXIuZnJvbShwYXlsb2FkLCAnYmFzZTY0JykudG9TdHJpbmcoZW5jb2RpbmcpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkSndzKHN0cmluZykge1xuICByZXR1cm4gSldTX1JFR0VYLnRlc3Qoc3RyaW5nKSAmJiAhIWhlYWRlckZyb21KV1Moc3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gandzVmVyaWZ5KGp3c1NpZywgYWxnb3JpdGhtLCBzZWNyZXRPcktleSkge1xuICBpZiAoIWFsZ29yaXRobSkge1xuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJNaXNzaW5nIGFsZ29yaXRobSBwYXJhbWV0ZXIgZm9yIGp3cy52ZXJpZnlcIik7XG4gICAgZXJyLmNvZGUgPSBcIk1JU1NJTkdfQUxHT1JJVEhNXCI7XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIGp3c1NpZyA9IHRvU3RyaW5nKGp3c1NpZyk7XG4gIHZhciBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSldTKGp3c1NpZyk7XG4gIHZhciBzZWN1cmVkSW5wdXQgPSBzZWN1cmVkSW5wdXRGcm9tSldTKGp3c1NpZyk7XG4gIHZhciBhbGdvID0gandhKGFsZ29yaXRobSk7XG4gIHJldHVybiBhbGdvLnZlcmlmeShzZWN1cmVkSW5wdXQsIHNpZ25hdHVyZSwgc2VjcmV0T3JLZXkpO1xufVxuXG5mdW5jdGlvbiBqd3NEZWNvZGUoandzU2lnLCBvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICBqd3NTaWcgPSB0b1N0cmluZyhqd3NTaWcpO1xuXG4gIGlmICghaXNWYWxpZEp3cyhqd3NTaWcpKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciBoZWFkZXIgPSBoZWFkZXJGcm9tSldTKGp3c1NpZyk7XG5cbiAgaWYgKCFoZWFkZXIpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHBheWxvYWQgPSBwYXlsb2FkRnJvbUpXUyhqd3NTaWcpO1xuICBpZiAoaGVhZGVyLnR5cCA9PT0gJ0pXVCcgfHwgb3B0cy5qc29uKVxuICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKHBheWxvYWQsIG9wdHMuZW5jb2RpbmcpO1xuXG4gIHJldHVybiB7XG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICBzaWduYXR1cmU6IHNpZ25hdHVyZUZyb21KV1MoandzU2lnKVxuICB9O1xufVxuXG5mdW5jdGlvbiBWZXJpZnlTdHJlYW0ob3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgdmFyIHNlY3JldE9yS2V5ID0gb3B0cy5zZWNyZXQ7XG4gIHNlY3JldE9yS2V5ID0gc2VjcmV0T3JLZXkgPT0gbnVsbCA/IG9wdHMucHVibGljS2V5IDogc2VjcmV0T3JLZXk7XG4gIHNlY3JldE9yS2V5ID0gc2VjcmV0T3JLZXkgPT0gbnVsbCA/IG9wdHMua2V5IDogc2VjcmV0T3JLZXk7XG4gIGlmICgvXmhzL2kudGVzdChvcHRzLmFsZ29yaXRobSkgPT09IHRydWUgJiYgc2VjcmV0T3JLZXkgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NlY3JldCBtdXN0IGJlIGEgc3RyaW5nIG9yIGJ1ZmZlciBvciBhIEtleU9iamVjdCcpXG4gIH1cbiAgdmFyIHNlY3JldFN0cmVhbSA9IG5ldyBEYXRhU3RyZWFtKHNlY3JldE9yS2V5KTtcbiAgdGhpcy5yZWFkYWJsZSA9IHRydWU7XG4gIHRoaXMuYWxnb3JpdGhtID0gb3B0cy5hbGdvcml0aG07XG4gIHRoaXMuZW5jb2RpbmcgPSBvcHRzLmVuY29kaW5nO1xuICB0aGlzLnNlY3JldCA9IHRoaXMucHVibGljS2V5ID0gdGhpcy5rZXkgPSBzZWNyZXRTdHJlYW07XG4gIHRoaXMuc2lnbmF0dXJlID0gbmV3IERhdGFTdHJlYW0ob3B0cy5zaWduYXR1cmUpO1xuICB0aGlzLnNlY3JldC5vbmNlKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuc2lnbmF0dXJlLndyaXRhYmxlICYmIHRoaXMucmVhZGFibGUpXG4gICAgICB0aGlzLnZlcmlmeSgpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMuc2lnbmF0dXJlLm9uY2UoJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5zZWNyZXQud3JpdGFibGUgJiYgdGhpcy5yZWFkYWJsZSlcbiAgICAgIHRoaXMudmVyaWZ5KCk7XG4gIH0uYmluZCh0aGlzKSk7XG59XG51dGlsLmluaGVyaXRzKFZlcmlmeVN0cmVhbSwgU3RyZWFtKTtcblZlcmlmeVN0cmVhbS5wcm90b3R5cGUudmVyaWZ5ID0gZnVuY3Rpb24gdmVyaWZ5KCkge1xuICB0cnkge1xuICAgIHZhciB2YWxpZCA9IGp3c1ZlcmlmeSh0aGlzLnNpZ25hdHVyZS5idWZmZXIsIHRoaXMuYWxnb3JpdGhtLCB0aGlzLmtleS5idWZmZXIpO1xuICAgIHZhciBvYmogPSBqd3NEZWNvZGUodGhpcy5zaWduYXR1cmUuYnVmZmVyLCB0aGlzLmVuY29kaW5nKTtcbiAgICB0aGlzLmVtaXQoJ2RvbmUnLCB2YWxpZCwgb2JqKTtcbiAgICB0aGlzLmVtaXQoJ2RhdGEnLCB2YWxpZCk7XG4gICAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgICB0aGlzLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy5yZWFkYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlKTtcbiAgICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gIH1cbn07XG5cblZlcmlmeVN0cmVhbS5kZWNvZGUgPSBqd3NEZWNvZGU7XG5WZXJpZnlTdHJlYW0uaXNWYWxpZCA9IGlzVmFsaWRKd3M7XG5WZXJpZnlTdHJlYW0udmVyaWZ5ID0gandzVmVyaWZ5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcmlmeVN0cmVhbTtcbiIsICIvKmdsb2JhbCBleHBvcnRzKi9cbnZhciBTaWduU3RyZWFtID0gcmVxdWlyZSgnLi9saWIvc2lnbi1zdHJlYW0nKTtcbnZhciBWZXJpZnlTdHJlYW0gPSByZXF1aXJlKCcuL2xpYi92ZXJpZnktc3RyZWFtJyk7XG5cbnZhciBBTEdPUklUSE1TID0gW1xuICAnSFMyNTYnLCAnSFMzODQnLCAnSFM1MTInLFxuICAnUlMyNTYnLCAnUlMzODQnLCAnUlM1MTInLFxuICAnUFMyNTYnLCAnUFMzODQnLCAnUFM1MTInLFxuICAnRVMyNTYnLCAnRVMzODQnLCAnRVM1MTInXG5dO1xuXG5leHBvcnRzLkFMR09SSVRITVMgPSBBTEdPUklUSE1TO1xuZXhwb3J0cy5zaWduID0gU2lnblN0cmVhbS5zaWduO1xuZXhwb3J0cy52ZXJpZnkgPSBWZXJpZnlTdHJlYW0udmVyaWZ5O1xuZXhwb3J0cy5kZWNvZGUgPSBWZXJpZnlTdHJlYW0uZGVjb2RlO1xuZXhwb3J0cy5pc1ZhbGlkID0gVmVyaWZ5U3RyZWFtLmlzVmFsaWQ7XG5leHBvcnRzLmNyZWF0ZVNpZ24gPSBmdW5jdGlvbiBjcmVhdGVTaWduKG9wdHMpIHtcbiAgcmV0dXJuIG5ldyBTaWduU3RyZWFtKG9wdHMpO1xufTtcbmV4cG9ydHMuY3JlYXRlVmVyaWZ5ID0gZnVuY3Rpb24gY3JlYXRlVmVyaWZ5KG9wdHMpIHtcbiAgcmV0dXJuIG5ldyBWZXJpZnlTdHJlYW0ob3B0cyk7XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUVBLFFBQUksU0FBUyxVQUFRLFFBQVE7QUFDN0IsUUFBSSxTQUFTLE9BQU87QUFHcEIsYUFBUyxVQUFXLEtBQUssS0FBSztBQUM1QixlQUFTLE9B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
