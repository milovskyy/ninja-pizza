import { Button } from "@/components/ui/button"
import LocalizationExpanderBlock from "./LocalizationExpanderBlock"

function LocalizationExpander() {
  return (
    <div className="absolute right-0 top-[59px] hidden h-[236px] w-[264px] items-center justify-center pt-11 text-[13px] font-semibold text-stone-400 group-hover:flex">
      <div className="flex w-[264px] flex-col gap-5 rounded-[35px] bg-white p-6">
        <LocalizationExpanderBlock text="Choose City">
          <Button className="font-bold">Kiev</Button>
          <Button className="font-bold">Odessa</Button>
        </LocalizationExpanderBlock>
        <LocalizationExpanderBlock text="Choose Language">
          <Button className="font-bold">UA</Button>
          <Button className="font-bold">EN</Button>
        </LocalizationExpanderBlock>
      </div>
    </div>
  )
}

export default LocalizationExpander
