/**
 * An enum of the possible reasons for a dialog to be closed.
 */
export declare enum BbjDialogCloseReason {
    'API' = "API",
    'OUTSIDE_CLICK' = "OUTSIDE_CLICK",
    'ESCAPE' = "ESCAPE"
}
/**
 * The payload for the closed event.
 */
export type BbjDialogClosedPayload = {
    reason: BbjDialogCloseReason;
};
