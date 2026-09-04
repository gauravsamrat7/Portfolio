declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | Element | string[], vars?: Record<string, unknown>);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}