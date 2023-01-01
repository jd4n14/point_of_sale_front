import { useNavigate } from "react-router-dom";
import { gql } from "urql";
import { CreateClient, useCreateClientMutation } from "../../../gql/documents";
import { CustomerForm } from "../components/CustomerForm";

const CreateClientDocument = gql`
  mutation CreateClient($client: CreateClient!) {
    createClient(client: $client) {
      id
      identifier
      name
      lastName
      email
      phone
      address1
    }
  }
`;

export const CustomerAddPage = () => {
  const [createClientResult, createClient] = useCreateClientMutation();
  const navigate = useNavigate();
  const onCreateNewClient = (client: CreateClient) => {
    createClient({ client: client })
      .then(() => {
        navigate("/customers");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <CustomerForm onSubmit={onCreateNewClient} />
    </div>
  );
};
