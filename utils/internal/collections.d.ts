/**
 * Generate a range of numbers
 *
 * @param start The range start value
 * @param stop The range end value
 * @param step The step
 *
 * @returns Array
 */
export declare const range: (start: any, stop?: any, step?: number) => any[];
/**
 * https://stackoverflow.com/questions/8495687/split-array-into-chunks
 *
 * @param arr Input array
 * @param n Number of elements to take
 */
export declare function chunks<T>(arr: T[], n: number): Generator<T[], void>;
export type SortDirection = 'asc' | 'desc' | 'none';
export type SortCriteria = {
    prop: string;
    direction: SortDirection;
};
/**
 * Multi sort the given array using the given criteria
 *
 * @param input   The array to sort
 * @param criteria  The criteria to sort by
 *
 * @returns  The sorted array
 */
export declare function multiSort<T>(input: T[], criteria: SortCriteria[]): T[];
/**
 * Move an item in an array from one position to another
 *
 * @param input   The array
 * @param oldIndex  The old index
 * @param newIndex  The new index
 */
export declare const move: (input: any, oldIndex: number, newIndex: number) => void;
export declare function stringToArray(string: any): any;
/**
 * Get the value of an object's property by its path.
 *
 * @param obj  The object
 * @param path  The path
 * @param defValue  The default value in case it is not found
 *
 * @returns
 */
export declare const get: (obj: any, path: any, defValue?: string) => any;
