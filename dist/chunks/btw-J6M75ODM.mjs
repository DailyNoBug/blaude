#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  init_sideQuestion,
  runSideQuestion
} from "./chunk-7FZOSVXI.mjs";
import {
  ScrollBox_default,
  init_ScrollBox
} from "./chunk-W3RVSZTP.mjs";
import {
  Markdown,
  SpinnerGlyph,
  asSystemPrompt,
  createAbortController,
  getLastCacheSafeParams,
  getMessagesAfterCompactBoundary,
  getSystemContext,
  getSystemPrompt,
  getUserContext,
  init_Markdown,
  init_SpinnerGlyph,
  init_abortController,
  init_context,
  init_forkedAgent,
  init_messages2 as init_messages,
  init_prompts2 as init_prompts,
  init_systemPromptType
} from "./chunk-BQ2W5UUK.mjs";
import "./chunk-PJK4KGGT.mjs";
import "./chunk-UPQJMBLU.mjs";
import "./chunk-JWBPLKI2.mjs";
import "./chunk-B5LIYBEU.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-IVRFWWJD.mjs";
import "./chunk-WFZ47W7F.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
  init_modalContext,
  init_useTerminalSize,
  useModalOrTerminalSize,
  useTerminalSize
} from "./chunk-36ZVP56J.mjs";
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
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-AKNFPKUI.mjs";
import "./chunk-EL6ZMCGB.mjs";
import "./chunk-ALBMKMIQ.mjs";
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
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_dist,
  init_ink,
  init_react_compiler_runtime,
  useInterval
} from "./chunk-ZFJCSCYD.mjs";
import {
  createElement,
  init_react,
  useEffect,
  useRef,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  DOWN_ARROW,
  UP_ARROW,
  init_config,
  init_figures,
  saveGlobalConfig
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
  init_errors
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

// src/commands/btw/btw.tsx
function BtwSideQuestion(t0) {
  const $ = c(25);
  const {
    question,
    context,
    onDone
  } = t0;
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [frame, setFrame] = useState(0);
  const scrollRef = useRef(null);
  const {
    rows
  } = useModalOrTerminalSize(useTerminalSize());
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => setFrame(_temp);
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  useInterval(t1, response || error ? null : 80);
  let t2;
  if ($[1] !== onDone) {
    t2 = function handleKeyDown2(e) {
      if (e.key === "escape" || e.key === "return" || e.key === " " || e.ctrl && (e.key === "c" || e.key === "d")) {
        e.preventDefault();
        onDone(void 0, {
          display: "skip"
        });
        return;
      }
      if (e.key === "up" || e.ctrl && e.key === "p") {
        e.preventDefault();
        scrollRef.current?.scrollBy(-SCROLL_LINES);
      }
      if (e.key === "down" || e.ctrl && e.key === "n") {
        e.preventDefault();
        scrollRef.current?.scrollBy(SCROLL_LINES);
      }
    };
    $[1] = onDone;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const handleKeyDown = t2;
  let t3;
  let t4;
  if ($[3] !== context || $[4] !== question) {
    t3 = () => {
      const abortController = createAbortController();
      const fetchResponse = async function fetchResponse2() {
        ;
        try {
          const cacheSafeParams = await buildCacheSafeParams(context);
          const result = await runSideQuestion({
            question,
            cacheSafeParams
          });
          if (!abortController.signal.aborted) {
            if (result.response) {
              setResponse(result.response);
            } else {
              setError("No response received");
            }
          }
        } catch (t52) {
          const err = t52;
          if (!abortController.signal.aborted) {
            setError(errorMessage(err) || "Failed to get response");
          }
        }
      };
      fetchResponse();
      return () => {
        abortController.abort();
      };
    };
    t4 = [question, context];
    $[3] = context;
    $[4] = question;
    $[5] = t3;
    $[6] = t4;
  } else {
    t3 = $[5];
    t4 = $[6];
  }
  useEffect(t3, t4);
  const maxContentHeight = Math.max(5, rows - CHROME_ROWS - OUTER_CHROME_ROWS);
  let t5;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ createElement(ThemedText, { color: "warning", bold: true }, "/btw", " ");
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== question) {
    t6 = /* @__PURE__ */ createElement(ThemedBox_default, null, t5, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, question));
    $[8] = question;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== error || $[11] !== frame || $[12] !== response) {
    t7 = /* @__PURE__ */ createElement(ScrollBox_default, { ref: scrollRef, flexDirection: "column", flexGrow: 1 }, error ? /* @__PURE__ */ createElement(ThemedText, { color: "error" }, error) : response ? /* @__PURE__ */ createElement(Markdown, null, response) : /* @__PURE__ */ createElement(ThemedBox_default, null, /* @__PURE__ */ createElement(SpinnerGlyph, { frame, messageColor: "warning" }), /* @__PURE__ */ createElement(ThemedText, { color: "warning" }, "Answering...")));
    $[10] = error;
    $[11] = frame;
    $[12] = response;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  let t8;
  if ($[14] !== maxContentHeight || $[15] !== t7) {
    t8 = /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1, marginLeft: 2, maxHeight: maxContentHeight }, t7);
    $[14] = maxContentHeight;
    $[15] = t7;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  let t9;
  if ($[17] !== error || $[18] !== response) {
    t9 = (response || error) && /* @__PURE__ */ createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, UP_ARROW, "/", DOWN_ARROW, " to scroll \xB7 Space, Enter, or Escape to dismiss"));
    $[17] = error;
    $[18] = response;
    $[19] = t9;
  } else {
    t9 = $[19];
  }
  let t10;
  if ($[20] !== handleKeyDown || $[21] !== t6 || $[22] !== t8 || $[23] !== t9) {
    t10 = /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column", paddingLeft: 2, marginTop: 1, tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, t6, t8, t9);
    $[20] = handleKeyDown;
    $[21] = t6;
    $[22] = t8;
    $[23] = t9;
    $[24] = t10;
  } else {
    t10 = $[24];
  }
  return t10;
}
function _temp(f) {
  return f + 1;
}
function stripInProgressAssistantMessage(messages) {
  const last = messages.at(-1);
  if (last?.type === "assistant" && last.message.stop_reason === null) {
    return messages.slice(0, -1);
  }
  return messages;
}
async function buildCacheSafeParams(context) {
  const forkContextMessages = getMessagesAfterCompactBoundary(stripInProgressAssistantMessage(context.messages));
  const saved = getLastCacheSafeParams();
  if (saved) {
    return {
      systemPrompt: saved.systemPrompt,
      userContext: saved.userContext,
      systemContext: saved.systemContext,
      toolUseContext: context,
      forkContextMessages
    };
  }
  const [rawSystemPrompt, userContext, systemContext] = await Promise.all([getSystemPrompt(context.options.tools, context.options.mainLoopModel, [], context.options.mcpClients), getUserContext(), getSystemContext()]);
  return {
    systemPrompt: asSystemPrompt(rawSystemPrompt),
    userContext,
    systemContext,
    toolUseContext: context,
    forkContextMessages
  };
}
async function call(onDone, context, args) {
  const question = args?.trim();
  if (!question) {
    onDone("Usage: /btw <your question>", {
      display: "system"
    });
    return null;
  }
  saveGlobalConfig((current) => ({
    ...current,
    btwUseCount: current.btwUseCount + 1
  }));
  return /* @__PURE__ */ createElement(BtwSideQuestion, { question, context, onDone });
}
var CHROME_ROWS, OUTER_CHROME_ROWS, SCROLL_LINES;
var init_btw = __esm({
  "src/commands/btw/btw.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_react();
    init_dist();
    init_Markdown();
    init_SpinnerGlyph();
    init_figures();
    init_prompts();
    init_modalContext();
    init_context();
    init_useTerminalSize();
    init_ScrollBox();
    init_ink();
    init_abortController();
    init_config();
    init_errors();
    init_forkedAgent();
    init_messages();
    init_sideQuestion();
    init_systemPromptType();
    CHROME_ROWS = 5;
    OUTER_CHROME_ROWS = 6;
    SCROLL_LINES = 3;
  }
});
init_btw();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL2J0dy9idHcudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlSW50ZXJ2YWwgfSBmcm9tICd1c2Vob29rcy10cydcbmltcG9ydCB0eXBlIHsgQ29tbWFuZFJlc3VsdERpc3BsYXkgfSBmcm9tICcuLi8uLi9jb21tYW5kcy5qcydcbmltcG9ydCB7IE1hcmtkb3duIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NYXJrZG93bi5qcydcbmltcG9ydCB7IFNwaW5uZXJHbHlwaCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyR2x5cGguanMnXG5pbXBvcnQgeyBET1dOX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9maWd1cmVzLmpzJ1xuaW1wb3J0IHsgZ2V0U3lzdGVtUHJvbXB0IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb21wdHMuanMnXG5pbXBvcnQgeyB1c2VNb2RhbE9yVGVybWluYWxTaXplIH0gZnJvbSAnLi4vLi4vY29udGV4dC9tb2RhbENvbnRleHQuanMnXG5pbXBvcnQgeyBnZXRTeXN0ZW1Db250ZXh0LCBnZXRVc2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQuanMnXG5pbXBvcnQgeyB1c2VUZXJtaW5hbFNpemUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgU2Nyb2xsQm94LCB7XG4gIHR5cGUgU2Nyb2xsQm94SGFuZGxlLFxufSBmcm9tICcuLi8uLi9pbmsvY29tcG9uZW50cy9TY3JvbGxCb3guanMnXG5pbXBvcnQgdHlwZSB7IEtleWJvYXJkRXZlbnQgfSBmcm9tICcuLi8uLi9pbmsvZXZlbnRzL2tleWJvYXJkLWV2ZW50LmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHR5cGUgeyBMb2NhbEpTWENvbW1hbmRPbkRvbmUgfSBmcm9tICcuLi8uLi90eXBlcy9jb21tYW5kLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vdHlwZXMvbWVzc2FnZS5qcydcbmltcG9ydCB7IGNyZWF0ZUFib3J0Q29udHJvbGxlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Fib3J0Q29udHJvbGxlci5qcydcbmltcG9ydCB7IHNhdmVHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi91dGlscy9jb25maWcuanMnXG5pbXBvcnQgeyBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvcnMuanMnXG5pbXBvcnQge1xuICB0eXBlIENhY2hlU2FmZVBhcmFtcyxcbiAgZ2V0TGFzdENhY2hlU2FmZVBhcmFtcyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ya2VkQWdlbnQuanMnXG5pbXBvcnQgeyBnZXRNZXNzYWdlc0FmdGVyQ29tcGFjdEJvdW5kYXJ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVzc2FnZXMuanMnXG5pbXBvcnQgdHlwZSB7IFByb2Nlc3NVc2VySW5wdXRDb250ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvY2Vzc1VzZXJJbnB1dC9wcm9jZXNzVXNlcklucHV0LmpzJ1xuaW1wb3J0IHsgcnVuU2lkZVF1ZXN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2lkZVF1ZXN0aW9uLmpzJ1xuaW1wb3J0IHsgYXNTeXN0ZW1Qcm9tcHQgfSBmcm9tICcuLi8uLi91dGlscy9zeXN0ZW1Qcm9tcHRUeXBlLmpzJ1xuXG50eXBlIEJ0d0NvbXBvbmVudFByb3BzID0ge1xuICBxdWVzdGlvbjogc3RyaW5nXG4gIGNvbnRleHQ6IFByb2Nlc3NVc2VySW5wdXRDb250ZXh0XG4gIG9uRG9uZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBkaXNwbGF5PzogQ29tbWFuZFJlc3VsdERpc3BsYXkgfSxcbiAgKSA9PiB2b2lkXG59XG5cbmNvbnN0IENIUk9NRV9ST1dTID0gNVxuY29uc3QgT1VURVJfQ0hST01FX1JPV1MgPSA2XG5jb25zdCBTQ1JPTExfTElORVMgPSAzXG5cbmZ1bmN0aW9uIEJ0d1NpZGVRdWVzdGlvbih7XG4gIHF1ZXN0aW9uLFxuICBjb250ZXh0LFxuICBvbkRvbmUsXG59OiBCdHdDb21wb25lbnRQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbZnJhbWUsIHNldEZyYW1lXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZjxTY3JvbGxCb3hIYW5kbGU+KG51bGwpXG4gIGNvbnN0IHsgcm93cyB9ID0gdXNlTW9kYWxPclRlcm1pbmFsU2l6ZSh1c2VUZXJtaW5hbFNpemUoKSlcblxuICAvLyBBbmltYXRlIHNwaW5uZXIgd2hpbGUgbG9hZGluZ1xuICB1c2VJbnRlcnZhbCgoKSA9PiBzZXRGcmFtZShmID0+IGYgKyAxKSwgcmVzcG9uc2UgfHwgZXJyb3IgPyBudWxsIDogODApXG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgZS5rZXkgPT09ICdlc2NhcGUnIHx8XG4gICAgICBlLmtleSA9PT0gJ3JldHVybicgfHxcbiAgICAgIGUua2V5ID09PSAnICcgfHxcbiAgICAgIChlLmN0cmwgJiYgKGUua2V5ID09PSAnYycgfHwgZS5rZXkgPT09ICdkJykpXG4gICAgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIG9uRG9uZSh1bmRlZmluZWQsIHsgZGlzcGxheTogJ3NraXAnIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAndXAnIHx8IChlLmN0cmwgJiYgZS5rZXkgPT09ICdwJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnNjcm9sbEJ5KC1TQ1JPTExfTElORVMpXG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ2Rvd24nIHx8IChlLmN0cmwgJiYgZS5rZXkgPT09ICduJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnNjcm9sbEJ5KFNDUk9MTF9MSU5FUylcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IGNyZWF0ZUFib3J0Q29udHJvbGxlcigpXG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFJlc3BvbnNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2FjaGVTYWZlUGFyYW1zID0gYXdhaXQgYnVpbGRDYWNoZVNhZmVQYXJhbXMoY29udGV4dClcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcnVuU2lkZVF1ZXN0aW9uKHsgcXVlc3Rpb24sIGNhY2hlU2FmZVBhcmFtcyB9KVxuXG4gICAgICAgIGlmICghYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5yZXNwb25zZSkge1xuICAgICAgICAgICAgc2V0UmVzcG9uc2UocmVzdWx0LnJlc3BvbnNlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvcignTm8gcmVzcG9uc2UgcmVjZWl2ZWQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmICghYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgc2V0RXJyb3IoZXJyb3JNZXNzYWdlKGVycikgfHwgJ0ZhaWxlZCB0byBnZXQgcmVzcG9uc2UnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdm9pZCBmZXRjaFJlc3BvbnNlKClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKVxuICAgIH1cbiAgfSwgW3F1ZXN0aW9uLCBjb250ZXh0XSlcblxuICBjb25zdCBtYXhDb250ZW50SGVpZ2h0ID0gTWF0aC5tYXgoNSwgcm93cyAtIENIUk9NRV9ST1dTIC0gT1VURVJfQ0hST01FX1JPV1MpXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIHBhZGRpbmdMZWZ0PXsyfVxuICAgICAgbWFyZ2luVG9wPXsxfVxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICBhdXRvRm9jdXNcbiAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICA+XG4gICAgICA8Qm94PlxuICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIiBib2xkPlxuICAgICAgICAgIC9idHd7JyAnfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPntxdWVzdGlvbn08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfSBtYXJnaW5MZWZ0PXsyfSBtYXhIZWlnaHQ9e21heENvbnRlbnRIZWlnaHR9PlxuICAgICAgICA8U2Nyb2xsQm94IHJlZj17c2Nyb2xsUmVmfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZmxleEdyb3c9ezF9PlxuICAgICAgICAgIHtlcnJvciA/IChcbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZXJyb3JcIj57ZXJyb3J9PC9UZXh0PlxuICAgICAgICAgICkgOiByZXNwb25zZSA/IChcbiAgICAgICAgICAgIDxNYXJrZG93bj57cmVzcG9uc2V9PC9NYXJrZG93bj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFNwaW5uZXJHbHlwaCBmcmFtZT17ZnJhbWV9IG1lc3NhZ2VDb2xvcj1cIndhcm5pbmdcIiAvPlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5BbnN3ZXJpbmcuLi48L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8L1Njcm9sbEJveD5cbiAgICAgIDwvQm94PlxuICAgICAgeyhyZXNwb25zZSB8fCBlcnJvcikgJiYgKFxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICB7VVBfQVJST1d9L3tET1dOX0FSUk9XfSB0byBzY3JvbGwgwrcgU3BhY2UsIEVudGVyLCBvciBFc2NhcGUgdG9cbiAgICAgICAgICAgIGRpc21pc3NcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufVxuXG4vKipcbiAqIEJ1aWxkIENhY2hlU2FmZVBhcmFtcyBmb3IgdGhlIHNpZGUgcXVlc3Rpb24gZm9yay5cbiAqXG4gKiBUaGUgcHJlZmVycmVkIHNvdXJjZSBpcyBnZXRMYXN0Q2FjaGVTYWZlUGFyYW1zIOKAlCB0aGUgZXhhY3RcbiAqIHN5c3RlbVByb21wdC91c2VyQ29udGV4dC9zeXN0ZW1Db250ZXh0IGJ5dGVzIHRoZSBtYWluIHRocmVhZCBzZW50IG9uIGl0c1xuICogbGFzdCByZXF1ZXN0IChjYXB0dXJlZCBpbiBzdG9wSG9va3MpLiBSZXVzaW5nIHRoZW0gZ3VhcmFudGVlcyBhIGJ5dGUtXG4gKiBpZGVudGljYWwgcHJlZml4IGFuZCB0aHVzIGEgcHJvbXB0IGNhY2hlIGhpdC4gV2UgcGFpciB0aGVzZSB3aXRoIHRoZVxuICogY3VycmVudCB0b29sVXNlQ29udGV4dCAoZm9yIHRoaW5raW5nQ29uZmlnL3Rvb2xzKSBhbmQgY3VycmVudCBtZXNzYWdlc1xuICogKGZvciB1cC10by1kYXRlIGNvbnRleHQpLlxuICpcbiAqIEZhbGxiYWNrIChmaXJzdCB0dXJuIGJlZm9yZSBzdG9wIGhvb2tzIGZpcmUsIG9yIHByb21wdC1zdWdnZXN0aW9uXG4gKiBkaXNhYmxlZCk6IHJlYnVpbGQgZnJvbSBzY3JhdGNoLiBUaGlzIG1heSBtaXNzIHRoZSBjYWNoZSBpZiB0aGUgbWFpbiBsb29wXG4gKiBhcHBsaWVkIGJ1aWxkRWZmZWN0aXZlU3lzdGVtUHJvbXB0IGV4dHJhcyAoLS1hZ2VudCwgLS1zeXN0ZW0tcHJvbXB0LFxuICogLS1hcHBlbmQtc3lzdGVtLXByb21wdCwgY29vcmRpbmF0b3IgbW9kZSkuXG4gKi9cbmZ1bmN0aW9uIHN0cmlwSW5Qcm9ncmVzc0Fzc2lzdGFudE1lc3NhZ2UobWVzc2FnZXM6IE1lc3NhZ2VbXSk6IE1lc3NhZ2VbXSB7XG4gIGNvbnN0IGxhc3QgPSBtZXNzYWdlcy5hdCgtMSlcbiAgaWYgKGxhc3Q/LnR5cGUgPT09ICdhc3Npc3RhbnQnICYmIGxhc3QubWVzc2FnZS5zdG9wX3JlYXNvbiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBtZXNzYWdlcy5zbGljZSgwLCAtMSlcbiAgfVxuICByZXR1cm4gbWVzc2FnZXNcbn1cblxuYXN5bmMgZnVuY3Rpb24gYnVpbGRDYWNoZVNhZmVQYXJhbXMoXG4gIGNvbnRleHQ6IFByb2Nlc3NVc2VySW5wdXRDb250ZXh0LFxuKTogUHJvbWlzZTxDYWNoZVNhZmVQYXJhbXM+IHtcbiAgY29uc3QgZm9ya0NvbnRleHRNZXNzYWdlcyA9IGdldE1lc3NhZ2VzQWZ0ZXJDb21wYWN0Qm91bmRhcnkoXG4gICAgc3RyaXBJblByb2dyZXNzQXNzaXN0YW50TWVzc2FnZShjb250ZXh0Lm1lc3NhZ2VzKSxcbiAgKVxuICBjb25zdCBzYXZlZCA9IGdldExhc3RDYWNoZVNhZmVQYXJhbXMoKVxuICBpZiAoc2F2ZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3lzdGVtUHJvbXB0OiBzYXZlZC5zeXN0ZW1Qcm9tcHQsXG4gICAgICB1c2VyQ29udGV4dDogc2F2ZWQudXNlckNvbnRleHQsXG4gICAgICBzeXN0ZW1Db250ZXh0OiBzYXZlZC5zeXN0ZW1Db250ZXh0LFxuICAgICAgdG9vbFVzZUNvbnRleHQ6IGNvbnRleHQsXG4gICAgICBmb3JrQ29udGV4dE1lc3NhZ2VzLFxuICAgIH1cbiAgfVxuICBjb25zdCBbcmF3U3lzdGVtUHJvbXB0LCB1c2VyQ29udGV4dCwgc3lzdGVtQ29udGV4dF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U3lzdGVtUHJvbXB0KFxuICAgICAgY29udGV4dC5vcHRpb25zLnRvb2xzLFxuICAgICAgY29udGV4dC5vcHRpb25zLm1haW5Mb29wTW9kZWwsXG4gICAgICBbXSxcbiAgICAgIGNvbnRleHQub3B0aW9ucy5tY3BDbGllbnRzLFxuICAgICksXG4gICAgZ2V0VXNlckNvbnRleHQoKSxcbiAgICBnZXRTeXN0ZW1Db250ZXh0KCksXG4gIF0pXG4gIHJldHVybiB7XG4gICAgc3lzdGVtUHJvbXB0OiBhc1N5c3RlbVByb21wdChyYXdTeXN0ZW1Qcm9tcHQpLFxuICAgIHVzZXJDb250ZXh0LFxuICAgIHN5c3RlbUNvbnRleHQsXG4gICAgdG9vbFVzZUNvbnRleHQ6IGNvbnRleHQsXG4gICAgZm9ya0NvbnRleHRNZXNzYWdlcyxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4gIGNvbnRleHQ6IFByb2Nlc3NVc2VySW5wdXRDb250ZXh0LFxuICBhcmdzOiBzdHJpbmcsXG4pOiBQcm9taXNlPFJlYWN0LlJlYWN0Tm9kZT4ge1xuICBjb25zdCBxdWVzdGlvbiA9IGFyZ3M/LnRyaW0oKVxuXG4gIGlmICghcXVlc3Rpb24pIHtcbiAgICBvbkRvbmUoJ1VzYWdlOiAvYnR3IDx5b3VyIHF1ZXN0aW9uPicsIHsgZGlzcGxheTogJ3N5c3RlbScgfSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc2F2ZUdsb2JhbENvbmZpZyhjdXJyZW50ID0+ICh7XG4gICAgLi4uY3VycmVudCxcbiAgICBidHdVc2VDb3VudDogY3VycmVudC5idHdVc2VDb3VudCArIDEsXG4gIH0pKVxuXG4gIHJldHVybiAoXG4gICAgPEJ0d1NpZGVRdWVzdGlvbiBxdWVzdGlvbj17cXVlc3Rpb259IGNvbnRleHQ9e2NvbnRleHR9IG9uRG9uZT17b25Eb25lfSAvPlxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDQSxTQUFBQSxnQkFBQUMsSUFBQTtBQUFBLFFBQUFDLElBQUFDLEVBQUEsRUFBQTtBQUF5QixRQUFBO0lBQUFDO0lBQUFDO0lBQUFDO0VBQUEsSUFBQUw7QUFLdkIsUUFBQSxDQUFBTSxVQUFBQyxXQUFBLElBQWdDQyxTQUF3QixJQUFJO0FBQzVELFFBQUEsQ0FBQUMsT0FBQUMsUUFBQSxJQUEwQkYsU0FBd0IsSUFBSTtBQUN0RCxRQUFBLENBQUFHLE9BQUFDLFFBQUEsSUFBMEJKLFNBQVMsQ0FBQztBQUNwQyxRQUFBSyxZQUFrQkMsT0FBd0IsSUFBSTtBQUM5QyxRQUFBO0lBQUFDO0VBQUEsSUFBaUJDLHVCQUF1QkMsZ0JBQWdCLENBQUM7QUFBQyxNQUFBQztBQUFBLE1BQUFqQixFQUFBLENBQUEsTUFBQWtCLHVCQUFBQyxJQUFBLDJCQUFBLEdBQUE7QUFHOUNGLFNBQUFBLE1BQU1OLFNBQVNTLEtBQVU7QUFBQ3BCLE1BQUEsQ0FBQSxJQUFBaUI7RUFBQSxPQUFBO0FBQUFBLFNBQUFqQixFQUFBLENBQUE7RUFBQTtBQUF0Q3FCLGNBQVlKLElBQTRCWixZQUFBRyxRQUFBLE9BQUEsRUFBNkI7QUFBQyxNQUFBYztBQUFBLE1BQUF0QixFQUFBLENB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SUFBSSxNQUFNRyxRQUFRQyxJQUFJLENBQ3RFQyxnQkFDRTlFLFFBQVErRSxRQUFRQyxPQUNoQmhGLFFBQVErRSxRQUFRRSxlQUNoQixDQUFBLEdBQ0FqRixRQUFRK0UsUUFBUUcsVUFDbEIsR0FDQUMsZUFBZSxHQUNmQyxpQkFBaUIsQ0FBQyxDQUNuQjtBQUNELFNBQU87SUFDTGIsY0FBY2MsZUFBZVYsZUFBZTtJQUM1Q0g7SUFDQUM7SUFDQUMsZ0JBQWdCMUU7SUFDaEJtRTtFQUNGO0FBQ0Y7QUFFQSxlQUFzQm1CLEtBQ3BCckYsUUFDQUQsU0FDQXVGLE1BQzBCO0FBQzFCLFFBQU14RixXQUFXd0YsTUFBTUMsS0FBSztBQUU1QixNQUFJLENBQUN6RixVQUFVO0FBQ2JFLFdBQU8sK0JBQStCO01BQUV5QixTQUFTO0lBQVMsQ0FBQztBQUMzRCxXQUFPO0VBQ1Q7QUFFQStELG1CQUFpQjlELGNBQVk7SUFDM0IsR0FBR0E7SUFDSCtELGFBQWEvRCxRQUFRK0QsY0FBYztFQUNyQyxFQUFFO0FBRUYsU0FDRSw4QkFBQyxtQkFBZ0IsVUFBb0IsU0FBa0IsUUFBZTtBQUUxRTtJQTdMTXpDLGFBQ0FDLG1CQUNBckI7Ozs7QUF6Q047QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFXQSxJQUFNb0IsY0FBYztBQUNwQixJQUFNQyxvQkFBb0I7QUFDMUIsSUFBTXJCLGVBQWU7OzsiLAogICJuYW1lcyI6IFsiQnR3U2lkZVF1ZXN0aW9uIiwgInQwIiwgIiQiLCAiX2MiLCAicXVlc3Rpb24iLCAiY29udGV4dCIsICJvbkRvbmUiLCAicmVzcG9uc2UiLCAic2V0UmVzcG9uc2UiLCAidXNlU3RhdGUiLCAiZXJyb3IiLCAic2V0RXJyb3IiLCAiZnJhbWUiLCAic2V0RnJhbWUiLCAic2Nyb2xsUmVmIiwgInVzZVJlZiIsICJyb3dzIiwgInVzZU1vZGFsT3JUZXJtaW5hbFNpemUiLCAidXNlVGVybWluYWxTaXplIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAiX3RlbXAiLCAidXNlSW50ZXJ2YWwiLCAidDIiLCAiaGFuZGxlS2V5RG93biIsICJlIiwgImtleSIsICJjdHJsIiwgInByZXZlbnREZWZhdWx0IiwgInVuZGVmaW5lZCIsICJkaXNwbGF5IiwgImN1cnJlbnQiLCAic2Nyb2xsQnkiLCAiU0NST0xMX0xJTkVTIiwgInQzIiwgInQ0IiwgImFib3J0Q29udHJvbGxlciIsICJjcmVhdGVBYm9ydENvbnRyb2xsZXIiLCAiZmV0Y2hSZXNwb25zZSIsICJjYWNoZVNhZmVQYXJhbXMiLCAiYnVpbGRDYWNoZVNhZmVQYXJhbXMiLCAicmVzdWx0IiwgInJ1blNpZGVRdWVzdGlvbiIsICJzaWduYWwiLCAiYWJvcnRlZCIsICJ0NSIsICJlcnIiLCAiZXJyb3JNZXNzYWdlIiwgImFib3J0IiwgInVzZUVmZmVjdCIsICJtYXhDb250ZW50SGVpZ2h0IiwgIk1hdGgiLCAibWF4IiwgIkNIUk9NRV9ST1dTIiwgIk9VVEVSX0NIUk9NRV9ST1dTIiwgInQ2IiwgInQ3IiwgInQ4IiwgInQ5IiwgIlVQX0FSUk9XIiwgIkRPV05fQVJST1ciLCAidDEwIiwgImYiLCAic3RyaXBJblByb2dyZXNzQXNzaXN0YW50TWVzc2FnZSIsICJtZXNzYWdlcyIsICJsYXN0IiwgImF0IiwgInR5cGUiLCAibWVzc2FnZSIsICJzdG9wX3JlYXNvbiIsICJzbGljZSIsICJmb3JrQ29udGV4dE1lc3NhZ2VzIiwgImdldE1lc3NhZ2VzQWZ0ZXJDb21wYWN0Qm91bmRhcnkiLCAic2F2ZWQiLCAiZ2V0TGFzdENhY2hlU2FmZVBhcmFtcyIsICJzeXN0ZW1Qcm9tcHQiLCAidXNlckNvbnRleHQiLCAic3lzdGVtQ29udGV4dCIsICJ0b29sVXNlQ29udGV4dCIsICJyYXdTeXN0ZW1Qcm9tcHQiLCAiUHJvbWlzZSIsICJhbGwiLCAiZ2V0U3lzdGVtUHJvbXB0IiwgIm9wdGlvbnMiLCAidG9vbHMiLCAibWFpbkxvb3BNb2RlbCIsICJtY3BDbGllbnRzIiwgImdldFVzZXJDb250ZXh0IiwgImdldFN5c3RlbUNvbnRleHQiLCAiYXNTeXN0ZW1Qcm9tcHQiLCAiY2FsbCIsICJhcmdzIiwgInRyaW0iLCAic2F2ZUdsb2JhbENvbmZpZyIsICJidHdVc2VDb3VudCJdCn0K
