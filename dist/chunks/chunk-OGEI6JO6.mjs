#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  __esm
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/package.json
var package_default;
var init_package = __esm({
  "node_modules/.pnpm/@aws-sdk+nested-clients@3.996.18/node_modules/@aws-sdk/nested-clients/package.json"() {
    package_default = {
      name: "@aws-sdk/nested-clients",
      version: "3.996.18",
      description: "Nested clients for AWS SDK packages.",
      main: "./dist-cjs/index.js",
      module: "./dist-es/index.js",
      types: "./dist-types/index.d.ts",
      scripts: {
        build: "yarn lint && concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
        "build:cjs": "node ../../scripts/compilation/inline nested-clients",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo",
        lint: "node ../../scripts/validation/submodules-linter.js --pkg nested-clients",
        test: "yarn g:vitest run",
        "test:watch": "yarn g:vitest watch"
      },
      engines: {
        node: ">=20.0.0"
      },
      sideEffects: false,
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "^3.973.26",
        "@aws-sdk/middleware-host-header": "^3.972.8",
        "@aws-sdk/middleware-logger": "^3.972.8",
        "@aws-sdk/middleware-recursion-detection": "^3.972.9",
        "@aws-sdk/middleware-user-agent": "^3.972.28",
        "@aws-sdk/region-config-resolver": "^3.972.10",
        "@aws-sdk/types": "^3.973.6",
        "@aws-sdk/util-endpoints": "^3.996.5",
        "@aws-sdk/util-user-agent-browser": "^3.972.8",
        "@aws-sdk/util-user-agent-node": "^3.973.14",
        "@smithy/config-resolver": "^4.4.13",
        "@smithy/core": "^3.23.13",
        "@smithy/fetch-http-handler": "^5.3.15",
        "@smithy/hash-node": "^4.2.12",
        "@smithy/invalid-dependency": "^4.2.12",
        "@smithy/middleware-content-length": "^4.2.12",
        "@smithy/middleware-endpoint": "^4.4.28",
        "@smithy/middleware-retry": "^4.4.46",
        "@smithy/middleware-serde": "^4.2.16",
        "@smithy/middleware-stack": "^4.2.12",
        "@smithy/node-config-provider": "^4.3.12",
        "@smithy/node-http-handler": "^4.5.1",
        "@smithy/protocol-http": "^5.3.12",
        "@smithy/smithy-client": "^4.12.8",
        "@smithy/types": "^4.13.1",
        "@smithy/url-parser": "^4.2.12",
        "@smithy/util-base64": "^4.3.2",
        "@smithy/util-body-length-browser": "^4.2.2",
        "@smithy/util-body-length-node": "^4.2.3",
        "@smithy/util-defaults-mode-browser": "^4.3.44",
        "@smithy/util-defaults-mode-node": "^4.2.48",
        "@smithy/util-endpoints": "^3.3.3",
        "@smithy/util-middleware": "^4.2.12",
        "@smithy/util-retry": "^4.2.13",
        "@smithy/util-utf8": "^4.2.2",
        tslib: "^2.6.2"
      },
      devDependencies: {
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        premove: "4.0.0",
        typescript: "~5.8.3"
      },
      typesVersions: {
        "<4.5": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "./cognito-identity.d.ts",
        "./cognito-identity.js",
        "./signin.d.ts",
        "./signin.js",
        "./sso-oidc.d.ts",
        "./sso-oidc.js",
        "./sso.d.ts",
        "./sso.js",
        "./sts.d.ts",
        "./sts.js",
        "dist-*/**"
      ],
      browser: {
        "./dist-es/submodules/cognito-identity/runtimeConfig": "./dist-es/submodules/cognito-identity/runtimeConfig.browser",
        "./dist-es/submodules/signin/runtimeConfig": "./dist-es/submodules/signin/runtimeConfig.browser",
        "./dist-es/submodules/sso-oidc/runtimeConfig": "./dist-es/submodules/sso-oidc/runtimeConfig.browser",
        "./dist-es/submodules/sso/runtimeConfig": "./dist-es/submodules/sso/runtimeConfig.browser",
        "./dist-es/submodules/sts/runtimeConfig": "./dist-es/submodules/sts/runtimeConfig.browser"
      },
      "react-native": {},
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/packages/nested-clients",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "packages/nested-clients"
      },
      exports: {
        "./package.json": "./package.json",
        "./sso-oidc": {
          types: "./dist-types/submodules/sso-oidc/index.d.ts",
          module: "./dist-es/submodules/sso-oidc/index.js",
          node: "./dist-cjs/submodules/sso-oidc/index.js",
          import: "./dist-es/submodules/sso-oidc/index.js",
          require: "./dist-cjs/submodules/sso-oidc/index.js"
        },
        "./sts": {
          types: "./dist-types/submodules/sts/index.d.ts",
          module: "./dist-es/submodules/sts/index.js",
          node: "./dist-cjs/submodules/sts/index.js",
          import: "./dist-es/submodules/sts/index.js",
          require: "./dist-cjs/submodules/sts/index.js"
        },
        "./signin": {
          types: "./dist-types/submodules/signin/index.d.ts",
          module: "./dist-es/submodules/signin/index.js",
          node: "./dist-cjs/submodules/signin/index.js",
          import: "./dist-es/submodules/signin/index.js",
          require: "./dist-cjs/submodules/signin/index.js"
        },
        "./cognito-identity": {
          types: "./dist-types/submodules/cognito-identity/index.d.ts",
          module: "./dist-es/submodules/cognito-identity/index.js",
          node: "./dist-cjs/submodules/cognito-identity/index.js",
          import: "./dist-es/submodules/cognito-identity/index.js",
          require: "./dist-cjs/submodules/cognito-identity/index.js"
        },
        "./sso": {
          types: "./dist-types/submodules/sso/index.d.ts",
          module: "./dist-es/submodules/sso/index.js",
          node: "./dist-cjs/submodules/sso/index.js",
          import: "./dist-es/submodules/sso/index.js",
          require: "./dist-cjs/submodules/sso/index.js"
        }
      }
    };
  }
});

