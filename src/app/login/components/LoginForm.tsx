import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { Button, PasswordInput, TextInput, Text } from "@mantine/core";
import { RegisterUser } from "../../../gql/documents";
import { CombinedError } from "urql";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof schema>;

interface ILoginFormProps {
  login?: LoginForm;
  onSubmit: (values: RegisterUser) => Promise<any>;
}

type LoginFormProps = {
  (): JSX.Element;
  (props: ILoginFormProps): JSX.Element;
};

export const LoginForm: LoginFormProps = (props?: ILoginFormProps) => {
  const { email, password } = props?.login || {};

  const form = useForm<LoginForm>({
    validate: zodResolver(schema),
    initialValues: {
      password: password || "",
      email: email || "",
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(({ email, password }) => {
        props?.onSubmit({ email, password }).catch((error) => {
          if (error instanceof CombinedError) {
            form.setFieldError(
              "email",
              error.graphQLErrors.join(", ").toString()
            );
          }
        });
      })}
      className="flex flex-col gap-3"
    >
      <Text className="text-center" fz="lg">
        Login
      </Text>
      <TextInput withAsterisk label="Email" {...form.getInputProps("email")} />
      <PasswordInput
        withAsterisk
        label="Password"
        {...form.getInputProps("password")}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
