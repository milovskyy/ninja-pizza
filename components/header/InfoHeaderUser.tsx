import { FaRegUser } from "react-icons/fa"
import { UserNotAuthHover } from "./UserNotAuthHover"

function InfoHeaderUser() {
  return (
    <div className="group relative h-full w-full">
      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-stone-100 pb-[2px] text-stone-500 group-hover:bg-stone-950 group-hover:text-white">
        <FaRegUser size="22px" />
      </div>
      <UserNotAuthHover>
        To use all features of the site, please, sign in
      </UserNotAuthHover>
    </div>
  )
}

export default InfoHeaderUser
