import { EventEmitter } from '../../stencil-public-runtime';
import { BbjDialogClosedPayload } from './bbj-dialog.types';
import '@a11y/focus-trap';
/**
 * The `{{CONTROL_NAME}}<bbj-dialog>` creates a {{CONTROL_NAME_WITH_LINK}} dialog box.
 *
 * {{#eq CONTROL_NAME "MSGBOX"}}
 *  **Syntax:** `MSGBOX(str1{,expr{,str2{,button1{,button2{,button3}}}}}{,MODE="options"}{,TIM=int}{,ERR=lineref})`
 *
 *  ```BBj
 *    selected = msgbox("This is the message", 0, "MessageBox", mode="blurred=true,button-0-theme=gray")
 *  ```
 *
 * Each attribute listed in the table below can be passed to the `MSGBOX` dialog using the `MODE` option.
 * For example, `mode="blurred=true"` will set the dialog to be blurred.
 *
 * The `MSGBOX` dialog uses `BBjButton<bbj-button>` to render the buttons. Any supported [`BBjButton<bbj-button>`](dwc/BBjButton.md) attributes can
 * also be passed to the `MSGBOX` function using the `MODE` option. In this case, the attribute must be prefixed with `button-` followed by the button
 * index (starting from 0). For example, `button-0-theme=gray` will set the first button theme to `gray`.
 *
 * {{/eq}}
 *
 * {{#eq CONTROL_NAME "PROMPT"}}
 *  **Syntax:** `PROMPT(message{,default{,title{,expr}}}{,MODE="options"}{,TIM=int}{,ERR=lineref})`
 *
 * ```BBj
 *   password$ = prompt("Enter your password","","Credentials Required",0, mode="input-type=PASSWORD,blurred=true,button-0-theme=gray")
 * ```
 * Each attribute listed in the table below can be passed to the `PROMPT` dialog using the `MODE` option. For example, `mode="blurred=true"` will set the
 * dialog to be blurred.
 *
 * The `PROMPT` dialog uses [`BBjButton<bbj-button>`](dwc/BBjButton.md) to render the buttons and
 * [`BBjEditBox<bbj-editbox>`](dwc/BBjEditBox.md) to render the input. Any supported [`BBjButton<bbj-button>`](dwc/BBjButton.md) attributes can also be
 * passed to the `PROMPT` function using the `MODE` option. In this case, the attribute must be prefixed with `button-` followed by the button index
 * (starting from 0). For example, `button-0-theme=gray` will set the first button theme to `gray`. The same applies to the input box. Any supported
 * [`BBjEditBox<bbj-editbox>`](dwc/BBjEditBox.md) attributes can be passed to the `PROMPT` function using the `MODE` option. In this case, the attribute
 * must be prefixed with `input-`. For example, `input-type=PASSWORD` will set the input type to `password`.
 *
 * {{/eq}}
 *
 * @slot header - The dialog's header
 * @slot content - The dialog's content
 * @slot footer - The dialog's footer
 *
 * @part modal - The backdrop modal behind the dialog
 * @part dialog - The dialog's wrapper
 *
 * @hostClass bbj-opened - When the dialog is opened
 * @hostClass bbj-scrollable - When the dialog content is scrollable
 * @hostClass bbj-scrolledFromTop - When the dialog content is scrolled away from the header
 * @hostClass bbj-scrolledToBottom - When the dialog content is scrolled to the bottom
 *
 * @bbjControl MSGBOX, PROMPT
 * @bbjControlLink
 *  https://documentation.basis.cloud/BASISHelp/WebHelp/commands/bbj-commands/msgbox_function_bbj.htm,
 *  https://documentation.basis.cloud/BASISHelp/WebHelp/commands/prompt_function.htm
 *
 * @bbjMessage {{#eq CONTROL_NAME "MSGBOX"}}ShowMsgBoxMessage{{else}}ShowPromptMessage{{/eq}}
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjDialog {
    private static readonly FROM_TOP_ATTR;
    private static readonly TO_BOTTOM_ATTR;
    private $focusTrap;
    private $modal;
    private $dialog;
    private $content;
    private $lastActiveElement;
    private dragMoveInstance;
    private animated;
    private msl;
    private oldPosx;
    private oldPosy;
    private oldMaxWidth;
    private oldMaxHeight;
    private wasMovable;
    el: HTMLBbjDialogElement;
    /** The dialog alignment. */
    alignment: 'top' | 'center' | 'bottom';
    /**
     * When true, automatically focuses the first focusable element in the dialog.
     */
    autofocus: boolean;
    /** When true, shows the dialog backdrop; otherwise it is hidden. */
    backdrop: boolean;
    /** When true, the backdrop will be blurred. */
    blurred: boolean;
    /**
     * A media query to control when the dialog will automatically flip to the full screen mode.
     *
     * When the media query matches, the dialog will be full-screen, otherwise it will be positioned.
     * When the auto full screen is enabled, the dialog cannot be moved or positioned.
     */
    breakpoint: string;
    onBreakpointChanged(newBreakpoint: any): void;
    /**
     * Set to false to disable canceling the overlay with the ESC key.<br><br>
     *
     * **Note** If you are setting this attribute from BBj, function type `2` (Abort, Retry, Ignore) or `4` (Yes, No),
     *   will always resolve to `false` because the user must click one of the buttons.
     */
    cancelOnEscKey: boolean;
    /**
     * Set to false to disable canceling the overlay by clicking outside it.<br><br>
     *
     * **Note** If you are setting this attribute from BBj, function type `2` (Abort, Retry, Ignore) or `4` (Yes, No)
     *   will always resolve to `false` because the user must click one of the buttons.
     *
     * @bbjDefault false
     */
    cancelOnOutsideClick: boolean;
    /** The dialog container. */
    container: HTMLElement;
    /** When true, the dialog will fill the available screen space. */
    fullscreen: boolean;
    /** When true, the dialog will be positioned using `fixed`; otherwise, it will be positioned using `absolute`. */
    hoist: boolean;
    /** When true, the dialog can be moved by clicking and dragging. */
    moveable: boolean;
    onMoveableChanged(newMoveable: any): void;
    /** Specifies the dialog's max width.  */
    maxWidth: string;
    /** Specifies the dialog's max height.  */
    maxHeight: string;
    /** Indicates whether or not the dialog is open. */
    opened: boolean;
    onOpenedChanged(): void;
    /** Specifies the X position for the dialog.  */
    posx: string;
    /** Specifies the Y position for the dialog.  */
    posy: string;
    /** When true, the dialog cannot be dragged outside the viewport. */
    snapToEdge: boolean;
    onSnapToEdgeChanged(newSnapToEdge: any): void;
    /** The number of pixels to take into count before the dialog is considered outside the viewport. */
    snapThreshold: number;
    onSnapThresholdChanged(newSnapThreshold: any): void;
    /** The theme name. */
    theme: 'default' | 'gray' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | null;
    /** Emitted after the component has been closed. */
    closedEvent: EventEmitter<BbjDialogClosedPayload>;
    /** Emitted after the component has been opened. */
    openedEvent: EventEmitter;
    onStyleChanged(): void;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    componentDidLoad(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    /** Opens the dialog. */
    open(): Promise<void>;
    /** Closes the dialog. */
    close(): Promise<void>;
    private doOpen;
    private doClose;
    private updateStyle;
    private switchDragging;
    private listenToModalClick;
    private updateIsScrollable;
    private getCount;
    private setCount;
    private fireOpenedEvent;
    private fireClosedEvent;
    private handleClick;
    private handleSlotChange;
    private handleSectionScroll;
    private updateScrollAttribute;
    private handleAnimationEnd;
    private handleBreakpointChange;
    render(): any;
}
