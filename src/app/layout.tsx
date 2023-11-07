import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/providers/auth";
import { Header } from "./components/Header";
import { GeistSans } from "geist/font";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lotus - Medium",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={cn(inter.className, GeistSans.variable)}>
          <Header />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
