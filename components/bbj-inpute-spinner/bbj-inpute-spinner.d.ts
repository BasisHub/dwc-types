import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `BBjInputESpinner<bbj-inpute-spinner>` provides a spinner on a `BBjInputE.`
 *
 * @slot - The main slot where a bbj-inpute component must be inserted
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
export declare class BbjInputeSpinner {
    private $inpute;
    el: HTMLBbjInputeSpinnerElement;
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
    /**
     * @bbjIgnore
     * The list of values to display when spinning.
     **/
    list: string[];
    /**
     * @bbjIgnore
     * Sets the currently displayed value to the one at the specified index in the list.
     **/
    listIndex: number;
    /** When true, put the input in readonly mode. */
    readonly: boolean;
    /** When true, up/down buttons will be shown; otherwise they are hidden. */
    showSpinners: boolean;
    /** When true, the user will abe able to loop through the list of available options. */
    wrap: boolean;
    /** Emitted after the input is changed. */
    modifiedEvent: EventEmitter<string>;
    /** Emitted after the input has spun up or down. */
    spinedEvent: EventEmitter<string>;
    handleAttributesChanged(): void;
    connectedCallback(): void;
    handleSpinedUp(): void;
    handleSpinedDown(): void;
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
    private syncAttributes;
    private doSpin;
    private fireSpinEvent;
    private fireModifiedEvent;
    private handleSlotChange;
    render(): any;
}
