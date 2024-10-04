import { cn } from "@/utils/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { Controller, useFormContext } from "react-hook-form"

type Props = {}

export const DeliveryDetails = ({}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

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
      <div className="flex items-center space-x-2">
        <Checkbox id="doorbell" {...register("doorbell")} className="h-5 w-5" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="doorbell"
            className="text-medium cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Do not ring the doorbell
          </label>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="door" {...register("door")} className="h-5 w-5" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="door"
            className="marker:text-medium cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Leave at the door
          </label>
        </div>
      </div>

      {/* ........ */}

      {/* ........ */}
      <Controller
        defaultValue={false}
        control={control}
        name="isRemote"
        render={({ field: { onChange, value } }) => (
          <Checkbox onChange={onChange} checked={value} />
        )}
      />
    </div>
  )
}
