#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  httpAuthSchemes_exports,
  init_httpAuthSchemes
} from "./chunk-HVPHPOYV.mjs";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-5PQQKMHH.mjs";
import {
  client_exports,
  init_client
} from "./chunk-MTY4OASM.mjs";
import {
  require_dist_cjs
} from "./chunk-NE3ECB5D.mjs";
import {
  __commonJS,
  __require,
  __toCommonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@aws-sdk+token-providers@3.1021.0/node_modules/@aws-sdk/token-providers/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "node_modules/.pnpm/@aws-sdk+token-providers@3.1021.0/node_modules/@aws-sdk/token-providers/dist-cjs/index.js"(exports) {
    "use strict";
    var client = (init_client(), __toCommonJS(client_exports));
    var httpAuthSchemes = (init_httpAuthSchemes(), __toCommonJS(httpAuthSchemes_exports));
    var propertyProvider = require_dist_cjs();
    var sharedIniFileLoader = require_dist_cjs2();
    var node_fs = __require("node:fs");
    var fromEnvSigningName = ({ logger, signingName } = {}) => async () => {
      logger?.debug?.("@aws-sdk/token-providers - fromEnvSigningName");
      if (!signingName) {
        throw new propertyProvider.TokenProviderError("Please pass 'signingName' to compute environment variable key", { logger });
      }
      const bearerTokenKey = httpAuthSchemes.getBearerTokenEnvKey(signingName);
      if (!(bearerTokenKey in process.env)) {
        throw new propertyProvider.TokenProviderError(`Token not present in '${bearerTokenKey}' environment variable`, { logger });
      }
      const token = { token: process.env[bearerTokenKey] };
      client.setTokenFeature(token, "BEARER_SERVICE_ENV_VARS", "3");
      return token;
    };
    var EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
    var REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;
    var getSsoOidcClient = async (ssoRegion, init = {}, callerClientConfig) => {
      const { SSOOIDCClient } = await import("./sso-oidc-QPBLHSFJ.mjs");
      const coalesce = (prop) => init.clientConfig?.[prop] ?? init.parentClientConfig?.[prop] ?? callerClientConfig?.[prop];
      const ssoOidcClient = new SSOOIDCClient(Object.assign({}, init.clientConfig ?? {}, {
        region: ssoRegion ?? init.clientConfig?.region,
        logger: coalesce("logger"),
        userAgentAppId: coalesce("userAgentAppId")
      }));
      return ssoOidcClient;
    };
    var getNewSsoOidcToken = async (ssoToken, ssoRegion, init = {}, callerClientConfig) => {
      const { CreateTokenCommand } = await import("./sso-oidc-QPBLHSFJ.mjs");
      const ssoOidcClient = await getSsoOidcClient(ssoRegion, init, callerClientConfig);
      return ssoOidcClient.send(new CreateTokenCommand({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token"
      }));
    };
    var validateTokenExpiry = (token) => {
      if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new propertyProvider.TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
      }
    };
    var validateTokenKey = (key, value, forRefresh = false) => {
      if (typeof value === "undefined") {
        throw new propertyProvider.TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
      }
    };
    var { writeFile } = node_fs.promises;
    var writeSSOTokenToFile = (id, ssoToken) => {
      const tokenFilepath = sharedIniFileLoader.getSSOTokenFilepath(id);
      const tokenString = JSON.stringify(ssoToken, null, 2);
      return writeFile(tokenFilepath, tokenString);
    };
    var lastRefreshAttemptTime = /* @__PURE__ */ new Date(0);
    var fromSso = (init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/token-providers - fromSso");
      const profiles = await sharedIniFileLoader.parseKnownFiles(init);
      const profileName = sharedIniFileLoader.getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      });
      const profile = profiles[profileName];
      if (!profile) {
        throw new propertyProvider.TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
      } else if (!profile["sso_session"]) {
        throw new propertyProvider.TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
      }
      const ssoSessionName = profile["sso_session"];
      const ssoSessions = await sharedIniFileLoader.loadSsoSessionData(init);
      const ssoSession = ssoSessions[ssoSessionName];
      if (!ssoSession) {
        throw new propertyProvider.TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
      }
      for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
          throw new propertyProvider.TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
      }
      ssoSession["sso_start_url"];
      const ssoRegion = ssoSession["sso_region"];
      let ssoToken;
      try {
        ssoToken = await sharedIniFileLoader.getSSOTokenFromFile(ssoSessionName);
      } catch (e) {
        throw new propertyProvider.TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
      }
      validateTokenKey("accessToken", ssoToken.accessToken);
      validateTokenKey("expiresAt", ssoToken.expiresAt);
      const { accessToken, expiresAt } = ssoToken;
      const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
      if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
        return existingToken;
      }
      if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1e3) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
      validateTokenKey("clientId", ssoToken.clientId, true);
      validateTokenKey("clientSecret", ssoToken.clientSecret, true);
      validateTokenKey("refreshToken", ssoToken.refreshToken, true);
      try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion, init, callerClientConfig);
        validateTokenKey("accessToken", newSsoOidcToken.accessToken);
        validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1e3);
        try {
          await writeSSOTokenToFile(ssoSessionName, {
            ...ssoToken,
            accessToken: newSsoOidcToken.accessToken,
            expiresAt: newTokenExpiration.toISOString(),
            refreshToken: newSsoOidcToken.refreshToken
          });
        } catch (error) {
        }
        return {
          token: newSsoOidcToken.accessToken,
          expiration: newTokenExpiration
        };
      } catch (error) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
    };
    var fromStatic = ({ token, logger }) => async () => {
      logger?.debug("@aws-sdk/token-providers - fromStatic");
      if (!token || !token.token) {
        throw new propertyProvider.TokenProviderError(`Please pass a valid token to fromStatic`, false);
      }
      return token;
    };
    var nodeProvider = (init = {}) => propertyProvider.memoize(propertyProvider.chain(fromSso(init), async () => {
      throw new propertyProvider.TokenProviderError("Could not load token from any providers", false);
    }), (token) => token.expiration !== void 0 && token.expiration.getTime() - Date.now() < 3e5, (token) => token.expiration !== void 0);
    exports.fromEnvSigningName = fromEnvSigningName;
    exports.fromSso = fromSso;
    exports.fromStatic = fromStatic;
    exports.nodeProvider = nodeProvider;
  }
});

