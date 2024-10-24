"use client"

import { useUser } from "@/app/_store/user"
import { UpdateInfoModal } from "./UpdateInfoModal"

export const UpdateInfo = () => {
  const { user } = useUser()

  if (!user?.id) return null

  return (
    <div className="mt-2 flex flex-col gap-2 border-t border-t-stone-200 px-2 pt-3">
      <div className="flex items-center gap-1">
        <p className="font-bold">+{user?.number}</p>
        <UpdateInfoModal />
      </div>

      {user?.name && (
        <p className="max-w-[160px] overflow-hidden text-stone-400">
          {user.name}
        </p>
      )}
      {user?.email && (
        <p
          className="max-w-[160px] overflow-hidden text-sm text-stone-400"
          title={user.email}
        >
          {user.email}
        </p>
      )}
    </div>
  )
}
