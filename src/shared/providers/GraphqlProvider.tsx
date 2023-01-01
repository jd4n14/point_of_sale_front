import { authExchange } from "@urql/exchange-auth";
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  makeOperation,
  mapExchange,
  Provider,
} from "urql";
import { string } from "zod";

interface AuthType {
  token?: string;
}

const client = createClient({
  url: "http://localhost:3000/graphql",
  exchanges: [
    dedupExchange,
    cacheExchange,
    mapExchange({
      onError(error, _operation) {
        const isAuthError = error.graphQLErrors.some(
          (e) => e.message === "Unauthorized"
        );
        if (isAuthError) {
          localStorage.removeItem("user");
        }
      },
    }),
    authExchange<AuthType | null | undefined>({
      getAuth: async ({ authState }) => {
        if (!authState) {
          const user = await new Promise((resolve) => {
            const userRaw = localStorage.getItem("user");
            try {
              resolve(JSON.parse(userRaw || ""));
            } catch (error) {
              resolve(null);
            }
          });
          if (user) return { token: user.token };
          localStorage.removeItem("user");
          return null;
        }
      },
      addAuthToOperation: ({ authState, operation }) => {
        if (!authState?.token) return operation;
        const fetchOptions =
          typeof operation.context.fetchOptions === "function"
            ? operation.context.fetchOptions()
            : operation.context.fetchOptions || {};

        return makeOperation(operation.kind, operation, {
          ...operation.context,
          fetchOptions: {
            ...fetchOptions,
            headers: {
              ...fetchOptions.headers,
              Authorization: `Bearer ${authState.token}`,
            },
          },
        });
      },
      didAuthError: ({ error }) => {
        return error.graphQLErrors.some((e) => e.message === "Unauthorized");
      },
    }),
    fetchExchange,
  ],
});

const GraphqlProvider = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};

export default GraphqlProvider;
