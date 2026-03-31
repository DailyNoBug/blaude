#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
import {
  getGraphemeSegmenter,
  getRelativeTimeFormat,
  getTimeZone,
  init_intl
} from "./chunk-SETG7O3F.mjs";
import {
  getFsImplementation,
  init_debug,
  init_fsOperations,
  init_slowOperations,
  logForDebugging,
  writeFileSync_DEPRECATED
} from "./chunk-L2VTD674.mjs";
import {
  getSessionId,
  init_state
} from "./chunk-NGSB34MB.mjs";
import {
  getClaudeConfigHomeDir,
  init_envUtils,
  isEnvTruthy
} from "./chunk-6NQGQQQI.mjs";
import {
  __commonJS,
  __esm,
  __require,
  __toESM
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/emoji-regex@10.6.0/node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS({
  "node_modules/.pnpm/emoji-regex@10.6.0/node_modules/emoji-regex/index.js"(exports, module) {
    module.exports = () => {
      return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
    };
  }
});

// node_modules/.pnpm/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/lookup-data.js
var ambiguousRanges, fullwidthRanges, halfwidthRanges, narrowRanges, wideRanges;
var init_lookup_data = __esm({
  "node_modules/.pnpm/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/lookup-data.js"() {
    ambiguousRanges = [161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208, 208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252, 254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319, 322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466, 468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713, 715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961, 963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221, 8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308, 8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470, 8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585, 8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712, 8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741, 8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801, 8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869, 8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633, 9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681, 9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792, 9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919, 9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977, 9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743, 65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373, 127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109];
    fullwidthRanges = [12288, 12288, 65281, 65376, 65504, 65510];
    halfwidthRanges = [8361, 8361, 65377, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65512, 65518];
    narrowRanges = [32, 126, 162, 163, 165, 166, 172, 172, 175, 175, 10214, 10221, 10629, 10630];
    wideRanges = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101589, 101631, 101662, 101760, 101874, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110882, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110951, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128728, 128732, 128735, 128747, 128748, 128756, 128764, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129674, 129678, 129734, 129736, 129736, 129741, 129756, 129759, 129770, 129775, 129784, 131072, 196605, 196608, 262141];
  }
});

// node_modules/.pnpm/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/utilities.js
var isInRange;
var init_utilities = __esm({
  "node_modules/.pnpm/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/utilities.js"() {
    isInRange = (ranges, codePoint) => {
      let low = 0;
      let high = Math.floor(ranges.length / 2) - 1;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const i = mid * 2;
        if (codePoint < ranges[i]) {
          high = mid - 1;
        } else if (codePoint > ranges[i + 1]) {
          low = mid + 1;
        } else {
          return true;
        }
      }
      return false;
    };
  }
});

// node_modules/.pnpm/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/lookup.js
function findWideFastPathRange(ranges) {
  let fastPathStart = ranges[0];
  let fastPathEnd = ranges[1];
  for (let index = 0; index < ranges.length; index += 2) {
    const start = ranges[index];
    const end = ranges[index + 1];
    if (commonCjkCodePoint >= start && commonCjkCodePoint <= end) {
      return [start, end];
    }
    if (end - start > fastPathEnd - fastPathStart) {
      fastPathStart = start;
      fastPathEnd = end;
    }
  }
  return [fastPathStart, fastPathEnd];
}
var minimumAmbiguousCodePoint, maximumAmbiguousCodePoint, minimumFullWidthCodePoint, maximumFullWidthCodePoint, minimumHalfWidthCodePoint, maximumHalfWidthCodePoint, minimumNarrowCodePoint, maximumNarrowCodePoint, minimumWideCodePoint, maximumWideCodePoint, commonCjkCodePoint, wideFastPathStart, wideFastPathEnd, isAmbiguous, isFullWidth, isWide;
var init_lookup = __esm({
  "node_modules/.pnpm/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/lookup.js"() {
    init_lookup_data();
    init_utilities();
    minimumAmbiguousCodePoint = ambiguousRanges[0];
    maximumAmbiguousCodePoint = ambiguousRanges.at(-1);
    minimumFullWidthCodePoint = fullwidthRanges[0];
    maximumFullWidthCodePoint = fullwidthRanges.at(-1);
    minimumHalfWidthCodePoint = halfwidthRanges[0];
    maximumHalfWidthCodePoint = halfwidthRanges.at(-1);
    minimumNarrowCodePoint = narrowRanges[0];
    maximumNarrowCodePoint = narrowRanges.at(-1);
    minimumWideCodePoint = wideRanges[0];
    maximumWideCodePoint = wideRanges.at(-1);
    commonCjkCodePoint = 19968;
    [wideFastPathStart, wideFastPathEnd] = findWideFastPathRange(wideRanges);
    isAmbiguous = (codePoint) => {
      if (codePoint < minimumAmbiguousCodePoint || codePoint > maximumAmbiguousCodePoint) {
        return false;
      }
      return isInRange(ambiguousRanges, codePoint);
    };
    isFullWidth = (codePoint) => {
      if (codePoint < minimumFullWidthCodePoint || codePoint > maximumFullWidthCodePoint) {
        return false;
      }
      return isInRange(fullwidthRanges, codePoint);
    };
    isWide = (codePoint) => {
      if (codePoint >= wideFastPathStart && codePoint <= wideFastPathEnd) {
        return true;
      }
      if (codePoint < minimumWideCodePoint || codePoint > maximumWideCodePoint) {
        return false;
      }
      return isInRange(wideRanges, codePoint);
    };
  }
});

// node_modules/.pnpm/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/index.js
function validate(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
  validate(codePoint);
  if (isFullWidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
    return 2;
  }
  return 1;
}
var init_get_east_asian_width = __esm({
  "node_modules/.pnpm/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/index.js"() {
    init_lookup();
    init_lookup();
  }
});

// node_modules/.pnpm/ansi-regex@6.2.2/node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const osc = `(?:\\u001B\\][\\s\\S]*?${ST})`;
  const csi = "[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";
  const pattern = `${osc}|${csi}`;
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}
var init_ansi_regex = __esm({
  "node_modules/.pnpm/ansi-regex@6.2.2/node_modules/ansi-regex/index.js"() {
  }
});

// node_modules/.pnpm/strip-ansi@7.2.0/node_modules/strip-ansi/index.js
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  if (!string.includes("\x1B") && !string.includes("\x9B")) {
    return string;
  }
  return string.replace(regex, "");
}
var regex;
var init_strip_ansi = __esm({
  "node_modules/.pnpm/strip-ansi@7.2.0/node_modules/strip-ansi/index.js"() {
    init_ansi_regex();
    regex = ansiRegex();
  }
});

// src/ink/stringWidth.ts
function stringWidthJavaScript(str) {
  if (typeof str !== "string" || str.length === 0) {
    return 0;
  }
  let isPureAscii = true;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 127 || code === 27) {
      isPureAscii = false;
      break;
    }
  }
  if (isPureAscii) {
    let width2 = 0;
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (code > 31) {
        width2++;
      }
    }
    return width2;
  }
  if (str.includes("\x1B")) {
    str = stripAnsi(str);
    if (str.length === 0) {
      return 0;
    }
  }
  if (!needsSegmentation(str)) {
    let width2 = 0;
    for (const char of str) {
      const codePoint = char.codePointAt(0);
      if (!isZeroWidth(codePoint)) {
        width2 += eastAsianWidth(codePoint, { ambiguousAsWide: false });
      }
    }
    return width2;
  }
  let width = 0;
  for (const { segment: grapheme } of getGraphemeSegmenter().segment(str)) {
    EMOJI_REGEX.lastIndex = 0;
    if (EMOJI_REGEX.test(grapheme)) {
      width += getEmojiWidth(grapheme);
      continue;
    }
    for (const char of grapheme) {
      const codePoint = char.codePointAt(0);
      if (!isZeroWidth(codePoint)) {
        width += eastAsianWidth(codePoint, { ambiguousAsWide: false });
        break;
      }
    }
  }
  return width;
}
function needsSegmentation(str) {
  for (const char of str) {
    const cp = char.codePointAt(0);
    if (cp >= 127744 && cp <= 129791) return true;
    if (cp >= 9728 && cp <= 10175) return true;
    if (cp >= 127462 && cp <= 127487) return true;
    if (cp >= 65024 && cp <= 65039) return true;
    if (cp === 8205) return true;
  }
  return false;
}
function getEmojiWidth(grapheme) {
  const first = grapheme.codePointAt(0);
  if (first >= 127462 && first <= 127487) {
    let count = 0;
    for (const _ of grapheme) count++;
    return count === 1 ? 1 : 2;
  }
  if (grapheme.length === 2) {
    const second = grapheme.codePointAt(1);
    if (second === 65039 && (first >= 48 && first <= 57 || first === 35 || first === 42)) {
      return 1;
    }
  }
  return 2;
}
function isZeroWidth(codePoint) {
  if (codePoint >= 32 && codePoint < 127) return false;
  if (codePoint >= 160 && codePoint < 768) return codePoint === 173;
  if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) return true;
  if (codePoint >= 8203 && codePoint <= 8205 || // ZW space/joiner
  codePoint === 65279 || // BOM
  codePoint >= 8288 && codePoint <= 8292) {
    return true;
  }
  if (codePoint >= 65024 && codePoint <= 65039 || codePoint >= 917760 && codePoint <= 917999) {
    return true;
  }
  if (codePoint >= 768 && codePoint <= 879 || codePoint >= 6832 && codePoint <= 6911 || codePoint >= 7616 && codePoint <= 7679 || codePoint >= 8400 && codePoint <= 8447 || codePoint >= 65056 && codePoint <= 65071) {
    return true;
  }
  if (codePoint >= 2304 && codePoint <= 3407) {
    const offset = codePoint & 127;
    if (offset <= 3) return true;
    if (offset >= 58 && offset <= 79) return true;
    if (offset >= 81 && offset <= 87) return true;
    if (offset >= 98 && offset <= 99) return true;
  }
  if (codePoint === 3633 || // Thai MAI HAN-AKAT
  codePoint >= 3636 && codePoint <= 3642 || // Thai vowel signs (skip U+0E32, U+0E33)
  codePoint >= 3655 && codePoint <= 3662 || // Thai vowel signs and marks
  codePoint === 3761 || // Lao MAI KAN
  codePoint >= 3764 && codePoint <= 3772 || // Lao vowel signs (skip U+0EB2, U+0EB3)
  codePoint >= 3784 && codePoint <= 3789) {
    return true;
  }
  if (codePoint >= 1536 && codePoint <= 1541 || codePoint === 1757 || codePoint === 1807 || codePoint === 2274) {
    return true;
  }
  if (codePoint >= 55296 && codePoint <= 57343) return true;
  if (codePoint >= 917504 && codePoint <= 917631) return true;
  return false;
}
var import_emoji_regex, EMOJI_REGEX, bunStringWidth, BUN_STRING_WIDTH_OPTS, stringWidth;
var init_stringWidth = __esm({
  "src/ink/stringWidth.ts"() {
    import_emoji_regex = __toESM(require_emoji_regex());
    init_get_east_asian_width();
    init_strip_ansi();
    init_intl();
    EMOJI_REGEX = (0, import_emoji_regex.default)();
    bunStringWidth = typeof Bun !== "undefined" && typeof Bun.stringWidth === "function" ? Bun.stringWidth : null;
    BUN_STRING_WIDTH_OPTS = { ambiguousIsNarrow: true };
    stringWidth = bunStringWidth ? (str) => bunStringWidth(str, BUN_STRING_WIDTH_OPTS) : stringWidthJavaScript;
  }
});

// src/utils/truncate.ts
function truncatePathMiddle(path, maxLength) {
  if (stringWidth(path) <= maxLength) {
    return path;
  }
  if (maxLength <= 0) {
    return "\u2026";
  }
  if (maxLength < 5) {
    return truncateToWidth(path, maxLength);
  }
  const lastSlash = path.lastIndexOf("/");
  const filename = lastSlash >= 0 ? path.slice(lastSlash) : path;
  const directory = lastSlash >= 0 ? path.slice(0, lastSlash) : "";
  const filenameWidth = stringWidth(filename);
  if (filenameWidth >= maxLength - 1) {
    return truncateStartToWidth(path, maxLength);
  }
  const availableForDir = maxLength - 1 - filenameWidth;
  if (availableForDir <= 0) {
    return truncateStartToWidth(filename, maxLength);
  }
  const truncatedDir = truncateToWidthNoEllipsis(directory, availableForDir);
  return truncatedDir + "\u2026" + filename;
}
function truncateToWidth(text, maxWidth) {
  if (stringWidth(text) <= maxWidth) return text;
  if (maxWidth <= 1) return "\u2026";
  let width = 0;
  let result = "";
  for (const { segment } of getGraphemeSegmenter().segment(text)) {
    const segWidth = stringWidth(segment);
    if (width + segWidth > maxWidth - 1) break;
    result += segment;
    width += segWidth;
  }
  return result + "\u2026";
}
function truncateStartToWidth(text, maxWidth) {
  if (stringWidth(text) <= maxWidth) return text;
  if (maxWidth <= 1) return "\u2026";
  const segments = [...getGraphemeSegmenter().segment(text)];
  let width = 0;
  let startIdx = segments.length;
  for (let i = segments.length - 1; i >= 0; i--) {
    const segWidth = stringWidth(segments[i].segment);
    if (width + segWidth > maxWidth - 1) break;
    width += segWidth;
    startIdx = i;
  }
  return "\u2026" + segments.slice(startIdx).map((s) => s.segment).join("");
}
function truncateToWidthNoEllipsis(text, maxWidth) {
  if (stringWidth(text) <= maxWidth) return text;
  if (maxWidth <= 0) return "";
  let width = 0;
  let result = "";
  for (const { segment } of getGraphemeSegmenter().segment(text)) {
    const segWidth = stringWidth(segment);
    if (width + segWidth > maxWidth) break;
    result += segment;
    width += segWidth;
  }
  return result;
}
function truncate(str, maxWidth, singleLine = false) {
  let result = str;
  if (singleLine) {
    const firstNewline = str.indexOf("\n");
    if (firstNewline !== -1) {
      result = str.substring(0, firstNewline);
      if (stringWidth(result) + 1 > maxWidth) {
        return truncateToWidth(result, maxWidth);
      }
      return `${result}\u2026`;
    }
  }
  if (stringWidth(result) <= maxWidth) {
    return result;
  }
  return truncateToWidth(result, maxWidth);
}
var init_truncate = __esm({
  "src/utils/truncate.ts"() {
    init_stringWidth();
    init_intl();
  }
});

// src/utils/format.ts
function formatFileSize(sizeInBytes) {
  const kb = sizeInBytes / 1024;
  if (kb < 1) {
    return `${sizeInBytes} bytes`;
  }
  if (kb < 1024) {
    return `${kb.toFixed(1).replace(/\.0$/, "")}KB`;
  }
  const mb = kb / 1024;
  if (mb < 1024) {
    return `${mb.toFixed(1).replace(/\.0$/, "")}MB`;
  }
  const gb = mb / 1024;
  return `${gb.toFixed(1).replace(/\.0$/, "")}GB`;
}
function formatSecondsShort(ms) {
  return `${(ms / 1e3).toFixed(1)}s`;
}
function formatDuration(ms, options) {
  if (ms < 6e4) {
    if (ms === 0) {
      return "0s";
    }
    if (ms < 1) {
      const s2 = (ms / 1e3).toFixed(1);
      return `${s2}s`;
    }
    const s = Math.floor(ms / 1e3).toString();
    return `${s}s`;
  }
  let days = Math.floor(ms / 864e5);
  let hours = Math.floor(ms % 864e5 / 36e5);
  let minutes = Math.floor(ms % 36e5 / 6e4);
  let seconds = Math.round(ms % 6e4 / 1e3);
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours === 24) {
    hours = 0;
    days++;
  }
  const hide = options?.hideTrailingZeros;
  if (options?.mostSignificantOnly) {
    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    if (minutes > 0) return `${minutes}m`;
    return `${seconds}s`;
  }
  if (days > 0) {
    if (hide && hours === 0 && minutes === 0) return `${days}d`;
    if (hide && minutes === 0) return `${days}d ${hours}h`;
    return `${days}d ${hours}h ${minutes}m`;
  }
  if (hours > 0) {
    if (hide && minutes === 0 && seconds === 0) return `${hours}h`;
    if (hide && seconds === 0) return `${hours}h ${minutes}m`;
    return `${hours}h ${minutes}m ${seconds}s`;
  }
  if (minutes > 0) {
    if (hide && seconds === 0) return `${minutes}m`;
    return `${minutes}m ${seconds}s`;
  }
  return `${seconds}s`;
}
function formatNumber(number) {
  const shouldUseConsistentDecimals = number >= 1e3;
  return getNumberFormatter(shouldUseConsistentDecimals).format(number).toLowerCase();
}
function formatTokens(count) {
  return formatNumber(count).replace(".0", "");
}
function formatRelativeTime(date, options = {}) {
  const { style = "narrow", numeric = "always", now = /* @__PURE__ */ new Date() } = options;
  const diffInMs = date.getTime() - now.getTime();
  const diffInSeconds = Math.trunc(diffInMs / 1e3);
  const intervals = [
    { unit: "year", seconds: 31536e3, shortUnit: "y" },
    { unit: "month", seconds: 2592e3, shortUnit: "mo" },
    { unit: "week", seconds: 604800, shortUnit: "w" },
    { unit: "day", seconds: 86400, shortUnit: "d" },
    { unit: "hour", seconds: 3600, shortUnit: "h" },
    { unit: "minute", seconds: 60, shortUnit: "m" },
    { unit: "second", seconds: 1, shortUnit: "s" }
  ];
  for (const { unit, seconds: intervalSeconds, shortUnit } of intervals) {
    if (Math.abs(diffInSeconds) >= intervalSeconds) {
      const value = Math.trunc(diffInSeconds / intervalSeconds);
      if (style === "narrow") {
        return diffInSeconds < 0 ? `${Math.abs(value)}${shortUnit} ago` : `in ${value}${shortUnit}`;
      }
      return getRelativeTimeFormat("long", numeric).format(value, unit);
    }
  }
  if (style === "narrow") {
    return diffInSeconds <= 0 ? "0s ago" : "in 0s";
  }
  return getRelativeTimeFormat(style, numeric).format(0, "second");
}
function formatRelativeTimeAgo(date, options = {}) {
  const { now = /* @__PURE__ */ new Date(), ...restOptions } = options;
  if (date > now) {
    return formatRelativeTime(date, { ...restOptions, now });
  }
  return formatRelativeTime(date, { ...restOptions, numeric: "always", now });
}
function formatLogMetadata(log) {
  const sizeOrCount = log.fileSize !== void 0 ? formatFileSize(log.fileSize) : `${log.messageCount} messages`;
  const parts = [
    formatRelativeTimeAgo(log.modified, { style: "short" }),
    ...log.gitBranch ? [log.gitBranch] : [],
    sizeOrCount
  ];
  if (log.tag) {
    parts.push(`#${log.tag}`);
  }
  if (log.agentSetting) {
    parts.push(`@${log.agentSetting}`);
  }
  if (log.prNumber) {
    parts.push(
      log.prRepository ? `${log.prRepository}#${log.prNumber}` : `#${log.prNumber}`
    );
  }
  return parts.join(" \xB7 ");
}
function formatResetTime(timestampInSeconds, showTimezone = false, showTime = true) {
  if (!timestampInSeconds) return void 0;
  const date = new Date(timestampInSeconds * 1e3);
  const now = /* @__PURE__ */ new Date();
  const minutes = date.getMinutes();
  const hoursUntilReset = (date.getTime() - now.getTime()) / (1e3 * 60 * 60);
  if (hoursUntilReset > 24) {
    const dateOptions = {
      month: "short",
      day: "numeric",
      hour: showTime ? "numeric" : void 0,
      minute: !showTime || minutes === 0 ? void 0 : "2-digit",
      hour12: showTime ? true : void 0
    };
    if (date.getFullYear() !== now.getFullYear()) {
      dateOptions.year = "numeric";
    }
    const dateString = date.toLocaleString("en-US", dateOptions);
    return dateString.replace(/ ([AP]M)/i, (_match, ampm) => ampm.toLowerCase()) + (showTimezone ? ` (${getTimeZone()})` : "");
  }
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: minutes === 0 ? void 0 : "2-digit",
    hour12: true
  });
  return timeString.replace(/ ([AP]M)/i, (_match, ampm) => ampm.toLowerCase()) + (showTimezone ? ` (${getTimeZone()})` : "");
}
function formatResetText(resetsAt, showTimezone = false, showTime = true) {
  const dt = new Date(resetsAt);
  return `${formatResetTime(Math.floor(dt.getTime() / 1e3), showTimezone, showTime)}`;
}
var numberFormatterForConsistentDecimals, numberFormatterForInconsistentDecimals, getNumberFormatter;
var init_format = __esm({
  "src/utils/format.ts"() {
    init_intl();
    init_truncate();
    numberFormatterForConsistentDecimals = null;
    numberFormatterForInconsistentDecimals = null;
    getNumberFormatter = (useConsistentDecimals) => {
      if (useConsistentDecimals) {
        if (!numberFormatterForConsistentDecimals) {
          numberFormatterForConsistentDecimals = new Intl.NumberFormat("en-US", {
            notation: "compact",
            maximumFractionDigits: 1,
            minimumFractionDigits: 1
          });
        }
        return numberFormatterForConsistentDecimals;
      } else {
        if (!numberFormatterForInconsistentDecimals) {
          numberFormatterForInconsistentDecimals = new Intl.NumberFormat("en-US", {
            notation: "compact",
            maximumFractionDigits: 1,
            minimumFractionDigits: 0
          });
        }
        return numberFormatterForInconsistentDecimals;
      }
    };
  }
});

