#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  OAuthService,
  Select,
  SelectMulti,
  Spinner,
  TextInput,
  init_CustomSelect,
  init_SelectMulti,
  init_Spinner,
  init_TextInput,
  init_oauth
} from "./chunk-OTDPNGFK.mjs";
import "./chunk-PJK4KGGT.mjs";
import {
  Byline,
  ConfigurableShortcutHint,
  Dialog,
  KeyboardShortcutHint,
  init_Byline,
  init_ConfigurableShortcutHint,
  init_Dialog,
  init_KeyboardShortcutHint
} from "./chunk-PEMK4FQH.mjs";
import "./chunk-SQ6KOOZS.mjs";
import "./chunk-NPSF3VOX.mjs";
import "./chunk-Y2PD6CVC.mjs";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-S5Z6SZDA.mjs";
import "./chunk-GYT5IJSH.mjs";
import "./chunk-3MNWUNDS.mjs";
import {
  init_useKeybinding,
  init_useTerminalSize,
  useKeybinding,
  useKeybindings,
  useTerminalSize
} from "./chunk-HO5F7BV3.mjs";
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
import {
  init_browser,
  openBrowser
} from "./chunk-IAEMXMG4.mjs";
import "./chunk-L57KLZUF.mjs";
import "./chunk-J7TDGLE4.mjs";
import "./chunk-HUHT3U2I.mjs";
import "./chunk-X7OJ6FBK.mjs";
import "./chunk-4GJVIJWN.mjs";
import "./chunk-27EOXKZU.mjs";
import "./chunk-HUEORIXP.mjs";
import "./chunk-H6COQF52.mjs";
import "./chunk-IQJUSPBJ.mjs";
import "./chunk-R326WRGL.mjs";
import "./chunk-GG7RJVEZ.mjs";
import "./chunk-DNMRSSYF.mjs";
import {
  Link,
  ThemedBox_default,
  ThemedText,
  c,
  color,
  init_ink,
  init_osc,
  init_react_compiler_runtime,
  setClipboard,
  useTheme
} from "./chunk-HWTXKBLR.mjs";
import {
  init_react,
  react_default,
  useCallback,
  useEffect,
  useRef,
  useState
} from "./chunk-TEJH3H3H.mjs";
import "./chunk-P7DIEGS5.mjs";
import "./chunk-OYNA6LYH.mjs";
import "./chunk-V7ZPGO35.mjs";
import "./chunk-YG5NZNOR.mjs";
import {
  getAnthropicApiKey,
  init_auth,
  init_config2 as init_config,
  init_stringUtils,
  isAnthropicAuthEnabled,
  plural,
  saveGlobalConfig,
  saveOAuthTokensIfNeeded
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
import {
  getGithubRepo,
  init_git
} from "./chunk-7SC6PTLR.mjs";
import "./chunk-NT7W7YWD.mjs";
import "./chunk-4S33EKPF.mjs";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-VNIROYYL.mjs";
import "./chunk-TZFTPSMG.mjs";
import {
  init_log,
  logError
} from "./chunk-KCFW5MKY.mjs";
import "./chunk-5GKIDOKP.mjs";
import "./chunk-IPMELYAB.mjs";
import "./chunk-F5ODCUJD.mjs";
import {
  execa,
  figures_default,
  init_execa,
  init_figures
} from "./chunk-ZAYB3WZV.mjs";
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

// src/components/WorkflowMultiselectDialog.tsx
function renderInputGuide(exitState) {
  if (exitState.pending) {
    return /* @__PURE__ */ react_default.createElement(ThemedText, null, "Press ", exitState.keyName, " again to exit");
  }
  return /* @__PURE__ */ react_default.createElement(Byline, null, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "\u2191\u2193", action: "navigate" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Space", action: "toggle" }), /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "Enter", action: "confirm" }), /* @__PURE__ */ react_default.createElement(ConfigurableShortcutHint, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }));
}
function WorkflowMultiselectDialog(t0) {
  const $ = c(14);
  const {
    onSubmit,
    defaultSelections
  } = t0;
  const [showError, setShowError] = useState(false);
  let t1;
  if ($[0] !== onSubmit) {
    t1 = (selectedValues) => {
      if (selectedValues.length === 0) {
        setShowError(true);
        return;
      }
      setShowError(false);
      onSubmit(selectedValues);
    };
    $[0] = onSubmit;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const handleSubmit = t1;
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      setShowError(false);
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const handleChange = t2;
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => {
      setShowError(true);
    };
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const handleCancel = t3;
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "More workflow examples (issue triage, CI fixes, etc.) at:", " ", /* @__PURE__ */ react_default.createElement(Link, { url: "https://github.com/anthropics/claude-code-action/blob/main/examples/" }, "https://github.com/anthropics/claude-code-action/blob/main/examples/")));
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = WORKFLOWS.map(_temp);
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] !== defaultSelections || $[7] !== handleSubmit) {
    t6 = /* @__PURE__ */ react_default.createElement(SelectMulti, { options: t5, defaultValue: defaultSelections, onSubmit: handleSubmit, onChange: handleChange, onCancel: handleCancel, hideIndexes: true });
    $[6] = defaultSelections;
    $[7] = handleSubmit;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] !== showError) {
    t7 = showError && /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "You must select at least one workflow to continue"));
    $[9] = showError;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  if ($[11] !== t6 || $[12] !== t7) {
    t8 = /* @__PURE__ */ react_default.createElement(Dialog, { title: "Select GitHub workflows to install", subtitle: "We'll create a workflow file in your repository for each one you select.", onCancel: handleCancel, inputGuide: renderInputGuide }, t4, t6, t7);
    $[11] = t6;
    $[12] = t7;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  return t8;
}
function _temp(workflow) {
  return {
    label: workflow.label,
    value: workflow.value
  };
}
var WORKFLOWS;
var init_WorkflowMultiselectDialog = __esm({
  "src/components/WorkflowMultiselectDialog.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
    init_ConfigurableShortcutHint();
    init_SelectMulti();
    init_Byline();
    init_Dialog();
    init_KeyboardShortcutHint();
    WORKFLOWS = [{
      value: "claude",
      label: "@Blaude - Tag @blaude in issues and PR comments"
    }, {
      value: "claude-review",
      label: "Blaude Review - Automated code review on new PRs"
    }];
  }
});

// src/constants/github-app.ts
var PR_TITLE, GITHUB_ACTION_SETUP_DOCS_URL, WORKFLOW_CONTENT, PR_BODY, CODE_REVIEW_PLUGIN_WORKFLOW_CONTENT;
var init_github_app = __esm({
  "src/constants/github-app.ts"() {
    PR_TITLE = "Add Claude Code GitHub Workflow";
    GITHUB_ACTION_SETUP_DOCS_URL = "https://github.com/anthropics/claude-code-action/blob/main/docs/setup.md";
    WORKFLOW_CONTENT = `name: Claude Code

on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
  issues:
    types: [opened, assigned]
  pull_request_review:
    types: [submitted]

jobs:
  claude:
    if: |
      (github.event_name == 'issue_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review' && contains(github.event.review.body, '@claude')) ||
      (github.event_name == 'issues' && (contains(github.event.issue.body, '@claude') || contains(github.event.issue.title, '@claude')))
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write
      actions: read # Required for Claude to read CI results on PRs
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code
        id: claude
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}

          # This is an optional setting that allows Claude to read CI results on PRs
          additional_permissions: |
            actions: read

          # Optional: Give a custom prompt to Claude. If this is not specified, Claude will perform the instructions specified in the comment that tagged it.
          # prompt: 'Update the pull request description to include a summary of changes.'

          # Optional: Add claude_args to customize behavior and configuration
          # See https://github.com/anthropics/claude-code-action/blob/main/docs/usage.md
          # or https://code.claude.com/docs/en/cli-reference for available options
          # claude_args: '--allowed-tools Bash(gh pr:*)'

`;
    PR_BODY = `## \u{1F916} Installing Claude Code GitHub App

This PR adds a GitHub Actions workflow that enables Claude Code integration in our repository.

### What is Claude Code?

[Claude Code](https://claude.com/claude-code) is an AI coding agent that can help with:
- Bug fixes and improvements  
- Documentation updates
- Implementing new features
- Code reviews and suggestions
- Writing tests
- And more!

### How it works

Once this PR is merged, we'll be able to interact with Claude by mentioning @claude in a pull request or issue comment.
Once the workflow is triggered, Claude will analyze the comment and surrounding context, and execute on the request in a GitHub action.

### Important Notes

- **This workflow won't take effect until this PR is merged**
- **@claude mentions won't work until after the merge is complete**
- The workflow runs automatically whenever Claude is mentioned in PR or issue comments
- Claude gets access to the entire PR or issue context including files, diffs, and previous comments

### Security

- Our Anthropic API key is securely stored as a GitHub Actions secret
- Only users with write access to the repository can trigger the workflow
- All Claude runs are stored in the GitHub Actions run history
- Claude's default tools are limited to reading/writing files and interacting with our repo by creating comments, branches, and commits.
- We can add more allowed tools by adding them to the workflow file like:

\`\`\`
allowed_tools: Bash(npm install),Bash(npm run build),Bash(npm run lint),Bash(npm run test)
\`\`\`

There's more information in the [Claude Code action repo](https://github.com/anthropics/claude-code-action).

After merging this PR, let's try mentioning @claude in a comment on any PR to get started!`;
    CODE_REVIEW_PLUGIN_WORKFLOW_CONTENT = `name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize, ready_for_review, reopened]
    # Optional: Only run on specific file changes
    # paths:
    #   - "src/**/*.ts"
    #   - "src/**/*.tsx"
    #   - "src/**/*.js"
    #   - "src/**/*.jsx"

jobs:
  claude-review:
    # Optional: Filter by PR author
    # if: |
    #   github.event.pull_request.user.login == 'external-contributor' ||
    #   github.event.pull_request.user.login == 'new-developer' ||
    #   github.event.pull_request.author_association == 'FIRST_TIME_CONTRIBUTOR'

    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code Review
        id: claude-review
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          plugin_marketplaces: 'https://github.com/anthropics/claude-code.git'
          plugins: 'code-review@claude-code-plugins'
          prompt: '/code-review:code-review \${{ github.repository }}/pull/\${{ github.event.pull_request.number }}'
          # See https://github.com/anthropics/claude-code-action/blob/main/docs/usage.md
          # or https://code.claude.com/docs/en/cli-reference for available options

`;
  }
});

// src/commands/install-github-app/ApiKeyStep.tsx
function ApiKeyStep(t0) {
  const $ = c(55);
  const {
    existingApiKey,
    apiKeyOrOAuthToken,
    onApiKeyChange,
    onSubmit,
    onToggleUseExistingKey,
    onCreateOAuthToken,
    selectedOption: t1,
    onSelectOption
  } = t0;
  const selectedOption = t1 === void 0 ? existingApiKey ? "existing" : onCreateOAuthToken ? "oauth" : "new" : t1;
  const [cursorOffset, setCursorOffset] = useState(0);
  const terminalSize = useTerminalSize();
  const [theme] = useTheme();
  let t2;
  if ($[0] !== existingApiKey || $[1] !== onCreateOAuthToken || $[2] !== onSelectOption || $[3] !== onToggleUseExistingKey || $[4] !== selectedOption) {
    t2 = () => {
      if (selectedOption === "new" && onCreateOAuthToken) {
        onSelectOption?.("oauth");
      } else {
        if (selectedOption === "oauth" && existingApiKey) {
          onSelectOption?.("existing");
          onToggleUseExistingKey(true);
        }
      }
    };
    $[0] = existingApiKey;
    $[1] = onCreateOAuthToken;
    $[2] = onSelectOption;
    $[3] = onToggleUseExistingKey;
    $[4] = selectedOption;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  const handlePrevious = t2;
  let t3;
  if ($[6] !== onCreateOAuthToken || $[7] !== onSelectOption || $[8] !== onToggleUseExistingKey || $[9] !== selectedOption) {
    t3 = () => {
      if (selectedOption === "existing") {
        onSelectOption?.(onCreateOAuthToken ? "oauth" : "new");
        onToggleUseExistingKey(false);
      } else {
        if (selectedOption === "oauth") {
          onSelectOption?.("new");
        }
      }
    };
    $[6] = onCreateOAuthToken;
    $[7] = onSelectOption;
    $[8] = onToggleUseExistingKey;
    $[9] = selectedOption;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  const handleNext = t3;
  let t4;
  if ($[11] !== onCreateOAuthToken || $[12] !== onSubmit || $[13] !== selectedOption) {
    t4 = () => {
      if (selectedOption === "oauth" && onCreateOAuthToken) {
        onCreateOAuthToken();
      } else {
        onSubmit();
      }
    };
    $[11] = onCreateOAuthToken;
    $[12] = onSubmit;
    $[13] = selectedOption;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  const handleConfirm = t4;
  const isTextInputVisible = selectedOption === "new";
  let t5;
  if ($[15] !== handleConfirm || $[16] !== handleNext || $[17] !== handlePrevious) {
    t5 = {
      "confirm:previous": handlePrevious,
      "confirm:next": handleNext,
      "confirm:yes": handleConfirm
    };
    $[15] = handleConfirm;
    $[16] = handleNext;
    $[17] = handlePrevious;
    $[18] = t5;
  } else {
    t5 = $[18];
  }
  const t6 = !isTextInputVisible;
  let t7;
  if ($[19] !== t6) {
    t7 = {
      context: "Confirmation",
      isActive: t6
    };
    $[19] = t6;
    $[20] = t7;
  } else {
    t7 = $[20];
  }
  useKeybindings(t5, t7);
  let t8;
  if ($[21] !== handleNext || $[22] !== handlePrevious) {
    t8 = {
      "confirm:previous": handlePrevious,
      "confirm:next": handleNext
    };
    $[21] = handleNext;
    $[22] = handlePrevious;
    $[23] = t8;
  } else {
    t8 = $[23];
  }
  let t9;
  if ($[24] !== isTextInputVisible) {
    t9 = {
      context: "Confirmation",
      isActive: isTextInputVisible
    };
    $[24] = isTextInputVisible;
    $[25] = t9;
  } else {
    t9 = $[25];
  }
  useKeybindings(t8, t9);
  let t10;
  if ($[26] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Install GitHub App"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Choose API key"));
    $[26] = t10;
  } else {
    t10 = $[26];
  }
  let t11;
  if ($[27] !== existingApiKey || $[28] !== selectedOption || $[29] !== theme) {
    t11 = existingApiKey && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, selectedOption === "existing" ? color("success", theme)("> ") : "  ", "Use your existing Blaude API key"));
    $[27] = existingApiKey;
    $[28] = selectedOption;
    $[29] = theme;
    $[30] = t11;
  } else {
    t11 = $[30];
  }
  let t12;
  if ($[31] !== onCreateOAuthToken || $[32] !== selectedOption || $[33] !== theme) {
    t12 = onCreateOAuthToken && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, selectedOption === "oauth" ? color("success", theme)("> ") : "  ", "Create a long-lived token with your Claude subscription"));
    $[31] = onCreateOAuthToken;
    $[32] = selectedOption;
    $[33] = theme;
    $[34] = t12;
  } else {
    t12 = $[34];
  }
  let t13;
  if ($[35] !== selectedOption || $[36] !== theme) {
    t13 = selectedOption === "new" ? color("success", theme)("> ") : "  ";
    $[35] = selectedOption;
    $[36] = theme;
    $[37] = t13;
  } else {
    t13 = $[37];
  }
  let t14;
  if ($[38] !== t13) {
    t14 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, t13, "Enter a new API key"));
    $[38] = t13;
    $[39] = t14;
  } else {
    t14 = $[39];
  }
  let t15;
  if ($[40] !== apiKeyOrOAuthToken || $[41] !== cursorOffset || $[42] !== onApiKeyChange || $[43] !== onSubmit || $[44] !== selectedOption || $[45] !== terminalSize) {
    t15 = selectedOption === "new" && /* @__PURE__ */ react_default.createElement(TextInput, { value: apiKeyOrOAuthToken, onChange: onApiKeyChange, onSubmit, onPaste: onApiKeyChange, focus: true, placeholder: "sk-ant\u2026 (Create a new key at https://platform.claude.com/settings/keys)", mask: "*", columns: terminalSize.columns, cursorOffset, onChangeCursorOffset: setCursorOffset, showCursor: true });
    $[40] = apiKeyOrOAuthToken;
    $[41] = cursorOffset;
    $[42] = onApiKeyChange;
    $[43] = onSubmit;
    $[44] = selectedOption;
    $[45] = terminalSize;
    $[46] = t15;
  } else {
    t15 = $[46];
  }
  let t16;
  if ($[47] !== t11 || $[48] !== t12 || $[49] !== t14 || $[50] !== t15) {
    t16 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", borderStyle: "round", paddingX: 1 }, t10, t11, t12, t14, t15);
    $[47] = t11;
    $[48] = t12;
    $[49] = t14;
    $[50] = t15;
    $[51] = t16;
  } else {
    t16 = $[51];
  }
  let t17;
  if ($[52] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t17 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2191/\u2193 to select \xB7 Enter to continue"));
    $[52] = t17;
  } else {
    t17 = $[52];
  }
  let t18;
  if ($[53] !== t16) {
    t18 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t16, t17);
    $[53] = t16;
    $[54] = t18;
  } else {
    t18 = $[54];
  }
  return t18;
}
var init_ApiKeyStep = __esm({
  "src/commands/install-github-app/ApiKeyStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_TextInput();
    init_useTerminalSize();
    init_ink();
    init_useKeybinding();
  }
});

// src/commands/install-github-app/CheckExistingSecretStep.tsx
function CheckExistingSecretStep(t0) {
  const $ = c(42);
  const {
    useExistingSecret,
    secretName,
    onToggleUseExistingSecret,
    onSecretNameChange,
    onSubmit
  } = t0;
  const [cursorOffset, setCursorOffset] = useState(0);
  const terminalSize = useTerminalSize();
  const [theme] = useTheme();
  let t1;
  if ($[0] !== onToggleUseExistingSecret) {
    t1 = () => onToggleUseExistingSecret(true);
    $[0] = onToggleUseExistingSecret;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const handlePrevious = t1;
  let t2;
  if ($[2] !== onToggleUseExistingSecret) {
    t2 = () => onToggleUseExistingSecret(false);
    $[2] = onToggleUseExistingSecret;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const handleNext = t2;
  let t3;
  if ($[4] !== handleNext || $[5] !== handlePrevious || $[6] !== onSubmit) {
    t3 = {
      "confirm:previous": handlePrevious,
      "confirm:next": handleNext,
      "confirm:yes": onSubmit
    };
    $[4] = handleNext;
    $[5] = handlePrevious;
    $[6] = onSubmit;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== useExistingSecret) {
    t4 = {
      context: "Confirmation",
      isActive: useExistingSecret
    };
    $[8] = useExistingSecret;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  useKeybindings(t3, t4);
  let t5;
  if ($[10] !== handleNext || $[11] !== handlePrevious) {
    t5 = {
      "confirm:previous": handlePrevious,
      "confirm:next": handleNext
    };
    $[10] = handleNext;
    $[11] = handlePrevious;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  const t6 = !useExistingSecret;
  let t7;
  if ($[13] !== t6) {
    t7 = {
      context: "Confirmation",
      isActive: t6
    };
    $[13] = t6;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  useKeybindings(t5, t7);
  let t8;
  if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Install GitHub App"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Setup API key secret"));
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  let t9;
  if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning" }, "ANTHROPIC_API_KEY already exists in repository secrets!"));
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  let t10;
  if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "Would you like to:"));
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  let t11;
  if ($[18] !== theme || $[19] !== useExistingSecret) {
    t11 = useExistingSecret ? color("success", theme)("> ") : "  ";
    $[18] = theme;
    $[19] = useExistingSecret;
    $[20] = t11;
  } else {
    t11 = $[20];
  }
  let t12;
  if ($[21] !== t11) {
    t12 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, t11, "Use the existing API key"));
    $[21] = t11;
    $[22] = t12;
  } else {
    t12 = $[22];
  }
  let t13;
  if ($[23] !== theme || $[24] !== useExistingSecret) {
    t13 = !useExistingSecret ? color("success", theme)("> ") : "  ";
    $[23] = theme;
    $[24] = useExistingSecret;
    $[25] = t13;
  } else {
    t13 = $[25];
  }
  let t14;
  if ($[26] !== t13) {
    t14 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, t13, "Create a new secret with a different name"));
    $[26] = t13;
    $[27] = t14;
  } else {
    t14 = $[27];
  }
  let t15;
  if ($[28] !== cursorOffset || $[29] !== onSecretNameChange || $[30] !== onSubmit || $[31] !== secretName || $[32] !== terminalSize || $[33] !== useExistingSecret) {
    t15 = !useExistingSecret && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "Enter new secret name (alphanumeric with underscores):")), /* @__PURE__ */ react_default.createElement(TextInput, { value: secretName, onChange: onSecretNameChange, onSubmit, focus: true, placeholder: "e.g., CLAUDE_API_KEY", columns: terminalSize.columns, cursorOffset, onChangeCursorOffset: setCursorOffset, showCursor: true }));
    $[28] = cursorOffset;
    $[29] = onSecretNameChange;
    $[30] = onSubmit;
    $[31] = secretName;
    $[32] = terminalSize;
    $[33] = useExistingSecret;
    $[34] = t15;
  } else {
    t15 = $[34];
  }
  let t16;
  if ($[35] !== t12 || $[36] !== t14 || $[37] !== t15) {
    t16 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", borderStyle: "round", paddingX: 1 }, t8, t9, t10, t12, t14, t15);
    $[35] = t12;
    $[36] = t14;
    $[37] = t15;
    $[38] = t16;
  } else {
    t16 = $[38];
  }
  let t17;
  if ($[39] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t17 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2191/\u2193 to select \xB7 Enter to continue"));
    $[39] = t17;
  } else {
    t17 = $[39];
  }
  let t18;
  if ($[40] !== t16) {
    t18 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t16, t17);
    $[40] = t16;
    $[41] = t18;
  } else {
    t18 = $[41];
  }
  return t18;
}
var init_CheckExistingSecretStep = __esm({
  "src/commands/install-github-app/CheckExistingSecretStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_TextInput();
    init_useTerminalSize();
    init_ink();
    init_useKeybinding();
  }
});

// src/commands/install-github-app/CheckGitHubStep.tsx
function CheckGitHubStep() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ react_default.createElement(ThemedText, null, "Checking GitHub CLI installation\u2026");
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
var init_CheckGitHubStep = __esm({
  "src/commands/install-github-app/CheckGitHubStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
  }
});

// src/commands/install-github-app/ChooseRepoStep.tsx
function ChooseRepoStep(t0) {
  const $ = c(49);
  const {
    currentRepo,
    useCurrentRepo,
    repoUrl,
    onRepoUrlChange,
    onSubmit,
    onToggleUseCurrentRepo
  } = t0;
  const [cursorOffset, setCursorOffset] = useState(0);
  const [showEmptyError, setShowEmptyError] = useState(false);
  const terminalSize = useTerminalSize();
  const textInputColumns = terminalSize.columns;
  let t1;
  if ($[0] !== currentRepo || $[1] !== onSubmit || $[2] !== repoUrl || $[3] !== useCurrentRepo) {
    t1 = () => {
      const repoName = useCurrentRepo ? currentRepo : repoUrl;
      if (!repoName?.trim()) {
        setShowEmptyError(true);
        return;
      }
      onSubmit();
    };
    $[0] = currentRepo;
    $[1] = onSubmit;
    $[2] = repoUrl;
    $[3] = useCurrentRepo;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  const handleSubmit = t1;
  const isTextInputVisible = !useCurrentRepo || !currentRepo;
  let t2;
  if ($[5] !== onToggleUseCurrentRepo) {
    t2 = () => {
      onToggleUseCurrentRepo(true);
      setShowEmptyError(false);
    };
    $[5] = onToggleUseCurrentRepo;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  const handlePrevious = t2;
  let t3;
  if ($[7] !== onToggleUseCurrentRepo) {
    t3 = () => {
      onToggleUseCurrentRepo(false);
      setShowEmptyError(false);
    };
    $[7] = onToggleUseCurrentRepo;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  const handleNext = t3;
  let t4;
  if ($[9] !== handleNext || $[10] !== handlePrevious || $[11] !== handleSubmit) {
    t4 = {
      "confirm:previous": handlePrevious,
      "confirm:next": handleNext,
      "confirm:yes": handleSubmit
    };
    $[9] = handleNext;
    $[10] = handlePrevious;
    $[11] = handleSubmit;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  const t5 = !isTextInputVisible;
  let t6;
  if ($[13] !== t5) {
    t6 = {
      context: "Confirmation",
      isActive: t5
    };
    $[13] = t5;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  useKeybindings(t4, t6);
  let t7;
  if ($[15] !== handleNext || $[16] !== handlePrevious) {
    t7 = {
      "confirm:previous": handlePrevious,
      "confirm:next": handleNext
    };
    $[15] = handleNext;
    $[16] = handlePrevious;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  let t8;
  if ($[18] !== isTextInputVisible) {
    t8 = {
      context: "Confirmation",
      isActive: isTextInputVisible
    };
    $[18] = isTextInputVisible;
    $[19] = t8;
  } else {
    t8 = $[19];
  }
  useKeybindings(t7, t8);
  let t9;
  if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Install GitHub App"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Select GitHub repository"));
    $[20] = t9;
  } else {
    t9 = $[20];
  }
  let t10;
  if ($[21] !== currentRepo || $[22] !== useCurrentRepo) {
    t10 = currentRepo && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: useCurrentRepo, color: useCurrentRepo ? "permission" : void 0 }, useCurrentRepo ? "> " : "  ", "Use current repository: ", currentRepo));
    $[21] = currentRepo;
    $[22] = useCurrentRepo;
    $[23] = t10;
  } else {
    t10 = $[23];
  }
  const t11 = !useCurrentRepo || !currentRepo;
  const t12 = !useCurrentRepo || !currentRepo ? "permission" : void 0;
  const t13 = !useCurrentRepo || !currentRepo ? "> " : "  ";
  const t14 = currentRepo ? "Enter a different repository" : "Enter repository";
  let t15;
  if ($[24] !== t11 || $[25] !== t12 || $[26] !== t13 || $[27] !== t14) {
    t15 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: t11, color: t12 }, t13, t14));
    $[24] = t11;
    $[25] = t12;
    $[26] = t13;
    $[27] = t14;
    $[28] = t15;
  } else {
    t15 = $[28];
  }
  let t16;
  if ($[29] !== currentRepo || $[30] !== cursorOffset || $[31] !== handleSubmit || $[32] !== onRepoUrlChange || $[33] !== repoUrl || $[34] !== textInputColumns || $[35] !== useCurrentRepo) {
    t16 = (!useCurrentRepo || !currentRepo) && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 2, marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(TextInput, { value: repoUrl, onChange: (value) => {
      onRepoUrlChange(value);
      setShowEmptyError(false);
    }, onSubmit: handleSubmit, focus: true, placeholder: "Enter a repo as owner/repo or https://github.com/owner/repo\u2026", columns: textInputColumns, cursorOffset, onChangeCursorOffset: setCursorOffset, showCursor: true }));
    $[29] = currentRepo;
    $[30] = cursorOffset;
    $[31] = handleSubmit;
    $[32] = onRepoUrlChange;
    $[33] = repoUrl;
    $[34] = textInputColumns;
    $[35] = useCurrentRepo;
    $[36] = t16;
  } else {
    t16 = $[36];
  }
  let t17;
  if ($[37] !== t10 || $[38] !== t15 || $[39] !== t16) {
    t17 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", borderStyle: "round", paddingX: 1 }, t9, t10, t15, t16);
    $[37] = t10;
    $[38] = t15;
    $[39] = t16;
    $[40] = t17;
  } else {
    t17 = $[40];
  }
  let t18;
  if ($[41] !== showEmptyError) {
    t18 = showEmptyError && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3, marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "Please enter a repository name to continue"));
    $[41] = showEmptyError;
    $[42] = t18;
  } else {
    t18 = $[42];
  }
  const t19 = currentRepo ? "\u2191/\u2193 to select \xB7 " : "";
  let t20;
  if ($[43] !== t19) {
    t20 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, t19, "Enter to continue"));
    $[43] = t19;
    $[44] = t20;
  } else {
    t20 = $[44];
  }
  let t21;
  if ($[45] !== t17 || $[46] !== t18 || $[47] !== t20) {
    t21 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t17, t18, t20);
    $[45] = t17;
    $[46] = t18;
    $[47] = t20;
    $[48] = t21;
  } else {
    t21 = $[48];
  }
  return t21;
}
var init_ChooseRepoStep = __esm({
  "src/commands/install-github-app/ChooseRepoStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_TextInput();
    init_useTerminalSize();
    init_ink();
    init_useKeybinding();
  }
});

// src/commands/install-github-app/CreatingStep.tsx
function CreatingStep(t0) {
  const $ = c(10);
  const {
    currentWorkflowInstallStep,
    secretExists,
    useExistingSecret,
    secretName,
    skipWorkflow: t1,
    selectedWorkflows
  } = t0;
  const skipWorkflow = t1 === void 0 ? false : t1;
  let t2;
  if ($[0] !== secretExists || $[1] !== secretName || $[2] !== selectedWorkflows || $[3] !== skipWorkflow || $[4] !== useExistingSecret) {
    t2 = skipWorkflow ? ["Getting repository information", secretExists && useExistingSecret ? "Using existing API key secret" : `Setting up ${secretName} secret`] : ["Getting repository information", "Creating branch", selectedWorkflows.length > 1 ? "Creating workflow files" : "Creating workflow file", secretExists && useExistingSecret ? "Using existing API key secret" : `Setting up ${secretName} secret`, "Opening pull request page"];
    $[0] = secretExists;
    $[1] = secretName;
    $[2] = selectedWorkflows;
    $[3] = skipWorkflow;
    $[4] = useExistingSecret;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  const progressSteps = t2;
  let t3;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Install GitHub App"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Create GitHub Actions workflow"));
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== currentWorkflowInstallStep || $[8] !== progressSteps) {
    t4 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", borderStyle: "round", paddingX: 1 }, t3, progressSteps.map((stepText, index) => {
      let status = "pending";
      if (index < currentWorkflowInstallStep) {
        status = "completed";
      } else {
        if (index === currentWorkflowInstallStep) {
          status = "in-progress";
        }
      }
      return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: index }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: status === "completed" ? "success" : status === "in-progress" ? "warning" : void 0 }, status === "completed" ? "\u2713 " : "", stepText, status === "in-progress" ? "\u2026" : ""));
    })));
    $[7] = currentWorkflowInstallStep;
    $[8] = progressSteps;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  return t4;
}
var init_CreatingStep = __esm({
  "src/commands/install-github-app/CreatingStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
  }
});

// src/commands/install-github-app/ErrorStep.tsx
function ErrorStep(t0) {
  const $ = c(15);
  const {
    error,
    errorReason,
    errorInstructions
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Install GitHub App"));
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== error) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "Error: ", error);
    $[1] = error;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== errorReason) {
    t3 = errorReason && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Reason: ", errorReason));
    $[3] = errorReason;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== errorInstructions) {
    t4 = errorInstructions && errorInstructions.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "How to fix:"), errorInstructions.map(_temp2));
    $[5] = errorInstructions;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "For manual setup instructions, see:", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, GITHUB_ACTION_SETUP_DOCS_URL)));
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", borderStyle: "round", paddingX: 1 }, t1, t2, t3, t4, t5);
    $[8] = t2;
    $[9] = t3;
    $[10] = t4;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Press any key to exit"));
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  let t8;
  if ($[13] !== t6) {
    t8 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t6, t7);
    $[13] = t6;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  return t8;
}
function _temp2(instruction, index) {
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: index, marginLeft: 2 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "\u2022 "), /* @__PURE__ */ react_default.createElement(ThemedText, null, instruction));
}
var init_ErrorStep = __esm({
  "src/commands/install-github-app/ErrorStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_github_app();
    init_ink();
  }
});

// src/commands/install-github-app/ExistingWorkflowStep.tsx
function ExistingWorkflowStep(t0) {
  const $ = c(16);
  const {
    repoName,
    onSelectAction
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Update workflow file with latest version",
      value: "update"
    }, {
      label: "Skip workflow update (configure secrets only)",
      value: "skip"
    }, {
      label: "Exit without making changes",
      value: "exit"
    }];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const options = t1;
  let t2;
  if ($[1] !== onSelectAction) {
    t2 = (value) => {
      onSelectAction(value);
    };
    $[1] = onSelectAction;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const handleSelect = t2;
  let t3;
  if ($[3] !== onSelectAction) {
    t3 = () => {
      onSelectAction("exit");
    };
    $[3] = onSelectAction;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  const handleCancel = t3;
  let t4;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Existing Workflow Found");
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== repoName) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, t4, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Repository: ", repoName));
    $[6] = repoName;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "A Claude workflow file already exists at", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, ".github/workflows/claude.yml")), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "What would you like to do?"));
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] !== handleCancel || $[10] !== handleSelect) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column" }, /* @__PURE__ */ react_default.createElement(Select, { options, onChange: handleSelect, onCancel: handleCancel }));
    $[9] = handleCancel;
    $[10] = handleSelect;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "View the latest workflow template at:", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, "https://github.com/anthropics/claude-code-action/blob/main/examples/claude.yml")));
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  let t9;
  if ($[13] !== t5 || $[14] !== t7) {
    t9 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", borderStyle: "round", borderDimColor: true, paddingX: 1 }, t5, t6, t7, t8);
    $[13] = t5;
    $[14] = t7;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  return t9;
}
var init_ExistingWorkflowStep = __esm({
  "src/commands/install-github-app/ExistingWorkflowStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_CustomSelect();
    init_ink();
  }
});

