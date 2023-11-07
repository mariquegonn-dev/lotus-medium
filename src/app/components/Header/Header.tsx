"use client";

import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <div>
      <Button className="gap-2" onClick={handleLoginClick}>
        <LogInIcon />
        Login
      </Button>

      <Button className="gap-2" variant="outline" onClick={handleLogoutClick}>
        <LogInIcon />
        Logout
      </Button>

      {data?.user ? <div>Olá {data?.user?.name}!</div> : <div>Faça Login</div>}
    </div>
  );
};
