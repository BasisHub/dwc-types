import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `BBjEditBoxSpinner<bbj-editbox-spinner>` adds spinner functionality to the `BBjEditBox`.
 *
 * @slot - The main slot where a bbj-editbox component must be inserted
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
export declare class BbjEditboxSpinner {
    private $editbox;
    el: HTMLBbjEditboxSpinnerElement;
    /** When true, the component cannot be interacted with. */
    disabled: boolean;
    /**
     * The component's expanse.
     *
     * @bbjDefault null
     **/
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** The component's label. */
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
    /** When true, puts the input into readonly mode. */
    readonly: boolean;
    /** When true, the up/down buttons will be shown; otherwise they will be hidden. */
    showSpinners: boolean;
    /** When true, the user will abe able to loop through the list of available options. */
    wrap: boolean;
    /** Emitted after the input has been modified. */
    modifiedEvent: EventEmitter<string>;
    /** Emitted after the input has been spun. */
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
     * @param upDirection If non-zero, the spinner will change according to an up arrow activation;
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
