import { Box, Button, Table, TextInput, Text, Group, Avatar, Pagination } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import _ from 'lodash'
import { CreateUserForm } from "./components/CreateUserForm";

type User = {
  name: string;
  email: string;
  status: string;
};

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor('name', {
    id: "name",
    header: (info) => _.startCase(info.column.id),
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('email', {
    id: "phone",
    header: (info) => _.startCase(info.column.id),
    cell: (info) => info.renderValue()
  }),
  columnHelper.accessor('status', {
    id: "status",
    header: (info) => _.startCase(info.column.id),
    cell: (info) => info.renderValue()
  }),
  columnHelper.display({
    id: 'actions',
    header: "Actions",
    cell: () => <div>
      DEl
    </div>
  })
];

const data: User[] = [
  {
    name: "12432",
    email: "34543@mail.com",
    status: "4532",
  },
];

const UsersPage = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const openModal = () => {
    openConfirmModal({
      title: 'Add client',
      children: <CreateUserForm />,
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    })
  }

  return (
    <div>
      <Box
        component="div"
        sx={() => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
          gap: 10,
        })}
      >
        <Text>Users</Text>
        <Group>
          <TextInput placeholder="Search"></TextInput>
          <Button onClick={openModal}>Add user</Button>
        </Group>
      </Box>
      <div>
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
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <Box sx={() => ({ display: 'flex', justifyContent: 'center', marginTop: 10 })}>
          <Pagination total={10} />
        </Box>
      </div>
    </div>
  );
};

export default UsersPage;
