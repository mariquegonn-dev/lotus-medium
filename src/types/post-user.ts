import { User } from "@prisma/client";

export type NameUser = User & {
  User: {
    name: string;
    id: string;
  };
};
