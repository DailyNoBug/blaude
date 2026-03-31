import { createRequire } from "module";

const require = createRequire(import.meta.url);
const reconciler = require("react-reconciler");

export default reconciler.default ?? reconciler;
