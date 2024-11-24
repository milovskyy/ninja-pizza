"use client"

import { IoMdGlobe } from "react-icons/io"
import LocalizationHover from "./LocalizationHover"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { SignInModal } from "../SignInModal"

function LocalizationHeader() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  useEffect(() => {
    if (searchParams.get("login") === "true") {
      setIsLoginModalOpen(true)
      return
    }
    setIsLoginModalOpen(false)
  }, [searchParams])

  return (
    <div className="flex flex-col items-center justify-center">
      <SignInModal buttonText="1" className="hidden" open={isLoginModalOpen} />
      <div className="group ml-1 flex flex-col px-1 md:px-2 lg:ml-5 xl:relative xl:ml-8">
        <div className="flex gap-1 md:gap-0">
          <div className="flex h-14 items-center justify-center font-bold text-stone-800 md:px-1">
            <IoMdGlobe size="24px" />
          </div>
          <div className="xs:text-sm flex h-14 items-center justify-center text-xs font-bold text-stone-800 md:px-1 xl:text-base">
            Odessa
          </div>
          <div className="xs:text-sm flex h-14 items-center justify-center text-xs font-bold text-stone-800 md:px-1 xl:text-base">
            EN
          </div>
        </div>
        <LocalizationHover />
      </div>
    </div>
  )
}

export default LocalizationHeader
