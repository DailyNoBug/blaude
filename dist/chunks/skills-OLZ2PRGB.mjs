#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  estimateSkillFrontmatterTokens,
  getCommandName,
  getSkillsPath,
  init_commands2 as init_commands,
  init_loadSkillsDir
} from "./chunk-FMU4URRE.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  ConfigurableShortcutHint,
  Dialog,
  init_ConfigurableShortcutHint,
  init_Dialog
} from "./chunk-PEMK4FQH.mjs";
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
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-HWTXKBLR.mjs";
import {
  createElement,
  init_react
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  capitalize_default,
  getDisplayPath,
  getSettingSourceName,
  init_capitalize,
  init_constants,
  init_file,
  init_stringUtils,
  plural
} from "./chunk-NKGQGSP5.mjs";
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
import {
  formatTokens,
  init_format
} from "./chunk-OGGCTXYU.mjs";
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

// src/components/skills/SkillsMenu.tsx
function getSourceTitle(source) {
  if (source === "plugin") {
    return "Plugin skills";
  }
  if (source === "mcp") {
    return "MCP skills";
  }
  return `${capitalize_default(getSettingSourceName(source))} skills`;
}
function getSourceSubtitle(source, skills) {
  if (source === "mcp") {
    const servers = [...new Set(skills.map((s) => {
      const idx = s.name.indexOf(":");
      return idx > 0 ? s.name.slice(0, idx) : null;
    }).filter((n) => n != null))];
    return servers.length > 0 ? servers.join(", ") : void 0;
  }
  const skillsPath = getDisplayPath(getSkillsPath(source, "skills"));
  const hasCommandsSkills = skills.some((s) => s.loadedFrom === "commands_DEPRECATED");
  return hasCommandsSkills ? `${skillsPath}, ${getDisplayPath(getSkillsPath(source, "commands"))}` : skillsPath;
}
function SkillsMenu(t0) {
  const $ = c(35);
  const {
    onExit,
    commands
  } = t0;
  let t1;
  if ($[0] !== commands) {
    t1 = commands.filter(_temp);
    $[0] = commands;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const skills = t1;
  let groups;
  if ($[2] !== skills) {
    groups = {
      policySettings: [],
      userSettings: [],
      projectSettings: [],
      localSettings: [],
      flagSettings: [],
      plugin: [],
      mcp: []
    };
    for (const skill of skills) {
      const source = skill.source;
      if (source in groups) {
        groups[source].push(skill);
      }
    }
    for (const group of Object.values(groups)) {
      group.sort(_temp2);
    }
    $[2] = skills;
    $[3] = groups;
  } else {
    groups = $[3];
  }
  const skillsBySource = groups;
  let t2;
  if ($[4] !== onExit) {
    t2 = () => {
      onExit("Skills dialog dismissed", {
        display: "system"
      });
    };
    $[4] = onExit;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  const handleCancel = t2;
  if (skills.length === 0) {
    let t32;
    if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t32 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Create skills in .claude/skills/ or ~/.claude/skills/");
      $[6] = t32;
    } else {
      t32 = $[6];
    }
    let t42;
    if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t42 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "close" }));
      $[7] = t42;
    } else {
      t42 = $[7];
    }
    let t52;
    if ($[8] !== handleCancel) {
      t52 = /* @__PURE__ */ createElement(Dialog, { title: "Skills", subtitle: "No skills found", onCancel: handleCancel, hideInputGuide: true }, t32, t42);
      $[8] = handleCancel;
      $[9] = t52;
    } else {
      t52 = $[9];
    }
    return t52;
  }
  const renderSkill = _temp3;
  let t3;
  if ($[10] !== skillsBySource) {
    t3 = (source_0) => {
      const groupSkills = skillsBySource[source_0];
      if (groupSkills.length === 0) {
        return null;
      }
      const title = getSourceTitle(source_0);
      const subtitle = getSourceSubtitle(source_0, groupSkills);
      return /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", key: source_0 }, /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(ThemedText, { bold: true, dimColor: true }, title), subtitle && /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, " (", subtitle, ")")), groupSkills.map((skill_1) => renderSkill(skill_1)));
    };
    $[10] = skillsBySource;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  const renderSkillGroup = t3;
  const t4 = skills.length;
  let t5;
  if ($[12] !== skills.length) {
    t5 = plural(skills.length, "skill");
    $[12] = skills.length;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  const t6 = `${t4} ${t5}`;
  let t7;
  if ($[14] !== renderSkillGroup) {
    t7 = renderSkillGroup("projectSettings");
    $[14] = renderSkillGroup;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== renderSkillGroup) {
    t8 = renderSkillGroup("userSettings");
    $[16] = renderSkillGroup;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  let t9;
  if ($[18] !== renderSkillGroup) {
    t9 = renderSkillGroup("policySettings");
    $[18] = renderSkillGroup;
    $[19] = t9;
  } else {
    t9 = $[19];
  }
  let t10;
  if ($[20] !== renderSkillGroup) {
    t10 = renderSkillGroup("plugin");
    $[20] = renderSkillGroup;
    $[21] = t10;
  } else {
    t10 = $[21];
  }
  let t11;
  if ($[22] !== renderSkillGroup) {
    t11 = renderSkillGroup("mcp");
    $[22] = renderSkillGroup;
    $[23] = t11;
  } else {
    t11 = $[23];
  }
  let t12;
  if ($[24] !== t10 || $[25] !== t11 || $[26] !== t7 || $[27] !== t8 || $[28] !== t9) {
    t12 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t7, t8, t9, t10, t11);
    $[24] = t10;
    $[25] = t11;
    $[26] = t7;
    $[27] = t8;
    $[28] = t9;
    $[29] = t12;
  } else {
    t12 = $[29];
  }
  let t13;
  if ($[30] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ createElement(ThemedText, { dimColor: true, italic: true }, /* @__PURE__ */ createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "close" }));
    $[30] = t13;
  } else {
    t13 = $[30];
  }
  let t14;
  if ($[31] !== handleCancel || $[32] !== t12 || $[33] !== t6) {
    t14 = /* @__PURE__ */ createElement(Dialog, { title: "Skills", subtitle: t6, onCancel: handleCancel, hideInputGuide: true }, t12, t13);
    $[31] = handleCancel;
    $[32] = t12;
    $[33] = t6;
    $[34] = t14;
  } else {
    t14 = $[34];
  }
  return t14;
}
function _temp3(skill_0) {
  const estimatedTokens = estimateSkillFrontmatterTokens(skill_0);
  const tokenDisplay = `~${formatTokens(estimatedTokens)}`;
  const pluginName = skill_0.source === "plugin" ? skill_0.pluginInfo?.pluginManifest.name : void 0;
  return /* @__PURE__ */ createElement(ThemedBox_default, { key: `${skill_0.name}-${skill_0.source}` }, /* @__PURE__ */ createElement(ThemedText, null, getCommandName(skill_0)), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, pluginName ? ` \xB7 ${pluginName}` : "", " \xB7 ", tokenDisplay, " description tokens"));
}
function _temp2(a, b) {
  return getCommandName(a).localeCompare(getCommandName(b));
}
function _temp(cmd) {
  return cmd.type === "prompt" && (cmd.loadedFrom === "skills" || cmd.loadedFrom === "commands_DEPRECATED" || cmd.loadedFrom === "plugin" || cmd.loadedFrom === "mcp");
}
var init_SkillsMenu = __esm({
  "src/components/skills/SkillsMenu.tsx"() {
    init_react_compiler_runtime();
    init_capitalize();
    init_react();
    init_commands();
    init_ink();
    init_loadSkillsDir();
    init_file();
    init_format();
    init_constants();
    init_stringUtils();
    init_ConfigurableShortcutHint();
    init_Dialog();
  }
});

