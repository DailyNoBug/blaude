class BaseColorRenderer {
  static render(input) {
    return typeof input === "string" ? input : String(input ?? "");
  }
}

export class ColorDiff extends BaseColorRenderer {}

export class ColorFile extends BaseColorRenderer {}

export function getSyntaxTheme() {
  return null;
}
