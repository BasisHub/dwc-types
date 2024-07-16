import { EventEmitter } from '../../stencil-public-runtime';
import { DwcExpression } from '../../utils/dwc-expression';
import { DwcAlertPopoverPlacement } from '../dwc-alert-popover/dwc-alert-popover.types';
import { DwcValidationStyle } from '../../utils/dwc-validation.types';
/**
 * The `BBjCheckBox<dwc-checkbox>` provides methods for manipulating a UI checkbox control.
 *
 * @slot - The checkbox's label
 * @slot helper-text - The slot where the helper text should be placed.
 *
 * @part control - The component's base wrapper
 * @part input-wrapper - The input's wrapper
 * @part input - The actual input
 * @part label - The input's label
 * @part checked-icon -  The checked icon wrapper
 * @part checked-icon-svg - The checked svg
 * @part indeterminate-icon -  The indeterminate icon wrapper
 * @part checked-indeterminate-svg - The indeterminate svg
 * @part alert - The alert component(validation)
 * @part alert-popover - The alert-popover component(validation)
 * @part helper-text - The helper text part
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjCheckBox - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass bbj-checked - Applied when the checkbox is checked
 * @hostClass bbj-unchecked - Applied when the checkbox is unchecked
 * @hostClass bbj-indeterminate - Applied when the checkbox is indeterminate
 * @hostClass bbj-valid - Applied when the checkbox is valid
 * @hostClass bbj-invalid - Applied when the checkbox is invalid
 * @hostClass bbj-required - Applied when the checkbox is required
 * @hostClass bbj-whitespace-wrap - Wrap the label in whitespace
 * @hostClass bbj-whitespace-nowrap - Don't wrap the label in whitespace
 * @hostClass bbj-reverse-order - Reverse the order of the label and the checkbox
 *
 * @bbjControl BBjCheckBox
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/BBjCheckBox/BBjCheckBox.htm?Highlight=BBjCheckBox
 *
 * @bbjMessage BuildCheckBoxMessage
 * @bbjMessage SetTextMessage
 * @bbjMessage SetFocusMessage
 * @bbjMessage GetBooleanValueMessage
 * @bbjMessage SetBooleanValueMessage
 * @bbjMessage SetTextLeftMessage
 * @bbjMessage GetValidationText
 * @bbjMessage CheckOffEventCallbackMessage
 * @bbjMessage CheckOnEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcCheckbox {
    private $input;
    private inputId;
    private validationExpressionEngine;
    private slotsObserver;
    el: HTMLDwcCheckboxElement;
    builtinInvalidMessage: string;
    /** When true, the component will be validated with every change. */
    autoValidate: boolean;
    /** When true, the component will be validated when it is loaded for the first time. */
    autoValidateOnLoad: boolean;
    /** When true, the component will switch the `valid` property automatically after the component is validated and became valid. */
    autoWasValidated: boolean;
    /** When true, the checkbox is checked; otherwise, it is unchecked. */
    checked: boolean;
    /** When true, the component cannot be interacted with. */
    disabled: boolean;
    /**
     * The component's expanse.
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** When true, the input has focus; otherwise it does not. */
    hasFocus: boolean;
    /** The component's helper text. */
    helperText: string;
    /** When true, the checkbox's value is neither true nor false, but is instead indeterminate, meaning that its state cannot be determined or stated in pure binary terms. */
    indeterminate: boolean;
    /** Set to true to indicate that the user input is invalid. */
    invalid: boolean;
    /** An error message to display to the user when the component is invalid. */
    invalidMessage: string;
    /** The component label. */
    label: string;
    /** The component name */
    name: string;
    /** When true, the input will be in readonly mode. */
    readonly: boolean;
    /** If true, a value is required, or in other words the component must be checked, for the form to be submittable. */
    required: boolean;
    /** Indicates that the component can receive focus. A negative value indicates that the component is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /**
     * A Javascript expression or function to validate the component.
     *
     * If the expression has the `return` keyword in it, then it is used as is;
     * if not, then wrap it with `return` and `;` to make a function
     *
     * The expression has access to the following parameters:
     * <ol>
     *  <li>`value`: The control's value
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
    validationPopoverPlacement: DwcAlertPopoverPlacement;
    /** When `popover`, the invalid message will be displayed as a popover; otherwise it is displayed as an inline message. */
    validationStyle: DwcValidationStyle;
    /** Set to true to indicate that the user input is valid. */
    valid: boolean;
    /** The component's value attribute. */
    value: string;
    handleStateChange(): void;
    /** Emitted after the component is checked/unchecked. */
    changedEvent: EventEmitter<void>;
    /** Emitted after the component is focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the component is blurred. */
    blurredEvent: EventEmitter<void>;
    /** Emitted when the component is validated. */
    validatedEvent: EventEmitter<boolean>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleHostClick(ev: MouseEvent): void;
    /** Sets focus on the component. */
    setFocus(): Promise<void>;
    /** Removes focus from the component. */
    removeFocus(): Promise<void>;
    /** Validates the component. */
    validate(): Promise<boolean>;
    /** Queries one of the component supported parts. */
    getPart(part: string): Promise<unknown>;
    private handleClick;
    private handleFocus;
    private handleBlur;
    render(): any;
}
