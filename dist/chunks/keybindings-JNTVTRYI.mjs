#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  editFileInEditor,
  init_promptEditor
} from "./chunk-BZQWOEX6.mjs";
import {
  DEFAULT_BINDINGS,
  NON_REBINDABLE,
  getKeybindingsPath,
  init_defaultBindings,
  init_loadUserBindings,
  init_reservedShortcuts,
  isKeybindingCustomizationEnabled,
  normalizeKeyForComparison
} from "./chunk-FMU4URRE.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-HO5F7BV3.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-4WEGPCYF.mjs";
import "./chunk-Z4JLAMMU.mjs";
import "./chunk-FUHJGEFK.mjs";
import "./chunk-H474P6P2.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-U3YG33GN.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-KNCFJEES.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-IAEMXMG4.mjs";
import "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-IIPAGI5R.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-HWTXKBLR.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
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
import {
  getErrnoCode,
  init_errors,
  init_slowOperations,
  jsonStringify
} from "./chunk-L2VTD674.mjs";
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

// src/keybindings/template.ts
function filterReservedShortcuts(blocks) {
  const reservedKeys = new Set(
    NON_REBINDABLE.map((r) => normalizeKeyForComparison(r.key))
  );
  return blocks.map((block) => {
    const filteredBindings = {};
    for (const [key, action] of Object.entries(block.bindings)) {
      if (!reservedKeys.has(normalizeKeyForComparison(key))) {
        filteredBindings[key] = action;
      }
    }
    return { context: block.context, bindings: filteredBindings };
  }).filter((block) => Object.keys(block.bindings).length > 0);
}
function generateKeybindingsTemplate() {
  const bindings = filterReservedShortcuts(DEFAULT_BINDINGS);
  const config = {
    $schema: "https://www.schemastore.org/claude-code-keybindings.json",
    $docs: "https://code.claude.com/docs/en/keybindings",
    bindings
  };
  return jsonStringify(config, null, 2) + "\n";
}
var init_template = __esm({
  "src/keybindings/template.ts"() {
    init_slowOperations();
    init_defaultBindings();
    init_reservedShortcuts();
  }
});

