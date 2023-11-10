import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const { email, nickname } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    await prisma.user.update({
      where: {
        email,
      },
      data: {
        nickname,
      },
    });

    revalidateTag("get-users");

    return NextResponse.json({ message: "Username modified!", nickname });
  } catch {
    return NextResponse.json({ message: "POST Error" }, { status: 500 });
  }
}

export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      sessions: {
        select: {
          user: true,
        },
      },
    },
  });

  return NextResponse.json(users);
}
