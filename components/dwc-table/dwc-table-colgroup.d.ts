import { FunctionalComponent } from '../../stencil-public-runtime';
import { TableColumn } from "./dwc-table.types";
type TableColgroupProps = {
    columns: TableColumn[];
    multiSelection: boolean;
    checkboxSelection: boolean;
};
declare const TableColgroup: FunctionalComponent<TableColgroupProps>;
export default TableColgroup;
