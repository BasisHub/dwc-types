import { EventEmitter } from '../../stencil-public-runtime';
import { DwcExpression } from '../../utils/dwc-expression';
/**
 * The `BBjRadioButton<dwc-radio>` provides methods for manipulating a UI radio button control.
 *
 * @part control - The component's base wrapper
 * @part input-wrapper -  The input's wrapper
 * @part input -  The actual input
 * @part label -  The input's label
 * @part checked-icon -  The checked icon wrapper
 * @part checked-icon-svg - The checked svg
 * @part alert -  The alert component(validation)
 * @part alert-popover -  The alert-popover component(validation)
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjRadioButton - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass bbj-checked - Applied when the checkbox is checked
 * @hostClass bbj-unchecked - Applied when the checkbox is unchecked
 * @hostClass bbj-valid - Applied when the checkbox is valid
 * @hostClass bbj-invalid - Applied when the checkbox is invalid
 * @hostClass bbj-reverse-order - reverse the order of the label and the radio
 *
 * @bbjControl BBjRadioButton
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjradiobutton/BBjRadioButton.htm?Highlight=BBjRadio
 *
 * @bbjMessage BuildRadioButtonMessage
 * @bbjMessage SetRadioButtonSelectMessage
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
export declare class DwcRadio {
    private $input;
    private labelEl;
    private inputId;
    private disableChangingCheckedTemporally;
    private validationExpressionEngine;
    el: HTMLDwcRadioElement;
    /** When true, the control will be validated with every change. */
    autoValidate: boolean;
    /** When true, the control will be validated when it is loaded for the first time. */
    autoValidateOnLoad: boolean;
    /** When true, the control will switch the `valid` property automatically after the control is validated and became valid. */
    autoWasValidated: boolean;
    /**
     * When set to auto, radio buttons will be selected when they gain focus for any reason. When set to
     *  manual, radio buttons will not be selected when they gain focus programmatically or by user keyboard operation (LEFT,  RIGHT, UP, DOWN arrows within a group).
     *
     * @bbjDefault 'manual'
     */
    activation: 'auto' | 'manual';
    /** When true, the radio button is checked , false otherwise */
    checked: boolean;
    onCheckedChanged(newChecked: any): void;
    /** True to disable the radio button , false to enable it  */
    disabled: boolean;
    /**
     * The component's expanse.
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** When true,  the radio button is focused , false otherwise */
    hasFocus: boolean;
    /** Set to true to indicate that the user input is invalid. */
    invalid: boolean;
    /** An error message to present to the user when the control is invalid */
    invalidMessage: string;
    /** The radio button label*/
    label: string;
    /**
     * The radio button name<br><br>
     *
     * A radio group is defined by giving each of radio buttons in the group
     *  the same name. Once a radio group is established, selecting any radio
     *  button in that group automatically deselects any currently-selected
     *  radio button in the same group.<br><br>
     *
     * You can have as many radio groups on a page as you like, as long as
     *  each has its own unique name.<br><br>
     *
     * For example, if your form needs to ask the user for their preferred
     *  contact method, you might create three radio buttons, each with
     *  the name property set to contact but one with the value email, one
     *  with the value phone, and one with the value mail.<br><br>
     *
     * The user never sees the value or the name unless you
     *  expressly add code to display it.
     **/
    name: string;
    /** When true, put the radio button in readonly mode. */
    readonly: boolean;
    /** When true, the radio button will be rendered as a switch. */
    switch: boolean;
    /** Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /**  When true, a value is required or must be check for the form to be submittable. */
    required: boolean;
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
    /** The radio button value */
    value: string;
    /** Emitted after the input is checked/unchecked. */
    changedEvent: EventEmitter<void>;
    /** Emitted after the control is focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the control is blurred. */
    blurredEvent: EventEmitter<void>;
    /** Emitted when the control is validated */
    validatedEvent: EventEmitter<boolean>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleClick(ev: MouseEvent): void;
    /** Set focus on the radio button */
    setFocus(): Promise<void>;
    /** Remove focus from the radio button */
    removeFocus(): Promise<void>;
    /** Validate the control */
    validate(): Promise<boolean>;
    /** Query one of the component supported parts */
    getPart(part: string): Promise<unknown>;
    private getRadiosList;
    private getRadiosSiblingList;
    private check;
    private handleFocus;
    private handleBlur;
    private handleKeyDown;
    private fireChangedEvent;
    render(): any;
}
