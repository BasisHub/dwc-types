/**
 * The class includes several methods to parse , convert and format time values according to BBj rules.
 *
 * This class is manually transpiled from the original Java Code
 *
 * {@link https://svn.basis.cloud/bbj/trunk/com/basis/bbj/web/gwt/client/util/BasisDate.java?view=annotate}
 * {@link https://documentation.basis.cloud/BASISHelp/WebHelp/commands/date_input.htm}
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjTime {
    static readonly DEFAULT_TIME_MASK: string;
    static readonly CURRENT_LOCALE: string;
    /**
     * Using the given time value, return a new Date object with the time set to the given value.
     *
     * @param tim  The time value to use.
     * @returns  A new Date object with the time set to the given value.
     */
    static fromNumber(tim: number): Date;
    /**
     * Using the given Date object, return a time value.
     *
     * @param date  The Date object to use.
     * @returns  The time value.
     */
    static fromDate(date: Date): number;
    /**
     * Parse a time string into a number.
     *
     * @param time The time string to parse.
     * @param locale The locale to use for parsing. If not specified, the current locale is used.
     *
     * @returns The parsed time as a number, or null if the time string could not be parsed.
     */
    static parse(time: string, locale?: string): number | null;
    /**
     * Format a time value into a string using BBj mask rules.
     *
     * @param value  The time value to format.
     * @param mask  The mask to use for formatting. If not specified, the default mask is used.
     * @param locale  The locale to use for formatting. If not specified, the current locale is used.
     *
     * @returns The formatted time string.
     */
    static format(value: number | Date, mask?: string, locale?: string): string;
    /**
     * Retrieve the AM and PM strings for the given locale.
     *
     * @param locale  The locale to use.
     * @returns An array containing the AM and PM strings for the given locale.
     *          The first element is the AM string, the second element is the PM string.
     */
    static ampms(locale: string): string[];
    /**
     * Generate an array of time strings for the given step.
     *
     * @param step The step to use for generating the time strings.
     * @param mask The mask to use for generating the time strings.
     * @param locale The locale to use for generating the time strings.
     * @param min The minimum time in decimal format (e.g., 8.5 for 8:30 AM) [Optional].
     *            If not provided or a negative value, it is considered as undefined.
     * @param max The maximum time in decimal format (e.g., 17.75 for 5:45 PM) [Optional].
     *            If not provided or a negative value, it is considered as undefined.
     *
     * @returns An array of time strings for the given step, mask, locale, min, and max.
     *          The array contains all the time strings for a 24-hour period, adhering to the step and time range.
     */
    static generateIntervals(step?: number, mask?: string, locale?: string, min?: number, max?: number): any[];
    private static tim;
    private static buildMaskTranslation;
}
