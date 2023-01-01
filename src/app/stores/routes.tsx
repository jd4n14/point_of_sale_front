import { RouteObject } from "react-router-dom";
import StoresPage from "./pages/StoresPage";

const HomeRoutes: RouteObject[] = [
  {
    path: "stores",
    element: <StoresPage />,
  },
];

export default HomeRoutes;
