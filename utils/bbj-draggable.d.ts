/**
 * An interface that represents the draggable box
 *
 * @author Hyyan Abo Fakher
 */
export interface BbjDraggableBox {
    left: string;
    top: string;
    right: string;
    bottom: string;
}
/**
 * An interface that represents the draggable state
 *
 * @author Hyyan Abo Fakher
 */
export interface BbjDraggableState {
    distX: number;
    distY: number;
}
/**
 * An interface that represents the draggable payload
 * that will be passed to the callbacks
 * `onStart`, `onMove` and `onEnd` when they are called
 *
 * @author Hyyan Abo Fakher
 */
export interface BbjDraggablePayload {
    element: HTMLElement;
    state: BbjDraggableState;
    box: BbjDraggableBox;
}
export interface BbjDraggableOptions {
    handler?: HTMLElement;
    parent?: HTMLElement;
    snapThreshold?: number;
    onStart?: (payload: BbjDraggablePayload) => void;
    onMove?: (payload: BbjDraggablePayload) => void;
    onEnd?: (payload: BbjDraggablePayload) => void;
}
/**
 * A class that will make an element draggable
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjDraggable {
    private element;
    private options;
    private enabled;
    private state;
    private box;
    /**
     * Construct a new draggable instance
     *
     * @param {HTMLElement} element the element that will be draggable
     * @param {BbjDraggableOptions} options the draggable options
     * @returns {BbjDraggable}
     *
     * @example
     *
     * const draggable = new Draggable(document.getElementById('my-element'), {
     *  handler: document.getElementById('my-handler'),
     *  onStart: (payload: DraggablePayload) => {
     *     // do something when the drag starts
     *  },
     *
     *  onMove: (payload: DraggablePayload) => {
     *   // do something when the element is being dragged
     * },
     *
     * });
     * draggable.enable();
     * draggable.updateOptions({ snapThreshold: 10 });
     * draggable.destroy();
     *
     * @see BbjDraggableOptions
     * @see BbjDraggablePayload
     * @see BbjDraggableState
     * @see BbjDraggableBox
     */
    constructor(element: HTMLElement, options: BbjDraggableOptions);
    /**
     * Enable the draggable instance
     *
     * @returns {BbjDraggable} the draggable instance
     */
    enable(): BbjDraggable;
    /**
     * Disable the draggable instance
     *
     * @returns {BbjDraggable} the draggable instance
     */
    disable(): BbjDraggable;
    /**
     * Check if the draggable instance is enabled
     *
     * @returns {boolean} true if the draggable instance is enabled, false otherwise
     */
    isEnabled(): boolean;
    /**
     * Destroy the draggable instance
     *
     * @param {BbjDraggableOptions} options the draggable options
     * @returns {BbjDraggable} the draggable instance
     */
    updateOptions(options: BbjDraggableOptions): BbjDraggable;
    private handleMouseDown;
    private handleMouseMove;
    private handleMouseUp;
}
