import { Group, ThemeIcon, UnstyledButton, Text } from "@mantine/core";
import {
  AlertCircle,
  GitPullRequest,
  MessageCircle,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  to: string;
}

export const MainLink = ({ icon, color, label, to }: MainLinkProps) => {
  return (
    <UnstyledButton<typeof Link>
      to={to}
      component={Link}
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.sm,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="filled">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

const data = [
  {
    icon: <GitPullRequest size={16} />,
    color: "blue",
    label: "Home",
    to: "",
  },
  {
    icon: <AlertCircle size={16} />,
    color: "teal",
    label: "Users",
    to: "users",
  },
  {
    icon: <MessageCircle size={16} />,
    color: "violet",
    label: "Customers",
    to: "customers",
  },
  {
    icon: <MessageCircle size={16} />,
    color: "blue",
    label: "Payments",
    to: "payments",
  },
  {
    icon: <Database size={16} />,
    color: "grape",
    label: "Settings",
    to: "settings",
  },
  {
    icon: <Database size={16} />,
    color: "grape",
    label: "Stores",
    to: "stores",
  },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
