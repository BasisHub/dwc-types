import { TableColumn, TableRow } from '../bbj-table.types';
declare const createRows: (table: HTMLBbjTableElement, columns: TableColumn[]) => TableRow[];
declare const getRowById: (rowId: any) => TableRow;
declare const getRows: () => TableRow[];
declare const updateRow: (rowId: string, newData: any) => TableRow;
export { createRows, getRowById, updateRow, getRows };
