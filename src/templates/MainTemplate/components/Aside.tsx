import { Drawer, MediaQuery, Paper, useMantineTheme, Aside as MantineAside } from "@mantine/core";
import { useState } from "react";

export const Aside = () => {
  const [status, setStatus] = useState({
    rightSide: false,
    leftSide: false
  });
  const [aside, _setAside] = useState({})
  const theme = useMantineTheme()
  if (!aside) return null
  const onCloseAside = () =>
    setStatus((oldStatus) => ({
      ...oldStatus,
      rightSide: !oldStatus.rightSide,
    }))
  return (
    <>
      <Drawer
        opened={status.rightSide}
        onClose={onCloseAside}
        withCloseButton={false}
        position="right"
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <Paper p="md" style={{ height: '100vh' }}>
        </Paper>
      </Drawer>
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <MantineAside p="md" hiddenBreakpoint="md" width={{ md: 300 }}>
          <div>Usuarios</div>
        </MantineAside>
      </MediaQuery>
    </>
  )
}