// src/commands/install-github-app/InstallAppStep.tsx
function InstallAppStep(t0) {
  const $ = c(12);
  const {
    repoUrl,
    onSubmit
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      context: "Confirmation"
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  useKeybinding("confirm:yes", onSubmit, t1);
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Install the Claude GitHub App"));
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "Opening browser to install the Claude GitHub App\u2026"));
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  let t4;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "If your browser doesn't open automatically, visit:"));
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  let t5;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { underline: true }, "https://github.com/apps/claude"));
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  let t6;
  if ($[5] !== repoUrl) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "Please install the app for repository: ", /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, repoUrl)));
    $[5] = repoUrl;
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  let t7;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Important: Make sure to grant access to this specific repository"));
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "permission" }, "Press Enter once you've installed the app", figures_default.ellipsis));
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t9;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Having trouble? See manual setup instructions at:", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, GITHUB_ACTION_SETUP_DOCS_URL)));
    $[9] = t9;
  } else {
    t9 = $[9];
  }
  let t10;
  if ($[10] !== t6) {
    t10 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", borderStyle: "round", borderDimColor: true, paddingX: 1 }, t2, t3, t4, t5, t6, t7, t8, t9);
    $[10] = t6;
    $[11] = t10;
  } else {
    t10 = $[11];
  }
  return t10;
}
var init_InstallAppStep = __esm({
  "src/commands/install-github-app/InstallAppStep.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_github_app();
    init_ink();
    init_useKeybinding();
  }
});

// src/commands/install-github-app/OAuthFlowStep.tsx
function OAuthFlowStep({
  onSuccess,
  onCancel
}) {
  const [oauthStatus, setOAuthStatus] = useState({
    state: "starting"
  });
  const [oauthService] = useState(() => new OAuthService());
  const [pastedCode, setPastedCode] = useState("");
  const [cursorOffset, setCursorOffset] = useState(0);
  const [showPastePrompt, setShowPastePrompt] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);
  const timersRef = useRef(/* @__PURE__ */ new Set());
  const urlCopiedTimerRef = useRef(void 0);
  const terminalSize = useTerminalSize();
  const textInputColumns = Math.max(50, terminalSize.columns - PASTE_HERE_MSG.length - 4);
  function handleKeyDown(e) {
    if (oauthStatus.state !== "error") return;
    e.preventDefault();
    if (e.key === "return" && oauthStatus.toRetry) {
      setPastedCode("");
      setCursorOffset(0);
      setOAuthStatus({
        state: "about_to_retry",
        nextState: oauthStatus.toRetry
      });
    } else {
      onCancel();
    }
  }
  async function handleSubmitCode(value, url) {
    try {
      const [authorizationCode, state] = value.split("#");
      if (!authorizationCode || !state) {
        setOAuthStatus({
          state: "error",
          message: "Invalid code. Please make sure the full code was copied",
          toRetry: {
            state: "waiting_for_login",
            url
          }
        });
        return;
      }
      logEvent("tengu_oauth_manual_entry", {});
      oauthService.handleManualAuthCodeInput({
        authorizationCode,
        state
      });
    } catch (err) {
      logError(err);
      setOAuthStatus({
        state: "error",
        message: err.message,
        toRetry: {
          state: "waiting_for_login",
          url
        }
      });
    }
  }
  const startOAuth = useCallback(async () => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current.clear();
    try {
      const result = await oauthService.startOAuthFlow(async (url_0) => {
        setOAuthStatus({
          state: "waiting_for_login",
          url: url_0
        });
        const timer_0 = setTimeout(setShowPastePrompt, 3e3, true);
        timersRef.current.add(timer_0);
      }, {
        loginWithClaudeAi: true,
        // Always use Claude AI for subscription tokens
        inferenceOnly: true,
        expiresIn: 365 * 24 * 60 * 60
        // 1 year
      });
      setOAuthStatus({
        state: "processing"
      });
      saveOAuthTokensIfNeeded(result);
      const timer1 = setTimeout((setOAuthStatus_0, accessToken, onSuccess_0, timersRef_0) => {
        setOAuthStatus_0({
          state: "success",
          token: accessToken
        });
        const timer2 = setTimeout(onSuccess_0, 1e3, accessToken);
        timersRef_0.current.add(timer2);
      }, 100, setOAuthStatus, result.accessToken, onSuccess, timersRef);
      timersRef.current.add(timer1);
    } catch (err_0) {
      const errorMessage = err_0.message;
      setOAuthStatus({
        state: "error",
        message: errorMessage,
        toRetry: {
          state: "starting"
        }
        // Allow retry by starting fresh OAuth flow
      });
      logError(err_0);
      logEvent("tengu_oauth_error", {
        error: errorMessage
      });
    }
  }, [oauthService, onSuccess]);
  useEffect(() => {
    if (oauthStatus.state === "starting") {
      void startOAuth();
    }
  }, [oauthStatus.state, startOAuth]);
  useEffect(() => {
    if (oauthStatus.state === "about_to_retry") {
      const timer_1 = setTimeout((nextState, setShowPastePrompt_0, setOAuthStatus_1) => {
        setShowPastePrompt_0(nextState.state === "waiting_for_login");
        setOAuthStatus_1(nextState);
      }, 500, oauthStatus.nextState, setShowPastePrompt, setOAuthStatus);
      timersRef.current.add(timer_1);
    }
  }, [oauthStatus]);
  useEffect(() => {
    if (pastedCode === "c" && oauthStatus.state === "waiting_for_login" && showPastePrompt && !urlCopied) {
      void setClipboard(oauthStatus.url).then((raw) => {
        if (raw) process.stdout.write(raw);
        setUrlCopied(true);
        clearTimeout(urlCopiedTimerRef.current);
        urlCopiedTimerRef.current = setTimeout(setUrlCopied, 2e3, false);
      });
      setPastedCode("");
    }
  }, [pastedCode, oauthStatus, showPastePrompt, urlCopied]);
  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      oauthService.cleanup();
      timers.forEach((timer_2) => clearTimeout(timer_2));
      timers.clear();
      clearTimeout(urlCopiedTimerRef.current);
    };
  }, [oauthService]);
  function renderStatusMessage() {
    switch (oauthStatus.state) {
      case "starting":
        return /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Starting authentication\u2026"));
      case "waiting_for_login":
        return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, !showPastePrompt && /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Opening browser to sign in with your Claude account\u2026")), showPastePrompt && /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, PASTE_HERE_MSG), /* @__PURE__ */ react_default.createElement(TextInput, { value: pastedCode, onChange: setPastedCode, onSubmit: (value_0) => handleSubmitCode(value_0, oauthStatus.url), cursorOffset, onChangeCursorOffset: setCursorOffset, columns: textInputColumns })));
      case "processing":
        return /* @__PURE__ */ react_default.createElement(ThemedBox_default, null, /* @__PURE__ */ react_default.createElement(Spinner, null), /* @__PURE__ */ react_default.createElement(ThemedText, null, "Processing authentication\u2026"));
      case "success":
        return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "\u2713 Authentication token created successfully!"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Using token for GitHub Actions setup\u2026"));
      case "error":
        return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "error" }, "OAuth error: ", oauthStatus.message), oauthStatus.toRetry ? /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Press Enter to try again, or any other key to cancel") : /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Press any key to return to API key selection"));
      case "about_to_retry":
        return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "permission" }, "Retrying\u2026"));
      default:
        return null;
    }
  }
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, tabIndex: 0, autoFocus: true, onKeyDown: handleKeyDown }, oauthStatus.state === "starting" && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", gap: 1, paddingBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Create Authentication Token"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Creating a long-lived token for GitHub Actions")), oauthStatus.state !== "success" && oauthStatus.state !== "starting" && oauthStatus.state !== "processing" && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: "header", flexDirection: "column", gap: 1, paddingBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Create Authentication Token"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Creating a long-lived token for GitHub Actions")), oauthStatus.state === "waiting_for_login" && showPastePrompt && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", key: "urlToCopy", gap: 1, paddingBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingX: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Browser didn't open? Use the url below to sign in", " "), urlCopied ? /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "(Copied!)") : /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, /* @__PURE__ */ react_default.createElement(KeyboardShortcutHint, { shortcut: "c", action: "copy", parens: true }))), /* @__PURE__ */ react_default.createElement(Link, { url: oauthStatus.url }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, oauthStatus.url))), /* @__PURE__ */ react_default.createElement(ThemedBox_default, { paddingLeft: 1, flexDirection: "column", gap: 1 }, renderStatusMessage()));
}
var PASTE_HERE_MSG;
var init_OAuthFlowStep = __esm({
  "src/commands/install-github-app/OAuthFlowStep.tsx"() {
    init_react();
    init_analytics();
    init_KeyboardShortcutHint();
    init_Spinner();
    init_TextInput();
    init_useTerminalSize();
    init_osc();
    init_ink();
    init_oauth();
    init_auth();
    init_log();
    PASTE_HERE_MSG = "Paste code here if prompted > ";
  }
});

// src/commands/install-github-app/SuccessStep.tsx
function SuccessStep(t0) {
  const $ = c(21);
  const {
    secretExists,
    useExistingSecret,
    secretName,
    skipWorkflow: t1
  } = t0;
  const skipWorkflow = t1 === void 0 ? false : t1;
  let t2;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, "Install GitHub App"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Success"));
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  let t3;
  if ($[1] !== skipWorkflow) {
    t3 = !skipWorkflow && /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "\u2713 GitHub Actions workflow created!");
    $[1] = skipWorkflow;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  let t4;
  if ($[3] !== secretExists || $[4] !== useExistingSecret) {
    t4 = secretExists && useExistingSecret && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "\u2713 Using existing ANTHROPIC_API_KEY secret"));
    $[3] = secretExists;
    $[4] = useExistingSecret;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== secretExists || $[7] !== secretName || $[8] !== useExistingSecret) {
    t5 = (!secretExists || !useExistingSecret) && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "success" }, "\u2713 API key saved as ", secretName, " secret"));
    $[6] = secretExists;
    $[7] = secretName;
    $[8] = useExistingSecret;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  let t6;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, null, "Next steps:"));
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  let t7;
  if ($[11] !== skipWorkflow) {
    t7 = skipWorkflow ? /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, "1. Install the Claude GitHub App if you haven't already"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "2. Your workflow file was kept unchanged"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "3. API key is configured and ready to use")) : /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedText, null, "1. A pre-filled PR page has been created"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "2. Install the Claude GitHub App if you haven't already"), /* @__PURE__ */ react_default.createElement(ThemedText, null, "3. Merge the PR to enable Claude PR assistance"));
    $[11] = skipWorkflow;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  let t8;
  if ($[13] !== t3 || $[14] !== t4 || $[15] !== t5 || $[16] !== t7) {
    t8 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", borderStyle: "round", paddingX: 1 }, t2, t3, t4, t5, t6, t7);
    $[13] = t3;
    $[14] = t4;
    $[15] = t5;
    $[16] = t7;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  let t9;
  if ($[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginLeft: 3 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "Press any key to exit"));
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  let t10;
  if ($[19] !== t8) {
    t10 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, t8, t9);
    $[19] = t8;
    $[20] = t10;
  } else {
    t10 = $[20];
  }
  return t10;
}
var init_SuccessStep = __esm({
  "src/commands/install-github-app/SuccessStep.tsx"() {
    init_react_compiler_runtime();
    init_react();
    init_ink();
  }
});

// src/commands/install-github-app/setupGitHubActions.ts
async function createWorkflowFile(repoName, branchName, workflowPath, workflowContent, secretName, message, context) {
  const checkFileResult = await execFileNoThrow("gh", [
    "api",
    `repos/${repoName}/contents/${workflowPath}`,
    "--jq",
    ".sha"
  ]);
  let fileSha = null;
  if (checkFileResult.code === 0) {
    fileSha = checkFileResult.stdout.trim();
  }
  let content = workflowContent;
  if (secretName === "CLAUDE_CODE_OAUTH_TOKEN") {
    content = workflowContent.replace(
      /anthropic_api_key: \$\{\{ secrets\.ANTHROPIC_API_KEY \}\}/g,
      `claude_code_oauth_token: \${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}`
    );
  } else if (secretName !== "ANTHROPIC_API_KEY") {
    content = workflowContent.replace(
      /anthropic_api_key: \$\{\{ secrets\.ANTHROPIC_API_KEY \}\}/g,
      `anthropic_api_key: \${{ secrets.${secretName} }}`
    );
  }
  const base64Content = Buffer.from(content).toString("base64");
  const apiParams = [
    "api",
    "--method",
    "PUT",
    `repos/${repoName}/contents/${workflowPath}`,
    "-f",
    `message=${fileSha ? `"Update ${message}"` : `"${message}"`}`,
    "-f",
    `content=${base64Content}`,
    "-f",
    `branch=${branchName}`
  ];
  if (fileSha) {
    apiParams.push("-f", `sha=${fileSha}`);
  }
  const createFileResult = await execFileNoThrow("gh", apiParams);
  if (createFileResult.code !== 0) {
    if (createFileResult.stderr.includes("422") && createFileResult.stderr.includes("sha")) {
      logEvent("tengu_setup_github_actions_failed", {
        reason: "failed_to_create_workflow_file",
        exit_code: createFileResult.code,
        ...context
      });
      throw new Error(
        `Failed to create workflow file ${workflowPath}: A Claude workflow file already exists in this repository. Please remove it first or update it manually.`
      );
    }
    logEvent("tengu_setup_github_actions_failed", {
      reason: "failed_to_create_workflow_file",
      exit_code: createFileResult.code,
      ...context
    });
    const helpText = "\n\nNeed help? Common issues:\n\xB7 Permission denied \u2192 Run: gh auth refresh -h github.com -s repo,workflow\n\xB7 Not authorized \u2192 Ensure you have admin access to the repository\n\xB7 For manual setup \u2192 Visit: https://github.com/anthropics/claude-code-action";
    throw new Error(
      `Failed to create workflow file ${workflowPath}: ${createFileResult.stderr}${helpText}`
    );
  }
}
async function setupGitHubActions(repoName, apiKeyOrOAuthToken, secretName, updateProgress, skipWorkflow = false, selectedWorkflows, authType, context) {
  try {
    logEvent("tengu_setup_github_actions_started", {
      skip_workflow: skipWorkflow,
      has_api_key: !!apiKeyOrOAuthToken,
      using_default_secret_name: secretName === "ANTHROPIC_API_KEY",
      selected_claude_workflow: selectedWorkflows.includes("claude"),
      selected_claude_review_workflow: selectedWorkflows.includes("claude-review"),
      ...context
    });
    const repoCheckResult = await execFileNoThrow("gh", [
      "api",
      `repos/${repoName}`,
      "--jq",
      ".id"
    ]);
    if (repoCheckResult.code !== 0) {
      logEvent("tengu_setup_github_actions_failed", {
        reason: "repo_not_found",
        exit_code: repoCheckResult.code,
        ...context
      });
      throw new Error(
        `Failed to access repository ${repoName}: ${repoCheckResult.stderr}`
      );
    }
    const defaultBranchResult = await execFileNoThrow("gh", [
      "api",
      `repos/${repoName}`,
      "--jq",
      ".default_branch"
    ]);
    if (defaultBranchResult.code !== 0) {
      logEvent("tengu_setup_github_actions_failed", {
        reason: "failed_to_get_default_branch",
        exit_code: defaultBranchResult.code,
        ...context
      });
      throw new Error(
        `Failed to get default branch: ${defaultBranchResult.stderr}`
      );
    }
    const defaultBranch = defaultBranchResult.stdout.trim();
    const shaResult = await execFileNoThrow("gh", [
      "api",
      `repos/${repoName}/git/ref/heads/${defaultBranch}`,
      "--jq",
      ".object.sha"
    ]);
    if (shaResult.code !== 0) {
      logEvent("tengu_setup_github_actions_failed", {
        reason: "failed_to_get_branch_sha",
        exit_code: shaResult.code,
        ...context
      });
      throw new Error(`Failed to get branch SHA: ${shaResult.stderr}`);
    }
    const sha = shaResult.stdout.trim();
    let branchName = null;
    if (!skipWorkflow) {
      updateProgress();
      branchName = `add-claude-github-actions-${Date.now()}`;
      const createBranchResult = await execFileNoThrow("gh", [
        "api",
        "--method",
        "POST",
        `repos/${repoName}/git/refs`,
        "-f",
        `ref=refs/heads/${branchName}`,
        "-f",
        `sha=${sha}`
      ]);
      if (createBranchResult.code !== 0) {
        logEvent("tengu_setup_github_actions_failed", {
          reason: "failed_to_create_branch",
          exit_code: createBranchResult.code,
          ...context
        });
        throw new Error(`Failed to create branch: ${createBranchResult.stderr}`);
      }
      updateProgress();
      const workflows = [];
      if (selectedWorkflows.includes("claude")) {
        workflows.push({
          path: ".github/workflows/claude.yml",
          content: WORKFLOW_CONTENT,
          message: "Claude PR Assistant workflow"
        });
      }
      if (selectedWorkflows.includes("claude-review")) {
        workflows.push({
          path: ".github/workflows/claude-code-review.yml",
          content: CODE_REVIEW_PLUGIN_WORKFLOW_CONTENT,
          message: "Claude Code Review workflow"
        });
      }
      for (const workflow of workflows) {
        await createWorkflowFile(
          repoName,
          branchName,
          workflow.path,
          workflow.content,
          secretName,
          workflow.message,
          context
        );
      }
    }
    updateProgress();
    if (apiKeyOrOAuthToken) {
      const setSecretResult = await execFileNoThrow("gh", [
        "secret",
        "set",
        secretName,
        "--body",
        apiKeyOrOAuthToken,
        "--repo",
        repoName
      ]);
      if (setSecretResult.code !== 0) {
        logEvent("tengu_setup_github_actions_failed", {
          reason: "failed_to_set_api_key_secret",
          exit_code: setSecretResult.code,
          ...context
        });
        const helpText = "\n\nNeed help? Common issues:\n\xB7 Permission denied \u2192 Run: gh auth refresh -h github.com -s repo\n\xB7 Not authorized \u2192 Ensure you have admin access to the repository\n\xB7 For manual setup \u2192 Visit: https://github.com/anthropics/claude-code-action";
        throw new Error(
          `Failed to set API key secret: ${setSecretResult.stderr || "Unknown error"}${helpText}`
        );
      }
    }
    if (!skipWorkflow && branchName) {
      updateProgress();
      const compareUrl = `https://github.com/${repoName}/compare/${defaultBranch}...${branchName}?quick_pull=1&title=${encodeURIComponent(PR_TITLE)}&body=${encodeURIComponent(PR_BODY)}`;
      await openBrowser(compareUrl);
    }
    logEvent("tengu_setup_github_actions_completed", {
      skip_workflow: skipWorkflow,
      has_api_key: !!apiKeyOrOAuthToken,
      auth_type: authType,
      using_default_secret_name: secretName === "ANTHROPIC_API_KEY",
      selected_claude_workflow: selectedWorkflows.includes("claude"),
      selected_claude_review_workflow: selectedWorkflows.includes("claude-review"),
      ...context
    });
    saveGlobalConfig((current) => ({
      ...current,
      githubActionSetupCount: (current.githubActionSetupCount ?? 0) + 1
    }));
  } catch (error) {
    if (!error || !(error instanceof Error) || !error.message.includes("Failed to")) {
      logEvent("tengu_setup_github_actions_failed", {
        reason: "unexpected_error",
        ...context
      });
    }
    if (error instanceof Error) {
      logError(error);
    }
    throw error;
  }
}
var init_setupGitHubActions = __esm({
  "src/commands/install-github-app/setupGitHubActions.ts"() {
    init_analytics();
    init_config();
    init_github_app();
    init_browser();
    init_execFileNoThrow();
    init_log();
  }
});

// src/commands/install-github-app/WarningsStep.tsx
function WarningsStep(t0) {
  const $ = c(8);
  const {
    warnings,
    onContinue
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      context: "Confirmation"
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  useKeybinding("confirm:yes", onContinue, t1);
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true }, figures_default.warning, " Setup Warnings"), /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "We found some potential issues, but you can continue anyway"));
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] !== warnings) {
    t3 = warnings.map(_temp22);
    $[2] = warnings;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { bold: true, color: "permission" }, "Press Enter to continue anyway, or Ctrl+C to exit and fix issues"));
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ react_default.createElement(ThemedBox_default, { marginTop: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { dimColor: true }, "You can also try the manual setup steps if needed:", " ", /* @__PURE__ */ react_default.createElement(ThemedText, { color: "claude" }, GITHUB_ACTION_SETUP_DOCS_URL)));
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] !== t3) {
    t6 = /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", borderStyle: "round", paddingX: 1 }, t2, t3, t4, t5));
    $[6] = t3;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  return t6;
}
function _temp22(warning, index) {
  return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { key: index, flexDirection: "column", marginBottom: 1 }, /* @__PURE__ */ react_default.createElement(ThemedText, { color: "warning", bold: true }, warning.title), /* @__PURE__ */ react_default.createElement(ThemedText, null, warning.message), warning.instructions.length > 0 && /* @__PURE__ */ react_default.createElement(ThemedBox_default, { flexDirection: "column", marginLeft: 2, marginTop: 1 }, warning.instructions.map(_temp3)));
}
function _temp3(instruction, i) {
  return /* @__PURE__ */ react_default.createElement(ThemedText, { key: i, dimColor: true }, "\u2022 ", instruction);
}
var init_WarningsStep = __esm({
  "src/commands/install-github-app/WarningsStep.tsx"() {
    init_react_compiler_runtime();
    init_figures();
    init_react();
    init_github_app();
    init_ink();
    init_useKeybinding();
  }
});

