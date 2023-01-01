import { Avatar, Text, UnstyledButton } from "@mantine/core";
import { Factory } from "lucide-react";
import { BusinessFragment } from "../../../gql/documents";
import { gql } from "urql";

export const StoreFragment = gql`
  fragment Business on Business {
    id
    name
    owner {
      id
      name
    }
  }
`;
const StoreList = ({ stores }: { stores: BusinessFragment[] }) => {
  return (
    <div className="flex">
      {stores.map((store) => (
        <UnstyledButton onClick={() => {}}>
          <Avatar size="xl" radius={100} color="cyan">
            <Factory />
          </Avatar>
          <Text className="text-center">{store.name}</Text>
        </UnstyledButton>
      ))}
    </div>
  );
};

export default StoreList