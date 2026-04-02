#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  buildDefaultExternalSystemPrompt,
  getDefaultExternalAutoModeRules,
  init_sideQuery,
  init_yoloClassifier,
  sideQuery
} from "./chunk-5INIV6TQ.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import "./chunk-B5LIYBEU.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-IVRFWWJD.mjs";
import "./chunk-WFZ47W7F.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-36ZVP56J.mjs";
import "./chunk-WKBYDC63.mjs";
import "./chunk-JPGTA2FH.mjs";
import "./chunk-2G5PON4H.mjs";
import "./chunk-SRAO5KUL.mjs";
import "./chunk-75K7OLET.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-3W743YKD.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-ORS2TTME.mjs";
import "./chunk-H5UJY55C.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-7RY6L7JT.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-A6JDOKBH.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-3IFS4CK6.mjs";
import "./chunk-2UP4OFWW.mjs";
import "./chunk-XXNQOOJ5.mjs";
import "./chunk-TQHEE24N.mjs";
import "./chunk-GRYB5GTK.mjs";
import "./chunk-V35HZRR2.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import "./chunk-ZFJCSCYD.mjs";
import "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getAutoModeConfig,
  getMainLoopModel,
  init_model,
  init_settings2 as init_settings,
  parseUserSpecifiedModel
} from "./chunk-JQ55XPLZ.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-5EA44JDA.mjs";
import "./chunk-O2ZQRVJU.mjs";
import "./chunk-ZPEBVZEB.mjs";
import "./chunk-DQ5JTCOA.mjs";
import "./chunk-HGPSKCV5.mjs";
import "./chunk-B7JYVDBT.mjs";
import "./chunk-GHLJY6GK.mjs";
import "./chunk-PPND3F3V.mjs";
import "./chunk-BKRSSLV2.mjs";
import "./chunk-XFYUWZYI.mjs";
import "./chunk-TR6BOGPZ.mjs";
import "./chunk-KTLUBGNP.mjs";
import "./chunk-3PS62SCS.mjs";
import "./chunk-SFCRD75C.mjs";
import "./chunk-QFFW7MQ2.mjs";
import "./chunk-3AEW3KDQ.mjs";
import "./chunk-NLMC5AZV.mjs";
import "./chunk-M5NTYAY2.mjs";
import "./chunk-SETG7O3F.mjs";
import "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import "./chunk-JXCG2JDO.mjs";
import "./chunk-FBLMX54P.mjs";
import "./chunk-FOFMX5GB.mjs";
import "./chunk-SF3TOBTZ.mjs";
import "./chunk-IVTTVOOG.mjs";
import "./chunk-LNQOFDTT.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-F5ODCUJD.mjs";
import {
  errorMessage,
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
import "./chunk-O5PZ3G6I.mjs";

// src/cli/handlers/autoMode.ts
init_errors();
init_model();
init_yoloClassifier();
init_settings();
init_sideQuery();
init_slowOperations();
function writeRules(rules) {
  process.stdout.write(jsonStringify(rules, null, 2) + "\n");
}
function autoModeDefaultsHandler() {
  writeRules(getDefaultExternalAutoModeRules());
}
function autoModeConfigHandler() {
  const config = getAutoModeConfig();
  const defaults = getDefaultExternalAutoModeRules();
  writeRules({
    allow: config?.allow?.length ? config.allow : defaults.allow,
    soft_deny: config?.soft_deny?.length ? config.soft_deny : defaults.soft_deny,
    environment: config?.environment?.length ? config.environment : defaults.environment
  });
}
var CRITIQUE_SYSTEM_PROMPT = `You are an expert reviewer of auto mode classifier rules for Claude Code.

Claude Code has an "auto mode" that uses an AI classifier to decide whether tool calls should be auto-approved or require user confirmation. Users can write custom rules in three categories:

- **allow**: Actions the classifier should auto-approve
- **soft_deny**: Actions the classifier should block (require user confirmation)
- **environment**: Context about the user's setup that helps the classifier make decisions

Your job is to critique the user's custom rules for clarity, completeness, and potential issues. The classifier is an LLM that reads these rules as part of its system prompt.

For each rule, evaluate:
1. **Clarity**: Is the rule unambiguous? Could the classifier misinterpret it?
2. **Completeness**: Are there gaps or edge cases the rule doesn't cover?
3. **Conflicts**: Do any of the rules conflict with each other?
4. **Actionability**: Is the rule specific enough for the classifier to act on?

Be concise and constructive. Only comment on rules that could be improved. If all rules look good, say so.`;
async function autoModeCritiqueHandler(options) {
  const config = getAutoModeConfig();
  const hasCustomRules = (config?.allow?.length ?? 0) > 0 || (config?.soft_deny?.length ?? 0) > 0 || (config?.environment?.length ?? 0) > 0;
  if (!hasCustomRules) {
    process.stdout.write(
      "No custom auto mode rules found.\n\nAdd rules to your settings file under autoMode.{allow, soft_deny, environment}.\nRun `claude auto-mode defaults` to see the default rules for reference.\n"
    );
    return;
  }
  const model = options.model ? parseUserSpecifiedModel(options.model) : getMainLoopModel();
  const defaults = getDefaultExternalAutoModeRules();
  const classifierPrompt = buildDefaultExternalSystemPrompt();
  const userRulesSummary = formatRulesForCritique("allow", config?.allow ?? [], defaults.allow) + formatRulesForCritique(
    "soft_deny",
    config?.soft_deny ?? [],
    defaults.soft_deny
  ) + formatRulesForCritique(
    "environment",
    config?.environment ?? [],
    defaults.environment
  );
  process.stdout.write("Analyzing your auto mode rules\u2026\n\n");
  let response;
  try {
    response = await sideQuery({
      querySource: "auto_mode_critique",
      model,
      system: CRITIQUE_SYSTEM_PROMPT,
      skipSystemPromptPrefix: true,
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: "Here is the full classifier system prompt that the auto mode classifier receives:\n\n<classifier_system_prompt>\n" + classifierPrompt + "\n</classifier_system_prompt>\n\nHere are the user's custom rules that REPLACE the corresponding default sections:\n\n" + userRulesSummary + "\nPlease critique these custom rules."
        }
      ]
    });
  } catch (error) {
    process.stderr.write(
      "Failed to analyze rules: " + errorMessage(error) + "\n"
    );
    process.exitCode = 1;
    return;
  }
  const textBlock = response.content.find((block) => block.type === "text");
  if (textBlock?.type === "text") {
    process.stdout.write(textBlock.text + "\n");
  } else {
    process.stdout.write("No critique was generated. Please try again.\n");
  }
}
function formatRulesForCritique(section, userRules, defaultRules) {
  if (userRules.length === 0) return "";
  const customLines = userRules.map((r) => "- " + r).join("\n");
  const defaultLines = defaultRules.map((r) => "- " + r).join("\n");
  return "## " + section + " (custom rules replacing defaults)\nCustom:\n" + customLines + "\n\nDefaults being replaced:\n" + defaultLines + "\n\n";
}
export {
  autoModeConfigHandler,
  autoModeCritiqueHandler,
  autoModeDefaultsHandler
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NsaS9oYW5kbGVycy9hdXRvTW9kZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBBdXRvIG1vZGUgc3ViY29tbWFuZCBoYW5kbGVycyBcdTIwMTQgZHVtcCBkZWZhdWx0L21lcmdlZCBjbGFzc2lmaWVyIHJ1bGVzIGFuZFxuICogY3JpdGlxdWUgdXNlci13cml0dGVuIHJ1bGVzLiBEeW5hbWljYWxseSBpbXBvcnRlZCB3aGVuIGBjbGF1ZGUgYXV0by1tb2RlIC4uLmAgcnVucy5cbiAqL1xuXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQge1xuICBnZXRNYWluTG9vcE1vZGVsLFxuICBwYXJzZVVzZXJTcGVjaWZpZWRNb2RlbCxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvbW9kZWwvbW9kZWwuanMnXG5pbXBvcnQge1xuICB0eXBlIEF1dG9Nb2RlUnVsZXMsXG4gIGJ1aWxkRGVmYXVsdEV4dGVybmFsU3lzdGVtUHJvbXB0LFxuICBnZXREZWZhdWx0RXh0ZXJuYWxBdXRvTW9kZVJ1bGVzLFxufSBmcm9tICcuLi8uLi91dGlscy9wZXJtaXNzaW9ucy95b2xvQ2xhc3NpZmllci5qcydcbmltcG9ydCB7IGdldEF1dG9Nb2RlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3Mvc2V0dGluZ3MuanMnXG5pbXBvcnQgeyBzaWRlUXVlcnkgfSBmcm9tICcuLi8uLi91dGlscy9zaWRlUXVlcnkuanMnXG5pbXBvcnQgeyBqc29uU3RyaW5naWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2xvd09wZXJhdGlvbnMuanMnXG5cbmZ1bmN0aW9uIHdyaXRlUnVsZXMocnVsZXM6IEF1dG9Nb2RlUnVsZXMpOiB2b2lkIHtcbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoanNvblN0cmluZ2lmeShydWxlcywgbnVsbCwgMikgKyAnXFxuJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9Nb2RlRGVmYXVsdHNIYW5kbGVyKCk6IHZvaWQge1xuICB3cml0ZVJ1bGVzKGdldERlZmF1bHRFeHRlcm5hbEF1dG9Nb2RlUnVsZXMoKSlcbn1cblxuLyoqXG4gKiBEdW1wIHRoZSBlZmZlY3RpdmUgYXV0byBtb2RlIGNvbmZpZzogdXNlciBzZXR0aW5ncyB3aGVyZSBwcm92aWRlZCwgZXh0ZXJuYWxcbiAqIGRlZmF1bHRzIG90aGVyd2lzZS4gUGVyLXNlY3Rpb24gUkVQTEFDRSBzZW1hbnRpY3MgXHUyMDE0IG1hdGNoZXMgaG93XG4gKiBidWlsZFlvbG9TeXN0ZW1Qcm9tcHQgcmVzb2x2ZXMgdGhlIGV4dGVybmFsIHRlbXBsYXRlIChhIG5vbi1lbXB0eSB1c2VyXG4gKiBzZWN0aW9uIHJlcGxhY2VzIHRoYXQgc2VjdGlvbidzIGRlZmF1bHRzIGVudGlyZWx5OyBhbiBlbXB0eS9hYnNlbnQgc2VjdGlvblxuICogZmFsbHMgdGhyb3VnaCB0byBkZWZhdWx0cykuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdXRvTW9kZUNvbmZpZ0hhbmRsZXIoKTogdm9pZCB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEF1dG9Nb2RlQ29uZmlnKClcbiAgY29uc3QgZGVmYXVsdHMgPSBnZXREZWZhdWx0RXh0ZXJuYWxBdXRvTW9kZVJ1bGVzKClcbiAgd3JpdGVSdWxlcyh7XG4gICAgYWxsb3c6IGNvbmZpZz8uYWxsb3c/Lmxlbmd0aCA/IGNvbmZpZy5hbGxvdyA6IGRlZmF1bHRzLmFsbG93LFxuICAgIHNvZnRfZGVueTogY29uZmlnPy5zb2Z0X2Rlbnk/Lmxlbmd0aFxuICAgICAgPyBjb25maWcuc29mdF9kZW55XG4gICAgICA6IGRlZmF1bHRzLnNvZnRfZGVueSxcbiAgICBlbnZpcm9ubWVudDogY29uZmlnPy5lbnZpcm9ubWVudD8ubGVuZ3RoXG4gICAgICA/IGNvbmZpZy5lbnZpcm9ubWVudFxuICAgICAgOiBkZWZhdWx0cy5lbnZpcm9ubWVudCxcbiAgfSlcbn1cblxuY29uc3QgQ1JJVElRVUVfU1lTVEVNX1BST01QVCA9XG4gICdZb3UgYXJlIGFuIGV4cGVydCByZXZpZXdlciBvZiBhdXRvIG1vZGUgY2xhc3NpZmllciBydWxlcyBmb3IgQ2xhdWRlIENvZGUuXFxuJyArXG4gICdcXG4nICtcbiAgJ0NsYXVkZSBDb2RlIGhhcyBhbiBcImF1dG8gbW9kZVwiIHRoYXQgdXNlcyBhbiBBSSBjbGFzc2lmaWVyIHRvIGRlY2lkZSB3aGV0aGVyICcgK1xuICAndG9vbCBjYWxscyBzaG91bGQgYmUgYXV0by1hcHByb3ZlZCBvciByZXF1aXJlIHVzZXIgY29uZmlybWF0aW9uLiBVc2VycyBjYW4gJyArXG4gICd3cml0ZSBjdXN0b20gcnVsZXMgaW4gdGhyZWUgY2F0ZWdvcmllczpcXG4nICtcbiAgJ1xcbicgK1xuICAnLSAqKmFsbG93Kio6IEFjdGlvbnMgdGhlIGNsYXNzaWZpZXIgc2hvdWxkIGF1dG8tYXBwcm92ZVxcbicgK1xuICAnLSAqKnNvZnRfZGVueSoqOiBBY3Rpb25zIHRoZSBjbGFzc2lmaWVyIHNob3VsZCBibG9jayAocmVxdWlyZSB1c2VyIGNvbmZpcm1hdGlvbilcXG4nICtcbiAgXCItICoqZW52aXJvbm1lbnQqKjogQ29udGV4dCBhYm91dCB0aGUgdXNlcidzIHNldHVwIHRoYXQgaGVscHMgdGhlIGNsYXNzaWZpZXIgbWFrZSBkZWNpc2lvbnNcXG5cIiArXG4gICdcXG4nICtcbiAgXCJZb3VyIGpvYiBpcyB0byBjcml0aXF1ZSB0aGUgdXNlcidzIGN1c3RvbSBydWxlcyBmb3IgY2xhcml0eSwgY29tcGxldGVuZXNzLCBcIiArXG4gICdhbmQgcG90ZW50aWFsIGlzc3Vlcy4gVGhlIGNsYXNzaWZpZXIgaXMgYW4gTExNIHRoYXQgcmVhZHMgdGhlc2UgcnVsZXMgYXMgJyArXG4gICdwYXJ0IG9mIGl0cyBzeXN0ZW0gcHJvbXB0LlxcbicgK1xuICAnXFxuJyArXG4gICdGb3IgZWFjaCBydWxlLCBldmFsdWF0ZTpcXG4nICtcbiAgJzEuICoqQ2xhcml0eSoqOiBJcyB0aGUgcnVsZSB1bmFtYmlndW91cz8gQ291bGQgdGhlIGNsYXNzaWZpZXIgbWlzaW50ZXJwcmV0IGl0P1xcbicgK1xuICBcIjIuICoqQ29tcGxldGVuZXNzKio6IEFyZSB0aGVyZSBnYXBzIG9yIGVkZ2UgY2FzZXMgdGhlIHJ1bGUgZG9lc24ndCBjb3Zlcj9cXG5cIiArXG4gICczLiAqKkNvbmZsaWN0cyoqOiBEbyBhbnkgb2YgdGhlIHJ1bGVzIGNvbmZsaWN0IHdpdGggZWFjaCBvdGhlcj9cXG4nICtcbiAgJzQuICoqQWN0aW9uYWJpbGl0eSoqOiBJcyB0aGUgcnVsZSBzcGVjaWZpYyBlbm91Z2ggZm9yIHRoZSBjbGFzc2lmaWVyIHRvIGFjdCBvbj9cXG4nICtcbiAgJ1xcbicgK1xuICAnQmUgY29uY2lzZSBhbmQgY29uc3RydWN0aXZlLiBPbmx5IGNvbW1lbnQgb24gcnVsZXMgdGhhdCBjb3VsZCBiZSBpbXByb3ZlZC4gJyArXG4gICdJZiBhbGwgcnVsZXMgbG9vayBnb29kLCBzYXkgc28uJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0b01vZGVDcml0aXF1ZUhhbmRsZXIob3B0aW9uczoge1xuICBtb2RlbD86IHN0cmluZ1xufSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBjb25maWcgPSBnZXRBdXRvTW9kZUNvbmZpZygpXG4gIGNvbnN0IGhhc0N1c3RvbVJ1bGVzID1cbiAgICAoY29uZmlnPy5hbGxvdz8ubGVuZ3RoID8/IDApID4gMCB8fFxuICAgIChjb25maWc/LnNvZnRfZGVueT8ubGVuZ3RoID8/IDApID4gMCB8fFxuICAgIChjb25maWc/LmVudmlyb25tZW50Py5sZW5ndGggPz8gMCkgPiAwXG5cbiAgaWYgKCFoYXNDdXN0b21SdWxlcykge1xuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKFxuICAgICAgJ05vIGN1c3RvbSBhdXRvIG1vZGUgcnVsZXMgZm91bmQuXFxuXFxuJyArXG4gICAgICAgICdBZGQgcnVsZXMgdG8geW91ciBzZXR0aW5ncyBmaWxlIHVuZGVyIGF1dG9Nb2RlLnthbGxvdywgc29mdF9kZW55LCBlbnZpcm9ubWVudH0uXFxuJyArXG4gICAgICAgICdSdW4gYGNsYXVkZSBhdXRvLW1vZGUgZGVmYXVsdHNgIHRvIHNlZSB0aGUgZGVmYXVsdCBydWxlcyBmb3IgcmVmZXJlbmNlLlxcbicsXG4gICAgKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgbW9kZWwgPSBvcHRpb25zLm1vZGVsXG4gICAgPyBwYXJzZVVzZXJTcGVjaWZpZWRNb2RlbChvcHRpb25zLm1vZGVsKVxuICAgIDogZ2V0TWFpbkxvb3BNb2RlbCgpXG5cbiAgY29uc3QgZGVmYXVsdHMgPSBnZXREZWZhdWx0RXh0ZXJuYWxBdXRvTW9kZVJ1bGVzKClcbiAgY29uc3QgY2xhc3NpZmllclByb21wdCA9IGJ1aWxkRGVmYXVsdEV4dGVybmFsU3lzdGVtUHJvbXB0KClcblxuICBjb25zdCB1c2VyUnVsZXNTdW1tYXJ5ID1cbiAgICBmb3JtYXRSdWxlc0ZvckNyaXRpcXVlKCdhbGxvdycsIGNvbmZpZz8uYWxsb3cgPz8gW10sIGRlZmF1bHRzLmFsbG93KSArXG4gICAgZm9ybWF0UnVsZXNGb3JDcml0aXF1ZShcbiAgICAgICdzb2Z0X2RlbnknLFxuICAgICAgY29uZmlnPy5zb2Z0X2RlbnkgPz8gW10sXG4gICAgICBkZWZhdWx0cy5zb2Z0X2RlbnksXG4gICAgKSArXG4gICAgZm9ybWF0UnVsZXNGb3JDcml0aXF1ZShcbiAgICAgICdlbnZpcm9ubWVudCcsXG4gICAgICBjb25maWc/LmVudmlyb25tZW50ID8/IFtdLFxuICAgICAgZGVmYXVsdHMuZW52aXJvbm1lbnQsXG4gICAgKVxuXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdBbmFseXppbmcgeW91ciBhdXRvIG1vZGUgcnVsZXNcdTIwMjZcXG5cXG4nKVxuXG4gIGxldCByZXNwb25zZVxuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgc2lkZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5U291cmNlOiAnYXV0b19tb2RlX2NyaXRpcXVlJyxcbiAgICAgIG1vZGVsLFxuICAgICAgc3lzdGVtOiBDUklUSVFVRV9TWVNURU1fUFJPTVBULFxuICAgICAgc2tpcFN5c3RlbVByb21wdFByZWZpeDogdHJ1ZSxcbiAgICAgIG1heF90b2tlbnM6IDQwOTYsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgICAnSGVyZSBpcyB0aGUgZnVsbCBjbGFzc2lmaWVyIHN5c3RlbSBwcm9tcHQgdGhhdCB0aGUgYXV0byBtb2RlIGNsYXNzaWZpZXIgcmVjZWl2ZXM6XFxuXFxuJyArXG4gICAgICAgICAgICAnPGNsYXNzaWZpZXJfc3lzdGVtX3Byb21wdD5cXG4nICtcbiAgICAgICAgICAgIGNsYXNzaWZpZXJQcm9tcHQgK1xuICAgICAgICAgICAgJ1xcbjwvY2xhc3NpZmllcl9zeXN0ZW1fcHJvbXB0PlxcblxcbicgK1xuICAgICAgICAgICAgXCJIZXJlIGFyZSB0aGUgdXNlcidzIGN1c3RvbSBydWxlcyB0aGF0IFJFUExBQ0UgdGhlIGNvcnJlc3BvbmRpbmcgZGVmYXVsdCBzZWN0aW9uczpcXG5cXG5cIiArXG4gICAgICAgICAgICB1c2VyUnVsZXNTdW1tYXJ5ICtcbiAgICAgICAgICAgICdcXG5QbGVhc2UgY3JpdGlxdWUgdGhlc2UgY3VzdG9tIHJ1bGVzLicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXG4gICAgICAnRmFpbGVkIHRvIGFuYWx5emUgcnVsZXM6ICcgKyBlcnJvck1lc3NhZ2UoZXJyb3IpICsgJ1xcbicsXG4gICAgKVxuICAgIHByb2Nlc3MuZXhpdENvZGUgPSAxXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB0ZXh0QmxvY2sgPSByZXNwb25zZS5jb250ZW50LmZpbmQoYmxvY2sgPT4gYmxvY2sudHlwZSA9PT0gJ3RleHQnKVxuICBpZiAodGV4dEJsb2NrPy50eXBlID09PSAndGV4dCcpIHtcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSh0ZXh0QmxvY2sudGV4dCArICdcXG4nKVxuICB9IGVsc2Uge1xuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdObyBjcml0aXF1ZSB3YXMgZ2VuZXJhdGVkLiBQbGVhc2UgdHJ5IGFnYWluLlxcbicpXG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0UnVsZXNGb3JDcml0aXF1ZShcbiAgc2VjdGlvbjogc3RyaW5nLFxuICB1c2VyUnVsZXM6IHN0cmluZ1tdLFxuICBkZWZhdWx0UnVsZXM6IHN0cmluZ1tdLFxuKTogc3RyaW5nIHtcbiAgaWYgKHVzZXJSdWxlcy5sZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBjb25zdCBjdXN0b21MaW5lcyA9IHVzZXJSdWxlcy5tYXAociA9PiAnLSAnICsgcikuam9pbignXFxuJylcbiAgY29uc3QgZGVmYXVsdExpbmVzID0gZGVmYXVsdFJ1bGVzLm1hcChyID0+ICctICcgKyByKS5qb2luKCdcXG4nKVxuICByZXR1cm4gKFxuICAgICcjIyAnICtcbiAgICBzZWN0aW9uICtcbiAgICAnIChjdXN0b20gcnVsZXMgcmVwbGFjaW5nIGRlZmF1bHRzKVxcbicgK1xuICAgICdDdXN0b206XFxuJyArXG4gICAgY3VzdG9tTGluZXMgK1xuICAgICdcXG5cXG4nICtcbiAgICAnRGVmYXVsdHMgYmVpbmcgcmVwbGFjZWQ6XFxuJyArXG4gICAgZGVmYXVsdExpbmVzICtcbiAgICAnXFxuXFxuJ1xuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUVBLFNBQVMsV0FBVyxPQUE0QjtBQUM5QyxVQUFRLE9BQU8sTUFBTSxjQUFjLE9BQU8sTUFBTSxDQUFDLElBQUksSUFB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
