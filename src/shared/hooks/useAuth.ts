import { useAtom } from "jotai";
import { authAtom } from "./auth.state";

export const useAuth = () => {
  const [user, setUser] = useAtom(authAtom);

  const isLoggedIn = !!user.token;

  const setLoggedUser = (user: any) => {
    setUser((data) => ({ ...data, user }));
  };

  const setToken = (token: string | undefined) => {
    setUser((data) => ({ ...data, token }));
  };

  return {
    isLoggedIn,
    setLoggedUser,
    setToken,
    user
  };
};
