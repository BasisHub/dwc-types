import { EventEmitter } from '../../stencil-public-runtime';
import { DwcExpression } from '../../utils/dwc-expression';
import { TableCell, TableColumn, TableColumnDefinition, TableRow, TableSortState } from './dwc-table.types';
/**
 * A streamlined Table component designed for rendering tables with multiple rows and columns.
 * This table is equipped with features such as sorting, selection, and virtualization, along with
 * the ability to customize cell rendering. It's crafted to offer both high customization
 * and performance.
 *
 * @part table-wrapper - The entire container that wraps the table and its elements.
 * @part table - The primary table element, housing all content including headers, rows, and cells.
 *
 * @part header - The top part of the table that contains column headers and controls like sorting icons and checkboxes.
 * @part row-header - The row within the header that contains cell headers.
 * @part cell-header - Individual cells located in the header row, typically containing labels or titles for the columns.
 * @part cell-checkbox-header - A special header cell that contains a checkbox for selecting all rows.
 * @part cell-content-header - The main content or data within header cells.
 * @part cell-content-checkbox - A cell in the header that combines content with a checkbox, often used for bulk actions.
 * @part cell-label-header - Header cells that are specifically used for displaying text labels for columns.
 * @part cell-sort-icons - Icons within header cells that indicate sorting capabilities.
 * @part cell-sort-icons-active - Icons within header cells that show the current sorting state (ascending or descending).
 * @part checkbox - A generic checkbox part used within various cells for selection purposes.
 * @part checkbox-header - A specific checkbox located in the header for selecting or deselecting all rows.
 * @part cell-checkbox-indeterminate - A state for checkboxes where the selection is partial (not all items are selected).
 * @part body - The main body of the table, containing all the rows and cells with data.
 * @part cell-body - Individual cells located within the body, containing data or content.
 * @part cell-checkbox - Cells in the body that contain checkboxes for row selection.
 * @part cell-checkbox-body - A specific type of cell that combines a checkbox with body content, used for selecting rows.
 * @part cell-selected - Cells that are currently selected, indicating an active state.
 * @part row - Individual rows within the table body, used for organizing cells horizontally.
 * @part cell - The basic unit within the table for displaying data or content.
 * @part cell-checkbox - Repeated for consistency; cells containing checkboxes for row selection.
 * @part cell-align-left - Cells aligned to the left, typically for text content.
 * @part cell-align-right - Cells aligned to the right, commonly used for numerical data.
 * @part cell-align-center - Cells with centered content, used for balancing visual alignment.
 * @part cell-pinned-left - Cells that are pinned or fixed to the left side of the table, remaining visible during horizontal scrolling.
 * @part cell-pinned-right - Cells that are pinned or fixed to the right side of the table.
 * @part cell-content - Cells containing the main content or data.
 * @part cell-content-checkbox - Cells that combine content with a checkbox, used for selection.
 * @part cell-label - Cells specifically used for displaying text labels within rows.
 *
 * @author Hyyan Abo Fakher
 */
