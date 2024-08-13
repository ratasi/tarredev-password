import { Element } from "@prisma/client";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export type TableDataProps = {
  elements: Element[];
};

export function TableData(props: TableDataProps) {
  const { elements } = props;
  return (
    <div className="py-10">
      <DataTable columns={columns} data={elements} />
    </div>
  );
}
