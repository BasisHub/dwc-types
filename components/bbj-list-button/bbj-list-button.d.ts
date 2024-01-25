import { EventEmitter } from '../../stencil-public-runtime';
import { BbjListEventPayload, BbjListItem } from '../bbj-list/bbj-list.types';
import { BbjExpression } from '../../utils/bbj-expression';
/**
 * The `BBjListButton<bbj-list-button>` provides methods for manipulating a UI list button control.
 *
 * @part control - The component's base wrapper
 * @part suffix-icon - The button's icon
 * @part suffix-separator - The button's separator to the left of the button's suffix
 * @part suffix - The button's suffix
 * @part prefix - The button's prefix
 * @part alert -  The alert component(validation)
 * @part alert-popover -  The alert-popover component(validation)
 * @part label -  The component's label
 * @part button-label -  The button's label
 *
 * @part dropdown -  The `bbj-dropdown` component
 * @part dropdown-control - Exposed part for the `bbj-dropdown` component. Maps to the `control` part.
 * @part dropdown-handler - Exposed part for the `bbj-dropdown` component. Maps to the `handler` part.
 *
 * @part button - The list's button element
 * @part button-control - Exposed part for the `bbj-button` component. Maps to the `control` part.
 * @part button-label - Exposed part for the `bbj-button` component. Maps to the `label` part.
 * @part button-suffix - Exposed part for the `bbj-button` component. Maps to the `suffix` part.
 * @part button-prefix - Exposed part for the `bbj-button` component. Maps to the `prefix` part.
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjListButton - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass bbj-valid - Applied when the control is marked as valid
 * @hostClass bbj-invalid - Applied when the control is marked as invalid
 *
 * @bbjControl BBjListButton
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjlistbutton/bbjlistbutton.htm?Highlight=BBjListButton
 *
 * @bbjMessage BuildListButtonMessage
 * @bbjMessage SetTextMessage
 * @bbjMessage GetTextMessage
 * @bbjMessage ClearComboBoxMessage
 * @bbjMessage GetSelectedIndexMessage
 * @bbjMessage InsertComboBoxItemMessage
 * @bbjMessage InsertComboBoxItemsMessage
 * @bbjMessage RemoveComboBoxItemMessage
 * @bbjMessage SetComboBoxIndexMessage
 * @bbjMessage SetImageAtIndexMessage
 * @bbjMessage SetTextAtIndexMessage
 * @bbjMessage SetComboBoxHeightMessage
 * @bbjMessage SetFocusMessage
 * @bbjMessage SetStyleMessage
 * @bbjMessage GetStyleMessage
 * @bbjMessage ListSelectEventCallbackMessage
 * @bbjMessage ListChangeEventCallbackMessage
 * @bbjMessage ListClickEventCallbackMessage
 * @bbjMessage ListOpenEventCallbackMessage
 * @bbjMessage ListCloseEventCallbackMessage
 * @bbjMessage ListCancelEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjListButton {
    private listId;
    private $dropdown;
    private $button;
    private icon;
    private validationExpressionEngine;
    private loaded;
    el: HTMLBbjListButtonElement;
    /** When true, the control will be validated with every change. */
    autoValidate: boolean;
    /** When true, the control will be validated when it is loaded for the first time. */
    autoValidateOnLoad: boolean;
    /** When true, the control will switch the `valid` property automatically after the control is validated and became valid. */
    autoWasValidated: boolean;
    /**
     * Sets the input's field height. Works only when the `expanse` attribute is not set.
     *
     * @bbjDefault 23px
     **/
    buttonHeight: string;
    /** When true, the control is disabled, otherwise it is enabled. */
    disabled: boolean;
    /** The distance in pixels from which to offset the list away from its trigger. */
    distance: number;
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
    items: Array<BbjListItem>;
    /** The selected item's value */
    itemValue: string;
    /** The selected item's label */
    itemLabel: string;
    onValueOrLabelChanged(): void;
    /** Set to true to indicate that the user input is invalid. */
    invalid: boolean;
    /** An error message to display to the user when the control is invalid. */
    invalidMessage: string;
    /** The list label */
    label: string;
    /** Sets the maximum number of rows that the drop-down list will display. */
    maxRowCount: number;
    /** When true, the list is opened; otherwise it's closed. */
    opened: boolean;
    onOpenedChanged(newOpen: any): void;
    /** Sets the dropdown min width. */
    openWidth: string;
    /** Sets the dropdown max height. */
    openHeight: string;
    /**
     * Describes the preferred placement of the dropdown
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** When true, put the control in readonly mode */
    readonly: boolean;
    /**
     * When true then the current selected item's prefix will be rendered in the button.
     *
     * @bbjDefault true
     **/
    renderItemPrefix: boolean;
    /**
     * @bbjIgnore
     * Selected Index
     **/
    selected: number;
    onSelectedChanged(newSelected: any): void;
    /** The distance in pixels from which to offset the list along its trigger. */
    skidding: number;
    /** When true, the selected item will have a check icon instead of being highlighted. */
    tickMark: boolean;
    /** Enable or disable type to select feature. */
    typeToSelect: boolean;
    /**
     * Typing into the list accumulates keystrokes entered within a specified number of milliseconds into a typeahead
     * buffer. This allows the user, for example, to jump directly to New York in a list of all 50 states
     * by typing "NY". Without this typeahead buffer, the user would have to press "N" eight times to skip
     * past the other state codes beginning with "N."
     *
     * The default time window for this feature is 1000 milliseconds (1 second)
     **/
    typeToSelectTimeout: number;
    /** When true  , then the search performed by typeToSelect feature will be case sensitive*/
    typeToSelectCaseSensitive: boolean;
    /**
   * A Javascript expression or function to validate the control.
   * If the expression has the 'return' keyword in it, then it is used as is;
   * if not, then wrap it with `return` and ';' to make a function.
   *
   * The expression has access to the following parameters:
   *
   * <ol>
   *  <li>`value`: The control's
   *  <li>`x`: Alias for value
   *  <li>`text`: For consistency with the legacy control and form validation APIs, same as `value`
   *  <li>`component`: The instance of the client component
   *  <li>`control`: Alias for component
   * </ol>
   **/
    validator: BbjExpression;
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
    /**  When `popover` , then the invalid message will be displayed as a popover, as an inline message otherwise */
    validationStyle: 'popover' | 'inline';
    /** Set to true to indicate that the user input is valid. */
    valid: boolean;
    /** The theme name */
    theme: 'default' | 'gray' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'outlined-default' | 'outlined-gray' | 'outlined-primary' | 'outlined-success' | 'outlined-warning' | 'outlined-danger' | 'outlined-info' | null;
    /** Gives the list-button a custom type */
    type: string;
    /** Fired when the control input's value changes. */
    basisChangedEvent: EventEmitter<BbjListEventPayload>;
    /** Emitted when the control is validated */
    validatedEvent: EventEmitter<boolean>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    /** Sets focus on the control. */
    setFocus(): Promise<void>;
    /** Removes focus from the control */
    removeFocus(): Promise<void>;
    /** Opens the list. */
    open(): Promise<void>;
    /** Closes the list. */
    close(): Promise<void>;
    /** Toggles the list. */
    toggle(): Promise<void>;
    /** Validates the control. */
    validate(): Promise<boolean>;
    /** Queries one of the component supported parts. */
    getPart(part: string): Promise<unknown>;
    private handleDocumentKeydown;
    private handleButtonBlur;
    private handleButtonFocus;
    private handleMenuOpen;
    private handleMenuClose;
    private handleDropdownItemSelected;
    private handleLabelClick;
    private fireChangedEvent;
    render(): any;
}
