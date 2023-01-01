import { gql, useQuery } from "urql";
import { AllStoresQuery, Business } from "../../../gql/documents";
import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  Text,
  TextInput,
} from "@mantine/core";
import StoreList from "../components/StoreList";

const AllStoresDocument = gql`
  query AllStores {
    business {
      id
      name
      owner {
        id
        name
      }
    }
  }
`;

const StoresPage = () => {
  const [storesQuery] = useQuery<AllStoresQuery>({ query: AllStoresDocument });

  return (
    <div>
      <LoadingOverlay visible={storesQuery.fetching} overlayBlur={2} />
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
          <Button onClick={() => {}}>Add store</Button>
        </Group>
      </Box>
      <StoreList stores={storesQuery.data?.business || []} />
    </div>
  );
};

export default StoresPage;
