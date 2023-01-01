import { Card } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { gql } from "urql";
import { RegisterUser, useLoginMutation } from "../../gql/documents";
import { useAuth } from "../../shared/hooks/useAuth";
import { LoginForm } from "./components/LoginForm";

export const LoginMutation = gql`
  mutation Login($user: RegisterUser!) {
    login(user: $user) {
      token
    }
  }
`;

const LoginPage = () => {
  const [_, login] = useLoginMutation();
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }: RegisterUser) => {
    const { data, error } = await login({ user: { email, password } });
    console.log('on submit', data, error)
    if (error) throw error;
    setToken(data?.login.token);
    navigate("/");
  };

  return (
    <div className="w-full place-content-center grid h-screen">
      <Card w={400}>
        <LoginForm onSubmit={onSubmit} />
      </Card>
    </div>
  );
};

export default LoginPage;
