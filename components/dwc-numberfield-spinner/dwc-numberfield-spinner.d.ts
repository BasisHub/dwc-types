import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `BBjInputNSpinner<dwc-numberfield-spinner>` provides a spinner control on a standard `BBjInputN`.
 *
 * ?> **Note:** In BBj. The `BBjInputNSpinner<dwc-numberfield-spinner>` accepts all the [BBjInputN\<dwc-numberfield\>](dwc/dwc-numberfield) supported attributes and properties.
 *
 * @slot - The main slot where a dwc-numberfield component must be inserted
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjSpinner - Always applied
 * @hostClass BBjInputNSpinner - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass BBjSpinner-arrows - Applied on the arrow buttons on container
 * @hostClass BBjSpinner-upArrow - Applied on the arrow up button
 * @hostClass BBjSpinner-downArrow - Applied on the arrow down button
 *
 * @bbjControl BBjInputNSpinner
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjinputnspinner/bbjinputnspinner.htm?Highlight=BBjInputN
 *
 * @bbjMessage BuildNumberSpinnerMessage
 * @bbjMessage SpinSpinnerMessage
 * @bbjMessage SetSpinnerStepSizeMessage
 * @bbjMessage SpinEventCallbackMessage
 * @bbjMessage EditModifyEventCallbackMessage
 * @bbjMessage InputKeypressEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcNumberfieldSpinner {
    private $inputn;
    disabled: boolean;
    readonly: boolean;
    min: number;
    max: number;
    el: HTMLDwcNumberfieldSpinnerElement;
    /** The amount by which the spinner will change upon a spin action. */
    step: number;
    /** Emitted after the input is changed. */
    modifiedEvent: EventEmitter<number>;
    /** Emitted after the input has spun up or down. */
    spinedEvent: EventEmitter<{
        value: string;
        mask: string;
    }>;
    connectedCallback(): void;
    handleSpinedUp(): void;
    handleSpinedDown(): void;
    handleRequiredPropsChanged(event: CustomEvent): void;
    /** Sets focus on the control. */
    setFocus(): Promise<void>;
    /** Removes focus from the control. */
    removeFocus(): Promise<void>;
    /**
     * cCauses the spinner to spin in the specified direction.
     *
     * @param upDirection If nonzero, the spinner will change according to an up arrow activation,
     *                    otherwise, the spinner will change according to a down arrow activation.
     **/
    spin(upDirection: boolean): Promise<void>;
    private doSpin;
    private fireSpinedEvent;
    private fireModifiedEvent;
    private handleSlotChange;
    render(): any;
}
