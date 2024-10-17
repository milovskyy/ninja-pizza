import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useFormContext } from "react-hook-form"
import { FormInput } from "./FormInput"
import { FormBlock } from "./FormBlock"

type Props = {}

export const FormPaymentMethod = ({}: Props) => {
  const { control, watch } = useFormContext()
  const method = watch("payment")
  return (
    <FormBlock title="Payment Method" className="grid grid-cols-2 gap-5">
      <div>
        <FormField
          control={control}
          name="payment"
          render={({ field }) => (
            <FormItem className="mb-3 space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  // defaultValue="cash"
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="cash" />
                    </FormControl>
                    <FormLabel className="cursor-pointer font-semibold">
                      Cash
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="online" />
                    </FormControl>
                    <FormLabel className="cursor-pointer font-semibold">
                      Online with a debit or credit card
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        {method === "cash" && (
          <FormInput
            type="number"
            label="Get change for"
            name="change"
            max={5}
          />
        )}
      </div>
    </FormBlock>
    //     <div className="flex flex-col gap-3">
    //       <h2 className="text-xl font-bold">Payment Method</h2>

    //       <div
    //         className={cn(
    //           "grid grid-cols-2 justify-between gap-5 border border-stone-200 px-5 py-5",
    //         )}
    //       >
    //   </div>
    // </div>
  )
}
