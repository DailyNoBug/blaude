#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime,
  useTheme
} from "./chunk-IVRGECFY.mjs";
import {
  init_react,
  react_default
} from "./chunk-TEJH3H3H.mjs";
import {
  env,
  init_env
} from "./chunk-JOMSGAK7.mjs";

// src/components/LogoV2/WelcomeV2.tsx
init_react_compiler_runtime();
init_react();
init_ink();
init_env();
var WELCOME_V2_WIDTH = 58;
function WelcomeV2() {
  const $ = c(35);
  const [theme] = useTheme();
  if (env.terminal === "Apple_Terminal") {
    let t02;
    if ($[0] !== theme) {
      t02 = /* @__PURE__ */ react_default.createElement(AppleTerminalWelcomeV2, { theme, welcomeMessage: "Welcome to Claude Code" });
      $[0] = theme;
      $[1] = t02;
    } else {
      t02 = $[1];
    }
    return t02;
  }
  if (["light", "light-daltonized", "light-ansi"].includes(theme)) {
    let t02;
    let t17;
    let t22;
    let t32;
    let t42;
    let t52;
    let t62;
    let t72;
    let t82;
    if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t02 = /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, "Welcome to Claude Code", " "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "v", MACRO.VERSION, " "));
      t17 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026");
      t22 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                                          ");
      t32 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                                          ");
      t42 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                                          ");
      t52 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "            \u2591\u2591\u2591\u2591\u2591\u2591                                        ");
      t62 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "    \u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                                      ");
      t72 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                                    ");
      t82 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                                          ");
      $[2] = t02;
      $[3] = t17;
      $[4] = t22;
      $[5] = t32;
      $[6] = t42;
      $[7] = t52;
      $[8] = t62;
      $[9] = t72;
      $[10] = t82;
    } else {
      t02 = $[2];
      t17 = $[3];
      t22 = $[4];
      t32 = $[5];
      t42 = $[6];
      t52 = $[7];
      t62 = $[8];
      t72 = $[9];
      t82 = $[10];
    }
    let t92;
    if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t92 = /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "                           \u2591\u2591\u2591\u2591"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "                     \u2588\u2588    "));
      $[11] = t92;
    } else {
      t92 = $[11];
    }
    let t102;
    let t112;
    if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t102 = /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "                         \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "               \u2588\u2588\u2592\u2592\u2588\u2588  "));
      t112 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                            \u2592\u2592      \u2588\u2588   \u2592");
      $[12] = t102;
      $[13] = t112;
    } else {
      t102 = $[12];
      t112 = $[13];
    }
    let t122;
    if ($[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t122 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "      ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_body" }, " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 "), "                         \u2592\u2592\u2591\u2591\u2592\u2592      \u2592 \u2592\u2592");
      $[14] = t122;
    } else {
      t122 = $[14];
    }
    let t132;
    if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t132 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "      ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_body", backgroundColor: "clawd_background" }, "\u2588\u2588\u2584\u2588\u2588\u2588\u2588\u2588\u2584\u2588\u2588"), "                           \u2592\u2592         \u2592\u2592 ");
      $[15] = t132;
    } else {
      t132 = $[15];
    }
    let t142;
    if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t142 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "      ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_body" }, " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 "), "                          \u2591          \u2592   ");
      $[16] = t142;
    } else {
      t142 = $[16];
    }
    let t152;
    if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t152 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { width: WELCOME_V2_WIDTH }, /* @__PURE__ */ react_default.createElement(ThemedText, null, t02, t17, t22, t32, t42, t52, t62, t72, t82, t92, t102, t112, t122, t132, t142, /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2026\u2026\u2026\u2026\u2026\u2026\u2026", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_body" }, "\u2588 \u2588   \u2588 \u2588"), "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2591\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2592\u2026\u2026\u2026\u2026")));
      $[17] = t152;
    } else {
      t152 = $[17];
    }
    return t152;
  }
  let t0;
  let t1;
  let t2;
  let t3;
  let t4;
  let t5;
  let t6;
  if ($[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, "Welcome to Claude Code", " "), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "v", MACRO.VERSION, " "));
    t1 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026");
    t2 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                                          ");
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "     *                                       \u2588\u2588\u2588\u2588\u2588\u2593\u2593\u2591     ");
    t4 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                 *         \u2588\u2588\u2588\u2593\u2591     \u2591\u2591   ");
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "            \u2591\u2591\u2591\u2591\u2591\u2591                        \u2588\u2588\u2588\u2593\u2591           ");
    t6 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "    \u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                      \u2588\u2588\u2588\u2593\u2591           ");
    $[18] = t0;
    $[19] = t1;
    $[20] = t2;
    $[21] = t3;
    $[22] = t4;
    $[23] = t5;
    $[24] = t6;
  } else {
    t0 = $[18];
    t1 = $[19];
    t2 = $[20];
    t3 = $[21];
    t4 = $[22];
    t5 = $[23];
    t6 = $[24];
  }
  let t10;
  let t11;
  let t7;
  let t8;
  let t9;
  if ($[25] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, "   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591    "), /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "*"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "                \u2588\u2588\u2593\u2591\u2591      \u2593   "));
    t8 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                             \u2591\u2593\u2593\u2588\u2588\u2588\u2593\u2593\u2591    ");
    t9 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " *                                 \u2591\u2591\u2591\u2591                   ");
    t10 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "                                 \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                 ");
    t11 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "                               \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591           ");
    $[25] = t10;
    $[26] = t11;
    $[27] = t7;
    $[28] = t8;
    $[29] = t9;
  } else {
    t10 = $[25];
    t11 = $[26];
    t7 = $[27];
    t8 = $[28];
    t9 = $[29];
  }
  let t12;
  if ($[30] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_body" }, " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 ");
    $[30] = t12;
  } else {
    t12 = $[30];
  }
  let t13;
  if ($[31] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "      ", t12, "                                       ", /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "*"), /* @__PURE__ */ react_default.createElement(ThemedText, null, " "));
    $[31] = t13;
  } else {
    t13 = $[31];
  }
  let t14;
  if ($[32] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "      ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_body" }, "\u2588\u2588\u2584\u2588\u2588\u2588\u2588\u2588\u2584\u2588\u2588"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "                        "), /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "*"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "                "));
    $[32] = t14;
  } else {
    t14 = $[32];
  }
  let t15;
  if ($[33] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "      ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_body" }, " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 "), "     *                                   ");
    $[33] = t15;
  } else {
    t15 = $[33];
  }
  let t16;
  if ($[34] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { width: WELCOME_V2_WIDTH }, /* @__PURE__ */ react_default.createElement(ThemedText, null, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t13, t14, t15, /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2026\u2026\u2026\u2026\u2026\u2026\u2026", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_body" }, "\u2588 \u2588   \u2588 \u2588"), "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026")));
    $[34] = t16;
  } else {
    t16 = $[34];
  }
  return t16;
}
function AppleTerminalWelcomeV2(t0) {
  const $ = c(44);
  const {
    theme,
    welcomeMessage
  } = t0;
  const isLightTheme = ["light", "light-daltonized", "light-ansi"].includes(theme);
  if (isLightTheme) {
    let t110;
    if ($[0] !== welcomeMessage) {
      t110 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, welcomeMessage, " ");
      $[0] = welcomeMessage;
      $[1] = t110;
    } else {
      t110 = $[1];
    }
    let t22;
    if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t22 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "v", MACRO.VERSION, " ");
      $[2] = t22;
    } else {
      t22 = $[2];
    }
    let t32;
    if ($[3] !== t110) {
      t32 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t110, t22);
      $[3] = t110;
      $[4] = t32;
    } else {
      t32 = $[4];
    }
    let t102;
    let t112;
    let t42;
    let t52;
    let t62;
    let t72;
    let t82;
    let t92;
    if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t42 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026");
      t52 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                                          ");
      t62 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                                          ");
      t72 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                                          ");
      t82 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "            \u2591\u2591\u2591\u2591\u2591\u2591                                        ");
      t92 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "    \u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                                      ");
      t102 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                                    ");
      t112 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                                          ");
      $[5] = t102;
      $[6] = t112;
      $[7] = t42;
      $[8] = t52;
      $[9] = t62;
      $[10] = t72;
      $[11] = t82;
      $[12] = t92;
    } else {
      t102 = $[5];
      t112 = $[6];
      t42 = $[7];
      t52 = $[8];
      t62 = $[9];
      t72 = $[10];
      t82 = $[11];
      t92 = $[12];
    }
    let t122;
    if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t122 = /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "                           \u2591\u2591\u2591\u2591"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "                     \u2588\u2588    "));
      $[13] = t122;
    } else {
      t122 = $[13];
    }
    let t132;
    let t142;
    let t152;
    if ($[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t132 = /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "                         \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "               \u2588\u2588\u2592\u2592\u2588\u2588  "));
      t142 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                            \u2592\u2592      \u2588\u2588   \u2592");
      t152 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                          \u2592\u2592\u2591\u2591\u2592\u2592      \u2592 \u2592\u2592");
      $[14] = t132;
      $[15] = t142;
      $[16] = t152;
    } else {
      t132 = $[14];
      t142 = $[15];
      t152 = $[16];
    }
    let t162;
    if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t162 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "      ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_body" }, "\u2597"), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_background", backgroundColor: "clawd_body" }, " ", "\u2597", "     ", "\u2596", " "), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_body" }, "\u2596"), "                           \u2592\u2592         \u2592\u2592 ");
      $[17] = t162;
    } else {
      t162 = $[17];
    }
    let t172;
    if ($[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t172 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "       ", /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: "clawd_body" }, " ".repeat(9)), "                           \u2591          \u2592   ");
      $[18] = t172;
    } else {
      t172 = $[18];
    }
    let t182;
    if ($[19] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t182 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2026\u2026\u2026\u2026\u2026\u2026\u2026", /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: "clawd_body" }, " "), /* @__PURE__ */ react_default.createElement(ThemedText, null, " "), /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: "clawd_body" }, " "), /* @__PURE__ */ react_default.createElement(ThemedText, null, "   "), /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: "clawd_body" }, " "), /* @__PURE__ */ react_default.createElement(ThemedText, null, " "), /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: "clawd_body" }, " "), "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2591\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2592\u2026\u2026\u2026\u2026");
      $[19] = t182;
    } else {
      t182 = $[19];
    }
    let t192;
    if ($[20] !== t32) {
      t192 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { width: WELCOME_V2_WIDTH }, /* @__PURE__ */ react_default.createElement(ThemedText, null, t32, t42, t52, t62, t72, t82, t92, t102, t112, t122, t132, t142, t152, t162, t172, t182));
      $[20] = t32;
      $[21] = t192;
    } else {
      t192 = $[21];
    }
    return t192;
  }
  let t1;
  if ($[22] !== welcomeMessage) {
    t1 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, welcomeMessage, " ");
    $[22] = welcomeMessage;
    $[23] = t1;
  } else {
    t1 = $[23];
  }
  let t2;
  if ($[24] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "v", MACRO.VERSION, " ");
    $[24] = t2;
  } else {
    t2 = $[24];
  }
  let t3;
  if ($[25] !== t1) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedText, null, t1, t2);
    $[25] = t1;
    $[26] = t3;
  } else {
    t3 = $[26];
  }
  let t4;
  let t5;
  let t6;
  let t7;
  let t8;
  let t9;
  if ($[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026");
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                                          ");
    t6 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "     *                                       \u2588\u2588\u2588\u2588\u2588\u2593\u2593\u2591     ");
    t7 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                 *         \u2588\u2588\u2588\u2593\u2591     \u2591\u2591   ");
    t8 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "            \u2591\u2591\u2591\u2591\u2591\u2591                        \u2588\u2588\u2588\u2593\u2591           ");
    t9 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "    \u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                      \u2588\u2588\u2588\u2593\u2591           ");
    $[27] = t4;
    $[28] = t5;
    $[29] = t6;
    $[30] = t7;
    $[31] = t8;
    $[32] = t9;
  } else {
    t4 = $[27];
    t5 = $[28];
    t6 = $[29];
    t7 = $[30];
    t8 = $[31];
    t9 = $[32];
  }
  let t10;
  let t11;
  let t12;
  let t13;
  let t14;
  if ($[33] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ react_default.createElement(ThemedText, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, "   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591    "), /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "*"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "                \u2588\u2588\u2593\u2591\u2591      \u2593   "));
    t11 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                             \u2591\u2593\u2593\u2588\u2588\u2588\u2593\u2593\u2591    ");
    t12 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, " *                                 \u2591\u2591\u2591\u2591                   ");
    t13 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "                                 \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                 ");
    t14 = /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "                               \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591           ");
    $[33] = t10;
    $[34] = t11;
    $[35] = t12;
    $[36] = t13;
    $[37] = t14;
  } else {
    t10 = $[33];
    t11 = $[34];
    t12 = $[35];
    t13 = $[36];
    t14 = $[37];
  }
  let t15;
  if ($[38] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "                                                      ", /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "*"), /* @__PURE__ */ react_default.createElement(ThemedText, null, " "));
    $[38] = t15;
  } else {
    t15 = $[38];
  }
  let t16;
  if ($[39] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "        ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_body" }, "\u2597"), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_background", backgroundColor: "clawd_body" }, " ", "\u2597", "     ", "\u2596", " "), /* @__PURE__ */ react_default.createElement(ThemedText, { color: "clawd_body" }, "\u2596"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "                       "), /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "*"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "                "));
    $[39] = t16;
  } else {
    t16 = $[39];
  }
  let t17;
  if ($[40] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t17 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "        ", /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: "clawd_body" }, " ".repeat(9)), "      *                                   ");
    $[40] = t17;
  } else {
    t17 = $[40];
  }
  let t18;
  if ($[41] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t18 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "\u2026\u2026\u2026\u2026\u2026\u2026\u2026", /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: "clawd_body" }, " "), /* @__PURE__ */ react_default.createElement(ThemedText, null, " "), /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: "clawd_body" }, " "), /* @__PURE__ */ react_default.createElement(ThemedText, null, "   "), /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: "clawd_body" }, " "), /* @__PURE__ */ react_default.createElement(ThemedText, null, " "), /* @__PURE__ */ react_default.createElement(ThemedText, { backgroundColor: "clawd_body" }, " "), "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026");
    $[41] = t18;
  } else {
    t18 = $[41];
  }
  let t19;
  if ($[42] !== t3) {
    t19 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { width: WELCOME_V2_WIDTH }, /* @__PURE__ */ react_default.createElement(ThemedText, null, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18));
    $[42] = t3;
    $[43] = t19;
  } else {
    t19 = $[43];
  }
  return t19;
}

