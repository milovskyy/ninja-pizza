import {
  UseFormRegister,
  FieldValues,
  FieldError,
  useFormContext,
} from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { cn } from "@/utils/utils"

type Props = {}

export const FormPersonalDetails = ({}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">Personal details</h2>
      <div className="grid grid-cols-[3fr_2fr] justify-between gap-5 border border-stone-200 px-5 py-5">
        <div className="w-full">
          <p className="text-sm text-stone-400">
            Name <span className="text-primary">*</span>
          </p>

          <input
            className={cn(
              "mt-2 w-full flex-1 rounded-lg border border-transparent bg-stone-100 px-4 py-2 font-bold outline-none [appearance:textfield] placeholder:font-thin placeholder:tracking-wider [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
              errors?.name && "border-red-300",
            )}
            type="text"
            placeholder="Ninja"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter your name",
              },

              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value.slice(0, 17)
                e.target.value = value
              },
            })}
          />
        </div>
        <div className="w-full">
          <p className="text-sm text-stone-400">
            Phone <span className="text-primary">*</span>
          </p>

          <input
            className={cn(
              "mt-2 flex-1 rounded-lg border border-transparent bg-stone-100 px-4 py-2 font-bold outline-none [appearance:textfield] placeholder:font-thin placeholder:tracking-wider [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
              errors?.phone && "border-red-300",
            )}
            type="tel"
            placeholder="0673442244"
            {...register("phone", {
              required: {
                value: true,
                message: "Phone number is required",
              },
              minLength: {
                value: 10,
                message: "Make sure your phone number has at least 10 digits",
              },
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value.replace(/[^0-9]/g, "")
                const formattedValue = value.slice(0, 10)
                e.target.value = formattedValue
              },
            })}
          />
        </div>
      </div>
    </div>
  )
}
