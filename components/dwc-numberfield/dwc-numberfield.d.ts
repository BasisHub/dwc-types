import { EventEmitter } from '../../stencil-public-runtime';
import { DwcHighlightBehaviors } from '../../utils/dwc-highlight-behaviors';
import { DwcExpression } from '../../utils/dwc-expression';
/**
 * The `BBjInputN<dwc-numberfield>` provides methods for manipulating a UI InputN control.
 *
 * @slot prefix - The input's prefix. Can be used to insert icons
 * @slot suffix - The input's suffix. Can be used to insert icons
 *
 * @part control - The component's base wrapper
 * @part label -  The input's label
 * @part input-wrapper - The input,prefix & suffix wrapper
 * @part input - The actual input which contains the unmasked value
 * @part input-unmasked - The actual input which contains the masked value
 * @part prefix -  The input's prefix
 * @part suffix -  The input's suffix
 * @part spinners -  The input's spinners wrapper
 * @part up-button -  The input's up spinner button
 * @part down-button -  The input's down spinner button
 * @part alert -  The alert component(validation)
 * @part alert-popover -  The alert-popover component(validation)
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjInputN - Always applied
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
 * @bbjControl BBjInputN
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjinputn/BBjInputN.htm?Highlight=BBjInputN
 *
 * @bbjMessage BuildInputNMessage
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
 * @bbjMessage SetCommaMessage
 * @bbjMessage SetDotMessage
 * @bbjMessage SetMaskRoundingMessage
 * @bbjMessage SetNegateableMessage
 * @bbjMessage EditModifyEventCallbackMessage
 * @bbjMessage InputKeypressEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcNumberfield {
    private $input;
    private inputId;
    private allowedPrecision;
    private allowedNumbers;
    private maskedInput;
    private maskedInputCursorPos;
    private isMouseInComponent;
    private shouldFireChangedEvent;
    private lastTouchY;
    private validationExpressionEngine;
    el: HTMLDwcNumberfieldElement;
    builtinInvalidMessage: string;
    /** When true, the control will be validated with every change. */
    autoValidate: boolean;
    /** When true, the control will be validated when it is loaded for the first time. */
    autoValidateOnLoad: boolean;
    /** When true, the control will switch the `valid` property automatically after the control is validated and became valid. */
    autoWasValidated: boolean;
    /** A char which will be used as a grouping separator */
    comma: string;
    onCommaChanged(newComma: any, oldComma: any): void;
    /** A char which will be used as a decimal separator. */
    dot: string;
    onDotChanged(newDot: any, oldDot: any): void;
    /** When true, the component cannot be interacted with. */
    disabled: boolean;
    /**
     * The component's expanse.
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** Affects the output by switching the way a mask with "#" characters in the trailing positions is filled. for example, mask(.10,"#.##") returns .10 instead of .1. */
    forceTrailingZeros: boolean;
    onForceTrailingZerosChanged(newForceTrailingZeros: any, oldForceTrailingZeros: any): void;
    /** When true, the unmasked input is visible, masked input is visible otherwise. */
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
    /** An error message to display to the user when the control is invalid */
    invalidMessage: string;
    /** If in insert mode, then characters are inserted into the control when typed. Otherwise, the characters are overwritten. */
    insertMode: boolean;
    /** The inputs label */
    label: string;
    /** The input's name */
    name: string;
    /** The bbj number mask @see [BBj Number Masks](https://github.com/BasisHub/bbj-masks#number-masks) */
    mask: string;
    onMaskChanged(newMask: any, oldMask: any): void;
    /**
     * When the control is programmatically set to a value that
     * exceeds the mask precision, the value is truncated, not rounded. For example, if the mask
     * is "###,###,##0.00-", then programmatically setting the control value to -12345.6789 will
     * cause it to display "12,345.67-", the same value that it would show if the user attempted
     * to type those characters directly into the control.
     * This differs from the standard Numeric Output rules, which would round to "12,345.68-".
     * Setting this attribute to "TRUE" will cause the
     * input to round values that exceed the mask precision, consistent with standard numeric output rules.
     **/
    maskRounding: boolean;
    onMaskRoundingChanged(newMaskRounding: any, oldMaskRounding: any): void;
    /** The input's masked value */
    maskedValue: string;
    onMaskedValueChanged(maskedValue: any): void;
    /** When true, accepts negative values. */
    negateable: boolean;
    /** Text that appears in the input when it has no value set. */
    placeholder: string;
    /** When true, puts the input in readonly mode. */
    readonly: boolean;
    /** The restore value is the number that appears when the user hits the restore key (usually ESC). */
    restoreValue: string;
    /**  When true, a value is required for the form to be submittable. */
    required: boolean;
    /** When true, the control will show the up/down spinner buttons. */
    showSpinners: boolean;
    /**
     * @bbjIgnore
     * When true, the control will fire spin events for wheel and mouse interactions.
     **/
    spinnable: boolean;
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
    /**  When `popover`, the invalid message will be displayed as a popover, as an inline message otherwise */
    validationStyle: 'popover' | 'inline';
    /** Set to true to indicate that the user input is valid. */
    valid: boolean;
    /** The input's unmasked value. */
    value: string;
    onValueChanged(newValue: any, oldValue: any): void;
    /** Emitted after the input is changed. */
    modifiedEvent: EventEmitter<number>;
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
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentWillRender(): void;
    componentDidRender(): void;
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
     * Set the input selection range
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
    /** Validates the control */
    validate(): Promise<boolean>;
    /** Queries one of the component supported parts. */
    getPart(part: string): Promise<unknown>;
    private doRestore;
    /**
     * Applies the component's mask on the passed value.
     *
     * This method will be called several times whenever the mask properties or the
     * the input's value is changed.
     *
     * @param newValue the new input's value if any
     * @param oldValue the old input's value if any
     */
    private updateFromMaskedValue;
    private updateFromUnmaskedValue;
    /**
     * When the given value's precision exceeds the mask precision, the value is truncated or rounded
     * based on the component property `maskRounding`.
     *
     * @param value the value to round or truncate
     * @param precision the number of allowed decimals
     *
     * @return {String} rounded or truncated value
     */
    private roundOrTruncateValue;
    /**
     * Masks the give value
     *
     * @param value The value's to mask
     *
     * @return {String|Number} the masked value or null if the value cannot be masked
     */
    private applyMask;
    /**
     * Unmask the given masked value
     *
     * @param maskedValue
     * @returns string | null the unmasked value
     */
    private applyUnmask;
    private handleMaskedInputFocus;
    private handleMaskedInputBlur;
    private handleMaskedInputMouseEnter;
    private handleMaskedInputMouseLeave;
    private handleMaskedInputDrop;
    private handleInputFocus;
    private handleInputBlur;
    /**
     * Validate the passed value
     *
     * Make sure the passed value is a number that can be masked using the component's mask
     *
     * @param value
     *
     * @return {Boolean} True when the value is valid , false otherwise
     */
    private handleInputFilter;
    private handleInputKeyDown;
    private handleInputKeyup;
    private handleInputInsertMode;
    private fireModifiedEvent;
    private fireFocusedEvent;
    private handleSpinUp;
    private handleSpinDown;
    private localizeDecimal;
    private unlocalizeDecimal;
    render(): any;
}
