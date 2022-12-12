import { RouteObject } from "react-router-dom";
import UsersPage from "./UsersPage";

const HomeRoutes: RouteObject[] = [
  {
    path: 'users',
    element: <UsersPage />
  }
];

export default HomeRoutes