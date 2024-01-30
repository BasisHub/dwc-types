import { EventEmitter } from '../../stencil-public-runtime';
import '@a11y/focus-trap';
/**
 * `<bbj-drawer>` is a container which slides in and out of the viewport to expose or hide additional options and information.
 *
 * @slot - The default slot
 * @slot title - The drawer's title section where the label is normally placed
 * @slot header-actions - The header actions
 * @slot footer - The footer
 *
 * @part backdrop - The backdrop element
 * @part control - The control element
 * @part header - The header element
 * @part title - The title element
 * @part header-actions - The header actions element
 * @part close-button - The close button element
 * @part body - The body element
 * @part footer - The footer element
 *
 * @hostClass bbj-opened - When the drawer is opened
 *
 * @bbjControl BBjDrawer
 * @bbjControlLink https://bbj-plugins.github.io/BBjDrawer/#/
 * @bbjWidget
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjDrawer {
    private $focusTrap;
    private $lastActiveElement;
    el: HTMLBbjDrawerElement;
    /** When true, automatically focuses the first focusable element in the drawer. */
    autofocus: boolean;
    /** When true, the drawer won't attempt to lock body scrollbars and trap focus. */
    contained: boolean;
    /** When true, the drawer will show the footer section. */
    footerVisible: boolean;
    /** When true, the drawer will show the header section. */
    headerVisible: boolean;
    /** The drawer's label. (Used for accessibility) */
    label: string;
    /** Indicates whether or not the drawer is open. */
    opened: boolean;
    onOpenedChanged(): void;
    /** The drawer position. */
    placement: 'top' | 'top-center' | 'bottom' | 'bottom-center' | 'left' | 'right';
    /** Emitted after the component has been closed */
    closedEvent: EventEmitter;
    /** Emitted after the component has been opened */
    openedEvent: EventEmitter;
    connectedCallback(): void;
    componentDidLoad(): void;
    handleClick(ev: MouseEvent): void;
    /** Opens the drawer. */
    open(): Promise<void>;
    /** Closes the drawer. */
    close(): Promise<void>;
    private doOpen;
    private doClose;
    private handleInternalCloseClick;
    render(): any;
}
