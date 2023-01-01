import { Box, ScrollArea, Button, Card, Text, Group } from "@mantine/core";

export const Overview = () => {
  return (
    <Box
      sx={() => ({ display: "flex", flexDirection: "column", height: "100%" })}
    >
      <Text fz="md" weight="bold">
        Summary
      </Text>
      <Box sx={(theme) => ({ flex: 1, marginTop: 10 })}>
        <ScrollArea>
          <Box
            display="flex"
            sx={(theme) => ({ gap: theme.spacing.sm, flexDirection: "column" })}
          >
            <Card p="sm" withBorder>
              <Group position="apart">
                <div className="flex">
                  <Text
                    fz="sm"
                    className="truncate"
                    sx={() => ({ width: "calc(100% / 3) * 2" })}
                  >
                    Selected item title
                  </Text>
                  <Text fz="sm" color="grape" ml={2}>
                    {" "}
                    x3
                  </Text>
                </div>
                <Text fz="sm">Total</Text>
              </Group>
            </Card>
          </Box>
        </ScrollArea>
      </Box>
      <Card my="sm" p={10} sx={() => ({ textAlign: "end" })}>
        <Text>Total: 12</Text>
      </Card>
      <Box sx={() => ({ display: "flex", justifyContent: "center" })}>
        <Button className="w-full">Create</Button>
      </Box>
    </Box>
  );
};
