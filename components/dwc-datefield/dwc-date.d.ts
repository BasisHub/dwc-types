/**
 * The class includes several methods to parse , convert and format dates according to BBj rules
 * This class is manually transpiled from the original Java Code
 *
 * {@link https://svn.basis.cloud/bbj/trunk/com/basis/bbj/web/gwt/client/util/BasisDate.java?view=annotate}
 * {@link https://documentation.basis.cloud/BASISHelp/WebHelp/commands/date_input.htm}
 */
export declare class DwcDate {
    static readonly DEFAULT_DATE_FORMAT: string;
    static readonly CURRENT_LOCALE: string;
    static readonly MDY: number;
    static readonly DMY: number;
    static readonly YMD: number;
    static readonly YM: number;
    static readonly MY: number;
    static readonly YW: number;
    static readonly WY: number;
    static readonly YWD: number;
    static readonly MONTH_DAYS: number[];
    static readonly MINIMAL_DAYS_IN_FIRST_WEEK: object;
    /**
     * format date implements DATE function of BBx
     *
     * @param {Date} p_date
     * @param {String} p_mask date format mask
     * @param {String} p_locale to get localized month and day names
     *
     * @return formatted date/time string
     *
     * @throws Error
     */
    static format(p_date: Date, p_mask?: string, p_locale?: string): string;
    /**
     * parse date is used by the inputD control
     *
     * @param {String} p_date  date
     * @param {String} p_mask date mask
     * @param {String} p_locale  locale
     * @param {Boolean} p_pivot pivot YY on today's date
     * @param {Number} p_offset pivot or absolute offset for YY->YYYY conversion
     *
     * @return Date|null if the string cannot be parsed
     */
    static parse(p_date: string, p_mask?: string, p_locale?: string, p_pivot?: boolean, p_offset?: number): Date;
    static isLeapYear(year: number): boolean;
    /**
     * Return the first day of the week based on the passed locale
     *
     * @param {String} locale
     *
     * @param locale
     */
    static firstDayOfTheWeek(locale: any): number;
    /**
     * Return the minimal number of days in the first week of a month or year.
     * For example, the ISO-8601 requires 4 days (more than half a week) to be present
     * before counting the first week. This method returns the minimal number of days
     * in the first week of a month or year, from 1 to 7.
     *
     * @param {String} locale
     *
     * @param {Number} returns the minimal number of days in the first week of a month or year, from 1 to 7.
     */
    static getMinimalDaysInFirstWeek(locale: string): number;
    static ampms(): Array<string>;
    /**
     * Get the passed date as julian date
     *
     * @param {Date} date
     *
     * @returns {Number}
     */
    static toJulian(date: Date): number;
    /**
     * Get the passed julian date as JS Date object
     *
     * @param {Number} p_julian
     *
     * @returns {Date}
     */
    static fromJulian(p_julian: number): Date;
    private static getDateFormat;
    private static convertYY;
    private static isLetter;
    private static increment;
    /**
     * Computes the day number since 0 January 0 CE (Gregorian)
     */
    private static julian;
    private static getDayOfYear;
    private static _getDayOfYear;
}