// src/commands/install-github-app/install-github-app.tsx
function InstallGitHubApp(props) {
  const [existingApiKey] = useState(() => getAnthropicApiKey());
  const [state, setState] = useState({
    ...INITIAL_STATE,
    useExistingKey: !!existingApiKey,
    selectedApiKeyOption: existingApiKey ? "existing" : isAnthropicAuthEnabled() ? "oauth" : "new"
  });
  useExitOnCtrlCDWithKeybindings();
  react_default.useEffect(() => {
    logEvent("tengu_install_github_app_started", {});
  }, []);
  const checkGitHubCLI = useCallback(async () => {
    const warnings = [];
    const ghVersionResult = await execa("gh --version", {
      shell: true,
      reject: false
    });
    if (ghVersionResult.exitCode !== 0) {
      warnings.push({
        title: "GitHub CLI not found",
        message: "GitHub CLI (gh) does not appear to be installed or accessible.",
        instructions: ["Install GitHub CLI from https://cli.github.com/", "macOS: brew install gh", "Windows: winget install --id GitHub.cli", "Linux: See installation instructions at https://github.com/cli/cli#installation"]
      });
    }
    const authResult = await execa("gh auth status -a", {
      shell: true,
      reject: false
    });
    if (authResult.exitCode !== 0) {
      warnings.push({
        title: "GitHub CLI not authenticated",
        message: "GitHub CLI does not appear to be authenticated.",
        instructions: ["Run: gh auth login", "Follow the prompts to authenticate with GitHub", "Or set up authentication using environment variables or other methods"]
      });
    } else {
      const tokenScopesMatch = authResult.stdout.match(/Token scopes:.*$/m);
      if (tokenScopesMatch) {
        const scopes = tokenScopesMatch[0];
        const missingScopes = [];
        if (!scopes.includes("repo")) {
          missingScopes.push("repo");
        }
        if (!scopes.includes("workflow")) {
          missingScopes.push("workflow");
        }
        if (missingScopes.length > 0) {
          setState((prev) => ({
            ...prev,
            step: "error",
            error: `GitHub CLI is missing required permissions: ${missingScopes.join(", ")}.`,
            errorReason: "Missing required scopes",
            errorInstructions: [`Your GitHub CLI authentication is missing the "${missingScopes.join('" and "')}" ${plural(missingScopes.length, "scope")} needed to manage GitHub Actions and secrets.`, "", "To fix this, run:", "  gh auth refresh -h github.com -s repo,workflow", "", "This will add the necessary permissions to manage workflows and secrets."]
          }));
          return;
        }
      }
    }
    const currentRepo = await getGithubRepo() ?? "";
    logEvent("tengu_install_github_app_step_completed", {
      step: "check-gh"
    });
    setState((prev_0) => ({
      ...prev_0,
      warnings,
      currentRepo,
      selectedRepoName: currentRepo,
      useCurrentRepo: !!currentRepo,
      // Set to false if no repo detected
      step: warnings.length > 0 ? "warnings" : "choose-repo"
    }));
  }, []);
  react_default.useEffect(() => {
    if (state.step === "check-gh") {
      void checkGitHubCLI();
    }
  }, [state.step, checkGitHubCLI]);
  const runSetupGitHubActions = useCallback(async (apiKeyOrOAuthToken, secretName) => {
    setState((prev_1) => ({
      ...prev_1,
      step: "creating",
      currentWorkflowInstallStep: 0
    }));
    try {
      await setupGitHubActions(state.selectedRepoName, apiKeyOrOAuthToken, secretName, () => {
        setState((prev_4) => ({
          ...prev_4,
          currentWorkflowInstallStep: prev_4.currentWorkflowInstallStep + 1
        }));
      }, state.workflowAction === "skip", state.selectedWorkflows, state.authType, {
        useCurrentRepo: state.useCurrentRepo,
        workflowExists: state.workflowExists,
        secretExists: state.secretExists
      });
      logEvent("tengu_install_github_app_step_completed", {
        step: "creating"
      });
      setState((prev_5) => ({
        ...prev_5,
        step: "success"
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to set up GitHub Actions";
      if (errorMessage.includes("workflow file already exists")) {
        logEvent("tengu_install_github_app_error", {
          reason: "workflow_file_exists"
        });
        setState((prev_2) => ({
          ...prev_2,
          step: "error",
          error: "A Claude workflow file already exists in this repository.",
          errorReason: "Workflow file conflict",
          errorInstructions: ["The file .github/workflows/claude.yml already exists", "You can either:", "  1. Delete the existing file and run this command again", "  2. Update the existing file manually using the template from:", `     ${GITHUB_ACTION_SETUP_DOCS_URL}`]
        }));
      } else {
        logEvent("tengu_install_github_app_error", {
          reason: "setup_github_actions_failed"
        });
        setState((prev_3) => ({
          ...prev_3,
          step: "error",
          error: errorMessage,
          errorReason: "GitHub Actions setup failed",
          errorInstructions: []
        }));
      }
    }
  }, [state.selectedRepoName, state.workflowAction, state.selectedWorkflows, state.useCurrentRepo, state.workflowExists, state.secretExists, state.authType]);
  async function openGitHubAppInstallation() {
    const installUrl = "https://github.com/apps/claude";
    await openBrowser(installUrl);
  }
  async function checkRepositoryPermissions(repoName) {
    try {
      const result = await execFileNoThrow("gh", ["api", `repos/${repoName}`, "--jq", ".permissions.admin"]);
      if (result.code === 0) {
        const hasAdmin = result.stdout.trim() === "true";
        return {
          hasAccess: hasAdmin
        };
      }
      if (result.stderr.includes("404") || result.stderr.includes("Not Found")) {
        return {
          hasAccess: false,
          error: "repository_not_found"
        };
      }
      return {
        hasAccess: false
      };
    } catch {
      return {
        hasAccess: false
      };
    }
  }
  async function checkExistingWorkflowFile(repoName_0) {
    const checkFileResult = await execFileNoThrow("gh", ["api", `repos/${repoName_0}/contents/.github/workflows/claude.yml`, "--jq", ".sha"]);
    return checkFileResult.code === 0;
  }
  async function checkExistingSecret() {
    const checkSecretsResult = await execFileNoThrow("gh", ["secret", "list", "--app", "actions", "--repo", state.selectedRepoName]);
    if (checkSecretsResult.code === 0) {
      const lines = checkSecretsResult.stdout.split("\n");
      const hasAnthropicKey = lines.some((line) => {
        return /^ANTHROPIC_API_KEY\s+/.test(line);
      });
      if (hasAnthropicKey) {
        setState((prev_6) => ({
          ...prev_6,
          secretExists: true,
          step: "check-existing-secret"
        }));
      } else {
        if (existingApiKey) {
          setState((prev_7) => ({
            ...prev_7,
            apiKeyOrOAuthToken: existingApiKey,
            useExistingKey: true
          }));
          await runSetupGitHubActions(existingApiKey, state.secretName);
        } else {
          setState((prev_8) => ({
            ...prev_8,
            step: "api-key"
          }));
        }
      }
    } else {
      if (existingApiKey) {
        setState((prev_9) => ({
          ...prev_9,
          apiKeyOrOAuthToken: existingApiKey,
          useExistingKey: true
        }));
        await runSetupGitHubActions(existingApiKey, state.secretName);
      } else {
        setState((prev_10) => ({
          ...prev_10,
          step: "api-key"
        }));
      }
    }
  }
  const handleSubmit = async () => {
    if (state.step === "warnings") {
      logEvent("tengu_install_github_app_step_completed", {
        step: "warnings"
      });
      setState((prev_11) => ({
        ...prev_11,
        step: "install-app"
      }));
      setTimeout(openGitHubAppInstallation, 0);
    } else if (state.step === "choose-repo") {
      let repoName_1 = state.useCurrentRepo ? state.currentRepo : state.selectedRepoName;
      if (!repoName_1.trim()) {
        return;
      }
      const repoWarnings = [];
      if (repoName_1.includes("github.com")) {
        const match = repoName_1.match(/github\.com[:/]([^/]+\/[^/]+)(\.git)?$/);
        if (!match) {
          repoWarnings.push({
            title: "Invalid GitHub URL format",
            message: "The repository URL format appears to be invalid.",
            instructions: ["Use format: owner/repo or https://github.com/owner/repo", "Example: anthropics/claude-cli"]
          });
        } else {
          repoName_1 = match[1]?.replace(/\.git$/, "") || "";
        }
      }
      if (!repoName_1.includes("/")) {
        repoWarnings.push({
          title: "Repository format warning",
          message: 'Repository should be in format "owner/repo"',
          instructions: ["Use format: owner/repo", "Example: anthropics/claude-cli"]
        });
      }
      const permissionCheck = await checkRepositoryPermissions(repoName_1);
      if (permissionCheck.error === "repository_not_found") {
        repoWarnings.push({
          title: "Repository not found",
          message: `Repository ${repoName_1} was not found or you don't have access.`,
          instructions: [`Check that the repository name is correct: ${repoName_1}`, "Ensure you have access to this repository", 'For private repositories, make sure your GitHub token has the "repo" scope', "You can add the repo scope with: gh auth refresh -h github.com -s repo,workflow"]
        });
      } else if (!permissionCheck.hasAccess) {
        repoWarnings.push({
          title: "Admin permissions required",
          message: `You might need admin permissions on ${repoName_1} to set up GitHub Actions.`,
          instructions: ["Repository admins can install GitHub Apps and set secrets", "Ask a repository admin to run this command if setup fails", "Alternatively, you can use the manual setup instructions"]
        });
      }
      const workflowExists = await checkExistingWorkflowFile(repoName_1);
      if (repoWarnings.length > 0) {
        const allWarnings = [...state.warnings, ...repoWarnings];
        setState((prev_12) => ({
          ...prev_12,
          selectedRepoName: repoName_1,
          workflowExists,
          warnings: allWarnings,
          step: "warnings"
        }));
      } else {
        logEvent("tengu_install_github_app_step_completed", {
          step: "choose-repo"
        });
        setState((prev_13) => ({
          ...prev_13,
          selectedRepoName: repoName_1,
          workflowExists,
          step: "install-app"
        }));
        setTimeout(openGitHubAppInstallation, 0);
      }
    } else if (state.step === "install-app") {
      logEvent("tengu_install_github_app_step_completed", {
        step: "install-app"
      });
      if (state.workflowExists) {
        setState((prev_14) => ({
          ...prev_14,
          step: "check-existing-workflow"
        }));
      } else {
        setState((prev_15) => ({
          ...prev_15,
          step: "select-workflows"
        }));
      }
    } else if (state.step === "check-existing-workflow") {
      return;
    } else if (state.step === "select-workflows") {
      return;
    } else if (state.step === "check-existing-secret") {
      logEvent("tengu_install_github_app_step_completed", {
        step: "check-existing-secret"
      });
      if (state.useExistingSecret) {
        await runSetupGitHubActions(null, state.secretName);
      } else {
        await runSetupGitHubActions(state.apiKeyOrOAuthToken, state.secretName);
      }
    } else if (state.step === "api-key") {
      if (state.selectedApiKeyOption === "oauth") {
        return;
      }
      const apiKeyToUse = state.selectedApiKeyOption === "existing" ? existingApiKey : state.apiKeyOrOAuthToken;
      if (!apiKeyToUse) {
        logEvent("tengu_install_github_app_error", {
          reason: "api_key_missing"
        });
        setState((prev_16) => ({
          ...prev_16,
          step: "error",
          error: "API key is required"
        }));
        return;
      }
      setState((prev_17) => ({
        ...prev_17,
        apiKeyOrOAuthToken: apiKeyToUse,
        useExistingKey: state.selectedApiKeyOption === "existing"
      }));
      const checkSecretsResult_0 = await execFileNoThrow("gh", ["secret", "list", "--app", "actions", "--repo", state.selectedRepoName]);
      if (checkSecretsResult_0.code === 0) {
        const lines_0 = checkSecretsResult_0.stdout.split("\n");
        const hasAnthropicKey_0 = lines_0.some((line_0) => {
          return /^ANTHROPIC_API_KEY\s+/.test(line_0);
        });
        if (hasAnthropicKey_0) {
          logEvent("tengu_install_github_app_step_completed", {
            step: "api-key"
          });
          setState((prev_18) => ({
            ...prev_18,
            secretExists: true,
            step: "check-existing-secret"
          }));
        } else {
          logEvent("tengu_install_github_app_step_completed", {
            step: "api-key"
          });
          await runSetupGitHubActions(apiKeyToUse, state.secretName);
        }
      } else {
        logEvent("tengu_install_github_app_step_completed", {
          step: "api-key"
        });
        await runSetupGitHubActions(apiKeyToUse, state.secretName);
      }
    }
  };
  const handleRepoUrlChange = (value) => {
    setState((prev_19) => ({
      ...prev_19,
      selectedRepoName: value
    }));
  };
  const handleApiKeyChange = (value_0) => {
    setState((prev_20) => ({
      ...prev_20,
      apiKeyOrOAuthToken: value_0
    }));
  };
  const handleApiKeyOptionChange = (option) => {
    setState((prev_21) => ({
      ...prev_21,
      selectedApiKeyOption: option
    }));
  };
  const handleCreateOAuthToken = useCallback(() => {
    logEvent("tengu_install_github_app_step_completed", {
      step: "api-key"
    });
    setState((prev_22) => ({
      ...prev_22,
      step: "oauth-flow"
    }));
  }, []);
  const handleOAuthSuccess = useCallback((token) => {
    logEvent("tengu_install_github_app_step_completed", {
      step: "oauth-flow"
    });
    setState((prev_23) => ({
      ...prev_23,
      apiKeyOrOAuthToken: token,
      useExistingKey: false,
      secretName: "CLAUDE_CODE_OAUTH_TOKEN",
      authType: "oauth_token"
    }));
    void runSetupGitHubActions(token, "CLAUDE_CODE_OAUTH_TOKEN");
  }, [runSetupGitHubActions]);
  const handleOAuthCancel = useCallback(() => {
    setState((prev_24) => ({
      ...prev_24,
      step: "api-key"
    }));
  }, []);
  const handleSecretNameChange = (value_1) => {
    if (value_1 && !/^[a-zA-Z0-9_]+$/.test(value_1)) return;
    setState((prev_25) => ({
      ...prev_25,
      secretName: value_1
    }));
  };
  const handleToggleUseCurrentRepo = (useCurrentRepo) => {
    setState((prev_26) => ({
      ...prev_26,
      useCurrentRepo,
      selectedRepoName: useCurrentRepo ? prev_26.currentRepo : ""
    }));
  };
  const handleToggleUseExistingKey = (useExistingKey) => {
    setState((prev_27) => ({
      ...prev_27,
      useExistingKey
    }));
  };
  const handleToggleUseExistingSecret = (useExistingSecret) => {
    setState((prev_28) => ({
      ...prev_28,
      useExistingSecret,
      secretName: useExistingSecret ? "ANTHROPIC_API_KEY" : ""
    }));
  };
  const handleWorkflowAction = async (action) => {
    if (action === "exit") {
      props.onDone("Installation cancelled by user");
      return;
    }
    logEvent("tengu_install_github_app_step_completed", {
      step: "check-existing-workflow"
    });
    setState((prev_29) => ({
      ...prev_29,
      workflowAction: action
    }));
    if (action === "skip" || action === "update") {
      if (existingApiKey) {
        await checkExistingSecret();
      } else {
        setState((prev_30) => ({
          ...prev_30,
          step: "api-key"
        }));
      }
    }
  };
  function handleDismissKeyDown(e) {
    e.preventDefault();
    if (state.step === "success") {
      logEvent("tengu_install_github_app_completed", {});
    }
    props.onDone(state.step === "success" ? "GitHub Actions setup complete!" : state.error ? `Couldn't install GitHub App: ${state.error}
For manual setup instructions, see: ${GITHUB_ACTION_SETUP_DOCS_URL}` : `GitHub App installation failed
For manual setup instructions, see: ${GITHUB_ACTION_SETUP_DOCS_URL}`);
  }
  switch (state.step) {
    case "check-gh":
      return /* @__PURE__ */ react_default.createElement(CheckGitHubStep, null);
    case "warnings":
      return /* @__PURE__ */ react_default.createElement(WarningsStep, { warnings: state.warnings, onContinue: handleSubmit });
    case "choose-repo":
      return /* @__PURE__ */ react_default.createElement(ChooseRepoStep, { currentRepo: state.currentRepo, useCurrentRepo: state.useCurrentRepo, repoUrl: state.selectedRepoName, onRepoUrlChange: handleRepoUrlChange, onToggleUseCurrentRepo: handleToggleUseCurrentRepo, onSubmit: handleSubmit });
    case "install-app":
      return /* @__PURE__ */ react_default.createElement(InstallAppStep, { repoUrl: state.selectedRepoName, onSubmit: handleSubmit });
    case "check-existing-workflow":
      return /* @__PURE__ */ react_default.createElement(ExistingWorkflowStep, { repoName: state.selectedRepoName, onSelectAction: handleWorkflowAction });
    case "check-existing-secret":
      return /* @__PURE__ */ react_default.createElement(CheckExistingSecretStep, { useExistingSecret: state.useExistingSecret, secretName: state.secretName, onToggleUseExistingSecret: handleToggleUseExistingSecret, onSecretNameChange: handleSecretNameChange, onSubmit: handleSubmit });
    case "api-key":
      return /* @__PURE__ */ react_default.createElement(ApiKeyStep, { existingApiKey, useExistingKey: state.useExistingKey, apiKeyOrOAuthToken: state.apiKeyOrOAuthToken, onApiKeyChange: handleApiKeyChange, onToggleUseExistingKey: handleToggleUseExistingKey, onSubmit: handleSubmit, onCreateOAuthToken: isAnthropicAuthEnabled() ? handleCreateOAuthToken : void 0, selectedOption: state.selectedApiKeyOption, onSelectOption: handleApiKeyOptionChange });
    case "creating":
      return /* @__PURE__ */ react_default.createElement(CreatingStep, { currentWorkflowInstallStep: state.currentWorkflowInstallStep, secretExists: state.secretExists, useExistingSecret: state.useExistingSecret, secretName: state.secretName, skipWorkflow: state.workflowAction === "skip", selectedWorkflows: state.selectedWorkflows });
    case "success":
      return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { tabIndex: 0, autoFocus: true, onKeyDown: handleDismissKeyDown }, /* @__PURE__ */ react_default.createElement(SuccessStep, { secretExists: state.secretExists, useExistingSecret: state.useExistingSecret, secretName: state.secretName, skipWorkflow: state.workflowAction === "skip" }));
    case "error":
      return /* @__PURE__ */ react_default.createElement(ThemedBox_default, { tabIndex: 0, autoFocus: true, onKeyDown: handleDismissKeyDown }, /* @__PURE__ */ react_default.createElement(ErrorStep, { error: state.error, errorReason: state.errorReason, errorInstructions: state.errorInstructions }));
    case "select-workflows":
      return /* @__PURE__ */ react_default.createElement(WorkflowMultiselectDialog, { defaultSelections: state.selectedWorkflows, onSubmit: (selectedWorkflows) => {
        logEvent("tengu_install_github_app_step_completed", {
          step: "select-workflows"
        });
        setState((prev_31) => ({
          ...prev_31,
          selectedWorkflows
        }));
        if (existingApiKey) {
          void checkExistingSecret();
        } else {
          setState((prev_32) => ({
            ...prev_32,
            step: "api-key"
          }));
        }
      } });
    case "oauth-flow":
      return /* @__PURE__ */ react_default.createElement(OAuthFlowStep, { onSuccess: handleOAuthSuccess, onCancel: handleOAuthCancel });
  }
}
async function call(onDone) {
  return /* @__PURE__ */ react_default.createElement(InstallGitHubApp, { onDone });
}
var INITIAL_STATE;
var init_install_github_app = __esm({
  "src/commands/install-github-app/install-github-app.tsx"() {
    init_execa();
    init_react();
    init_analytics();
    init_WorkflowMultiselectDialog();
    init_github_app();
    init_useExitOnCtrlCDWithKeybindings();
    init_ink();
    init_auth();
    init_browser();
    init_execFileNoThrow();
    init_git();
    init_stringUtils();
    init_ApiKeyStep();
    init_CheckExistingSecretStep();
    init_CheckGitHubStep();
    init_ChooseRepoStep();
    init_CreatingStep();
    init_ErrorStep();
    init_ExistingWorkflowStep();
    init_InstallAppStep();
    init_OAuthFlowStep();
    init_SuccessStep();
    init_setupGitHubActions();
    init_WarningsStep();
    INITIAL_STATE = {
      step: "check-gh",
      selectedRepoName: "",
      currentRepo: "",
      useCurrentRepo: false,
      // Default to false, will be set to true if repo detected
      apiKeyOrOAuthToken: "",
      useExistingKey: true,
      currentWorkflowInstallStep: 0,
      warnings: [],
      secretExists: false,
      secretName: "ANTHROPIC_API_KEY",
      useExistingSecret: true,
      workflowExists: false,
      selectedWorkflows: ["claude", "claude-review"],
      selectedApiKeyOption: "new",
      authType: "api_key"
    };
  }
});
init_install_github_app();
export {
  call
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbXBvbmVudHMvV29ya2Zsb3dNdWx0aXNlbGVjdERpYWxvZy50c3giLCAiLi4vLi4vc3JjL2NvbnN0YW50cy9naXRodWItYXBwLnRzIiwgIi4uLy4uL3NyYy9jb21tYW5kcy9pbnN0YWxsLWdpdGh1Yi1hcHAvQXBpS2V5U3RlcC50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL2luc3RhbGwtZ2l0aHViLWFwcC9DaGVja0V4aXN0aW5nU2VjcmV0U3RlcC50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL2luc3RhbGwtZ2l0aHViLWFwcC9DaGVja0dpdEh1YlN0ZXAudHN4IiwgIi4uLy4uL3NyYy9jb21tYW5kcy9pbnN0YWxsLWdpdGh1Yi1hcHAvQ2hvb3NlUmVwb1N0ZXAudHN4IiwgIi4uLy4uL3NyYy9jb21tYW5kcy9pbnN0YWxsLWdpdGh1Yi1hcHAvQ3JlYXRpbmdTdGVwLnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvaW5zdGFsbC1naXRodWItYXBwL0Vycm9yU3RlcC50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL2luc3RhbGwtZ2l0aHViLWFwcC9FeGlzdGluZ1dvcmtmbG93U3RlcC50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL2luc3RhbGwtZ2l0aHViLWFwcC9JbnN0YWxsQXBwU3RlcC50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL2luc3RhbGwtZ2l0aHViLWFwcC9PQXV0aEZsb3dTdGVwLnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvaW5zdGFsbC1naXRodWItYXBwL1N1Y2Nlc3NTdGVwLnRzeCIsICIuLi8uLi9zcmMvY29tbWFuZHMvaW5zdGFsbC1naXRodWItYXBwL3NldHVwR2l0SHViQWN0aW9ucy50cyIsICIuLi8uLi9zcmMvY29tbWFuZHMvaW5zdGFsbC1naXRodWItYXBwL1dhcm5pbmdzU3RlcC50c3giLCAiLi4vLi4vc3JjL2NvbW1hbmRzL2luc3RhbGwtZ2l0aHViLWFwcC9pbnN0YWxsLWdpdGh1Yi1hcHAudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFdvcmtmbG93IH0gZnJvbSAnLi4vY29tbWFuZHMvaW5zdGFsbC1naXRodWItYXBwL3R5cGVzLmpzJ1xuaW1wb3J0IHR5cGUgeyBFeGl0U3RhdGUgfSBmcm9tICcuLi9ob29rcy91c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MuanMnXG5pbXBvcnQgeyBCb3gsIExpbmssIFRleHQgfSBmcm9tICcuLi9pbmsuanMnXG5pbXBvcnQgeyBDb25maWd1cmFibGVTaG9ydGN1dEhpbnQgfSBmcm9tICcuL0NvbmZpZ3VyYWJsZVNob3J0Y3V0SGludC5qcydcbmltcG9ydCB7IFNlbGVjdE11bHRpIH0gZnJvbSAnLi9DdXN0b21TZWxlY3QvU2VsZWN0TXVsdGkuanMnXG5pbXBvcnQgeyBCeWxpbmUgfSBmcm9tICcuL2Rlc2lnbi1zeXN0ZW0vQnlsaW5lLmpzJ1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL0RpYWxvZy5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi9kZXNpZ24tc3lzdGVtL0tleWJvYXJkU2hvcnRjdXRIaW50LmpzJ1xuXG50eXBlIFdvcmtmbG93T3B0aW9uID0ge1xuICB2YWx1ZTogV29ya2Zsb3dcbiAgbGFiZWw6IHN0cmluZ1xufVxuXG50eXBlIFByb3BzID0ge1xuICBvblN1Ym1pdDogKHNlbGVjdGVkV29ya2Zsb3dzOiBXb3JrZmxvd1tdKSA9PiB2b2lkXG4gIGRlZmF1bHRTZWxlY3Rpb25zOiBXb3JrZmxvd1tdXG59XG5cbmNvbnN0IFdPUktGTE9XUzogV29ya2Zsb3dPcHRpb25bXSA9IFtcbiAge1xuICAgIHZhbHVlOiAnY2xhdWRlJyBhcyBjb25zdCxcbiAgICBsYWJlbDogJ0BDbGF1ZGUgQ29kZSAtIFRhZyBAY2xhdWRlIGluIGlzc3VlcyBhbmQgUFIgY29tbWVudHMnLFxuICB9LFxuICB7XG4gICAgdmFsdWU6ICdjbGF1ZGUtcmV2aWV3JyBhcyBjb25zdCxcbiAgICBsYWJlbDogJ0NsYXVkZSBDb2RlIFJldmlldyAtIEF1dG9tYXRlZCBjb2RlIHJldmlldyBvbiBuZXcgUFJzJyxcbiAgfSxcbl1cblxuZnVuY3Rpb24gcmVuZGVySW5wdXRHdWlkZShleGl0U3RhdGU6IEV4aXRTdGF0ZSk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGlmIChleGl0U3RhdGUucGVuZGluZykge1xuICAgIHJldHVybiA8VGV4dD5QcmVzcyB7ZXhpdFN0YXRlLmtleU5hbWV9IGFnYWluIHRvIGV4aXQ8L1RleHQ+XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8QnlsaW5lPlxuICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwi4oaR4oaTXCIgYWN0aW9uPVwibmF2aWdhdGVcIiAvPlxuICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiU3BhY2VcIiBhY3Rpb249XCJ0b2dnbGVcIiAvPlxuICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiRW50ZXJcIiBhY3Rpb249XCJjb25maXJtXCIgLz5cbiAgICAgIDxDb25maWd1cmFibGVTaG9ydGN1dEhpbnRcbiAgICAgICAgYWN0aW9uPVwiY29uZmlybTpub1wiXG4gICAgICAgIGNvbnRleHQ9XCJDb25maXJtYXRpb25cIlxuICAgICAgICBmYWxsYmFjaz1cIkVzY1wiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiY2FuY2VsXCJcbiAgICAgIC8+XG4gICAgPC9CeWxpbmU+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFdvcmtmbG93TXVsdGlzZWxlY3REaWFsb2coe1xuICBvblN1Ym1pdCxcbiAgZGVmYXVsdFNlbGVjdGlvbnMsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IFtzaG93RXJyb3IsIHNldFNob3dFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VDYWxsYmFjayhcbiAgICAoc2VsZWN0ZWRWYWx1ZXM6IFdvcmtmbG93W10pID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0U2hvd0Vycm9yKHRydWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc2V0U2hvd0Vycm9yKGZhbHNlKVxuICAgICAgb25TdWJtaXQoc2VsZWN0ZWRWYWx1ZXMpXG4gICAgfSxcbiAgICBbb25TdWJtaXRdLFxuICApXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dFcnJvcihmYWxzZSlcbiAgfSwgW10pXG5cbiAgLy8gQ2FuY2VsIGp1c3Qgc2hvd3MgdGhlIGVycm9yIC0gdXNlciBtdXN0IHNlbGVjdCBhdCBsZWFzdCBvbmUgd29ya2Zsb3dcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dFcnJvcih0cnVlKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIHRpdGxlPVwiU2VsZWN0IEdpdEh1YiB3b3JrZmxvd3MgdG8gaW5zdGFsbFwiXG4gICAgICBzdWJ0aXRsZT1cIldlJ2xsIGNyZWF0ZSBhIHdvcmtmbG93IGZpbGUgaW4geW91ciByZXBvc2l0b3J5IGZvciBlYWNoIG9uZSB5b3Ugc2VsZWN0LlwiXG4gICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgaW5wdXRHdWlkZT17cmVuZGVySW5wdXRHdWlkZX1cbiAgICA+XG4gICAgICA8Qm94PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICBNb3JlIHdvcmtmbG93IGV4YW1wbGVzIChpc3N1ZSB0cmlhZ2UsIENJIGZpeGVzLCBldGMuKSBhdDp7JyAnfVxuICAgICAgICAgIDxMaW5rIHVybD1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jb2RlLWFjdGlvbi9ibG9iL21haW4vZXhhbXBsZXMvXCI+XG4gICAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYW50aHJvcGljcy9jbGF1ZGUtY29kZS1hY3Rpb24vYmxvYi9tYWluL2V4YW1wbGVzL1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxTZWxlY3RNdWx0aVxuICAgICAgICBvcHRpb25zPXtXT1JLRkxPV1MubWFwKHdvcmtmbG93ID0+ICh7XG4gICAgICAgICAgbGFiZWw6IHdvcmtmbG93LmxhYmVsLFxuICAgICAgICAgIHZhbHVlOiB3b3JrZmxvdy52YWx1ZSxcbiAgICAgICAgfSkpfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRTZWxlY3Rpb25zfVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgICBoaWRlSW5kZXhlc1xuICAgICAgLz5cblxuICAgICAge3Nob3dFcnJvciAmJiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPlxuICAgICAgICAgICAgWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IG9uZSB3b3JrZmxvdyB0byBjb250aW51ZVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvRGlhbG9nPlxuICApXG59XG4iLCAiZXhwb3J0IGNvbnN0IFBSX1RJVExFID0gJ0FkZCBDbGF1ZGUgQ29kZSBHaXRIdWIgV29ya2Zsb3cnXG5cbmV4cG9ydCBjb25zdCBHSVRIVUJfQUNUSU9OX1NFVFVQX0RPQ1NfVVJMID1cbiAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jb2RlLWFjdGlvbi9ibG9iL21haW4vZG9jcy9zZXR1cC5tZCdcblxuZXhwb3J0IGNvbnN0IFdPUktGTE9XX0NPTlRFTlQgPSBgbmFtZTogQ2xhdWRlIENvZGVcblxub246XG4gIGlzc3VlX2NvbW1lbnQ6XG4gICAgdHlwZXM6IFtjcmVhdGVkXVxuICBwdWxsX3JlcXVlc3RfcmV2aWV3X2NvbW1lbnQ6XG4gICAgdHlwZXM6IFtjcmVhdGVkXVxuICBpc3N1ZXM6XG4gICAgdHlwZXM6IFtvcGVuZWQsIGFzc2lnbmVkXVxuICBwdWxsX3JlcXVlc3RfcmV2aWV3OlxuICAgIHR5cGVzOiBbc3VibWl0dGVkXVxuXG5qb2JzOlxuICBjbGF1ZGU6XG4gICAgaWY6IHxcbiAgICAgIChnaXRodWIuZXZlbnRfbmFtZSA9PSAnaXNzdWVfY29tbWVudCcgJiYgY29udGFpbnMoZ2l0aHViLmV2ZW50LmNvbW1lbnQuYm9keSwgJ0BjbGF1ZGUnKSkgfHxcbiAgICAgIChnaXRodWIuZXZlbnRfbmFtZSA9PSAncHVsbF9yZXF1ZXN0X3Jldmlld19jb21tZW50JyAmJiBjb250YWlucyhnaXRodWIuZXZlbnQuY29tbWVudC5ib2R5LCAnQGNsYXVkZScpKSB8fFxuICAgICAgKGdpdGh1Yi5ldmVudF9uYW1lID09ICdwdWxsX3JlcXVlc3RfcmV2aWV3JyAmJiBjb250YWlucyhnaXRodWIuZXZlbnQucmV2aWV3LmJvZHksICdAY2xhdWRlJykpIHx8XG4gICAgICAoZ2l0aHViLmV2ZW50X25hbWUgPT0gJ2lzc3VlcycgJiYgKGNvbnRhaW5zKGdpdGh1Yi5ldmVudC5pc3N1ZS5ib2R5LCAnQGNsYXVkZScpIHx8IGNvbnRhaW5zKGdpdGh1Yi5ldmVudC5pc3N1ZS50aXRsZSwgJ0BjbGF1ZGUnKSkpXG4gICAgcnVucy1vbjogdWJ1bnR1LWxhdGVzdFxuICAgIHBlcm1pc3Npb25zOlxuICAgICAgY29udGVudHM6IHJlYWRcbiAgICAgIHB1bGwtcmVxdWVzdHM6IHJlYWRcbiAgICAgIGlzc3VlczogcmVhZFxuICAgICAgaWQtdG9rZW46IHdyaXRlXG4gICAgICBhY3Rpb25zOiByZWFkICMgUmVxdWlyZWQgZm9yIENsYXVkZSB0byByZWFkIENJIHJlc3VsdHMgb24gUFJzXG4gICAgc3RlcHM6XG4gICAgICAtIG5hbWU6IENoZWNrb3V0IHJlcG9zaXRvcnlcbiAgICAgICAgdXNlczogYWN0aW9ucy9jaGVja291dEB2NFxuICAgICAgICB3aXRoOlxuICAgICAgICAgIGZldGNoLWRlcHRoOiAxXG5cbiAgICAgIC0gbmFtZTogUnVuIENsYXVkZSBDb2RlXG4gICAgICAgIGlkOiBjbGF1ZGVcbiAgICAgICAgdXNlczogYW50aHJvcGljcy9jbGF1ZGUtY29kZS1hY3Rpb25AdjFcbiAgICAgICAgd2l0aDpcbiAgICAgICAgICBhbnRocm9waWNfYXBpX2tleTogXFwke3sgc2VjcmV0cy5BTlRIUk9QSUNfQVBJX0tFWSB9fVxuXG4gICAgICAgICAgIyBUaGlzIGlzIGFuIG9wdGlvbmFsIHNldHRpbmcgdGhhdCBhbGxvd3MgQ2xhdWRlIHRvIHJlYWQgQ0kgcmVzdWx0cyBvbiBQUnNcbiAgICAgICAgICBhZGRpdGlvbmFsX3Blcm1pc3Npb25zOiB8XG4gICAgICAgICAgICBhY3Rpb25zOiByZWFkXG5cbiAgICAgICAgICAjIE9wdGlvbmFsOiBHaXZlIGEgY3VzdG9tIHByb21wdCB0byBDbGF1ZGUuIElmIHRoaXMgaXMgbm90IHNwZWNpZmllZCwgQ2xhdWRlIHdpbGwgcGVyZm9ybSB0aGUgaW5zdHJ1Y3Rpb25zIHNwZWNpZmllZCBpbiB0aGUgY29tbWVudCB0aGF0IHRhZ2dlZCBpdC5cbiAgICAgICAgICAjIHByb21wdDogJ1VwZGF0ZSB0aGUgcHVsbCByZXF1ZXN0IGRlc2NyaXB0aW9uIHRvIGluY2x1ZGUgYSBzdW1tYXJ5IG9mIGNoYW5nZXMuJ1xuXG4gICAgICAgICAgIyBPcHRpb25hbDogQWRkIGNsYXVkZV9hcmdzIHRvIGN1c3RvbWl6ZSBiZWhhdmlvciBhbmQgY29uZmlndXJhdGlvblxuICAgICAgICAgICMgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jb2RlLWFjdGlvbi9ibG9iL21haW4vZG9jcy91c2FnZS5tZFxuICAgICAgICAgICMgb3IgaHR0cHM6Ly9jb2RlLmNsYXVkZS5jb20vZG9jcy9lbi9jbGktcmVmZXJlbmNlIGZvciBhdmFpbGFibGUgb3B0aW9uc1xuICAgICAgICAgICMgY2xhdWRlX2FyZ3M6ICctLWFsbG93ZWQtdG9vbHMgQmFzaChnaCBwcjoqKSdcblxuYFxuXG5leHBvcnQgY29uc3QgUFJfQk9EWSA9IGAjIyBcdUQ4M0VcdUREMTYgSW5zdGFsbGluZyBDbGF1ZGUgQ29kZSBHaXRIdWIgQXBwXG5cblRoaXMgUFIgYWRkcyBhIEdpdEh1YiBBY3Rpb25zIHdvcmtmbG93IHRoYXQgZW5hYmxlcyBDbGF1ZGUgQ29kZSBpbnRlZ3JhdGlvbiBpbiBvdXIgcmVwb3NpdG9yeS5cblxuIyMjIFdoYXQgaXMgQ2xhdWRlIENvZGU/XG5cbltDbGF1ZGUgQ29kZV0oaHR0cHM6Ly9jbGF1ZGUuY29tL2NsYXVkZS1jb2RlKSBpcyBhbiBBSSBjb2RpbmcgYWdlbnQgdGhhdCBjYW4gaGVscCB3aXRoOlxuLSBCdWcgZml4ZXMgYW5kIGltcHJvdmVtZW50cyAgXG4tIERvY3VtZW50YXRpb24gdXBkYXRlc1xuLSBJbXBsZW1lbnRpbmcgbmV3IGZlYXR1cmVzXG4tIENvZGUgcmV2aWV3cyBhbmQgc3VnZ2VzdGlvbnNcbi0gV3JpdGluZyB0ZXN0c1xuLSBBbmQgbW9yZSFcblxuIyMjIEhvdyBpdCB3b3Jrc1xuXG5PbmNlIHRoaXMgUFIgaXMgbWVyZ2VkLCB3ZSdsbCBiZSBhYmxlIHRvIGludGVyYWN0IHdpdGggQ2xhdWRlIGJ5IG1lbnRpb25pbmcgQGNsYXVkZSBpbiBhIHB1bGwgcmVxdWVzdCBvciBpc3N1ZSBjb21tZW50LlxuT25jZSB0aGUgd29ya2Zsb3cgaXMgdHJpZ2dlcmVkLCBDbGF1ZGUgd2lsbCBhbmFseXplIHRoZSBjb21tZW50IGFuZCBzdXJyb3VuZGluZyBjb250ZXh0LCBhbmQgZXhlY3V0ZSBvbiB0aGUgcmVxdWVzdCBpbiBhIEdpdEh1YiBhY3Rpb24uXG5cbiMjIyBJbXBvcnRhbnQgTm90ZXNcblxuLSAqKlRoaXMgd29ya2Zsb3cgd29uJ3QgdGFrZSBlZmZlY3QgdW50aWwgdGhpcyBQUiBpcyBtZXJnZWQqKlxuLSAqKkBjbGF1ZGUgbWVudGlvbnMgd29uJ3Qgd29yayB1bnRpbCBhZnRlciB0aGUgbWVyZ2UgaXMgY29tcGxldGUqKlxuLSBUaGUgd29ya2Zsb3cgcnVucyBhdXRvbWF0aWNhbGx5IHdoZW5ldmVyIENsYXVkZSBpcyBtZW50aW9uZWQgaW4gUFIgb3IgaXNzdWUgY29tbWVudHNcbi0gQ2xhdWRlIGdldHMgYWNjZXNzIHRvIHRoZSBlbnRpcmUgUFIgb3IgaXNzdWUgY29udGV4dCBpbmNsdWRpbmcgZmlsZXMsIGRpZmZzLCBhbmQgcHJldmlvdXMgY29tbWVudHNcblxuIyMjIFNlY3VyaXR5XG5cbi0gT3VyIEFudGhyb3BpYyBBUEkga2V5IGlzIHNlY3VyZWx5IHN0b3JlZCBhcyBhIEdpdEh1YiBBY3Rpb25zIHNlY3JldFxuLSBPbmx5IHVzZXJzIHdpdGggd3JpdGUgYWNjZXNzIHRvIHRoZSByZXBvc2l0b3J5IGNhbiB0cmlnZ2VyIHRoZSB3b3JrZmxvd1xuLSBBbGwgQ2xhdWRlIHJ1bnMgYXJlIHN0b3JlZCBpbiB0aGUgR2l0SHViIEFjdGlvbnMgcnVuIGhpc3Rvcnlcbi0gQ2xhdWRlJ3MgZGVmYXVsdCB0b29scyBhcmUgbGltaXRlZCB0byByZWFkaW5nL3dyaXRpbmcgZmlsZXMgYW5kIGludGVyYWN0aW5nIHdpdGggb3VyIHJlcG8gYnkgY3JlYXRpbmcgY29tbWVudHMsIGJyYW5jaGVzLCBhbmQgY29tbWl0cy5cbi0gV2UgY2FuIGFkZCBtb3JlIGFsbG93ZWQgdG9vbHMgYnkgYWRkaW5nIHRoZW0gdG8gdGhlIHdvcmtmbG93IGZpbGUgbGlrZTpcblxuXFxgXFxgXFxgXG5hbGxvd2VkX3Rvb2xzOiBCYXNoKG5wbSBpbnN0YWxsKSxCYXNoKG5wbSBydW4gYnVpbGQpLEJhc2gobnBtIHJ1biBsaW50KSxCYXNoKG5wbSBydW4gdGVzdClcblxcYFxcYFxcYFxuXG5UaGVyZSdzIG1vcmUgaW5mb3JtYXRpb24gaW4gdGhlIFtDbGF1ZGUgQ29kZSBhY3Rpb24gcmVwb10oaHR0cHM6Ly9naXRodWIuY29tL2FudGhyb3BpY3MvY2xhdWRlLWNvZGUtYWN0aW9uKS5cblxuQWZ0ZXIgbWVyZ2luZyB0aGlzIFBSLCBsZXQncyB0cnkgbWVudGlvbmluZyBAY2xhdWRlIGluIGEgY29tbWVudCBvbiBhbnkgUFIgdG8gZ2V0IHN0YXJ0ZWQhYFxuXG5leHBvcnQgY29uc3QgQ09ERV9SRVZJRVdfUExVR0lOX1dPUktGTE9XX0NPTlRFTlQgPSBgbmFtZTogQ2xhdWRlIENvZGUgUmV2aWV3XG5cbm9uOlxuICBwdWxsX3JlcXVlc3Q6XG4gICAgdHlwZXM6IFtvcGVuZWQsIHN5bmNocm9uaXplLCByZWFkeV9mb3JfcmV2aWV3LCByZW9wZW5lZF1cbiAgICAjIE9wdGlvbmFsOiBPbmx5IHJ1biBvbiBzcGVjaWZpYyBmaWxlIGNoYW5nZXNcbiAgICAjIHBhdGhzOlxuICAgICMgICAtIFwic3JjLyoqLyoudHNcIlxuICAgICMgICAtIFwic3JjLyoqLyoudHN4XCJcbiAgICAjICAgLSBcInNyYy8qKi8qLmpzXCJcbiAgICAjICAgLSBcInNyYy8qKi8qLmpzeFwiXG5cbmpvYnM6XG4gIGNsYXVkZS1yZXZpZXc6XG4gICAgIyBPcHRpb25hbDogRmlsdGVyIGJ5IFBSIGF1dGhvclxuICAgICMgaWY6IHxcbiAgICAjICAgZ2l0aHViLmV2ZW50LnB1bGxfcmVxdWVzdC51c2VyLmxvZ2luID09ICdleHRlcm5hbC1jb250cmlidXRvcicgfHxcbiAgICAjICAgZ2l0aHViLmV2ZW50LnB1bGxfcmVxdWVzdC51c2VyLmxvZ2luID09ICduZXctZGV2ZWxvcGVyJyB8fFxuICAgICMgICBnaXRodWIuZXZlbnQucHVsbF9yZXF1ZXN0LmF1dGhvcl9hc3NvY2lhdGlvbiA9PSAnRklSU1RfVElNRV9DT05UUklCVVRPUidcblxuICAgIHJ1bnMtb246IHVidW50dS1sYXRlc3RcbiAgICBwZXJtaXNzaW9uczpcbiAgICAgIGNvbnRlbnRzOiByZWFkXG4gICAgICBwdWxsLXJlcXVlc3RzOiByZWFkXG4gICAgICBpc3N1ZXM6IHJlYWRcbiAgICAgIGlkLXRva2VuOiB3cml0ZVxuXG4gICAgc3RlcHM6XG4gICAgICAtIG5hbWU6IENoZWNrb3V0IHJlcG9zaXRvcnlcbiAgICAgICAgdXNlczogYWN0aW9ucy9jaGVja291dEB2NFxuICAgICAgICB3aXRoOlxuICAgICAgICAgIGZldGNoLWRlcHRoOiAxXG5cbiAgICAgIC0gbmFtZTogUnVuIENsYXVkZSBDb2RlIFJldmlld1xuICAgICAgICBpZDogY2xhdWRlLXJldmlld1xuICAgICAgICB1c2VzOiBhbnRocm9waWNzL2NsYXVkZS1jb2RlLWFjdGlvbkB2MVxuICAgICAgICB3aXRoOlxuICAgICAgICAgIGFudGhyb3BpY19hcGlfa2V5OiBcXCR7eyBzZWNyZXRzLkFOVEhST1BJQ19BUElfS0VZIH19XG4gICAgICAgICAgcGx1Z2luX21hcmtldHBsYWNlczogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jb2RlLmdpdCdcbiAgICAgICAgICBwbHVnaW5zOiAnY29kZS1yZXZpZXdAY2xhdWRlLWNvZGUtcGx1Z2lucydcbiAgICAgICAgICBwcm9tcHQ6ICcvY29kZS1yZXZpZXc6Y29kZS1yZXZpZXcgXFwke3sgZ2l0aHViLnJlcG9zaXRvcnkgfX0vcHVsbC9cXCR7eyBnaXRodWIuZXZlbnQucHVsbF9yZXF1ZXN0Lm51bWJlciB9fSdcbiAgICAgICAgICAjIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYW50aHJvcGljcy9jbGF1ZGUtY29kZS1hY3Rpb24vYmxvYi9tYWluL2RvY3MvdXNhZ2UubWRcbiAgICAgICAgICAjIG9yIGh0dHBzOi8vY29kZS5jbGF1ZGUuY29tL2RvY3MvZW4vY2xpLXJlZmVyZW5jZSBmb3IgYXZhaWxhYmxlIG9wdGlvbnNcblxuYFxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQuanMnXG5pbXBvcnQgeyB1c2VUZXJtaW5hbFNpemUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgeyBCb3gsIGNvbG9yLCBUZXh0LCB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IHVzZUtleWJpbmRpbmdzIH0gZnJvbSAnLi4vLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcblxuaW50ZXJmYWNlIEFwaUtleVN0ZXBQcm9wcyB7XG4gIGV4aXN0aW5nQXBpS2V5OiBzdHJpbmcgfCBudWxsXG4gIHVzZUV4aXN0aW5nS2V5OiBib29sZWFuXG4gIGFwaUtleU9yT0F1dGhUb2tlbjogc3RyaW5nXG4gIG9uQXBpS2V5Q2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvblRvZ2dsZVVzZUV4aXN0aW5nS2V5OiAodXNlRXhpc3Rpbmc6IGJvb2xlYW4pID0+IHZvaWRcbiAgb25TdWJtaXQ6ICgpID0+IHZvaWRcbiAgb25DcmVhdGVPQXV0aFRva2VuPzogKCkgPT4gdm9pZFxuICBzZWxlY3RlZE9wdGlvbj86ICdleGlzdGluZycgfCAnbmV3JyB8ICdvYXV0aCdcbiAgb25TZWxlY3RPcHRpb24/OiAob3B0aW9uOiAnZXhpc3RpbmcnIHwgJ25ldycgfCAnb2F1dGgnKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBcGlLZXlTdGVwKHtcbiAgZXhpc3RpbmdBcGlLZXksXG4gIGFwaUtleU9yT0F1dGhUb2tlbixcbiAgb25BcGlLZXlDaGFuZ2UsXG4gIG9uU3VibWl0LFxuICBvblRvZ2dsZVVzZUV4aXN0aW5nS2V5LFxuICBvbkNyZWF0ZU9BdXRoVG9rZW4sXG4gIHNlbGVjdGVkT3B0aW9uID0gZXhpc3RpbmdBcGlLZXlcbiAgICA/ICdleGlzdGluZydcbiAgICA6IG9uQ3JlYXRlT0F1dGhUb2tlblxuICAgICAgPyAnb2F1dGgnXG4gICAgICA6ICduZXcnLFxuICBvblNlbGVjdE9wdGlvbixcbn06IEFwaUtleVN0ZXBQcm9wcykge1xuICBjb25zdCBbY3Vyc29yT2Zmc2V0LCBzZXRDdXJzb3JPZmZzZXRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgdGVybWluYWxTaXplID0gdXNlVGVybWluYWxTaXplKClcbiAgY29uc3QgW3RoZW1lXSA9IHVzZVRoZW1lKClcblxuICBjb25zdCBoYW5kbGVQcmV2aW91cyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRPcHRpb24gPT09ICduZXcnICYmIG9uQ3JlYXRlT0F1dGhUb2tlbikge1xuICAgICAgLy8gRnJvbSAnbmV3JyBnbyB1cCB0byAnb2F1dGgnXG4gICAgICBvblNlbGVjdE9wdGlvbj8uKCdvYXV0aCcpXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZE9wdGlvbiA9PT0gJ29hdXRoJyAmJiBleGlzdGluZ0FwaUtleSkge1xuICAgICAgLy8gRnJvbSAnb2F1dGgnIGdvIHVwIHRvICdleGlzdGluZycgKG9ubHkgaWYgaXQgZXhpc3RzKVxuICAgICAgb25TZWxlY3RPcHRpb24/LignZXhpc3RpbmcnKVxuICAgICAgb25Ub2dnbGVVc2VFeGlzdGluZ0tleSh0cnVlKVxuICAgIH1cbiAgfSwgW1xuICAgIHNlbGVjdGVkT3B0aW9uLFxuICAgIG9uQ3JlYXRlT0F1dGhUb2tlbixcbiAgICBleGlzdGluZ0FwaUtleSxcbiAgICBvblNlbGVjdE9wdGlvbixcbiAgICBvblRvZ2dsZVVzZUV4aXN0aW5nS2V5LFxuICBdKVxuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkT3B0aW9uID09PSAnZXhpc3RpbmcnKSB7XG4gICAgICAvLyBGcm9tICdleGlzdGluZycgZ28gZG93biB0byAnb2F1dGgnIChpZiBhdmFpbGFibGUpIG9yICduZXcnXG4gICAgICBvblNlbGVjdE9wdGlvbj8uKG9uQ3JlYXRlT0F1dGhUb2tlbiA/ICdvYXV0aCcgOiAnbmV3JylcbiAgICAgIG9uVG9nZ2xlVXNlRXhpc3RpbmdLZXkoZmFsc2UpXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZE9wdGlvbiA9PT0gJ29hdXRoJykge1xuICAgICAgLy8gRnJvbSAnb2F1dGgnIGdvIGRvd24gdG8gJ25ldydcbiAgICAgIG9uU2VsZWN0T3B0aW9uPy4oJ25ldycpXG4gICAgfVxuICB9LCBbXG4gICAgc2VsZWN0ZWRPcHRpb24sXG4gICAgb25DcmVhdGVPQXV0aFRva2VuLFxuICAgIG9uU2VsZWN0T3B0aW9uLFxuICAgIG9uVG9nZ2xlVXNlRXhpc3RpbmdLZXksXG4gIF0pXG5cbiAgY29uc3QgaGFuZGxlQ29uZmlybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRPcHRpb24gPT09ICdvYXV0aCcgJiYgb25DcmVhdGVPQXV0aFRva2VuKSB7XG4gICAgICBvbkNyZWF0ZU9BdXRoVG9rZW4oKVxuICAgIH0gZWxzZSB7XG4gICAgICBvblN1Ym1pdCgpXG4gICAgfVxuICB9LCBbc2VsZWN0ZWRPcHRpb24sIG9uQ3JlYXRlT0F1dGhUb2tlbiwgb25TdWJtaXRdKVxuXG4gIC8vIFdoZW4gdGhlIHRleHQgaW5wdXQgaXMgdmlzaWJsZSwgb21pdCBjb25maXJtOnllcyBzbyBiYXJlICd5JyBwYXNzZXNcbiAgLy8gdGhyb3VnaCB0byB0aGUgaW5wdXQgaW5zdGVhZCBvZiBzdWJtaXR0aW5nLiBUZXh0SW5wdXQncyBvblN1Ym1pdCBoYW5kbGVzXG4gIC8vIEVudGVyLiBLZWVwIHRoZSBDb25maXJtYXRpb24gY29udGV4dCAobm90IFNldHRpbmdzKSB0byBhdm9pZCBqL2sgYmluZGluZ3MuXG4gIGNvbnN0IGlzVGV4dElucHV0VmlzaWJsZSA9IHNlbGVjdGVkT3B0aW9uID09PSAnbmV3J1xuICB1c2VLZXliaW5kaW5ncyhcbiAgICB7XG4gICAgICAnY29uZmlybTpwcmV2aW91cyc6IGhhbmRsZVByZXZpb3VzLFxuICAgICAgJ2NvbmZpcm06bmV4dCc6IGhhbmRsZU5leHQsXG4gICAgICAnY29uZmlybTp5ZXMnOiBoYW5kbGVDb25maXJtLFxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJywgaXNBY3RpdmU6ICFpc1RleHRJbnB1dFZpc2libGUgfSxcbiAgKVxuICB1c2VLZXliaW5kaW5ncyhcbiAgICB7XG4gICAgICAnY29uZmlybTpwcmV2aW91cyc6IGhhbmRsZVByZXZpb3VzLFxuICAgICAgJ2NvbmZpcm06bmV4dCc6IGhhbmRsZU5leHQsXG4gICAgfSxcbiAgICB7IGNvbnRleHQ6ICdDb25maXJtYXRpb24nLCBpc0FjdGl2ZTogaXNUZXh0SW5wdXRWaXNpYmxlIH0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBib3JkZXJTdHlsZT1cInJvdW5kXCIgcGFkZGluZ1g9ezF9PlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+SW5zdGFsbCBHaXRIdWIgQXBwPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPkNob29zZSBBUEkga2V5PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAge2V4aXN0aW5nQXBpS2V5ICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAge3NlbGVjdGVkT3B0aW9uID09PSAnZXhpc3RpbmcnXG4gICAgICAgICAgICAgICAgPyBjb2xvcignc3VjY2VzcycsIHRoZW1lKSgnPiAnKVxuICAgICAgICAgICAgICAgIDogJyAgJ31cbiAgICAgICAgICAgICAgVXNlIHlvdXIgZXhpc3RpbmcgQ2xhdWRlIENvZGUgQVBJIGtleVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICB7b25DcmVhdGVPQXV0aFRva2VuICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAge3NlbGVjdGVkT3B0aW9uID09PSAnb2F1dGgnXG4gICAgICAgICAgICAgICAgPyBjb2xvcignc3VjY2VzcycsIHRoZW1lKSgnPiAnKVxuICAgICAgICAgICAgICAgIDogJyAgJ31cbiAgICAgICAgICAgICAgQ3JlYXRlIGEgbG9uZy1saXZlZCB0b2tlbiB3aXRoIHlvdXIgQ2xhdWRlIHN1YnNjcmlwdGlvblxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICB7c2VsZWN0ZWRPcHRpb24gPT09ICduZXcnID8gY29sb3IoJ3N1Y2Nlc3MnLCB0aGVtZSkoJz4gJykgOiAnICAnfVxuICAgICAgICAgICAgRW50ZXIgYSBuZXcgQVBJIGtleVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHtzZWxlY3RlZE9wdGlvbiA9PT0gJ25ldycgJiYgKFxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXthcGlLZXlPck9BdXRoVG9rZW59XG4gICAgICAgICAgICBvbkNoYW5nZT17b25BcGlLZXlDaGFuZ2V9XG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICBvblBhc3RlPXtvbkFwaUtleUNoYW5nZX1cbiAgICAgICAgICAgIGZvY3VzPXt0cnVlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzay1hbnTigKYgKENyZWF0ZSBhIG5ldyBrZXkgYXQgaHR0cHM6Ly9wbGF0Zm9ybS5jbGF1ZGUuY29tL3NldHRpbmdzL2tleXMpXCJcbiAgICAgICAgICAgIG1hc2s9XCIqXCJcbiAgICAgICAgICAgIGNvbHVtbnM9e3Rlcm1pbmFsU2l6ZS5jb2x1bW5zfVxuICAgICAgICAgICAgY3Vyc29yT2Zmc2V0PXtjdXJzb3JPZmZzZXR9XG4gICAgICAgICAgICBvbkNoYW5nZUN1cnNvck9mZnNldD17c2V0Q3Vyc29yT2Zmc2V0fVxuICAgICAgICAgICAgc2hvd0N1cnNvcj17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IG1hcmdpbkxlZnQ9ezN9PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj7ihpEv4oaTIHRvIHNlbGVjdCDCtyBFbnRlciB0byBjb250aW51ZTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHRJbnB1dC5qcydcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVRlcm1pbmFsU2l6ZS5qcydcbmltcG9ydCB7IEJveCwgY29sb3IsIFRleHQsIHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZ3MgfSBmcm9tICcuLi8uLi9rZXliaW5kaW5ncy91c2VLZXliaW5kaW5nLmpzJ1xuXG5pbnRlcmZhY2UgQ2hlY2tFeGlzdGluZ1NlY3JldFN0ZXBQcm9wcyB7XG4gIHVzZUV4aXN0aW5nU2VjcmV0OiBib29sZWFuXG4gIHNlY3JldE5hbWU6IHN0cmluZ1xuICBvblRvZ2dsZVVzZUV4aXN0aW5nU2VjcmV0OiAodXNlRXhpc3Rpbmc6IGJvb2xlYW4pID0+IHZvaWRcbiAgb25TZWNyZXROYW1lQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvblN1Ym1pdDogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tFeGlzdGluZ1NlY3JldFN0ZXAoe1xuICB1c2VFeGlzdGluZ1NlY3JldCxcbiAgc2VjcmV0TmFtZSxcbiAgb25Ub2dnbGVVc2VFeGlzdGluZ1NlY3JldCxcbiAgb25TZWNyZXROYW1lQ2hhbmdlLFxuICBvblN1Ym1pdCxcbn06IENoZWNrRXhpc3RpbmdTZWNyZXRTdGVwUHJvcHMpIHtcbiAgY29uc3QgW2N1cnNvck9mZnNldCwgc2V0Q3Vyc29yT2Zmc2V0XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHRlcm1pbmFsU2l6ZSA9IHVzZVRlcm1pbmFsU2l6ZSgpXG4gIGNvbnN0IFt0aGVtZV0gPSB1c2VUaGVtZSgpXG5cbiAgLy8gV2hlbiB0aGUgdGV4dCBpbnB1dCBpcyB2aXNpYmxlLCBvbWl0IGNvbmZpcm06eWVzIHNvIGJhcmUgJ3knIHBhc3Nlc1xuICAvLyB0aHJvdWdoIHRvIHRoZSBpbnB1dCBpbnN0ZWFkIG9mIHN1Ym1pdHRpbmcuIFRleHRJbnB1dCdzIG9uU3VibWl0IGhhbmRsZXNcbiAgLy8gRW50ZXIuIEtlZXAgdGhlIENvbmZpcm1hdGlvbiBjb250ZXh0IChub3QgU2V0dGluZ3MpIHRvIGF2b2lkIGovayBiaW5kaW5ncy5cbiAgY29uc3QgaGFuZGxlUHJldmlvdXMgPSB1c2VDYWxsYmFjayhcbiAgICAoKSA9PiBvblRvZ2dsZVVzZUV4aXN0aW5nU2VjcmV0KHRydWUpLFxuICAgIFtvblRvZ2dsZVVzZUV4aXN0aW5nU2VjcmV0XSxcbiAgKVxuICBjb25zdCBoYW5kbGVOZXh0ID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gb25Ub2dnbGVVc2VFeGlzdGluZ1NlY3JldChmYWxzZSksXG4gICAgW29uVG9nZ2xlVXNlRXhpc3RpbmdTZWNyZXRdLFxuICApXG4gIHVzZUtleWJpbmRpbmdzKFxuICAgIHtcbiAgICAgICdjb25maXJtOnByZXZpb3VzJzogaGFuZGxlUHJldmlvdXMsXG4gICAgICAnY29uZmlybTpuZXh0JzogaGFuZGxlTmV4dCxcbiAgICAgICdjb25maXJtOnllcyc6IG9uU3VibWl0LFxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJywgaXNBY3RpdmU6IHVzZUV4aXN0aW5nU2VjcmV0IH0sXG4gIClcbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ2NvbmZpcm06cHJldmlvdXMnOiBoYW5kbGVQcmV2aW91cyxcbiAgICAgICdjb25maXJtOm5leHQnOiBoYW5kbGVOZXh0LFxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJywgaXNBY3RpdmU6ICF1c2VFeGlzdGluZ1NlY3JldCB9LFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYm9yZGVyU3R5bGU9XCJyb3VuZFwiIHBhZGRpbmdYPXsxfT5cbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBib2xkPkluc3RhbGwgR2l0SHViIEFwcDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5TZXR1cCBBUEkga2V5IHNlY3JldDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIEFOVEhST1BJQ19BUElfS0VZIGFscmVhZHkgZXhpc3RzIGluIHJlcG9zaXRvcnkgc2VjcmV0cyFcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPFRleHQ+V291bGQgeW91IGxpa2UgdG86PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAge3VzZUV4aXN0aW5nU2VjcmV0ID8gY29sb3IoJ3N1Y2Nlc3MnLCB0aGVtZSkoJz4gJykgOiAnICAnfVxuICAgICAgICAgICAgVXNlIHRoZSBleGlzdGluZyBBUEkga2V5XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgeyF1c2VFeGlzdGluZ1NlY3JldCA/IGNvbG9yKCdzdWNjZXNzJywgdGhlbWUpKCc+ICcpIDogJyAgJ31cbiAgICAgICAgICAgIENyZWF0ZSBhIG5ldyBzZWNyZXQgd2l0aCBhIGRpZmZlcmVudCBuYW1lXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgeyF1c2VFeGlzdGluZ1NlY3JldCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgRW50ZXIgbmV3IHNlY3JldCBuYW1lIChhbHBoYW51bWVyaWMgd2l0aCB1bmRlcnNjb3Jlcyk6XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17c2VjcmV0TmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VjcmV0TmFtZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgICBmb2N1cz17dHJ1ZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuLCBDTEFVREVfQVBJX0tFWVwiXG4gICAgICAgICAgICAgIGNvbHVtbnM9e3Rlcm1pbmFsU2l6ZS5jb2x1bW5zfVxuICAgICAgICAgICAgICBjdXJzb3JPZmZzZXQ9e2N1cnNvck9mZnNldH1cbiAgICAgICAgICAgICAgb25DaGFuZ2VDdXJzb3JPZmZzZXQ9e3NldEN1cnNvck9mZnNldH1cbiAgICAgICAgICAgICAgc2hvd0N1cnNvcj17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggbWFyZ2luTGVmdD17M30+XG4gICAgICAgIDxUZXh0IGRpbUNvbG9yPuKGkS/ihpMgdG8gc2VsZWN0IMK3IEVudGVyIHRvIGNvbnRpbnVlPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tHaXRIdWJTdGVwKCkge1xuICByZXR1cm4gPFRleHQ+Q2hlY2tpbmcgR2l0SHViIENMSSBpbnN0YWxsYXRpb27igKY8L1RleHQ+XG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHRJbnB1dC5qcydcbmltcG9ydCB7IHVzZVRlcm1pbmFsU2l6ZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVRlcm1pbmFsU2l6ZS5qcydcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uL2luay5qcydcbmltcG9ydCB7IHVzZUtleWJpbmRpbmdzIH0gZnJvbSAnLi4vLi4va2V5YmluZGluZ3MvdXNlS2V5YmluZGluZy5qcydcblxuaW50ZXJmYWNlIENob29zZVJlcG9TdGVwUHJvcHMge1xuICBjdXJyZW50UmVwbzogc3RyaW5nIHwgbnVsbFxuICB1c2VDdXJyZW50UmVwbzogYm9vbGVhblxuICByZXBvVXJsOiBzdHJpbmdcbiAgb25SZXBvVXJsQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvblRvZ2dsZVVzZUN1cnJlbnRSZXBvOiAodXNlQ3VycmVudFJlcG86IGJvb2xlYW4pID0+IHZvaWRcbiAgb25TdWJtaXQ6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENob29zZVJlcG9TdGVwKHtcbiAgY3VycmVudFJlcG8sXG4gIHVzZUN1cnJlbnRSZXBvLFxuICByZXBvVXJsLFxuICBvblJlcG9VcmxDaGFuZ2UsXG4gIG9uU3VibWl0LFxuICBvblRvZ2dsZVVzZUN1cnJlbnRSZXBvLFxufTogQ2hvb3NlUmVwb1N0ZXBQcm9wcykge1xuICBjb25zdCBbY3Vyc29yT2Zmc2V0LCBzZXRDdXJzb3JPZmZzZXRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3Nob3dFbXB0eUVycm9yLCBzZXRTaG93RW1wdHlFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdGVybWluYWxTaXplID0gdXNlVGVybWluYWxTaXplKClcbiAgY29uc3QgdGV4dElucHV0Q29sdW1ucyA9IHRlcm1pbmFsU2l6ZS5jb2x1bW5zXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHJlcG9OYW1lID0gdXNlQ3VycmVudFJlcG8gPyBjdXJyZW50UmVwbyA6IHJlcG9VcmxcbiAgICBpZiAoIXJlcG9OYW1lPy50cmltKCkpIHtcbiAgICAgIHNldFNob3dFbXB0eUVycm9yKHRydWUpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgb25TdWJtaXQoKVxuICB9LCBbdXNlQ3VycmVudFJlcG8sIGN1cnJlbnRSZXBvLCByZXBvVXJsLCBvblN1Ym1pdF0pXG5cbiAgLy8gV2hlbiB0aGUgdGV4dCBpbnB1dCBpcyB2aXNpYmxlLCBvbWl0IGNvbmZpcm06eWVzIHNvIGJhcmUgJ3knIHBhc3Nlc1xuICAvLyB0aHJvdWdoIHRvIHRoZSBpbnB1dCBpbnN0ZWFkIG9mIHN1Ym1pdHRpbmcuIFRleHRJbnB1dCdzIG9uU3VibWl0IGhhbmRsZXNcbiAgLy8gRW50ZXIuIEtlZXAgdGhlIENvbmZpcm1hdGlvbiBjb250ZXh0IChub3QgU2V0dGluZ3MpIHRvIGF2b2lkIGovayBiaW5kaW5ncy5cbiAgY29uc3QgaXNUZXh0SW5wdXRWaXNpYmxlID0gIXVzZUN1cnJlbnRSZXBvIHx8ICFjdXJyZW50UmVwb1xuICBjb25zdCBoYW5kbGVQcmV2aW91cyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBvblRvZ2dsZVVzZUN1cnJlbnRSZXBvKHRydWUpXG4gICAgc2V0U2hvd0VtcHR5RXJyb3IoZmFsc2UpXG4gIH0sIFtvblRvZ2dsZVVzZUN1cnJlbnRSZXBvXSlcbiAgY29uc3QgaGFuZGxlTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBvblRvZ2dsZVVzZUN1cnJlbnRSZXBvKGZhbHNlKVxuICAgIHNldFNob3dFbXB0eUVycm9yKGZhbHNlKVxuICB9LCBbb25Ub2dnbGVVc2VDdXJyZW50UmVwb10pXG5cbiAgdXNlS2V5YmluZGluZ3MoXG4gICAge1xuICAgICAgJ2NvbmZpcm06cHJldmlvdXMnOiBoYW5kbGVQcmV2aW91cyxcbiAgICAgICdjb25maXJtOm5leHQnOiBoYW5kbGVOZXh0LFxuICAgICAgJ2NvbmZpcm06eWVzJzogaGFuZGxlU3VibWl0LFxuICAgIH0sXG4gICAgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJywgaXNBY3RpdmU6ICFpc1RleHRJbnB1dFZpc2libGUgfSxcbiAgKVxuICB1c2VLZXliaW5kaW5ncyhcbiAgICB7XG4gICAgICAnY29uZmlybTpwcmV2aW91cyc6IGhhbmRsZVByZXZpb3VzLFxuICAgICAgJ2NvbmZpcm06bmV4dCc6IGhhbmRsZU5leHQsXG4gICAgfSxcbiAgICB7IGNvbnRleHQ6ICdDb25maXJtYXRpb24nLCBpc0FjdGl2ZTogaXNUZXh0SW5wdXRWaXNpYmxlIH0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBib3JkZXJTdHlsZT1cInJvdW5kXCIgcGFkZGluZ1g9ezF9PlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+SW5zdGFsbCBHaXRIdWIgQXBwPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlNlbGVjdCBHaXRIdWIgcmVwb3NpdG9yeTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHtjdXJyZW50UmVwbyAmJiAoXG4gICAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgYm9sZD17dXNlQ3VycmVudFJlcG99XG4gICAgICAgICAgICAgIGNvbG9yPXt1c2VDdXJyZW50UmVwbyA/ICdwZXJtaXNzaW9uJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VzZUN1cnJlbnRSZXBvID8gJz4gJyA6ICcgICd9XG4gICAgICAgICAgICAgIFVzZSBjdXJyZW50IHJlcG9zaXRvcnk6IHtjdXJyZW50UmVwb31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBib2xkPXshdXNlQ3VycmVudFJlcG8gfHwgIWN1cnJlbnRSZXBvfVxuICAgICAgICAgICAgY29sb3I9eyF1c2VDdXJyZW50UmVwbyB8fCAhY3VycmVudFJlcG8gPyAncGVybWlzc2lvbicgOiB1bmRlZmluZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyF1c2VDdXJyZW50UmVwbyB8fCAhY3VycmVudFJlcG8gPyAnPiAnIDogJyAgJ31cbiAgICAgICAgICAgIHtjdXJyZW50UmVwbyA/ICdFbnRlciBhIGRpZmZlcmVudCByZXBvc2l0b3J5JyA6ICdFbnRlciByZXBvc2l0b3J5J31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7KCF1c2VDdXJyZW50UmVwbyB8fCAhY3VycmVudFJlcG8pICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpbkxlZnQ9ezJ9IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtyZXBvVXJsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIG9uUmVwb1VybENoYW5nZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICBzZXRTaG93RW1wdHlFcnJvcihmYWxzZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgZm9jdXM9e3RydWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSByZXBvIGFzIG93bmVyL3JlcG8gb3IgaHR0cHM6Ly9naXRodWIuY29tL293bmVyL3JlcG/igKZcIlxuICAgICAgICAgICAgICBjb2x1bW5zPXt0ZXh0SW5wdXRDb2x1bW5zfVxuICAgICAgICAgICAgICBjdXJzb3JPZmZzZXQ9e2N1cnNvck9mZnNldH1cbiAgICAgICAgICAgICAgb25DaGFuZ2VDdXJzb3JPZmZzZXQ9e3NldEN1cnNvck9mZnNldH1cbiAgICAgICAgICAgICAgc2hvd0N1cnNvcj17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICAgIHtzaG93RW1wdHlFcnJvciAmJiAoXG4gICAgICAgIDxCb3ggbWFyZ2luTGVmdD17M30gbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+UGxlYXNlIGVudGVyIGEgcmVwb3NpdG9yeSBuYW1lIHRvIGNvbnRpbnVlPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgICA8Qm94IG1hcmdpbkxlZnQ9ezN9PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICB7Y3VycmVudFJlcG8gPyAn4oaRL+KGkyB0byBzZWxlY3QgwrcgJyA6ICcnfUVudGVyIHRvIGNvbnRpbnVlXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHR5cGUgeyBXb3JrZmxvdyB9IGZyb20gJy4vdHlwZXMuanMnXG5cbmludGVyZmFjZSBDcmVhdGluZ1N0ZXBQcm9wcyB7XG4gIGN1cnJlbnRXb3JrZmxvd0luc3RhbGxTdGVwOiBudW1iZXJcbiAgc2VjcmV0RXhpc3RzOiBib29sZWFuXG4gIHVzZUV4aXN0aW5nU2VjcmV0OiBib29sZWFuXG4gIHNlY3JldE5hbWU6IHN0cmluZ1xuICBza2lwV29ya2Zsb3c/OiBib29sZWFuXG4gIHNlbGVjdGVkV29ya2Zsb3dzOiBXb3JrZmxvd1tdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGluZ1N0ZXAoe1xuICBjdXJyZW50V29ya2Zsb3dJbnN0YWxsU3RlcCxcbiAgc2VjcmV0RXhpc3RzLFxuICB1c2VFeGlzdGluZ1NlY3JldCxcbiAgc2VjcmV0TmFtZSxcbiAgc2tpcFdvcmtmbG93ID0gZmFsc2UsXG4gIHNlbGVjdGVkV29ya2Zsb3dzLFxufTogQ3JlYXRpbmdTdGVwUHJvcHMpIHtcbiAgY29uc3QgcHJvZ3Jlc3NTdGVwcyA9IHNraXBXb3JrZmxvd1xuICAgID8gW1xuICAgICAgICAnR2V0dGluZyByZXBvc2l0b3J5IGluZm9ybWF0aW9uJyxcbiAgICAgICAgc2VjcmV0RXhpc3RzICYmIHVzZUV4aXN0aW5nU2VjcmV0XG4gICAgICAgICAgPyAnVXNpbmcgZXhpc3RpbmcgQVBJIGtleSBzZWNyZXQnXG4gICAgICAgICAgOiBgU2V0dGluZyB1cCAke3NlY3JldE5hbWV9IHNlY3JldGAsXG4gICAgICBdXG4gICAgOiBbXG4gICAgICAgICdHZXR0aW5nIHJlcG9zaXRvcnkgaW5mb3JtYXRpb24nLFxuICAgICAgICAnQ3JlYXRpbmcgYnJhbmNoJyxcbiAgICAgICAgc2VsZWN0ZWRXb3JrZmxvd3MubGVuZ3RoID4gMVxuICAgICAgICAgID8gJ0NyZWF0aW5nIHdvcmtmbG93IGZpbGVzJ1xuICAgICAgICAgIDogJ0NyZWF0aW5nIHdvcmtmbG93IGZpbGUnLFxuICAgICAgICBzZWNyZXRFeGlzdHMgJiYgdXNlRXhpc3RpbmdTZWNyZXRcbiAgICAgICAgICA/ICdVc2luZyBleGlzdGluZyBBUEkga2V5IHNlY3JldCdcbiAgICAgICAgICA6IGBTZXR0aW5nIHVwICR7c2VjcmV0TmFtZX0gc2VjcmV0YCxcbiAgICAgICAgJ09wZW5pbmcgcHVsbCByZXF1ZXN0IHBhZ2UnLFxuICAgICAgXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGJvcmRlclN0eWxlPVwicm91bmRcIiBwYWRkaW5nWD17MX0+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPFRleHQgYm9sZD5JbnN0YWxsIEdpdEh1YiBBcHA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+Q3JlYXRlIEdpdEh1YiBBY3Rpb25zIHdvcmtmbG93PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAge3Byb2dyZXNzU3RlcHMubWFwKChzdGVwVGV4dCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgc3RhdHVzOiAnY29tcGxldGVkJyB8ICdpbi1wcm9ncmVzcycgfCAncGVuZGluZycgPSAncGVuZGluZydcblxuICAgICAgICAgIGlmIChpbmRleCA8IGN1cnJlbnRXb3JrZmxvd0luc3RhbGxTdGVwKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAnY29tcGxldGVkJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGN1cnJlbnRXb3JrZmxvd0luc3RhbGxTdGVwKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAnaW4tcHJvZ3Jlc3MnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3gga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgc3RhdHVzID09PSAnY29tcGxldGVkJ1xuICAgICAgICAgICAgICAgICAgICA/ICdzdWNjZXNzJ1xuICAgICAgICAgICAgICAgICAgICA6IHN0YXR1cyA9PT0gJ2luLXByb2dyZXNzJ1xuICAgICAgICAgICAgICAgICAgICAgID8gJ3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c3RhdHVzID09PSAnY29tcGxldGVkJyA/ICfinJMgJyA6ICcnfVxuICAgICAgICAgICAgICAgIHtzdGVwVGV4dH1cbiAgICAgICAgICAgICAgICB7c3RhdHVzID09PSAnaW4tcHJvZ3Jlc3MnID8gJ+KApicgOiAnJ31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR0lUSFVCX0FDVElPTl9TRVRVUF9ET0NTX1VSTCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9naXRodWItYXBwLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuXG5pbnRlcmZhY2UgRXJyb3JTdGVwUHJvcHMge1xuICBlcnJvcjogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGVycm9yUmVhc29uPzogc3RyaW5nXG4gIGVycm9ySW5zdHJ1Y3Rpb25zPzogc3RyaW5nW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yU3RlcCh7XG4gIGVycm9yLFxuICBlcnJvclJlYXNvbixcbiAgZXJyb3JJbnN0cnVjdGlvbnMsXG59OiBFcnJvclN0ZXBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBib3JkZXJTdHlsZT1cInJvdW5kXCIgcGFkZGluZ1g9ezF9PlxuICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICAgIDxUZXh0IGJvbGQ+SW5zdGFsbCBHaXRIdWIgQXBwPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRleHQgY29sb3I9XCJlcnJvclwiPkVycm9yOiB7ZXJyb3J9PC9UZXh0PlxuICAgICAgICB7ZXJyb3JSZWFzb24gJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlJlYXNvbjoge2Vycm9yUmVhc29ufTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAge2Vycm9ySW5zdHJ1Y3Rpb25zICYmIGVycm9ySW5zdHJ1Y3Rpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5Ib3cgdG8gZml4OjwvVGV4dD5cbiAgICAgICAgICAgIHtlcnJvckluc3RydWN0aW9ucy5tYXAoKGluc3RydWN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8Qm94IGtleT17aW5kZXh9IG1hcmdpbkxlZnQ9ezJ9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPuKAoiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQ+e2luc3RydWN0aW9ufTwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgRm9yIG1hbnVhbCBzZXR1cCBpbnN0cnVjdGlvbnMsIHNlZTp7JyAnfVxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF1ZGVcIj57R0lUSFVCX0FDVElPTl9TRVRVUF9ET0NTX1VSTH08L1RleHQ+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBtYXJnaW5MZWZ0PXszfT5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+UHJlc3MgYW55IGtleSB0byBleGl0PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdzcmMvY29tcG9uZW50cy9DdXN0b21TZWxlY3QvaW5kZXguanMnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5cbmludGVyZmFjZSBFeGlzdGluZ1dvcmtmbG93U3RlcFByb3BzIHtcbiAgcmVwb05hbWU6IHN0cmluZ1xuICBvblNlbGVjdEFjdGlvbjogKGFjdGlvbjogJ3VwZGF0ZScgfCAnc2tpcCcgfCAnZXhpdCcpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEV4aXN0aW5nV29ya2Zsb3dTdGVwKHtcbiAgcmVwb05hbWUsXG4gIG9uU2VsZWN0QWN0aW9uLFxufTogRXhpc3RpbmdXb3JrZmxvd1N0ZXBQcm9wcykge1xuICBjb25zdCBvcHRpb25zID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnVXBkYXRlIHdvcmtmbG93IGZpbGUgd2l0aCBsYXRlc3QgdmVyc2lvbicsXG4gICAgICB2YWx1ZTogJ3VwZGF0ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ1NraXAgd29ya2Zsb3cgdXBkYXRlIChjb25maWd1cmUgc2VjcmV0cyBvbmx5KScsXG4gICAgICB2YWx1ZTogJ3NraXAnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdFeGl0IHdpdGhvdXQgbWFraW5nIGNoYW5nZXMnLFxuICAgICAgdmFsdWU6ICdleGl0JyxcbiAgICB9LFxuICBdXG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBvblNlbGVjdEFjdGlvbih2YWx1ZSBhcyAndXBkYXRlJyB8ICdza2lwJyB8ICdleGl0JylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICBvblNlbGVjdEFjdGlvbignZXhpdCcpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGJvcmRlclN0eWxlPVwicm91bmRcIiBib3JkZXJEaW1Db2xvciBwYWRkaW5nWD17MX0+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICA8VGV4dCBib2xkPkV4aXN0aW5nIFdvcmtmbG93IEZvdW5kPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5SZXBvc2l0b3J5OiB7cmVwb05hbWV9PC9UZXh0PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIEEgQ2xhdWRlIHdvcmtmbG93IGZpbGUgYWxyZWFkeSBleGlzdHMgYXR7JyAnfVxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhdWRlXCI+LmdpdGh1Yi93b3JrZmxvd3MvY2xhdWRlLnltbDwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5XaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGRvPzwvVGV4dD5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH1cbiAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgVmlldyB0aGUgbGF0ZXN0IHdvcmtmbG93IHRlbXBsYXRlIGF0OnsnICd9XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJjbGF1ZGVcIj5cbiAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jb2RlLWFjdGlvbi9ibG9iL21haW4vZXhhbXBsZXMvY2xhdWRlLnltbFxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR0lUSFVCX0FDVElPTl9TRVRVUF9ET0NTX1VSTCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9naXRodWItYXBwLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5cbmludGVyZmFjZSBJbnN0YWxsQXBwU3RlcFByb3BzIHtcbiAgcmVwb1VybDogc3RyaW5nXG4gIG9uU3VibWl0OiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnN0YWxsQXBwU3RlcCh7IHJlcG9VcmwsIG9uU3VibWl0IH06IEluc3RhbGxBcHBTdGVwUHJvcHMpIHtcbiAgLy8gRW50ZXIgdG8gc3VibWl0XG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06eWVzJywgb25TdWJtaXQsIHsgY29udGV4dDogJ0NvbmZpcm1hdGlvbicgfSlcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGJvcmRlclN0eWxlPVwicm91bmRcIiBib3JkZXJEaW1Db2xvciBwYWRkaW5nWD17MX0+XG4gICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICA8VGV4dCBib2xkPkluc3RhbGwgdGhlIENsYXVkZSBHaXRIdWIgQXBwPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgIDxUZXh0Pk9wZW5pbmcgYnJvd3NlciB0byBpbnN0YWxsIHRoZSBDbGF1ZGUgR2l0SHViIEFwcOKApjwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICA8VGV4dD5JZiB5b3VyIGJyb3dzZXIgZG9lc24mYXBvczt0IG9wZW4gYXV0b21hdGljYWxseSwgdmlzaXQ6PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgIDxUZXh0IHVuZGVybGluZT5odHRwczovL2dpdGh1Yi5jb20vYXBwcy9jbGF1ZGU8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsxfT5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgUGxlYXNlIGluc3RhbGwgdGhlIGFwcCBmb3IgcmVwb3NpdG9yeTogPFRleHQgYm9sZD57cmVwb1VybH08L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBtYXJnaW5Cb3R0b209ezF9PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICBJbXBvcnRhbnQ6IE1ha2Ugc3VyZSB0byBncmFudCBhY2Nlc3MgdG8gdGhpcyBzcGVjaWZpYyByZXBvc2l0b3J5XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveD5cbiAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cInBlcm1pc3Npb25cIj5cbiAgICAgICAgICBQcmVzcyBFbnRlciBvbmNlIHlvdSZhcG9zO3ZlIGluc3RhbGxlZCB0aGUgYXBwe2ZpZ3VyZXMuZWxsaXBzaXN9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICBIYXZpbmcgdHJvdWJsZT8gU2VlIG1hbnVhbCBzZXR1cCBpbnN0cnVjdGlvbnMgYXQ6eycgJ31cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImNsYXVkZVwiPntHSVRIVUJfQUNUSU9OX1NFVFVQX0RPQ1NfVVJMfTwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgdHlwZSBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICBsb2dFdmVudCxcbn0gZnJvbSAnc3JjL3NlcnZpY2VzL2FuYWx5dGljcy9pbmRleC5qcydcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXRIaW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZXNpZ24tc3lzdGVtL0tleWJvYXJkU2hvcnRjdXRIaW50LmpzJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lci5qcydcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQuanMnXG5pbXBvcnQgeyB1c2VUZXJtaW5hbFNpemUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VUZXJtaW5hbFNpemUuanMnXG5pbXBvcnQgdHlwZSB7IEtleWJvYXJkRXZlbnQgfSBmcm9tICcuLi8uLi9pbmsvZXZlbnRzL2tleWJvYXJkLWV2ZW50LmpzJ1xuaW1wb3J0IHsgc2V0Q2xpcGJvYXJkIH0gZnJvbSAnLi4vLi4vaW5rL3Rlcm1pby9vc2MuanMnXG5pbXBvcnQgeyBCb3gsIExpbmssIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vYXV0aC9pbmRleC5qcydcbmltcG9ydCB7IHNhdmVPQXV0aFRva2Vuc0lmTmVlZGVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC5qcydcbmltcG9ydCB7IGxvZ0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nLmpzJ1xuXG5pbnRlcmZhY2UgT0F1dGhGbG93U3RlcFByb3BzIHtcbiAgb25TdWNjZXNzOiAodG9rZW46IHN0cmluZykgPT4gdm9pZFxuICBvbkNhbmNlbDogKCkgPT4gdm9pZFxufVxuXG50eXBlIE9BdXRoU3RhdHVzID1cbiAgfCB7IHN0YXRlOiAnc3RhcnRpbmcnIH1cbiAgfCB7IHN0YXRlOiAnd2FpdGluZ19mb3JfbG9naW4nOyB1cmw6IHN0cmluZyB9XG4gIHwgeyBzdGF0ZTogJ3Byb2Nlc3NpbmcnIH1cbiAgfCB7IHN0YXRlOiAnc3VjY2Vzcyc7IHRva2VuOiBzdHJpbmcgfVxuICB8IHsgc3RhdGU6ICdlcnJvcic7IG1lc3NhZ2U6IHN0cmluZzsgdG9SZXRyeT86IE9BdXRoU3RhdHVzIH1cbiAgfCB7IHN0YXRlOiAnYWJvdXRfdG9fcmV0cnknOyBuZXh0U3RhdGU6IE9BdXRoU3RhdHVzIH1cblxuY29uc3QgUEFTVEVfSEVSRV9NU0cgPSAnUGFzdGUgY29kZSBoZXJlIGlmIHByb21wdGVkID4gJ1xuXG5leHBvcnQgZnVuY3Rpb24gT0F1dGhGbG93U3RlcCh7XG4gIG9uU3VjY2VzcyxcbiAgb25DYW5jZWwsXG59OiBPQXV0aEZsb3dTdGVwUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBbb2F1dGhTdGF0dXMsIHNldE9BdXRoU3RhdHVzXSA9IHVzZVN0YXRlPE9BdXRoU3RhdHVzPih7XG4gICAgc3RhdGU6ICdzdGFydGluZycsXG4gIH0pXG4gIGNvbnN0IFtvYXV0aFNlcnZpY2VdID0gdXNlU3RhdGUoKCkgPT4gbmV3IE9BdXRoU2VydmljZSgpKVxuICBjb25zdCBbcGFzdGVkQ29kZSwgc2V0UGFzdGVkQ29kZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2N1cnNvck9mZnNldCwgc2V0Q3Vyc29yT2Zmc2V0XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtzaG93UGFzdGVQcm9tcHQsIHNldFNob3dQYXN0ZVByb21wdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3VybENvcGllZCwgc2V0VXJsQ29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB0aW1lcnNSZWYgPSB1c2VSZWY8U2V0PE5vZGVKUy5UaW1lb3V0Pj4obmV3IFNldCgpKVxuICAvLyBTZXBhcmF0ZSByZWYgc28gc3RhcnRPQXV0aCdzIHRpbWVyIGNsZWFyIGRvZXNuJ3QgY2FuY2VsIHRoZSB1cmxDb3BpZWQgcmVzZXRcbiAgY29uc3QgdXJsQ29waWVkVGltZXJSZWYgPSB1c2VSZWY8Tm9kZUpTLlRpbWVvdXQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcblxuICBjb25zdCB0ZXJtaW5hbFNpemUgPSB1c2VUZXJtaW5hbFNpemUoKVxuICBjb25zdCB0ZXh0SW5wdXRDb2x1bW5zID0gTWF0aC5tYXgoXG4gICAgNTAsXG4gICAgdGVybWluYWxTaXplLmNvbHVtbnMgLSBQQVNURV9IRVJFX01TRy5sZW5ndGggLSA0LFxuICApXG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKG9hdXRoU3RhdHVzLnN0YXRlICE9PSAnZXJyb3InKSByZXR1cm5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoZS5rZXkgPT09ICdyZXR1cm4nICYmIG9hdXRoU3RhdHVzLnRvUmV0cnkpIHtcbiAgICAgIHNldFBhc3RlZENvZGUoJycpXG4gICAgICBzZXRDdXJzb3JPZmZzZXQoMClcbiAgICAgIHNldE9BdXRoU3RhdHVzKHtcbiAgICAgICAgc3RhdGU6ICdhYm91dF90b19yZXRyeScsXG4gICAgICAgIG5leHRTdGF0ZTogb2F1dGhTdGF0dXMudG9SZXRyeSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQ2FuY2VsKClcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXRDb2RlKHZhbHVlOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEV4cGVjdGluZyBmb3JtYXQgXCJhdXRob3JpemF0aW9uQ29kZSNzdGF0ZVwiIGZyb20gdGhlIGF1dGhvcml6YXRpb24gY2FsbGJhY2sgVVJMXG4gICAgICBjb25zdCBbYXV0aG9yaXphdGlvbkNvZGUsIHN0YXRlXSA9IHZhbHVlLnNwbGl0KCcjJylcblxuICAgICAgaWYgKCFhdXRob3JpemF0aW9uQ29kZSB8fCAhc3RhdGUpIHtcbiAgICAgICAgc2V0T0F1dGhTdGF0dXMoe1xuICAgICAgICAgIHN0YXRlOiAnZXJyb3InLFxuICAgICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIGNvZGUuIFBsZWFzZSBtYWtlIHN1cmUgdGhlIGZ1bGwgY29kZSB3YXMgY29waWVkJyxcbiAgICAgICAgICB0b1JldHJ5OiB7IHN0YXRlOiAnd2FpdGluZ19mb3JfbG9naW4nLCB1cmwgfSxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFRyYWNrIHdoaWNoIHBhdGggdGhlIHVzZXIgaXMgdGFraW5nIChtYW51YWwgY29kZSBlbnRyeSlcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9vYXV0aF9tYW51YWxfZW50cnknLCB7fSlcbiAgICAgIG9hdXRoU2VydmljZS5oYW5kbGVNYW51YWxBdXRoQ29kZUlucHV0KHtcbiAgICAgICAgYXV0aG9yaXphdGlvbkNvZGUsXG4gICAgICAgIHN0YXRlLFxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICAgIGxvZ0Vycm9yKGVycilcbiAgICAgIHNldE9BdXRoU3RhdHVzKHtcbiAgICAgICAgc3RhdGU6ICdlcnJvcicsXG4gICAgICAgIG1lc3NhZ2U6IChlcnIgYXMgRXJyb3IpLm1lc3NhZ2UsXG4gICAgICAgIHRvUmV0cnk6IHsgc3RhdGU6ICd3YWl0aW5nX2Zvcl9sb2dpbicsIHVybCB9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdGFydE9BdXRoID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIC8vIENsZWFyIGFueSBleGlzdGluZyB0aW1lcnMgd2hlbiBzdGFydGluZyBuZXcgT0F1dGggZmxvd1xuICAgIHRpbWVyc1JlZi5jdXJyZW50LmZvckVhY2godGltZXIgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKSlcbiAgICB0aW1lcnNSZWYuY3VycmVudC5jbGVhcigpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgb2F1dGhTZXJ2aWNlLnN0YXJ0T0F1dGhGbG93KFxuICAgICAgICBhc3luYyB1cmwgPT4ge1xuICAgICAgICAgIHNldE9BdXRoU3RhdHVzKHsgc3RhdGU6ICd3YWl0aW5nX2Zvcl9sb2dpbicsIHVybCB9KVxuICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChzZXRTaG93UGFzdGVQcm9tcHQsIDMwMDAsIHRydWUpXG4gICAgICAgICAgdGltZXJzUmVmLmN1cnJlbnQuYWRkKHRpbWVyKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbG9naW5XaXRoQ2xhdWRlQWk6IHRydWUsIC8vIEFsd2F5cyB1c2UgQ2xhdWRlIEFJIGZvciBzdWJzY3JpcHRpb24gdG9rZW5zXG4gICAgICAgICAgaW5mZXJlbmNlT25seTogdHJ1ZSxcbiAgICAgICAgICBleHBpcmVzSW46IDM2NSAqIDI0ICogNjAgKiA2MCwgLy8gMSB5ZWFyXG4gICAgICAgIH0sXG4gICAgICApXG5cbiAgICAgIC8vIFNob3cgcHJvY2Vzc2luZyBzdGF0ZVxuICAgICAgc2V0T0F1dGhTdGF0dXMoeyBzdGF0ZTogJ3Byb2Nlc3NpbmcnIH0pXG5cbiAgICAgIC8vIE9BdXRoRmxvd1N0ZXAgY3JlYXRlcyBpbmZlcmVuY2Utb25seSB0b2tlbnMgZm9yIEdpdEh1YiBBY3Rpb25zLCBub3QgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgbG9naW4uIFVzZSBzYXZlT0F1dGhUb2tlbnNJZk5lZWRlZCBkaXJlY3RseSB0byBhdm9pZFxuICAgICAgLy8gcGVyZm9ybUxvZ291dCB3aGljaCB3b3VsZCBkZXN0cm95IHRoZSB1c2VyJ3MgZXhpc3RpbmcgYXV0aCBzZXNzaW9uLlxuICAgICAgc2F2ZU9BdXRoVG9rZW5zSWZOZWVkZWQocmVzdWx0KVxuXG4gICAgICAvLyBGb3IgT0F1dGggZmxvdywgdGhlIGFjY2VzcyB0b2tlbiBjYW4gYmUgdXNlZCBhcyBhbiBBUEkga2V5XG4gICAgICBjb25zdCB0aW1lcjEgPSBzZXRUaW1lb3V0KFxuICAgICAgICAoc2V0T0F1dGhTdGF0dXMsIGFjY2Vzc1Rva2VuLCBvblN1Y2Nlc3MsIHRpbWVyc1JlZikgPT4ge1xuICAgICAgICAgIHNldE9BdXRoU3RhdHVzKHsgc3RhdGU6ICdzdWNjZXNzJywgdG9rZW46IGFjY2Vzc1Rva2VuIH0pXG4gICAgICAgICAgLy8gQXV0by1jb250aW51ZSBhZnRlciBicmllZiBkZWxheSB0byBzaG93IHN1Y2Nlc3NcbiAgICAgICAgICBjb25zdCB0aW1lcjIgPSBzZXRUaW1lb3V0KG9uU3VjY2VzcywgMTAwMCwgYWNjZXNzVG9rZW4pXG4gICAgICAgICAgdGltZXJzUmVmLmN1cnJlbnQuYWRkKHRpbWVyMilcbiAgICAgICAgfSxcbiAgICAgICAgMTAwLFxuICAgICAgICBzZXRPQXV0aFN0YXR1cyxcbiAgICAgICAgcmVzdWx0LmFjY2Vzc1Rva2VuLFxuICAgICAgICBvblN1Y2Nlc3MsXG4gICAgICAgIHRpbWVyc1JlZixcbiAgICAgIClcbiAgICAgIHRpbWVyc1JlZi5jdXJyZW50LmFkZCh0aW1lcjEpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAoZXJyIGFzIEVycm9yKS5tZXNzYWdlXG4gICAgICBzZXRPQXV0aFN0YXR1cyh7XG4gICAgICAgIHN0YXRlOiAnZXJyb3InLFxuICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgIHRvUmV0cnk6IHsgc3RhdGU6ICdzdGFydGluZycgfSwgLy8gQWxsb3cgcmV0cnkgYnkgc3RhcnRpbmcgZnJlc2ggT0F1dGggZmxvd1xuICAgICAgfSlcbiAgICAgIGxvZ0Vycm9yKGVycilcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9vYXV0aF9lcnJvcicsIHtcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgZXJyb3JNZXNzYWdlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW29hdXRoU2VydmljZSwgb25TdWNjZXNzXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChvYXV0aFN0YXR1cy5zdGF0ZSA9PT0gJ3N0YXJ0aW5nJykge1xuICAgICAgdm9pZCBzdGFydE9BdXRoKClcbiAgICB9XG4gIH0sIFtvYXV0aFN0YXR1cy5zdGF0ZSwgc3RhcnRPQXV0aF0pXG5cbiAgLy8gUmV0cnkgbG9naWNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob2F1dGhTdGF0dXMuc3RhdGUgPT09ICdhYm91dF90b19yZXRyeScpIHtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChcbiAgICAgICAgKG5leHRTdGF0ZSwgc2V0U2hvd1Bhc3RlUHJvbXB0LCBzZXRPQXV0aFN0YXR1cykgPT4ge1xuICAgICAgICAgIC8vIE9ubHkgc2hvdyBwYXN0ZSBwcm9tcHQgd2hlbiByZXRyeWluZyB0byB3YWl0aW5nX2Zvcl9sb2dpblxuICAgICAgICAgIHNldFNob3dQYXN0ZVByb21wdChuZXh0U3RhdGUuc3RhdGUgPT09ICd3YWl0aW5nX2Zvcl9sb2dpbicpXG4gICAgICAgICAgc2V0T0F1dGhTdGF0dXMobmV4dFN0YXRlKVxuICAgICAgICB9LFxuICAgICAgICA1MDAsXG4gICAgICAgIG9hdXRoU3RhdHVzLm5leHRTdGF0ZSxcbiAgICAgICAgc2V0U2hvd1Bhc3RlUHJvbXB0LFxuICAgICAgICBzZXRPQXV0aFN0YXR1cyxcbiAgICAgIClcbiAgICAgIHRpbWVyc1JlZi5jdXJyZW50LmFkZCh0aW1lcilcbiAgICB9XG4gIH0sIFtvYXV0aFN0YXR1c10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwYXN0ZWRDb2RlID09PSAnYycgJiZcbiAgICAgIG9hdXRoU3RhdHVzLnN0YXRlID09PSAnd2FpdGluZ19mb3JfbG9naW4nICYmXG4gICAgICBzaG93UGFzdGVQcm9tcHQgJiZcbiAgICAgICF1cmxDb3BpZWRcbiAgICApIHtcbiAgICAgIHZvaWQgc2V0Q2xpcGJvYXJkKG9hdXRoU3RhdHVzLnVybCkudGhlbihyYXcgPT4ge1xuICAgICAgICBpZiAocmF3KSBwcm9jZXNzLnN0ZG91dC53cml0ZShyYXcpXG4gICAgICAgIHNldFVybENvcGllZCh0cnVlKVxuICAgICAgICBjbGVhclRpbWVvdXQodXJsQ29waWVkVGltZXJSZWYuY3VycmVudClcbiAgICAgICAgdXJsQ29waWVkVGltZXJSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoc2V0VXJsQ29waWVkLCAyMDAwLCBmYWxzZSlcbiAgICAgIH0pXG4gICAgICBzZXRQYXN0ZWRDb2RlKCcnKVxuICAgIH1cbiAgfSwgW3Bhc3RlZENvZGUsIG9hdXRoU3RhdHVzLCBzaG93UGFzdGVQcm9tcHQsIHVybENvcGllZF0pXG5cbiAgLy8gQ2xlYW51cCBPQXV0aCBzZXJ2aWNlIGFuZCB0aW1lcnMgd2hlbiBjb21wb25lbnQgdW5tb3VudHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lcnMgPSB0aW1lcnNSZWYuY3VycmVudFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBvYXV0aFNlcnZpY2UuY2xlYW51cCgpXG4gICAgICAvLyBDbGVhciBhbGwgdGltZXJzXG4gICAgICB0aW1lcnMuZm9yRWFjaCh0aW1lciA9PiBjbGVhclRpbWVvdXQodGltZXIpKVxuICAgICAgdGltZXJzLmNsZWFyKClcbiAgICAgIGNsZWFyVGltZW91dCh1cmxDb3BpZWRUaW1lclJlZi5jdXJyZW50KVxuICAgIH1cbiAgfSwgW29hdXRoU2VydmljZV0pXG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJlbmRlciB0aGUgYXBwcm9wcmlhdGUgc3RhdHVzIG1lc3NhZ2VcbiAgZnVuY3Rpb24gcmVuZGVyU3RhdHVzTWVzc2FnZSgpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgIHN3aXRjaCAob2F1dGhTdGF0dXMuc3RhdGUpIHtcbiAgICAgIGNhc2UgJ3N0YXJ0aW5nJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICAgIDxUZXh0PlN0YXJ0aW5nIGF1dGhlbnRpY2F0aW9u4oCmPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApXG5cbiAgICAgIGNhc2UgJ3dhaXRpbmdfZm9yX2xvZ2luJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICAgICAgeyFzaG93UGFzdGVQcm9tcHQgJiYgKFxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICBPcGVuaW5nIGJyb3dzZXIgdG8gc2lnbiBpbiB3aXRoIHlvdXIgQ2xhdWRlIGFjY291bnTigKZcbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge3Nob3dQYXN0ZVByb21wdCAmJiAoXG4gICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPFRleHQ+e1BBU1RFX0hFUkVfTVNHfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzdGVkQ29kZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRQYXN0ZWRDb2RlfVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZTogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXRDb2RlKHZhbHVlLCBvYXV0aFN0YXR1cy51cmwpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjdXJzb3JPZmZzZXQ9e2N1cnNvck9mZnNldH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ3Vyc29yT2Zmc2V0PXtzZXRDdXJzb3JPZmZzZXR9XG4gICAgICAgICAgICAgICAgICBjb2x1bW5zPXt0ZXh0SW5wdXRDb2x1bW5zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuXG4gICAgICBjYXNlICdwcm9jZXNzaW5nJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICAgIDxUZXh0PlByb2Nlc3NpbmcgYXV0aGVudGljYXRpb27igKY8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIClcblxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwic3VjY2Vzc1wiPlxuICAgICAgICAgICAgICDinJMgQXV0aGVudGljYXRpb24gdG9rZW4gY3JlYXRlZCBzdWNjZXNzZnVsbHkhXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5Vc2luZyB0b2tlbiBmb3IgR2l0SHViIEFjdGlvbnMgc2V0dXDigKY8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIClcblxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17MX0+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cImVycm9yXCI+T0F1dGggZXJyb3I6IHtvYXV0aFN0YXR1cy5tZXNzYWdlfTwvVGV4dD5cbiAgICAgICAgICAgIHtvYXV0aFN0YXR1cy50b1JldHJ5ID8gKFxuICAgICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgICAgICBQcmVzcyBFbnRlciB0byB0cnkgYWdhaW4sIG9yIGFueSBvdGhlciBrZXkgdG8gY2FuY2VsXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlByZXNzIGFueSBrZXkgdG8gcmV0dXJuIHRvIEFQSSBrZXkgc2VsZWN0aW9uPC9UZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuXG4gICAgICBjYXNlICdhYm91dF90b19yZXRyeSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwicGVybWlzc2lvblwiPlJldHJ5aW5n4oCmPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIGdhcD17MX1cbiAgICAgIHRhYkluZGV4PXswfVxuICAgICAgYXV0b0ZvY3VzXG4gICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgPlxuICAgICAgey8qIFNob3cgaGVhZGVyIGlubGluZSBvbmx5IGZvciBpbml0aWFsIHN0YXJ0aW5nIHN0YXRlICovfVxuICAgICAge29hdXRoU3RhdHVzLnN0YXRlID09PSAnc3RhcnRpbmcnICYmIChcbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsxfSBwYWRkaW5nQm90dG9tPXsxfT5cbiAgICAgICAgICA8VGV4dCBib2xkPkNyZWF0ZSBBdXRoZW50aWNhdGlvbiBUb2tlbjwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5DcmVhdGluZyBhIGxvbmctbGl2ZWQgdG9rZW4gZm9yIEdpdEh1YiBBY3Rpb25zPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgICB7LyogU2hvdyBoZWFkZXIgZm9yIG5vbi1zdGFydGluZyBzdGF0ZXMgKHRvIGF2b2lkIGR1cGxpY2F0ZSB3aXRoIGlubGluZSBoZWFkZXIpKi99XG4gICAgICB7b2F1dGhTdGF0dXMuc3RhdGUgIT09ICdzdWNjZXNzJyAmJlxuICAgICAgICBvYXV0aFN0YXR1cy5zdGF0ZSAhPT0gJ3N0YXJ0aW5nJyAmJlxuICAgICAgICBvYXV0aFN0YXR1cy5zdGF0ZSAhPT0gJ3Byb2Nlc3NpbmcnICYmIChcbiAgICAgICAgICA8Qm94IGtleT1cImhlYWRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9IHBhZGRpbmdCb3R0b209ezF9PlxuICAgICAgICAgICAgPFRleHQgYm9sZD5DcmVhdGUgQXV0aGVudGljYXRpb24gVG9rZW48L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5DcmVhdGluZyBhIGxvbmctbGl2ZWQgdG9rZW4gZm9yIEdpdEh1YiBBY3Rpb25zPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgey8qIFNob3cgVVJMIHdoZW4gcGFzdGUgcHJvbXB0IGlzIHZpc2libGUgKi99XG4gICAgICB7b2F1dGhTdGF0dXMuc3RhdGUgPT09ICd3YWl0aW5nX2Zvcl9sb2dpbicgJiYgc2hvd1Bhc3RlUHJvbXB0ICYmIChcbiAgICAgICAgPEJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIga2V5PVwidXJsVG9Db3B5XCIgZ2FwPXsxfSBwYWRkaW5nQm90dG9tPXsxfT5cbiAgICAgICAgICA8Qm94IHBhZGRpbmdYPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGRpbUNvbG9yPlxuICAgICAgICAgICAgICBCcm93c2VyIGRpZG4mYXBvczt0IG9wZW4/IFVzZSB0aGUgdXJsIGJlbG93IHRvIHNpZ24gaW57JyAnfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAge3VybENvcGllZCA/IChcbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJzdWNjZXNzXCI+KENvcGllZCEpPC9UZXh0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFRleHQgZGltQ29sb3I+XG4gICAgICAgICAgICAgICAgPEtleWJvYXJkU2hvcnRjdXRIaW50IHNob3J0Y3V0PVwiY1wiIGFjdGlvbj1cImNvcHlcIiBwYXJlbnMgLz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8TGluayB1cmw9e29hdXRoU3RhdHVzLnVybH0+XG4gICAgICAgICAgICA8VGV4dCBkaW1Db2xvcj57b2F1dGhTdGF0dXMudXJsfTwvVGV4dD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIDxCb3ggcGFkZGluZ0xlZnQ9ezF9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9ezF9PlxuICAgICAgICB7cmVuZGVyU3RhdHVzTWVzc2FnZSgpfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi9pbmsuanMnXG5cbnR5cGUgU3VjY2Vzc1N0ZXBQcm9wcyA9IHtcbiAgc2VjcmV0RXhpc3RzOiBib29sZWFuXG4gIHVzZUV4aXN0aW5nU2VjcmV0OiBib29sZWFuXG4gIHNlY3JldE5hbWU6IHN0cmluZ1xuICBza2lwV29ya2Zsb3c/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdWNjZXNzU3RlcCh7XG4gIHNlY3JldEV4aXN0cyxcbiAgdXNlRXhpc3RpbmdTZWNyZXQsXG4gIHNlY3JldE5hbWUsXG4gIHNraXBXb3JrZmxvdyA9IGZhbHNlLFxufTogU3VjY2Vzc1N0ZXBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGJvcmRlclN0eWxlPVwicm91bmRcIiBwYWRkaW5nWD17MX0+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPFRleHQgYm9sZD5JbnN0YWxsIEdpdEh1YiBBcHA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZGltQ29sb3I+U3VjY2VzczwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHshc2tpcFdvcmtmbG93ICYmIChcbiAgICAgICAgICA8VGV4dCBjb2xvcj1cInN1Y2Nlc3NcIj7inJMgR2l0SHViIEFjdGlvbnMgd29ya2Zsb3cgY3JlYXRlZCE8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIHtzZWNyZXRFeGlzdHMgJiYgdXNlRXhpc3RpbmdTZWNyZXQgJiYgKFxuICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwic3VjY2Vzc1wiPlxuICAgICAgICAgICAgICDinJMgVXNpbmcgZXhpc3RpbmcgQU5USFJPUElDX0FQSV9LRVkgc2VjcmV0XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIHsoIXNlY3JldEV4aXN0cyB8fCAhdXNlRXhpc3RpbmdTZWNyZXQpICYmIChcbiAgICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cInN1Y2Nlc3NcIj7inJMgQVBJIGtleSBzYXZlZCBhcyB7c2VjcmV0TmFtZX0gc2VjcmV0PC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICA8Qm94IG1hcmdpblRvcD17MX0+XG4gICAgICAgICAgPFRleHQ+TmV4dCBzdGVwczo8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7c2tpcFdvcmtmbG93ID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgMS4gSW5zdGFsbCB0aGUgQ2xhdWRlIEdpdEh1YiBBcHAgaWYgeW91IGhhdmVuJmFwb3M7dCBhbHJlYWR5XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dD4yLiBZb3VyIHdvcmtmbG93IGZpbGUgd2FzIGtlcHQgdW5jaGFuZ2VkPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+My4gQVBJIGtleSBpcyBjb25maWd1cmVkIGFuZCByZWFkeSB0byB1c2U8L1RleHQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0PjEuIEEgcHJlLWZpbGxlZCBQUiBwYWdlIGhhcyBiZWVuIGNyZWF0ZWQ8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgMi4gSW5zdGFsbCB0aGUgQ2xhdWRlIEdpdEh1YiBBcHAgaWYgeW91IGhhdmVuJmFwb3M7dCBhbHJlYWR5XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dD4zLiBNZXJnZSB0aGUgUFIgdG8gZW5hYmxlIENsYXVkZSBQUiBhc3Npc3RhbmNlPC9UZXh0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IG1hcmdpbkxlZnQ9ezN9PlxuICAgICAgICA8VGV4dCBkaW1Db2xvcj5QcmVzcyBhbnkga2V5IHRvIGV4aXQ8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7XG4gIHR5cGUgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgbG9nRXZlbnQsXG59IGZyb20gJ3NyYy9zZXJ2aWNlcy9hbmFseXRpY3MvaW5kZXguanMnXG5pbXBvcnQgeyBzYXZlR2xvYmFsQ29uZmlnIH0gZnJvbSAnc3JjL3V0aWxzL2NvbmZpZy5qcydcbmltcG9ydCB7XG4gIENPREVfUkVWSUVXX1BMVUdJTl9XT1JLRkxPV19DT05URU5ULFxuICBQUl9CT0RZLFxuICBQUl9USVRMRSxcbiAgV09SS0ZMT1dfQ09OVEVOVCxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2dpdGh1Yi1hcHAuanMnXG5pbXBvcnQgeyBvcGVuQnJvd3NlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Jyb3dzZXIuanMnXG5pbXBvcnQgeyBleGVjRmlsZU5vVGhyb3cgfSBmcm9tICcuLi8uLi91dGlscy9leGVjRmlsZU5vVGhyb3cuanMnXG5pbXBvcnQgeyBsb2dFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZy5qcydcbmltcG9ydCB0eXBlIHsgV29ya2Zsb3cgfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVXb3JrZmxvd0ZpbGUoXG4gIHJlcG9OYW1lOiBzdHJpbmcsXG4gIGJyYW5jaE5hbWU6IHN0cmluZyxcbiAgd29ya2Zsb3dQYXRoOiBzdHJpbmcsXG4gIHdvcmtmbG93Q29udGVudDogc3RyaW5nLFxuICBzZWNyZXROYW1lOiBzdHJpbmcsXG4gIG1lc3NhZ2U6IHN0cmluZyxcbiAgY29udGV4dD86IHtcbiAgICB1c2VDdXJyZW50UmVwbz86IGJvb2xlYW5cbiAgICB3b3JrZmxvd0V4aXN0cz86IGJvb2xlYW5cbiAgICBzZWNyZXRFeGlzdHM/OiBib29sZWFuXG4gIH0sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gQ2hlY2sgaWYgd29ya2Zsb3cgZmlsZSBhbHJlYWR5IGV4aXN0c1xuICBjb25zdCBjaGVja0ZpbGVSZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ2doJywgW1xuICAgICdhcGknLFxuICAgIGByZXBvcy8ke3JlcG9OYW1lfS9jb250ZW50cy8ke3dvcmtmbG93UGF0aH1gLFxuICAgICctLWpxJyxcbiAgICAnLnNoYScsXG4gIF0pXG5cbiAgbGV0IGZpbGVTaGE6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIGlmIChjaGVja0ZpbGVSZXN1bHQuY29kZSA9PT0gMCkge1xuICAgIGZpbGVTaGEgPSBjaGVja0ZpbGVSZXN1bHQuc3Rkb3V0LnRyaW0oKVxuICB9XG5cbiAgbGV0IGNvbnRlbnQgPSB3b3JrZmxvd0NvbnRlbnRcbiAgaWYgKHNlY3JldE5hbWUgPT09ICdDTEFVREVfQ09ERV9PQVVUSF9UT0tFTicpIHtcbiAgICAvLyBGb3IgT0F1dGggdG9rZW5zLCB1c2UgdGhlIGNsYXVkZV9jb2RlX29hdXRoX3Rva2VuIHBhcmFtZXRlclxuICAgIGNvbnRlbnQgPSB3b3JrZmxvd0NvbnRlbnQucmVwbGFjZShcbiAgICAgIC9hbnRocm9waWNfYXBpX2tleTogXFwkXFx7XFx7IHNlY3JldHNcXC5BTlRIUk9QSUNfQVBJX0tFWSBcXH1cXH0vZyxcbiAgICAgIGBjbGF1ZGVfY29kZV9vYXV0aF90b2tlbjogXFwke3sgc2VjcmV0cy5DTEFVREVfQ09ERV9PQVVUSF9UT0tFTiB9fWAsXG4gICAgKVxuICB9IGVsc2UgaWYgKHNlY3JldE5hbWUgIT09ICdBTlRIUk9QSUNfQVBJX0tFWScpIHtcbiAgICAvLyBGb3Igb3RoZXIgY3VzdG9tIHNlY3JldCBuYW1lcywga2VlcCB1c2luZyBhbnRocm9waWNfYXBpX2tleSBwYXJhbWV0ZXJcbiAgICBjb250ZW50ID0gd29ya2Zsb3dDb250ZW50LnJlcGxhY2UoXG4gICAgICAvYW50aHJvcGljX2FwaV9rZXk6IFxcJFxce1xceyBzZWNyZXRzXFwuQU5USFJPUElDX0FQSV9LRVkgXFx9XFx9L2csXG4gICAgICBgYW50aHJvcGljX2FwaV9rZXk6IFxcJHt7IHNlY3JldHMuJHtzZWNyZXROYW1lfSB9fWAsXG4gICAgKVxuICB9XG4gIGNvbnN0IGJhc2U2NENvbnRlbnQgPSBCdWZmZXIuZnJvbShjb250ZW50KS50b1N0cmluZygnYmFzZTY0JylcblxuICBjb25zdCBhcGlQYXJhbXMgPSBbXG4gICAgJ2FwaScsXG4gICAgJy0tbWV0aG9kJyxcbiAgICAnUFVUJyxcbiAgICBgcmVwb3MvJHtyZXBvTmFtZX0vY29udGVudHMvJHt3b3JrZmxvd1BhdGh9YCxcbiAgICAnLWYnLFxuICAgIGBtZXNzYWdlPSR7ZmlsZVNoYSA/IGBcIlVwZGF0ZSAke21lc3NhZ2V9XCJgIDogYFwiJHttZXNzYWdlfVwiYH1gLFxuICAgICctZicsXG4gICAgYGNvbnRlbnQ9JHtiYXNlNjRDb250ZW50fWAsXG4gICAgJy1mJyxcbiAgICBgYnJhbmNoPSR7YnJhbmNoTmFtZX1gLFxuICBdXG5cbiAgaWYgKGZpbGVTaGEpIHtcbiAgICBhcGlQYXJhbXMucHVzaCgnLWYnLCBgc2hhPSR7ZmlsZVNoYX1gKVxuICB9XG5cbiAgY29uc3QgY3JlYXRlRmlsZVJlc3VsdCA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnZ2gnLCBhcGlQYXJhbXMpXG4gIGlmIChjcmVhdGVGaWxlUmVzdWx0LmNvZGUgIT09IDApIHtcbiAgICBpZiAoXG4gICAgICBjcmVhdGVGaWxlUmVzdWx0LnN0ZGVyci5pbmNsdWRlcygnNDIyJykgJiZcbiAgICAgIGNyZWF0ZUZpbGVSZXN1bHQuc3RkZXJyLmluY2x1ZGVzKCdzaGEnKVxuICAgICkge1xuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3NldHVwX2dpdGh1Yl9hY3Rpb25zX2ZhaWxlZCcsIHtcbiAgICAgICAgcmVhc29uOlxuICAgICAgICAgICdmYWlsZWRfdG9fY3JlYXRlX3dvcmtmbG93X2ZpbGUnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIGV4aXRfY29kZTogY3JlYXRlRmlsZVJlc3VsdC5jb2RlLFxuICAgICAgICAuLi5jb250ZXh0LFxuICAgICAgfSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBjcmVhdGUgd29ya2Zsb3cgZmlsZSAke3dvcmtmbG93UGF0aH06IEEgQ2xhdWRlIHdvcmtmbG93IGZpbGUgYWxyZWFkeSBleGlzdHMgaW4gdGhpcyByZXBvc2l0b3J5LiBQbGVhc2UgcmVtb3ZlIGl0IGZpcnN0IG9yIHVwZGF0ZSBpdCBtYW51YWxseS5gLFxuICAgICAgKVxuICAgIH1cblxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXR1cF9naXRodWJfYWN0aW9uc19mYWlsZWQnLCB7XG4gICAgICByZWFzb246XG4gICAgICAgICdmYWlsZWRfdG9fY3JlYXRlX3dvcmtmbG93X2ZpbGUnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICBleGl0X2NvZGU6IGNyZWF0ZUZpbGVSZXN1bHQuY29kZSxcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgfSlcblxuICAgIGNvbnN0IGhlbHBUZXh0ID1cbiAgICAgICdcXG5cXG5OZWVkIGhlbHA/IENvbW1vbiBpc3N1ZXM6XFxuJyArXG4gICAgICAnXHUwMEI3IFBlcm1pc3Npb24gZGVuaWVkIFx1MjE5MiBSdW46IGdoIGF1dGggcmVmcmVzaCAtaCBnaXRodWIuY29tIC1zIHJlcG8sd29ya2Zsb3dcXG4nICtcbiAgICAgICdcdTAwQjcgTm90IGF1dGhvcml6ZWQgXHUyMTkyIEVuc3VyZSB5b3UgaGF2ZSBhZG1pbiBhY2Nlc3MgdG8gdGhlIHJlcG9zaXRvcnlcXG4nICtcbiAgICAgICdcdTAwQjcgRm9yIG1hbnVhbCBzZXR1cCBcdTIxOTIgVmlzaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jb2RlLWFjdGlvbidcblxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBGYWlsZWQgdG8gY3JlYXRlIHdvcmtmbG93IGZpbGUgJHt3b3JrZmxvd1BhdGh9OiAke2NyZWF0ZUZpbGVSZXN1bHQuc3RkZXJyfSR7aGVscFRleHR9YCxcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwR2l0SHViQWN0aW9ucyhcbiAgcmVwb05hbWU6IHN0cmluZyxcbiAgYXBpS2V5T3JPQXV0aFRva2VuOiBzdHJpbmcgfCBudWxsLFxuICBzZWNyZXROYW1lOiBzdHJpbmcsXG4gIHVwZGF0ZVByb2dyZXNzOiAoKSA9PiB2b2lkLFxuICBza2lwV29ya2Zsb3cgPSBmYWxzZSxcbiAgc2VsZWN0ZWRXb3JrZmxvd3M6IFdvcmtmbG93W10sXG4gIGF1dGhUeXBlOiAnYXBpX2tleScgfCAnb2F1dGhfdG9rZW4nLFxuICBjb250ZXh0Pzoge1xuICAgIHVzZUN1cnJlbnRSZXBvPzogYm9vbGVhblxuICAgIHdvcmtmbG93RXhpc3RzPzogYm9vbGVhblxuICAgIHNlY3JldEV4aXN0cz86IGJvb2xlYW5cbiAgfSxcbikge1xuICB0cnkge1xuICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXR1cF9naXRodWJfYWN0aW9uc19zdGFydGVkJywge1xuICAgICAgc2tpcF93b3JrZmxvdzogc2tpcFdvcmtmbG93LFxuICAgICAgaGFzX2FwaV9rZXk6ICEhYXBpS2V5T3JPQXV0aFRva2VuLFxuICAgICAgdXNpbmdfZGVmYXVsdF9zZWNyZXRfbmFtZTogc2VjcmV0TmFtZSA9PT0gJ0FOVEhST1BJQ19BUElfS0VZJyxcbiAgICAgIHNlbGVjdGVkX2NsYXVkZV93b3JrZmxvdzogc2VsZWN0ZWRXb3JrZmxvd3MuaW5jbHVkZXMoJ2NsYXVkZScpLFxuICAgICAgc2VsZWN0ZWRfY2xhdWRlX3Jldmlld193b3JrZmxvdzpcbiAgICAgICAgc2VsZWN0ZWRXb3JrZmxvd3MuaW5jbHVkZXMoJ2NsYXVkZS1yZXZpZXcnKSxcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgfSlcblxuICAgIC8vIENoZWNrIGlmIHJlcG9zaXRvcnkgZXhpc3RzXG4gICAgY29uc3QgcmVwb0NoZWNrUmVzdWx0ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KCdnaCcsIFtcbiAgICAgICdhcGknLFxuICAgICAgYHJlcG9zLyR7cmVwb05hbWV9YCxcbiAgICAgICctLWpxJyxcbiAgICAgICcuaWQnLFxuICAgIF0pXG4gICAgaWYgKHJlcG9DaGVja1Jlc3VsdC5jb2RlICE9PSAwKSB7XG4gICAgICBsb2dFdmVudCgndGVuZ3Vfc2V0dXBfZ2l0aHViX2FjdGlvbnNfZmFpbGVkJywge1xuICAgICAgICByZWFzb246XG4gICAgICAgICAgJ3JlcG9fbm90X2ZvdW5kJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICBleGl0X2NvZGU6IHJlcG9DaGVja1Jlc3VsdC5jb2RlLFxuICAgICAgICAuLi5jb250ZXh0LFxuICAgICAgfSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBhY2Nlc3MgcmVwb3NpdG9yeSAke3JlcG9OYW1lfTogJHtyZXBvQ2hlY2tSZXN1bHQuc3RkZXJyfWAsXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gR2V0IGRlZmF1bHQgYnJhbmNoXG4gICAgY29uc3QgZGVmYXVsdEJyYW5jaFJlc3VsdCA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnZ2gnLCBbXG4gICAgICAnYXBpJyxcbiAgICAgIGByZXBvcy8ke3JlcG9OYW1lfWAsXG4gICAgICAnLS1qcScsXG4gICAgICAnLmRlZmF1bHRfYnJhbmNoJyxcbiAgICBdKVxuICAgIGlmIChkZWZhdWx0QnJhbmNoUmVzdWx0LmNvZGUgIT09IDApIHtcbiAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXR1cF9naXRodWJfYWN0aW9uc19mYWlsZWQnLCB7XG4gICAgICAgIHJlYXNvbjpcbiAgICAgICAgICAnZmFpbGVkX3RvX2dldF9kZWZhdWx0X2JyYW5jaCcgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgZXhpdF9jb2RlOiBkZWZhdWx0QnJhbmNoUmVzdWx0LmNvZGUsXG4gICAgICAgIC4uLmNvbnRleHQsXG4gICAgICB9KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIGdldCBkZWZhdWx0IGJyYW5jaDogJHtkZWZhdWx0QnJhbmNoUmVzdWx0LnN0ZGVycn1gLFxuICAgICAgKVxuICAgIH1cbiAgICBjb25zdCBkZWZhdWx0QnJhbmNoID0gZGVmYXVsdEJyYW5jaFJlc3VsdC5zdGRvdXQudHJpbSgpXG5cbiAgICAvLyBHZXQgU0hBIG9mIGRlZmF1bHQgYnJhbmNoXG4gICAgY29uc3Qgc2hhUmVzdWx0ID0gYXdhaXQgZXhlY0ZpbGVOb1Rocm93KCdnaCcsIFtcbiAgICAgICdhcGknLFxuICAgICAgYHJlcG9zLyR7cmVwb05hbWV9L2dpdC9yZWYvaGVhZHMvJHtkZWZhdWx0QnJhbmNofWAsXG4gICAgICAnLS1qcScsXG4gICAgICAnLm9iamVjdC5zaGEnLFxuICAgIF0pXG4gICAgaWYgKHNoYVJlc3VsdC5jb2RlICE9PSAwKSB7XG4gICAgICBsb2dFdmVudCgndGVuZ3Vfc2V0dXBfZ2l0aHViX2FjdGlvbnNfZmFpbGVkJywge1xuICAgICAgICByZWFzb246XG4gICAgICAgICAgJ2ZhaWxlZF90b19nZXRfYnJhbmNoX3NoYScgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgZXhpdF9jb2RlOiBzaGFSZXN1bHQuY29kZSxcbiAgICAgICAgLi4uY29udGV4dCxcbiAgICAgIH0pXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBnZXQgYnJhbmNoIFNIQTogJHtzaGFSZXN1bHQuc3RkZXJyfWApXG4gICAgfVxuICAgIGNvbnN0IHNoYSA9IHNoYVJlc3VsdC5zdGRvdXQudHJpbSgpXG5cbiAgICBsZXQgYnJhbmNoTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGxcblxuICAgIGlmICghc2tpcFdvcmtmbG93KSB7XG4gICAgICB1cGRhdGVQcm9ncmVzcygpXG4gICAgICAvLyBDcmVhdGUgbmV3IGJyYW5jaFxuICAgICAgYnJhbmNoTmFtZSA9IGBhZGQtY2xhdWRlLWdpdGh1Yi1hY3Rpb25zLSR7RGF0ZS5ub3coKX1gXG4gICAgICBjb25zdCBjcmVhdGVCcmFuY2hSZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ2doJywgW1xuICAgICAgICAnYXBpJyxcbiAgICAgICAgJy0tbWV0aG9kJyxcbiAgICAgICAgJ1BPU1QnLFxuICAgICAgICBgcmVwb3MvJHtyZXBvTmFtZX0vZ2l0L3JlZnNgLFxuICAgICAgICAnLWYnLFxuICAgICAgICBgcmVmPXJlZnMvaGVhZHMvJHticmFuY2hOYW1lfWAsXG4gICAgICAgICctZicsXG4gICAgICAgIGBzaGE9JHtzaGF9YCxcbiAgICAgIF0pXG4gICAgICBpZiAoY3JlYXRlQnJhbmNoUmVzdWx0LmNvZGUgIT09IDApIHtcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3NldHVwX2dpdGh1Yl9hY3Rpb25zX2ZhaWxlZCcsIHtcbiAgICAgICAgICByZWFzb246XG4gICAgICAgICAgICAnZmFpbGVkX3RvX2NyZWF0ZV9icmFuY2gnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgICAgZXhpdF9jb2RlOiBjcmVhdGVCcmFuY2hSZXN1bHQuY29kZSxcbiAgICAgICAgICAuLi5jb250ZXh0LFxuICAgICAgICB9KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBjcmVhdGUgYnJhbmNoOiAke2NyZWF0ZUJyYW5jaFJlc3VsdC5zdGRlcnJ9YClcbiAgICAgIH1cblxuICAgICAgdXBkYXRlUHJvZ3Jlc3MoKVxuICAgICAgLy8gQ3JlYXRlIHNlbGVjdGVkIHdvcmtmbG93IGZpbGVzXG4gICAgICBjb25zdCB3b3JrZmxvd3MgPSBbXVxuXG4gICAgICBpZiAoc2VsZWN0ZWRXb3JrZmxvd3MuaW5jbHVkZXMoJ2NsYXVkZScpKSB7XG4gICAgICAgIHdvcmtmbG93cy5wdXNoKHtcbiAgICAgICAgICBwYXRoOiAnLmdpdGh1Yi93b3JrZmxvd3MvY2xhdWRlLnltbCcsXG4gICAgICAgICAgY29udGVudDogV09SS0ZMT1dfQ09OVEVOVCxcbiAgICAgICAgICBtZXNzYWdlOiAnQ2xhdWRlIFBSIEFzc2lzdGFudCB3b3JrZmxvdycsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RlZFdvcmtmbG93cy5pbmNsdWRlcygnY2xhdWRlLXJldmlldycpKSB7XG4gICAgICAgIHdvcmtmbG93cy5wdXNoKHtcbiAgICAgICAgICBwYXRoOiAnLmdpdGh1Yi93b3JrZmxvd3MvY2xhdWRlLWNvZGUtcmV2aWV3LnltbCcsXG4gICAgICAgICAgY29udGVudDogQ09ERV9SRVZJRVdfUExVR0lOX1dPUktGTE9XX0NPTlRFTlQsXG4gICAgICAgICAgbWVzc2FnZTogJ0NsYXVkZSBDb2RlIFJldmlldyB3b3JrZmxvdycsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3Qgd29ya2Zsb3cgb2Ygd29ya2Zsb3dzKSB7XG4gICAgICAgIGF3YWl0IGNyZWF0ZVdvcmtmbG93RmlsZShcbiAgICAgICAgICByZXBvTmFtZSxcbiAgICAgICAgICBicmFuY2hOYW1lLFxuICAgICAgICAgIHdvcmtmbG93LnBhdGgsXG4gICAgICAgICAgd29ya2Zsb3cuY29udGVudCxcbiAgICAgICAgICBzZWNyZXROYW1lLFxuICAgICAgICAgIHdvcmtmbG93Lm1lc3NhZ2UsXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVByb2dyZXNzKClcbiAgICAvLyBTZXQgdGhlIEFQSSBrZXkgYXMgYSBzZWNyZXQgaWYgcHJvdmlkZWRcbiAgICBpZiAoYXBpS2V5T3JPQXV0aFRva2VuKSB7XG4gICAgICBjb25zdCBzZXRTZWNyZXRSZXN1bHQgPSBhd2FpdCBleGVjRmlsZU5vVGhyb3coJ2doJywgW1xuICAgICAgICAnc2VjcmV0JyxcbiAgICAgICAgJ3NldCcsXG4gICAgICAgIHNlY3JldE5hbWUsXG4gICAgICAgICctLWJvZHknLFxuICAgICAgICBhcGlLZXlPck9BdXRoVG9rZW4sXG4gICAgICAgICctLXJlcG8nLFxuICAgICAgICByZXBvTmFtZSxcbiAgICAgIF0pXG4gICAgICBpZiAoc2V0U2VjcmV0UmVzdWx0LmNvZGUgIT09IDApIHtcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X3NldHVwX2dpdGh1Yl9hY3Rpb25zX2ZhaWxlZCcsIHtcbiAgICAgICAgICByZWFzb246XG4gICAgICAgICAgICAnZmFpbGVkX3RvX3NldF9hcGlfa2V5X3NlY3JldCcgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICBleGl0X2NvZGU6IHNldFNlY3JldFJlc3VsdC5jb2RlLFxuICAgICAgICAgIC4uLmNvbnRleHQsXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgaGVscFRleHQgPVxuICAgICAgICAgICdcXG5cXG5OZWVkIGhlbHA/IENvbW1vbiBpc3N1ZXM6XFxuJyArXG4gICAgICAgICAgJ1x1MDBCNyBQZXJtaXNzaW9uIGRlbmllZCBcdTIxOTIgUnVuOiBnaCBhdXRoIHJlZnJlc2ggLWggZ2l0aHViLmNvbSAtcyByZXBvXFxuJyArXG4gICAgICAgICAgJ1x1MDBCNyBOb3QgYXV0aG9yaXplZCBcdTIxOTIgRW5zdXJlIHlvdSBoYXZlIGFkbWluIGFjY2VzcyB0byB0aGUgcmVwb3NpdG9yeVxcbicgK1xuICAgICAgICAgICdcdTAwQjcgRm9yIG1hbnVhbCBzZXR1cCBcdTIxOTIgVmlzaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRocm9waWNzL2NsYXVkZS1jb2RlLWFjdGlvbidcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBzZXQgQVBJIGtleSBzZWNyZXQ6ICR7c2V0U2VjcmV0UmVzdWx0LnN0ZGVyciB8fCAnVW5rbm93biBlcnJvcid9JHtoZWxwVGV4dH1gLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFza2lwV29ya2Zsb3cgJiYgYnJhbmNoTmFtZSkge1xuICAgICAgdXBkYXRlUHJvZ3Jlc3MoKVxuICAgICAgLy8gQ3JlYXRlIFBSIHRlbXBsYXRlIFVSTCBpbnN0ZWFkIG9mIGNyZWF0aW5nIFBSIGRpcmVjdGx5XG4gICAgICBjb25zdCBjb21wYXJlVXJsID0gYGh0dHBzOi8vZ2l0aHViLmNvbS8ke3JlcG9OYW1lfS9jb21wYXJlLyR7ZGVmYXVsdEJyYW5jaH0uLi4ke2JyYW5jaE5hbWV9P3F1aWNrX3B1bGw9MSZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChQUl9USVRMRSl9JmJvZHk9JHtlbmNvZGVVUklDb21wb25lbnQoUFJfQk9EWSl9YFxuXG4gICAgICBhd2FpdCBvcGVuQnJvd3Nlcihjb21wYXJlVXJsKVxuICAgIH1cblxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9zZXR1cF9naXRodWJfYWN0aW9uc19jb21wbGV0ZWQnLCB7XG4gICAgICBza2lwX3dvcmtmbG93OiBza2lwV29ya2Zsb3csXG4gICAgICBoYXNfYXBpX2tleTogISFhcGlLZXlPck9BdXRoVG9rZW4sXG4gICAgICBhdXRoX3R5cGU6XG4gICAgICAgIGF1dGhUeXBlIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICB1c2luZ19kZWZhdWx0X3NlY3JldF9uYW1lOiBzZWNyZXROYW1lID09PSAnQU5USFJPUElDX0FQSV9LRVknLFxuICAgICAgc2VsZWN0ZWRfY2xhdWRlX3dvcmtmbG93OiBzZWxlY3RlZFdvcmtmbG93cy5pbmNsdWRlcygnY2xhdWRlJyksXG4gICAgICBzZWxlY3RlZF9jbGF1ZGVfcmV2aWV3X3dvcmtmbG93OlxuICAgICAgICBzZWxlY3RlZFdvcmtmbG93cy5pbmNsdWRlcygnY2xhdWRlLXJldmlldycpLFxuICAgICAgLi4uY29udGV4dCxcbiAgICB9KVxuICAgIHNhdmVHbG9iYWxDb25maWcoY3VycmVudCA9PiAoe1xuICAgICAgLi4uY3VycmVudCxcbiAgICAgIGdpdGh1YkFjdGlvblNldHVwQ291bnQ6IChjdXJyZW50LmdpdGh1YkFjdGlvblNldHVwQ291bnQgPz8gMCkgKyAxLFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChcbiAgICAgICFlcnJvciB8fFxuICAgICAgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB8fFxuICAgICAgIWVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0ZhaWxlZCB0bycpXG4gICAgKSB7XG4gICAgICBsb2dFdmVudCgndGVuZ3Vfc2V0dXBfZ2l0aHViX2FjdGlvbnNfZmFpbGVkJywge1xuICAgICAgICByZWFzb246XG4gICAgICAgICAgJ3VuZXhwZWN0ZWRfZXJyb3InIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIC4uLmNvbnRleHQsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgfVxuICAgIHRocm93IGVycm9yXG4gIH1cbn1cbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR0lUSFVCX0FDVElPTl9TRVRVUF9ET0NTX1VSTCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9naXRodWItYXBwLmpzJ1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnLi4vLi4vaW5rLmpzJ1xuaW1wb3J0IHsgdXNlS2V5YmluZGluZyB9IGZyb20gJy4uLy4uL2tleWJpbmRpbmdzL3VzZUtleWJpbmRpbmcuanMnXG5pbXBvcnQgdHlwZSB7IFdhcm5pbmcgfSBmcm9tICcuL3R5cGVzLmpzJ1xuXG5pbnRlcmZhY2UgV2FybmluZ3NTdGVwUHJvcHMge1xuICB3YXJuaW5nczogV2FybmluZ1tdXG4gIG9uQ29udGludWU6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFdhcm5pbmdzU3RlcCh7IHdhcm5pbmdzLCBvbkNvbnRpbnVlIH06IFdhcm5pbmdzU3RlcFByb3BzKSB7XG4gIC8vIEVudGVyIHRvIGNvbnRpbnVlXG4gIHVzZUtleWJpbmRpbmcoJ2NvbmZpcm06eWVzJywgb25Db250aW51ZSwgeyBjb250ZXh0OiAnQ29uZmlybWF0aW9uJyB9KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGJvcmRlclN0eWxlPVwicm91bmRcIiBwYWRkaW5nWD17MX0+XG4gICAgICAgIDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgPFRleHQgYm9sZD57ZmlndXJlcy53YXJuaW5nfSBTZXR1cCBXYXJuaW5nczwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIFdlIGZvdW5kIHNvbWUgcG90ZW50aWFsIGlzc3VlcywgYnV0IHlvdSBjYW4gY29udGludWUgYW55d2F5XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7d2FybmluZ3MubWFwKCh3YXJuaW5nLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxCb3gga2V5PXtpbmRleH0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1hcmdpbkJvdHRvbT17MX0+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndhcm5pbmdcIiBib2xkPlxuICAgICAgICAgICAgICB7d2FybmluZy50aXRsZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0Pnt3YXJuaW5nLm1lc3NhZ2V9PC9UZXh0PlxuICAgICAgICAgICAge3dhcm5pbmcuaW5zdHJ1Y3Rpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8Qm94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXJnaW5MZWZ0PXsyfSBtYXJnaW5Ub3A9ezF9PlxuICAgICAgICAgICAgICAgIHt3YXJuaW5nLmluc3RydWN0aW9ucy5tYXAoKGluc3RydWN0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dCBrZXk9e2l9IGRpbUNvbG9yPlxuICAgICAgICAgICAgICAgICAgICDigKIge2luc3RydWN0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuXG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dCBib2xkIGNvbG9yPVwicGVybWlzc2lvblwiPlxuICAgICAgICAgICAgUHJlc3MgRW50ZXIgdG8gY29udGludWUgYW55d2F5LCBvciBDdHJsK0MgdG8gZXhpdCBhbmQgZml4IGlzc3Vlc1xuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggbWFyZ2luVG9wPXsxfT5cbiAgICAgICAgICA8VGV4dCBkaW1Db2xvcj5cbiAgICAgICAgICAgIFlvdSBjYW4gYWxzbyB0cnkgdGhlIG1hbnVhbCBzZXR1cCBzdGVwcyBpZiBuZWVkZWQ6eycgJ31cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiY2xhdWRlXCI+e0dJVEhVQl9BQ1RJT05fU0VUVVBfRE9DU19VUkx9PC9UZXh0PlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IGV4ZWNhIH0gZnJvbSAnZXhlY2EnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICB0eXBlIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gIGxvZ0V2ZW50LFxufSBmcm9tICdzcmMvc2VydmljZXMvYW5hbHl0aWNzL2luZGV4LmpzJ1xuaW1wb3J0IHsgV29ya2Zsb3dNdWx0aXNlbGVjdERpYWxvZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV29ya2Zsb3dNdWx0aXNlbGVjdERpYWxvZy5qcydcbmltcG9ydCB7IEdJVEhVQl9BQ1RJT05fU0VUVVBfRE9DU19VUkwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvZ2l0aHViLWFwcC5qcydcbmltcG9ydCB7IHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncy5qcydcbmltcG9ydCB0eXBlIHsgS2V5Ym9hcmRFdmVudCB9IGZyb20gJy4uLy4uL2luay9ldmVudHMva2V5Ym9hcmQtZXZlbnQuanMnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9pbmsuanMnXG5pbXBvcnQgdHlwZSB7IExvY2FsSlNYQ29tbWFuZE9uRG9uZSB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1hbmQuanMnXG5pbXBvcnQgeyBnZXRBbnRocm9waWNBcGlLZXksIGlzQW50aHJvcGljQXV0aEVuYWJsZWQgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgb3BlbkJyb3dzZXIgfSBmcm9tICcuLi8uLi91dGlscy9icm93c2VyLmpzJ1xuaW1wb3J0IHsgZXhlY0ZpbGVOb1Rocm93IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXhlY0ZpbGVOb1Rocm93LmpzJ1xuaW1wb3J0IHsgZ2V0R2l0aHViUmVwbyB9IGZyb20gJy4uLy4uL3V0aWxzL2dpdC5qcydcbmltcG9ydCB7IHBsdXJhbCB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgQXBpS2V5U3RlcCB9IGZyb20gJy4vQXBpS2V5U3RlcC5qcydcbmltcG9ydCB7IENoZWNrRXhpc3RpbmdTZWNyZXRTdGVwIH0gZnJvbSAnLi9DaGVja0V4aXN0aW5nU2VjcmV0U3RlcC5qcydcbmltcG9ydCB7IENoZWNrR2l0SHViU3RlcCB9IGZyb20gJy4vQ2hlY2tHaXRIdWJTdGVwLmpzJ1xuaW1wb3J0IHsgQ2hvb3NlUmVwb1N0ZXAgfSBmcm9tICcuL0Nob29zZVJlcG9TdGVwLmpzJ1xuaW1wb3J0IHsgQ3JlYXRpbmdTdGVwIH0gZnJvbSAnLi9DcmVhdGluZ1N0ZXAuanMnXG5pbXBvcnQgeyBFcnJvclN0ZXAgfSBmcm9tICcuL0Vycm9yU3RlcC5qcydcbmltcG9ydCB7IEV4aXN0aW5nV29ya2Zsb3dTdGVwIH0gZnJvbSAnLi9FeGlzdGluZ1dvcmtmbG93U3RlcC5qcydcbmltcG9ydCB7IEluc3RhbGxBcHBTdGVwIH0gZnJvbSAnLi9JbnN0YWxsQXBwU3RlcC5qcydcbmltcG9ydCB7IE9BdXRoRmxvd1N0ZXAgfSBmcm9tICcuL09BdXRoRmxvd1N0ZXAuanMnXG5pbXBvcnQgeyBTdWNjZXNzU3RlcCB9IGZyb20gJy4vU3VjY2Vzc1N0ZXAuanMnXG5pbXBvcnQgeyBzZXR1cEdpdEh1YkFjdGlvbnMgfSBmcm9tICcuL3NldHVwR2l0SHViQWN0aW9ucy5qcydcbmltcG9ydCB0eXBlIHsgU3RhdGUsIFdhcm5pbmcsIFdvcmtmbG93IH0gZnJvbSAnLi90eXBlcy5qcydcbmltcG9ydCB7IFdhcm5pbmdzU3RlcCB9IGZyb20gJy4vV2FybmluZ3NTdGVwLmpzJ1xuXG5jb25zdCBJTklUSUFMX1NUQVRFOiBTdGF0ZSA9IHtcbiAgc3RlcDogJ2NoZWNrLWdoJyxcbiAgc2VsZWN0ZWRSZXBvTmFtZTogJycsXG4gIGN1cnJlbnRSZXBvOiAnJyxcbiAgdXNlQ3VycmVudFJlcG86IGZhbHNlLCAvLyBEZWZhdWx0IHRvIGZhbHNlLCB3aWxsIGJlIHNldCB0byB0cnVlIGlmIHJlcG8gZGV0ZWN0ZWRcbiAgYXBpS2V5T3JPQXV0aFRva2VuOiAnJyxcbiAgdXNlRXhpc3RpbmdLZXk6IHRydWUsXG4gIGN1cnJlbnRXb3JrZmxvd0luc3RhbGxTdGVwOiAwLFxuICB3YXJuaW5nczogW10sXG4gIHNlY3JldEV4aXN0czogZmFsc2UsXG4gIHNlY3JldE5hbWU6ICdBTlRIUk9QSUNfQVBJX0tFWScsXG4gIHVzZUV4aXN0aW5nU2VjcmV0OiB0cnVlLFxuICB3b3JrZmxvd0V4aXN0czogZmFsc2UsXG4gIHNlbGVjdGVkV29ya2Zsb3dzOiBbJ2NsYXVkZScsICdjbGF1ZGUtcmV2aWV3J10gYXMgV29ya2Zsb3dbXSxcbiAgc2VsZWN0ZWRBcGlLZXlPcHRpb246ICduZXcnIGFzICdleGlzdGluZycgfCAnbmV3JyB8ICdvYXV0aCcsXG4gIGF1dGhUeXBlOiAnYXBpX2tleScsXG59XG5cbmZ1bmN0aW9uIEluc3RhbGxHaXRIdWJBcHAocHJvcHM6IHtcbiAgb25Eb25lOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkXG59KTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgY29uc3QgW2V4aXN0aW5nQXBpS2V5XSA9IHVzZVN0YXRlKCgpID0+IGdldEFudGhyb3BpY0FwaUtleSgpKVxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAuLi5JTklUSUFMX1NUQVRFLFxuICAgIHVzZUV4aXN0aW5nS2V5OiAhIWV4aXN0aW5nQXBpS2V5LFxuICAgIHNlbGVjdGVkQXBpS2V5T3B0aW9uOiAoZXhpc3RpbmdBcGlLZXlcbiAgICAgID8gJ2V4aXN0aW5nJ1xuICAgICAgOiBpc0FudGhyb3BpY0F1dGhFbmFibGVkKClcbiAgICAgICAgPyAnb2F1dGgnXG4gICAgICAgIDogJ25ldycpIGFzICdleGlzdGluZycgfCAnbmV3JyB8ICdvYXV0aCcsXG4gIH0pXG4gIHVzZUV4aXRPbkN0cmxDRFdpdGhLZXliaW5kaW5ncygpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2dFdmVudCgndGVuZ3VfaW5zdGFsbF9naXRodWJfYXBwX3N0YXJ0ZWQnLCB7fSlcbiAgfSwgW10pXG5cbiAgY29uc3QgY2hlY2tHaXRIdWJDTEkgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgd2FybmluZ3M6IFdhcm5pbmdbXSA9IFtdXG5cbiAgICAvLyBDaGVjayBpZiBnaCBpcyBpbnN0YWxsZWRcbiAgICBjb25zdCBnaFZlcnNpb25SZXN1bHQgPSBhd2FpdCBleGVjYSgnZ2ggLS12ZXJzaW9uJywge1xuICAgICAgc2hlbGw6IHRydWUsXG4gICAgICByZWplY3Q6IGZhbHNlLFxuICAgIH0pXG4gICAgaWYgKGdoVmVyc2lvblJlc3VsdC5leGl0Q29kZSAhPT0gMCkge1xuICAgICAgd2FybmluZ3MucHVzaCh7XG4gICAgICAgIHRpdGxlOiAnR2l0SHViIENMSSBub3QgZm91bmQnLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICdHaXRIdWIgQ0xJIChnaCkgZG9lcyBub3QgYXBwZWFyIHRvIGJlIGluc3RhbGxlZCBvciBhY2Nlc3NpYmxlLicsXG4gICAgICAgIGluc3RydWN0aW9uczogW1xuICAgICAgICAgICdJbnN0YWxsIEdpdEh1YiBDTEkgZnJvbSBodHRwczovL2NsaS5naXRodWIuY29tLycsXG4gICAgICAgICAgJ21hY09TOiBicmV3IGluc3RhbGwgZ2gnLFxuICAgICAgICAgICdXaW5kb3dzOiB3aW5nZXQgaW5zdGFsbCAtLWlkIEdpdEh1Yi5jbGknLFxuICAgICAgICAgICdMaW51eDogU2VlIGluc3RhbGxhdGlvbiBpbnN0cnVjdGlvbnMgYXQgaHR0cHM6Ly9naXRodWIuY29tL2NsaS9jbGkjaW5zdGFsbGF0aW9uJyxcbiAgICAgICAgXSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYXV0aCBzdGF0dXNcbiAgICBjb25zdCBhdXRoUmVzdWx0ID0gYXdhaXQgZXhlY2EoJ2doIGF1dGggc3RhdHVzIC1hJywge1xuICAgICAgc2hlbGw6IHRydWUsXG4gICAgICByZWplY3Q6IGZhbHNlLFxuICAgIH0pXG4gICAgaWYgKGF1dGhSZXN1bHQuZXhpdENvZGUgIT09IDApIHtcbiAgICAgIHdhcm5pbmdzLnB1c2goe1xuICAgICAgICB0aXRsZTogJ0dpdEh1YiBDTEkgbm90IGF1dGhlbnRpY2F0ZWQnLFxuICAgICAgICBtZXNzYWdlOiAnR2l0SHViIENMSSBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgYXV0aGVudGljYXRlZC4nLFxuICAgICAgICBpbnN0cnVjdGlvbnM6IFtcbiAgICAgICAgICAnUnVuOiBnaCBhdXRoIGxvZ2luJyxcbiAgICAgICAgICAnRm9sbG93IHRoZSBwcm9tcHRzIHRvIGF1dGhlbnRpY2F0ZSB3aXRoIEdpdEh1YicsXG4gICAgICAgICAgJ09yIHNldCB1cCBhdXRoZW50aWNhdGlvbiB1c2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZXMgb3Igb3RoZXIgbWV0aG9kcycsXG4gICAgICAgIF0sXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDaGVjayBpZiByZXF1aXJlZCBzY29wZXMgYXJlIHByZXNlbnQgaW4gdGhlIFRva2VuIHNjb3BlcyBsaW5lXG4gICAgICBjb25zdCB0b2tlblNjb3Blc01hdGNoID0gYXV0aFJlc3VsdC5zdGRvdXQubWF0Y2goL1Rva2VuIHNjb3BlczouKiQvbSlcbiAgICAgIGlmICh0b2tlblNjb3Blc01hdGNoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlcyA9IHRva2VuU2NvcGVzTWF0Y2hbMF1cbiAgICAgICAgY29uc3QgbWlzc2luZ1Njb3Blczogc3RyaW5nW10gPSBbXVxuXG4gICAgICAgIGlmICghc2NvcGVzLmluY2x1ZGVzKCdyZXBvJykpIHtcbiAgICAgICAgICBtaXNzaW5nU2NvcGVzLnB1c2goJ3JlcG8nKVxuICAgICAgICB9XG4gICAgICAgIGlmICghc2NvcGVzLmluY2x1ZGVzKCd3b3JrZmxvdycpKSB7XG4gICAgICAgICAgbWlzc2luZ1Njb3Blcy5wdXNoKCd3b3JrZmxvdycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWlzc2luZ1Njb3Blcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gTWlzc2luZyByZXF1aXJlZCBzY29wZXMgLSBleGl0IGltbWVkaWF0ZWx5XG4gICAgICAgICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHN0ZXA6ICdlcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogYEdpdEh1YiBDTEkgaXMgbWlzc2luZyByZXF1aXJlZCBwZXJtaXNzaW9uczogJHttaXNzaW5nU2NvcGVzLmpvaW4oJywgJyl9LmAsXG4gICAgICAgICAgICBlcnJvclJlYXNvbjogJ01pc3NpbmcgcmVxdWlyZWQgc2NvcGVzJyxcbiAgICAgICAgICAgIGVycm9ySW5zdHJ1Y3Rpb25zOiBbXG4gICAgICAgICAgICAgIGBZb3VyIEdpdEh1YiBDTEkgYXV0aGVudGljYXRpb24gaXMgbWlzc2luZyB0aGUgXCIke21pc3NpbmdTY29wZXMuam9pbignXCIgYW5kIFwiJyl9XCIgJHtwbHVyYWwobWlzc2luZ1Njb3Blcy5sZW5ndGgsICdzY29wZScpfSBuZWVkZWQgdG8gbWFuYWdlIEdpdEh1YiBBY3Rpb25zIGFuZCBzZWNyZXRzLmAsXG4gICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAnVG8gZml4IHRoaXMsIHJ1bjonLFxuICAgICAgICAgICAgICAnICBnaCBhdXRoIHJlZnJlc2ggLWggZ2l0aHViLmNvbSAtcyByZXBvLHdvcmtmbG93JyxcbiAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICdUaGlzIHdpbGwgYWRkIHRoZSBuZWNlc3NhcnkgcGVybWlzc2lvbnMgdG8gbWFuYWdlIHdvcmtmbG93cyBhbmQgc2VjcmV0cy4nLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGluIGEgZ2l0IHJlcG8gYW5kIGdldCByZW1vdGUgVVJMXG4gICAgY29uc3QgY3VycmVudFJlcG8gPSAoYXdhaXQgZ2V0R2l0aHViUmVwbygpKSA/PyAnJ1xuXG4gICAgbG9nRXZlbnQoJ3Rlbmd1X2luc3RhbGxfZ2l0aHViX2FwcF9zdGVwX2NvbXBsZXRlZCcsIHtcbiAgICAgIHN0ZXA6ICdjaGVjay1naCcgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICB9KVxuXG4gICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIHdhcm5pbmdzLFxuICAgICAgY3VycmVudFJlcG8sXG4gICAgICBzZWxlY3RlZFJlcG9OYW1lOiBjdXJyZW50UmVwbyxcbiAgICAgIHVzZUN1cnJlbnRSZXBvOiAhIWN1cnJlbnRSZXBvLCAvLyBTZXQgdG8gZmFsc2UgaWYgbm8gcmVwbyBkZXRlY3RlZFxuICAgICAgc3RlcDogd2FybmluZ3MubGVuZ3RoID4gMCA/ICd3YXJuaW5ncycgOiAnY2hvb3NlLXJlcG8nLFxuICAgIH0pKVxuICB9LCBbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5zdGVwID09PSAnY2hlY2stZ2gnKSB7XG4gICAgICB2b2lkIGNoZWNrR2l0SHViQ0xJKClcbiAgICB9XG4gIH0sIFtzdGF0ZS5zdGVwLCBjaGVja0dpdEh1YkNMSV0pXG5cbiAgY29uc3QgcnVuU2V0dXBHaXRIdWJBY3Rpb25zID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKGFwaUtleU9yT0F1dGhUb2tlbjogc3RyaW5nIHwgbnVsbCwgc2VjcmV0TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBzZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHN0ZXA6ICdjcmVhdGluZycsXG4gICAgICAgIGN1cnJlbnRXb3JrZmxvd0luc3RhbGxTdGVwOiAwLFxuICAgICAgfSkpXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHNldHVwR2l0SHViQWN0aW9ucyhcbiAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFJlcG9OYW1lLFxuICAgICAgICAgIGFwaUtleU9yT0F1dGhUb2tlbixcbiAgICAgICAgICBzZWNyZXROYW1lLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgY3VycmVudFdvcmtmbG93SW5zdGFsbFN0ZXA6IHByZXYuY3VycmVudFdvcmtmbG93SW5zdGFsbFN0ZXAgKyAxLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdGF0ZS53b3JrZmxvd0FjdGlvbiA9PT0gJ3NraXAnLFxuICAgICAgICAgIHN0YXRlLnNlbGVjdGVkV29ya2Zsb3dzLFxuICAgICAgICAgIHN0YXRlLmF1dGhUeXBlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVzZUN1cnJlbnRSZXBvOiBzdGF0ZS51c2VDdXJyZW50UmVwbyxcbiAgICAgICAgICAgIHdvcmtmbG93RXhpc3RzOiBzdGF0ZS53b3JrZmxvd0V4aXN0cyxcbiAgICAgICAgICAgIHNlY3JldEV4aXN0czogc3RhdGUuc2VjcmV0RXhpc3RzLFxuICAgICAgICAgIH0sXG4gICAgICAgIClcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2luc3RhbGxfZ2l0aHViX2FwcF9zdGVwX2NvbXBsZXRlZCcsIHtcbiAgICAgICAgICBzdGVwOiAnY3JlYXRpbmcnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIH0pXG4gICAgICAgIHNldFN0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgc3RlcDogJ3N1Y2Nlc3MnIH0pKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yXG4gICAgICAgICAgICA/IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgIDogJ0ZhaWxlZCB0byBzZXQgdXAgR2l0SHViIEFjdGlvbnMnXG5cbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZS5pbmNsdWRlcygnd29ya2Zsb3cgZmlsZSBhbHJlYWR5IGV4aXN0cycpKSB7XG4gICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2luc3RhbGxfZ2l0aHViX2FwcF9lcnJvcicsIHtcbiAgICAgICAgICAgIHJlYXNvbjpcbiAgICAgICAgICAgICAgJ3dvcmtmbG93X2ZpbGVfZXhpc3RzJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHN0ZXA6ICdlcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogJ0EgQ2xhdWRlIHdvcmtmbG93IGZpbGUgYWxyZWFkeSBleGlzdHMgaW4gdGhpcyByZXBvc2l0b3J5LicsXG4gICAgICAgICAgICBlcnJvclJlYXNvbjogJ1dvcmtmbG93IGZpbGUgY29uZmxpY3QnLFxuICAgICAgICAgICAgZXJyb3JJbnN0cnVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgJ1RoZSBmaWxlIC5naXRodWIvd29ya2Zsb3dzL2NsYXVkZS55bWwgYWxyZWFkeSBleGlzdHMnLFxuICAgICAgICAgICAgICAnWW91IGNhbiBlaXRoZXI6JyxcbiAgICAgICAgICAgICAgJyAgMS4gRGVsZXRlIHRoZSBleGlzdGluZyBmaWxlIGFuZCBydW4gdGhpcyBjb21tYW5kIGFnYWluJyxcbiAgICAgICAgICAgICAgJyAgMi4gVXBkYXRlIHRoZSBleGlzdGluZyBmaWxlIG1hbnVhbGx5IHVzaW5nIHRoZSB0ZW1wbGF0ZSBmcm9tOicsXG4gICAgICAgICAgICAgIGAgICAgICR7R0lUSFVCX0FDVElPTl9TRVRVUF9ET0NTX1VSTH1gLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2dFdmVudCgndGVuZ3VfaW5zdGFsbF9naXRodWJfYXBwX2Vycm9yJywge1xuICAgICAgICAgICAgcmVhc29uOlxuICAgICAgICAgICAgICAnc2V0dXBfZ2l0aHViX2FjdGlvbnNfZmFpbGVkJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgc3RlcDogJ2Vycm9yJyxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICBlcnJvclJlYXNvbjogJ0dpdEh1YiBBY3Rpb25zIHNldHVwIGZhaWxlZCcsXG4gICAgICAgICAgICBlcnJvckluc3RydWN0aW9uczogW10sXG4gICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIHN0YXRlLnNlbGVjdGVkUmVwb05hbWUsXG4gICAgICBzdGF0ZS53b3JrZmxvd0FjdGlvbixcbiAgICAgIHN0YXRlLnNlbGVjdGVkV29ya2Zsb3dzLFxuICAgICAgc3RhdGUudXNlQ3VycmVudFJlcG8sXG4gICAgICBzdGF0ZS53b3JrZmxvd0V4aXN0cyxcbiAgICAgIHN0YXRlLnNlY3JldEV4aXN0cyxcbiAgICAgIHN0YXRlLmF1dGhUeXBlLFxuICAgIF0sXG4gIClcblxuICBhc3luYyBmdW5jdGlvbiBvcGVuR2l0SHViQXBwSW5zdGFsbGF0aW9uKCkge1xuICAgIGNvbnN0IGluc3RhbGxVcmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL2FwcHMvY2xhdWRlJ1xuICAgIGF3YWl0IG9wZW5Ccm93c2VyKGluc3RhbGxVcmwpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjaGVja1JlcG9zaXRvcnlQZXJtaXNzaW9ucyhcbiAgICByZXBvTmFtZTogc3RyaW5nLFxuICApOiBQcm9taXNlPHsgaGFzQWNjZXNzOiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnZ2gnLCBbXG4gICAgICAgICdhcGknLFxuICAgICAgICBgcmVwb3MvJHtyZXBvTmFtZX1gLFxuICAgICAgICAnLS1qcScsXG4gICAgICAgICcucGVybWlzc2lvbnMuYWRtaW4nLFxuICAgICAgXSlcblxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGhhc0FkbWluID0gcmVzdWx0LnN0ZG91dC50cmltKCkgPT09ICd0cnVlJ1xuICAgICAgICByZXR1cm4geyBoYXNBY2Nlc3M6IGhhc0FkbWluIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICByZXN1bHQuc3RkZXJyLmluY2x1ZGVzKCc0MDQnKSB8fFxuICAgICAgICByZXN1bHQuc3RkZXJyLmluY2x1ZGVzKCdOb3QgRm91bmQnKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzQWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogJ3JlcG9zaXRvcnlfbm90X2ZvdW5kJyxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBoYXNBY2Nlc3M6IGZhbHNlIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiB7IGhhc0FjY2VzczogZmFsc2UgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNoZWNrRXhpc3RpbmdXb3JrZmxvd0ZpbGUocmVwb05hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGNoZWNrRmlsZVJlc3VsdCA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnZ2gnLCBbXG4gICAgICAnYXBpJyxcbiAgICAgIGByZXBvcy8ke3JlcG9OYW1lfS9jb250ZW50cy8uZ2l0aHViL3dvcmtmbG93cy9jbGF1ZGUueW1sYCxcbiAgICAgICctLWpxJyxcbiAgICAgICcuc2hhJyxcbiAgICBdKVxuXG4gICAgcmV0dXJuIGNoZWNrRmlsZVJlc3VsdC5jb2RlID09PSAwXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjaGVja0V4aXN0aW5nU2VjcmV0KCkge1xuICAgIGNvbnN0IGNoZWNrU2VjcmV0c1Jlc3VsdCA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnZ2gnLCBbXG4gICAgICAnc2VjcmV0JyxcbiAgICAgICdsaXN0JyxcbiAgICAgICctLWFwcCcsXG4gICAgICAnYWN0aW9ucycsXG4gICAgICAnLS1yZXBvJyxcbiAgICAgIHN0YXRlLnNlbGVjdGVkUmVwb05hbWUsXG4gICAgXSlcblxuICAgIGlmIChjaGVja1NlY3JldHNSZXN1bHQuY29kZSA9PT0gMCkge1xuICAgICAgY29uc3QgbGluZXMgPSBjaGVja1NlY3JldHNSZXN1bHQuc3Rkb3V0LnNwbGl0KCdcXG4nKVxuICAgICAgY29uc3QgaGFzQW50aHJvcGljS2V5ID0gbGluZXMuc29tZSgobGluZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiAvXkFOVEhST1BJQ19BUElfS0VZXFxzKy8udGVzdChsaW5lKVxuICAgICAgfSlcblxuICAgICAgaWYgKGhhc0FudGhyb3BpY0tleSkge1xuICAgICAgICBzZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICBzZWNyZXRFeGlzdHM6IHRydWUsXG4gICAgICAgICAgc3RlcDogJ2NoZWNrLWV4aXN0aW5nLXNlY3JldCcsXG4gICAgICAgIH0pKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm8gZXhpc3Rpbmcgc2VjcmV0IGZvdW5kXG4gICAgICAgIGlmIChleGlzdGluZ0FwaUtleSkge1xuICAgICAgICAgIC8vIFVzZXIgaGFzIGxvY2FsIGtleSwgc2tpcCB0byBjcmVhdGluZyB3aXRoIGl0XG4gICAgICAgICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGFwaUtleU9yT0F1dGhUb2tlbjogZXhpc3RpbmdBcGlLZXksXG4gICAgICAgICAgICB1c2VFeGlzdGluZ0tleTogdHJ1ZSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgICBhd2FpdCBydW5TZXR1cEdpdEh1YkFjdGlvbnMoZXhpc3RpbmdBcGlLZXksIHN0YXRlLnNlY3JldE5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTm8gbG9jYWwga2V5LCBnbyB0byBBUEkga2V5IHN0ZXBcbiAgICAgICAgICBzZXRTdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIHN0ZXA6ICdhcGkta2V5JyB9KSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBFcnJvciBjaGVja2luZyBzZWNyZXRzXG4gICAgICBpZiAoZXhpc3RpbmdBcGlLZXkpIHtcbiAgICAgICAgLy8gVXNlciBoYXMgbG9jYWwga2V5LCBza2lwIHRvIGNyZWF0aW5nIHdpdGggaXRcbiAgICAgICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgYXBpS2V5T3JPQXV0aFRva2VuOiBleGlzdGluZ0FwaUtleSxcbiAgICAgICAgICB1c2VFeGlzdGluZ0tleTogdHJ1ZSxcbiAgICAgICAgfSkpXG4gICAgICAgIGF3YWl0IHJ1blNldHVwR2l0SHViQWN0aW9ucyhleGlzdGluZ0FwaUtleSwgc3RhdGUuc2VjcmV0TmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vIGxvY2FsIGtleSwgZ28gdG8gQVBJIGtleSBzdGVwXG4gICAgICAgIHNldFN0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgc3RlcDogJ2FwaS1rZXknIH0pKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoc3RhdGUuc3RlcCA9PT0gJ3dhcm5pbmdzJykge1xuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2luc3RhbGxfZ2l0aHViX2FwcF9zdGVwX2NvbXBsZXRlZCcsIHtcbiAgICAgICAgc3RlcDogJ3dhcm5pbmdzJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgfSlcbiAgICAgIHNldFN0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgc3RlcDogJ2luc3RhbGwtYXBwJyB9KSlcbiAgICAgIHNldFRpbWVvdXQob3BlbkdpdEh1YkFwcEluc3RhbGxhdGlvbiwgMClcbiAgICB9IGVsc2UgaWYgKHN0YXRlLnN0ZXAgPT09ICdjaG9vc2UtcmVwbycpIHtcbiAgICAgIGxldCByZXBvTmFtZSA9IHN0YXRlLnVzZUN1cnJlbnRSZXBvXG4gICAgICAgID8gc3RhdGUuY3VycmVudFJlcG9cbiAgICAgICAgOiBzdGF0ZS5zZWxlY3RlZFJlcG9OYW1lXG5cbiAgICAgIGlmICghcmVwb05hbWUudHJpbSgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXBvV2FybmluZ3M6IFdhcm5pbmdbXSA9IFtdXG5cbiAgICAgIGlmIChyZXBvTmFtZS5pbmNsdWRlcygnZ2l0aHViLmNvbScpKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gcmVwb05hbWUubWF0Y2goL2dpdGh1YlxcLmNvbVs6L10oW14vXStcXC9bXi9dKykoXFwuZ2l0KT8kLylcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgIHJlcG9XYXJuaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiAnSW52YWxpZCBHaXRIdWIgVVJMIGZvcm1hdCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHJlcG9zaXRvcnkgVVJMIGZvcm1hdCBhcHBlYXJzIHRvIGJlIGludmFsaWQuJyxcbiAgICAgICAgICAgIGluc3RydWN0aW9uczogW1xuICAgICAgICAgICAgICAnVXNlIGZvcm1hdDogb3duZXIvcmVwbyBvciBodHRwczovL2dpdGh1Yi5jb20vb3duZXIvcmVwbycsXG4gICAgICAgICAgICAgICdFeGFtcGxlOiBhbnRocm9waWNzL2NsYXVkZS1jbGknLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcG9OYW1lID0gbWF0Y2hbMV0/LnJlcGxhY2UoL1xcLmdpdCQvLCAnJykgfHwgJydcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXJlcG9OYW1lLmluY2x1ZGVzKCcvJykpIHtcbiAgICAgICAgcmVwb1dhcm5pbmdzLnB1c2goe1xuICAgICAgICAgIHRpdGxlOiAnUmVwb3NpdG9yeSBmb3JtYXQgd2FybmluZycsXG4gICAgICAgICAgbWVzc2FnZTogJ1JlcG9zaXRvcnkgc2hvdWxkIGJlIGluIGZvcm1hdCBcIm93bmVyL3JlcG9cIicsXG4gICAgICAgICAgaW5zdHJ1Y3Rpb25zOiBbXG4gICAgICAgICAgICAnVXNlIGZvcm1hdDogb3duZXIvcmVwbycsXG4gICAgICAgICAgICAnRXhhbXBsZTogYW50aHJvcGljcy9jbGF1ZGUtY2xpJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwZXJtaXNzaW9uQ2hlY2sgPSBhd2FpdCBjaGVja1JlcG9zaXRvcnlQZXJtaXNzaW9ucyhyZXBvTmFtZSlcblxuICAgICAgaWYgKHBlcm1pc3Npb25DaGVjay5lcnJvciA9PT0gJ3JlcG9zaXRvcnlfbm90X2ZvdW5kJykge1xuICAgICAgICByZXBvV2FybmluZ3MucHVzaCh7XG4gICAgICAgICAgdGl0bGU6ICdSZXBvc2l0b3J5IG5vdCBmb3VuZCcsXG4gICAgICAgICAgbWVzc2FnZTogYFJlcG9zaXRvcnkgJHtyZXBvTmFtZX0gd2FzIG5vdCBmb3VuZCBvciB5b3UgZG9uJ3QgaGF2ZSBhY2Nlc3MuYCxcbiAgICAgICAgICBpbnN0cnVjdGlvbnM6IFtcbiAgICAgICAgICAgIGBDaGVjayB0aGF0IHRoZSByZXBvc2l0b3J5IG5hbWUgaXMgY29ycmVjdDogJHtyZXBvTmFtZX1gLFxuICAgICAgICAgICAgJ0Vuc3VyZSB5b3UgaGF2ZSBhY2Nlc3MgdG8gdGhpcyByZXBvc2l0b3J5JyxcbiAgICAgICAgICAgICdGb3IgcHJpdmF0ZSByZXBvc2l0b3JpZXMsIG1ha2Ugc3VyZSB5b3VyIEdpdEh1YiB0b2tlbiBoYXMgdGhlIFwicmVwb1wiIHNjb3BlJyxcbiAgICAgICAgICAgICdZb3UgY2FuIGFkZCB0aGUgcmVwbyBzY29wZSB3aXRoOiBnaCBhdXRoIHJlZnJlc2ggLWggZ2l0aHViLmNvbSAtcyByZXBvLHdvcmtmbG93JyxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICghcGVybWlzc2lvbkNoZWNrLmhhc0FjY2Vzcykge1xuICAgICAgICByZXBvV2FybmluZ3MucHVzaCh7XG4gICAgICAgICAgdGl0bGU6ICdBZG1pbiBwZXJtaXNzaW9ucyByZXF1aXJlZCcsXG4gICAgICAgICAgbWVzc2FnZTogYFlvdSBtaWdodCBuZWVkIGFkbWluIHBlcm1pc3Npb25zIG9uICR7cmVwb05hbWV9IHRvIHNldCB1cCBHaXRIdWIgQWN0aW9ucy5gLFxuICAgICAgICAgIGluc3RydWN0aW9uczogW1xuICAgICAgICAgICAgJ1JlcG9zaXRvcnkgYWRtaW5zIGNhbiBpbnN0YWxsIEdpdEh1YiBBcHBzIGFuZCBzZXQgc2VjcmV0cycsXG4gICAgICAgICAgICAnQXNrIGEgcmVwb3NpdG9yeSBhZG1pbiB0byBydW4gdGhpcyBjb21tYW5kIGlmIHNldHVwIGZhaWxzJyxcbiAgICAgICAgICAgICdBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIHVzZSB0aGUgbWFudWFsIHNldHVwIGluc3RydWN0aW9ucycsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd29ya2Zsb3dFeGlzdHMgPSBhd2FpdCBjaGVja0V4aXN0aW5nV29ya2Zsb3dGaWxlKHJlcG9OYW1lKVxuXG4gICAgICBpZiAocmVwb1dhcm5pbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYWxsV2FybmluZ3MgPSBbLi4uc3RhdGUud2FybmluZ3MsIC4uLnJlcG9XYXJuaW5nc11cbiAgICAgICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgc2VsZWN0ZWRSZXBvTmFtZTogcmVwb05hbWUsXG4gICAgICAgICAgd29ya2Zsb3dFeGlzdHMsXG4gICAgICAgICAgd2FybmluZ3M6IGFsbFdhcm5pbmdzLFxuICAgICAgICAgIHN0ZXA6ICd3YXJuaW5ncycsXG4gICAgICAgIH0pKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2luc3RhbGxfZ2l0aHViX2FwcF9zdGVwX2NvbXBsZXRlZCcsIHtcbiAgICAgICAgICBzdGVwOiAnY2hvb3NlLXJlcG8nIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICAgIH0pXG4gICAgICAgIHNldFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgIHNlbGVjdGVkUmVwb05hbWU6IHJlcG9OYW1lLFxuICAgICAgICAgIHdvcmtmbG93RXhpc3RzLFxuICAgICAgICAgIHN0ZXA6ICdpbnN0YWxsLWFwcCcsXG4gICAgICAgIH0pKVxuICAgICAgICBzZXRUaW1lb3V0KG9wZW5HaXRIdWJBcHBJbnN0YWxsYXRpb24sIDApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5zdGVwID09PSAnaW5zdGFsbC1hcHAnKSB7XG4gICAgICBsb2dFdmVudCgndGVuZ3VfaW5zdGFsbF9naXRodWJfYXBwX3N0ZXBfY29tcGxldGVkJywge1xuICAgICAgICBzdGVwOiAnaW5zdGFsbC1hcHAnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICB9KVxuICAgICAgaWYgKHN0YXRlLndvcmtmbG93RXhpc3RzKSB7XG4gICAgICAgIHNldFN0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgc3RlcDogJ2NoZWNrLWV4aXN0aW5nLXdvcmtmbG93JyB9KSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgc3RlcDogJ3NlbGVjdC13b3JrZmxvd3MnIH0pKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhdGUuc3RlcCA9PT0gJ2NoZWNrLWV4aXN0aW5nLXdvcmtmbG93Jykge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChzdGF0ZS5zdGVwID09PSAnc2VsZWN0LXdvcmtmbG93cycpIHtcbiAgICAgIC8vIEhhbmRsZWQgYnkgdGhlIFdvcmtmbG93TXVsdGlzZWxlY3REaWFsb2cgY29tcG9uZW50XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKHN0YXRlLnN0ZXAgPT09ICdjaGVjay1leGlzdGluZy1zZWNyZXQnKSB7XG4gICAgICBsb2dFdmVudCgndGVuZ3VfaW5zdGFsbF9naXRodWJfYXBwX3N0ZXBfY29tcGxldGVkJywge1xuICAgICAgICBzdGVwOiAnY2hlY2stZXhpc3Rpbmctc2VjcmV0JyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgfSlcbiAgICAgIGlmIChzdGF0ZS51c2VFeGlzdGluZ1NlY3JldCkge1xuICAgICAgICBhd2FpdCBydW5TZXR1cEdpdEh1YkFjdGlvbnMobnVsbCwgc3RhdGUuc2VjcmV0TmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZXIgd2FudHMgdG8gdXNlIGEgbmV3IHNlY3JldCBuYW1lIHdpdGggdGhlaXIgQVBJIGtleVxuICAgICAgICBhd2FpdCBydW5TZXR1cEdpdEh1YkFjdGlvbnMoc3RhdGUuYXBpS2V5T3JPQXV0aFRva2VuLCBzdGF0ZS5zZWNyZXROYW1lKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhdGUuc3RlcCA9PT0gJ2FwaS1rZXknKSB7XG4gICAgICAvLyBJbiB0aGUgbmV3IGZsb3csIGFwaS1rZXkgc3RlcCBvbmx5IGFwcGVhcnMgd2hlbiB1c2VyIGhhcyBubyBleGlzdGluZyBrZXlcbiAgICAgIC8vIFRoZXkgZWl0aGVyIGVudGVyZWQgYSBuZXcga2V5IG9yIHdpbGwgY3JlYXRlIE9BdXRoIHRva2VuXG4gICAgICBpZiAoc3RhdGUuc2VsZWN0ZWRBcGlLZXlPcHRpb24gPT09ICdvYXV0aCcpIHtcbiAgICAgICAgLy8gT0F1dGggZmxvdyBhbHJlYWR5IGhhbmRsZWQgYnkgaGFuZGxlQ3JlYXRlT0F1dGhUb2tlblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXNlciBzZWxlY3RlZCAnZXhpc3RpbmcnIG9wdGlvbiwgdXNlIHRoZSBleGlzdGluZyBBUEkga2V5XG4gICAgICBjb25zdCBhcGlLZXlUb1VzZSA9XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkQXBpS2V5T3B0aW9uID09PSAnZXhpc3RpbmcnXG4gICAgICAgICAgPyBleGlzdGluZ0FwaUtleVxuICAgICAgICAgIDogc3RhdGUuYXBpS2V5T3JPQXV0aFRva2VuXG5cbiAgICAgIGlmICghYXBpS2V5VG9Vc2UpIHtcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2luc3RhbGxfZ2l0aHViX2FwcF9lcnJvcicsIHtcbiAgICAgICAgICByZWFzb246XG4gICAgICAgICAgICAnYXBpX2tleV9taXNzaW5nJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICB9KVxuICAgICAgICBzZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICBzdGVwOiAnZXJyb3InLFxuICAgICAgICAgIGVycm9yOiAnQVBJIGtleSBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0pKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gU3RvcmUgdGhlIEFQSSBrZXkgYmVpbmcgdXNlZCAoZWl0aGVyIGV4aXN0aW5nIG9yIG5ld2x5IGVudGVyZWQpXG4gICAgICBzZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIGFwaUtleU9yT0F1dGhUb2tlbjogYXBpS2V5VG9Vc2UsXG4gICAgICAgIHVzZUV4aXN0aW5nS2V5OiBzdGF0ZS5zZWxlY3RlZEFwaUtleU9wdGlvbiA9PT0gJ2V4aXN0aW5nJyxcbiAgICAgIH0pKVxuXG4gICAgICAvLyBDaGVjayBpZiBBTlRIUk9QSUNfQVBJX0tFWSBzZWNyZXQgYWxyZWFkeSBleGlzdHNcbiAgICAgIGNvbnN0IGNoZWNrU2VjcmV0c1Jlc3VsdCA9IGF3YWl0IGV4ZWNGaWxlTm9UaHJvdygnZ2gnLCBbXG4gICAgICAgICdzZWNyZXQnLFxuICAgICAgICAnbGlzdCcsXG4gICAgICAgICctLWFwcCcsXG4gICAgICAgICdhY3Rpb25zJyxcbiAgICAgICAgJy0tcmVwbycsXG4gICAgICAgIHN0YXRlLnNlbGVjdGVkUmVwb05hbWUsXG4gICAgICBdKVxuXG4gICAgICBpZiAoY2hlY2tTZWNyZXRzUmVzdWx0LmNvZGUgPT09IDApIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBjaGVja1NlY3JldHNSZXN1bHQuc3Rkb3V0LnNwbGl0KCdcXG4nKVxuICAgICAgICBjb25zdCBoYXNBbnRocm9waWNLZXkgPSBsaW5lcy5zb21lKChsaW5lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICByZXR1cm4gL15BTlRIUk9QSUNfQVBJX0tFWVxccysvLnRlc3QobGluZSlcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoaGFzQW50aHJvcGljS2V5KSB7XG4gICAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2luc3RhbGxfZ2l0aHViX2FwcF9zdGVwX2NvbXBsZXRlZCcsIHtcbiAgICAgICAgICAgIHN0ZXA6ICdhcGkta2V5JyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHNlY3JldEV4aXN0czogdHJ1ZSxcbiAgICAgICAgICAgIHN0ZXA6ICdjaGVjay1leGlzdGluZy1zZWNyZXQnLFxuICAgICAgICAgIH0pKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9pbnN0YWxsX2dpdGh1Yl9hcHBfc3RlcF9jb21wbGV0ZWQnLCB7XG4gICAgICAgICAgICBzdGVwOiAnYXBpLWtleScgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIE5vIGV4aXN0aW5nIHNlY3JldCwgcHJvY2VlZCB0byBjcmVhdGluZ1xuICAgICAgICAgIGF3YWl0IHJ1blNldHVwR2l0SHViQWN0aW9ucyhhcGlLZXlUb1VzZSwgc3RhdGUuc2VjcmV0TmFtZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2luc3RhbGxfZ2l0aHViX2FwcF9zdGVwX2NvbXBsZXRlZCcsIHtcbiAgICAgICAgICBzdGVwOiAnYXBpLWtleScgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICAgICAgfSlcbiAgICAgICAgLy8gRXJyb3IgY2hlY2tpbmcgc2VjcmV0cywgcHJvY2VlZCBhbnl3YXlcbiAgICAgICAgYXdhaXQgcnVuU2V0dXBHaXRIdWJBY3Rpb25zKGFwaUtleVRvVXNlLCBzdGF0ZS5zZWNyZXROYW1lKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlcG9VcmxDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldFN0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgc2VsZWN0ZWRSZXBvTmFtZTogdmFsdWUgfSkpXG4gIH1cblxuICBjb25zdCBoYW5kbGVBcGlLZXlDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldFN0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgYXBpS2V5T3JPQXV0aFRva2VuOiB2YWx1ZSB9KSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFwaUtleU9wdGlvbkNoYW5nZSA9IChvcHRpb246ICdleGlzdGluZycgfCAnbmV3JyB8ICdvYXV0aCcpID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIHNlbGVjdGVkQXBpS2V5T3B0aW9uOiBvcHRpb24gfSkpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDcmVhdGVPQXV0aFRva2VuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGxvZ0V2ZW50KCd0ZW5ndV9pbnN0YWxsX2dpdGh1Yl9hcHBfc3RlcF9jb21wbGV0ZWQnLCB7XG4gICAgICBzdGVwOiAnYXBpLWtleScgYXMgQW5hbHl0aWNzTWV0YWRhdGFfSV9WRVJJRklFRF9USElTX0lTX05PVF9DT0RFX09SX0ZJTEVQQVRIUyxcbiAgICB9KVxuICAgIHNldFN0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgc3RlcDogJ29hdXRoLWZsb3cnIH0pKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVPQXV0aFN1Y2Nlc3MgPSB1c2VDYWxsYmFjayhcbiAgICAodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2luc3RhbGxfZ2l0aHViX2FwcF9zdGVwX2NvbXBsZXRlZCcsIHtcbiAgICAgICAgc3RlcDogJ29hdXRoLWZsb3cnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgICB9KVxuICAgICAgc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBhcGlLZXlPck9BdXRoVG9rZW46IHRva2VuLFxuICAgICAgICB1c2VFeGlzdGluZ0tleTogZmFsc2UsXG4gICAgICAgIHNlY3JldE5hbWU6ICdDTEFVREVfQ09ERV9PQVVUSF9UT0tFTicsXG4gICAgICAgIGF1dGhUeXBlOiAnb2F1dGhfdG9rZW4nLFxuICAgICAgfSkpXG4gICAgICB2b2lkIHJ1blNldHVwR2l0SHViQWN0aW9ucyh0b2tlbiwgJ0NMQVVERV9DT0RFX09BVVRIX1RPS0VOJylcbiAgICB9LFxuICAgIFtydW5TZXR1cEdpdEh1YkFjdGlvbnNdLFxuICApXG5cbiAgY29uc3QgaGFuZGxlT0F1dGhDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhdGUocHJldiA9PiAoeyAuLi5wcmV2LCBzdGVwOiAnYXBpLWtleScgfSkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZVNlY3JldE5hbWVDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZSAmJiAhL15bYS16QS1aMC05X10rJC8udGVzdCh2YWx1ZSkpIHJldHVyblxuICAgIHNldFN0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgc2VjcmV0TmFtZTogdmFsdWUgfSkpXG4gIH1cblxuICBjb25zdCBoYW5kbGVUb2dnbGVVc2VDdXJyZW50UmVwbyA9ICh1c2VDdXJyZW50UmVwbzogYm9vbGVhbikgPT4ge1xuICAgIHNldFN0YXRlKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICB1c2VDdXJyZW50UmVwbyxcbiAgICAgIHNlbGVjdGVkUmVwb05hbWU6IHVzZUN1cnJlbnRSZXBvID8gcHJldi5jdXJyZW50UmVwbyA6ICcnLFxuICAgIH0pKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlVXNlRXhpc3RpbmdLZXkgPSAodXNlRXhpc3RpbmdLZXk6IGJvb2xlYW4pID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIHVzZUV4aXN0aW5nS2V5IH0pKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlVXNlRXhpc3RpbmdTZWNyZXQgPSAodXNlRXhpc3RpbmdTZWNyZXQ6IGJvb2xlYW4pID0+IHtcbiAgICBzZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgdXNlRXhpc3RpbmdTZWNyZXQsXG4gICAgICBzZWNyZXROYW1lOiB1c2VFeGlzdGluZ1NlY3JldCA/ICdBTlRIUk9QSUNfQVBJX0tFWScgOiAnJyxcbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVdvcmtmbG93QWN0aW9uID0gYXN5bmMgKGFjdGlvbjogJ3VwZGF0ZScgfCAnc2tpcCcgfCAnZXhpdCcpID0+IHtcbiAgICBpZiAoYWN0aW9uID09PSAnZXhpdCcpIHtcbiAgICAgIHByb3BzLm9uRG9uZSgnSW5zdGFsbGF0aW9uIGNhbmNlbGxlZCBieSB1c2VyJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxvZ0V2ZW50KCd0ZW5ndV9pbnN0YWxsX2dpdGh1Yl9hcHBfc3RlcF9jb21wbGV0ZWQnLCB7XG4gICAgICBzdGVwOiAnY2hlY2stZXhpc3Rpbmctd29ya2Zsb3cnIGFzIEFuYWx5dGljc01ldGFkYXRhX0lfVkVSSUZJRURfVEhJU19JU19OT1RfQ09ERV9PUl9GSUxFUEFUSFMsXG4gICAgfSlcblxuICAgIHNldFN0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgd29ya2Zsb3dBY3Rpb246IGFjdGlvbiB9KSlcblxuICAgIGlmIChhY3Rpb24gPT09ICdza2lwJyB8fCBhY3Rpb24gPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBDaGVjayBpZiB1c2VyIGhhcyBleGlzdGluZyBsb2NhbCBBUEkga2V5XG4gICAgICBpZiAoZXhpc3RpbmdBcGlLZXkpIHtcbiAgICAgICAgYXdhaXQgY2hlY2tFeGlzdGluZ1NlY3JldCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBObyBsb2NhbCBrZXksIGdvIHN0cmFpZ2h0IHRvIEFQSSBrZXkgc3RlcFxuICAgICAgICBzZXRTdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIHN0ZXA6ICdhcGkta2V5JyB9KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEaXNtaXNzS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHN0YXRlLnN0ZXAgPT09ICdzdWNjZXNzJykge1xuICAgICAgbG9nRXZlbnQoJ3Rlbmd1X2luc3RhbGxfZ2l0aHViX2FwcF9jb21wbGV0ZWQnLCB7fSlcbiAgICB9XG4gICAgcHJvcHMub25Eb25lKFxuICAgICAgc3RhdGUuc3RlcCA9PT0gJ3N1Y2Nlc3MnXG4gICAgICAgID8gJ0dpdEh1YiBBY3Rpb25zIHNldHVwIGNvbXBsZXRlISdcbiAgICAgICAgOiBzdGF0ZS5lcnJvclxuICAgICAgICAgID8gYENvdWxkbid0IGluc3RhbGwgR2l0SHViIEFwcDogJHtzdGF0ZS5lcnJvcn1cXG5Gb3IgbWFudWFsIHNldHVwIGluc3RydWN0aW9ucywgc2VlOiAke0dJVEhVQl9BQ1RJT05fU0VUVVBfRE9DU19VUkx9YFxuICAgICAgICAgIDogYEdpdEh1YiBBcHAgaW5zdGFsbGF0aW9uIGZhaWxlZFxcbkZvciBtYW51YWwgc2V0dXAgaW5zdHJ1Y3Rpb25zLCBzZWU6ICR7R0lUSFVCX0FDVElPTl9TRVRVUF9ET0NTX1VSTH1gLFxuICAgIClcbiAgfVxuXG4gIHN3aXRjaCAoc3RhdGUuc3RlcCkge1xuICAgIGNhc2UgJ2NoZWNrLWdoJzpcbiAgICAgIHJldHVybiA8Q2hlY2tHaXRIdWJTdGVwIC8+XG4gICAgY2FzZSAnd2FybmluZ3MnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdhcm5pbmdzU3RlcCB3YXJuaW5ncz17c3RhdGUud2FybmluZ3N9IG9uQ29udGludWU9e2hhbmRsZVN1Ym1pdH0gLz5cbiAgICAgIClcbiAgICBjYXNlICdjaG9vc2UtcmVwbyc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2hvb3NlUmVwb1N0ZXBcbiAgICAgICAgICBjdXJyZW50UmVwbz17c3RhdGUuY3VycmVudFJlcG99XG4gICAgICAgICAgdXNlQ3VycmVudFJlcG89e3N0YXRlLnVzZUN1cnJlbnRSZXBvfVxuICAgICAgICAgIHJlcG9Vcmw9e3N0YXRlLnNlbGVjdGVkUmVwb05hbWV9XG4gICAgICAgICAgb25SZXBvVXJsQ2hhbmdlPXtoYW5kbGVSZXBvVXJsQ2hhbmdlfVxuICAgICAgICAgIG9uVG9nZ2xlVXNlQ3VycmVudFJlcG89e2hhbmRsZVRvZ2dsZVVzZUN1cnJlbnRSZXBvfVxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgY2FzZSAnaW5zdGFsbC1hcHAnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEluc3RhbGxBcHBTdGVwXG4gICAgICAgICAgcmVwb1VybD17c3RhdGUuc2VsZWN0ZWRSZXBvTmFtZX1cbiAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIGNhc2UgJ2NoZWNrLWV4aXN0aW5nLXdvcmtmbG93JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxFeGlzdGluZ1dvcmtmbG93U3RlcFxuICAgICAgICAgIHJlcG9OYW1lPXtzdGF0ZS5zZWxlY3RlZFJlcG9OYW1lfVxuICAgICAgICAgIG9uU2VsZWN0QWN0aW9uPXtoYW5kbGVXb3JrZmxvd0FjdGlvbn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICBjYXNlICdjaGVjay1leGlzdGluZy1zZWNyZXQnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENoZWNrRXhpc3RpbmdTZWNyZXRTdGVwXG4gICAgICAgICAgdXNlRXhpc3RpbmdTZWNyZXQ9e3N0YXRlLnVzZUV4aXN0aW5nU2VjcmV0fVxuICAgICAgICAgIHNlY3JldE5hbWU9e3N0YXRlLnNlY3JldE5hbWV9XG4gICAgICAgICAgb25Ub2dnbGVVc2VFeGlzdGluZ1NlY3JldD17aGFuZGxlVG9nZ2xlVXNlRXhpc3RpbmdTZWNyZXR9XG4gICAgICAgICAgb25TZWNyZXROYW1lQ2hhbmdlPXtoYW5kbGVTZWNyZXROYW1lQ2hhbmdlfVxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgY2FzZSAnYXBpLWtleSc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QXBpS2V5U3RlcFxuICAgICAgICAgIGV4aXN0aW5nQXBpS2V5PXtleGlzdGluZ0FwaUtleX1cbiAgICAgICAgICB1c2VFeGlzdGluZ0tleT17c3RhdGUudXNlRXhpc3RpbmdLZXl9XG4gICAgICAgICAgYXBpS2V5T3JPQXV0aFRva2VuPXtzdGF0ZS5hcGlLZXlPck9BdXRoVG9rZW59XG4gICAgICAgICAgb25BcGlLZXlDaGFuZ2U9e2hhbmRsZUFwaUtleUNoYW5nZX1cbiAgICAgICAgICBvblRvZ2dsZVVzZUV4aXN0aW5nS2V5PXtoYW5kbGVUb2dnbGVVc2VFeGlzdGluZ0tleX1cbiAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgIG9uQ3JlYXRlT0F1dGhUb2tlbj17XG4gICAgICAgICAgICBpc0FudGhyb3BpY0F1dGhFbmFibGVkKCkgPyBoYW5kbGVDcmVhdGVPQXV0aFRva2VuIDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXtzdGF0ZS5zZWxlY3RlZEFwaUtleU9wdGlvbn1cbiAgICAgICAgICBvblNlbGVjdE9wdGlvbj17aGFuZGxlQXBpS2V5T3B0aW9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIGNhc2UgJ2NyZWF0aW5nJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDcmVhdGluZ1N0ZXBcbiAgICAgICAgICBjdXJyZW50V29ya2Zsb3dJbnN0YWxsU3RlcD17c3RhdGUuY3VycmVudFdvcmtmbG93SW5zdGFsbFN0ZXB9XG4gICAgICAgICAgc2VjcmV0RXhpc3RzPXtzdGF0ZS5zZWNyZXRFeGlzdHN9XG4gICAgICAgICAgdXNlRXhpc3RpbmdTZWNyZXQ9e3N0YXRlLnVzZUV4aXN0aW5nU2VjcmV0fVxuICAgICAgICAgIHNlY3JldE5hbWU9e3N0YXRlLnNlY3JldE5hbWV9XG4gICAgICAgICAgc2tpcFdvcmtmbG93PXtzdGF0ZS53b3JrZmxvd0FjdGlvbiA9PT0gJ3NraXAnfVxuICAgICAgICAgIHNlbGVjdGVkV29ya2Zsb3dzPXtzdGF0ZS5zZWxlY3RlZFdvcmtmbG93c31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggdGFiSW5kZXg9ezB9IGF1dG9Gb2N1cyBvbktleURvd249e2hhbmRsZURpc21pc3NLZXlEb3dufT5cbiAgICAgICAgICA8U3VjY2Vzc1N0ZXBcbiAgICAgICAgICAgIHNlY3JldEV4aXN0cz17c3RhdGUuc2VjcmV0RXhpc3RzfVxuICAgICAgICAgICAgdXNlRXhpc3RpbmdTZWNyZXQ9e3N0YXRlLnVzZUV4aXN0aW5nU2VjcmV0fVxuICAgICAgICAgICAgc2VjcmV0TmFtZT17c3RhdGUuc2VjcmV0TmFtZX1cbiAgICAgICAgICAgIHNraXBXb3JrZmxvdz17c3RhdGUud29ya2Zsb3dBY3Rpb24gPT09ICdza2lwJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIClcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHRhYkluZGV4PXswfSBhdXRvRm9jdXMgb25LZXlEb3duPXtoYW5kbGVEaXNtaXNzS2V5RG93bn0+XG4gICAgICAgICAgPEVycm9yU3RlcFxuICAgICAgICAgICAgZXJyb3I9e3N0YXRlLmVycm9yfVxuICAgICAgICAgICAgZXJyb3JSZWFzb249e3N0YXRlLmVycm9yUmVhc29ufVxuICAgICAgICAgICAgZXJyb3JJbnN0cnVjdGlvbnM9e3N0YXRlLmVycm9ySW5zdHJ1Y3Rpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgKVxuICAgIGNhc2UgJ3NlbGVjdC13b3JrZmxvd3MnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdvcmtmbG93TXVsdGlzZWxlY3REaWFsb2dcbiAgICAgICAgICBkZWZhdWx0U2VsZWN0aW9ucz17c3RhdGUuc2VsZWN0ZWRXb3JrZmxvd3N9XG4gICAgICAgICAgb25TdWJtaXQ9e3NlbGVjdGVkV29ya2Zsb3dzID0+IHtcbiAgICAgICAgICAgIGxvZ0V2ZW50KCd0ZW5ndV9pbnN0YWxsX2dpdGh1Yl9hcHBfc3RlcF9jb21wbGV0ZWQnLCB7XG4gICAgICAgICAgICAgIHN0ZXA6ICdzZWxlY3Qtd29ya2Zsb3dzJyBhcyBBbmFseXRpY3NNZXRhZGF0YV9JX1ZFUklGSUVEX1RISVNfSVNfTk9UX0NPREVfT1JfRklMRVBBVEhTLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgc2VsZWN0ZWRXb3JrZmxvd3MsXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHVzZXIgaGFzIGV4aXN0aW5nIGxvY2FsIEFQSSBrZXlcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0FwaUtleSkge1xuICAgICAgICAgICAgICB2b2lkIGNoZWNrRXhpc3RpbmdTZWNyZXQoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gTm8gbG9jYWwga2V5LCBnbyBzdHJhaWdodCB0byBBUEkga2V5IHN0ZXBcbiAgICAgICAgICAgICAgc2V0U3RhdGUocHJldiA9PiAoeyAuLi5wcmV2LCBzdGVwOiAnYXBpLWtleScgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICBjYXNlICdvYXV0aC1mbG93JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxPQXV0aEZsb3dTdGVwXG4gICAgICAgICAgb25TdWNjZXNzPXtoYW5kbGVPQXV0aFN1Y2Nlc3N9XG4gICAgICAgICAgb25DYW5jZWw9e2hhbmRsZU9BdXRoQ2FuY2VsfVxuICAgICAgICAvPlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsKFxuICBvbkRvbmU6IExvY2FsSlNYQ29tbWFuZE9uRG9uZSxcbik6IFByb21pc2U8UmVhY3QuUmVhY3ROb2RlPiB7XG4gIHJldHVybiA8SW5zdGFsbEdpdEh1YkFwcCBvbkRvbmU9e29uRG9uZX0gLz5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQSxTQUFTQSxpQkFBaUJDLFdBQXVDO0FBQy9ELE1BQUlBLFVBQVVDLFNBQVM7QUFDckIsV0FBTyw0Q0FBQyxr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LEdBQUdBO1VBQ0hpQjtRQUNGLEVBQUU7QUFFRixZQUFJbEQsZ0JBQWdCO0FBQ2xCLGVBQUt3RSxvQkFBb0I7UUFDM0IsT0FBTztBQUVMcEUsbUJBQVM2QixjQUFTO1lBQUUsR0FBR0E7WUFBTUMsTUFBTTtVQUFVLEVBQUU7UUFDakQ7TUFDRixHQUFFO0lBR1IsS0FBSztBQUNILGFBQ0UsNENBQUMsaUJBQ0MsV0FBVzRELG9CQUNYLFVBQVVFLG1CQUFrQjtFQUdwQztBQUNGO0FBRUEsZUFBc0JZLEtBQ3BCTCxRQUMwQjtBQUMxQixTQUFPLDRDQUFDLG9CQUFpQixRQUFlO0FBQzFDO0FBandCQSxJQStCTWxHO0FBL0JOOzs7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsZ0JBQXVCO01BQzNCNkIsTUFBTTtNQUNOUSxrQkFBa0I7TUFDbEJGLGFBQWE7TUFDYkcsZ0JBQWdCOztNQUNoQkUsb0JBQW9CO01BQ3BCdkMsZ0JBQWdCO01BQ2hCeUMsNEJBQTRCO01BQzVCaEMsVUFBVSxDQUFBO01BQ1ZzQyxjQUFjO01BQ2RQLFlBQVk7TUFDWndDLG1CQUFtQjtNQUNuQmxDLGdCQUFnQjtNQUNoQkYsbUJBQW1CLENBQUMsVUFBVSxlQUFlO01BQzdDM0Msc0JBQXNCO01BQ3RCNEMsVUFBVTtJQUNaOzs7IiwKICAibmFtZXMiOiBbInJlbmRlcklucHV0R3VpZGUiLCAiZXhpdFN0YXRlIiwgInBlbmRpbmciLCAia2V5TmFtZSIsICJXb3JrZmxvd011bHRpc2VsZWN0RGlhbG9nIiwgInQwIiwgIiQiLCAiX2MiLCAib25TdWJtaXQiLCAiZGVmYXVsdFNlbGVjdGlvbnMiLCAic2hvd0Vycm9yIiwgInNldFNob3dFcnJvciIsICJ1c2VTdGF0ZSIsICJ0MSIsICJzZWxlY3RlZFZhbHVlcyIsICJsZW5ndGgiLCAiaGFuZGxlU3VibWl0IiwgInQyIiwgIlN5bWJvbCIsICJmb3IiLCAiaGFuZGxlQ2hhbmdlIiwgInQzIiwgImhhbmRsZUNhbmNlbCIsICJ0NCIsICJ0NSIsICJXT1JLRkxPV1MiLCAibWFwIiwgIl90ZW1wIiwgInQ2IiwgInQ3IiwgInQ4IiwgIndvcmtmbG93IiwgImxhYmVsIiwgInZhbHVlIiwgIkFwaUtleVN0ZXAiLCAidDAiLCAiJCIsICJfYyIsICJleGlzdGluZ0FwaUtleSIsICJhcGlLZXlPck9BdXRoVG9rZW4iLCAib25BcGlLZXlDaGFuZ2UiLCAib25TdWJtaXQiLCAib25Ub2dnbGVVc2VFeGlzdGluZ0tleSIsICJvbkNyZWF0ZU9BdXRoVG9rZW4iLCAic2VsZWN0ZWRPcHRpb24iLCAidDEiLCAib25TZWxlY3RPcHRpb24iLCAidW5kZWZpbmVkIiwgImN1cnNvck9mZnNldCIsICJzZXRDdXJzb3JPZmZzZXQiLCAidXNlU3RhdGUiLCAidGVybWluYWxTaXplIiwgInVzZVRlcm1pbmFsU2l6ZSIsICJ0aGVtZSIsICJ1c2VUaGVtZSIsICJ0MiIsICJoYW5kbGVQcmV2aW91cyIsICJ0MyIsICJoYW5kbGVOZXh0IiwgInQ0IiwgImhhbmRsZUNvbmZpcm0iLCAiaXNUZXh0SW5wdXRWaXNpYmxlIiwgInQ1IiwgInQ2IiwgInQ3IiwgImNvbnRleHQiLCAiaXNBY3RpdmUiLCAidXNlS2V5YmluZGluZ3MiLCAidDgiLCAidDkiLCAidDEwIiwgIlN5bWJvbCIsICJmb3IiLCAidDExIiwgImNvbG9yIiwgInQxMiIsICJ0MTMiLCAidDE0IiwgInQxNSIsICJjb2x1bW5zIiwgInQxNiIsICJ0MTciLCAidDE4IiwgIkNoZWNrRXhpc3RpbmdTZWNyZXRTdGVwIiwgInQwIiwgIiQiLCAiX2MiLCAidXNlRXhpc3RpbmdTZWNyZXQiLCAic2VjcmV0TmFtZSIsICJvblRvZ2dsZVVzZUV4aXN0aW5nU2VjcmV0IiwgIm9uU2VjcmV0TmFtZUNoYW5nZSIsICJvblN1Ym1pdCIsICJjdXJzb3JPZmZzZXQiLCAic2V0Q3Vyc29yT2Zmc2V0IiwgInVzZVN0YXRlIiwgInRlcm1pbmFsU2l6ZSIsICJ1c2VUZXJtaW5hbFNpemUiLCAidGhlbWUiLCAidXNlVGhlbWUiLCAidDEiLCAiaGFuZGxlUHJldmlvdXMiLCAidDIiLCAiaGFuZGxlTmV4dCIsICJ0MyIsICJ0NCIsICJjb250ZXh0IiwgImlzQWN0aXZlIiwgInVzZUtleWJpbmRpbmdzIiwgInQ1IiwgInQ2IiwgInQ3IiwgInQ4IiwgIlN5bWJvbCIsICJmb3IiLCAidDkiLCAidDEwIiwgInQxMSIsICJjb2xvciIsICJ0MTIiLCAidDEzIiwgInQxNCIsICJ0MTUiLCAiY29sdW1ucyIsICJ0MTYiLCAidDE3IiwgInQxOCIsICJDaGVja0dpdEh1YlN0ZXAiLCAiJCIsICJfYyIsICJ0MCIsICJTeW1ib2wiLCAiZm9yIiwgIkNob29zZVJlcG9TdGVwIiwgInQwIiwgIiQiLCAiX2MiLCAiY3VycmVudFJlcG8iLCAidXNlQ3VycmVudFJlcG8iLCAicmVwb1VybCIsICJvblJlcG9VcmxDaGFuZ2UiLCAib25TdWJtaXQiLCAib25Ub2dnbGVVc2VDdXJyZW50UmVwbyIsICJjdXJzb3JPZmZzZXQiLCAic2V0Q3Vyc29yT2Zmc2V0IiwgInVzZVN0YXRlIiwgInNob3dFbXB0eUVycm9yIiwgInNldFNob3dFbXB0eUVycm9yIiwgInRlcm1pbmFsU2l6ZSIsICJ1c2VUZXJtaW5hbFNpemUiLCAidGV4dElucHV0Q29sdW1ucyIsICJjb2x1bW5zIiwgInQxIiwgInJlcG9OYW1lIiwgInRyaW0iLCAiaGFuZGxlU3VibWl0IiwgImlzVGV4dElucHV0VmlzaWJsZSIsICJ0MiIsICJoYW5kbGVQcmV2aW91cyIsICJ0MyIsICJoYW5kbGVOZXh0IiwgInQ0IiwgInQ1IiwgInQ2IiwgImNvbnRleHQiLCAiaXNBY3RpdmUiLCAidXNlS2V5YmluZGluZ3MiLCAidDciLCAidDgiLCAidDkiLCAiU3ltYm9sIiwgImZvciIsICJ0MTAiLCAidW5kZWZpbmVkIiwgInQxMSIsICJ0MTIiLCAidDEzIiwgInQxNCIsICJ0MTUiLCAidDE2IiwgInZhbHVlIiwgInQxNyIsICJ0MTgiLCAidDE5IiwgInQyMCIsICJ0MjEiLCAiQ3JlYXRpbmdTdGVwIiwgInQwIiwgIiQiLCAiX2MiLCAiY3VycmVudFdvcmtmbG93SW5zdGFsbFN0ZXAiLCAic2VjcmV0RXhpc3RzIiwgInVzZUV4aXN0aW5nU2VjcmV0IiwgInNlY3JldE5hbWUiLCAic2tpcFdvcmtmbG93IiwgInQxIiwgInNlbGVjdGVkV29ya2Zsb3dzIiwgInVuZGVmaW5lZCIsICJ0MiIsICJsZW5ndGgiLCAicHJvZ3Jlc3NTdGVwcyIsICJ0MyIsICJTeW1ib2wiLCAiZm9yIiwgInQ0IiwgIm1hcCIsICJzdGVwVGV4dCIsICJpbmRleCIsICJzdGF0dXMiLCAiRXJyb3JTdGVwIiwgInQwIiwgIiQiLCAiX2MiLCAiZXJyb3IiLCAiZXJyb3JSZWFzb24iLCAiZXJyb3JJbnN0cnVjdGlvbnMiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJ0MiIsICJ0MyIsICJ0NCIsICJsZW5ndGgiLCAibWFwIiwgIl90ZW1wIiwgInQ1IiwgIkdJVEhVQl9BQ1RJT05fU0VUVVBfRE9DU19VUkwiLCAidDYiLCAidDciLCAidDgiLCAiaW5zdHJ1Y3Rpb24iLCAiaW5kZXgiLCAiRXhpc3RpbmdXb3JrZmxvd1N0ZXAiLCAidDAiLCAiJCIsICJfYyIsICJyZXBvTmFtZSIsICJvblNlbGVjdEFjdGlvbiIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgImxhYmVsIiwgInZhbHVlIiwgIm9wdGlvbnMiLCAidDIiLCAiaGFuZGxlU2VsZWN0IiwgInQzIiwgImhhbmRsZUNhbmNlbCIsICJ0NCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJ0OSIsICJJbnN0YWxsQXBwU3RlcCIsICJ0MCIsICIkIiwgIl9jIiwgInJlcG9VcmwiLCAib25TdWJtaXQiLCAidDEiLCAiU3ltYm9sIiwgImZvciIsICJjb250ZXh0IiwgInVzZUtleWJpbmRpbmciLCAidDIiLCAidDMiLCAidDQiLCAidDUiLCAidDYiLCAidDciLCAidDgiLCAiZmlndXJlcyIsICJlbGxpcHNpcyIsICJ0OSIsICJHSVRIVUJfQUNUSU9OX1NFVFVQX0RPQ1NfVVJMIiwgInQxMCIsICJPQXV0aEZsb3dTdGVwIiwgIm9uU3VjY2VzcyIsICJvbkNhbmNlbCIsICJvYXV0aFN0YXR1cyIsICJzZXRPQXV0aFN0YXR1cyIsICJ1c2VTdGF0ZSIsICJzdGF0ZSIsICJvYXV0aFNlcnZpY2UiLCAiT0F1dGhTZXJ2aWNlIiwgInBhc3RlZENvZGUiLCAic2V0UGFzdGVkQ29kZSIsICJjdXJzb3JPZmZzZXQiLCAic2V0Q3Vyc29yT2Zmc2V0IiwgInNob3dQYXN0ZVByb21wdCIsICJzZXRTaG93UGFzdGVQcm9tcHQiLCAidXJsQ29waWVkIiwgInNldFVybENvcGllZCIsICJ0aW1lcnNSZWYiLCAidXNlUmVmIiwgIlNldCIsICJ1cmxDb3BpZWRUaW1lclJlZiIsICJ1bmRlZmluZWQiLCAidGVybWluYWxTaXplIiwgInVzZVRlcm1pbmFsU2l6ZSIsICJ0ZXh0SW5wdXRDb2x1bW5zIiwgIk1hdGgiLCAibWF4IiwgImNvbHVtbnMiLCAiUEFTVEVfSEVSRV9NU0ciLCAibGVuZ3RoIiwgImhhbmRsZUtleURvd24iLCAiZSIsICJwcmV2ZW50RGVmYXVsdCIsICJrZXkiLCAidG9SZXRyeSIsICJuZXh0U3RhdGUiLCAiaGFuZGxlU3VibWl0Q29kZSIsICJ2YWx1ZSIsICJ1cmwiLCAiYXV0aG9yaXphdGlvbkNvZGUiLCAic3BsaXQiLCAibWVzc2FnZSIsICJsb2dFdmVudCIsICJoYW5kbGVNYW51YWxBdXRoQ29kZUlucHV0IiwgImVyciIsICJsb2dFcnJvciIsICJzdGFydE9BdXRoIiwgInVzZUNhbGxiYWNrIiwgImN1cnJlbnQiLCAiZm9yRWFjaCIsICJ0aW1lciIsICJjbGVhclRpbWVvdXQiLCAiY2xlYXIiLCAicmVzdWx0IiwgInN0YXJ0T0F1dGhGbG93IiwgInNldFRpbWVvdXQiLCAiYWRkIiwgImxvZ2luV2l0aENsYXVkZUFpIiwgImluZmVyZW5jZU9ubHkiLCAiZXhwaXJlc0luIiwgInNhdmVPQXV0aFRva2Vuc0lmTmVlZGVkIiwgInRpbWVyMSIsICJhY2Nlc3NUb2tlbiIsICJ0b2tlbiIsICJ0aW1lcjIiLCAiZXJyb3JNZXNzYWdlIiwgImVycm9yIiwgInVzZUVmZmVjdCIsICJzZXRDbGlwYm9hcmQiLCAidGhlbiIsICJyYXciLCAicHJvY2VzcyIsICJzdGRvdXQiLCAid3JpdGUiLCAidGltZXJzIiwgImNsZWFudXAiLCAicmVuZGVyU3RhdHVzTWVzc2FnZSIsICJTdWNjZXNzU3RlcCIsICJ0MCIsICIkIiwgIl9jIiwgInNlY3JldEV4aXN0cyIsICJ1c2VFeGlzdGluZ1NlY3JldCIsICJzZWNyZXROYW1lIiwgInNraXBXb3JrZmxvdyIsICJ0MSIsICJ1bmRlZmluZWQiLCAidDIiLCAiU3ltYm9sIiwgImZvciIsICJ0MyIsICJ0NCIsICJ0NSIsICJ0NiIsICJ0NyIsICJ0OCIsICJ0OSIsICJ0MTAiLCAiV2FybmluZ3NTdGVwIiwgInQwIiwgIiQiLCAiX2MiLCAid2FybmluZ3MiLCAib25Db250aW51ZSIsICJ0MSIsICJTeW1ib2wiLCAiZm9yIiwgImNvbnRleHQiLCAidXNlS2V5YmluZGluZyIsICJ0MiIsICJmaWd1cmVzIiwgIndhcm5pbmciLCAidDMiLCAibWFwIiwgIl90ZW1wMiIsICJ0NCIsICJ0NSIsICJHSVRIVUJfQUNUSU9OX1NFVFVQX0RPQ1NfVVJMIiwgInQ2IiwgImluZGV4IiwgInRpdGxlIiwgIm1lc3NhZ2UiLCAiaW5zdHJ1Y3Rpb25zIiwgImxlbmd0aCIsICJfdGVtcCIsICJpbnN0cnVjdGlvbiIsICJpIiwgIkluc3RhbGxHaXRIdWJBcHAiLCAicHJvcHMiLCAiZXhpc3RpbmdBcGlLZXkiLCAidXNlU3RhdGUiLCAiZ2V0QW50aHJvcGljQXBpS2V5IiwgInN0YXRlIiwgInNldFN0YXRlIiwgIklOSVRJQUxfU1RBVEUiLCAidXNlRXhpc3RpbmdLZXkiLCAic2VsZWN0ZWRBcGlLZXlPcHRpb24iLCAiaXNBbnRocm9waWNBdXRoRW5hYmxlZCIsICJ1c2VFeGl0T25DdHJsQ0RXaXRoS2V5YmluZGluZ3MiLCAiUmVhY3QiLCAidXNlRWZmZWN0IiwgImxvZ0V2ZW50IiwgImNoZWNrR2l0SHViQ0xJIiwgInVzZUNhbGxiYWNrIiwgIndhcm5pbmdzIiwgImdoVmVyc2lvblJlc3VsdCIsICJleGVjYSIsICJzaGVsbCIsICJyZWplY3QiLCAiZXhpdENvZGUiLCAicHVzaCIsICJ0aXRsZSIsICJtZXNzYWdlIiwgImluc3RydWN0aW9ucyIsICJhdXRoUmVzdWx0IiwgInRva2VuU2NvcGVzTWF0Y2giLCAic3Rkb3V0IiwgIm1hdGNoIiwgInNjb3BlcyIsICJtaXNzaW5nU2NvcGVzIiwgImluY2x1ZGVzIiwgImxlbmd0aCIsICJwcmV2IiwgInN0ZXAiLCAiZXJyb3IiLCAiam9pbiIsICJlcnJvclJlYXNvbiIsICJlcnJvckluc3RydWN0aW9ucyIsICJwbHVyYWwiLCAiY3VycmVudFJlcG8iLCAiZ2V0R2l0aHViUmVwbyIsICJzZWxlY3RlZFJlcG9OYW1lIiwgInVzZUN1cnJlbnRSZXBvIiwgInJ1blNldHVwR2l0SHViQWN0aW9ucyIsICJhcGlLZXlPck9BdXRoVG9rZW4iLCAic2VjcmV0TmFtZSIsICJjdXJyZW50V29ya2Zsb3dJbnN0YWxsU3RlcCIsICJzZXR1cEdpdEh1YkFjdGlvbnMiLCAid29ya2Zsb3dBY3Rpb24iLCAic2VsZWN0ZWRXb3JrZmxvd3MiLCAiYXV0aFR5cGUiLCAid29ya2Zsb3dFeGlzdHMiLCAic2VjcmV0RXhpc3RzIiwgImVycm9yTWVzc2FnZSIsICJFcnJvciIsICJyZWFzb24iLCAiR0lUSFVCX0FDVElPTl9TRVRVUF9ET0NTX1VSTCIsICJvcGVuR2l0SHViQXBwSW5zdGFsbGF0aW9uIiwgImluc3RhbGxVcmwiLCAib3BlbkJyb3dzZXIiLCAiY2hlY2tSZXBvc2l0b3J5UGVybWlzc2lvbnMiLCAicmVwb05hbWUiLCAicmVzdWx0IiwgImV4ZWNGaWxlTm9UaHJvdyIsICJjb2RlIiwgImhhc0FkbWluIiwgInRyaW0iLCAiaGFzQWNjZXNzIiwgInN0ZGVyciIsICJjaGVja0V4aXN0aW5nV29ya2Zsb3dGaWxlIiwgImNoZWNrRmlsZVJlc3VsdCIsICJjaGVja0V4aXN0aW5nU2VjcmV0IiwgImNoZWNrU2VjcmV0c1Jlc3VsdCIsICJsaW5lcyIsICJzcGxpdCIsICJoYXNBbnRocm9waWNLZXkiLCAic29tZSIsICJsaW5lIiwgInRlc3QiLCAiaGFuZGxlU3VibWl0IiwgInNldFRpbWVvdXQiLCAicmVwb1dhcm5pbmdzIiwgInJlcGxhY2UiLCAicGVybWlzc2lvbkNoZWNrIiwgImFsbFdhcm5pbmdzIiwgInVzZUV4aXN0aW5nU2VjcmV0IiwgImFwaUtleVRvVXNlIiwgImhhbmRsZVJlcG9VcmxDaGFuZ2UiLCAidmFsdWUiLCAiaGFuZGxlQXBpS2V5Q2hhbmdlIiwgImhhbmRsZUFwaUtleU9wdGlvbkNoYW5nZSIsICJvcHRpb24iLCAiaGFuZGxlQ3JlYXRlT0F1dGhUb2tlbiIsICJoYW5kbGVPQXV0aFN1Y2Nlc3MiLCAidG9rZW4iLCAiaGFuZGxlT0F1dGhDYW5jZWwiLCAiaGFuZGxlU2VjcmV0TmFtZUNoYW5nZSIsICJoYW5kbGVUb2dnbGVVc2VDdXJyZW50UmVwbyIsICJoYW5kbGVUb2dnbGVVc2VFeGlzdGluZ0tleSIsICJoYW5kbGVUb2dnbGVVc2VFeGlzdGluZ1NlY3JldCIsICJoYW5kbGVXb3JrZmxvd0FjdGlvbiIsICJhY3Rpb24iLCAib25Eb25lIiwgImhhbmRsZURpc21pc3NLZXlEb3duIiwgImUiLCAicHJldmVudERlZmF1bHQiLCAidW5kZWZpbmVkIiwgImNhbGwiXQp9Cg==
