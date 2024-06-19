import { Slider } from 'vanilla-colorful/lib/components/slider';
import { AnyColor, ColorModel } from 'vanilla-colorful/lib/types';
declare const $isSame: unique symbol;
declare const $color: unique symbol;
declare const $hsva: unique symbol;
declare const $change: unique symbol;
declare const $picked: unique symbol;
declare const $update: unique symbol;
declare const $parts: unique symbol;
export declare const $css: unique symbol;
export declare const $sliders: unique symbol;
export type Sliders = Array<new (root: ShadowRoot) => Slider>;
export declare abstract class ColorPicker<C extends AnyColor> extends HTMLElement {
    static get observedAttributes(): string[];
    protected get [$css](): string[];
    protected get [$sliders](): Sliders;
    protected abstract get colorModel(): ColorModel<C>;
    private [$hsva];
    private [$color];
    private [$parts];
    get color(): C;
    set color(newColor: C);
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(_attr: string, _oldVal: string, newVal: string): void;
    handleEvent(event: CustomEvent): void;
    private [$isSame];
    private [$update];
    private [$change];
    private [$picked];
}
export declare abstract class AlphaColorPicker<C extends AnyColor> extends ColorPicker<C> {
    protected get [$css](): string[];
    protected get [$sliders](): Sliders;
}
export declare class HslaStringBase extends AlphaColorPicker<string> {
    protected get colorModel(): ColorModel<string>;
}
/**
 * A color picker custom element that uses HSLA string format.
 */
export declare class HslaStringColorPicker extends HslaStringBase {
}
declare global {
    interface HTMLElementTagNameMap {
        'dwc-hsla-color-picker': HslaStringColorPicker;
    }
}
export {};
