import { EventEmitter } from '../../stencil-public-runtime';
import { IBufferRange, ITerminalOptions, ITheme } from '@xterm/xterm';
import { DwcTerminalKey } from './dwc-terminal.types';
/**
 * The `dwc-terminal` provides a terminal emulator.
 *
 * @part control - The component's base wrapper
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcTerminal {
    private resizeObserver;
    private terminal;
    private fitAddon;
    el: HTMLDwcTerminalElement;
    /** Whether to automatically fit the terminal to its container */
    autoFit: boolean;
    /** The number of columns in the terminal */
    cols: number;
    /** The terminal options */
    options: ITerminalOptions;
    /** The number of rows in the terminal */
    rows: number;
    /** The terminal theme */
    theme: ITheme;
    onTerminalSizeChange(): void;
    onOptionsChange(): void;
    /**
     * Fired when the terminal data event fires.
     * In a typical setup, this should be passed on to the backing pty.
     **/
    dataEvent: EventEmitter<string>;
    /**
     * Fired when a key is pressed.
     * The event value contains the string that will be sent in the data event as well as the DOM event that triggered it.
     **/
    keyEvent: EventEmitter<DwcTerminalKey>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    componentDidLoad(): void;
    private setupResizeObserver;
    /** Sets focus on the terminal. */
    setFocus(): Promise<void>;
    /** Removes focus from the terminal. */
    removeFocus(): Promise<void>;
    /**
     * Resize the terminal to fill its container.
     *
     * If `autoFit` is true, this method is called automatically when the terminal's container resizes.
     */
    fit(): Promise<void>;
    /** Clear the entire buffer, making the prompt line the new first line. */
    clear(): Promise<void>;
    /** Perform a full reset (RIS, aka ‘\x1bc’). */
    reset(): Promise<void>;
    /** Selects all text within the terminal. */
    selectAll(): Promise<void>;
    /**
     * Select text within the terminal.
     *
     * @param column The column to start selecting from.
     * @param row The row to start selecting from.
     * @param length The length of the selection.
     **/
    select(column: number, row: number, length: number): Promise<void>;
    /**
     * Select lines within the terminal.
     *
     * @param start The start line to select.
     * @param end The end line to select.
     **/
    selectLines(start: number, end: number): Promise<void>;
    /** Clear the current terminal selection. */
    clearSelection(): Promise<void>;
    /** Get the terminal selection. */
    getSelection(): Promise<string>;
    /** Gets the selection position or undefined if there is no selection. */
    getSelectionPosition(): Promise<IBufferRange>;
    /**
     * Write data to the terminal.
     *
     * @param data The data to write to the terminal.
     **/
    write(data: string): Promise<void>;
    /**
     * Write data to the terminal, followed by a newline character.
     *
     * @param data The data to write to the terminal.
     **/
    writeln(data: string): Promise<void>;
    /**
     * Scroll the terminal down a number of lines.
     *
     * @param amount The number of lines to scroll down.
     **/
    scrollLines(amount: number): Promise<void>;
    /**
     * Scrolls to a line within the buffer.
     *
     * @param line 	The 0-based line index to scroll to.
     **/
    scrollToLine(line: number): Promise<void>;
    /**
     * Scroll the terminal to the top.
     **/
    scrollToTop(): Promise<void>;
    /**
     * Scroll the terminal to the bottom.
     **/
    scrollToBottom(): Promise<void>;
    private handleResize;
    render(): any;
}
