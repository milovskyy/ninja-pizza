import { cn } from "@/utils/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { Controller, useFormContext } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { FormCheckbox } from "./form/formCheckbox"

type Props = {}

export const DeliveryDetails = ({}: Props) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext()

  return (
    <div className={cn("flex flex-col gap-3")}>
      <h3 className="font-semibold">Free delivery from 500 UAH</h3>
      <div className="w-full">
        <p className="text-sm text-stone-400">
          Street <span className="text-primary">*</span>
        </p>
        <input
          className={cn(
            "mt-2 w-full flex-1 rounded-lg border border-transparent bg-stone-100 px-4 py-2 font-bold outline-none [appearance:textfield] placeholder:font-thin placeholder:tracking-wider [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
            errors?.street && "border-red-300",
          )}
          type="text"
          {...register("street", {
            required: true,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              e.target.value = e.target.value.slice(0, 50)
            },
          })}
        />
      </div>
      <div className="flex w-full gap-2">
        <div className="w-full">
          <p className="text-sm text-stone-400">
            Building<span className="text-primary">*</span>
          </p>
          <input
            className={cn(
              "mt-2 w-full flex-1 rounded-lg border border-transparent bg-stone-100 px-4 py-2 font-bold outline-none [appearance:textfield] placeholder:font-thin placeholder:tracking-wider [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
              errors?.building && "border-red-300",
            )}
            type="number"
            {...register("building", {
              required: true,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.slice(0, 5)
              },
            })}
          />
        </div>
        <div className="w-full">
          <p className="text-sm text-stone-400">Entrance</p>
          <input
            className={cn(
              "mt-2 w-full flex-1 rounded-lg border border-transparent bg-stone-100 px-4 py-2 font-bold outline-none [appearance:textfield] placeholder:font-thin placeholder:tracking-wider [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
              errors?.entrance && "border-red-300",
            )}
            type="number"
            {...register("entrance", {
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.slice(0, 2)
              },
            })}
          />
        </div>
        <div className="w-full">
          <p className="text-sm text-stone-400">Floor</p>
          <input
            className={cn(
              "mt-2 w-full flex-1 rounded-lg border border-transparent bg-stone-100 px-4 py-2 font-bold outline-none [appearance:textfield] placeholder:font-thin placeholder:tracking-wider [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
              errors?.floor && "border-red-300",
            )}
            type="number"
            {...register("floor", {
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.slice(0, 2)
              },
            })}
          />
        </div>
        <div className="w-full">
          <p className="text-sm text-stone-400">Apt</p>
          <input
            className={cn(
              "mt-2 w-full flex-1 rounded-lg border border-transparent bg-stone-100 px-4 py-2 font-bold outline-none [appearance:textfield] placeholder:font-thin placeholder:tracking-wider [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
              errors?.apt && "border-red-300",
            )}
            type="text"
            {...register("apt", {
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.slice(0, 4)
              },
            })}
          />
        </div>
      </div>

      <FormCheckbox name="doorBell" label="Do not ring the doorbell" />
      <FormCheckbox name="doorOutside" label="Leave at the door" />
    </div>
  )
}