// src/utils/profilerBase.ts
function getPerformance() {
  if (!performance) {
    performance = __require("perf_hooks").performance;
  }
  return performance;
}
function formatMs(ms) {
  return ms.toFixed(3);
}
function formatTimelineLine(totalMs, deltaMs, name, memory, totalPad, deltaPad, extra = "") {
  const memInfo = memory ? ` | RSS: ${formatFileSize(memory.rss)}, Heap: ${formatFileSize(memory.heapUsed)}` : "";
  return `[+${formatMs(totalMs).padStart(totalPad)}ms] (+${formatMs(deltaMs).padStart(deltaPad)}ms) ${name}${extra}${memInfo}`;
}
var performance;
var init_profilerBase = __esm({
  "src/utils/profilerBase.ts"() {
    init_format();
    performance = null;
  }
});

// src/utils/startupProfiler.ts
import { dirname, join } from "path";
function profileCheckpoint(name) {
  if (!SHOULD_PROFILE) return;
  const perf = getPerformance();
  perf.mark(name);
  if (DETAILED_PROFILING) {
    memorySnapshots.push(process.memoryUsage());
  }
}
function getReport() {
  if (!DETAILED_PROFILING) {
    return "Startup profiling not enabled";
  }
  const perf = getPerformance();
  const marks = perf.getEntriesByType("mark");
  if (marks.length === 0) {
    return "No profiling checkpoints recorded";
  }
  const lines = [];
  lines.push("=".repeat(80));
  lines.push("STARTUP PROFILING REPORT");
  lines.push("=".repeat(80));
  lines.push("");
  let prevTime = 0;
  for (const [i, mark] of marks.entries()) {
    lines.push(
      formatTimelineLine(
        mark.startTime,
        mark.startTime - prevTime,
        mark.name,
        memorySnapshots[i],
        8,
        7
      )
    );
    prevTime = mark.startTime;
  }
  const lastMark = marks[marks.length - 1];
  lines.push("");
  lines.push(`Total startup time: ${formatMs(lastMark?.startTime ?? 0)}ms`);
  lines.push("=".repeat(80));
  return lines.join("\n");
}
function profileReport() {
  if (reported) return;
  reported = true;
  logStartupPerf();
  if (DETAILED_PROFILING) {
    const path = getStartupPerfLogPath();
    const dir = dirname(path);
    const fs = getFsImplementation();
    fs.mkdirSync(dir);
    writeFileSync_DEPRECATED(path, getReport(), {
      encoding: "utf8",
      flush: true
    });
    logForDebugging("Startup profiling report:");
    logForDebugging(getReport());
  }
}
function isDetailedProfilingEnabled() {
  return DETAILED_PROFILING;
}
function getStartupPerfLogPath() {
  return join(getClaudeConfigHomeDir(), "startup-perf", `${getSessionId()}.txt`);
}
function logStartupPerf() {
  if (!STATSIG_LOGGING_SAMPLED) return;
  const perf = getPerformance();
  const marks = perf.getEntriesByType("mark");
  if (marks.length === 0) return;
  const checkpointTimes = /* @__PURE__ */ new Map();
  for (const mark of marks) {
    checkpointTimes.set(mark.name, mark.startTime);
  }
  const metadata = {};
  for (const [phaseName, [startCheckpoint, endCheckpoint]] of Object.entries(
    PHASE_DEFINITIONS
  )) {
    const startTime = checkpointTimes.get(startCheckpoint);
    const endTime = checkpointTimes.get(endCheckpoint);
    if (startTime !== void 0 && endTime !== void 0) {
      metadata[`${phaseName}_ms`] = Math.round(endTime - startTime);
    }
  }
  metadata.checkpoint_count = marks.length;
  logEvent(
    "tengu_startup_perf",
    metadata
  );
}
var DETAILED_PROFILING, STATSIG_SAMPLE_RATE, STATSIG_LOGGING_SAMPLED, SHOULD_PROFILE, memorySnapshots, PHASE_DEFINITIONS, reported;
var init_startupProfiler = __esm({
  "src/utils/startupProfiler.ts"() {
    init_state();
    init_analytics();
    init_debug();
    init_envUtils();
    init_fsOperations();
    init_profilerBase();
    init_slowOperations();
    DETAILED_PROFILING = isEnvTruthy(process.env.CLAUDE_CODE_PROFILE_STARTUP);
    STATSIG_SAMPLE_RATE = 5e-3;
    STATSIG_LOGGING_SAMPLED = process.env.USER_TYPE === "ant" || Math.random() < STATSIG_SAMPLE_RATE;
    SHOULD_PROFILE = DETAILED_PROFILING || STATSIG_LOGGING_SAMPLED;
    memorySnapshots = [];
    PHASE_DEFINITIONS = {
      import_time: ["cli_entry", "main_tsx_imports_loaded"],
      init_time: ["init_function_start", "init_function_end"],
      settings_time: ["eagerLoadSettings_start", "eagerLoadSettings_end"],
      total_time: ["cli_entry", "main_after_run"]
    };
    if (SHOULD_PROFILE) {
      profileCheckpoint("profiler_initialized");
    }
    reported = false;
  }
});

