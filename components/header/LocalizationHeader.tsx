import { IoMdGlobe } from "react-icons/io"
import LocalizationExpander from "./LocalizationExpander"

// type PropsType = {
//   setIsLocalOpen: (value: boolean) => void
// }

function LocalizationHeader() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="group ml-[26px] flex flex-col px-2">
        <div className="flex">
          <div className="text-stone-00 flex h-[56px] items-center justify-center px-1 font-bold">
            <IoMdGlobe size="24px" />
          </div>
          <div className="flex h-[56px] items-center justify-center px-1 font-bold text-stone-800">
            Odessa
          </div>
          <div className="flex h-[56px] items-center justify-center px-1 font-bold text-stone-800">
            EN
          </div>
        </div>
        <LocalizationExpander />
      </div>
    </div>
  )
}

export default LocalizationHeader