// src/commands/keybindings/keybindings.ts
import { mkdir, writeFile } from "fs/promises";
import { dirname } from "path";
async function call() {
  if (!isKeybindingCustomizationEnabled()) {
    return {
      type: "text",
      value: "Keybinding customization is not enabled. This feature is currently in preview."
    };
  }
  const keybindingsPath = getKeybindingsPath();
  let fileExists = false;
  await mkdir(dirname(keybindingsPath), { recursive: true });
  try {
    await writeFile(keybindingsPath, generateKeybindingsTemplate(), {
      encoding: "utf-8",
      flag: "wx"
    });
  } catch (e) {
    if (getErrnoCode(e) === "EEXIST") {
      fileExists = true;
    } else {
      throw e;
    }
  }
  const result = await editFileInEditor(keybindingsPath);
  if (result.error) {
    return {
      type: "text",
      value: `${fileExists ? "Opened" : "Created"} ${keybindingsPath}. Could not open in editor: ${result.error}`
    };
  }
  return {
    type: "text",
    value: fileExists ? `Opened ${keybindingsPath} in your editor.` : `Created ${keybindingsPath} with template. Opened in your editor.`
  };
}
var init_keybindings = __esm({
  "src/commands/keybindings/keybindings.ts"() {
    init_loadUserBindings();
    init_template();
    init_errors();
    init_promptEditor();
  }
});
init_keybindings();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2tleWJpbmRpbmdzL3RlbXBsYXRlLnRzIiwgIi4uLy4uL3NyYy9jb21tYW5kcy9rZXliaW5kaW5ncy9rZXliaW5kaW5ncy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBLZXliaW5kaW5ncyB0ZW1wbGF0ZSBnZW5lcmF0b3IuXG4gKiBHZW5lcmF0ZXMgYSB3ZWxsLWRvY3VtZW50ZWQgdGVtcGxhdGUgZmlsZSBmb3Igfi8uY2xhdWRlL2tleWJpbmRpbmdzLmpzb25cbiAqL1xuXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5pbXBvcnQgeyBERUZBVUxUX0JJTkRJTkdTIH0gZnJvbSAnLi9kZWZhdWx0QmluZGluZ3MuanMnXG5pbXBvcnQge1xuICBOT05fUkVCSU5EQUJMRSxcbiAgbm9ybWFsaXplS2V5Rm9yQ29tcGFyaXNvbixcbn0gZnJvbSAnLi9yZXNlcnZlZFNob3J0Y3V0cy5qcydcbmltcG9ydCB0eXBlIHsgS2V5YmluZGluZ0Jsb2NrIH0gZnJvbSAnLi90eXBlcy5qcydcblxuLyoqXG4gKiBGaWx0ZXIgb3V0IHJlc2VydmVkIHNob3J0Y3V0cyB0aGF0IGNhbm5vdCBiZSByZWJvdW5kLlxuICogVGhlc2Ugd291bGQgY2F1c2UgL2RvY3RvciB0byB3YXJuLCBzbyB3ZSBleGNsdWRlIHRoZW0gZnJvbSB0aGUgdGVtcGxhdGUuXG4gKi9cbmZ1bmN0aW9uIGZpbHRlclJlc2VydmVkU2hvcnRjdXRzKGJsb2NrczogS2V5YmluZGluZ0Jsb2NrW10pOiBLZXliaW5kaW5nQmxvY2tbXSB7XG4gIGNvbnN0IHJlc2VydmVkS2V5cyA9IG5ldyBTZXQoXG4gICAgTk9OX1JFQklOREFCTEUubWFwKHIgPT4gbm9ybWFsaXplS2V5Rm9yQ29tcGFyaXNvbihyLmtleSkpLFxuICApXG5cbiAgcmV0dXJuIGJsb2Nrc1xuICAgIC5tYXAoYmxvY2sgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWRCaW5kaW5nczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVsbD4gPSB7fVxuICAgICAgZm9yIChjb25zdCBba2V5LCBhY3Rpb25dIG9mIE9iamVjdC5lbnRyaWVzKGJsb2NrLmJpbmRpbmdzKSkge1xuICAgICAgICBpZiAoIXJlc2VydmVkS2V5cy5oYXMobm9ybWFsaXplS2V5Rm9yQ29tcGFyaXNvbihrZXkpKSkge1xuICAgICAgICAgIGZpbHRlcmVkQmluZGluZ3Nba2V5XSA9IGFjdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4geyBjb250ZXh0OiBibG9jay5jb250ZXh0LCBiaW5kaW5nczogZmlsdGVyZWRCaW5kaW5ncyB9XG4gICAgfSlcbiAgICAuZmlsdGVyKGJsb2NrID0+IE9iamVjdC5rZXlzKGJsb2NrLmJpbmRpbmdzKS5sZW5ndGggPiAwKVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgdGVtcGxhdGUga2V5YmluZGluZ3MuanNvbiBmaWxlIGNvbnRlbnQuXG4gKiBDcmVhdGVzIGEgZnVsbHkgdmFsaWQgSlNPTiBmaWxlIHdpdGggYWxsIGRlZmF1bHQgYmluZGluZ3MgdGhhdCB1c2VycyBjYW4gY3VzdG9taXplLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVLZXliaW5kaW5nc1RlbXBsYXRlKCk6IHN0cmluZyB7XG4gIC8vIEZpbHRlciBvdXQgcmVzZXJ2ZWQgc2hvcnRjdXRzIHRoYXQgY2Fubm90IGJlIHJlYm91bmRcbiAgY29uc3QgYmluZGluZ3MgPSBmaWx0ZXJSZXNlcnZlZFNob3J0Y3V0cyhERUZBVUxUX0JJTkRJTkdTKVxuXG4gIC8vIEZvcm1hdCBhcyBvYmplY3Qgd3JhcHBlciB3aXRoIGJpbmRpbmdzIGFycmF5XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAkc2NoZW1hOiAnaHR0cHM6Ly93d3cuc2NoZW1hc3RvcmUub3JnL2NsYXVkZS1jb2RlLWtleWJpbmRpbmdzLmpzb24nLFxuICAgICRkb2NzOiAnaHR0cHM6Ly9jb2RlLmNsYXVkZS5jb20vZG9jcy9lbi9rZXliaW5kaW5ncycsXG4gICAgYmluZGluZ3MsXG4gIH1cblxuICByZXR1cm4ganNvblN0cmluZ2lmeShjb25maWcsIG51bGwsIDIpICsgJ1xcbidcbn1cbiIsICJpbXBvcnQgeyBta2Rpciwgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7XG4gIGdldEtleWJpbmRpbmdzUGF0aCxcbiAgaXNLZXliaW5kaW5nQ3VzdG9taXphdGlvbkVuYWJsZWQsXG59IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL2xvYWRVc2VyQmluZGluZ3MuanMnXG5pbXBvcnQgeyBnZW5lcmF0ZUtleWJpbmRpbmdzVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy90ZW1wbGF0ZS5qcydcbmltcG9ydCB7IGdldEVycm5vQ29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9ycy5qcydcbmltcG9ydCB7IGVkaXRGaWxlSW5FZGl0b3IgfSBmcm9tICcuLi8uLi91dGlscy9wcm9tcHRFZGl0b3IuanMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsKCk6IFByb21pc2U8eyB0eXBlOiAndGV4dCc7IHZhbHVlOiBzdHJpbmcgfT4ge1xuICBpZiAoIWlzS2V5YmluZGluZ0N1c3RvbWl6YXRpb25FbmFibGVkKCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdmFsdWU6XG4gICAgICAgICdLZXliaW5kaW5nIGN1c3RvbWl6YXRpb24gaXMgbm90IGVuYWJsZWQuIFRoaXMgZmVhdHVyZSBpcyBjdXJyZW50bHkgaW4gcHJldmlldy4nLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGtleWJpbmRpbmdzUGF0aCA9IGdldEtleWJpbmRpbmdzUGF0aCgpXG5cbiAgLy8gV3JpdGUgdGVtcGxhdGUgd2l0aCAnd3gnIGZsYWcgKGV4Y2x1c2l2ZSBjcmVhdGUpIFx1MjAxNCBmYWlscyB3aXRoIEVFWElTVCBpZlxuICAvLyB0aGUgZmlsZSBhbHJlYWR5IGV4aXN0cy4gQXZvaWRzIGEgc3RhdCBwcmUtY2hlY2sgKFRPQ1RPVSByYWNlICsgZXh0cmEgc3lzY2FsbCkuXG4gIGxldCBmaWxlRXhpc3RzID0gZmFsc2VcbiAgYXdhaXQgbWtkaXIoZGlybmFtZShrZXliaW5kaW5nc1BhdGgpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuICB0cnkge1xuICAgIGF3YWl0IHdyaXRlRmlsZShrZXliaW5kaW5nc1BhdGgsIGdlbmVyYXRlS2V5YmluZGluZ3NUZW1wbGF0ZSgpLCB7XG4gICAgICBlbmNvZGluZzogJ3V0Zi04JyxcbiAgICAgIGZsYWc6ICd3eCcsXG4gICAgfSlcbiAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgIGlmIChnZXRFcnJub0NvZGUoZSkgPT09ICdFRVhJU1QnKSB7XG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlXG4gICAgfVxuICB9XG5cbiAgLy8gT3BlbiBpbiBlZGl0b3JcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZWRpdEZpbGVJbkVkaXRvcihrZXliaW5kaW5nc1BhdGgpXG4gIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdmFsdWU6IGAke2ZpbGVFeGlzdHMgPyAnT3BlbmVkJyA6ICdDcmVhdGVkJ30gJHtrZXliaW5kaW5nc1BhdGh9LiBDb3VsZCBub3Qgb3BlbiBpbiBlZGl0b3I6ICR7cmVzdWx0LmVycm9yfWAsXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlOiBmaWxlRXhpc3RzXG4gICAgICA/IGBPcGVuZWQgJHtrZXliaW5kaW5nc1BhdGh9IGluIHlvdXIgZWRpdG9yLmBcbiAgICAgIDogYENyZWF0ZWQgJHtrZXliaW5kaW5nc1BhdGh9IHdpdGggdGVtcGxhdGUuIE9wZW5lZCBpbiB5b3Vy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
