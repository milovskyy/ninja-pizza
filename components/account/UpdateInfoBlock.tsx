"use client"

import { useUser } from "@/app/_store/user"
import { UpdateInfoModal } from "./UpdateInfoModal"

export const UpdateInfo = () => {
  const { user } = useUser()

  if (!user?.id) return null

  return (
    <div className="flex flex-col gap-2 px-1 md:mt-2 md:border-t md:border-t-stone-200 md:pt-3 lg:px-2">
      <div className="flex items-center gap-1">
        <p className="font-bold max-lg:text-sm">+{user?.number}</p>
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
