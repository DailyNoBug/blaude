#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_extra_usage_core,
  runExtraUsage
} from "./chunk-YZ6EEZQQ.mjs";
import "./chunk-NSUS22JB.mjs";
import "./chunk-L774IBE2.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-L57KLZUF.mjs";
import "./chunk-NKGQGSP5.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-UIIDPH35.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-GC6TKYZ3.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-AHENZQLB.mjs";
import "./chunk-HQK4A2IB.mjs";
import "./chunk-SVUOOEVR.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-JOMSGAK7.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-OGGCTXYU.mjs";
import "./chunk-MDXHK5AD.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-N62V5C2K.mjs";
import "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/extra-usage/extra-usage-noninteractive.ts
async function call() {
  const result = await runExtraUsage();
  if (result.type === "message") {
    return { type: "text", value: result.value };
  }
  return {
    type: "text",
    value: result.opened ? `Browser opened to manage extra usage. If it didn't open, visit: ${result.url}` : `Please visit ${result.url} to manage extra usage.`
  };
}
var init_extra_usage_noninteractive = __esm({
  "src/commands/extra-usage/extra-usage-noninteractive.ts"() {
    init_extra_usage_core();
  }
});
init_extra_usage_noninteractive();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2V4dHJhLXVzYWdlL2V4dHJhLXVzYWdlLW5vbmludGVyYWN0aXZlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBydW5FeHRyYVVzYWdlIH0gZnJvbSAnLi9leHRyYS11c2FnZS1jb3JlLmpzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbCgpOiBQcm9taXNlPHsgdHlwZTogJ3RleHQnOyB2YWx1ZTogc3RyaW5nIH0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcnVuRXh0cmFVc2FnZSgpXG5cbiAgaWYgKHJlc3VsdC50eXBlID09PSAnbWVzc2FnZScpIHtcbiAgICByZXR1cm4geyB0eXBlOiAndGV4dCcsIHZhbHVlOiByZXN1bHQudmFsdWUgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWU6IHJlc3VsdC5vcGVuZWRcbiAgICAgID8gYEJyb3dzZXIgb3BlbmVkIHRvIG1hbmFnZSBleHRyYSB1c2FnZS4gSWYgaXQgZGlkbid0IG9wZW4sIHZpc2l0OiAke3Jlc3VsdC51cmx9YFxuICAgICAgOiBgUGxlYXNlIHZpc2l0ICR7cmVzdWx0LnVybH0gdG8gbWFuYWdlIGV4dHJhIHVzYWdlLmAsXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxlQUFzQixPQUFpRDtBQUNyRSxRQUFNLFNBQVMsTUFBTSxjQUFjO0FBRW5DLE1BQUksT0FBTyxTQUFTLFdBQVc7QUFDN0IsV0FBTyxFQUFFLE1BQU0sUUFBUSxPQUFPLE9BQU8sTUFBTTtBQUFBLEVBQzdDO0FBRUEsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTyxPQUFPLFNBQ1YsbUVBQW1FLE9BQU8sR0FBRyxLQUM3RSxnQkFBZ0IsT0FBTyxHQUFHO0FBQUEsRUFDaEM7QUFDRjtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
