import { TextInput, Card, Button, Select } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import defaultImgProfile from "../../../shared/assets/defaultProfile.png";

const schema = z.object({
  name: z.string({ required_error: "Name is required" }),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  type: z.number(),
});

type CustomerType = z.infer<typeof schema>;

type CustomerFormProps = {
  customer?: CustomerType;
  onSubmit: (props: CustomerType) => void;
};

export const CustomerForm = ({ customer, onSubmit }: CustomerFormProps) => {
  const form = useForm<CustomerType>({
    validate: zodResolver(schema),
    initialValues: customer,
  });
  return (
    <form
      className="flex flex-col"
      onSubmit={form.onSubmit((values) => console.log(values))}
    >
      <Card sx={{ width: 400 }}>
        <div className="flex gap-10 items-center justify-center">
          <div className="w-80">
            <TextInput
              label="Name"
              withAsterisk
              {...form.getInputProps("name")}
            />
            <TextInput label="Last Name" {...form.getInputProps("lastName")} />
            <TextInput label="Phone" {...form.getInputProps("phone")} />
            <TextInput label="Address" {...form.getInputProps("address")} />
            <Select
              withAsterisk
              {...form.getInputProps("type")}
              placeholder="Pick one"
              label="Select the customer type"
              data={[]}
            />
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
