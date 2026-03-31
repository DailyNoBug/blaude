import { createRequire } from "module";

const require = createRequire(import.meta.url);
const semantic = require("@opentelemetry/semantic-conventions");

export const ATTR_SERVICE_NAME = semantic.ATTR_SERVICE_NAME ?? "service.name";
export const ATTR_SERVICE_VERSION =
  semantic.ATTR_SERVICE_VERSION ?? "service.version";
export const SEMRESATTRS_HOST_ARCH =
  semantic.SEMRESATTRS_HOST_ARCH ?? "host.arch";
export default semantic;
