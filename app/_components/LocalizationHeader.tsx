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
        {/* <div>
          <div className="absolute right-0 top-[67px] hidden h-[236px] w-[264px] items-center justify-center pt-5 text-[13px] font-semibold text-stone-400 group-hover:flex">
            <div className="flex h-[216px] w-[264px] flex-col gap-5 rounded-[35px] bg-white p-6">
              <div className="flex flex-col gap-3">
                <div>Choose City</div>
                <div className="flex gap-2">
                  <div className="bgmain flex h-[40px] max-h-[40px] w-[104px] max-w-[104px] cursor-pointer items-center justify-center rounded-full px-6 py-2 text-center text-stone-900">
                    Kiev
                  </div>
                  <div className="bgmain flex h-[40px] max-h-[40px] w-[104px] max-w-[104px] items-center justify-center rounded-full px-6 py-2 text-center text-stone-900">
                    Odessa
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div>Choose Language</div>
                <div className="flex gap-4">
                  <div className="bgmain flex h-[40px] max-h-[40px] w-[104px] max-w-[104px] items-center justify-center rounded-full px-6 py-2 text-stone-900">
                    UA
                  </div>
                  <div className="bgmain flex h-[40px] max-h-[40px] w-[104px] max-w-[104px] items-center justify-center rounded-full px-6 py-2 text-stone-900">
                    EN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default LocalizationHeader
