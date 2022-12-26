import { RouterProvider } from "react-router-dom";
import GraphqlProvider from "./shared/providers/GraphqlProvider";
import MantineTheme from "./shared/providers/MantineTheme";
import router from "./router";

export default function App() {
  return (
    <GraphqlProvider>
      <MantineTheme>
        <RouterProvider router={router} />
      </MantineTheme>
    </GraphqlProvider>
  );
}
