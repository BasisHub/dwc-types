import { EventEmitter } from '../../stencil-public-runtime';
import { DwcMenuItemClickPayload, DwcMenuItemMousePayload } from './dwc-menuitem.types';
/**
 * The `{{CONTROL_NAME}}<dwc-menuitem>` provides methods for manipulating a UI menu item control.
 *
 * @slot - The place where dwc-menu should be placed in case the item is a dropdown menu
 * @slot prefix -  The Item's label
 * @slot prefix -  The Item's prefix
 * @slot suffix -  The Item's suffix
 *
 * @part control - The component's base wrapper
 * @part prefix - The item's prefix container
 * @part suffix - The item's suffix container
 * @part label -  The Item's label container
 * @part hotkey -  The Item's hotkey.
 * @part icon-wrapper -  The Item's icon container
 * @part icon-check-wrapper -  The Item' check icon container
 * @part icon-check -  The Item' check icon
 * @part icon-chevron-wrapper -  The Item' chevron icon container
 * @part icon-chevron -  The Item' chevron icon
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjMenuItem - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-checked - Applied when the item is checked
 * @hostClass bbj-selected - Applied when the item is selected
 * @hostClass bbj-focused - Applied when the component is focused
 *
 * @bbjControl BBjMenuItem, BBjCheckableMenuItem
 * @bbjControlLink
 *  https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjmenuitem/BBjMenuItem.htm,
 *  https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjcheckablemenuitem/bbjcheckablemenuitem.htm?Highlight=BBjCheckableMenuItem
 *
 * @bbjMessage BuildMenuItemMessage
 * @bbjMessage SetTextMessage
 * @bbjMessage SetAcceleratorMessage
 * @bbjMessage SetImageInfoMessage
 * @bbjMessage SetImageSizeMessage
 * @bbjMessage InsertMenuItemMessage
 * @bbjMessage RemoveMenuItemMessage
 * @bbjMessage SetCustomFontMessage
 * @bbjMessage MenuItemSelectEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcMenuItem {
    private $item;
    private $menu;
    private popper;
    private isOpened;
    private isMouseInside;
    /** True when the mouse inside the item or its dropdown is opened, false otherwise. */
    selected: boolean;
    positioner: HTMLElement | null;
    el: HTMLDwcMenuitemElement;
    /** When true, the item's checked status can be changed by the user, false otherwise. */
    checkable: boolean;
    onCheckableChanged(newCheckable: any): void;
    /** When true, the item is checked, unchecked otherwise. */
    checked: boolean;
    onCheckedChanged(newChecked: any): void;
    /** If dropdown item then the distance in pixels to offset the menu away from its item. */
    distance: number;
    /**	Specifies that the control should be disabled. */
    disabled: boolean;
    /** When true, the item is a dropdown menu , normal item otherwise. The component will automatically update this property when the menu slot is available.  */
    dropdown: boolean;
    /**
     * The component's expanse.
     * Setting the item's expanse will NOT update its menu expanse if it is a dropdown item.
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** When true, the control has focus , blurred otherwise. The component will automatically update this value */
    hasFocus: boolean;
    /** When true then the chevron icon which marks dropdowns will be hidden. */
    hideChevronIcon: boolean;
    /** When true then the hotkey's label will be hidden, visible otherwise. */
    hideHotkeyLabel: boolean;
    /** The actual item's hotkey. */
    hotkey: string;
    /** Sets the hotkey label for the item.  */
    hotkeyLabel: string;
    /** The separator between key combination, (default is +). */
    hotkeySplitKey: string;
    /** Assigns the hotkey to a specific target element. */
    hotkeyTarget: HTMLElement | string;
    /** Specifies a short label for the control. */
    label: string;
    /** If dropdown item and opened then true, false otherwise.  */
    opened: boolean;
    onOpenedChanged(): void;
    /** Describes the dropdown menu position. Setting this property won't affect the item's menus' dropdown items.  */
    placement: 'right' | 'left' | 'top' | 'bottom';
    /** If dropdown item then the distance in pixels to offset the menu along its item. */
    skidding: number;
    /** The theme name. Setting this property will NOT update the item's menu's theme if the item is a dropdown item*/
    theme: 'default' | 'gray' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | null;
    /** Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /** Emitted after the item is checked or unchecked. This event is fired only for checkable items */
    changedEvent: EventEmitter<DwcMenuItemClickPayload>;
    /** Emitted after the item is clicked. This event is fired for checkable and uncheckable items.*/
    clickedEvent: EventEmitter<DwcMenuItemClickPayload>;
    /** Emitted after the item clicked. unlike the `dwc-clicked` event , this event won't be fired if dropdown item and the menu is not empty.*/
    selectedEvent: EventEmitter<DwcMenuItemClickPayload>;
    /** Emitted when the mouse enters the control */
    enterEvent: EventEmitter<DwcMenuItemMousePayload>;
    /** Emitted when the mouse leaves the control */
    leaveEvent: EventEmitter<DwcMenuItemMousePayload>;
    /** Emitted after the control is focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the control is blurred. */
    blurredEvent: EventEmitter<void>;
    /** Emitted after the dropdown is opened.*/
    openedEvent: EventEmitter<void>;
    /** Emitted after the dropdown is closed. */
    closedEvent: EventEmitter<void>;
    onProperOptionsChanged(): void;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleMouseEnter(ev: MouseEvent): void;
    handleMouseLeave(ev: MouseEvent): void;
    /** Sets focus on the control */
    setFocus(): Promise<void>;
    /** Removes focus from the control */
    removeFocus(): Promise<void>;
    /** If dropdown item, this method will open the dropdown. */
    open(): Promise<void>;
    /** If dropdown item, this method will close the dropdown. */
    close(): Promise<void>;
    /** If dropdown item, the method will toggle the dropdown. */
    toggle(): Promise<void>;
    /** It dropdown item, the menu will be focused. */
    focusMenu(): Promise<void>;
    /** If dropdown item, repositions the dropdown menu. */
    reposition(): Promise<void>;
    /** If dropdown item, returns the dropdown menu instance. */
    getMenu(): Promise<HTMLDwcMenuElement>;
    /** Check if given item is in this dropdown item. Returns true when it exists, false otherwise. */
    hasItem(item: HTMLDwcMenuitemElement): Promise<boolean>;
    private initPopover;
    private handleFocus;
    private handleBlur;
    private handleClick;
    private handleKeydown;
    private handleHotKey;
    private handleMenuChanged;
    private handleMenuClicked;
    private handleSlotChange;
    render(): any;
}
