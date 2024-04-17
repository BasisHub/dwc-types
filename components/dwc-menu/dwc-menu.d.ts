/**
 * @bbjIgnore
 * The `BBjMenu<dwc-menu>` provides methods for manipulating a UI menu control.
 *
 * @slot - The place where dwc-menuitem(s) should be placed
 *
 * @part control - The component's base wrapper.
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjMenu - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 *
 * @bbjControl BBjMenu
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjmenu/BBjMenu.htm?Highlight=BBjMenu
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcMenu {
    private controller;
    el: HTMLDwcMenuElement;
    /**	Specifies that the control should be disabled */
    disabled: boolean;
    onDisabledChanged(newDisabled: any): void;
    /** When true, the control has focus , blurred otherwise. The component will automatically update this property. */
    hasFocus: boolean;
    /** Specifies a short label for the control. */
    label: string;
    /** Sets the maximum number of rows that the menu will display. */
    maxRowCount: number;
    handleMaxRowCountChange(newMaxCount: any): void;
    /** Describes the menu placement. Setting this property updates the placement of all top-level dropdown items in the menu. */
    placement: 'right' | 'left' | 'top' | 'bottom';
    onPlacementChanged(newPlacement: any): void;
    /** Gives the menu a custom type attribute. */
    type: string;
    connectedCallback(): void;
    componentDidLoad(): void;
    handleItemFocused(): void;
    handleItemBlurred(): void;
    handleItemOpened(ev: CustomEvent): void;
    handleItemEnter(ev: CustomEvent): void;
    handleKeydown(ev: KeyboardEvent): Promise<void>;
    /** Sets focus on the control. */
    setFocus(): Promise<void>;
    /** Removes focus from the control. */
    removeFocus(): Promise<void>;
    /** Closes all dropdowns in the menu. */
    close(): Promise<void>;
    /** Forces the repositioning of all items' dropdowns in the menu. */
    reposition(): Promise<void>;
    /** Checks if given item is in this menu. Returns true when it exists, false otherwise. */
    hasItem(item: HTMLDwcMenuitemElement): Promise<boolean>;
    /** Gets the menu length. */
    length(): Promise<number>;
    private updateHeight;
    private handleSlotChange;
    private handleScroll;
    render(): any;
}
