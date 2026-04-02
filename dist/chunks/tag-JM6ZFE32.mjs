#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  Select,
  getCurrentSessionTag,
  getTranscriptPath,
  init_select,
  init_sessionStorage,
  saveTag
} from "./chunk-FMU4URRE.mjs";
import {
  init_sanitization,
  recursivelySanitizeUnicode
} from "./chunk-PJK4KGGT.mjs";
import {
  Dialog,
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
  init_react,
  useEffect,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  init_source,
  source_default
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
import "./chunk-OGGCTXYU.mjs";
import {
  init_analytics,
  logEvent
} from "./chunk-MDXHK5AD.mjs";
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
import {
  COMMON_HELP_ARGS,
  COMMON_INFO_ARGS,
  init_xml
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-L2VTD674.mjs";
import "./chunk-3KOWL3LY.mjs";
import "./chunk-5K6GNWIX.mjs";
import "./chunk-OU3SZVVB.mjs";
import {
  getSessionId,
  init_state
} from "./chunk-NGSB34MB.mjs";
import "./chunk-66ZH6W67.mjs";
import "./chunk-6NQGQQQI.mjs";
import "./chunk-AZFPZFFC.mjs";
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// src/commands/tag/tag.tsx
function ConfirmRemoveTag(t0) {
  const $ = c(11);
  const {
    tagName,
    onConfirm,
    onCancel
  } = t0;
  const t1 = `Current tag: #${tagName}`;
  let t2;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ createElement(ThemedText, null, "This will remove the tag from the current session.");
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== onCancel || $[2] !== onConfirm) {
    t3 = (value) => value === "yes" ? onConfirm() : onCancel();
    $[1] = onCancel;
    $[2] = onConfirm;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = [{
      label: "Yes, remove tag",
      value: "yes"
    }, {
      label: "No, keep tag",
      value: "no"
    }];
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== t3) {
    t5 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t2, /* @__PURE__ */ createElement(Select, { onChange: t3, options: t4 }));
    $[5] = t3;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] !== onCancel || $[8] !== t1 || $[9] !== t5) {
    t6 = /* @__PURE__ */ createElement(Dialog, { title: "Remove tag?", subtitle: t1, onCancel, color: "warning" }, t5);
    $[7] = onCancel;
    $[8] = t1;
    $[9] = t5;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  return t6;
}
function ToggleTagAndClose(t0) {
  const $ = c(17);
  const {
    tagName,
    onDone
  } = t0;
  const [showConfirm, setShowConfirm] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  let t1;
  if ($[0] !== tagName) {
    t1 = recursivelySanitizeUnicode(tagName).trim();
    $[0] = tagName;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const normalizedTag = t1;
  let t2;
  let t3;
  if ($[2] !== normalizedTag || $[3] !== onDone) {
    t2 = () => {
      const id = getSessionId();
      if (!id) {
        onDone("No active session to tag", {
          display: "system"
        });
        return;
      }
      if (!normalizedTag) {
        onDone("Tag name cannot be empty", {
          display: "system"
        });
        return;
      }
      setSessionId(id);
      const currentTag = getCurrentSessionTag(id);
      if (currentTag === normalizedTag) {
        logEvent("tengu_tag_command_remove_prompt", {});
        setShowConfirm(true);
      } else {
        const isReplacing = !!currentTag;
        logEvent("tengu_tag_command_add", {
          is_replacing: isReplacing
        });
        (async () => {
          const fullPath = getTranscriptPath();
          await saveTag(id, normalizedTag, fullPath);
          onDone(`Tagged session with ${source_default.cyan(`#${normalizedTag}`)}`, {
            display: "system"
          });
        })();
      }
    };
    t3 = [normalizedTag, onDone];
    $[2] = normalizedTag;
    $[3] = onDone;
    $[4] = t2;
    $[5] = t3;
  } else {
    t2 = $[4];
    t3 = $[5];
  }
  useEffect(t2, t3);
  if (showConfirm && sessionId) {
    let t4;
    if ($[6] !== normalizedTag || $[7] !== onDone || $[8] !== sessionId) {
      t4 = async () => {
        logEvent("tengu_tag_command_remove_confirmed", {});
        const fullPath_0 = getTranscriptPath();
        await saveTag(sessionId, "", fullPath_0);
        onDone(`Removed tag ${source_default.cyan(`#${normalizedTag}`)}`, {
          display: "system"
        });
      };
      $[6] = normalizedTag;
      $[7] = onDone;
      $[8] = sessionId;
      $[9] = t4;
    } else {
      t4 = $[9];
    }
    let t5;
    if ($[10] !== normalizedTag || $[11] !== onDone) {
      t5 = () => {
        logEvent("tengu_tag_command_remove_cancelled", {});
        onDone(`Kept tag ${source_default.cyan(`#${normalizedTag}`)}`, {
          display: "system"
        });
      };
      $[10] = normalizedTag;
      $[11] = onDone;
      $[12] = t5;
    } else {
      t5 = $[12];
    }
    let t6;
    if ($[13] !== normalizedTag || $[14] !== t4 || $[15] !== t5) {
      t6 = /* @__PURE__ */ createElement(ConfirmRemoveTag, { tagName: normalizedTag, onConfirm: t4, onCancel: t5 });
      $[13] = normalizedTag;
      $[14] = t4;
      $[15] = t5;
      $[16] = t6;
    } else {
      t6 = $[16];
    }
    return t6;
  }
  return null;
}
function ShowHelp(t0) {
  const $ = c(3);
  const {
    onDone
  } = t0;
  let t1;
  let t2;
  if ($[0] !== onDone) {
    t1 = () => {
      onDone("Usage: /tag <tag-name>\n\nToggle a searchable tag on the current session.\nRun the same command again to remove the tag.\nTags are displayed after the branch name in /resume and can be searched with /.\n\nExamples:\n  /tag bugfix        # Add tag\n  /tag bugfix        # Remove tag (toggle)\n  /tag feature-auth\n  /tag wip", {
        display: "system"
      });
    };
    t2 = [onDone];
    $[0] = onDone;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  useEffect(t1, t2);
  return null;
}
async function call(onDone, _context, args) {
  args = args?.trim() || "";
  if (COMMON_INFO_ARGS.includes(args) || COMMON_HELP_ARGS.includes(args)) {
    return /* @__PURE__ */ createElement(ShowHelp, { onDone });
  }
  if (!args) {
    return /* @__PURE__ */ createElement(ShowHelp, { onDone });
  }
  return /* @__PURE__ */ createElement(ToggleTagAndClose, { tagName: args, onDone });
}
var init_tag = __esm({
  "src/commands/tag/tag.tsx"() {
    init_react_compiler_runtime();
    init_source();
    init_react();
    init_state();
    init_select();
    init_Dialog();
    init_xml();
    init_ink();
    init_analytics();
    init_sanitization();
    init_sessionStorage();
  }
});
init_tag();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3RhZy90YWcudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgdHlwZSB7IFVVSUQgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFNlc3Npb25JZCB9IGZyb20gJy4uLy4uL2Jvb3RzdHJhcC9zdGF0ZS5qcydcbmltcG9ydCB0eXBlIHsgQ29tbWFuZFJlc3VsdERpc3BsYXkgfSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0L3NlbGVjdC5qcydcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9EaWFsb2cuanMnXG5pbXBvcnQgeyBDT01NT05fSEVMUF9BUkdTLCBDT01NT05fSU5GT19BUkdTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3htbC5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IGxvZ0V2ZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRPbkRvbmUgfSBmcm9tICcuLi8uLi90eXBlcy9jb21tYW5kLmpzJ1xuaW1wb3J0IHsgcmVjdXJzaXZlbHlTYW5pdGl6ZVVuaWNvZGUgfSBmcm9tICcuLi8uLi91dGlscy9zYW5pdGl6YXRpb24uanMnXG5pbXBvcnQge1xuICBnZXRDdXJyZW50U2Vzc2lvblRhZyxcbiAgZ2V0VHJhbnNjcmlwdFBhdGgsXG4gIHNhdmVUYWcsXG59IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb25TdG9yYWdlLmpzJ1xuXG5mdW5jdGlvbiBDb25maXJtUmVtb3ZlVGFnKHtcbiAgdGFnTmFtZSxcbiAgb25Db25maXJtLFxuICBvbkNhbmNlbCxcbn06IHtcbiAgdGFnTmFtZTogc3RyaW5nXG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZFxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgdGl0bGU9XCJSZW1vdmUgdGFnP1wiXG4gICAgICBzdWJ0aXRsZT17YEN1cnJlbnQgdGFnOiAjJHt0YWdOYW1lfWB9XG4gICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICBjb2xvcj1cIndhcm5pbmdcIlxuICAgID5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0+XG4gICAgICAgIDxUZXh0PlRoaXMgd2lsbCByZW1vdmUgdGhlIHRhZyBmcm9tIHRoZSBjdXJyZW50IHNlc3Npb24uPC9UZXh0PlxuICAgICAgICA8U2VsZWN0PCd5ZXMnIHwgJ25vJz5cbiAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gKHZhbHVlID09PSAneWVzJyA/IG9uQ29uZmlybSgpIDogb25DYW5jZWwoKSl9XG4gICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgeyBsYWJlbDogJ1llcywgcmVtb3ZlIHRhZycsIHZhbHVlOiAneWVzJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ05vLCBrZWVwIHRhZycsIHZhbHVlOiAnbm8nIH0sXG4gICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvRGlhbG9nPlxuICApXG59XG5cbmZ1bmN0aW9uIFRvZ2dsZVRhZ0FuZENsb3NlKHtcbiAgdGFnTmFtZSxcbiAgb25Eb25lLFxufToge1xuICB0YWdOYW1lOiBzdHJpbmdcbiAgb25Eb25lOiAoXG4gICAgcmVzdWx0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7IGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB9LFxuICApID0+IHZvaWRcbn0pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbc2hvd0NvbmZpcm0sIHNldFNob3dDb25maXJtXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2Vzc2lvbklkLCBzZXRTZXNzaW9uSWRdID0gUmVhY3QudXNlU3RhdGU8VVVJRCB8IG51bGw+KG51bGwpXG4gIC8vIFNhbml0aXplIHVuaWNvZGUgdG8gcHJldmVudCBoaWRkZW4gY2hhcmFjdGVyIGF0dGFja3MgYW5kIG5vcm1hbGl6ZVxuICBjb25zdCBub3JtYWxpemVkVGFnID0gcmVjdXJzaXZlbHlTYW5pdGl6ZVVuaWNvZGUodGFnTmFtZSkudHJpbSgpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpZCA9IGdldFNlc3Npb25JZCgpIGFzIFVVSURcblxuICAgIGlmICghaWQpIHtcbiAgICAgIG9uRG9uZSgnTm8gYWN0aXZlIHNlc3Npb24gdG8gdGFnJywgeyBkaXNwbGF5OiAnc3lzdGVtJyB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFub3JtYWxpemVkVGFnKSB7XG4gICAgICBvbkRvbmUoJ1RhZyBuYW1lIGNhbm5vdCBiZSBlbXB0eScsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNldFNlc3Npb25JZChpZClcbiAgICBjb25zdCBjdXJyZW50VGFnID0gZ2V0Q3VycmVudFNlc3Npb25UYWcoaWQpXG5cbiAgICAvLyBJZiBzYW1lIHRhZyBleGlzdHMsIHNob3cgY29uZmlybWF0aW9uIGRpYWxvZ1xuICAgIGlmIChjdXJyZW50VGFnID09PSBub3JtYWxpemVkVGFnKSB7XG4gICAgICBsb2dFdmVudCgndGVuZ3VfdGFnX2NvbW1hbmRfcmVtb3ZlX3Byb21wdCcsIHt9KVxuICAgICAgc2V0U2hvd0NvbmZpcm0odHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWRkIHRoZSBuZXcgdGFnIGRpcmVjdGx5XG4gICAgICBjb25zdCBpc1JlcGxhY2luZyA9ICEhY3VycmVudFRhZ1xuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3RhZ19jb21tYW5kX2FkZCcsIHsgaXNfcmVwbGFjaW5nOiBpc1JlcGxhY2luZyB9KVxuICAgICAgdm9pZCAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IGdldFRyYW5zY3JpcHRQYXRoKClcbiAgICAgICAgYXdhaXQgc2F2ZVRhZyhpZCwgbm9ybWFsaXplZFRhZywgZnVsbFBhdGgpXG4gICAgICAgIG9uRG9uZShgVGFnZ2VkIHNlc3Npb24gd2l0aCAke2NoYWxrLmN5YW4oYCMke25vcm1hbGl6ZWRUYWd9YCl9YCwge1xuICAgICAgICAgIGRpc3BsYXk6ICdzeXN0ZW0nLFxuICAgICAgICB9KVxuICAgICAgfSkoKVxuICAgIH1cbiAgfSwgW25vcm1hbGl6ZWRUYWcsIG9uRG9uZV0pXG5cbiAgaWYgKHNob3dDb25maXJtICYmIHNlc3Npb25JZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29uZmlybVJlbW92ZVRhZ1xuICAgICAgICB0YWdOYW1lPXtub3JtYWxpemVkVGFnfVxuICAgICAgICBvbkNvbmZpcm09e2FzeW5jICgpID0+IHtcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfdGFnX2NvbW1hbmRfcmVtb3ZlX2NvbmZpcm1lZCcsIHt9KVxuICAgICAgICAgIGNvbnN0IGZ1bGxQYXRoID0gZ2V0VHJhbnNjcmlwdFBhdGgoKVxuICAgICAgICAgIGF3YWl0IHNhdmVUYWcoc2Vzc2lvbklkLCAnJywgZnVsbFBhdGgpXG4gICAgICAgICAgb25Eb25lKGBSZW1vdmVkIHRhZyAke2NoYWxrLmN5YW4oYCMke25vcm1hbGl6ZWRUYWd9YCl9YCwge1xuICAgICAgICAgICAgZGlzcGxheTogJ3N5c3RlbScsXG4gICAgICAgICAgfSlcbiAgICAgICAgfX1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfdGFnX2NvbW1hbmRfcmVtb3ZlX2NhbmNlbGxlZCcsIHt9KVxuICAgICAgICAgIG9uRG9uZShgS2VwdCB0YWcgJHtjaGFsay5jeWFuKGAjJHtub3JtYWxpemVkVGFnfWApfWAsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdzeXN0ZW0nLFxuICAgICAgICAgIH0pXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIFNob3dIZWxwKHtcbiAgb25Eb25lLFxufToge1xuICBvbkRvbmU6IChcbiAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHsgZGlzcGxheT86IENvbW1hbmRSZXN1bHREaXNwbGF5IH0sXG4gICkgPT4gdm9pZFxufSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25Eb25lKFxuICAgICAgYFVzYWdlOiAvdGFnIDx0YWctbmFtZT5cblxuVG9nZ2xlIGEgc2VhcmNoYWJsZSB0YWcgb24gdGhlIGN1cnJlbnQgc2Vzc2lvbi5cblJ1biB0aGUgc2FtZSBjb21tYW5kIGFnYWluIHRvIHJlbW92ZSB0aGUgdGFnLlxuVGFncyBhcmUgZGlzcGxheWVkIGFmdGVyIHRoZSBicmFuY2ggbmFtZSBpbiAvcmVzdW1lIGFuZCBjYW4gYmUgc2VhcmNoZWQgd2l0aCAvLlxuXG5FeGFtcGxlczpcbiAgL3RhZyBidWdmaXggICAgICAgICMgQWRkIHRhZ1xuICAvdGFnIGJ1Z2ZpeCAgICAgICAgIyBSZW1vdmUgdGFnICh0b2dnbGUpXG4gIC90YWcgZmVhdHVyZS1hdXRoXG4gIC90YWcgd2lwYCxcbiAgICAgIHsgZGlzcGxheTogJ3N5c3RlbScgfSxcbiAgICApXG4gIH0sIFtvbkRvbmVdKVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsKFxuICBvbkRvbmU6IExvY2FsSlNYQ29tbWFuZE9uRG9uZSxcbiAgX2NvbnRleHQ6IHVua25vd24sXG4gIGFyZ3M/OiBzdHJpbmcsXG4pOiBQcm9taXNlPFJlYWN0LlJlYWN0Tm9kZT4ge1xuICBhcmdzID0gYXJncz8udHJpbSgpIHx8ICcnXG5cbiAgaWYgKENPTU1PTl9JTkZPX0FSR1MuaW5jbHVkZXMoYXJncykgfHwgQ09NTU9OX0hFTFBfQVJHUy5pbmNsdWRlcyhhcmdzKSkge1xuICAgIHJldHVybiA8U2hvd0hlbHAgb25Eb25lPXtvbkRvbmV9IC8+XG4gIH1cblxuICBpZiAoIWFyZ3MpIHtcbiAgICByZXR1cm4gPFNob3dIZWxwIG9uRG9uZT17b25Eb25lfSAvPlxuICB9XG5cbiAgcmV0dXJuIDxUb2dnbGVUYWdBbmRDbG9zZSB0YWdOYW1lPXthcmdzfSBvbkRvbmU9e29uRG9uZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxTQUFBQSxpQkFBQUMsSUFBQTtBQUFBLFFBQUFDLElBQUFDLEVBQUEsRUFBQTtBQUEwQixRQUFBO0lBQUFDO0lBQUFDO0lBQUFDO0VBQUEsSUFBQUw7QUFZVixRQUFBTSxLQUFBLGlCQUFpQkgsT0FBTztBQUFFLE1BQUFJO0FBQUEsTUFBQU4sRUFBQSxDQUFBLE1BQUFPLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFLbENGLFNBQUEsOEJBQUMsa0JBQUssb0RBQWtEO0FBQU9OLE1BQUEsQ0FBQSxJQUFBTTtFQUFBLE9BQUE7QUFBQUEsU0FBQU4sRUFBQSxDQUFBO0VBQUE7QUFBQSxNQUFBUztBQUFBLE1BQUFULEVBQUEsQ0FBQSxNQUFBSSxZQUFBSixFQUFBLENBQUEsTUFBQUcsV0FBQTtBQUVuRE0sU0FBQUMsV0FBVUEsVUFBVSxRQUFRUCxVQUF1QixJQUFUQyxTQUFTO0FBQUVKLE1BQUEsQ0FBQSxJQUFBSTtBQUFBSixNQUFBLENBQUEsSUFBQUc7QUFBQUgsTUFBQSxDQUFB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RUEsTUFBSSxDQUFDQSxNQUFNO0FBQ1QsV0FBTyw4QkFBQyxZQUFTLFFBQWU7RUFDbEM7QUFFQSxTQUFPLDhCQUFDLHFCQUFrQixTQUFTQSxNQUFNLFFBQWU7QUFDMUQ7Ozs7QUF0S0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OzsiLAogICJuYW1lcyI6IFsiQ29uZmlybVJlbW92ZVRhZyIsICJ0MCIsICIkIiwgIl9jIiwgInRhZ05hbWUiLCAib25Db25maXJtIiwgIm9uQ2FuY2VsIiwgInQxIiwgInQyIiwgIlN5bWJvbCIsICJmb3IiLCAidDMiLCAidmFsdWUiLCAidDQiLCAibGFiZWwiLCAidDUiLCAidDYiLCAiVG9nZ2xlVGFnQW5kQ2xvc2UiLCAib25Eb25lIiwgInNob3dDb25maXJtIiwgInNldFNob3dDb25maXJtIiwgInVzZVN0YXRlIiwgInNlc3Npb25JZCIsICJzZXRTZXNzaW9uSWQiLCAicmVjdXJzaXZlbHlTYW5pdGl6ZVVuaWNvZGUiLCAidHJpbSIsICJub3JtYWxpemVkVGFnIiwgImlkIiwgImdldFNlc3Npb25JZCIsICJkaXNwbGF5IiwgImN1cnJlbnRUYWciLCAiZ2V0Q3VycmVudFNlc3Npb25UYWciLCAibG9nRXZlbnQiLCAiaXNSZXBsYWNpbmciLCAiaXNfcmVwbGFjaW5nIiwgImZ1bGxQYXRoIiwgImdldFRyYW5zY3JpcHRQYXRoIiwgInNhdmVUYWciLCAiY2hhbGsiLCAiY3lhbiIsICJSZWFjdCIsICJ1c2VFZmZlY3QiLCAiZnVsbFBhdGhfMCIsICJTaG93SGVscCIsICJjYWxsIiwgIl9jb250ZXh0IiwgImFyZ3MiLCAiQ09NTU9OX0lORk9fQVJHUyIsICJpbmNsdWRlcyIsICJDT01NT05fSEVMUF9BUkdTIl0KfQo=
