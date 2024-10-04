import { FiPhoneCall } from "react-icons/fi"

function InfoHeaderNumber() {
  return (
    <div className="flex h-[56px] items-center justify-center">
      <div className="mr-2 flex gap-2">
        <div className="flex items-center justify-center pt-[2px] text-stone-800">
          <FiPhoneCall size="22px" />
        </div>
        <div className="flex items-center justify-center font-bold text-stone-800">
          {`+38 (067) 344 22 44`}
        </div>
      </div>
    </div>
  )
}

export default InfoHeaderNumber
