import { EventEmitter } from '../../stencil-public-runtime';
import { DwcExpression } from '../../utils/dwc-expression';
import { DwcHighlightBehaviors } from '../../utils/dwc-highlight-behaviors';
/**
 * The `BBjEditBox<dwc-field>` provides methods for manipulating a UI edit box control.
 *
 * @slot prefix - the component's prefix. Can be used to insert icons
 * @slot suffix - the component's suffix. Can be used to insert icons
 *
 * @part control - The component's base wrapper
 * @part label -  the component's label
 * @part input-wrapper - the component, prefix & suffix wrapper
 * @part input - The actual input
 * @part prefix - the component's prefix
 * @part suffix - the component's suffix
 * @part spinners - the component's spinners wrapper
 * @part up-button - the component's up spinner button
 * @part down-button - the component's down spinner button
 * @part password-reveal - The password reveal icon's container
 * @part eye-icon - The eye open icon
 * @part eye-off-icon - The eye closed icon
 * @part alert - The alert component(validation)
 * @part alert-popover - The alert-popover component(validation)
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjEditBox - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass bbj-hasLabel - Applied when the component renders a label
 * @hostClass bbj-valid - Applied when the component is marked as valid
 * @hostClass bbj-invalid - Applied when the component is marked as invalid
 * @hostClass bbj-required - Applied when the component required
 * @hostClass bbj-password - Applied when the component's type is `password`
 * @hostClass bbj-transparent - `[optional]` Can be added manually to remove the component background
 * @hostClass bbj-noborder - `[optional]` Can be added manually to remove the component border
 *
 * @bbjControl BBjEditBox
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjfield/bbjeditbox.htm?Highlight=BBjEditbox
 *
 * @bbjMessage BuildEditBoxMessage
 * @bbjMessage BuildPasswordFieldMessage
 * @bbjMessage SetTextMessage
 * @bbjMessage GetTextMessage
 * @bbjMessage GetInputTextMessage
 * @bbjMessage SetFocusMessage
 * @bbjMessage SelectAllMessage
 * @bbjMessage SetSelectionRangeMessage
 * @bbjMessage SetCursorPosMessage
 * @bbjMessage GetCursorPosMessage
 * @bbjMessage GetTextBoxSelectionMessage
 * @bbjMessage SetPaddingMessage
 * @bbjMessage GetComputedPxMessage
 * @bbjMessage SetPlaceholderColorMessage
 * @bbjMessage SetStyleMessage
 * @bbjMessage GetStyleMessage
 * @bbjMessage EditKeypressEventCallbackMessage
 * @bbjMessage EditModifyEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcField {
    private $input;
    private inputId;
    private isMouseInComponent;
    private lastSelectionStart;
    private lastSelectionEnd;
    private lastTouchY;
    private validationExpressionEngine;
    el: HTMLDwcFieldElement;
    isPasswordVisible: boolean;
    builtinInvalidMessage: string;
    /** Hint for expected file type in file upload controls. */
    accept: string;
    /** When true, the component will be validated with every change. */
    autoValidate: boolean;
    /** When true, the component will be validated when it is loaded for the first time. */
    autoValidateOnLoad: boolean;
    /** When true, the component will switch on the `valid` property automatically after it is validated and becomes valid. */
    autoWasValidated: boolean;
    /**
     * Toggles the auto-completion feature on/off.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     */
    autocomplete: string;
    /** Automatically focuses the form control when the page is loaded. */
    autofocus: boolean;
    /** A string indicating whether or not autocorrect is on or off. Safari only. */
    autocorrect: 'on' | 'off';
    /** When true, the component cannot be interacted with. */
    disabled: boolean;
    /**
     * The component's expanse.
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** When true, the component has focus; otherwise it is blurred. */
    hasFocus: boolean;
    /**
     * An array of supported of highlight behaviors.
     *
     * <ol>
     *  <li>KEY     : Contents of the component are automatically highlighted when the component gets focus by tabbing into it.
     *  <li>MOUSE   : Contents of the component are automatically highlighted when the component gets focus by clicking into it with the mouse.
     *  <li>REQUEST : Contents of the component are automatically highlighted when the component gets focus under program control by calling the `setFocus` method.
     * </ol>
     **/
    highlightBehaviors: Array<DwcHighlightBehaviors>;
    /** Set to true to indicate that the user input is invalid. */
    invalid: boolean;
    /** An error message to display to the user when the component is invalid. */
    invalidMessage: string;
    /** the component's label. */
    label: string;
    /** Maximum value. */
    max: string | number;
    /** Maximum length (number of characters) of value. */
    maxlength: number;
    /**	Minimum value. */
    min: string | number;
    /** Minimum length (number of characters) of value. */
    minlength: number;
    /** Boolean representing whether or not to allow multiple values. */
    multiple: boolean;
    /** The component's name. */
    name: string;
    /** The pattern that the value must match for the component to be considered valid. */
    pattern: string;
    /** Text that appears in the component when it has no value set. */
    placeholder: string;
    /** Show/Hide the password reveal icon when the component type is `password`. */
    passwordReveal: boolean;
    /** When true, put the component in readonly mode. */
    readonly: boolean;
    /** When true, a value is required for the form to be submittable. */
    required: boolean;
    /** The size of the component. */
    size: number;
    /** When true, the component will have its spelling and grammar checked. */
    spellcheck: boolean;
    /** Incremental values that are valid. */
    step: number;
    /**
     * @bbjIgnore
     * When true, the component will show the up/down spinner buttons.
     **/
    showSpinners: boolean;
    /**
     * @bbjIgnore
     * When true, the component will fire spin events for wheel and mouse interactions.
     **/
    spinnable: boolean;
    /** Indicates that the component can receive focus. A negative value indicates that the component is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /** Type of form control ('color' | 'date' | 'datetime-local' | 'email' | 'file' | 'month' | 'number' | 'password' | 'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week') */
    type: 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'month' | 'number' | 'password' | 'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
    /**
       * A Javascript expression or function to validate the component.
       *
       * If the expression has the `return` keyword in it, then it is used as is;
       * if not, then wrap it with `return` and `;` to make a function.
       *
       * The expression has access to the following parameters:
       * <ol>
       *  <li>`value`: The control's
       *  <li>`x`: Alias for value
       *  <li>`text`: For consistency with the legacy control and form validation APIs, same as `value`
       *  <li>`component`: The instance of the client component
       *  <li>`control`: Alias for component
       * </ol>
       */
    validator: DwcExpression;
    /**
     * The icon to use with the validation message.
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
    /** The distance in pixels to offset the validation message away from the component. */
    validationPopoverDistance: number;
    /** The distance in pixels to offset the validation message along the component. */
    validationPopoverSkidding: number;
    /** The preferred placement of the validation message. */
    validationPopoverPlacement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** When `popover`, the invalid message will be displayed as a popover; otherwise it will be displayed as an inline message. */
    validationStyle: 'popover' | 'inline';
    /** Set to true to indicate that the user input is valid. */
    valid: boolean;
    /** The component's value. */
    value: any;
    onValueChanged(): void;
    /** Emitted after the component has been modified. */
    modifiedEvent: EventEmitter<string>;
    /** Emitted after the component has been focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the component has been blurred. */
    blurredEvent: EventEmitter<void>;
    /** Emitted after the component has been spun up. */
    spunUpEvent: EventEmitter<void>;
    /** Emitted after the component has been spun down. */
    spunDownEvent: EventEmitter<void>;
    /** Emitted when the component is invalid */
    validatedEvent: EventEmitter<boolean>;
    connectedCallback(): void;
    componentDidLoad(): void;
    onWindowKeyup(ev: KeyboardEvent): void;
    handleKeyUp(ev: KeyboardEvent): void;
    handleWheel(ev: any): void;
    /**
     * Causes the spinner to spin in the specified direction.
     *
     * @param upDirection If non-zero, the spinner up event will be fired;
     *                    otherwise, the spinner down event will be fired.
     **/
    spin(upDirection: boolean): Promise<void>;
    /** Sets focus on the component. */
    setFocus(): Promise<void>;
    /** Removes focus from the component. */
    removeFocus(): Promise<void>;
    /** Selects the component text. */
    selectAll(): Promise<void>;
    /**
     * Sets the component selection range.
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
    /** Gets the component selection range. */
    getSelectionRange(): Promise<{
        start: number;
        end: number;
    }>;
    /** Sets the caret position in the component. **/
    setCursorPos(position: number): Promise<void>;
    /** Gets the caret position in the component. **/
    getCursorPos(): Promise<number>;
    /** Queries one of the component-supported parts. */
    getPart(part: string): Promise<unknown>;
    /** Validate the component. */
    validate(): Promise<boolean>;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleFocus;
    private handleBlur;
    private handleInput;
    private handleSpinUp;
    private handleSpinDown;
    private handlePasswordToggle;
    private fireModifiedEvent;
    render(): any;
}
