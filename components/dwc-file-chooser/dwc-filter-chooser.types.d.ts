import { DwcFileChooserHistory } from './dwc-file-chooser-history';
/**
 * Describes a file chooser entry
 */
export type DwcFileChooserEntry = {
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
 * @see DwcFileChooserEntry
 */
export type DwcFileChooserResolvedEntry = DwcFileChooserEntry & {
    /** The file/directory path */
    path: string;
};
/**
 * Describes a file chooser navigation event payload
 */
export type DwcFileChooserNavigatePayload = {
    /** The path to navigate to */
    path: string;
    /** The current browsing history */
    history?: DwcFileChooserHistory;
};
/**
 * Describes a file chooser i18n
 */
export type DwcFileChooserI18n = {
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
