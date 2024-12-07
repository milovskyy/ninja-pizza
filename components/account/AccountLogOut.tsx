"use client"

import { logoutAction } from "@/utils/actions"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export const AccountLogOut = () => {
  const router = useRouter()
  const handleSubmit = async () => {
    try {
      await logoutAction()
      toast.success("User successfully logged out")
      router.push("/")
    } catch (e: any) {
      toast.error(e.message)
    }
    return
  }

  return (
    <div
      className="mt-2 flex cursor-pointer items-center gap-3 border-t border-t-stone-200 px-1 pt-3 lg:px-3"
      onClick={handleSubmit}
    >
      <LogOut size={20} />
      <p className="font-semibold max-xs:text-sm">Log Out</p>
    </div>
  )
}
