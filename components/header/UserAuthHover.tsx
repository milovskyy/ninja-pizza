import { AccountNav } from "../account/AccountNav"
import { AccountLogOut } from "../account/AccountLogOut"

export const UserAuthHover = () => {
  return (
    <div className="absolute right-2 top-10 hidden w-[200px] overflow-hidden pt-5 text-center group-hover:flex md:top-12 xl:top-14">
      <div className="flex w-full flex-col gap-3 rounded-3xl bg-white p-5 pt-6">
        <div className="fixed left-0 top-0 z-[-2] h-full w-full bg-stone-800/25 p-5 hover:hidden" />
        <AccountNav />
        <AccountLogOut />
      </div>
    </div>
  )
}
