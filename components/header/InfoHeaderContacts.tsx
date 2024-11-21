import { FiPhoneCall } from "react-icons/fi"
import { ContactsHover } from "./ContactsHover"

function InfoHeaderContacts() {
  return (
    <div className="flex h-10 items-center justify-center xl:h-14">
      <div className="group flex h-full w-full text-sm xl:relative xl:mr-2 xl:text-base">
        <div className="flex h-full w-10 items-center justify-center rounded-full bg-stone-100 pt-[2px] text-stone-800 xl:w-14 xl:bg-transparent">
          <FiPhoneCall size="22px" />
        </div>
        <div className="hidden items-center justify-center font-bold text-stone-800 xl:flex">
          {`+38 (067) 344 22 44`}
        </div>
        <ContactsHover />
      </div>
    </div>
  )
}

export default InfoHeaderContacts
