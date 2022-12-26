import { Card } from "@mantine/core";
import { LoginForm } from "./components/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full place-content-center grid h-screen">
      <Card w={400}>
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginPage;
