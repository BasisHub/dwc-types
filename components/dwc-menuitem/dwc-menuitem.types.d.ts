/**
 * Describes the payload of the dwc-menuitem click events.
 */
export type DwcMenuItemClickPayload = {
    checked: boolean;
    item: HTMLDwcMenuitemElement;
    isCtrl: boolean;
    isShift: boolean;
    originalEvent: MouseEvent | KeyboardEvent;
};
/**
 * Describes the payload of the dwc-menuitem mouse events.
 */
export type DwcMenuItemMousePayload = {
    originalEvent: MouseEvent;
};
