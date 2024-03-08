import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `BBjInputNSpinner<dwc-numberfield-spinner>` provides a spinner control on a standard `BBjInputN`.
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
    el: HTMLDwcNumberfieldSpinnerElement;
    /** Enable/disable the input */
    disabled: boolean;
    /**
     * The component's expanse
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** The input's label */
    label: string;
    /** The maximum number to which the spinner will spin. */
    max: number;
    /** The minimum number to which the spinner will spin. */
    min: number;
    /** When true, puts the input in readonly mode. */
    readonly: boolean;
    /** The amount by which the spinner will change upon a spin action. */
    step: number;
    /** When true, up/down buttons will be shown as dwc-numberfield suffix. */
    showSpinners: boolean;
    /** Emitted after the input is changed. */
    modifiedEvent: EventEmitter<number>;
    /** Emitted after the input has spun up or down. */
    spinedEvent: EventEmitter<{
        value: string;
        mask: string;
    }>;
    handleAttributesChanged(): void;
    connectedCallback(): void;
    handleSpinedUp(): void;
    handleSpinedDown(): void;
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
    private syncAttributes;
    private doSpin;
    private fireSpinedEvent;
    private fireModifiedEvent;
    private handleSlotChange;
    render(): any;
}
