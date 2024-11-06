import { cn } from "@/utils/utils"

import { FormCheckbox } from "./form/FormCheckbox"
import { FormInput } from "./form/FormInput"
import { FormAddressDetails } from "./form/FormAddressDetails"
import { FormAddressSelectBlock } from "./form/FormAddressSelectBlock"
import { UserDeliveryAddress, UserType } from "@/app/_types/Types"
import { useEffect, useState } from "react"
import { useUser } from "@/app/_store/user"

type Props = {
  address?: string
  user?: UserType | null
}

export const CheckoutDeliveryDetails = ({ address }: Props) => {
  const { user } = useUser()

  let userAddressList: UserDeliveryAddress[] = []

  if (user) {
    userAddressList = user?.address ? user.address : []
  }

  return (
    <div className={cn("flex flex-col gap-3")}>
      {address ? (
        <FormInput label="Address" name="address" required max={40} />
      ) : (
        <>
          <h3 className="font-semibold">Free delivery from 500 UAH</h3>
          {userAddressList.length > 0 && (
            <FormAddressSelectBlock userAddressList={userAddressList} />
          )}
          <FormAddressDetails />
        </>
      )}

      <FormCheckbox name="doorBell" label="Do not ring the doorbell" />
      <FormCheckbox name="doorOutside" label="Leave at the door" />
    </div>
  )
}
