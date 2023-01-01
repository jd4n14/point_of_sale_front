import DataTable from "../../../shared/components/DataTable";
import { Pagination, Group, ScrollArea } from "@mantine/core";
import { PaginatedMetadata } from "../../../gql/documents";

type Customer = {
  identifier?: string | null;
  name: string;
  lastName: string;
};

export const CustomersTable = ({
  customers,
  meta,
}: {
  customers: Customer[];
  meta?: PaginatedMetadata;
}) => {
  return (
    <div className="flex-1 flex flex-col mb-1">
      <div className="flex-1">
        <ScrollArea>
          <DataTable data={customers}>
            {(columnHelper) => [
              columnHelper.accessor("identifier", {
                id: "identifier",
                cell: (info) => info.renderValue(),
                header: "Identifier",
              }),
              columnHelper.accessor((row) => `${row.name} ${row.lastName}`, {
                id: "fullName",
                cell: (info) => info.getValue(),
                header: "Name",
              }),
              columnHelper.display({
                id: "type",
                cell: (info) => info.getValue(),
                header: "Type",
              }),
              columnHelper.display({
                id: "debt",
                cell: (info) => <span></span>,
                header: "Debt",
              }),
              columnHelper.display({
                id: "status",
                cell: (info) => <span></span>,
                header: "Status",
              }),
              columnHelper.display({
                id: "actions",
                cell: () => <span></span>,
              }),
            ]}
          </DataTable>
        </ScrollArea>
      </div>
      <Group position="center">
        <div className="flex justify-center w-full">
          <Pagination
            total={meta?.totalPages || 0}
            initialPage={meta?.currentPage || 1}
          />
        </div>
      </Group>
    </div>
  );
};
