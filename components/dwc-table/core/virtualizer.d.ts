export type VirtualizeOptions = {
    /** The total number of items. */
    count: number;
    /** The current scroll position. */
    scrollPosition: number;
    /** The height of each item. */
    itemHeight: number;
    /** The height of the container. */
    containerHeight: number;
    /** The number of items to render outside of the visible area. */
    overscan?: number;
};
export type VirtualizeResult = {
    /** The index of the first item to render. */
    start: number;
    /** The index of the last item to render. */
    end: number;
    /** The height of the filler element above the first item. */
    topFillerHeight: number;
    /** The height of the filler element below the last item. */
    bottomFillerHeight: number;
};
/**
 * Calculate the range of items that should be rendered based on the current scroll position.
 *
 * @param options - The options for virtualization.
 */
declare const virtualize: (options: VirtualizeOptions) => VirtualizeResult;
declare const scrollToIndex: (options: {
    index: number;
    itemHeight: number;
}) => number;
export { virtualize, scrollToIndex };
