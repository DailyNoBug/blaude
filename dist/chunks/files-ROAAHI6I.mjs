#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  cacheKeys,
  init_fileStateCache
} from "./chunk-GYT5IJSH.mjs";
import "./chunk-4S33EKPF.mjs";
import {
  getCwd,
  init_cwd
} from "./chunk-TZFTPSMG.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/files/files.ts
import { relative } from "path";
async function call(_args, context) {
  const files = context.readFileState ? cacheKeys(context.readFileState) : [];
  if (files.length === 0) {
    return { type: "text", value: "No files in context" };
  }
  const fileList = files.map((file) => relative(getCwd(), file)).join("\n");
  return { type: "text", value: `Files in context:
${fileList}` };
}
var init_files = __esm({
  "src/commands/files/files.ts"() {
    init_cwd();
    init_fileStateCache();
  }
});
init_files();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2ZpbGVzL2ZpbGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyByZWxhdGl2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgdHlwZSB7IFRvb2xVc2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vVG9vbC5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxDb21tYW5kUmVzdWx0IH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB7IGdldEN3ZCB9IGZyb20gJy4uLy4uL3V0aWxzL2N3ZC5qcydcbmltcG9ydCB7IGNhY2hlS2V5cyB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbGVTdGF0ZUNhY2hlLmpzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgX2FyZ3M6IHN0cmluZyxcbiAgY29udGV4dDogVG9vbFVzZUNvbnRleHQsXG4pOiBQcm9taXNlPExvY2FsQ29tbWFuZFJlc3VsdD4ge1xuICBjb25zdCBmaWxlcyA9IGNvbnRleHQucmVhZEZpbGVTdGF0ZSA/IGNhY2hlS2V5cyhjb250ZXh0LnJlYWRGaWxlU3RhdGUpIDogW11cblxuICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogJ3RleHQnIGFzIGNvbnN0LCB2YWx1ZTogJ05vIGZpbGVzIGluIGNvbnRleHQnIH1cbiAgfVxuXG4gIGNvbnN0IGZpbGVMaXN0ID0gZmlsZXMubWFwKGZpbGUgPT4gcmVsYXRpdmUoZ2V0Q3dkKCksIGZpbGUpKS5qb2luKCdcXG4nKVxuICByZXR1cm4geyB0eXBlOiAndGV4dCcgYXMgY29uc3QsIHZhbHVlOiBgRmlsZXMgaW4gY29udGV4dDpcXG4ke2ZpbGVMaXN0fWAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsZ0JBQWdCO0FBTXpCLGVBQXNCLEtBQ3BCLE9BQ0EsU0FDNkI7QUFDN0IsUUFBTSxRQUFRLFFBQVEsZ0JBQWdCLFVBQVUsUUFBUSxhQUFhLElBQUksQ0FBQztBQUUxRSxNQUFJLE1BQU0sV0FBVyxHQUFHO0FBQ3RCLFdBQU8sRUFBRSxNQUFNLFFBQWlCLE9BQU8sc0JBQXNCO0FBQUEsRUFDL0Q7QUFFQSxRQUFNLFdBQVcsTUFBTSxJQUFJLFVBQVEsU0FBUyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJO0FBQ3RFLFNBQU8sRUFBRSxNQUFNLFFBQWlCLE9BQU87QUFBQSxFQUFzQixRQUFRLEdBQUc7QUFDMUU7QUFsQkE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
