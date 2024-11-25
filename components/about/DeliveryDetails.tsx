import { LuClock } from "react-icons/lu"

function DeliveryDetails() {
  return (
    <div className="flex w-full flex-col rounded-3xl bg-white p-8 sm:w-[480px] sm:p-12">
      <h1 className="mb-4 text-2xl font-bold max-sm:text-center sm:text-3xl">
        Delivery details
      </h1>
      <p className="mb-4 font-semibold max-sm:text-center max-sm:text-sm xs:max-sm:px-7">
        Currently, delivery is carried out in the zone highlighted in color.
        Minimal order is 500 UAH
      </p>
      <p className="mb-2 text-sm text-stone-400 max-sm:text-center">
        Working hours:
      </p>
      <div className="flex items-center justify-center gap-3">
        <LuClock size="20px" />

        <p className="text-sm font-semibold text-stone-800">
          from 11:00 to 22:30
        </p>
      </div>
    </div>
  )
}

export default DeliveryDetails
