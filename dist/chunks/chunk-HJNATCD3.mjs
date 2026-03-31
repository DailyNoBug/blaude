#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __commonJS,
  __require
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@smithy+is-array-buffer@4.2.2/node_modules/@smithy/is-array-buffer/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "node_modules/.pnpm/@smithy+is-array-buffer@4.2.2/node_modules/@smithy/is-array-buffer/dist-cjs/index.js"(exports) {
    "use strict";
    var isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
    exports.isArrayBuffer = isArrayBuffer;
  }
});

// node_modules/.pnpm/@smithy+util-buffer-from@4.2.2/node_modules/@smithy/util-buffer-from/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "node_modules/.pnpm/@smithy+util-buffer-from@4.2.2/node_modules/@smithy/util-buffer-from/dist-cjs/index.js"(exports) {
    "use strict";
    var isArrayBuffer = require_dist_cjs();
    var buffer = __require("buffer");
    var fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
      if (!isArrayBuffer.isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return buffer.Buffer.from(input, offset, length);
    };
    var fromString = (input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? buffer.Buffer.from(input, encoding) : buffer.Buffer.from(input);
    };
    exports.fromArrayBuffer = fromArrayBuffer;
    exports.fromString = fromString;
  }
});

// node_modules/.pnpm/@smithy+util-utf8@4.2.2/node_modules/@smithy/util-utf8/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "node_modules/.pnpm/@smithy+util-utf8@4.2.2/node_modules/@smithy/util-utf8/dist-cjs/index.js"(exports) {
    "use strict";
    var utilBufferFrom = require_dist_cjs2();
    var fromUtf8 = (input) => {
      const buf = utilBufferFrom.fromString(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    };
    var toUint8Array = (data) => {
      if (typeof data === "string") {
        return fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    };
    var toUtf8 = (input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return utilBufferFrom.fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
    };
    exports.fromUtf8 = fromUtf8;
    exports.toUint8Array = toUint8Array;
    exports.toUtf8 = toUtf8;
  }
});

