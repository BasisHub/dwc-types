import { EventEmitter } from '../../stencil-public-runtime';
import { DwcHotkeyEventPayload } from './dwc-hotkey.types';
/**
 * @bbjIgnore
 * @author Hyyan Abo Fakher
 */
export declare class DwcHotkey {
    private resolvedTarget;
    el: HTMLDwcHotkeyElement;
    /** When true, the component will output debug information for hotkey processing process. */
    debug: boolean;
    /**	Specifies that hotkey is disabled. */
    disabled: boolean;
    /** The hotkey name (for instance, Ctrl+k ). */
    keyName: string;
    /** The separator between key combination, (default is +). */
    splitKey: string;
    /** Assigns the hotkey to a specific target element. */
    target: HTMLElement | string;
    /** Emitted after the hotkey is triggered on the target. */
    hotkeyEvent: EventEmitter<DwcHotkeyEventPayload>;
    onPropertiesChanged(_newValue: any, oldValue: any, prop: any): void;
    connectedCallback(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private bind;
    private unbind;
    private handleTrigger;
    private resolveTarget;
    private debugMessage;
    render(): any;
}
