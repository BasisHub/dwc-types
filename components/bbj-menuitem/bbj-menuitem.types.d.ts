/**
 * Describes the payload of the bbj-menuitem click events.
 */
export type BbjMenuItemClickPayload = {
    checked: boolean;
    item: HTMLBbjMenuitemElement;
    isCtrl: boolean;
    isShift: boolean;
    originalEvent: MouseEvent | KeyboardEvent;
};
/**
 * Describes the payload of the bbj-menuitem mouse events.
 */
export type BbjMenuItemMousePayload = {
    originalEvent: MouseEvent;
};
