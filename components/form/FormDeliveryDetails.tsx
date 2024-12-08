"use client"

import { DeliveryMethodToggle } from "../DeliveryMethodToggle"
import { CheckoutDeliveryDetails } from "../CheckoutDeliveryDetails"
import { PICKUP_ADDRESSES } from "@/app/_constants/constants"
import { FormSelect } from "./FormSelect"
import { FormBlock } from "./FormBlock"
import { UserType } from "@/app/_types/Types"

type Props = {
  method: string
  setMethod: React.Dispatch<React.SetStateAction<string>>
  address?: string
  user?: UserType | null
}

export const FormDeliveryDetails = ({
  method,
  setMethod,
  address,
  user,
}: Props) => {
  return (
    <FormBlock
      title="Delivery"
      subtitle="Don't forget to check the delivery zone before ordering"
      className="flex flex-col justify-between gap-3 sm:gap-5"
      delivery={address ? false : true}
    >
      <DeliveryMethodToggle method={method} setMethod={setMethod} />
      {method === "Pickup" && (
        <FormSelect
          name="pickupAddress"
          label="Choose where to pick up"
          array={PICKUP_ADDRESSES}
        />
      )}
      {method === "Delivery" && (
        <CheckoutDeliveryDetails address={address} user={user} />
      )}
    </FormBlock>
  )
}
