import { DwcExpression } from '../../utils/dwc-expression';
import { SortDirection } from '../../utils/internal/collections';
/**
 * Enum for column supported types.
 */
export type ColumnType = 'text' | 'number' | 'boolean' | 'date' | 'datetime' | 'time';
/**
 * Enum for column pin directions.
 */
export type ColumnPinDirection = 'left' | 'right' | 'auto';
/**
 * Enum for column alignment.
 */
export type ColumnAlignment = 'left' | 'center' | 'right';
/**
 * Enum for column sort directions.
 */
export type TableSortState = Record<string, SortDirection>;
/**
 * Defines the properties of a table column.
 */
export type TableColumnDefinition = {
    /**
     * The alignment of the column. If not specified,
     * the column will be left aligned.
     */
    align?: ColumnAlignment;
    /**
     * A cell renderer for the column's cells.
     */
    cellRenderer?: DwcExpression;
    /** If true, the column is hidden. */
    hidden?: boolean;
    /**
     * The field of the row object to get the cell's
     * data from. Supports deep references via dot
     * notation, i.e 'address.firstLine'.
     */
    id: string;
    /**
     * The name to render in the column header. If not
     * specified, the field name will be used.
     */
    label?: string;
    /**
     * The pin direction of the column. If not specified, the column will not be pinned.
     */
    pinned?: ColumnPinDirection;
    /** If true, the column can be sorted. */
    sortable?: boolean;
    /**
     * The sort order of the column. If not specified,
     * the column will not be sorted.
     */
    sort?: SortDirection;
    /**
     * If true, the column is not navigable (i.e., cannot
     * be tabbed into).
     */
    suppressNavigable?: boolean;
    /**
     * The type of the column. If not specified, the type will be text.
     */
    type?: ColumnType;
    /**
     * Function or expression to get the value from your
     * data for display.
     */
    valueGetter?: DwcExpression;
    /**
     * The width of the column in pixels. If not
     * specified, the column will be sized to fit
     * the content.
     */
    minWidth?: number;
    /**
     * A cell renderer for the column's header.
     */
    headerRenderer?: DwcExpression;
};
export interface TableColumn extends Required<TableColumnDefinition> {
    /** The column estimated width. */
    estimatedWidth: number;
    /** Indicates whether the column is first in the table. */
    first: boolean;
    /** Gets the value from the row's data for the specified column. */
    getValue(rowData: any): any;
    /** The column id. */
    id: string;
    /** Same as the column id. */
    key: string;
    /** The column index. */
    index: number;
    /** Indicates whether the column is last in the table. */
    last: boolean;
    /** The original column index from the column definitions. */
    originalIndex: number;
    /** The rendered label. */
    renderedLabel: string;
}
/**
 * Defines the properties of a table row.
 */
export interface TableRow {
    /** The cells of the row. */
    cells: TableCell[];
    /** The data as provided by the application. */
    data: any;
    /** Indicates whether the row is even. */
    even: boolean;
    /** Indicates whether the row is the first row. */
    first: boolean;
    /**
     * Gets the value from the row's data for the
     * specified column.
     */
    getValue(columnId: string): any;
    /**
     * Unique ID for the row. Either provided by the
     * application, or generated by the table.
     */
    id: string;
    /** Same as the row id. */
    key: string;
    /** The row index. */
    index: number;
    /** Indicates whether the row is the last row. */
    last: boolean;
    /** Indicates whether the row is odd. */
    odd: boolean;
    /** Indicates whether the row is selectable. */
    selectable: boolean;
}
/** Defines the properties of a table cell. */
export type TableCell = {
    /** The column object. */
    column: TableColumn;
    /** Indicates whether the cell is first in the row. */
    first: boolean;
    /** The cell ID. */
    id: string;
    /** Same as the cell id. */
    key: string;
    /** The cell index. */
    index: number;
    /** Indicates whether the cell is last in the row. */
    last: boolean;
    /** Indicates whether the cell is navigable. */
    navigable: boolean;
    /** The rendered value of the cell. */
    renderedValue: string;
    /** The row's data. */
    row: TableRow;
    /** Same as the row's data. */
    item: TableRow;
    /** The value of the cell. */
    value: any;
};
