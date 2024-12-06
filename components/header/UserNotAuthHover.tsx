"use client"

import useModalStore from "@/app/_store/login-modal"
import { Button } from "../ui/button"

type TypeProps = {
  children: string
}

export type AuthType = {
  phone: string
  password: string
}

export const UserNotAuthHover = ({ children }: TypeProps) => {
  const { setShowModal } = useModalStore()

  return (
    <div className="absolute right-2 top-10 hidden w-[220px] overflow-hidden pt-5 text-center group-hover:flex md:top-12 lg:w-[300px] xl:top-14">
      <div className="flex w-full flex-col gap-1 rounded-3xl bg-white px-6 pb-4 pt-6 lg:pt-8">
        <div className="fixed left-0 top-0 z-[-2] h-full w-full bg-stone-800/25 p-5 hover:hidden" />
        <h2 className="mb-3 text-sm font-semibold text-stone-400">
          {children}
        </h2>
        <Button
          className="w-full rounded-full bg-primary p-2 text-[16px] font-black hover:bg-main lg:p-3"
          onClick={() => setShowModal(true)}
        >
          Sign in
        </Button>
      </div>
    </div>
  )
}
