/**
 * Check if the given element is visible in the given container
 *
 * @param el  The element to check
 * @param container  The parent to check against
 *
 * @returns  True if the element is visible in the parent, false otherwise
 */
export declare const isVisibleInContainer: (el: HTMLElement, container: HTMLElement) => boolean;
/**
 * Scroll the given element into view if it is not visible in the given container
 *
 * This function should be replaced with `Element.scrollIntoView` when the option
 * `scrollMode: "if-needed"` is supported by all browsers.
 *
 * @param el The element to scroll into view
 * @param container The parent to scroll
 * @param options The scrollIntoView options
 */
export declare const scrollIntoView: (el: HTMLElement, container: HTMLElement, options?: any) => void;
/**
 * Detects if the given content element is overflowing in the specified direction within its container.
 *
 * @param content The content element whose overflow status is to be determined.
 * @param container The container element against which to check for overflow.
 * @param direction The direction ('horizontal' or 'vertical') in which to check for overflow.
 *
 * @returns A string indicating the overflow status: 'both-horizontal', 'left', 'right', 'both-vertical', 'bottom', 'top', or 'none'.
 */
export declare function detectOverflow(content: any, container: any, direction: 'horizontal' | 'vertical'): "none" | "left" | "right" | "top" | "bottom" | "both-horizontal" | "both-vertical";
/**
 * Determines whether the given element is scrollable.
 *
 * @param el The element to check for scrollability.
 * @returns True if the element is scrollable, false otherwise.
 */
export declare const isScrollable: (el: any) => boolean;
/**
 * Calculates the offset of an element relative to a specified parent element.
 *
 * @param element The child element whose offset is to be calculated.
 * @param parent The parent element relative to which the offset is calculated.
 *
 * @returns An object containing the top and left offset values.
 */
export declare function getOffset(element: HTMLElement, parent: HTMLElement): {
    top: number;
    left: number;
};
/**
 * Waits for an element, specified by a selector, to be added to a given root element.
 * The function returns a promise that resolves when the element is added.
 *
 * @param {ShadowRoot | HTMLElement} root - The root element in which to search for the specified element.
 *                                          This can be a standard HTMLElement or a ShadowRoot for
 *                                          encapsulated shadow DOM queries.
 * @param {string} selector - The selector of the element to wait for.
 *
 * @returns {Promise<HTMLElement>} A promise that resolves with the added element.
 *
 * @throws {Error} If the element with the specified selector is not added within the root.
 */
export declare const waitForElementToBeAdded: (root: ShadowRoot | HTMLElement, selector: string) => Promise<unknown>;
