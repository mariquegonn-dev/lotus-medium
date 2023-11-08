import { BellIcon, LotusIcon, NotePencilIcon } from "@/components/icons";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { MainMenu } from "./menu.config";

type HeaderNavProps = {
  items: MainMenu;
};

export const HeaderNav = ({ items }: HeaderNavProps) => {
  return (
    <div className="flex justify-between px-6 py-2 font-geist">
      {/* Home e barra de pesquisa */}
      <div className="flex items-center gap-3">
        <div className="">
          <Link href="/">
            <span className="text-xl font-semibold">lotus</span>
          </Link>
        </div>
      </div>

      {/* Post, notifications e menu */}
      <div className="flex items-center gap-6">
        <Link
          href="/new-post"
          className="link-custom-component flex items-center gap-1"
        >
          <NotePencilIcon size={24} weight="light" color="#4B5563" />
          <span className="text-sm font-extralight text-gray-600 hover:text-primary">
            Write
          </span>
        </Link>

        <Link href="/notifications" className="link-custom-component">
          <BellIcon size={24} weight="light" color="#4B5563" />
        </Link>

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="hover:bg-accent">Sign In</MenubarTrigger>
            <MenubarContent className="mr-4">
              {items.items.map((item, index) => (
                <MenubarItem
                  key={item.label}
                  className="link-custom-component group p-0"
                >
                  <Link
                    href={`/${item.label.toLowerCase()}`}
                    className="flex w-full items-center rounded-sm p-2 hover:bg-primary-foreground"
                  >
                    {item.icon}{" "}
                    <MenubarShortcut className="ml-3 group-hover:text-gray-900">
                      <p>{item.label}</p>
                    </MenubarShortcut>
                  </Link>
                </MenubarItem>
              ))}
              <MenubarItem className="p-0">
                <Link
                  href="#"
                  className="w-full rounded-sm p-2 text-center text-xs text-gray-900 hover:scale-105"
                >
                  buy me a coffe :)
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};
