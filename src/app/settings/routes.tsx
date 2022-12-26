import { RouteObject } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";

const HomeRoutes: RouteObject[] = [
  {
    path: "settings",
    element: <SettingsPage />,
  },
];

export default HomeRoutes;
