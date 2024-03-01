/**
 * The `BBjProgressBar<dwc-progressbar>` provides methods for manipulating a UI progress bar control.
 *
 * @part control - The component's base wrapper.
 * @part text - The component's text.
 * @part front -  The front part of the progress
 * @part front-text -  The front part label
 * @part back -  The back part of the progress
 * @part back-text -  The back part label
 *
 * @hostClass BBjControl - Always applied
 * @hostClass BBjProgressBar - Always applied
 * @hostClass bbj-disabled - Applied when the component is disabled
 *
 * @bbjControl BBjProgressBar
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjprogressbar/bbjprogressbar.htm?Highlight=BBjProgressbar
 *
 * @bbjMessage BuildProgressBarMessage
 * @bbjMessage SetTextMessage
 * @bbjMessage GetTextMessage
 * @bbjMessage GetProgressBarValueMessage
 * @bbjMessage SetProgressBarIndeterminateMessage
 * @bbjMessage SetProgressBarMaximumMessage
 * @bbjMessage SetProgressBarMinimumMessage
 * @bbjMessage SetProgressBarOrientationMessage
 * @bbjMessage SetProgressBarTextVisibleMessage
 * @bbjMessage SetProgressBarValueMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcProgressbar {
    el: HTMLDwcProgressbarElement;
    /** When true and striped is enabled, the stripes will be animated. */
    animated: boolean;
    /** True to disable the button, false to enable it.  */
    disabled: boolean;
    /** Indicates that the duration of the task is not yet known. */
    indeterminate: boolean;
    onIndeterminateChanged(): void;
    /** The maximum range for progressbar. */
    max: number;
    /** The minimum range for progressbar. */
    min: number;
    /** The progressbar moving orientation. */
    orientation: 'vertical' | 'horizontal';
    /** When true, the text is visible; otherwise, it is hidden. */
    textVisible: boolean;
    /** When true, the progressbar will draw stripes over the current progress. */
    striped: boolean;
    /** The theme name */
    theme: 'default' | 'gray' | 'success' | 'info' | 'warning' | 'danger' | null;
    /**
     * Specifies the text to be displayed on the progressbar.
     * If text is set to "", the progress bar will display percentage
     * complete in the format "XX%".
     *
     * In the text you can use the placeholder `{{x}}` to get the current
     * value as percentage and you can use the placeholder `{{value}}` to get the
     * raw value
     **/
    text: string;
    /** The progressbar value */
    value: number;
    onValueChanged(): void;
    componentDidLoad(): void;
    /** Queries one of the component supported parts */
    getPart(part: string): Promise<unknown>;
    private updateProgress;
    private getTextOrPercentage;
    private validateValue;
    private getTranslatedValue;
    render(): any;
}
