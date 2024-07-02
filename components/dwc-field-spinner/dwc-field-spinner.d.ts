import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `BBjEditBoxSpinner<dwc-field-spinner>` adds spinner functionality to the `BBjEditBox`.
 *
 * ?> **Note:** In BBj. The `BBjEditBoxSpinner<dwc-field-spinner>` accepts all the [BBjEditBox\<dwc-datefield\>](dwc/dwc-field) supported attributes and properties.
 *
 * @slot - The main slot where a dwc-field component must be inserted
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjSpinner - Always applied
 * @hostClass BBjEditBoxSpinner - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-readonly - Applied when the component is readonly
 * @hostClass BBjSpinner-arrows - Applied on the arrow buttons on container
 * @hostClass BBjSpinner-upArrow - Applied on the arrow up button
 * @hostClass BBjSpinner-downArrow - Applied on the arrow down button
 *
 * @bbjControl BBjEditBoxSpinner
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjeditboxspinner.htm?Highlight=BBjEditbox
 *
 * @bbjMessage BuildListSpinnerMessage
 * @bbjMessage SpinSpinnerMessage
 * @bbjMessage GetSpinnerListIndexMessage
 * @bbjMessage SetSpinnerListIndexMessage
 * @bbjMessage SetSpinnerListMessage
 * @bbjMessage SpinEventCallbackMessage
 * @bbjMessage EditModifyEventCallbackMessage
 * @bbjMessage EditKeypressEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcFieldSpinner {
    private $field;
    disabled: boolean;
    readonly: boolean;
    el: HTMLDwcFieldSpinnerElement;
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
    /** Emitted after the input has been modified. */
    modifiedEvent: EventEmitter<string>;
    /** Emitted after the input has been spun. */
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
     * @param upDirection If non-zero, the spinner will change according to an up arrow activation;
     *                    otherwise, the spinner will change according to a down arrow activation.
     **/
    spin(upDirection: boolean): Promise<void>;
    private doSpin;
    private fireSpinedEvent;
    private fireModifiedEvent;
    private handleSlotChange;
    render(): any;
}
