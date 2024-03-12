import { EventEmitter } from '../../stencil-public-runtime';
import { DwcFileChooserI18n, DwcFileChooserEntry, DwcFileChooserResolvedEntry, DwcFileChooserNavigatePayload } from './dwc-filter-chooser.types';
import { DwcUploadFilter } from '../dwc-upload/dwc-upload.types';
/**
 * The `BBjFileChooser<bbj-file-chooser>` provides methods for manipulating a UI file chooser to select files and directories
 * from the server.
 *
 * @part control - The control wrapper
 * @part control--detail - The control wrapper in detail view
 * @part control--grid - The control wrapper in grid view
 *
 * @part header - The header wrapper
 *
 * @part header-prefix - The header suffix wrapper
 * @part header-prefix-button - A header suffix button
 * @part header-prefix-button-back - The back button
 * @part header-prefix-button-forward - The forward button
 * @part header-prefix-button-up - The up button
 *
 * @part header-inputs - The header inputs wrapper
 * @part header-pathlist - The path list
 * @part header-pathlist-icon - The path list icon
 * @part header-pathlist-icon-hard-drive - The hard drive icon
 * @part header-pathlist-button - A path list button
 * @part header-pathlist-button-refresh - The refresh button
 *
 * @part header-suffix - The header prefix wrapper
 * @part header-suffix-button - A header prefix button
 * @part header-suffix-button-grid - The grid button
 * @part header-suffix-button-detail - The detail button
 *
 * @part content - The content wrapper
 * @part content-busy - The busy content wrapper
 * @part content-nodata - The no data content wrapper
 *
 * @part table-wrapper - The table wrapper
 * @part table - The table
 *
 * @part table-row - A table row
 * @part table-row-header - A table row header
 * @part table-row-even - An even table row
 * @part table-row-odd - An odd table row
 * @part table-row-selected - A selected table row
 *
 * @part table-cell-wrapper - A table cell wrapper
 * @part table-cell - A table cell
 * @part table-cell-header - A table cell header
 * @part table-cell-label - A table cell label
 * @part table-cell-sort - A table cell sort icons wrapper
 *
 * @part footer - The footer wrapper
 * @part footer-filter-input - The filter input
 * @part footer-buttons - The footer buttons wrapper
 * @part footer-buttons-button - A footer button
 * @part footer-buttons-button-approve - The approve button
 * @part footer-buttons-button-cancel - The cancel button
 *
 * @hostClass BBjFileChooser - Always applied
 * @hostClass bbj-server - Always applied
 * @hostClass bbj-file-open - Applied when the component type is `open`
 * @hostClass bbj-file-save - Applied when the component type is `save`
 * @hostClass bbj-file-load - Applied when the component is loading
 * @hostClass bbj-disabled - Applied when the component is disabled
 *
 * @bbjControl BBjFileChooser(Server)
 * @bbjControlLink
 *  https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjfilechooser/bbjfilechooser.htm,
 *  https://documentation.basis.cloud/BASISHelp/WebHelp/commands/fileopen_function_create_file_open_dialog.htm
 *
 *
 * @bbjMessage {{#eq CONTROL_NAME 'FILEOPEN'}}ShowFileChooserDialogMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'FILEOPEN'}}RemoveFileChooserDialogMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'FILEOPEN'}}SetFileChooserDialogDirectoryMessage{{/eq}}
 *
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}BuildServerFileChooserMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}AddFileFilterMessageParams{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}RemoveFileFilterMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}SetFileFilterMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}GetFileFilterMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}SetShowAllFilesMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}GetShowAllFilesMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}SetFileChooserMultipleSelectMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}SetChooserButtonsVisibleMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}SetChooserButtonTextMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}GetChooserButtonTextMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}SetChooserButtonAccessKeyMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}ClickChooserButtonMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}GetStringArrayValueMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}SetFileChooserDropZoneVisibleMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}SetFileSelectionModeMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}SetFileChooserDirectoryMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}FileChooserChangeEventCallbackMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}FileChooserApproveEventCallbackMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}FileChooserCancelEventCallbackMessage{{/eq}}
 * @bbjMessage {{#eq CONTROL_NAME 'BBjFileChooser(Server)'}}FileChooserFilterEventCallbackMessage{{/eq}}
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcFileChooser {
    private $pathList;
    private $tableWrapper;
    private $table;
    private $tbody;
    private $lastActiveElement;
    private $columnsMenuPopup;
    private history;
    private lastSelectedPath;
    private typeToSelectString;
    private lastKeypressTime;
    private lastSearchIndex;
    private _dateFormatOptions;
    private _i18n;
    private _entries;
    private _filters;
    private _sort;
    private _disableValueSync;
    private _disableSelectionSync;
    el: HTMLDwcFileChooserElement;
    /**
     * When true, the `All Files` filter will be enabled in the filters list.
     * The option will be ignored when the `selectionMode` is set to `directories`.
     **/
    allFilesFilterEnabled: boolean;
    /**
     * When disabled, the current selected files and directories will
     * be cleared when navigating to a new directory.
     **/
    allowSelectionsAcrossDirectories: boolean;
    /**
     * The name or the id of the active filter.
     * The option will be ignored when the `selectionMode` is set to `directories`.
     **/
    activeFilter: string;
    onActiveFilterChange(): void;
    /** The approve button access key. */
    approveAccesskey: string;
    /** When true, the cancel and approve button will rendered; otherwise it will be hidden. */
    buttonsVisible: boolean;
    /** The cancel button access key */
    cancelAccesskey: string;
    /**
     * A comma separated list of columns to be displayed in the table.
     * Supported columns are: `length` and `modified`.
     **/
    columns: string;
    /**
     * When true, newly entered filters will be saved in local storage.
     * In order for this to work, the component must be given an `id` which is
     * the case when the component is created by BBj.
     **/
    cacheCustomFilters: boolean;
    /** When true, the user will be able to add new filters by typing the filter in the filters list. */
    customFilters: boolean;
    /** When true, the component cannot be interacted with. */
    disabled: boolean;
    /** The date format locale to use for the `modified` column.  */
    dateLocale: string;
    /**
     * The date format options to use for the `modified` column.
     * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat">Intl.DateTimeFormat</a>
     **/
    dateFormatOptions: Intl.DateTimeFormatOptions | string;
    onDateFormatOptionsChanged(val: any): void;
    /** The current opened directory. */
    directory: string;
    onDirectoryChanged(_newVal: any, oldVal: any): void;
    /**
     * @bbjIgnore
     * The list of files and folders to be displayed.
     **/
    entries: Array<DwcFileChooserEntry>;
    /**
     * @bbjIgnore
     * Array of filters to show as button dropdown.
     *
     * The filters can be any characters, following standard "file glob" syntax.
     * The '*' character corresponds to any number of characters (including zero).
     * The '?' character corresponds to a single character.
     * The backslash "\" may be used to escape either character
     **/
    filters: Array<DwcUploadFilter>;
    /** Number of columns to render when the view type is `grid`. */
    gridColumns: number;
    /** The files chooser translation object. */
    i18n: DwcFileChooserI18n | string;
    onI18nChanged(val: any): void;
    /**
     * @bbjIgnore
     * When true, the file chooser will show the busy indicator and disable interacting with the chooser.
     **/
    loading: boolean;
    /** When true, multiple files, directories or both depending on the `selectionMode` can be selected. */
    multiSelection: boolean;
    /**
     * When defined then the user cannot navigate outside the given directory path.
     * The path must be under the `directory` path.
     **/
    restrictedDirectory: string;
    /**
     * @bbjIgnore
     * An array of directory roots to display in the paths list.
     **/
    roots: Array<string>;
    /** The selection mode. files, directories or both directories and files. */
    selectionMode: 'files' | 'directories' | 'both';
    onSelectionModeChanged(): void;
    /**
     * @bbjIgnore
     * An array of selected entries.
     **/
    selected: Array<DwcFileChooserResolvedEntry>;
    onSelectedChanged(selected: Array<DwcFileChooserResolvedEntry>): void;
    /**
     * A sorting criteria. For instance (+name , -length).
     *
     * Supported sorting criteria are: `name`, `length` and `modified`.
     * The sorting criteria can be prefixed with a `+` or `-` to indicate ascending or descending order.
     * If no prefix is given then column will not be sorted.
     **/
    sort: string;
    /**
     * @bbjIgnore
     * The type of the file chooser.
     *
     * When `save` then the file chooser will be used to save a file, directory or both depending on the `selectionMode`
     * property. In this case the file chooser will have an input field to enter the file/directory name.
     * When `open` then the file chooser will be used to open a file, directory or both depending on the `selectionMode`
     * property.
     */
    type: 'open' | 'save';
    /**
     * Enable or disable type to select feature.
     * When enabled, then the user can type into the list to filter the entries.
     **/
    typeToSelect: boolean;
    /**
     * Typing into the list accumulates keystrokes entered within a specified number of milliseconds into a typeahead
     * buffer. The default time window for this feature is 1000 milliseconds (1 second)
     **/
    typeToSelectTimeout: number;
    /** When true, the search performed by typeToSelect feature will be case sensitive. */
    typeToSelectCaseSensitive: boolean;
    /**
     * The value of the file chooser. It is set only when the chooser type is `save`
     **/
    value: string;
    onValueChanged(value: string): void;
    /** The view type. */
    view: 'grid' | 'detail';
    /** Emitted when the directory has been changed */
    navigateEvent: EventEmitter<DwcFileChooserNavigatePayload>;
    /** Emitted when an entry has been selected */
    selectedEvent: EventEmitter<DwcFileChooserResolvedEntry>;
    /** Emitted when an entry has been deselected */
    deselectedEvent: EventEmitter<DwcFileChooserResolvedEntry>;
    /** Emitted when the selection has been changed */
    selectionChangedEvent: EventEmitter<DwcFileChooserResolvedEntry[]>;
    /** Emitted when the active filter has been changed. */
    filterChangedEvent: EventEmitter<string>;
    /** Emitted when the approve button has been clicked. */
    approvedEvent: EventEmitter<void>;
    /** Emitted when the cancel button has been clicked. */
    canceledEvent: EventEmitter<void>;
    onPropertiesChanged(_n: any, _o: any, prop: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    componentWillLoad(): void;
    componentWillRender(): void;
    componentDidRender(): void;
    componentDidLoad(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    /** Click the approve button */
    approve(): Promise<void>;
    /** Click the cancel button */
    cancel(): Promise<void>;
    /** Reload the current directory by firing the `navigate` event again */
    refresh(): Promise<void>;
    /** Navigate one level up */
    up(): Promise<void>;
    /** Check if navigating up is permitted */
    canUp(): Promise<boolean>;
    /** Navigate to the previous directory */
    back(): Promise<void>;
    /** Check if navigating back is permitted */
    canBack(): Promise<boolean>;
    /** Navigate to the next directory */
    forward(): Promise<void>;
    /** Check if navigating forward is permitted */
    canForward(): Promise<boolean>;
    /**
     * Format the give date number into a string using the `dateLocale` and `dateFormatOptions` properties.
     *
     * @param date The date number to format
     * @returns The formatted date string
     */
    private formatDate;
    /**
     * Format the given file size into a string.
     *
     * @param size  The file size to format
     * @returns  The formatted file size string
     */
    private formatSize;
    /**
     * Convert the given entries into a list of resolved entries.
     *
     * @param entries The entries to resolve
     * @param parent  The parent directory
     *
     * @returns  The resolved entries
     */
    private resolveEntries;
    /**
     * Parse the given i18n object or string into an i18n object.
     *
     * @param i18n  The i18n object or string to parse
     * @returns The parsed i18n object
     */
    private resolveI18n;
    /**
     * Parse the given date format options object or string into an date format options object.
     *
     * @param dateFormatOptions  The date format options object or string to parse
     * @returns  The parsed date format options object
     */
    private resolveDateFormatOptions;
    /**
     * Parse the given filters object array of filters.
     *
     * @returns The parsed filters
     */
    private resolveFilters;
    /**
     * Parse the given sort array into an array of sort criterion.
     *
     * @returns The parsed sort criterion
     */
    private resolveSort;
    /**
     * Compute the current directory and roots and build a dwc-combobox list of items.
     *
     * @returns The list of items and the index of the current directory
     */
    private computePathsList;
    /**
     * Compute the current filters and build a dwc-combobox list of items.
     *
     * @returns The list of items and the index of the current filter
     */
    private computeFilterList;
    /**
     * From the given values array compute the value to display.
     *
     * @param values The values array
     * @returns The value to display. The value is a list which space separated or comma separated or both
     *          and each entry is wrapped in double quotes. If the array is empty, the value is an empty string. If
     *          the array contains only one entry, the value is the entry without double quotes.
     *          Otherwise, the value is the list of entries wrapped in double quotes.
     */
    private computeValue;
    /**
     * From the given value list, compute the list of values to process.
     *
     * @param value The value is a list which space separated or comma separated or both
     *              and each entry is wrapped in double quotes. If the array is empty, the value is an empty string. If
     *              the array contains only one entry, the value is the entry without double quotes.
     *              Otherwise, the value is the list of entries wrapped in double quotes.
     * @returns The list of values to display
     */
    private computeValues;
    /**
     * Based on the current filter, compute the value extension.
     *
     * @param value The value as string
     * @return The value with the extension added as needed
     */
    private computeValueExtension;
    /**
     * Check if the given entry is selectable
     *
     * @param entry The entry to check
     * @returns True if the entry is selectable
     */
    private isEntrySelectable;
    /**
     * Check if the given entry is selected.
     *
     * @param entry The entry to check
     * @returns True if the entry is selected
     */
    private isEntrySelected;
    /**
     * Check if navigation to the given directory is permitted
     *
     * @param path The path to check
     * @returns   True if navigation to the given directory is permitted
     */
    private canNavigate;
    /**
     * Check if navigation up is permitted
     *
     * @returns  True if navigation up is permitted
     **/
    private isUpPermitted;
    /**
     * Check if navigation back is permitted
     *
     * @returns  True if navigation back is permitted
     **/
    private isBackPermitted;
    /**
     * Check if navigation forward is permitted
     *
     * @returns  True if navigation forward is permitted
     **/
    private isForwardPermitted;
    /**
    * Fire the navigate event. and pass the new directory and browsing history.
    *
    * @param path The new directory
    * @param refresh When true, re-navigating to same directory will trigger a refresh
    */
    private navigate;
    /**
     * Reset the tab index in the table
     */
    private resetTableTableIndex;
    /**
     * Focus the given row or cell.
     *
     * @param node The node to focus
     */
    private focusTableNode;
    /**
     * Click the given row or cell.
     *
     * @param node The node to click
     * @param isDoubleClick true if the click is a double click
     */
    private clickTableNode;
    private triggerTypeToSelect;
    /**
     * Search the list using the given needle and select the first found result
      *
      * @param needle A string to use a search term
      * @param caseSensitive Whether the search should be case sensitive
      * @param multiple When true, the current selection will be kept
      * @param scroll When true, the list will scroll to the found item.
      *
      * @returns Promise<number> the index of the found item
      */
    private search;
    /**
     * Check if click the given row or cell should approve the dialog.
     * This is the case when the selection mode is 'files' or 'both' and the entry is not a directory.
     * If the entry is already selected, the dialog will be approved.
     *
     * @param node The node to check
     */
    private mayApprove;
    private handleUp;
    private handleBack;
    private handleForward;
    private handlePathListClosed;
    private handlePathListChanged;
    private handleRefreshKeydown;
    private handleRefreshClick;
    private handleFiltersListChanged;
    private handleViewChange;
    private handleColumnsMenuClick;
    private handleColumnsMenuPopupItemClick;
    private handleTableHeaderClick;
    private handleTableRowAndCellClick;
    private handleTableRowAndCellDBClick;
    private handleTableKeyDown;
    private handleValueInputChanged;
    private handleValueInputBlurred;
    private handleValueInputKeyDown;
    private handleApprove;
    private handleCancel;
    private handlePathListCanceled;
    private renderPathListItem;
    private renderFilterListItem;
    private renderTableHeader;
    private renderTableRows;
    private renderListView;
    private renderGridView;
    render(): any;
}
