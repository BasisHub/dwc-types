/**
 * `<bbj-app-layout>` is a responsive layout component that provides a header, a footer, a drawer, and content.
 * The header and footer are fixed, the drawer slides in and out of the viewport, and the content is scrollable.
 *
 * This component can be used to build common application layouts, such as a dashboard.
 *
 * @slot - The default slot is used to place the content of the layout.
 * @slot header - The header slot is used to place the header content.
 * @slot footer - The footer slot is used to place the footer content.
 * @slot drawer - The drawer slot is used to place the drawer content.
 * @slot drawer-title - The drawer-title slot is used to place the drawer title content.
 * @slot drawer-footer - The drawer-footer slot is used to place the drawer footer content.
 * @slot drawer-header-actions - The drawer-header-actions slot is used to place the drawer header actions content.
 *
 * @part content - The content part is the container for the default slot.
 * @part header - The header part is the container for the header slot.
 * @part footer - The footer part is the container for the footer slot.
 * @part drawer - The drawer part is the container for the drawer slot.
 * @part drawer-header - The drawer-header part is the container for the drawer-header slot.
 * @part drawer-footer - The drawer-footer part is the container for the drawer-footer slot.
 * @part drawer-header-actions - The drawer-header-actions part is the container for the drawer-header-actions slot.
 * @part drawer-control - The drawer-control part is the container for the drawer control.
 *
 * @bbjControl BBjAppLayout
 * @bbjControlLink https://bbj-plugins.github.io/BBjAppLayout/#/
 * @bbjWidget
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjAppLayout {
    private $header;
    private $content;
    private $footer;
    private msl;
    private drawerWasOpened;
    private drawerWasPopover;
    private loaded;
    private mutationObserver;
    scrollPosition: 'top' | 'bottom' | 'middle';
    lastScrollTop: number;
    el: HTMLBbjAppLayoutElement;
    /** The drawer position. */
    drawerPlacement: 'left' | 'right' | 'hidden';
    /** When true, the drawer is opened, otherwise it is closed. */
    drawerOpened: boolean;
    /** When true, the drawer will pop over the header, footer and the content area. */
    drawerPopover: boolean;
    /** When true and the `drawerPopover` is enabled, the drawer will have an overlay behind it when it is opened. */
    drawerOverlay: boolean;
    /** When true, the drawer will show the footer section. */
    drawerFooterVisible: boolean;
    /** When true, the drawer will show the header section. */
    drawerHeaderVisible: boolean;
    onDrawerOverlayChanged(value: any): void;
    /**
     * A media query to control when the drawer will be switched to popover mode.
     *
     * Useful for small screens. By default the drawer popover mode will be enabled
     * when the screen size is `800px` or less.
     */
    drawerBreakpoint: string;
    onDrawerBreakpointChanged(value: any): void;
    /**
     * When true, the content area will fill the viewport height, otherwise the content area will be scrollable.
     *
     * When setting this property to `true` you should make the `html` and `body` elements
     * non-scrollable.
     *
     * @bbjIgnore
     */
    fitViewport: boolean;
    /**
     * When true, the header is hidden, visible otherwise.
     * @internal
     **/
    dataHeaderHidden: boolean;
    /** When true, the footer will be fixed at the top and won't move when the user scrolls. */
    footerFixed: boolean;
    /** When true, the footer position will be shifted to fit beside the opened drawer. */
    footerOffscreen: boolean;
    /** When true, the footer will be revealed when the user scrolls up and hidden when scrolls down. */
    footerReveal: boolean;
    /**
     * When set to `scroll`, the header will have a shadow after revealing.
     * Alternatively, when set to `always`, the shadow will always be visible; otherwise, it remains hidden.
     */
    headerShadow: 'none' | 'scroll' | 'always';
    /**
     * When true, the footer is hidden, visible otherwise.
     * @internal
     **/
    dataFooterHidden: boolean;
    /** When true, the header will be fixed at the top and won't move when the user scrolls. */
    headerFixed: boolean;
    /** When true, the header position will be shifted to fit beside the opened drawer. */
    headerOffscreen: boolean;
    /** When true, the header will be revealed when the user scrolls up and hidden when scrolls down. */
    headerReveal: boolean;
    /**
     * When set to `scroll`, the footer will have a shadow after revealing.
     * When set to `always`, the shadow will always be visible, otherwise, it's hidden.
     */
    footerShadow: 'none' | 'scroll' | 'always';
    onLayoutOptionsChanged(): void;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleResize(): void;
    handleScroll(): void;
    handleClick(ev: MouseEvent): void;
    private handleDrawerToggled;
    private handleDrawerPopoverMode;
    render(): any;
}
