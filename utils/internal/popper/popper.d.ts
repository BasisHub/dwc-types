import { Instance as PopperInstance, VirtualElement } from '@popperjs/core';
import { PopperOptions } from './popper.types';
export default class Popper {
    originalPopper: PopperInstance;
    protected reference: Element | VirtualElement;
    protected popover: HTMLElement;
    protected options: PopperOptions;
    protected moved: boolean;
    protected _isVisible: boolean;
    constructor(reference: Element | VirtualElement, popover: HTMLElement, options?: PopperOptions);
    set isVisible(isVisible: boolean);
    get isVisible(): boolean;
    open(): Promise<Partial<import("@popperjs/core").State>>;
    close(): Promise<any>;
    update(): Promise<Partial<import("@popperjs/core").State>>;
    forceUpdate(): void;
    setOptions(options: PopperOptions): void;
    getOptions(): PopperOptions;
    destroy(): Promise<any>;
    protected handleAfterTransition(event: TransitionEvent): Promise<void>;
    protected move(): void;
    protected restore(): Promise<any>;
}
