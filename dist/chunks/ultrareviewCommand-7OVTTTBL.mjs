#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  fetchUtilization,
  init_usage
} from "./chunk-KQJZ6ZUD.mjs";
import {
  Select,
  checkRemoteAgentEligibility,
  formatPreconditionError,
  getRemoteTaskSessionUrl,
  init_RemoteAgentTask,
  init_select,
  init_teleport,
  registerRemoteAgentTask,
  teleportToRemote
} from "./chunk-5INIV6TQ.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-UPQJMBLU.mjs";
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
import {
  getOAuthHeaders,
  init_api,
  prepareApiRequest
} from "./chunk-ALBMKMIQ.mjs";
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
import {
  ThemedBox_default,
  ThemedText,
  c,
  init_ink,
  init_react_compiler_runtime
} from "./chunk-ZFJCSCYD.mjs";
import {
  init_react,
  react_default,
  useRef,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-H3V45RZC.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getFeatureValue_CACHED_MAY_BE_STALE,
  init_auth,
  init_growthbook,
  isClaudeAISubscriber,
  isEnterpriseSubscriber,
  isTeamSubscriber
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
import {
  init_analytics,
  logEvent
} from "./chunk-M5NTYAY2.mjs";
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
import "./chunk-FBLMX54P.mjs";
import {
  detectCurrentRepositoryWithHost,
  init_detectRepository
} from "./chunk-FOFMX5GB.mjs";
import {
  getDefaultBranch,
  gitExe,
  init_git
} from "./chunk-SF3TOBTZ.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-IVTTVOOG.mjs";
import "./chunk-LNQOFDTT.mjs";
import "./chunk-ZAYB3WZV.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import "./chunk-TZFTPSMG.mjs";
import "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-F5ODCUJD.mjs";
import {
  init_debug,
  logForDebugging
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

// src/services/api/ultrareviewQuota.ts
async function fetchUltrareviewQuota() {
  if (!isClaudeAISubscriber()) return null;
  try {
    const { accessToken, orgUUID } = await prepareApiRequest();
    const response = await axios_default.get(
      `${getOauthConfig().BASE_API_URL}/v1/ultrareview/quota`,
      {
        headers: {
          ...getOAuthHeaders(accessToken),
          "x-organization-uuid": orgUUID
        },
        timeout: 5e3
      }
    );
    return response.data;
  } catch (error) {
    logForDebugging(`fetchUltrareviewQuota failed: ${error}`);
    return null;
  }
}
var init_ultrareviewQuota = __esm({
  "src/services/api/ultrareviewQuota.ts"() {
    init_axios();
    init_oauth();
    init_auth();
    init_debug();
    init_api();
  }
});

// src/commands/review/reviewRemote.ts
function confirmOverage() {
  sessionOverageConfirmed = true;
}
async function checkOverageGate() {
  if (isTeamSubscriber() || isEnterpriseSubscriber()) {
    return { kind: "proceed", billingNote: "" };
  }
  const [quota, utilization] = await Promise.all([
    fetchUltrareviewQuota(),
    fetchUtilization().catch(() => null)
  ]);
  if (!quota) {
    return { kind: "proceed", billingNote: "" };
  }
  if (quota.reviews_remaining > 0) {
    return {
      kind: "proceed",
      billingNote: ` This is free ultrareview ${quota.reviews_used + 1} of ${quota.reviews_limit}.`
    };
  }
  if (!utilization) {
    return { kind: "proceed", billingNote: "" };
  }
  const extraUsage = utilization.extra_usage;
  if (!extraUsage?.is_enabled) {
    logEvent("tengu_review_overage_not_enabled", {});
    return { kind: "not-enabled" };
  }
  const monthlyLimit = extraUsage.monthly_limit;
  const usedCredits = extraUsage.used_credits ?? 0;
  const available = monthlyLimit === null || monthlyLimit === void 0 ? Infinity : monthlyLimit - usedCredits;
  if (available < 10) {
    logEvent("tengu_review_overage_low_balance", { available });
    return { kind: "low-balance", available };
  }
  if (!sessionOverageConfirmed) {
    logEvent("tengu_review_overage_dialog_shown", {});
    return { kind: "needs-confirm" };
  }
  return {
    kind: "proceed",
    billingNote: " This review bills as Extra Usage."
  };
}
async function launchRemoteReview(args, context, billingNote) {
  const eligibility = await checkRemoteAgentEligibility();
  if (!eligibility.eligible) {
    const blockers = eligibility.errors.filter(
      (e) => e.type !== "no_remote_environment"
    );
    if (blockers.length > 0) {
      logEvent("tengu_review_remote_precondition_failed", {
        precondition_errors: blockers.map((e) => e.type).join(
          ","
        )
      });
      const reasons = blockers.map(formatPreconditionError).join("\n");
      return [
        {
          type: "text",
          text: `Ultrareview cannot launch:
${reasons}`
        }
      ];
    }
  }
  const resolvedBillingNote = billingNote ?? "";
  const prNumber = args.trim();
  const isPrNumber = /^\d+$/.test(prNumber);
  const CODE_REVIEW_ENV_ID = "env_011111111111111111111113";
  const raw = getFeatureValue_CACHED_MAY_BE_STALE("tengu_review_bughunter_config", null);
  const posInt = (v, fallback, max) => {
    if (typeof v !== "number" || !Number.isFinite(v)) return fallback;
    const n = Math.floor(v);
    if (n <= 0) return fallback;
    return max !== void 0 && n > max ? fallback : n;
  };
  const commonEnvVars = {
    BUGHUNTER_DRY_RUN: "1",
    BUGHUNTER_FLEET_SIZE: String(posInt(raw?.fleet_size, 5, 20)),
    BUGHUNTER_MAX_DURATION: String(posInt(raw?.max_duration_minutes, 10, 25)),
    BUGHUNTER_AGENT_TIMEOUT: String(
      posInt(raw?.agent_timeout_seconds, 600, 1800)
    ),
    BUGHUNTER_TOTAL_WALLCLOCK: String(
      posInt(raw?.total_wallclock_minutes, 22, 27)
    ),
    ...process.env.BUGHUNTER_DEV_BUNDLE_B64 && {
      BUGHUNTER_DEV_BUNDLE_B64: process.env.BUGHUNTER_DEV_BUNDLE_B64
    }
  };
  let session;
  let command;
  let target;
  if (isPrNumber) {
    const repo = await detectCurrentRepositoryWithHost();
    if (!repo || repo.host !== "github.com") {
      logEvent("tengu_review_remote_precondition_failed", {});
      return null;
    }
    session = await teleportToRemote({
      initialMessage: null,
      description: `ultrareview: ${repo.owner}/${repo.name}#${prNumber}`,
      signal: context.abortController.signal,
      branchName: `refs/pull/${prNumber}/head`,
      environmentId: CODE_REVIEW_ENV_ID,
      environmentVariables: {
        BUGHUNTER_PR_NUMBER: prNumber,
        BUGHUNTER_REPOSITORY: `${repo.owner}/${repo.name}`,
        ...commonEnvVars
      }
    });
    command = `/ultrareview ${prNumber}`;
    target = `${repo.owner}/${repo.name}#${prNumber}`;
  } else {
    const baseBranch = await getDefaultBranch() || "main";
    const { stdout: mbOut, code: mbCode } = await execFileNoThrow(
      gitExe(),
      ["merge-base", baseBranch, "HEAD"],
      { preserveOutputOnError: false }
    );
    const mergeBaseSha = mbOut.trim();
    if (mbCode !== 0 || !mergeBaseSha) {
      logEvent("tengu_review_remote_precondition_failed", {});
      return [
        {
          type: "text",
          text: `Could not find merge-base with ${baseBranch}. Make sure you're in a git repo with a ${baseBranch} branch.`
        }
      ];
    }
    const { stdout: diffStat, code: diffCode } = await execFileNoThrow(
      gitExe(),
      ["diff", "--shortstat", mergeBaseSha],
      { preserveOutputOnError: false }
    );
    if (diffCode === 0 && !diffStat.trim()) {
      logEvent("tengu_review_remote_precondition_failed", {});
      return [
        {
          type: "text",
          text: `No changes against the ${baseBranch} fork point. Make some commits or stage files first.`
        }
      ];
    }
    session = await teleportToRemote({
      initialMessage: null,
      description: `ultrareview: ${baseBranch}`,
      signal: context.abortController.signal,
      useBundle: true,
      environmentId: CODE_REVIEW_ENV_ID,
      environmentVariables: {
        BUGHUNTER_BASE_BRANCH: mergeBaseSha,
        ...commonEnvVars
      }
    });
    if (!session) {
      logEvent("tengu_review_remote_teleport_failed", {});
      return [
        {
          type: "text",
          text: "Repo is too large. Push a PR and use `/ultrareview <PR#>` instead."
        }
      ];
    }
    command = "/ultrareview";
    target = baseBranch;
  }
  if (!session) {
    logEvent("tengu_review_remote_teleport_failed", {});
    return null;
  }
  registerRemoteAgentTask({
    remoteTaskType: "ultrareview",
    session,
    command,
    context,
    isRemoteReview: true
  });
  logEvent("tengu_review_remote_launched", {});
  const sessionUrl = getRemoteTaskSessionUrl(session.id);
  return [
    {
      type: "text",
      text: `Ultrareview launched for ${target} (~10\u201320 min, runs in the cloud). Track: ${sessionUrl}${resolvedBillingNote} Findings arrive via task-notification. Briefly acknowledge the launch to the user without repeating the target or URL \u2014 both are already visible in the tool output above.`
    }
  ];
}
var sessionOverageConfirmed;
var init_reviewRemote = __esm({
  "src/commands/review/reviewRemote.ts"() {
    init_growthbook();
    init_analytics();
    init_ultrareviewQuota();
    init_usage();
    init_RemoteAgentTask();
    init_auth();
    init_detectRepository();
    init_execFileNoThrow();
    init_git();
    init_teleport();
    sessionOverageConfirmed = false;
  }
});

// src/commands/review/UltrareviewOverageDialog.tsx
function UltrareviewOverageDialog(t0) {
  const $ = c(15);
  const {
    onProceed,
    onCancel
  } = t0;
  const [isLaunching, setIsLaunching] = useState(false);
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = new AbortController();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const abortControllerRef = useRef(t1);
  let t2;
  if ($[1] !== onCancel || $[2] !== onProceed) {
    t2 = (value) => {
      if (value === "proceed") {
        setIsLaunching(true);
        onProceed(abortControllerRef.current.signal).catch(() => setIsLaunching(false));
      } else {
        onCancel();
      }
    };
    $[1] = onCancel;
    $[2] = onProceed;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const handleSelect = t2;
  let t3;
  if ($[4] !== onCancel) {
    t3 = () => {
      abortControllerRef.current.abort();
      onCancel();
    };
    $[4] = onCancel;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const handleCancel = t3;
  let t4;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = [{
      label: "Proceed with Extra Usage billing",
      value: "proceed"
    }, {
      label: "Cancel",
      value: "cancel"
    }];
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  const options = t4;
  let t5;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Your free ultrareviews for this organization are used. Further reviews bill as Extra Usage (pay-per-use).");
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== handleCancel || $[9] !== handleSelect || $[10] !== isLaunching) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, t5, isLaunching ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "background" }, "Launching\u2026") : /* @__PURE__ */ react_default.createElement(Select, { options, onChange: handleSelect, onCancel: handleCancel }));
    $[8] = handleCancel;
    $[9] = handleSelect;
    $[10] = isLaunching;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] !== handleCancel || $[13] !== t6) {
    t7 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Ultrareview billing", onCancel: handleCancel, color: "background" }, t6);
    $[12] = handleCancel;
    $[13] = t6;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  return t7;
}
var init_UltrareviewOverageDialog = __esm({
  "src/commands/review/UltrareviewOverageDialog.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_select();
    init_Dialog();
    init_ink();
  }
});

