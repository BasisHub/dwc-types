import { BbjFileChooserI18n } from './bbj-filter-chooser.types';
/**
 * Convert a glob string to a regex
 *
 *Glob can be any characters or a comma separated list of characters, following standard "file glob" syntax.
 * The '*' character corresponds to any number of characters (including zero).
 * The '?' character corresponds to a single character.
 * The backslash "\" may be used to escape either character.
 *
 * @param glob  Glob string
 * @returns   Regex
 */
export declare const globToRegex: (glob: string) => RegExp;
/**
 * Check if a glob string is valid
 *
 * Glob can be any characters or a comma separated list of characters, following standard "file glob" syntax.
 * The '*' character corresponds to any number of characters (including zero).
 * The '?' character corresponds to a single character.
 * The backslash "\" may be used to escape either character.
 *
 * @param glob Glob string
 * @returns True if valid
 */
export declare const isValidGlob: (glob: string) => RegExp;
/**
 * Check if a filename is valid
 *
 * @param filename Filename
 * @returns True if valid
 */
export declare const isValidFileName: (filename: string) => boolean;
/**
 * Normalize the given path
 *
 * @param path  Path to normalize
 * @returns  Normalized path
 */
export declare const normalize: (path: string) => string;
/**
 * Trim slashes from the given path
 *
 * @param path  Path to trim
 * @returns Trimmed path
 */
export declare const trimSlashes: (path: string) => string;
/**
 * Get the directory name from the given path
 *
 * @param path  Path to get directory name from
 * @returns  Directory name
 */
export declare const dirname: (path: string) => string;
/**
 * Get the parent directory from the given path
 *
 * @param path  Path to get parent directory from
 * @returns  Parent directory
 */
export declare const parentdir: (path: string) => string;
export declare const defaultI18n: BbjFileChooserI18n;
export declare const defaultDateFormatOptions: Intl.DateTimeFormatOptions;
