"use client"

import { GoHeart } from "react-icons/go"
import { UserNotAuthHover } from "./UserNotAuthHover"
import { cn } from "@/utils/utils"
import { useRouter } from "next/navigation"

type Props = {
  user: boolean
}

function InfoHeaderLike({ user }: Props) {
  const router = useRouter()
  const handleClick = () => {
    if (!user) {
      return
    }
    router.push("/account/favorites")
  }
  return (
    <div className="flex h-[56px] w-[56px] items-center justify-center">
      <div className="group relative h-full w-full">
        <div
          className={cn(
            "relative flex h-full w-full items-center justify-center rounded-full bg-stone-100 pt-[2px] text-stone-500 hover:bg-stone-950 hover:text-white",
            user && "cursor-pointer",
          )}
          onClick={handleClick}
        >
          <GoHeart size="25px" />
        </div>
        {!user && (
          <UserNotAuthHover>
            To view your favorites, please, sign in
          </UserNotAuthHover>
        )}
      </div>
    </div>
  )
}

export default InfoHeaderLike
