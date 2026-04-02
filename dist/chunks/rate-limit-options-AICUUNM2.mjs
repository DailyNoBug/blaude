#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  call as call2,
  init_upgrade
} from "./chunk-YKPC3CDZ.mjs";
import {
  call,
  init_extra_usage
} from "./chunk-SLP73HH6.mjs";
import "./chunk-X3D2TW57.mjs";
import "./chunk-JDJZ66PK.mjs";
import "./chunk-QHAFY3TI.mjs";
import "./chunk-YZ6EEZQQ.mjs";
import "./chunk-NSUS22JB.mjs";
import "./chunk-L774IBE2.mjs";
import {
  Select,
  extraUsage,
  init_claudeAiLimitsHook,
  init_extra_usage as init_extra_usage2,
  init_select,
  init_upgrade as init_upgrade2,
  upgrade_default,
  useClaudeAiLimits
} from "./chunk-FMU4URRE.mjs";
import "./chunk-PJK4KGGT.mjs";
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
  c,
  init_react_compiler_runtime
} from "./chunk-HWTXKBLR.mjs";
import {
  init_react,
  react_default,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getFeatureValue_CACHED_MAY_BE_STALE,
  getOauthAccountInfo,
  getRateLimitTier,
  getSubscriptionType,
  hasClaudeAiBillingAccess,
  init_auth,
  init_billing,
  init_growthbook
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

// src/commands/rate-limit-options/rate-limit-options.tsx
function RateLimitOptionsMenu(t0) {
  const $ = c(25);
  const {
    onDone,
    context
  } = t0;
  const [subCommandJSX, setSubCommandJSX] = useState(null);
  const claudeAiLimits = useClaudeAiLimits();
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = getSubscriptionType();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const subscriptionType = t1;
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = getRateLimitTier();
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const rateLimitTier = t2;
  const hasExtraUsageEnabled = getOauthAccountInfo()?.hasExtraUsageEnabled === true;
  const isMax = subscriptionType === "max";
  const isMax20x = isMax && rateLimitTier === "default_claude_max_20x";
  const isTeamOrEnterprise = subscriptionType === "team" || subscriptionType === "enterprise";
  const buyFirst = getFeatureValue_CACHED_MAY_BE_STALE("tengu_jade_anvil_4", false);
  let t3;
  bb0: {
    let actionOptions;
    if ($[2] !== claudeAiLimits.overageDisabledReason || $[3] !== claudeAiLimits.overageStatus) {
      actionOptions = [];
      if (extraUsage.isEnabled()) {
        const hasBillingAccess = hasClaudeAiBillingAccess();
        const needsToRequestFromAdmin = isTeamOrEnterprise && !hasBillingAccess;
        const isOrgSpendCapDepleted = claudeAiLimits.overageDisabledReason === "out_of_credits" || claudeAiLimits.overageDisabledReason === "org_level_disabled_until" || claudeAiLimits.overageDisabledReason === "org_service_zero_credit_limit";
        if (needsToRequestFromAdmin && isOrgSpendCapDepleted) {
        } else {
          const isOverageState = claudeAiLimits.overageStatus === "rejected" || claudeAiLimits.overageStatus === "allowed_warning";
          let label;
          if (needsToRequestFromAdmin) {
            label = isOverageState ? "Request more" : "Request extra usage";
          } else {
            label = hasExtraUsageEnabled ? "Add funds to continue with extra usage" : "Switch to extra usage";
          }
          let t43;
          if ($[5] !== label) {
            t43 = {
              label,
              value: "extra-usage"
            };
            $[5] = label;
            $[6] = t43;
          } else {
            t43 = $[6];
          }
          actionOptions.push(t43);
        }
      }
      if (!isMax20x && !isTeamOrEnterprise && upgrade_default.isEnabled()) {
        let t43;
        if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
          t43 = {
            label: "Upgrade your plan",
            value: "upgrade"
          };
          $[7] = t43;
        } else {
          t43 = $[7];
        }
        actionOptions.push(t43);
      }
      $[2] = claudeAiLimits.overageDisabledReason;
      $[3] = claudeAiLimits.overageStatus;
      $[4] = actionOptions;
    } else {
      actionOptions = $[4];
    }
    let t42;
    if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t42 = {
        label: "Stop and wait for limit to reset",
        value: "cancel"
      };
      $[8] = t42;
    } else {
      t42 = $[8];
    }
    const cancelOption = t42;
    if (buyFirst) {
      let t53;
      if ($[9] !== actionOptions) {
        t53 = [...actionOptions, cancelOption];
        $[9] = actionOptions;
        $[10] = t53;
      } else {
        t53 = $[10];
      }
      t3 = t53;
      break bb0;
    }
    let t52;
    if ($[11] !== actionOptions) {
      t52 = [cancelOption, ...actionOptions];
      $[11] = actionOptions;
      $[12] = t52;
    } else {
      t52 = $[12];
    }
    t3 = t52;
  }
  const options = t3;
  let t4;
  if ($[13] !== onDone) {
    t4 = function handleCancel2() {
      logEvent("tengu_rate_limit_options_menu_cancel", {});
      onDone(void 0, {
        display: "skip"
      });
    };
    $[13] = onDone;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  const handleCancel = t4;
  let t5;
  if ($[15] !== context || $[16] !== handleCancel || $[17] !== onDone) {
    t5 = function handleSelect2(value) {
      if (value === "upgrade") {
        logEvent("tengu_rate_limit_options_menu_select_upgrade", {});
        call2(onDone, context).then((jsx) => {
          if (jsx) {
            setSubCommandJSX(jsx);
          }
        });
      } else {
        if (value === "extra-usage") {
          logEvent("tengu_rate_limit_options_menu_select_extra_usage", {});
          call(onDone, context).then((jsx_0) => {
            if (jsx_0) {
              setSubCommandJSX(jsx_0);
            }
          });
        } else {
          if (value === "cancel") {
            handleCancel();
          }
        }
      }
    };
    $[15] = context;
    $[16] = handleCancel;
    $[17] = onDone;
    $[18] = t5;
  } else {
    t5 = $[18];
  }
  const handleSelect = t5;
  if (subCommandJSX) {
    return subCommandJSX;
  }
  let t6;
  if ($[19] !== handleSelect || $[20] !== options) {
    t6 = /* @__PURE__ */ react_default.createElement(Select, { options, onChange: handleSelect, visibleOptionCount: options.length });
    $[19] = handleSelect;
    $[20] = options;
    $[21] = t6;
  } else {
    t6 = $[21];
  }
  let t7;
  if ($[22] !== handleCancel || $[23] !== t6) {
    t7 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "What do you want to do?", onCancel: handleCancel, color: "suggestion" }, t6);
    $[22] = handleCancel;
    $[23] = t6;
    $[24] = t7;
  } else {
    t7 = $[24];
  }
  return t7;
}
async function call3(onDone, context) {
  return /* @__PURE__ */ react_default.createElement(RateLimitOptionsMenu, { onDone, context });
}
var init_rate_limit_options = __esm({
  "src/commands/rate-limit-options/rate-limit-options.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_select();
    init_Dialog();
    init_growthbook();
    init_analytics();
    init_claudeAiLimitsHook();
    init_auth();
    init_billing();
    init_extra_usage();
    init_extra_usage2();
    init_upgrade2();
    init_upgrade();
  }
});
init_rate_limit_options();
export {
  call3 as call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3JhdGUtbGltaXQtb3B0aW9ucy9yYXRlLWxpbWl0LW9wdGlvbnMudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHtcbiAgQ29tbWFuZFJlc3VsdERpc3BsYXksXG4gIExvY2FsSlNYQ29tbWFuZENvbnRleHQsXG59IGZyb20gJy4uLy4uL2NvbW1hbmRzLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBPcHRpb25XaXRoRGVzY3JpcHRpb24sXG4gIFNlbGVjdCxcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DdXN0b21TZWxlY3Qvc2VsZWN0LmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7IGdldEZlYXR1cmVWYWx1ZV9DQUNIRURfTUFZX0JFX1NUQUxFIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2dyb3d0aGJvb2suanMnXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IHVzZUNsYXVkZUFpTGltaXRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xhdWRlQWlMaW1pdHNIb29rLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sVXNlQ29udGV4dCB9IGZyb20gJy4uLy4uL1Rvb2wuanMnXG5pbXBvcnQgdHlwZSB7IExvY2FsSlNYQ29tbWFuZE9uRG9uZSB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQge1xuICBnZXRPYXV0aEFjY291bnRJbmZvLFxuICBnZXRSYXRlTGltaXRUaWVyLFxuICBnZXRTdWJzY3JpcHRpb25UeXBlLFxufSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgaGFzQ2xhdWRlQWlCaWxsaW5nQWNjZXNzIH0gZnJvbSAnLi4vLi4vdXRpbHMvYmlsbGluZy5qcydcbmltcG9ydCB7IGNhbGwgYXMgZXh0cmFVc2FnZUNhbGwgfSBmcm9tICcuLi9leHRyYS11c2FnZS9leHRyYS11c2FnZS5qcydcbmltcG9ydCB7IGV4dHJhVXNhZ2UgfSBmcm9tICcuLi9leHRyYS11c2FnZS9pbmRleC5qcydcbmltcG9ydCB1cGdyYWRlIGZyb20gJy4uL3VwZ3JhZGUvaW5kZXguanMnXG5pbXBvcnQgeyBjYWxsIGFzIHVwZ3JhZGVDYWxsIH0gZnJvbSAnLi4vdXBncmFkZS91cGdyYWRlLmpzJ1xuXG50eXBlIFJhdGVMaW1pdE9wdGlvbnNNZW51T3B0aW9uVHlwZSA9ICd1cGdyYWRlJyB8ICdleHRyYS11c2FnZScgfCAnY2FuY2VsJ1xuXG50eXBlIFJhdGVMaW1pdE9wdGlvbnNNZW51UHJvcHMgPSB7XG4gIG9uRG9uZTogKFxuICAgIHJlc3VsdD86IHN0cmluZyxcbiAgICBvcHRpb25zPzpcbiAgICAgIHwge1xuICAgICAgICAgIGRpc3BsYXk/OiBDb21tYW5kUmVzdWx0RGlzcGxheSB8IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB8IHVuZGVmaW5lZCxcbiAgKSA9PiB2b2lkXG4gIGNvbnRleHQ6IFRvb2xVc2VDb250ZXh0ICYgTG9jYWxKU1hDb21tYW5kQ29udGV4dFxufVxuXG5mdW5jdGlvbiBSYXRlTGltaXRPcHRpb25zTWVudSh7XG4gIG9uRG9uZSxcbiAgY29udGV4dCxcbn06IFJhdGVMaW1pdE9wdGlvbnNNZW51UHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbc3ViQ29tbWFuZEpTWCwgc2V0U3ViQ29tbWFuZEpTWF0gPSB1c2VTdGF0ZTxSZWFjdC5SZWFjdE5vZGU+KG51bGwpXG4gIGNvbnN0IGNsYXVkZUFpTGltaXRzID0gdXNlQ2xhdWRlQWlMaW1pdHMoKVxuICBjb25zdCBzdWJzY3JpcHRpb25UeXBlID0gZ2V0U3Vic2NyaXB0aW9uVHlwZSgpXG4gIGNvbnN0IHJhdGVMaW1pdFRpZXIgPSBnZXRSYXRlTGltaXRUaWVyKClcbiAgY29uc3QgaGFzRXh0cmFVc2FnZUVuYWJsZWQgPVxuICAgIGdldE9hdXRoQWNjb3VudEluZm8oKT8uaGFzRXh0cmFVc2FnZUVuYWJsZWQgPT09IHRydWVcbiAgY29uc3QgaXNNYXggPSBzdWJzY3JpcHRpb25UeXBlID09PSAnbWF4J1xuICBjb25zdCBpc01heDIweCA9IGlzTWF4ICYmIHJhdGVMaW1pdFRpZXIgPT09ICdkZWZhdWx0X2NsYXVkZV9tYXhfMjB4J1xuICBjb25zdCBpc1RlYW1PckVudGVycHJpc2UgPVxuICAgIHN1YnNjcmlwdGlvblR5cGUgPT09ICd0ZWFtJyB8fCBzdWJzY3JpcHRpb25UeXBlID09PSAnZW50ZXJwcmlzZSdcbiAgY29uc3QgYnV5Rmlyc3QgPSBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRShcbiAgICAndGVuZ3VfamFkZV9hbnZpbF80JyxcbiAgICBmYWxzZSxcbiAgKVxuXG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vPFxuICAgIE9wdGlvbldpdGhEZXNjcmlwdGlvbjxSYXRlTGltaXRPcHRpb25zTWVudU9wdGlvblR5cGU+W11cbiAgPigoKSA9PiB7XG4gICAgY29uc3QgYWN0aW9uT3B0aW9uczogT3B0aW9uV2l0aERlc2NyaXB0aW9uPFJhdGVMaW1pdE9wdGlvbnNNZW51T3B0aW9uVHlwZT5bXSA9XG4gICAgICBbXVxuXG4gICAgaWYgKGV4dHJhVXNhZ2UuaXNFbmFibGVkKCkpIHtcbiAgICAgIGNvbnN0IGhhc0JpbGxpbmdBY2Nlc3MgPSBoYXNDbGF1ZGVBaUJpbGxpbmdBY2Nlc3MoKVxuICAgICAgY29uc3QgbmVlZHNUb1JlcXVlc3RGcm9tQWRtaW4gPSBpc1RlYW1PckVudGVycHJpc2UgJiYgIWhhc0JpbGxpbmdBY2Nlc3NcbiAgICAgIC8vIE9yZyBzcGVuZCBjYXAgZGVwbGV0ZWQgLSBub24tYWRtaW5zIGNhbid0IHJlcXVlc3QgbW9yZSBzaW5jZSB0aGVyZSdzIG5vdGhpbmcgdG8gYWxsb2NhdGVcbiAgICAgIC8vIC0gb3V0X29mX2NyZWRpdHM6IHdhbGxldCBlbXB0eVxuICAgICAgLy8gLSBvcmdfbGV2ZWxfZGlzYWJsZWRfdW50aWw6IG9yZyBzcGVuZCBjYXAgaGl0IGZvciB0aGUgbW9udGhcbiAgICAgIC8vIC0gb3JnX3NlcnZpY2VfemVyb19jcmVkaXRfbGltaXQ6IG9yZyBzZXJ2aWNlIGhhcyB6ZXJvIGNyZWRpdCBsaW1pdFxuICAgICAgY29uc3QgaXNPcmdTcGVuZENhcERlcGxldGVkID1cbiAgICAgICAgY2xhdWRlQWlMaW1pdHMub3ZlcmFnZURpc2FibGVkUmVhc29uID09PSAnb3V0X29mX2NyZWRpdHMnIHx8XG4gICAgICAgIGNsYXVkZUFpTGltaXRzLm92ZXJhZ2VEaXNhYmxlZFJlYXNvbiA9PT0gJ29yZ19sZXZlbF9kaXNhYmxlZF91bnRpbCcgfHxcbiAgICAgICAgY2xhdWRlQWlMaW1pdHMub3ZlcmFnZURpc2FibGVkUmVhc29uID09PSAnb3JnX3NlcnZpY2VfemVyb19jcmVkaXRfbGltaXQnXG5cbiAgICAgIC8vIEhpZGUgZm9yIG5vbi1hZG1pbiBUZWFtL0VudGVycHJpc2UgdXNlcnMgd2hlbiBvcmcgc3BlbmQgY2FwIGlzIGRlcGxldGVkXG4gICAgICBpZiAobmVlZHNUb1JlcXVlc3RGcm9tQWRtaW4gJiYgaXNPcmdTcGVuZENhcERlcGxldGVkKSB7XG4gICAgICAgIC8vIERvbid0IHNob3cgZXh0cmEtdXNhZ2Ugb3B0aW9uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpc092ZXJhZ2VTdGF0ZSA9XG4gICAgICAgICAgY2xhdWRlQWlMaW1pdHMub3ZlcmFnZVN0YXR1cyA9PT0gJ3JlamVjdGVkJyB8fFxuICAgICAgICAgIGNsYXVkZUFpTGltaXRzLm92ZXJhZ2VTdGF0dXMgPT09ICdhbGxvd2VkX3dhcm5pbmcnXG5cbiAgICAgICAgbGV0IGxhYmVsOiBzdHJpbmdcbiAgICAgICAgaWYgKG5lZWRzVG9SZXF1ZXN0RnJvbUFkbWluKSB7XG4gICAgICAgICAgbGFiZWwgPSBpc092ZXJhZ2VTdGF0ZSA/ICdSZXF1ZXN0IG1vcmUnIDogJ1JlcXVlc3QgZXh0cmEgdXNhZ2UnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFiZWwgPSBoYXNFeHRyYVVzYWdlRW5hYmxlZFxuICAgICAgICAgICAgPyAnQWRkIGZ1bmRzIHRvIGNvbnRpbnVlIHdpdGggZXh0cmEgdXNhZ2UnXG4gICAgICAgICAgICA6ICdTd2l0Y2ggdG8gZXh0cmEgdXNhZ2UnXG4gICAgICAgIH1cblxuICAgICAgICBhY3Rpb25PcHRpb25zLnB1c2goe1xuICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIHZhbHVlOiAnZXh0cmEtdXNhZ2UnLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNNYXgyMHggJiYgIWlzVGVhbU9yRW50ZXJwcmlzZSAmJiB1cGdyYWRlLmlzRW5hYmxlZCgpKSB7XG4gICAgICBhY3Rpb25PcHRpb25zLnB1c2goe1xuICAgICAgICBsYWJlbDogJ1VwZ3JhZGUgeW91ciBwbGFuJyxcbiAgICAgICAgdmFsdWU6ICd1cGdyYWRlJyxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY2FuY2VsT3B0aW9uOiBPcHRpb25XaXRoRGVzY3JpcHRpb248UmF0ZUxpbWl0T3B0aW9uc01lbnVPcHRpb25UeXBlPiA9XG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnU3RvcCBhbmQgd2FpdCBmb3IgbGltaXQgdG8gcmVzZXQnLFxuICAgICAgICB2YWx1ZTogJ2NhbmNlbCcsXG4gICAgICB9XG5cbiAgICBpZiAoYnV5Rmlyc3QpIHtcbiAgICAgIHJldHVybiBbLi4uYWN0aW9uT3B0aW9ucywgY2FuY2VsT3B0aW9uXVxuICAgIH1cbiAgICByZXR1cm4gW2NhbmNlbE9wdGlvbiwgLi4uYWN0aW9uT3B0aW9uc11cbiAgfSwgW1xuICAgIGJ1eUZpcnN0LFxuICAgIGlzTWF4MjB4LFxuICAgIGlzVGVhbU9yRW50ZXJwcmlzZSxcbiAgICBoYXNFeHRyYVVzYWdlRW5hYmxlZCxcbiAgICBjbGF1ZGVBaUxpbWl0cy5vdmVyYWdlU3RhdHVzLFxuICAgIGNsYXVkZUFpTGltaXRzLm92ZXJhZ2VEaXNhYmxlZFJlYXNvbixcbiAgXSlcblxuICBmdW5jdGlvbiBoYW5kbGVDYW5jZWwoKTogdm9pZCB7XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X3JhdGVfbGltaXRfb3B0aW9uc19tZW51X2NhbmNlbCcsIHt9KVxuICAgIG9uRG9uZSh1bmRlZmluZWQsIHsgZGlzcGxheTogJ3NraXAnIH0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QodmFsdWU6IFJhdGVMaW1pdE9wdGlvbnNNZW51T3B0aW9uVHlwZSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSA9PT0gJ3VwZ3JhZGUnKSB7XG4gICAgICBsb2dFdmVudCgndGVuZ3VfcmF0ZV9saW1pdF9vcHRpb25zX21lbnVfc2VsZWN0X3VwZ3JhZGUnLCB7fSlcbiAgICAgIHZvaWQgdXBncmFkZUNhbGwob25Eb25lLCBjb250ZXh0KS50aGVuKGpzeCA9PiB7XG4gICAgICAgIGlmIChqc3gpIHtcbiAgICAgICAgICBzZXRTdWJDb21tYW5kSlNYKGpzeClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZXh0cmEtdXNhZ2UnKSB7XG4gICAgICBsb2dFdmVudCgndGVuZ3VfcmF0ZV9saW1pdF9vcHRpb25zX21lbnVfc2VsZWN0X2V4dHJhX3VzYWdlJywge30pXG4gICAgICB2b2lkIGV4dHJhVXNhZ2VDYWxsKG9uRG9uZSwgY29udGV4dCkudGhlbihqc3ggPT4ge1xuICAgICAgICBpZiAoanN4KSB7XG4gICAgICAgICAgc2V0U3ViQ29tbWFuZEpTWChqc3gpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgIGhhbmRsZUNhbmNlbCgpXG4gICAgfVxuICB9XG5cbiAgaWYgKHN1YkNvbW1hbmRKU1gpIHtcbiAgICByZXR1cm4gc3ViQ29tbWFuZEpTWFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT1cIldoYXQgZG8geW91IHdhbnQgdG8gZG8/XCJcbiAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICBjb2xvcj1cInN1Z2dlc3Rpb25cIlxuICAgID5cbiAgICAgIDxTZWxlY3Q8UmF0ZUxpbWl0T3B0aW9uc01lbnVPcHRpb25UeXBlPlxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fVxuICAgICAgICB2aXNpYmxlT3B0aW9uQ291bnQ9e29wdGlvbnMubGVuZ3RofVxuICAgICAgLz5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbChcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4gIGNvbnRleHQ6IFRvb2xVc2VDb250ZXh0ICYgTG9jYWxKU1hDb21tYW5kQ29udGV4dCxcbik6IFByb21pc2U8UmVhY3QuUmVhY3ROb2RlPiB7XG4gIHJldHVybiA8UmF0ZUxpbWl0T3B0aW9uc01lbnUgb25Eb25lPXtvbkRvbmV9IGNvbnRleHQ9e2NvbnRleHR9IC8+XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQSxTQUFBQSxxQkFBQUMsSUFBQTtBQUFBLFFBQUFDLElBQUFDLEVBQUEsRUFBQTtBQUE4QixRQUFBO0lBQUFDO0lBQUFDO0VBQUEsSUFBQUo7QUFJNUIsUUFBQSxDQUFBSyxlQUFBQyxnQkFBQSxJQUEwQ0MsU0FBMEIsSUFBSTtBQUN4RSxRQUFBQyxpQkFBdUJDLGtCQUFrQjtBQUFD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U0FBQXhELEVBQUEsRUFBQTtFQUFBO0FBQUEsU0FWVHdEO0FBVVM7QUFJYixlQUFzQkMsTUFDcEJ2RCxRQUNBQyxTQUMwQjtBQUMxQixTQUFPLDRDQUFDLHdCQUFxQixRQUFnQixTQUFpQjtBQUNoRTs7OztBQWhMQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFDQSxJQUFBdUQ7QUFDQSxJQUFBQztBQUNBOzs7IiwKICAibmFtZXMiOiBbIlJhdGVMaW1pdE9wdGlvbnNNZW51IiwgInQwIiwgIiQiLCAiX2MiLCAib25Eb25lIiwgImNvbnRleHQiLCAic3ViQ29tbWFuZEpTWCIsICJzZXRTdWJDb21tYW5kSlNYIiwgInVzZVN0YXRlIiwgImNsYXVkZUFpTGltaXRzIiwgInVzZUNsYXVkZUFpTGltaXRzIiwgInQxIiwgIlN5bWJvbCIsICJmb3IiLCAiZ2V0U3Vic2NyaXB0aW9uVHlwZSIsICJzdWJzY3JpcHRpb25UeXBlIiwgInQyIiwgImdldFJhdGVMaW1pdFRpZXIiLCAicmF0ZUxpbWl0VGllciIsICJoYXNFeHRyYVVzYWdlRW5hYmxlZCIsICJnZXRPYXV0aEFjY291bnRJbmZvIiwgImlzTWF4IiwgImlzTWF4MjB4IiwgImlzVGVhbU9yRW50ZXJwcmlzZSIsICJidXlGaXJzdCIsICJnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRSIsICJ0MyIsICJiYjAiLCAiYWN0aW9uT3B0aW9ucyIsICJvdmVyYWdlRGlzYWJsZWRSZWFzb24iLCAib3ZlcmFnZVN0YXR1cyIsICJleHRyYVVzYWdlIiwgImlzRW5hYmxlZCIsICJoYXNCaWxsaW5nQWNjZXNzIiwgImhhc0NsYXVkZUFpQmlsbGluZ0FjY2VzcyIsICJuZWVkc1RvUmVxdWVzdEZyb21BZG1pbiIsICJpc09yZ1NwZW5kQ2FwRGVwbGV0ZWQiLCAiaXNPdmVyYWdlU3RhdGUiLCAibGFiZWwiLCAidDQiLCAidmFsdWUiLCAicHVzaCIsICJ1cGdyYWRlIiwgImNhbmNlbE9wdGlvbiIsICJ0NSIsICJvcHRpb25zIiwgImhhbmRsZUNhbmNlbCIsICJsb2dFdmVudCIsICJ1bmRlZmluZWQiLCAiZGlzcGxheSIsICJoYW5kbGVTZWxlY3QiLCAidXBncmFkZUNhbGwiLCAidGhlbiIsICJqc3giLCAiZXh0cmFVc2FnZUNhbGwiLCAianN4XzAiLCAidDYiLCAibGVuZ3RoIiwgInQ3IiwgImNhbGwiLCAiaW5pdF9leHRyYV91c2FnZSIsICJpbml0X3VwZ3JhZGUiXQp9Cg==
