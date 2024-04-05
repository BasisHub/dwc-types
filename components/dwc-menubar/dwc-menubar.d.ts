/**
 * The `BBjMenuBar<dwc-menubar>` provides methods for manipulating a UI menu bar control.
 *
 * @slot - The place where dwc-menuitem(s) should be placed
 *
 * @part control - The component's base wrapper
 * @part items-wrapper - A wrapper around the real items container. Used for scrolling
 * @part items - The items container
 * @part advancer - The button which scrolls left or right
 * @part advancer-left - The button which scrolls left
 * @part advancer-right - The button which scrolls right
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjMenu - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 *
 * @bbjControl BBjMenuBar
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjmenubar/BBjMenuBar.htm?Highlight=BBjMenuBar
 *
 * @bbjMessage SetMenuBarMessage
 * @bbjMessage SetEnabledMessage
 * @bbjMessage InsertMenuItemMessage
 * @bbjMessage InsertSeparatorMessage
 * @bbjMessage RemoveMenuItemMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcMenubar {
    private controller;
    private $itemsWrapperEl;
    private $itemsEl;
    private ticking;
    private resizeObserver;
    el: HTMLDwcMenubarElement;
    canScrollLeft: boolean;
    canScrollRight: boolean;
    /**	Specifies that the control should be disabled. */
    disabled: boolean;
    onDisabledChanged(newDisabled: any): void;
    /**
     * The distance in pixels from which to offset the dropdown items away from the menubar.
     * Setting this property will affect the top-level dropdown items only.
     */
    distance: number;
    onDistanceChanged(newDistance: any): void;
    /** When true, the control has focus, blurred otherwise. The component will automatically update this property. */
    hasFocus: boolean;
    /**
     * When true then the chevron icon in the menubar items will be hidden.
     * Setting this property will affect the top-level dropdown items only.
     */
    hideChevronIcon: boolean;
    onHideChevronIconChanged(newHideChevronIcon: any): void;
    /**
     * When true then the hotkey's label will be hidden, visible otherwise.
     * Setting this property will affect the top-level dropdown items only.
     */
    hideHotkeyLabel: boolean;
    onHideAccelerator(newHideHotkeyLabel: any): void;
    /** Specifies a short label for the control. */
    label: string;
    /**
     * Describes the dropdown items placement.
     * Setting this property will affect the top-level dropdown items only.
     */
    placement: 'right' | 'left' | 'top' | 'bottom';
    onPlacementChanged(newPlacement: any): void;
    /** The value to add to the current scroll position when the right or the left advancer is clicked.  */
    scrollValue: number;
    /**
     * The distance in pixels from which to offset the dropdown items along the menubar.
     * Setting this property will affect the top-level dropdown items only.
     */
    skidding: number;
    onSkiddingChanged(newSkidding: any): void;
    connectedCallback(): void;
    componentDidLoad(): void;
    handleDocumentClick(ev: MouseEvent): Promise<void>;
    handleWindowResize(): void;
    handleItemFocused(): void;
    handleItemBlurred(): void;
    handleItemOpened(ev: CustomEvent): void;
    handleItemEnter(ev: CustomEvent): void;
    handleItemClicked(ev: CustomEvent): Promise<void>;
    handleKeydown(ev: KeyboardEvent): Promise<void>;
    /** Sets focus on the control. */
    setFocus(): Promise<void>;
    /** Removes focus from the control. */
    removeFocus(): Promise<void>;
    /** Closes all dropdown in this menu. */
    close(): Promise<void>;
    private updateOverflow;
    private handleScroll;
    private handleScrollLeft;
    private handleScrollRight;
    private handleSlotChange;
    render(): any;
}
