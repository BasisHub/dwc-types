import { EventEmitter } from '../../stencil-public-runtime';
/**
 * A Toast is a subtle notification commonly used in modern applications.
 * It can be used to provide feedback about an operation or to display a system message.
 *
 * A toast can contain buttons by adding `a` and `button` elements to the message's body. If
 * any of these elements has the `data-action="close"` attribute then it will behave as a dismiss button.
 *
 * ```html
 * <dwc-toast message="The application has new update available" opened>
 *   <button>Update</button>
 *   <button data-action="close">Later</button>
 * </dwc-toast>
 * ```
 *
 * @slot - The place where the message or buttons can be inserted.
 *
 * @part control - The component's base wrapper
 * @part message -  The message's container
 * @part buttons - The button's container
 * @part message-wrapper - The message's wrapper
 *
 * @hostClass bbj-opened - Applied when the toast is opened
 *
 * @bbjControl BBjToast
 * @bbjControlLink https://bbj-plugins.github.io/BBjToast/#/
 * @bbjWidget
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcToast {
    private timer;
    private isOpened;
    el: HTMLDwcToastElement;
    paused: boolean;
    /**
     * The duration in milliseconds to show the toast.
     * After that this time is elapsed , the toast will be hidden automatically.
     * If the duration number is negative the toast will never close automatically
     **/
    duration: number;
    /** The toast's message. */
    message: string;
    /** When true, the toast will be shown , hidden otherwise */
    opened: boolean;
    onOpenedChanged(): void;
    /** The placement of the toast */
    placement: 'bottom-left' | 'bottom' | 'bottom-right' | 'top-left' | 'top' | 'top-right' | "center";
    onPlacementChanged(): void;
    /** The theme name */
    theme: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'gray' | null;
    /** Emitted after the toast is opened.*/
    openedEvent: EventEmitter<void>;
    /** Emitted after the toast is closed.*/
    closedEvent: EventEmitter<void>;
    connectedCallback(): void;
    handleClick(ev: any): void;
    componentDidLoad(): void;
    /** Opens the toast */
    open(): Promise<void>;
    /** Closes the toast */
    close(): Promise<void>;
    /**
     * Gets the toast group element
     *
     * @returns {HTMLElement} the toast group element
     */
    private getToastGroup;
    private startTimer;
    private endTimer;
    private handleMouseEnter;
    private handleMouseLeave;
    render(): any;
}