// src/commands/skills/skills.tsx
async function call(onDone, context) {
  return /* @__PURE__ */ createElement(SkillsMenu, { onExit: onDone, commands: context.options.commands });
}
var init_skills = __esm({
  "src/commands/skills/skills.tsx"() {
    init_react();
    init_SkillsMenu();
  }
});
init_skills();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvc2tpbGxzL1NraWxsc01lbnUudHN4IiwgIi4uLy4uL3NyYy9jb21tYW5kcy9za2lsbHMvc2tpbGxzLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnbG9kYXNoLWVzL2NhcGl0YWxpemUuanMnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHR5cGUgQ29tbWFuZCxcbiAgdHlwZSBDb21tYW5kQmFzZSxcbiAgdHlwZSBDb21tYW5kUmVzdWx0RGlzcGxheSxcbiAgZ2V0Q29tbWFuZE5hbWUsXG4gIHR5cGUgUHJvbXB0Q29tbWFuZCxcbn0gZnJvbSAnLi4vLi4vY29tbWFuZHMuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQge1xuICBlc3RpbWF0ZVNraWxsRnJvbnRtYXR0ZXJUb2tlbnMsXG4gIGdldFNraWxsc1BhdGgsXG59IGZyb20gJy4uLy4uL3NraWxscy9sb2FkU2tpbGxzRGlyLmpzJ1xuaW1wb3J0IHsgZ2V0RGlzcGxheVBhdGggfSBmcm9tICcuLi8uLi91dGlscy9maWxlLmpzJ1xuaW1wb3J0IHsgZm9ybWF0VG9rZW5zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHtcbiAgZ2V0U2V0dGluZ1NvdXJjZU5hbWUsXG4gIHR5cGUgU2V0dGluZ1NvdXJjZSxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3MvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgcGx1cmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nVXRpbHMuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuLi9Db25maWd1cmFibGVTaG9ydGN1dEhpbnQuanMnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcblxuLy8gU2tpbGxzIGFyZSBhbHdheXMgUHJvbXB0Q29tbWFuZHMgd2l0aCBDb21tYW5kQmFzZSBwcm9wZXJ0aWVzXG50eXBlIFNraWxsQ29tbWFuZCA9IENvbW1hbmRCYXNlICYgUHJvbXB0Q29tbWFuZFxuXG50eXBlIFNraWxsU291cmNlID0gU2V0dGluZ1NvdXJjZSB8ICdwbHVnaW4nIHwgJ21jcCdcblxudHlwZSBQcm9wcyA9IHtcbiAgb25FeGl0OiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICApID0+IHZvaWRcbiAgY29tbWFuZHM6IENvbW1hbmRbXVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VUaXRsZShzb3VyY2U6IFNraWxsU291cmNlKTogc3RyaW5nIHtcbiAgaWYgKHNvdXJjZSA9PT0gJ3BsdWdpbicpIHtcbiAgICByZXR1cm4gJ1BsdWdpbiBza2lsbHMnXG4gIH1cbiAgaWYgKHNvdXJjZSA9PT0gJ21jcCcpIHtcbiAgICByZXR1cm4gJ01DUCBza2lsbHMnXG4gIH1cbiAgcmV0dXJuIGAke2NhcGl0YWxpemUoZ2V0U2V0dGluZ1NvdXJjZU5hbWUoc291cmNlKSl9IHNraWxsc2Bcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlU3VidGl0bGUoXG4gIHNvdXJjZTogU2tpbGxTb3VyY2UsXG4gIHNraWxsczogU2tpbGxDb21tYW5kW10sXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAvLyBNQ1Agc2tpbGxzIHNob3cgc2VydmVyIG5hbWVzOyBmaWxlLWJhc2VkIHNraWxscyBzaG93IGZpbGVzeXN0ZW0gcGF0aHMuXG4gIC8vIFNraWxsIG5hbWVzIGFyZSBgPHNlcnZlcj46PHNraWxsPmAsIG5vdCBgbWNwX188c2VydmVyPl9f4oCmYC5cbiAgaWYgKHNvdXJjZSA9PT0gJ21jcCcpIHtcbiAgICBjb25zdCBzZXJ2ZXJzID0gW1xuICAgICAgLi4ubmV3IFNldChcbiAgICAgICAgc2tpbGxzXG4gICAgICAgICAgLm1hcChzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHMubmFtZS5pbmRleE9mKCc6JylcbiAgICAgICAgICAgIHJldHVybiBpZHggPiAwID8gcy5uYW1lLnNsaWNlKDAsIGlkeCkgOiBudWxsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmlsdGVyKChuKTogbiBpcyBzdHJpbmcgPT4gbiAhPSBudWxsKSxcbiAgICAgICksXG4gICAgXVxuICAgIHJldHVybiBzZXJ2ZXJzLmxlbmd0aCA+IDAgPyBzZXJ2ZXJzLmpvaW4oJywgJykgOiB1bmRlZmluZWRcbiAgfVxuICBjb25zdCBza2lsbHNQYXRoID0gZ2V0RGlzcGxheVBhdGgoZ2V0U2tpbGxzUGF0aChzb3VyY2UsICdza2lsbHMnKSlcbiAgY29uc3QgaGFzQ29tbWFuZHNTa2lsbHMgPSBza2lsbHMuc29tZShcbiAgICBzID0+IHMubG9hZGVkRnJvbSA9PT0gJ2NvbW1hbmRzX0RFUFJFQ0FURUQnLFxuICApXG4gIHJldHVybiBoYXNDb21tYW5kc1NraWxsc1xuICAgID8gYCR7c2tpbGxzUGF0aH0sICR7Z2V0RGlzcGxheVBhdGgoZ2V0U2tpbGxzUGF0aChzb3VyY2UsICdjb21tYW5kcycpKX1gXG4gICAgOiBza2lsbHNQYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTa2lsbHNNZW51KHsgb25FeGl0LCBjb21tYW5kcyB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIC8vIEZpbHRlciBjb21tYW5kcyBmb3Igc2tpbGxzIGFuZCBjYXN0IHRvIFNraWxsQ29tbWFuZFxuICBjb25zdCBza2lsbHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gY29tbWFuZHMuZmlsdGVyKFxuICAgICAgKGNtZCk6IGNtZCBpcyBTa2lsbENvbW1hbmQgPT5cbiAgICAgICAgY21kLnR5cGUgPT09ICdwcm9tcHQnICYmXG4gICAgICAgIChjbWQubG9hZGVkRnJvbSA9PT0gJ3NraWxscycgfHxcbiAgICAgICAgICBjbWQubG9hZGVkRnJvbSA9PT0gJ2NvbW1hbmRzX0RFUFJFQ0FURUQnIHx8XG4gICAgICAgICAgY21kLmxvYWRlZEZyb20gPT09ICdwbHVnaW4nIHx8XG4gICAgICAgICAgY21kLmxvYWRlZEZyb20gPT09ICdtY3AnKSxcbiAgICApXG4gIH0sIFtjb21tYW5kc10pXG5cbiAgY29uc3Qgc2tpbGxzQnlTb3VyY2UgPSB1c2VNZW1vKCgpOiBSZWNvcmQ8U2tpbGxTb3VyY2UsIFNraWxsQ29tbWFuZFtdPiA9PiB7XG4gICAgY29uc3QgZ3JvdXBzOiBSZWNvcmQ8U2tpbGxTb3VyY2UsIFNraWxsQ29tbWFuZFtdPiA9IHtcbiAgICAgIHBvbGljeVNldHRpbmdzOiBbXSxcbiAgICAgIHVzZXJTZXR0aW5nczogW10sXG4gICAgICBwcm9qZWN0U2V0dGluZ3M6IFtdLFxuICAgICAgbG9jYWxTZXR0aW5nczogW10sXG4gICAgICBmbGFnU2V0dGluZ3M6IFtdLFxuICAgICAgcGx1Z2luOiBbXSxcbiAgICAgIG1jcDogW10sXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBza2lsbCBvZiBza2lsbHMpIHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHNraWxsLnNvdXJjZSBhcyBTa2lsbFNvdXJjZVxuICAgICAgaWYgKHNvdXJjZSBpbiBncm91cHMpIHtcbiAgICAgICAgZ3JvdXBzW3NvdXJjZV0ucHVzaChza2lsbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIE9iamVjdC52YWx1ZXMoZ3JvdXBzKSkge1xuICAgICAgZ3JvdXAuc29ydCgoYSwgYikgPT4gZ2V0Q29tbWFuZE5hbWUoYSkubG9jYWxlQ29tcGFyZShnZXRDb21tYW5kTmFtZShiKSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3Vwc1xuICB9LCBbc2tpbGxzXSlcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKTogdm9pZCA9PiB7XG4gICAgb25FeGl0KCdTa2lsbHMgZGlhbG9nIGRpc21pc3NlZCcsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgfVxuXG4gIGlmIChza2lsbHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEaWFsb2dcbiAgICAgICAgdGl0bGU9XCJTa2lsbHNcIlxuICAgICAgICBzdWJ0aXRsZT1cIk5vIHNraWxscyBmb3VuZFwiXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICAgIGhpZGVJbnB1dEd1aWRlXG4gICAgICA+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIENyZWF0ZSBza2lsbHMgaW4gLmNsYXVkZS9za2lsbHMvIG9yIH4vLmNsYXVkZS9za2lsbHMvXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgICAgIGFjdGlvbj1cImNvbmZpcm06bm9cIlxuICAgICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImNsb3NlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0RpYWxvZz5cbiAgICApXG4gIH1cblxuICBjb25zdCByZW5kZXJTa2lsbCA9IChza2lsbDogU2tpbGxDb21tYW5kKSA9PiB7XG4gICAgY29uc3QgZXN0aW1hdGVkVG9rZW5zID0gZXN0aW1hdGVTa2lsbEZyb250bWF0dGVyVG9rZW5zKHNraWxsKVxuICAgIGNvbnN0IHRva2VuRGlzcGxheSA9IGB+JHtmb3JtYXRUb2tlbnMoZXN0aW1hdGVkVG9rZW5zKX1gXG4gICAgY29uc3QgcGx1Z2luTmFtZSA9XG4gICAgICBza2lsbC5zb3VyY2UgPT09ICdwbHVnaW4nXG4gICAgICAgID8gc2tpbGwucGx1Z2luSW5mbz8ucGx1Z2luTWFuaWZlc3QubmFtZVxuICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3gga2V5PXtgJHtza2lsbC5uYW1lfS0ke3NraWxsLnNvdXJjZX1gfT5cbiAgICAgICAgPFRleHQ+e2dldENvbW1hbmROYW1lKHNraWxsKX08L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIHtwbHVnaW5OYW1lID8gYCDCtyAke3BsdWdpbk5hbWV9YCA6ICcnfSDCtyB7dG9rZW5EaXNwbGF5fSBkZXNjcmlwdGlvblxuICAgICAgICAgIHRva2Vuc1xuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb25zdCByZW5kZXJTa2lsbEdyb3VwID0gKHNvdXJjZTogU2tpbGxTb3VyY2UpID0+IHtcbiAgICBjb25zdCBncm91cFNraWxscyA9IHNraWxsc0J5U291cmNlW3NvdXJjZV1cbiAgICBpZiAoZ3JvdXBTa2lsbHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgdGl0bGUgPSBnZXRTb3VyY2VUaXRsZShzb3VyY2UpXG4gICAgY29uc3Qgc3VidGl0bGUgPSBnZXRTb3VyY2VTdWJ0aXRsZShzb3VyY2UsIGdyb3VwU2tpbGxzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGtleT17c291cmNlfT5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dCBib2xkIGRpbUNvbG9yPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICB7c3VidGl0bGUgJiYgPFRleHQgZGltQ29sb3I+ICh7c3VidGl0bGV9KTwvVGV4dD59XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7Z3JvdXBTa2lsbHMubWFwKHNraWxsID0+IHJlbmRlclNraWxsKHNraWxsKSl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiU2tpbGxzXCJcbiAgICAgIHN1YnRpdGxlPXtgJHtza2lsbHMubGVuZ3RofSAke3BsdXJhbChza2lsbHMubGVuZ3RoLCAnc2tpbGwnKX1gfVxuICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cbiAgICAgIGhpZGVJbnB1dEd1aWRlXG4gICAgPlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAge3JlbmRlclNraWxsR3JvdXAoJ3Byb2plY3RTZXR0aW5ncycpfVxuICAgICAgICB7cmVuZGVyU2tpbGxHcm91cCgndXNlclNldHRpbmdzJyl9XG4gICAgICAgIHtyZW5kZXJTa2lsbEdyb3VwKCdwb2xpY3lTZXR0aW5ncycpfVxuICAgICAgICB7cmVuZGVyU2tpbGxHcm91cCgncGx1Z2luJyl9XG4gICAgICAgIHtyZW5kZXJTa2lsbEdyb3VwKCdtY3AnKX1cbiAgICAgIDwvQm94PlxuICAgICAgPFRleHQgZGltQ29sb3IgaXRhbGljPlxuICAgICAgICA8Q29uZmlndXJhYmxlU2hvcnRjdXRIaW50XG4gICAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgICAgY29udGV4dD1cIkNvbmZpcm1hdGlvblwiXG4gICAgICAgICAgZmFsbGJhY2s9XCJFc2NcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiY2xvc2VcIlxuICAgICAgICAvPlxuICAgICAgPC9UZXh0PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IExvY2FsSlNYQ29tbWFuZENvbnRleHQgfSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IFNraWxsc01lbnUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NraWxscy9Ta2lsbHNNZW51LmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRPbkRvbmUgfSBmcm9tICcuLi8uLi90eXBlcy9jb21tYW5kLmpzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4gIGNvbnRleHQ6IExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG4pOiBQcm9taXNlPFJlYWN0LlJlYWN0Tm9kZT4ge1xuICByZXR1cm4gPFNraWxsc01lbnUgb25FeGl0PXtvbkRvbmV9IGNvbW1hbmRzPXtjb250ZXh0Lm9wdGlvbnMuY29tbWFuZHN9IC8+XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBLFNBQVNBLGVBQWVDLFFBQTZCO0FBQ25ELE1BQUlBLFdBQVcsVUFBVTtBQUN2QixXQUFPO0VBQ1Q7QUFDQSxNQUFJQSxXQUFXLE9BQU87QUFDcEIsV0FBTztFQUNUO0FBQ0EsU0FBTyxHQUFHQyxtQkFBV0MscUJBQXFCRixNQUFNLENBQUMsQ0FBQztBQUNwRDtBQUVBLFNBQVNHLGtCQUNQSCxRQUNBSSxRQUNvQjtBQUdwQixNQUFJSixXQUFXLE9BQU87QUFDcEIsVUFBTUssVUFBVSxDQUNkLEdBQUcsSUFBSUMsSUFDTEYsT0FDR0csSUFBSUMsT0FBSztBQUNSLFlBQU1DLE1BQU1ELEVBQUVFLEtBQUtDLFFBQVEsR0FBRztBQUM5QixhQUFPRixNQUFNLElBQUlELEVBQUVFLEtBQUtFLE1BQU0sR0FBR0gsR0FBRyxJQUFJO0lBQzFDLENBQUMsRUFDQUksT0FBTyxDQUFDQyxNQUFtQkEsS0FBSyxJQUFJLENBQ3pDLENBQUM7QUFFSCxXQUFPVCxRQUFRVSxTQUFTLElBQUlWLFFBQVFXLEtBQUssSUFBSSxJQUFJQztFQUNuRDtBQUNBLFFBQU1DLGFBQWFDLGVBQWVDLGNBQWNwQixRQUFRLFFBQVEsQ0FBQztBQUNqRSxRQUFNcUIsb0JBQW9CakIsT0FBT2tC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LFFBQUt4QyxNQUFPLE1BQ3JDLDhCQUFDLGtCQUFNa0YsZUFBZTFDLE9BQUssQ0FBRSxHQUM3Qiw4QkFBQyxjQUFLLFVBQUEsUUFDSHVDLGFBQUEsU0FBbUJBLFVBQVUsS0FBN0IsSUFBcUMsVUFBSUYsY0FBYSxxQkFFekQsQ0FDRjtBQUFNO0FBaEZMLFNBQUEvQixPQUFBcUMsR0FBQUMsR0FBQTtBQUFBLFNBZ0NvQkYsZUFBZUMsQ0FBQyxFQUFDRSxjQUFlSCxlQUFlRSxDQUFDLENBQUM7QUFBQztBQWhDdEUsU0FBQXJELE1BQUF1RCxLQUFBO0FBQUEsU0FLQ0EsSUFBR0MsU0FBVSxhQUNaRCxJQUFHL0QsZUFBZ0IsWUFDbEIrRCxJQUFHL0QsZUFBZ0IseUJBQ25CK0QsSUFBRy9ELGVBQWdCLFlBQ25CK0QsSUFBRy9ELGVBQWdCO0FBQU07Ozs7QUFyRm5DO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7O0FDbEJBLGVBQXNCaUUsS0FDcEJDLFFBQ0FDLFNBQzBCO0FBQzFCLFNBQU8sOEJBQUMsY0FBVyxRQUFRRCxRQUFRLFVBQVVDLFFBQVFDLFFBQVFDLFVBQVM7QUFDeEU7QUFWQTs7O0FBRUE7OzsiLAogICJuYW1lcyI6IFsiZ2V0U291cmNlVGl0bGUiLCAic291cmNlIiwgImNhcGl0YWxpemUiLCAiZ2V0U2V0dGluZ1NvdXJjZU5hbWUiLCAiZ2V0U291cmNlU3VidGl0bGUiLCAic2tpbGxzIiwgInNlcnZlcnMiLCAiU2V0IiwgIm1hcCIsICJzIiwgImlkeCIsICJuYW1lIiwgImluZGV4T2YiLCAic2xpY2UiLCAiZmlsdGVyIiwgIm4iLCAibGVuZ3RoIiwgImpvaW4iLCAidW5kZWZpbmVkIiwgInNraWxsc1BhdGgiLCAiZ2V0RGlzcGxheVBhdGgiLCAiZ2V0U2tpbGxzUGF0aCIsICJoYXNDb21tYW5kc1NraWxscyIsICJzb21lIiwgImxvYWRlZEZyb20iLCAiU2tpbGxzTWVudSIsICJ0MCIsICIkIiwgIl9jIiwgIm9uRXhpdCIsICJjb21tYW5kcyIsICJ0MSIsICJfdGVtcCIsICJncm91cHMiLCAicG9saWN5U2V0dGluZ3MiLCAidXNlclNldHRpbmdzIiwgInByb2plY3RTZXR0aW5ncyIsICJsb2NhbFNldHRpbmdzIiwgImZsYWdTZXR0aW5ncyIsICJwbHVnaW4iLCAibWNwIiwgInNraWxsIiwgInB1c2giLCAiZ3JvdXAiLCAiT2JqZWN0IiwgInZhbHVlcyIsICJzb3J0IiwgIl90ZW1wMiIsICJza2lsbHNCeVNvdXJjZSIsICJ0MiIsICJkaXNwbGF5IiwgImhhbmRsZUNhbmNlbCIsICJ0MyIsICJTeW1ib2wiLCAiZm9yIiwgInQ0IiwgInQ1IiwgInJlbmRlclNraWxsIiwgIl90ZW1wMyIsICJzb3VyY2VfMCIsICJncm91cFNraWxscyIsICJ0aXRsZSIsICJzdWJ0aXRsZSIsICJza2lsbF8xIiwgInJlbmRlclNraWxsR3JvdXAiLCAicGx1cmFsIiwgInQ2IiwgInQ3IiwgInQ4IiwgInQ5IiwgInQxMCIsICJ0MTEiLCAidDEyIiwgInQxMyIsICJ0MTQiLCAic2tpbGxfMCIsICJlc3RpbWF0ZWRUb2tlbnMiLCAiZXN0aW1hdGVTa2lsbEZyb250bWF0dGVyVG9rZW5zIiwgInRva2VuRGlzcGxheSIsICJmb3JtYXRUb2tlbnMiLCAicGx1Z2luTmFtZSIsICJwbHVnaW5JbmZvIiwgInBsdWdpbk1hbmlmZXN0IiwgImdldENvbW1hbmROYW1lIiwgImEiLCAiYiIsICJsb2NhbGVDb21wYXJlIiwgImNtZCIsICJ0eXBlIiwgImNhbGwiLCAib25Eb25lIiwgImNvbnRleHQiLCAib3B0aW9ucyIsICJjb21tYW5kcyJdCn0K
