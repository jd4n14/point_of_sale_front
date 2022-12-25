import { Box, Button, Text, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import { CustomersTable } from "../components/CustomersTable";

const CustomersPage = () => {
  return (
    <div>
      <Box
        sx={() => ({
          display: "flex",
          justifyContent: "end",
          gap: 10,
        })}
      >
        <TextInput placeholder="Search customer" />
        <Button to="/customers/add" component={Link}>
          Add customer
        </Button>
      </Box>
      <Box mt={10}>
        <CustomersTable />
      </Box>
    </div>
  );
};

export default CustomersPage;
