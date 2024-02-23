/**
 * Represents the history of file selections in a file chooser.
 * It keeps track of the user's navigation through different file selections.
 */
export declare class BbjFileChooserHistory {
    private _history;
    _index: number;
    _locked: boolean;
    /**
     * Check if the history can go back
     *
     * @returns {boolean} true if the history can go back
     */
    get canBack(): boolean;
    /**
     * Check if the history can go forward
     *
     * @returns {boolean} true if the history can go forward
     * */
    get canForward(): boolean;
    /**
     * Check if the history is locked
     *
     * @returns {boolean} true if the history is locked
     **/
    get locked(): boolean;
    /**
     * Get the previous history entry
     *
     * @returns {string} the previous history entry
     */
    get previous(): string;
    /**
     * Get the current url
     *
     * @returns {string} the current url
     */
    get current(): string;
    /**
     * Get the next history entry
     *
     * @returns {string} the next history entry
     */
    get next(): string;
    /**
     * Add a new url to the history.
     *
     * @param {string} url the url to add
     *
     * @returns {void}
     **/
    add(url: string | string[]): void;
    /**
     * Go back in the history
     *
     * @returns {string} the previous url
     **/
    back(): string;
    /**
     * Go forward in the history
     *
     * @returns {string} the next url
     **/
    forward(): string;
    /**
     * Clear the history
     * @returns {void}
     */
    clear(): void;
    /**
     * Lock the history.
     * This will prevent the history from being updated.
     *
     * @returns {void}
     */
    lock(): void;
    /**
     * Unlock the history.
     *
     * @returns {void}
     */
    unlock(): void;
    /**
     * Get the history as an array
     *
     * @returns {string[]} the history
     **/
    getHistory(): string[];
}
