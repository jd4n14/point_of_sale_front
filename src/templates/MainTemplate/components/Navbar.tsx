import React, { useState } from "react";
import { Navbar as MantineNavbar } from "@mantine/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { MainLinks } from "./MainLink";
import { useAtom } from 'jotai'
import { UIAtom } from "./ui.atom";

type LinkData = {
  title: string;
  to: string;
  icon: JSX.Element;
};

const links: LinkData[] = [
  {
    title: "Home",
    to: "/home",
    icon: <Home size={14} />,
  },
];

export const Navbar = () => {
  const { classes, cx } = useStyles();
  const [uiAtom, setUiAtom] = useAtom(UIAtom)

  return (
    <MantineNavbar
      height={"100vh"}
      hiddenBreakpoint="sm"
      hidden={!uiAtom.navbar}
      p="sm"
      width={{ sm: 200, lg: 250 }}
    >
      <MantineNavbar.Section grow>
        <MainLinks />
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};
