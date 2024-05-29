import { FocusableElement } from 'tabbable';
export declare const traverseActiveElements: (activeElement?: Element | null) => Element | null;
export declare const getFirstTabbableElement: (el: HTMLElement, includeContainer?: boolean, shadowRoot?: boolean) => FocusableElement;
