import { TableRow, TableColumn, TableCell } from '../dwc-table.types';
declare enum NavigationDirection {
    NextHorizontal = "next-horizontal",
    PreviousHorizontal = "previous-horizontal",
    NextVertical = "next-vertical",
    PreviousVertical = "previous-vertical",
    FirstCellInTable = "first-cell-in-table",
    LastCellInTable = "last-cell-in-table",
    FirstCellInRow = "first-cell-in-row",
    LastCellInRow = "last-cell-in-row",
    FirstCellInColumn = "first-cell-in-column",
    LastCellInColumn = "last-cell-in-column"
}
declare const navigate: (table: HTMLDwcTableElement, currentCellId: any, direction: NavigationDirection, columns: TableColumn[], rows: TableRow[]) => TableCell;
declare const getFirstNavigableCellInTable: (columns: TableColumn[], rows: TableRow[]) => TableCell;
export { NavigationDirection, navigate, getFirstNavigableCellInTable };
