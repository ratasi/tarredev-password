import { DataTableItemsProps } from "./DataTableItems.types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export function DataTableItems(props: DataTableItemsProps) {
  const { elements } = props;

  return (
    <div className="py-10">
      <DataTable columns={columns} data={elements} />
    </div>
  );
}
