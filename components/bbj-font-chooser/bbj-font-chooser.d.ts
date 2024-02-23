import { EventEmitter } from '../../stencil-public-runtime';
import { BbjFontChooserFont, BbjFontChooserI18n } from './bbj-font-chooser.types';
import '@a11y/focus-trap';
/**
 * The `BBjFontChooser<bbj-font-chooser>` object provides methods for manipulating a GUI font chooser control and an interface to allow users to select fonts, for example, in a preferences dialog.
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjFontChooser - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-popup - Applied when the component is in popup mode
 *
 * @bbjControl BBjFontChooser
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjfontchooser/bbjfontchooser.htm
 *
 * @bbjMessage BuildFontChooserMessage
 * @bbjMessage ClickChooserButtonMessage
 * @bbjMessage SetChooserButtonsVisibleMessage
 * @bbjMessage SetFontValueMessage
 * @bbjMessage GetFontValueMessage
 * @bbjMessage SetChooserButtonTextMessage
 * @bbjMessage GetChooserButtonTextMessage
 * @bbjMessage SetChooserButtonMnemonicIndexMessage
 * @bbjMessage callback/FontChooserApproveEventCallbackMessage
 * @bbjMessage callback/FontChooserCancelEventCallbackMessage
 * @bbjMessage callback/FontChooserChangeEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjFontChooser {
    private $control;
    private $focusTrap;
    private $approveButton;
    private $cancelButton;
    private $familiesList;
    private $familyInput;
    private $stylesList;
    private $styleInput;
    private $sizesList;
    private $sizeInput;
    private $popover;
    private lastSelectedFontFamily;
    private lastSelectedFontStyle;
    private lastSelectedFontSize;
    el: HTMLBbjFontChooserElement;
    /** The approve button access key. */
    approveAccessKey: string;
    /**
    * The list of UI components to render. Possible values are:
    *  `family`, `style`, `size`, `preview`, `approveButton`, `cancelButton`
    *
    * @bbjDefault "font,style,size,preview"
    **/
    components: string;
    /** The cancel button access key */
    cancelAccessKey: string;
    /** True to disable the font chooser, false to enable it.  */
    disabled: boolean;
    /** The distance in pixels to offset the popover away from its trigger. */
    distance: number;
    /** The component's expanse */
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** An array of predefined font families to display. */
    familiesList: Array<string> | string;
    /** The default font value */
    fontFamily: string;
    /** The default font size */
    fontSize: number;
    /** The default font style */
    fontStyle: string;
    /** The font chooser translation object */
    i18n: BbjFontChooserI18n | string;
    /** Sets the popover width. */
    openWidth: string;
    /** Sets the popover max-height. */
    openHeight: string;
    /** When true, the popover is opened; otherwise it is closed. */
    opened: boolean;
    /** Describes the preferred placement of the popover */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** When true, the chooser will be rendered as a popover; otherwise it will be rendered inline. */
    popup: boolean;
    /** The preview text to use */
    previewText: string;
    /** When true, families list items will use the font family to create an in-place preview. */
    previewFontsInList: boolean;
    /** The distance in pixels to offset the popover along its trigger. */
    skidding: number;
    /** An array of predefined font sizes to use. */
    sizesList: number[] | string;
    /** An array of predefined font styles to display. Supported values are `bold` , `italic`, `plain` and `bold italic` */
    stylesList: Array<string> | string;
    /** Fired whenever the selected font is changed. */
    changedEvent: EventEmitter<BbjFontChooserFont>;
    /** Fired when the approve button is clicked. */
    approvedEvent: EventEmitter<BbjFontChooserFont>;
    /** Fired when the cancel button is clicked. */
    canceledEvent: EventEmitter<void>;
    onValuesChanged(): void;
    connectedCallback(): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    /** Clicks the approve button */
    approve(): Promise<void>;
    /** Clicks the cancel button */
    cancel(): Promise<void>;
    private updateScroll;
    private handleSelectionChanged;
    private handleListInputModified;
    private handleListInputBlurred;
    private handlePopoverHandlerBlurred;
    private handleApprove;
    private handleCancel;
    private handleOpened;
    private handleClosed;
    private fireChangedEvent;
    private parseList;
    private validateFontVariation;
    private updatePreview;
    private getPopoverHandlerValue;
    render(): any;
}
