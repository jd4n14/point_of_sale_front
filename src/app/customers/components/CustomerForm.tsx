import { TextInput, Box, Button } from "@mantine/core";

export const CustomerForm = () => {
  return (
    <Box
      component="form"
      sx={() => ({ display: "flex", maxWidth: 400, flexDirection: "column" })}
    >
      <div></div>
      <TextInput label="Name" />
      <TextInput label="last name" />
      <TextInput label="phone" />
      <TextInput label="Address" />
      <Button sx={(theme) => ({ marginTop: theme.spacing.sm })}>Save</Button>
    </Box>
  );
};
