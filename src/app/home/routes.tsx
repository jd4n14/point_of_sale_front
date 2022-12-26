import { RouteObject } from "react-router-dom";
import HomePage from "./HomePage";

const HomeRoutes: RouteObject[] = [
  {
    path: "",
    element: <HomePage />,
  },
];

export default HomeRoutes;
