import { createRequire } from "module";

const require = createRequire(import.meta.url);
const constants = require("react-reconciler/constants.js");

export const ConcurrentRoot = constants.ConcurrentRoot;
export const ContinuousEventPriority = constants.ContinuousEventPriority;
export const DefaultEventPriority = constants.DefaultEventPriority;
export const DiscreteEventPriority = constants.DiscreteEventPriority;
export const IdleEventPriority = constants.IdleEventPriority;
export const LegacyRoot = constants.LegacyRoot;
export const NoEventPriority = constants.NoEventPriority;
export default constants;
