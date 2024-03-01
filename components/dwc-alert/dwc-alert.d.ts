import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `dwc-alert` provides contextual feedback messages for the user.
 *
 * @slot - The alert's message. When the slot is provided, the icon wont be displayed.
 *
 * @part control - The component's base wrapper
 * @part icon -  The alert's icon
 * @part message -  The alert's message
 * @part close-button -  The alert's close button
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcAlert {
    el: HTMLDwcAlertElement;
    /** When true, the alert will add a close button to remove the component from the DOM. */
    closable: boolean;
    /** The component's expanse. */
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl';
    /**
     * The icon to use with the message.
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
    /** The message to display. */
    message: string;
    /** When true, the alert will be visible, otherwise it will be hidden. */
    opened: boolean;
    /** The theme name. */
    theme: 'default' | 'gray' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    /** Emitted after the alert is closed. */
    closedEvent: EventEmitter<void>;
    connectedCallback(): void;
    private handleClick;
    render(): any;
}
