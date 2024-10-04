"use client"

import {
  UseFormRegister,
  FieldValues,
  FieldError,
  useFormContext,
} from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { useState } from "react"
import { DeliveryMethodToggle } from "./DeliveryMethodToggle"
import { DeliveryAdressSelect } from "./DeliveryAdressSelect"
import { DeliveryDetails } from "./DeliveryDetails"

type Props = {
  method: string
  setMethod: React.Dispatch<React.SetStateAction<string>>
}

export const FormDeliveryDetails = ({ method, setMethod }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">Delivery</h2>
      <h3 className="font-mediumm text-sm text-stone-400">
        Don&apos;t forget to check the delivery zone before ordering
      </h3>
      <div className="flex flex-col justify-between gap-5 border border-stone-200 px-5 py-5">
        <DeliveryMethodToggle method={method} setMethod={setMethod} />
        {method === "Pickup" && <DeliveryAdressSelect />}
        {method === "Delivery" && <DeliveryDetails />}
      </div>
    </div>
  )
}
