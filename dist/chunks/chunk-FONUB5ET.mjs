#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __commonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@smithy+querystring-parser@4.2.12/node_modules/@smithy/querystring-parser/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "node_modules/.pnpm/@smithy+querystring-parser@4.2.12/node_modules/@smithy/querystring-parser/dist-cjs/index.js"(exports) {
    "use strict";
    function parseQueryString(querystring) {
      const query = {};
      querystring = querystring.replace(/^\?/, "");
      if (querystring) {
        for (const pair of querystring.split("&")) {
          let [key, value = null] = pair.split("=");
          key = decodeURIComponent(key);
          if (value) {
            value = decodeURIComponent(value);
          }
          if (!(key in query)) {
            query[key] = value;
          } else if (Array.isArray(query[key])) {
            query[key].push(value);
          } else {
            query[key] = [query[key], value];
          }
        }
      }
      return query;
    }
    exports.parseQueryString = parseQueryString;
  }
});

// node_modules/.pnpm/@smithy+url-parser@4.2.12/node_modules/@smithy/url-parser/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "node_modules/.pnpm/@smithy+url-parser@4.2.12/node_modules/@smithy/url-parser/dist-cjs/index.js"(exports) {
    "use strict";
    var querystringParser = require_dist_cjs();
    var parseUrl = (url) => {
      if (typeof url === "string") {
        return parseUrl(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = querystringParser.parseQueryString(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query
      };
    };
    exports.parseUrl = parseUrl;
  }
});

export {
  require_dist_cjs2 as require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrcXVlcnlzdHJpbmctcGFyc2VyQDQuMi4xMi9ub2RlX21vZHVsZXMvQHNtaXRoeS9xdWVyeXN0cmluZy1wYXJzZXIvZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXJsLXBhcnNlckA0LjIuMTIvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXJsLXBhcnNlci9kaXN0LWNqcy9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKHF1ZXJ5c3RyaW5nKSB7XG4gICAgY29uc3QgcXVlcnkgPSB7fTtcbiAgICBxdWVyeXN0cmluZyA9IHF1ZXJ5c3RyaW5nLnJlcGxhY2UoL15cXD8vLCBcIlwiKTtcbiAgICBpZiAocXVlcnlzdHJpbmcpIHtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHF1ZXJ5c3RyaW5nLnNwbGl0KFwiJlwiKSkge1xuICAgICAgICAgICAgbGV0IFtrZXksIHZhbHVlID0gbnVsbF0gPSBwYWlyLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgICAgIGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChrZXkpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEoa2V5IGluIHF1ZXJ5KSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBxdWVyeVtrZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnRzLnBhcnNlUXVlcnlTdHJpbmcgPSBwYXJzZVF1ZXJ5U3RyaW5nO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHF1ZXJ5c3RyaW5nUGFyc2VyID0gcmVxdWlyZSgnQHNtaXRoeS9xdWVyeXN0cmluZy1wYXJzZXInKTtcblxuY29uc3QgcGFyc2VVcmwgPSAodXJsKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlVXJsKG5ldyBVUkwodXJsKSk7XG4gICAgfVxuICAgIGNvbnN0IHsgaG9zdG5hbWUsIHBhdGhuYW1lLCBwb3J0LCBwcm90b2NvbCwgc2VhcmNoIH0gPSB1cmw7XG4gICAgbGV0IHF1ZXJ5O1xuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgcXVlcnkgPSBxdWVyeXN0cmluZ1BhcnNlci5wYXJzZVF1ZXJ5U3RyaW5nKHNlYXJjaCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGhvc3RuYW1lLFxuICAgICAgICBwb3J0OiBwb3J0ID8gcGFyc2VJbnQocG9ydCkgOiB1bmRlZmluZWQsXG4gICAgICAgIHByb3RvY29sLFxuICAgICAgICBwYXRoOiBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgfTtcbn07XG5cbmV4cG9ydHMucGFyc2VVcmwgPSBwYXJzZVVybDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUEsYUFBUyxpQkFBaUIsYUFBYTtBQUNuQyxZQUFNLFFBQVEsQ0FBQztBQUNmLG9CQUFjLFlBQVksUUFBUSxPQUFPLEVBQUU7QUFDM0MsVUFBSSxhQUFhO0FBQ2IsbUJBQVcsUUFBUSxZQUFZLE1BQU0sR0FBRyxHQUFHO0FBQ3ZDLGNBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxJQUFJLEtBQUssTUFBTSxHQUFHO0FBQ3hDLGdCQUFNLG1CQUFtQixHQUFHO0FBQzVCLGNBQUksT0FBTztBQUNQLG9CQUFRLG1CQUFtQixLQUFLO0FBQUEsVUFDcEM7QUFDQSxjQUFJLEVBQUUsT0FBTyxRQUFRO0FBQ2pCLGtCQUFNLEdBQUcsSUFBSTtBQUFBLFVBQ2pCLFdBQ1MsTUFBTSxRQUFRLE1BQU0sR0FBRyxDQUFDLEdBQUc7QUFDaEMsa0JBQU0sR0FBRyxFQUFFLEtBQUssS0FBSztBQUFBLFVBQ3pCLE9BQ0s7QUFDRCxrQkFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxLQUFLO0FBQUEsVUFDbkM7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUNBLGFBQU87QUFBQSxJQUNYO0FBRUEsWUFBUSxtQkFBbUI7QUFBQTtBQUFBOzs7QUMxQjNCLElBQUFBLG9CQUFBO0FBQUE7QUFBQTtBQUVBLFFBQUksb0JBQW9CO0FBRXhCLFFBQU0sV0FBVyxDQUFDLFFBQVE7QUFDdEIsVUFBSSxPQUFPLFFBQVEsVUFBVTtBQUN6QixlQUFPLFNBQVMsSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUFBLE1BQ2hDO0FBQ0EsWUFBTSxFQUFFLFVBQVUsVUFBVSxNQUFNLFVBQVUsT0FBTyxJQUFJO0FBQ3ZELFVBQUk7QUFDSixVQUFJLFFBQVE7QUFDUixnQkFBUSxrQkFBa0IsaUJBQWlCLE1BQU07QUFBQSxNQUNyRDtBQUNBLGFBQU87QUFBQSxRQUNIO0FBQUEsUUFDQSxNQUFNLE9BQU8sU0FBUyxJQUFJLElBQUk7QUFBQSxRQUM5QjtBQUFBLFFBQ0EsTUFBTTtBQUFBLFFBQ047QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUVBLFlBQVEsV0FBVztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfZGlzdF9janMiXQp9Cg==
