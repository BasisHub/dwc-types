import { EventEmitter } from '../../stencil-public-runtime';
import { DwcExpression } from '../../utils/dwc-expression';
import { DwcHighlightBehaviors } from '../../utils/dwc-highlight-behaviors';
/**
 * The `BBjCEdit<dwc-textarea>` provides methods for manipulating a UI textarea control.
 *
 * @slot prefix - The input's prefix - can be used to insert icons
 * @slot suffix - The input's suffix - can be used to insert icons
 *
 * @part control - The component's base wrapper.
 * @part label -  The input's label
 * @part input-wrapper - The input, prefix and suffix wrapper
 * @part input - The actual input
 * @part alert -  The alert component(validation)
 * @part alert-popover -  The alert-popover component(validation)
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjCEdit - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass bbj-hasLabel - Applied when the input renders a label
 * @hostClass bbj-valid - Applied when the input is marked as valid
 * @hostClass bbj-invalid - Applied when the input is marked as invalid
 * @hostClass bbj-required - Applied when the input required
 * @hostClass bbj-transparent - `[optional]` Can be added manually to remove the component background
 * @hostClass bbj-noborder - `[optional]` Can be added manually to remove the component border
 * @hostClass bbj-no-overflow-x - `[optional]` Can be added manually to disable horizontal overflow
 * @hostClass bbj-no-overflow-y - `[optional]` Can be added manually to disable vertical overflow
 * @hostClass bbj-no-overflow - `[optional]` Can be added manually to disable horizontal & vertical overflow
 * @hostClass bbj-wordBreak-word - `[optional]` Can be added manually to use the default line break rule.
 * @hostClass bbj-wordBreak-all - `[optional]` Can be added manually to prevent overflow; word breaks should be inserted between any two characters (excluding Chinese/Japanese/Korean text).
 *
 * @bbjControl BBjCEdit
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjcedit/bbjcedit.htm
 *
 * @bbjMessage BuildTextAreaMessage
 * @bbjMessage SetTextMessage
 * @bbjMessage GetTextMessage
 * @bbjMessage SetFocusMessage
 * @bbjMessage SelectAllMessage
 * @bbjMessage SetSelectionRangeMessage
 * @bbjMessage SetCursorPosMessage
 * @bbjMessage GetCursorPosMessage
 * @bbjMessage AddParagraphsMessage
 * @bbjMessage AppendParagraphMessage
 * @bbjMessage GetCurrentParagraphIndexMessage
 * @bbjMessage GetLineCountMessage
 * @bbjMessage GetParagraphMessage
 * @bbjMessage GetTextAreaSelectionMessage
 * @bbjMessage RemoveParagraphMessage
 * @bbjMessage SetCEditTracksContainerBoundsMessage
 * @bbjMessage SetTextAreaLimitsMessage
 * @bbjMessage SetTextAreaSelectionMessage
 * @bbjMessage SetWordBreakMessage
 * @bbjMessage SetPaddingMessage
 * @bbjMessage GetComputedPxMessage
 * @bbjMessage SetPlaceholderColorMessage
 * @bbjMessage SetStyleMessage
 * @bbjMessage GetStyleMessage
 * @bbjMessage EditModifyEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcTextarea {
    private $input;
    private inputId;
    private isMouseInComponent;
    private lastSelectionStart;
    private lastSelectionEnd;
    private oldValue;
    private oldSelectionStart;
    private oldSelectionEnd;
    private validationExpressionEngine;
    el: HTMLDwcTextareaElement;
    builtinInvalidMessage: string;
    /**
     * Toggles the auto-completion feature on/off.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     */
    autocomplete: string;
    /** A string indicating whether or not autocorrect is on or off. Safari only. */
    autocorrect: 'on' | 'off';
    /** Automatically focus the form control when the page is loaded. */
    autofocus: boolean;
    /** When true, the component will be validated with every change. */
    autoValidate: boolean;
    /** When true, the component will be validated when it is loaded for the first time. */
    autoValidateOnLoad: boolean;
    /** When true, the component will switch the `valid` property on automatically after the component is validated and became valid. */
    autoWasValidated: boolean;
    /** The visible width of the component, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20. */
    cols: number;
    /** When true, the component cannot be interacted with. */
    disabled: boolean;
    /** The component's expanse. */
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** When true, the component has focus; otherwise, it is blurred */
    hasFocus: boolean;
    /**
     * An array of supported of highlight behaviors.
     *
     * <ol>
     *  <li>KEY     : Contents of the component are automatically highlighted when the component receives focus by tabbing into it.
     *  <li>MOUSE   : Contents of the component are automatically highlighted when the component receives focus by clicking into it with the mouse.
     *  <li>REQUEST : Contents of the component are automatically highlighted when the component receives focus programmatically by calling the `setFocus` method.
     * </ol>
     **/
    highlightBehaviors: Array<DwcHighlightBehaviors>;
    /** Set to true to indicate that user input is invalid. */
    invalid: boolean;
    /** An error message to present to the user when the component is invalid. */
    invalidMessage: string;
    /** If in insert mode, then characters are inserted into the component when typed. Otherwise, the characters are overwritten. */
    insertMode: boolean;
    /** the component's label. */
    label: string;
    /** Maximum length (number of characters) of value. */
    maxlength: number;
    /** Sets the maximum number of paragraphs (lines) that can be entered. */
    maxLineCount: number;
    /** Sets the maximum number of characters allowed in a control paragraph. */
    maxLineLength: number;
    /** Minimum length (number of characters) of value. */
    minlength: number;
    /** The component's name. */
    name: string;
    /** Text that appears in the component when it has no value set. */
    placeholder: string;
    /** When true, put the input in readonly mode. */
    readonly: boolean;
    /** When true, a value is required for the form to be submittable. */
    required: boolean;
    /** The number of visible text lines for the component. */
    rows: number;
    /** When true, the component will have its spelling and grammar checked. */
    spellcheck: boolean;
    /** Indicates that the component can be focused. A negative value means that the component is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /**
     * A Javascript expression or function to validate the component.
     *
     * If the expression has the `return` keyword in it, then it is used as is;
     * if not, then wrap it with `return` and `;` to make a function.
     *
     * The expression has access to the following parameters:
     * <ol>
     *  <li>`value`: the component's value
     *  <li>`x`: Alias for value
     *  <li>`text`: For consistency with the legacy control and form validation APIs, same as `value`
     *  <li>`component`: The instance of the client component
     *  <li>`control`: Alias for component
     * </ol>
     **/
    validator: DwcExpression;
    /**
     * The icon to use with the validation message.
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
    /** The distance in pixels to offset the validation message away from the component. */
    validationPopoverDistance: number;
    /** The distance in pixels to offset the validation message along the component. */
    validationPopoverSkidding: number;
    /** The preferred placement of the validation message. */
    validationPopoverPlacement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** When `popover`, the invalid message will be displayed as a popover; otherwise it will display as an inline message. */
    validationStyle: 'popover' | 'inline';
    /** Set to true to indicate that the user input is valid. */
    valid: boolean;
    /** The input's value. */
    value: any;
    onValueChanged(): void;
    /**
     * Indicates how the component will wrap the text. Possible values are:
     *
     * <ol>
     *  <li>`hard`: The browser automatically inserts line breaks `(CR+LF)` so that each line has no more than the width of the component; the cols attribute must also be specified for this to take effect.
     *  <li>`soft`: The browser ensures that all line breaks in the value consist of a `CR+LF` pair, but does not insert any additional line breaks.
     *  <li>`off` : Like soft but changes appearance to white-space: pre so line segments exceeding cols are not wrapped and the `<textarea>` becomes horizontally scrollable.
     * </ol>
     **/
    wrap: 'hard' | 'soft' | 'off';
    /** Emitted after the input is changed. */
    modifiedEvent: EventEmitter<string>;
    /** Emitted after the component is focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the component is blurred. */
    blurredEvent: EventEmitter<void>;
    /** Emitted when the input is invalid. */
    validatedEvent: EventEmitter<boolean>;
    connectedCallback(): void;
    componentDidLoad(): void;
    onWindowKeyup(ev: KeyboardEvent): void;
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
     *                       An index greater than the length of the component's value is
     *                      treated as pointing to the end of the value.
     *
     * @param {Number} end The 0-based index of the character after the last selected character.
     *                     An index greater than the length of the component's value is treated as
     *                     pointing to the end of the value.
     */
    setSelectionRange(start: number, end: number): Promise<void>;
    /** Gets the input selection range. */
    getSelectionRange(): Promise<{
        start: number;
        end: number;
    }>;
    /** Sets the caret position in the input. */
    setCursorPos(position: number): Promise<void>;
    /** Gets the caret position in the input. */
    getCursorPos(): Promise<number>;
    /** Queries one of the component supported parts. */
    getPart(part: string): Promise<unknown>;
    /** Validates the component. */
    validate(): Promise<boolean>;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleFocus;
    private handleBlur;
    private handleKeydown;
    private handleInput;
    private handleKeyup;
    private fireModifiedEvent;
    render(): any;
}
