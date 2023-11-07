"use client";

import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { HeaderNav } from "./(components)/header-nav";

export const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <header className="p-4">
      <HeaderNav />

      {/* <Button className="gap-2" onClick={handleLoginClick}>
        <LogInIcon />
        Login
      </Button>

      <Button className="gap-2" variant="outline" onClick={handleLogoutClick}>
        <LogInIcon />
        Logout
      </Button>

      {data?.user ? <div>Olá {data?.user?.name}!</div> : <div>Faça Login</div>} */}
    </header>
  );
};
