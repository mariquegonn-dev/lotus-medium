import {
  BookmarksIcon,
  GearIcon,
  SignOutIcon,
  UserIcon,
} from "@/components/icons";

type MenuConfigType = {
  icon: React.ReactNode;
  label: string;
};

export type MainMenu = {
  items: MenuConfigType[];
};

export const menuConfig: MainMenu = {
  items: [
    {
      icon: <UserIcon size={24} weight="light" color="#4B5563" />,
      label: "Profile",
    },
    {
      icon: <BookmarksIcon size={24} weight="light" color="#4B5563" />,
      label: "Library",
    },
    {
      icon: <GearIcon size={24} weight="light" color="#4B5563" />,
      label: "Settings",
    },

    {
      icon: <SignOutIcon size={24} weight="light" color="#4B5563" />,
      label: "Logout",
    },
  ],
};
