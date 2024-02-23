import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `BBjInputTSpinner<bbj-inputt-spinner>` provides a spinner on a `BBjInputT<bbj-inputt>`.
 *
 * ?> **Note:** In BBj. The `BBjInputTSpinner<bbj-inputt-spinner>` accepts all the [BBjInputT\<bbj-inputt\>](dwc/bbj-inputt) supported attributes and properties.
 *
 * @slot - The main slot where a bbj-inputt component must be inserted
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjSpinner - Always applied
 * @hostClass BBjInputTSpinner - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass BBjSpinner-arrows - Applied on the arrow buttons on container
 * @hostClass BBjSpinner-upArrow - Applied on the arrow up button
 * @hostClass BBjSpinner-downArrow - Applied on the arrow down button
 *
 * @bbjControl BBjInputTSpinner
 * @bbjControlLink #
 *
 * @bbjMessage BuildTimeSpinnerMessage
 * @bbjMessage SpinSpinnerMessage
 * @bbjMessage GetSpinnerNextTimeMessage
 * @bbjMessage SetSpinnerMaximumMessage
 * @bbjMessage SetSpinnerMinimumMessage
 * @bbjMessage SetSpinnerTimeFieldMessage
 * @bbjMessage GetSpinnerPreviousTimeMessage
 * @bbjMessage SpinEventCallbackMessage
 * @bbjMessage EditModifyEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjInputtSpinner {
    private $inputt;
    disabled: boolean;
    readonly: boolean;
    min: number;
    max: number;
    el: HTMLBbjInputtSpinnerElement;
    /** Specifies whether the spinner will spin by HOUR, MINUTE, SECOND or MILLISECOND. */
    field: 'HOUR' | 'MINUTE' | 'SECOND' | 'MILLISECOND';
    /** Specifies the amount of time to spin the spinner. */
    amount: number;
    /** Emitted after the input is changed. */
    modifiedEvent: EventEmitter<string>;
    /** Emitted after the input has spun up or down. */
    spinedEvent: EventEmitter<number>;
    connectedCallback(): void;
    componentDidLoad(): void;
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
    /**
     * Returns the time that the spinner would return if pressing the spin up button.
     *
     * @returns {Promise<number>} The next time as a number.
     * */
    getNextTime(): Promise<number>;
    /**
     * Returns the time that the spinner would return if pressing the spin down button.
     *
     * @returns {Promise<number>} The previous time as a number.
     **/
    getPreviousTime(): Promise<number>;
    private doSpin;
    private modifyTime;
    private fireSpinedEvent;
    private fireModifiedEvent;
    private handleSlotChange;
    render(): any;
}
