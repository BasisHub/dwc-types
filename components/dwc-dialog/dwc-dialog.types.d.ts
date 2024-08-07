/**
 * An enum of the possible reasons for a dialog to be closed.
 */
export declare enum DwcDialogCloseReason {
    'API' = "API",
    'OUTSIDE_CLICK' = "OUTSIDE_CLICK",
    'ESCAPE' = "ESCAPE"
}
/**
 * The payload for the closed event.
 */
export type DwcDialogClosedPayload = {
    reason: DwcDialogCloseReason;
};
