import { AppShell, useMantineTheme } from "@mantine/core";
import { Aside } from "./Aside";
import { Navbar } from "./Navbar";

const Shell = ({ children }: { children: JSX.Element }) => {
  const theme = useMantineTheme()
  return (
    <AppShell
      styles={{
        main: {
          height: '100vh',
          paddingTop: 0,
          width: 'calc(100vw)',
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0]
        }
      }}
      // aside={<Aside />}
      navbar={<Navbar />}
    >
      {children}
    </AppShell>
  )
}

export default Shell