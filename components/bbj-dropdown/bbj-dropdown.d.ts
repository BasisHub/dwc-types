import { EventEmitter } from '../../stencil-public-runtime';
import { BbjListEventPayload, BbjListItem, BbjListItemRenderer } from '../bbj-list/bbj-list.types';
/**
 * The `<bbj-dropdown>` provides methods for manipulating a UI dropdown list.
 *
 * @slot - The place where the handler should be inserted
 *
 * @part control - The component's base wrapper
 * @part handler  - The dropdown handler
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjDropdown {
    private popper;
    private $positioner;
    private $handler;
    private $menu;
    private typeToSelectString;
    private lastKeypressTime;
    private isOpened;
    private mutationObserver;
    el: HTMLBbjDropdownElement;
    /** When true, a selected item will be deselected when clicked again. */
    allowDeselection: boolean;
    /** When true, the component cannot be interacted with. */
    disabled: boolean;
    /** The distance in pixels to offset the list away from its trigger. */
    distance: number;
    /** The component's expanse. */
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /**
     * @bbjIgnore
     * Array of items to display in the dropdown list.
     */
    items: Array<BbjListItem>;
    /** When true, the menu will allow menu's multi-selection; otherwise single selection will be enabled. */
    multiSelection: boolean;
    /** Sets the maximum number of rows that the drop-down list will display. */
    maxRowCount: number;
    /** When true, the dropdown will be toggled when the handler is clicked. */
    toggleOnClick: boolean;
    /** When true, the dropdown will toggled when enter is pressed. */
    toggleOnEnter: boolean;
    /** When true, the dropdown will open when arrows keys are used. */
    openOnArrow: boolean;
    /** When true, the dropdown is opened; otherwise it will be closed. */
    opened: boolean;
    onOpenedChanged(): void;
    /** Sets the dropdown width. */
    openWidth: string;
    /** Sets the dropdown max-height. */
    openHeight: string;
    /** The preferred placement of the dropdown */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** When true, put the control in readonly mode. */
    readonly: boolean;
    /** A BBj expression or a function to render the list item's label. */
    renderer: BbjListItemRenderer;
    /**
     * @bbjIgnore
     * An array of selected indexes.
     **/
    selected: number[];
    /** The distance in pixels to offset the list along its trigger. */
    skidding: number;
    /** When true, the selected item will have a check icon instead of being highlighted. */
    tickMark: boolean;
    /** Enables or disables the type to select feature. */
    typeToSelect: boolean;
    /**
     * Typing into the list accumulates keystrokes entered within a specified number of milliseconds into a 'typeahead'
     * buffer. This allows the user to, for example, jump directly to New York in a list of all 50 states
     * by typing "NY". Without this 'typeahead' buffer, the user would have to press "N" eight times to skip
     * past the other state codes beginning with "N."
     *
     * The default time window for this feature is 1000 milliseconds (1 second).
     */
    typeToSelectTimeout: number;
    /** When true, the search performed by the typeToSelect feature will be case sensitive. */
    typeToSelectCaseSensitive: boolean;
    /** Gives the dropdown a custom type attribute. */
    type: string;
    onWidthAndHeightChange(): void;
    onProperOptionsChanged(): void;
    /** Emits after the dropdown has been opened. */
    openedEvent: EventEmitter<void>;
    /** Emits after the dropdown has been closed. */
    closedEvent: EventEmitter<void>;
    /** Emitted when the dropdown is canceled. */
    cancelEvent: EventEmitter<void>;
    /** Emitted after one of the items has been selected. */
    selectedEvent: EventEmitter<Array<BbjListEventPayload>>;
    /** Emitted after one of the items has been clicked. */
    itemClickedEvent: EventEmitter<BbjListEventPayload>;
    /** Emitted after one of the items has been double clicked. */
    itemDbClickedEvent: EventEmitter<BbjListEventPayload>;
    connectedCallback(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /** Opens the dropdown */
    open(): Promise<void>;
    /** Closes the dropdown */
    close(): Promise<void>;
    /** Opens/closes the dropdown */
    toggle(): Promise<void>;
    /** Gets the menu Instance */
    getMenu(): Promise<HTMLBbjListElement>;
    /** Forces the dropdown to re-position */
    reposition(): Promise<void>;
    /** Forces the dropdown to re-scroll */
    forceScroll(): Promise<void>;
    private doOpen;
    private doClose;
    private doToggle;
    private focusHandler;
    private updateHandlerAccessible;
    private updateDropdownStyle;
    private getRowHeight;
    private triggerTypeToSelect;
    private handleDocumentKeyDown;
    private handleDocumentMouseDown;
    private handleMenuSelect;
    private handleMenuItemClicked;
    private handleMenuItemDbClicked;
    private handleMenuKeyDown;
    private handleHandlerClick;
    private handleHandlerKeyDown;
    private handleHandlerKeyUp;
    render(): any;
}
