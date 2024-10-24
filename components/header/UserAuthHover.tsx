"use client"

import { LogOut } from "lucide-react"
import { AccountNav } from "../account/AccountNav"
import { logoutAction } from "@/utils/actions"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export const UserAuthHover = () => {
  const router = useRouter()
  const handleSubmit = async () => {
    try {
      const user = await logoutAction()
      toast.success("User successfully logged out")
      router.push("/")
    } catch (e: any) {
      toast.error(e.message)
    }
    return
  }

  return (
    <div className="absolute right-0 top-[55px] hidden w-[200px] overflow-hidden pt-5 text-center group-hover:flex">
      <div className="flex w-full flex-col gap-3 rounded-3xl bg-white p-5 pt-6">
        <div className="fixed left-0 top-0 z-[-2] h-full w-full bg-stone-800/25 p-5 hover:hidden" />
        <AccountNav />
        <div
          className="mt-2 flex cursor-pointer items-center gap-3 border-t border-t-stone-200 px-2 pt-3"
          onClick={handleSubmit}
        >
          <LogOut size={20} />
          <p className="font-semibold">Sign Out</p>
        </div>
      </div>
    </div>
  )
}