export declare class DwcTable {
    private $wrapper;
    private elSizeObserver;
    private focusChangeTriggeredByUser;
    private $lastActiveCell;
    private lastActiveCell;
    private sortState;
    bottomFillerHeight: number;
    columns: TableColumn[];
    hasLeftPinnedColumns: boolean;
    rows: TableRow[];
    scrollPosition: number;
    topFillerHeight: number;
    visibleRows: TableRow[];
    wrapperHeight: number;
    el: HTMLDwcTableElement;
    /**
     * When false, the table won't render the selection
     * checkboxes for each row.
     *
     * This option works only when `multiSelection` is enabled
     */
    checkboxSelection: boolean;
    /**
     * When true, the table will automatically sort the data
     * when the user clicks on a column header. The default is false.
     *
     * Use this in case you want to sort the data yourself. The event in
     * this case will contains the sorting information.
     */
    clientSorting: boolean;
    /**
     * An array of objects that defines the columns of the table.
     */
    columnDefinitions: TableColumnDefinition[];
    /**
     * When true, the column headers are rendered, hidden otherwise.
     **/
    columnHeaders: boolean;
    /**
     * An array of objects that defines the rows of the table.
     */
    data: any[];
    /**
     * Set to false to prevent rows from being deselected if you hold down Ctrl
     * and click the row (i.e. once a row is selected, it remains selected
     * until another row is selected in its place).
     *
     * By default the table allows deselection of rows.
     */
    deselection: boolean;
    /**
     * A function or an expression to generate a row id
     */
    getRowId: DwcExpression;
    /**
     * If false, a `select all` checkbox will be added to the header.
     **/
    headerCheckboxSelection: boolean;
    /**
     * The height of the header in pixels.
     **/
    headerHeight: number;
    onHeaderHeightChange(): void;
    /**
     * A function or an expression to be used to determine which rows
     * are selectable.
     *
     * By default rows are selectable, so return false to make
     * a row un-selectable.
     */
    isRowSelectable: DwcExpression;
    /**
     * Set to true to allow multiple rows to be selected with clicks.
     * For example, if you click to select one row and then click to select
     * another row, the first row will stay selected as well.
     * Clicking a selected row in this mode will deselect the row.
     * This is useful for touch devices where Ctrl and Shift clicking is not an option.
     */
    multiSelectWithClick: boolean;
    /**
     * The number of rows to pre render beyond the visible scrolling area.
     * The bigger the number the slower the performance. keep this value small
     **/
    overscan: number;
    /**
     * The height of each row in pixels.
     **/
    rowHeight: number;
    onRowHeightChange(): void;
    /**
     * An array of selected row ids.
     **/
    selected: string[];
    /**
     * The selection mode of the table.
     **/
    selectionMode: 'single' | 'multiple' | 'none';
    onSelectionModeChanged(): void;
    onDataChange(): void;
    /** Emitted when a cell is clicked */
    cellClickedEvent: EventEmitter<TableCell>;
    /** Emitted when a cell is double clicked */
    cellDbclickedEvent: EventEmitter<TableCell>;
    /** Emitted when a row is clicked */
    rowClickedEvent: EventEmitter<TableRow>;
    /** Emitted when a row is double clicked */
    rowDbclickedEvent: EventEmitter<TableRow>;
    /** Emitted when a row is selected */
    rowSelectedEvent: EventEmitter<TableRow>;
    /** Emitted when a row is deselected */
    rowDeselectedEvent: EventEmitter<TableRow>;
    /** Emitted when row selection changes */
    selectionChangedEvent: EventEmitter<void>;
    /** Emitted when the sort changes */
    sortChangedEvent: EventEmitter<TableSortState>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    componentWillRender(): void;
    componentDidRender(): void;
    /**
     * Selects a row
     *
     * @param rowId The id of the row
     */
    select(rowId: string | string[]): Promise<void>;
    /**
     * Selects all rows
     */
    selectAll(): Promise<void>;
    /**
     * Deselects a row
     *
     * @param rowId The id of the row
     */
    deselect(rowId: string | string[]): Promise<void>;
    /**
     * Deselects all rows
     */
    deselectAll(): Promise<void>;
    /**
     * Updates a row
     *
     * @param rowId The id of the row
     * @param data The data to update
     *
     * @returns The updated row
     */
    updateRow(rowId: string, data: any): Promise<TableRow>;
    /**
     * Scrolls to a row
     *
     * @param rowId The id of the row
     */
    scrollToRow(rowId: string): Promise<void>;
    /**
     * Scrolls to a cell
     *
     * @param rowId The id of the row
     * @param columnId The id of the column
     */
    focusCell(rowId: string, columnId: string, scroll?: boolean): Promise<void>;
    private updateState;
    private updateVirtualizeResult;
    private saveLastActiveCell;
    private handleScroll;
    private handleClick;
    private handleHeaderCheckboxClick;
    private handleHeaderClick;
    private handleBodyCheckboxClick;
    private handleBodyClick;
    private handleRowSelection;
    private handleKeyDown;
    private handleHeaderKeyDown;
    private handleBodyKeyDown;
    render(): any;
}
