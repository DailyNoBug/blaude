class BaseColorRenderer {
  constructor(...args) {
    this.args = args;
  }

  static render(input) {
    return typeof input === "string" ? input : String(input ?? "");
  }

  render() {
    return null;
  }
}

export class ColorDiff extends BaseColorRenderer {}

export class ColorFile extends BaseColorRenderer {}

export function getSyntaxTheme() {
  return null;
}
