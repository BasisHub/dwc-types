/**
 * The `BBjBusyIndicator<dwc-loading>` provides an interface to manipulate an animated busy indicator with a developer-defined message.
 *
 * @slot - The dialog's message
 *
 * @part backdrop - The backdrop element
 * @part control - The component's base wrapper
 * @part spinner - The spinner element
 * @part focus-trap - The focus trap element
 *
 * @bbjControl BBjBusyIndicator
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBusyIndicator/BBjBusyIndicator.html
 *
 * @bbjMessage BuildBusyIndicatorMessage
 * @bbjMessage IsVisibleMessage
 * @bbjMessage SetFocusMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcLoading {
    el: HTMLDwcLoadingElement;
    /** The busy message. */
    message: string;
    /** When true, the backdrop will be hidden. otherwise, it is visible. */
    noBackdrop: boolean;
    /** When true, the busy indicator is opened; otherwise, it is hidden. */
    opened: boolean;
    /** When false, the spinner will be visible; otherwise, it is hidden. */
    suppressSpinner: boolean;
    /** When false, the message will be visible; otherwise, it is hidden. */
    suppressMessage: boolean;
    /** When true, the spinner's animation will be played clockwise; otherwise, it will be played counterclockwise. */
    spinnerClockwise: boolean;
    /** The spinner's expanse. */
    spinnerExpanse: '3xs' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
    /** When true, the spinner's animation will be paused; otherwise, it will continue to play. */
    spinnerPaused: boolean;
    /** The theme name. */
    spinnerTheme: 'default' | 'gray' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | null;
    /** The spinner's animation speed in milliseconds. */
    spinnerSpeed: number;
    render(): any;
}
