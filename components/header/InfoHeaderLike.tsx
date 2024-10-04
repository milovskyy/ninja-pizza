import { GoHeart } from "react-icons/go"
import { UserNotAuthHover } from "./UserNotAuthHover"

function InfoHeaderLike() {
  return (
    <div className="flex h-[56px] w-[56px] items-center justify-center">
      <div className="group relative h-full w-full">
        <div className="relative flex h-full w-full items-center justify-center rounded-full bg-stone-100 pt-[2px] text-stone-500 hover:bg-stone-950 hover:text-white">
          <GoHeart size="25px" />
        </div>
        <UserNotAuthHover>
          To view your favorites, please, sign in
        </UserNotAuthHover>
      </div>
    </div>
  )
}

export default InfoHeaderLike
