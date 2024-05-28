import { EventEmitter } from '../../stencil-public-runtime';
import { DwcHighlightBehaviors } from '../../utils/dwc-highlight-behaviors';
import { DwcExpression } from '../../utils/dwc-expression';
/**
 * The `BBjInputD<dwc-datefield>` provides methods for manipulating a UI date control.
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
 * @part calendar-button - The calendar icon button which toggles the calendar
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjInputD - Always applied
 * @hostClass BBjInputD-calendar - always applied to the created calendar if any
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
 * @bbjControl BBjInputD
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjinputd/bbjinputd.htm?Highlight=BBjInputD
 *
 * @bbjMessage BuildInputDMessage
 * @bbjMessage SetTextMessage
 * @bbjMessage GetTextMessage
 * @bbjMessage GetValidationText
 * @bbjMessage GetInputTextMessage
 * @bbjMessage GetJulianValueMessage
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
 * @bbjMessage SetDateOffsetMessage
 * @bbjMessage SetDatePivotMessage
 * @bbjMessage SetShowWeeksMessage
 * @bbjMessage ShowDatePickerMessage
 * @bbjMessage EditModifyEventCallbackMessage
 * @bbjMessage InputKeypressEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcDatefield {
    private $input;
    private inputId;
    private isMouseInComponent;
    private oldValue;
    private oldSelectionStart;
    private oldSelectionEnd;
    private loaded;
    private datePicker;
    private datePickerParsingStatus;
    private calenderOptions;
    private lastSelectionStart;
    private lastSelectionEnd;
    private lastTouchY;
    private validationExpressionEngine;
    el: HTMLDwcDatefieldElement;
    builtinInvalidMessage: string;
    /** When true, the control will be validated with every change. */
    autoValidate: boolean;
    /** When true, the control will be validated when it is loaded for the first time. */
    autoValidateOnLoad: boolean;
    /** When true, the control will switch the `valid` property automatically after the control is validated and became valid. */
    autoWasValidated: boolean;
    /**
     * Enable / disable auto completion
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     */
    autocomplete: string;
    /** Where the calendar is rendered relative to the input vertically and horizontally. In the format of "[vertical] [horizontal]". Vertical can be auto, above or below (required). Horizontal can be left, center or right. .g. "above" or "auto center. */
    calendarPosition: string;
    /** A string indicating whether or not autocorrect is on or off. Safari only. */
    autocorrect: 'on' | 'off';
    /** Automatically focuses the form control when the page is loaded. */
    autofocus: boolean;
    /** Enable / disable the input */
    disabled: boolean;
    /**
     * The component's expanse
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** When true, the control has focus, otherwise it is blurred. */
    hasFocus: boolean;
    /**
     * An array of supported of highlight behaviors.
     * <ol>
     *  <li>KEY     : Contents of the control are automatically highlighted when the control receives focus by tabbing into it.
     *  <li>MOUSE   : Contents of the control are automatically highlighted when the control receives focus by clicking into it with the mouse.
     *  <li>REQUEST : Contents of the control are automatically highlighted when the control receives focus programmatically by calling the `setFocus` method.
     * </ol>
     **/
    highlightBehaviors: Array<DwcHighlightBehaviors>;
    /** Set to true to indicate that the user input is invalid. */
    invalid: boolean;
    /** An error message to display to the user when the control is invalid. */
    invalidMessage: string;
    /** If in insert mode, then characters are inserted into the control when typed. Otherwise, the characters are overwritten. */
    insertMode: boolean;
    /** The input's value as julian */
    julianValue: number;
    /** The inputs label */
    label: string;
    /** The input's locale. Used to localize the calendar. By default, it is the browser language. */
    locale: string;
    /** The input's name */
    name: string;
    /** The bbj string mask @see [BBj Date Masks](https://documentation.basis.cloud/BASISHelp/WebHelp/commands/date_function.htm) */
    mask: string;
    onMaskChanged(newMask: any, oldMask: any): void;
    /** Maximum length (number of characters) of value */
    maxlength: number;
    /** Pattern the value must match to be valid */
    pattern: string;
    /** Text that appears in the input when it has no value set. */
    placeholder: string;
    /** When true, puts the input in readonly mode. */
    readonly: boolean;
    /**  If true, value is required or must be check for the form to be submittable. */
    required: boolean;
    /** The restore value is the number that appears when the user hits the restore key (usually ESC). */
    restoreValue: string;
    /** The spellcheck global attribute is an enumerated attribute which defines whether the element may be checked for spelling errors. */
    spellcheck: boolean;
    /** When true, shows weeks in the calendar; otherwise weeks are not shown. */
    showWeeks: boolean;
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
    /** Indicates that the component can receive focus. A negative value indicates that the component is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /** When true, the input will show an icon to toggle the calendar. */
    visibleCalendarIcon: boolean;
    /**
     * A javascript expression or function to validate the control.
     * if the expression has the 'return' keyword in it, then we use as is,
     * if not, then wrap it with return and ';' to make a function.
     *
     * The expression has access to the following parameters:
     *
     * <ol>
     * <li> `value`: The control's value as [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
     * <li> `x`: Alias for value
     * <li> `text`: For consistency with the legacy control and form validation APIs, Date string as typed by the user.
     * <li> `component`: The instance of the client component
     * <li> `control`: Alias for component
     * </ol>
     */
    validator: DwcExpression;
    /**
     * The icon to use with the validation message
     *
     * <ol>
     * <li> <b>URL</b>: (ex: /path/to/image.png)
     * <li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)
     * <li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: `x`)
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
    /** The distance in pixels to offset the validation message away from the control. */
    validationPopoverDistance: number;
    /** The distance in pixels to offset the validation message along the control. */
    validationPopoverSkidding: number;
    /** Describes the preferred placement of the validation message. */
    validationPopoverPlacement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /**  When `popover`, the invalid message will be displayed as a popover Otherwise , it's displayed as an inline message. */
    validationStyle: 'popover' | 'inline';
    /** Set to true to indicate that the user input is valid. */
    valid: boolean;
    /** When true, pressing enter will toggle the calendar.*/
    toggleCalendarOnEnter: boolean;
    /** The input's masked value */
    value: string;
    onValueChanged(newValue: any): void;
    /** Emitted after the input is changed. */
    modifiedEvent: EventEmitter<string>;
    /** Emitted after the control is focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the control is blurred. */
    blurredEvent: EventEmitter<void>;
    /** Emitted after the control has spun up. */
    spunUpEvent: EventEmitter<void>;
    /** Emitted after the control has spun down. */
    spunDownEvent: EventEmitter<void>;
    /** Emitted when the control is invalid */
    validatedEvent: EventEmitter<boolean>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    onWindowKeyup(ev: KeyboardEvent): void;
    handleKeyUp(ev: KeyboardEvent): void;
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
     * Sets the input selection range.
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
    /** Sets the caret position in the input. **/
    setCursorPos(position: number): Promise<void>;
    /** Gets the caret position in the input. **/
    getCursorPos(): Promise<number>;
    /** Sets the input's value in the control to the `restoreValue` string. */
    restore(): Promise<void>;
    /** A set of options to pass to [flatpickr](https://flatpickr.js.org/options/) */
    setCalendarOptions(options: object): Promise<void>;
    /** Programmatically shows the inputd popup calendar */
    calendar(): Promise<void>;
    /** Validates the control */
    validate(): Promise<boolean>;
    /** Queries one of the component supported parts. */
    getPart(part: string): Promise<unknown>;
    private doRestore;
    private applyMask;
    private buildDatePicker;
    private getDatePickerLocale;
    private handleCalendarIconClick;
    private handleCalendarIconKeydown;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleFocus;
    private handleBlur;
    private handleKeyDown;
    private handleInput;
    private handleKeyup;
    private handleSpinUp;
    private handleSpinDown;
    private fireModifiedEvent;
    render(): any;
}
