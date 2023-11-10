import { prismaClient } from "@/lib/prisma";

export default async function PerfilPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const users = await prismaClient.user.findMany({
    where: {
      nickname: id,
    },
  });

  return (
    <div className="pt-[60px]">
      {users.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}

      {users.length === 0 && <div>Usuário não encontrado</div>}
    </div>
  );
}
