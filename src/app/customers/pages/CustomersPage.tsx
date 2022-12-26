import { Box, Button, Text, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import { useQuery } from "urql";
import { graphql } from "../../../gql";
import { CustomersTable } from "../components/CustomersTable";

const GetAllCustomers = graphql(`
  query AllCustomers {
    clients {
      id
      name
      address1
      lastName
      phone
      identifier
    }
  }
`);

const CustomersPage = () => {
  const [{ data, fetching }] = useQuery({ query: GetAllCustomers });
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
        <CustomersTable customers={data?.clients || []} />
      </Box>
    </div>
  );
};

export default CustomersPage;
