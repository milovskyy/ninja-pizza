import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { useFormContext } from "react-hook-form"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { FormInput } from "../form/FormInput"

type Props = {}

export const UpdateAddressRadioGroup = ({}: Props) => {
  const { control, watch } = useFormContext()
  const label = watch("label")
  return (
    <div>
      <FormField
        control={control}
        name="label"
        render={({ field }) => (
          <FormItem className="mt-2">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col gap-0"
              >
                {/*  */}
                <FormItem className="flex items-center space-x-3 space-y-0 py-2">
                  <FormControl>
                    <RadioGroupItem value="Home" className="" />
                  </FormControl>
                  <FormLabel className="flex cursor-pointer items-center justify-center font-semibold">
                    Home
                  </FormLabel>
                </FormItem>
                {/*  */}
                <FormItem className="flex items-center space-x-3 space-y-0 py-2">
                  <FormControl>
                    <RadioGroupItem value="Work" className="" />
                  </FormControl>
                  <FormLabel className="flex cursor-pointer items-center justify-center font-semibold">
                    Work
                  </FormLabel>
                </FormItem>
                {/*  */}
                <FormItem className="flex items-center space-x-3 space-y-0 py-2">
                  <FormControl>
                    <RadioGroupItem value="Location" className="" />
                  </FormControl>
                  <FormLabel className="flex cursor-pointer items-center justify-center font-semibold">
                    Custom label
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />
      {label === "Location" && (
        <div className="mt-1">
          <FormInput type="text" label="Label" name="customLabel" max={20} />
        </div>
      )}
    </div>
  )
}
