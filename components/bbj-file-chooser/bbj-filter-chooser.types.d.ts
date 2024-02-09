import { BbjFileChooserHistory } from './bbj-file-chooser-history';
/**
 * Describes a file chooser entry
 */
export type BbjFileChooserEntry = {
    /** The file/directory name */
    name: string;
    /** The file/directory size in bytes */
    length?: number;
    /** The file/directory modify date as number */
    modified?: number;
    /** When true then the object is a directory, a file otherwise  */
    directory: boolean;
};
/**
 * Describes a file chooser entry with resolved path
 * @see BbjFileChooserEntry
 */
export type BbjFileChooserResolvedEntry = BbjFileChooserEntry & {
    /** The file/directory path */
    path: string;
};
/**
 * Describes a file chooser navigation event payload
 */
export type BbjFileChooserNavigatePayload = {
    /** The path to navigate to */
    path: string;
    /** The current browsing history */
    history?: BbjFileChooserHistory;
};
/**
 * Describes a file chooser i18n
 */
export type BbjFileChooserI18n = {
    back?: string;
    forward?: string;
    up?: string;
    refresh?: string;
    gridView?: string;
    detailView?: string;
    columns?: string;
    name?: string;
    length?: string;
    modified?: string;
    folderEmpty?: string;
    filterAll?: string;
    approve?: string;
    cancel?: string;
    search?: string;
    fileName?: string;
    filters?: string;
    invalidFilter?: string;
};
