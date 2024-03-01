/**
 * An interface that represents the draggable box
 *
 * @author Hyyan Abo Fakher
 */
export interface DwcDraggableBox {
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
export interface DwcDraggableState {
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
export interface DwcDraggablePayload {
    element: HTMLElement;
    state: DwcDraggableState;
    box: DwcDraggableBox;
}
export interface DwcDraggableOptions {
    handler?: HTMLElement;
    parent?: HTMLElement;
    snapThreshold?: number;
    onStart?: (payload: DwcDraggablePayload) => void;
    onMove?: (payload: DwcDraggablePayload) => void;
    onEnd?: (payload: DwcDraggablePayload) => void;
}
/**
 * A class that will make an element draggable
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcDraggable {
    private element;
    private options;
    private enabled;
    private state;
    private box;
    /**
     * Construct a new draggable instance
     *
     * @param {HTMLElement} element the element that will be draggable
     * @param {DwcDraggableOptions} options the draggable options
     * @returns {DwcDraggable}
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
     * @see DwcDraggableOptions
     * @see DwcDraggablePayload
     * @see DwcDraggableState
     * @see DwcDraggableBox
     */
    constructor(element: HTMLElement, options: DwcDraggableOptions);
    /**
     * Enable the draggable instance
     *
     * @returns {DwcDraggable} the draggable instance
     */
    enable(): DwcDraggable;
    /**
     * Disable the draggable instance
     *
     * @returns {DwcDraggable} the draggable instance
     */
    disable(): DwcDraggable;
    /**
     * Check if the draggable instance is enabled
     *
     * @returns {boolean} true if the draggable instance is enabled, false otherwise
     */
    isEnabled(): boolean;
    /**
     * Destroy the draggable instance
     *
     * @param {DwcDraggableOptions} options the draggable options
     * @returns {DwcDraggable} the draggable instance
     */
    updateOptions(options: DwcDraggableOptions): DwcDraggable;
    private handleMouseDown;
    private handleMouseMove;
    private handleMouseUp;
}