export {
  init_package,
  package_default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK25lc3RlZC1jbGllbnRzQDMuOTk2LjE4L25vZGVfbW9kdWxlcy9AYXdzLXNkay9uZXN0ZWQtY2xpZW50cy9wYWNrYWdlLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcbiAgXCJuYW1lXCI6IFwiQGF3cy1zZGsvbmVzdGVkLWNsaWVudHNcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMy45OTYuMThcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5lc3RlZCBjbGllbnRzIGZvciBBV1MgU0RLIHBhY2thZ2VzLlwiLFxuICBcIm1haW5cIjogXCIuL2Rpc3QtY2pzL2luZGV4LmpzXCIsXG4gIFwibW9kdWxlXCI6IFwiLi9kaXN0LWVzL2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QtdHlwZXMvaW5kZXguZC50c1wiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ5YXJuIGxpbnQgJiYgY29uY3VycmVudGx5ICd5YXJuOmJ1aWxkOnR5cGVzJyAneWFybjpidWlsZDplcycgJiYgeWFybiBidWlsZDpjanNcIixcbiAgICBcImJ1aWxkOmNqc1wiOiBcIm5vZGUgLi4vLi4vc2NyaXB0cy9jb21waWxhdGlvbi9pbmxpbmUgbmVzdGVkLWNsaWVudHNcIixcbiAgICBcImJ1aWxkOmVzXCI6IFwidHNjIC1wIHRzY29uZmlnLmVzLmpzb25cIixcbiAgICBcImJ1aWxkOmluY2x1ZGU6ZGVwc1wiOiBcInlhcm4gZzp0dXJibyBydW4gYnVpbGQgLUY9XFxcIiRucG1fcGFja2FnZV9uYW1lXFxcIlwiLFxuICAgIFwiYnVpbGQ6dHlwZXNcIjogXCJ0c2MgLXAgdHNjb25maWcudHlwZXMuanNvblwiLFxuICAgIFwiYnVpbGQ6dHlwZXM6ZG93bmxldmVsXCI6IFwiZG93bmxldmVsLWR0cyBkaXN0LXR5cGVzIGRpc3QtdHlwZXMvdHMzLjRcIixcbiAgICBcImNsZWFuXCI6IFwicHJlbW92ZSBkaXN0LWNqcyBkaXN0LWVzIGRpc3QtdHlwZXMgdHNjb25maWcuY2pzLnRzYnVpbGRpbmZvIHRzY29uZmlnLmVzLnRzYnVpbGRpbmZvIHRzY29uZmlnLnR5cGVzLnRzYnVpbGRpbmZvXCIsXG4gICAgXCJsaW50XCI6IFwibm9kZSAuLi8uLi9zY3JpcHRzL3ZhbGlkYXRpb24vc3VibW9kdWxlcy1saW50ZXIuanMgLS1wa2cgbmVzdGVkLWNsaWVudHNcIixcbiAgICBcInRlc3RcIjogXCJ5YXJuIGc6dml0ZXN0IHJ1blwiLFxuICAgIFwidGVzdDp3YXRjaFwiOiBcInlhcm4gZzp2aXRlc3Qgd2F0Y2hcIlxuICB9LFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIj49MjAuMC4wXCJcbiAgfSxcbiAgXCJzaWRlRWZmZWN0c1wiOiBmYWxzZSxcbiAgXCJhdXRob3JcIjoge1xuICAgIFwibmFtZVwiOiBcIkFXUyBTREsgZm9yIEphdmFTY3JpcHQgVGVhbVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9hd3MuYW1hem9uLmNvbS9qYXZhc2NyaXB0L1wiXG4gIH0sXG4gIFwibGljZW5zZVwiOiBcIkFwYWNoZS0yLjBcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGF3cy1jcnlwdG8vc2hhMjU2LWJyb3dzZXJcIjogXCI1LjIuMFwiLFxuICAgIFwiQGF3cy1jcnlwdG8vc2hhMjU2LWpzXCI6IFwiNS4yLjBcIixcbiAgICBcIkBhd3Mtc2RrL2NvcmVcIjogXCJeMy45NzMuMjZcIixcbiAgICBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtaG9zdC1oZWFkZXJcIjogXCJeMy45NzIuOFwiLFxuICAgIFwiQGF3cy1zZGsvbWlkZGxld2FyZS1sb2dnZXJcIjogXCJeMy45NzIuOFwiLFxuICAgIFwiQGF3cy1zZGsvbWlkZGxld2FyZS1yZWN1cnNpb24tZGV0ZWN0aW9uXCI6IFwiXjMuOTcyLjlcIixcbiAgICBcIkBhd3Mtc2RrL21pZGRsZXdhcmUtdXNlci1hZ2VudFwiOiBcIl4zLjk3Mi4yOFwiLFxuICAgIFwiQGF3cy1zZGsvcmVnaW9uLWNvbmZpZy1yZXNvbHZlclwiOiBcIl4zLjk3Mi4xMFwiLFxuICAgIFwiQGF3cy1zZGsvdHlwZXNcIjogXCJeMy45NzMuNlwiLFxuICAgIFwiQGF3cy1zZGsvdXRpbC1lbmRwb2ludHNcIjogXCJeMy45OTYuNVwiLFxuICAgIFwiQGF3cy1zZGsvdXRpbC11c2VyLWFnZW50LWJyb3dzZXJcIjogXCJeMy45NzIuOFwiLFxuICAgIFwiQGF3cy1zZGsvdXRpbC11c2VyLWFnZW50LW5vZGVcIjogXCJeMy45NzMuMTRcIixcbiAgICBcIkBzbWl0aHkvY29uZmlnLXJlc29sdmVyXCI6IFwiXjQuNC4xM1wiLFxuICAgIFwiQHNtaXRoeS9jb3JlXCI6IFwiXjMuMjMuMTNcIixcbiAgICBcIkBzbWl0aHkvZmV0Y2gtaHR0cC1oYW5kbGVyXCI6IFwiXjUuMy4xNVwiLFxuICAgIFwiQHNtaXRoeS9oYXNoLW5vZGVcIjogXCJeNC4yLjEyXCIsXG4gICAgXCJAc21pdGh5L2ludmFsaWQtZGVwZW5kZW5jeVwiOiBcIl40LjIuMTJcIixcbiAgICBcIkBzbWl0aHkvbWlkZGxld2FyZS1jb250ZW50LWxlbmd0aFwiOiBcIl40LjIuMTJcIixcbiAgICBcIkBzbWl0aHkvbWlkZGxld2FyZS1lbmRwb2ludFwiOiBcIl40LjQuMjhcIixcbiAgICBcIkBzbWl0aHkvbWlkZGxld2FyZS1yZXRyeVwiOiBcIl40LjQuNDZcIixcbiAgICBcIkBzbWl0aHkvbWlkZGxld2FyZS1zZXJkZVwiOiBcIl40LjIuMTZcIixcbiAgICBcIkBzbWl0aHkvbWlkZGxld2FyZS1zdGFja1wiOiBcIl40LjIuMTJcIixcbiAgICBcIkBzbWl0aHkvbm9kZS1jb25maWctcHJvdmlkZXJcIjogXCJeNC4zLjEyXCIsXG4gICAgXCJAc21pdGh5L25vZGUtaHR0cC1oYW5kbGVyXCI6IFwiXjQuNS4xXCIsXG4gICAgXCJAc21pdGh5L3Byb3RvY29sLWh0dHBcIjogXCJeNS4zLjEyXCIsXG4gICAgXCJAc21pdGh5L3NtaXRoeS1jbGllbnRcIjogXCJeNC4xMi44XCIsXG4gICAgXCJAc21pdGh5L3R5cGVzXCI6IFwiXjQuMTMuMVwiLFxuICAgIFwiQHNtaXRoeS91cmwtcGFyc2VyXCI6IFwiXjQuMi4xMlwiLFxuICAgIFwiQHNtaXRoeS91dGlsLWJhc2U2NFwiOiBcIl40LjMuMlwiLFxuICAgIFwiQHNtaXRoeS91dGlsLWJvZHktbGVuZ3RoLWJyb3dzZXJcIjogXCJeNC4yLjJcIixcbiAgICBcIkBzbWl0aHkvdXRpbC1ib2R5LWxlbmd0aC1ub2RlXCI6IFwiXjQuMi4zXCIsXG4gICAgXCJAc21pdGh5L3V0aWwtZGVmYXVsdHMtbW9kZS1icm93c2VyXCI6IFwiXjQuMy40NFwiLFxuICAgIFwiQHNtaXRoeS91dGlsLWRlZmF1bHRzLW1vZGUtbm9kZVwiOiBcIl40LjIuNDhcIixcbiAgICBcIkBzbWl0aHkvdXRpbC1lbmRwb2ludHNcIjogXCJeMy4zLjNcIixcbiAgICBcIkBzbWl0aHkvdXRpbC1taWRkbGV3YXJlXCI6IFwiXjQuMi4xMlwiLFxuICAgIFwiQHNtaXRoeS91dGlsLXJldHJ5XCI6IFwiXjQuMi4xM1wiLFxuICAgIFwiQHNtaXRoeS91dGlsLXV0ZjhcIjogXCJeNC4yLjJcIixcbiAgICBcInRzbGliXCI6IFwiXjIuNi4yXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiY29uY3VycmVudGx5XCI6IFwiNy4wLjBcIixcbiAgICBcImRvd25sZXZlbC1kdHNcIjogXCIwLjEwLjFcIixcbiAgICBcInByZW1vdmVcIjogXCI0LjAuMFwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIn41LjguM1wiXG4gIH0sXG4gIFwidHlwZXNWZXJzaW9uc1wiOiB7XG4gICAgXCI8NC41XCI6IHtcbiAgICAgIFwiZGlzdC10eXBlcy8qXCI6IFtcbiAgICAgICAgXCJkaXN0LXR5cGVzL3RzMy40LypcIlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCIuL2NvZ25pdG8taWRlbnRpdHkuZC50c1wiLFxuICAgIFwiLi9jb2duaXRvLWlkZW50aXR5LmpzXCIsXG4gICAgXCIuL3NpZ25pbi5kLnRzXCIsXG4gICAgXCIuL3NpZ25pbi5qc1wiLFxuICAgIFwiLi9zc28tb2lkYy5kLnRzXCIsXG4gICAgXCIuL3Nzby1vaWRjLmpzXCIsXG4gICAgXCIuL3Nzby5kLnRzXCIsXG4gICAgXCIuL3Nzby5qc1wiLFxuICAgIFwiLi9zdHMuZC50c1wiLFxuICAgIFwiLi9zdHMuanNcIixcbiAgICBcImRpc3QtKi8qKlwiXG4gIF0sXG4gIFwiYnJvd3NlclwiOiB7XG4gICAgXCIuL2Rpc3QtZXMvc3VibW9kdWxlcy9jb2duaXRvLWlkZW50aXR5L3J1bnRpbWVDb25maWdcIjogXCIuL2Rpc3QtZXMvc3VibW9kdWxlcy9jb2duaXRvLWlkZW50aXR5L3J1bnRpbWVDb25maWcuYnJvd3NlclwiLFxuICAgIFwiLi9kaXN0LWVzL3N1Ym1vZHVsZXMvc2lnbmluL3J1bnRpbWVDb25maWdcIjogXCIuL2Rpc3QtZXMvc3VibW9kdWxlcy9zaWduaW4vcnVudGltZUNvbmZpZy5icm93c2VyXCIsXG4gICAgXCIuL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28tb2lkYy9ydW50aW1lQ29uZmlnXCI6IFwiLi9kaXN0LWVzL3N1Ym1vZHVsZXMvc3NvLW9pZGMvcnVudGltZUNvbmZpZy5icm93c2VyXCIsXG4gICAgXCIuL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28vcnVudGltZUNvbmZpZ1wiOiBcIi4vZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby9ydW50aW1lQ29uZmlnLmJyb3dzZXJcIixcbiAgICBcIi4vZGlzdC1lcy9zdWJtb2R1bGVzL3N0cy9ydW50aW1lQ29uZmlnXCI6IFwiLi9kaXN0LWVzL3N1Ym1vZHVsZXMvc3RzL3J1bnRpbWVDb25maWcuYnJvd3NlclwiXG4gIH0sXG4gIFwicmVhY3QtbmF0aXZlXCI6IHt9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2F3cy9hd3Mtc2RrLWpzLXYzL3RyZWUvbWFpbi9wYWNrYWdlcy9uZXN0ZWQtY2xpZW50c1wiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2F3cy9hd3Mtc2RrLWpzLXYzLmdpdFwiLFxuICAgIFwiZGlyZWN0b3J5XCI6IFwicGFja2FnZXMvbmVzdGVkLWNsaWVudHNcIlxuICB9LFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLi9wYWNrYWdlLmpzb25cIjogXCIuL3BhY2thZ2UuanNvblwiLFxuICAgIFwiLi9zc28tb2lkY1wiOiB7XG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0LXR5cGVzL3N1Ym1vZHVsZXMvc3NvLW9pZGMvaW5kZXguZC50c1wiLFxuICAgICAgXCJtb2R1bGVcIjogXCIuL2Rpc3QtZXMvc3VibW9kdWxlcy9zc28tb2lkYy9pbmRleC5qc1wiLFxuICAgICAgXCJub2RlXCI6IFwiLi9kaXN0LWNqcy9zdWJtb2R1bGVzL3Nzby1vaWRjL2luZGV4LmpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby1vaWRjL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QtY2pzL3N1Ym1vZHVsZXMvc3NvLW9pZGMvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3N0c1wiOiB7XG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0LXR5cGVzL3N1Ym1vZHVsZXMvc3RzL2luZGV4LmQudHNcIixcbiAgICAgIFwibW9kdWxlXCI6IFwiLi9kaXN0LWVzL3N1Ym1vZHVsZXMvc3RzL2luZGV4LmpzXCIsXG4gICAgICBcIm5vZGVcIjogXCIuL2Rpc3QtY2pzL3N1Ym1vZHVsZXMvc3RzL2luZGV4LmpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC1lcy9zdWJtb2R1bGVzL3N0cy9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0LWNqcy9zdWJtb2R1bGVzL3N0cy9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vc2lnbmluXCI6IHtcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QtdHlwZXMvc3VibW9kdWxlcy9zaWduaW4vaW5kZXguZC50c1wiLFxuICAgICAgXCJtb2R1bGVcIjogXCIuL2Rpc3QtZXMvc3VibW9kdWxlcy9zaWduaW4vaW5kZXguanNcIixcbiAgICAgIFwibm9kZVwiOiBcIi4vZGlzdC1janMvc3VibW9kdWxlcy9zaWduaW4vaW5kZXguanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0LWVzL3N1Ym1vZHVsZXMvc2lnbmluL2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QtY2pzL3N1Ym1vZHVsZXMvc2lnbmluL2luZGV4LmpzXCJcbiAgICB9LFxuICAgIFwiLi9jb2duaXRvLWlkZW50aXR5XCI6IHtcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QtdHlwZXMvc3VibW9kdWxlcy9jb2duaXRvLWlkZW50aXR5L2luZGV4LmQudHNcIixcbiAgICAgIFwibW9kdWxlXCI6IFwiLi9kaXN0LWVzL3N1Ym1vZHVsZXMvY29nbml0by1pZGVudGl0eS9pbmRleC5qc1wiLFxuICAgICAgXCJub2RlXCI6IFwiLi9kaXN0LWNqcy9zdWJtb2R1bGVzL2NvZ25pdG8taWRlbnRpdHkvaW5kZXguanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0LWVzL3N1Ym1vZHVsZXMvY29nbml0by1pZGVudGl0eS9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0LWNqcy9zdWJtb2R1bGVzL2NvZ25pdG8taWRlbnRpdHkvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3Nzb1wiOiB7XG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0LXR5cGVzL3N1Ym1vZHVsZXMvc3NvL2luZGV4LmQudHNcIixcbiAgICAgIFwibW9kdWxlXCI6IFwiLi9kaXN0LWVzL3N1Ym1vZHVsZXMvc3NvL2luZGV4LmpzXCIsXG4gICAgICBcIm5vZGVcIjogXCIuL2Rpc3QtY2pzL3N1Ym1vZHVsZXMvc3NvL2luZGV4LmpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC1lcy9zdWJtb2R1bGVzL3Nzby9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0LWNqcy9zdWJtb2R1bGVzL3Nzby9pbmRleC5qc1wiXG4gICAgfVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFRO0FBQUEsTUFDUixTQUFXO0FBQUEsTUFDWCxhQUFlO0FBQUEsTUFDZixNQUFRO0FBQUEsTUFDUixRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsTUFDVCxTQUFXO0FBQUEsUUFDVCxPQUFTO0FBQUEsUUFDVCxhQUFhO0FBQUEsUUFDYixZQUFZO0FBQUEsUUFDWixzQkFBc0I7QUFBQSxRQUN0QixlQUFlO0FBQUEsUUFDZix5QkFBeUI7QUFBQSxRQUN6QixPQUFTO0FBQUEsUUFDVCxNQUFRO0FBQUEsUUFDUixNQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxNQUNBLFNBQVc7QUFBQSxRQUNULE1BQVE7QUFBQSxNQUNWO0FBQUEsTUFDQSxhQUFlO0FBQUEsTUFDZixRQUFVO0FBQUEsUUFDUixNQUFRO0FBQUEsUUFDUixLQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsU0FBVztBQUFBLE1BQ1gsY0FBZ0I7QUFBQSxRQUNkLDhCQUE4QjtBQUFBLFFBQzlCLHlCQUF5QjtBQUFBLFFBQ3pCLGlCQUFpQjtBQUFBLFFBQ2pCLG1DQUFtQztBQUFBLFFBQ25DLDhCQUE4QjtBQUFBLFFBQzlCLDJDQUEyQztBQUFBLFFBQzNDLGtDQUFrQztBQUFBLFFBQ2xDLG1DQUFtQztBQUFBLFFBQ25DLGtCQUFrQjtBQUFBLFFBQ2xCLDJCQUEyQjtBQUFBLFFBQzNCLG9DQUFvQztBQUFBLFFBQ3BDLGlDQUFpQztBQUFBLFFBQ2pDLDJCQUEyQjtBQUFBLFFBQzNC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
