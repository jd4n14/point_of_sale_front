import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { useHotkeys, useLocalStorage, useMediaQuery } from "@mantine/hooks";
import router from "./router";
import { ModalsProvider } from "@mantine/modals";

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          fontFamily: "Inter",
          primaryColor: 'violet',
        }}
      >
        <ModalsProvider modalProps={{ fullScreen: isMobile }}>
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
