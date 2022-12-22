import { RouteObject } from "react-router-dom";
import PaymentsPage from "./pages/PaymentsPage";

const HomeRoutes: RouteObject[] = [
  {
    path: "payments",
    element: <PaymentsPage />
  }
];

export default HomeRoutes;
