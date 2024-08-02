import LocalizationExpanderBlock from "./LocalizationExpanderBlock"
import LocalizationExpanderButton from "../ui/Button"

function LocalizationExpander() {
  return (
    <div className="absolute right-0 top-[67px] hidden h-[236px] w-[264px] items-center justify-center pt-5 text-[13px] font-semibold text-stone-400 group-hover:flex">
      <div className="flex h-[216px] w-[264px] flex-col gap-5 rounded-[35px] bg-white p-6">
        <LocalizationExpanderBlock text="Choose City">
          <LocalizationExpanderButton>Kiev</LocalizationExpanderButton>
          <LocalizationExpanderButton>Odessa</LocalizationExpanderButton>
        </LocalizationExpanderBlock>
        <LocalizationExpanderBlock text="Choose Language">
          <LocalizationExpanderButton>UA</LocalizationExpanderButton>
          <LocalizationExpanderButton>EN</LocalizationExpanderButton>
        </LocalizationExpanderBlock>
      </div>
    </div>
  )
}

export default LocalizationExpander
