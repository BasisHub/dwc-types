import { FunctionalComponent } from '../../stencil-public-runtime';
import { TableColumn, TableRow } from './dwc-table.types';
export declare const computeColumnCellCheckboxFunctionalStyles: (hasLeftPinnedColumns: boolean) => {
    left?: undefined;
    position?: undefined;
    zIndex?: undefined;
} | {
    left: string;
    position: string;
    zIndex: string;
};
type TableHeaderRowProps = {
    columns: TableColumn[];
    hasLeftPinnedColumns: boolean;
    multiSelection: boolean;
    rows: TableRow[];
    selected: Array<string | number>;
    checkboxSelection: boolean;
    headerCheckboxSelection: boolean;
    columnHeaders: boolean;
    virtualRows: TableRow[];
};
/**
 * A functional component that renders a row in a table header.
 */
declare const TableHeaderRowComponent: FunctionalComponent<TableHeaderRowProps>;
export default TableHeaderRowComponent;
