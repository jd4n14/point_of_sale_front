import { RouteObject } from "react-router-dom";
import { CustomerAddPage } from "./pages/CustomerAddPage";
import CustomersPage from "./pages/CustomersPage";

const HomeRoutes: RouteObject[] = [
  {
    path: "customers",
    element: <CustomersPage />,
  },
  {
    path: "customers/add",
    element: <CustomerAddPage />,
  },
];

export default HomeRoutes;
