import { AppShell, useMantineTheme } from "@mantine/core";
import { useUi } from "../../../shared/hooks/useUi";
import { Aside } from "./Aside";
import { Navbar } from "./Navbar";

const Shell = ({ children }: { children: JSX.Element }) => {
  const theme = useMantineTheme();
  const { withAside, aside } = useUi();

  return (
    <AppShell
      styles={{
        main: {
          height: "100vh",
          paddingTop: 10,
          width: "calc(100vw)",
          background:
            theme.colorScheme === "dark"
              ? 'dark'
              : 'white',
        },
      }}
      aside={withAside ? <Aside>{aside}</Aside> : <></>}
      navbar={<Navbar />}
      navbarOffsetBreakpoint="sm"
      // header={<Header />}
    >
      {children}
    </AppShell>
  );
};

export default Shell;
