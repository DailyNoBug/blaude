#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm,
  __export
} from "./chunk-O5PZ3G6I.mjs";

// scripts/shims/opentelemetry-semantic-conventions.mjs
var opentelemetry_semantic_conventions_exports = {};
__export(opentelemetry_semantic_conventions_exports, {
  ATTR_SERVICE_NAME: () => ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION: () => ATTR_SERVICE_VERSION,
  SEMRESATTRS_HOST_ARCH: () => SEMRESATTRS_HOST_ARCH,
  default: () => opentelemetry_semantic_conventions_default
});
import { createRequire } from "module";
var require2, semantic, ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION, SEMRESATTRS_HOST_ARCH, opentelemetry_semantic_conventions_default;
var init_opentelemetry_semantic_conventions = __esm({
  "scripts/shims/opentelemetry-semantic-conventions.mjs"() {
    require2 = createRequire(import.meta.url);
    semantic = require2("@opentelemetry/semantic-conventions");
    ATTR_SERVICE_NAME = semantic.ATTR_SERVICE_NAME ?? "service.name";
    ATTR_SERVICE_VERSION = semantic.ATTR_SERVICE_VERSION ?? "service.version";
    SEMRESATTRS_HOST_ARCH = semantic.SEMRESATTRS_HOST_ARCH ?? "host.arch";
    opentelemetry_semantic_conventions_default = semantic;
  }
});

export {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
  SEMRESATTRS_HOST_ARCH,
  opentelemetry_semantic_conventions_exports,
  init_opentelemetry_semantic_conventions
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2NyaXB0cy9zaGltcy9vcGVudGVsZW1ldHJ5LXNlbWFudGljLWNvbnZlbnRpb25zLm1qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gXCJtb2R1bGVcIjtcblxuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKTtcbmNvbnN0IHNlbWFudGljID0gcmVxdWlyZShcIkBvcGVudGVsZW1ldHJ5L3NlbWFudGljLWNvbnZlbnRpb25zXCIpO1xuXG5leHBvcnQgY29uc3QgQVRUUl9TRVJWSUNFX05BTUUgPSBzZW1hbnRpYy5BVFRSX1NFUlZJQ0VfTkFNRSA/PyBcInNlcnZpY2UubmFtZVwiO1xuZXhwb3J0IGNvbnN0IEFUVFJfU0VSVklDRV9WRVJTSU9OID1cbiAgc2VtYW50aWMuQVRUUl9TRVJWSUNFX1ZFUlNJT04gPz8gXCJzZXJ2aWNlLnZlcnNpb25cIjtcbmV4cG9ydCBjb25zdCBTRU1SRVNBVFRSU19IT1NUX0FSQ0ggPVxuICBzZW1hbnRpYy5TRU1SRVNBVFRSU19IT1NUX0FSQ0ggPz8gXCJob3N0LmFyY2hcIjtcbmV4cG9ydCBkZWZhdWx0IHNlbWFudGljO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTLHFCQUFxQjtBQUE5QixJQUVNQSxVQUNBLFVBRU8sbUJBQ0Esc0JBRUEsdUJBRU47QUFWUDtBQUFBO0FBRUEsSUFBTUEsV0FBVSxjQUFjLFlBQVksR0FBRztBQUM3QyxJQUFNLFdBQVdBLFNBQVEscUNBQXFDO0FBRXZELElBQU0sb0JBQW9CLFNBQVMscUJBQXFCO0FBQ3hELElBQU0sdUJBQ1gsU0FBUyx3QkFBd0I7QUFDNUIsSUFBTSx3QkFDWCxTQUFTLHlCQUF5QjtBQUNwQyxJQUFPLDZDQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsicmVxdWlyZSJdCn0K
