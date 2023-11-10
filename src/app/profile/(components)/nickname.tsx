"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebounce } from "usehooks-ts";
import { UserSessionType } from "../page";
import { User } from "@prisma/client";

type NickNameProps = {
  currentUser: UserSessionType;
  currentData: User | null;
};

export const NickName = ({ currentUser, currentData }: NickNameProps) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  const router = useRouter();

  const submit = async () => {
    const res = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        nickname: debouncedValue,
        email: currentUser?.email,
      }),
    });

    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div className="w-[400px]">
      <div>Usuário logado: {currentUser?.name}</div>
      <div>Nickname: {currentData?.nickname}</div>

      <div>
        <Input
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <button onClick={submit} className="rounded-sm bg-red-400 p-2">
          submit
        </button>
      </div>
    </div>
  );
};
