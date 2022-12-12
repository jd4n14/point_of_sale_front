import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import HomeRoutes from "../app/home/routes";
import LoginRoutes from '../app/login/routes'
import UsersRoutes from '../app/users/routes'
import CustomersRoutes from '../app/customers/routes'

const router = createBrowserRouter([
  ...LoginRoutes,
  {
    path: '/',
    element: <MainTemplate />,
    children: [
      ...HomeRoutes,
      ...UsersRoutes,
      ...CustomersRoutes,
    ],
  }
]);
export default router;