export {
  WelcomeV2
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9nb1YyL1dlbGNvbWVWMi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCwgdXNlVGhlbWUgfSBmcm9tICdzcmMvaW5rLmpzJ1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52LmpzJ1xuXG5jb25zdCBXRUxDT01FX1YyX1dJRFRIID0gNThcblxuZXhwb3J0IGZ1bmN0aW9uIFdlbGNvbWVWMigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbdGhlbWVdID0gdXNlVGhlbWUoKVxuICBjb25zdCB3ZWxjb21lTWVzc2FnZSA9ICdXZWxjb21lIHRvIENsYXVkZSBDb2RlJ1xuXG4gIGlmIChlbnYudGVybWluYWwgPT09ICdBcHBsZV9UZXJtaW5hbCcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwcGxlVGVybWluYWxXZWxjb21lVjIgdGhlbWU9e3RoZW1lfSB3ZWxjb21lTWVzc2FnZT17d2VsY29tZU1lc3NhZ2V9IC8+XG4gICAgKVxuICB9XG5cbiAgaWYgKFsnbGlnaHQnLCAnbGlnaHQtZGFsdG9uaXplZCcsICdsaWdodC1hbnNpJ10uaW5jbHVkZXModGhlbWUpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggd2lkdGg9e1dFTENPTUVfVjJfV0lEVEh9PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhdWRlXCI+e3dlbGNvbWVNZXNzYWdlfSA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj52e01BQ1JPLlZFUlNJT059IDwvVGV4dD5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICB7J+KApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApid9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgeycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHsnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgeycgICAgICAgICAgICDilpHilpHilpHilpHilpHilpEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICB7JyAgICDilpHilpHilpEgICDilpHilpHilpHilpHilpHilpHilpHilpHilpHilpEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgeycgICDilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHsnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+eycgICAgICAgICAgICAgICAgICAgICAgICAgICDilpHilpHilpHilpEnfTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0PnsnICAgICAgICAgICAgICAgICAgICAg4paI4paIICAgICd9PC9UZXh0PlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPnsnICAgICAgICAgICAgICAgICAgICAgICAgIOKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkSd9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+eycgICAgICAgICAgICAgICDilojilojilpLilpLilojiloggICd9PC9UZXh0PlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHsnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilpLilpIgICAgICDilojiloggICDilpInfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHsnICAgICAgJ31cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhd2RfYm9keVwiPiDilojilojilojilojilojilojilojilojiloggPC9UZXh0PlxuICAgICAgICAgICAgeycgICAgICAgICAgICAgICAgICAgICAgICAg4paS4paS4paR4paR4paS4paSICAgICAg4paSIOKWkuKWkid9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgeycgICAgICAnfVxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF3ZF9ib2R5XCIgYmFja2dyb3VuZENvbG9yPVwiY2xhd2RfYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICDilojilojiloTilojilojilojilojilojiloTilojilohcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIHsnICAgICAgICAgICAgICAgICAgICAgICAgICAg4paS4paSICAgICAgICAg4paS4paSICd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgeycgICAgICAnfVxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF3ZF9ib2R5XCI+IOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiCA8L1RleHQ+XG4gICAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAg4paRICAgICAgICAgIOKWkiAgICd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgeyfigKbigKbigKbigKbigKbigKbigKYnfVxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF3ZF9ib2R5XCI+eyfilogg4paIICAg4paIIOKWiCd9PC9UZXh0PlxuICAgICAgICAgICAgeyfigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbilpHigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbilpLigKbigKbigKbigKYnfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHdpZHRoPXtXRUxDT01FX1YyX1dJRFRIfT5cbiAgICAgIDxUZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPnt3ZWxjb21lTWVzc2FnZX0gPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPnZ7TUFDUk8uVkVSU0lPTn0gPC9UZXh0PlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsn4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCmJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsnICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4paI4paI4paI4paI4paI4paT4paT4paRICAgICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgIOKWiOKWiOKWiOKWk+KWkSAgICAg4paR4paRICAgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7JyAgICAgICAgICAgIOKWkeKWkeKWkeKWkeKWkeKWkSAgICAgICAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWk+KWkSAgICAgICAgICAgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7JyAgICDilpHilpHilpEgICDilpHilpHilpHilpHilpHilpHilpHilpHilpHilpEgICAgICAgICAgICAgICAgICAgICAg4paI4paI4paI4paT4paRICAgICAgICAgICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUZXh0PnsnICAg4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paRICAgICd9PC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+KjwvVGV4dD5cbiAgICAgICAgICA8VGV4dD57JyAgICAgICAgICAgICAgICDilojilojilpPilpHilpEgICAgICDilpMgICAnfTwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKWkeKWk+KWk+KWiOKWiOKWiOKWk+KWk+KWkSAgICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIHsnICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilpHilpHilpHilpEgICAgICAgICAgICAgICAgICAgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkSAgICAgICAgICAgICAgICAgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpEgICAgICAgICAgICd9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgeycgICAgICAnfVxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhd2RfYm9keVwiPiDilojilojilojilojilojilojilojilojiloggPC9UZXh0PlxuICAgICAgICAgIHsnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ31cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj4qPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PiA8L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgeycgICAgICAnfVxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhd2RfYm9keVwiPuKWiOKWiOKWhOKWiOKWiOKWiOKWiOKWiOKWhOKWiOKWiDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD57JyAgICAgICAgICAgICAgICAgICAgICAgICd9PC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+KjwvVGV4dD5cbiAgICAgICAgICA8VGV4dD57JyAgICAgICAgICAgICAgICAnfTwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7JyAgICAgICd9XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF3ZF9ib2R5XCI+IOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiCA8L1RleHQ+XG4gICAgICAgICAgeycgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgeyfigKbigKbigKbigKbigKbigKbigKYnfVxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhd2RfYm9keVwiPnsn4paIIOKWiCAgIOKWiCDilognfTwvVGV4dD5cbiAgICAgICAgICB7J+KApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApid9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG50eXBlIEFwcGxlVGVybWluYWxXZWxjb21lVjJQcm9wcyA9IHtcbiAgdGhlbWU6IHN0cmluZ1xuICB3ZWxjb21lTWVzc2FnZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIEFwcGxlVGVybWluYWxXZWxjb21lVjIoe1xuICB0aGVtZSxcbiAgd2VsY29tZU1lc3NhZ2UsXG59OiBBcHBsZVRlcm1pbmFsV2VsY29tZVYyUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBpc0xpZ2h0VGhlbWUgPSBbJ2xpZ2h0JywgJ2xpZ2h0LWRhbHRvbml6ZWQnLCAnbGlnaHQtYW5zaSddLmluY2x1ZGVzKFxuICAgIHRoZW1lLFxuICApXG5cbiAgaWYgKGlzTGlnaHRUaGVtZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHdpZHRoPXtXRUxDT01FX1YyX1dJRFRIfT5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPnt3ZWxjb21lTWVzc2FnZX0gPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+dntNQUNSTy5WRVJTSU9OfSA8L1RleHQ+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgeyfigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKYnfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHsnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgeycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHsnICAgICAgICAgICAg4paR4paR4paR4paR4paR4paRICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgeycgICAg4paR4paR4paRICAg4paR4paR4paR4paR4paR4paR4paR4paR4paR4paRICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHsnICAg4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paRICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPnsnICAgICAgICAgICAgICAgICAgICAgICAgICAg4paR4paR4paR4paRJ308L1RleHQ+XG4gICAgICAgICAgICA8VGV4dD57JyAgICAgICAgICAgICAgICAgICAgIOKWiOKWiCAgICAnfTwvVGV4dD5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57JyAgICAgICAgICAgICAgICAgICAgICAgICDilpHilpHilpHilpHilpHilpHilpHilpHilpHilpEnfTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0PnsnICAgICAgICAgICAgICAg4paI4paI4paS4paS4paI4paIICAnfTwvVGV4dD5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4paS4paSICAgICAg4paI4paIICAg4paSJ31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKWkuKWkuKWkeKWkeKWkuKWkiAgICAgIOKWkiDilpLilpInfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHsnICAgICAgJ31cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhd2RfYm9keVwiPuKWlzwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhd2RfYmFja2dyb3VuZFwiIGJhY2tncm91bmRDb2xvcj1cImNsYXdkX2JvZHlcIj5cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAg4paXeycgICAgICd94paWeycgJ31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhd2RfYm9keVwiPuKWljwvVGV4dD5cbiAgICAgICAgICAgIHsnICAgICAgICAgICAgICAgICAgICAgICAgICAg4paS4paSICAgICAgICAg4paS4paSICd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgeycgICAgICAgJ31cbiAgICAgICAgICAgIDxUZXh0IGJhY2tncm91bmRDb2xvcj1cImNsYXdkX2JvZHlcIj57JyAnLnJlcGVhdCg5KX08L1RleHQ+XG4gICAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgIOKWkSAgICAgICAgICDilpIgICAnfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHsn4oCm4oCm4oCm4oCm4oCm4oCm4oCmJ31cbiAgICAgICAgICAgIDxUZXh0IGJhY2tncm91bmRDb2xvcj1cImNsYXdkX2JvZHlcIj4gPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+IDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGJhY2tncm91bmRDb2xvcj1cImNsYXdkX2JvZHlcIj4gPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+eycgICAnfTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGJhY2tncm91bmRDb2xvcj1cImNsYXdkX2JvZHlcIj4gPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+IDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGJhY2tncm91bmRDb2xvcj1cImNsYXdkX2JvZHlcIj4gPC9UZXh0PlxuICAgICAgICAgICAgeyfigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbilpHigKbigKbigKbigKbigKbigKbigKbigKbigKbigKbilpLigKbigKbigKbigKYnfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHdpZHRoPXtXRUxDT01FX1YyX1dJRFRIfT5cbiAgICAgIDxUZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPnt3ZWxjb21lTWVzc2FnZX0gPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPnZ7TUFDUk8uVkVSU0lPTn0gPC9UZXh0PlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsn4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCm4oCmJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsnICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4paI4paI4paI4paI4paI4paT4paT4paRICAgICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgIOKWiOKWiOKWiOKWk+KWkSAgICAg4paR4paRICAgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7JyAgICAgICAgICAgIOKWkeKWkeKWkeKWkeKWkeKWkSAgICAgICAgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWk+KWkSAgICAgICAgICAgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7JyAgICDilpHilpHilpEgICDilpHilpHilpHilpHilpHilpHilpHilpHilpHilpEgICAgICAgICAgICAgICAgICAgICAg4paI4paI4paI4paT4paRICAgICAgICAgICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUZXh0PnsnICAg4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paRICAgICd9PC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+KjwvVGV4dD5cbiAgICAgICAgICA8VGV4dD57JyAgICAgICAgICAgICAgICDilojilojilpPilpHilpEgICAgICDilpMgICAnfTwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKWkeKWk+KWk+KWiOKWiOKWiOKWk+KWk+KWkSAgICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgIHsnICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilpHilpHilpHilpEgICAgICAgICAgICAgICAgICAgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkSAgICAgICAgICAgICAgICAgJ31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICB7JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpHilpEgICAgICAgICAgICd9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgeycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfVxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPio8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+IDwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICB7JyAgICAgICAgJ31cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXdkX2JvZHlcIj7ilpc8L1RleHQ+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF3ZF9iYWNrZ3JvdW5kXCIgYmFja2dyb3VuZENvbG9yPVwiY2xhd2RfYm9keVwiPlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIOKWl3snICAgICAnfeKWlnsnICd9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhd2RfYm9keVwiPuKWljwvVGV4dD5cbiAgICAgICAgICA8VGV4dD57JyAgICAgICAgICAgICAgICAgICAgICAgJ308L1RleHQ+XG4gICAgICAgICAgPFRleHQgYm9sZD4qPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PnsnICAgICAgICAgICAgICAgICd9PC9UZXh0PlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsnICAgICAgICAnfVxuICAgICAgICAgIDxUZXh0IGJhY2tncm91bmRDb2xvcj1cImNsYXdkX2JvZHlcIj57JyAnLnJlcGVhdCg5KX08L1RleHQ+XG4gICAgICAgICAgeycgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIHsn4oCm4oCm4oCm4oCm4oCm4oCm4oCmJ31cbiAgICAgICAgICA8VGV4dCBiYWNrZ3JvdW5kQ29sb3I9XCJjbGF3ZF9ib2R5XCI+IDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD4gPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGJhY2tncm91bmRDb2xvcj1cImNsYXdkX2JvZHlcIj4gPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PnsnICAgJ308L1RleHQ+XG4gICAgICAgICAgPFRleHQgYmFja2dyb3VuZENvbG9yPVwiY2xhd2RfYm9keVwiPiA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+IDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBiYWNrZ3JvdW5kQ29sb3I9XCJjbGF3ZF9ib2R5XCI+IDwvVGV4dD5cbiAgICAgICAgICB7J+KApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApuKApid9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG1CQUFtQjtBQUVsQixTQUFBQyxZQUFBO0FBQUEsUUFBQUMsSUFBQUMsRUFBQSxFQUFBO0FBQ0wsUUFBQSxDQUFBQyxLQUFBLElBQWdCQyxTQUFTO0FBR3pCLE1BQUlDLElBQUdDLGFBQWMsa0JBQWdCO0FBQUEsUUFBQUM7QUFBQSxRQUFBTixFQUFBLENBQUEsTUFBQUUsT0FBQTtBQUVqQ0ksTUFBQUEsTUFBQSw0Q0FBQywwQkFBOEJKLE9BQXVCSyxnQkFKbkMsMEJBSWlEO0FBQUlQLFFBQUEsQ0FBQSxJQUFBRTtBQUFBRixRQUFBLENBQUEsSUFBQU07SUFBQSxPQUFBO0FBQUFBLE1BQUFBLE1BQUFOLEVBQUEsQ0FBQTtJQUFBO0FBQUEsV0FBeEVNO0VBQXdFO0FBSTVFLE1BQUksQ0FBQyxTQUFTLG9CQUFvQixZQUFZLEVBQUNFLFNBQVVOLEtBQUssR0FBQztBQUFBLFFBQUFJO0FBQUEsUUFBQUc7QUFBQSxRQUFBQztBQUFBLFFBQUFDO0FBQUEsUUFBQUM7QUFBQSxRQUFBQztBQUFBLFFBQUFDO0FBQUEsUUFBQUM7QUFBQSxRQUFBQztBQUFBLFFBQUFoQixFQUFBLENBQUEsTUFBQWlCLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFJdkRaLE1BQUFBLE1BQUEsNENBQUMsa0JBQ0MsNENBQUMsY0FBVyxPQUFBLFlBYkNDLDBC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QUFpQztBQUFBLE1BQUFqQyxFQUFBLEVBQUEsTUFBQWlCLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFDUGUsVUFBQSw0Q0FBQyxrQkFDRSw4Q0FDRCw0Q0FBQyxjQUFxQixpQkFBQSxnQkFBYSxHQUFDLEdBQ3BDLDRDQUFDLGtCQUFLLEdBQUMsR0FDUCw0Q0FBQyxjQUFxQixpQkFBQSxnQkFBYSxHQUFDLEdBQ3BDLDRDQUFDLGtCQUFNLEtBQU0sR0FDYiw0Q0FBQyxjQUFxQixpQkFBQSxnQkFBYSxHQUFDLEdBQ3BDLDRDQUFDLGtCQUFLLEdBQUMsR0FDUCw0Q0FBQyxjQUFxQixpQkFBQSxnQkFBYSxHQUFDLEdBQ25DLDhQQUNIO0FBQU9qQyxNQUFBLEVBQUEsSUFBQWlDO0VBQUEsT0FBQTtBQUFBQSxVQUFBakMsRUFBQSxFQUFBO0VBQUE7QUFBQSxNQUFBa0M7QUFBQSxNQUFBbEMsRUFBQSxFQUFBLE1BQUFXLElBQUE7QUF6RVh1QixVQUFBLDRDQUFDLHFCQUFXcEMsT0FBQUEsb0JBQ1YsNENBQUMsa0JBQ0NhLElBSUFDLElBR0FDLElBR0FDLElBR0FDLElBR0FDLElBR0FLLElBR0FDLEtBS0FDLEtBR0FDLEtBR0FDLEtBR0FDLEtBR0FDLEtBS0FDLEtBWUFHLEtBS0FFLEdBV0YsQ0FDRjtBQUFNakMsTUFBQSxFQUFBLElBQUFXO0FBQUFYLE1BQUEsRUFBQSxJQUFBa0M7RUFBQSxPQUFBO0FBQUFBLFVBQUFsQyxFQUFBLEVBQUE7RUFBQTtBQUFBLFNBM0VOa0M7QUEyRU07IiwKICAibmFtZXMiOiBbIldFTENPTUVfVjJfV0lEVEgiLCAiV2VsY29tZVYyIiwgIiQiLCAiX2MiLCAidGhlbWUiLCAidXNlVGhlbWUiLCAiZW52IiwgInRlcm1pbmFsIiwgInQwIiwgIndlbGNvbWVNZXNzYWdlIiwgImluY2x1ZGVzIiwgInQxIiwgInQyIiwgInQzIiwgInQ0IiwgInQ1IiwgInQ2IiwgInQ3IiwgInQ4IiwgIlN5bWJvbCIsICJmb3IiLCAiTUFDUk8iLCAiVkVSU0lPTiIsICJ0OSIsICJ0MTAiLCAidDExIiwgInQxMiIsICJ0MTMiLCAidDE0IiwgInQxNSIsICJ0MTYiLCAiQXBwbGVUZXJtaW5hbFdlbGNvbWVWMiIsICJpc0xpZ2h0VGhlbWUiLCAidDE3IiwgInJlcGVhdCIsICJ0MTgiLCAidDE5Il0KfQo=
