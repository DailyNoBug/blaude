#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_dist_cjs
} from "./chunk-P2R73CAR.mjs";
import {
  __commonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@smithy+protocol-http@5.3.12/node_modules/@smithy/protocol-http/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "node_modules/.pnpm/@smithy+protocol-http@5.3.12/node_modules/@smithy/protocol-http/dist-cjs/index.js"(exports) {
    "use strict";
    var types = require_dist_cjs();
    var getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
      return {
        setHttpHandler(handler) {
          runtimeConfig.httpHandler = handler;
        },
        httpHandler() {
          return runtimeConfig.httpHandler;
        },
        updateHttpClientConfig(key, value) {
          runtimeConfig.httpHandler?.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
          return runtimeConfig.httpHandler.httpHandlerConfigs();
        }
      };
    };
    var resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
      return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
      };
    };
    var Field = class {
      name;
      kind;
      values;
      constructor({ name, kind = types.FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
      }
      add(value) {
        this.values.push(value);
      }
      set(values) {
        this.values = values;
      }
      remove(value) {
        this.values = this.values.filter((v) => v !== value);
      }
      toString() {
        return this.values.map((v) => v.includes(",") || v.includes(" ") ? `"${v}"` : v).join(", ");
      }
      get() {
        return this.values;
      }
    };
    var Fields = class {
      entries = {};
      encoding;
      constructor({ fields = [], encoding = "utf-8" }) {
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
      }
      setField(field) {
        this.entries[field.name.toLowerCase()] = field;
      }
      getField(name) {
        return this.entries[name.toLowerCase()];
      }
      removeField(name) {
        delete this.entries[name.toLowerCase()];
      }
      getByType(kind) {
        return Object.values(this.entries).filter((field) => field.kind === kind);
      }
    };
    var HttpRequest = class _HttpRequest {
      method;
      protocol;
      hostname;
      port;
      path;
      query;
      headers;
      username;
      password;
      fragment;
      body;
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
      static clone(request) {
        const cloned = new _HttpRequest({
          ...request,
          headers: { ...request.headers }
        });
        if (cloned.query) {
          cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
      }
      static isInstance(request) {
        if (!request) {
          return false;
        }
        const req = request;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      clone() {
        return _HttpRequest.clone(this);
      }
    };
    function cloneQuery(query) {
      return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
          ...carry,
          [paramName]: Array.isArray(param) ? [...param] : param
        };
      }, {});
    }
    var HttpResponse = class {
      statusCode;
      reason;
      headers;
      body;
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
    function isValidHostname(hostname) {
      const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
      return hostPattern.test(hostname);
    }
    exports.Field = Field;
    exports.Fields = Fields;
    exports.HttpRequest = HttpRequest;
    exports.HttpResponse = HttpResponse;
    exports.getHttpHandlerExtensionConfiguration = getHttpHandlerExtensionConfiguration;
    exports.isValidHostname = isValidHostname;
    exports.resolveHttpHandlerRuntimeConfig = resolveHttpHandlerRuntimeConfig;
  }
});

