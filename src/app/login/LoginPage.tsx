import { Card } from "@mantine/core";
import { useMutation, gql } from "urql";
import { LoginForm } from "./components/LoginForm";

const LoginMutation = gql`
mutation Login($user: RegisterUser!) {
  login(user: $user) {
    token
  }
}
`
const LoginPage = () => {
  const [loginResult, login] = useMutation(LoginMutation);
  login({  });
  return (
    <div className="w-full place-content-center grid h-screen">
      <Card w={400}>
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginPage;
