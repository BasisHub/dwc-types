import { TableCell, TableColumn, TableRow } from '../bbj-table.types';
declare const createCell: (table: HTMLBbjTableElement, column: TableColumn, row: TableRow) => TableCell;
declare const buildCellId: (rowId: string, columnId: string) => string;
declare const getCellById: (cellId: any) => TableCell;
declare const clearCellCache: () => void;
export { createCell, buildCellId, getCellById, clearCellCache };
