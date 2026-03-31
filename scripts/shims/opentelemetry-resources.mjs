import { createRequire } from "module";

const require = createRequire(import.meta.url);
const resources = require("@opentelemetry/resources");

export const envDetector = resources.envDetector;
export const hostDetector = resources.hostDetector;
export const osDetector = resources.osDetector;
export const resourceFromAttributes = resources.resourceFromAttributes;
export default resources;
