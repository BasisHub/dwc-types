import { FunctionalComponent } from '../../stencil-public-runtime';
import { TableRow, TableColumn } from './dwc-table.types';
type TableBodyRowsProps = {
    columns: TableColumn[];
    hasLeftPinnedColumns: boolean;
    multiSelection: boolean;
    rows: TableRow[];
    selected: Array<string | number>;
    checkboxSelection: boolean;
    virtualRows: TableRow[];
};
declare const TableBodyRows: FunctionalComponent<TableBodyRowsProps>;
export default TableBodyRows;
