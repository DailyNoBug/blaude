function sharp() {
  throw new Error("sharp is unavailable in the leaked-src compatibility runtime.");
}

sharp.default = sharp;

export default sharp;
