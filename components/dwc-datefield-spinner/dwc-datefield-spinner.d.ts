import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `BBjInputDSpinner<dwc-datefield-spinner>` provides a spinner on a `BBjInputD`.
 *
 * ?> **Note:** In BBj. The `BBjInputDSpinner<dwc-datefield-spinner>` accepts all the [BBjInputD\<dwc-datefield\>](dwc/dwc-datefield) supported attributes and properties.
 *
 * @slot - The main slot where a dwc-datefield component must be inserted
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjSpinner - Always applied
 * @hostClass BBjInputDSpinner - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass BBjSpinner-arrows - Applied on the arrow buttons on container
 * @hostClass BBjSpinner-upArrow - Applied on the arrow up button
 * @hostClass BBjSpinner-downArrow - Applied on the arrow down button
 *
 * @bbjControl BBjInputDSpinner
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjinputdspinner/bbjinputdspinner.htm?Highlight=BBjInputD
 *
 * @bbjMessage BuildDateSpinnerMessage
 * @bbjMessage SpinSpinnerMessage
 * @bbjMessage GetSpinnerNextDateMessage
 * @bbjMessage GetSpinnerPreviousDateMessage
 * @bbjMessage SetSpinnerListMessage
 * @bbjMessage SpinEventCallbackMessage
 * @bbjMessage EditModifyEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcDatefieldSpinner {
    private $inputd;
    disabled: boolean;
    readonly: boolean;
    max: number;
    min: number;
    el: HTMLDwcDatefieldSpinnerElement;
    /** Specifies whether the spinner will spin by days, weeks, months, or years. The default spin field is DAY. */
    field: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
    /** Emitted after the input is changed. */
    modifiedEvent: EventEmitter<string>;
    /** Emitted after the input has spun up or down. */
    spinedEvent: EventEmitter<number>;
    connectedCallback(): void;
    handleSpinedUp(): void;
    handleSpinedDown(): void;
    handleRequiredPropsChanged(event: CustomEvent): void;
    /** Set focus on the control */
    setFocus(): Promise<void>;
    /** Remove focus from the control */
    removeFocus(): Promise<void>;
    /**
     * causes the spinner to spin in the specified direction.
     *
     * @param upDirection If nonzero, the spinner will change according to an up arrow activation,
     *                    otherwise, the spinner will change according to a down arrow activation.
     **/
    spin(upDirection: boolean): Promise<void>;
    /** Returns the date that the spinner would return, as a Julian date, if pressing the spin up button. */
    getNextDate(): Promise<number>;
    /** Returns the date that the spinner would return, as a Julian date, if pressing the spin down button. */
    getPreviousDate(): Promise<number>;
    private doSpin;
    private modifyDate;
    private fireSpinedEvent;
    private fireModifiedEvent;
    private handleSlotChange;
    render(): any;
}
