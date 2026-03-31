#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs
} from "./chunk-P2R73CAR.mjs";
import {
  __commonJS,
  __require
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@smithy+shared-ini-file-loader@4.4.7/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getHomeDir.js
var require_getHomeDir = __commonJS({
  "node_modules/.pnpm/@smithy+shared-ini-file-loader@4.4.7/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getHomeDir.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getHomeDir = void 0;
    var os_1 = __require("os");
    var path_1 = __require("path");
    var homeDirCache = {};
    var getHomeDirCacheKey = () => {
      if (process && process.geteuid) {
        return `${process.geteuid()}`;
      }
      return "DEFAULT";
    };
    var getHomeDir = () => {
      const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${path_1.sep}` } = process.env;
      if (HOME)
        return HOME;
      if (USERPROFILE)
        return USERPROFILE;
      if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
      const homeDirCacheKey = getHomeDirCacheKey();
      if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = (0, os_1.homedir)();
      return homeDirCache[homeDirCacheKey];
    };
    exports.getHomeDir = getHomeDir;
  }
});

// node_modules/.pnpm/@smithy+shared-ini-file-loader@4.4.7/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFilepath.js
var require_getSSOTokenFilepath = __commonJS({
  "node_modules/.pnpm/@smithy+shared-ini-file-loader@4.4.7/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFilepath.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSSOTokenFilepath = void 0;
    var crypto_1 = __require("crypto");
    var path_1 = __require("path");
    var getHomeDir_1 = require_getHomeDir();
    var getSSOTokenFilepath = (id) => {
      const hasher = (0, crypto_1.createHash)("sha1");
      const cacheName = hasher.update(id).digest("hex");
      return (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "sso", "cache", `${cacheName}.json`);
    };
    exports.getSSOTokenFilepath = getSSOTokenFilepath;
  }
});

// node_modules/.pnpm/@smithy+shared-ini-file-loader@4.4.7/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js
var require_getSSOTokenFromFile = __commonJS({
  "node_modules/.pnpm/@smithy+shared-ini-file-loader@4.4.7/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSSOTokenFromFile = exports.tokenIntercept = void 0;
    var promises_1 = __require("fs/promises");
    var getSSOTokenFilepath_1 = require_getSSOTokenFilepath();
    exports.tokenIntercept = {};
    var getSSOTokenFromFile = async (id) => {
      if (exports.tokenIntercept[id]) {
        return exports.tokenIntercept[id];
      }
      const ssoTokenFilepath = (0, getSSOTokenFilepath_1.getSSOTokenFilepath)(id);
      const ssoTokenText = await (0, promises_1.readFile)(ssoTokenFilepath, "utf8");
      return JSON.parse(ssoTokenText);
    };
    exports.getSSOTokenFromFile = getSSOTokenFromFile;
  }
});

// node_modules/.pnpm/@smithy+shared-ini-file-loader@4.4.7/node_modules/@smithy/shared-ini-file-loader/dist-cjs/readFile.js
var require_readFile = __commonJS({
  "node_modules/.pnpm/@smithy+shared-ini-file-loader@4.4.7/node_modules/@smithy/shared-ini-file-loader/dist-cjs/readFile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readFile = exports.fileIntercept = exports.filePromises = void 0;
    var promises_1 = __require("node:fs/promises");
    exports.filePromises = {};
    exports.fileIntercept = {};
    var readFile = (path, options) => {
      if (exports.fileIntercept[path] !== void 0) {
        return exports.fileIntercept[path];
      }
      if (!exports.filePromises[path] || options?.ignoreCache) {
        exports.filePromises[path] = (0, promises_1.readFile)(path, "utf8");
      }
      return exports.filePromises[path];
    };
    exports.readFile = readFile;
  }
});

// node_modules/.pnpm/@smithy+shared-ini-file-loader@4.4.7/node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "node_modules/.pnpm/@smithy+shared-ini-file-loader@4.4.7/node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js"(exports) {
    "use strict";
    var getHomeDir = require_getHomeDir();
    var getSSOTokenFilepath = require_getSSOTokenFilepath();
    var getSSOTokenFromFile = require_getSSOTokenFromFile();
    var path = __require("path");
    var types = require_dist_cjs();
    var readFile = require_readFile();
    var ENV_PROFILE = "AWS_PROFILE";
    var DEFAULT_PROFILE = "default";
    var getProfileName = (init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;
    var CONFIG_PREFIX_SEPARATOR = ".";
    var getConfigData = (data) => Object.entries(data).filter(([key]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      if (indexOfSeparator === -1) {
        return false;
      }
      return Object.values(types.IniSectionType).includes(key.substring(0, indexOfSeparator));
    }).reduce((acc, [key, value]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      const updatedKey = key.substring(0, indexOfSeparator) === types.IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
      acc[updatedKey] = value;
      return acc;
    }, {
      ...data.default && { default: data.default }
    });
    var ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
    var getConfigFilepath = () => process.env[ENV_CONFIG_PATH] || path.join(getHomeDir.getHomeDir(), ".aws", "config");
    var ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
    var getCredentialsFilepath = () => process.env[ENV_CREDENTIALS_PATH] || path.join(getHomeDir.getHomeDir(), ".aws", "credentials");
    var prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
    var profileNameBlockList = ["__proto__", "profile __proto__"];
    var parseIni = (iniData) => {
      const map = {};
      let currentSection;
      let currentSubSection;
      for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
          currentSection = void 0;
          currentSubSection = void 0;
          const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
          const matches = prefixKeyRegex.exec(sectionName);
          if (matches) {
            const [, prefix, , name] = matches;
            if (Object.values(types.IniSectionType).includes(prefix)) {
              currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
            }
          } else {
            currentSection = sectionName;
          }
          if (profileNameBlockList.includes(sectionName)) {
            throw new Error(`Found invalid profile name "${sectionName}"`);
          }
        } else if (currentSection) {
          const indexOfEqualsSign = trimmedLine.indexOf("=");
          if (![0, -1].includes(indexOfEqualsSign)) {
            const [name, value] = [
              trimmedLine.substring(0, indexOfEqualsSign).trim(),
              trimmedLine.substring(indexOfEqualsSign + 1).trim()
            ];
            if (value === "") {
              currentSubSection = name;
            } else {
              if (currentSubSection && iniLine.trimStart() === iniLine) {
                currentSubSection = void 0;
              }
              map[currentSection] = map[currentSection] || {};
              const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
              map[currentSection][key] = value;
            }
          }
        }
      }
      return map;
    };
    var swallowError$1 = () => ({});
    var loadSharedConfigFiles = async (init = {}) => {
      const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
      const homeDir = getHomeDir.getHomeDir();
      const relativeHomeDirPrefix = "~/";
      let resolvedFilepath = filepath;
      if (filepath.startsWith(relativeHomeDirPrefix)) {
        resolvedFilepath = path.join(homeDir, filepath.slice(2));
      }
      let resolvedConfigFilepath = configFilepath;
      if (configFilepath.startsWith(relativeHomeDirPrefix)) {
        resolvedConfigFilepath = path.join(homeDir, configFilepath.slice(2));
      }
      const parsedFiles = await Promise.all([
        readFile.readFile(resolvedConfigFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).then(getConfigData).catch(swallowError$1),
        readFile.readFile(resolvedFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).catch(swallowError$1)
      ]);
      return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1]
      };
    };
    var getSsoSessionData = (data) => Object.entries(data).filter(([key]) => key.startsWith(types.IniSectionType.SSO_SESSION + CONFIG_PREFIX_SEPARATOR)).reduce((acc, [key, value]) => ({ ...acc, [key.substring(key.indexOf(CONFIG_PREFIX_SEPARATOR) + 1)]: value }), {});
    var swallowError = () => ({});
    var loadSsoSessionData = async (init = {}) => readFile.readFile(init.configFilepath ?? getConfigFilepath()).then(parseIni).then(getSsoSessionData).catch(swallowError);
    var mergeConfigFiles = (...files) => {
      const merged = {};
      for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
          if (merged[key] !== void 0) {
            Object.assign(merged[key], values);
          } else {
            merged[key] = values;
          }
        }
      }
      return merged;
    };
    var parseKnownFiles = async (init) => {
      const parsedFiles = await loadSharedConfigFiles(init);
      return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
    };
    var externalDataInterceptor = {
      getFileRecord() {
        return readFile.fileIntercept;
      },
      interceptFile(path2, contents) {
        readFile.fileIntercept[path2] = Promise.resolve(contents);
      },
      getTokenRecord() {
        return getSSOTokenFromFile.tokenIntercept;
      },
      interceptToken(id, contents) {
        getSSOTokenFromFile.tokenIntercept[id] = contents;
      }
    };
    exports.getSSOTokenFromFile = getSSOTokenFromFile.getSSOTokenFromFile;
    exports.readFile = readFile.readFile;
    exports.CONFIG_PREFIX_SEPARATOR = CONFIG_PREFIX_SEPARATOR;
    exports.DEFAULT_PROFILE = DEFAULT_PROFILE;
    exports.ENV_PROFILE = ENV_PROFILE;
    exports.externalDataInterceptor = externalDataInterceptor;
    exports.getProfileName = getProfileName;
    exports.loadSharedConfigFiles = loadSharedConfigFiles;
    exports.loadSsoSessionData = loadSsoSessionData;
    exports.parseKnownFiles = parseKnownFiles;
    Object.prototype.hasOwnProperty.call(getHomeDir, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: getHomeDir["__proto__"]
    });
    Object.keys(getHomeDir).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = getHomeDir[k];
    });
    Object.prototype.hasOwnProperty.call(getSSOTokenFilepath, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
      enumerable: true,
      value: getSSOTokenFilepath["__proto__"]
    });
    Object.keys(getSSOTokenFilepath).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = getSSOTokenFilepath[k];
    });
  }
});

export {
  require_dist_cjs2 as require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrc2hhcmVkLWluaS1maWxlLWxvYWRlckA0LjQuNy9ub2RlX21vZHVsZXMvQHNtaXRoeS9zaGFyZWQtaW5pLWZpbGUtbG9hZGVyL2Rpc3QtY2pzL2dldEhvbWVEaXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrc2hhcmVkLWluaS1maWxlLWxvYWRlckA0LjQuNy9ub2RlX21vZHVsZXMvQHNtaXRoeS9zaGFyZWQtaW5pLWZpbGUtbG9hZGVyL2Rpc3QtY2pzL2dldFNTT1Rva2VuRmlsZXBhdGguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrc2hhcmVkLWluaS1maWxlLWxvYWRlckA0LjQuNy9ub2RlX21vZHVsZXMvQHNtaXRoeS9zaGFyZWQtaW5pLWZpbGUtbG9hZGVyL2Rpc3QtY2pzL2dldFNTT1Rva2VuRnJvbUZpbGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrc2hhcmVkLWluaS1maWxlLWxvYWRlckA0LjQuNy9ub2RlX21vZHVsZXMvQHNtaXRoeS9zaGFyZWQtaW5pLWZpbGUtbG9hZGVyL2Rpc3QtY2pzL3JlYWRGaWxlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3NoYXJlZC1pbmktZmlsZS1sb2FkZXJANC40Ljcvbm9kZV9tb2R1bGVzL0BzbWl0aHkvc2hhcmVkLWluaS1maWxlLWxvYWRlci9kaXN0LWNqcy9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldEhvbWVEaXIgPSB2b2lkIDA7XG5jb25zdCBvc18xID0gcmVxdWlyZShcIm9zXCIpO1xuY29uc3QgcGF0aF8xID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBob21lRGlyQ2FjaGUgPSB7fTtcbmNvbnN0IGdldEhvbWVEaXJDYWNoZUtleSA9ICgpID0+IHtcbiAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzLmdldGV1aWQpIHtcbiAgICAgICAgcmV0dXJuIGAke3Byb2Nlc3MuZ2V0ZXVpZCgpfWA7XG4gICAgfVxuICAgIHJldHVybiBcIkRFRkFVTFRcIjtcbn07XG5jb25zdCBnZXRIb21lRGlyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgSE9NRSwgVVNFUlBST0ZJTEUsIEhPTUVQQVRILCBIT01FRFJJVkUgPSBgQzoke3BhdGhfMS5zZXB9YCB9ID0gcHJvY2Vzcy5lbnY7XG4gICAgaWYgKEhPTUUpXG4gICAgICAgIHJldHVybiBIT01FO1xuICAgIGlmIChVU0VSUFJPRklMRSlcbiAgICAgICAgcmV0dXJuIFVTRVJQUk9GSUxFO1xuICAgIGlmIChIT01FUEFUSClcbiAgICAgICAgcmV0dXJuIGAke0hPTUVEUklWRX0ke0hPTUVQQVRIfWA7XG4gICAgY29uc3QgaG9tZURpckNhY2hlS2V5ID0gZ2V0SG9tZURpckNhY2hlS2V5KCk7XG4gICAgaWYgKCFob21lRGlyQ2FjaGVbaG9tZURpckNhY2hlS2V5XSlcbiAgICAgICAgaG9tZURpckNhY2hlW2hvbWVEaXJDYWNoZUtleV0gPSAoMCwgb3NfMS5ob21lZGlyKSgpO1xuICAgIHJldHVybiBob21lRGlyQ2FjaGVbaG9tZURpckNhY2hlS2V5XTtcbn07XG5leHBvcnRzLmdldEhvbWVEaXIgPSBnZXRIb21lRGlyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRTU09Ub2tlbkZpbGVwYXRoID0gdm9pZCAwO1xuY29uc3QgY3J5cHRvXzEgPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuY29uc3QgcGF0aF8xID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBnZXRIb21lRGlyXzEgPSByZXF1aXJlKFwiLi9nZXRIb21lRGlyXCIpO1xuY29uc3QgZ2V0U1NPVG9rZW5GaWxlcGF0aCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGhhc2hlciA9ICgwLCBjcnlwdG9fMS5jcmVhdGVIYXNoKShcInNoYTFcIik7XG4gICAgY29uc3QgY2FjaGVOYW1lID0gaGFzaGVyLnVwZGF0ZShpZCkuZGlnZXN0KFwiaGV4XCIpO1xuICAgIHJldHVybiAoMCwgcGF0aF8xLmpvaW4pKCgwLCBnZXRIb21lRGlyXzEuZ2V0SG9tZURpcikoKSwgXCIuYXdzXCIsIFwic3NvXCIsIFwiY2FjaGVcIiwgYCR7Y2FjaGVOYW1lfS5qc29uYCk7XG59O1xuZXhwb3J0cy5nZXRTU09Ub2tlbkZpbGVwYXRoID0gZ2V0U1NPVG9rZW5GaWxlcGF0aDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0U1NPVG9rZW5Gcm9tRmlsZSA9IGV4cG9ydHMudG9rZW5JbnRlcmNlcHQgPSB2b2lkIDA7XG5jb25zdCBwcm9taXNlc18xID0gcmVxdWlyZShcImZzL3Byb21pc2VzXCIpO1xuY29uc3QgZ2V0U1NPVG9rZW5GaWxlcGF0aF8xID0gcmVxdWlyZShcIi4vZ2V0U1NPVG9rZW5GaWxlcGF0aFwiKTtcbmV4cG9ydHMudG9rZW5JbnRlcmNlcHQgPSB7fTtcbmNvbnN0IGdldFNTT1Rva2VuRnJvbUZpbGUgPSBhc3luYyAoaWQpID0+IHtcbiAgICBpZiAoZXhwb3J0cy50b2tlbkludGVyY2VwdFtpZF0pIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMudG9rZW5JbnRlcmNlcHRbaWRdO1xuICAgIH1cbiAgICBjb25zdCBzc29Ub2tlbkZpbGVwYXRoID0gKDAsIGdldFNTT1Rva2VuRmlsZXBhdGhfMS5nZXRTU09Ub2tlbkZpbGVwYXRoKShpZCk7XG4gICAgY29uc3Qgc3NvVG9rZW5UZXh0ID0gYXdhaXQgKDAsIHByb21pc2VzXzEucmVhZEZpbGUpKHNzb1Rva2VuRmlsZXBhdGgsIFwidXRmOFwiKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzc29Ub2tlblRleHQpO1xufTtcbmV4cG9ydHMuZ2V0U1NPVG9rZW5Gcm9tRmlsZSA9IGdldFNTT1Rva2VuRnJvbUZpbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlYWRGaWxlID0gZXhwb3J0cy5maWxlSW50ZXJjZXB0ID0gZXhwb3J0cy5maWxlUHJvbWlzZXMgPSB2b2lkIDA7XG5jb25zdCBwcm9taXNlc18xID0gcmVxdWlyZShcIm5vZGU6ZnMvcHJvbWlzZXNcIik7XG5leHBvcnRzLmZpbGVQcm9taXNlcyA9IHt9O1xuZXhwb3J0cy5maWxlSW50ZXJjZXB0ID0ge307XG5jb25zdCByZWFkRmlsZSA9IChwYXRoLCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKGV4cG9ydHMuZmlsZUludGVyY2VwdFtwYXRoXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLmZpbGVJbnRlcmNlcHRbcGF0aF07XG4gICAgfVxuICAgIGlmICghZXhwb3J0cy5maWxlUHJvbWlzZXNbcGF0aF0gfHwgb3B0aW9ucz8uaWdub3JlQ2FjaGUpIHtcbiAgICAgICAgZXhwb3J0cy5maWxlUHJvbWlzZXNbcGF0aF0gPSAoMCwgcHJvbWlzZXNfMS5yZWFkRmlsZSkocGF0aCwgXCJ1dGY4XCIpO1xuICAgIH1cbiAgICByZXR1cm4gZXhwb3J0cy5maWxlUHJvbWlzZXNbcGF0aF07XG59O1xuZXhwb3J0cy5yZWFkRmlsZSA9IHJlYWRGaWxlO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGdldEhvbWVEaXIgPSByZXF1aXJlKCcuL2dldEhvbWVEaXInKTtcbnZhciBnZXRTU09Ub2tlbkZpbGVwYXRoID0gcmVxdWlyZSgnLi9nZXRTU09Ub2tlbkZpbGVwYXRoJyk7XG52YXIgZ2V0U1NPVG9rZW5Gcm9tRmlsZSA9IHJlcXVpcmUoJy4vZ2V0U1NPVG9rZW5Gcm9tRmlsZScpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgdHlwZXMgPSByZXF1aXJlKCdAc21pdGh5L3R5cGVzJyk7XG52YXIgcmVhZEZpbGUgPSByZXF1aXJlKCcuL3JlYWRGaWxlJyk7XG5cbmNvbnN0IEVOVl9QUk9GSUxFID0gXCJBV1NfUFJPRklMRVwiO1xuY29uc3QgREVGQVVMVF9QUk9GSUxFID0gXCJkZWZhdWx0XCI7XG5jb25zdCBnZXRQcm9maWxlTmFtZSA9IChpbml0KSA9PiBpbml0LnByb2ZpbGUgfHwgcHJvY2Vzcy5lbnZbRU5WX1BST0ZJTEVdIHx8IERFRkFVTFRfUFJPRklMRTtcblxuY29uc3QgQ09ORklHX1BSRUZJWF9TRVBBUkFUT1IgPSBcIi5cIjtcblxuY29uc3QgZ2V0Q29uZmlnRGF0YSA9IChkYXRhKSA9PiBPYmplY3QuZW50cmllcyhkYXRhKVxuICAgIC5maWx0ZXIoKFtrZXldKSA9PiB7XG4gICAgY29uc3QgaW5kZXhPZlNlcGFyYXRvciA9IGtleS5pbmRleE9mKENPTkZJR19QUkVGSVhfU0VQQVJBVE9SKTtcbiAgICBpZiAoaW5kZXhPZlNlcGFyYXRvciA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0eXBlcy5JbmlTZWN0aW9uVHlwZSkuaW5jbHVkZXMoa2V5LnN1YnN0cmluZygwLCBpbmRleE9mU2VwYXJhdG9yKSk7XG59KVxuICAgIC5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgY29uc3QgaW5kZXhPZlNlcGFyYXRvciA9IGtleS5pbmRleE9mKENPTkZJR19QUkVGSVhfU0VQQVJBVE9SKTtcbiAgICBjb25zdCB1cGRhdGVkS2V5ID0ga2V5LnN1YnN0cmluZygwLCBpbmRleE9mU2VwYXJhdG9yKSA9PT0gdHlwZXMuSW5pU2VjdGlvblR5cGUuUFJPRklMRSA/IGtleS5zdWJzdHJpbmcoaW5kZXhPZlNlcGFyYXRvciArIDEpIDoga2V5O1xuICAgIGFjY1t1cGRhdGVkS2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBhY2M7XG59LCB7XG4gICAgLi4uKGRhdGEuZGVmYXVsdCAmJiB7IGRlZmF1bHQ6IGRhdGEuZGVmYXVsdCB9KSxcbn0pO1xuXG5jb25zdCBFTlZfQ09ORklHX1BBVEggPSBcIkFXU19DT05GSUdfRklMRVwiO1xuY29uc3QgZ2V0Q29uZmlnRmlsZXBhdGggPSAoKSA9PiBwcm9jZXNzLmVudltFTlZfQ09ORklHX1BBVEhdIHx8IHBhdGguam9pbihnZXRIb21lRGlyLmdldEhvbWVEaXIoKSwgXCIuYXdzXCIsIFwiY29uZmlnXCIpO1xuXG5jb25zdCBFTlZfQ1JFREVOVElBTFNfUEFUSCA9IFwiQVdTX1NIQVJFRF9DUkVERU5USUFMU19GSUxFXCI7XG5jb25zdCBnZXRDcmVkZW50aWFsc0ZpbGVwYXRoID0gKCkgPT4gcHJvY2Vzcy5lbnZbRU5WX0NSRURFTlRJQUxTX1BBVEhdIHx8IHBhdGguam9pbihnZXRIb21lRGlyLmdldEhvbWVEaXIoKSwgXCIuYXdzXCIsIFwiY3JlZGVudGlhbHNcIik7XG5cbmNvbnN0IHByZWZpeEtleVJlZ2V4ID0gL14oW1xcdy1dKylcXHMoW1wiJ10pPyhbXFx3LUBcXCtcXC4lOi9dKylcXDIkLztcbmNvbnN0IHByb2ZpbGVOYW1lQmxvY2tMaXN0ID0gW1wiX19wcm90b19fXCIsIFwicHJvZmlsZSBfX3Byb3RvX19cIl07XG5jb25zdCBwYXJzZUluaSA9IChpbmlEYXRhKSA9PiB7XG4gICAgY29uc3QgbWFwID0ge307XG4gICAgbGV0IGN1cnJlbnRTZWN0aW9uO1xuICAgIGxldCBjdXJyZW50U3ViU2VjdGlvbjtcbiAgICBmb3IgKGNvbnN0IGluaUxpbmUgb2YgaW5pRGF0YS5zcGxpdCgvXFxyP1xcbi8pKSB7XG4gICAgICAgIGNvbnN0IHRyaW1tZWRMaW5lID0gaW5pTGluZS5zcGxpdCgvKF58XFxzKVs7I10vKVswXS50cmltKCk7XG4gICAgICAgIGNvbnN0IGlzU2VjdGlvbiA9IHRyaW1tZWRMaW5lWzBdID09PSBcIltcIiAmJiB0cmltbWVkTGluZVt0cmltbWVkTGluZS5sZW5ndGggLSAxXSA9PT0gXCJdXCI7XG4gICAgICAgIGlmIChpc1NlY3Rpb24pIHtcbiAgICAgICAgICAgIGN1cnJlbnRTZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY3VycmVudFN1YlNlY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uTmFtZSA9IHRyaW1tZWRMaW5lLnN1YnN0cmluZygxLCB0cmltbWVkTGluZS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBwcmVmaXhLZXlSZWdleC5leGVjKHNlY3Rpb25OYW1lKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgWywgcHJlZml4LCAsIG5hbWVdID0gbWF0Y2hlcztcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyh0eXBlcy5JbmlTZWN0aW9uVHlwZSkuaW5jbHVkZXMocHJlZml4KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VjdGlvbiA9IFtwcmVmaXgsIG5hbWVdLmpvaW4oQ09ORklHX1BSRUZJWF9TRVBBUkFUT1IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTZWN0aW9uID0gc2VjdGlvbk5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvZmlsZU5hbWVCbG9ja0xpc3QuaW5jbHVkZXMoc2VjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGb3VuZCBpbnZhbGlkIHByb2ZpbGUgbmFtZSBcIiR7c2VjdGlvbk5hbWV9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjdXJyZW50U2VjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXhPZkVxdWFsc1NpZ24gPSB0cmltbWVkTGluZS5pbmRleE9mKFwiPVwiKTtcbiAgICAgICAgICAgIGlmICghWzAsIC0xXS5pbmNsdWRlcyhpbmRleE9mRXF1YWxzU2lnbikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gW1xuICAgICAgICAgICAgICAgICAgICB0cmltbWVkTGluZS5zdWJzdHJpbmcoMCwgaW5kZXhPZkVxdWFsc1NpZ24pLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgdHJpbW1lZExpbmUuc3Vic3RyaW5nKGluZGV4T2ZFcXVhbHNTaWduICsgMSkudHJpbSgpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdWJTZWN0aW9uID0gbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3ViU2VjdGlvbiAmJiBpbmlMaW5lLnRyaW1TdGFydCgpID09PSBpbmlMaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3ViU2VjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXBbY3VycmVudFNlY3Rpb25dID0gbWFwW2N1cnJlbnRTZWN0aW9uXSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gY3VycmVudFN1YlNlY3Rpb24gPyBbY3VycmVudFN1YlNlY3Rpb24sIG5hbWVdLmpvaW4oQ09ORklHX1BSRUZJWF9TRVBBUkFUT1IpIDogbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgbWFwW2N1cnJlbnRTZWN0aW9uXVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG59O1xuXG5jb25zdCBzd2FsbG93RXJyb3IkMSA9ICgpID0+ICh7fSk7XG5jb25zdCBsb2FkU2hhcmVkQ29uZmlnRmlsZXMgPSBhc3luYyAoaW5pdCA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBmaWxlcGF0aCA9IGdldENyZWRlbnRpYWxzRmlsZXBhdGgoKSwgY29uZmlnRmlsZXBhdGggPSBnZXRDb25maWdGaWxlcGF0aCgpIH0gPSBpbml0O1xuICAgIGNvbnN0IGhvbWVEaXIgPSBnZXRIb21lRGlyLmdldEhvbWVEaXIoKTtcbiAgICBjb25zdCByZWxhdGl2ZUhvbWVEaXJQcmVmaXggPSBcIn4vXCI7XG4gICAgbGV0IHJlc29sdmVkRmlsZXBhdGggPSBmaWxlcGF0aDtcbiAgICBpZiAoZmlsZXBhdGguc3RhcnRzV2l0aChyZWxhdGl2ZUhvbWVEaXJQcmVmaXgpKSB7XG4gICAgICAgIHJlc29sdmVkRmlsZXBhdGggPSBwYXRoLmpvaW4oaG9tZURpciwgZmlsZXBhdGguc2xpY2UoMikpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZWRDb25maWdGaWxlcGF0aCA9IGNvbmZpZ0ZpbGVwYXRoO1xuICAgIGlmIChjb25maWdGaWxlcGF0aC5zdGFydHNXaXRoKHJlbGF0aXZlSG9tZURpclByZWZpeCkpIHtcbiAgICAgICAgcmVzb2x2ZWRDb25maWdGaWxlcGF0aCA9IHBhdGguam9pbihob21lRGlyLCBjb25maWdGaWxlcGF0aC5zbGljZSgyKSk7XG4gICAgfVxuICAgIGNvbnN0IHBhcnNlZEZpbGVzID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICByZWFkRmlsZS5yZWFkRmlsZShyZXNvbHZlZENvbmZpZ0ZpbGVwYXRoLCB7XG4gICAgICAgICAgICBpZ25vcmVDYWNoZTogaW5pdC5pZ25vcmVDYWNoZSxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHBhcnNlSW5pKVxuICAgICAgICAgICAgLnRoZW4oZ2V0Q29uZmlnRGF0YSlcbiAgICAgICAgICAgIC5jYXRjaChzd2FsbG93RXJyb3IkMSksXG4gICAgICAgIHJlYWRGaWxlLnJlYWRGaWxlKHJlc29sdmVkRmlsZXBhdGgsIHtcbiAgICAgICAgICAgIGlnbm9yZUNhY2hlOiBpbml0Lmlnbm9yZUNhY2hlLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocGFyc2VJbmkpXG4gICAgICAgICAgICAuY2F0Y2goc3dhbGxvd0Vycm9yJDEpLFxuICAgIF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmZpZ0ZpbGU6IHBhcnNlZEZpbGVzWzBdLFxuICAgICAgICBjcmVkZW50aWFsc0ZpbGU6IHBhcnNlZEZpbGVzWzFdLFxuICAgIH07XG59O1xuXG5jb25zdCBnZXRTc29TZXNzaW9uRGF0YSA9IChkYXRhKSA9PiBPYmplY3QuZW50cmllcyhkYXRhKVxuICAgIC5maWx0ZXIoKFtrZXldKSA9PiBrZXkuc3RhcnRzV2l0aCh0eXBlcy5JbmlTZWN0aW9uVHlwZS5TU09fU0VTU0lPTiArIENPTkZJR19QUkVGSVhfU0VQQVJBVE9SKSlcbiAgICAucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4gKHsgLi4uYWNjLCBba2V5LnN1YnN0cmluZyhrZXkuaW5kZXhPZihDT05GSUdfUFJFRklYX1NFUEFSQVRPUikgKyAxKV06IHZhbHVlIH0pLCB7fSk7XG5cbmNvbnN0IHN3YWxsb3dFcnJvciA9ICgpID0+ICh7fSk7XG5jb25zdCBsb2FkU3NvU2Vzc2lvbkRhdGEgPSBhc3luYyAoaW5pdCA9IHt9KSA9PiByZWFkRmlsZS5yZWFkRmlsZShpbml0LmNvbmZpZ0ZpbGVwYXRoID8/IGdldENvbmZpZ0ZpbGVwYXRoKCkpXG4gICAgLnRoZW4ocGFyc2VJbmkpXG4gICAgLnRoZW4oZ2V0U3NvU2Vzc2lvbkRhdGEpXG4gICAgLmNhdGNoKHN3YWxsb3dFcnJvcik7XG5cbmNvbnN0IG1lcmdlQ29uZmlnRmlsZXMgPSAoLi4uZmlsZXMpID0+IHtcbiAgICBjb25zdCBtZXJnZWQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKGZpbGUpKSB7XG4gICAgICAgICAgICBpZiAobWVyZ2VkW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obWVyZ2VkW2tleV0sIHZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRba2V5XSA9IHZhbHVlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkO1xufTtcblxuY29uc3QgcGFyc2VLbm93bkZpbGVzID0gYXN5bmMgKGluaXQpID0+IHtcbiAgICBjb25zdCBwYXJzZWRGaWxlcyA9IGF3YWl0IGxvYWRTaGFyZWRDb25maWdGaWxlcyhpbml0KTtcbiAgICByZXR1cm4gbWVyZ2VDb25maWdGaWxlcyhwYXJzZWRGaWxlcy5jb25maWdGaWxlLCBwYXJzZWRGaWxlcy5jcmVkZW50aWFsc0ZpbGUpO1xufTtcblxuY29uc3QgZXh0ZXJuYWxEYXRhSW50ZXJjZXB0b3IgPSB7XG4gICAgZ2V0RmlsZVJlY29yZCgpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRGaWxlLmZpbGVJbnRlcmNlcHQ7XG4gICAgfSxcbiAgICBpbnRlcmNlcHRGaWxlKHBhdGgsIGNvbnRlbnRzKSB7XG4gICAgICAgIHJlYWRGaWxlLmZpbGVJbnRlcmNlcHRbcGF0aF0gPSBQcm9taXNlLnJlc29sdmUoY29udGVudHMpO1xuICAgIH0sXG4gICAgZ2V0VG9rZW5SZWNvcmQoKSB7XG4gICAgICAgIHJldHVybiBnZXRTU09Ub2tlbkZyb21GaWxlLnRva2VuSW50ZXJjZXB0O1xuICAgIH0sXG4gICAgaW50ZXJjZXB0VG9rZW4oaWQsIGNvbnRlbnRzKSB7XG4gICAgICAgIGdldFNTT1Rva2VuRnJvbUZpbGUudG9rZW5JbnRlcmNlcHRbaWRdID0gY29udGVudHM7XG4gICAgfSxcbn07XG5cbmV4cG9ydHMuZ2V0U1NPVG9rZW5Gcm9tRmlsZSA9IGdldFNTT1Rva2VuRnJvbUZpbGUuZ2V0U1NPVG9rZW5Gcm9tRmlsZTtcbmV4cG9ydHMucmVhZEZpbGUgPSByZWFkRmlsZS5yZWFkRmlsZTtcbmV4cG9ydHMuQ09ORklHX1BSRUZJWF9TRVBBUkFUT1IgPSBDT05GSUdfUFJFRklYX1NFUEFSQVRPUjtcbmV4cG9ydHMuREVGQVVMVF9QUk9GSUxFID0gREVGQVVMVF9QUk9GSUxFO1xuZXhwb3J0cy5FTlZfUFJPRklMRSA9IEVOVl9QUk9GSUxFO1xuZXhwb3J0cy5leHRlcm5hbERhdGFJbnRlcmNlcHRvciA9IGV4dGVybmFsRGF0YUludGVyY2VwdG9yO1xuZXhwb3J0cy5nZXRQcm9maWxlTmFtZSA9IGdldFByb2ZpbGVOYW1lO1xuZXhwb3J0cy5sb2FkU2hhcmVkQ29uZmlnRmlsZXMgPSBsb2FkU2hhcmVkQ29uZmlnRmlsZXM7XG5leHBvcnRzLmxvYWRTc29TZXNzaW9uRGF0YSA9IGxvYWRTc29TZXNzaW9uRGF0YTtcbmV4cG9ydHMucGFyc2VLbm93bkZpbGVzID0gcGFyc2VLbm93bkZpbGVzO1xuT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGdldEhvbWVEaXIsICdfX3Byb3RvX18nKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgJ19fcHJvdG9fXycpICYmXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX3Byb3RvX18nLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBnZXRIb21lRGlyWydfX3Byb3RvX18nXVxuICAgIH0pO1xuXG5PYmplY3Qua2V5cyhnZXRIb21lRGlyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIGspKSBleHBvcnRzW2tdID0gZ2V0SG9tZURpcltrXTtcbn0pO1xuT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGdldFNTT1Rva2VuRmlsZXBhdGgsICdfX3Byb3RvX18nKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgJ19fcHJvdG9fXycpICYmXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX3Byb3RvX18nLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBnZXRTU09Ub2tlbkZpbGVwYXRoWydfX3Byb3RvX18nXVxuICAgIH0pO1xuXG5PYmplY3Qua2V5cyhnZXRTU09Ub2tlbkZpbGVwYXRoKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIGspKSBleHBvcnRzW2tdID0gZ2V0U1NPVG9rZW5GaWxlcGF0aFtrXTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsYUFBYTtBQUNyQixRQUFNLE9BQU8sVUFBUSxJQUFJO0FBQ3pCLFFBQU0sU0FBUyxVQUFRLE1BQU07QUFDN0IsUUFBTSxlQUFlLENBQUM7QUFDdEIsUUFBTSxxQkFBcUIsTUFBTTtBQUM3QixVQUFJLFdBQVcsUUFBUSxTQUFTO0FBQzVCLGVBQU8sR0FBRyxRQUFRLFFBQVEsQ0FBQztBQUFBLE1BQy9CO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDQSxRQUFNLGFBQWEsTUFBTTtBQUNyQixZQUFNLEVBQUUsTUFBTSxhQUFhLFVBQVUsWUFBWSxLQUFLLE9BQU8sR0FB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
