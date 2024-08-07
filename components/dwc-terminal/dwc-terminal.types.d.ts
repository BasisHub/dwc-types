export type DwcTerminalKey = {
    /** The string that will be sent in the data event */
    value: string;
    /** The DOM event that triggered the key press */
    event: KeyboardEvent;
};
