"use client";

import { BellIcon, NotePencilIcon, PinIcon } from "@/components/icons";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { MainMenu } from "./menu.config";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type HeaderNavProps = {
  items: MainMenu;
};

export const HeaderNav = ({ items }: HeaderNavProps) => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <div className="flex justify-between px-6 py-2 font-geist backdrop-blur-[2px]">
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

        <Menubar className="border-none bg-none ">
          <MenubarMenu>
            <MenubarTrigger className="link-custom-component border-none bg-none p-0 outline-none hover:bg-none focus:bg-none">
              <PinIcon size={24} weight="light" color="#4B5563" />
            </MenubarTrigger>
            <MenubarContent className="mr-4">
              <MenubarItem>Você ainda não tem nenhum post fixado</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        {status === "authenticated" ? (
          <Menubar className="border-none bg-none ">
            <MenubarMenu>
              <MenubarTrigger className="border-none bg-none p-0 outline-none hover:bg-none focus:bg-none">
                {data?.user?.image ? (
                  <Avatar>
                    <AvatarImage src={data.user.image} />
                    <AvatarFallback>Perfil User</AvatarFallback>
                  </Avatar>
                ) : (
                  "You"
                )}
              </MenubarTrigger>
              <MenubarContent className="mr-4">
                {items.items.map((item) => (
                  <MenubarItem
                    key={item.label}
                    className="link-custom-component group p-0"
                  >
                    <Link
                      href={`/${item.label.toLowerCase()}`}
                      className="flex w-full items-center rounded-sm p-2 hover:bg-primary-foreground"
                      onClick={() => {
                        if (item.label === "Logout") handleLogoutClick();
                      }}
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
                    className="w-full  border-t-[1px] py-2 text-center text-xs text-primary"
                  >
                    buy me a coffe :)
                  </Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <Button onClick={handleLoginClick}>Login</Button>
        )}
      </div>
    </div>
  );
};
