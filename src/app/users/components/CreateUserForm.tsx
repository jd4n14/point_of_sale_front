import { Select, TextInput } from "@mantine/core"

export const CreateUserForm = () => {

  return <form>
    <div>
      <TextInput label='Name' />
      <TextInput label='Email' />
      <TextInput label='Direction' />

    </div>
  </form>
}