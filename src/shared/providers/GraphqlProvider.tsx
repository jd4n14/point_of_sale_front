import { createClient, Provider } from "urql";

const client = createClient({
  url: "http://localhost:3000/graphql",
});

const GraphqlProvider = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};

export default GraphqlProvider;
