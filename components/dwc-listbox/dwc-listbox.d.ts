import { EventEmitter } from '../../stencil-public-runtime';
import { DwcListboxEventPayload, DwcListboxItem, DwcListboxItemRenderer } from './dwc-listbox.types';
import { DwcExpression } from '../../utils/dwc-expression';
/**
 * The `BBjListBox<dwc-listbox>` provides methods for manipulating a UI listbox control.
 *
 * @part container - The control and label container
 * @part control-wrapper - Top wrapper for the whole control
 * @part control - The component's base wrapper
 * @part list - The items wrapper
 * @part item - a list item
 * @part item-selected - a selected item
 * @part item-disabled - a disabled item
 * @part item-prefix - an item prefix
 * @part item-label - an item label
 * @part item-suffix - an item suffix
 * @part alert -  The alert component(validation)
 * @part alert-popover -  The alert-popover component(validation)
 * @part label - The list's label
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjListBox - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass bbj-valid - Applied when the control is marked as valid
 * @hostClass bbj-invalid - Applied when the control is marked as invalid
 *
 * @bbjControl BBjListBox
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjlistbox/BBjListBox.htm?Highlight=BBjListBox
 *
 * @bbjMessage BuildListButtonMessage
 * @bbjMessage GetValidationText
 * @bbjMessage ClearListBoxMessage
 * @bbjMessage ClearListBoxSelectionMessage
 * @bbjMessage GetSelectedIndicesMessage
 * @bbjMessage InsertListBoxItemMessage
 * @bbjMessage InsertListBoxItemsMessage
 * @bbjMessage RemoveListBoxItemMessage
 * @bbjMessage SetImageAtIndexMessage
 * @bbjMessage SetTextAtIndexMessage
 * @bbjMessage SetIndexVisibleMessage
 * @bbjMessage SetListBoxIndexMessage
 * @bbjMessage SetListBoxIndicesMessage
 * @bbjMessage SetMultipleSelectMessage
 * @bbjMessage ListClickEventCallbackMessage
 * @bbjMessage listDoubleClickEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcListbox {
    private listId;
    private $itemsContainer;
    private typeToSelectString;
    private lastKeypressTime;
    private lastSearchIndex;
    private validationExpressionEngine;
    private itemRendererExpressionEngine;
    private loaded;
    el: HTMLDwcListboxElement;
    /** When true, the control will be validated with every change. */
    autoValidate: boolean;
    /** When true, the control will be validated when it is loaded for the first time. */
    autoValidateOnLoad: boolean;
    /** When true, the control will switch the `valid` property automatically after the control is validated and became valid. */
    autoWasValidated: boolean;
    /** When true, clicking on a selected item will deselect it. */
    allowDeselection: boolean;
    /**	Specifies that the list should be disabled. */
    disabled: boolean;
    /**
     * The component's expanse
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /**
     * When true, the list has focus; otherwise it is blurred.
     * @readonly
     **/
    hasFocus: boolean;
    /**
     * @bbjIgnore
     * Array of items
     **/
    items: Array<DwcListboxItem>;
    /** Set to true to indicate that the user input is invalid. */
    invalid: boolean;
    /** An error message to present to the user when the control is invalid. */
    invalidMessage: string;
    /** The list label */
    label: string;
    /** When true, enables multi-selection, otherwise, single selection is selected. */
    multiSelection: boolean;
    /** When true and multi-selection is enabled, the user will be able to select and deselect items by clicking. */
    multiSelectionByClick: boolean;
    /** When true, puts the control in readonly mode */
    readonly: boolean;
    /** A BBj expression or a function to render the list item's label. */
    renderer: DwcListboxItemRenderer;
    /**
     * @bbjIgnore
     * An item's index or an array of item indexes
     **/
    selected: number[];
    onSelectedChanged(): void;
    /** Enables or disables the type to select feature. */
    typeToSelect: boolean;
    /**
     * Typing into the list accumulates keystrokes entered within a specified number of milliseconds into a typeahead
     * buffer. This allows the user, for example, to jump directly to New York in a list of all 50 states
     * by typing "NY". Without this typeahead buffer, the user would have to press "N" eight times to skip
     * past the other state codes beginning with "N."
     *
     * The default time window for this feature is 1000 milliseconds (1 second).
     **/
    typeToSelectTimeout: number;
    /** When true, the search performed by typeToSelect feature will be case sensitive. */
    typeToSelectCaseSensitive: boolean;
    /** Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /** When true, the selected item will have a check icon instead of being highlighted. */
    tickMark: boolean;
    /**
     * A Javascript expression or function to validate the control.
     * If the expression has the 'return' keyword in it, then it is used as is;
     * if not, then wrap it with `return` and ';' to make a function.
     *
     * The expression has access to the following parameters:
     * <ol>
     *  <li>`value`: The control's
     *  <li>`x`: Alias for value
     *  <li>`text`: For consistency with the legacy control and form validation APIs, same as `value`
     *  <li>`component`: The instance of the client component
     *  <li>`control`: Alias for component
     * </ol>
     **/
    validator: DwcExpression;
    /**
     * The icon to use with the validation message
     *
     * <ol>
     * <li> <b>URL</b>: (ex: /path/to/image.png)
     * <li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)
     * <li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: `x`)
     * <li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: `feather:x`)
     * <li> <b>An object</b> which provides all the required properties to build the icon.
     *    for instance:
     *    <ol>
     *      <li> {name: 'x'}
     *      <li> {pool: 'feather', name: 'x'}
     *      <li> {src: 'image/path'}
     *    </ol>
     * </ol>
     **/
    validationIcon: string | object;
    /** The distance in pixels from which to offset the validation message away from the control. */
    validationPopoverDistance: number;
    /** The distance in pixels from which to offset the validation message along the control. */
    validationPopoverSkidding: number;
    /** Describes the preferred placement of the validation message. */
    validationPopoverPlacement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /**  When `popover`, the invalid message will be displayed as a popover, as an inline message otherwise. */
    validationStyle: 'popover' | 'inline';
    /** Set to true to indicate that the user input is valid. */
    valid: boolean;
    /** Fired when a menu item is selected. */
    selectedEvent: EventEmitter<Array<DwcListboxEventPayload>>;
    /** Fired when one of the items is clicked. */
    itemClickedEvent: EventEmitter<DwcListboxEventPayload>;
    /** Fired when one of the items is double clicked. */
    itemDbClickedEvent: EventEmitter<DwcListboxEventPayload>;
    /** Emitted after the control is focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the control is blurred. */
    blurredEvent: EventEmitter<void>;
    /** Emitted when the control is validated. */
    validatedEvent: EventEmitter<boolean>;
    connectedCallback(): void;
    componentWillUpdate(): void;
    componentDidLoad(): Promise<void>;
    componentDidUpdate(): void;
    handleMenuKeyDown(ev: KeyboardEvent): Promise<void>;
    /** Sets focus on the component. */
    setFocus(): Promise<void>;
    /** Removes focus from the component. */
    removeFocus(): Promise<void>;
    /**
     * Gets the current active item in the list.
     * If there are no active items, then the first no disabled item in the `selected` array.
     **/
    getActiveItem(): Promise<HTMLElement>;
    /**
     * Scrolls to the given index.
     *
     * @param index The index of the item to scroll to
     **/
    scrollToIndex(index: number): Promise<void>;
    /** Gets item by reference or by index. */
    getItem(item: HTMLElement | number): Promise<HTMLElement>;
    /** Gets the next item for the current activated item in the list. */
    getNextItem(): Promise<HTMLElement>;
    /** Gets the previous item for the current activated item in the list. */
    getPreviousItem(): Promise<HTMLElement>;
    /** Selects the next item in the list. */
    selectNextItem(): Promise<void>;
    /** Selects the previous item in the list. */
    selectPreviousItem(): Promise<void>;
    /**
     * Selects the given item.
     *
     * @param item HTMLElement or index of the item to select
     **/
    selectItem(item: HTMLElement | number): Promise<void>;
    /**
     * Updates tabIndexes and focus the given item.
     *
     * @param item HTMLElement or index of the item to activate
     **/
    activateItem(item: HTMLElement | number): Promise<void>;
    /**
     * Searches the list using the given needle and select the first found result.
     *
     * @param needle A string to use a search term
     * @param caseSensitive Whether the search should be case sensitive
     * @param multiple When true, the current selection will be kept
     * @param scroll When true, the list will scroll to the found item.
     *
     * @returns Promise<number> the index of the found item
     */
    search(needle: string, caseSensitive?: boolean, multiple?: boolean, scroll?: boolean): Promise<number>;
    /** Queries one of the component supported parts. */
    getPart(part: string): Promise<HTMLElement>;
    /** Validates the control. */
    validate(): Promise<boolean>;
    /**
     * Gets the next index of the given index in the list which is not disabled.
     *
     * @param index  The index to start from
     * @returns   The next index
     */
    private getNextIndex;
    /**
     * Gets the previous index of the given index in the list which is not disabled.
     *
     * @param index The index to start from
     * @returns The previous index
     */
    private getPreviousIndex;
    /**
     * Gets the index of first item in the list which is not disabled.
     *
     * @returns  The index of the first item
     */
    private getFirstIndex;
    /**
     * Gets the index of last item in the list which is not disabled.
     *
     * @returns The index of the last item
     */
    private getLastIndex;
    /**
     * Gets the index of the first focusable item in the list.
     *
     * @returns The index of the first focusable item
     */
    private getFirstFocusableIndex;
    /**
     * Update the given item selection state
     *
     * @param item HTMLElement to update
     * @param trigger How the selection was triggered (click, enter)
     * @param isCtrl Whether the ctrl key was pressed
     * @param isShift Whether the shift key was pressed
     */
    private updateSelection;
    /**
     * Search the list using the given needle and select the first found result
     *
     * @param needle A string to use a search term
     * @param caseSensitive Whether the search should be case sensitive
     * @param multiple When true, the current selection will be kept
     * @param scroll When true, the list will scroll to the found item.
     *
     * @returns Promise<number> the index of the found item
     */
    private doSearch;
    private triggerTypeToSelect;
    private handleLabelClick;
    private handleMenuClick;
    private handleMenuDbClick;
    private handleItemFocus;
    private handleItemBlur;
    private renderItemLabel;
    render(): any;
}
