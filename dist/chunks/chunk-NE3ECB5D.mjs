#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __commonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@smithy+property-provider@4.2.12/node_modules/@smithy/property-provider/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "node_modules/.pnpm/@smithy+property-provider@4.2.12/node_modules/@smithy/property-provider/dist-cjs/index.js"(exports) {
    "use strict";
    var ProviderError = class _ProviderError extends Error {
      name = "ProviderError";
      tryNextLink;
      constructor(message, options = true) {
        let logger;
        let tryNextLink = true;
        if (typeof options === "boolean") {
          logger = void 0;
          tryNextLink = options;
        } else if (options != null && typeof options === "object") {
          logger = options.logger;
          tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, _ProviderError.prototype);
        logger?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
      }
      static from(error, options = true) {
        return Object.assign(new this(error.message, options), error);
      }
    };
    var CredentialsProviderError = class _CredentialsProviderError extends ProviderError {
      name = "CredentialsProviderError";
      constructor(message, options = true) {
        super(message, options);
        Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
      }
    };
    var TokenProviderError = class _TokenProviderError extends ProviderError {
      name = "TokenProviderError";
      constructor(message, options = true) {
        super(message, options);
        Object.setPrototypeOf(this, _TokenProviderError.prototype);
      }
    };
    var chain = (...providers) => async () => {
      if (providers.length === 0) {
        throw new ProviderError("No providers in chain");
      }
      let lastProviderError;
      for (const provider of providers) {
        try {
          const credentials = await provider();
          return credentials;
        } catch (err) {
          lastProviderError = err;
          if (err?.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    };
    var fromStatic = (staticValue) => () => Promise.resolve(staticValue);
    var memoize = (provider, isExpired, requiresRefresh) => {
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async () => {
        if (!pending) {
          pending = provider();
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      };
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider();
        }
        if (isConstant) {
          return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider();
          return resolved;
        }
        return resolved;
      };
    };
    exports.CredentialsProviderError = CredentialsProviderError;
    exports.ProviderError = ProviderError;
    exports.TokenProviderError = TokenProviderError;
    exports.chain = chain;
    exports.fromStatic = fromStatic;
    exports.memoize = memoize;
  }
});

