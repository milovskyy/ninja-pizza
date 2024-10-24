import { FiPhoneCall } from "react-icons/fi"
import { ContactsHover } from "./ContactsHover"

function InfoHeaderContacts() {
  return (
    <div className="flex h-[56px] items-center justify-center">
      <div className="group relative mr-2 flex h-full gap-2 py-2">
        <div className="flex items-center justify-center pt-[2px] text-stone-800">
          <FiPhoneCall size="22px" />
        </div>
        <div className="flex items-center justify-center font-bold text-stone-800">
          {`+38 (067) 344 22 44`}
        </div>
        <ContactsHover />
      </div>
    </div>
  )
}

export default InfoHeaderContacts
