import { PositioningStrategy, Placement, Modifier } from '@popperjs/core';
export interface PopperOptions {
    strategy?: PositioningStrategy;
    placement?: Placement;
    moveTo?: HTMLElement;
    restoreTo?: HTMLElement;
    transitionedElement?: HTMLElement;
    visibleClass?: string;
    modifiers?: Array<Partial<Modifier<any, any>>>;
    onBeforeOpen?: () => any;
    onAfterOpen?: () => any;
    onAfterRestore?: () => any;
    onTransitionEnd?: (event: TransitionEvent) => any;
}
