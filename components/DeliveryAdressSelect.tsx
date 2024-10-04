import { PICKUP_ADDRESSES } from "@/app/_constants/constants"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Controller, useFormContext } from "react-hook-form"

type Props = {}

export const DeliveryAdressSelect = ({}: Props) => {
  const { control } = useFormContext()
  return (
    <div className="">
      <p className="mb-3 pl-1 text-sm text-stone-400">
        Choose where to pick up
      </p>

      <Controller
        name="pickup-adress"
        control={control}
        defaultValue={PICKUP_ADDRESSES[0]}
        render={({ field }) => (
          <Select {...field} onValueChange={field.onChange}>
            <SelectTrigger className="w-full bg-stone-100 outline-none focus:outline-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {PICKUP_ADDRESSES.map((address) => (
                  <SelectItem key={address} value={address}>
                    {address}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
    </div>
  )
}

import * as React from "react"
