"use client"

import { GoHeart } from "react-icons/go"
import { UserNotAuthHover } from "./UserNotAuthHover"
import { cn } from "@/utils/utils"
import { useRouter } from "next/navigation"
import { useFavorites } from "@/app/_store/favorites"

type Props = {
  user: boolean
}

function InfoHeaderLike({ user }: Props) {
  const router = useRouter()

  const { favorites } = useFavorites()
  const handleClick = () => {
    if (!user) {
      return
    }
    router.push("/account/favorites")
  }
  return (
    <div className="xs:flex hidden h-10 w-10 items-center justify-center xl:h-14 xl:w-14">
      <div className="group h-full w-full xl:relative">
        <div
          className={cn(
            "relative flex h-full w-full items-center justify-center rounded-full bg-stone-100 pt-[2px] text-stone-500 hover:bg-stone-950 hover:text-white",
            user && "cursor-pointer",
          )}
          onClick={handleClick}
        >
          <GoHeart size="25px" />
          {favorites.length > 0 && (
            <div className="absolute right-[1px] top-[1px] flex h-5 w-5 items-center justify-center rounded-full bg-sky-200 text-xs font-bold text-stone-700 xl:right-[5px] xl:top-[5px]">
              {favorites.length}
            </div>
          )}
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
