/**
 * @author Hyyan Abo Fakher
 */
export declare class BbjMenuController {
    el: HTMLElement;
    constructor(el: HTMLElement);
    setFocus(): Promise<void>;
    removeFocus(): Promise<void>;
    close(): void;
    getMenuItems(): HTMLBbjMenuitemElement[];
    getMenuItemsWithSeparators(): Array<HTMLBbjMenuitemElement | HTMLBbjSeparatorElement>;
    getNextItem(instance: HTMLBbjMenuitemElement): HTMLBbjMenuitemElement | null;
    getPreviousItem(instance: HTMLBbjMenuitemElement): HTMLBbjMenuitemElement | null;
    focusItem(instance: HTMLBbjMenuitemElement): Promise<void>;
    focusNextItem(instance: HTMLBbjMenuitemElement): Promise<HTMLBbjMenuitemElement>;
    focusPreviousItem(instance: any): Promise<HTMLBbjMenuitemElement>;
    closeDropdownsBut(item: HTMLBbjMenuitemElement): void;
    resetTabTraversable(): void;
    markFirstFocusableItem(): void;
    updateItemsProperties(properties?: object): void;
}
