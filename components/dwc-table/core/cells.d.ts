import { TableCell, TableColumn, TableRow } from '../dwc-table.types';
declare const createCell: (table: HTMLDwcTableElement, column: TableColumn, row: TableRow) => TableCell;
declare const buildCellId: (rowId: string, columnId: string) => string;
declare const getCellById: (table: HTMLDwcTableElement, cellId: any) => TableCell;
declare const clearCache: (table: HTMLDwcTableElement) => void;
export { createCell, buildCellId, getCellById, clearCache };
