import { TableColumn } from '../dwc-table.types';
declare const createColumns: (table: HTMLDwcTableElement, letterBlockSize?: number) => TableColumn[];
declare const getColumnById: (table: HTMLDwcTableElement, columnId: any) => TableColumn;
declare const computeColumnCellFunctionalStyles: (table: HTMLDwcTableElement, column: TableColumn, isInHeader?: boolean) => {
    position: any;
    left: any;
    right: any;
    zIndex: any;
};
export { createColumns, getColumnById, computeColumnCellFunctionalStyles };
