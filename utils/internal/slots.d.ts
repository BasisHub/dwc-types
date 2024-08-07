export declare class SlotsObserver {
    private host;
    private slotNames;
    private isConnected;
    /**
     * Initializes a new instance of the `HostUtils` class.
     *
     * @param host - The host element.
     * @param slotNames - The slot names to monitor.
     */
    constructor(host: HTMLElement, ...slotNames: string[]);
    /**
     * Determines whether the host element has content in the specified slot.
     *
     * If the slot name is `[default]`, this method checks for content in the default slot.
     *
     * @param slotName - The slot name to check.
     * @returns `true` if the host element has content in the specified slot; otherwise, `false`.
     */
    hasContent(slotName: string): boolean;
    /**
     * Attaches the slot change event listener to the host element.
     *
     * This method should be called in the `connectedCallback` lifecycle method.
     * By default, the method is called once when the observer is initialized.
     */
    connect(): void;
    /**
     * Detaches the slot change event listener from the host element.
     *
     * This method should be called in the `disconnectedCallback` lifecycle method.
     */
    disconnect(): void;
    private hasDefault;
    private hasCustom;
    private handleSlotChange;
    private updateHost;
}
