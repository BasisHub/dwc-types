import { HotkeysEvent } from 'hotkeys-js';
/**
 * Describes the payload for the hotkey event.
 */
export type DwcHotkeyEventPayload = {
    keyboardEvent: KeyboardEvent;
    hotkeysEvent: HotkeysEvent;
    el: HTMLDwcHotkeyElement;
};
