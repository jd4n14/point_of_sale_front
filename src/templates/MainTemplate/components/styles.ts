import { createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    width: "60px",
  },

  aside: {
    flex: "0 0 60px",
    gap: theme.spacing.sm,
    padding: theme.spacing.sm,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  main: {
    flex: 1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  mainLink: {
    width: '100%',
    height: 44,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[0],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.green[4],
    },
  },

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][1],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 7],
    },
  },

  title: {
    boxSizing: "border-box",
    marginBottom: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: 18,
    height: 60,
  },

  logo: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: "border-box",
    display: "block",
    textDecoration: "none",
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    lineHeight: "44px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  linkActive: {
    "&, &:hover": {
      borderLeftColor:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
      color: theme.white,
    },
  },
}));

export default useStyles