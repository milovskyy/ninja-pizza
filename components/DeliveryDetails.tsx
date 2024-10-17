import { cn } from "@/utils/utils"

import { useFormContext } from "react-hook-form"

import { FormCheckbox } from "./form/FormCheckbox"
import { FormInput } from "./form/FormInput"

type Props = {
  address?: string
}

export const DeliveryDetails = ({ address }: Props) => {
  return (
    <div className={cn("flex flex-col gap-3")}>
      {address ? (
        <FormInput label="Address" name="address" required max={40} />
      ) : (
        <>
          <h3 className="font-semibold">Free delivery from 500 UAH</h3>
          <FormInput label="Street" name="street" required max={40} />
          <div className="flex w-full gap-2">
            <FormInput
              label="Building"
              required
              name="building"
              type="number"
              max={5}
            />
            <FormInput label="Entrance" name="entrance" type="number" max={2} />
            <FormInput label="Floor" name="floor" type="number" max={2} />
            <FormInput label="Apt" name="apt" type="number" max={4} />
          </div>
        </>
      )}

      <FormCheckbox name="doorBell" label="Do not ring the doorbell" />
      <FormCheckbox name="doorOutside" label="Leave at the door" />
    </div>
  )
}
