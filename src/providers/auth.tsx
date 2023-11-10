"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

export const AuthProvider = ({ children }: SessionProviderProps) => {
  return (
    <SessionProvider basePath="https://lotus-medium.vercel.app/api/auth">
      {children}
    </SessionProvider>
  );
};
