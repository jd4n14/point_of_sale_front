import { Box, Button, TextInput, Text, Group } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { CreateUserForm } from "./components/CreateUserForm";

const UsersPage = () => {
  const openModal = () => {
    openConfirmModal({
      title: "Add client",
      children: <CreateUserForm />,
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });
  };

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
      <div></div>
    </div>
  );
};

export default UsersPage;
