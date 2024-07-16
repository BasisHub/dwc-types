import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `<dwc-tab>` provides methods for manipulating a UI tab.
 *
 * @slot - The tab's label.
 *
 * @part control - The component's base wrapper
 * @part tab-wrapper - A wrapper for the tab content
 * @part label -  The tab's label
 * @part suffix -  The tab's suffix
 * @part prefix -  The tab's prefix
 * @part close-button -  The tab's close button wrapper
 * @part close-button-icon -  The tab's close button icon
 *
 * @hostClass bbj-disabled - Applied when the component is disabled
 * @hostClass bbj-focused - Applied when the component is focused
 * @hostClass bbj-active - Applied when the button is toggleable and selected
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcTab {
    private tabId;
    private $tab;
    el: HTMLDwcTabElement;
    /** Put the tab in an active state. */
    active: boolean;
    /** When true, shows the close button. */
    closable: boolean;
    /** True to disable the tab, false to enable it.  */
    disabled: boolean;
    /** The component's expanse  */
    expanse: 'xs' | 's' | 'm' | 'l' | 'xl' | null;
    /** When true, the tab is focused, false otherwise. */
    hasFocus: boolean;
    /** The tab's label */
    label: string;
    /** Associate's the tab with the given panel name. */
    panel: string;
    /** Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /** The theme name */
    theme: 'default' | 'gray' | 'success' | 'info' | 'warning' | 'danger' | null;
    /** Emitted after the control is focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the control is blurred. */
    blurredEvent: EventEmitter<void>;
    /** Emitted after the tab is closed. */
    closedEvent: EventEmitter<void>;
    connectedCallback(): void;
    componentDidLoad(): void;
    /** Sets focus on the tab */
    setFocus(): Promise<void>;
    /** Removes focus on the tab */
    removeFocus(): Promise<void>;
    private handleFocus;
    private handleBlur;
    private handleClose;
    render(): any;
}
