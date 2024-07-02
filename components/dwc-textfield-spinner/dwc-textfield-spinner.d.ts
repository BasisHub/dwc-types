import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `BBjInputESpinner<dwc-textfield-spinner>` provides a spinner on a `BBjInputE.`
 *
 * ?> **Note:** In BBj. The `BBjInputESpinner<dwc-textfield-spinner>` accepts all the [BBjInputE\<dwc-textfield\>](dwc/dwc-textfield) supported attributes and properties.
 *
 * @slot - The main slot where a dwc-textfield component must be inserted
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjSpinner - Always applied
 * @hostClass BBjInputESpinner - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass BBjSpinner-arrows - Applied on the arrow buttons on container
 * @hostClass BBjSpinner-upArrow - Applied on the arrow up button
 * @hostClass BBjSpinner-downArrow - Applied on the arrow down button
 *
 * @bbjControl BBjInputESpinner
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjinputespinner.htm?Highlight=BBjInputE
 *
 * @bbjMessage BuildListSpinnerMessage
 * @bbjMessage SpinSpinnerMessage
 * @bbjMessage GetSpinnerListIndexMessage
 * @bbjMessage SetSpinnerListIndexMessage
 * @bbjMessage SetSpinnerListMessage
 * @bbjMessage SpinEventCallbackMessage
 * @bbjMessage EditModifyEventCallbackMessage
 * @bbjMessage InputKeypressEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcTextfieldSpinner {
    private $inpute;
    disabled: boolean;
    readonly: boolean;
    el: HTMLDwcTextfieldSpinnerElement;
    /**
     * The list of values to display when spinning.
     **/
    list: string[];
    /**
     * Sets the currently displayed value to the one at the specified index in the list.
     **/
    listIndex: number;
    /** When true, the user will abe able to loop through the list of available options. */
    wrap: boolean;
    handleAttributesChanged(): void;
    /** Emitted after the input is changed. */
    modifiedEvent: EventEmitter<string>;
    /** Emitted after the input has spun up or down. */
    spinedEvent: EventEmitter<string>;
    connectedCallback(): void;
    handleSpinedUp(): void;
    handleSpinedDown(): void;
    handleRequiredPropsChanged(event: CustomEvent): void;
    /** Sets focus on the control. */
    setFocus(): Promise<void>;
    /** Removes focus from the control. */
    removeFocus(): Promise<void>;
    /**
     * Causes the spinner to spin in the specified direction.
     *
     * @param upDirection If nonzero, the spinner will change according to an up arrow activation,
     *                    otherwise, the spinner will change according to a down arrow activation.
     **/
    spin(upDirection: boolean): Promise<void>;
    private doSpin;
    private fireSpinEvent;
    private fireModifiedEvent;
    private handleSlotChange;
    render(): any;
}
