import { Box, Button, TextInput, Table } from "@mantine/core";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";

type Customer = {
  identifier: string;
  name: string;
  lastName: string;
  debt: number;
  type: string;
  status: boolean;
};

const columnHelper = createColumnHelper<Customer>();

const columns: ColumnDef<Customer, any>[] = [
  columnHelper.accessor("identifier", {
    id: "identifier",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor((row) => `${row.name} ${row.lastName}`, {
    id: "fullName",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("type", {
    id: "type",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("debt", {
    id: "debt",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("status", {
    id: "status",
    cell: (info) => <span>{info.renderValue().toString()}</span>,
  }),
  columnHelper.display({
    id: "actions",
    cell: () => <span></span>,
  }),
];

const data: Customer[] = [
  {
    identifier: "1",
    debt: 14.43,
    lastName: "Last Name",
    name: "Name",
    status: false,
    type: "operator",
  },
];

const CustomersPage = () => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <Box
        sx={() => ({
          display: "flex",
          justifyContent: "end",
          gap: 10,
          marginTop: 10,
        })}
      >
        <TextInput placeholder="Search customer" />
        <Button>Add customer</Button>
      </Box>
      <Box mt={10}>
        <Table striped withBorder>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </div>
  );
};

export default CustomersPage;
