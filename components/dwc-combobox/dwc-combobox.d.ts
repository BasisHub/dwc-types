import { EventEmitter } from '../../stencil-public-runtime';
import { DwcHighlightBehaviors } from '../../utils/dwc-highlight-behaviors';
import { DwcListboxItem, DwcListboxItemRenderer } from '../dwc-listbox/dwc-listbox.types';
import { DwcExpression } from '../../utils/dwc-expression';
/**
 * The `BBjListEdit<dwc-combobox>` provides methods for manipulating a UI list edit control.
 *
 * @slot suffix - Slot for the suffix element
 * @slot prefix - Slot for the prefix element

 * @part alert - The `alert` component(validation)
 * @part alert-popover - The `alert-popover` component(validation)
 * @part control - The component's base wrapper (`dwc-dropdown`)
 * @part field - The list's field element
 * @part suffix - The field's suffix
 * @part suffix-icon - The field's suffix icon
 * @part suffix-separator - The field's separator to the left of the button's suffix
 *
 * @part dropdown-control - Exposed part for the `dwc-dropdown` component. Maps to the `control` part.
 * @part dropdown-handler - Exposed part for the `dwc-dropdown` component. Maps to the `handler` part.
 *
 * @part field-control - Exposed part for the `dwc-field` component. Maps to the `control` part.
 * @part field-label - Exposed part for the `dwc-field` component. Maps to the `label` part.
 * @part field-input-wrapper - Exposed part for the `dwc-field` component. Maps to the `input-wrapper` part.
 * @part field-input - Exposed part for the `dwc-field` component. Maps to the `input` part.
 * @part field-prefix - Exposed part for the `dwc-field` component. Maps to the `prefix` part.
 * @part field-suffix - Exposed part for the `dwc-field` component. Maps to the `suffix` part.
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjListEdit - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass bbj-valid - Applied when the control is marked as valid
 * @hostClass bbj-invalid - Applied when the control is marked as invalid
 *
 * @bbjControl BBjListEdit
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjlistedit/BBjListEdit.htm?Highlight=BBjListEdit
 *
 * @bbjMessage BuildListEditMessage
 * @bbjMessage BuildNativeListEditMessage
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
 * @bbjMessage SetFocusMessage
 * @bbjMessage SetSelectionRangeMessage
 * @bbjMessage SetPaddingMessage
 * @bbjMessage GetComputedPxMessage
 * @bbjMessage SetStyleMessage
 * @bbjMessage GetStyleMessage
 * @bbjMessage ListSelectEventCallbackMessage
 * @bbjMessage ListChangeEventCallbackMessage
 * @bbjMessage ListClickEventCallbackMessage
 * @bbjMessage ListOpenEventCallbackMessage
 * @bbjMessage ListCloseEventCallbackMessage
 * @bbjMessage ListCancelEventCallbackMessage
 * @bbjMessage EditModifyEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcCombobox {
    private $dropdown;
    private input;
    private icon;
    private validationExpressionEngine;
    private loaded;
    private inputDirty;
    el: HTMLDwcComboboxElement;
    /** When true, the control will be validated with every change. */
    autoValidate: boolean;
    /** When true, the control will be validated when it is loaded for the first time. */
    autoValidateOnLoad: boolean;
    /** When true, the control will switch the `valid` property automatically after the control is validated and became valid. */
    autoWasValidated: boolean;
    /** When true, the control is disabled; otherwise it is enabled. */
    disabled: boolean;
    /** The distance in pixels to offset the list away from its trigger. */
    distance: number;
    /**
     * The component's expanse
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** When false, then the user won't be able to changed the input's text */
    customValue: boolean;
    /**
     * Sets the input's field height. Works only when the `expanse` attribute is not set.
     *
     * @bbjDefault 23px
     **/
    fieldHeight: string;
    onFieldHeightChanged(newHeight: any): void;
    /**
     * When true the list has focus , blurred otherwise.
     * @readonly
     **/
    hasFocus: boolean;
    /**
   * An array of supported of highlight behaviors.
   * <ol>
   *  <li>KEY     : Contents of the control are automatically highlighted when the control receives focus by tabbing into it.</li>
   *  <li>MOUSE   : Contents of the control are automatically highlighted when the control receives focus by clicking into it with the mouse.</li>
   *  <li>REQUEST : Contents of the control are automatically highlighted when the control receives focus programmatically by calling the `setFocus` method.</li>
   * </ol>
   **/
    highlightBehaviors: Array<DwcHighlightBehaviors>;
    /** Set to true to indicate that the user input is invalid. */
    invalid: boolean;
    /** An error message to present to the user when the control is invalid. */
    invalidMessage: string;
    /**
     * @bbjIgnore
     * Array of items
     **/
    items: Array<DwcListboxItem>;
    /** The selected item's value */
    itemValue: string;
    /** The selected item's label */
    itemLabel: string;
    onValueOrLabelChanged(): void;
    /** The list label */
    label: string;
    /** Sets the maximum number of rows that the drop-down list will display.  */
    maxRowCount: number;
    /** Maximum length (number of characters) of value */
    maxlength: number;
    /** When true then the list is opened , closed otherwise */
    opened: boolean;
    onOpenedChanged(newOpen: any): void;
    /** Sets the dropdown min width */
    openWidth: string;
    /** Sets the dropdown max height */
    openHeight: string;
    /** Text that appears in the input when it has no value set */
    placeholder: string;
    /**
     * Describes the preferred placement of the dropdown
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** When true, put the control in readonly mode */
    readonly: boolean;
    /** A BBj expression or a function to render the list item's label */
    renderer: DwcListboxItemRenderer;
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
    /**
     * When true then the list will toggled when enter is pressed.
     * Even if the this option disabled, the user can still open the list with click `alt` + `down` or `up` arrow keys.
     **/
    toggleOnEnter: boolean;
    /** give the list-button a custom type */
    type: string;
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
    /**  When `popover` , then the invalid message will be displayed as a popover, as an inline message otherwise */
    validationStyle: 'popover' | 'inline';
    /** Set to true to indicate that the user input is valid. */
    valid: boolean;
    /** The value of the input */
    value: string;
    onValueChanged(value: any): void;
    /** Fired after the dropdown opens.*/
    openedEvent: EventEmitter<void>;
    /** Fired after the dropdown closes. */
    closedEvent: EventEmitter<void>;
    /** Emitted after the input is changed. */
    modifiedEvent: EventEmitter<string>;
    /** Fired when the control input's value changes. */
    changedEvent: EventEmitter<{
        /** The item's index */
        index: number;
        /** The item object */
        item: DwcListboxItem;
        /** The current input's text */
        text: string;
    }>;
    /** Emitted when the control is validated */
    validatedEvent: EventEmitter<boolean>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    /** Sets focus on the control */
    setFocus(): Promise<void>;
    /** Removes focus from the control */
    removeFocus(): Promise<void>;
    /** Opens the list */
    open(): Promise<void>;
    /** Closes the list */
    close(): Promise<void>;
    /** Toggles the list */
    toggle(): Promise<void>;
    /** Validates the control */
    validate(): Promise<boolean>;
    /** Queries one of the component supported parts. */
    getPart(part: string): Promise<unknown>;
    private handleDocumentKeydown;
    private handleMenuOpen;
    private handleMenuClose;
    private handleMenuToggle;
    private handleEditboxFocus;
    private handleEditboxBlur;
    private handleEditboxInput;
    private handleEditboxKeydown;
    private handleDropdownItemSelected;
    private fireChangedEvent;
    private fireChangedEventIfDirty;
    private fireModifiedEvent;
    render(): any;
}
