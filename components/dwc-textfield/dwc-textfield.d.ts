import { EventEmitter } from '../../stencil-public-runtime';
import { DwcHighlightBehaviors } from '../../utils/dwc-highlight-behaviors';
import { DwcExpression } from '../../utils/dwc-expression';
import { DwcAlertPopoverPlacement } from '../dwc-alert-popover/dwc-alert-popover.types';
import { DwcValidationStyle } from '../../utils/dwc-validation.types';
/**
 * The `BBjInputE<dwc-textfield>` object provides methods for manipulating a UI InputE control.
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
 * @part input-group -  A wrapper around all inputs
 * @part input-pad -  The hidden pad char input
 * @part input-unmasked -  The unmasked input
 * @part spinners -  The input's spinners wrapper
 * @part up-button -  The input's up spinner button
 * @part down-button -  The input's down spinner button
 * @part alert -  The alert component(validation)
 * @part alert-popover -  The alert-popover component(validation)*
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjInputE - Always applied
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
 * @bbjControl BBjInputE
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjinpute/BBjInputE.htm?Highlight=BBjInputE
 *
 * @bbjMessage BuildInputEMessage
 * @bbjMessage SetTextMessage
 * @bbjMessage GetTextMessage
 * @bbjMessage GetInputTextMessage
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
 * @bbjMessage SetPadCharacterMessage
 * @bbjMessage EditModifyEventCallbackMessage
 * @bbjMessage InputKeypressEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcTextfield {
    private $input;
    private inputId;
    private $padInput;
    private isMouseInComponent;
    private oldMaskedValue;
    private oldSelectionStart;
    private oldSelectionEnd;
    private loaded;
    private scrollInterval;
    private inputWidth;
    private lastSelectionStart;
    private lastSelectionEnd;
    private lastTouchY;
    private unformattedTextMode;
    private validationExpressionEngine;
    private slotsObserver;
    el: HTMLDwcTextfieldElement;
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
    /** A string indicating whether or not autocorrect is on or off. Safari only. */
    autocorrect: 'on' | 'off';
    /** Automatically focuses the form control when the page is loaded. */
    autofocus: boolean;
    /** Enable/disable the input */
    disabled: boolean;
    /**
     * The component's expanse
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** When true, the control is focused; otherwise it is blurred. */
    hasFocus: boolean;
    /** The component's helper text. */
    helperText: string;
    onHasFocusChanged(newHasFocus: any): void;
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
    /** An error message to present to the user when the control is invalid. */
    invalidMessage: string;
    /** If in insert mode, characters are inserted into the control when typed. Otherwise, the characters are overwritten. */
    insertMode: boolean;
    /** The inputs label */
    label: string;
    /** The input's name */
    name: string;
    /** The bbj string mask @see [BBj String Masks](https://github.com/BasisHub/bbj-masks#string-masks) */
    mask: string;
    onMaskChanged(newMask: any, oldMask: any): void;
    /** The input's masked value */
    maskedValue: string;
    onMaskedValueChanged(newMaskedValue: any): void;
    /** Pattern the value must match to be valid */
    pattern: string;
    /** Text that appears in the input when it has no value set */
    placeholder: string;
    /** Specifies the pad character. */
    padCharacter: string;
    /** When true, puts the input in readonly mode */
    readonly: boolean;
    /** The restore value is the number that appears when the user hits the restore key (usually ESC). */
    restoreValue: string;
    /**  If true, a value is required or must be check for the form to be submittable. */
    required: boolean;
    /** The spellcheck global attribute is an enumerated attribute defines whether the element may be checked for spelling errors. */
    spellcheck: boolean;
    /**
     * @bbjIgnore
     * When true the control will show the up/down spinner buttons
     **/
    showSpinners: boolean;
    /**
     * @bbjIgnore
     * When true, the control will fire spin events for wheel and mouse interactions.
     **/
    spinnable: boolean;
    /** Indicates that the component can receive focus. A negative value indicates that the component is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /**
     * A javascript expression or function to validate the control.
     * if the expression has the 'return' word in it, then we use as is,
     * if not, then wrap it with return and ';' to make a function.
     *
     * The expression has access to the following parameters:
     *
     * <ol>
     * <li> `value`: The control's unmasked value.
     * <li> `x`: Alias for value.
     * <li> `text`: For consistency with the legacy control and form validation APIs, same as `value`.
     * <li> `component`: The instance of the client component.
     * <li> `control`: Alias for component.
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
    validationPopoverPlacement: DwcAlertPopoverPlacement;
    /**  When `popover`, the invalid message will be displayed as a popover; otherwise it will be shown as an inline message. */
    validationStyle: DwcValidationStyle;
    /** Set to true to indicate that the user input is valid. */
    valid: boolean;
    /** The input's unmasked value */
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
    /** Emitted when the control is validated */
    validatedEvent: EventEmitter<boolean>;
    connectedCallback(): void;
    disconnectedCallback(): void;
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
     * Sets the input selection range
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
    /** Validate the control */
    validate(): Promise<boolean>;
    /** Query one of the component supported parts */
    getPart(part: string): Promise<unknown>;
    doRestore(fireChangedEvent?: boolean): void;
    private isUnformattedText;
    private isMaskedValueEmpty;
    private doMask;
    private doUnmask;
    private getNoneStandardMaskChars;
    private seekCursor;
    private getPaddedValue;
    private syncValues;
    private syncScroll;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleClick;
    private handleFocus;
    private handleBlur;
    private handleKeyDown;
    private handleInput;
    private handleKeyup;
    private handleCopyCut;
    private handlePaste;
    private handleSpinUp;
    private handleSpinDown;
    private fireModifiedEvent;
    render(): any;
}
