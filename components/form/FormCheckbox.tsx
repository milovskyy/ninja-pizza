import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { useFormContext } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox"

type Props = {
  name: string
  label: string
}

export const FormCheckbox = ({ name, label }: Props) => {
  const { control } = useFormContext()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex items-center gap-3">
          <FormControl>
            <Checkbox
              className="h-5 w-5"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <FormLabel className="relative bottom-1 mb-1 cursor-pointer self-center text-base">
            {label}
          </FormLabel>
        </FormItem>
      )}
    />
  )
}
