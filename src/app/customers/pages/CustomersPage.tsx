import { Box, Button, Text, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import { gql, useQuery } from "urql";
import { AllCustomersQuery } from "../../../gql/documents";
import { CustomersTable } from "../components/CustomersTable";

const GetAllCustomers = gql`
  query AllCustomers {
    clients {
      data {
        id
        identifier
        name
        lastName
        email
        phone
        address1
      }
      meta {
        currentPage
        itemsPerPage
        totalItems
        totalPages
      }
    }
  }
`;

const CustomersPage = () => {
  const [{ data }] = useQuery<AllCustomersQuery>({
    query: GetAllCustomers,
  });
  return (
    <>
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
      <Box
        mt={10}
        className="flex flex-col"
        sx={() => ({ height: "calc(100% - 30px)" })}
      >
        <CustomersTable
          customers={(data?.clients.data || []) as any}
          meta={data?.clients.meta || {}}
        />
      </Box>
    </>
  );
};

export default CustomersPage;
