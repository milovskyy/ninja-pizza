import { LuClock } from "react-icons/lu"

function DeliveryDetails() {
  return (
    <div className="flex w-[480px] flex-col rounded-3xl bg-white p-12">
      <h1 className="mb-4 text-3xl font-bold">Delivery details</h1>
      <p className="mb-4 font-semibold">
        Currently, delivery is carried out in the zone highlighted in color.
        Minimal order is 500 UAH
      </p>
      <p className="mb-2 text-sm text-stone-400">Working hours:</p>
      <div className="flex gap-3">
        <LuClock size="20px" />

        <p className="text-sm font-semibold text-stone-800">
          from 11:00 to 22:30
        </p>
      </div>
    </div>
  )
}

export default DeliveryDetails
