#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __commonJS,
  __esm,
  __require
} from "./chunk-O5PZ3G6I.mjs";

// src/utils/array.ts
function intersperse(as, separator) {
  return as.flatMap((a, i) => i ? [separator(i), a] : [a]);
}
function count(arr, pred) {
  let n = 0;
  for (const x of arr) n += +!!pred(x);
  return n;
}
function uniq(xs) {
  return [...new Set(xs)];
}
var init_array = __esm({
  "src/utils/array.ts"() {
  }
});

// node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/polyfills.js
var require_polyfills = __commonJS({
  "node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/polyfills.js"(exports, module) {
    var constants = __require("constants");
    var origCwd = process.cwd;
    var cwd = null;
    var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function() {
      if (!cwd)
        cwd = origCwd.call(process);
      return cwd;
    };
    try {
      process.cwd();
    } catch (er) {
    }
    if (typeof process.chdir === "function") {
      chdir = process.chdir;
      process.chdir = function(d) {
        cwd = null;
        chdir.call(process, d);
      };
      if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
    }
    var chdir;
    module.exports = patch;
    function patch(fs) {
      if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
        patchLchmod(fs);
      }
      if (!fs.lutimes) {
        patchLutimes(fs);
      }
      fs.chown = chownFix(fs.chown);
      fs.fchown = chownFix(fs.fchown);
      fs.lchown = chownFix(fs.lchown);
      fs.chmod = chmodFix(fs.chmod);
      fs.fchmod = chmodFix(fs.fchmod);
      fs.lchmod = chmodFix(fs.lchmod);
      fs.chownSync = chownFixSync(fs.chownSync);
      fs.fchownSync = chownFixSync(fs.fchownSync);
      fs.lchownSync = chownFixSync(fs.lchownSync);
      fs.chmodSync = chmodFixSync(fs.chmodSync);
      fs.fchmodSync = chmodFixSync(fs.fchmodSync);
      fs.lchmodSync = chmodFixSync(fs.lchmodSync);
      fs.stat = statFix(fs.stat);
      fs.fstat = statFix(fs.fstat);
      fs.lstat = statFix(fs.lstat);
      fs.statSync = statFixSync(fs.statSync);
      fs.fstatSync = statFixSync(fs.fstatSync);
      fs.lstatSync = statFixSync(fs.lstatSync);
      if (fs.chmod && !fs.lchmod) {
        fs.lchmod = function(path, mode, cb) {
          if (cb) process.nextTick(cb);
        };
        fs.lchmodSync = function() {
        };
      }
      if (fs.chown && !fs.lchown) {
        fs.lchown = function(path, uid, gid, cb) {
          if (cb) process.nextTick(cb);
        };
        fs.lchownSync = function() {
        };
      }
      if (platform === "win32") {
        fs.rename = typeof fs.rename !== "function" ? fs.rename : (function(fs$rename) {
          function rename(from, to, cb) {
            var start = Date.now();
            var backoff = 0;
            fs$rename(from, to, function CB(er) {
              if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start < 6e4) {
                setTimeout(function() {
                  fs.stat(to, function(stater, st) {
                    if (stater && stater.code === "ENOENT")
                      fs$rename(from, to, CB);
                    else
                      cb(er);
                  });
                }, backoff);
                if (backoff < 100)
                  backoff += 10;
                return;
              }
              if (cb) cb(er);
            });
          }
          if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
          return rename;
        })(fs.rename);
      }
      fs.read = typeof fs.read !== "function" ? fs.read : (function(fs$read) {
        function read(fd, buffer, offset, length, position, callback_) {
          var callback;
          if (callback_ && typeof callback_ === "function") {
            var eagCounter = 0;
            callback = function(er, _, __) {
              if (er && er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                return fs$read.call(fs, fd, buffer, offset, length, position, callback);
              }
              callback_.apply(this, arguments);
            };
          }
          return fs$read.call(fs, fd, buffer, offset, length, position, callback);
        }
        if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
        return read;
      })(fs.read);
      fs.readSync = typeof fs.readSync !== "function" ? fs.readSync : /* @__PURE__ */ (function(fs$readSync) {
        return function(fd, buffer, offset, length, position) {
          var eagCounter = 0;
          while (true) {
            try {
              return fs$readSync.call(fs, fd, buffer, offset, length, position);
            } catch (er) {
              if (er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                continue;
              }
              throw er;
            }
          }
        };
      })(fs.readSync);
      function patchLchmod(fs2) {
        fs2.lchmod = function(path, mode, callback) {
          fs2.open(
            path,
            constants.O_WRONLY | constants.O_SYMLINK,
            mode,
            function(err, fd) {
              if (err) {
                if (callback) callback(err);
                return;
              }
              fs2.fchmod(fd, mode, function(err2) {
                fs2.close(fd, function(err22) {
                  if (callback) callback(err2 || err22);
                });
              });
            }
          );
        };
        fs2.lchmodSync = function(path, mode) {
          var fd = fs2.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);
          var threw = true;
          var ret;
          try {
            ret = fs2.fchmodSync(fd, mode);
            threw = false;
          } finally {
            if (threw) {
              try {
                fs2.closeSync(fd);
              } catch (er) {
              }
            } else {
              fs2.closeSync(fd);
            }
          }
          return ret;
        };
      }
      function patchLutimes(fs2) {
        if (constants.hasOwnProperty("O_SYMLINK") && fs2.futimes) {
          fs2.lutimes = function(path, at, mt, cb) {
            fs2.open(path, constants.O_SYMLINK, function(er, fd) {
              if (er) {
                if (cb) cb(er);
                return;
              }
              fs2.futimes(fd, at, mt, function(er2) {
                fs2.close(fd, function(er22) {
                  if (cb) cb(er2 || er22);
                });
              });
            });
          };
          fs2.lutimesSync = function(path, at, mt) {
            var fd = fs2.openSync(path, constants.O_SYMLINK);
            var ret;
            var threw = true;
            try {
              ret = fs2.futimesSync(fd, at, mt);
              threw = false;
            } finally {
              if (threw) {
                try {
                  fs2.closeSync(fd);
                } catch (er) {
                }
              } else {
                fs2.closeSync(fd);
              }
            }
            return ret;
          };
        } else if (fs2.futimes) {
          fs2.lutimes = function(_a, _b, _c, cb) {
            if (cb) process.nextTick(cb);
          };
          fs2.lutimesSync = function() {
          };
        }
      }
      function chmodFix(orig) {
        if (!orig) return orig;
        return function(target, mode, cb) {
          return orig.call(fs, target, mode, function(er) {
            if (chownErOk(er)) er = null;
            if (cb) cb.apply(this, arguments);
          });
        };
      }
      function chmodFixSync(orig) {
        if (!orig) return orig;
        return function(target, mode) {
          try {
            return orig.call(fs, target, mode);
          } catch (er) {
            if (!chownErOk(er)) throw er;
          }
        };
      }
      function chownFix(orig) {
        if (!orig) return orig;
        return function(target, uid, gid, cb) {
          return orig.call(fs, target, uid, gid, function(er) {
            if (chownErOk(er)) er = null;
            if (cb) cb.apply(this, arguments);
          });
        };
      }
      function chownFixSync(orig) {
        if (!orig) return orig;
        return function(target, uid, gid) {
          try {
            return orig.call(fs, target, uid, gid);
          } catch (er) {
            if (!chownErOk(er)) throw er;
          }
        };
      }
      function statFix(orig) {
        if (!orig) return orig;
        return function(target, options, cb) {
          if (typeof options === "function") {
            cb = options;
            options = null;
          }
          function callback(er, stats) {
            if (stats) {
              if (stats.uid < 0) stats.uid += 4294967296;
              if (stats.gid < 0) stats.gid += 4294967296;
            }
            if (cb) cb.apply(this, arguments);
          }
          return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
        };
      }
      function statFixSync(orig) {
        if (!orig) return orig;
        return function(target, options) {
          var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);
          if (stats) {
            if (stats.uid < 0) stats.uid += 4294967296;
            if (stats.gid < 0) stats.gid += 4294967296;
          }
          return stats;
        };
      }
      function chownErOk(er) {
        if (!er)
          return true;
        if (er.code === "ENOSYS")
          return true;
        var nonroot = !process.getuid || process.getuid() !== 0;
        if (nonroot) {
          if (er.code === "EINVAL" || er.code === "EPERM")
            return true;
        }
        return false;
      }
    }
  }
});

// node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/legacy-streams.js
var require_legacy_streams = __commonJS({
  "node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/legacy-streams.js"(exports, module) {
    var Stream = __require("stream").Stream;
    module.exports = legacy;
    function legacy(fs) {
      return {
        ReadStream,
        WriteStream
      };
      function ReadStream(path, options) {
        if (!(this instanceof ReadStream)) return new ReadStream(path, options);
        Stream.call(this);
        var self = this;
        this.path = path;
        this.fd = null;
        this.readable = true;
        this.paused = false;
        this.flags = "r";
        this.mode = 438;
        this.bufferSize = 64 * 1024;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.encoding) this.setEncoding(this.encoding);
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.end === void 0) {
            this.end = Infinity;
          } else if ("number" !== typeof this.end) {
            throw TypeError("end must be a Number");
          }
          if (this.start > this.end) {
            throw new Error("start must be <= end");
          }
          this.pos = this.start;
        }
        if (this.fd !== null) {
          process.nextTick(function() {
            self._read();
          });
          return;
        }
        fs.open(this.path, this.flags, this.mode, function(err, fd) {
          if (err) {
            self.emit("error", err);
            self.readable = false;
            return;
          }
          self.fd = fd;
          self.emit("open", fd);
          self._read();
        });
      }
      function WriteStream(path, options) {
        if (!(this instanceof WriteStream)) return new WriteStream(path, options);
        Stream.call(this);
        this.path = path;
        this.fd = null;
        this.writable = true;
        this.flags = "w";
        this.encoding = "binary";
        this.mode = 438;
        this.bytesWritten = 0;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.start < 0) {
            throw new Error("start must be >= zero");
          }
          this.pos = this.start;
        }
        this.busy = false;
        this._queue = [];
        if (this.fd === null) {
          this._open = fs.open;
          this._queue.push([this._open, this.path, this.flags, this.mode, void 0]);
          this.flush();
        }
      }
    }
  }
});

// node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/clone.js
var require_clone = __commonJS({
  "node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/clone.js"(exports, module) {
    "use strict";
    module.exports = clone;
    var getPrototypeOf = Object.getPrototypeOf || function(obj) {
      return obj.__proto__;
    };
    function clone(obj) {
      if (obj === null || typeof obj !== "object")
        return obj;
      if (obj instanceof Object)
        var copy = { __proto__: getPrototypeOf(obj) };
      else
        var copy = /* @__PURE__ */ Object.create(null);
      Object.getOwnPropertyNames(obj).forEach(function(key) {
        Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
      });
      return copy;
    }
  }
});