export {
  require_dist_cjs,
  require_dist_cjs2,
  require_dist_cjs3
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkraXMtYXJyYXktYnVmZmVyQDQuMi4yL25vZGVfbW9kdWxlcy9Ac21pdGh5L2lzLWFycmF5LWJ1ZmZlci9kaXN0LWNqcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLWJ1ZmZlci1mcm9tQDQuMi4yL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtYnVmZmVyLWZyb20vZGlzdC1janMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC11dGY4QDQuMi4yL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtdXRmOC9kaXN0LWNqcy9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpc0FycmF5QnVmZmVyID0gKGFyZykgPT4gKHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiICYmIGFyZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fFxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSBcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI7XG5cbmV4cG9ydHMuaXNBcnJheUJ1ZmZlciA9IGlzQXJyYXlCdWZmZXI7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJ0BzbWl0aHkvaXMtYXJyYXktYnVmZmVyJyk7XG52YXIgYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJyk7XG5cbmNvbnN0IGZyb21BcnJheUJ1ZmZlciA9IChpbnB1dCwgb2Zmc2V0ID0gMCwgbGVuZ3RoID0gaW5wdXQuYnl0ZUxlbmd0aCAtIG9mZnNldCkgPT4ge1xuICAgIGlmICghaXNBcnJheUJ1ZmZlci5pc0FycmF5QnVmZmVyKGlucHV0KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXCJpbnB1dFwiIGFyZ3VtZW50IG11c3QgYmUgQXJyYXlCdWZmZXIuIFJlY2VpdmVkIHR5cGUgJHt0eXBlb2YgaW5wdXR9ICgke2lucHV0fSlgKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlci5CdWZmZXIuZnJvbShpbnB1dCwgb2Zmc2V0LCBsZW5ndGgpO1xufTtcbmNvbnN0IGZyb21TdHJpbmcgPSAoaW5wdXQsIGVuY29kaW5nKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXCJpbnB1dFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBzdHJpbmcuIFJlY2VpdmVkIHR5cGUgJHt0eXBlb2YgaW5wdXR9ICgke2lucHV0fSlgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kaW5nID8gYnVmZmVyLkJ1ZmZlci5mcm9tKGlucHV0LCBlbmNvZGluZykgOiBidWZmZXIuQnVmZmVyLmZyb20oaW5wdXQpO1xufTtcblxuZXhwb3J0cy5mcm9tQXJyYXlCdWZmZXIgPSBmcm9tQXJyYXlCdWZmZXI7XG5leHBvcnRzLmZyb21TdHJpbmcgPSBmcm9tU3RyaW5nO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxCdWZmZXJGcm9tID0gcmVxdWlyZSgnQHNtaXRoeS91dGlsLWJ1ZmZlci1mcm9tJyk7XG5cbmNvbnN0IGZyb21VdGY4ID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3QgYnVmID0gdXRpbEJ1ZmZlckZyb20uZnJvbVN0cmluZyhpbnB1dCwgXCJ1dGY4XCIpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbn07XG5cbmNvbnN0IHRvVWludDhBcnJheSA9IChkYXRhKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBmcm9tVXRmOChkYXRhKTtcbiAgICB9XG4gICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKTtcbn07XG5cbmNvbnN0IHRvVXRmOCA9IChpbnB1dCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBpbnB1dC5ieXRlT2Zmc2V0ICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBpbnB1dC5ieXRlTGVuZ3RoICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkBzbWl0aHkvdXRpbC11dGY4OiB0b1V0ZjggZW5jb2RlciBmdW5jdGlvbiBvbmx5IGFjY2VwdHMgc3RyaW5nIHwgVWludDhBcnJheS5cIik7XG4gICAgfVxuICAgIHJldHVybiB1dGlsQnVmZmVyRnJvbS5mcm9tQXJyYXlCdWZmZXIoaW5wdXQuYnVmZmVyLCBpbnB1dC5ieXRlT2Zmc2V0LCBpbnB1dC5ieXRlTGVuZ3RoKS50b1N0cmluZyhcInV0ZjhcIik7XG59O1xuXG5leHBvcnRzLmZyb21VdGY4ID0gZnJvbVV0Zjg7XG5leHBvcnRzLnRvVWludDhBcnJheSA9IHRvVWludDhBcnJheTtcbmV4cG9ydHMudG9VdGY4ID0gdG9VdGY4O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUEsUUFBTSxnQkFBZ0IsQ0FBQyxRQUFTLE9BQU8sZ0JBQWdCLGNBQWMsZUFBZSxlQUNoRixPQUFPLFVBQVUsU0FBUyxLQUFLLEdBQUcsTUFBTTtBQUU1QyxZQUFRLGdCQUFnQjtBQUFBO0FBQUE7OztBQ0x4QixJQUFBQSxvQkFBQTtBQUFBO0FBQUE7QUFFQSxRQUFJLGdCQUFnQjtBQUNwQixRQUFJLFNBQVMsVUFBUSxRQUFRO0FBRTdCLFFBQU0sa0JBQWtCLENBQUMsT0FBTyxTQUFTLEdBQUcsU0FBUyxNQUFNLGFBQWEsV0FBVztBQUMvRSxVQUFJLENBQUMsY0FBYyxjQUFjLEtBQUssR0FBRztBQUNyQyxjQUFNLElBQUksVUFBVSwyREFBMkQsT0FBTyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBQUEsTUFDNUc7QUFDQSxhQUFPLE9BQU8sT0FBTyxLQUFLLE9BQU8sUUFBUSxNQUFNO0FBQUEsSUFDbkQ7QUFDQSxRQUFNLGFBQWEsQ0FBQyxPQUFPLGFBQWE7QUFDcEMsVUFBSSxPQUFPLFVBQVUsVUFBVTtBQUMzQixjQUFNLElBQUksVUFBVSw4REFBOEQsT0FBTyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBQUEsTUFDL0c7QUFDQSxhQUFPLFdBQVcsT0FBTyxPQUFPLEtBQUssT0FBTyxRQUFRLElBQUksT0FBTyxPQUFPLEtBQUssS0FBSztBQUFBLElBQ3BGO0FBRUEsWUFBUSxrQkFBa0I7QUFDMUIsWUFBUSxhQUFhO0FBQUE7QUFBQTs7O0FDbkJyQixJQUFBQyxvQkFBQTtBQUFBO0FBQUE7QUFFQSxRQUFJLGlCQUFpQjtBQUVyQixRQUFNLFdBQVcsQ0FBQyxVQUFVO0FBQ3hCLFlBQU0sTUFBTSxlQUFlLFdBQVcsT0FBTyxNQUFNO0FBQ25ELGFBQU8sSUFBSSxXQUFXLElBQUksUUFBUSxJQUFJLFlBQVksSUFBSSxhQUFhLFdBQVcsaUJBQWlCO0FBQUEsSUFDbkc7QUFFQSxRQUFNLGVBQWUsQ0FBQyxTQUFTO0FBQzNCLFVBQUksT0FBTyxTQUFTLFVBQVU7QUFDMUIsZUFBTyxTQUFTLElBQUk7QUFBQSxNQUN4QjtBQUNBLFVBQUksWUFBWSxPQUFPLElBQUksR0FBRztBQUMxQixlQUFPLElBQUksV0FBVyxLQUFLLFFBQVEsS0FBSyxZQUFZLEtBQUssYUFBYSxXQUFXLGlCQUFpQjtBQUFBLE1BQ3RHO0FBQ0EsYUFBTyxJQUFJLFdBQVcsSUFBSTtBQUFBLElBQzlCO0FBRUEsUUFBTSxTQUFTLENBQUMsVUFBVTtBQUN0QixVQUFJLE9BQU8sVUFBVSxVQUFVO0FBQzNCLGVBQU87QUFBQSxNQUNYO0FBQ0EsVUFBSSxPQUFPLFVBQVUsWUFBWSxPQUFPLE1BQU0sZUFBZSxZQUFZLE9BQU8sTUFBTSxlQUFlLFVBQVU7QUFDM0csY0FBTSxJQUFJLE1BQU0sOEVBQThFO0FBQUEsTUFDbEc7QUFDQSxhQUFPLGVBQWUsZ0JBQWdCLE1BQU0sUUFBUSxNQUFNLFlBQVksTUFBTSxVQUFVLEVBQUUsU0FBUyxNQUFNO0FBQUEsSUFDM0c7QUFFQSxZQUFRLFdBQVc7QUFDbkIsWUFBUSxlQUFlO0FBQ3ZCLFlBQVEsU0FBUztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfZGlzdF9janMiLCAicmVxdWlyZV9kaXN0X2NqcyJdCn0K
