import { EventEmitter } from '../../stencil-public-runtime';
import { BbjSplitterResizePayload } from './bbj-splitter.types';
/**
 * The `BBjSplitter<bbj-splitter>` encapsulates two resizable components separated by a divider that
 * enables the user to dynamically resize them.
 *
 * @slot master - The master component.
 * @slot detail - The detail component.
 *
 * @part gutter - The gutter element.
 * @part gutter-handle - The gutter handle element.
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjSplitter - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-no-overflow - Can be added manually to restrict the panels overflow behaviour
 *
 * @bbjControl BBjSplitter
 *
 * @bbjMessage BuildSplitterMessage
 * @bbjMessage SetFirstComponentMessage
 * @bbjMessage SetSecondComponentMessage
 * @bbjMessage SetIntegerValueMessage
 * @bbjMessage GetIntegerValueMessage
 * @bbjMessage ControlScrollEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjSplitter {
    private $divider;
    private pointerDownState;
    private resizeObserver;
    private loaded;
    el: HTMLBbjSplitterElement;
    /**
     * When true, the size of the panels will be saved in local storage and restored on reload.
     * In order for auto save to work, the component must have an id attribute or a name attribute.
     */
    autosave: boolean;
    /** The minimum width of the detail panel when orientation is horizontal and the minimum height when vertical. */
    detailMinSize: string;
    /** The maximum width of the detail panel when orientation is horizontal and the maximum height when vertical. */
    detailMaxSize: string;
    /** True to disable the resizing, false to enable it.  */
    disabled: boolean;
    /** The layout's orientation.  */
    orientation: 'horizontal' | 'vertical';
    /** The minimum width of the master panel when orientation is horizontal and the minimum height when vertical. */
    masterMinSize: string;
    /** The maximum width of the master panel when orientation is horizontal and the maximum height when vertical. */
    masterMaxSize: string;
    /** The current position of the gutter from the primary panel's edge in pixels. */
    position: number;
    onPositionChanged(value: number): void;
    /** The current position of the gutter from the primary panel's edge as a percentage 0-100. */
    positionRelative: number;
    onPositionRelativeChanged(value: number): void;
    /**
     * True if the user is currently dragging the gutter.
     * @readonly
     **/
    resizing: boolean;
    /** Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /** The gutter's theme */
    theme: 'default' | 'gray' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | null;
    onRulesChanged(): void;
    /** Emitted when the panels are resized. */
    resizeEvent: EventEmitter<BbjSplitterResizePayload>;
    connectedCallback(): void;
    componentDidLoad(): void;
    private getComponents;
    private getComponentSize;
    private getCurrentPosition;
    private updateDimensions;
    private saveState;
    private restoreState;
    private handlePointerDown;
    private handlePointerMove;
    private handlePointerUp;
    private handleKeydown;
    private handleSlotChange;
    render(): any;
}
