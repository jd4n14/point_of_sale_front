import { TextInput, Card, Button, Select } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { gql, useQuery } from "urql";
import { z } from "zod";
import { AllCustomerTypesQuery, CreateClient } from "../../../gql/documents";

const schema = z.object({
  name: z.string({ required_error: "Name is required" }),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  identifier: z.string().optional(),
  email: z.string().optional(),
  address1: z.string().optional(),
  type: z.string().optional(),
});

type CustomerType = z.infer<typeof schema>;

type CustomerFormProps = {
  customer?: CustomerType;
  onSubmit: (props: CreateClient) => void;
};

const CustomerTypesQueryDocument = gql`
  query AllCustomerTypes {
    clientTypes {
      value: id
      label: name
    }
  }
`;

export const CustomerForm = ({ customer, onSubmit }: CustomerFormProps) => {
  const form = useForm<CustomerType>({
    validate: zodResolver(schema),
    initialValues: customer,
  });

  const [clients] = useQuery<AllCustomerTypesQuery>({
    query: CustomerTypesQueryDocument,
  });

  return (
    <form className="flex flex-col" onSubmit={form.onSubmit(onSubmit)}>
      <Card sx={{ width: 400 }}>
        <div className="flex gap-10 items-center justify-center">
          <div className="w-80">
            <TextInput
              label="Identifier"
              withAsterisk
              {...form.getInputProps("identifier")}
            />
            <TextInput
              label="Name"
              withAsterisk
              {...form.getInputProps("name")}
            />
            <TextInput label="Last Name" {...form.getInputProps("lastName")} />
            <TextInput label="Phone" {...form.getInputProps("phone")} />
            <TextInput label="Email" {...form.getInputProps("email")} />
            <TextInput label="Address" {...form.getInputProps("address1")} />
            {!!clients.data?.clientTypes?.length && (
              <Select
                withAsterisk
                {...form.getInputProps("type")}
                placeholder="Pick one"
                label="Select the customer type"
                data={clients.data?.clientTypes}
              />
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            sx={(theme) => ({ marginTop: theme.spacing.sm })}
            type="submit"
          >
            Save
          </Button>
        </div>
      </Card>
    </form>
  );
};
