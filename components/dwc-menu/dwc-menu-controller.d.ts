/**
 * @author Hyyan Abo Fakher
 */
export declare class DwcMenuController {
    el: HTMLElement;
    constructor(el: HTMLElement);
    setFocus(): Promise<void>;
    removeFocus(): Promise<void>;
    close(): void;
    getMenuItems(): HTMLDwcMenuitemElement[];
    getMenuItemsWithSeparators(): Array<HTMLDwcMenuitemElement | HTMLDwcSeparatorElement>;
    getNextItem(instance: HTMLDwcMenuitemElement): HTMLDwcMenuitemElement | null;
    getPreviousItem(instance: HTMLDwcMenuitemElement): HTMLDwcMenuitemElement | null;
    focusItem(instance: HTMLDwcMenuitemElement): Promise<void>;
    focusNextItem(instance: HTMLDwcMenuitemElement): Promise<HTMLDwcMenuitemElement>;
    focusPreviousItem(instance: any): Promise<HTMLDwcMenuitemElement>;
    closeDropdownsBut(item: HTMLDwcMenuitemElement): void;
    resetTabTraversable(): void;
    markFirstFocusableItem(): void;
    updateItemsProperties(properties?: object): void;
}
