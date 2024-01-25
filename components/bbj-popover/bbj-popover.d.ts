import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `<bbj-popover>` provides methods for manipulating a UI popover panel that shows on a content screen
 * when a user clicks on a control or within a defined area.
 *
 * @slot - The popover's content.
 * @slot handler - The popover's handler.
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjPopover {
    private popper;
    private isOpened;
    private $positioner;
    private $handler;
    private $popover;
    private mutationObserver;
    el: HTMLBbjPopoverElement;
    /** When true the popover arrow will be shown, hidden otherwise. */
    arrow: boolean;
    /**	Specifies that the control should be disabled. */
    disabled: boolean;
    /** The distance in pixels from which to offset the popover away from its trigger. */
    distance: number;
    /** When true then the popover is opened, closed otherwise. */
    opened: boolean;
    onOpenedChanged(): void;
    /** Sets the popover width */
    openWidth: string;
    /** Sets the popover max-height */
    openHeight: string;
    /** Describes the preferred placement of the popover */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** The distance in pixels from which to offset the popover along its trigger. */
    skidding: number;
    /** When true, the popover cannot be closed or opened by the user, otherwise only togglable with API. */
    togglable: boolean;
    /** When true, the popover will be toggled when the handler is clicked. */
    toggleOnClick: boolean;
    /** When true, the popover will toggled when enter is pressed. */
    toggleOnEnter: boolean;
    /** When true, the popover will open when arrows keys are used. */
    toggleOnArrow: boolean;
    /** Give the popover a custom type attribute. */
    type: string;
    onWidthAndHeightChange(): void;
    onProperOptionsChanged(): void;
    /** Fired after the popover is opened.*/
    openedEvent: EventEmitter<void>;
    /** Fired after the popover is closed. */
    closedEvent: EventEmitter<void>;
    /** Fired after the popover is canceled. */
    cancelEvent: EventEmitter<void>;
    connectedCallback(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /** Opens the popover */
    open(): Promise<void>;
    /** Closes the popover */
    close(): Promise<void>;
    /** Open/closes the popover */
    toggle(): Promise<void>;
    /** Forces the popover re-position */
    reposition(): Promise<void>;
    /**
     * Retrieves the positioner element.
     * @returns {Promise<HTMLElement>} The positioner element.
     */
    getPositionerElement(): Promise<HTMLElement>;
    private doOpen;
    private doClose;
    private doToggle;
    private focusHandler;
    private updateHandlerAccessible;
    private updatePopoverStyle;
    private handleDocumentKeyDown;
    private handleDocumentMouseDown;
    private handleHandlerClick;
    private handleHandlerKeyDown;
    private handleHandlerKeyUp;
    render(): any;
}
