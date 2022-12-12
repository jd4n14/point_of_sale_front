import { RouteObject } from "react-router-dom";
import CustomersPage from "./CustomersPage";

const HomeRoutes: RouteObject[] = [
  {
    path: 'customers',
    element: <CustomersPage />
  }
];

export default HomeRoutes