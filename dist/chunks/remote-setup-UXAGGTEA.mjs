#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  getGhAuthStatus,
  init_ghAuthStatus
} from "./chunk-5ZOHKERS.mjs";
import {
  LoadingState,
  init_LoadingState
} from "./chunk-FGZ3AWYG.mjs";
import {
  Select,
  fetchEnvironments,
  init_CustomSelect,
  init_environments
} from "./chunk-OPLSBIOC.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Dialog,
  init_Dialog
} from "./chunk-SR5JKAMQ.mjs";
import "./chunk-RUHH7ZNU.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-P2O4HXJJ.mjs";
import "./chunk-ADZQUMT7.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import "./chunk-M22WMPMZ.mjs";
import "./chunk-66JTK2MJ.mjs";
import "./chunk-2LTMY2QU.mjs";
import "./chunk-WJKMR27I.mjs";
import "./chunk-EATKTAOV.mjs";
import "./chunk-AB7U5P7O.mjs";
import "./chunk-SEJU7JU7.mjs";
import "./chunk-ABRSTIS2.mjs";
import "./chunk-L22EUB4Z.mjs";
import "./chunk-NE3WJ556.mjs";
import "./chunk-4BEDQUYS.mjs";
import "./chunk-I4JSDM2A.mjs";
import "./chunk-GQIWFVMV.mjs";
import "./chunk-R2NMUWG6.mjs";
import "./chunk-XTFZIHQR.mjs";
import "./chunk-X6KULBXG.mjs";
import "./chunk-ORS2TTME.mjs";
import {
  init_browser,
  openBrowser
} from "./chunk-IAEMXMG4.mjs";
import {
  getOAuthHeaders,
  init_api,
  prepareApiRequest
} from "./chunk-WZXBZQWR.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-MPXK3SNP.mjs";
import "./chunk-C5B5VR2F.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-L4LQXE4X.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-5DUAEYU5.mjs";
import "./chunk-4HSGHMYS.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  ThemedBox_default,
  ThemedText,
  init_ink
} from "./chunk-IVRGECFY.mjs";
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
import "./chunk-Z6CSO4BY.mjs";
import "./chunk-LNPDZCDV.mjs";
import "./chunk-Q64VCQQA.mjs";
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
import {
  axios_default,
  init_axios
} from "./chunk-J6MJ6UVK.mjs";
import "./chunk-PKIVPZJM.mjs";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-JXCG2JDO.mjs";
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
import {
  execa,
  init_execa
} from "./chunk-ZAYB3WZV.mjs";
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

// src/commands/remote-setup/api.ts
async function importGithubToken(token) {
  let accessToken, orgUUID;
  try {
    ;
    ({ accessToken, orgUUID } = await prepareApiRequest());
  } catch {
    return { ok: false, error: { kind: "not_signed_in" } };
  }
  const url = `${getOauthConfig().BASE_API_URL}/v1/code/github/import-token`;
  const headers = {
    ...getOAuthHeaders(accessToken),
    "anthropic-beta": CCR_BYOC_BETA_HEADER,
    "x-organization-uuid": orgUUID
  };
  try {
    const response = await axios_default.post(
      url,
      { token: token.reveal() },
      { headers, timeout: 15e3, validateStatus: () => true }
    );
    if (response.status === 200) {
      return { ok: true, result: response.data };
    }
    if (response.status === 400) {
      return { ok: false, error: { kind: "invalid_token" } };
    }
    if (response.status === 401) {
      return { ok: false, error: { kind: "not_signed_in" } };
    }
    logForDebugging(`import-token returned ${response.status}`, {
      level: "error"
    });
    return { ok: false, error: { kind: "server", status: response.status } };
  } catch (err) {
    if (axios_default.isAxiosError(err)) {
      logForDebugging(`import-token network error: ${err.code ?? "unknown"}`, {
        level: "error"
      });
    }
    return { ok: false, error: { kind: "network" } };
  }
}
async function hasExistingEnvironment() {
  try {
    const envs = await fetchEnvironments();
    return envs.length > 0;
  } catch {
    return false;
  }
}
async function createDefaultEnvironment() {
  let accessToken, orgUUID;
  try {
    ;
    ({ accessToken, orgUUID } = await prepareApiRequest());
  } catch {
    return false;
  }
  if (await hasExistingEnvironment()) {
    return true;
  }
  const url = `${getOauthConfig().BASE_API_URL}/v1/environment_providers/cloud/create`;
  const headers = {
    ...getOAuthHeaders(accessToken),
    "x-organization-uuid": orgUUID
  };
  try {
    const response = await axios_default.post(
      url,
      {
        name: "Default",
        kind: "anthropic_cloud",
        description: "Default - trusted network access",
        config: {
          environment_type: "anthropic",
          cwd: "/home/user",
          init_script: null,
          environment: {},
          languages: [
            { name: "python", version: "3.11" },
            { name: "node", version: "20" }
          ],
          network_config: {
            allowed_hosts: [],
            allow_default_hosts: true
          }
        }
      },
      { headers, timeout: 15e3, validateStatus: () => true }
    );
    return response.status >= 200 && response.status < 300;
  } catch {
    return false;
  }
}
async function isSignedIn() {
  try {
    await prepareApiRequest();
    return true;
  } catch {
    return false;
  }
}
function getCodeWebUrl() {
  return `${getOauthConfig().CLAUDE_AI_ORIGIN}/code`;
}
var CCR_BYOC_BETA_HEADER, RedactedGithubToken;
var init_api2 = __esm({
  "src/commands/remote-setup/api.ts"() {
    init_axios();
    init_oauth();
    init_debug();
    init_api();
    init_environments();
    CCR_BYOC_BETA_HEADER = "ccr-byoc-2025-07-29";
    RedactedGithubToken = class {
      #value;
      constructor(raw) {
        this.#value = raw;
      }
      reveal() {
        return this.#value;
      }
      toString() {
        return "[REDACTED:gh-token]";
      }
      toJSON() {
        return "[REDACTED:gh-token]";
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        return "[REDACTED:gh-token]";
      }
    };
  }
});