export {
  require_dist_cjs3 as require_dist_cjs
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhd3Mtc2RrK3Rva2VuLXByb3ZpZGVyc0AzLjEwMjEuMC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdG9rZW4tcHJvdmlkZXJzL2Rpc3QtY2pzL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCdAYXdzLXNkay9jb3JlL2NsaWVudCcpO1xudmFyIGh0dHBBdXRoU2NoZW1lcyA9IHJlcXVpcmUoJ0Bhd3Mtc2RrL2NvcmUvaHR0cEF1dGhTY2hlbWVzJyk7XG52YXIgcHJvcGVydHlQcm92aWRlciA9IHJlcXVpcmUoJ0BzbWl0aHkvcHJvcGVydHktcHJvdmlkZXInKTtcbnZhciBzaGFyZWRJbmlGaWxlTG9hZGVyID0gcmVxdWlyZSgnQHNtaXRoeS9zaGFyZWQtaW5pLWZpbGUtbG9hZGVyJyk7XG52YXIgbm9kZV9mcyA9IHJlcXVpcmUoJ25vZGU6ZnMnKTtcblxuY29uc3QgZnJvbUVudlNpZ25pbmdOYW1lID0gKHsgbG9nZ2VyLCBzaWduaW5nTmFtZSB9ID0ge30pID0+IGFzeW5jICgpID0+IHtcbiAgICBsb2dnZXI/LmRlYnVnPy4oXCJAYXdzLXNkay90b2tlbi1wcm92aWRlcnMgLSBmcm9tRW52U2lnbmluZ05hbWVcIik7XG4gICAgaWYgKCFzaWduaW5nTmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5Ub2tlblByb3ZpZGVyRXJyb3IoXCJQbGVhc2UgcGFzcyAnc2lnbmluZ05hbWUnIHRvIGNvbXB1dGUgZW52aXJvbm1lbnQgdmFyaWFibGUga2V5XCIsIHsgbG9nZ2VyIH0pO1xuICAgIH1cbiAgICBjb25zdCBiZWFyZXJUb2tlbktleSA9IGh0dHBBdXRoU2NoZW1lcy5nZXRCZWFyZXJUb2tlbkVudktleShzaWduaW5nTmFtZSk7XG4gICAgaWYgKCEoYmVhcmVyVG9rZW5LZXkgaW4gcHJvY2Vzcy5lbnYpKSB7XG4gICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLlRva2VuUHJvdmlkZXJFcnJvcihgVG9rZW4gbm90IHByZXNlbnQgaW4gJyR7YmVhcmVyVG9rZW5LZXl9JyBlbnZpcm9ubWVudCB2YXJpYWJsZWAsIHsgbG9nZ2VyIH0pO1xuICAgIH1cbiAgICBjb25zdCB0b2tlbiA9IHsgdG9rZW46IHByb2Nlc3MuZW52W2JlYXJlclRva2VuS2V5XSB9O1xuICAgIGNsaWVudC5zZXRUb2tlbkZlYXR1cmUodG9rZW4sIFwiQkVBUkVSX1NFUlZJQ0VfRU5WX1ZBUlNcIiwgXCIzXCIpO1xuICAgIHJldHVybiB0b2tlbjtcbn07XG5cbmNvbnN0IEVYUElSRV9XSU5ET1dfTVMgPSA1ICogNjAgKiAxMDAwO1xuY29uc3QgUkVGUkVTSF9NRVNTQUdFID0gYFRvIHJlZnJlc2ggdGhpcyBTU08gc2Vzc2lvbiBydW4gJ2F3cyBzc28gbG9naW4nIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgcHJvZmlsZS5gO1xuXG5jb25zdCBnZXRTc29PaWRjQ2xpZW50ID0gYXN5bmMgKHNzb1JlZ2lvbiwgaW5pdCA9IHt9LCBjYWxsZXJDbGllbnRDb25maWcpID0+IHtcbiAgICBjb25zdCB7IFNTT09JRENDbGllbnQgfSA9IGF3YWl0IGltcG9ydCgnQGF3cy1zZGsvbmVzdGVkLWNsaWVudHMvc3NvLW9pZGMnKTtcbiAgICBjb25zdCBjb2FsZXNjZSA9IChwcm9wKSA9PiBpbml0LmNsaWVudENvbmZpZz8uW3Byb3BdID8/IGluaXQucGFyZW50Q2xpZW50Q29uZmlnPy5bcHJvcF0gPz8gY2FsbGVyQ2xpZW50Q29uZmlnPy5bcHJvcF07XG4gICAgY29uc3Qgc3NvT2lkY0NsaWVudCA9IG5ldyBTU09PSURDQ2xpZW50KE9iamVjdC5hc3NpZ24oe30sIGluaXQuY2xpZW50Q29uZmlnID8/IHt9LCB7XG4gICAgICAgIHJlZ2lvbjogc3NvUmVnaW9uID8/IGluaXQuY2xpZW50Q29uZmlnPy5yZWdpb24sXG4gICAgICAgIGxvZ2dlcjogY29hbGVzY2UoXCJsb2dnZXJcIiksXG4gICAgICAgIHVzZXJBZ2VudEFwcElkOiBjb2FsZXNjZShcInVzZXJBZ2VudEFwcElkXCIpLFxuICAgIH0pKTtcbiAgICByZXR1cm4gc3NvT2lkY0NsaWVudDtcbn07XG5cbmNvbnN0IGdldE5ld1Nzb09pZGNUb2tlbiA9IGFzeW5jIChzc29Ub2tlbiwgc3NvUmVnaW9uLCBpbml0ID0ge30sIGNhbGxlckNsaWVudENvbmZpZykgPT4ge1xuICAgIGNvbnN0IHsgQ3JlYXRlVG9rZW5Db21tYW5kIH0gPSBhd2FpdCBpbXBvcnQoJ0Bhd3Mtc2RrL25lc3RlZC1jbGllbnRzL3Nzby1vaWRjJyk7XG4gICAgY29uc3Qgc3NvT2lkY0NsaWVudCA9IGF3YWl0IGdldFNzb09pZGNDbGllbnQoc3NvUmVnaW9uLCBpbml0LCBjYWxsZXJDbGllbnRDb25maWcpO1xuICAgIHJldHVybiBzc29PaWRjQ2xpZW50LnNlbmQobmV3IENyZWF0ZVRva2VuQ29tbWFuZCh7XG4gICAgICAgIGNsaWVudElkOiBzc29Ub2tlbi5jbGllbnRJZCxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBzc29Ub2tlbi5jbGllbnRTZWNyZXQsXG4gICAgICAgIHJlZnJlc2hUb2tlbjogc3NvVG9rZW4ucmVmcmVzaFRva2VuLFxuICAgICAgICBncmFudFR5cGU6IFwicmVmcmVzaF90b2tlblwiLFxuICAgIH0pKTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlVG9rZW5FeHBpcnkgPSAodG9rZW4pID0+IHtcbiAgICBpZiAodG9rZW4uZXhwaXJhdGlvbiAmJiB0b2tlbi5leHBpcmF0aW9uLmdldFRpbWUoKSA8IERhdGUubm93KCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuVG9rZW5Qcm92aWRlckVycm9yKGBUb2tlbiBpcyBleHBpcmVkLiAke1JFRlJFU0hfTUVTU0FHRX1gLCBmYWxzZSk7XG4gICAgfVxufTtcblxuY29uc3QgdmFsaWRhdGVUb2tlbktleSA9IChrZXksIHZhbHVlLCBmb3JSZWZyZXNoID0gZmFsc2UpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLlRva2VuUHJvdmlkZXJFcnJvcihgVmFsdWUgbm90IHByZXNlbnQgZm9yICcke2tleX0nIGluIFNTTyBUb2tlbiR7Zm9yUmVmcmVzaCA/IFwiLiBDYW5ub3QgcmVmcmVzaFwiIDogXCJcIn0uICR7UkVGUkVTSF9NRVNTQUdFfWAsIGZhbHNlKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IHdyaXRlRmlsZSB9ID0gbm9kZV9mcy5wcm9taXNlcztcbmNvbnN0IHdyaXRlU1NPVG9rZW5Ub0ZpbGUgPSAoaWQsIHNzb1Rva2VuKSA9PiB7XG4gICAgY29uc3QgdG9rZW5GaWxlcGF0aCA9IHNoYXJlZEluaUZpbGVMb2FkZXIuZ2V0U1NPVG9rZW5GaWxlcGF0aChpZCk7XG4gICAgY29uc3QgdG9rZW5TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShzc29Ub2tlbiwgbnVsbCwgMik7XG4gICAgcmV0dXJuIHdyaXRlRmlsZSh0b2tlbkZpbGVwYXRoLCB0b2tlblN0cmluZyk7XG59O1xuXG5jb25zdCBsYXN0UmVmcmVzaEF0dGVtcHRUaW1lID0gbmV3IERhdGUoMCk7XG5jb25zdCBmcm9tU3NvID0gKGluaXQgPSB7fSkgPT4gYXN5bmMgKHsgY2FsbGVyQ2xpZW50Q29uZmlnIH0gPSB7fSkgPT4ge1xuICAgIGluaXQubG9nZ2VyPy5kZWJ1ZyhcIkBhd3Mtc2RrL3Rva2VuLXByb3ZpZGVycyAtIGZyb21Tc29cIik7XG4gICAgY29uc3QgcHJvZmlsZXMgPSBhd2FpdCBzaGFyZWRJbmlGaWxlTG9hZGVyLnBhcnNlS25vd25GaWxlcyhpbml0KTtcbiAgICBjb25zdCBwcm9maWxlTmFtZSA9IHNoYXJlZEluaUZpbGVMb2FkZXIuZ2V0UHJvZmlsZU5hbWUoe1xuICAgICAgICBwcm9maWxlOiBpbml0LnByb2ZpbGUgPz8gY2FsbGVyQ2xpZW50Q29uZmlnPy5wcm9maWxlLFxuICAgIH0pO1xuICAgIGNvbnN0IHByb2ZpbGUgPSBwcm9maWxlc1twcm9maWxlTmFtZV07XG4gICAgaWYgKCFwcm9maWxlKSB7XG4gICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLlRva2VuUHJvdmlkZXJFcnJvcihgUHJvZmlsZSAnJHtwcm9maWxlTmFtZX0nIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiBzaGFyZWQgY3JlZGVudGlhbHMgZmlsZS5gLCBmYWxzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFwcm9maWxlW1wic3NvX3Nlc3Npb25cIl0pIHtcbiAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuVG9rZW5Qcm92aWRlckVycm9yKGBQcm9maWxlICcke3Byb2ZpbGVOYW1lfScgaXMgbWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSAnc3NvX3Nlc3Npb24nLmApO1xuICAgIH1cbiAgICBjb25zdCBzc29TZXNzaW9uTmFtZSA9IHByb2ZpbGVbXCJzc29fc2Vzc2lvblwiXTtcbiAgICBjb25zdCBzc29TZXNzaW9ucyA9IGF3YWl0IHNoYXJlZEluaUZpbGVMb2FkZXIubG9hZFNzb1Nlc3Npb25EYXRhKGluaXQpO1xuICAgIGNvbnN0IHNzb1Nlc3Npb24gPSBzc29TZXNzaW9uc1tzc29TZXNzaW9uTmFtZV07XG4gICAgaWYgKCFzc29TZXNzaW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLlRva2VuUHJvdmlkZXJFcnJvcihgU3NvIHNlc3Npb24gJyR7c3NvU2Vzc2lvbk5hbWV9JyBjb3VsZCBub3QgYmUgZm91bmQgaW4gc2hhcmVkIGNyZWRlbnRpYWxzIGZpbGUuYCwgZmFsc2UpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHNzb1Nlc3Npb25SZXF1aXJlZEtleSBvZiBbXCJzc29fc3RhcnRfdXJsXCIsIFwic3NvX3JlZ2lvblwiXSkge1xuICAgICAgICBpZiAoIXNzb1Nlc3Npb25bc3NvU2Vzc2lvblJlcXVpcmVkS2V5XSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuVG9rZW5Qcm92aWRlckVycm9yKGBTc28gc2Vzc2lvbiAnJHtzc29TZXNzaW9uTmFtZX0nIGlzIG1pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgJyR7c3NvU2Vzc2lvblJlcXVpcmVkS2V5fScuYCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNzb1Nlc3Npb25bXCJzc29fc3RhcnRfdXJsXCJdO1xuICAgIGNvbnN0IHNzb1JlZ2lvbiA9IHNzb1Nlc3Npb25bXCJzc29fcmVnaW9uXCJdO1xuICAgIGxldCBzc29Ub2tlbjtcbiAgICB0cnkge1xuICAgICAgICBzc29Ub2tlbiA9IGF3YWl0IHNoYXJlZEluaUZpbGVMb2FkZXIuZ2V0U1NPVG9rZW5Gcm9tRmlsZShzc29TZXNzaW9uTmFtZSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBwcm9wZXJ0eVByb3ZpZGVyLlRva2VuUHJvdmlkZXJFcnJvcihgVGhlIFNTTyBzZXNzaW9uIHRva2VuIGFzc29jaWF0ZWQgd2l0aCBwcm9maWxlPSR7cHJvZmlsZU5hbWV9IHdhcyBub3QgZm91bmQgb3IgaXMgaW52YWxpZC4gJHtSRUZSRVNIX01FU1NBR0V9YCwgZmFsc2UpO1xuICAgIH1cbiAgICB2YWxpZGF0ZVRva2VuS2V5KFwiYWNjZXNzVG9rZW5cIiwgc3NvVG9rZW4uYWNjZXNzVG9rZW4pO1xuICAgIHZhbGlkYXRlVG9rZW5LZXkoXCJleHBpcmVzQXRcIiwgc3NvVG9rZW4uZXhwaXJlc0F0KTtcbiAgICBjb25zdCB7IGFjY2Vzc1Rva2VuLCBleHBpcmVzQXQgfSA9IHNzb1Rva2VuO1xuICAgIGNvbnN0IGV4aXN0aW5nVG9rZW4gPSB7IHRva2VuOiBhY2Nlc3NUb2tlbiwgZXhwaXJhdGlvbjogbmV3IERhdGUoZXhwaXJlc0F0KSB9O1xuICAgIGlmIChleGlzdGluZ1Rva2VuLmV4cGlyYXRpb24uZ2V0VGltZSgpIC0gRGF0ZS5ub3coKSA+IEVYUElSRV9XSU5ET1dfTVMpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nVG9rZW47XG4gICAgfVxuICAgIGlmIChEYXRlLm5vdygpIC0gbGFzdFJlZnJlc2hBdHRlbXB0VGltZS5nZXRUaW1lKCkgPCAzMCAqIDEwMDApIHtcbiAgICAgICAgdmFsaWRhdGVUb2tlbkV4cGlyeShleGlzdGluZ1Rva2VuKTtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nVG9rZW47XG4gICAgfVxuICAgIHZhbGlkYXRlVG9rZW5LZXkoXCJjbGllbnRJZFwiLCBzc29Ub2tlbi5jbGllbnRJZCwgdHJ1ZSk7XG4gICAgdmFsaWRhdGVUb2tlbktleShcImNsaWVudFNlY3JldFwiLCBzc29Ub2tlbi5jbGllbnRTZWNyZXQsIHRydWUpO1xuICAgIHZhbGlkYXRlVG9rZW5LZXkoXCJyZWZyZXNoVG9rZW5cIiwgc3NvVG9rZW4ucmVmcmVzaFRva2VuLCB0cnVlKTtcbiAgICB0cnkge1xuICAgICAgICBsYXN0UmVmcmVzaEF0dGVtcHRUaW1lLnNldFRpbWUoRGF0ZS5ub3coKSk7XG4gICAgICAgIGNvbnN0IG5ld1Nzb09pZGNUb2tlbiA9IGF3YWl0IGdldE5ld1Nzb09pZGNUb2tlbihzc29Ub2tlbiwgc3NvUmVnaW9uLCBpbml0LCBjYWxsZXJDbGllbnRDb25maWcpO1xuICAgICAgICB2YWxpZGF0ZVRva2VuS2V5KFwiYWNjZXNzVG9rZW5cIiwgbmV3U3NvT2lkY1Rva2VuLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgdmFsaWRhdGVUb2tlbktleShcImV4cGlyZXNJblwiLCBuZXdTc29PaWRjVG9rZW4uZXhwaXJlc0luKTtcbiAgICAgICAgY29uc3QgbmV3VG9rZW5FeHBpcmF0aW9uID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIG5ld1Nzb09pZGNUb2tlbi5leHBpcmVzSW4gKiAxMDAwKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHdyaXRlU1NPVG9rZW5Ub0ZpbGUoc3NvU2Vzc2lvbk5hbWUsIHtcbiAgICAgICAgICAgICAgICAuLi5zc29Ub2tlbixcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogbmV3U3NvT2lkY1Rva2VuLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgICAgIGV4cGlyZXNBdDogbmV3VG9rZW5FeHBpcmF0aW9uLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBuZXdTc29PaWRjVG9rZW4ucmVmcmVzaFRva2VuLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRva2VuOiBuZXdTc29PaWRjVG9rZW4uYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBuZXdUb2tlbkV4cGlyYXRpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICB2YWxpZGF0ZVRva2VuRXhwaXJ5KGV4aXN0aW5nVG9rZW4pO1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdUb2tlbjtcbiAgICB9XG59O1xuXG5jb25zdCBmcm9tU3RhdGljID0gKHsgdG9rZW4sIGxvZ2dlciB9KSA9PiBhc3luYyAoKSA9PiB7XG4gICAgbG9nZ2VyPy5kZWJ1ZyhcIkBhd3Mtc2RrL3Rva2VuLXByb3ZpZGVycyAtIGZyb21TdGF0aWNcIik7XG4gICAgaWYgKCF0b2tlbiB8fCAhdG9rZW4udG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IHByb3BlcnR5UHJvdmlkZXIuVG9rZW5Qcm92aWRlckVycm9yKGBQbGVhc2UgcGFzcyBhIHZhbGlkIHRva2VuIHRvIGZyb21TdGF0aWNgLCBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbjtcbn07XG5cbmNvbnN0IG5vZGVQcm92aWRlciA9IChpbml0ID0ge30pID0+IHByb3BlcnR5UHJvdmlkZXIubWVtb2l6ZShwcm9wZXJ0eVByb3ZpZGVyLmNoYWluKGZyb21Tc28oaW5pdCksIGFzeW5jICgpID0+IHtcbiAgICB0aHJvdyBuZXcgcHJvcGVydHlQcm92aWRlci5Ub2tlblByb3ZpZGVyRXJyb3IoXCJDb3VsZCBub3QgbG9hZCB0b2tlbiBmcm9tIGFueSBwcm92aWRlcnNcIiwgZmFsc2UpO1xufSksICh0b2tlbikgPT4gdG9rZW4uZXhwaXJhdGlvbiAhPT0gdW5kZWZpbmVkICYmIHRva2VuLmV4cGlyYXRpb24uZ2V0VGltZSgpIC0gRGF0ZS5ub3coKSA8IDMwMDAwMCwgKHRva2VuKSA9PiB0b2tlbi5leHBpcmF0aW9uICE9PSB1bmRlZmluZWQpO1xuXG5leHBvcnRzLmZyb21FbnZTaWduaW5nTmFtZSA9IGZyb21FbnZTaWduaW5nTmFtZTtcbmV4cG9ydHMuZnJvbVNzbyA9IGZyb21Tc287XG5leHBvcnRzLmZyb21TdGF0aWMgPSBmcm9tU3RhdGljO1xuZXhwb3J0cy5ub2RlUHJvdmlkZXIgPSBub2RlUHJvdmlkZXI7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBO0FBQUE7QUFFQSxRQUFJLFNBQVM7QUFDYixRQUFJLGtCQUFrQjtBQUN0QixRQUFJLG1CQUFtQjtBQUN2QixRQUFJLHNCQUFzQjtBQUMxQixRQUFJLFVBQVUsVUFBUSxTQUFTO0FBRS9CLFFBQU0scUJBQXFCLENBQUMsRUFBRSxRQUFRLFlBQVksSUFBSSxDQUFDLE1BQU0sWUFBWTtBQUNyRSxjQUFRLFFBQVEsK0NBQStDO0FBQy9ELFVBQUksQ0FBQyxhQUFhO0FBQ2QsY0FBTSxJQUFJLGlCQUFpQixtQkFBbUIsaUVBQWlFLEVBQUUsT0FBTyxDQUFDO0FBQUEsTUFDN0g7QUFDQSxZQUFNLGlCQUFpQixnQkFBZ0IscUJBQXFCLFdBQVc7QUFDdkUsVUFBSSxFQUFFLGtCQUFrQixRQUFRLE1BQU07QUFDbEMsY0FBTSxJQUFJLGlCQUFpQixtQkFBbUIseUJBQXlCLGNBQWMsMEJBQTBCLEVBQUUsT0FBTyxDQUFDO0FBQUEsTUFDN0g7QUFDQSxZQUFNLFFBQVEs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
