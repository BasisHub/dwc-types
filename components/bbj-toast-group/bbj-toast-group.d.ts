/**
 * @internal
 * @bbjIgnore
 * The toast group component is a container for toasts.
 * It is used to position the toasts in the desired location.
 *
 * The element is used internally by the bbj-toast component.
 *
 * @slot - The default slot where toasts are placed.
 */
export declare class BbjToastGroup {
    el: HTMLBbjToastGroupElement;
    /** The placement of the toast stack */
    placement: 'bottom-left' | 'bottom' | 'bottom-right' | 'top-left' | 'top' | 'top-right' | 'center';
    connectedCallback(): void;
    private handleSlotChange;
    render(): any;
}
