#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// scripts/shims/bun-bundle.mjs
function feature(name) {
  return enabled.has(String(name));
}
var enabled;
var init_bun_bundle = __esm({
  "scripts/shims/bun-bundle.mjs"() {
    enabled = new Set(
      String(process.env.BLAUDE_SRC_FEATURES || "").split(",").map((item) => item.trim()).filter(Boolean)
    );
  }
});

export {
  feature,
  init_bun_bundle
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2NyaXB0cy9zaGltcy9idW4tYnVuZGxlLm1qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgZW5hYmxlZCA9IG5ldyBTZXQoXG4gIFN0cmluZyhwcm9jZXNzLmVudi5CTEFVREVfU1JDX0ZFQVRVUkVTIHx8IFwiXCIpXG4gICAgLnNwbGl0KFwiLFwiKVxuICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0udHJpbSgpKVxuICAgIC5maWx0ZXIoQm9vbGVhbiksXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gZmVhdHVyZShuYW1lKSB7XG4gIHJldHVybiBlbmFibGVkLmhhcyhTdHJpbmcobmFtZSkpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFPTyxTQUFTLFFBQVEsTUFBTTtBQUM1QixTQUFPLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNqQztBQVRBLElBQU07QUFBTjtBQUFBO0FBQUEsSUFBTSxVQUFVLElBQUk7QUFBQSxNQUNsQixPQUFPLFFBQVEsSUFBSSx1QkFBdUIsRUFBRSxFQUN6QyxNQUFNLEdBQUcsRUFDVCxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUN6QixPQUFPLE9BQU87QUFBQSxJQUNuQjtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
