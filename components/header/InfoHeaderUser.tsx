import { FaRegUser } from "react-icons/fa"
import { UserNotAuthHover } from "./UserNotAuthHover"
import { cn } from "@/utils/utils"
import { UserAuthHover } from "./UserAuthHover"

type Props = {
  user: boolean
}
function InfoHeaderUser({ user }: Props) {
  return (
    <div className="xs:flex hidden h-10 w-10 items-center justify-center xl:h-14 xl:w-14">
      <div className="group h-full w-full xl:relative">
        <div
          className={cn(
            "relative flex h-full w-full items-center justify-center rounded-full bg-stone-100 pb-[2px] text-stone-500 hover:bg-stone-950 hover:text-white",
            user && "cursor-pointer",
          )}
        >
          <FaRegUser size="22px" />
        </div>
        {user && <UserAuthHover />}
        {!user && (
          <UserNotAuthHover>
            To use all features of the site, please, sign in
          </UserNotAuthHover>
        )}
      </div>
    </div>
  )
}

export default InfoHeaderUser
