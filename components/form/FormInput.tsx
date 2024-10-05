import { cn } from "@/utils/utils"
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { useFormContext } from "react-hook-form"
import { Input } from "../ui/input"

type Props = {
  name: string
  label: string
  required?: boolean
  placeholder?: string
  type?: string
  max: number
}

export const FormInput = ({
  name,
  label,
  required,
  placeholder,
  type = "text",
  max,
}: Props) => {
  const {
    formState: { errors },
    control,
  } = useFormContext()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-sm font-normal text-stone-400">
            {label} {required && <span className="text-primary">*</span>}
          </FormLabel>
          <FormControl>
            <Input
              onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) =>
                type === "number"
                  ? (e.target.value = e.target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, max))
                  : (e.target.value = e.target.value.slice(0, max))
              }
              placeholder={placeholder}
              className={cn(
                "mt-2 flex-1 rounded-lg border border-transparent bg-stone-100 px-4 py-2 text-base font-bold outline-none [appearance:textfield] placeholder:font-thin placeholder:tracking-wider",
                errors[name] && "border-red-300",
              )}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
