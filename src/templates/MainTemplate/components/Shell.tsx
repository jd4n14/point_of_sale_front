import { AppShell, Burger, MediaQuery, useMantineTheme } from "@mantine/core";
import { useAtom } from "jotai";
import { Aside } from "./Aside";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { UIAtom } from "./ui.atom";

const Shell = ({ children }: { children: JSX.Element }) => {
  const theme = useMantineTheme();

  return (
    <AppShell
      styles={{
        main: {
          height: "100vh",
          paddingTop: 0,
          width: "calc(100vw)",
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      // aside={<Aside />}
      navbar={<Navbar />}
      navbarOffsetBreakpoint="sm"
      header={<Header />}
    >
      {children}
    </AppShell>
  );
};

export default Shell;
