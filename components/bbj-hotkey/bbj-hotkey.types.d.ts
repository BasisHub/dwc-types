import { HotkeysEvent } from 'hotkeys-js';
/**
 * Describes the payload for the hotkey event.
 */
export type BbjHotkeyEventPayload = {
    keyboardEvent: KeyboardEvent;
    hotkeysEvent: HotkeysEvent;
    el: HTMLBbjHotkeyElement;
};
