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

export const HeaderNav = () => {
  return (
    <div className="font-geist flex justify-between ">
      {/* Home e barra de pesquisa */}
      <div className="flex items-center gap-3">
        <div className="">
          <Link href="/" className="flex items-center gap-1 ">
            <LotusIcon size={24} />
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
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};
