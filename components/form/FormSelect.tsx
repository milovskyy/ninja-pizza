import { FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { useFormContext } from "react-hook-form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  name: string
  label: string
  array: string[]
}

export const FormSelect = ({ name, label, array }: Props) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="mb-3 pl-1 text-sm text-stone-400">
            {label}
          </FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={array[0]}
            value={field.value}
          >
            <FormControl>
              <SelectTrigger className="w-full bg-stone-100 font-semibold tracking-wide outline-none focus:outline-none">
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="max-h-64">
              {array.map((time) => (
                <SelectItem
                  key={time}
                  value={time}
                  className="font-semibold tracking-wide"
                >
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}
