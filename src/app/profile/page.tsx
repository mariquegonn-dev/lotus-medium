import { BaseSection } from "@/components/my-ui/base-section";
import { getCurrentUser } from "@/lib/session";
import { NickName } from "./(components)/nickname";
import { prismaClient } from "@/lib/prisma";
import { User } from "@prisma/client";

export type UserSessionType =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

export default async function ProfilePage() {
  const currentUser: UserSessionType = await getCurrentUser();

  if (typeof currentUser === "undefined")
    return (
      <p className="pt-[60px]">
        Você não está logado para acessar essa sessão.
      </p>
    );

  if (!currentUser?.email) return null;

  const currentData: User | null = await prismaClient.user.findUnique({
    where: {
      email: currentUser.email,
    },
  });

  return (
    <BaseSection>
      <NickName currentUser={currentUser} currentData={currentData} />
    </BaseSection>
  );
}
