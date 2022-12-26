import { Navigate, Outlet, Route } from "react-router-dom";
import { useAuth } from "../shared/hooks/useAuth";

export const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return <Navigate to="/login" />;
  return <Outlet />;
};
