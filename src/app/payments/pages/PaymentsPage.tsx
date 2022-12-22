import {
  ActionIcon,
  Box,
  Button,
  Card,
  Divider,
  ScrollArea,
  Text,
  TextInput,
} from "@mantine/core";
import { Car, Plus } from "lucide-react";

const PaymentsPage = () => {
  return (
    <Box>
      <Box
        sx={(theme) => ({
          justifyContent: "end",
          display: "flex",
          marginBottom: 10,
          gap: theme.spacing.sm
        })}
      >
        <TextInput placeholder="Search" />
      </Box>
      <ScrollArea>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing.sm,
          })}
        >
          <Card sx={() => ({ minWidth: 250, minHeight: 100 })}>
            <div className="flex justify-between">
              <Text>Category 1</Text>
            </div>
            <div>
              <Text fz="sm">Description category</Text>
            </div>
          </Card>
        </Box>
      </ScrollArea>
      <Divider sx={() => ({ marginTop: 10 })} />
      <ScrollArea>
        <Box sx={() => ({ marginTop: 10, display: "flex" })}>
          <Card sx={() => ({ minWidth: 250, minHeight: 100 })}>
            <div className="flex justify-between">
              <Text>Option 1</Text>
              <ActionIcon>
                <Plus />
              </ActionIcon>
            </div>
            <div>
              <Text fz="sm">Description option</Text>
            </div>
          </Card>
        </Box>
      </ScrollArea>
    </Box>
  );
};

export default PaymentsPage;
