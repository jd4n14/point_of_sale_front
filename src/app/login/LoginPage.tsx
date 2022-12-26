import { Card } from "@mantine/core";
import { gql } from "urql";
import { RegisterUser, useLoginMutation } from "../../gql/documents";
import { LoginForm } from "./components/LoginForm";

export const LoginMutation = gql`
  mutation Login($user: RegisterUser!) {
    login(user: $user) {
      token
    }
  }
`;

const LoginPage = () => {
  const [loginResult, login] = useLoginMutation();
  const onSubmit = async ({ email, password }: RegisterUser) => {
    const { data } = await login({ user: { email, password } });
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