export {
  isFullWidth,
  isWide,
  eastAsianWidth,
  init_get_east_asian_width,
  stripAnsi,
  init_strip_ansi,
  stringWidth,
  init_stringWidth,
  truncatePathMiddle,
  truncateToWidth,
  truncateStartToWidth,
  truncateToWidthNoEllipsis,
  truncate,
  init_truncate,
  formatFileSize,
  formatSecondsShort,
  formatDuration,
  formatNumber,
  formatTokens,
  formatRelativeTime,
  formatRelativeTimeAgo,
  formatLogMetadata,
  formatResetTime,
  formatResetText,
  init_format,
  getPerformance,
  formatMs,
  formatTimelineLine,
  init_profilerBase,
  profileCheckpoint,
  profileReport,
  isDetailedProfilingEnabled,
  getStartupPerfLogPath,
  logStartupPerf,
  init_startupProfiler
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Vtb2ppLXJlZ2V4QDEwLjYuMC9ub2RlX21vZHVsZXMvZW1vamktcmVnZXgvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dldC1lYXN0LWFzaWFuLXdpZHRoQDEuNS4wL25vZGVfbW9kdWxlcy9nZXQtZWFzdC1hc2lhbi13aWR0aC9sb29rdXAtZGF0YS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ2V0LWVhc3QtYXNpYW4td2lkdGhAMS41LjAvbm9kZV9tb2R1bGVzL2dldC1lYXN0LWFzaWFuLXdpZHRoL3V0aWxpdGllcy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ2V0LWVhc3QtYXNpYW4td2lkdGhAMS41LjAvbm9kZV9tb2R1bGVzL2dldC1lYXN0LWFzaWFuLXdpZHRoL2xvb2t1cC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZ2V0LWVhc3QtYXNpYW4td2lkdGhAMS41LjAvbm9kZV9tb2R1bGVzL2dldC1lYXN0LWFzaWFuLXdpZHRoL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9hbnNpLXJlZ2V4QDYuMi4yL25vZGVfbW9kdWxlcy9hbnNpLXJlZ2V4L2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHJpcC1hbnNpQDcuMi4wL25vZGVfbW9kdWxlcy9zdHJpcC1hbnNpL2luZGV4LmpzIiwgIi4uLy4uL3NyYy9pbmsvc3RyaW5nV2lkdGgudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3RydW5jYXRlLnRzIiwgIi4uLy4uL3NyYy91dGlscy9mb3JtYXQudHMiLCAiLi4vLi4vc3JjL3V0aWxzL3Byb2ZpbGVyQmFzZS50cyIsICIuLi8uLi9zcmMvdXRpbHMvc3RhcnR1cFByb2ZpbGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJtb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcblx0Ly8gaHR0cHM6Ly9tdGhzLmJlL2Vtb2ppXG5cdHJldHVybiAvWyMqMC05XVxcdUZFMEY/XFx1MjBFM3xbXFx4QTlcXHhBRVxcdTIwM0NcXHUyMDQ5XFx1MjEyMlxcdTIxMzlcXHUyMTk0LVxcdTIxOTlcXHUyMUE5XFx1MjFBQVxcdTIzMUFcXHUyMzFCXFx1MjMyOFxcdTIzQ0ZcXHUyM0VELVxcdTIzRUZcXHUyM0YxXFx1MjNGMlxcdTIzRjgtXFx1MjNGQVxcdTI0QzJcXHUyNUFBXFx1MjVBQlxcdTI1QjZcXHUyNUMwXFx1MjVGQlxcdTI1RkNcXHUyNUZFXFx1MjYwMC1cXHUyNjA0XFx1MjYwRVxcdTI2MTFcXHUyNjE0XFx1MjYxNVxcdTI2MThcXHUyNjIwXFx1MjYyMlxcdTI2MjNcXHUyNjI2XFx1MjYyQVxcdTI2MkVcXHUyNjJGXFx1MjYzOC1cXHUyNjNBXFx1MjY0MFxcdTI2NDJcXHUyNjQ4LVxcdTI2NTNcXHUyNjVGXFx1MjY2MFxcdTI2NjNcXHUyNjY1XFx1MjY2NlxcdTI2NjhcXHUyNjdCXFx1MjY3RVxcdTI2N0ZcXHUyNjkyXFx1MjY5NC1cXHUyNjk3XFx1MjY5OVxcdTI2OUJcXHUyNjlDXFx1MjZBMFxcdTI2QTdcXHUyNkFBXFx1MjZCMFxcdTI2QjFcXHUyNkJEXFx1MjZCRVxcdTI2QzRcXHUyNkM4XFx1MjZDRlxcdTI2RDFcXHUyNkU5XFx1MjZGMC1cXHUyNkY1XFx1MjZGN1xcdTI2RjhcXHUyNkZBXFx1MjcwMlxcdTI3MDhcXHUyNzA5XFx1MjcwRlxcdTI3MTJcXHUyNzE0XFx1MjcxNlxcdTI3MURcXHUyNzIxXFx1MjczM1xcdTI3MzRcXHUyNzQ0XFx1Mjc0N1xcdTI3NTdcXHUyNzYzXFx1MjdBMVxcdTI5MzRcXHUyOTM1XFx1MkIwNS1cXHUyQjA3XFx1MkIxQlxcdTJCMUNcXHUyQjU1XFx1MzAzMFxcdTMwM0RcXHUzMjk3XFx1MzI5OV1cXHVGRTBGP3xbXFx1MjYxRFxcdTI3MENcXHUyNzBEXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVGRTBGKT98W1xcdTI3MEFcXHUyNzBCXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHUyM0U5LVxcdTIzRUNcXHUyM0YwXFx1MjNGM1xcdTI1RkRcXHUyNjkzXFx1MjZBMVxcdTI2QUJcXHUyNkM1XFx1MjZDRVxcdTI2RDRcXHUyNkVBXFx1MjZGRFxcdTI3MDVcXHUyNzI4XFx1Mjc0Q1xcdTI3NEVcXHUyNzUzLVxcdTI3NTVcXHUyNzk1LVxcdTI3OTdcXHUyN0IwXFx1MjdCRlxcdTJCNTBdfFxcdTI2RDNcXHVGRTBGPyg/OlxcdTIwMERcXHVEODNEXFx1RENBNSk/fFxcdTI2RjkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFxcdTI3NjRcXHVGRTBGPyg/OlxcdTIwMEQoPzpcXHVEODNEXFx1REQyNXxcXHVEODNFXFx1REU3OSkpP3xcXHVEODNDKD86W1xcdURDMDRcXHVERDcwXFx1REQ3MVxcdUREN0VcXHVERDdGXFx1REUwMlxcdURFMzdcXHVERjIxXFx1REYyNC1cXHVERjJDXFx1REYzNlxcdURGN0RcXHVERjk2XFx1REY5N1xcdURGOTktXFx1REY5QlxcdURGOUVcXHVERjlGXFx1REZDRFxcdURGQ0VcXHVERkQ0LVxcdURGREZcXHVERkY1XFx1REZGN11cXHVGRTBGP3xbXFx1REY4NVxcdURGQzJcXHVERkM3XSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHVERkM0XFx1REZDQV0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1REZDQlxcdURGQ0NdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1RENDRlxcdUREOEVcXHVERDkxLVxcdUREOUFcXHVERTAxXFx1REUxQVxcdURFMkZcXHVERTMyLVxcdURFMzZcXHVERTM4LVxcdURFM0FcXHVERTUwXFx1REU1MVxcdURGMDAtXFx1REYyMFxcdURGMkQtXFx1REYzNVxcdURGMzctXFx1REY0M1xcdURGNDUtXFx1REY0QVxcdURGNEMtXFx1REY3Q1xcdURGN0UtXFx1REY4NFxcdURGODYtXFx1REY5M1xcdURGQTAtXFx1REZDMVxcdURGQzVcXHVERkM2XFx1REZDOFxcdURGQzlcXHVERkNGLVxcdURGRDNcXHVERkUwLVxcdURGRjBcXHVERkY4LVxcdURGRkZdfFxcdURERTZcXHVEODNDW1xcdURERTgtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGMlxcdURERjRcXHVEREY2LVxcdURERkFcXHVEREZDXFx1RERGRFxcdURERkZdfFxcdURERTdcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVGXFx1RERGMS1cXHVEREY0XFx1RERGNi1cXHVEREY5XFx1RERGQlxcdURERkNcXHVEREZFXFx1RERGRl18XFx1RERFOFxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVFXFx1RERGMC1cXHVEREY3XFx1RERGQS1cXHVEREZGXXxcXHVEREU5XFx1RDgzQ1tcXHVEREVBXFx1RERFQ1xcdURERUZcXHVEREYwXFx1RERGMlxcdURERjRcXHVEREZGXXxcXHVEREVBXFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUFcXHVEREVDXFx1RERFRFxcdURERjctXFx1RERGQV18XFx1RERFQlxcdUQ4M0NbXFx1RERFRS1cXHVEREYwXFx1RERGMlxcdURERjRcXHVEREY3XXxcXHVEREVDXFx1RDgzQ1tcXHVEREU2XFx1RERFN1xcdURERTktXFx1RERFRVxcdURERjEtXFx1RERGM1xcdURERjUtXFx1RERGQVxcdURERkNcXHVEREZFXXxcXHVEREVEXFx1RDgzQ1tcXHVEREYwXFx1RERGMlxcdURERjNcXHVEREY3XFx1RERGOVxcdURERkFdfFxcdURERUVcXHVEODNDW1xcdURERTgtXFx1RERFQVxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOV18XFx1RERFRlxcdUQ4M0NbXFx1RERFQVxcdURERjJcXHVEREY0XFx1RERGNV18XFx1RERGMFxcdUQ4M0NbXFx1RERFQVxcdURERUMtXFx1RERFRVxcdURERjJcXHVEREYzXFx1RERGNVxcdURERjdcXHVEREZDXFx1RERGRVxcdURERkZdfFxcdURERjFcXHVEODNDW1xcdURERTYtXFx1RERFOFxcdURERUVcXHVEREYwXFx1RERGNy1cXHVEREZCXFx1RERGRV18XFx1RERGMlxcdUQ4M0NbXFx1RERFNlxcdURERTgtXFx1RERFRFxcdURERjAtXFx1RERGRl18XFx1RERGM1xcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBLVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjRcXHVEREY1XFx1RERGN1xcdURERkFcXHVEREZGXXxcXHVEREY0XFx1RDgzQ1xcdURERjJ8XFx1RERGNVxcdUQ4M0NbXFx1RERFNlxcdURERUEtXFx1RERFRFxcdURERjAtXFx1RERGM1xcdURERjctXFx1RERGOVxcdURERkNcXHVEREZFXXxcXHVEREY2XFx1RDgzQ1xcdURERTZ8XFx1RERGN1xcdUQ4M0NbXFx1RERFQVxcdURERjRcXHVEREY4XFx1RERGQVxcdURERkNdfFxcdURERjhcXHVEODNDW1xcdURERTYtXFx1RERFQVxcdURERUMtXFx1RERGNFxcdURERjctXFx1RERGOVxcdURERkJcXHVEREZELVxcdURERkZdfFxcdURERjlcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRFxcdURERUYtXFx1RERGNFxcdURERjdcXHVEREY5XFx1RERGQlxcdURERkNcXHVEREZGXXxcXHVEREZBXFx1RDgzQ1tcXHVEREU2XFx1RERFQ1xcdURERjJcXHVEREYzXFx1RERGOFxcdURERkVcXHVEREZGXXxcXHVEREZCXFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUFcXHVEREVDXFx1RERFRVxcdURERjNcXHVEREZBXXxcXHVEREZDXFx1RDgzQ1tcXHVEREVCXFx1RERGOF18XFx1RERGRFxcdUQ4M0NcXHVEREYwfFxcdURERkVcXHVEODNDW1xcdURERUFcXHVEREY5XXxcXHVEREZGXFx1RDgzQ1tcXHVEREU2XFx1RERGMlxcdURERkNdfFxcdURGNDQoPzpcXHUyMDBEXFx1RDgzRFxcdURGRUIpP3xcXHVERjRCKD86XFx1MjAwRFxcdUQ4M0RcXHVERkU5KT98XFx1REZDMyg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRCg/OltcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xcXHUyN0ExXFx1RkUwRj8pKT98XFx1REZGM1xcdUZFMEY/KD86XFx1MjAwRCg/OlxcdTI2QTdcXHVGRTBGP3xcXHVEODNDXFx1REYwOCkpP3xcXHVERkY0KD86XFx1MjAwRFxcdTI2MjBcXHVGRTBGP3xcXHVEQjQwXFx1REM2N1xcdURCNDBcXHVEQzYyXFx1REI0MCg/OlxcdURDNjVcXHVEQjQwXFx1REM2RVxcdURCNDBcXHVEQzY3fFxcdURDNzNcXHVEQjQwXFx1REM2M1xcdURCNDBcXHVEQzc0fFxcdURDNzdcXHVEQjQwXFx1REM2Q1xcdURCNDBcXHVEQzczKVxcdURCNDBcXHVEQzdGKT8pfFxcdUQ4M0QoPzpbXFx1REMzRlxcdURDRkRcXHVERDQ5XFx1REQ0QVxcdURENkZcXHVERDcwXFx1REQ3M1xcdURENzYtXFx1REQ3OVxcdUREODdcXHVERDhBLVxcdUREOERcXHVEREE1XFx1RERBOFxcdUREQjFcXHVEREIyXFx1RERCQ1xcdUREQzItXFx1RERDNFxcdURERDEtXFx1REREM1xcdUREREMtXFx1RERERVxcdURERTFcXHVEREUzXFx1RERFOFxcdURERUZcXHVEREYzXFx1RERGQVxcdURFQ0JcXHVERUNELVxcdURFQ0ZcXHVERUUwLVxcdURFRTVcXHVERUU5XFx1REVGMFxcdURFRjNdXFx1RkUwRj98W1xcdURDNDJcXHVEQzQzXFx1REM0Ni1cXHVEQzUwXFx1REM2NlxcdURDNjdcXHVEQzZCLVxcdURDNkRcXHVEQzcyXFx1REM3NC1cXHVEQzc2XFx1REM3OFxcdURDN0NcXHVEQzgzXFx1REM4NVxcdURDOEZcXHVEQzkxXFx1RENBQVxcdUREN0FcXHVERDk1XFx1REQ5NlxcdURFNENcXHVERTRGXFx1REVDMFxcdURFQ0NdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdURDNkUtXFx1REM3MVxcdURDNzNcXHVEQzc3XFx1REM4MVxcdURDODJcXHVEQzg2XFx1REM4N1xcdURFNDUtXFx1REU0N1xcdURFNEJcXHVERTREXFx1REU0RVxcdURFQTNcXHVERUI0XFx1REVCNV0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1REQ3NFxcdUREOTBdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpP3xbXFx1REMwMC1cXHVEQzA3XFx1REMwOS1cXHVEQzE0XFx1REMxNi1cXHVEQzI1XFx1REMyNy1cXHVEQzNBXFx1REMzQy1cXHVEQzNFXFx1REM0MFxcdURDNDRcXHVEQzQ1XFx1REM1MS1cXHVEQzY1XFx1REM2QVxcdURDNzktXFx1REM3QlxcdURDN0QtXFx1REM4MFxcdURDODRcXHVEQzg4LVxcdURDOEVcXHVEQzkwXFx1REM5Mi1cXHVEQ0E5XFx1RENBQi1cXHVEQ0ZDXFx1RENGRi1cXHVERDNEXFx1REQ0Qi1cXHVERDRFXFx1REQ1MC1cXHVERDY3XFx1RERBNFxcdURERkItXFx1REUyRFxcdURFMkYtXFx1REUzNFxcdURFMzctXFx1REU0MVxcdURFNDNcXHVERTQ0XFx1REU0OC1cXHVERTRBXFx1REU4MC1cXHVERUEyXFx1REVBNC1cXHVERUIzXFx1REVCNy1cXHVERUJGXFx1REVDMS1cXHVERUM1XFx1REVEMC1cXHVERUQyXFx1REVENS1cXHVERUQ4XFx1REVEQy1cXHVERURGXFx1REVFQlxcdURFRUNcXHVERUY0LVxcdURFRkNcXHVERkUwLVxcdURGRUJcXHVERkYwXXxcXHVEQzA4KD86XFx1MjAwRFxcdTJCMUIpP3xcXHVEQzE1KD86XFx1MjAwRFxcdUQ4M0VcXHVEREJBKT98XFx1REMyNig/OlxcdTIwMEQoPzpcXHUyQjFCfFxcdUQ4M0RcXHVERDI1KSk/fFxcdURDM0IoPzpcXHUyMDBEXFx1Mjc0NFxcdUZFMEY/KT98XFx1REM0MVxcdUZFMEY/KD86XFx1MjAwRFxcdUQ4M0RcXHVEREU4XFx1RkUwRj8pP3xcXHVEQzY4KD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjh8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV1cXHUyMDBEXFx1RDgzRCg/OlxcdURDNjYoPzpcXHUyMDBEXFx1RDgzRFxcdURDNjYpP3xcXHVEQzY3KD86XFx1MjAwRFxcdUQ4M0RbXFx1REM2NlxcdURDNjddKT8pfFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdURDNjYoPzpcXHUyMDBEXFx1RDgzRFxcdURDNjYpP3xcXHVEQzY3KD86XFx1MjAwRFxcdUQ4M0RbXFx1REM2NlxcdURDNjddKT8pfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXSkpfFxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRCg/OltcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdURDMzBcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pfFxcdUQ4M0UoPzpbXFx1REQxRFxcdURFRUZdXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdfFtcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRCg/OltcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdURDMzBcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKXxcXHVEODNFKD86W1xcdUREMURcXHVERUVGXVxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl18W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM10pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REMzMFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl0pfFxcdUQ4M0UoPzpbXFx1REQxRFxcdURFRUZdXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXXxbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzMwXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSl8XFx1RDgzRSg/OltcXHVERDFEXFx1REVFRl1cXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdfFtcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRCg/OltcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdURDMzBcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRV0pfFxcdUQ4M0UoPzpbXFx1REQxRFxcdURFRUZdXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdfFtcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSkpPykpP3xcXHVEQzY5KD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1tcXHVEQzY4XFx1REM2OV18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRCg/OltcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdURDNjYoPzpcXHUyMDBEXFx1RDgzRFxcdURDNjYpP3xcXHVEQzY3KD86XFx1MjAwRFxcdUQ4M0RbXFx1REM2NlxcdURDNjddKT98XFx1REM2OVxcdTIwMERcXHVEODNEKD86XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPykpfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXSkpfFxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzMwXFx1MjAwRFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXXxcXHVERUVGXFx1MjAwRFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzMwXFx1MjAwRFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdfFxcdURFRUZcXHUyMDBEXFx1RDgzRFxcdURDNjlcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKSkpP3xcXHVERkZEKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzMwXFx1MjAwRFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdfFxcdURFRUZcXHUyMDBEXFx1RDgzRFxcdURDNjlcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKSkpP3xcXHVERkZFKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzMwXFx1MjAwRFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdfFxcdURFRUZcXHUyMDBEXFx1RDgzRFxcdURDNjlcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzMwXFx1MjAwRFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXXxcXHVERUVGXFx1MjAwRFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKSkpPykpP3xcXHVERDc1KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHVERTJFKD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0E4KT98XFx1REUzNSg/OlxcdTIwMERcXHVEODNEXFx1RENBQik/fFxcdURFMzYoPzpcXHUyMDBEXFx1RDgzQ1xcdURGMkJcXHVGRTBGPyk/fFxcdURFNDIoPzpcXHUyMDBEW1xcdTIxOTRcXHUyMTk1XVxcdUZFMEY/KT98XFx1REVCNig/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRCg/OltcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xcXHUyN0ExXFx1RkUwRj8pKT8pfFxcdUQ4M0UoPzpbXFx1REQwQ1xcdUREMEZcXHVERDE4LVxcdUREMUZcXHVERDMwLVxcdUREMzRcXHVERDM2XFx1REQ3N1xcdUREQjVcXHVEREI2XFx1RERCQlxcdURERDJcXHVEREQzXFx1RERENVxcdURFQzMtXFx1REVDNVxcdURFRjBcXHVERUYyLVxcdURFRjhdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdUREMjZcXHVERDM1XFx1REQzNy1cXHVERDM5XFx1REQzQy1cXHVERDNFXFx1RERCOFxcdUREQjlcXHVERENEXFx1RERDRlxcdURERDRcXHVEREQ2LVxcdURERERdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdUREREVcXHVERERGXSg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1REQwRFxcdUREMEVcXHVERDEwLVxcdUREMTdcXHVERDIwLVxcdUREMjVcXHVERDI3LVxcdUREMkZcXHVERDNBXFx1REQzRi1cXHVERDQ1XFx1REQ0Ny1cXHVERDc2XFx1REQ3OC1cXHVEREI0XFx1RERCN1xcdUREQkFcXHVEREJDLVxcdUREQ0NcXHVEREQwXFx1RERFMC1cXHVEREZGXFx1REU3MC1cXHVERTdDXFx1REU4MC1cXHVERThBXFx1REU4RS1cXHVERUMyXFx1REVDNlxcdURFQzhcXHVERUNELVxcdURFRENcXHVERURGLVxcdURFRUFcXHVERUVGXXxcXHVERENFKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpP3xcXHVEREQxKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM1xcdURFNzBdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDF8XFx1REREMVxcdTIwMERcXHVEODNFXFx1REREMig/OlxcdTIwMERcXHVEODNFXFx1REREMik/fFxcdURERDIoPzpcXHUyMDBEXFx1RDgzRVxcdURERDIpPykpfFxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkMtXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzMwXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM1xcdURFNzBdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1REVFRlxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXSkpKT98XFx1REZGQyg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRCg/OltcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdURDMzBcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM1xcdURFNzBdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1REVFRlxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzMwXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNcXHVERTcwXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdURFRUZcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKSkpP3xcXHVERkZFKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REMzMFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXFx1REU3MF18XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVERUVGXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSkpKT98XFx1REZGRig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REMzMFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNcXHVERTcwXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdURFRUZcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRV0pKSk/KSk/fFxcdURFRjEoPzpcXHVEODNDKD86XFx1REZGQig/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXSk/fFxcdURGRkMoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKT98XFx1REZGRCg/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl0pP3xcXHVERkZFKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSk/fFxcdURGRkYoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkItXFx1REZGRV0pPykpPykvZztcbn07XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IHNjcmlwdHMvYnVpbGQuanNcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBhbWJpZ3VvdXNSYW5nZXMgPSBbMTYxLCAxNjEsIDE2NCwgMTY0LCAxNjcsIDE2OCwgMTcwLCAxNzAsIDE3MywgMTc0LCAxNzYsIDE4MCwgMTgyLCAxODYsIDE4OCwgMTkxLCAxOTgsIDE5OCwgMjA4LCAyMDgsIDIxNSwgMjE2LCAyMjIsIDIyNSwgMjMwLCAyMzAsIDIzMiwgMjM0LCAyMzYsIDIzNywgMjQwLCAyNDAsIDI0MiwgMjQzLCAyNDcsIDI1MCwgMjUyLCAyNTIsIDI1NCwgMjU0LCAyNTcsIDI1NywgMjczLCAyNzMsIDI3NSwgMjc1LCAyODMsIDI4MywgMjk0LCAyOTUsIDI5OSwgMjk5LCAzMDUsIDMwNywgMzEyLCAzMTIsIDMxOSwgMzIyLCAzMjQsIDMyNCwgMzI4LCAzMzEsIDMzMywgMzMzLCAzMzgsIDMzOSwgMzU4LCAzNTksIDM2MywgMzYzLCA0NjIsIDQ2MiwgNDY0LCA0NjQsIDQ2NiwgNDY2LCA0NjgsIDQ2OCwgNDcwLCA0NzAsIDQ3MiwgNDcyLCA0NzQsIDQ3NCwgNDc2LCA0NzYsIDU5MywgNTkzLCA2MDksIDYwOSwgNzA4LCA3MDgsIDcxMSwgNzExLCA3MTMsIDcxNSwgNzE3LCA3MTcsIDcyMCwgNzIwLCA3MjgsIDczMSwgNzMzLCA3MzMsIDczNSwgNzM1LCA3NjgsIDg3OSwgOTEzLCA5MjksIDkzMSwgOTM3LCA5NDUsIDk2MSwgOTYzLCA5NjksIDEwMjUsIDEwMjUsIDEwNDAsIDExMDMsIDExMDUsIDExMDUsIDgyMDgsIDgyMDgsIDgyMTEsIDgyMTQsIDgyMTYsIDgyMTcsIDgyMjAsIDgyMjEsIDgyMjQsIDgyMjYsIDgyMjgsIDgyMzEsIDgyNDAsIDgyNDAsIDgyNDIsIDgyNDMsIDgyNDUsIDgyNDUsIDgyNTEsIDgyNTEsIDgyNTQsIDgyNTQsIDgzMDgsIDgzMDgsIDgzMTksIDgzMTksIDgzMjEsIDgzMjQsIDgzNjQsIDgzNjQsIDg0NTEsIDg0NTEsIDg0NTMsIDg0NTMsIDg0NTcsIDg0NTcsIDg0NjcsIDg0NjcsIDg0NzAsIDg0NzAsIDg0ODEsIDg0ODIsIDg0ODYsIDg0ODYsIDg0OTEsIDg0OTEsIDg1MzEsIDg1MzIsIDg1MzksIDg1NDIsIDg1NDQsIDg1NTUsIDg1NjAsIDg1NjksIDg1ODUsIDg1ODUsIDg1OTIsIDg2MDEsIDg2MzIsIDg2MzMsIDg2NTgsIDg2NTgsIDg2NjAsIDg2NjAsIDg2NzksIDg2NzksIDg3MDQsIDg3MDQsIDg3MDYsIDg3MDcsIDg3MTEsIDg3MTIsIDg3MTUsIDg3MTUsIDg3MTksIDg3MTksIDg3MjEsIDg3MjEsIDg3MjUsIDg3MjUsIDg3MzAsIDg3MzAsIDg3MzMsIDg3MzYsIDg3MzksIDg3MzksIDg3NDEsIDg3NDEsIDg3NDMsIDg3NDgsIDg3NTAsIDg3NTAsIDg3NTYsIDg3NTksIDg3NjQsIDg3NjUsIDg3NzYsIDg3NzYsIDg3ODAsIDg3ODAsIDg3ODYsIDg3ODYsIDg4MDAsIDg4MDEsIDg4MDQsIDg4MDcsIDg4MTAsIDg4MTEsIDg4MTQsIDg4MTUsIDg4MzQsIDg4MzUsIDg4MzgsIDg4MzksIDg4NTMsIDg4NTMsIDg4NTcsIDg4NTcsIDg4NjksIDg4NjksIDg4OTUsIDg4OTUsIDg5NzgsIDg5NzgsIDkzMTIsIDk0NDksIDk0NTEsIDk1NDcsIDk1NTIsIDk1ODcsIDk2MDAsIDk2MTUsIDk2MTgsIDk2MjEsIDk2MzIsIDk2MzMsIDk2MzUsIDk2NDEsIDk2NTAsIDk2NTEsIDk2NTQsIDk2NTUsIDk2NjAsIDk2NjEsIDk2NjQsIDk2NjUsIDk2NzAsIDk2NzIsIDk2NzUsIDk2NzUsIDk2NzgsIDk2ODEsIDk2OTgsIDk3MDEsIDk3MTEsIDk3MTEsIDk3MzMsIDk3MzQsIDk3MzcsIDk3MzcsIDk3NDIsIDk3NDMsIDk3NTYsIDk3NTYsIDk3NTgsIDk3NTgsIDk3OTIsIDk3OTIsIDk3OTQsIDk3OTQsIDk4MjQsIDk4MjUsIDk4MjcsIDk4MjksIDk4MzEsIDk4MzQsIDk4MzYsIDk4MzcsIDk4MzksIDk4MzksIDk4ODYsIDk4ODcsIDk5MTksIDk5MTksIDk5MjYsIDk5MzMsIDk5MzUsIDk5MzksIDk5NDEsIDk5NTMsIDk5NTUsIDk5NTUsIDk5NjAsIDk5NjEsIDk5NjMsIDk5NjksIDk5NzIsIDk5NzIsIDk5NzQsIDk5NzcsIDk5NzksIDk5ODAsIDk5ODIsIDk5ODMsIDEwMDQ1LCAxMDA0NSwgMTAxMDIsIDEwMTExLCAxMTA5NCwgMTEwOTcsIDEyODcyLCAxMjg3OSwgNTczNDQsIDYzNzQzLCA2NTAyNCwgNjUwMzksIDY1NTMzLCA2NTUzMywgMTI3MjMyLCAxMjcyNDIsIDEyNzI0OCwgMTI3Mjc3LCAxMjcyODAsIDEyNzMzNywgMTI3MzQ0LCAxMjczNzMsIDEyNzM3NSwgMTI3Mzc2LCAxMjczODcsIDEyNzQwNCwgOTE3NzYwLCA5MTc5OTksIDk4MzA0MCwgMTA0ODU3MywgMTA0ODU3NiwgMTExNDEwOV07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgZnVsbHdpZHRoUmFuZ2VzID0gWzEyMjg4LCAxMjI4OCwgNjUyODEsIDY1Mzc2LCA2NTUwNCwgNjU1MTBdO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGhhbGZ3aWR0aFJhbmdlcyA9IFs4MzYxLCA4MzYxLCA2NTM3NywgNjU0NzAsIDY1NDc0LCA2NTQ3OSwgNjU0ODIsIDY1NDg3LCA2NTQ5MCwgNjU0OTUsIDY1NDk4LCA2NTUwMCwgNjU1MTIsIDY1NTE4XTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBuYXJyb3dSYW5nZXMgPSBbMzIsIDEyNiwgMTYyLCAxNjMsIDE2NSwgMTY2LCAxNzIsIDE3MiwgMTc1LCAxNzUsIDEwMjE0LCAxMDIyMSwgMTA2MjksIDEwNjMwXTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB3aWRlUmFuZ2VzID0gWzQzNTIsIDQ0NDcsIDg5ODYsIDg5ODcsIDkwMDEsIDkwMDIsIDkxOTMsIDkxOTYsIDkyMDAsIDkyMDAsIDkyMDMsIDkyMDMsIDk3MjUsIDk3MjYsIDk3NDgsIDk3NDksIDk3NzYsIDk3ODMsIDk4MDAsIDk4MTEsIDk4NTUsIDk4NTUsIDk4NjYsIDk4NzEsIDk4NzUsIDk4NzUsIDk4ODksIDk4ODksIDk4OTgsIDk4OTksIDk5MTcsIDk5MTgsIDk5MjQsIDk5MjUsIDk5MzQsIDk5MzQsIDk5NDAsIDk5NDAsIDk5NjIsIDk5NjIsIDk5NzAsIDk5NzEsIDk5NzMsIDk5NzMsIDk5NzgsIDk5NzgsIDk5ODEsIDk5ODEsIDk5ODksIDk5ODksIDk5OTQsIDk5OTUsIDEwMDI0LCAxMDAyNCwgMTAwNjAsIDEwMDYwLCAxMDA2MiwgMTAwNjIsIDEwMDY3LCAxMDA2OSwgMTAwNzEsIDEwMDcxLCAxMDEzMywgMTAxMzUsIDEwMTYwLCAxMDE2MCwgMTAxNzUsIDEwMTc1LCAxMTAzNSwgMTEwMzYsIDExMDg4LCAxMTA4OCwgMTEwOTMsIDExMDkzLCAxMTkwNCwgMTE5MjksIDExOTMxLCAxMjAxOSwgMTIwMzIsIDEyMjQ1LCAxMjI3MiwgMTIyODcsIDEyMjg5LCAxMjM1MCwgMTIzNTMsIDEyNDM4LCAxMjQ0MSwgMTI1NDMsIDEyNTQ5LCAxMjU5MSwgMTI1OTMsIDEyNjg2LCAxMjY4OCwgMTI3NzMsIDEyNzgzLCAxMjgzMCwgMTI4MzIsIDEyODcxLCAxMjg4MCwgNDIxMjQsIDQyMTI4LCA0MjE4MiwgNDMzNjAsIDQzMzg4LCA0NDAzMiwgNTUyMDMsIDYzNzQ0LCA2NDI1NSwgNjUwNDAsIDY1MDQ5LCA2NTA3MiwgNjUxMDYsIDY1MTA4LCA2NTEyNiwgNjUxMjgsIDY1MTMxLCA5NDE3NiwgOTQxODAsIDk0MTkyLCA5NDE5OCwgOTQyMDgsIDEwMTU4OSwgMTAxNjMxLCAxMDE2NjIsIDEwMTc2MCwgMTAxODc0LCAxMTA1NzYsIDExMDU3OSwgMTEwNTgxLCAxMTA1ODcsIDExMDU4OSwgMTEwNTkwLCAxMTA1OTIsIDExMDg4MiwgMTEwODk4LCAxMTA4OTgsIDExMDkyOCwgMTEwOTMwLCAxMTA5MzMsIDExMDkzMywgMTEwOTQ4LCAxMTA5NTEsIDExMDk2MCwgMTExMzU1LCAxMTk1NTIsIDExOTYzOCwgMTE5NjQ4LCAxMTk2NzAsIDEyNjk4MCwgMTI2OTgwLCAxMjcxODMsIDEyNzE4MywgMTI3Mzc0LCAxMjczNzQsIDEyNzM3NywgMTI3Mzg2LCAxMjc0ODgsIDEyNzQ5MCwgMTI3NTA0LCAxMjc1NDcsIDEyNzU1MiwgMTI3NTYwLCAxMjc1NjgsIDEyNzU2OSwgMTI3NTg0LCAxMjc1ODksIDEyNzc0NCwgMTI3Nzc2LCAxMjc3ODksIDEyNzc5NywgMTI3Nzk5LCAxMjc4NjgsIDEyNzg3MCwgMTI3ODkxLCAxMjc5MDQsIDEyNzk0NiwgMTI3OTUxLCAxMjc5NTUsIDEyNzk2OCwgMTI3OTg0LCAxMjc5ODgsIDEyNzk4OCwgMTI3OTkyLCAxMjgwNjIsIDEyODA2NCwgMTI4MDY0LCAxMjgwNjYsIDEyODI1MiwgMTI4MjU1LCAxMjgzMTcsIDEyODMzMSwgMTI4MzM0LCAxMjgzMzYsIDEyODM1OSwgMTI4Mzc4LCAxMjgzNzgsIDEyODQwNSwgMTI4NDA2LCAxMjg0MjAsIDEyODQyMCwgMTI4NTA3LCAxMjg1OTEsIDEyODY0MCwgMTI4NzA5LCAxMjg3MTYsIDEyODcxNiwgMTI4NzIwLCAxMjg3MjIsIDEyODcyNSwgMTI4NzI4LCAxMjg3MzIsIDEyODczNSwgMTI4NzQ3LCAxMjg3NDgsIDEyODc1NiwgMTI4NzY0LCAxMjg5OTIsIDEyOTAwMywgMTI5MDA4LCAxMjkwMDgsIDEyOTI5MiwgMTI5MzM4LCAxMjkzNDAsIDEyOTM0OSwgMTI5MzUxLCAxMjk1MzUsIDEyOTY0OCwgMTI5NjYwLCAxMjk2NjQsIDEyOTY3NCwgMTI5Njc4LCAxMjk3MzQsIDEyOTczNiwgMTI5NzM2LCAxMjk3NDEsIDEyOTc1NiwgMTI5NzU5LCAxMjk3NzAsIDEyOTc3NSwgMTI5Nzg0LCAxMzEwNzIsIDE5NjYwNSwgMTk2NjA4LCAyNjIxNDFdO1xuXG5leHBvcnQge2FtYmlndW91c1JhbmdlcywgZnVsbHdpZHRoUmFuZ2VzLCBoYWxmd2lkdGhSYW5nZXMsIG5hcnJvd1Jhbmdlcywgd2lkZVJhbmdlc307XG4iLCAiLyoqXG5CaW5hcnkgc2VhcmNoIG9uIGEgc29ydGVkIGZsYXQgYXJyYXkgb2YgW3N0YXJ0LCBlbmRdIHBhaXJzLlxuXG5AcGFyYW0ge251bWJlcltdfSByYW5nZXMgLSBGbGF0IGFycmF5IG9mIGluY2x1c2l2ZSBbc3RhcnQsIGVuZF0gcmFuZ2UgcGFpcnMsIGUuZy4gWzAsIDUsIDEwLCAyMF0uXG5AcGFyYW0ge251bWJlcn0gY29kZVBvaW50IC0gVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG5AcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgdmFsdWUgZmFsbHMgd2l0aGluIGFueSBvZiB0aGUgcmFuZ2VzLlxuKi9cbmV4cG9ydCBjb25zdCBpc0luUmFuZ2UgPSAocmFuZ2VzLCBjb2RlUG9pbnQpID0+IHtcblx0bGV0IGxvdyA9IDA7XG5cdGxldCBoaWdoID0gTWF0aC5mbG9vcihyYW5nZXMubGVuZ3RoIC8gMikgLSAxO1xuXHR3aGlsZSAobG93IDw9IGhpZ2gpIHtcblx0XHRjb25zdCBtaWQgPSBNYXRoLmZsb29yKChsb3cgKyBoaWdoKSAvIDIpO1xuXHRcdGNvbnN0IGkgPSBtaWQgKiAyO1xuXHRcdGlmIChjb2RlUG9pbnQgPCByYW5nZXNbaV0pIHtcblx0XHRcdGhpZ2ggPSBtaWQgLSAxO1xuXHRcdH0gZWxzZSBpZiAoY29kZVBvaW50ID4gcmFuZ2VzW2kgKyAxXSkge1xuXHRcdFx0bG93ID0gbWlkICsgMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcbiIsICJpbXBvcnQge1xuXHRhbWJpZ3VvdXNSYW5nZXMsXG5cdGZ1bGx3aWR0aFJhbmdlcyxcblx0aGFsZndpZHRoUmFuZ2VzLFxuXHRuYXJyb3dSYW5nZXMsXG5cdHdpZGVSYW5nZXMsXG59IGZyb20gJy4vbG9va3VwLWRhdGEuanMnO1xuaW1wb3J0IHtpc0luUmFuZ2V9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcblxuY29uc3QgbWluaW11bUFtYmlndW91c0NvZGVQb2ludCA9IGFtYmlndW91c1Jhbmdlc1swXTtcbmNvbnN0IG1heGltdW1BbWJpZ3VvdXNDb2RlUG9pbnQgPSBhbWJpZ3VvdXNSYW5nZXMuYXQoLTEpO1xuY29uc3QgbWluaW11bUZ1bGxXaWR0aENvZGVQb2ludCA9IGZ1bGx3aWR0aFJhbmdlc1swXTtcbmNvbnN0IG1heGltdW1GdWxsV2lkdGhDb2RlUG9pbnQgPSBmdWxsd2lkdGhSYW5nZXMuYXQoLTEpO1xuY29uc3QgbWluaW11bUhhbGZXaWR0aENvZGVQb2ludCA9IGhhbGZ3aWR0aFJhbmdlc1swXTtcbmNvbnN0IG1heGltdW1IYWxmV2lkdGhDb2RlUG9pbnQgPSBoYWxmd2lkdGhSYW5nZXMuYXQoLTEpO1xuY29uc3QgbWluaW11bU5hcnJvd0NvZGVQb2ludCA9IG5hcnJvd1Jhbmdlc1swXTtcbmNvbnN0IG1heGltdW1OYXJyb3dDb2RlUG9pbnQgPSBuYXJyb3dSYW5nZXMuYXQoLTEpO1xuY29uc3QgbWluaW11bVdpZGVDb2RlUG9pbnQgPSB3aWRlUmFuZ2VzWzBdO1xuY29uc3QgbWF4aW11bVdpZGVDb2RlUG9pbnQgPSB3aWRlUmFuZ2VzLmF0KC0xKTtcblxuY29uc3QgY29tbW9uQ2prQ29kZVBvaW50ID0gMHg0RV8wMDtcbmNvbnN0IFt3aWRlRmFzdFBhdGhTdGFydCwgd2lkZUZhc3RQYXRoRW5kXSA9IGZpbmRXaWRlRmFzdFBhdGhSYW5nZSh3aWRlUmFuZ2VzKTtcblxuLy8gVXNlIGEgaG90LXBhdGggcmFuZ2Ugc28gY29tbW9uIGBpc1dpZGVgIGNhbGxzIGNhbiBza2lwIGJpbmFyeSBzZWFyY2guXG4vLyBUaGUgcmFuZ2UgY29udGFpbmluZyBVKzRFMDAgY292ZXJzIGNvbW1vbiBDSksgaWRlb2dyYXBocztcbi8vIGZhbGxiYWNrIHRvIHRoZSBsYXJnZXN0IHJhbmdlIGZvciByZXNpbGllbmNlIHRvIFVuaWNvZGUgdGFibGUgY2hhbmdlcy5cbmZ1bmN0aW9uIGZpbmRXaWRlRmFzdFBhdGhSYW5nZShyYW5nZXMpIHtcblx0bGV0IGZhc3RQYXRoU3RhcnQgPSByYW5nZXNbMF07XG5cdGxldCBmYXN0UGF0aEVuZCA9IHJhbmdlc1sxXTtcblxuXHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmFuZ2VzLmxlbmd0aDsgaW5kZXggKz0gMikge1xuXHRcdGNvbnN0IHN0YXJ0ID0gcmFuZ2VzW2luZGV4XTtcblx0XHRjb25zdCBlbmQgPSByYW5nZXNbaW5kZXggKyAxXTtcblxuXHRcdGlmIChcblx0XHRcdGNvbW1vbkNqa0NvZGVQb2ludCA+PSBzdGFydFxuXHRcdFx0JiYgY29tbW9uQ2prQ29kZVBvaW50IDw9IGVuZFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIFtzdGFydCwgZW5kXTtcblx0XHR9XG5cblx0XHRpZiAoKGVuZCAtIHN0YXJ0KSA+IChmYXN0UGF0aEVuZCAtIGZhc3RQYXRoU3RhcnQpKSB7XG5cdFx0XHRmYXN0UGF0aFN0YXJ0ID0gc3RhcnQ7XG5cdFx0XHRmYXN0UGF0aEVuZCA9IGVuZDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW2Zhc3RQYXRoU3RhcnQsIGZhc3RQYXRoRW5kXTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzQW1iaWd1b3VzID0gY29kZVBvaW50ID0+IHtcblx0aWYgKFxuXHRcdGNvZGVQb2ludCA8IG1pbmltdW1BbWJpZ3VvdXNDb2RlUG9pbnRcblx0XHR8fCBjb2RlUG9pbnQgPiBtYXhpbXVtQW1iaWd1b3VzQ29kZVBvaW50XG5cdCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBpc0luUmFuZ2UoYW1iaWd1b3VzUmFuZ2VzLCBjb2RlUG9pbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzRnVsbFdpZHRoID0gY29kZVBvaW50ID0+IHtcblx0aWYgKFxuXHRcdGNvZGVQb2ludCA8IG1pbmltdW1GdWxsV2lkdGhDb2RlUG9pbnRcblx0XHR8fCBjb2RlUG9pbnQgPiBtYXhpbXVtRnVsbFdpZHRoQ29kZVBvaW50XG5cdCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBpc0luUmFuZ2UoZnVsbHdpZHRoUmFuZ2VzLCBjb2RlUG9pbnQpO1xufTtcblxuY29uc3QgaXNIYWxmV2lkdGggPSBjb2RlUG9pbnQgPT4ge1xuXHRpZiAoXG5cdFx0Y29kZVBvaW50IDwgbWluaW11bUhhbGZXaWR0aENvZGVQb2ludFxuXHRcdHx8IGNvZGVQb2ludCA+IG1heGltdW1IYWxmV2lkdGhDb2RlUG9pbnRcblx0KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIGlzSW5SYW5nZShoYWxmd2lkdGhSYW5nZXMsIGNvZGVQb2ludCk7XG59O1xuXG5jb25zdCBpc05hcnJvdyA9IGNvZGVQb2ludCA9PiB7XG5cdGlmIChcblx0XHRjb2RlUG9pbnQgPCBtaW5pbXVtTmFycm93Q29kZVBvaW50XG5cdFx0fHwgY29kZVBvaW50ID4gbWF4aW11bU5hcnJvd0NvZGVQb2ludFxuXHQpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gaXNJblJhbmdlKG5hcnJvd1JhbmdlcywgY29kZVBvaW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1dpZGUgPSBjb2RlUG9pbnQgPT4ge1xuXHRpZiAoXG5cdFx0Y29kZVBvaW50ID49IHdpZGVGYXN0UGF0aFN0YXJ0XG5cdFx0JiYgY29kZVBvaW50IDw9IHdpZGVGYXN0UGF0aEVuZFxuXHQpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmIChcblx0XHRjb2RlUG9pbnQgPCBtaW5pbXVtV2lkZUNvZGVQb2ludFxuXHRcdHx8IGNvZGVQb2ludCA+IG1heGltdW1XaWRlQ29kZVBvaW50XG5cdCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBpc0luUmFuZ2Uod2lkZVJhbmdlcywgY29kZVBvaW50KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXRlZ29yeShjb2RlUG9pbnQpIHtcblx0aWYgKGlzQW1iaWd1b3VzKGNvZGVQb2ludCkpIHtcblx0XHRyZXR1cm4gJ2FtYmlndW91cyc7XG5cdH1cblxuXHRpZiAoaXNGdWxsV2lkdGgoY29kZVBvaW50KSkge1xuXHRcdHJldHVybiAnZnVsbHdpZHRoJztcblx0fVxuXG5cdGlmIChpc0hhbGZXaWR0aChjb2RlUG9pbnQpKSB7XG5cdFx0cmV0dXJuICdoYWxmd2lkdGgnO1xuXHR9XG5cblx0aWYgKGlzTmFycm93KGNvZGVQb2ludCkpIHtcblx0XHRyZXR1cm4gJ25hcnJvdyc7XG5cdH1cblxuXHRpZiAoaXNXaWRlKGNvZGVQb2ludCkpIHtcblx0XHRyZXR1cm4gJ3dpZGUnO1xuXHR9XG5cblx0cmV0dXJuICduZXV0cmFsJztcbn1cbiIsICJpbXBvcnQge2dldENhdGVnb3J5LCBpc0FtYmlndW91cywgaXNGdWxsV2lkdGgsIGlzV2lkZX0gZnJvbSAnLi9sb29rdXAuanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZShjb2RlUG9pbnQpIHtcblx0aWYgKCFOdW1iZXIuaXNTYWZlSW50ZWdlcihjb2RlUG9pbnQpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBjb2RlIHBvaW50LCBnb3QgXFxgJHt0eXBlb2YgY29kZVBvaW50fVxcYC5gKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWFzdEFzaWFuV2lkdGhUeXBlKGNvZGVQb2ludCkge1xuXHR2YWxpZGF0ZShjb2RlUG9pbnQpO1xuXG5cdHJldHVybiBnZXRDYXRlZ29yeShjb2RlUG9pbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWFzdEFzaWFuV2lkdGgoY29kZVBvaW50LCB7YW1iaWd1b3VzQXNXaWRlID0gZmFsc2V9ID0ge30pIHtcblx0dmFsaWRhdGUoY29kZVBvaW50KTtcblxuXHRpZiAoXG5cdFx0aXNGdWxsV2lkdGgoY29kZVBvaW50KVxuXHRcdHx8IGlzV2lkZShjb2RlUG9pbnQpXG5cdFx0fHwgKGFtYmlndW91c0FzV2lkZSAmJiBpc0FtYmlndW91cyhjb2RlUG9pbnQpKVxuXHQpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdHJldHVybiAxO1xufVxuXG4vLyBQcml2YXRlIGV4cG9ydHMgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvaXMtZnVsbHdpZHRoLWNvZGUtcG9pbnRcbmV4cG9ydCB7aXNGdWxsV2lkdGggYXMgX2lzRnVsbFdpZHRoLCBpc1dpZGUgYXMgX2lzV2lkZX0gZnJvbSAnLi9sb29rdXAuanMnO1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuc2lSZWdleCh7b25seUZpcnN0ID0gZmFsc2V9ID0ge30pIHtcblx0Ly8gVmFsaWQgc3RyaW5nIHRlcm1pbmF0b3Igc2VxdWVuY2VzIGFyZSBCRUwsIEVTQ1xcLCBhbmQgMHg5Y1xuXHRjb25zdCBTVCA9ICcoPzpcXFxcdTAwMDd8XFxcXHUwMDFCXFxcXHUwMDVDfFxcXFx1MDA5QyknO1xuXG5cdC8vIE9TQyBzZXF1ZW5jZXMgb25seTogRVNDIF0gLi4uIFNUIChub24tZ3JlZWR5IHVudGlsIHRoZSBmaXJzdCBTVClcblx0Y29uc3Qgb3NjID0gYCg/OlxcXFx1MDAxQlxcXFxdW1xcXFxzXFxcXFNdKj8ke1NUfSlgO1xuXG5cdC8vIENTSSBhbmQgcmVsYXRlZDogRVNDL0MxLCBvcHRpb25hbCBpbnRlcm1lZGlhdGVzLCBvcHRpb25hbCBwYXJhbXMgKHN1cHBvcnRzIDsgYW5kIDopIHRoZW4gZmluYWwgYnl0ZVxuXHRjb25zdCBjc2kgPSAnW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/OlxcXFxkezEsNH0oPzpbOzpdXFxcXGR7MCw0fSkqKT9bXFxcXGRBLVBSLVRaY2YtbnEtdXk9Pjx+XSc7XG5cblx0Y29uc3QgcGF0dGVybiA9IGAke29zY318JHtjc2l9YDtcblxuXHRyZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCBvbmx5Rmlyc3QgPyB1bmRlZmluZWQgOiAnZycpO1xufVxuIiwgImltcG9ydCBhbnNpUmVnZXggZnJvbSAnYW5zaS1yZWdleCc7XG5cbmNvbnN0IHJlZ2V4ID0gYW5zaVJlZ2V4KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cmlwQW5zaShzdHJpbmcpIHtcblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBcXGBzdHJpbmdcXGAsIGdvdCBcXGAke3R5cGVvZiBzdHJpbmd9XFxgYCk7XG5cdH1cblxuXHQvLyBGYXN0IHBhdGg6IEFOU0kgY29kZXMgcmVxdWlyZSBFU0MgKDctYml0KSBvciBDU0kgKDgtYml0KSBpbnRyb2R1Y2VyXG5cdGlmICghc3RyaW5nLmluY2x1ZGVzKCdcXHUwMDFCJykgJiYgIXN0cmluZy5pbmNsdWRlcygnXFx1MDA5QicpKSB7XG5cdFx0cmV0dXJuIHN0cmluZztcblx0fVxuXG5cdC8vIEV2ZW4gdGhvdWdoIHRoZSByZWdleCBpcyBnbG9iYWwsIHdlIGRvbid0IG5lZWQgdG8gcmVzZXQgdGhlIGAubGFzdEluZGV4YFxuXHQvLyBiZWNhdXNlIHVubGlrZSBgLmV4ZWMoKWAgYW5kIGAudGVzdCgpYCwgYC5yZXBsYWNlKClgIGRvZXMgaXQgYXV0b21hdGljYWxseVxuXHQvLyBhbmQgZG9pbmcgaXQgbWFudWFsbHkgaGFzIGEgcGVyZm9ybWFuY2UgcGVuYWx0eS5cblx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZ2V4LCAnJyk7XG59XG4iLCAiaW1wb3J0IGVtb2ppUmVnZXggZnJvbSAnZW1vamktcmVnZXgnXG5pbXBvcnQgeyBlYXN0QXNpYW5XaWR0aCB9IGZyb20gJ2dldC1lYXN0LWFzaWFuLXdpZHRoJ1xuaW1wb3J0IHN0cmlwQW5zaSBmcm9tICdzdHJpcC1hbnNpJ1xuaW1wb3J0IHsgZ2V0R3JhcGhlbWVTZWdtZW50ZXIgfSBmcm9tICcuLi91dGlscy9pbnRsLmpzJ1xuXG5jb25zdCBFTU9KSV9SRUdFWCA9IGVtb2ppUmVnZXgoKVxuXG4vKipcbiAqIEZhbGxiYWNrIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2Ygc3RyaW5nV2lkdGggd2hlbiBCdW4uc3RyaW5nV2lkdGggaXMgbm90IGF2YWlsYWJsZS5cbiAqXG4gKiBHZXQgdGhlIGRpc3BsYXkgd2lkdGggb2YgYSBzdHJpbmcgYXMgaXQgd291bGQgYXBwZWFyIGluIGEgdGVybWluYWwuXG4gKlxuICogVGhpcyBpcyBhIG1vcmUgYWNjdXJhdGUgYWx0ZXJuYXRpdmUgdG8gdGhlIHN0cmluZy13aWR0aCBwYWNrYWdlIHRoYXQgY29ycmVjdGx5IGhhbmRsZXNcbiAqIGNoYXJhY3RlcnMgbGlrZSBcdTI2QTAgKFUrMjZBMCkgd2hpY2ggc3RyaW5nLXdpZHRoIGluY29ycmVjdGx5IHJlcG9ydHMgYXMgd2lkdGggMi5cbiAqXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gdXNlcyBlYXN0QXNpYW5XaWR0aCBkaXJlY3RseSB3aXRoIGFtYmlndW91c0FzV2lkZTogZmFsc2UsXG4gKiB3aGljaCBjb3JyZWN0bHkgdHJlYXRzIGFtYmlndW91cy13aWR0aCBjaGFyYWN0ZXJzIGFzIG5hcnJvdyAod2lkdGggMSkgYXNcbiAqIHJlY29tbWVuZGVkIGJ5IHRoZSBVbmljb2RlIHN0YW5kYXJkIGZvciBXZXN0ZXJuIGNvbnRleHRzLlxuICovXG5mdW5jdGlvbiBzdHJpbmdXaWR0aEphdmFTY3JpcHQoc3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgfHwgc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBGYXN0IHBhdGg6IHB1cmUgQVNDSUkgc3RyaW5nIChubyBBTlNJIGNvZGVzLCBubyB3aWRlIGNoYXJzKVxuICBsZXQgaXNQdXJlQXNjaWkgPSB0cnVlXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgLy8gQ2hlY2sgZm9yIG5vbi1BU0NJSSBvciBBTlNJIGVzY2FwZSAoMHgxYilcbiAgICBpZiAoY29kZSA+PSAxMjcgfHwgY29kZSA9PT0gMHgxYikge1xuICAgICAgaXNQdXJlQXNjaWkgPSBmYWxzZVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgaWYgKGlzUHVyZUFzY2lpKSB7XG4gICAgLy8gQ291bnQgcHJpbnRhYmxlIGNoYXJhY3RlcnMgKGV4Y2x1ZGUgY29udHJvbCBjaGFycylcbiAgICBsZXQgd2lkdGggPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgICAgaWYgKGNvZGUgPiAweDFmKSB7XG4gICAgICAgIHdpZHRoKytcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHdpZHRoXG4gIH1cblxuICAvLyBTdHJpcCBBTlNJIGlmIGVzY2FwZSBjaGFyYWN0ZXIgaXMgcHJlc2VudFxuICBpZiAoc3RyLmluY2x1ZGVzKCdcXHgxYicpKSB7XG4gICAgc3RyID0gc3RyaXBBbnNpKHN0cilcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICAvLyBGYXN0IHBhdGg6IHNpbXBsZSBVbmljb2RlIChubyBlbW9qaSwgdmFyaWF0aW9uIHNlbGVjdG9ycywgb3Igam9pbmVycylcbiAgaWYgKCFuZWVkc1NlZ21lbnRhdGlvbihzdHIpKSB7XG4gICAgbGV0IHdpZHRoID0gMFxuICAgIGZvciAoY29uc3QgY2hhciBvZiBzdHIpIHtcbiAgICAgIGNvbnN0IGNvZGVQb2ludCA9IGNoYXIuY29kZVBvaW50QXQoMCkhXG4gICAgICBpZiAoIWlzWmVyb1dpZHRoKGNvZGVQb2ludCkpIHtcbiAgICAgICAgd2lkdGggKz0gZWFzdEFzaWFuV2lkdGgoY29kZVBvaW50LCB7IGFtYmlndW91c0FzV2lkZTogZmFsc2UgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHdpZHRoXG4gIH1cblxuICBsZXQgd2lkdGggPSAwXG5cbiAgZm9yIChjb25zdCB7IHNlZ21lbnQ6IGdyYXBoZW1lIH0gb2YgZ2V0R3JhcGhlbWVTZWdtZW50ZXIoKS5zZWdtZW50KHN0cikpIHtcbiAgICAvLyBDaGVjayBmb3IgZW1vamkgZmlyc3QgKG1vc3QgZW1vamkgc2VxdWVuY2VzIGFyZSB3aWR0aCAyKVxuICAgIEVNT0pJX1JFR0VYLmxhc3RJbmRleCA9IDBcbiAgICBpZiAoRU1PSklfUkVHRVgudGVzdChncmFwaGVtZSkpIHtcbiAgICAgIHdpZHRoICs9IGdldEVtb2ppV2lkdGgoZ3JhcGhlbWUpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSB3aWR0aCBmb3Igbm9uLWVtb2ppIGdyYXBoZW1lc1xuICAgIC8vIEZvciBncmFwaGVtZSBjbHVzdGVycyAobGlrZSBEZXZhbmFnYXJpIGNvbmp1bmN0cyB3aXRoIHZpcmFtYStaV0opLCBvbmx5IGNvdW50XG4gICAgLy8gdGhlIGZpcnN0IG5vbi16ZXJvLXdpZHRoIGNoYXJhY3RlcidzIHdpZHRoIHNpbmNlIHRoZSBjbHVzdGVyIHJlbmRlcnMgYXMgb25lIGdseXBoXG4gICAgZm9yIChjb25zdCBjaGFyIG9mIGdyYXBoZW1lKSB7XG4gICAgICBjb25zdCBjb2RlUG9pbnQgPSBjaGFyLmNvZGVQb2ludEF0KDApIVxuICAgICAgaWYgKCFpc1plcm9XaWR0aChjb2RlUG9pbnQpKSB7XG4gICAgICAgIHdpZHRoICs9IGVhc3RBc2lhbldpZHRoKGNvZGVQb2ludCwgeyBhbWJpZ3VvdXNBc1dpZGU6IGZhbHNlIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdpZHRoXG59XG5cbmZ1bmN0aW9uIG5lZWRzU2VnbWVudGF0aW9uKHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGZvciAoY29uc3QgY2hhciBvZiBzdHIpIHtcbiAgICBjb25zdCBjcCA9IGNoYXIuY29kZVBvaW50QXQoMCkhXG4gICAgLy8gRW1vamkgcmFuZ2VzXG4gICAgaWYgKGNwID49IDB4MWYzMDAgJiYgY3AgPD0gMHgxZmFmZikgcmV0dXJuIHRydWVcbiAgICBpZiAoY3AgPj0gMHgyNjAwICYmIGNwIDw9IDB4MjdiZikgcmV0dXJuIHRydWVcbiAgICBpZiAoY3AgPj0gMHgxZjFlNiAmJiBjcCA8PSAweDFmMWZmKSByZXR1cm4gdHJ1ZVxuICAgIC8vIFZhcmlhdGlvbiBzZWxlY3RvcnMsIFpXSlxuICAgIGlmIChjcCA+PSAweGZlMDAgJiYgY3AgPD0gMHhmZTBmKSByZXR1cm4gdHJ1ZVxuICAgIGlmIChjcCA9PT0gMHgyMDBkKSByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBnZXRFbW9qaVdpZHRoKGdyYXBoZW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICAvLyBSZWdpb25hbCBpbmRpY2F0b3JzOiBzaW5nbGUgPSAxLCBwYWlyID0gMlxuICBjb25zdCBmaXJzdCA9IGdyYXBoZW1lLmNvZGVQb2ludEF0KDApIVxuICBpZiAoZmlyc3QgPj0gMHgxZjFlNiAmJiBmaXJzdCA8PSAweDFmMWZmKSB7XG4gICAgbGV0IGNvdW50ID0gMFxuICAgIGZvciAoY29uc3QgXyBvZiBncmFwaGVtZSkgY291bnQrK1xuICAgIHJldHVybiBjb3VudCA9PT0gMSA/IDEgOiAyXG4gIH1cblxuICAvLyBJbmNvbXBsZXRlIGtleWNhcDogZGlnaXQvc3ltYm9sICsgVlMxNiB3aXRob3V0IFUrMjBFM1xuICBpZiAoZ3JhcGhlbWUubGVuZ3RoID09PSAyKSB7XG4gICAgY29uc3Qgc2Vjb25kID0gZ3JhcGhlbWUuY29kZVBvaW50QXQoMSlcbiAgICBpZiAoXG4gICAgICBzZWNvbmQgPT09IDB4ZmUwZiAmJlxuICAgICAgKChmaXJzdCA+PSAweDMwICYmIGZpcnN0IDw9IDB4MzkpIHx8IGZpcnN0ID09PSAweDIzIHx8IGZpcnN0ID09PSAweDJhKVxuICAgICkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMlxufVxuXG5mdW5jdGlvbiBpc1plcm9XaWR0aChjb2RlUG9pbnQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAvLyBGYXN0IHBhdGggZm9yIGNvbW1vbiBwcmludGFibGUgcmFuZ2VcbiAgaWYgKGNvZGVQb2ludCA+PSAweDIwICYmIGNvZGVQb2ludCA8IDB4N2YpIHJldHVybiBmYWxzZVxuICBpZiAoY29kZVBvaW50ID49IDB4YTAgJiYgY29kZVBvaW50IDwgMHgwMzAwKSByZXR1cm4gY29kZVBvaW50ID09PSAweDAwYWRcblxuICAvLyBDb250cm9sIGNoYXJhY3RlcnNcbiAgaWYgKGNvZGVQb2ludCA8PSAweDFmIHx8IChjb2RlUG9pbnQgPj0gMHg3ZiAmJiBjb2RlUG9pbnQgPD0gMHg5ZikpIHJldHVybiB0cnVlXG5cbiAgLy8gWmVyby13aWR0aCBhbmQgaW52aXNpYmxlIGNoYXJhY3RlcnNcbiAgaWYgKFxuICAgIChjb2RlUG9pbnQgPj0gMHgyMDBiICYmIGNvZGVQb2ludCA8PSAweDIwMGQpIHx8IC8vIFpXIHNwYWNlL2pvaW5lclxuICAgIGNvZGVQb2ludCA9PT0gMHhmZWZmIHx8IC8vIEJPTVxuICAgIChjb2RlUG9pbnQgPj0gMHgyMDYwICYmIGNvZGVQb2ludCA8PSAweDIwNjQpIC8vIFdvcmQgam9pbmVyIGV0Yy5cbiAgKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIFZhcmlhdGlvbiBzZWxlY3RvcnNcbiAgaWYgKFxuICAgIChjb2RlUG9pbnQgPj0gMHhmZTAwICYmIGNvZGVQb2ludCA8PSAweGZlMGYpIHx8XG4gICAgKGNvZGVQb2ludCA+PSAweGUwMTAwICYmIGNvZGVQb2ludCA8PSAweGUwMWVmKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gQ29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXG4gIGlmIChcbiAgICAoY29kZVBvaW50ID49IDB4MDMwMCAmJiBjb2RlUG9pbnQgPD0gMHgwMzZmKSB8fFxuICAgIChjb2RlUG9pbnQgPj0gMHgxYWIwICYmIGNvZGVQb2ludCA8PSAweDFhZmYpIHx8XG4gICAgKGNvZGVQb2ludCA+PSAweDFkYzAgJiYgY29kZVBvaW50IDw9IDB4MWRmZikgfHxcbiAgICAoY29kZVBvaW50ID49IDB4MjBkMCAmJiBjb2RlUG9pbnQgPD0gMHgyMGZmKSB8fFxuICAgIChjb2RlUG9pbnQgPj0gMHhmZTIwICYmIGNvZGVQb2ludCA8PSAweGZlMmYpXG4gICkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBJbmRpYyBzY3JpcHQgY29tYmluaW5nIG1hcmtzIChjb3ZlcnMgRGV2YW5hZ2FyaSB0aHJvdWdoIE1hbGF5YWxhbSlcbiAgaWYgKGNvZGVQb2ludCA+PSAweDA5MDAgJiYgY29kZVBvaW50IDw9IDB4MGQ0Zikge1xuICAgIC8vIFNpZ25zIGFuZCB2b3dlbCBtYXJrcyBhdCBzdGFydCBvZiBlYWNoIHNjcmlwdCBibG9ja1xuICAgIGNvbnN0IG9mZnNldCA9IGNvZGVQb2ludCAmIDB4N2ZcbiAgICBpZiAob2Zmc2V0IDw9IDB4MDMpIHJldHVybiB0cnVlIC8vIFNpZ25zIGF0IGJsb2NrIHN0YXJ0XG4gICAgaWYgKG9mZnNldCA+PSAweDNhICYmIG9mZnNldCA8PSAweDRmKSByZXR1cm4gdHJ1ZSAvLyBWb3dlbCBzaWducywgdmlyYW1hXG4gICAgaWYgKG9mZnNldCA+PSAweDUxICYmIG9mZnNldCA8PSAweDU3KSByZXR1cm4gdHJ1ZSAvLyBTdHJlc3Mgc2lnbnNcbiAgICBpZiAob2Zmc2V0ID49IDB4NjIgJiYgb2Zmc2V0IDw9IDB4NjMpIHJldHVybiB0cnVlIC8vIFZvd2VsIHNpZ25zXG4gIH1cblxuICAvLyBUaGFpL0xhbyBjb21iaW5pbmcgbWFya3NcbiAgLy8gTm90ZTogVSswRTMyIChTQVJBIEFBKSwgVSswRTMzIChTQVJBIEFNKSwgVSswRUIyLCBVKzBFQjMgYXJlIHNwYWNpbmcgdm93ZWxzICh3aWR0aCAxKSwgbm90IGNvbWJpbmluZyBtYXJrc1xuICBpZiAoXG4gICAgY29kZVBvaW50ID09PSAweDBlMzEgfHwgLy8gVGhhaSBNQUkgSEFOLUFLQVRcbiAgICAoY29kZVBvaW50ID49IDB4MGUzNCAmJiBjb2RlUG9pbnQgPD0gMHgwZTNhKSB8fCAvLyBUaGFpIHZvd2VsIHNpZ25zIChza2lwIFUrMEUzMiwgVSswRTMzKVxuICAgIChjb2RlUG9pbnQgPj0gMHgwZTQ3ICYmIGNvZGVQb2ludCA8PSAweDBlNGUpIHx8IC8vIFRoYWkgdm93ZWwgc2lnbnMgYW5kIG1hcmtzXG4gICAgY29kZVBvaW50ID09PSAweDBlYjEgfHwgLy8gTGFvIE1BSSBLQU5cbiAgICAoY29kZVBvaW50ID49IDB4MGViNCAmJiBjb2RlUG9pbnQgPD0gMHgwZWJjKSB8fCAvLyBMYW8gdm93ZWwgc2lnbnMgKHNraXAgVSswRUIyLCBVKzBFQjMpXG4gICAgKGNvZGVQb2ludCA+PSAweDBlYzggJiYgY29kZVBvaW50IDw9IDB4MGVjZCkgLy8gTGFvIHRvbmUgbWFya3NcbiAgKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIEFyYWJpYyBmb3JtYXR0aW5nXG4gIGlmIChcbiAgICAoY29kZVBvaW50ID49IDB4MDYwMCAmJiBjb2RlUG9pbnQgPD0gMHgwNjA1KSB8fFxuICAgIGNvZGVQb2ludCA9PT0gMHgwNmRkIHx8XG4gICAgY29kZVBvaW50ID09PSAweDA3MGYgfHxcbiAgICBjb2RlUG9pbnQgPT09IDB4MDhlMlxuICApIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gU3Vycm9nYXRlcywgdGFnIGNoYXJhY3RlcnNcbiAgaWYgKGNvZGVQb2ludCA+PSAweGQ4MDAgJiYgY29kZVBvaW50IDw9IDB4ZGZmZikgcmV0dXJuIHRydWVcbiAgaWYgKGNvZGVQb2ludCA+PSAweGUwMDAwICYmIGNvZGVQb2ludCA8PSAweGUwMDdmKSByZXR1cm4gdHJ1ZVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG4vLyBOb3RlOiBjb21wbGV4LXNjcmlwdCBncmFwaGVtZXMgbGlrZSBEZXZhbmFnYXJpIFx1MDkxNVx1MDk0RFx1MDkzNyAoa2ErdmlyYW1hK1pXSitzc2EpIHJlbmRlclxuLy8gYXMgYSBzaW5nbGUgbGlnYXR1cmUgZ2x5cGggYnV0IG9jY3VweSAyIHRlcm1pbmFsIGNlbGxzICh3Y3dpZHRoIHN1bXMgdGhlIGJhc2Vcbi8vIGNvbnNvbmFudHMpLiBCdW4uc3RyaW5nV2lkdGg9MiBtYXRjaGVzIHRlcm1pbmFsIGNlbGwgYWxsb2NhdGlvbiwgd2hpY2ggaXMgd2hhdFxuLy8gd2UgbmVlZCBmb3IgY3Vyc29yIHBvc2l0aW9uaW5nIFx1MjAxNCB0aGUgSlMgZmFsbGJhY2sncyBncmFwaGVtZS1jbHVzdGVyIHdpZHRoIG9mIDFcbi8vIHdvdWxkIGRlc3luYyBJbmsncyBsYXlvdXQgZnJvbSB0aGUgdGVybWluYWwuXG4vL1xuLy8gQnVuLnN0cmluZ1dpZHRoIGlzIHJlc29sdmVkIG9uY2UgYXQgbW9kdWxlIHNjb3BlIHJhdGhlciB0aGFuIGNoZWNrZWQgb24gZXZlcnlcbi8vIGNhbGwgXHUyMDE0IHR5cGVvZiBndWFyZHMgZGVvcHQgcHJvcGVydHkgYWNjZXNzIGFuZCB0aGlzIGlzIGEgaG90IHBhdGggKH4xMDBrIGNhbGxzL2ZyYW1lKS5cbmNvbnN0IGJ1blN0cmluZ1dpZHRoID1cbiAgdHlwZW9mIEJ1biAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEJ1bi5zdHJpbmdXaWR0aCA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gQnVuLnN0cmluZ1dpZHRoXG4gICAgOiBudWxsXG5cbmNvbnN0IEJVTl9TVFJJTkdfV0lEVEhfT1BUUyA9IHsgYW1iaWd1b3VzSXNOYXJyb3c6IHRydWUgfSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3Qgc3RyaW5nV2lkdGg6IChzdHI6IHN0cmluZykgPT4gbnVtYmVyID0gYnVuU3RyaW5nV2lkdGhcbiAgPyBzdHIgPT4gYnVuU3RyaW5nV2lkdGgoc3RyLCBCVU5fU1RSSU5HX1dJRFRIX09QVFMpXG4gIDogc3RyaW5nV2lkdGhKYXZhU2NyaXB0XG4iLCAiLy8gV2lkdGgtYXdhcmUgdHJ1bmNhdGlvbi93cmFwcGluZyBcdTIwMTQgbmVlZHMgaW5rL3N0cmluZ1dpZHRoIChub3QgbGVhZi1zYWZlKS5cblxuaW1wb3J0IHsgc3RyaW5nV2lkdGggfSBmcm9tICcuLi9pbmsvc3RyaW5nV2lkdGguanMnXG5pbXBvcnQgeyBnZXRHcmFwaGVtZVNlZ21lbnRlciB9IGZyb20gJy4vaW50bC5qcydcblxuLyoqXG4gKiBUcnVuY2F0ZXMgYSBmaWxlIHBhdGggaW4gdGhlIG1pZGRsZSB0byBwcmVzZXJ2ZSBib3RoIGRpcmVjdG9yeSBjb250ZXh0IGFuZCBmaWxlbmFtZS5cbiAqIFdpZHRoLWF3YXJlOiB1c2VzIHN0cmluZ1dpZHRoKCkgZm9yIGNvcnJlY3QgQ0pLL2Vtb2ppIG1lYXN1cmVtZW50LlxuICogRm9yIGV4YW1wbGU6IFwic3JjL2NvbXBvbmVudHMvZGVlcGx5L25lc3RlZC9mb2xkZXIvTXlDb21wb25lbnQudHN4XCIgYmVjb21lc1xuICogXCJzcmMvY29tcG9uZW50cy9cdTIwMjYvTXlDb21wb25lbnQudHN4XCIgd2hlbiBtYXhMZW5ndGggaXMgMzAuXG4gKlxuICogQHBhcmFtIHBhdGggVGhlIGZpbGUgcGF0aCB0byB0cnVuY2F0ZVxuICogQHBhcmFtIG1heExlbmd0aCBNYXhpbXVtIGRpc3BsYXkgd2lkdGggb2YgdGhlIHJlc3VsdCBpbiB0ZXJtaW5hbCBjb2x1bW5zIChtdXN0IGJlID4gMClcbiAqIEByZXR1cm5zIFRoZSB0cnVuY2F0ZWQgcGF0aCwgb3Igb3JpZ2luYWwgaWYgaXQgZml0cyB3aXRoaW4gbWF4TGVuZ3RoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZVBhdGhNaWRkbGUocGF0aDogc3RyaW5nLCBtYXhMZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gIC8vIE5vIHRydW5jYXRpb24gbmVlZGVkXG4gIGlmIChzdHJpbmdXaWR0aChwYXRoKSA8PSBtYXhMZW5ndGgpIHtcbiAgICByZXR1cm4gcGF0aFxuICB9XG5cbiAgLy8gSGFuZGxlIGVkZ2UgY2FzZSBvZiB2ZXJ5IHNtYWxsIG9yIG5vbi1wb3NpdGl2ZSBtYXhMZW5ndGhcbiAgaWYgKG1heExlbmd0aCA8PSAwKSB7XG4gICAgcmV0dXJuICdcdTIwMjYnXG4gIH1cblxuICAvLyBOZWVkIGF0IGxlYXN0IHJvb20gZm9yIFwiXHUyMDI2XCIgKyBzb21ldGhpbmcgbWVhbmluZ2Z1bFxuICBpZiAobWF4TGVuZ3RoIDwgNSkge1xuICAgIHJldHVybiB0cnVuY2F0ZVRvV2lkdGgocGF0aCwgbWF4TGVuZ3RoKVxuICB9XG5cbiAgLy8gRmluZCB0aGUgZmlsZW5hbWUgKGxhc3QgcGF0aCBzZWdtZW50KVxuICBjb25zdCBsYXN0U2xhc2ggPSBwYXRoLmxhc3RJbmRleE9mKCcvJylcbiAgLy8gSW5jbHVkZSB0aGUgbGVhZGluZyBzbGFzaCBpbiBmaWxlbmFtZSBmb3IgZGlzcGxheVxuICBjb25zdCBmaWxlbmFtZSA9IGxhc3RTbGFzaCA+PSAwID8gcGF0aC5zbGljZShsYXN0U2xhc2gpIDogcGF0aFxuICBjb25zdCBkaXJlY3RvcnkgPSBsYXN0U2xhc2ggPj0gMCA/IHBhdGguc2xpY2UoMCwgbGFzdFNsYXNoKSA6ICcnXG4gIGNvbnN0IGZpbGVuYW1lV2lkdGggPSBzdHJpbmdXaWR0aChmaWxlbmFtZSlcblxuICAvLyBJZiBmaWxlbmFtZSBhbG9uZSBpcyB0b28gbG9uZywgdHJ1bmNhdGUgZnJvbSBzdGFydFxuICBpZiAoZmlsZW5hbWVXaWR0aCA+PSBtYXhMZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIHRydW5jYXRlU3RhcnRUb1dpZHRoKHBhdGgsIG1heExlbmd0aClcbiAgfVxuXG4gIC8vIENhbGN1bGF0ZSBzcGFjZSBhdmFpbGFibGUgZm9yIGRpcmVjdG9yeSBwcmVmaXhcbiAgLy8gUmVzdWx0IGZvcm1hdDogZGlyZWN0b3J5ICsgXCJcdTIwMjZcIiArIGZpbGVuYW1lXG4gIGNvbnN0IGF2YWlsYWJsZUZvckRpciA9IG1heExlbmd0aCAtIDEgLSBmaWxlbmFtZVdpZHRoIC8vIC0xIGZvciBlbGxpcHNpc1xuXG4gIGlmIChhdmFpbGFibGVGb3JEaXIgPD0gMCkge1xuICAgIC8vIE5vIHJvb20gZm9yIGRpcmVjdG9yeSwganVzdCBzaG93IGZpbGVuYW1lICh0cnVuY2F0ZWQgaWYgbmVlZGVkKVxuICAgIHJldHVybiB0cnVuY2F0ZVN0YXJ0VG9XaWR0aChmaWxlbmFtZSwgbWF4TGVuZ3RoKVxuICB9XG5cbiAgLy8gVHJ1bmNhdGUgZGlyZWN0b3J5IGFuZCBjb21iaW5lXG4gIGNvbnN0IHRydW5jYXRlZERpciA9IHRydW5jYXRlVG9XaWR0aE5vRWxsaXBzaXMoZGlyZWN0b3J5LCBhdmFpbGFibGVGb3JEaXIpXG4gIHJldHVybiB0cnVuY2F0ZWREaXIgKyAnXHUyMDI2JyArIGZpbGVuYW1lXG59XG5cbi8qKlxuICogVHJ1bmNhdGVzIGEgc3RyaW5nIHRvIGZpdCB3aXRoaW4gYSBtYXhpbXVtIGRpc3BsYXkgd2lkdGgsIG1lYXN1cmVkIGluIHRlcm1pbmFsIGNvbHVtbnMuXG4gKiBTcGxpdHMgb24gZ3JhcGhlbWUgYm91bmRhcmllcyB0byBhdm9pZCBicmVha2luZyBlbW9qaSBvciBzdXJyb2dhdGUgcGFpcnMuXG4gKiBBcHBlbmRzICdcdTIwMjYnIHdoZW4gdHJ1bmNhdGlvbiBvY2N1cnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZVRvV2lkdGgodGV4dDogc3RyaW5nLCBtYXhXaWR0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKHN0cmluZ1dpZHRoKHRleHQpIDw9IG1heFdpZHRoKSByZXR1cm4gdGV4dFxuICBpZiAobWF4V2lkdGggPD0gMSkgcmV0dXJuICdcdTIwMjYnXG4gIGxldCB3aWR0aCA9IDBcbiAgbGV0IHJlc3VsdCA9ICcnXG4gIGZvciAoY29uc3QgeyBzZWdtZW50IH0gb2YgZ2V0R3JhcGhlbWVTZWdtZW50ZXIoKS5zZWdtZW50KHRleHQpKSB7XG4gICAgY29uc3Qgc2VnV2lkdGggPSBzdHJpbmdXaWR0aChzZWdtZW50KVxuICAgIGlmICh3aWR0aCArIHNlZ1dpZHRoID4gbWF4V2lkdGggLSAxKSBicmVha1xuICAgIHJlc3VsdCArPSBzZWdtZW50XG4gICAgd2lkdGggKz0gc2VnV2lkdGhcbiAgfVxuICByZXR1cm4gcmVzdWx0ICsgJ1x1MjAyNidcbn1cblxuLyoqXG4gKiBUcnVuY2F0ZXMgZnJvbSB0aGUgc3RhcnQgb2YgYSBzdHJpbmcsIGtlZXBpbmcgdGhlIHRhaWwgZW5kLlxuICogUHJlcGVuZHMgJ1x1MjAyNicgd2hlbiB0cnVuY2F0aW9uIG9jY3Vycy5cbiAqIFdpZHRoLWF3YXJlIGFuZCBncmFwaGVtZS1zYWZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJ1bmNhdGVTdGFydFRvV2lkdGgodGV4dDogc3RyaW5nLCBtYXhXaWR0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKHN0cmluZ1dpZHRoKHRleHQpIDw9IG1heFdpZHRoKSByZXR1cm4gdGV4dFxuICBpZiAobWF4V2lkdGggPD0gMSkgcmV0dXJuICdcdTIwMjYnXG4gIGNvbnN0IHNlZ21lbnRzID0gWy4uLmdldEdyYXBoZW1lU2VnbWVudGVyKCkuc2VnbWVudCh0ZXh0KV1cbiAgbGV0IHdpZHRoID0gMFxuICBsZXQgc3RhcnRJZHggPSBzZWdtZW50cy5sZW5ndGhcbiAgZm9yIChsZXQgaSA9IHNlZ21lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3Qgc2VnV2lkdGggPSBzdHJpbmdXaWR0aChzZWdtZW50c1tpXSEuc2VnbWVudClcbiAgICBpZiAod2lkdGggKyBzZWdXaWR0aCA+IG1heFdpZHRoIC0gMSkgYnJlYWsgLy8gLTEgZm9yICdcdTIwMjYnXG4gICAgd2lkdGggKz0gc2VnV2lkdGhcbiAgICBzdGFydElkeCA9IGlcbiAgfVxuICByZXR1cm4gKFxuICAgICdcdTIwMjYnICtcbiAgICBzZWdtZW50c1xuICAgICAgLnNsaWNlKHN0YXJ0SWR4KVxuICAgICAgLm1hcChzID0+IHMuc2VnbWVudClcbiAgICAgIC5qb2luKCcnKVxuICApXG59XG5cbi8qKlxuICogVHJ1bmNhdGVzIGEgc3RyaW5nIHRvIGZpdCB3aXRoaW4gYSBtYXhpbXVtIGRpc3BsYXkgd2lkdGgsIHdpdGhvdXQgYXBwZW5kaW5nIGFuIGVsbGlwc2lzLlxuICogVXNlZnVsIHdoZW4gdGhlIGNhbGxlciBhZGRzIGl0cyBvd24gc2VwYXJhdG9yIChlLmcuIG1pZGRsZS10cnVuY2F0aW9uIHdpdGggJ1x1MjAyNicgYmV0d2VlbiBwYXJ0cykuXG4gKiBXaWR0aC1hd2FyZSBhbmQgZ3JhcGhlbWUtc2FmZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRydW5jYXRlVG9XaWR0aE5vRWxsaXBzaXMoXG4gIHRleHQ6IHN0cmluZyxcbiAgbWF4V2lkdGg6IG51bWJlcixcbik6IHN0cmluZyB7XG4gIGlmIChzdHJpbmdXaWR0aCh0ZXh0KSA8PSBtYXhXaWR0aCkgcmV0dXJuIHRleHRcbiAgaWYgKG1heFdpZHRoIDw9IDApIHJldHVybiAnJ1xuICBsZXQgd2lkdGggPSAwXG4gIGxldCByZXN1bHQgPSAnJ1xuICBmb3IgKGNvbnN0IHsgc2VnbWVudCB9IG9mIGdldEdyYXBoZW1lU2VnbWVudGVyKCkuc2VnbWVudCh0ZXh0KSkge1xuICAgIGNvbnN0IHNlZ1dpZHRoID0gc3RyaW5nV2lkdGgoc2VnbWVudClcbiAgICBpZiAod2lkdGggKyBzZWdXaWR0aCA+IG1heFdpZHRoKSBicmVha1xuICAgIHJlc3VsdCArPSBzZWdtZW50XG4gICAgd2lkdGggKz0gc2VnV2lkdGhcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogVHJ1bmNhdGVzIGEgc3RyaW5nIHRvIGZpdCB3aXRoaW4gYSBtYXhpbXVtIGRpc3BsYXkgd2lkdGggKHRlcm1pbmFsIGNvbHVtbnMpLFxuICogc3BsaXR0aW5nIG9uIGdyYXBoZW1lIGJvdW5kYXJpZXMgdG8gYXZvaWQgYnJlYWtpbmcgZW1vamksIENKSywgb3Igc3Vycm9nYXRlIHBhaXJzLlxuICogQXBwZW5kcyAnXHUyMDI2JyB3aGVuIHRydW5jYXRpb24gb2NjdXJzLlxuICogQHBhcmFtIHN0ciBUaGUgc3RyaW5nIHRvIHRydW5jYXRlXG4gKiBAcGFyYW0gbWF4V2lkdGggTWF4aW11bSBkaXNwbGF5IHdpZHRoIGluIHRlcm1pbmFsIGNvbHVtbnNcbiAqIEBwYXJhbSBzaW5nbGVMaW5lIElmIHRydWUsIGFsc28gdHJ1bmNhdGVzIGF0IHRoZSBmaXJzdCBuZXdsaW5lXG4gKiBAcmV0dXJucyBUaGUgdHJ1bmNhdGVkIHN0cmluZyB3aXRoIGVsbGlwc2lzIGlmIG5lZWRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJ1bmNhdGUoXG4gIHN0cjogc3RyaW5nLFxuICBtYXhXaWR0aDogbnVtYmVyLFxuICBzaW5nbGVMaW5lOiBib29sZWFuID0gZmFsc2UsXG4pOiBzdHJpbmcge1xuICBsZXQgcmVzdWx0ID0gc3RyXG5cbiAgLy8gSWYgc2luZ2xlTGluZSBpcyB0cnVlLCB0cnVuY2F0ZSBhdCBmaXJzdCBuZXdsaW5lXG4gIGlmIChzaW5nbGVMaW5lKSB7XG4gICAgY29uc3QgZmlyc3ROZXdsaW5lID0gc3RyLmluZGV4T2YoJ1xcbicpXG4gICAgaWYgKGZpcnN0TmV3bGluZSAhPT0gLTEpIHtcbiAgICAgIHJlc3VsdCA9IHN0ci5zdWJzdHJpbmcoMCwgZmlyc3ROZXdsaW5lKVxuICAgICAgLy8gRW5zdXJlIHRvdGFsIHdpZHRoIGluY2x1ZGluZyBlbGxpcHNpcyBkb2Vzbid0IGV4Y2VlZCBtYXhXaWR0aFxuICAgICAgaWYgKHN0cmluZ1dpZHRoKHJlc3VsdCkgKyAxID4gbWF4V2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIHRydW5jYXRlVG9XaWR0aChyZXN1bHQsIG1heFdpZHRoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGAke3Jlc3VsdH1cdTIwMjZgXG4gICAgfVxuICB9XG5cbiAgaWYgKHN0cmluZ1dpZHRoKHJlc3VsdCkgPD0gbWF4V2lkdGgpIHtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbiAgcmV0dXJuIHRydW5jYXRlVG9XaWR0aChyZXN1bHQsIG1heFdpZHRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcFRleHQodGV4dDogc3RyaW5nLCB3aWR0aDogbnVtYmVyKTogc3RyaW5nW10ge1xuICBjb25zdCBsaW5lczogc3RyaW5nW10gPSBbXVxuICBsZXQgY3VycmVudExpbmUgPSAnJ1xuICBsZXQgY3VycmVudFdpZHRoID0gMFxuXG4gIGZvciAoY29uc3QgeyBzZWdtZW50IH0gb2YgZ2V0R3JhcGhlbWVTZWdtZW50ZXIoKS5zZWdtZW50KHRleHQpKSB7XG4gICAgY29uc3Qgc2VnV2lkdGggPSBzdHJpbmdXaWR0aChzZWdtZW50KVxuICAgIGlmIChjdXJyZW50V2lkdGggKyBzZWdXaWR0aCA8PSB3aWR0aCkge1xuICAgICAgY3VycmVudExpbmUgKz0gc2VnbWVudFxuICAgICAgY3VycmVudFdpZHRoICs9IHNlZ1dpZHRoXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50TGluZSkgbGluZXMucHVzaChjdXJyZW50TGluZSlcbiAgICAgIGN1cnJlbnRMaW5lID0gc2VnbWVudFxuICAgICAgY3VycmVudFdpZHRoID0gc2VnV2lkdGhcbiAgICB9XG4gIH1cblxuICBpZiAoY3VycmVudExpbmUpIGxpbmVzLnB1c2goY3VycmVudExpbmUpXG4gIHJldHVybiBsaW5lc1xufVxuIiwgIi8vIFB1cmUgZGlzcGxheSBmb3JtYXR0ZXJzIFx1MjAxNCBsZWFmLXNhZmUgKG5vIEluaykuIFdpZHRoLWF3YXJlIHRydW5jYXRpb24gbGl2ZXMgaW4gLi90cnVuY2F0ZS50cy5cblxuaW1wb3J0IHsgZ2V0UmVsYXRpdmVUaW1lRm9ybWF0LCBnZXRUaW1lWm9uZSB9IGZyb20gJy4vaW50bC5qcydcblxuLyoqXG4gKiBGb3JtYXRzIGEgYnl0ZSBjb3VudCB0byBhIGh1bWFuLXJlYWRhYmxlIHN0cmluZyAoS0IsIE1CLCBHQikuXG4gKiBAZXhhbXBsZSBmb3JtYXRGaWxlU2l6ZSgxNTM2KSBcdTIxOTIgXCIxLjVLQlwiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRGaWxlU2l6ZShzaXplSW5CeXRlczogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3Qga2IgPSBzaXplSW5CeXRlcyAvIDEwMjRcbiAgaWYgKGtiIDwgMSkge1xuICAgIHJldHVybiBgJHtzaXplSW5CeXRlc30gYnl0ZXNgXG4gIH1cbiAgaWYgKGtiIDwgMTAyNCkge1xuICAgIHJldHVybiBgJHtrYi50b0ZpeGVkKDEpLnJlcGxhY2UoL1xcLjAkLywgJycpfUtCYFxuICB9XG4gIGNvbnN0IG1iID0ga2IgLyAxMDI0XG4gIGlmIChtYiA8IDEwMjQpIHtcbiAgICByZXR1cm4gYCR7bWIudG9GaXhlZCgxKS5yZXBsYWNlKC9cXC4wJC8sICcnKX1NQmBcbiAgfVxuICBjb25zdCBnYiA9IG1iIC8gMTAyNFxuICByZXR1cm4gYCR7Z2IudG9GaXhlZCgxKS5yZXBsYWNlKC9cXC4wJC8sICcnKX1HQmBcbn1cblxuLyoqXG4gKiBGb3JtYXRzIG1pbGxpc2Vjb25kcyBhcyBzZWNvbmRzIHdpdGggMSBkZWNpbWFsIHBsYWNlIChlLmcuIGAxMjM0YCBcdTIxOTIgYFwiMS4yc1wiYCkuXG4gKiBVbmxpa2UgZm9ybWF0RHVyYXRpb24sIGFsd2F5cyBrZWVwcyB0aGUgZGVjaW1hbCBcdTIwMTQgdXNlIGZvciBzdWItbWludXRlIHRpbWluZ3NcbiAqIHdoZXJlIHRoZSBmcmFjdGlvbmFsIHNlY29uZCBpcyBtZWFuaW5nZnVsIChUVEZULCBob29rIGR1cmF0aW9ucywgZXRjLikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRTZWNvbmRzU2hvcnQobXM6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiBgJHsobXMgLyAxMDAwKS50b0ZpeGVkKDEpfXNgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREdXJhdGlvbihcbiAgbXM6IG51bWJlcixcbiAgb3B0aW9ucz86IHsgaGlkZVRyYWlsaW5nWmVyb3M/OiBib29sZWFuOyBtb3N0U2lnbmlmaWNhbnRPbmx5PzogYm9vbGVhbiB9LFxuKTogc3RyaW5nIHtcbiAgaWYgKG1zIDwgNjAwMDApIHtcbiAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIDBcbiAgICBpZiAobXMgPT09IDApIHtcbiAgICAgIHJldHVybiAnMHMnXG4gICAgfVxuICAgIC8vIEZvciBkdXJhdGlvbnMgPCAxcywgc2hvdyAxIGRlY2ltYWwgcGxhY2UgKGUuZy4sIDAuNXMpXG4gICAgaWYgKG1zIDwgMSkge1xuICAgICAgY29uc3QgcyA9IChtcyAvIDEwMDApLnRvRml4ZWQoMSlcbiAgICAgIHJldHVybiBgJHtzfXNgXG4gICAgfVxuICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCkudG9TdHJpbmcoKVxuICAgIHJldHVybiBgJHtzfXNgXG4gIH1cblxuICBsZXQgZGF5cyA9IE1hdGguZmxvb3IobXMgLyA4NjQwMDAwMClcbiAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcigobXMgJSA4NjQwMDAwMCkgLyAzNjAwMDAwKVxuICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKG1zICUgMzYwMDAwMCkgLyA2MDAwMClcbiAgbGV0IHNlY29uZHMgPSBNYXRoLnJvdW5kKChtcyAlIDYwMDAwKSAvIDEwMDApXG5cbiAgLy8gSGFuZGxlIHJvdW5kaW5nIGNhcnJ5LW92ZXIgKGUuZy4sIDU5LjVzIHJvdW5kcyB0byA2MHMpXG4gIGlmIChzZWNvbmRzID09PSA2MCkge1xuICAgIHNlY29uZHMgPSAwXG4gICAgbWludXRlcysrXG4gIH1cbiAgaWYgKG1pbnV0ZXMgPT09IDYwKSB7XG4gICAgbWludXRlcyA9IDBcbiAgICBob3VycysrXG4gIH1cbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIGhvdXJzID0gMFxuICAgIGRheXMrK1xuICB9XG5cbiAgY29uc3QgaGlkZSA9IG9wdGlvbnM/LmhpZGVUcmFpbGluZ1plcm9zXG5cbiAgaWYgKG9wdGlvbnM/Lm1vc3RTaWduaWZpY2FudE9ubHkpIHtcbiAgICBpZiAoZGF5cyA+IDApIHJldHVybiBgJHtkYXlzfWRgXG4gICAgaWYgKGhvdXJzID4gMCkgcmV0dXJuIGAke2hvdXJzfWhgXG4gICAgaWYgKG1pbnV0ZXMgPiAwKSByZXR1cm4gYCR7bWludXRlc31tYFxuICAgIHJldHVybiBgJHtzZWNvbmRzfXNgXG4gIH1cblxuICBpZiAoZGF5cyA+IDApIHtcbiAgICBpZiAoaGlkZSAmJiBob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwKSByZXR1cm4gYCR7ZGF5c31kYFxuICAgIGlmIChoaWRlICYmIG1pbnV0ZXMgPT09IDApIHJldHVybiBgJHtkYXlzfWQgJHtob3Vyc31oYFxuICAgIHJldHVybiBgJHtkYXlzfWQgJHtob3Vyc31oICR7bWludXRlc31tYFxuICB9XG4gIGlmIChob3VycyA+IDApIHtcbiAgICBpZiAoaGlkZSAmJiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDApIHJldHVybiBgJHtob3Vyc31oYFxuICAgIGlmIChoaWRlICYmIHNlY29uZHMgPT09IDApIHJldHVybiBgJHtob3Vyc31oICR7bWludXRlc31tYFxuICAgIHJldHVybiBgJHtob3Vyc31oICR7bWludXRlc31tICR7c2Vjb25kc31zYFxuICB9XG4gIGlmIChtaW51dGVzID4gMCkge1xuICAgIGlmIChoaWRlICYmIHNlY29uZHMgPT09IDApIHJldHVybiBgJHttaW51dGVzfW1gXG4gICAgcmV0dXJuIGAke21pbnV0ZXN9bSAke3NlY29uZHN9c2BcbiAgfVxuICByZXR1cm4gYCR7c2Vjb25kc31zYFxufVxuXG4vLyBgbmV3IEludGwuTnVtYmVyRm9ybWF0YCBpcyBleHBlbnNpdmUsIHNvIGNhY2hlIGZvcm1hdHRlcnMgZm9yIHJldXNlXG5sZXQgbnVtYmVyRm9ybWF0dGVyRm9yQ29uc2lzdGVudERlY2ltYWxzOiBJbnRsLk51bWJlckZvcm1hdCB8IG51bGwgPSBudWxsXG5sZXQgbnVtYmVyRm9ybWF0dGVyRm9ySW5jb25zaXN0ZW50RGVjaW1hbHM6IEludGwuTnVtYmVyRm9ybWF0IHwgbnVsbCA9IG51bGxcbmNvbnN0IGdldE51bWJlckZvcm1hdHRlciA9IChcbiAgdXNlQ29uc2lzdGVudERlY2ltYWxzOiBib29sZWFuLFxuKTogSW50bC5OdW1iZXJGb3JtYXQgPT4ge1xuICBpZiAodXNlQ29uc2lzdGVudERlY2ltYWxzKSB7XG4gICAgaWYgKCFudW1iZXJGb3JtYXR0ZXJGb3JDb25zaXN0ZW50RGVjaW1hbHMpIHtcbiAgICAgIG51bWJlckZvcm1hdHRlckZvckNvbnNpc3RlbnREZWNpbWFscyA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG5vdGF0aW9uOiAnY29tcGFjdCcsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSxcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAxLFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIG51bWJlckZvcm1hdHRlckZvckNvbnNpc3RlbnREZWNpbWFsc1xuICB9IGVsc2Uge1xuICAgIGlmICghbnVtYmVyRm9ybWF0dGVyRm9ySW5jb25zaXN0ZW50RGVjaW1hbHMpIHtcbiAgICAgIG51bWJlckZvcm1hdHRlckZvckluY29uc2lzdGVudERlY2ltYWxzID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgbm90YXRpb246ICdjb21wYWN0JyxcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxLFxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gbnVtYmVyRm9ybWF0dGVyRm9ySW5jb25zaXN0ZW50RGVjaW1hbHNcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bWJlcjogbnVtYmVyKTogc3RyaW5nIHtcbiAgLy8gT25seSB1c2UgbWluaW11bUZyYWN0aW9uRGlnaXRzIGZvciBudW1iZXJzIHRoYXQgd2lsbCBiZSBzaG93biBpbiBjb21wYWN0IG5vdGF0aW9uXG4gIGNvbnN0IHNob3VsZFVzZUNvbnNpc3RlbnREZWNpbWFscyA9IG51bWJlciA+PSAxMDAwXG5cbiAgcmV0dXJuIGdldE51bWJlckZvcm1hdHRlcihzaG91bGRVc2VDb25zaXN0ZW50RGVjaW1hbHMpXG4gICAgLmZvcm1hdChudW1iZXIpIC8vIGVnLiBcIjEzMjFcIiA9PiBcIjEuM0tcIiwgXCI5MDBcIiA9PiBcIjkwMFwiXG4gICAgLnRvTG93ZXJDYXNlKCkgLy8gZWcuIFwiMS4zS1wiID0+IFwiMS4za1wiLCBcIjEuMEtcIiA9PiBcIjEuMGtcIlxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VG9rZW5zKGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gZm9ybWF0TnVtYmVyKGNvdW50KS5yZXBsYWNlKCcuMCcsICcnKVxufVxuXG50eXBlIFJlbGF0aXZlVGltZVN0eWxlID0gJ2xvbmcnIHwgJ3Nob3J0JyB8ICduYXJyb3cnXG5cbnR5cGUgUmVsYXRpdmVUaW1lT3B0aW9ucyA9IHtcbiAgc3R5bGU/OiBSZWxhdGl2ZVRpbWVTdHlsZVxuICBudW1lcmljPzogJ2Fsd2F5cycgfCAnYXV0bydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlVGltZShcbiAgZGF0ZTogRGF0ZSxcbiAgb3B0aW9uczogUmVsYXRpdmVUaW1lT3B0aW9ucyAmIHsgbm93PzogRGF0ZSB9ID0ge30sXG4pOiBzdHJpbmcge1xuICBjb25zdCB7IHN0eWxlID0gJ25hcnJvdycsIG51bWVyaWMgPSAnYWx3YXlzJywgbm93ID0gbmV3IERhdGUoKSB9ID0gb3B0aW9uc1xuICBjb25zdCBkaWZmSW5NcyA9IGRhdGUuZ2V0VGltZSgpIC0gbm93LmdldFRpbWUoKVxuICAvLyBVc2UgTWF0aC50cnVuYyB0byB0cnVuY2F0ZSB0b3dhcmRzIHplcm8gZm9yIGJvdGggcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHZhbHVlc1xuICBjb25zdCBkaWZmSW5TZWNvbmRzID0gTWF0aC50cnVuYyhkaWZmSW5NcyAvIDEwMDApXG5cbiAgLy8gRGVmaW5lIHRpbWUgaW50ZXJ2YWxzIHdpdGggY3VzdG9tIHNob3J0IHVuaXRzXG4gIGNvbnN0IGludGVydmFscyA9IFtcbiAgICB7IHVuaXQ6ICd5ZWFyJywgc2Vjb25kczogMzE1MzYwMDAsIHNob3J0VW5pdDogJ3knIH0sXG4gICAgeyB1bml0OiAnbW9udGgnLCBzZWNvbmRzOiAyNTkyMDAwLCBzaG9ydFVuaXQ6ICdtbycgfSxcbiAgICB7IHVuaXQ6ICd3ZWVrJywgc2Vjb25kczogNjA0ODAwLCBzaG9ydFVuaXQ6ICd3JyB9LFxuICAgIHsgdW5pdDogJ2RheScsIHNlY29uZHM6IDg2NDAwLCBzaG9ydFVuaXQ6ICdkJyB9LFxuICAgIHsgdW5pdDogJ2hvdXInLCBzZWNvbmRzOiAzNjAwLCBzaG9ydFVuaXQ6ICdoJyB9LFxuICAgIHsgdW5pdDogJ21pbnV0ZScsIHNlY29uZHM6IDYwLCBzaG9ydFVuaXQ6ICdtJyB9LFxuICAgIHsgdW5pdDogJ3NlY29uZCcsIHNlY29uZHM6IDEsIHNob3J0VW5pdDogJ3MnIH0sXG4gIF0gYXMgY29uc3RcblxuICAvLyBGaW5kIHRoZSBhcHByb3ByaWF0ZSB1bml0XG4gIGZvciAoY29uc3QgeyB1bml0LCBzZWNvbmRzOiBpbnRlcnZhbFNlY29uZHMsIHNob3J0VW5pdCB9IG9mIGludGVydmFscykge1xuICAgIGlmIChNYXRoLmFicyhkaWZmSW5TZWNvbmRzKSA+PSBpbnRlcnZhbFNlY29uZHMpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC50cnVuYyhkaWZmSW5TZWNvbmRzIC8gaW50ZXJ2YWxTZWNvbmRzKVxuICAgICAgLy8gRm9yIHNob3J0IHN0eWxlLCB1c2UgY3VzdG9tIGZvcm1hdFxuICAgICAgaWYgKHN0eWxlID09PSAnbmFycm93Jykge1xuICAgICAgICByZXR1cm4gZGlmZkluU2Vjb25kcyA8IDBcbiAgICAgICAgICA/IGAke01hdGguYWJzKHZhbHVlKX0ke3Nob3J0VW5pdH0gYWdvYFxuICAgICAgICAgIDogYGluICR7dmFsdWV9JHtzaG9ydFVuaXR9YFxuICAgICAgfVxuICAgICAgLy8gRm9yIGRheXMgYW5kIGxvbmdlciwgdXNlIGxvbmcgc3R5bGUgcmVnYXJkbGVzcyBvZiB0aGUgc3R5bGUgcGFyYW1ldGVyXG4gICAgICByZXR1cm4gZ2V0UmVsYXRpdmVUaW1lRm9ybWF0KCdsb25nJywgbnVtZXJpYykuZm9ybWF0KHZhbHVlLCB1bml0KVxuICAgIH1cbiAgfVxuXG4gIC8vIEZvciB2YWx1ZXMgbGVzcyB0aGFuIDEgc2Vjb25kXG4gIGlmIChzdHlsZSA9PT0gJ25hcnJvdycpIHtcbiAgICByZXR1cm4gZGlmZkluU2Vjb25kcyA8PSAwID8gJzBzIGFnbycgOiAnaW4gMHMnXG4gIH1cbiAgcmV0dXJuIGdldFJlbGF0aXZlVGltZUZvcm1hdChzdHlsZSwgbnVtZXJpYykuZm9ybWF0KDAsICdzZWNvbmQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmVUaW1lQWdvKFxuICBkYXRlOiBEYXRlLFxuICBvcHRpb25zOiBSZWxhdGl2ZVRpbWVPcHRpb25zICYgeyBub3c/OiBEYXRlIH0gPSB7fSxcbik6IHN0cmluZyB7XG4gIGNvbnN0IHsgbm93ID0gbmV3IERhdGUoKSwgLi4ucmVzdE9wdGlvbnMgfSA9IG9wdGlvbnNcbiAgaWYgKGRhdGUgPiBub3cpIHtcbiAgICAvLyBGb3IgZnV0dXJlIGRhdGVzLCBqdXN0IHJldHVybiB0aGUgcmVsYXRpdmUgdGltZSB3aXRob3V0IFwiYWdvXCJcbiAgICByZXR1cm4gZm9ybWF0UmVsYXRpdmVUaW1lKGRhdGUsIHsgLi4ucmVzdE9wdGlvbnMsIG5vdyB9KVxuICB9XG5cbiAgLy8gRm9yIHBhc3QgZGF0ZXMsIGZvcmNlIG51bWVyaWM6ICdhbHdheXMnIHRvIGVuc3VyZSB3ZSBnZXQgXCJYIHVuaXRzIGFnb1wiXG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZVRpbWUoZGF0ZSwgeyAuLi5yZXN0T3B0aW9ucywgbnVtZXJpYzogJ2Fsd2F5cycsIG5vdyB9KVxufVxuXG4vKipcbiAqIEZvcm1hdHMgbG9nIG1ldGFkYXRhIGZvciBkaXNwbGF5ICh0aW1lLCBzaXplIG9yIG1lc3NhZ2UgY291bnQsIGJyYW5jaCwgdGFnLCBQUilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdExvZ01ldGFkYXRhKGxvZzoge1xuICBtb2RpZmllZDogRGF0ZVxuICBtZXNzYWdlQ291bnQ6IG51bWJlclxuICBmaWxlU2l6ZT86IG51bWJlclxuICBnaXRCcmFuY2g/OiBzdHJpbmdcbiAgdGFnPzogc3RyaW5nXG4gIGFnZW50U2V0dGluZz86IHN0cmluZ1xuICBwck51bWJlcj86IG51bWJlclxuICBwclJlcG9zaXRvcnk/OiBzdHJpbmdcbn0pOiBzdHJpbmcge1xuICBjb25zdCBzaXplT3JDb3VudCA9XG4gICAgbG9nLmZpbGVTaXplICE9PSB1bmRlZmluZWRcbiAgICAgID8gZm9ybWF0RmlsZVNpemUobG9nLmZpbGVTaXplKVxuICAgICAgOiBgJHtsb2cubWVzc2FnZUNvdW50fSBtZXNzYWdlc2BcbiAgY29uc3QgcGFydHMgPSBbXG4gICAgZm9ybWF0UmVsYXRpdmVUaW1lQWdvKGxvZy5tb2RpZmllZCwgeyBzdHlsZTogJ3Nob3J0JyB9KSxcbiAgICAuLi4obG9nLmdpdEJyYW5jaCA/IFtsb2cuZ2l0QnJhbmNoXSA6IFtdKSxcbiAgICBzaXplT3JDb3VudCxcbiAgXVxuICBpZiAobG9nLnRhZykge1xuICAgIHBhcnRzLnB1c2goYCMke2xvZy50YWd9YClcbiAgfVxuICBpZiAobG9nLmFnZW50U2V0dGluZykge1xuICAgIHBhcnRzLnB1c2goYEAke2xvZy5hZ2VudFNldHRpbmd9YClcbiAgfVxuICBpZiAobG9nLnByTnVtYmVyKSB7XG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvZy5wclJlcG9zaXRvcnlcbiAgICAgICAgPyBgJHtsb2cucHJSZXBvc2l0b3J5fSMke2xvZy5wck51bWJlcn1gXG4gICAgICAgIDogYCMke2xvZy5wck51bWJlcn1gLFxuICAgIClcbiAgfVxuICByZXR1cm4gcGFydHMuam9pbignIFx1MDBCNyAnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UmVzZXRUaW1lKFxuICB0aW1lc3RhbXBJblNlY29uZHM6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgc2hvd1RpbWV6b25lOiBib29sZWFuID0gZmFsc2UsXG4gIHNob3dUaW1lOiBib29sZWFuID0gdHJ1ZSxcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGlmICghdGltZXN0YW1wSW5TZWNvbmRzKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcEluU2Vjb25kcyAqIDEwMDApXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcbiAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpXG5cbiAgLy8gQ2FsY3VsYXRlIGhvdXJzIHVudGlsIHJlc2V0XG4gIGNvbnN0IGhvdXJzVW50aWxSZXNldCA9IChkYXRlLmdldFRpbWUoKSAtIG5vdy5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxuXG4gIC8vIElmIHJlc2V0IGlzIG1vcmUgdGhhbiAyNCBob3VycyBhd2F5LCBzaG93IHRoZSBkYXRlIGFzIHdlbGxcbiAgaWYgKGhvdXJzVW50aWxSZXNldCA+IDI0KSB7XG4gICAgLy8gU2hvdyBkYXRlIGFuZCB0aW1lIGZvciByZXNldHMgbW9yZSB0aGFuIGEgZGF5IGF3YXlcbiAgICBjb25zdCBkYXRlT3B0aW9uczogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgaG91cjogc2hvd1RpbWUgPyAnbnVtZXJpYycgOiB1bmRlZmluZWQsXG4gICAgICBtaW51dGU6ICFzaG93VGltZSB8fCBtaW51dGVzID09PSAwID8gdW5kZWZpbmVkIDogJzItZGlnaXQnLFxuICAgICAgaG91cjEyOiBzaG93VGltZSA/IHRydWUgOiB1bmRlZmluZWQsXG4gICAgfVxuXG4gICAgLy8gQWRkIHllYXIgaWYgaXQncyBub3QgdGhlIGN1cnJlbnQgeWVhclxuICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgIT09IG5vdy5nZXRGdWxsWWVhcigpKSB7XG4gICAgICBkYXRlT3B0aW9ucy55ZWFyID0gJ251bWVyaWMnXG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgZGF0ZU9wdGlvbnMpXG5cbiAgICAvLyBSZW1vdmUgdGhlIHNwYWNlIGJlZm9yZSBBTS9QTSBhbmQgbWFrZSBpdCBsb3dlcmNhc2VcbiAgICByZXR1cm4gKFxuICAgICAgZGF0ZVN0cmluZy5yZXBsYWNlKC8gKFtBUF1NKS9pLCAoX21hdGNoLCBhbXBtKSA9PiBhbXBtLnRvTG93ZXJDYXNlKCkpICtcbiAgICAgIChzaG93VGltZXpvbmUgPyBgICgke2dldFRpbWVab25lKCl9KWAgOiAnJylcbiAgICApXG4gIH1cblxuICAvLyBGb3IgcmVzZXRzIHdpdGhpbiAyNCBob3Vycywgc2hvdyBqdXN0IHRoZSB0aW1lIChleGlzdGluZyBiZWhhdmlvcilcbiAgY29uc3QgdGltZVN0cmluZyA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycsIHtcbiAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgbWludXRlOiBtaW51dGVzID09PSAwID8gdW5kZWZpbmVkIDogJzItZGlnaXQnLFxuICAgIGhvdXIxMjogdHJ1ZSxcbiAgfSlcblxuICAvLyBSZW1vdmUgdGhlIHNwYWNlIGJlZm9yZSBBTS9QTSBhbmQgbWFrZSBpdCBsb3dlcmNhc2UsIHRoZW4gYWRkIHRpbWV6b25lXG4gIHJldHVybiAoXG4gICAgdGltZVN0cmluZy5yZXBsYWNlKC8gKFtBUF1NKS9pLCAoX21hdGNoLCBhbXBtKSA9PiBhbXBtLnRvTG93ZXJDYXNlKCkpICtcbiAgICAoc2hvd1RpbWV6b25lID8gYCAoJHtnZXRUaW1lWm9uZSgpfSlgIDogJycpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlc2V0VGV4dChcbiAgcmVzZXRzQXQ6IHN0cmluZyxcbiAgc2hvd1RpbWV6b25lOiBib29sZWFuID0gZmFsc2UsXG4gIHNob3dUaW1lOiBib29sZWFuID0gdHJ1ZSxcbik6IHN0cmluZyB7XG4gIGNvbnN0IGR0ID0gbmV3IERhdGUocmVzZXRzQXQpXG4gIHJldHVybiBgJHtmb3JtYXRSZXNldFRpbWUoTWF0aC5mbG9vcihkdC5nZXRUaW1lKCkgLyAxMDAwKSwgc2hvd1RpbWV6b25lLCBzaG93VGltZSl9YFxufVxuXG4vLyBCYWNrLWNvbXBhdDogdHJ1bmNhdGUgaGVscGVycyBtb3ZlZCB0byAuL3RydW5jYXRlLnRzIChuZWVkcyBpbmsvc3RyaW5nV2lkdGgpXG5leHBvcnQge1xuICB0cnVuY2F0ZSxcbiAgdHJ1bmNhdGVQYXRoTWlkZGxlLFxuICB0cnVuY2F0ZVN0YXJ0VG9XaWR0aCxcbiAgdHJ1bmNhdGVUb1dpZHRoLFxuICB0cnVuY2F0ZVRvV2lkdGhOb0VsbGlwc2lzLFxuICB3cmFwVGV4dCxcbn0gZnJvbSAnLi90cnVuY2F0ZS5qcydcbiIsICIvKipcbiAqIFNoYXJlZCBpbmZyYXN0cnVjdHVyZSBmb3IgcHJvZmlsZXIgbW9kdWxlcyAoc3RhcnR1cFByb2ZpbGVyLCBxdWVyeVByb2ZpbGVyLFxuICogaGVhZGxlc3NQcm9maWxlcikuIEFsbCB0aHJlZSB1c2UgdGhlIHNhbWUgcGVyZl9ob29rcyB0aW1lbGluZSBhbmQgdGhlIHNhbWVcbiAqIGxpbmUgZm9ybWF0IGZvciBkZXRhaWxlZCByZXBvcnRzLlxuICovXG5cbmltcG9ydCB0eXBlIHsgcGVyZm9ybWFuY2UgYXMgUGVyZm9ybWFuY2VUeXBlIH0gZnJvbSAncGVyZl9ob29rcydcbmltcG9ydCB7IGZvcm1hdEZpbGVTaXplIH0gZnJvbSAnLi9mb3JtYXQuanMnXG5cbi8vIExhenktbG9hZCBwZXJmb3JtYW5jZSBBUEkgb25seSB3aGVuIHByb2ZpbGluZyBpcyBlbmFibGVkLlxuLy8gU2hhcmVkIGFjcm9zcyBhbGwgcHJvZmlsZXJzIFx1MjAxNCBwZXJmX2hvb2tzLnBlcmZvcm1hbmNlIGlzIGEgcHJvY2Vzcy13aWRlIHNpbmdsZXRvbi5cbmxldCBwZXJmb3JtYW5jZTogdHlwZW9mIFBlcmZvcm1hbmNlVHlwZSB8IG51bGwgPSBudWxsXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQZXJmb3JtYW5jZSgpOiB0eXBlb2YgUGVyZm9ybWFuY2VUeXBlIHtcbiAgaWYgKCFwZXJmb3JtYW5jZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG4gICAgcGVyZm9ybWFuY2UgPSByZXF1aXJlKCdwZXJmX2hvb2tzJykucGVyZm9ybWFuY2VcbiAgfVxuICByZXR1cm4gcGVyZm9ybWFuY2UhXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNcyhtczogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1zLnRvRml4ZWQoMylcbn1cblxuLyoqXG4gKiBSZW5kZXIgYSBzaW5nbGUgdGltZWxpbmUgbGluZSBpbiB0aGUgc2hhcmVkIHByb2ZpbGVyIHJlcG9ydCBmb3JtYXQ6XG4gKiAgIFsrICB0b3RhbC5tc10gKCsgIGRlbHRhLm1zKSBuYW1lIFtleHRyYV0gW3wgUlNTOiAuLiwgSGVhcDogLi5dXG4gKlxuICogdG90YWxQYWQvZGVsdGFQYWQgY29udHJvbCB0aGUgcGFkU3RhcnQgd2lkdGggc28gY2FsbGVycyBjYW4gYWxpZ24gY29sdW1uc1xuICogYmFzZWQgb24gdGhlaXIgZXhwZWN0ZWQgbWFnbml0dWRlIChzdGFydHVwIHVzZXMgOC83LCBxdWVyeSB1c2VzIDEwLzkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZWxpbmVMaW5lKFxuICB0b3RhbE1zOiBudW1iZXIsXG4gIGRlbHRhTXM6IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxuICBtZW1vcnk6IE5vZGVKUy5NZW1vcnlVc2FnZSB8IHVuZGVmaW5lZCxcbiAgdG90YWxQYWQ6IG51bWJlcixcbiAgZGVsdGFQYWQ6IG51bWJlcixcbiAgZXh0cmEgPSAnJyxcbik6IHN0cmluZyB7XG4gIGNvbnN0IG1lbUluZm8gPSBtZW1vcnlcbiAgICA/IGAgfCBSU1M6ICR7Zm9ybWF0RmlsZVNpemUobWVtb3J5LnJzcyl9LCBIZWFwOiAke2Zvcm1hdEZpbGVTaXplKG1lbW9yeS5oZWFwVXNlZCl9YFxuICAgIDogJydcbiAgcmV0dXJuIGBbKyR7Zm9ybWF0TXModG90YWxNcykucGFkU3RhcnQodG90YWxQYWQpfW1zXSAoKyR7Zm9ybWF0TXMoZGVsdGFNcykucGFkU3RhcnQoZGVsdGFQYWQpfW1zKSAke25hbWV9JHtleHRyYX0ke21lbUluZm99YFxufVxuIiwgIi8qKlxuICogU3RhcnR1cCBwcm9maWxpbmcgdXRpbGl0eSBmb3IgbWVhc3VyaW5nIGFuZCByZXBvcnRpbmcgdGltZSBzcGVudCBpbiB2YXJpb3VzXG4gKiBpbml0aWFsaXphdGlvbiBwaGFzZXMuXG4gKlxuICogVHdvIG1vZGVzOlxuICogMS4gU2FtcGxlZCBsb2dnaW5nOiAxMDAlIG9mIGFudCB1c2VycywgMC4xJSBvZiBleHRlcm5hbCB1c2VycyAtIGxvZ3MgcGhhc2VzIHRvIFN0YXRzaWdcbiAqIDIuIERldGFpbGVkIHByb2ZpbGluZzogQ0xBVURFX0NPREVfUFJPRklMRV9TVEFSVFVQPTEgLSBmdWxsIHJlcG9ydCB3aXRoIG1lbW9yeSBzbmFwc2hvdHNcbiAqXG4gKiBVc2VzIE5vZGUuanMgYnVpbHQtaW4gcGVyZm9ybWFuY2UgaG9va3MgQVBJIGZvciBzdGFuZGFyZCB0aW1pbmcgbWVhc3VyZW1lbnQuXG4gKi9cblxuaW1wb3J0IHsgZGlybmFtZSwgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRTZXNzaW9uSWQgfSBmcm9tICdzcmMvYm9vdHN0cmFwL3N0YXRlLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi9kZWJ1Zy5qcydcbmltcG9ydCB7IGdldENsYXVkZUNvbmZpZ0hvbWVEaXIsIGlzRW52VHJ1dGh5IH0gZnJvbSAnLi9lbnZVdGlscy5qcydcbmltcG9ydCB7IGdldEZzSW1wbGVtZW50YXRpb24gfSBmcm9tICcuL2ZzT3BlcmF0aW9ucy5qcydcbmltcG9ydCB7IGZvcm1hdE1zLCBmb3JtYXRUaW1lbGluZUxpbmUsIGdldFBlcmZvcm1hbmNlIH0gZnJvbSAnLi9wcm9maWxlckJhc2UuanMnXG5pbXBvcnQgeyB3cml0ZUZpbGVTeW5jX0RFUFJFQ0FURUQgfSBmcm9tICcuL3Nsb3dPcGVyYXRpb25zLmpzJ1xuXG4vLyBNb2R1bGUtbGV2ZWwgc3RhdGUgLSBkZWNpZGVkIG9uY2UgYXQgbW9kdWxlIGxvYWRcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tcHJvY2Vzcy1lbnYtdG9wLWxldmVsXG5jb25zdCBERVRBSUxFRF9QUk9GSUxJTkcgPSBpc0VudlRydXRoeShwcm9jZXNzLmVudi5DTEFVREVfQ09ERV9QUk9GSUxFX1NUQVJUVVApXG5cbi8vIFNhbXBsaW5nIGZvciBTdGF0c2lnIGxvZ2dpbmc6IDEwMCUgYW50LCAwLjUlIGV4dGVybmFsXG4vLyBEZWNpc2lvbiBtYWRlIG9uY2UgYXQgc3RhcnR1cCAtIG5vbi1zYW1wbGVkIHVzZXJzIHBheSBubyBwcm9maWxpbmcgY29zdFxuY29uc3QgU1RBVFNJR19TQU1QTEVfUkFURSA9IDAuMDA1XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXByb2Nlc3MtZW52LXRvcC1sZXZlbFxuY29uc3QgU1RBVFNJR19MT0dHSU5HX1NBTVBMRUQgPVxuICBwcm9jZXNzLmVudi5VU0VSX1RZUEUgPT09ICdhbnQnIHx8IE1hdGgucmFuZG9tKCkgPCBTVEFUU0lHX1NBTVBMRV9SQVRFXG5cbi8vIEVuYWJsZSBwcm9maWxpbmcgaWYgZWl0aGVyIGRldGFpbGVkIG1vZGUgT1Igc2FtcGxlZCBmb3IgU3RhdHNpZ1xuY29uc3QgU0hPVUxEX1BST0ZJTEUgPSBERVRBSUxFRF9QUk9GSUxJTkcgfHwgU1RBVFNJR19MT0dHSU5HX1NBTVBMRURcblxuLy8gVHJhY2sgbWVtb3J5IHNuYXBzaG90cyBzZXBhcmF0ZWx5IChwZXJmX2hvb2tzIGRvZXNuJ3QgdHJhY2sgbWVtb3J5KS5cbi8vIE9ubHkgdXNlZCB3aGVuIERFVEFJTEVEX1BST0ZJTElORyBpcyBlbmFibGVkLlxuLy8gU3RvcmVkIGFzIGFuIGFycmF5IHRoYXQgYXBwZW5kcyBpbiB0aGUgc2FtZSBvcmRlciBhcyBwZXJmLm1hcmsoKSBjYWxscywgc29cbi8vIG1lbW9yeVNuYXBzaG90c1tpXSBjb3JyZXNwb25kcyB0byBnZXRFbnRyaWVzQnlUeXBlKCdtYXJrJylbaV0uIFVzaW5nIGEgTWFwXG4vLyBrZXllZCBieSBjaGVja3BvaW50IG5hbWUgaXMgd3JvbmcgYmVjYXVzZSBzb21lIGNoZWNrcG9pbnRzIGZpcmUgbW9yZSB0aGFuXG4vLyBvbmNlIChlLmcuIGxvYWRTZXR0aW5nc0Zyb21EaXNrX3N0YXJ0IGZpcmVzIGR1cmluZyBpbml0IGFuZCBhZ2FpbiBhZnRlclxuLy8gcGx1Z2lucyByZXNldCB0aGUgc2V0dGluZ3MgY2FjaGUpLCBhbmQgdGhlIHNlY29uZCBjYWxsIHdvdWxkIG92ZXJ3cml0ZSB0aGVcbi8vIGZpcnN0J3MgbWVtb3J5IHNuYXBzaG90LlxuY29uc3QgbWVtb3J5U25hcHNob3RzOiBOb2RlSlMuTWVtb3J5VXNhZ2VbXSA9IFtdXG5cbi8vIFBoYXNlIGRlZmluaXRpb25zIGZvciBTdGF0c2lnIGxvZ2dpbmc6IFtzdGFydENoZWNrcG9pbnQsIGVuZENoZWNrcG9pbnRdXG5jb25zdCBQSEFTRV9ERUZJTklUSU9OUyA9IHtcbiAgaW1wb3J0X3RpbWU6IFsnY2xpX2VudHJ5JywgJ21haW5fdHN4X2ltcG9ydHNfbG9hZGVkJ10sXG4gIGluaXRfdGltZTogWydpbml0X2Z1bmN0aW9uX3N0YXJ0JywgJ2luaXRfZnVuY3Rpb25fZW5kJ10sXG4gIHNldHRpbmdzX3RpbWU6IFsnZWFnZXJMb2FkU2V0dGluZ3Nfc3RhcnQnLCAnZWFnZXJMb2FkU2V0dGluZ3NfZW5kJ10sXG4gIHRvdGFsX3RpbWU6IFsnY2xpX2VudHJ5JywgJ21haW5fYWZ0ZXJfcnVuJ10sXG59IGFzIGNvbnN0XG5cbi8vIFJlY29yZCBpbml0aWFsIGNoZWNrcG9pbnQgaWYgcHJvZmlsaW5nIGlzIGVuYWJsZWRcbmlmIChTSE9VTERfUFJPRklMRSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3VzdG9tLXJ1bGVzL25vLXRvcC1sZXZlbC1zaWRlLWVmZmVjdHNcbiAgcHJvZmlsZUNoZWNrcG9pbnQoJ3Byb2ZpbGVyX2luaXRpYWxpemVkJylcbn1cblxuLyoqXG4gKiBSZWNvcmQgYSBjaGVja3BvaW50IHdpdGggdGhlIGdpdmVuIG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2ZpbGVDaGVja3BvaW50KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIVNIT1VMRF9QUk9GSUxFKSByZXR1cm5cblxuICBjb25zdCBwZXJmID0gZ2V0UGVyZm9ybWFuY2UoKVxuICBwZXJmLm1hcmsobmFtZSlcblxuICAvLyBPbmx5IGNhcHR1cmUgbWVtb3J5IHdoZW4gZGV0YWlsZWQgcHJvZmlsaW5nIGVuYWJsZWQgKGVudiB2YXIpXG4gIGlmIChERVRBSUxFRF9QUk9GSUxJTkcpIHtcbiAgICBtZW1vcnlTbmFwc2hvdHMucHVzaChwcm9jZXNzLm1lbW9yeVVzYWdlKCkpXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgYSBmb3JtYXR0ZWQgcmVwb3J0IG9mIGFsbCBjaGVja3BvaW50c1xuICogT25seSBhdmFpbGFibGUgd2hlbiBERVRBSUxFRF9QUk9GSUxJTkcgaXMgZW5hYmxlZFxuICovXG5mdW5jdGlvbiBnZXRSZXBvcnQoKTogc3RyaW5nIHtcbiAgaWYgKCFERVRBSUxFRF9QUk9GSUxJTkcpIHtcbiAgICByZXR1cm4gJ1N0YXJ0dXAgcHJvZmlsaW5nIG5vdCBlbmFibGVkJ1xuICB9XG5cbiAgY29uc3QgcGVyZiA9IGdldFBlcmZvcm1hbmNlKClcbiAgY29uc3QgbWFya3MgPSBwZXJmLmdldEVudHJpZXNCeVR5cGUoJ21hcmsnKVxuICBpZiAobWFya3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdObyBwcm9maWxpbmcgY2hlY2twb2ludHMgcmVjb3JkZWQnXG4gIH1cblxuICBjb25zdCBsaW5lczogc3RyaW5nW10gPSBbXVxuICBsaW5lcy5wdXNoKCc9Jy5yZXBlYXQoODApKVxuICBsaW5lcy5wdXNoKCdTVEFSVFVQIFBST0ZJTElORyBSRVBPUlQnKVxuICBsaW5lcy5wdXNoKCc9Jy5yZXBlYXQoODApKVxuICBsaW5lcy5wdXNoKCcnKVxuXG4gIGxldCBwcmV2VGltZSA9IDBcbiAgZm9yIChjb25zdCBbaSwgbWFya10gb2YgbWFya3MuZW50cmllcygpKSB7XG4gICAgbGluZXMucHVzaChcbiAgICAgIGZvcm1hdFRpbWVsaW5lTGluZShcbiAgICAgICAgbWFyay5zdGFydFRpbWUsXG4gICAgICAgIG1hcmsuc3RhcnRUaW1lIC0gcHJldlRpbWUsXG4gICAgICAgIG1hcmsubmFtZSxcbiAgICAgICAgbWVtb3J5U25hcHNob3RzW2ldLFxuICAgICAgICA4LFxuICAgICAgICA3LFxuICAgICAgKSxcbiAgICApXG4gICAgcHJldlRpbWUgPSBtYXJrLnN0YXJ0VGltZVxuICB9XG5cbiAgY29uc3QgbGFzdE1hcmsgPSBtYXJrc1ttYXJrcy5sZW5ndGggLSAxXVxuICBsaW5lcy5wdXNoKCcnKVxuICBsaW5lcy5wdXNoKGBUb3RhbCBzdGFydHVwIHRpbWU6ICR7Zm9ybWF0TXMobGFzdE1hcms/LnN0YXJ0VGltZSA/PyAwKX1tc2ApXG4gIGxpbmVzLnB1c2goJz0nLnJlcGVhdCg4MCkpXG5cbiAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpXG59XG5cbmxldCByZXBvcnRlZCA9IGZhbHNlXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9maWxlUmVwb3J0KCk6IHZvaWQge1xuICBpZiAocmVwb3J0ZWQpIHJldHVyblxuICByZXBvcnRlZCA9IHRydWVcblxuICAvLyBMb2cgdG8gU3RhdHNpZyAoc2FtcGxlZDogMTAwJSBhbnQsIDAuMSUgZXh0ZXJuYWwpXG4gIGxvZ1N0YXJ0dXBQZXJmKClcblxuICAvLyBPdXRwdXQgZGV0YWlsZWQgcmVwb3J0IGlmIENMQVVERV9DT0RFX1BST0ZJTEVfU1RBUlRVUD0xXG4gIGlmIChERVRBSUxFRF9QUk9GSUxJTkcpIHtcbiAgICAvLyBXcml0ZSB0byBmaWxlXG4gICAgY29uc3QgcGF0aCA9IGdldFN0YXJ0dXBQZXJmTG9nUGF0aCgpXG4gICAgY29uc3QgZGlyID0gZGlybmFtZShwYXRoKVxuICAgIGNvbnN0IGZzID0gZ2V0RnNJbXBsZW1lbnRhdGlvbigpXG4gICAgZnMubWtkaXJTeW5jKGRpcilcbiAgICB3cml0ZUZpbGVTeW5jX0RFUFJFQ0FURUQocGF0aCwgZ2V0UmVwb3J0KCksIHtcbiAgICAgIGVuY29kaW5nOiAndXRmOCcsXG4gICAgICBmbHVzaDogdHJ1ZSxcbiAgICB9KVxuXG4gICAgbG9nRm9yRGVidWdnaW5nKCdTdGFydHVwIHByb2ZpbGluZyByZXBvcnQ6JylcbiAgICBsb2dGb3JEZWJ1Z2dpbmcoZ2V0UmVwb3J0KCkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGV0YWlsZWRQcm9maWxpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gREVUQUlMRURfUFJPRklMSU5HXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFydHVwUGVyZkxvZ1BhdGgoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGpvaW4oZ2V0Q2xhdWRlQ29uZmlnSG9tZURpcigpLCAnc3RhcnR1cC1wZXJmJywgYCR7Z2V0U2Vzc2lvbklkKCl9LnR4dGApXG59XG5cbi8qKlxuICogTG9nIHN0YXJ0dXAgcGVyZm9ybWFuY2UgcGhhc2VzIHRvIFN0YXRzaWcuXG4gKiBPbmx5IGxvZ3MgaWYgdGhpcyBzZXNzaW9uIHdhcyBzYW1wbGVkIGF0IHN0YXJ0dXAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2dTdGFydHVwUGVyZigpOiB2b2lkIHtcbiAgLy8gT25seSBsb2cgaWYgd2Ugd2VyZSBzYW1wbGVkIChkZWNpc2lvbiBtYWRlIGF0IG1vZHVsZSBsb2FkKVxuICBpZiAoIVNUQVRTSUdfTE9HR0lOR19TQU1QTEVEKSByZXR1cm5cblxuICBjb25zdCBwZXJmID0gZ2V0UGVyZm9ybWFuY2UoKVxuICBjb25zdCBtYXJrcyA9IHBlcmYuZ2V0RW50cmllc0J5VHlwZSgnbWFyaycpXG4gIGlmIChtYXJrcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEJ1aWxkIGNoZWNrcG9pbnQgbG9va3VwXG4gIGNvbnN0IGNoZWNrcG9pbnRUaW1lcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcbiAgZm9yIChjb25zdCBtYXJrIG9mIG1hcmtzKSB7XG4gICAgY2hlY2twb2ludFRpbWVzLnNldChtYXJrLm5hbWUsIG1hcmsuc3RhcnRUaW1lKVxuICB9XG5cbiAgLy8gQ29tcHV0ZSBwaGFzZSBkdXJhdGlvbnNcbiAgY29uc3QgbWV0YWRhdGE6IFJlY29yZDxzdHJpbmcsIG51bWJlciB8IHVuZGVmaW5lZD4gPSB7fVxuXG4gIGZvciAoY29uc3QgW3BoYXNlTmFtZSwgW3N0YXJ0Q2hlY2twb2ludCwgZW5kQ2hlY2twb2ludF1dIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgIFBIQVNFX0RFRklOSVRJT05TLFxuICApKSB7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gY2hlY2twb2ludFRpbWVzLmdldChzdGFydENoZWNrcG9pbnQpXG4gICAgY29uc3QgZW5kVGltZSA9IGNoZWNrcG9pbnRUaW1lcy5nZXQoZW5kQ2hlY2twb2ludClcblxuICAgIGlmIChzdGFydFRpbWUgIT09IHVuZGVmaW5lZCAmJiBlbmRUaW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG1ldGFkYXRhW2Ake3BoYXNlTmFtZX1fbXNgXSA9IE1hdGgucm91bmQoZW5kVGltZSAtIHN0YXJ0VGltZSlcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgY2hlY2twb2ludCBjb3VudCBmb3IgZGVidWdnaW5nXG4gIG1ldGFkYXRhLmNoZWNrcG9pbnRfY291bnQgPSBtYXJrcy5sZW5ndGhcblxuICBsb2dFdmVudChcbiAgICAndGVuZ3Vfc3RhcnR1cF9wZXJmJyxcbiAgICBtZXRhZGF0YSBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxXQUFPLFVBQVUsTUFBTTtBQUV0QixhQUFPO0FBQUEsSUFDUjtBQUFBO0FBQUE7OztBQ0hBLElBR00saUJBR0EsaUJBR0EsaUJBR0EsY0FHQTtBQWZOO0FBQUE7QUFHQSxJQUFNLGtCQUFrQixDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsU0FBUyxTQUFTLE9BQU87QUFHNWpFLElBQU0sa0JBQWtCLENBQUMsT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLEtBQUs7QUFHakUsSUFBTSxrQkFBa0IsQ0FBQyxNQUFNLE1BQU0sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLEtBQUs7QUFHdkgsSUFBTSxlQUFlLENBQUMsSUFBSSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxPQUFPLE9BQU8sT0FBTyxLQUFLO0FBR2pHLElBQU0sYUFBYSxDQUFDLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLE1BQU07QUFBQTtBQUFBOzs7QUNmcndELElBT2E7QUFQYjtBQUFBO0FBT08sSUFBTSxZQUFZLENBQUMsUUFBUSxjQUFjO0FBQy9DLFVBQUksTUFBTTtBQUNWLFVBQUksT0FBTyxLQUFLLE1BQU0sT0FBTyxTQUFTLENBQUMsSUFBSTtBQUMzQyxhQUFPLE9BQU8s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QkFBeUIsTUFBTSxVQUFVLEdBQUc7QUFBQSxNQUMxQyxVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsSUFDVCxDQUFDO0FBRUQsb0JBQWdCLDJCQUEyQjtBQUMzQyxvQkFBZ0IsVUFBVSxDQUFDO0FBQUEsRUFDN0I7QUFDRjtBQUVPLFNBQVMsNkJBQXNDO0FBQ3BELFNBQU87QUFDVDtBQUVPLFNBQVMsd0JBQWdDO0FBQzlDLFNBQU8sS0FBSyx1QkFBdUIsR0FBRyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsTUFBTTtBQUMvRTtBQU1PLFNBQVMsaUJBQXVCO0FBRXJDLE1BQUksQ0FBQyx3QkFBeUI7QUFFOUIsUUFBTSxPQUFPLGVBQWU7QUFDNUIsUUFBTSxRQUFRLEtBQUssaUJBQWlCLE1BQU07QUFDMUMsTUFBSSxNQUFNLFdBQVcsRUFBRztBQUd4QixRQUFNLGtCQUFrQixvQkFBSSxJQUFvQjtBQUNoRCxhQUFXLFFBQVEsT0FBTztBQUN4QixvQkFBZ0IsSUFBSSxLQUFLLE1BQU0sS0FBSyxTQUFTO0FBQUEsRUFDL0M7QUFHQSxRQUFNLFdBQStDLENBQUM7QUFFdEQsYUFBVyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsYUFBYSxDQUFDLEtBQUssT0FBTztBQUFBLElBQ2pFO0FBQUEsRUFDRixHQUFHO0FBQ0QsVUFBTSxZQUFZLGdCQUFnQixJQUFJLGVBQWU7QUFDckQsVUFBTSxVQUFVLGdCQUFnQixJQUFJLGFBQWE7QUFFakQsUUFBSSxjQUFjLFVBQWEsWUFBWSxRQUFXO0FBQ3BELGVBQVMsR0FBRyxTQUFTLEtBQUssSUFBSSxLQUFLLE1BQU0sVUFBVSxTQUFTO0FBQUEsSUFDOUQ7QUFBQSxFQUNGO0FBR0EsV0FBUyxtQkFBbUIsTUFBTTtBQUVsQztBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGO0FBak1BLElBeUJNLG9CQUlBLHFCQUVBLHlCQUlBLGdCQVVBLGlCQUdBLG1CQXdFRjtBQXhISjtBQUFBO0FBWUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNLHFCQUFxQixZQUFZLFFBQVEsSUFBSSwyQkFBMkI7QUFJOUUsSUFBTSxzQkFBc0I7QUFFNUIsSUFBTSwwQkFDSixRQUFRLElBQUksY0FBYyxTQUFTLEtBQUssT0FBTyxJQUFJO0FBR3JELElBQU0saUJBQWlCLHNCQUFzQjtBQVU3QyxJQUFNLGtCQUF3QyxDQUFDO0FBRy9DLElBQU0sb0JBQW9CO0FBQUEsTUFDeEIsYUFBYSxDQUFDLGFBQWEseUJBQXlCO0FBQUEsTUFDcEQsV0FBVyxDQUFDLHVCQUF1QixtQkFBbUI7QUFBQSxNQUN0RCxlQUFlLENBQUMsMkJBQTJCLHVCQUF1QjtBQUFBLE1BQ2xFLFlBQVksQ0FBQyxhQUFhLGdCQUFnQjtBQUFBLElBQzVDO0FBR0EsUUFBSSxnQkFBZ0I7QUFFbEIsd0JBQWtCLHNCQUFzQjtBQUFBLElBQzFDO0FBNkRBLElBQUksV0FBVztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbIndpZHRoIiwgImVtb2ppUmVnZXgiLCAicyJdCn0K
