import { EventEmitter } from '../../stencil-public-runtime';
import { DwcSliderSlideEventPayload } from './dwc-slider.types';
import { DwcExpression } from '../../utils/dwc-expression';
/**
 * The `BBjSlider<dwc-slider>` provides methods for manipulating a UI slider control.
 *
 * @part base - The component's base wrapper
 * @part noUi-base - auto generated
 * @part noUi-connects - auto generated
 * @part noUi-origin - auto generated
 * @part noUi-handle - auto generated
 * @part noUi-touch-area - auto generated
 * @part noUi-pips - auto generated
 * @part noUi-marker - auto generated
 * @part noUi-value - auto generated
 * @part noUi-tooltip - auto generated
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjSlider - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-horizontal - Applied when the slider is horizontal
 * @hostClass bbj-vertical - Applied when the slider is vertical
 *
 * @bbjControl BBjSlider
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjslider/bbjslider.htm?Highlight=BBjSlider
 *
 * @bbjMessage BuildSliderBarMessage
 * @bbjMessage GetTextMessage
 * @bbjMessage SetFocusMessage
 * @bbjMessage GetDoubleValueMessage
 * @bbjMessage GetIntegerValueMessage
 * @bbjMessage GetSliderLabelsMessage
 * @bbjMessage SetDoubleValueMessage
 * @bbjMessage SetIntegerValueMessage
 * @bbjMessage SetMaximumMessage
 * @bbjMessage SetMinimumMessage
 * @bbjMessage SetOrientationMessage
 * @bbjMessage SetSliderInvertedMessage
 * @bbjMessage SetSliderLabelsMessage
 * @bbjMessage SetSliderMajorTickSpacingMessage
 * @bbjMessage SetSliderMinorTickSpacingMessage
 * @bbjMessage SetSliderPaintLabelsMessage
 * @bbjMessage SetSliderPaintTicksMessage
 * @bbjMessage SetSliderSnapToTicksMessage
 * @bbjMessage ControlScrollEventCallbackMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcSlider {
    private popper;
    private $slider;
    private noUiSlider;
    private majorTicksRange;
    private minorTicksRange;
    private labelsTickRange;
    private swappedLabels;
    private tooltipExpressionEngine;
    el: HTMLDwcSliderElement;
    /** When true, the slider will paint major ticks labels and the custom labels at the same time. */
    allowMajorLabelsOverlap: boolean;
    /** When true, the handle/thumb will be connected to the slider edge. */
    connect: boolean;
    /** True to disable the slider, false to enable it. */
    disabled: boolean;
    /** True when the slider has focus, false otherwise. */
    hasFocus: boolean;
    /** By default, the minimum value of a vertical slider is at the bottom and the maximum value is at the top. For a horizontal slider, the minimum value is to the left and the maximum value is to the right. The orientation reverses for inverted sliders. */
    inverted: boolean;
    /**
     * @bbjIgnore
     * A map where the Integer value is the slider position of the corresponding String label.
     **/
    labels: any;
    /** The slider's max value */
    max: number;
    /** The slider's min value */
    min: number;
    /** Specifies the minor tick spacing. */
    minorTickSpacing: number;
    /** Specifies the major tick spacing. */
    majorTickSpacing: number;
    /** The slider's orientation */
    orientation: 'vertical' | 'horizontal';
    /** Specifies whether labels are painted on the slider. */
    paintLabels: boolean;
    /** Specifies whether ticks are painted on the slider. */
    paintTicks: boolean;
    /** Specifies whether the slider should snap to the nearest tick when the user drags the thumb. */
    snapToTicks: boolean;
    /** When true, you the user click on a pip value , the slider will seek to that value */
    slideByClickingPips: boolean;
    /** When true, the slider can be scrolled by mouse wheel */
    scrollableByWheel: boolean;
    /** The theme name */
    theme: 'default' | 'gray' | 'success' | 'info' | 'warning' | 'danger' | null;
    /** When true enable tooltips. */
    tooltips: boolean;
    /** When true and tooltips are enabled, the the tooltips will be shown only when sliding */
    tooltipsOnlyWhenSliding: boolean;
    /**
     * A Javascript expression to format the tooltip.
     * if the expression has the 'return' word in it, then we use as is,
     * if not, then wrap it with return and ';' to make a function.
     *
     * for example
     *  "return x + '$'"
     */
    tooltipExpression: DwcExpression;
    /** The slider's value */
    value: number;
    onValueChanged(newValue: any): void;
    onOptionsChanged(): void;
    /** Emitted after while slider is dragging */
    slideEvent: EventEmitter<DwcSliderSlideEventPayload>;
    /** Emitted after the control is focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the control is blurred. */
    blurredEvent: EventEmitter<void>;
    connectedCallback(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleWheel(ev: any): void;
    /** Sets focus on the slider. */
    setFocus(): Promise<void>;
    /** Removes focus from the slider. */
    removeFocus(): Promise<void>;
    /** Queries one of the component supported parts. */
    getPart(part: string): Promise<unknown>;
    private createSlider;
    private destroySlider;
    private slide;
    private handleFocus;
    private handleBlur;
    private handlePipClick;
    private handleSlide;
    private handleChange;
    private handleEnd;
    private doHandleWheel;
    /** @see https://refreshless.com/nouislider/pips/#section-steps */
    private handlePipeFilter;
    private repositionTooltip;
    private showTooltip;
    private hideTooltip;
    render(): any;
}
