import Shell from "./components/Shell";
import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return (
    <Shell>
      <Outlet />
    </Shell>
  );
}

export default MainTemplate