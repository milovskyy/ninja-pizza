import { Button } from "@/components/ui/button"
import LocalizationHoverBlock from "./LocalizationHoverBlock"
import toast from "react-hot-toast"

function LocalizationHover() {
  const underDevelopment = () => {
    toast("Feature under development", {
      icon: "😇",
    })
  }

  return (
    <div className="absolute left-2 top-10 hidden w-[220px] items-center justify-center pt-5 text-[13px] font-semibold text-stone-400 group-hover:flex md:top-12 md:w-[264px] xl:left-0 xl:top-14">
      <div className="flex w-full flex-col gap-5 rounded-[35px] bg-white p-6">
        <div className="fixed left-0 top-0 z-[-2] h-full w-full bg-stone-800/25 p-5 hover:hidden" />
        <LocalizationHoverBlock text="Choose City">
          <Button className="font-bold" onClick={underDevelopment}>
            Kiev
          </Button>
          <Button className="font-bold" onClick={underDevelopment}>
            Odessa
          </Button>
        </LocalizationHoverBlock>
        <LocalizationHoverBlock text="Choose Language">
          <Button className="font-bold" onClick={underDevelopment}>
            UA
          </Button>
          <Button className="font-bold" onClick={underDevelopment}>
            EN
          </Button>
        </LocalizationHoverBlock>
      </div>
    </div>
  )
}

export default LocalizationHover
