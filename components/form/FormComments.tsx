import { useFormContext } from "react-hook-form"
import { FormBlock } from "./FormBlock"
import { FormSelect } from "./FormSelect"
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Textarea } from "../ui/textarea"

type Props = {}

export const FormComments = ({}: Props) => {
  const { control } = useFormContext()
  return (
    <FormBlock title="Comments" className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-1">
        <FormSelect
          name="persons"
          label="Number of people"
          array={Array.from({ length: 10 }, (_, index) =>
            (index + 1).toString(),
          )}
        />
      </div>
      <FormField
        control={control}
        name="comment"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="mb-3 pl-1 text-sm text-stone-400">
              Order comments
            </FormLabel>
            <FormControl>
              <Textarea
                className="min-h-[120px] flex-1 resize-none rounded-lg border border-transparent bg-stone-100 px-4 py-2 text-sm font-semibold outline-none"
                onChangeCapture={(e: any) =>
                  (e.target.value = e.target.value.slice(0, 200))
                }
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </FormBlock>
  )
}
