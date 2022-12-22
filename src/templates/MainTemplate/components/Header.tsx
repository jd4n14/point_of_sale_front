import {
  Burger,
  MediaQuery,
  useMantineTheme,
  Header as MantineHeader,
} from "@mantine/core";
import { useAtom } from "jotai";
import { UIAtom } from "./ui.atom";

export const Header = () => {
  const [uiState, setUiState] = useAtom(UIAtom);
  const theme = useMantineTheme();
  return (
    <MantineHeader height={{ base: 50, md: 50 }} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={uiState.navbar}
            onClick={() =>
              setUiState((state) => ({ ...state, navbar: !state.navbar }))
            }
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
      </div>
    </MantineHeader>
  );
};
