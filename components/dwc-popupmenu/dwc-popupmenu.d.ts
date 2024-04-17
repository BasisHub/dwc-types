import { EventEmitter } from '../../stencil-public-runtime';
import { DwcMenuItemClickPayload } from '../dwc-menuitem/dwc-menuitem.types';
/**
 * The `BBjPopupMenu<dwc-popupmenu>` provides methods for manipulating a UI popup menu associated with a control.
 *
 * @part control - The component's base wrapper.
 *
 * @bbjControl BBjPopupMenu
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjpopupmenu/bbjpopupmenu.htm?Highlight=BBjPopupmenu
 *
 * @bbjMessage BuildPopupMenuMessage
 * @bbjMessage SetEnabledMessage
 * @bbjMessage HidePopupMenuMessage
 * @bbjMessage SetPopupTargetMessage
 * @bbjMessage SetPopupMenuMessage
 * @bbjMessage ShowPopupMenuMessage
 * @bbjMessage InsertMenuItemMessage
 * @bbjMessage InsertSeparatorMessage
 * @bbjMessage RemoveMenuItemMessage
 * @bbjMessage IsPopupMenuVisibleMessage
 * @bbjMessage PopupMenuItemSelectEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcPopupmenu {
    private popupId;
    private $menu;
    private popper;
    private isOpened;
    private virtualElement;
    el: HTMLDwcPopupmenuElement;
    /**
     * @bbjIgnore
     * Describes the DOM context of the virtual element. This is necessary if X & Y are derived from a real DOM element, and that element is within a different scrolling container context to the popup.
     **/
    contextElement: HTMLElement;
    /**	Specifies that the control should be disabled. */
    disabled: boolean;
    onDisabledChanged(newDisabled: any): void;
    /** The distance in pixels to offset the popup away from its target. */
    distance: number;
    /** Specifies a short label for the control. */
    label: string;
    onLabelChanged(newLabel: any): void;
    /** Sets the maximum number of rows that the popup will display. */
    maxRowCount: number;
    handleMaxRowCountChange(maxRowCount: any): void;
    /** When true, the popup is opened; otherwise it is closed. */
    opened: boolean;
    onOpenedChanged(): void;
    /** Describes the popup's menu placement. */
    placement: 'right' | 'left' | 'top' | 'bottom';
    onPlacementChanged(newPlacement: any): void;
    /** The distance in pixels to offset the popup along its target. */
    skidding: number;
    /** Gives the popup's menu a custom type attribute. */
    type: string;
    onTypeChanged(newType: any): void;
    /** The popup X position */
    x: number;
    /** The popup Y position */
    y: number;
    onCoordinateChange(): void;
    onProperOptionsChanged(): void;
    /** Emitted after the item is checked or unchecked. This event is fired only for checkable items */
    changedEvent: EventEmitter<DwcMenuItemClickPayload>;
    /** Emitted after the item is clicked. This event is fired for checkable and uncheckable items */
    clickedEvent: EventEmitter<DwcMenuItemClickPayload>;
    /** Emitted after the popup is opened.*/
    openedEvent: EventEmitter<void>;
    /** Emitted after the popup is closed. */
    closedEvent: EventEmitter<void>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleDocumentClick(ev: MouseEvent): Promise<void>;
    /** Sets focus on the control. */
    setFocus(): Promise<void>;
    /** Removes focus from the control. */
    removeFocus(): Promise<void>;
    /** Opens the popup menu */
    open(): Promise<void>;
    /** Close the popup menu */
    close(): Promise<void>;
    /** Toggle the popup menu */
    toggle(): Promise<void>;
    /** Check if given item is in this popup. Returns true when it exists , false otherwise */
    hasItem(item: HTMLDwcMenuitemElement): Promise<boolean>;
    private getAvailablePopups;
    private generateGetBoundingClientRect;
    private initPopover;
    private menuClickedOrChanged;
    private handleMenuChanged;
    private handleMenuClicked;
    private handleMenuKeydown;
    private handleSlotChange;
    render(): any;
}
