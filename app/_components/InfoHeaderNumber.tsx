import { FiPhoneCall } from 'react-icons/fi'

function InfoHeaderNumber() {
  return (
    <div className="flex gap-2 mr-2">
      <div className="text-stone-800 flex justify-center items-center pt-[2px]">
        <FiPhoneCall size="22px" />
      </div>
      <div className="text-stone-800 flex justify-center items-center font-bold ">
        {`+38 (067) 344 22 44`}
      </div>
    </div>
  )
}

export default InfoHeaderNumber
