import { TableColumn, TableRow } from '../dwc-table.types';
declare const createRows: (table: HTMLDwcTableElement, columns: TableColumn[]) => TableRow[];
declare const getRowById: (table: HTMLDwcTableElement, rowId: any) => TableRow;
declare const getRows: (table: HTMLDwcTableElement) => TableRow[];
declare const updateRow: (table: HTMLDwcTableElement, rowId: string, newData: any) => TableRow;
export { createRows, getRowById, updateRow, getRows };
