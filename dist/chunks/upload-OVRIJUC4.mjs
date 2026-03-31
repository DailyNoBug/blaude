#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getBridgeAccessToken,
  getBridgeBaseUrlOverride,
  init_bridgeConfig
} from "./chunk-2VYH2CHZ.mjs";
import "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
import "./chunk-DNXEQXI7.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-GC6TKYZ3.mjs";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-GHLJY6GK.mjs";
import {
  init_v4
} from "./chunk-PPND3F3V.mjs";
import {
  external_exports
} from "./chunk-BKRSSLV2.mjs";
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
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-JXCG2JDO.mjs";
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
import {
  init_debug,
  init_slowOperations,
  jsonStringify,
  logForDebugging
} from "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import {
  feature,
  init_bun_bundle
} from "./chunk-OU3SZVVB.mjs";
import "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/tools/BriefTool/upload.ts
import { randomUUID } from "crypto";
import { readFile } from "fs/promises";
import { basename, extname } from "path";
function guessMimeType(filename) {
  const ext = extname(filename).toLowerCase();
  return MIME_BY_EXT[ext] ?? "application/octet-stream";
}
function debug(msg) {
  logForDebugging(`[brief:upload] ${msg}`);
}
function getBridgeBaseUrl() {
  return getBridgeBaseUrlOverride() ?? process.env.ANTHROPIC_BASE_URL ?? getOauthConfig().BASE_API_URL;
}
async function uploadBriefAttachment(fullPath, size, ctx) {
  if (feature("BRIDGE_MODE")) {
    if (!ctx.replBridgeEnabled) return void 0;
    if (size > MAX_UPLOAD_BYTES) {
      debug(`skip ${fullPath}: ${size} bytes exceeds ${MAX_UPLOAD_BYTES} limit`);
      return void 0;
    }
    const token = getBridgeAccessToken();
    if (!token) {
      debug("skip: no oauth token");
      return void 0;
    }
    let content;
    try {
      content = await readFile(fullPath);
    } catch (e) {
      debug(`read failed for ${fullPath}: ${e}`);
      return void 0;
    }
    const baseUrl = getBridgeBaseUrl();
    const url = `${baseUrl}/api/oauth/file_upload`;
    const filename = basename(fullPath);
    const mimeType = guessMimeType(filename);
    const boundary = `----FormBoundary${randomUUID()}`;
    const body = Buffer.concat([
      Buffer.from(
        `--${boundary}\r
Content-Disposition: form-data; name="file"; filename="${filename}"\r
Content-Type: ${mimeType}\r
\r
`
      ),
      content,
      Buffer.from(`\r
--${boundary}--\r
`)
    ]);
    try {
      const response = await axios_default.post(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `multipart/form-data; boundary=${boundary}`,
          "Content-Length": body.length.toString()
        },
        timeout: UPLOAD_TIMEOUT_MS,
        signal: ctx.signal,
        validateStatus: () => true
      });
      if (response.status !== 201) {
        debug(
          `upload failed for ${fullPath}: status=${response.status} body=${jsonStringify(response.data).slice(0, 200)}`
        );
        return void 0;
      }
      const parsed = uploadResponseSchema().safeParse(response.data);
      if (!parsed.success) {
        debug(
          `unexpected response shape for ${fullPath}: ${parsed.error.message}`
        );
        return void 0;
      }
      debug(`uploaded ${fullPath} \u2192 ${parsed.data.file_uuid} (${size} bytes)`);
      return parsed.data.file_uuid;
    } catch (e) {
      debug(`upload threw for ${fullPath}: ${e}`);
      return void 0;
    }
  }
  return void 0;
}
var MAX_UPLOAD_BYTES, UPLOAD_TIMEOUT_MS, MIME_BY_EXT, uploadResponseSchema;
var init_upload = __esm({
  "src/tools/BriefTool/upload.ts"() {
    init_bun_bundle();
    init_axios();
    init_v4();
    init_bridgeConfig();
    init_oauth();
    init_debug();
    init_lazySchema();
    init_slowOperations();
    MAX_UPLOAD_BYTES = 30 * 1024 * 1024;
    UPLOAD_TIMEOUT_MS = 3e4;
    MIME_BY_EXT = {
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".gif": "image/gif",
      ".webp": "image/webp"
    };
    uploadResponseSchema = lazySchema(
      () => external_exports.object({ file_uuid: external_exports.string() })
    );
  }
});
init_upload();
export {
  uploadBriefAttachment
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3Rvb2xzL0JyaWVmVG9vbC91cGxvYWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogVXBsb2FkIEJyaWVmVG9vbCBhdHRhY2htZW50cyB0byBwcml2YXRlX2FwaSBzbyB3ZWIgdmlld2VycyBjYW4gcHJldmlldyB0aGVtLlxuICpcbiAqIFdoZW4gdGhlIHJlcGwgYnJpZGdlIGlzIGFjdGl2ZSwgYXR0YWNobWVudCBwYXRocyBhcmUgbWVhbmluZ2xlc3MgdG8gYSB3ZWJcbiAqIHZpZXdlciAodGhleSdyZSBvbiBDbGF1ZGUncyBtYWNoaW5lKS4gV2UgdXBsb2FkIHRvIC9hcGkvb2F1dGgvZmlsZV91cGxvYWQgXHUyMDE0XG4gKiB0aGUgc2FtZSBzdG9yZSBNZXNzYWdlQ29tcG9zZXIvU3BhY2VNZXNzYWdlIHJlbmRlciBmcm9tIFx1MjAxNCBhbmQgc3Rhc2ggdGhlXG4gKiByZXR1cm5lZCBmaWxlX3V1aWQgYWxvbmdzaWRlIHRoZSBwYXRoLiBXZWIgcmVzb2x2ZXMgZmlsZV91dWlkIFx1MjE5MiBwcmV2aWV3O1xuICogZGVza3RvcC9sb2NhbCB0cnkgcGF0aCBmaXJzdC5cbiAqXG4gKiBCZXN0LWVmZm9ydDogYW55IGZhaWx1cmUgKG5vIHRva2VuLCBicmlkZ2Ugb2ZmLCBuZXR3b3JrIGVycm9yLCA0eHgpIGxvZ3NcbiAqIGRlYnVnIGFuZCByZXR1cm5zIHVuZGVmaW5lZC4gVGhlIGF0dGFjaG1lbnQgc3RpbGwgY2FycmllcyB7cGF0aCwgc2l6ZSxcbiAqIGlzSW1hZ2V9LCBzbyBsb2NhbC10ZXJtaW5hbCBhbmQgc2FtZS1tYWNoaW5lLWRlc2t0b3AgcmVuZGVyIHVuYWZmZWN0ZWQuXG4gKi9cblxuaW1wb3J0IHsgZmVhdHVyZSB9IGZyb20gJ2J1bjpidW5kbGUnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGJhc2VuYW1lLCBleHRuYW1lIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IHogfSBmcm9tICd6b2QvdjQnXG5cbmltcG9ydCB7XG4gIGdldEJyaWRnZUFjY2Vzc1Rva2VuLFxuICBnZXRCcmlkZ2VCYXNlVXJsT3ZlcnJpZGUsXG59IGZyb20gJy4uLy4uL2JyaWRnZS9icmlkZ2VDb25maWcuanMnXG5pbXBvcnQgeyBnZXRPYXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9vYXV0aC5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgbGF6eVNjaGVtYSB9IGZyb20gJy4uLy4uL3V0aWxzL2xhenlTY2hlbWEuanMnXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5cbi8vIE1hdGNoZXMgdGhlIHByaXZhdGVfYXBpIGJhY2tlbmQgbGltaXRcbmNvbnN0IE1BWF9VUExPQURfQllURVMgPSAzMCAqIDEwMjQgKiAxMDI0XG5cbmNvbnN0IFVQTE9BRF9USU1FT1VUX01TID0gMzBfMDAwXG5cbi8vIEJhY2tlbmQgZGlzcGF0Y2hlcyBvbiBtaW1lOiBpbWFnZS8qIFx1MjE5MiB1cGxvYWRfaW1hZ2Vfd3JhcHBlZCAod3JpdGVzXG4vLyBQUkVWSUVXL1RIVU1CTkFJTCwgbm8gT1JJR0lOQUwpLCBldmVyeXRoaW5nIGVsc2UgXHUyMTkyIHVwbG9hZF9nZW5lcmljX2ZpbGVcbi8vIChPUklHSU5BTCBvbmx5LCBubyBwcmV2aWV3KS4gT25seSB3aGl0ZWxpc3QgcmFzdGVyIGZvcm1hdHMgdGhlXG4vLyB0cmFuc2NvZGVyIHJlbGlhYmx5IGhhbmRsZXMgXHUyMDE0IHN2Zy9ibXAvaWNvIHJpc2sgYSA0MDAsIGFuZCBwZGYgcm91dGVzXG4vLyB0byB1cGxvYWRfcGRmX2ZpbGVfd3JhcHBlZCB3aGljaCBhbHNvIHNraXBzIE9SSUdJTkFMLiBEaXNwYXRjaFxuLy8gdmlld2VycyB1c2UgL3ByZXZpZXcgZm9yIGltYWdlcyBhbmQgL2NvbnRlbnRzIGZvciBldmVyeXRoaW5nIGVsc2UsXG4vLyBzbyBpbWFnZXMgZ28gaW1hZ2UvKiBhbmQgdGhlIHJlc3QgZ28gb2N0ZXQtc3RyZWFtLlxuY29uc3QgTUlNRV9CWV9FWFQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICcucG5nJzogJ2ltYWdlL3BuZycsXG4gICcuanBnJzogJ2ltYWdlL2pwZWcnLFxuICAnLmpwZWcnOiAnaW1hZ2UvanBlZycsXG4gICcuZ2lmJzogJ2ltYWdlL2dpZicsXG4gICcud2VicCc6ICdpbWFnZS93ZWJwJyxcbn1cblxuZnVuY3Rpb24gZ3Vlc3NNaW1lVHlwZShmaWxlbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZXh0ID0gZXh0bmFtZShmaWxlbmFtZSkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gTUlNRV9CWV9FWFRbZXh0XSA/PyAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ1xufVxuXG5mdW5jdGlvbiBkZWJ1Zyhtc2c6IHN0cmluZyk6IHZvaWQge1xuICBsb2dGb3JEZWJ1Z2dpbmcoYFticmllZjp1cGxvYWRdICR7bXNnfWApXG59XG5cbi8qKlxuICogQmFzZSBVUkwgZm9yIHVwbG9hZHMuIE11c3QgbWF0Y2ggdGhlIGhvc3QgdGhlIHRva2VuIGlzIHZhbGlkIGZvci5cbiAqXG4gKiBTdWJwcm9jZXNzIGhvc3RzIChjb3dvcmspIHBhc3MgQU5USFJPUElDX0JBU0VfVVJMIGFsb25nc2lkZVxuICogQ0xBVURFX0NPREVfT0FVVEhfVE9LRU4gXHUyMDE0IHByZWZlciB0aGF0IHNpbmNlIGdldE9hdXRoQ29uZmlnKCkgb25seVxuICogcmV0dXJucyBzdGFnaW5nIHdoZW4gVVNFX1NUQUdJTkdfT0FVVEggaXMgc2V0LCB3aGljaCBzdWNoIGhvc3RzIGRvbid0XG4gKiBzZXQuIFdpdGhvdXQgdGhpcyBhIHN0YWdpbmcgdG9rZW4gaGl0cyBhcGkuYW50aHJvcGljLmNvbSBcdTIxOTIgNDAxIFx1MjE5MiBzaWxlbnRcbiAqIHNraXAgXHUyMTkyIHdlYiB2aWV3ZXIgc2VlcyBpbmVydCBjYXJkcyB3aXRoIG5vIGZpbGVfdXVpZC5cbiAqL1xuZnVuY3Rpb24gZ2V0QnJpZGdlQmFzZVVybCgpOiBzdHJpbmcge1xuICByZXR1cm4gKFxuICAgIGdldEJyaWRnZUJhc2VVcmxPdmVycmlkZSgpID8/XG4gICAgcHJvY2Vzcy5lbnYuQU5USFJPUElDX0JBU0VfVVJMID8/XG4gICAgZ2V0T2F1dGhDb25maWcoKS5CQVNFX0FQSV9VUkxcbiAgKVxufVxuXG4vLyAvYXBpL29hdXRoL2ZpbGVfdXBsb2FkIHJldHVybnMgb25lIG9mIENoYXRNZXNzYWdle0ltYWdlLEJsb2IsRG9jdW1lbnR9RmlsZVNjaGVtYS5cbi8vIEFsbCBzaGFyZSBmaWxlX3V1aWQ7IHRoYXQncyB0aGUgb25seSBmaWVsZCB3ZSBuZWVkLlxuY29uc3QgdXBsb2FkUmVzcG9uc2VTY2hlbWEgPSBsYXp5U2NoZW1hKCgpID0+XG4gIHoub2JqZWN0KHsgZmlsZV91dWlkOiB6LnN0cmluZygpIH0pLFxuKVxuXG5leHBvcnQgdHlwZSBCcmllZlVwbG9hZENvbnRleHQgPSB7XG4gIHJlcGxCcmlkZ2VFbmFibGVkOiBib29sZWFuXG4gIHNpZ25hbD86IEFib3J0U2lnbmFsXG59XG5cbi8qKlxuICogVXBsb2FkIGEgc2luZ2xlIGF0dGFjaG1lbnQuIFJldHVybnMgZmlsZV91dWlkIG9uIHN1Y2Nlc3MsIHVuZGVmaW5lZCBvdGhlcndpc2UuXG4gKiBFdmVyeSBlYXJseS1yZXR1cm4gaXMgaW50ZW50aW9uYWwgZ3JhY2VmdWwgZGVncmFkYXRpb24uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRCcmllZkF0dGFjaG1lbnQoXG4gIGZ1bGxQYXRoOiBzdHJpbmcsXG4gIHNpemU6IG51bWJlcixcbiAgY3R4OiBCcmllZlVwbG9hZENvbnRleHQsXG4pOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICAvLyBQb3NpdGl2ZSBwYXR0ZXJuIHNvIGJ1bjpidW5kbGUgZWxpbWluYXRlcyB0aGUgZW50aXJlIGJvZHkgZnJvbVxuICAvLyBub24tQlJJREdFX01PREUgYnVpbGRzIChuZWdhdGl2ZSBgaWYgKCFmZWF0dXJlKC4uLikpIHJldHVybmAgZG9lcyBub3QpLlxuICBpZiAoZmVhdHVyZSgnQlJJREdFX01PREUnKSkge1xuICAgIGlmICghY3R4LnJlcGxCcmlkZ2VFbmFibGVkKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICBpZiAoc2l6ZSA+IE1BWF9VUExPQURfQllURVMpIHtcbiAgICAgIGRlYnVnKGBza2lwICR7ZnVsbFBhdGh9OiAke3NpemV9IGJ5dGVzIGV4Y2VlZHMgJHtNQVhfVVBMT0FEX0JZVEVTfSBsaW1pdGApXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSBnZXRCcmlkZ2VBY2Nlc3NUb2tlbigpXG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgZGVidWcoJ3NraXA6IG5vIG9hdXRoIHRva2VuJylcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBsZXQgY29udGVudDogQnVmZmVyXG4gICAgdHJ5IHtcbiAgICAgIGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShmdWxsUGF0aClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkZWJ1ZyhgcmVhZCBmYWlsZWQgZm9yICR7ZnVsbFBhdGh9OiAke2V9YClcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBjb25zdCBiYXNlVXJsID0gZ2V0QnJpZGdlQmFzZVVybCgpXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL29hdXRoL2ZpbGVfdXBsb2FkYFxuICAgIGNvbnN0IGZpbGVuYW1lID0gYmFzZW5hbWUoZnVsbFBhdGgpXG4gICAgY29uc3QgbWltZVR5cGUgPSBndWVzc01pbWVUeXBlKGZpbGVuYW1lKVxuICAgIGNvbnN0IGJvdW5kYXJ5ID0gYC0tLS1Gb3JtQm91bmRhcnkke3JhbmRvbVVVSUQoKX1gXG5cbiAgICAvLyBNYW51YWwgbXVsdGlwYXJ0IFx1MjAxNCBzYW1lIHBhdHRlcm4gYXMgZmlsZXNBcGkudHMuIFRoZSBvYXV0aCBlbmRwb2ludCB0YWtlc1xuICAgIC8vIGEgc2luZ2xlIFwiZmlsZVwiIHBhcnQgKG5vIFwicHVycG9zZVwiIGZpZWxkIGxpa2UgdGhlIHB1YmxpYyBGaWxlcyBBUEkpLlxuICAgIGNvbnN0IGJvZHkgPSBCdWZmZXIuY29uY2F0KFtcbiAgICAgIEJ1ZmZlci5mcm9tKFxuICAgICAgICBgLS0ke2JvdW5kYXJ5fVxcclxcbmAgK1xuICAgICAgICAgIGBDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCJmaWxlXCI7IGZpbGVuYW1lPVwiJHtmaWxlbmFtZX1cIlxcclxcbmAgK1xuICAgICAgICAgIGBDb250ZW50LVR5cGU6ICR7bWltZVR5cGV9XFxyXFxuXFxyXFxuYCxcbiAgICAgICksXG4gICAgICBjb250ZW50LFxuICAgICAgQnVmZmVyLmZyb20oYFxcclxcbi0tJHtib3VuZGFyeX0tLVxcclxcbmApLFxuICAgIF0pXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgYm9keSwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGBtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0ke2JvdW5kYXJ5fWAsXG4gICAgICAgICAgJ0NvbnRlbnQtTGVuZ3RoJzogYm9keS5sZW5ndGgudG9TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgICAgdGltZW91dDogVVBMT0FEX1RJTUVPVVRfTVMsXG4gICAgICAgIHNpZ25hbDogY3R4LnNpZ25hbCxcbiAgICAgICAgdmFsaWRhdGVTdGF0dXM6ICgpID0+IHRydWUsXG4gICAgICB9KVxuXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDEpIHtcbiAgICAgICAgZGVidWcoXG4gICAgICAgICAgYHVwbG9hZCBmYWlsZWQgZm9yICR7ZnVsbFBhdGh9OiBzdGF0dXM9JHtyZXNwb25zZS5zdGF0dXN9IGJvZHk9JHtqc29uU3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpLnNsaWNlKDAsIDIwMCl9YCxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZCA9IHVwbG9hZFJlc3BvbnNlU2NoZW1hKCkuc2FmZVBhcnNlKHJlc3BvbnNlLmRhdGEpXG4gICAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSB7XG4gICAgICAgIGRlYnVnKFxuICAgICAgICAgIGB1bmV4cGVjdGVkIHJlc3BvbnNlIHNoYXBlIGZvciAke2Z1bGxQYXRofTogJHtwYXJzZWQuZXJyb3IubWVzc2FnZX1gLFxuICAgICAgICApXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgZGVidWcoYHVwbG9hZGVkICR7ZnVsbFBhdGh9IFx1MjE5MiAke3BhcnNlZC5kYXRhLmZpbGVfdXVpZH0gKCR7c2l6ZX0gYnl0ZXMpYClcbiAgICAgIHJldHVybiBwYXJzZWQuZGF0YS5maWxlX3V1aWRcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkZWJ1ZyhgdXBsb2FkIHRocmV3IGZvciAke2Z1bGxQYXRofTogJHtlfWApXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxTQUFTLGtCQUFrQjtBQUMzQixTQUFTLGdCQUFnQjtBQUN6QixTQUFTLFVBQVUsZUFBZTtBQWdDbEMsU0FBUyxjQUFjLFVBQTBCO0FBQy9DLFFBQU0sTUFBTSxRQUFRLFFBQVEsRUFBRSxZQUFZO0FBQzFDLFNBQU8sWUFBWSxHQUFHLEtBQUs7QUFDN0I7QUFFQSxTQUFTLE1BQU0sS0FBbUI7QUFDaEMsa0JBQWdCLGtCQUFrQixHQUFHLEVBQUU7QUFDekM7QUFXQSxTQUFTLG1CQUEyQjtBQUNsQyxTQUNFLHlCQUF5QixLQUN6QixRQUFRLElBQUksc0JBQ1osZUFBZSxFQUFFO0FBRXJCO0FBaUJBLGVBQXNCLHNCQUNwQixVQUNBLE1BQ0EsS0FDNkI7QUFHN0IsTUFBSSxRQUFRLGFBQWEsR0FBRztBQUMxQixRQUFJLENBQUMsSUFBSSxrQkFBbUIsUUFBTztBQUVuQyxRQUFJLE9BQU8sa0JBQWtCO0FBQzNCLFlBQU0sUUFBUSxRQUFRLEtBQUssSUFBSSxrQkFBa0IsZ0JBQWdCLFFBQVE7QUFDekUsYUFBTztBQUFBLElBQ1Q7QUFFQSxVQUFNLFFBQVEscUJBQXFCO0FBQ25DLFFBQUksQ0FBQyxPQUFPO0FBQ1YsWUFBTSxzQkFBc0I7QUFDNUIsYUFBTztBQUFBLElBQ1Q7QUFFQSxRQUFJO0FBQ0osUUFBSTtBQUNGLGdCQUFVLE1BQU0sU0FBUyxRQUFRO0FBQUEsSUFDbkMsU0FBUyxHQUFHO0FBQ1YsWUFBTSxtQkFBbUIsUUFBUSxLQUFLLENBQUMsRUFBRTtBQUN6QyxhQUFPO0FBQUEsSUFDVDtBQUVBLFVBQU0sVUFBVSxpQkFBaUI7QUFDakMsVUFBTSxNQUFNLEdBQUcsT0FBTztBQUN0QixVQUFNLFdBQVcsU0FBUyxRQUFRO0FBQ2xDLFVBQU0sV0FBVyxjQUFjLFFBQVE7QUFDdkMsVUFBTSxXQUFXLG1CQUFtQixXQUFXLENBQUM7QUFJaEQsVUFBTSxPQUFPLE9BQU8sT0FBTztBQUFBLE1BQ3pCLE9BQU87QUFBQSxRQUNMLEtBQUssUUFBUTtBQUFBLHlEQUMrQyxRQUFRO0FBQUEsZ0JBQ2pELFFBQVE7QUFBQTtBQUFBO0FBQUEsTUFDN0I7QUFBQSxNQUNBO0FBQUEsTUFDQSxPQUFPLEtBQUs7QUFBQSxJQUFTLFFBQVE7QUFBQSxDQUFRO0FBQUEsSUFDdkMsQ0FBQztBQUVELFFBQUk7QUFDRixZQUFNLFdBQVcsTUFBTSxjQUFNLEtBQUssS0FBSyxNQUFNO0FBQUEsUUFDM0MsU0FBUztBQUFBLFVBQ1AsZUFBZSxVQUFVLEtBQUs7QUFBQSxVQUM5QixnQkFBZ0IsaUNBQWlDLFFBQVE7QUFBQSxVQUN6RCxrQkFBa0IsS0FBSyxPQUFPLFNBQVM7QUFBQSxRQUN6QztBQUFBLFFBQ0EsU0FBUztBQUFBLFFBQ1QsUUFBUSxJQUFJO0FBQUEsUUFDWixnQkFBZ0IsTUFBTTtBQUFBLE1BQ3hCLENBQUM7QUFFRCxVQUFJLFNBQVMsV0FBVyxLQUFLO0FBQzNCO0FBQUEsVUFDRSxxQkFBcUIsUUFBUSxZQUFZLFNBQVMsTUFBTSxTQUFTLGNBQWMsU0FBUyxJQUFJLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUFBLFFBQzdHO0FBQ0EsZUFBTztBQUFBLE1BQ1Q7QUFFQSxZQUFNLFNBQVMscUJBQXFCLEVBQUUsVUFBVSxTQUFTLElBQUk7QUFDN0QsVUFBSSxDQUFDLE9BQU8sU0FBUztBQUNuQjtBQUFBLFVBQ0UsaUNBQWlDLFFBQVEsS0FBSyxPQUFPLE1BQU0sT0FBTztBQUFBLFFBQ3BFO0FBQ0EsZUFBTztBQUFBLE1BQ1Q7QUFFQSxZQUFNLFlBQVksUUFBUSxXQUFNLE9BQU8sS0FBSyxTQUFTLEtBQUssSUFBSSxTQUFTO0FBQ3ZFLGFBQU8sT0FBTyxLQUFLO0FBQUEsSUFDckIsU0FBUyxHQUFHO0FBQ1YsWUFBTSxvQkFBb0IsUUFBUSxLQUFLLENBQUMsRUFBRTtBQUMxQyxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUE3S0EsSUErQk0sa0JBRUEsbUJBU0EsYUFvQ0E7QUE5RU47QUFBQTtBQWNBO0FBQ0E7QUFJQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNLG1CQUFtQixLQUFLLE9BQU87QUFFckMsSUFBTSxvQkFBb0I7QUFTMUIsSUFBTSxjQUFzQztBQUFBLE1BQzFDLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxJQUNYO0FBOEJBLElBQU0sdUJBQXVCO0FBQUEsTUFBVyxNQUN0QyxpQkFBRSxPQUFPLEVBQUUsV0FBVyxpQkFBRSxPQUFPLEVBQUUsQ0FBQztBQUFBLElBQ3BDO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
