import { cn } from "@/lib/utils";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

type BaseSectionProps = {
  className?: ClassNameValue;
  children: React.ReactNode;
};

const BaseSection = ({ className, children }: BaseSectionProps) => {
  return <section className={cn("pt-[57px]", className)}>{children}</section>;
};

export { BaseSection };