export {
  require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrcHJvcGVydHktcHJvdmlkZXJANC4yLjEyL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3BlcnR5LXByb3ZpZGVyL2Rpc3QtY2pzL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFByb3ZpZGVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgbmFtZSA9IFwiUHJvdmlkZXJFcnJvclwiO1xuICAgIHRyeU5leHRMaW5rO1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMgPSB0cnVlKSB7XG4gICAgICAgIGxldCBsb2dnZXI7XG4gICAgICAgIGxldCB0cnlOZXh0TGluayA9IHRydWU7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIGxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRyeU5leHRMaW5rID0gb3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb25zICE9IG51bGwgJiYgdHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyO1xuICAgICAgICAgICAgdHJ5TmV4dExpbmsgPSBvcHRpb25zLnRyeU5leHRMaW5rID8/IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMudHJ5TmV4dExpbmsgPSB0cnlOZXh0TGluaztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFByb3ZpZGVyRXJyb3IucHJvdG90eXBlKTtcbiAgICAgICAgbG9nZ2VyPy5kZWJ1Zz8uKGBAc21pdGh5L3Byb3BlcnR5LXByb3ZpZGVyICR7dHJ5TmV4dExpbmsgPyBcIi0+XCIgOiBcIighKVwifSAke21lc3NhZ2V9YCk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tKGVycm9yLCBvcHRpb25zID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgdGhpcyhlcnJvci5tZXNzYWdlLCBvcHRpb25zKSwgZXJyb3IpO1xuICAgIH1cbn1cblxuY2xhc3MgQ3JlZGVudGlhbHNQcm92aWRlckVycm9yIGV4dGVuZHMgUHJvdmlkZXJFcnJvciB7XG4gICAgbmFtZSA9IFwiQ3JlZGVudGlhbHNQcm92aWRlckVycm9yXCI7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgb3B0aW9ucyA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgb3B0aW9ucyk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBDcmVkZW50aWFsc1Byb3ZpZGVyRXJyb3IucHJvdG90eXBlKTtcbiAgICB9XG59XG5cbmNsYXNzIFRva2VuUHJvdmlkZXJFcnJvciBleHRlbmRzIFByb3ZpZGVyRXJyb3Ige1xuICAgIG5hbWUgPSBcIlRva2VuUHJvdmlkZXJFcnJvclwiO1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMgPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIG9wdGlvbnMpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgVG9rZW5Qcm92aWRlckVycm9yLnByb3RvdHlwZSk7XG4gICAgfVxufVxuXG5jb25zdCBjaGFpbiA9ICguLi5wcm92aWRlcnMpID0+IGFzeW5jICgpID0+IHtcbiAgICBpZiAocHJvdmlkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgUHJvdmlkZXJFcnJvcihcIk5vIHByb3ZpZGVycyBpbiBjaGFpblwiKTtcbiAgICB9XG4gICAgbGV0IGxhc3RQcm92aWRlckVycm9yO1xuICAgIGZvciAoY29uc3QgcHJvdmlkZXIgb2YgcHJvdmlkZXJzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBjcmVkZW50aWFscyA9IGF3YWl0IHByb3ZpZGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gY3JlZGVudGlhbHM7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbGFzdFByb3ZpZGVyRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICBpZiAoZXJyPy50cnlOZXh0TGluaykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IGxhc3RQcm92aWRlckVycm9yO1xufTtcblxuY29uc3QgZnJvbVN0YXRpYyA9IChzdGF0aWNWYWx1ZSkgPT4gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHN0YXRpY1ZhbHVlKTtcblxuY29uc3QgbWVtb2l6ZSA9IChwcm92aWRlciwgaXNFeHBpcmVkLCByZXF1aXJlc1JlZnJlc2gpID0+IHtcbiAgICBsZXQgcmVzb2x2ZWQ7XG4gICAgbGV0IHBlbmRpbmc7XG4gICAgbGV0IGhhc1Jlc3VsdDtcbiAgICBsZXQgaXNDb25zdGFudCA9IGZhbHNlO1xuICAgIGNvbnN0IGNvYWxlc2NlUHJvdmlkZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghcGVuZGluZykge1xuICAgICAgICAgICAgcGVuZGluZyA9IHByb3ZpZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gYXdhaXQgcGVuZGluZztcbiAgICAgICAgICAgIGhhc1Jlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICBpc0NvbnN0YW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICB9O1xuICAgIGlmIChpc0V4cGlyZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYXN5bmMgKG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIGlmICghaGFzUmVzdWx0IHx8IG9wdGlvbnM/LmZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gYXdhaXQgY29hbGVzY2VQcm92aWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gYXN5bmMgKG9wdGlvbnMpID0+IHtcbiAgICAgICAgaWYgKCFoYXNSZXN1bHQgfHwgb3B0aW9ucz8uZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IGF3YWl0IGNvYWxlc2NlUHJvdmlkZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDb25zdGFudCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXF1aXJlc1JlZnJlc2ggJiYgIXJlcXVpcmVzUmVmcmVzaChyZXNvbHZlZCkpIHtcbiAgICAgICAgICAgIGlzQ29uc3RhbnQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0V4cGlyZWQocmVzb2x2ZWQpKSB7XG4gICAgICAgICAgICBhd2FpdCBjb2FsZXNjZVByb3ZpZGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgIH07XG59O1xuXG5leHBvcnRzLkNyZWRlbnRpYWxzUHJvdmlkZXJFcnJvciA9IENyZWRlbnRpYWxzUHJvdmlkZXJFcnJvcjtcbmV4cG9ydHMuUHJvdmlkZXJFcnJvciA9IFByb3ZpZGVyRXJyb3I7XG5leHBvcnRzLlRva2VuUHJvdmlkZXJFcnJvciA9IFRva2VuUHJvdmlkZXJFcnJvcjtcbmV4cG9ydHMuY2hhaW4gPSBjaGFpbjtcbmV4cG9ydHMuZnJvbVN0YXRp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
