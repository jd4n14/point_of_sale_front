import {
  ActionIcon,
  Box,
  Button,
  Card,
  Divider,
  ScrollArea,
  Text,
  TextInput,
  Avatar,
  Group,
  Badge,
} from "@mantine/core";
import { Plus } from "lucide-react";
import { useUi } from "../../../shared/hooks/useUi";
import { Overview } from "../components/Overview";

const PaymentsPage = () => {
  useUi({
    enableAside: true,
    aside: <Overview />,
    disableOnExit: true,
  });

  return (
    <Box>
      <Box
        sx={(theme) => ({
          justifyContent: "end",
          display: "flex",
          marginBottom: 10,
          gap: theme.spacing.sm,
        })}
      >
        <TextInput placeholder="Search" />
        <Button leftIcon={<Plus size={16} />}>Add customer</Button>
      </Box>
      <Card radius="md" withBorder>
        <Group position="center">
          <Group className="flex flex-col items-start">
            <Avatar radius={100} size="xl" />
          </Group>
          <Group className="flex items-start flex-col gap-0">
            <Text fz={"xl"}>Full name of user</Text>
            <Text fz="md">Identifier - Store name</Text>
          </Group>
        </Group>
        <Group position="center" className="flex flex-row" mt={10}>
          <Badge color="green">Type</Badge>
          <Badge color="blue">Concession</Badge>
        </Group>
      </Card>
      <ScrollArea>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing.sm,
            marginTop: theme.spacing.sm,
          })}
        >
          <Button compact size="xs" radius="xl" variant="light">
            Category 1
          </Button>
          <Button color="lime" compact size="xs" radius="xl" variant="light">
            Category 2
          </Button>
        </Box>
      </ScrollArea>
      <Divider sx={() => ({ marginTop: 10 })} />
      <ScrollArea>
        <Box sx={() => ({ marginTop: 10, display: "flex" })}>
          <Card withBorder sx={() => ({ minWidth: 250, minHeight: 50 })}>
            <div className="flex justify-between items-center">
              <Text>W-22-2022</Text>
              <ActionIcon color="green">
                <Plus size={16} />
              </ActionIcon>
            </div>
          </Card>
        </Box>
      </ScrollArea>
    </Box>
  );
};

export default PaymentsPage;
