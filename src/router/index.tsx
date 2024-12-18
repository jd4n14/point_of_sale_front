import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import HomeRoutes from "../app/home/routes";
import LoginRoutes from "../app/login/routes";
import UsersRoutes from "../app/users/routes";
import CustomersRoutes from "../app/customers/routes";
import PaymentRoutes from "../app/payments/routes";
import SettingsRoutes from "../app/settings/routes";
import StoreRoutes from "../app/stores/routes";
import { ProtectedRoute } from "./ProtectedRoute";

const router = createBrowserRouter([
  ...LoginRoutes,
  {
    path: "",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <MainTemplate />,
        children: [
          ...HomeRoutes,
          ...UsersRoutes,
          ...CustomersRoutes,
          ...PaymentRoutes,
          ...SettingsRoutes,
          ...StoreRoutes
        ],
      },
    ],
  },
]);
export default router;
