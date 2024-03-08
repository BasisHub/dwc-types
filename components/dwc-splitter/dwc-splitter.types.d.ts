/**
 * The payload of the resize event
 */
export type DwcSplitterResizePayload = {
    /** The current position */
    position: number;
    /** The current relative position */
    positionRelative: number;
    /** True when the user is still dragging the gutter, false otherwise */
    isAdjusting: boolean;
};
