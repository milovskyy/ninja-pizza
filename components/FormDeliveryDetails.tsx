"use client"

import { DeliveryMethodToggle } from "./DeliveryMethodToggle"
import { DeliveryDetails } from "./DeliveryDetails"
import { PICKUP_ADDRESSES } from "@/app/_constants/constants"
import { FormSelect } from "./form/FormSelect"
import { FormBlock } from "./FormBlock"

type Props = {
  method: string
  setMethod: React.Dispatch<React.SetStateAction<string>>
}

export const FormDeliveryDetails = ({ method, setMethod }: Props) => {
  return (
    <FormBlock
      title="Delivery"
      subtitle="Don't forget to check the delivery zone before ordering"
      className="flex flex-col justify-between gap-5"
    >
      <DeliveryMethodToggle method={method} setMethod={setMethod} />
      {method === "Pickup" && (
        <FormSelect
          name="pickupAdress"
          label="Choose where to pick up"
          array={PICKUP_ADDRESSES}
        />
      )}
      {method === "Delivery" && <DeliveryDetails />}
    </FormBlock>
    // <div className="flex flex-col gap-3">
    //   <h2 className="text-xl font-bold">Delivery</h2>
    //   <h3 className="font-mediumm text-sm text-stone-400">
    //     Don&apos;t forget to check the delivery zone before ordering
    //   </h3>
    //   <div className="flex flex-col justify-between gap-5 border border-stone-200 px-5 py-5">
    //   </div>
    // </div>
  )
}
