import { EventEmitter } from '../../stencil-public-runtime';
import { DwcExpression } from '../../utils/dwc-expression';
import { DwcHighlightBehaviors } from '../../utils/dwc-highlight-behaviors';
import { DwcListboxItem } from '../dwc-listbox/dwc-listbox.types';
/**
 * The `BBjInputT<dwc-timefield>` provides methods for manipulating a UI time control.
 *
 * @slot prefix - The input's prefix. Can be used to insert icons
 * @slot suffix - The input's suffix. Can be used to insert icons
 *
 * @part control - The component's base wrapper
 * @part label -  The input's label
 * @part input-wrapper - The input,prefix & suffix wrapper
 * @part input - The actual input
 * @part prefix -  The input's prefix
 * @part suffix -  The input's suffix
 * @part spinners -  The input's spinners wrapper
 * @part up-button -  The input's up spinner button
 * @part down-button -  The input's down spinner button
 * @part picker-button - The calendar icon button which toggles the calendar
 * @part picker - The time picker dropdown
 * @part alert -  The alert component(validation)
 * @part alert-popover -  The alert-popover component(validation)
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjInputT - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass bbj-hasLabel - Applied when the input renders a label
 * @hostClass bbj-valid - Applied when the input is marked as valid
 * @hostClass bbj-invalid - Applied when the input is marked as invalid
 * @hostClass bbj-required - Applied when the input required
 * @hostClass bbj-transparent - `[optional]` can be added manually to remove the component background
 * @hostClass bbj-noborder - `[optional]` can be added manually to remove the component border
 *
 * @bbjControl BBjInputT
 * @bbjControlLink #
 *
 * @bbjMessage BuildInputTMessage
 * @bbjMessage SetTextMessage
 * @bbjMessage GetTextMessage
 * @bbjMessage GetValidationText
 * @bbjMessage GetInputTextMessage
 * @bbjMessage GetTimeValueMessage
 * @bbjMessage SetFocusMessage
 * @bbjMessage SelectAllMessage
 * @bbjMessage SetSelectionRangeMessage
 * @bbjMessage SetCursorPosMessage
 * @bbjMessage GetCursorPosMessage
 * @bbjMessage RestoreMessage
 * @bbjMessage SetPaddingMessage
 * @bbjMessage GetComputedPxMessage
 * @bbjMessage SetPlaceholderColorMessage
 * @bbjMessage SetStyleMessage
 * @bbjMessage GetStyleMessage
 * @bbjMessage ShowTimePickerMessage
 * @bbjMessage EditModifyEventCallbackMessage
 * @bbjMessage InputKeypressEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcTimefield {
    private $input;
    private inputId;
    private $control;
    private $picker;
    private pickerResizeObserver;
    private isMouseInComponent;
    private oldValue;
    private oldSelectionStart;
    private oldSelectionEnd;
    private lastSelectionStart;
    private lastSelectionEnd;
    private lastTouchY;
    private loaded;
    private validationExpressionEngine;
    el: HTMLDwcTimefieldElement;
    pickerItems: Array<DwcListboxItem>;
    builtinInvalidMessage: string;
    /** When true, the control will be validated with every change. */
    autoValidate: boolean;
    /** When true, the control will be validated when it is loaded for the first time. */
    autoValidateOnLoad: boolean;
    /** When true, the control will switch the `valid` property automatically after the control is validated and became valid. */
    autoWasValidated: boolean;
    /** When true, the input is enabled; otherwise, it is disabled. */
    disabled: boolean;
    /**
     * The component's expanse
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /**
     * When true, the control has focus; otherwise, it is blurred.
     * @readonly
     **/
    hasFocus: boolean;
    /**
     * @bbjIgnore
     * An array of supported of highlight behaviors.
     *
     * <ol>
     *  <li> KEY     : Contents of the control are automatically highlighted when the control gets focus by tabbing into it.
     *  <li> MOUSE   : Contents of the control are automatically highlighted when the control gets focus by clicking into it with the mouse.
     *  <li> REQUEST : Contents of the control are automatically highlighted when the control gets focus under program control by calling the `setFocus` method.
     * </ol>
     **/
    highlightBehaviors: Array<DwcHighlightBehaviors>;
    /** Set to true to indicate that the user input is invalid. */
    invalid: boolean;
    /** An error message to display to the user when the control is invalid. */
    invalidMessage: string;
    /** If in insert mode, then characters are inserted into the control when typed. Otherwise, the characters are overwritten. */
    insertMode: boolean;
    /** The input's label */
    label: string;
    /** The input's locale. Used to localize the input. By default, it is the browser language.  */
    locale: string;
    onLocaleChanged(newLocale: any, oldLocale: any): void;
    /** The input's name. */
    name: string;
    /** The bbj string mask @see [BBj Date Masks](https://documentation.basis.cloud/BASISHelp/WebHelp/commands/date_function.htm). */
    mask: string;
    onMaskChanged(newMask: any, oldMask: any): void;
    /**
     * The maximum allowed time as number.
     * When the value is negative, there is no maximum time.
     **/
    max: number;
    /**
     * The minimum time allowed time as number.
     * When the value is negative, there is no minimum time.
     **/
    min: number;
    /**
     * When true, the control will open the picker automatically when the user start
     * interacting with the control by click, clicking Enter or arrow keys.
     **/
    pickerAutoOpen: boolean;
    /** The distance in pixels to offset the picker away from the control. */
    pickerDistance: number;
    /** The height of the picker's dropdown. */
    pickerOpenHeight: string;
    /** The width of the picker's dropdown. */
    pickerOpenWidth: string;
    /** The preferred placement of the picker dropdown. */
    pickerPlacement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** The distance in pixels to offset the picker list along its trigger. */
    pickerSkidding: number;
    /** Sets the maximum number of rows that the drop-down picker list will display. */
    pickerMaxRowCount: number;
    /** Give the timer picker dropdown a custom type. */
    pickerType: string;
    /** When true, the input will show an icon to toggle the time's picker. */
    pickerIconVisible: boolean;
    /** A regular expression the input's value should match. */
    pattern: string;
    /** A text that appears in the input when it has no value set. */
    placeholder: string;
    /** The input's raw value as number. (Unmasked value). */
    rawValue: number;
    onRawValueChanged(newValue: any): void;
    /** When true, puts the input in readonly mode. */
    readonly: boolean;
    /** A true value indicates a value is required for the form to be submittable. */
    required: boolean;
    /** The restore value is the number that appears when the user hits the restore key (usually ESC). */
    restoreValue: string;
    /**
     * @bbjIgnore
     * When true, the control will show the up/down spinner buttons.
     **/
    showSpinners: boolean;
    /**
     * @bbjIgnore
     * When true, the control will fire spin events for wheel and mouse interactions.
     **/
    spinnable: boolean;
    /**
     * The interval in seconds between the time values displayed in the dropdown.
     *
     * It specifies how frequently the time values are generated.
     * For example, if step is set to 1800 (30 minutes), the generated
     * items will contain time values at 30-minute intervals throughout the day.
     **/
    step: number;
    /** Indicates that the component can receive focus. A negative value indicates that the component is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
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
    /** When `popover`,  the invalid message will be displayed as a popover, as an inline message otherwise. */
    validationStyle: 'popover' | 'inline';
    /** Set to true to indicate that the user input is valid. */
    valid: boolean;
    /** The input's masked value. */
    value: string;
    onValueChanged(newValue: any): void;
    onPickerOptionsChanged(): void;
    onSpinnerRequiredPropsChanged(): void;
    /** Emitted after the controls's value is changed. */
    modifiedEvent: EventEmitter<string>;
    /** Emitted after the control is focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the control is blurred. */
    blurredEvent: EventEmitter<void>;
    /** Emitted after the control has spun up. */
    spunUpEvent: EventEmitter<void>;
    /** Emitted after the control has spun down. */
    spunDownEvent: EventEmitter<void>;
    /** Emitted when the control is invalid. */
    validatedEvent: EventEmitter<boolean>;
    /**
     * @internal
     * Emitted when any of the dwc-timefield-spinner required properties
     * are changed.
     */
    spinnerRequiredPropsChangedEvent: EventEmitter<{
        disabled: boolean;
        readonly: boolean;
        min: number;
        max: number;
    }>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    onWindowKeyup(ev: KeyboardEvent): void;
    handleKeydown(ev: KeyboardEvent): void;
    handleWheel(ev: any): void;
    /**
     * Causes the spinner to spin in the specified direction.
     *
     * @param upDirection If nonzero, the spinner up event will be fired
     *                    otherwise, the spinner down event will be fired.
     **/
    spin(upDirection: boolean): Promise<void>;
    /** Sets focus on the input. */
    setFocus(): Promise<void>;
    /** Removes focus from the input. */
    removeFocus(): Promise<void>;
    /** Selects the input text. */
    selectAll(): Promise<void>;
    /**
     * Set the input selection range.
     *
     * @param {Number} start The 0-based index of the first selected character.
     *                       An index greater than the length of the element's value is
     *                      treated as pointing to the end of the value.
     *
     * @param {Number} end The 0-based index of the character after the last selected character.
     *                     An index greater than the length of the element's value is treated as
     *                     pointing to the end of the value.
     */
    setSelectionRange(start: number, end: number): Promise<void>;
    /**
     * Gets the input selection range.
     *
     * @returns {Object} An object containing the start and end position of the selection.
     */
    getSelectionRange(): Promise<{
        start: number;
        end: number;
    }>;
    /**
     * Sets the caret position in the input.
     *
     * @param {Number} position The 0-based index of the character to move the caret to.
     **/
    setCursorPos(position: number): Promise<void>;
    /** Gets the caret position in the input. **/
    getCursorPos(): Promise<number>;
    /** Sets the input's value in the control to the `restoreValue` string. */
    restore(): Promise<void>;
    /** Programmatically show the inputt picker. */
    openPicker(): Promise<void>;
    /** Validates the control */
    validate(): Promise<boolean>;
    /** Query one of the component supported parts. */
    getPart(part: string): Promise<unknown>;
    private doRestore;
    private applyMask;
    private updateSelectedPickerItem;
    private handleFocus;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleInputFocus;
    private handleInputBlur;
    private handleInputKeyDown;
    private handleInputKeyup;
    private handleInput;
    private handleSpinUp;
    private handleSpinDown;
    private handlePickerIconClick;
    private handlePickerIconKeydown;
    private handlePickerToggle;
    private handlePickerOpen;
    private handlePickerItemSelected;
    private fireModifiedEvent;
    render(): any;
}
