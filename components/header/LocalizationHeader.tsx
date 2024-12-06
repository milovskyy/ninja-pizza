"use client"

import { IoMdGlobe } from "react-icons/io"
import LocalizationHover from "./LocalizationHover"

function LocalizationHeader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="group ml-1 flex flex-col px-1 md:px-2 lg:ml-5 xl:relative xl:ml-8">
        <div className="flex gap-1 md:gap-0">
          <div className="flex h-14 items-center justify-center font-bold text-stone-800 md:px-1">
            <IoMdGlobe size="27px" />
          </div>
          <div className="flex h-14 items-center justify-center text-xs font-bold text-stone-800 max-xs:hidden xs:text-sm md:px-1 xl:text-base">
            Odessa
          </div>
          <div className="flex h-14 items-center justify-center text-xs font-bold text-stone-800 max-xs:hidden xs:text-sm md:px-1 xl:text-base">
            EN
          </div>
        </div>
        <LocalizationHover />
      </div>
    </div>
  )
}

export default LocalizationHeader
