import { EventEmitter } from '../../stencil-public-runtime';
import { TinyColor, ColorInput } from '@ctrl/tinycolor';
import '@a11y/focus-trap';
import './dwc-hsla-color-picker';
import { DwcColorChooserI18n, DwcColorChooserSwatch } from './dwc-color-chooser.types';
/**
 * The `BBjColorChooser<dwc-color-chooser>` provides methods for manipulating a UI color chooser control and an interface which allows users to select colors, for example, in a preferences dialog.
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjChooser - Applied when the component is used as a normal button
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-popup - Applied when the component is in popup mode
 * @hostClass bbj-noborder - `[optional]` Can be added manually to remove the component border
 *
 * @bbjControl BBjColorChooser
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjcolorchooser/bbjcolorchooser.htm?Highlight=BBjColorChooser
 *
 * @bbjMessage BuildColorChooserMessage
 * @bbjMessage ClickChooserButtonMessage
 * @bbjMessage SetChooserButtonsVisibleMessage
 * @bbjMessage SetIntegerValueMessage
 * @bbjMessage GetIntegerValueMessage
 * @bbjMessage SetChooserButtonTextMessage
 * @bbjMessage GetChooserButtonTextMessage
 * @bbjMessage SetChooserButtonMnemonicIndexMessage
 * @bbjMessage callback/ColorChooserChangeEventCallbackMessage
 * @bbjMessage callback/ColorChooserApproveEventCallbackMessage
 * @bbjMessage callback/ColorChooserCancelEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcColorChooser {
    private $popover;
    private focusTrap;
    private $spinner;
    private $input;
    private $copyButton;
    private $approveButton;
    private $cancelButton;
    private $nativeInput;
    el: HTMLDwcColorChooserElement;
    /** The approve button access key. */
    approveAccessKey: string;
    /**
     * The alpha value, which ranges from 0 to 1.
     * @readonly
     */
    alpha: number;
    /**
     * The blue value, which ranges from 0 to 255.
     * @readonly
     **/
    blue: number;
    /**
     * The perceived brightness of a color, which ranges from 0-255, as defined by [Web Content Accessibility Guidelines (Version 1.0)](https://www.w3.org/TR/AERT/#color-contrast).
     * @readonly
     */
    brightness: number;
    /**
     * The name of the color.
     * @readonly
     */
    colorName: string;
    /** When true, the component cannot be interacted with. */
    disabled: boolean;
    /**
     * The list of UI components to render.
     *
     * @bbjDefault "saturation, hue, alpha, preview, eyeDropper, copy, input, swatches, cancelButton, approveButton"
     **/
    components: string;
    /** The cancel button access key. */
    cancelAccessKey: string;
    /** The distance in pixels to offset the popover away from its trigger. */
    distance: number;
    /** The component's expanse. */
    expanse: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /**
     * The green value, which ranges from 0 to 255.
     * @readonly
     */
    green: number;
    /**
     * The value as a hex string.
     * @readonly
     */
    hex: string;
    /**
     * The value as a hex8 string.
     * @readonly
     */
    hex8: string;
    /**
     * The value as a hsl object.
     * @readonly
     */
    hsl: {
        h: number;
        s: number;
        l: number;
        a: number;
    };
    /**
     * The value as a hsl string.
     * @readonly
     */
    hslString: string;
    /**
     * The value as a hsv object.
     * @readonly
     **/
    hsv: {
        h: number;
        s: number;
        v: number;
        a: number;
    };
    /**
     * The value as a hsv string.
     * @readonly
     */
    hsvString: string;
    /**
     * The hue value, which ranges from 0 to 360.
     * @readonly
     */
    hue: number;
    /** The component translation object. */
    i18n: DwcColorChooserI18n | string;
    /**
     * The perceived luminance of a color, from 0-1. as defined in [Web Content Accessibility Guidelines (Version 2.0)](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef).
     * @readonly
     */
    luminance: number;
    /**
     * The color lightness value.
     * @readonly
     */
    lightness: number;
    /** The name of the trigger button when the popover mode is enabled. */
    name: string;
    /**
     * When true, the native color picker provided by the browser will be used.
     *
     * Note that with native color pickers, colors with an alpha channel are not supported;
     */
    native: boolean;
    /** Sets the popover width. */
    openWidth: string;
    /** Sets the popover max-height. */
    openHeight: string;
    /** When true, the popover is opened; otherwise it is closed. */
    opened: boolean;
    /** The preferred placement of the popover. */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** When true, the color picker will be rendered as a popover; otherwise it will be inline. */
    popup: boolean;
    /**
     * The red value, which ranges from 0 to 255.
     * @readonly
     */
    red: number;
    /**
     * The value as a rgb object.
     * @readonly
     */
    rgb: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    /**
     * The value as a rgb string.
     * @readonly
     */
    rgbString: string;
    /**
     * The saturation value, which ranges 0 to 100.
     * @readonly
     */
    saturation: number;
    /** The distance in pixels to offset the popover along its trigger. */
    skidding: number;
    /** An array of predefined color swatches to display. */
    swatches: Array<DwcColorChooserSwatch> | string;
    /** The theme name. */
    theme: 'default' | 'gray' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | null;
    /** The component's value */
    value: ColorInput;
    onValueChanged(newValue: any): void;
    /** Emitted whenever the selected color is changed. */
    changedEvent: EventEmitter<TinyColor>;
    /** Emitted when the approve button is clicked. */
    approvedEvent: EventEmitter<TinyColor>;
    /** Emitted when the cancel button is clicked. */
    canceledEvent: EventEmitter<void>;
    connectedCallback(): void;
    componentWillLoad(): void;
    /** Clicks the approve button. */
    approve(): Promise<void>;
    /** Clicks the cancel button. */
    cancel(): Promise<void>;
    private updateColorProps;
    private parseSwatchColor;
    private handlePick;
    private handleInputChanged;
    private handleSwatchSelect;
    private handleCopy;
    private handleEyeDropper;
    private handleApprove;
    private handleCancel;
    private handleOpened;
    private handleClosed;
    private handleNativeInputButtonClick;
    private handleNativeInputChange;
    private fireChangedEvent;
    render(): any;
}
