import { DwcAlertPopoverPlacement } from './dwc-alert-popover.types';
import { DwcAlertTheme } from '../dwc-alert/dwc-alert.types';
/**
 * The `dwc-alert-popover` provides a popover variation of `dwc-alert`.
 * This component is mainly used for validation.
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcAlertPopover {
    private popper;
    private $positioner;
    private $popover;
    private interval;
    el: HTMLDwcAlertPopoverElement;
    /** The distance in pixels from which to offset the alert away from its trigger. */
    distance: number;
    /**
     * The icon to use with the alert.
     *
     * <ol>
     * <li> <b>URL</b>: (ex: /path/to/image.png)
     * <li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)
     * <li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: `x`)
     * <li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: `feather:x`)
     * <li> <b>An object</b> which provides all the required properties to build the icon.
     *    for instance:
     *    <ol>
     *      <li> {name: 'x'}
     *      <li> {pool: 'feather', name: 'x'}
     *      <li> {src: 'image/path'}
     *    </ol>
     * </ol>
     **/
    icon: string | object;
    /** The alert's message to display.  */
    message: string;
    /** When true, the popover will be opened, otherwise it will be closed. */
    opened: boolean;
    onOpenedChanged(): void;
    /** The distance in pixels from which to offset the alert along its trigger. */
    skidding: number;
    /** The preferred placement of the popover. */
    placement: DwcAlertPopoverPlacement;
    /** The theme name. */
    theme: DwcAlertTheme;
    onMessageAndIconChanged(): void;
    onProperOptionsChanged(): void;
    disconnectedCallback(): Promise<void>;
    componentDidLoad(): void;
    private open;
    private close;
    render(): any;
}