// node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/graceful-fs.js
var require_graceful_fs = __commonJS({
  "node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/graceful-fs.js"(exports, module) {
    var fs = __require("fs");
    var polyfills = require_polyfills();
    var legacy = require_legacy_streams();
    var clone = require_clone();
    var util = __require("util");
    var gracefulQueue;
    var previousSymbol;
    if (typeof Symbol === "function" && typeof Symbol.for === "function") {
      gracefulQueue = /* @__PURE__ */ Symbol.for("graceful-fs.queue");
      previousSymbol = /* @__PURE__ */ Symbol.for("graceful-fs.previous");
    } else {
      gracefulQueue = "___graceful-fs.queue";
      previousSymbol = "___graceful-fs.previous";
    }
    function noop() {
    }
    function publishQueue(context, queue2) {
      Object.defineProperty(context, gracefulQueue, {
        get: function() {
          return queue2;
        }
      });
    }
    var debug = noop;
    if (util.debuglog)
      debug = util.debuglog("gfs4");
    else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
      debug = function() {
        var m = util.format.apply(util, arguments);
        m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
        console.error(m);
      };
    if (!fs[gracefulQueue]) {
      queue = global[gracefulQueue] || [];
      publishQueue(fs, queue);
      fs.close = (function(fs$close) {
        function close(fd, cb) {
          return fs$close.call(fs, fd, function(err) {
            if (!err) {
              resetQueue();
            }
            if (typeof cb === "function")
              cb.apply(this, arguments);
          });
        }
        Object.defineProperty(close, previousSymbol, {
          value: fs$close
        });
        return close;
      })(fs.close);
      fs.closeSync = (function(fs$closeSync) {
        function closeSync(fd) {
          fs$closeSync.apply(fs, arguments);
          resetQueue();
        }
        Object.defineProperty(closeSync, previousSymbol, {
          value: fs$closeSync
        });
        return closeSync;
      })(fs.closeSync);
      if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
        process.on("exit", function() {
          debug(fs[gracefulQueue]);
          __require("assert").equal(fs[gracefulQueue].length, 0);
        });
      }
    }
    var queue;
    if (!global[gracefulQueue]) {
      publishQueue(global, fs[gracefulQueue]);
    }
    module.exports = patch(clone(fs));
    if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
      module.exports = patch(fs);
      fs.__patched = true;
    }
    function patch(fs2) {
      polyfills(fs2);
      fs2.gracefulify = patch;
      fs2.createReadStream = createReadStream;
      fs2.createWriteStream = createWriteStream;
      var fs$readFile = fs2.readFile;
      fs2.readFile = readFile;
      function readFile(path, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$readFile(path, options, cb);
        function go$readFile(path2, options2, cb2, startTime) {
          return fs$readFile(path2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$readFile, [path2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$writeFile = fs2.writeFile;
      fs2.writeFile = writeFile;
      function writeFile(path, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$writeFile(path, data, options, cb);
        function go$writeFile(path2, data2, options2, cb2, startTime) {
          return fs$writeFile(path2, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$writeFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$appendFile = fs2.appendFile;
      if (fs$appendFile)
        fs2.appendFile = appendFile;
      function appendFile(path, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$appendFile(path, data, options, cb);
        function go$appendFile(path2, data2, options2, cb2, startTime) {
          return fs$appendFile(path2, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$appendFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$copyFile = fs2.copyFile;
      if (fs$copyFile)
        fs2.copyFile = copyFile;
      function copyFile(src, dest, flags, cb) {
        if (typeof flags === "function") {
          cb = flags;
          flags = 0;
        }
        return go$copyFile(src, dest, flags, cb);
        function go$copyFile(src2, dest2, flags2, cb2, startTime) {
          return fs$copyFile(src2, dest2, flags2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$readdir = fs2.readdir;
      fs2.readdir = readdir;
      var noReaddirOptionVersions = /^v[0-5]\./;
      function readdir(path, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir2(path2, options2, cb2, startTime) {
          return fs$readdir(path2, fs$readdirCallback(
            path2,
            options2,
            cb2,
            startTime
          ));
        } : function go$readdir2(path2, options2, cb2, startTime) {
          return fs$readdir(path2, options2, fs$readdirCallback(
            path2,
            options2,
            cb2,
            startTime
          ));
        };
        return go$readdir(path, options, cb);
        function fs$readdirCallback(path2, options2, cb2, startTime) {
          return function(err, files) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([
                go$readdir,
                [path2, options2, cb2],
                err,
                startTime || Date.now(),
                Date.now()
              ]);
            else {
              if (files && files.sort)
                files.sort();
              if (typeof cb2 === "function")
                cb2.call(this, err, files);
            }
          };
        }
      }
      if (process.version.substr(0, 4) === "v0.8") {
        var legStreams = legacy(fs2);
        ReadStream = legStreams.ReadStream;
        WriteStream = legStreams.WriteStream;
      }
      var fs$ReadStream = fs2.ReadStream;
      if (fs$ReadStream) {
        ReadStream.prototype = Object.create(fs$ReadStream.prototype);
        ReadStream.prototype.open = ReadStream$open;
      }
      var fs$WriteStream = fs2.WriteStream;
      if (fs$WriteStream) {
        WriteStream.prototype = Object.create(fs$WriteStream.prototype);
        WriteStream.prototype.open = WriteStream$open;
      }
      Object.defineProperty(fs2, "ReadStream", {
        get: function() {
          return ReadStream;
        },
        set: function(val) {
          ReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(fs2, "WriteStream", {
        get: function() {
          return WriteStream;
        },
        set: function(val) {
          WriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileReadStream = ReadStream;
      Object.defineProperty(fs2, "FileReadStream", {
        get: function() {
          return FileReadStream;
        },
        set: function(val) {
          FileReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileWriteStream = WriteStream;
      Object.defineProperty(fs2, "FileWriteStream", {
        get: function() {
          return FileWriteStream;
        },
        set: function(val) {
          FileWriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      function ReadStream(path, options) {
        if (this instanceof ReadStream)
          return fs$ReadStream.apply(this, arguments), this;
        else
          return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
      }
      function ReadStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            if (that.autoClose)
              that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
            that.read();
          }
        });
      }
      function WriteStream(path, options) {
        if (this instanceof WriteStream)
          return fs$WriteStream.apply(this, arguments), this;
        else
          return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
      }
      function WriteStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
          }
        });
      }
      function createReadStream(path, options) {
        return new fs2.ReadStream(path, options);
      }
      function createWriteStream(path, options) {
        return new fs2.WriteStream(path, options);
      }
      var fs$open = fs2.open;
      fs2.open = open;
      function open(path, flags, mode, cb) {
        if (typeof mode === "function")
          cb = mode, mode = null;
        return go$open(path, flags, mode, cb);
        function go$open(path2, flags2, mode2, cb2, startTime) {
          return fs$open(path2, flags2, mode2, function(err, fd) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$open, [path2, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      return fs2;
    }
    function enqueue(elem) {
      debug("ENQUEUE", elem[0].name, elem[1]);
      fs[gracefulQueue].push(elem);
      retry();
    }
    var retryTimer;
    function resetQueue() {
      var now = Date.now();
      for (var i = 0; i < fs[gracefulQueue].length; ++i) {
        if (fs[gracefulQueue][i].length > 2) {
          fs[gracefulQueue][i][3] = now;
          fs[gracefulQueue][i][4] = now;
        }
      }
      retry();
    }
    function retry() {
      clearTimeout(retryTimer);
      retryTimer = void 0;
      if (fs[gracefulQueue].length === 0)
        return;
      var elem = fs[gracefulQueue].shift();
      var fn = elem[0];
      var args = elem[1];
      var err = elem[2];
      var startTime = elem[3];
      var lastTime = elem[4];
      if (startTime === void 0) {
        debug("RETRY", fn.name, args);
        fn.apply(null, args);
      } else if (Date.now() - startTime >= 6e4) {
        debug("TIMEOUT", fn.name, args);
        var cb = args.pop();
        if (typeof cb === "function")
          cb.call(null, err);
      } else {
        var sinceAttempt = Date.now() - lastTime;
        var sinceStart = Math.max(lastTime - startTime, 1);
        var desiredDelay = Math.min(sinceStart * 1.2, 100);
        if (sinceAttempt >= desiredDelay) {
          debug("RETRY", fn.name, args);
          fn.apply(null, args.concat([startTime]));
        } else {
          fs[gracefulQueue].push(elem);
        }
      }
      if (retryTimer === void 0) {
        retryTimer = setTimeout(retry, 0);
      }
    }
  }
});

// node_modules/.pnpm/retry@0.12.0/node_modules/retry/lib/retry_operation.js
var require_retry_operation = __commonJS({
  "node_modules/.pnpm/retry@0.12.0/node_modules/retry/lib/retry_operation.js"(exports, module) {
    function RetryOperation(timeouts, options) {
      if (typeof options === "boolean") {
        options = { forever: options };
      }
      this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
      this._timeouts = timeouts;
      this._options = options || {};
      this._maxRetryTime = options && options.maxRetryTime || Infinity;
      this._fn = null;
      this._errors = [];
      this._attempts = 1;
      this._operationTimeout = null;
      this._operationTimeoutCb = null;
      this._timeout = null;
      this._operationStart = null;
      if (this._options.forever) {
        this._cachedTimeouts = this._timeouts.slice(0);
      }
    }
    module.exports = RetryOperation;
    RetryOperation.prototype.reset = function() {
      this._attempts = 1;
      this._timeouts = this._originalTimeouts;
    };
    RetryOperation.prototype.stop = function() {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      this._timeouts = [];
      this._cachedTimeouts = null;
    };
    RetryOperation.prototype.retry = function(err) {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      if (!err) {
        return false;
      }
      var currentTime = (/* @__PURE__ */ new Date()).getTime();
      if (err && currentTime - this._operationStart >= this._maxRetryTime) {
        this._errors.unshift(new Error("RetryOperation timeout occurred"));
        return false;
      }
      this._errors.push(err);
      var timeout = this._timeouts.shift();
      if (timeout === void 0) {
        if (this._cachedTimeouts) {
          this._errors.splice(this._errors.length - 1, this._errors.length);
          this._timeouts = this._cachedTimeouts.slice(0);
          timeout = this._timeouts.shift();
        } else {
          return false;
        }
      }
      var self = this;
      var timer = setTimeout(function() {
        self._attempts++;
        if (self._operationTimeoutCb) {
          self._timeout = setTimeout(function() {
            self._operationTimeoutCb(self._attempts);
          }, self._operationTimeout);
          if (self._options.unref) {
            self._timeout.unref();
          }
        }
        self._fn(self._attempts);
      }, timeout);
      if (this._options.unref) {
        timer.unref();
      }
      return true;
    };
    RetryOperation.prototype.attempt = function(fn, timeoutOps) {
      this._fn = fn;
      if (timeoutOps) {
        if (timeoutOps.timeout) {
          this._operationTimeout = timeoutOps.timeout;
        }
        if (timeoutOps.cb) {
          this._operationTimeoutCb = timeoutOps.cb;
        }
      }
      var self = this;
      if (this._operationTimeoutCb) {
        this._timeout = setTimeout(function() {
          self._operationTimeoutCb();
        }, self._operationTimeout);
      }
      this._operationStart = (/* @__PURE__ */ new Date()).getTime();
      this._fn(this._attempts);
    };
    RetryOperation.prototype.try = function(fn) {
      console.log("Using RetryOperation.try() is deprecated");
      this.attempt(fn);
    };
    RetryOperation.prototype.start = function(fn) {
      console.log("Using RetryOperation.start() is deprecated");
      this.attempt(fn);
    };
    RetryOperation.prototype.start = RetryOperation.prototype.try;
    RetryOperation.prototype.errors = function() {
      return this._errors;
    };
    RetryOperation.prototype.attempts = function() {
      return this._attempts;
    };
    RetryOperation.prototype.mainError = function() {
      if (this._errors.length === 0) {
        return null;
      }
      var counts = {};
      var mainError = null;
      var mainErrorCount = 0;
      for (var i = 0; i < this._errors.length; i++) {
        var error = this._errors[i];
        var message = error.message;
        var count2 = (counts[message] || 0) + 1;
        counts[message] = count2;
        if (count2 >= mainErrorCount) {
          mainError = error;
          mainErrorCount = count2;
        }
      }
      return mainError;
    };
  }
});

// node_modules/.pnpm/retry@0.12.0/node_modules/retry/lib/retry.js
var require_retry = __commonJS({
  "node_modules/.pnpm/retry@0.12.0/node_modules/retry/lib/retry.js"(exports) {
    var RetryOperation = require_retry_operation();
    exports.operation = function(options) {
      var timeouts = exports.timeouts(options);
      return new RetryOperation(timeouts, {
        forever: options && options.forever,
        unref: options && options.unref,
        maxRetryTime: options && options.maxRetryTime
      });
    };
    exports.timeouts = function(options) {
      if (options instanceof Array) {
        return [].concat(options);
      }
      var opts = {
        retries: 10,
        factor: 2,
        minTimeout: 1 * 1e3,
        maxTimeout: Infinity,
        randomize: false
      };
      for (var key in options) {
        opts[key] = options[key];
      }
      if (opts.minTimeout > opts.maxTimeout) {
        throw new Error("minTimeout is greater than maxTimeout");
      }
      var timeouts = [];
      for (var i = 0; i < opts.retries; i++) {
        timeouts.push(this.createTimeout(i, opts));
      }
      if (options && options.forever && !timeouts.length) {
        timeouts.push(this.createTimeout(i, opts));
      }
      timeouts.sort(function(a, b) {
        return a - b;
      });
      return timeouts;
    };
    exports.createTimeout = function(attempt, opts) {
      var random = opts.randomize ? Math.random() + 1 : 1;
      var timeout = Math.round(random * opts.minTimeout * Math.pow(opts.factor, attempt));
      timeout = Math.min(timeout, opts.maxTimeout);
      return timeout;
    };
    exports.wrap = function(obj, options, methods) {
      if (options instanceof Array) {
        methods = options;
        options = null;
      }
      if (!methods) {
        methods = [];
        for (var key in obj) {
          if (typeof obj[key] === "function") {
            methods.push(key);
          }
        }
      }
      for (var i = 0; i < methods.length; i++) {
        var method = methods[i];
        var original = obj[method];
        obj[method] = function retryWrapper(original2) {
          var op = exports.operation(options);
          var args = Array.prototype.slice.call(arguments, 1);
          var callback = args.pop();
          args.push(function(err) {
            if (op.retry(err)) {
              return;
            }
            if (err) {
              arguments[0] = op.mainError();
            }
            callback.apply(this, arguments);
          });
          op.attempt(function() {
            original2.apply(obj, args);
          });
        }.bind(obj, original);
        obj[method].options = options;
      }
    };
  }
});

// node_modules/.pnpm/retry@0.12.0/node_modules/retry/index.js
var require_retry2 = __commonJS({
  "node_modules/.pnpm/retry@0.12.0/node_modules/retry/index.js"(exports, module) {
    module.exports = require_retry();
  }
});

// node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/signals.js
var require_signals = __commonJS({
  "node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/signals.js"(exports, module) {
    module.exports = [
      "SIGABRT",
      "SIGALRM",
      "SIGHUP",
      "SIGINT",
      "SIGTERM"
    ];
    if (process.platform !== "win32") {
      module.exports.push(
        "SIGVTALRM",
        "SIGXCPU",
        "SIGXFSZ",
        "SIGUSR2",
        "SIGTRAP",
        "SIGSYS",
        "SIGQUIT",
        "SIGIOT"
        // should detect profiler and enable/disable accordingly.
        // see #21
        // 'SIGPROF'
      );
    }
    if (process.platform === "linux") {
      module.exports.push(
        "SIGIO",
        "SIGPOLL",
        "SIGPWR",
        "SIGSTKFLT",
        "SIGUNUSED"
      );
    }
  }
});

// node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/index.js
var require_signal_exit = __commonJS({
  "node_modules/.pnpm/signal-exit@3.0.7/node_modules/signal-exit/index.js"(exports, module) {
    var process2 = global.process;
    var processOk = function(process3) {
      return process3 && typeof process3 === "object" && typeof process3.removeListener === "function" && typeof process3.emit === "function" && typeof process3.reallyExit === "function" && typeof process3.listeners === "function" && typeof process3.kill === "function" && typeof process3.pid === "number" && typeof process3.on === "function";
    };
    if (!processOk(process2)) {
      module.exports = function() {
        return function() {
        };
      };
    } else {
      assert = __require("assert");
      signals = require_signals();
      isWin = /^win/i.test(process2.platform);
      EE = __require("events");
      if (typeof EE !== "function") {
        EE = EE.EventEmitter;
      }
      if (process2.__signal_exit_emitter__) {
        emitter = process2.__signal_exit_emitter__;
      } else {
        emitter = process2.__signal_exit_emitter__ = new EE();
        emitter.count = 0;
        emitter.emitted = {};
      }
      if (!emitter.infinite) {
        emitter.setMaxListeners(Infinity);
        emitter.infinite = true;
      }
      module.exports = function(cb, opts) {
        if (!processOk(global.process)) {
          return function() {
          };
        }
        assert.equal(typeof cb, "function", "a callback must be provided for exit handler");
        if (loaded === false) {
          load();
        }
        var ev = "exit";
        if (opts && opts.alwaysLast) {
          ev = "afterexit";
        }
        var remove = function() {
          emitter.removeListener(ev, cb);
          if (emitter.listeners("exit").length === 0 && emitter.listeners("afterexit").length === 0) {
            unload();
          }
        };
        emitter.on(ev, cb);
        return remove;
      };
      unload = function unload2() {
        if (!loaded || !processOk(global.process)) {
          return;
        }
        loaded = false;
        signals.forEach(function(sig) {
          try {
            process2.removeListener(sig, sigListeners[sig]);
          } catch (er) {
          }
        });
        process2.emit = originalProcessEmit;
        process2.reallyExit = originalProcessReallyExit;
        emitter.count -= 1;
      };
      module.exports.unload = unload;
      emit = function emit2(event, code, signal) {
        if (emitter.emitted[event]) {
          return;
        }
        emitter.emitted[event] = true;
        emitter.emit(event, code, signal);
      };
      sigListeners = {};
      signals.forEach(function(sig) {
        sigListeners[sig] = function listener() {
          if (!processOk(global.process)) {
            return;
          }
          var listeners = process2.listeners(sig);
          if (listeners.length === emitter.count) {
            unload();
            emit("exit", null, sig);
            emit("afterexit", null, sig);
            if (isWin && sig === "SIGHUP") {
              sig = "SIGINT";
            }
            process2.kill(process2.pid, sig);
          }
        };
      });
      module.exports.signals = function() {
        return signals;
      };
      loaded = false;
      load = function load2() {
        if (loaded || !processOk(global.process)) {
          return;
        }
        loaded = true;
        emitter.count += 1;
        signals = signals.filter(function(sig) {
          try {
            process2.on(sig, sigListeners[sig]);
            return true;
          } catch (er) {
            return false;
          }
        });
        process2.emit = processEmit;
        process2.reallyExit = processReallyExit;
      };
      module.exports.load = load;
      originalProcessReallyExit = process2.reallyExit;
      processReallyExit = function processReallyExit2(code) {
        if (!processOk(global.process)) {
          return;
        }
        process2.exitCode = code || /* istanbul ignore next */
        0;
        emit("exit", process2.exitCode, null);
        emit("afterexit", process2.exitCode, null);
        originalProcessReallyExit.call(process2, process2.exitCode);
      };
      originalProcessEmit = process2.emit;
      processEmit = function processEmit2(ev, arg) {
        if (ev === "exit" && processOk(global.process)) {
          if (arg !== void 0) {
            process2.exitCode = arg;
          }
          var ret = originalProcessEmit.apply(this, arguments);
          emit("exit", process2.exitCode, null);
          emit("afterexit", process2.exitCode, null);
          return ret;
        } else {
          return originalProcessEmit.apply(this, arguments);
        }
      };
    }
    var assert;
    var signals;
    var isWin;
    var EE;
    var emitter;
    var unload;
    var emit;
    var sigListeners;
    var loaded;
    var load;
    var originalProcessReallyExit;
    var processReallyExit;
    var originalProcessEmit;
    var processEmit;
  }
});

// node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/mtime-precision.js
var require_mtime_precision = __commonJS({
  "node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/mtime-precision.js"(exports, module) {
    "use strict";
    var cacheSymbol = /* @__PURE__ */ Symbol();
    function probe(file, fs, callback) {
      const cachedPrecision = fs[cacheSymbol];
      if (cachedPrecision) {
        return fs.stat(file, (err, stat) => {
          if (err) {
            return callback(err);
          }
          callback(null, stat.mtime, cachedPrecision);
        });
      }
      const mtime = new Date(Math.ceil(Date.now() / 1e3) * 1e3 + 5);
      fs.utimes(file, mtime, mtime, (err) => {
        if (err) {
          return callback(err);
        }
        fs.stat(file, (err2, stat) => {
          if (err2) {
            return callback(err2);
          }
          const precision = stat.mtime.getTime() % 1e3 === 0 ? "s" : "ms";
          Object.defineProperty(fs, cacheSymbol, { value: precision });
          callback(null, stat.mtime, precision);
        });
      });
    }
    function getMtime(precision) {
      let now = Date.now();
      if (precision === "s") {
        now = Math.ceil(now / 1e3) * 1e3;
      }
      return new Date(now);
    }
    module.exports.probe = probe;
    module.exports.getMtime = getMtime;
  }
});

// node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/lockfile.js
var require_lockfile = __commonJS({
  "node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/lockfile.js"(exports, module) {
    "use strict";
    var path = __require("path");
    var fs = require_graceful_fs();
    var retry = require_retry2();
    var onExit = require_signal_exit();
    var mtimePrecision = require_mtime_precision();
    var locks = {};
    function getLockFile(file, options) {
      return options.lockfilePath || `${file}.lock`;
    }
    function resolveCanonicalPath(file, options, callback) {
      if (!options.realpath) {
        return callback(null, path.resolve(file));
      }
      options.fs.realpath(file, callback);
    }
    function acquireLock(file, options, callback) {
      const lockfilePath = getLockFile(file, options);
      options.fs.mkdir(lockfilePath, (err) => {
        if (!err) {
          return mtimePrecision.probe(lockfilePath, options.fs, (err2, mtime, mtimePrecision2) => {
            if (err2) {
              options.fs.rmdir(lockfilePath, () => {
              });
              return callback(err2);
            }
            callback(null, mtime, mtimePrecision2);
          });
        }
        if (err.code !== "EEXIST") {
          return callback(err);
        }
        if (options.stale <= 0) {
          return callback(Object.assign(new Error("Lock file is already being held"), { code: "ELOCKED", file }));
        }
        options.fs.stat(lockfilePath, (err2, stat) => {
          if (err2) {
            if (err2.code === "ENOENT") {
              return acquireLock(file, { ...options, stale: 0 }, callback);
            }
            return callback(err2);
          }
          if (!isLockStale(stat, options)) {
            return callback(Object.assign(new Error("Lock file is already being held"), { code: "ELOCKED", file }));
          }
          removeLock(file, options, (err3) => {
            if (err3) {
              return callback(err3);
            }
            acquireLock(file, { ...options, stale: 0 }, callback);
          });
        });
      });
    }
    function isLockStale(stat, options) {
      return stat.mtime.getTime() < Date.now() - options.stale;
    }
    function removeLock(file, options, callback) {
      options.fs.rmdir(getLockFile(file, options), (err) => {
        if (err && err.code !== "ENOENT") {
          return callback(err);
        }
        callback();
      });
    }
    function updateLock(file, options) {
      const lock3 = locks[file];
      if (lock3.updateTimeout) {
        return;
      }
      lock3.updateDelay = lock3.updateDelay || options.update;
      lock3.updateTimeout = setTimeout(() => {
        lock3.updateTimeout = null;
        options.fs.stat(lock3.lockfilePath, (err, stat) => {
          const isOverThreshold = lock3.lastUpdate + options.stale < Date.now();
          if (err) {
            if (err.code === "ENOENT" || isOverThreshold) {
              return setLockAsCompromised(file, lock3, Object.assign(err, { code: "ECOMPROMISED" }));
            }
            lock3.updateDelay = 1e3;
            return updateLock(file, options);
          }
          const isMtimeOurs = lock3.mtime.getTime() === stat.mtime.getTime();
          if (!isMtimeOurs) {
            return setLockAsCompromised(
              file,
              lock3,
              Object.assign(
                new Error("Unable to update lock within the stale threshold"),
                { code: "ECOMPROMISED" }
              )
            );
          }
          const mtime = mtimePrecision.getMtime(lock3.mtimePrecision);
          options.fs.utimes(lock3.lockfilePath, mtime, mtime, (err2) => {
            const isOverThreshold2 = lock3.lastUpdate + options.stale < Date.now();
            if (lock3.released) {
              return;
            }
            if (err2) {
              if (err2.code === "ENOENT" || isOverThreshold2) {
                return setLockAsCompromised(file, lock3, Object.assign(err2, { code: "ECOMPROMISED" }));
              }
              lock3.updateDelay = 1e3;
              return updateLock(file, options);
            }
            lock3.mtime = mtime;
            lock3.lastUpdate = Date.now();
            lock3.updateDelay = null;
            updateLock(file, options);
          });
        });
      }, lock3.updateDelay);
      if (lock3.updateTimeout.unref) {
        lock3.updateTimeout.unref();
      }
    }
    function setLockAsCompromised(file, lock3, err) {
      lock3.released = true;
      if (lock3.updateTimeout) {
        clearTimeout(lock3.updateTimeout);
      }
      if (locks[file] === lock3) {
        delete locks[file];
      }
      lock3.options.onCompromised(err);
    }
    function lock2(file, options, callback) {
      options = {
        stale: 1e4,
        update: null,
        realpath: true,
        retries: 0,
        fs,
        onCompromised: (err) => {
          throw err;
        },
        ...options
      };
      options.retries = options.retries || 0;
      options.retries = typeof options.retries === "number" ? { retries: options.retries } : options.retries;
      options.stale = Math.max(options.stale || 0, 2e3);
      options.update = options.update == null ? options.stale / 2 : options.update || 0;
      options.update = Math.max(Math.min(options.update, options.stale / 2), 1e3);
      resolveCanonicalPath(file, options, (err, file2) => {
        if (err) {
          return callback(err);
        }
        const operation = retry.operation(options.retries);
        operation.attempt(() => {
          acquireLock(file2, options, (err2, mtime, mtimePrecision2) => {
            if (operation.retry(err2)) {
              return;
            }
            if (err2) {
              return callback(operation.mainError());
            }
            const lock3 = locks[file2] = {
              lockfilePath: getLockFile(file2, options),
              mtime,
              mtimePrecision: mtimePrecision2,
              options,
              lastUpdate: Date.now()
            };
            updateLock(file2, options);
            callback(null, (releasedCallback) => {
              if (lock3.released) {
                return releasedCallback && releasedCallback(Object.assign(new Error("Lock is already released"), { code: "ERELEASED" }));
              }
              unlock2(file2, { ...options, realpath: false }, releasedCallback);
            });
          });
        });
      });
    }
    function unlock2(file, options, callback) {
      options = {
        fs,
        realpath: true,
        ...options
      };
      resolveCanonicalPath(file, options, (err, file2) => {
        if (err) {
          return callback(err);
        }
        const lock3 = locks[file2];
        if (!lock3) {
          return callback(Object.assign(new Error("Lock is not acquired/owned by you"), { code: "ENOTACQUIRED" }));
        }
        lock3.updateTimeout && clearTimeout(lock3.updateTimeout);
        lock3.released = true;
        delete locks[file2];
        removeLock(file2, options, callback);
      });
    }
    function check2(file, options, callback) {
      options = {
        stale: 1e4,
        realpath: true,
        fs,
        ...options
      };
      options.stale = Math.max(options.stale || 0, 2e3);
      resolveCanonicalPath(file, options, (err, file2) => {
        if (err) {
          return callback(err);
        }
        options.fs.stat(getLockFile(file2, options), (err2, stat) => {
          if (err2) {
            return err2.code === "ENOENT" ? callback(null, false) : callback(err2);
          }
          return callback(null, !isLockStale(stat, options));
        });
      });
    }
    function getLocks() {
      return locks;
    }
    onExit(() => {
      for (const file in locks) {
        const options = locks[file].options;
        try {
          options.fs.rmdirSync(getLockFile(file, options));
        } catch (e) {
        }
      }
    });
    module.exports.lock = lock2;
    module.exports.unlock = unlock2;
    module.exports.check = check2;
    module.exports.getLocks = getLocks;
  }
});

// node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/adapter.js
var require_adapter = __commonJS({
  "node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/lib/adapter.js"(exports, module) {
    "use strict";
    var fs = require_graceful_fs();
    function createSyncFs(fs2) {
      const methods = ["mkdir", "realpath", "stat", "rmdir", "utimes"];
      const newFs = { ...fs2 };
      methods.forEach((method) => {
        newFs[method] = (...args) => {
          const callback = args.pop();
          let ret;
          try {
            ret = fs2[`${method}Sync`](...args);
          } catch (err) {
            return callback(err);
          }
          callback(null, ret);
        };
      });
      return newFs;
    }
    function toPromise(method) {
      return (...args) => new Promise((resolve, reject) => {
        args.push((err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
        method(...args);
      });
    }
    function toSync(method) {
      return (...args) => {
        let err;
        let result;
        args.push((_err, _result) => {
          err = _err;
          result = _result;
        });
        method(...args);
        if (err) {
          throw err;
        }
        return result;
      };
    }
    function toSyncOptions(options) {
      options = { ...options };
      options.fs = createSyncFs(options.fs || fs);
      if (typeof options.retries === "number" && options.retries > 0 || options.retries && typeof options.retries.retries === "number" && options.retries.retries > 0) {
        throw Object.assign(new Error("Cannot use retries with the sync api"), { code: "ESYNC" });
      }
      return options;
    }
    module.exports = {
      toPromise,
      toSync,
      toSyncOptions
    };
  }
});

// node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/index.js
var require_proper_lockfile = __commonJS({
  "node_modules/.pnpm/proper-lockfile@4.1.2/node_modules/proper-lockfile/index.js"(exports, module) {
    "use strict";
    var lockfile = require_lockfile();
    var { toPromise, toSync, toSyncOptions } = require_adapter();
    async function lock2(file, options) {
      const release = await toPromise(lockfile.lock)(file, options);
      return toPromise(release);
    }
    function lockSync2(file, options) {
      const release = toSync(lockfile.lock)(file, toSyncOptions(options));
      return toSync(release);
    }
    function unlock2(file, options) {
      return toPromise(lockfile.unlock)(file, options);
    }
    function unlockSync(file, options) {
      return toSync(lockfile.unlock)(file, toSyncOptions(options));
    }
    function check2(file, options) {
      return toPromise(lockfile.check)(file, options);
    }
    function checkSync(file, options) {
      return toSync(lockfile.check)(file, toSyncOptions(options));
    }
    module.exports = lock2;
    module.exports.lock = lock2;
    module.exports.unlock = unlock2;
    module.exports.lockSync = lockSync2;
    module.exports.unlockSync = unlockSync;
    module.exports.check = check2;
    module.exports.checkSync = checkSync;
  }
});

// src/utils/lockfile.ts
function getLockfile() {
  if (!_lockfile) {
    _lockfile = require_proper_lockfile();
  }
  return _lockfile;
}
function lock(file, options) {
  return getLockfile().lock(file, options);
}
function lockSync(file, options) {
  return getLockfile().lockSync(file, options);
}
function unlock(file, options) {
  return getLockfile().unlock(file, options);
}
function check(file, options) {
  return getLockfile().check(file, options);
}
var _lockfile;
var init_lockfile = __esm({
  "src/utils/lockfile.ts"() {
  }
});

export {
  intersperse,
  count,
  uniq,
  init_array,
  lock,
  lockSync,
  unlock,
  check,
  init_lockfile
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3V0aWxzL2FycmF5LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9ncmFjZWZ1bC1mc0A0LjIuMTEvbm9kZV9tb2R1bGVzL2dyYWNlZnVsLWZzL3BvbHlmaWxscy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ3JhY2VmdWwtZnNANC4yLjExL25vZGVfbW9kdWxlcy9ncmFjZWZ1bC1mcy9sZWdhY3ktc3RyZWFtcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ3JhY2VmdWwtZnNANC4yLjExL25vZGVfbW9kdWxlcy9ncmFjZWZ1bC1mcy9jbG9uZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ3JhY2VmdWwtZnNANC4yLjExL25vZGVfbW9kdWxlcy9ncmFjZWZ1bC1mcy9ncmFjZWZ1bC1mcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmV0cnlAMC4xMi4wL25vZGVfbW9kdWxlcy9yZXRyeS9saWIvcmV0cnlfb3BlcmF0aW9uLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZXRyeUAwLjEyLjAvbm9kZV9tb2R1bGVzL3JldHJ5L2xpYi9yZXRyeS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmV0cnlAMC4xMi4wL25vZGVfbW9kdWxlcy9yZXRyeS9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2lnbmFsLWV4aXRAMy4wLjcvbm9kZV9tb2R1bGVzL3NpZ25hbC1leGl0L3NpZ25hbHMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NpZ25hbC1leGl0QDMuMC43L25vZGVfbW9kdWxlcy9zaWduYWwtZXhpdC9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcHJvcGVyLWxvY2tmaWxlQDQuMS4yL25vZGVfbW9kdWxlcy9wcm9wZXItbG9ja2ZpbGUvbGliL210aW1lLXByZWNpc2lvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcHJvcGVyLWxvY2tmaWxlQDQuMS4yL25vZGVfbW9kdWxlcy9wcm9wZXItbG9ja2ZpbGUvbGliL2xvY2tmaWxlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9wcm9wZXItbG9ja2ZpbGVANC4xLjIvbm9kZV9tb2R1bGVzL3Byb3Blci1sb2NrZmlsZS9saWIvYWRhcHRlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcHJvcGVyLWxvY2tmaWxlQDQuMS4yL25vZGVfbW9kdWxlcy9wcm9wZXItbG9ja2ZpbGUvaW5kZXguanMiLCAiLi4vLi4vc3JjL3V0aWxzL2xvY2tmaWxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgZnVuY3Rpb24gaW50ZXJzcGVyc2U8QT4oYXM6IEFbXSwgc2VwYXJhdG9yOiAoaW5kZXg6IG51bWJlcikgPT4gQSk6IEFbXSB7XG4gIHJldHVybiBhcy5mbGF0TWFwKChhLCBpKSA9PiAoaSA/IFtzZXBhcmF0b3IoaSksIGFdIDogW2FdKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50PFQ+KGFycjogcmVhZG9ubHkgVFtdLCBwcmVkOiAoeDogVCkgPT4gdW5rbm93bik6IG51bWJlciB7XG4gIGxldCBuID0gMFxuICBmb3IgKGNvbnN0IHggb2YgYXJyKSBuICs9ICshIXByZWQoeClcbiAgcmV0dXJuIG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXE8VD4oeHM6IEl0ZXJhYmxlPFQ+KTogVFtdIHtcbiAgcmV0dXJuIFsuLi5uZXcgU2V0KHhzKV1cbn1cbiIsICJ2YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnY29uc3RhbnRzJylcblxudmFyIG9yaWdDd2QgPSBwcm9jZXNzLmN3ZFxudmFyIGN3ZCA9IG51bGxcblxudmFyIHBsYXRmb3JtID0gcHJvY2Vzcy5lbnYuR1JBQ0VGVUxfRlNfUExBVEZPUk0gfHwgcHJvY2Vzcy5wbGF0Zm9ybVxuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIWN3ZClcbiAgICBjd2QgPSBvcmlnQ3dkLmNhbGwocHJvY2VzcylcbiAgcmV0dXJuIGN3ZFxufVxudHJ5IHtcbiAgcHJvY2Vzcy5jd2QoKVxufSBjYXRjaCAoZXIpIHt9XG5cbi8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHVudGlsIG5vZGUuanMgMTIgaXMgcmVxdWlyZWRcbmlmICh0eXBlb2YgcHJvY2Vzcy5jaGRpciA9PT0gJ2Z1bmN0aW9uJykge1xuICB2YXIgY2hkaXIgPSBwcm9jZXNzLmNoZGlyXG4gIHByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZCkge1xuICAgIGN3ZCA9IG51bGxcbiAgICBjaGRpci5jYWxsKHByb2Nlc3MsIGQpXG4gIH1cbiAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb2Nlc3MuY2hkaXIsIGNoZGlyKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoXG5cbmZ1bmN0aW9uIHBhdGNoIChmcykge1xuICAvLyAocmUtKWltcGxlbWVudCBzb21lIHRoaW5ncyB0aGF0IGFyZSBrbm93biBidXN0ZWQgb3IgbWlzc2luZy5cblxuICAvLyBsY2htb2QsIGJyb2tlbiBwcmlvciB0byAwLjYuMlxuICAvLyBiYWNrLXBvcnQgdGhlIGZpeCBoZXJlLlxuICBpZiAoY29uc3RhbnRzLmhhc093blByb3BlcnR5KCdPX1NZTUxJTksnKSAmJlxuICAgICAgcHJvY2Vzcy52ZXJzaW9uLm1hdGNoKC9edjBcXC42XFwuWzAtMl18XnYwXFwuNVxcLi8pKSB7XG4gICAgcGF0Y2hMY2htb2QoZnMpXG4gIH1cblxuICAvLyBsdXRpbWVzIGltcGxlbWVudGF0aW9uLCBvciBuby1vcFxuICBpZiAoIWZzLmx1dGltZXMpIHtcbiAgICBwYXRjaEx1dGltZXMoZnMpXG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vaXNhYWNzL25vZGUtZ3JhY2VmdWwtZnMvaXNzdWVzLzRcbiAgLy8gQ2hvd24gc2hvdWxkIG5vdCBmYWlsIG9uIGVpbnZhbCBvciBlcGVybSBpZiBub24tcm9vdC5cbiAgLy8gSXQgc2hvdWxkIG5vdCBmYWlsIG9uIGVub3N5cyBldmVyLCBhcyB0aGlzIGp1c3QgaW5kaWNhdGVzXG4gIC8vIHRoYXQgYSBmcyBkb2Vzbid0IHN1cHBvcnQgdGhlIGludGVuZGVkIG9wZXJhdGlvbi5cblxuICBmcy5jaG93biA9IGNob3duRml4KGZzLmNob3duKVxuICBmcy5mY2hvd24gPSBjaG93bkZpeChmcy5mY2hvd24pXG4gIGZzLmxjaG93biA9IGNob3duRml4KGZzLmxjaG93bilcblxuICBmcy5jaG1vZCA9IGNobW9kRml4KGZzLmNobW9kKVxuICBmcy5mY2htb2QgPSBjaG1vZEZpeChmcy5mY2htb2QpXG4gIGZzLmxjaG1vZCA9IGNobW9kRml4KGZzLmxjaG1vZClcblxuICBmcy5jaG93blN5bmMgPSBjaG93bkZpeFN5bmMoZnMuY2hvd25TeW5jKVxuICBmcy5mY2hvd25TeW5jID0gY2hvd25GaXhTeW5jKGZzLmZjaG93blN5bmMpXG4gIGZzLmxjaG93blN5bmMgPSBjaG93bkZpeFN5bmMoZnMubGNob3duU3luYylcblxuICBmcy5jaG1vZFN5bmMgPSBjaG1vZEZpeFN5bmMoZnMuY2htb2RTeW5jKVxuICBmcy5mY2htb2RTeW5jID0gY2htb2RGaXhTeW5jKGZzLmZjaG1vZFN5bmMpXG4gIGZzLmxjaG1vZFN5bmMgPSBjaG1vZEZpeFN5bmMoZnMubGNobW9kU3luYylcblxuICBmcy5zdGF0ID0gc3RhdEZpeChmcy5zdGF0KVxuICBmcy5mc3RhdCA9IHN0YXRGaXgoZnMuZnN0YXQpXG4gIGZzLmxzdGF0ID0gc3RhdEZpeChmcy5sc3RhdClcblxuICBmcy5zdGF0U3luYyA9IHN0YXRGaXhTeW5jKGZzLnN0YXRTeW5jKVxuICBmcy5mc3RhdFN5bmMgPSBzdGF0Rml4U3luYyhmcy5mc3RhdFN5bmMpXG4gIGZzLmxzdGF0U3luYyA9IHN0YXRGaXhTeW5jKGZzLmxzdGF0U3luYylcblxuICAvLyBpZiBsY2htb2QvbGNob3duIGRvIG5vdCBleGlzdCwgdGhlbiBtYWtlIHRoZW0gbm8tb3BzXG4gIGlmIChmcy5jaG1vZCAmJiAhZnMubGNobW9kKSB7XG4gICAgZnMubGNobW9kID0gZnVuY3Rpb24gKHBhdGgsIG1vZGUsIGNiKSB7XG4gICAgICBpZiAoY2IpIHByb2Nlc3MubmV4dFRpY2soY2IpXG4gICAgfVxuICAgIGZzLmxjaG1vZFN5bmMgPSBmdW5jdGlvbiAoKSB7fVxuICB9XG4gIGlmIChmcy5jaG93biAmJiAhZnMubGNob3duKSB7XG4gICAgZnMubGNob3duID0gZnVuY3Rpb24gKHBhdGgsIHVpZCwgZ2lkLCBjYikge1xuICAgICAgaWYgKGNiKSBwcm9jZXNzLm5leHRUaWNrKGNiKVxuICAgIH1cbiAgICBmcy5sY2hvd25TeW5jID0gZnVuY3Rpb24gKCkge31cbiAgfVxuXG4gIC8vIG9uIFdpbmRvd3MsIEEvViBzb2Z0d2FyZSBjYW4gbG9jayB0aGUgZGlyZWN0b3J5LCBjYXVzaW5nIHRoaXNcbiAgLy8gdG8gZmFpbCB3aXRoIGFuIEVBQ0NFUyBvciBFUEVSTSBpZiB0aGUgZGlyZWN0b3J5IGNvbnRhaW5zIG5ld2x5XG4gIC8vIGNyZWF0ZWQgZmlsZXMuICBUcnkgYWdhaW4gb24gZmFpbHVyZSwgZm9yIHVwIHRvIDYwIHNlY29uZHMuXG5cbiAgLy8gU2V0IHRoZSB0aW1lb3V0IHRoaXMgbG9uZyBiZWNhdXNlIHNvbWUgV2luZG93cyBBbnRpLVZpcnVzLCBzdWNoIGFzIFBhcml0eVxuICAvLyBiaXQ5LCBtYXkgbG9jayBmaWxlcyBmb3IgdXAgdG8gYSBtaW51dGUsIGNhdXNpbmcgbnBtIHBhY2thZ2UgaW5zdGFsbFxuICAvLyBmYWlsdXJlcy4gQWxzbywgdGFrZSBjYXJlIHRvIHlpZWxkIHRoZSBzY2hlZHVsZXIuIFdpbmRvd3Mgc2NoZWR1bGluZyBnaXZlc1xuICAvLyBDUFUgdG8gYSBidXN5IGxvb3BpbmcgcHJvY2Vzcywgd2hpY2ggY2FuIGNhdXNlIHRoZSBwcm9ncmFtIGNhdXNpbmcgdGhlIGxvY2tcbiAgLy8gY29udGVudGlvbiB0byBiZSBzdGFydmVkIG9mIENQVSBieSBub2RlLCBzbyB0aGUgY29udGVudGlvbiBkb2Vzbid0IHJlc29sdmUuXG4gIGlmIChwbGF0Zm9ybSA9PT0gXCJ3aW4zMlwiKSB7XG4gICAgZnMucmVuYW1lID0gdHlwZW9mIGZzLnJlbmFtZSAhPT0gJ2Z1bmN0aW9uJyA/IGZzLnJlbmFtZVxuICAgIDogKGZ1bmN0aW9uIChmcyRyZW5hbWUpIHtcbiAgICAgIGZ1bmN0aW9uIHJlbmFtZSAoZnJvbSwgdG8sIGNiKSB7XG4gICAgICAgIHZhciBzdGFydCA9IERhdGUubm93KClcbiAgICAgICAgdmFyIGJhY2tvZmYgPSAwO1xuICAgICAgICBmcyRyZW5hbWUoZnJvbSwgdG8sIGZ1bmN0aW9uIENCIChlcikge1xuICAgICAgICAgIGlmIChlclxuICAgICAgICAgICAgICAmJiAoZXIuY29kZSA9PT0gXCJFQUNDRVNcIiB8fCBlci5jb2RlID09PSBcIkVQRVJNXCIgfHwgZXIuY29kZSA9PT0gXCJFQlVTWVwiKVxuICAgICAgICAgICAgICAmJiBEYXRlLm5vdygpIC0gc3RhcnQgPCA2MDAwMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZnMuc3RhdCh0bywgZnVuY3Rpb24gKHN0YXRlciwgc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVyICYmIHN0YXRlci5jb2RlID09PSBcIkVOT0VOVFwiKVxuICAgICAgICAgICAgICAgICAgZnMkcmVuYW1lKGZyb20sIHRvLCBDQik7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgY2IoZXIpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBiYWNrb2ZmKVxuICAgICAgICAgICAgaWYgKGJhY2tvZmYgPCAxMDApXG4gICAgICAgICAgICAgIGJhY2tvZmYgKz0gMTA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjYikgY2IoZXIpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSBPYmplY3Quc2V0UHJvdG90eXBlT2YocmVuYW1lLCBmcyRyZW5hbWUpXG4gICAgICByZXR1cm4gcmVuYW1lXG4gICAgfSkoZnMucmVuYW1lKVxuICB9XG5cbiAgLy8gaWYgcmVhZCgpIHJldHVybnMgRUFHQUlOLCB0aGVuIGp1c3QgdHJ5IGl0IGFnYWluLlxuICBmcy5yZWFkID0gdHlwZW9mIGZzLnJlYWQgIT09ICdmdW5jdGlvbicgPyBmcy5yZWFkXG4gIDogKGZ1bmN0aW9uIChmcyRyZWFkKSB7XG4gICAgZnVuY3Rpb24gcmVhZCAoZmQsIGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgsIHBvc2l0aW9uLCBjYWxsYmFja18pIHtcbiAgICAgIHZhciBjYWxsYmFja1xuICAgICAgaWYgKGNhbGxiYWNrXyAmJiB0eXBlb2YgY2FsbGJhY2tfID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBlYWdDb3VudGVyID0gMFxuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uIChlciwgXywgX18pIHtcbiAgICAgICAgICBpZiAoZXIgJiYgZXIuY29kZSA9PT0gJ0VBR0FJTicgJiYgZWFnQ291bnRlciA8IDEwKSB7XG4gICAgICAgICAgICBlYWdDb3VudGVyICsrXG4gICAgICAgICAgICByZXR1cm4gZnMkcmVhZC5jYWxsKGZzLCBmZCwgYnVmZmVyLCBvZmZzZXQsIGxlbmd0aCwgcG9zaXRpb24sIGNhbGxiYWNrKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYWxsYmFja18uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZnMkcmVhZC5jYWxsKGZzLCBmZCwgYnVmZmVyLCBvZmZzZXQsIGxlbmd0aCwgcG9zaXRpb24sIGNhbGxiYWNrKVxuICAgIH1cblxuICAgIC8vIFRoaXMgZW5zdXJlcyBgdXRpbC5wcm9taXNpZnlgIHdvcmtzIGFzIGl0IGRvZXMgZm9yIG5hdGl2ZSBgZnMucmVhZGAuXG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikgT2JqZWN0LnNldFByb3RvdHlwZU9mKHJlYWQsIGZzJHJlYWQpXG4gICAgcmV0dXJuIHJlYWRcbiAgfSkoZnMucmVhZClcblxuICBmcy5yZWFkU3luYyA9IHR5cGVvZiBmcy5yZWFkU3luYyAhPT0gJ2Z1bmN0aW9uJyA/IGZzLnJlYWRTeW5jXG4gIDogKGZ1bmN0aW9uIChmcyRyZWFkU3luYykgeyByZXR1cm4gZnVuY3Rpb24gKGZkLCBidWZmZXIsIG9mZnNldCwgbGVuZ3RoLCBwb3NpdGlvbikge1xuICAgIHZhciBlYWdDb3VudGVyID0gMFxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZnMkcmVhZFN5bmMuY2FsbChmcywgZmQsIGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgsIHBvc2l0aW9uKVxuICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgaWYgKGVyLmNvZGUgPT09ICdFQUdBSU4nICYmIGVhZ0NvdW50ZXIgPCAxMCkge1xuICAgICAgICAgIGVhZ0NvdW50ZXIgKytcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVyXG4gICAgICB9XG4gICAgfVxuICB9fSkoZnMucmVhZFN5bmMpXG5cbiAgZnVuY3Rpb24gcGF0Y2hMY2htb2QgKGZzKSB7XG4gICAgZnMubGNobW9kID0gZnVuY3Rpb24gKHBhdGgsIG1vZGUsIGNhbGxiYWNrKSB7XG4gICAgICBmcy5vcGVuKCBwYXRoXG4gICAgICAgICAgICAgLCBjb25zdGFudHMuT19XUk9OTFkgfCBjb25zdGFudHMuT19TWU1MSU5LXG4gICAgICAgICAgICAgLCBtb2RlXG4gICAgICAgICAgICAgLCBmdW5jdGlvbiAoZXJyLCBmZCkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnIpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJlZmVyIHRvIHJldHVybiB0aGUgY2htb2QgZXJyb3IsIGlmIG9uZSBvY2N1cnMsXG4gICAgICAgIC8vIGJ1dCBzdGlsbCB0cnkgdG8gY2xvc2UsIGFuZCByZXBvcnQgY2xvc2luZyBlcnJvcnMgaWYgdGhleSBvY2N1ci5cbiAgICAgICAgZnMuZmNobW9kKGZkLCBtb2RlLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgZnMuY2xvc2UoZmQsIGZ1bmN0aW9uKGVycjIpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyIHx8IGVycjIpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnMubGNobW9kU3luYyA9IGZ1bmN0aW9uIChwYXRoLCBtb2RlKSB7XG4gICAgICB2YXIgZmQgPSBmcy5vcGVuU3luYyhwYXRoLCBjb25zdGFudHMuT19XUk9OTFkgfCBjb25zdGFudHMuT19TWU1MSU5LLCBtb2RlKVxuXG4gICAgICAvLyBwcmVmZXIgdG8gcmV0dXJuIHRoZSBjaG1vZCBlcnJvciwgaWYgb25lIG9jY3VycyxcbiAgICAgIC8vIGJ1dCBzdGlsbCB0cnkgdG8gY2xvc2UsIGFuZCByZXBvcnQgY2xvc2luZyBlcnJvcnMgaWYgdGhleSBvY2N1ci5cbiAgICAgIHZhciB0aHJldyA9IHRydWVcbiAgICAgIHZhciByZXRcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldCA9IGZzLmZjaG1vZFN5bmMoZmQsIG1vZGUpXG4gICAgICAgIHRocmV3ID0gZmFsc2VcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0aHJldykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmcy5jbG9zZVN5bmMoZmQpXG4gICAgICAgICAgfSBjYXRjaCAoZXIpIHt9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnMuY2xvc2VTeW5jKGZkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGF0Y2hMdXRpbWVzIChmcykge1xuICAgIGlmIChjb25zdGFudHMuaGFzT3duUHJvcGVydHkoXCJPX1NZTUxJTktcIikgJiYgZnMuZnV0aW1lcykge1xuICAgICAgZnMubHV0aW1lcyA9IGZ1bmN0aW9uIChwYXRoLCBhdCwgbXQsIGNiKSB7XG4gICAgICAgIGZzLm9wZW4ocGF0aCwgY29uc3RhbnRzLk9fU1lNTElOSywgZnVuY3Rpb24gKGVyLCBmZCkge1xuICAgICAgICAgIGlmIChlcikge1xuICAgICAgICAgICAgaWYgKGNiKSBjYihlcilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBmcy5mdXRpbWVzKGZkLCBhdCwgbXQsIGZ1bmN0aW9uIChlcikge1xuICAgICAgICAgICAgZnMuY2xvc2UoZmQsIGZ1bmN0aW9uIChlcjIpIHtcbiAgICAgICAgICAgICAgaWYgKGNiKSBjYihlciB8fCBlcjIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGZzLmx1dGltZXNTeW5jID0gZnVuY3Rpb24gKHBhdGgsIGF0LCBtdCkge1xuICAgICAgICB2YXIgZmQgPSBmcy5vcGVuU3luYyhwYXRoLCBjb25zdGFudHMuT19TWU1MSU5LKVxuICAgICAgICB2YXIgcmV0XG4gICAgICAgIHZhciB0aHJldyA9IHRydWVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXQgPSBmcy5mdXRpbWVzU3luYyhmZCwgYXQsIG10KVxuICAgICAgICAgIHRocmV3ID0gZmFsc2VcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodGhyZXcpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZzLmNsb3NlU3luYyhmZClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVyKSB7fVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcy5jbG9zZVN5bmMoZmQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXRcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoZnMuZnV0aW1lcykge1xuICAgICAgZnMubHV0aW1lcyA9IGZ1bmN0aW9uIChfYSwgX2IsIF9jLCBjYikgeyBpZiAoY2IpIHByb2Nlc3MubmV4dFRpY2soY2IpIH1cbiAgICAgIGZzLmx1dGltZXNTeW5jID0gZnVuY3Rpb24gKCkge31cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaG1vZEZpeCAob3JpZykge1xuICAgIGlmICghb3JpZykgcmV0dXJuIG9yaWdcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgbW9kZSwgY2IpIHtcbiAgICAgIHJldHVybiBvcmlnLmNhbGwoZnMsIHRhcmdldCwgbW9kZSwgZnVuY3Rpb24gKGVyKSB7XG4gICAgICAgIGlmIChjaG93bkVyT2soZXIpKSBlciA9IG51bGxcbiAgICAgICAgaWYgKGNiKSBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNobW9kRml4U3luYyAob3JpZykge1xuICAgIGlmICghb3JpZykgcmV0dXJuIG9yaWdcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgbW9kZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG9yaWcuY2FsbChmcywgdGFyZ2V0LCBtb2RlKVxuICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgaWYgKCFjaG93bkVyT2soZXIpKSB0aHJvdyBlclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gY2hvd25GaXggKG9yaWcpIHtcbiAgICBpZiAoIW9yaWcpIHJldHVybiBvcmlnXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHVpZCwgZ2lkLCBjYikge1xuICAgICAgcmV0dXJuIG9yaWcuY2FsbChmcywgdGFyZ2V0LCB1aWQsIGdpZCwgZnVuY3Rpb24gKGVyKSB7XG4gICAgICAgIGlmIChjaG93bkVyT2soZXIpKSBlciA9IG51bGxcbiAgICAgICAgaWYgKGNiKSBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNob3duRml4U3luYyAob3JpZykge1xuICAgIGlmICghb3JpZykgcmV0dXJuIG9yaWdcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgdWlkLCBnaWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBvcmlnLmNhbGwoZnMsIHRhcmdldCwgdWlkLCBnaWQpXG4gICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICBpZiAoIWNob3duRXJPayhlcikpIHRocm93IGVyXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhdEZpeCAob3JpZykge1xuICAgIGlmICghb3JpZykgcmV0dXJuIG9yaWdcbiAgICAvLyBPbGRlciB2ZXJzaW9ucyBvZiBOb2RlIGVycm9uZW91c2x5IHJldHVybmVkIHNpZ25lZCBpbnRlZ2VycyBmb3JcbiAgICAvLyB1aWQgKyBnaWQuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMsIGNiKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2IgPSBvcHRpb25zXG4gICAgICAgIG9wdGlvbnMgPSBudWxsXG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBjYWxsYmFjayAoZXIsIHN0YXRzKSB7XG4gICAgICAgIGlmIChzdGF0cykge1xuICAgICAgICAgIGlmIChzdGF0cy51aWQgPCAwKSBzdGF0cy51aWQgKz0gMHgxMDAwMDAwMDBcbiAgICAgICAgICBpZiAoc3RhdHMuZ2lkIDwgMCkgc3RhdHMuZ2lkICs9IDB4MTAwMDAwMDAwXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNiKSBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucyA/IG9yaWcuY2FsbChmcywgdGFyZ2V0LCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICAgICAgOiBvcmlnLmNhbGwoZnMsIHRhcmdldCwgY2FsbGJhY2spXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhdEZpeFN5bmMgKG9yaWcpIHtcbiAgICBpZiAoIW9yaWcpIHJldHVybiBvcmlnXG4gICAgLy8gT2xkZXIgdmVyc2lvbnMgb2YgTm9kZSBlcnJvbmVvdXNseSByZXR1cm5lZCBzaWduZWQgaW50ZWdlcnMgZm9yXG4gICAgLy8gdWlkICsgZ2lkLlxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB2YXIgc3RhdHMgPSBvcHRpb25zID8gb3JpZy5jYWxsKGZzLCB0YXJnZXQsIG9wdGlvbnMpXG4gICAgICAgIDogb3JpZy5jYWxsKGZzLCB0YXJnZXQpXG4gICAgICBpZiAoc3RhdHMpIHtcbiAgICAgICAgaWYgKHN0YXRzLnVpZCA8IDApIHN0YXRzLnVpZCArPSAweDEwMDAwMDAwMFxuICAgICAgICBpZiAoc3RhdHMuZ2lkIDwgMCkgc3RhdHMuZ2lkICs9IDB4MTAwMDAwMDAwXG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdHM7XG4gICAgfVxuICB9XG5cbiAgLy8gRU5PU1lTIG1lYW5zIHRoYXQgdGhlIGZzIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgb3AuIEp1c3QgaWdub3JlXG4gIC8vIHRoYXQsIGJlY2F1c2UgaXQgZG9lc24ndCBtYXR0ZXIuXG4gIC8vXG4gIC8vIGlmIHRoZXJlJ3Mgbm8gZ2V0dWlkLCBvciBpZiBnZXR1aWQoKSBpcyBzb21ldGhpbmcgb3RoZXJcbiAgLy8gdGhhbiAwLCBhbmQgdGhlIGVycm9yIGlzIEVJTlZBTCBvciBFUEVSTSwgdGhlbiBqdXN0IGlnbm9yZVxuICAvLyBpdC5cbiAgLy9cbiAgLy8gVGhpcyBzcGVjaWZpYyBjYXNlIGlzIGEgc2lsZW50IGZhaWx1cmUgaW4gY3AsIGluc3RhbGwsIHRhcixcbiAgLy8gYW5kIG1vc3Qgb3RoZXIgdW5peCB0b29scyB0aGF0IG1hbmFnZSBwZXJtaXNzaW9ucy5cbiAgLy9cbiAgLy8gV2hlbiBydW5uaW5nIGFzIHJvb3QsIG9yIGlmIG90aGVyIHR5cGVzIG9mIGVycm9ycyBhcmVcbiAgLy8gZW5jb3VudGVyZWQsIHRoZW4gaXQncyBzdHJpY3QuXG4gIGZ1bmN0aW9uIGNob3duRXJPayAoZXIpIHtcbiAgICBpZiAoIWVyKVxuICAgICAgcmV0dXJuIHRydWVcblxuICAgIGlmIChlci5jb2RlID09PSBcIkVOT1NZU1wiKVxuICAgICAgcmV0dXJuIHRydWVcblxuICAgIHZhciBub25yb290ID0gIXByb2Nlc3MuZ2V0dWlkIHx8IHByb2Nlc3MuZ2V0dWlkKCkgIT09IDBcbiAgICBpZiAobm9ucm9vdCkge1xuICAgICAgaWYgKGVyLmNvZGUgPT09IFwiRUlOVkFMXCIgfHwgZXIuY29kZSA9PT0gXCJFUEVSTVwiKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG4iLCAidmFyIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpLlN0cmVhbVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxlZ2FjeVxuXG5mdW5jdGlvbiBsZWdhY3kgKGZzKSB7XG4gIHJldHVybiB7XG4gICAgUmVhZFN0cmVhbTogUmVhZFN0cmVhbSxcbiAgICBXcml0ZVN0cmVhbTogV3JpdGVTdHJlYW1cbiAgfVxuXG4gIGZ1bmN0aW9uIFJlYWRTdHJlYW0gKHBhdGgsIG9wdGlvbnMpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVhZFN0cmVhbSkpIHJldHVybiBuZXcgUmVhZFN0cmVhbShwYXRoLCBvcHRpb25zKTtcblxuICAgIFN0cmVhbS5jYWxsKHRoaXMpO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmZkID0gbnVsbDtcbiAgICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5mbGFncyA9ICdyJztcbiAgICB0aGlzLm1vZGUgPSA0Mzg7IC8qPTA2NjYqL1xuICAgIHRoaXMuYnVmZmVyU2l6ZSA9IDY0ICogMTAyNDtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gTWl4aW4gb3B0aW9ucyBpbnRvIHRoaXNcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICAgIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICB0aGlzW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZW5jb2RpbmcpIHRoaXMuc2V0RW5jb2RpbmcodGhpcy5lbmNvZGluZyk7XG5cbiAgICBpZiAodGhpcy5zdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoJ251bWJlcicgIT09IHR5cGVvZiB0aGlzLnN0YXJ0KSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignc3RhcnQgbXVzdCBiZSBhIE51bWJlcicpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5lbmQgPSBJbmZpbml0eTtcbiAgICAgIH0gZWxzZSBpZiAoJ251bWJlcicgIT09IHR5cGVvZiB0aGlzLmVuZCkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ2VuZCBtdXN0IGJlIGEgTnVtYmVyJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXJ0ID4gdGhpcy5lbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzdGFydCBtdXN0IGJlIDw9IGVuZCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBvcyA9IHRoaXMuc3RhcnQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmQgIT09IG51bGwpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuX3JlYWQoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZzLm9wZW4odGhpcy5wYXRoLCB0aGlzLmZsYWdzLCB0aGlzLm1vZGUsIGZ1bmN0aW9uIChlcnIsIGZkKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHNlbGYuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgICBzZWxmLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5mZCA9IGZkO1xuICAgICAgc2VsZi5lbWl0KCdvcGVuJywgZmQpO1xuICAgICAgc2VsZi5fcmVhZCgpO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBXcml0ZVN0cmVhbSAocGF0aCwgb3B0aW9ucykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBXcml0ZVN0cmVhbSkpIHJldHVybiBuZXcgV3JpdGVTdHJlYW0ocGF0aCwgb3B0aW9ucyk7XG5cbiAgICBTdHJlYW0uY2FsbCh0aGlzKTtcblxuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5mZCA9IG51bGw7XG4gICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG5cbiAgICB0aGlzLmZsYWdzID0gJ3cnO1xuICAgIHRoaXMuZW5jb2RpbmcgPSAnYmluYXJ5JztcbiAgICB0aGlzLm1vZGUgPSA0Mzg7IC8qPTA2NjYqL1xuICAgIHRoaXMuYnl0ZXNXcml0dGVuID0gMDtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gTWl4aW4gb3B0aW9ucyBpbnRvIHRoaXNcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICAgIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICB0aGlzW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgdGhpcy5zdGFydCkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ3N0YXJ0IG11c3QgYmUgYSBOdW1iZXInKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXJ0IDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0YXJ0IG11c3QgYmUgPj0gemVybycpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBvcyA9IHRoaXMuc3RhcnQ7XG4gICAgfVxuXG4gICAgdGhpcy5idXN5ID0gZmFsc2U7XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcblxuICAgIGlmICh0aGlzLmZkID09PSBudWxsKSB7XG4gICAgICB0aGlzLl9vcGVuID0gZnMub3BlbjtcbiAgICAgIHRoaXMuX3F1ZXVlLnB1c2goW3RoaXMuX29wZW4sIHRoaXMucGF0aCwgdGhpcy5mbGFncywgdGhpcy5tb2RlLCB1bmRlZmluZWRdKTtcbiAgICAgIHRoaXMuZmx1c2goKTtcbiAgICB9XG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVxuXG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqLl9fcHJvdG9fX1xufVxuXG5mdW5jdGlvbiBjbG9uZSAob2JqKSB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpXG4gICAgcmV0dXJuIG9ialxuXG4gIGlmIChvYmogaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgdmFyIGNvcHkgPSB7IF9fcHJvdG9fXzogZ2V0UHJvdG90eXBlT2Yob2JqKSB9XG4gIGVsc2VcbiAgICB2YXIgY29weSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb3B5LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpKVxuICB9KVxuXG4gIHJldHVybiBjb3B5XG59XG4iLCAidmFyIGZzID0gcmVxdWlyZSgnZnMnKVxudmFyIHBvbHlmaWxscyA9IHJlcXVpcmUoJy4vcG9seWZpbGxzLmpzJylcbnZhciBsZWdhY3kgPSByZXF1aXJlKCcuL2xlZ2FjeS1zdHJlYW1zLmpzJylcbnZhciBjbG9uZSA9IHJlcXVpcmUoJy4vY2xvbmUuanMnKVxuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIG5vZGUgMC54IHBvbHlmaWxsICovXG52YXIgZ3JhY2VmdWxRdWV1ZVxudmFyIHByZXZpb3VzU3ltYm9sXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlIC0gbm9kZSAwLnggcG9seWZpbGwgKi9cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuZm9yID09PSAnZnVuY3Rpb24nKSB7XG4gIGdyYWNlZnVsUXVldWUgPSBTeW1ib2wuZm9yKCdncmFjZWZ1bC1mcy5xdWV1ZScpXG4gIC8vIFRoaXMgaXMgdXNlZCBpbiB0ZXN0aW5nIGJ5IGZ1dHVyZSB2ZXJzaW9uc1xuICBwcmV2aW91c1N5bWJvbCA9IFN5bWJvbC5mb3IoJ2dyYWNlZnVsLWZzLnByZXZpb3VzJylcbn0gZWxzZSB7XG4gIGdyYWNlZnVsUXVldWUgPSAnX19fZ3JhY2VmdWwtZnMucXVldWUnXG4gIHByZXZpb3VzU3ltYm9sID0gJ19fX2dyYWNlZnVsLWZzLnByZXZpb3VzJ1xufVxuXG5mdW5jdGlvbiBub29wICgpIHt9XG5cbmZ1bmN0aW9uIHB1Ymxpc2hRdWV1ZShjb250ZXh0LCBxdWV1ZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udGV4dCwgZ3JhY2VmdWxRdWV1ZSwge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcXVldWVcbiAgICB9XG4gIH0pXG59XG5cbnZhciBkZWJ1ZyA9IG5vb3BcbmlmICh1dGlsLmRlYnVnbG9nKVxuICBkZWJ1ZyA9IHV0aWwuZGVidWdsb2coJ2dmczQnKVxuZWxzZSBpZiAoL1xcYmdmczRcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJycpKVxuICBkZWJ1ZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBtID0gdXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgYXJndW1lbnRzKVxuICAgIG0gPSAnR0ZTNDogJyArIG0uc3BsaXQoL1xcbi8pLmpvaW4oJ1xcbkdGUzQ6ICcpXG4gICAgY29uc29sZS5lcnJvcihtKVxuICB9XG5cbi8vIE9uY2UgdGltZSBpbml0aWFsaXphdGlvblxuaWYgKCFmc1tncmFjZWZ1bFF1ZXVlXSkge1xuICAvLyBUaGlzIHF1ZXVlIGNhbiBiZSBzaGFyZWQgYnkgbXVsdGlwbGUgbG9hZGVkIGluc3RhbmNlc1xuICB2YXIgcXVldWUgPSBnbG9iYWxbZ3JhY2VmdWxRdWV1ZV0gfHwgW11cbiAgcHVibGlzaFF1ZXVlKGZzLCBxdWV1ZSlcblxuICAvLyBQYXRjaCBmcy5jbG9zZS9jbG9zZVN5bmMgdG8gc2hhcmVkIHF1ZXVlIHZlcnNpb24sIGJlY2F1c2Ugd2UgbmVlZFxuICAvLyB0byByZXRyeSgpIHdoZW5ldmVyIGEgY2xvc2UgaGFwcGVucyAqYW55d2hlcmUqIGluIHRoZSBwcm9ncmFtLlxuICAvLyBUaGlzIGlzIGVzc2VudGlhbCB3aGVuIG11bHRpcGxlIGdyYWNlZnVsLWZzIGluc3RhbmNlcyBhcmVcbiAgLy8gaW4gcGxheSBhdCB0aGUgc2FtZSB0aW1lLlxuICBmcy5jbG9zZSA9IChmdW5jdGlvbiAoZnMkY2xvc2UpIHtcbiAgICBmdW5jdGlvbiBjbG9zZSAoZmQsIGNiKSB7XG4gICAgICByZXR1cm4gZnMkY2xvc2UuY2FsbChmcywgZmQsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiB1c2VzIHRoZSBncmFjZWZ1bC1mcyBzaGFyZWQgcXVldWVcbiAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICByZXNldFF1ZXVlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgY2IuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xvc2UsIHByZXZpb3VzU3ltYm9sLCB7XG4gICAgICB2YWx1ZTogZnMkY2xvc2VcbiAgICB9KVxuICAgIHJldHVybiBjbG9zZVxuICB9KShmcy5jbG9zZSlcblxuICBmcy5jbG9zZVN5bmMgPSAoZnVuY3Rpb24gKGZzJGNsb3NlU3luYykge1xuICAgIGZ1bmN0aW9uIGNsb3NlU3luYyAoZmQpIHtcbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gdXNlcyB0aGUgZ3JhY2VmdWwtZnMgc2hhcmVkIHF1ZXVlXG4gICAgICBmcyRjbG9zZVN5bmMuYXBwbHkoZnMsIGFyZ3VtZW50cylcbiAgICAgIHJlc2V0UXVldWUoKVxuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbG9zZVN5bmMsIHByZXZpb3VzU3ltYm9sLCB7XG4gICAgICB2YWx1ZTogZnMkY2xvc2VTeW5jXG4gICAgfSlcbiAgICByZXR1cm4gY2xvc2VTeW5jXG4gIH0pKGZzLmNsb3NlU3luYylcblxuICBpZiAoL1xcYmdmczRcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJycpKSB7XG4gICAgcHJvY2Vzcy5vbignZXhpdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgZGVidWcoZnNbZ3JhY2VmdWxRdWV1ZV0pXG4gICAgICByZXF1aXJlKCdhc3NlcnQnKS5lcXVhbChmc1tncmFjZWZ1bFF1ZXVlXS5sZW5ndGgsIDApXG4gICAgfSlcbiAgfVxufVxuXG5pZiAoIWdsb2JhbFtncmFjZWZ1bFF1ZXVlXSkge1xuICBwdWJsaXNoUXVldWUoZ2xvYmFsLCBmc1tncmFjZWZ1bFF1ZXVlXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2goY2xvbmUoZnMpKVxuaWYgKHByb2Nlc3MuZW52LlRFU1RfR1JBQ0VGVUxfRlNfR0xPQkFMX1BBVENIICYmICFmcy5fX3BhdGNoZWQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHBhdGNoKGZzKVxuICAgIGZzLl9fcGF0Y2hlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHBhdGNoIChmcykge1xuICAvLyBFdmVyeXRoaW5nIHRoYXQgcmVmZXJlbmNlcyB0aGUgb3BlbigpIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGluIGhlcmVcbiAgcG9seWZpbGxzKGZzKVxuICBmcy5ncmFjZWZ1bGlmeSA9IHBhdGNoXG5cbiAgZnMuY3JlYXRlUmVhZFN0cmVhbSA9IGNyZWF0ZVJlYWRTdHJlYW1cbiAgZnMuY3JlYXRlV3JpdGVTdHJlYW0gPSBjcmVhdGVXcml0ZVN0cmVhbVxuICB2YXIgZnMkcmVhZEZpbGUgPSBmcy5yZWFkRmlsZVxuICBmcy5yZWFkRmlsZSA9IHJlYWRGaWxlXG4gIGZ1bmN0aW9uIHJlYWRGaWxlIChwYXRoLCBvcHRpb25zLCBjYikge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgIGNiID0gb3B0aW9ucywgb3B0aW9ucyA9IG51bGxcblxuICAgIHJldHVybiBnbyRyZWFkRmlsZShwYXRoLCBvcHRpb25zLCBjYilcblxuICAgIGZ1bmN0aW9uIGdvJHJlYWRGaWxlIChwYXRoLCBvcHRpb25zLCBjYiwgc3RhcnRUaW1lKSB7XG4gICAgICByZXR1cm4gZnMkcmVhZEZpbGUocGF0aCwgb3B0aW9ucywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyICYmIChlcnIuY29kZSA9PT0gJ0VNRklMRScgfHwgZXJyLmNvZGUgPT09ICdFTkZJTEUnKSlcbiAgICAgICAgICBlbnF1ZXVlKFtnbyRyZWFkRmlsZSwgW3BhdGgsIG9wdGlvbnMsIGNiXSwgZXJyLCBzdGFydFRpbWUgfHwgRGF0ZS5ub3coKSwgRGF0ZS5ub3coKV0pXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdmFyIGZzJHdyaXRlRmlsZSA9IGZzLndyaXRlRmlsZVxuICBmcy53cml0ZUZpbGUgPSB3cml0ZUZpbGVcbiAgZnVuY3Rpb24gd3JpdGVGaWxlIChwYXRoLCBkYXRhLCBvcHRpb25zLCBjYikge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgIGNiID0gb3B0aW9ucywgb3B0aW9ucyA9IG51bGxcblxuICAgIHJldHVybiBnbyR3cml0ZUZpbGUocGF0aCwgZGF0YSwgb3B0aW9ucywgY2IpXG5cbiAgICBmdW5jdGlvbiBnbyR3cml0ZUZpbGUgKHBhdGgsIGRhdGEsIG9wdGlvbnMsIGNiLCBzdGFydFRpbWUpIHtcbiAgICAgIHJldHVybiBmcyR3cml0ZUZpbGUocGF0aCwgZGF0YSwgb3B0aW9ucywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyICYmIChlcnIuY29kZSA9PT0gJ0VNRklMRScgfHwgZXJyLmNvZGUgPT09ICdFTkZJTEUnKSlcbiAgICAgICAgICBlbnF1ZXVlKFtnbyR3cml0ZUZpbGUsIFtwYXRoLCBkYXRhLCBvcHRpb25zLCBjYl0sIGVyciwgc3RhcnRUaW1lIHx8IERhdGUubm93KCksIERhdGUubm93KCldKVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgY2IuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHZhciBmcyRhcHBlbmRGaWxlID0gZnMuYXBwZW5kRmlsZVxuICBpZiAoZnMkYXBwZW5kRmlsZSlcbiAgICBmcy5hcHBlbmRGaWxlID0gYXBwZW5kRmlsZVxuICBmdW5jdGlvbiBhcHBlbmRGaWxlIChwYXRoLCBkYXRhLCBvcHRpb25zLCBjYikge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgIGNiID0gb3B0aW9ucywgb3B0aW9ucyA9IG51bGxcblxuICAgIHJldHVybiBnbyRhcHBlbmRGaWxlKHBhdGgsIGRhdGEsIG9wdGlvbnMsIGNiKVxuXG4gICAgZnVuY3Rpb24gZ28kYXBwZW5kRmlsZSAocGF0aCwgZGF0YSwgb3B0aW9ucywgY2IsIHN0YXJ0VGltZSkge1xuICAgICAgcmV0dXJuIGZzJGFwcGVuZEZpbGUocGF0aCwgZGF0YSwgb3B0aW9ucywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyICYmIChlcnIuY29kZSA9PT0gJ0VNRklMRScgfHwgZXJyLmNvZGUgPT09ICdFTkZJTEUnKSlcbiAgICAgICAgICBlbnF1ZXVlKFtnbyRhcHBlbmRGaWxlLCBbcGF0aCwgZGF0YSwgb3B0aW9ucywgY2JdLCBlcnIsIHN0YXJ0VGltZSB8fCBEYXRlLm5vdygpLCBEYXRlLm5vdygpXSlcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB2YXIgZnMkY29weUZpbGUgPSBmcy5jb3B5RmlsZVxuICBpZiAoZnMkY29weUZpbGUpXG4gICAgZnMuY29weUZpbGUgPSBjb3B5RmlsZVxuICBmdW5jdGlvbiBjb3B5RmlsZSAoc3JjLCBkZXN0LCBmbGFncywgY2IpIHtcbiAgICBpZiAodHlwZW9mIGZsYWdzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IGZsYWdzXG4gICAgICBmbGFncyA9IDBcbiAgICB9XG4gICAgcmV0dXJuIGdvJGNvcHlGaWxlKHNyYywgZGVzdCwgZmxhZ3MsIGNiKVxuXG4gICAgZnVuY3Rpb24gZ28kY29weUZpbGUgKHNyYywgZGVzdCwgZmxhZ3MsIGNiLCBzdGFydFRpbWUpIHtcbiAgICAgIHJldHVybiBmcyRjb3B5RmlsZShzcmMsIGRlc3QsIGZsYWdzLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIgJiYgKGVyci5jb2RlID09PSAnRU1GSUxFJyB8fCBlcnIuY29kZSA9PT0gJ0VORklMRScpKVxuICAgICAgICAgIGVucXVldWUoW2dvJGNvcHlGaWxlLCBbc3JjLCBkZXN0LCBmbGFncywgY2JdLCBlcnIsIHN0YXJ0VGltZSB8fCBEYXRlLm5vdygpLCBEYXRlLm5vdygpXSlcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB2YXIgZnMkcmVhZGRpciA9IGZzLnJlYWRkaXJcbiAgZnMucmVhZGRpciA9IHJlYWRkaXJcbiAgdmFyIG5vUmVhZGRpck9wdGlvblZlcnNpb25zID0gL152WzAtNV1cXC4vXG4gIGZ1bmN0aW9uIHJlYWRkaXIgKHBhdGgsIG9wdGlvbnMsIGNiKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKVxuICAgICAgY2IgPSBvcHRpb25zLCBvcHRpb25zID0gbnVsbFxuXG4gICAgdmFyIGdvJHJlYWRkaXIgPSBub1JlYWRkaXJPcHRpb25WZXJzaW9ucy50ZXN0KHByb2Nlc3MudmVyc2lvbilcbiAgICAgID8gZnVuY3Rpb24gZ28kcmVhZGRpciAocGF0aCwgb3B0aW9ucywgY2IsIHN0YXJ0VGltZSkge1xuICAgICAgICByZXR1cm4gZnMkcmVhZGRpcihwYXRoLCBmcyRyZWFkZGlyQ2FsbGJhY2soXG4gICAgICAgICAgcGF0aCwgb3B0aW9ucywgY2IsIHN0YXJ0VGltZVxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgOiBmdW5jdGlvbiBnbyRyZWFkZGlyIChwYXRoLCBvcHRpb25zLCBjYiwgc3RhcnRUaW1lKSB7XG4gICAgICAgIHJldHVybiBmcyRyZWFkZGlyKHBhdGgsIG9wdGlvbnMsIGZzJHJlYWRkaXJDYWxsYmFjayhcbiAgICAgICAgICBwYXRoLCBvcHRpb25zLCBjYiwgc3RhcnRUaW1lXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICByZXR1cm4gZ28kcmVhZGRpcihwYXRoLCBvcHRpb25zLCBjYilcblxuICAgIGZ1bmN0aW9uIGZzJHJlYWRkaXJDYWxsYmFjayAocGF0aCwgb3B0aW9ucywgY2IsIHN0YXJ0VGltZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIsIGZpbGVzKSB7XG4gICAgICAgIGlmIChlcnIgJiYgKGVyci5jb2RlID09PSAnRU1GSUxFJyB8fCBlcnIuY29kZSA9PT0gJ0VORklMRScpKVxuICAgICAgICAgIGVucXVldWUoW1xuICAgICAgICAgICAgZ28kcmVhZGRpcixcbiAgICAgICAgICAgIFtwYXRoLCBvcHRpb25zLCBjYl0sXG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBzdGFydFRpbWUgfHwgRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIERhdGUubm93KClcbiAgICAgICAgICBdKVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoZmlsZXMgJiYgZmlsZXMuc29ydClcbiAgICAgICAgICAgIGZpbGVzLnNvcnQoKVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIGNiLmNhbGwodGhpcywgZXJyLCBmaWxlcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLnZlcnNpb24uc3Vic3RyKDAsIDQpID09PSAndjAuOCcpIHtcbiAgICB2YXIgbGVnU3RyZWFtcyA9IGxlZ2FjeShmcylcbiAgICBSZWFkU3RyZWFtID0gbGVnU3RyZWFtcy5SZWFkU3RyZWFtXG4gICAgV3JpdGVTdHJlYW0gPSBsZWdTdHJlYW1zLldyaXRlU3RyZWFtXG4gIH1cblxuICB2YXIgZnMkUmVhZFN0cmVhbSA9IGZzLlJlYWRTdHJlYW1cbiAgaWYgKGZzJFJlYWRTdHJlYW0pIHtcbiAgICBSZWFkU3RyZWFtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZnMkUmVhZFN0cmVhbS5wcm90b3R5cGUpXG4gICAgUmVhZFN0cmVhbS5wcm90b3R5cGUub3BlbiA9IFJlYWRTdHJlYW0kb3BlblxuICB9XG5cbiAgdmFyIGZzJFdyaXRlU3RyZWFtID0gZnMuV3JpdGVTdHJlYW1cbiAgaWYgKGZzJFdyaXRlU3RyZWFtKSB7XG4gICAgV3JpdGVTdHJlYW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShmcyRXcml0ZVN0cmVhbS5wcm90b3R5cGUpXG4gICAgV3JpdGVTdHJlYW0ucHJvdG90eXBlLm9wZW4gPSBXcml0ZVN0cmVhbSRvcGVuXG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnMsICdSZWFkU3RyZWFtJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFJlYWRTdHJlYW1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgUmVhZFN0cmVhbSA9IHZhbFxuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZzLCAnV3JpdGVTdHJlYW0nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gV3JpdGVTdHJlYW1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgV3JpdGVTdHJlYW0gPSB2YWxcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pXG5cbiAgLy8gbGVnYWN5IG5hbWVzXG4gIHZhciBGaWxlUmVhZFN0cmVhbSA9IFJlYWRTdHJlYW1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZzLCAnRmlsZVJlYWRTdHJlYW0nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gRmlsZVJlYWRTdHJlYW1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgRmlsZVJlYWRTdHJlYW0gPSB2YWxcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pXG4gIHZhciBGaWxlV3JpdGVTdHJlYW0gPSBXcml0ZVN0cmVhbVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnMsICdGaWxlV3JpdGVTdHJlYW0nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gRmlsZVdyaXRlU3RyZWFtXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIEZpbGVXcml0ZVN0cmVhbSA9IHZhbFxuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcblxuICBmdW5jdGlvbiBSZWFkU3RyZWFtIChwYXRoLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBSZWFkU3RyZWFtKVxuICAgICAgcmV0dXJuIGZzJFJlYWRTdHJlYW0uYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdGhpc1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBSZWFkU3RyZWFtLmFwcGx5KE9iamVjdC5jcmVhdGUoUmVhZFN0cmVhbS5wcm90b3R5cGUpLCBhcmd1bWVudHMpXG4gIH1cblxuICBmdW5jdGlvbiBSZWFkU3RyZWFtJG9wZW4gKCkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIG9wZW4odGhhdC5wYXRoLCB0aGF0LmZsYWdzLCB0aGF0Lm1vZGUsIGZ1bmN0aW9uIChlcnIsIGZkKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGlmICh0aGF0LmF1dG9DbG9zZSlcbiAgICAgICAgICB0aGF0LmRlc3Ryb3koKVxuXG4gICAgICAgIHRoYXQuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGF0LmZkID0gZmRcbiAgICAgICAgdGhhdC5lbWl0KCdvcGVuJywgZmQpXG4gICAgICAgIHRoYXQucmVhZCgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIFdyaXRlU3RyZWFtIChwYXRoLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBXcml0ZVN0cmVhbSlcbiAgICAgIHJldHVybiBmcyRXcml0ZVN0cmVhbS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB0aGlzXG4gICAgZWxzZVxuICAgICAgcmV0dXJuIFdyaXRlU3RyZWFtLmFwcGx5KE9iamVjdC5jcmVhdGUoV3JpdGVTdHJlYW0ucHJvdG90eXBlKSwgYXJndW1lbnRzKVxuICB9XG5cbiAgZnVuY3Rpb24gV3JpdGVTdHJlYW0kb3BlbiAoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgb3Blbih0aGF0LnBhdGgsIHRoYXQuZmxhZ3MsIHRoYXQubW9kZSwgZnVuY3Rpb24gKGVyciwgZmQpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhhdC5kZXN0cm95KClcbiAgICAgICAgdGhhdC5lbWl0KCdlcnJvcicsIGVycilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoYXQuZmQgPSBmZFxuICAgICAgICB0aGF0LmVtaXQoJ29wZW4nLCBmZClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUmVhZFN0cmVhbSAocGF0aCwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgZnMuUmVhZFN0cmVhbShwYXRoLCBvcHRpb25zKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlV3JpdGVTdHJlYW0gKHBhdGgsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IGZzLldyaXRlU3RyZWFtKHBhdGgsIG9wdGlvbnMpXG4gIH1cblxuICB2YXIgZnMkb3BlbiA9IGZzLm9wZW5cbiAgZnMub3BlbiA9IG9wZW5cbiAgZnVuY3Rpb24gb3BlbiAocGF0aCwgZmxhZ3MsIG1vZGUsIGNiKSB7XG4gICAgaWYgKHR5cGVvZiBtb2RlID09PSAnZnVuY3Rpb24nKVxuICAgICAgY2IgPSBtb2RlLCBtb2RlID0gbnVsbFxuXG4gICAgcmV0dXJuIGdvJG9wZW4ocGF0aCwgZmxhZ3MsIG1vZGUsIGNiKVxuXG4gICAgZnVuY3Rpb24gZ28kb3BlbiAocGF0aCwgZmxhZ3MsIG1vZGUsIGNiLCBzdGFydFRpbWUpIHtcbiAgICAgIHJldHVybiBmcyRvcGVuKHBhdGgsIGZsYWdzLCBtb2RlLCBmdW5jdGlvbiAoZXJyLCBmZCkge1xuICAgICAgICBpZiAoZXJyICYmIChlcnIuY29kZSA9PT0gJ0VNRklMRScgfHwgZXJyLmNvZGUgPT09ICdFTkZJTEUnKSlcbiAgICAgICAgICBlbnF1ZXVlKFtnbyRvcGVuLCBbcGF0aCwgZmxhZ3MsIG1vZGUsIGNiXSwgZXJyLCBzdGFydFRpbWUgfHwgRGF0ZS5ub3coKSwgRGF0ZS5ub3coKV0pXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZzXG59XG5cbmZ1bmN0aW9uIGVucXVldWUgKGVsZW0pIHtcbiAgZGVidWcoJ0VOUVVFVUUnLCBlbGVtWzBdLm5hbWUsIGVsZW1bMV0pXG4gIGZzW2dyYWNlZnVsUXVldWVdLnB1c2goZWxlbSlcbiAgcmV0cnkoKVxufVxuXG4vLyBrZWVwIHRyYWNrIG9mIHRoZSB0aW1lb3V0IGJldHdlZW4gcmV0cnkoKSBjYWxsc1xudmFyIHJldHJ5VGltZXJcblxuLy8gcmVzZXQgdGhlIHN0YXJ0VGltZSBhbmQgbGFzdFRpbWUgdG8gbm93XG4vLyB0aGlzIHJlc2V0cyB0aGUgc3RhcnQgb2YgdGhlIDYwIHNlY29uZCBvdmVyYWxsIHRpbWVvdXQgYXMgd2VsbCBhcyB0aGVcbi8vIGRlbGF5IGJldHdlZW4gYXR0ZW1wdHMgc28gdGhhdCB3ZSdsbCByZXRyeSB0aGVzZSBqb2JzIHNvb25lclxuZnVuY3Rpb24gcmVzZXRRdWV1ZSAoKSB7XG4gIHZhciBub3cgPSBEYXRlLm5vdygpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZnNbZ3JhY2VmdWxRdWV1ZV0ubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBlbnRyaWVzIHRoYXQgYXJlIG9ubHkgYSBsZW5ndGggb2YgMiBhcmUgZnJvbSBhbiBvbGRlciB2ZXJzaW9uLCBkb24ndFxuICAgIC8vIGJvdGhlciBtb2RpZnlpbmcgdGhvc2Ugc2luY2UgdGhleSdsbCBiZSByZXRyaWVkIGFueXdheS5cbiAgICBpZiAoZnNbZ3JhY2VmdWxRdWV1ZV1baV0ubGVuZ3RoID4gMikge1xuICAgICAgZnNbZ3JhY2VmdWxRdWV1ZV1baV1bM10gPSBub3cgLy8gc3RhcnRUaW1lXG4gICAgICBmc1tncmFjZWZ1bFF1ZXVlXVtpXVs0XSA9IG5vdyAvLyBsYXN0VGltZVxuICAgIH1cbiAgfVxuICAvLyBjYWxsIHJldHJ5IHRvIG1ha2Ugc3VyZSB3ZSdyZSBhY3RpdmVseSBwcm9jZXNzaW5nIHRoZSBxdWV1ZVxuICByZXRyeSgpXG59XG5cbmZ1bmN0aW9uIHJldHJ5ICgpIHtcbiAgLy8gY2xlYXIgdGhlIHRpbWVyIGFuZCByZW1vdmUgaXQgdG8gaGVscCBwcmV2ZW50IHVuaW50ZW5kZWQgY29uY3VycmVuY3lcbiAgY2xlYXJUaW1lb3V0KHJldHJ5VGltZXIpXG4gIHJldHJ5VGltZXIgPSB1bmRlZmluZWRcblxuICBpZiAoZnNbZ3JhY2VmdWxRdWV1ZV0ubGVuZ3RoID09PSAwKVxuICAgIHJldHVyblxuXG4gIHZhciBlbGVtID0gZnNbZ3JhY2VmdWxRdWV1ZV0uc2hpZnQoKVxuICB2YXIgZm4gPSBlbGVtWzBdXG4gIHZhciBhcmdzID0gZWxlbVsxXVxuICAvLyB0aGVzZSBpdGVtcyBtYXkgYmUgdW5zZXQgaWYgdGhleSB3ZXJlIGFkZGVkIGJ5IGFuIG9sZGVyIGdyYWNlZnVsLWZzXG4gIHZhciBlcnIgPSBlbGVtWzJdXG4gIHZhciBzdGFydFRpbWUgPSBlbGVtWzNdXG4gIHZhciBsYXN0VGltZSA9IGVsZW1bNF1cblxuICAvLyBpZiB3ZSBkb24ndCBoYXZlIGEgc3RhcnRUaW1lIHdlIGhhdmUgbm8gd2F5IG9mIGtub3dpbmcgaWYgd2UndmUgd2FpdGVkXG4gIC8vIGxvbmcgZW5vdWdoLCBzbyBnbyBhaGVhZCBhbmQgcmV0cnkgdGhpcyBpdGVtIG5vd1xuICBpZiAoc3RhcnRUaW1lID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWJ1ZygnUkVUUlknLCBmbi5uYW1lLCBhcmdzKVxuICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpXG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSA+PSA2MDAwMCkge1xuICAgIC8vIGl0J3MgYmVlbiBtb3JlIHRoYW4gNjAgc2Vjb25kcyB0b3RhbCwgYmFpbCBub3dcbiAgICBkZWJ1ZygnVElNRU9VVCcsIGZuLm5hbWUsIGFyZ3MpXG4gICAgdmFyIGNiID0gYXJncy5wb3AoKVxuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpXG4gICAgICBjYi5jYWxsKG51bGwsIGVycilcbiAgfSBlbHNlIHtcbiAgICAvLyB0aGUgYW1vdW50IG9mIHRpbWUgYmV0d2VlbiB0aGUgbGFzdCBhdHRlbXB0IGFuZCByaWdodCBub3dcbiAgICB2YXIgc2luY2VBdHRlbXB0ID0gRGF0ZS5ub3coKSAtIGxhc3RUaW1lXG4gICAgLy8gdGhlIGFtb3VudCBvZiB0aW1lIGJldHdlZW4gd2hlbiB3ZSBmaXJzdCB0cmllZCwgYW5kIHdoZW4gd2UgbGFzdCB0cmllZFxuICAgIC8vIHJvdW5kZWQgdXAgdG8gYXQgbGVhc3QgMVxuICAgIHZhciBzaW5jZVN0YXJ0ID0gTWF0aC5tYXgobGFzdFRpbWUgLSBzdGFydFRpbWUsIDEpXG4gICAgLy8gYmFja29mZi4gd2FpdCBsb25nZXIgdGhhbiB0aGUgdG90YWwgdGltZSB3ZSd2ZSBiZWVuIHJldHJ5aW5nLCBidXQgb25seVxuICAgIC8vIHVwIHRvIGEgbWF4aW11bSBvZiAxMDBtc1xuICAgIHZhciBkZXNpcmVkRGVsYXkgPSBNYXRoLm1pbihzaW5jZVN0YXJ0ICogMS4yLCAxMDApXG4gICAgLy8gaXQncyBiZWVuIGxvbmcgZW5vdWdoIHNpbmNlIHRoZSBsYXN0IHJldHJ5LCBkbyBpdCBhZ2FpblxuICAgIGlmIChzaW5jZUF0dGVtcHQgPj0gZGVzaXJlZERlbGF5KSB7XG4gICAgICBkZWJ1ZygnUkVUUlknLCBmbi5uYW1lLCBhcmdzKVxuICAgICAgZm4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoW3N0YXJ0VGltZV0pKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB3ZSBjYW4ndCBkbyB0aGlzIGpvYiB5ZXQsIHB1c2ggaXQgdG8gdGhlIGVuZCBvZiB0aGUgcXVldWVcbiAgICAgIC8vIGFuZCBsZXQgdGhlIG5leHQgaXRlcmF0aW9uIGNoZWNrIGFnYWluXG4gICAgICBmc1tncmFjZWZ1bFF1ZXVlXS5wdXNoKGVsZW0pXG4gICAgfVxuICB9XG5cbiAgLy8gc2NoZWR1bGUgb3VyIG5leHQgcnVuIGlmIG9uZSBpc24ndCBhbHJlYWR5IHNjaGVkdWxlZFxuICBpZiAocmV0cnlUaW1lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0cnlUaW1lciA9IHNldFRpbWVvdXQocmV0cnksIDApXG4gIH1cbn1cbiIsICJmdW5jdGlvbiBSZXRyeU9wZXJhdGlvbih0aW1lb3V0cywgb3B0aW9ucykge1xuICAvLyBDb21wYXRpYmlsaXR5IGZvciB0aGUgb2xkICh0aW1lb3V0cywgcmV0cnlGb3JldmVyKSBzaWduYXR1cmVcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zID0geyBmb3JldmVyOiBvcHRpb25zIH07XG4gIH1cblxuICB0aGlzLl9vcmlnaW5hbFRpbWVvdXRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aW1lb3V0cykpO1xuICB0aGlzLl90aW1lb3V0cyA9IHRpbWVvdXRzO1xuICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5fbWF4UmV0cnlUaW1lID0gb3B0aW9ucyAmJiBvcHRpb25zLm1heFJldHJ5VGltZSB8fCBJbmZpbml0eTtcbiAgdGhpcy5fZm4gPSBudWxsO1xuICB0aGlzLl9lcnJvcnMgPSBbXTtcbiAgdGhpcy5fYXR0ZW1wdHMgPSAxO1xuICB0aGlzLl9vcGVyYXRpb25UaW1lb3V0ID0gbnVsbDtcbiAgdGhpcy5fb3BlcmF0aW9uVGltZW91dENiID0gbnVsbDtcbiAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gIHRoaXMuX29wZXJhdGlvblN0YXJ0ID0gbnVsbDtcblxuICBpZiAodGhpcy5fb3B0aW9ucy5mb3JldmVyKSB7XG4gICAgdGhpcy5fY2FjaGVkVGltZW91dHMgPSB0aGlzLl90aW1lb3V0cy5zbGljZSgwKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBSZXRyeU9wZXJhdGlvbjtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2F0dGVtcHRzID0gMTtcbiAgdGhpcy5fdGltZW91dHMgPSB0aGlzLl9vcmlnaW5hbFRpbWVvdXRzO1xufVxuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fdGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgfVxuXG4gIHRoaXMuX3RpbWVvdXRzICAgICAgID0gW107XG4gIHRoaXMuX2NhY2hlZFRpbWVvdXRzID0gbnVsbDtcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5yZXRyeSA9IGZ1bmN0aW9uKGVycikge1xuICBpZiAodGhpcy5fdGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgfVxuXG4gIGlmICghZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBpZiAoZXJyICYmIGN1cnJlbnRUaW1lIC0gdGhpcy5fb3BlcmF0aW9uU3RhcnQgPj0gdGhpcy5fbWF4UmV0cnlUaW1lKSB7XG4gICAgdGhpcy5fZXJyb3JzLnVuc2hpZnQobmV3IEVycm9yKCdSZXRyeU9wZXJhdGlvbiB0aW1lb3V0IG9jY3VycmVkJykpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRoaXMuX2Vycm9ycy5wdXNoKGVycik7XG5cbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0cy5zaGlmdCgpO1xuICBpZiAodGltZW91dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFRpbWVvdXRzKSB7XG4gICAgICAvLyByZXRyeSBmb3JldmVyLCBvbmx5IGtlZXAgbGFzdCBlcnJvclxuICAgICAgdGhpcy5fZXJyb3JzLnNwbGljZSh0aGlzLl9lcnJvcnMubGVuZ3RoIC0gMSwgdGhpcy5fZXJyb3JzLmxlbmd0aCk7XG4gICAgICB0aGlzLl90aW1lb3V0cyA9IHRoaXMuX2NhY2hlZFRpbWVvdXRzLnNsaWNlKDApO1xuICAgICAgdGltZW91dCA9IHRoaXMuX3RpbWVvdXRzLnNoaWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5fYXR0ZW1wdHMrKztcblxuICAgIGlmIChzZWxmLl9vcGVyYXRpb25UaW1lb3V0Q2IpIHtcbiAgICAgIHNlbGYuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLl9vcGVyYXRpb25UaW1lb3V0Q2Ioc2VsZi5fYXR0ZW1wdHMpO1xuICAgICAgfSwgc2VsZi5fb3BlcmF0aW9uVGltZW91dCk7XG5cbiAgICAgIGlmIChzZWxmLl9vcHRpb25zLnVucmVmKSB7XG4gICAgICAgICAgc2VsZi5fdGltZW91dC51bnJlZigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGYuX2ZuKHNlbGYuX2F0dGVtcHRzKTtcbiAgfSwgdGltZW91dCk7XG5cbiAgaWYgKHRoaXMuX29wdGlvbnMudW5yZWYpIHtcbiAgICAgIHRpbWVyLnVucmVmKCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5hdHRlbXB0ID0gZnVuY3Rpb24oZm4sIHRpbWVvdXRPcHMpIHtcbiAgdGhpcy5fZm4gPSBmbjtcblxuICBpZiAodGltZW91dE9wcykge1xuICAgIGlmICh0aW1lb3V0T3BzLnRpbWVvdXQpIHtcbiAgICAgIHRoaXMuX29wZXJhdGlvblRpbWVvdXQgPSB0aW1lb3V0T3BzLnRpbWVvdXQ7XG4gICAgfVxuICAgIGlmICh0aW1lb3V0T3BzLmNiKSB7XG4gICAgICB0aGlzLl9vcGVyYXRpb25UaW1lb3V0Q2IgPSB0aW1lb3V0T3BzLmNiO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKHRoaXMuX29wZXJhdGlvblRpbWVvdXRDYikge1xuICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fb3BlcmF0aW9uVGltZW91dENiKCk7XG4gICAgfSwgc2VsZi5fb3BlcmF0aW9uVGltZW91dCk7XG4gIH1cblxuICB0aGlzLl9vcGVyYXRpb25TdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIHRoaXMuX2ZuKHRoaXMuX2F0dGVtcHRzKTtcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS50cnkgPSBmdW5jdGlvbihmbikge1xuICBjb25zb2xlLmxvZygnVXNpbmcgUmV0cnlPcGVyYXRpb24udHJ5KCkgaXMgZGVwcmVjYXRlZCcpO1xuICB0aGlzLmF0dGVtcHQoZm4pO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oZm4pIHtcbiAgY29uc29sZS5sb2coJ1VzaW5nIFJldHJ5T3BlcmF0aW9uLnN0YXJ0KCkgaXMgZGVwcmVjYXRlZCcpO1xuICB0aGlzLmF0dGVtcHQoZm4pO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnN0YXJ0ID0gUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnRyeTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLmVycm9ycyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fZXJyb3JzO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLmF0dGVtcHRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9hdHRlbXB0cztcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5tYWluRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX2Vycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBjb3VudHMgPSB7fTtcbiAgdmFyIG1haW5FcnJvciA9IG51bGw7XG4gIHZhciBtYWluRXJyb3JDb3VudCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9lcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZXJyb3IgPSB0aGlzLl9lcnJvcnNbaV07XG4gICAgdmFyIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgIHZhciBjb3VudCA9IChjb3VudHNbbWVzc2FnZV0gfHwgMCkgKyAxO1xuXG4gICAgY291bnRzW21lc3NhZ2VdID0gY291bnQ7XG5cbiAgICBpZiAoY291bnQgPj0gbWFpbkVycm9yQ291bnQpIHtcbiAgICAgIG1haW5FcnJvciA9IGVycm9yO1xuICAgICAgbWFpbkVycm9yQ291bnQgPSBjb3VudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFpbkVycm9yO1xufTtcbiIsICJ2YXIgUmV0cnlPcGVyYXRpb24gPSByZXF1aXJlKCcuL3JldHJ5X29wZXJhdGlvbicpO1xuXG5leHBvcnRzLm9wZXJhdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIHRpbWVvdXRzID0gZXhwb3J0cy50aW1lb3V0cyhvcHRpb25zKTtcbiAgcmV0dXJuIG5ldyBSZXRyeU9wZXJhdGlvbih0aW1lb3V0cywge1xuICAgICAgZm9yZXZlcjogb3B0aW9ucyAmJiBvcHRpb25zLmZvcmV2ZXIsXG4gICAgICB1bnJlZjogb3B0aW9ucyAmJiBvcHRpb25zLnVucmVmLFxuICAgICAgbWF4UmV0cnlUaW1lOiBvcHRpb25zICYmIG9wdGlvbnMubWF4UmV0cnlUaW1lXG4gIH0pO1xufTtcblxuZXhwb3J0cy50aW1lb3V0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiBbXS5jb25jYXQob3B0aW9ucyk7XG4gIH1cblxuICB2YXIgb3B0cyA9IHtcbiAgICByZXRyaWVzOiAxMCxcbiAgICBmYWN0b3I6IDIsXG4gICAgbWluVGltZW91dDogMSAqIDEwMDAsXG4gICAgbWF4VGltZW91dDogSW5maW5pdHksXG4gICAgcmFuZG9taXplOiBmYWxzZVxuICB9O1xuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucykge1xuICAgIG9wdHNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgfVxuXG4gIGlmIChvcHRzLm1pblRpbWVvdXQgPiBvcHRzLm1heFRpbWVvdXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21pblRpbWVvdXQgaXMgZ3JlYXRlciB0aGFuIG1heFRpbWVvdXQnKTtcbiAgfVxuXG4gIHZhciB0aW1lb3V0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdHMucmV0cmllczsgaSsrKSB7XG4gICAgdGltZW91dHMucHVzaCh0aGlzLmNyZWF0ZVRpbWVvdXQoaSwgb3B0cykpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5mb3JldmVyICYmICF0aW1lb3V0cy5sZW5ndGgpIHtcbiAgICB0aW1lb3V0cy5wdXNoKHRoaXMuY3JlYXRlVGltZW91dChpLCBvcHRzKSk7XG4gIH1cblxuICAvLyBzb3J0IHRoZSBhcnJheSBudW1lcmljYWxseSBhc2NlbmRpbmdcbiAgdGltZW91dHMuc29ydChmdW5jdGlvbihhLGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIHJldHVybiB0aW1lb3V0cztcbn07XG5cbmV4cG9ydHMuY3JlYXRlVGltZW91dCA9IGZ1bmN0aW9uKGF0dGVtcHQsIG9wdHMpIHtcbiAgdmFyIHJhbmRvbSA9IChvcHRzLnJhbmRvbWl6ZSlcbiAgICA/IChNYXRoLnJhbmRvbSgpICsgMSlcbiAgICA6IDE7XG5cbiAgdmFyIHRpbWVvdXQgPSBNYXRoLnJvdW5kKHJhbmRvbSAqIG9wdHMubWluVGltZW91dCAqIE1hdGgucG93KG9wdHMuZmFjdG9yLCBhdHRlbXB0KSk7XG4gIHRpbWVvdXQgPSBNYXRoLm1pbih0aW1lb3V0LCBvcHRzLm1heFRpbWVvdXQpO1xuXG4gIHJldHVybiB0aW1lb3V0O1xufTtcblxuZXhwb3J0cy53cmFwID0gZnVuY3Rpb24ob2JqLCBvcHRpb25zLCBtZXRob2RzKSB7XG4gIGlmIChvcHRpb25zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBtZXRob2RzID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGlmICghbWV0aG9kcykge1xuICAgIG1ldGhvZHMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1ldGhvZHMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBtZXRob2QgICA9IG1ldGhvZHNbaV07XG4gICAgdmFyIG9yaWdpbmFsID0gb2JqW21ldGhvZF07XG5cbiAgICBvYmpbbWV0aG9kXSA9IGZ1bmN0aW9uIHJldHJ5V3JhcHBlcihvcmlnaW5hbCkge1xuICAgICAgdmFyIG9wICAgICAgID0gZXhwb3J0cy5vcGVyYXRpb24ob3B0aW9ucyk7XG4gICAgICB2YXIgYXJncyAgICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcblxuICAgICAgYXJncy5wdXNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICBpZiAob3AucmV0cnkoZXJyKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgYXJndW1lbnRzWzBdID0gb3AubWFpbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuXG4gICAgICBvcC5hdHRlbXB0KGZ1bmN0aW9uKCkge1xuICAgICAgICBvcmlnaW5hbC5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfS5iaW5kKG9iaiwgb3JpZ2luYWwpO1xuICAgIG9ialttZXRob2RdLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG59O1xuIiwgIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvcmV0cnknKTsiLCAiLy8gVGhpcyBpcyBub3QgdGhlIHNldCBvZiBhbGwgcG9zc2libGUgc2lnbmFscy5cbi8vXG4vLyBJdCBJUywgaG93ZXZlciwgdGhlIHNldCBvZiBhbGwgc2lnbmFscyB0aGF0IHRyaWdnZXJcbi8vIGFuIGV4aXQgb24gZWl0aGVyIExpbnV4IG9yIEJTRCBzeXN0ZW1zLiAgTGludXggaXMgYVxuLy8gc3VwZXJzZXQgb2YgdGhlIHNpZ25hbCBuYW1lcyBzdXBwb3J0ZWQgb24gQlNELCBhbmRcbi8vIHRoZSB1bmtub3duIHNpZ25hbHMganVzdCBmYWlsIHRvIHJlZ2lzdGVyLCBzbyB3ZSBjYW5cbi8vIGNhdGNoIHRoYXQgZWFzaWx5IGVub3VnaC5cbi8vXG4vLyBEb24ndCBib3RoZXIgd2l0aCBTSUdLSUxMLiAgSXQncyB1bmNhdGNoYWJsZSwgd2hpY2hcbi8vIG1lYW5zIHRoYXQgd2UgY2FuJ3QgZmlyZSBhbnkgY2FsbGJhY2tzIGFueXdheS5cbi8vXG4vLyBJZiBhIHVzZXIgZG9lcyBoYXBwZW4gdG8gcmVnaXN0ZXIgYSBoYW5kbGVyIG9uIGEgbm9uLVxuLy8gZmF0YWwgc2lnbmFsIGxpa2UgU0lHV0lOQ0ggb3Igc29tZXRoaW5nLCBhbmQgdGhlblxuLy8gZXhpdCwgaXQnbGwgZW5kIHVwIGZpcmluZyBgcHJvY2Vzcy5lbWl0KCdleGl0JylgLCBzb1xuLy8gdGhlIGhhbmRsZXIgd2lsbCBiZSBmaXJlZCBhbnl3YXkuXG4vL1xuLy8gU0lHQlVTLCBTSUdGUEUsIFNJR1NFR1YgYW5kIFNJR0lMTCwgd2hlbiBub3QgcmFpc2VkXG4vLyBhcnRpZmljaWFsbHksIGluaGVyZW50bHkgbGVhdmUgdGhlIHByb2Nlc3MgaW4gYVxuLy8gc3RhdGUgZnJvbSB3aGljaCBpdCBpcyBub3Qgc2FmZSB0byB0cnkgYW5kIGVudGVyIEpTXG4vLyBsaXN0ZW5lcnMuXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ1NJR0FCUlQnLFxuICAnU0lHQUxSTScsXG4gICdTSUdIVVAnLFxuICAnU0lHSU5UJyxcbiAgJ1NJR1RFUk0nXG5dXG5cbmlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnd2luMzInKSB7XG4gIG1vZHVsZS5leHBvcnRzLnB1c2goXG4gICAgJ1NJR1ZUQUxSTScsXG4gICAgJ1NJR1hDUFUnLFxuICAgICdTSUdYRlNaJyxcbiAgICAnU0lHVVNSMicsXG4gICAgJ1NJR1RSQVAnLFxuICAgICdTSUdTWVMnLFxuICAgICdTSUdRVUlUJyxcbiAgICAnU0lHSU9UJ1xuICAgIC8vIHNob3VsZCBkZXRlY3QgcHJvZmlsZXIgYW5kIGVuYWJsZS9kaXNhYmxlIGFjY29yZGluZ2x5LlxuICAgIC8vIHNlZSAjMjFcbiAgICAvLyAnU0lHUFJPRidcbiAgKVxufVxuXG5pZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2xpbnV4Jykge1xuICBtb2R1bGUuZXhwb3J0cy5wdXNoKFxuICAgICdTSUdJTycsXG4gICAgJ1NJR1BPTEwnLFxuICAgICdTSUdQV1InLFxuICAgICdTSUdTVEtGTFQnLFxuICAgICdTSUdVTlVTRUQnXG4gIClcbn1cbiIsICIvLyBOb3RlOiBzaW5jZSBueWMgdXNlcyB0aGlzIG1vZHVsZSB0byBvdXRwdXQgY292ZXJhZ2UsIGFueSBsaW5lc1xuLy8gdGhhdCBhcmUgaW4gdGhlIGRpcmVjdCBzeW5jIGZsb3cgb2YgbnljJ3Mgb3V0cHV0Q292ZXJhZ2UgYXJlXG4vLyBpZ25vcmVkLCBzaW5jZSB3ZSBjYW4gbmV2ZXIgZ2V0IGNvdmVyYWdlIGZvciB0aGVtLlxuLy8gZ3JhYiBhIHJlZmVyZW5jZSB0byBub2RlJ3MgcmVhbCBwcm9jZXNzIG9iamVjdCByaWdodCBhd2F5XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzXG5cbmNvbnN0IHByb2Nlc3NPayA9IGZ1bmN0aW9uIChwcm9jZXNzKSB7XG4gIHJldHVybiBwcm9jZXNzICYmXG4gICAgdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcHJvY2Vzcy5lbWl0ID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHByb2Nlc3MucmVhbGx5RXhpdCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm9jZXNzLmxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm9jZXNzLmtpbGwgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcHJvY2Vzcy5waWQgPT09ICdudW1iZXInICYmXG4gICAgdHlwZW9mIHByb2Nlc3Mub24gPT09ICdmdW5jdGlvbidcbn1cblxuLy8gc29tZSBraW5kIG9mIG5vbi1ub2RlIGVudmlyb25tZW50LCBqdXN0IG5vLW9wXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICghcHJvY2Vzc09rKHByb2Nlc3MpKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7fVxuICB9XG59IGVsc2Uge1xuICB2YXIgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcbiAgdmFyIHNpZ25hbHMgPSByZXF1aXJlKCcuL3NpZ25hbHMuanMnKVxuICB2YXIgaXNXaW4gPSAvXndpbi9pLnRlc3QocHJvY2Vzcy5wbGF0Zm9ybSlcblxuICB2YXIgRUUgPSByZXF1aXJlKCdldmVudHMnKVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBFRSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIEVFID0gRUUuRXZlbnRFbWl0dGVyXG4gIH1cblxuICB2YXIgZW1pdHRlclxuICBpZiAocHJvY2Vzcy5fX3NpZ25hbF9leGl0X2VtaXR0ZXJfXykge1xuICAgIGVtaXR0ZXIgPSBwcm9jZXNzLl9fc2lnbmFsX2V4aXRfZW1pdHRlcl9fXG4gIH0gZWxzZSB7XG4gICAgZW1pdHRlciA9IHByb2Nlc3MuX19zaWduYWxfZXhpdF9lbWl0dGVyX18gPSBuZXcgRUUoKVxuICAgIGVtaXR0ZXIuY291bnQgPSAwXG4gICAgZW1pdHRlci5lbWl0dGVkID0ge31cbiAgfVxuXG4gIC8vIEJlY2F1c2UgdGhpcyBlbWl0dGVyIGlzIGEgZ2xvYmFsLCB3ZSBoYXZlIHRvIGNoZWNrIHRvIHNlZSBpZiBhXG4gIC8vIHByZXZpb3VzIHZlcnNpb24gb2YgdGhpcyBsaWJyYXJ5IGZhaWxlZCB0byBlbmFibGUgaW5maW5pdGUgbGlzdGVuZXJzLlxuICAvLyBJIGtub3cgd2hhdCB5b3UncmUgYWJvdXQgdG8gc2F5LiAgQnV0IGxpdGVyYWxseSBldmVyeXRoaW5nIGFib3V0XG4gIC8vIHNpZ25hbC1leGl0IGlzIGEgY29tcHJvbWlzZSB3aXRoIGV2aWwuICBHZXQgdXNlZCB0byBpdC5cbiAgaWYgKCFlbWl0dGVyLmluZmluaXRlKSB7XG4gICAgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoSW5maW5pdHkpXG4gICAgZW1pdHRlci5pbmZpbml0ZSA9IHRydWVcbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNiLCBvcHRzKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFwcm9jZXNzT2soZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge31cbiAgICB9XG4gICAgYXNzZXJ0LmVxdWFsKHR5cGVvZiBjYiwgJ2Z1bmN0aW9uJywgJ2EgY2FsbGJhY2sgbXVzdCBiZSBwcm92aWRlZCBmb3IgZXhpdCBoYW5kbGVyJylcblxuICAgIGlmIChsb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgICBsb2FkKClcbiAgICB9XG5cbiAgICB2YXIgZXYgPSAnZXhpdCdcbiAgICBpZiAob3B0cyAmJiBvcHRzLmFsd2F5c0xhc3QpIHtcbiAgICAgIGV2ID0gJ2FmdGVyZXhpdCdcbiAgICB9XG5cbiAgICB2YXIgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihldiwgY2IpXG4gICAgICBpZiAoZW1pdHRlci5saXN0ZW5lcnMoJ2V4aXQnKS5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICBlbWl0dGVyLmxpc3RlbmVycygnYWZ0ZXJleGl0JykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHVubG9hZCgpXG4gICAgICB9XG4gICAgfVxuICAgIGVtaXR0ZXIub24oZXYsIGNiKVxuXG4gICAgcmV0dXJuIHJlbW92ZVxuICB9XG5cbiAgdmFyIHVubG9hZCA9IGZ1bmN0aW9uIHVubG9hZCAoKSB7XG4gICAgaWYgKCFsb2FkZWQgfHwgIXByb2Nlc3NPayhnbG9iYWwucHJvY2VzcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsb2FkZWQgPSBmYWxzZVxuXG4gICAgc2lnbmFscy5mb3JFYWNoKGZ1bmN0aW9uIChzaWcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIoc2lnLCBzaWdMaXN0ZW5lcnNbc2lnXSlcbiAgICAgIH0gY2F0Y2ggKGVyKSB7fVxuICAgIH0pXG4gICAgcHJvY2Vzcy5lbWl0ID0gb3JpZ2luYWxQcm9jZXNzRW1pdFxuICAgIHByb2Nlc3MucmVhbGx5RXhpdCA9IG9yaWdpbmFsUHJvY2Vzc1JlYWxseUV4aXRcbiAgICBlbWl0dGVyLmNvdW50IC09IDFcbiAgfVxuICBtb2R1bGUuZXhwb3J0cy51bmxvYWQgPSB1bmxvYWRcblxuICB2YXIgZW1pdCA9IGZ1bmN0aW9uIGVtaXQgKGV2ZW50LCBjb2RlLCBzaWduYWwpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoZW1pdHRlci5lbWl0dGVkW2V2ZW50XSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVtaXR0ZXIuZW1pdHRlZFtldmVudF0gPSB0cnVlXG4gICAgZW1pdHRlci5lbWl0KGV2ZW50LCBjb2RlLCBzaWduYWwpXG4gIH1cblxuICAvLyB7IDxzaWduYWw+OiA8bGlzdGVuZXIgZm4+LCAuLi4gfVxuICB2YXIgc2lnTGlzdGVuZXJzID0ge31cbiAgc2lnbmFscy5mb3JFYWNoKGZ1bmN0aW9uIChzaWcpIHtcbiAgICBzaWdMaXN0ZW5lcnNbc2lnXSA9IGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFwcm9jZXNzT2soZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIG90aGVyIGxpc3RlbmVycywgYW4gZXhpdCBpcyBjb21pbmchXG4gICAgICAvLyBTaW1wbGVzdCB3YXk6IHJlbW92ZSB1cyBhbmQgdGhlbiByZS1zZW5kIHRoZSBzaWduYWwuXG4gICAgICAvLyBXZSBrbm93IHRoYXQgdGhpcyB3aWxsIGtpbGwgdGhlIHByb2Nlc3MsIHNvIHdlIGNhblxuICAgICAgLy8gc2FmZWx5IGVtaXQgbm93LlxuICAgICAgdmFyIGxpc3RlbmVycyA9IHByb2Nlc3MubGlzdGVuZXJzKHNpZylcbiAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSBlbWl0dGVyLmNvdW50KSB7XG4gICAgICAgIHVubG9hZCgpXG4gICAgICAgIGVtaXQoJ2V4aXQnLCBudWxsLCBzaWcpXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGVtaXQoJ2FmdGVyZXhpdCcsIG51bGwsIHNpZylcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgaWYgKGlzV2luICYmIHNpZyA9PT0gJ1NJR0hVUCcpIHtcbiAgICAgICAgICAvLyBcIlNJR0hVUFwiIHRocm93cyBhbiBgRU5PU1lTYCBlcnJvciBvbiBXaW5kb3dzLFxuICAgICAgICAgIC8vIHNvIHVzZSBhIHN1cHBvcnRlZCBzaWduYWwgaW5zdGVhZFxuICAgICAgICAgIHNpZyA9ICdTSUdJTlQnXG4gICAgICAgIH1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgcHJvY2Vzcy5raWxsKHByb2Nlc3MucGlkLCBzaWcpXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIG1vZHVsZS5leHBvcnRzLnNpZ25hbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNpZ25hbHNcbiAgfVxuXG4gIHZhciBsb2FkZWQgPSBmYWxzZVxuXG4gIHZhciBsb2FkID0gZnVuY3Rpb24gbG9hZCAoKSB7XG4gICAgaWYgKGxvYWRlZCB8fCAhcHJvY2Vzc09rKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxvYWRlZCA9IHRydWVcblxuICAgIC8vIFRoaXMgaXMgdGhlIG51bWJlciBvZiBvblNpZ25hbEV4aXQncyB0aGF0IGFyZSBpbiBwbGF5LlxuICAgIC8vIEl0J3MgaW1wb3J0YW50IHNvIHRoYXQgd2UgY2FuIGNvdW50IHRoZSBjb3JyZWN0IG51bWJlciBvZlxuICAgIC8vIGxpc3RlbmVycyBvbiBzaWduYWxzLCBhbmQgZG9uJ3Qgd2FpdCBmb3IgdGhlIG90aGVyIG9uZSB0b1xuICAgIC8vIGhhbmRsZSBpdCBpbnN0ZWFkIG9mIHVzLlxuICAgIGVtaXR0ZXIuY291bnQgKz0gMVxuXG4gICAgc2lnbmFscyA9IHNpZ25hbHMuZmlsdGVyKGZ1bmN0aW9uIChzaWcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByb2Nlc3Mub24oc2lnLCBzaWdMaXN0ZW5lcnNbc2lnXSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBwcm9jZXNzLmVtaXQgPSBwcm9jZXNzRW1pdFxuICAgIHByb2Nlc3MucmVhbGx5RXhpdCA9IHByb2Nlc3NSZWFsbHlFeGl0XG4gIH1cbiAgbW9kdWxlLmV4cG9ydHMubG9hZCA9IGxvYWRcblxuICB2YXIgb3JpZ2luYWxQcm9jZXNzUmVhbGx5RXhpdCA9IHByb2Nlc3MucmVhbGx5RXhpdFxuICB2YXIgcHJvY2Vzc1JlYWxseUV4aXQgPSBmdW5jdGlvbiBwcm9jZXNzUmVhbGx5RXhpdCAoY29kZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghcHJvY2Vzc09rKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHByb2Nlc3MuZXhpdENvZGUgPSBjb2RlIHx8IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIDBcbiAgICBlbWl0KCdleGl0JywgcHJvY2Vzcy5leGl0Q29kZSwgbnVsbClcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGVtaXQoJ2FmdGVyZXhpdCcsIHByb2Nlc3MuZXhpdENvZGUsIG51bGwpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBvcmlnaW5hbFByb2Nlc3NSZWFsbHlFeGl0LmNhbGwocHJvY2VzcywgcHJvY2Vzcy5leGl0Q29kZSlcbiAgfVxuXG4gIHZhciBvcmlnaW5hbFByb2Nlc3NFbWl0ID0gcHJvY2Vzcy5lbWl0XG4gIHZhciBwcm9jZXNzRW1pdCA9IGZ1bmN0aW9uIHByb2Nlc3NFbWl0IChldiwgYXJnKSB7XG4gICAgaWYgKGV2ID09PSAnZXhpdCcgJiYgcHJvY2Vzc09rKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gYXJnXG4gICAgICB9XG4gICAgICB2YXIgcmV0ID0gb3JpZ2luYWxQcm9jZXNzRW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgZW1pdCgnZXhpdCcsIHByb2Nlc3MuZXhpdENvZGUsIG51bGwpXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgZW1pdCgnYWZ0ZXJleGl0JywgcHJvY2Vzcy5leGl0Q29kZSwgbnVsbClcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gcmV0XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbFByb2Nlc3NFbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNhY2hlU3ltYm9sID0gU3ltYm9sKCk7XG5cbmZ1bmN0aW9uIHByb2JlKGZpbGUsIGZzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGNhY2hlZFByZWNpc2lvbiA9IGZzW2NhY2hlU3ltYm9sXTtcblxuICAgIGlmIChjYWNoZWRQcmVjaXNpb24pIHtcbiAgICAgICAgcmV0dXJuIGZzLnN0YXQoZmlsZSwgKGVyciwgc3RhdCkgPT4ge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHN0YXQubXRpbWUsIGNhY2hlZFByZWNpc2lvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNldCBtdGltZSBieSBjZWlsaW5nIERhdGUubm93KCkgdG8gc2Vjb25kcyArIDVtcyBzbyB0aGF0IGl0J3MgXCJub3Qgb24gdGhlIHNlY29uZFwiXG4gICAgY29uc3QgbXRpbWUgPSBuZXcgRGF0ZSgoTWF0aC5jZWlsKERhdGUubm93KCkgLyAxMDAwKSAqIDEwMDApICsgNSk7XG5cbiAgICBmcy51dGltZXMoZmlsZSwgbXRpbWUsIG10aW1lLCAoZXJyKSA9PiB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZzLnN0YXQoZmlsZSwgKGVyciwgc3RhdCkgPT4ge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByZWNpc2lvbiA9IHN0YXQubXRpbWUuZ2V0VGltZSgpICUgMTAwMCA9PT0gMCA/ICdzJyA6ICdtcyc7XG5cbiAgICAgICAgICAgIC8vIENhY2hlIHRoZSBwcmVjaXNpb24gaW4gYSBub24tZW51bWVyYWJsZSB3YXlcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmcywgY2FjaGVTeW1ib2wsIHsgdmFsdWU6IHByZWNpc2lvbiB9KTtcblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgc3RhdC5tdGltZSwgcHJlY2lzaW9uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE10aW1lKHByZWNpc2lvbikge1xuICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgaWYgKHByZWNpc2lvbiA9PT0gJ3MnKSB7XG4gICAgICAgIG5vdyA9IE1hdGguY2VpbChub3cgLyAxMDAwKSAqIDEwMDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKG5vdyk7XG59XG5cbm1vZHVsZS5leHBvcnRzLnByb2JlID0gcHJvYmU7XG5tb2R1bGUuZXhwb3J0cy5nZXRNdGltZSA9IGdldE10aW1lO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKTtcbmNvbnN0IHJldHJ5ID0gcmVxdWlyZSgncmV0cnknKTtcbmNvbnN0IG9uRXhpdCA9IHJlcXVpcmUoJ3NpZ25hbC1leGl0Jyk7XG5jb25zdCBtdGltZVByZWNpc2lvbiA9IHJlcXVpcmUoJy4vbXRpbWUtcHJlY2lzaW9uJyk7XG5cbmNvbnN0IGxvY2tzID0ge307XG5cbmZ1bmN0aW9uIGdldExvY2tGaWxlKGZpbGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NrZmlsZVBhdGggfHwgYCR7ZmlsZX0ubG9ja2A7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVDYW5vbmljYWxQYXRoKGZpbGUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFvcHRpb25zLnJlYWxwYXRoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBwYXRoLnJlc29sdmUoZmlsZSkpO1xuICAgIH1cblxuICAgIC8vIFVzZSByZWFscGF0aCB0byByZXNvbHZlIHN5bWxpbmtzXG4gICAgLy8gSXQgYWxzbyByZXNvbHZlcyByZWxhdGl2ZSBwYXRoc1xuICAgIG9wdGlvbnMuZnMucmVhbHBhdGgoZmlsZSwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBhY3F1aXJlTG9jayhmaWxlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGxvY2tmaWxlUGF0aCA9IGdldExvY2tGaWxlKGZpbGUsIG9wdGlvbnMpO1xuXG4gICAgLy8gVXNlIG1rZGlyIHRvIGNyZWF0ZSB0aGUgbG9ja2ZpbGUgKGF0b21pYyBvcGVyYXRpb24pXG4gICAgb3B0aW9ucy5mcy5ta2Rpcihsb2NrZmlsZVBhdGgsIChlcnIpID0+IHtcbiAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHdlIGFjcXVpcmVkIHRoZSBsb2NrIVxuICAgICAgICAgICAgLy8gUHJvYmUgdGhlIG10aW1lIHByZWNpc2lvblxuICAgICAgICAgICAgcmV0dXJuIG10aW1lUHJlY2lzaW9uLnByb2JlKGxvY2tmaWxlUGF0aCwgb3B0aW9ucy5mcywgKGVyciwgbXRpbWUsIG10aW1lUHJlY2lzaW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgaXQgZmFpbGVkLCB0cnkgdG8gcmVtb3ZlIHRoZSBsb2NrLi5cbiAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZnMucm1kaXIobG9ja2ZpbGVQYXRoLCAoKSA9PiB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbXRpbWUsIG10aW1lUHJlY2lzaW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgZXJyb3IgaXMgbm90IEVFWElTVCB0aGVuIHNvbWUgb3RoZXIgZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9ja2luZ1xuICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdFRVhJU1QnKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgY2hlY2sgaWYgbG9jayBpcyBzdGFsZSBieSBhbmFseXppbmcgdGhlIGZpbGUgbXRpbWVcbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhbGUgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdMb2NrIGZpbGUgaXMgYWxyZWFkeSBiZWluZyBoZWxkJyksIHsgY29kZTogJ0VMT0NLRUQnLCBmaWxlIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuZnMuc3RhdChsb2NrZmlsZVBhdGgsIChlcnIsIHN0YXQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXRyeSBpZiB0aGUgbG9ja2ZpbGUgaGFzIGJlZW4gcmVtb3ZlZCAobWVhbndoaWxlKVxuICAgICAgICAgICAgICAgIC8vIFNraXAgc3RhbGUgY2hlY2sgdG8gYXZvaWQgcmVjdXJzaXZlbmVzc1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjcXVpcmVMb2NrKGZpbGUsIHsgLi4ub3B0aW9ucywgc3RhbGU6IDAgfSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzTG9ja1N0YWxlKHN0YXQsIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdMb2NrIGZpbGUgaXMgYWxyZWFkeSBiZWluZyBoZWxkJyksIHsgY29kZTogJ0VMT0NLRUQnLCBmaWxlIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXQncyBzdGFsZSwgcmVtb3ZlIGl0IGFuZCB0cnkgYWdhaW4hXG4gICAgICAgICAgICAvLyBTa2lwIHN0YWxlIGNoZWNrIHRvIGF2b2lkIHJlY3Vyc2l2ZW5lc3NcbiAgICAgICAgICAgIHJlbW92ZUxvY2soZmlsZSwgb3B0aW9ucywgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYWNxdWlyZUxvY2soZmlsZSwgeyAuLi5vcHRpb25zLCBzdGFsZTogMCB9LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzTG9ja1N0YWxlKHN0YXQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc3RhdC5tdGltZS5nZXRUaW1lKCkgPCBEYXRlLm5vdygpIC0gb3B0aW9ucy5zdGFsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTG9jayhmaWxlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8vIFJlbW92ZSBsb2NrZmlsZSwgaWdub3JpbmcgRU5PRU5UIGVycm9yc1xuICAgIG9wdGlvbnMuZnMucm1kaXIoZ2V0TG9ja0ZpbGUoZmlsZSwgb3B0aW9ucyksIChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVyciAmJiBlcnIuY29kZSAhPT0gJ0VOT0VOVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTG9jayhmaWxlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgbG9jayA9IGxvY2tzW2ZpbGVdO1xuXG4gICAgLy8gSnVzdCBmb3Igc2FmZXR5LCBzaG91bGQgbmV2ZXIgaGFwcGVuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGxvY2sudXBkYXRlVGltZW91dCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbG9jay51cGRhdGVEZWxheSA9IGxvY2sudXBkYXRlRGVsYXkgfHwgb3B0aW9ucy51cGRhdGU7XG4gICAgbG9jay51cGRhdGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxvY2sudXBkYXRlVGltZW91dCA9IG51bGw7XG5cbiAgICAgICAgLy8gU3RhdCB0aGUgZmlsZSB0byBjaGVjayBpZiBtdGltZSBpcyBzdGlsbCBvdXJzXG4gICAgICAgIC8vIElmIGl0IGlzLCB3ZSBjYW4gc3RpbGwgcmVjb3ZlciBmcm9tIGEgc3lzdGVtIHNsZWVwIG9yIGEgYnVzeSBldmVudCBsb29wXG4gICAgICAgIG9wdGlvbnMuZnMuc3RhdChsb2NrLmxvY2tmaWxlUGF0aCwgKGVyciwgc3RhdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNPdmVyVGhyZXNob2xkID0gbG9jay5sYXN0VXBkYXRlICsgb3B0aW9ucy5zdGFsZSA8IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGZhaWxlZCB0byB1cGRhdGUgdGhlIGxvY2tmaWxlLCBrZWVwIHRyeWluZyB1bmxlc3NcbiAgICAgICAgICAgIC8vIHRoZSBsb2NrZmlsZSB3YXMgZGVsZXRlZCBvciB3ZSBhcmUgb3ZlciB0aGUgdGhyZXNob2xkXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRU5PRU5UJyB8fCBpc092ZXJUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldExvY2tBc0NvbXByb21pc2VkKGZpbGUsIGxvY2ssIE9iamVjdC5hc3NpZ24oZXJyLCB7IGNvZGU6ICdFQ09NUFJPTUlTRUQnIH0pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsb2NrLnVwZGF0ZURlbGF5ID0gMTAwMDtcblxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVMb2NrKGZpbGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpc010aW1lT3VycyA9IGxvY2subXRpbWUuZ2V0VGltZSgpID09PSBzdGF0Lm10aW1lLmdldFRpbWUoKTtcblxuICAgICAgICAgICAgaWYgKCFpc010aW1lT3Vycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRMb2NrQXNDb21wcm9taXNlZChcbiAgICAgICAgICAgICAgICAgICAgZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jayxcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcignVW5hYmxlIHRvIHVwZGF0ZSBsb2NrIHdpdGhpbiB0aGUgc3RhbGUgdGhyZXNob2xkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNvZGU6ICdFQ09NUFJPTUlTRUQnIH1cbiAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG10aW1lID0gbXRpbWVQcmVjaXNpb24uZ2V0TXRpbWUobG9jay5tdGltZVByZWNpc2lvbik7XG5cbiAgICAgICAgICAgIG9wdGlvbnMuZnMudXRpbWVzKGxvY2subG9ja2ZpbGVQYXRoLCBtdGltZSwgbXRpbWUsIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc092ZXJUaHJlc2hvbGQgPSBsb2NrLmxhc3RVcGRhdGUgKyBvcHRpb25zLnN0YWxlIDwgRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSBpZiB0aGUgbG9jayB3YXMgcmVsZWFzZWRcbiAgICAgICAgICAgICAgICBpZiAobG9jay5yZWxlYXNlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgaXQgZmFpbGVkIHRvIHVwZGF0ZSB0aGUgbG9ja2ZpbGUsIGtlZXAgdHJ5aW5nIHVubGVzc1xuICAgICAgICAgICAgICAgIC8vIHRoZSBsb2NrZmlsZSB3YXMgZGVsZXRlZCBvciB3ZSBhcmUgb3ZlciB0aGUgdGhyZXNob2xkXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdFTk9FTlQnIHx8IGlzT3ZlclRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldExvY2tBc0NvbXByb21pc2VkKGZpbGUsIGxvY2ssIE9iamVjdC5hc3NpZ24oZXJyLCB7IGNvZGU6ICdFQ09NUFJPTUlTRUQnIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxvY2sudXBkYXRlRGVsYXkgPSAxMDAwO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVMb2NrKGZpbGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFsbCBvaywga2VlcCB1cGRhdGluZy4uXG4gICAgICAgICAgICAgICAgbG9jay5tdGltZSA9IG10aW1lO1xuICAgICAgICAgICAgICAgIGxvY2subGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgbG9jay51cGRhdGVEZWxheSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdXBkYXRlTG9jayhmaWxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LCBsb2NrLnVwZGF0ZURlbGF5KTtcblxuICAgIC8vIFVucmVmIHRoZSB0aW1lciBzbyB0aGF0IHRoZSBub2RlanMgcHJvY2VzcyBjYW4gZXhpdCBmcmVlbHlcbiAgICAvLyBUaGlzIGlzIHNhZmUgYmVjYXVzZSBhbGwgYWNxdWlyZWQgbG9ja3Mgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlbGVhc2VkXG4gICAgLy8gb24gcHJvY2VzcyBleGl0XG5cbiAgICAvLyBXZSBmaXJzdCBjaGVjayB0aGF0IGBsb2NrLnVwZGF0ZVRpbWVvdXQudW5yZWZgIGV4aXN0cyBiZWNhdXNlIHNvbWUgdXNlcnNcbiAgICAvLyBtYXkgYmUgdXNpbmcgdGhpcyBtb2R1bGUgb3V0c2lkZSBvZiBOb2RlSlMgKGUuZy4sIGluIGFuIGVsZWN0cm9uIGFwcCksXG4gICAgLy8gYW5kIGluIHRob3NlIGNhc2VzIGBzZXRUaW1lb3V0YCByZXR1cm4gYW4gaW50ZWdlci5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChsb2NrLnVwZGF0ZVRpbWVvdXQudW5yZWYpIHtcbiAgICAgICAgbG9jay51cGRhdGVUaW1lb3V0LnVucmVmKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRMb2NrQXNDb21wcm9taXNlZChmaWxlLCBsb2NrLCBlcnIpIHtcbiAgICAvLyBTaWduYWwgdGhlIGxvY2sgaGFzIGJlZW4gcmVsZWFzZWRcbiAgICBsb2NrLnJlbGVhc2VkID0gdHJ1ZTtcblxuICAgIC8vIENhbmNlbCBsb2NrIG10aW1lIHVwZGF0ZVxuICAgIC8vIEp1c3QgZm9yIHNhZmV0eSwgYXQgdGhpcyBwb2ludCB1cGRhdGVUaW1lb3V0IHNob3VsZCBiZSBudWxsXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGxvY2sudXBkYXRlVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQobG9jay51cGRhdGVUaW1lb3V0KTtcbiAgICB9XG5cbiAgICBpZiAobG9ja3NbZmlsZV0gPT09IGxvY2spIHtcbiAgICAgICAgZGVsZXRlIGxvY2tzW2ZpbGVdO1xuICAgIH1cblxuICAgIGxvY2sub3B0aW9ucy5vbkNvbXByb21pc2VkKGVycik7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbG9jayhmaWxlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgc3RhbGU6IDEwMDAwLFxuICAgICAgICB1cGRhdGU6IG51bGwsXG4gICAgICAgIHJlYWxwYXRoOiB0cnVlLFxuICAgICAgICByZXRyaWVzOiAwLFxuICAgICAgICBmcyxcbiAgICAgICAgb25Db21wcm9taXNlZDogKGVycikgPT4geyB0aHJvdyBlcnI7IH0sXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcblxuICAgIG9wdGlvbnMucmV0cmllcyA9IG9wdGlvbnMucmV0cmllcyB8fCAwO1xuICAgIG9wdGlvbnMucmV0cmllcyA9IHR5cGVvZiBvcHRpb25zLnJldHJpZXMgPT09ICdudW1iZXInID8geyByZXRyaWVzOiBvcHRpb25zLnJldHJpZXMgfSA6IG9wdGlvbnMucmV0cmllcztcbiAgICBvcHRpb25zLnN0YWxlID0gTWF0aC5tYXgob3B0aW9ucy5zdGFsZSB8fCAwLCAyMDAwKTtcbiAgICBvcHRpb25zLnVwZGF0ZSA9IG9wdGlvbnMudXBkYXRlID09IG51bGwgPyBvcHRpb25zLnN0YWxlIC8gMiA6IG9wdGlvbnMudXBkYXRlIHx8IDA7XG4gICAgb3B0aW9ucy51cGRhdGUgPSBNYXRoLm1heChNYXRoLm1pbihvcHRpb25zLnVwZGF0ZSwgb3B0aW9ucy5zdGFsZSAvIDIpLCAxMDAwKTtcblxuICAgIC8vIFJlc29sdmUgdG8gYSBjYW5vbmljYWwgZmlsZSBwYXRoXG4gICAgcmVzb2x2ZUNhbm9uaWNhbFBhdGgoZmlsZSwgb3B0aW9ucywgKGVyciwgZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gYWNxdWlyZSB0aGUgbG9ja1xuICAgICAgICBjb25zdCBvcGVyYXRpb24gPSByZXRyeS5vcGVyYXRpb24ob3B0aW9ucy5yZXRyaWVzKTtcblxuICAgICAgICBvcGVyYXRpb24uYXR0ZW1wdCgoKSA9PiB7XG4gICAgICAgICAgICBhY3F1aXJlTG9jayhmaWxlLCBvcHRpb25zLCAoZXJyLCBtdGltZSwgbXRpbWVQcmVjaXNpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0aW9uLnJldHJ5KGVycikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG9wZXJhdGlvbi5tYWluRXJyb3IoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2Ugbm93IG93biB0aGUgbG9ja1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2sgPSBsb2Nrc1tmaWxlXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9ja2ZpbGVQYXRoOiBnZXRMb2NrRmlsZShmaWxlLCBvcHRpb25zKSxcbiAgICAgICAgICAgICAgICAgICAgbXRpbWUsXG4gICAgICAgICAgICAgICAgICAgIG10aW1lUHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBXZSBtdXN0IGtlZXAgdGhlIGxvY2sgZnJlc2ggdG8gYXZvaWQgc3RhbGVuZXNzXG4gICAgICAgICAgICAgICAgdXBkYXRlTG9jayhmaWxlLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIChyZWxlYXNlZENhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NrLnJlbGVhc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVsZWFzZWRDYWxsYmFjayAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGVhc2VkQ2FsbGJhY2soT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ0xvY2sgaXMgYWxyZWFkeSByZWxlYXNlZCcpLCB7IGNvZGU6ICdFUkVMRUFTRUQnIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdCBuZWNlc3NhcnkgdG8gdXNlIHJlYWxwYXRoIHR3aWNlIHdoZW4gdW5sb2NraW5nXG4gICAgICAgICAgICAgICAgICAgIHVubG9jayhmaWxlLCB7IC4uLm9wdGlvbnMsIHJlYWxwYXRoOiBmYWxzZSB9LCByZWxlYXNlZENhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdW5sb2NrKGZpbGUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgZnMsXG4gICAgICAgIHJlYWxwYXRoOiB0cnVlLFxuICAgICAgICAuLi5vcHRpb25zLFxuICAgIH07XG5cbiAgICAvLyBSZXNvbHZlIHRvIGEgY2Fub25pY2FsIGZpbGUgcGF0aFxuICAgIHJlc29sdmVDYW5vbmljYWxQYXRoKGZpbGUsIG9wdGlvbnMsIChlcnIsIGZpbGUpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTa2lwIGlmIHRoZSBsb2NrIGlzIG5vdCBhY3F1aXJlZFxuICAgICAgICBjb25zdCBsb2NrID0gbG9ja3NbZmlsZV07XG5cbiAgICAgICAgaWYgKCFsb2NrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ0xvY2sgaXMgbm90IGFjcXVpcmVkL293bmVkIGJ5IHlvdScpLCB7IGNvZGU6ICdFTk9UQUNRVUlSRUQnIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2sudXBkYXRlVGltZW91dCAmJiBjbGVhclRpbWVvdXQobG9jay51cGRhdGVUaW1lb3V0KTsgLy8gQ2FuY2VsIGxvY2sgbXRpbWUgdXBkYXRlXG4gICAgICAgIGxvY2sucmVsZWFzZWQgPSB0cnVlOyAvLyBTaWduYWwgdGhlIGxvY2sgaGFzIGJlZW4gcmVsZWFzZWRcbiAgICAgICAgZGVsZXRlIGxvY2tzW2ZpbGVdOyAvLyBEZWxldGUgZnJvbSBsb2Nrc1xuXG4gICAgICAgIHJlbW92ZUxvY2soZmlsZSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVjayhmaWxlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIHN0YWxlOiAxMDAwMCxcbiAgICAgICAgcmVhbHBhdGg6IHRydWUsXG4gICAgICAgIGZzLFxuICAgICAgICAuLi5vcHRpb25zLFxuICAgIH07XG5cbiAgICBvcHRpb25zLnN0YWxlID0gTWF0aC5tYXgob3B0aW9ucy5zdGFsZSB8fCAwLCAyMDAwKTtcblxuICAgIC8vIFJlc29sdmUgdG8gYSBjYW5vbmljYWwgZmlsZSBwYXRoXG4gICAgcmVzb2x2ZUNhbm9uaWNhbFBhdGgoZmlsZSwgb3B0aW9ucywgKGVyciwgZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGxvY2tmaWxlIGV4aXN0c1xuICAgICAgICBvcHRpb25zLmZzLnN0YXQoZ2V0TG9ja0ZpbGUoZmlsZSwgb3B0aW9ucyksIChlcnIsIHN0YXQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBkb2VzIG5vdCBleGlzdCwgZmlsZSBpcyBub3QgbG9ja2VkLiBPdGhlcndpc2UsIGNhbGxiYWNrIHdpdGggZXJyb3JcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyLmNvZGUgPT09ICdFTk9FTlQnID8gY2FsbGJhY2sobnVsbCwgZmFsc2UpIDogY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBjaGVjayBpZiBsb2NrIGlzIHN0YWxlIGJ5IGFuYWx5emluZyB0aGUgZmlsZSBtdGltZVxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsICFpc0xvY2tTdGFsZShzdGF0LCBvcHRpb25zKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NrcygpIHtcbiAgICByZXR1cm4gbG9ja3M7XG59XG5cbi8vIFJlbW92ZSBhY3F1aXJlZCBsb2NrcyBvbiBleGl0XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xub25FeGl0KCgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGZpbGUgaW4gbG9ja3MpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGxvY2tzW2ZpbGVdLm9wdGlvbnM7XG5cbiAgICAgICAgdHJ5IHsgb3B0aW9ucy5mcy5ybWRpclN5bmMoZ2V0TG9ja0ZpbGUoZmlsZSwgb3B0aW9ucykpOyB9IGNhdGNoIChlKSB7IC8qIEVtcHR5ICovIH1cbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMubG9jayA9IGxvY2s7XG5tb2R1bGUuZXhwb3J0cy51bmxvY2sgPSB1bmxvY2s7XG5tb2R1bGUuZXhwb3J0cy5jaGVjayA9IGNoZWNrO1xubW9kdWxlLmV4cG9ydHMuZ2V0TG9ja3MgPSBnZXRMb2NrcztcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKTtcblxuZnVuY3Rpb24gY3JlYXRlU3luY0ZzKGZzKSB7XG4gICAgY29uc3QgbWV0aG9kcyA9IFsnbWtkaXInLCAncmVhbHBhdGgnLCAnc3RhdCcsICdybWRpcicsICd1dGltZXMnXTtcbiAgICBjb25zdCBuZXdGcyA9IHsgLi4uZnMgfTtcblxuICAgIG1ldGhvZHMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgICAgIG5ld0ZzW21ldGhvZF0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgbGV0IHJldDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXQgPSBmc1tgJHttZXRob2R9U3luY2BdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJldCk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3RnM7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gdG9Qcm9taXNlKG1ldGhvZCkge1xuICAgIHJldHVybiAoLi4uYXJncykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBhcmdzLnB1c2goKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWV0aG9kKC4uLmFyZ3MpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b1N5bmMobWV0aG9kKSB7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCBlcnI7XG4gICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgYXJncy5wdXNoKChfZXJyLCBfcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBlcnIgPSBfZXJyO1xuICAgICAgICAgICAgcmVzdWx0ID0gX3Jlc3VsdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWV0aG9kKC4uLmFyZ3MpO1xuXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdG9TeW5jT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgLy8gU2hhbGxvdyBjbG9uZSBvcHRpb25zIGJlY2F1c2Ugd2UgYXJlIG9naW5nIHRvIG11dGF0ZSB0aGVtXG4gICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuXG4gICAgLy8gVHJhbnNmb3JtIGZzIHRvIHVzZSB0aGUgc3luYyBtZXRob2RzIGluc3RlYWRcbiAgICBvcHRpb25zLmZzID0gY3JlYXRlU3luY0ZzKG9wdGlvbnMuZnMgfHwgZnMpO1xuXG4gICAgLy8gUmV0cmllcyBhcmUgbm90IGFsbG93ZWQgYmVjYXVzZSBpdCByZXF1aXJlcyB0aGUgZmxvdyB0byBiZSBzeW5jXG4gICAgaWYgKFxuICAgICAgICAodHlwZW9mIG9wdGlvbnMucmV0cmllcyA9PT0gJ251bWJlcicgJiYgb3B0aW9ucy5yZXRyaWVzID4gMCkgfHxcbiAgICAgICAgKG9wdGlvbnMucmV0cmllcyAmJiB0eXBlb2Ygb3B0aW9ucy5yZXRyaWVzLnJldHJpZXMgPT09ICdudW1iZXInICYmIG9wdGlvbnMucmV0cmllcy5yZXRyaWVzID4gMClcbiAgICApIHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgcmV0cmllcyB3aXRoIHRoZSBzeW5jIGFwaScpLCB7IGNvZGU6ICdFU1lOQycgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRvUHJvbWlzZSxcbiAgICB0b1N5bmMsXG4gICAgdG9TeW5jT3B0aW9ucyxcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsb2NrZmlsZSA9IHJlcXVpcmUoJy4vbGliL2xvY2tmaWxlJyk7XG5jb25zdCB7IHRvUHJvbWlzZSwgdG9TeW5jLCB0b1N5bmNPcHRpb25zIH0gPSByZXF1aXJlKCcuL2xpYi9hZGFwdGVyJyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvY2soZmlsZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHJlbGVhc2UgPSBhd2FpdCB0b1Byb21pc2UobG9ja2ZpbGUubG9jaykoZmlsZSwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdG9Qcm9taXNlKHJlbGVhc2UpO1xufVxuXG5mdW5jdGlvbiBsb2NrU3luYyhmaWxlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgcmVsZWFzZSA9IHRvU3luYyhsb2NrZmlsZS5sb2NrKShmaWxlLCB0b1N5bmNPcHRpb25zKG9wdGlvbnMpKTtcblxuICAgIHJldHVybiB0b1N5bmMocmVsZWFzZSk7XG59XG5cbmZ1bmN0aW9uIHVubG9jayhmaWxlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRvUHJvbWlzZShsb2NrZmlsZS51bmxvY2spKGZpbGUsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiB1bmxvY2tTeW5jKGZpbGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9TeW5jKGxvY2tmaWxlLnVubG9jaykoZmlsZSwgdG9TeW5jT3B0aW9ucyhvcHRpb25zKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrKGZpbGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9Qcm9taXNlKGxvY2tmaWxlLmNoZWNrKShmaWxlLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tTeW5jKGZpbGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9TeW5jKGxvY2tmaWxlLmNoZWNrKShmaWxlLCB0b1N5bmNPcHRpb25zKG9wdGlvbnMpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsb2NrO1xubW9kdWxlLmV4cG9ydHMubG9jayA9IGxvY2s7XG5tb2R1bGUuZXhwb3J0cy51bmxvY2sgPSB1bmxvY2s7XG5tb2R1bGUuZXhwb3J0cy5sb2NrU3luYyA9IGxvY2tTeW5jO1xubW9kdWxlLmV4cG9ydHMudW5sb2NrU3luYyA9IHVubG9ja1N5bmM7XG5tb2R1bGUuZXhwb3J0cy5jaGVjayA9IGNoZWNrO1xubW9kdWxlLmV4cG9ydHMuY2hlY2tTeW5jID0gY2hlY2tTeW5jO1xuIiwgIi8qKlxuICogTGF6eSBhY2Nlc3NvciBmb3IgcHJvcGVyLWxvY2tmaWxlLlxuICpcbiAqIHByb3Blci1sb2NrZmlsZSBkZXBlbmRzIG9uIGdyYWNlZnVsLWZzLCB3aGljaCBtb25rZXktcGF0Y2hlcyBldmVyeSBmc1xuICogbWV0aG9kIG9uIGZpcnN0IHJlcXVpcmUgKH44bXMpLiBTdGF0aWMgaW1wb3J0cyBvZiBwcm9wZXItbG9ja2ZpbGUgcHVsbCB0aGlzXG4gKiBjb3N0IGludG8gdGhlIHN0YXJ0dXAgcGF0aCBldmVuIHdoZW4gbm8gbG9ja2luZyBoYXBwZW5zIChlLmcuIGAtLWhlbHBgKS5cbiAqXG4gKiBJbXBvcnQgdGhpcyBtb2R1bGUgaW5zdGVhZCBvZiBgcHJvcGVyLWxvY2tmaWxlYCBkaXJlY3RseS4gVGhlIHVuZGVybHlpbmdcbiAqIHBhY2thZ2UgaXMgb25seSBsb2FkZWQgdGhlIGZpcnN0IHRpbWUgYSBsb2NrIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IGNhbGxlZC5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IENoZWNrT3B0aW9ucywgTG9ja09wdGlvbnMsIFVubG9ja09wdGlvbnMgfSBmcm9tICdwcm9wZXItbG9ja2ZpbGUnXG5cbnR5cGUgTG9ja2ZpbGUgPSB0eXBlb2YgaW1wb3J0KCdwcm9wZXItbG9ja2ZpbGUnKVxuXG5sZXQgX2xvY2tmaWxlOiBMb2NrZmlsZSB8IHVuZGVmaW5lZFxuXG5mdW5jdGlvbiBnZXRMb2NrZmlsZSgpOiBMb2NrZmlsZSB7XG4gIGlmICghX2xvY2tmaWxlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbiAgICBfbG9ja2ZpbGUgPSByZXF1aXJlKCdwcm9wZXItbG9ja2ZpbGUnKSBhcyBMb2NrZmlsZVxuICB9XG4gIHJldHVybiBfbG9ja2ZpbGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2soXG4gIGZpbGU6IHN0cmluZyxcbiAgb3B0aW9ucz86IExvY2tPcHRpb25zLFxuKTogUHJvbWlzZTwoKSA9PiBQcm9taXNlPHZvaWQ+PiB7XG4gIHJldHVybiBnZXRMb2NrZmlsZSgpLmxvY2soZmlsZSwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2tTeW5jKGZpbGU6IHN0cmluZywgb3B0aW9ucz86IExvY2tPcHRpb25zKTogKCkgPT4gdm9pZCB7XG4gIHJldHVybiBnZXRMb2NrZmlsZSgpLmxvY2tTeW5jKGZpbGUsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmxvY2soZmlsZTogc3RyaW5nLCBvcHRpb25zPzogVW5sb2NrT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gZ2V0TG9ja2ZpbGUoKS51bmxvY2soZmlsZSwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrKGZpbGU6IHN0cmluZywgb3B0aW9ucz86IENoZWNrT3B0aW9ucyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gZ2V0TG9ja2ZpbGUoKS5jaGVjayhmaWxlLCBvcHRpb25zKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFPLFNBQVMsWUFBZSxJQUFTLFdBQXNDO0FBQzVFLFNBQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxNQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUU7QUFDM0Q7QUFFTyxTQUFTLE1BQVMsS0FBbUIsTUFBaUM7QUFDM0UsTUFBSSxJQUFJO0FBQ1IsYUFBVyxLQUFLLElBQUssTUFBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDbkMsU0FBTztBQUNU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O0FBQUEsSUFDbEQ7QUFFQSxhQUFTLFVBQVUsTUFBTSxTQUFTO0FBQzlCLGFBQU8sT0FBTyxTQUFTLEtBQUssRUFBRSxNQUFNLGNBQWMsT0FBTyxDQUFDO0FBQUEsSUFDOUQ7QUFFQSxXQUFPLFVBQVVIO0FBQ2pCLFdBQU8sUUFBUSxPQUFPQTtBQUN0QixXQUFPLFFBQVEsU0FBU0U7QUFDeEIsV0FBTyxRQUFRLFdBQVdEO0FBQzFCLFdBQU8sUUFBUSxhQUFhO0FBQzVCLFdBQU8sUUFBUSxRQUFRRTtBQUN2QixXQUFPLFFBQVEsWUFBWTtBQUFBO0FBQUE7OztBQ3RCM0IsU0FBUyxjQUF3QjtBQUMvQixNQUFJLENBQUMsV0FBVztBQUVkLGdCQUFZO0FBQUEsRUFDZDtBQUNBLFNBQU87QUFDVDtBQUVPLFNBQVMsS0FDZCxNQUNBLFNBQzhCO0FBQzlCLFNBQU8sWUFBWSxFQUFFLEtBQUssTUFBTSxPQUFPO0FBQ3pDO0FBRU8sU0FBUyxTQUFTLE1BQWMsU0FBbUM7QUFDeEUsU0FBTyxZQUFZLEVBQUUsU0FBUyxNQUFNLE9BQU87QUFDN0M7QUFFTyxTQUFTLE9BQU8sTUFBYyxTQUF3QztBQUMzRSxTQUFPLFlBQVksRUFBRSxPQUFPLE1BQU0sT0FBTztBQUMzQztBQUVPLFNBQVMsTUFBTSxNQUFjLFNBQTBDO0FBQzVFLFNBQU8sWUFBWSxFQUFFLE1BQU0sTUFBTSxPQUFPO0FBQzFDO0FBMUNBLElBZUk7QUFmSjtBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsiZnMiLCAiZXJyIiwgImVycjIiLCAiZXIiLCAiZXIyIiwgInF1ZXVlIiwgImZzIiwgInBhdGgiLCAib3B0aW9ucyIsICJjYiIsICJkYXRhIiwgInNyYyIsICJkZXN0IiwgImZsYWdzIiwgImdvJHJlYWRkaXIiLCAibW9kZSIsICJjb3VudCIsICJvcmlnaW5hbCIsICJyZXF1aXJlX3JldHJ5IiwgInByb2Nlc3MiLCAidW5sb2FkIiwgImVtaXQiLCAibG9hZCIsICJwcm9jZXNzUmVhbGx5RXhpdCIsICJwcm9jZXNzRW1pdCIsICJlcnIiLCAiZXJyIiwgIm10aW1lUHJlY2lzaW9uIiwgImxvY2siLCAiaXNPdmVyVGhyZXNob2xkIiwgImZpbGUiLCAidW5sb2NrIiwgImNoZWNrIiwgImZzIiwgImxvY2siLCAibG9ja1N5bmMiLCAidW5sb2NrIiwgImNoZWNrIl0KfQo=
