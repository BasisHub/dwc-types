import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The `<bbj-tab-panel>` provides methods for manipulating a UI tab panel.
 *
 * @slot - The panel's content.
 *
 * @part control - The component's base wrapper.
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjTabPanel {
    private $control;
    private panelId;
    el: HTMLBbjTabPanelElement;
    /** When true, the panel is visible, hidden otherwise. */
    active: boolean;
    /** When true, the tab is focused, false otherwise. */
    hasFocus: boolean;
    /** The panel's name */
    name: string;
    /** Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. */
    tabTraversable: number;
    /** The theme name */
    theme: 'default' | 'gray' | 'success' | 'info' | 'warning' | 'danger' | null;
    /** Emitted after the control is focused. */
    focusedEvent: EventEmitter<void>;
    /** Emitted after the control is blurred. */
    blurredEvent: EventEmitter<void>;
    connectedCallback(): void;
    componentDidLoad(): void;
    /** Sets focus on the panel */
    setFocus(): Promise<void>;
    /** Removes focus from the panel */
    removeFocus(): Promise<void>;
    private handleFocus;
    private handleBlur;
    render(): any;
}
