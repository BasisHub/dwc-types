/**
 * The payload of the slide event
 */
export interface DwcSliderSlideEventPayload {
    /** The current value */
    value: number;
    /** True when the user is still scrolling the control, false otherwise */
    isAdjusting: boolean;
}
