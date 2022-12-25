import {
  ActionIcon,
  Select,
  Box,
  ScrollArea,
  Button,
  UnstyledButton,
  Card,
  Text,
  Group,
} from "@mantine/core";
import { Car, Plus, Users } from "lucide-react";

export const Overview = () => {
  return (
    <Box
      sx={() => ({ display: "flex", flexDirection: "column", height: "100%" })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing.sm,
        })}
      >
        <Select
          clearable
          searchable
          icon={<Users size={16} />}
          placeholder="Search customer"
          data={[{ value: "id", label: "Label 1" }]}
        />
        <ActionIcon>
          <Plus size={16} />
        </ActionIcon>
      </Box>
      <Box sx={(theme) => ({ flex: 1, marginTop: theme.spacing.sm })}>
        <ScrollArea>
          <Box
            display="flex"
            sx={(theme) => ({ gap: theme.spacing.sm, flexDirection: "column" })}
          >
            <Card p="sm">
              <Group position="apart">
                <div className="flex">
                  <Text
                    fz="sm"
                    className="truncate"
                    sx={() => ({ width: "calc(100% / 3) * 2" })}
                  >
                    Selected item title
                  </Text>
                  <Text fz="sm" color='grape' ml={2}>{' '} x3</Text>
                </div>
                <Text fz="sm">Total</Text>
              </Group>
            </Card>
          </Box>
        </ScrollArea>
      </Box>
      <Box sx={() => ({ display: "flex", justifyContent: "center" })}>
        <Button className="w-full">Create</Button>
      </Box>
    </Box>
  );
};
