/**
 * The payload of the slide event
 */
export interface BbjSliderSlideEventPayload {
    /** The current value */
    value: number;
    /** True when the user is still scrolling the control, false otherwise */
    isAdjusting: boolean;
}