// src/commands/remote-setup/remote-setup.tsx
async function checkLoginState() {
  if (!await isSignedIn()) {
    return {
      status: "not_signed_in"
    };
  }
  const ghStatus = await getGhAuthStatus();
  if (ghStatus === "not_installed") {
    return {
      status: "gh_not_installed"
    };
  }
  if (ghStatus === "not_authenticated") {
    return {
      status: "gh_not_authenticated"
    };
  }
  const {
    stdout
  } = await execa("gh", ["auth", "token"], {
    stdout: "pipe",
    stderr: "ignore",
    timeout: 5e3,
    reject: false
  });
  const trimmed = stdout.trim();
  if (!trimmed) {
    return {
      status: "gh_not_authenticated"
    };
  }
  return {
    status: "has_gh_token",
    token: new RedactedGithubToken(trimmed)
  };
}
function errorMessage(err, codeUrl) {
  switch (err.kind) {
    case "not_signed_in":
      return `Login failed. Please visit ${codeUrl} and login using the GitHub App`;
    case "invalid_token":
      return "GitHub rejected that token. Run `gh auth login` and try again.";
    case "server":
      return `Server error (${err.status}). Try again in a moment.`;
    case "network":
      return "Couldn't reach the server. Check your connection.";
  }
}
function Web({
  onDone
}) {
  const [step, setStep] = useState({
    name: "checking"
  });
  useEffect(() => {
    logEvent("tengu_remote_setup_started", {});
    void checkLoginState().then(async (result) => {
      switch (result.status) {
        case "not_signed_in":
          logEvent("tengu_remote_setup_result", {
            result: "not_signed_in"
          });
          onDone("Not signed in to Claude. Run /login first.");
          return;
        case "gh_not_installed":
        case "gh_not_authenticated": {
          const url = `${getCodeWebUrl()}/onboarding?step=alt-auth`;
          await openBrowser(url);
          logEvent("tengu_remote_setup_result", {
            result: result.status
          });
          onDone(result.status === "gh_not_installed" ? `GitHub CLI not found. Install it via https://cli.github.com/, then run \`gh auth login\`, or connect GitHub on the web: ${url}` : `GitHub CLI not authenticated. Run \`gh auth login\` and try again, or connect GitHub on the web: ${url}`);
          return;
        }
        case "has_gh_token":
          setStep({
            name: "confirm",
            token: result.token
          });
      }
    });
  }, []);
  const handleCancel = () => {
    logEvent("tengu_remote_setup_result", {
      result: "cancelled"
    });
    onDone();
  };
  const handleConfirm = async (token2) => {
    setStep({
      name: "uploading"
    });
    const result = await importGithubToken(token2);
    if (!result.ok) {
      logEvent("tengu_remote_setup_result", {
        result: "import_failed",
        error_kind: result.error.kind
      });
      onDone(errorMessage(result.error, getCodeWebUrl()));
      return;
    }
    await createDefaultEnvironment();
    const url = getCodeWebUrl();
    await openBrowser(url);
    logEvent("tengu_remote_setup_result", {
      result: "success"
    });
    onDone(`Connected as ${result.result.github_username}. Opened ${url}`);
  };
  if (step.name === "checking") {
    return /* @__PURE__ */ createElement(LoadingState, { message: "Checking login status\u2026" });
  }
  if (step.name === "uploading") {
    return /* @__PURE__ */ createElement(LoadingState, { message: "Connecting GitHub to Claude\u2026" });
  }
  const token = step.token;
  return /* @__PURE__ */ createElement(Dialog, { title: "Connect Claude on the web to GitHub?", onCancel: handleCancel, hideInputGuide: true }, /* @__PURE__ */ createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ createElement(ThemedText, null, "Claude on the web requires connecting to your GitHub account to clone and push code on your behalf."), /* @__PURE__ */ createElement(ThemedText, { dimColor: true }, "Your local credentials are used to authenticate with GitHub")), /* @__PURE__ */ createElement(Select, { options: [{
    label: "Continue",
    value: "send"
  }, {
    label: "Cancel",
    value: "cancel"
  }], onChange: (value) => {
    if (value === "send") {
      void handleConfirm(token);
    } else {
      handleCancel();
    }
  }, onCancel: handleCancel }));
}
async function call(onDone) {
  return /* @__PURE__ */ createElement(Web, { onDone });
}
var init_remote_setup = __esm({
  "src/commands/remote-setup/remote-setup.tsx"() {
    init_execa();
    init_react();
    init_react();
    init_CustomSelect();
    init_Dialog();
    init_LoadingState();
    init_ink();
    init_analytics();
    init_browser();
    init_ghAuthStatus();
    init_api2();
  }
});
init_remote_setup();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1hbmRzL3JlbW90ZS1zZXR1cC9hcGkudHMiLCAiLi4vLi4vc3JjL2NvbW1hbmRzL3JlbW90ZS1zZXR1cC9yZW1vdGUtc2V0dXAudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBnZXRPYXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9vYXV0aC5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHsgZ2V0T0F1dGhIZWFkZXJzLCBwcmVwYXJlQXBpUmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL3RlbGVwb3J0L2FwaS5qcydcbmltcG9ydCB7IGZldGNoRW52aXJvbm1lbnRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGVsZXBvcnQvZW52aXJvbm1lbnRzLmpzJ1xuXG5jb25zdCBDQ1JfQllPQ19CRVRBX0hFQURFUiA9ICdjY3ItYnlvYy0yMDI1LTA3LTI5J1xuXG4vKipcbiAqIFdyYXBzIGEgcmF3IEdpdEh1YiB0b2tlbiBzbyB0aGF0IGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gaXMgcmVkYWN0ZWQuXG4gKiBgU3RyaW5nKHRva2VuKWAsIHRlbXBsYXRlIGxpdGVyYWxzLCBgSlNPTi5zdHJpbmdpZnkodG9rZW4pYCwgYW5kIGFueVxuICogYXR0YWNoZWQgZXJyb3IgbWVzc2FnZXMgd2lsbCBzaG93IGBbUkVEQUNURUQ6Z2gtdG9rZW5dYCBpbnN0ZWFkIG9mIHRoZVxuICogdG9rZW4gdmFsdWUuIENhbGwgYC5yZXZlYWwoKWAgb25seSBhdCB0aGUgc2luZ2xlIHBvaW50IHdoZXJlIHRoZSByYXdcbiAqIHZhbHVlIGlzIHBsYWNlZCBpbnRvIGFuIEhUVFAgYm9keS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlZGFjdGVkR2l0aHViVG9rZW4ge1xuICByZWFkb25seSAjdmFsdWU6IHN0cmluZ1xuICBjb25zdHJ1Y3RvcihyYXc6IHN0cmluZykge1xuICAgIHRoaXMuI3ZhbHVlID0gcmF3XG4gIH1cbiAgcmV2ZWFsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuI3ZhbHVlXG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ1tSRURBQ1RFRDpnaC10b2tlbl0nXG4gIH1cbiAgdG9KU09OKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdbUkVEQUNURUQ6Z2gtdG9rZW5dJ1xuICB9XG4gIFtTeW1ib2wuZm9yKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpXSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnW1JFREFDVEVEOmdoLXRva2VuXSdcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBJbXBvcnRUb2tlblJlc3VsdCA9IHtcbiAgZ2l0aHViX3VzZXJuYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgSW1wb3J0VG9rZW5FcnJvciA9XG4gIHwgeyBraW5kOiAnbm90X3NpZ25lZF9pbicgfVxuICB8IHsga2luZDogJ2ludmFsaWRfdG9rZW4nIH1cbiAgfCB7IGtpbmQ6ICdzZXJ2ZXInOyBzdGF0dXM6IG51bWJlciB9XG4gIHwgeyBraW5kOiAnbmV0d29yaycgfVxuXG4vKipcbiAqIFBPU1RzIGEgR2l0SHViIHRva2VuIHRvIHRoZSBDQ1IgYmFja2VuZCwgd2hpY2ggdmFsaWRhdGVzIGl0IGFnYWluc3RcbiAqIEdpdEh1YidzIC91c2VyIGVuZHBvaW50IGFuZCBzdG9yZXMgaXQgRmVybmV0LWVuY3J5cHRlZCBpbiBzeW5jX3VzZXJfdG9rZW5zLlxuICogVGhlIHN0b3JlZCB0b2tlbiBzYXRpc2ZpZXMgdGhlIHNhbWUgcmVhZCBwYXRocyBhcyBhbiBPQXV0aCB0b2tlbiwgc29cbiAqIGNsb25lL3B1c2ggaW4gY2xhdWRlLmFpL2NvZGUgd29ya3MgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhpcyBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGltcG9ydEdpdGh1YlRva2VuKFxuICB0b2tlbjogUmVkYWN0ZWRHaXRodWJUb2tlbixcbik6IFByb21pc2U8XG4gIHwgeyBvazogdHJ1ZTsgcmVzdWx0OiBJbXBvcnRUb2tlblJlc3VsdCB9XG4gIHwgeyBvazogZmFsc2U7IGVycm9yOiBJbXBvcnRUb2tlbkVycm9yIH1cbj4ge1xuICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZywgb3JnVVVJRDogc3RyaW5nXG4gIHRyeSB7XG4gICAgOyh7IGFjY2Vzc1Rva2VuLCBvcmdVVUlEIH0gPSBhd2FpdCBwcmVwYXJlQXBpUmVxdWVzdCgpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4geyBvazogZmFsc2UsIGVycm9yOiB7IGtpbmQ6ICdub3Rfc2lnbmVkX2luJyB9IH1cbiAgfVxuXG4gIGNvbnN0IHVybCA9IGAke2dldE9hdXRoQ29uZmlnKCkuQkFTRV9BUElfVVJMfS92MS9jb2RlL2dpdGh1Yi9pbXBvcnQtdG9rZW5gXG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgLi4uZ2V0T0F1dGhIZWFkZXJzKGFjY2Vzc1Rva2VuKSxcbiAgICAnYW50aHJvcGljLWJldGEnOiBDQ1JfQllPQ19CRVRBX0hFQURFUixcbiAgICAneC1vcmdhbml6YXRpb24tdXVpZCc6IG9yZ1VVSUQsXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdDxJbXBvcnRUb2tlblJlc3VsdD4oXG4gICAgICB1cmwsXG4gICAgICB7IHRva2VuOiB0b2tlbi5yZXZlYWwoKSB9LFxuICAgICAgeyBoZWFkZXJzLCB0aW1lb3V0OiAxNTAwMCwgdmFsaWRhdGVTdGF0dXM6ICgpID0+IHRydWUgfSxcbiAgICApXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICByZXR1cm4geyBvazogdHJ1ZSwgcmVzdWx0OiByZXNwb25zZS5kYXRhIH1cbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICByZXR1cm4geyBvazogZmFsc2UsIGVycm9yOiB7IGtpbmQ6ICdpbnZhbGlkX3Rva2VuJyB9IH1cbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICByZXR1cm4geyBvazogZmFsc2UsIGVycm9yOiB7IGtpbmQ6ICdub3Rfc2lnbmVkX2luJyB9IH1cbiAgICB9XG4gICAgbG9nRm9yRGVidWdnaW5nKGBpbXBvcnQtdG9rZW4gcmV0dXJuZWQgJHtyZXNwb25zZS5zdGF0dXN9YCwge1xuICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgfSlcbiAgICByZXR1cm4geyBvazogZmFsc2UsIGVycm9yOiB7IGtpbmQ6ICdzZXJ2ZXInLCBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyB9IH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnIpKSB7XG4gICAgICAvLyBlcnIuY29uZmlnLmRhdGEgd291bGQgY29udGFpbiB0aGUgUE9TVCBib2R5IHdpdGggdGhlIHJhdyB0b2tlbi5cbiAgICAgIC8vIERvIG5vdCBpbmNsdWRlIGl0IGluIGFueSBsb2cuIFRoZSBlcnJvciBjb2RlIGFsb25lIGlzIGVub3VnaC5cbiAgICAgIGxvZ0ZvckRlYnVnZ2luZyhgaW1wb3J0LXRva2VuIG5ldHdvcmsgZXJyb3I6ICR7ZXJyLmNvZGUgPz8gJ3Vua25vd24nfWAsIHtcbiAgICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4geyBvazogZmFsc2UsIGVycm9yOiB7IGtpbmQ6ICduZXR3b3JrJyB9IH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYXNFeGlzdGluZ0Vudmlyb25tZW50KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICB0cnkge1xuICAgIGNvbnN0IGVudnMgPSBhd2FpdCBmZXRjaEVudmlyb25tZW50cygpXG4gICAgcmV0dXJuIGVudnMubGVuZ3RoID4gMFxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEJlc3QtZWZmb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQgY3JlYXRpb24uIE1pcnJvcnMgdGhlIHdlYiBvbmJvYXJkaW5nJ3NcbiAqIERFRkFVTFRfQ0xPVURfRU5WSVJPTk1FTlRfUkVRVUVTVCBzbyBhIGZpcnN0LXRpbWUgdXNlciBsYW5kcyBvbiB0aGVcbiAqIGNvbXBvc2VyIGluc3RlYWQgb2YgZW52LXNldHVwLiBDaGVja3MgZm9yIGV4aXN0aW5nIGVudmlyb25tZW50cyBmaXJzdFxuICogc28gcmUtcnVubmluZyAvd2ViLXNldHVwIGRvZXNuJ3QgcGlsZSB1cCBkdXBsaWNhdGVzLiBGYWlsdXJlcyBhcmVcbiAqIG5vbi1mYXRhbCBcdTIwMTQgdGhlIHRva2VuIGltcG9ydCBhbHJlYWR5IHN1Y2NlZWRlZCwgYW5kIHRoZSB3ZWIgc3RhdGVcbiAqIG1hY2hpbmUgZmFsbHMgYmFjayB0byBlbnYtc2V0dXAgb24gbmV4dCBsb2FkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdEVudmlyb25tZW50KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZywgb3JnVVVJRDogc3RyaW5nXG4gIHRyeSB7XG4gICAgOyh7IGFjY2Vzc1Rva2VuLCBvcmdVVUlEIH0gPSBhd2FpdCBwcmVwYXJlQXBpUmVxdWVzdCgpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChhd2FpdCBoYXNFeGlzdGluZ0Vudmlyb25tZW50KCkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gVGhlIC9wcml2YXRlL29yZ2FuaXphdGlvbnMve29yZ30vIHBhdGggcmVqZWN0cyBDTEkgT0F1dGggdG9rZW5zICh3cm9uZ1xuICAvLyBhdXRoIGRlcCkuIFRoZSBwdWJsaWMgcGF0aCB1c2VzIGJ1aWxkX2ZsZXhpYmxlX2F1dGggXHUyMDE0IHNhbWUgcGF0aFxuICAvLyBmZXRjaEVudmlyb25tZW50cygpIHVzZXMuIE9yZyBpcyBwYXNzZWQgdmlhIHgtb3JnYW5pemF0aW9uLXV1aWQgaGVhZGVyLlxuICBjb25zdCB1cmwgPSBgJHtnZXRPYXV0aENvbmZpZygpLkJBU0VfQVBJX1VSTH0vdjEvZW52aXJvbm1lbnRfcHJvdmlkZXJzL2Nsb3VkL2NyZWF0ZWBcbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAuLi5nZXRPQXV0aEhlYWRlcnMoYWNjZXNzVG9rZW4pLFxuICAgICd4LW9yZ2FuaXphdGlvbi11dWlkJzogb3JnVVVJRCxcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgdXJsLFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRGVmYXVsdCcsXG4gICAgICAgIGtpbmQ6ICdhbnRocm9waWNfY2xvdWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0RlZmF1bHQgLSB0cnVzdGVkIG5ldHdvcmsgYWNjZXNzJyxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgZW52aXJvbm1lbnRfdHlwZTogJ2FudGhyb3BpYycsXG4gICAgICAgICAgY3dkOiAnL2hvbWUvdXNlcicsXG4gICAgICAgICAgaW5pdF9zY3JpcHQ6IG51bGwsXG4gICAgICAgICAgZW52aXJvbm1lbnQ6IHt9LFxuICAgICAgICAgIGxhbmd1YWdlczogW1xuICAgICAgICAgICAgeyBuYW1lOiAncHl0aG9uJywgdmVyc2lvbjogJzMuMTEnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdub2RlJywgdmVyc2lvbjogJzIwJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbmV0d29ya19jb25maWc6IHtcbiAgICAgICAgICAgIGFsbG93ZWRfaG9zdHM6IFtdLFxuICAgICAgICAgICAgYWxsb3dfZGVmYXVsdF9ob3N0czogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHsgaGVhZGVycywgdGltZW91dDogMTUwMDAsIHZhbGlkYXRlU3RhdHVzOiAoKSA9PiB0cnVlIH0sXG4gICAgKVxuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMFxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKiogUmV0dXJucyB0cnVlIHdoZW4gdGhlIHVzZXIgaGFzIHZhbGlkIENsYXVkZSBPQXV0aCBjcmVkZW50aWFscy4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc1NpZ25lZEluKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICB0cnkge1xuICAgIGF3YWl0IHByZXBhcmVBcGlSZXF1ZXN0KClcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29kZVdlYlVybCgpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7Z2V0T2F1dGhDb25maWcoKS5DTEFVREVfQUlfT1JJR0lOfS9jb2RlYFxufVxuIiwgImltcG9ydCB7IGV4ZWNhIH0gZnJvbSAnZXhlY2EnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0L2luZGV4LmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVzaWduLXN5c3RlbS9Mb2FkaW5nU3RhdGUuanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQge1xuICBsb2dFdmVudCxcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTIGFzIFNhZmVTdHJpbmcsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB0eXBlIHsgTG9jYWxKU1hDb21tYW5kT25Eb25lIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29tbWFuZC5qcydcbmltcG9ydCB7IG9wZW5Ccm93c2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvYnJvd3Nlci5qcydcbmltcG9ydCB7IGdldEdoQXV0aFN0YXR1cyB9IGZyb20gJy4uLy4uL3V0aWxzL2dpdGh1Yi9naEF1dGhTdGF0dXMuanMnXG5pbXBvcnQge1xuICBjcmVhdGVEZWZhdWx0RW52aXJvbm1lbnQsXG4gIGdldENvZGVXZWJVcmwsXG4gIHR5cGUgSW1wb3J0VG9rZW5FcnJvcixcbiAgaW1wb3J0R2l0aHViVG9rZW4sXG4gIGlzU2lnbmVkSW4sXG4gIFJlZGFjdGVkR2l0aHViVG9rZW4sXG59IGZyb20gJy4vYXBpLmpzJ1xuXG50eXBlIENoZWNrUmVzdWx0ID1cbiAgfCB7IHN0YXR1czogJ25vdF9zaWduZWRfaW4nIH1cbiAgfCB7IHN0YXR1czogJ2hhc19naF90b2tlbic7IHRva2VuOiBSZWRhY3RlZEdpdGh1YlRva2VuIH1cbiAgfCB7IHN0YXR1czogJ2doX25vdF9pbnN0YWxsZWQnIH1cbiAgfCB7IHN0YXR1czogJ2doX25vdF9hdXRoZW50aWNhdGVkJyB9XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrTG9naW5TdGF0ZSgpOiBQcm9taXNlPENoZWNrUmVzdWx0PiB7XG4gIGlmICghKGF3YWl0IGlzU2lnbmVkSW4oKSkpIHtcbiAgICByZXR1cm4geyBzdGF0dXM6ICdub3Rfc2lnbmVkX2luJyB9XG4gIH1cblxuICBjb25zdCBnaFN0YXR1cyA9IGF3YWl0IGdldEdoQXV0aFN0YXR1cygpXG4gIGlmIChnaFN0YXR1cyA9PT0gJ25vdF9pbnN0YWxsZWQnKSB7XG4gICAgcmV0dXJuIHsgc3RhdHVzOiAnZ2hfbm90X2luc3RhbGxlZCcgfVxuICB9XG4gIGlmIChnaFN0YXR1cyA9PT0gJ25vdF9hdXRoZW50aWNhdGVkJykge1xuICAgIHJldHVybiB7IHN0YXR1czogJ2doX25vdF9hdXRoZW50aWNhdGVkJyB9XG4gIH1cblxuICAvLyBnaFN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnLiBnZXRHaEF1dGhTdGF0dXMgc3Bhd25zIHdpdGggc3Rkb3V0OidpZ25vcmUnXG4gIC8vICh0ZWxlbWV0cnktc2FmZSk7IHNwYXduIG9uY2UgbW9yZSB3aXRoIHN0ZG91dDoncGlwZScgdG8gcmVhZCB0aGUgdG9rZW4uXG4gIGNvbnN0IHsgc3Rkb3V0IH0gPSBhd2FpdCBleGVjYSgnZ2gnLCBbJ2F1dGgnLCAndG9rZW4nXSwge1xuICAgIHN0ZG91dDogJ3BpcGUnLFxuICAgIHN0ZGVycjogJ2lnbm9yZScsXG4gICAgdGltZW91dDogNTAwMCxcbiAgICByZWplY3Q6IGZhbHNlLFxuICB9KVxuICBjb25zdCB0cmltbWVkID0gc3Rkb3V0LnRyaW0oKVxuICBpZiAoIXRyaW1tZWQpIHtcbiAgICByZXR1cm4geyBzdGF0dXM6ICdnaF9ub3RfYXV0aGVudGljYXRlZCcgfVxuICB9XG4gIHJldHVybiB7IHN0YXR1czogJ2hhc19naF90b2tlbicsIHRva2VuOiBuZXcgUmVkYWN0ZWRHaXRodWJUb2tlbih0cmltbWVkKSB9XG59XG5cbmZ1bmN0aW9uIGVycm9yTWVzc2FnZShlcnI6IEltcG9ydFRva2VuRXJyb3IsIGNvZGVVcmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHN3aXRjaCAoZXJyLmtpbmQpIHtcbiAgICBjYXNlICdub3Rfc2lnbmVkX2luJzpcbiAgICAgIHJldHVybiBgTG9naW4gZmFpbGVkLiBQbGVhc2UgdmlzaXQgJHtjb2RlVXJsfSBhbmQgbG9naW4gdXNpbmcgdGhlIEdpdEh1YiBBcHBgXG4gICAgY2FzZSAnaW52YWxpZF90b2tlbic6XG4gICAgICByZXR1cm4gJ0dpdEh1YiByZWplY3RlZCB0aGF0IHRva2VuLiBSdW4gYGdoIGF1dGggbG9naW5gIGFuZCB0cnkgYWdhaW4uJ1xuICAgIGNhc2UgJ3NlcnZlcic6XG4gICAgICByZXR1cm4gYFNlcnZlciBlcnJvciAoJHtlcnIuc3RhdHVzfSkuIFRyeSBhZ2FpbiBpbiBhIG1vbWVudC5gXG4gICAgY2FzZSAnbmV0d29yayc6XG4gICAgICByZXR1cm4gXCJDb3VsZG4ndCByZWFjaCB0aGUgc2VydmVyLiBDaGVjayB5b3VyIGNvbm5lY3Rpb24uXCJcbiAgfVxufVxuXG50eXBlIFN0ZXAgPVxuICB8IHsgbmFtZTogJ2NoZWNraW5nJyB9XG4gIHwgeyBuYW1lOiAnY29uZmlybSc7IHRva2VuOiBSZWRhY3RlZEdpdGh1YlRva2VuIH1cbiAgfCB7IG5hbWU6ICd1cGxvYWRpbmcnIH1cblxuZnVuY3Rpb24gV2ViKHsgb25Eb25lIH06IHsgb25Eb25lOiBMb2NhbEpTWENvbW1hbmRPbkRvbmUgfSkge1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZTxTdGVwPih7IG5hbWU6ICdjaGVja2luZycgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvZ0V2ZW50KCd0ZW5ndV9yZW1vdGVfc2V0dXBfc3RhcnRlZCcsIHt9KVxuICAgIHZvaWQgY2hlY2tMb2dpblN0YXRlKCkudGhlbihhc3luYyByZXN1bHQgPT4ge1xuICAgICAgc3dpdGNoIChyZXN1bHQuc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgJ25vdF9zaWduZWRfaW4nOlxuICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9yZW1vdGVfc2V0dXBfcmVzdWx0Jywge1xuICAgICAgICAgICAgcmVzdWx0OiAnbm90X3NpZ25lZF9pbicgYXMgU2FmZVN0cmluZyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIG9uRG9uZSgnTm90IHNpZ25lZCBpbiB0byBDbGF1ZGUuIFJ1biAvbG9naW4gZmlyc3QuJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgY2FzZSAnZ2hfbm90X2luc3RhbGxlZCc6XG4gICAgICAgIGNhc2UgJ2doX25vdF9hdXRoZW50aWNhdGVkJzoge1xuICAgICAgICAgIGNvbnN0IHVybCA9IGAke2dldENvZGVXZWJVcmwoKX0vb25ib2FyZGluZz9zdGVwPWFsdC1hdXRoYFxuICAgICAgICAgIGF3YWl0IG9wZW5Ccm93c2VyKHVybClcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfcmVtb3RlX3NldHVwX3Jlc3VsdCcsIHtcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LnN0YXR1cyBhcyBTYWZlU3RyaW5nLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgb25Eb25lKFxuICAgICAgICAgICAgcmVzdWx0LnN0YXR1cyA9PT0gJ2doX25vdF9pbnN0YWxsZWQnXG4gICAgICAgICAgICAgID8gYEdpdEh1YiBDTEkgbm90IGZvdW5kLiBJbnN0YWxsIGl0IHZpYSBodHRwczovL2NsaS5naXRodWIuY29tLywgdGhlbiBydW4gXFxgZ2ggYXV0aCBsb2dpblxcYCwgb3IgY29ubmVjdCBHaXRIdWIgb24gdGhlIHdlYjogJHt1cmx9YFxuICAgICAgICAgICAgICA6IGBHaXRIdWIgQ0xJIG5vdCBhdXRoZW50aWNhdGVkLiBSdW4gXFxgZ2ggYXV0aCBsb2dpblxcYCBhbmQgdHJ5IGFnYWluLCBvciBjb25uZWN0IEdpdEh1YiBvbiB0aGUgd2ViOiAke3VybH1gLFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjYXNlICdoYXNfZ2hfdG9rZW4nOlxuICAgICAgICAgIHNldFN0ZXAoeyBuYW1lOiAnY29uZmlybScsIHRva2VuOiByZXN1bHQudG9rZW4gfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIG9uRG9uZSBpcyBzdGFibGUgYWNyb3NzIHJlbmRlcnM7IGludGVudGlvbmFsbHkgbm90IGluIGRlcHMuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgbG9nRXZlbnQoJ3Rlbmd1X3JlbW90ZV9zZXR1cF9yZXN1bHQnLCB7XG4gICAgICByZXN1bHQ6ICdjYW5jZWxsZWQnIGFzIFNhZmVTdHJpbmcsXG4gICAgfSlcbiAgICBvbkRvbmUoKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ29uZmlybSA9IGFzeW5jICh0b2tlbjogUmVkYWN0ZWRHaXRodWJUb2tlbikgPT4ge1xuICAgIHNldFN0ZXAoeyBuYW1lOiAndXBsb2FkaW5nJyB9KVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaW1wb3J0R2l0aHViVG9rZW4odG9rZW4pXG4gICAgaWYgKCFyZXN1bHQub2spIHtcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9yZW1vdGVfc2V0dXBfcmVzdWx0Jywge1xuICAgICAgICByZXN1bHQ6ICdpbXBvcnRfZmFpbGVkJyBhcyBTYWZlU3RyaW5nLFxuICAgICAgICBlcnJvcl9raW5kOiByZXN1bHQuZXJyb3Iua2luZCBhcyBTYWZlU3RyaW5nLFxuICAgICAgfSlcbiAgICAgIG9uRG9uZShlcnJvck1lc3NhZ2UocmVzdWx0LmVycm9yLCBnZXRDb2RlV2ViVXJsKCkpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVG9rZW4gaW1wb3J0IHN1Y2NlZWRlZC4gRW52aXJvbm1lbnQgY3JlYXRpb24gaXMgYmVzdC1lZmZvcnQg4oCUIGlmIGl0XG4gICAgLy8gZmFpbHMsIHRoZSB3ZWIgc3RhdGUgbWFjaGluZSByb3V0ZXMgdG8gZW52LXNldHVwIG9uIGxhbmRpbmcsIHdoaWNoIGlzXG4gICAgLy8gb25lIGV4dHJhIGNsaWNrIGJ1dCBzdGlsbCBiZXR0ZXIgdGhhbiB0aGUgT0F1dGggZGFuY2UuXG4gICAgYXdhaXQgY3JlYXRlRGVmYXVsdEVudmlyb25tZW50KClcblxuICAgIGNvbnN0IHVybCA9IGdldENvZGVXZWJVcmwoKVxuICAgIGF3YWl0IG9wZW5Ccm93c2VyKHVybClcblxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9yZW1vdGVfc2V0dXBfcmVzdWx0Jywge1xuICAgICAgcmVzdWx0OiAnc3VjY2VzcycgYXMgU2FmZVN0cmluZyxcbiAgICB9KVxuICAgIG9uRG9uZShgQ29ubmVjdGVkIGFzICR7cmVzdWx0LnJlc3VsdC5naXRodWJfdXNlcm5hbWV9LiBPcGVuZWQgJHt1cmx9YClcbiAgfVxuXG4gIGlmIChzdGVwLm5hbWUgPT09ICdjaGVja2luZycpIHtcbiAgICByZXR1cm4gPExvYWRpbmdTdGF0ZSBtZXNzYWdlPVwiQ2hlY2tpbmcgbG9naW4gc3RhdHVz4oCmXCIgLz5cbiAgfVxuXG4gIGlmIChzdGVwLm5hbWUgPT09ICd1cGxvYWRpbmcnKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nU3RhdGUgbWVzc2FnZT1cIkNvbm5lY3RpbmcgR2l0SHViIHRvIENsYXVkZeKAplwiIC8+XG4gIH1cblxuICBjb25zdCB0b2tlbiA9IHN0ZXAudG9rZW5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB0aXRsZT1cIkNvbm5lY3QgQ2xhdWRlIG9uIHRoZSB3ZWIgdG8gR2l0SHViP1wiXG4gICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgaGlkZUlucHV0R3VpZGVcbiAgICA+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgQ2xhdWRlIG9uIHRoZSB3ZWIgcmVxdWlyZXMgY29ubmVjdGluZyB0byB5b3VyIEdpdEh1YiBhY2NvdW50IHRvIGNsb25lXG4gICAgICAgICAgYW5kIHB1c2ggY29kZSBvbiB5b3VyIGJlaGFsZi5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICBZb3VyIGxvY2FsIGNyZWRlbnRpYWxzIGFyZSB1c2VkIHRvIGF1dGhlbnRpY2F0ZSB3aXRoIEdpdEh1YlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgIHsgbGFiZWw6ICdDb250aW51ZScsIHZhbHVlOiAnc2VuZCcgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnQ2FuY2VsJywgdmFsdWU6ICdjYW5jZWwnIH0sXG4gICAgICAgIF19XG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSAnc2VuZCcpIHtcbiAgICAgICAgICAgIHZvaWQgaGFuZGxlQ29uZmlybSh0b2tlbilcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsKClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICAvPlxuICAgIDwvRGlhbG9nPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsKFxuICBvbkRvbmU6IExvY2FsSlNYQ29tbWFuZE9uRG9uZSxcbik6IFByb21pc2U8UmVhY3QuUmVhY3ROb2RlPiB7XG4gIHJldHVybiA8V2ViIG9uRG9uZT17b25Eb25lfSAvPlxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEQSxlQUFzQixrQkFDcEIsT0FJQTtBQUNBLE1BQUksYUFBcUI7QUFDekIsTUFBSTtBQUNGO0FBQUMsS0FBQyxFQUFFLGFBQWEsUUFBUSxJQUFJLE1BQU0sa0JBQWtCO0FBQUEsRUFDdkQsUUFBUTtBQUNOLFdBQU8sRUFBRSxJQUFJLE9BQU8sT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLEVBQUU7QUFBQSxFQUN2RDtBQUVBLFFBQU0sTUFBTSxHQUFHLGVBQWUsRUFBRSxZQUFZO0FBQzVDLFFBQU0sVUFBVTtBQUFBLElBQ2QsR0FBRyxnQkFBZ0IsV0FBVztBQUFBLElBQzlCLGtCQUFrQjtBQUFBLElBQ2xCLHVCQUF1QjtBQUFBLEVBQ3pCO0FBRUEsTUFBSTtBQUNGLFVBQU0sV0FBVyxNQUFNLGNBQU07QUFBQSxNQUMzQjtBQUFBLE1BQ0EsRUFBRSxPQUFPLE1BQU0sT0FBTyxFQUFFO0FBQUEsTUFDeEIsRUFBRSxTQUFTLFNBQVMsTUFBTyxnQkFBZ0IsTUFBTSxLQUFLO0FBQUEsSUFDeEQ7QUFDQSxRQUFJLFNBQVMsV0FBVyxLQUFLO0FBQzNCLGFBQU8sRUFBRSxJQUFJLE1BQU0sUUFBUSxTQUFTLEtBQUs7QUFBQSxJQUMzQztBQUNBLFFBQUksU0FBUyxXQUFXLEtBQUs7QUFDM0IsYUFBTyxFQUFFLElBQUksT0FBTyxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsRUFBRTtBQUFBLElBQ3ZEO0FBQ0EsUUFBSSxTQUFTLFdBQVcsS0FBSztBQUMzQixhQUFPLEVBQUUsSUFBSSxPQUFPLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixFQUFFO0FBQUEsSUFDdkQ7QUFDQSxvQkFBZ0IseUJBQXlCLFNBQVMsTUFBTSxJQUFJO0FBQUEsTUFDMUQsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUNELFdBQU8sRUFBRSxJQUFJLE9BQU8sT0FBTyxFQUFFLE1BQU0sVUFBVSxRQUFRLFNBQVMsT0FBTyxFQUFFO0FBQUEsRUFDekUsU0FBUyxLQUFLO0FBQ1osUUFBSSxjQUFNLGFBQWEsR0FBRyxHQUFHO0FBRzNCLHNCQUFnQiwrQkFBK0IsSUFBSSxRQUFRLFNBQVMsSUFBSTtBQUFBLFFBQ3RFLE9BQU87QUFBQSxNQUNULENBQUM7QUFBQSxJQUNIO0FBQ0EsV0FBTyxFQUFFLElBQUksT0FBTyxPQUFPLEVBQUUsTUFBTSxVQUFVLEVBQUU7QUFBQSxFQUNqRDtBQUNGO0FBRUEsZUFBZSx5QkFBMkM7QUFDeEQsTUFBSTtBQUNGLFVBQU0sT0FBTyxNQUFNLGtCQUFrQjtBQUNyQyxXQUFPLEtBQUssU0FBUztBQUFBLEVBQ3ZCLFFBQVE7QUFDTixXQUFPO0FBQUEsRUFDVDtBQUNGO0FBVUEsZUFBc0IsMkJBQTZDO0FBQ2pFLE1BQUksYUFBcUI7QUFDekIsTUFBSTtBQUNGO0FBQUMsS0FBQyxFQUFFLGFBQWEsUUFBUSxJQUFJLE1BQU0sa0JBQWtCO0FBQUEsRUFDdkQsUUFBUTtBQUNOLFdBQU87QUFBQSxFQUNUO0FBRUEsTUFBSSxNQUFNLHVCQUF1QixHQUFHO0FBQ2xDLFdBQU87QUFBQSxFQUNUO0FBS0EsUUFBTSxNQUFNLEdBQUcsZUFBZSxFQUFFLFlBQVk7QUFDNUMsUUFBTSxVQUFVO0FBQUEsSUFDZCxHQUFHLGdCQUFnQixXQUFXO0FBQUEsSUFDOUIsdUJBQXVCO0FBQUEsRUFDekI7QUFFQSxNQUFJO0FBQ0YsVUFBTSxXQUFXLE1BQU0sY0FBTTtBQUFBLE1BQzNCO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ04sa0JBQWtCO0FBQUEsVUFDbEIsS0FBSztBQUFBLFVBQ0wsYUFBYTtBQUFBLFVBQ2IsYUFBYSxDQUFDO0FBQUEsVUFDZCxXQUFXO0FBQUEsWUFDVCxFQUFFLE1BQU0sVUFBVSxTQUFTLE9BQU87QUFBQSxZQUNsQyxFQUFFLE1BQU0sUUFBUSxTQUFTLEtBQUs7QUFBQSxVQUNoQztBQUFBLFVBQ0EsZ0JBQWdCO0FBQUEsWUFDZCxlQUFlLENBQUM7QUFBQSxZQUNoQixxQkFBcUI7QUFBQSxVQUN2QjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxFQUFFLFNBQVMsU0FBUyxNQUFPLGdCQUFnQixNQUFNLEtBQUs7QUFBQSxJQUN4RDtBQUNBLFdBQU8sU0FBUyxVQUFVLE9BQU8sU0FBUyxTQUFTO0FBQUEsRUFDckQsUUFBUTtBQUNOLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFHQSxlQUFzQixhQUErQjtBQUNuRCxNQUFJO0FBQ0YsVUFBTSxrQkFBa0I7QUFDeEIsV0FBTztBQUFBLEVBQ1QsUUFBUTtBQUNOLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFFTyxTQUFTLGdCQUF3QjtBQUN0QyxTQUFPLEdBQUcsZUFBZSxFQUFFLGdCQUFnQjtBQUM3QztBQXJMQSxJQU1NLHNCQVNPO0FBZmIsSUFBQUEsWUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0sdUJBQXVCO0FBU3RCLElBQU0sc0JBQU4sTUFBMEI7QUFBQSxNQUN0QjtBQUFBLE1BQ1QsWUFBWSxLQUFhO0FBQ3ZCLGFBQUssU0FBUztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxTQUFpQjtBQUNmLGVBQU8sS0FBSztBQUFBLE1BQ2Q7QUFBQSxNQUNBLFdBQW1CO0FBQ2pCLGVBQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxTQUFpQjtBQUNmLGVBQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxDQUFDLHVCQUFPLElBQUksNEJBQTRCLENBQUMsSUFBWTtBQUNuRCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNIQSxlQUFlQyxrQkFBd0M7QUFDckQsTUFBSSxDQUFFLE1BQU1DLFdBQVcsR0FBSTtBQUN6QixXQUFPO01BQUVDLFFBQVE7SUFBZ0I7RUFDbkM7QUFFQSxRQUFNQyxXQUFXLE1BQU1DLGdCQUFnQjtBQUN2QyxNQUFJRCxhQUFhLGlCQUFpQjtBQUNoQyxXQUFPO01BQUVELFFBQVE7SUFBbUI7RUFDdEM7QUFDQSxNQUFJQyxhQUFhLHFCQUFxQjtBQUNwQyxXQUFPO01BQUVELFFBQVE7SUFBdUI7RUFDMUM7QUFJQSxRQUFNO0lBQUVHO0VBQU8sSUFBSSxNQUFNQyxNQUFNLE1BQU0sQ0FBQyxRQUFRLE9BQU8sR0FBRztJQUN0REQsUUFBUTtJQUNSRSxRQUFRO0lBQ1JDLFNBQVM7SUFDVEMsUUFBUTtFQUNWLENBQUM7QUFDRCxRQUFNQyxVQUFVTCxPQUFPTSxLQUFLO0FBQzVCLE1BQUksQ0FBQ0QsU0FBUztBQUNaLFdBQU87TUFBRVIsUUFBUTtJQUF1QjtFQUMxQztBQUNBLFNBQU87SUFBRUEsUUFBUTtJQUFnQlUsT0FBTyxJQUFJQyxvQkFBb0JILE9BQU87RUFBRTtBQUMzRTtBQUVBLFNBQVNJLGFBQWFDLEtBQXVCQyxTQUF5QjtBQUNwRSxVQUFRRCxJQUFJRSxNQUFJO0lBQ2QsS0FBSztBQUNILGFBQU8sOEJBQThCRCxPQUFPO0lBQzlDLEtBQUs7QUFDSCxhQUFPO0lBQ1QsS0FBSztBQUNILGFBQU8saUJBQWlCRCxJQUFJYixNQUFNO0lBQ3BDLEtBQUs7QUFDSCxhQUFPO0VBQ1g7QUFDRjtBQU9BLFNBQVNnQixJQUFJO0VBQUVDO0FBQTBDLEdBQUc7QUFDMUQsUUFBTSxDQUFDQyxNQUFNQyxPQUFPLElBQUlDLFNBQWU7SUFBRUMsTUFBTTtFQUFXLENBQUM7QUFFM0RDLFlBQVUsTUFBTTtBQUNkQyxhQUFTLDhCQUE4QixDQUFDLENBQUM7QUFDekMsU0FBS3pCLGdCQUFnQixFQUFFMEIsS0FBSyxPQUFNQyxXQUFVO0FBQzFDLGNBQVFBLE9BQU96QixRQUFNO1FBQ25CLEtBQUs7QUFDSHVCLG1CQUFTLDZCQUE2QjtZQUNwQ0UsUUFBUTtVQUNWLENBQUM7QUFDRFIsaUJBQU8sNENBQTRDO0FBQ25EO1FBQ0YsS0FBSztRQUNMLEtBQUssd0JBQXdCO0FBQzNCLGdCQUFNUyxNQUFNLEdBQUdDLGNBQWMsQ0FBQztBQUM5QixnQkFBTUMsWUFBWUYsR0FBRztBQUNyQkgsbUJBQVMsNkJBQTZCO1lBQ3BDRSxRQUFRQSxPQUFPekI7VUFDakIsQ0FBQztBQUNEaUIsaUJBQ0VRLE9BQU96QixXQUFXLHFCQUNkLDJIQUEySDBCLEdBQUcsS0FDOUgsb0dBQW9HQSxHQUFHLEVBQzdHO0FBQ0E7UUFDRjtRQUNBLEtBQUs7QUFDSFAsa0JBQVE7WUFBRUUsTUFBTTtZQUFXWCxPQUFPZSxPQUFPZjtVQUFNLENBQUM7TUFDcEQ7SUFDRixDQUFDO0VBR0gsR0FBRyxDQUFBLENBQUU7QUFFTCxRQUFNbUIsZUFBZUEsTUFBTTtBQUN6Qk4sYUFBUyw2QkFBNkI7TUFDcENFLFFBQVE7SUFDVixDQUFDO0FBQ0RSLFdBQU87RUFDVDtBQUVBLFFBQU1hLGdCQUFnQixPQUFPcEIsV0FBK0I7QUFDMURTLFlBQVE7TUFBRUUsTUFBTTtJQUFZLENBQUM7QUFFN0IsVUFBTUksU0FBUyxNQUFNTSxrQkFBa0JyQixNQUFLO0FBQzVDLFFBQUksQ0FBQ2UsT0FBT08sSUFBSTtBQUNkVCxlQUFTLDZCQUE2QjtRQUNwQ0UsUUFBUTtRQUNSUSxZQUFZUixPQUFPUyxNQUFNbkI7TUFDM0IsQ0FBQztBQUNERSxhQUFPTCxhQUFhYSxPQUFPUyxPQUFPUCxjQUFjLENBQUMsQ0FBQztBQUNsRDtJQUNGO0FBS0EsVUFBTVEseUJBQXlCO0FBRS9CLFVBQU1ULE1BQU1DLGNBQWM7QUFDMUIsVUFBTUMsWUFBWUYsR0FBRztBQUVyQkgsYUFBUyw2QkFBNkI7TUFDcENFLFFBQVE7SUFDVixDQUFDO0FBQ0RSLFdBQU8sZ0JBQWdCUSxPQUFPQSxPQUFPVyxlQUFlLFlBQVlWLEdBQUcsRUFBRTtFQUN2RTtBQUVBLE1BQUlSLEtBQUtHLFNBQVMsWUFBWTtBQUM1QixXQUFPLDhCQUFDLGdCQUFhLFNBQVEsK0JBQXdCO0VBQ3ZEO0FBRUEsTUFBSUgsS0FBS0csU0FBUyxhQUFhO0FBQzdCLFdBQU8sOEJBQUMsZ0JBQWEsU0FBUSxxQ0FBOEI7RUFDN0Q7QUFFQSxRQUFNWCxRQUFRUSxLQUFLUjtBQUNuQixTQUNFLDhCQUFDLFVBQ0MsT0FBTSx3Q0FDTixVQUFVbUIsY0FDVixnQkFBYyxRQUVkLDhCQUFDLHFCQUFJLGVBQWMsWUFDakIsOEJBQUMsa0JBQUkscUdBR0wsR0FDQSw4QkFBQyxjQUFLLFVBQVEsUUFBQSw2REFFZCxDQUNGLEdBQ0EsOEJBQUMsVUFDQyxTQUFTLENBQ1A7SUFBRVEsT0FBTztJQUFZQyxPQUFPO0VBQU8sR0FDbkM7SUFBRUQsT0FBTztJQUFVQyxPQUFPO0VBQVMsQ0FBQyxHQUV0QyxVQUFVQSxXQUFTO0FBQ2pCLFFBQUlBLFVBQVUsUUFBUTtBQUNwQixXQUFLUixjQUFjcEIsS0FBSztJQUMxQixPQUFPO0FBQ0xtQixtQkFBYTtJQUNmO0VBQ0YsR0FDQSxVQUFVQSxjQUFhLENBRTNCO0FBRUo7QUFFQSxlQUFzQlUsS0FDcEJ0QixRQUMwQjtBQUMxQixTQUFPLDhCQUFDLE9BQUksUUFBZTtBQUM3QjtBQTlMQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0EsSUFBQXVCOzs7IiwKICAibmFtZXMiOiBbImluaXRfYXBpIiwgImNoZWNrTG9naW5TdGF0ZSIsICJpc1NpZ25lZEluIiwgInN0YXR1cyIsICJnaFN0YXR1cyIsICJnZXRHaEF1dGhTdGF0dXMiLCAic3Rkb3V0IiwgImV4ZWNhIiwgInN0ZGVyciIsICJ0aW1lb3V0IiwgInJlamVjdCIsICJ0cmltbWVkIiwgInRyaW0iLCAidG9rZW4iLCAiUmVkYWN0ZWRHaXRodWJUb2tlbiIsICJlcnJvck1lc3NhZ2UiLCAiZXJyIiwgImNvZGVVcmwiLCAia2luZCIsICJXZWIiLCAib25Eb25lIiwgInN0ZXAiLCAic2V0U3RlcCIsICJ1c2VTdGF0ZSIsICJuYW1lIiwgInVzZUVmZmVjdCIsICJsb2dFdmVudCIsICJ0aGVuIiwgInJlc3VsdCIsICJ1cmwiLCAiZ2V0Q29kZVdlYlVybCIsICJvcGVuQnJvd3NlciIsICJoYW5kbGVDYW5jZWwiLCAiaGFuZGxlQ29uZmlybSIsICJpbXBvcnRHaXRodWJUb2tlbiIsICJvayIsICJlcnJvcl9raW5kIiwgImVycm9yIiwgImNyZWF0ZURlZmF1bHRFbnZpcm9ubWVudCIsICJnaXRodWJfdXNlcm5hbWUiLCAibGFiZWwiLCAidmFsdWUiLCAiY2FsbCIsICJpbml0X2FwaSJdCn0K