export {
  require_dist_cjs2 as require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrcHJvdG9jb2wtaHR0cEA1LjMuMTIvbm9kZV9tb2R1bGVzL0BzbWl0aHkvcHJvdG9jb2wtaHR0cC9kaXN0LWNqcy9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHlwZXMgPSByZXF1aXJlKCdAc21pdGh5L3R5cGVzJyk7XG5cbmNvbnN0IGdldEh0dHBIYW5kbGVyRXh0ZW5zaW9uQ29uZmlndXJhdGlvbiA9IChydW50aW1lQ29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0SHR0cEhhbmRsZXIoaGFuZGxlcikge1xuICAgICAgICAgICAgcnVudGltZUNvbmZpZy5odHRwSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGh0dHBIYW5kbGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bnRpbWVDb25maWcuaHR0cEhhbmRsZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUh0dHBDbGllbnRDb25maWcoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgcnVudGltZUNvbmZpZy5odHRwSGFuZGxlcj8udXBkYXRlSHR0cENsaWVudENvbmZpZyhrZXksIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgaHR0cEhhbmRsZXJDb25maWdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bnRpbWVDb25maWcuaHR0cEhhbmRsZXIuaHR0cEhhbmRsZXJDb25maWdzKCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5jb25zdCByZXNvbHZlSHR0cEhhbmRsZXJSdW50aW1lQ29uZmlnID0gKGh0dHBIYW5kbGVyRXh0ZW5zaW9uQ29uZmlndXJhdGlvbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGh0dHBIYW5kbGVyOiBodHRwSGFuZGxlckV4dGVuc2lvbkNvbmZpZ3VyYXRpb24uaHR0cEhhbmRsZXIoKSxcbiAgICB9O1xufTtcblxuY2xhc3MgRmllbGQge1xuICAgIG5hbWU7XG4gICAga2luZDtcbiAgICB2YWx1ZXM7XG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBraW5kID0gdHlwZXMuRmllbGRQb3NpdGlvbi5IRUFERVIsIHZhbHVlcyA9IFtdIH0pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5raW5kID0ga2luZDtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgfVxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgc2V0KHZhbHVlcykge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB9XG4gICAgcmVtb3ZlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSB2YWx1ZSk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubWFwKCh2KSA9PiAodi5pbmNsdWRlcyhcIixcIikgfHwgdi5pbmNsdWRlcyhcIiBcIikgPyBgXCIke3Z9XCJgIDogdikpLmpvaW4oXCIsIFwiKTtcbiAgICB9XG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gICAgfVxufVxuXG5jbGFzcyBGaWVsZHMge1xuICAgIGVudHJpZXMgPSB7fTtcbiAgICBlbmNvZGluZztcbiAgICBjb25zdHJ1Y3Rvcih7IGZpZWxkcyA9IFtdLCBlbmNvZGluZyA9IFwidXRmLThcIiB9KSB7XG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKHRoaXMuc2V0RmllbGQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgICB9XG4gICAgc2V0RmllbGQoZmllbGQpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzW2ZpZWxkLm5hbWUudG9Mb3dlckNhc2UoKV0gPSBmaWVsZDtcbiAgICB9XG4gICAgZ2V0RmllbGQobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzW25hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgfVxuICAgIHJlbW92ZUZpZWxkKG5hbWUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIH1cbiAgICBnZXRCeVR5cGUoa2luZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmVudHJpZXMpLmZpbHRlcigoZmllbGQpID0+IGZpZWxkLmtpbmQgPT09IGtpbmQpO1xuICAgIH1cbn1cblxuY2xhc3MgSHR0cFJlcXVlc3Qge1xuICAgIG1ldGhvZDtcbiAgICBwcm90b2NvbDtcbiAgICBob3N0bmFtZTtcbiAgICBwb3J0O1xuICAgIHBhdGg7XG4gICAgcXVlcnk7XG4gICAgaGVhZGVycztcbiAgICB1c2VybmFtZTtcbiAgICBwYXNzd29yZDtcbiAgICBmcmFnbWVudDtcbiAgICBib2R5O1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCBcIkdFVFwiO1xuICAgICAgICB0aGlzLmhvc3RuYW1lID0gb3B0aW9ucy5ob3N0bmFtZSB8fCBcImxvY2FsaG9zdFwiO1xuICAgICAgICB0aGlzLnBvcnQgPSBvcHRpb25zLnBvcnQ7XG4gICAgICAgIHRoaXMucXVlcnkgPSBvcHRpb25zLnF1ZXJ5IHx8IHt9O1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICAgIHRoaXMuYm9keSA9IG9wdGlvbnMuYm9keTtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IG9wdGlvbnMucHJvdG9jb2xcbiAgICAgICAgICAgID8gb3B0aW9ucy5wcm90b2NvbC5zbGljZSgtMSkgIT09IFwiOlwiXG4gICAgICAgICAgICAgICAgPyBgJHtvcHRpb25zLnByb3RvY29sfTpgXG4gICAgICAgICAgICAgICAgOiBvcHRpb25zLnByb3RvY29sXG4gICAgICAgICAgICA6IFwiaHR0cHM6XCI7XG4gICAgICAgIHRoaXMucGF0aCA9IG9wdGlvbnMucGF0aCA/IChvcHRpb25zLnBhdGguY2hhckF0KDApICE9PSBcIi9cIiA/IGAvJHtvcHRpb25zLnBhdGh9YCA6IG9wdGlvbnMucGF0aCkgOiBcIi9cIjtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IG9wdGlvbnMudXNlcm5hbWU7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBvcHRpb25zLnBhc3N3b3JkO1xuICAgICAgICB0aGlzLmZyYWdtZW50ID0gb3B0aW9ucy5mcmFnbWVudDtcbiAgICB9XG4gICAgc3RhdGljIGNsb25lKHJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgY2xvbmVkID0gbmV3IEh0dHBSZXF1ZXN0KHtcbiAgICAgICAgICAgIC4uLnJlcXVlc3QsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IC4uLnJlcXVlc3QuaGVhZGVycyB9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNsb25lZC5xdWVyeSkge1xuICAgICAgICAgICAgY2xvbmVkLnF1ZXJ5ID0gY2xvbmVRdWVyeShjbG9uZWQucXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBpc0luc3RhbmNlKHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVxID0gcmVxdWVzdDtcbiAgICAgICAgcmV0dXJuIChcIm1ldGhvZFwiIGluIHJlcSAmJlxuICAgICAgICAgICAgXCJwcm90b2NvbFwiIGluIHJlcSAmJlxuICAgICAgICAgICAgXCJob3N0bmFtZVwiIGluIHJlcSAmJlxuICAgICAgICAgICAgXCJwYXRoXCIgaW4gcmVxICYmXG4gICAgICAgICAgICB0eXBlb2YgcmVxW1wicXVlcnlcIl0gPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiByZXFbXCJoZWFkZXJzXCJdID09PSBcIm9iamVjdFwiKTtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBIdHRwUmVxdWVzdC5jbG9uZSh0aGlzKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbG9uZVF1ZXJ5KHF1ZXJ5KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHF1ZXJ5KS5yZWR1Y2UoKGNhcnJ5LCBwYXJhbU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW0gPSBxdWVyeVtwYXJhbU5hbWVdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY2FycnksXG4gICAgICAgICAgICBbcGFyYW1OYW1lXTogQXJyYXkuaXNBcnJheShwYXJhbSkgPyBbLi4ucGFyYW1dIDogcGFyYW0sXG4gICAgICAgIH07XG4gICAgfSwge30pO1xufVxuXG5jbGFzcyBIdHRwUmVzcG9uc2Uge1xuICAgIHN0YXR1c0NvZGU7XG4gICAgcmVhc29uO1xuICAgIGhlYWRlcnM7XG4gICAgYm9keTtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IG9wdGlvbnMuc3RhdHVzQ29kZTtcbiAgICAgICAgdGhpcy5yZWFzb24gPSBvcHRpb25zLnJlYXNvbjtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICB0aGlzLmJvZHkgPSBvcHRpb25zLmJvZHk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0luc3RhbmNlKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHJlc3AgPSByZXNwb25zZTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiByZXNwLnN0YXR1c0NvZGUgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHJlc3AuaGVhZGVycyA9PT0gXCJvYmplY3RcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRIb3N0bmFtZShob3N0bmFtZSkge1xuICAgIGNvbnN0IGhvc3RQYXR0ZXJuID0gL15bYS16MC05XVthLXowLTlcXC5cXC1dKlthLXowLTldJC87XG4gICAgcmV0dXJuIGhvc3RQYXR0ZXJuLnRlc3QoaG9zdG5hbWUpO1xufVxuXG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLkZpZWxkcyA9IEZpZWxkcztcbmV4cG9ydHMuSHR0cFJlcXVlc3QgPSBIdHRwUmVxdWVzdDtcbmV4cG9ydHMuSHR0cFJlc3BvbnNlID0gSHR0cFJlc3BvbnNlO1xuZXhwb3J0cy5nZXRIdHRwSGFuZGxlckV4dGVuc2lvbkNvbmZpZ3VyYXRpb24gPSBnZXRIdHRwSGFuZGxlckV4dGVuc2lvbkNvbmZpZ3VyYXRpb247XG5leHBvcnRzLmlzVmFsaWRIb3N0bmFtZSA9IGlzVmFsaWRIb3N0bmFtZTtcbmV4cG9ydHMucmVzb2x2ZUh0dHBIYW5kbGVyUnVudGltZUNvbmZpZyA9IHJlc29sdmVIdHRwSGFuZGxlclJ1bnRpbWVDb25maWc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUE7QUFBQTtBQUVBLFFBQUksUUFBUTtBQUVaLFFBQU0sdUNBQXVDLENBQUMsa0JBQWtCO0FBQzVELGFBQU87QUFBQSxRQUNILGVBQWUsU0FBUztBQUNwQix3QkFBYyxjQUFjO0FBQUEsUUFDaEM7QUFBQSxRQUNBLGNBQWM7QUFDVixpQkFBTyxjQUFjO0FBQUEsUUFDekI7QUFBQSxRQUNBLHVCQUF1QixLQUFLLE9BQU87QUFDL0Isd0JBQWMsYUFBYSx1QkFBdUIsS0FBSyxLQUFLO0FBQUEsUUFDaEU7QUFBQSxRQUNBLHFCQUFxQjtBQUNqQixpQkFBTyxjQUFjLFlBQVksbUJBQW1CO0FBQUEsUUFDeEQ7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUNBLFFBQU0sa0NBQWtDLENBQUMsc0NBQXNDO0FBQzNFLGFBQU87QUFB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MUM7QUFDQSxlQUFPO0FBQUEsTUFDWDtBQUFBLE1BQ0EsT0FBTyxXQUFXLFNBQVM7QUFDdkIsWUFBSSxDQUFDLFNBQVM7QUFDVixpQkFBTztBQUFBLFFBQ1g7QUFDQSxjQUFNLE1BQU07QUFDWixlQUFRLFlBQVksT0FDaEIsY0FBYyxPQUNkLGNBQWMsT0FDZCxVQUFVLE9BQ1YsT0FBTyxJQUFJLE9BQU8sTUFBTSxZQUN4QixPQUFPLElBQUksU0FBUyxNQUFNO0FBQUEsTUFDbEM7QUFBQSxNQUNBLFFBQVE7QUFDSixlQUFPLGFBQVksTUFBTSxJQUFJO0FBQUEsTUFDakM7QUFBQSxJQUNKO0FBQ0EsYUFBUyxXQUFXLE9BQU87QUFDdkIsYUFBTyxPQUFPLEtBQUssS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLGNBQWM7QUFDbkQsY0FBTSxRQUFRLE1BQU0sU0FBUztBQUM3QixlQUFPO0FBQUEsVUFDSCxHQUFHO0FBQUEsVUFDSCxDQUFDLFNBQVMsR0FBRyxNQUFNLFFBQVEsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUk7QUFBQSxRQUNyRDtBQUFBLE1BQ0osR0FBRyxDQUFDLENBQUM7QUFBQSxJQUNUO0FBRUEsUUFBTSxlQUFOLE1BQW1CO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsWUFBWSxTQUFTO0FBQ2pCLGFBQUssYUFBYSxRQUFRO0FBQzFCLGFBQUssU0FBUyxRQUFRO0FBQ3RCLGFBQUssVUFBVSxRQUFRLFdBQVcsQ0FBQztBQUNuQyxhQUFLLE9BQU8sUUFBUTtBQUFBLE1BQ3hCO0FBQUEsTUFDQSxPQUFPLFdBQVcsVUFBVTtBQUN4QixZQUFJLENBQUM7QUFDRCxpQkFBTztBQUNYLGNBQU0sT0FBTztBQUNiLGVBQU8sT0FBTyxLQUFLLGVBQWUsWUFBWSxPQUFPLEtBQUssWUFBWTtBQUFBLE1BQzFFO0FBQUEsSUFDSjtBQUVBLGFBQVMsZ0JBQWdCLFVBQVU7QUFDL0IsWUFBTSxjQUFjO0FBQ3BCLGFBQU8sWUFBWSxLQUFLLFFBQVE7QUFBQSxJQUNwQztBQUVBLFlBQVEsUUFBUTtBQUNoQixZQUFRLFNBQVM7QUFDakIsWUFBUSxjQUFjO0FBQ3RCLFlBQVEsZUFBZTtBQUN2QixZQUFRLHVDQUF1QztBQUMvQyxZQUFRLGtCQUFrQjtBQUMxQixZQUFRLGtDQUFrQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfZGlzdF9janMiXQp9Cg==
