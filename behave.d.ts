declare interface BehaveOptions {
    textarea: HTMLElement;
    replaceTab?: boolean;
    softTabs?: boolean;
    tabSize?: number;
    autoOpen?: boolean;
    overwrite?: boolean;
    autoStrip?: boolean;
    autoIndent?: boolean;
    fence?: boolean;
}

declare class Behave {
    constructor(options: BehaveOptions);

    destroy(): void;
}