// src/commands/review/ultrareviewCommand.tsx
function contentBlocksToString(blocks) {
  return blocks.map((b) => b.type === "text" ? b.text : "").filter(Boolean).join("\n");
}
async function launchAndDone(args, context, onDone, billingNote, signal) {
  const result = await launchRemoteReview(args, context, billingNote);
  if (signal?.aborted) return;
  if (result) {
    onDone(contentBlocksToString(result), {
      shouldQuery: true
    });
  } else {
    onDone("Ultrareview failed to launch the remote session. Check that this is a GitHub repo and try again.", {
      display: "system"
    });
  }
}
var call;
var init_ultrareviewCommand = __esm({
  "src/commands/review/ultrareviewCommand.tsx"() {
    init_react();
    init_reviewRemote();
    init_UltrareviewOverageDialog();
    call = async (onDone, context, args) => {
      const gate = await checkOverageGate();
      if (gate.kind === "not-enabled") {
        onDone("Free ultrareviews used. Enable Extra Usage at https://claude.ai/settings/billing to continue.", {
          display: "system"
        });
        return null;
      }
      if (gate.kind === "low-balance") {
        onDone(`Balance too low to launch ultrareview ($${gate.available.toFixed(2)} available, $10 minimum). Top up at https://claude.ai/settings/billing`, {
          display: "system"
        });
        return null;
      }
      if (gate.kind === "needs-confirm") {
        return /* @__PURE__ */ react_default.createElement(UltrareviewOverageDialog, { onProceed: async (signal) => {
          await launchAndDone(args, context, onDone, " This review bills as Extra Usage.", signal);
          if (!signal.aborted) confirmOverage();
        }, onCancel: () => onDone("Ultrareview cancelled.", {
          display: "system"
        }) });
      }
      await launchAndDone(args, context, onDone, gate.billingNote);
      return null;
    };
  }
});
init_ultrareviewCommand();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZpY2VzL2FwaS91bHRyYXJldmlld1F1b3RhLnRzIiwgIi4uLy4uL3NyYy9jb21tYW5kcy9yZXZpZXcvcmV2aWV3UmVtb3RlLnRzIiwgIi4uLy4uL3NyYy9jb21tYW5kcy9yZXZpZXcvVWx0cmFyZXZpZXdPdmVyYWdlRGlhbG9nLnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvcmV2aWV3L3VsdHJhcmV2aWV3Q29tbWFuZC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IGdldE9hdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL29hdXRoLmpzJ1xuaW1wb3J0IHsgaXNDbGF1ZGVBSVN1YnNjcmliZXIgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgbG9nRm9yRGVidWdnaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnXG5pbXBvcnQgeyBnZXRPQXV0aEhlYWRlcnMsIHByZXBhcmVBcGlSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdGVsZXBvcnQvYXBpLmpzJ1xuXG5leHBvcnQgdHlwZSBVbHRyYXJldmlld1F1b3RhUmVzcG9uc2UgPSB7XG4gIHJldmlld3NfdXNlZDogbnVtYmVyXG4gIHJldmlld3NfbGltaXQ6IG51bWJlclxuICByZXZpZXdzX3JlbWFpbmluZzogbnVtYmVyXG4gIGlzX292ZXJhZ2U6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBQZWVrIHRoZSB1bHRyYXJldmlldyBxdW90YSBmb3IgZGlzcGxheSBhbmQgbnVkZ2UgZGVjaXNpb25zLiBDb25zdW1lXG4gKiBoYXBwZW5zIHNlcnZlci1zaWRlIGF0IHNlc3Npb24gY3JlYXRpb24uIE51bGwgd2hlbiBub3QgYSBzdWJzY3JpYmVyIG9yXG4gKiB0aGUgZW5kcG9pbnQgZXJyb3JzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVbHRyYXJldmlld1F1b3RhKCk6IFByb21pc2U8VWx0cmFyZXZpZXdRdW90YVJlc3BvbnNlIHwgbnVsbD4ge1xuICBpZiAoIWlzQ2xhdWRlQUlTdWJzY3JpYmVyKCkpIHJldHVybiBudWxsXG4gIHRyeSB7XG4gICAgY29uc3QgeyBhY2Nlc3NUb2tlbiwgb3JnVVVJRCB9ID0gYXdhaXQgcHJlcGFyZUFwaVJlcXVlc3QoKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0PFVsdHJhcmV2aWV3UXVvdGFSZXNwb25zZT4oXG4gICAgICBgJHtnZXRPYXV0aENvbmZpZygpLkJBU0VfQVBJX1VSTH0vdjEvdWx0cmFyZXZpZXcvcXVvdGFgLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgLi4uZ2V0T0F1dGhIZWFkZXJzKGFjY2Vzc1Rva2VuKSxcbiAgICAgICAgICAneC1vcmdhbml6YXRpb24tdXVpZCc6IG9yZ1VVSUQsXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgICB9LFxuICAgIClcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ0ZvckRlYnVnZ2luZyhgZmV0Y2hVbHRyYXJldmlld1F1b3RhIGZhaWxlZDogJHtlcnJvcn1gKVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsICIvKipcbiAqIFRlbGVwb3J0ZWQgL3VsdHJhcmV2aWV3IGV4ZWN1dGlvbi4gQ3JlYXRlcyBhIENDUiBzZXNzaW9uIHdpdGggdGhlIGN1cnJlbnQgcmVwbyxcbiAqIHNlbmRzIHRoZSByZXZpZXcgcHJvbXB0IGFzIHRoZSBpbml0aWFsIG1lc3NhZ2UsIGFuZCByZWdpc3RlcnMgYVxuICogUmVtb3RlQWdlbnRUYXNrIHNvIHRoZSBwb2xsaW5nIGxvb3AgcGlwZXMgcmVzdWx0cyBiYWNrIGludG8gdGhlIGxvY2FsXG4gKiBzZXNzaW9uIHZpYSB0YXNrLW5vdGlmaWNhdGlvbi4gTWlycm9ycyB0aGUgL3VsdHJhcGxhbiBcdTIxOTIgQ0NSIGZsb3cuXG4gKlxuICogVE9ETygjMjIwNTEpOiBwYXNzIHVzZUJ1bmRsZU1vZGUgb25jZSBsYW5kZWQgc28gbG9jYWwtb25seSAvIHVuY29tbWl0dGVkXG4gKiByZXBvIHN0YXRlIGlzIGNhcHR1cmVkLiBUaGUgR2l0SHViLWNsb25lIHBhdGggKGN1cnJlbnQpIG9ubHkgd29ya3MgZm9yXG4gKiBwdXNoZWQgYnJhbmNoZXMgb24gcmVwb3Mgd2l0aCB0aGUgQ2xhdWRlIEdpdEh1YiBhcHAgaW5zdGFsbGVkLlxuICovXG5cbmltcG9ydCB0eXBlIHsgQ29udGVudEJsb2NrUGFyYW0gfSBmcm9tICdAYW50aHJvcGljLWFpL3Nkay9yZXNvdXJjZXMvbWVzc2FnZXMuanMnXG5pbXBvcnQgeyBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9ncm93dGhib29rLmpzJ1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgZmV0Y2hVbHRyYXJldmlld1F1b3RhIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpL3VsdHJhcmV2aWV3UXVvdGEuanMnXG5pbXBvcnQgeyBmZXRjaFV0aWxpemF0aW9uIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpL3VzYWdlLmpzJ1xuaW1wb3J0IHR5cGUgeyBUb29sVXNlQ29udGV4dCB9IGZyb20gJy4uLy4uL1Rvb2wuanMnXG5pbXBvcnQge1xuICBjaGVja1JlbW90ZUFnZW50RWxpZ2liaWxpdHksXG4gIGZvcm1hdFByZWNvbmRpdGlvbkVycm9yLFxuICBnZXRSZW1vdGVUYXNrU2Vzc2lvblVybCxcbiAgcmVnaXN0ZXJSZW1vdGVBZ2VudFRhc2ssXG59IGZyb20gJy4uLy4uL3Rhc2tzL1JlbW90ZUFnZW50VGFzay9SZW1vdGVBZ2VudFRhc2suanMnXG5pbXBvcnQgeyBpc0VudGVycHJpc2VTdWJzY3JpYmVyLCBpc1RlYW1TdWJzY3JpYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC5qcydcbmltcG9ydCB7IGRldGVjdEN1cnJlbnRSZXBvc2l0b3J5V2l0aEhvc3QgfSBmcm9tICcuLi8uLi91dGlscy9kZXRlY3RSZXBvc2l0b3J5LmpzJ1xuaW1wb3J0IHsgZXhlY0ZpbGVOb1Rocm93IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXhlY0ZpbGVOb1Rocm93LmpzJ1xuaW1wb3J0IHsgZ2V0RGVmYXVsdEJyYW5jaCwgZ2l0RXhlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2l0LmpzJ1xuaW1wb3J0IHsgdGVsZXBvcnRUb1JlbW90ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3RlbGVwb3J0LmpzJ1xuXG4vLyBPbmUtdGltZSBzZXNzaW9uIGZsYWc6IG9uY2UgdGhlIHVzZXIgY29uZmlybXMgb3ZlcmFnZSBiaWxsaW5nIHZpYSB0aGVcbi8vIGRpYWxvZywgYWxsIHN1YnNlcXVlbnQgL3VsdHJhcmV2aWV3IGludm9jYXRpb25zIGluIHRoaXMgc2Vzc2lvbiBwcm9jZWVkXG4vLyB3aXRob3V0IHJlLXByb21wdGluZy5cbmxldCBzZXNzaW9uT3ZlcmFnZUNvbmZpcm1lZCA9IGZhbHNlXG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtT3ZlcmFnZSgpOiB2b2lkIHtcbiAgc2Vzc2lvbk92ZXJhZ2VDb25maXJtZWQgPSB0cnVlXG59XG5cbmV4cG9ydCB0eXBlIE92ZXJhZ2VHYXRlID1cbiAgfCB7IGtpbmQ6ICdwcm9jZWVkJzsgYmlsbGluZ05vdGU6IHN0cmluZyB9XG4gIHwgeyBraW5kOiAnbm90LWVuYWJsZWQnIH1cbiAgfCB7IGtpbmQ6ICdsb3ctYmFsYW5jZSc7IGF2YWlsYWJsZTogbnVtYmVyIH1cbiAgfCB7IGtpbmQ6ICduZWVkcy1jb25maXJtJyB9XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHVzZXIgY2FuIGxhdW5jaCBhbiB1bHRyYXJldmlldyBhbmQgdW5kZXIgd2hhdFxuICogYmlsbGluZyB0ZXJtcy4gRmV0Y2hlcyBxdW90YSBhbmQgdXRpbGl6YXRpb24gaW4gcGFyYWxsZWwuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja092ZXJhZ2VHYXRlKCk6IFByb21pc2U8T3ZlcmFnZUdhdGU+IHtcbiAgLy8gVGVhbSBhbmQgRW50ZXJwcmlzZSBwbGFucyBpbmNsdWRlIHVsdHJhcmV2aWV3IFx1MjAxNCBubyBmcmVlLXJldmlldyBxdW90YVxuICAvLyBvciBFeHRyYSBVc2FnZSBkaWFsb2cuIFRoZSBxdW90YSBlbmRwb2ludCBpcyBzY29wZWQgdG8gY29uc3VtZXIgcGxhbnNcbiAgLy8gKHByby9tYXgpOyBoaXR0aW5nIGl0IG9uIHRlYW0vZW50IHdvdWxkIHN1cmZhY2UgYSBjb25mdXNpbmcgZGlhbG9nLlxuICBpZiAoaXNUZWFtU3Vic2NyaWJlcigpIHx8IGlzRW50ZXJwcmlzZVN1YnNjcmliZXIoKSkge1xuICAgIHJldHVybiB7IGtpbmQ6ICdwcm9jZWVkJywgYmlsbGluZ05vdGU6ICcnIH1cbiAgfVxuXG4gIGNvbnN0IFtxdW90YSwgdXRpbGl6YXRpb25dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoVWx0cmFyZXZpZXdRdW90YSgpLFxuICAgIGZldGNoVXRpbGl6YXRpb24oKS5jYXRjaCgoKSA9PiBudWxsKSxcbiAgXSlcblxuICAvLyBObyBxdW90YSBpbmZvIChub24tc3Vic2NyaWJlciBvciBlbmRwb2ludCBkb3duKSBcdTIwMTQgbGV0IGl0IHRocm91Z2gsXG4gIC8vIHNlcnZlci1zaWRlIGJpbGxpbmcgd2lsbCBoYW5kbGUgaXQuXG4gIGlmICghcXVvdGEpIHtcbiAgICByZXR1cm4geyBraW5kOiAncHJvY2VlZCcsIGJpbGxpbmdOb3RlOiAnJyB9XG4gIH1cblxuICBpZiAocXVvdGEucmV2aWV3c19yZW1haW5pbmcgPiAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6ICdwcm9jZWVkJyxcbiAgICAgIGJpbGxpbmdOb3RlOiBgIFRoaXMgaXMgZnJlZSB1bHRyYXJldmlldyAke3F1b3RhLnJldmlld3NfdXNlZCArIDF9IG9mICR7cXVvdGEucmV2aWV3c19saW1pdH0uYCxcbiAgICB9XG4gIH1cblxuICAvLyBVdGlsaXphdGlvbiBmZXRjaCBmYWlsZWQgKHRyYW5zaWVudCBuZXR3b3JrIGVycm9yLCB0aW1lb3V0LCBldGMuKSBcdTIwMTRcbiAgLy8gbGV0IGl0IHRocm91Z2gsIHNhbWUgcmF0aW9uYWxlIGFzIHRoZSBxdW90YSBmYWxsYmFjayBhYm92ZS5cbiAgaWYgKCF1dGlsaXphdGlvbikge1xuICAgIHJldHVybiB7IGtpbmQ6ICdwcm9jZWVkJywgYmlsbGluZ05vdGU6ICcnIH1cbiAgfVxuXG4gIC8vIEZyZWUgcmV2aWV3cyBleGhhdXN0ZWQgXHUyMDE0IGNoZWNrIEV4dHJhIFVzYWdlIHNldHVwLlxuICBjb25zdCBleHRyYVVzYWdlID0gdXRpbGl6YXRpb24uZXh0cmFfdXNhZ2VcbiAgaWYgKCFleHRyYVVzYWdlPy5pc19lbmFibGVkKSB7XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X3Jldmlld19vdmVyYWdlX25vdF9lbmFibGVkJywge30pXG4gICAgcmV0dXJuIHsga2luZDogJ25vdC1lbmFibGVkJyB9XG4gIH1cblxuICAvLyBDaGVjayBhdmFpbGFibGUgYmFsYW5jZSAobnVsbCBtb250aGx5X2xpbWl0ID0gdW5saW1pdGVkKS5cbiAgY29uc3QgbW9udGhseUxpbWl0ID0gZXh0cmFVc2FnZS5tb250aGx5X2xpbWl0XG4gIGNvbnN0IHVzZWRDcmVkaXRzID0gZXh0cmFVc2FnZS51c2VkX2NyZWRpdHMgPz8gMFxuICBjb25zdCBhdmFpbGFibGUgPVxuICAgIG1vbnRobHlMaW1pdCA9PT0gbnVsbCB8fCBtb250aGx5TGltaXQgPT09IHVuZGVmaW5lZFxuICAgICAgPyBJbmZpbml0eVxuICAgICAgOiBtb250aGx5TGltaXQgLSB1c2VkQ3JlZGl0c1xuXG4gIGlmIChhdmFpbGFibGUgPCAxMCkge1xuICAgIGxvZ0V2ZW50KCd0ZW5ndV9yZXZpZXdfb3ZlcmFnZV9sb3dfYmFsYW5jZScsIHsgYXZhaWxhYmxlIH0pXG4gICAgcmV0dXJuIHsga2luZDogJ2xvdy1iYWxhbmNlJywgYXZhaWxhYmxlIH1cbiAgfVxuXG4gIGlmICghc2Vzc2lvbk92ZXJhZ2VDb25maXJtZWQpIHtcbiAgICBsb2dFdmVudCgndGVuZ3VfcmV2aWV3X292ZXJhZ2VfZGlhbG9nX3Nob3duJywge30pXG4gICAgcmV0dXJuIHsga2luZDogJ25lZWRzLWNvbmZpcm0nIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAga2luZDogJ3Byb2NlZWQnLFxuICAgIGJpbGxpbmdOb3RlOiAnIFRoaXMgcmV2aWV3IGJpbGxzIGFzIEV4dHJhIFVzYWdlLicsXG4gIH1cbn1cblxuLyoqXG4gKiBMYXVuY2ggYSB0ZWxlcG9ydGVkIHJldmlldyBzZXNzaW9uLiBSZXR1cm5zIENvbnRlbnRCbG9ja1BhcmFtW10gZGVzY3JpYmluZ1xuICogdGhlIGxhdW5jaCBvdXRjb21lIGZvciBpbmplY3Rpb24gaW50byB0aGUgbG9jYWwgY29udmVyc2F0aW9uIChtb2RlbCBpcyB0aGVuXG4gKiBxdWVyaWVkIHdpdGggdGhpcyBjb250ZW50LCBzbyBpdCBjYW4gbmFycmF0ZSB0aGUgbGF1bmNoIHRvIHRoZSB1c2VyKS5cbiAqXG4gKiBSZXR1cm5zIENvbnRlbnRCbG9ja1BhcmFtW10gd2l0aCB1c2VyLWZhY2luZyBlcnJvciBtZXNzYWdlcyBvbiByZWNvdmVyYWJsZVxuICogZmFpbHVyZXMgKG1pc3NpbmcgbWVyZ2UtYmFzZSwgZW1wdHkgZGlmZiwgYnVuZGxlIHRvbyBsYXJnZSksIG9yIG51bGwgb25cbiAqIG90aGVyIGZhaWx1cmVzIHNvIHRoZSBjYWxsZXIgZmFsbHMgdGhyb3VnaCB0byB0aGUgbG9jYWwtcmV2aWV3IHByb21wdC5cbiAqIFJlYXNvbiBpcyBjYXB0dXJlZCBpbiBhbmFseXRpY3MuXG4gKlxuICogQ2FsbGVyIG11c3QgcnVuIGNoZWNrT3ZlcmFnZUdhdGUoKSBCRUZPUkUgY2FsbGluZyB0aGlzIGZ1bmN0aW9uXG4gKiAodWx0cmFyZXZpZXdDb21tYW5kLnRzeCBoYW5kbGVzIHRoZSBkaWFsb2cpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGF1bmNoUmVtb3RlUmV2aWV3KFxuICBhcmdzOiBzdHJpbmcsXG4gIGNvbnRleHQ6IFRvb2xVc2VDb250ZXh0LFxuICBiaWxsaW5nTm90ZT86IHN0cmluZyxcbik6IFByb21pc2U8Q29udGVudEJsb2NrUGFyYW1bXSB8IG51bGw+IHtcbiAgY29uc3QgZWxpZ2liaWxpdHkgPSBhd2FpdCBjaGVja1JlbW90ZUFnZW50RWxpZ2liaWxpdHkoKVxuICAvLyBTeW50aGV0aWMgREVGQVVMVF9DT0RFX1JFVklFV19FTlZJUk9OTUVOVF9JRCB3b3JrcyB3aXRob3V0IHBlci1vcmcgQ0NSXG4gIC8vIHNldHVwLCBzbyBub19yZW1vdGVfZW52aXJvbm1lbnQgaXNuJ3QgYSBibG9ja2VyLiBTZXJ2ZXItc2lkZSBxdW90YVxuICAvLyBjb25zdW1lIGF0IHNlc3Npb24gY3JlYXRpb24gcm91dGVzIGJpbGxpbmc6IGZpcnN0IE4gemVyby1yYXRlLCB0aGVuXG4gIC8vIGFudGhyb3BpYzpjY2NyIG9yZy1zZXJ2aWNlLWtleSAob3ZlcmFnZS1vbmx5KS5cbiAgaWYgKCFlbGlnaWJpbGl0eS5lbGlnaWJsZSkge1xuICAgIGNvbnN0IGJsb2NrZXJzID0gZWxpZ2liaWxpdHkuZXJyb3JzLmZpbHRlcihcbiAgICAgIGUgPT4gZS50eXBlICE9PSAnbm9fcmVtb3RlX2Vudmlyb25tZW50JyxcbiAgICApXG4gICAgaWYgKGJsb2NrZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9yZXZpZXdfcmVtb3RlX3ByZWNvbmRpdGlvbl9mYWlsZWQnLCB7XG4gICAgICAgIHByZWNvbmRpdGlvbl9lcnJvcnM6IGJsb2NrZXJzXG4gICAgICAgICAgLm1hcChlID0+IGUudHlwZSlcbiAgICAgICAgICAuam9pbihcbiAgICAgICAgICAgICcsJyxcbiAgICAgICAgICApIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICB9KVxuICAgICAgY29uc3QgcmVhc29ucyA9IGJsb2NrZXJzLm1hcChmb3JtYXRQcmVjb25kaXRpb25FcnJvcikuam9pbignXFxuJylcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgdGV4dDogYFVsdHJhcmV2aWV3IGNhbm5vdCBsYXVuY2g6XFxuJHtyZWFzb25zfWAsXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVzb2x2ZWRCaWxsaW5nTm90ZSA9IGJpbGxpbmdOb3RlID8/ICcnXG5cbiAgY29uc3QgcHJOdW1iZXIgPSBhcmdzLnRyaW0oKVxuICBjb25zdCBpc1ByTnVtYmVyID0gL15cXGQrJC8udGVzdChwck51bWJlcilcbiAgLy8gU3ludGhldGljIGNvZGVfcmV2aWV3IGVudi4gR28gdGFnZ2VkaWQuRnJvbVVVSUQoVGFnRW52aXJvbm1lbnQsXG4gIC8vIFVVSUR7Li4uLDB4MDJ9KSBlbmNvZGVzIHdpdGggdmVyc2lvbiBwcmVmaXggJzAxJyBcdTIwMTQgTk9UIFB5dGhvbidzXG4gIC8vIGxlZ2FjeSB0YWdnZWRfaWQoKSBmb3JtYXQuIFZlcmlmaWVkIGluIHByb2QuXG4gIGNvbnN0IENPREVfUkVWSUVXX0VOVl9JRCA9ICdlbnZfMDExMTExMTExMTExMTExMTExMTExMTEzJ1xuICAvLyBMaXRlLXJldmlldyBieXBhc3NlcyBidWdodW50ZXIuZ28gZW50aXJlbHksIHNvIGl0IGRvZXNuJ3Qgc2VlIHRoZVxuICAvLyB3ZWJob29rJ3MgYnVnX2h1bnRlcl9jb25maWcgKGRpZmZlcmVudCBHQiBwcm9qZWN0KS4gVGhlc2UgZW52IHZhcnMgYXJlXG4gIC8vIHRoZSBvbmx5IHR1bmluZyBzdXJmYWNlIFx1MjAxNCB3aXRob3V0IHRoZW0sIHJ1bl9odW50LnNoJ3MgYmFzaCBkZWZhdWx0c1xuICAvLyBhcHBseSAoNjBtaW4sIDEyMHMgYWdlbnQgdGltZW91dCksIGFuZCAxMjBzIGtpbGxzIHZlcmlmaWVycyBtaWQtcnVuXG4gIC8vIHdoaWNoIGNhdXNlcyBpbmZpbml0ZSByZXNwYXduLlxuICAvL1xuICAvLyB0b3RhbF93YWxsY2xvY2sgbXVzdCBzdGF5IGJlbG93IFJlbW90ZUFnZW50VGFzaydzIDMwbWluIHBvbGwgdGltZW91dFxuICAvLyB3aXRoIGhlYWRyb29tIGZvciBmaW5hbGl6YXRpb24gKH4zbWluIHN5bnRoZXNpcykuIFBlci1maWVsZCBndWFyZHNcbiAgLy8gbWF0Y2ggYXV0b0RyZWFtLnRzIFx1MjAxNCBHQiBjYWNoZSBjYW4gcmV0dXJuIHN0YWxlIHdyb25nLXR5cGUgdmFsdWVzLlxuICBjb25zdCByYXcgPSBnZXRGZWF0dXJlVmFsdWVfQ0FDSEVEX01BWV9CRV9TVEFMRTxSZWNvcmQ8XG4gICAgc3RyaW5nLFxuICAgIHVua25vd25cbiAgPiB8IG51bGw+KCd0ZW5ndV9yZXZpZXdfYnVnaHVudGVyX2NvbmZpZycsIG51bGwpXG4gIGNvbnN0IHBvc0ludCA9ICh2OiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyLCBtYXg/OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIGlmICh0eXBlb2YgdiAhPT0gJ251bWJlcicgfHwgIU51bWJlci5pc0Zpbml0ZSh2KSkgcmV0dXJuIGZhbGxiYWNrXG4gICAgY29uc3QgbiA9IE1hdGguZmxvb3IodilcbiAgICBpZiAobiA8PSAwKSByZXR1cm4gZmFsbGJhY2tcbiAgICByZXR1cm4gbWF4ICE9PSB1bmRlZmluZWQgJiYgbiA+IG1heCA/IGZhbGxiYWNrIDogblxuICB9XG4gIC8vIFVwcGVyIGJvdW5kczogMjdtaW4gb24gd2FsbGNsb2NrIGxlYXZlcyB+M21pbiBmb3IgZmluYWxpemF0aW9uIHVuZGVyXG4gIC8vIFJlbW90ZUFnZW50VGFzaydzIDMwbWluIHBvbGwgdGltZW91dC4gSWYgR0IgaXMgc2V0IGFib3ZlIHRoYXQsIHRoZVxuICAvLyBoYW5nIHdlJ3JlIGZpeGluZyBjb21lcyBiYWNrIFx1MjAxNCBmYWxsIHRvIHRoZSBzYWZlIGRlZmF1bHQgaW5zdGVhZC5cbiAgY29uc3QgY29tbW9uRW52VmFycyA9IHtcbiAgICBCVUdIVU5URVJfRFJZX1JVTjogJzEnLFxuICAgIEJVR0hVTlRFUl9GTEVFVF9TSVpFOiBTdHJpbmcocG9zSW50KHJhdz8uZmxlZXRfc2l6ZSwgNSwgMjApKSxcbiAgICBCVUdIVU5URVJfTUFYX0RVUkFUSU9OOiBTdHJpbmcocG9zSW50KHJhdz8ubWF4X2R1cmF0aW9uX21pbnV0ZXMsIDEwLCAyNSkpLFxuICAgIEJVR0hVTlRFUl9BR0VOVF9USU1FT1VUOiBTdHJpbmcoXG4gICAgICBwb3NJbnQocmF3Py5hZ2VudF90aW1lb3V0X3NlY29uZHMsIDYwMCwgMTgwMCksXG4gICAgKSxcbiAgICBCVUdIVU5URVJfVE9UQUxfV0FMTENMT0NLOiBTdHJpbmcoXG4gICAgICBwb3NJbnQocmF3Py50b3RhbF93YWxsY2xvY2tfbWludXRlcywgMjIsIDI3KSxcbiAgICApLFxuICAgIC4uLihwcm9jZXNzLmVudi5CVUdIVU5URVJfREVWX0JVTkRMRV9CNjQgJiYge1xuICAgICAgQlVHSFVOVEVSX0RFVl9CVU5ETEVfQjY0OiBwcm9jZXNzLmVudi5CVUdIVU5URVJfREVWX0JVTkRMRV9CNjQsXG4gICAgfSksXG4gIH1cblxuICBsZXQgc2Vzc2lvblxuICBsZXQgY29tbWFuZFxuICBsZXQgdGFyZ2V0XG4gIGlmIChpc1ByTnVtYmVyKSB7XG4gICAgLy8gUFIgbW9kZTogcmVmcy9wdWxsL04vaGVhZCB2aWEgZ2l0aHViLmNvbS4gT3JjaGVzdHJhdG9yIC0tcHIgTi5cbiAgICBjb25zdCByZXBvID0gYXdhaXQgZGV0ZWN0Q3VycmVudFJlcG9zaXRvcnlXaXRoSG9zdCgpXG4gICAgaWYgKCFyZXBvIHx8IHJlcG8uaG9zdCAhPT0gJ2dpdGh1Yi5jb20nKSB7XG4gICAgICBsb2dFdmVudCgndGVuZ3VfcmV2aWV3X3JlbW90ZV9wcmVjb25kaXRpb25fZmFpbGVkJywge30pXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBzZXNzaW9uID0gYXdhaXQgdGVsZXBvcnRUb1JlbW90ZSh7XG4gICAgICBpbml0aWFsTWVzc2FnZTogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBgdWx0cmFyZXZpZXc6ICR7cmVwby5vd25lcn0vJHtyZXBvLm5hbWV9IyR7cHJOdW1iZXJ9YCxcbiAgICAgIHNpZ25hbDogY29udGV4dC5hYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgYnJhbmNoTmFtZTogYHJlZnMvcHVsbC8ke3ByTnVtYmVyfS9oZWFkYCxcbiAgICAgIGVudmlyb25tZW50SWQ6IENPREVfUkVWSUVXX0VOVl9JRCxcbiAgICAgIGVudmlyb25tZW50VmFyaWFibGVzOiB7XG4gICAgICAgIEJVR0hVTlRFUl9QUl9OVU1CRVI6IHByTnVtYmVyLFxuICAgICAgICBCVUdIVU5URVJfUkVQT1NJVE9SWTogYCR7cmVwby5vd25lcn0vJHtyZXBvLm5hbWV9YCxcbiAgICAgICAgLi4uY29tbW9uRW52VmFycyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICBjb21tYW5kID0gYC91bHRyYXJldmlldyAke3ByTnVtYmVyfWBcbiAgICB0YXJnZXQgPSBgJHtyZXBvLm93bmVyfS8ke3JlcG8ubmFtZX0jJHtwck51bWJlcn1gXG4gIH0gZWxzZSB7XG4gICAgLy8gQnJhbmNoIG1vZGU6IGJ1bmRsZSB0aGUgd29ya2luZyB0cmVlLCBvcmNoZXN0cmF0b3IgZGlmZnMgYWdhaW5zdFxuICAgIC8vIHRoZSBmb3JrIHBvaW50LiBObyBQUiwgbm8gZXhpc3RpbmcgY29tbWVudHMsIG5vIGRlZHVwLlxuICAgIGNvbnN0IGJhc2VCcmFuY2ggPSAoYXdhaXQgZ2V0RGVmYXVsdEJyYW5jaCgpKSB8fCAnbWFpbidcbiAgICAvLyBFbnYtbWFuYWdlcidzIGBnaXQgcmVtb3RlIHJlbW92ZSBvcmlnaW5gIGFmdGVyIGJ1bmRsZS1jbG9uZVxuICAgIC8vIGRlbGV0ZXMgcmVmcy9yZW1vdGVzL29yaWdpbi8qIFx1MjAxNCB0aGUgYmFzZSBicmFuY2ggbmFtZSB3b24ndCByZXNvbHZlXG4gICAgLy8gaW4gdGhlIGNvbnRhaW5lci4gUGFzcyB0aGUgbWVyZ2UtYmFzZSBTSEEgaW5zdGVhZDogaXQncyByZWFjaGFibGVcbiAgICAvLyBmcm9tIEhFQUQncyBoaXN0b3J5IHNvIGBnaXQgZGlmZiA8c2hhPmAgd29ya3Mgd2l0aG91dCBhIG5hbWVkIHJlZi5cbiAgICBjb25zdCB7IHN0ZG91dDogbWJPdXQsIGNvZGU6IG1iQ29kZSB9ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KFxuICAgICAgZ2l0RXhlKCksXG4gICAgICBbJ21lcmdlLWJhc2UnLCBiYXNlQnJhbmNoLCAnSEVBRCddLFxuICAgICAgeyBwcmVzZXJ2ZU91dHB1dE9uRXJyb3I6IGZhbHNlIH0sXG4gICAgKVxuICAgIGNvbnN0IG1lcmdlQmFzZVNoYSA9IG1iT3V0LnRyaW0oKVxuICAgIGlmIChtYkNvZGUgIT09IDAgfHwgIW1lcmdlQmFzZVNoYSkge1xuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3Jldmlld19yZW1vdGVfcHJlY29uZGl0aW9uX2ZhaWxlZCcsIHt9KVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICB0ZXh0OiBgQ291bGQgbm90IGZpbmQgbWVyZ2UtYmFzZSB3aXRoICR7YmFzZUJyYW5jaH0uIE1ha2Ugc3VyZSB5b3UncmUgaW4gYSBnaXQgcmVwbyB3aXRoIGEgJHtiYXNlQnJhbmNofSBicmFuY2guYCxcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9XG5cbiAgICAvLyBCYWlsIGVhcmx5IG9uIGVtcHR5IGRpZmZzIGluc3RlYWQgb2YgbGF1bmNoaW5nIGEgY29udGFpbmVyIHRoYXRcbiAgICAvLyB3aWxsIGp1c3QgZWNobyBcIm5vIGNoYW5nZXNcIi5cbiAgICBjb25zdCB7IHN0ZG91dDogZGlmZlN0YXQsIGNvZGU6IGRpZmZDb2RlIH0gPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coXG4gICAgICBnaXRFeGUoKSxcbiAgICAgIFsnZGlmZicsICctLXNob3J0c3RhdCcsIG1lcmdlQmFzZVNoYV0sXG4gICAgICB7IHByZXNlcnZlT3V0cHV0T25FcnJvcjogZmFsc2UgfSxcbiAgICApXG4gICAgaWYgKGRpZmZDb2RlID09PSAwICYmICFkaWZmU3RhdC50cmltKCkpIHtcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9yZXZpZXdfcmVtb3RlX3ByZWNvbmRpdGlvbl9mYWlsZWQnLCB7fSlcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgdGV4dDogYE5vIGNoYW5nZXMgYWdhaW5zdCB0aGUgJHtiYXNlQnJhbmNofSBmb3JrIHBvaW50LiBNYWtlIHNvbWUgY29tbWl0cyBvciBzdGFnZSBmaWxlcyBmaXJzdC5gLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH1cblxuICAgIHNlc3Npb24gPSBhd2FpdCB0ZWxlcG9ydFRvUmVtb3RlKHtcbiAgICAgIGluaXRpYWxNZXNzYWdlOiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246IGB1bHRyYXJldmlldzogJHtiYXNlQnJhbmNofWAsXG4gICAgICBzaWduYWw6IGNvbnRleHQuYWJvcnRDb250cm9sbGVyLnNpZ25hbCxcbiAgICAgIHVzZUJ1bmRsZTogdHJ1ZSxcbiAgICAgIGVudmlyb25tZW50SWQ6IENPREVfUkVWSUVXX0VOVl9JRCxcbiAgICAgIGVudmlyb25tZW50VmFyaWFibGVzOiB7XG4gICAgICAgIEJVR0hVTlRFUl9CQVNFX0JSQU5DSDogbWVyZ2VCYXNlU2hhLFxuICAgICAgICAuLi5jb21tb25FbnZWYXJzLFxuICAgICAgfSxcbiAgICB9KVxuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3Jldmlld19yZW1vdGVfdGVsZXBvcnRfZmFpbGVkJywge30pXG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHRleHQ6ICdSZXBvIGlzIHRvbyBsYXJnZS4gUHVzaCBhIFBSIGFuZCB1c2UgYC91bHRyYXJldmlldyA8UFIjPmAgaW5zdGVhZC4nLFxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH1cbiAgICBjb21tYW5kID0gJy91bHRyYXJldmlldydcbiAgICB0YXJnZXQgPSBiYXNlQnJhbmNoXG4gIH1cblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICBsb2dFdmVudCgndGVuZ3VfcmV2aWV3X3JlbW90ZV90ZWxlcG9ydF9mYWlsZWQnLCB7fSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJlZ2lzdGVyUmVtb3RlQWdlbnRUYXNrKHtcbiAgICByZW1vdGVUYXNrVHlwZTogJ3VsdHJhcmV2aWV3JyxcbiAgICBzZXNzaW9uLFxuICAgIGNvbW1hbmQsXG4gICAgY29udGV4dCxcbiAgICBpc1JlbW90ZVJldmlldzogdHJ1ZSxcbiAgfSlcbiAgbG9nRXZlbnQoJ3Rlbmd1X3Jldmlld19yZW1vdGVfbGF1bmNoZWQnLCB7fSlcbiAgY29uc3Qgc2Vzc2lvblVybCA9IGdldFJlbW90ZVRhc2tTZXNzaW9uVXJsKHNlc3Npb24uaWQpXG4gIC8vIENvbmNpc2UgXHUyMDE0IHRoZSB0b29sLW91dHB1dCBibG9jayBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyLCBzbyB0aGUgbW9kZWxcbiAgLy8gc2hvdWxkbid0IGVjaG8gdGhlIHNhbWUgaW5mby4gSnVzdCBlbm91Z2ggZm9yIENsYXVkZSB0byBhY2tub3dsZWRnZSB0aGVcbiAgLy8gbGF1bmNoIHdpdGhvdXQgcmVzdGF0aW5nIHRoZSB0YXJnZXQvVVJMIChib3RoIGFscmVhZHkgcHJpbnRlZCBhYm92ZSkuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogYFVsdHJhcmV2aWV3IGxhdW5jaGVkIGZvciAke3RhcmdldH0gKH4xMFx1MjAxMzIwIG1pbiwgcnVucyBpbiB0aGUgY2xvdWQpLiBUcmFjazogJHtzZXNzaW9uVXJsfSR7cmVzb2x2ZWRCaWxsaW5nTm90ZX0gRmluZGluZ3MgYXJyaXZlIHZpYSB0YXNrLW5vdGlmaWNhdGlvbi4gQnJpZWZseSBhY2tub3dsZWRnZSB0aGUgbGF1bmNoIHRvIHRoZSB1c2VyIHdpdGhvdXQgcmVwZWF0aW5nIHRoZSB0YXJnZXQgb3IgVVJMIFx1MjAxNCBib3RoIGFyZSBhbHJlYWR5IHZpc2libGUgaW4gdGhlIHRvb2wgb3V0cHV0IGFib3ZlLmAsXG4gICAgfSxcbiAgXVxufVxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DdXN0b21TZWxlY3Qvc2VsZWN0LmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25Qcm9jZWVkOiAoc2lnbmFsOiBBYm9ydFNpZ25hbCkgPT4gUHJvbWlzZTx2b2lkPlxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gVWx0cmFyZXZpZXdPdmVyYWdlRGlhbG9nKHtcbiAgb25Qcm9jZWVkLFxuICBvbkNhbmNlbCxcbn06IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW2lzTGF1bmNoaW5nLCBzZXRJc0xhdW5jaGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgYWJvcnRDb250cm9sbGVyUmVmID0gdXNlUmVmKG5ldyBBYm9ydENvbnRyb2xsZXIoKSlcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSAncHJvY2VlZCcpIHtcbiAgICAgICAgc2V0SXNMYXVuY2hpbmcodHJ1ZSlcbiAgICAgICAgLy8gSWYgb25Qcm9jZWVkIHJlamVjdHMgKGUuZy4gbGF1bmNoUmVtb3RlUmV2aWV3IHRocm93cyksIG9uRG9uZSBpc1xuICAgICAgICAvLyBuZXZlciBjYWxsZWQgYW5kIHRoZSBkaWFsb2cgc3RheXMgbW91bnRlZCDigJQgcmVzdG9yZSB0aGUgU2VsZWN0IHNvXG4gICAgICAgIC8vIHRoZSB1c2VyIGNhbiByZXRyeSBvciBjYW5jZWwgaW5zdGVhZCBvZiBzdGFyaW5nIGF0IFwiTGF1bmNoaW5n4oCmXCIuXG4gICAgICAgIHZvaWQgb25Qcm9jZWVkKGFib3J0Q29udHJvbGxlclJlZi5jdXJyZW50LnNpZ25hbCkuY2F0Y2goKCkgPT5cbiAgICAgICAgICBzZXRJc0xhdW5jaGluZyhmYWxzZSksXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2FuY2VsKClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvblByb2NlZWQsIG9uQ2FuY2VsXSxcbiAgKVxuXG4gIC8vIEVzY2FwZSBkdXJpbmcgbGF1bmNoIGFib3J0cyB0aGUgaW4tZmxpZ2h0IG9uUHJvY2VlZCB2aWEgc2lnbmFsIHNvIHRoZVxuICAvLyBjYWxsZXIgY2FuIHNraXAgc2lkZSBlZmZlY3RzIChjb25maXJtT3ZlcmFnZSwgb25Eb25lKSDigJQgb3RoZXJ3aXNlIGFcbiAgLy8gZmlyZS1hbmQtZm9yZ2V0IGxhdW5jaCB3b3VsZCBrZWVwIHJ1bm5pbmcgYW5kIGJpbGwgZGVzcGl0ZSBcImNhbmNlbGxlZFwiLlxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYWJvcnRDb250cm9sbGVyUmVmLmN1cnJlbnQuYWJvcnQoKVxuICAgIG9uQ2FuY2VsKClcbiAgfSwgW29uQ2FuY2VsXSlcblxuICBjb25zdCBvcHRpb25zID0gW1xuICAgIHsgbGFiZWw6ICdQcm9jZWVkIHdpdGggRXh0cmEgVXNhZ2UgYmlsbGluZycsIHZhbHVlOiAncHJvY2VlZCcgfSxcbiAgICB7IGxhYmVsOiAnQ2FuY2VsJywgdmFsdWU6ICdjYW5jZWwnIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiVWx0cmFyZXZpZXcgYmlsbGluZ1wiXG4gICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgY29sb3I9XCJiYWNrZ3JvdW5kXCJcbiAgICA+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICBZb3VyIGZyZWUgdWx0cmFyZXZpZXdzIGZvciB0aGlzIG9yZ2FuaXphdGlvbiBhcmUgdXNlZC4gRnVydGhlciByZXZpZXdzXG4gICAgICAgICAgYmlsbCBhcyBFeHRyYSBVc2FnZSAocGF5LXBlci11c2UpLlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIHtpc0xhdW5jaGluZyA/IChcbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImJhY2tncm91bmRcIj5MYXVuY2hpbmfigKY8L1RleHQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9XG4gICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuIiwgImltcG9ydCB0eXBlIHsgQ29udGVudEJsb2NrUGFyYW0gfSBmcm9tICdAYW50aHJvcGljLWFpL3Nkay9yZXNvdXJjZXMvbWVzc2FnZXMuanMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7XG4gIExvY2FsSlNYQ29tbWFuZENhbGwsXG4gIExvY2FsSlNYQ29tbWFuZE9uRG9uZSxcbn0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB7XG4gIGNoZWNrT3ZlcmFnZUdhdGUsXG4gIGNvbmZpcm1PdmVyYWdlLFxuICBsYXVuY2hSZW1vdGVSZXZpZXcsXG59IGZyb20gJy4vcmV2aWV3UmVtb3RlLmpzJ1xuaW1wb3J0IHsgVWx0cmFyZXZpZXdPdmVyYWdlRGlhbG9nIH0gZnJvbSAnLi9VbHRyYXJldmlld092ZXJhZ2VEaWFsb2cuanMnXG5cbmZ1bmN0aW9uIGNvbnRlbnRCbG9ja3NUb1N0cmluZyhibG9ja3M6IENvbnRlbnRCbG9ja1BhcmFtW10pOiBzdHJpbmcge1xuICByZXR1cm4gYmxvY2tzXG4gICAgLm1hcChiID0+IChiLnR5cGUgPT09ICd0ZXh0JyA/IGIudGV4dCA6ICcnKSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oJ1xcbicpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxhdW5jaEFuZERvbmUoXG4gIGFyZ3M6IHN0cmluZyxcbiAgY29udGV4dDogUGFyYW1ldGVyczxMb2NhbEpTWENvbW1hbmRDYWxsPlsxXSxcbiAgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUsXG4gIGJpbGxpbmdOb3RlOiBzdHJpbmcsXG4gIHNpZ25hbD86IEFib3J0U2lnbmFsLFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGxhdW5jaFJlbW90ZVJldmlldyhhcmdzLCBjb250ZXh0LCBiaWxsaW5nTm90ZSlcbiAgLy8gVXNlciBoaXQgRXNjYXBlIGR1cmluZyB0aGUgfjVzIGxhdW5jaCDigJQgdGhlIGRpYWxvZyBhbHJlYWR5IHNob3dlZFxuICAvLyBcImNhbmNlbGxlZFwiIGFuZCB1bm1vdW50ZWQsIHNvIHNraXAgb25Eb25lICh3b3VsZCB3cml0ZSB0byBhIGRlYWRcbiAgLy8gdHJhbnNjcmlwdCBzbG90KSBhbmQgbGV0IHRoZSBjYWxsZXIgc2tpcCBjb25maXJtT3ZlcmFnZS5cbiAgaWYgKHNpZ25hbD8uYWJvcnRlZCkgcmV0dXJuXG4gIGlmIChyZXN1bHQpIHtcbiAgICBvbkRvbmUoY29udGVudEJsb2Nrc1RvU3RyaW5nKHJlc3VsdCksIHsgc2hvdWxkUXVlcnk6IHRydWUgfSlcbiAgfSBlbHNlIHtcbiAgICAvLyBQcmVjb25kaXRpb24gZmFpbHVyZXMgbm93IHJldHVybiBzcGVjaWZpYyBDb250ZW50QmxvY2tQYXJhbVtdIGFib3ZlLlxuICAgIC8vIG51bGwgb25seSByZWFjaGVzIGhlcmUgb24gdGVsZXBvcnQgZmFpbHVyZSAoUFIgbW9kZSkgb3Igbm9uLWdpdGh1YlxuICAgIC8vIHJlcG8g4oCUIGJvdGggYXJlIENDUi9yZXBvIGNvbm5lY3Rpdml0eSBpc3N1ZXMuXG4gICAgb25Eb25lKFxuICAgICAgJ1VsdHJhcmV2aWV3IGZhaWxlZCB0byBsYXVuY2ggdGhlIHJlbW90ZSBzZXNzaW9uLiBDaGVjayB0aGF0IHRoaXMgaXMgYSBHaXRIdWIgcmVwbyBhbmQgdHJ5IGFnYWluLicsXG4gICAgICB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0sXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjYWxsOiBMb2NhbEpTWENvbW1hbmRDYWxsID0gYXN5bmMgKG9uRG9uZSwgY29udGV4dCwgYXJncykgPT4ge1xuICBjb25zdCBnYXRlID0gYXdhaXQgY2hlY2tPdmVyYWdlR2F0ZSgpXG5cbiAgaWYgKGdhdGUua2luZCA9PT0gJ25vdC1lbmFibGVkJykge1xuICAgIG9uRG9uZShcbiAgICAgICdGcmVlIHVsdHJhcmV2aWV3cyB1c2VkLiBFbmFibGUgRXh0cmEgVXNhZ2UgYXQgaHR0cHM6Ly9jbGF1ZGUuYWkvc2V0dGluZ3MvYmlsbGluZyB0byBjb250aW51ZS4nLFxuICAgICAgeyBkaXNwbGF5OiAnc3lzdGVtJyB9LFxuICAgIClcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKGdhdGUua2luZCA9PT0gJ2xvdy1iYWxhbmNlJykge1xuICAgIG9uRG9uZShcbiAgICAgIGBCYWxhbmNlIHRvbyBsb3cgdG8gbGF1bmNoIHVsdHJhcmV2aWV3ICgkJHtnYXRlLmF2YWlsYWJsZS50b0ZpeGVkKDIpfSBhdmFpbGFibGUsICQxMCBtaW5pbXVtKS4gVG9wIHVwIGF0IGh0dHBzOi8vY2xhdWRlLmFpL3NldHRpbmdzL2JpbGxpbmdgLFxuICAgICAgeyBkaXNwbGF5OiAnc3lzdGVtJyB9LFxuICAgIClcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKGdhdGUua2luZCA9PT0gJ25lZWRzLWNvbmZpcm0nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxVbHRyYXJldmlld092ZXJhZ2VEaWFsb2dcbiAgICAgICAgb25Qcm9jZWVkPXthc3luYyBzaWduYWwgPT4ge1xuICAgICAgICAgIGF3YWl0IGxhdW5jaEFuZERvbmUoXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIG9uRG9uZSxcbiAgICAgICAgICAgICcgVGhpcyByZXZpZXcgYmlsbHMgYXMgRXh0cmEgVXNhZ2UuJyxcbiAgICAgICAgICAgIHNpZ25hbCxcbiAgICAgICAgICApXG4gICAgICAgICAgLy8gT25seSBwZXJzaXN0IHRoZSBjb25maXJtYXRpb24gZmxhZyBhZnRlciBhIG5vbi1hYm9ydGVkIGxhdW5jaCDigJRcbiAgICAgICAgICAvLyBvdGhlcndpc2UgRXNjYXBlLWR1cmluZy1sYXVuY2ggd291bGQgbGVhdmUgdGhlIGZsYWcgc2V0IGFuZFxuICAgICAgICAgIC8vIHNraXAgdGhpcyBkaWFsb2cgb24gdGhlIG5leHQgYXR0ZW1wdC5cbiAgICAgICAgICBpZiAoIXNpZ25hbC5hYm9ydGVkKSBjb25maXJtT3ZlcmFnZSgpXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBvbkRvbmUoJ1VsdHJhcmV2aWV3IGNhbmNlbGxlZC4nLCB7IGRpc3BsYXk6ICdzeXN0ZW0nIH0pfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICAvLyBnYXRlLmtpbmQgPT09ICdwcm9jZWVkJ1xuICBhd2FpdCBsYXVuY2hBbmREb25lKGFyZ3MsIGNvbnRleHQsIG9uRG9uZSwgZ2F0ZS5iaWxsaW5nTm90ZSlcbiAgcmV0dXJuIG51bGxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxlQUFzQix3QkFBa0U7QUFDdEYsTUFBSSxDQUFDLHFCQUFxQixFQUFHLFFBQU87QUFDcEMsTUFBSTtBQUNGLFVBQU0sRUFBRSxhQUFhLFFBQVEsSUFBSSxNQUFNLGtCQUFrQjtBQUN6RCxVQUFNLFdBQVcsTUFBTSxjQUFNO0FBQUEsTUFDM0IsR0FBRyxlQUFlLEVBQUUsWUFBWTtBQUFBLE1BQ2hDO0FBQUEsUUFDRSxTQUFTO0FBQUEsVUFDUCxHQUFHLGdCQUFnQixXQUFXO0FBQUEsVUFDOUIsdUJBQXVCO0FBQUEsUUFDekI7QUFBQSxRQUNBLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUNBLFdBQU8sU0FBUztBQUFBLEVBQ2xCLFNBQVMsT0FBTztBQUNkLG9CQUFnQixpQ0FBaUMsS0FBSyxFQUFFO0FBQ3hELFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFyQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7QUNpQ08sU0FBUyxpQkFBdUI7QUFDckMsNEJBQTBCO0FBQzVCO0FBWUEsZUFBc0IsbUJBQXlDO0FBSTdELE1BQUksaUJBQWlCLEtBQUssdUJBQXVCLEdBQUc7QUFDbEQsV0FBTyxFQUFFLE1BQU0sV0FBVyxhQUFhLEdBQUc7QUFBQSxFQUM1QztBQUVBLFFBQU0sQ0FBQyxPQUFPLFdBQVcsSUFBSSxNQUFNLFFBQVEsSUFBSTtBQUFBLElBQzdDLHNCQUFzQjtBQUFBLElBQ3RCLGlCQUFpQixF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VDtBQUVBLFVBQUlFLEtBQUtFLFNBQVMsZUFBZTtBQUMvQlgsZUFDRSwyQ0FBMkNTLEtBQUtHLFVBQVVDLFFBQVEsQ0FBQyxDQUFDLDBFQUNwRTtVQUFFTixTQUFTO1FBQVMsQ0FDdEI7QUFDQSxlQUFPO01BQ1Q7QUFFQSxVQUFJRSxLQUFLRSxTQUFTLGlCQUFpQjtBQUNqQyxlQUNFLDRDQUFDLDRCQUNDLFdBQVcsT0FBTVQsV0FBVTtBQUN6QixnQkFBTUwsY0FDSkMsTUFDQUMsU0FDQUMsUUFDQSxzQ0FDQUUsTUFDRjtBQUlBLGNBQUksQ0FBQ0EsT0FBT0csUUFBU1MsZ0JBQWU7UUFDdEMsR0FDQSxVQUFVLE1BQU1kLE9BQU8sMEJBQTBCO1VBQUVPLFNBQVM7UUFBUyxDQUFDLEdBQUU7TUFHOUU7QUFHQSxZQUFNVixjQUFjQyxNQUFNQyxTQUFTQyxRQUFRUyxLQUFLUixXQUFXO0FBQzNELGFBQU87SUFDVDs7OyIsCiAgIm5hbWVzIjogWyJVbHRyYXJldmlld092ZXJhZ2VEaWFsb2ciLCAidDAiLCAiJCIsICJfYyIsICJvblByb2NlZWQiLCAib25DYW5jZWwiLCAiaXNMYXVuY2hpbmciLCAic2V0SXNMYXVuY2hpbmciLCAidXNlU3RhdGUiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJBYm9ydENvbnRyb2xsZXIiLCAiYWJvcnRDb250cm9sbGVyUmVmIiwgInVzZVJlZiIsICJ0MiIsICJ2YWx1ZSIsICJjdXJyZW50IiwgInNpZ25hbCIsICJjYXRjaCIsICJoYW5kbGVTZWxlY3QiLCAidDMiLCAiYWJvcnQiLCAiaGFuZGxlQ2FuY2VsIiwgInQ0IiwgImxhYmVsIiwgIm9wdGlvbnMiLCAidDUiLCAidDYiLCAidDciLCAiY29udGVudEJsb2Nrc1RvU3RyaW5nIiwgImJsb2NrcyIsICJtYXAiLCAiYiIsICJ0eXBlIiwgInRleHQiLCAiZmlsdGVyIiwgIkJvb2xlYW4iLCAiam9pbiIsICJsYXVuY2hBbmREb25lIiwgImFyZ3MiLCAiY29udGV4dCIsICJvbkRvbmUiLCAiYmlsbGluZ05vdGUiLCAic2lnbmFsIiwgInJlc3VsdCIsICJsYXVuY2hSZW1vdGVSZXZpZXciLCAiYWJvcnRlZCIsICJzaG91bGRRdWVyeSIsICJkaXNwbGF5IiwgImNhbGwiLCAiZ2F0ZSIsICJjaGVja092ZXJhZ2VHYXRlIiwgImtpbmQiLCAiYXZhaWxhYmxlIiwgInRvRml4ZWQiLCAiY29uZmlybU92ZXJhZ2UiXQp9Cg==
