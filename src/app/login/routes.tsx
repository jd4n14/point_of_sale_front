import { RouteObject } from "react-router-dom";
import LoginPage from "./LoginPage";

const HomeRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />
  }
];

export default HomeRoutes