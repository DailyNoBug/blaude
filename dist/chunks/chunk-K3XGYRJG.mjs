#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ReadBuffer,
  init_stdio,
  serializeMessage
} from "./chunk-WJKMR27I.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/server/stdio.js
import process from "node:process";
var StdioServerTransport;
var init_stdio2 = __esm({
  "node_modules/.pnpm/@modelcontextprotocol+sdk@1.29.0_zod@4.3.6/node_modules/@modelcontextprotocol/sdk/dist/esm/server/stdio.js"() {
    init_stdio();
    StdioServerTransport = class {
      constructor(_stdin = process.stdin, _stdout = process.stdout) {
        this._stdin = _stdin;
        this._stdout = _stdout;
        this._readBuffer = new ReadBuffer();
        this._started = false;
        this._ondata = (chunk) => {
          this._readBuffer.append(chunk);
          this.processReadBuffer();
        };
        this._onerror = (error) => {
          this.onerror?.(error);
        };
      }
      /**
       * Starts listening for messages on stdin.
       */
      async start() {
        if (this._started) {
          throw new Error("StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.");
        }
        this._started = true;
        this._stdin.on("data", this._ondata);
        this._stdin.on("error", this._onerror);
      }
      processReadBuffer() {
        while (true) {
          try {
            const message = this._readBuffer.readMessage();
            if (message === null) {
              break;
            }
            this.onmessage?.(message);
          } catch (error) {
            this.onerror?.(error);
          }
        }
      }
      async close() {
        this._stdin.off("data", this._ondata);
        this._stdin.off("error", this._onerror);
        const remainingDataListeners = this._stdin.listenerCount("data");
        if (remainingDataListeners === 0) {
          this._stdin.pause();
        }
        this._readBuffer.clear();
        this.onclose?.();
      }
      send(message) {
        return new Promise((resolve) => {
          const json = serializeMessage(message);
          if (this._stdout.write(json)) {
            resolve();
          } else {
            this._stdout.once("drain", resolve);
          }
        });
      }
    };
  }
});

export {
  StdioServerTransport,
  init_stdio2 as init_stdio
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb2RlbGNvbnRleHRwcm90b2NvbCtzZGtAMS4yOS4wX3pvZEA0LjMuNi9ub2RlX21vZHVsZXMvQG1vZGVsY29udGV4dHByb3RvY29sL3Nkay9zcmMvc2VydmVyL3N0ZGlvLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGxdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLGFBQWE7QUFBcEIsSUFXYTtBQVhiLElBQUFBLGNBQUE7O0FBRUE7QUFTTSxJQUFPLHVCQUFQLE1BQTJCO01BSTdCLFlBQ1ksU0FBbUIsUUFBUSxPQUMzQixVQUFvQixRQUFRLFFBQU07QUFEbEMsYUFBQSxTQUFBO0FBQ0EsYUFBQSxVQUFBO0FBTEosYUFBQSxjQUEwQixJQUFJLFdBQVU7QUFDeEMsYUFBQSxXQUFXO0FBWW5CLGFBQUEsVUFBVSxDQUFDLFVBQWlCO0FBQ3hCLGVBQUssWUFBWSxPQUFPLEtBQUs7QUFDN0IsZUFBSyxrQkFBaUI7UUFDMUI7QUFDQSxhQUFBLFdBQVcsQ0FBQyxVQUFnQjtBQUN4QixlQUFLLFVBQVUsS0FBSztRQUN4QjtNQWJHOzs7O01Ba0JILE1BQU0sUUFBSztBQUNQLFlBQUksS0FBSyxVQUFVO0FBQ2YsZ0JBQU0sSUFBSSxNQUNOLCtHQUErRztRQUV2SDtBQUVBLGFBQUssV0FBVztBQUNoQixhQUFLLE9BQU8sR0FBRyxRQUFRLEtBQUssT0FBTztBQUNuQyxhQUFLLE9BQU8sR0FBRyxTQUFTLEtBQUssUUFBUTtNQUN6QztNQUVRLG9CQUFpQjtBQUNyQixlQUFPLE1BQU07QUFDVCxjQUFJO0FBQ0Esa0JBQU0sVUFBVSxLQUFLLFlBQVksWUFBVztBQUM1QyxnQkFBSSxZQUFZLE1BQU07QUFDbEI7WUFDSjtBQUVBLGlCQUFLLFlBQVksT0FBTztVQUM1QixTQUFTLE9BQU87QUFDWixpQkFBSyxVQUFVLEtBQWM7VUFDakM7UUFDSjtNQUNKO01BRUEsTUFBTSxRQUFLO0FBRVAsYUFBSyxPQUFPLElBQUksUUFBUSxLQUFLLE9BQU87QUFDcEMsYUFBSyxPQUFPLElBQUksU0FBUyxLQUFLLFFBQVE7QUFHdEMsY0FBTSx5QkFBeUIsS0FBSyxPQUFPLGNBQWMsTUFBTTtBQUMvRCxZQUFJLDJCQUEyQixHQUFHO0FBRzlCLGVBQUssT0FBTyxNQUFLO1FBQ3JCO0FBR0EsYUFBSyxZQUFZLE1BQUs7QUFDdEIsYUFBSyxVQUFTO01BQ2xCO01BRUEsS0FBSyxTQUF1QjtBQUN4QixlQUFPLElBQUksUUFBUSxhQUFVO0FBQ3pCLGdCQUFNLE9BQU8saUJBQWlCLE9BQU87QUFDckMsY0FBSSxLQUFLLFFBQVEsTUFBTSxJQUFJLEdBQUc7QUFDMUIsb0JBQU87VUFDWCxPQUFPO0FBQ0gsaUJBQUssUUFBUSxLQUFLLFNBQVMsT0FBTztVQUN0QztRQUNKLENBQUM7TUFDTDs7OzsiLAogICJuYW1lcyI6IFsiaW5pdF9zdGRpbyJdCn0K
