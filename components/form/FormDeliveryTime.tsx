import { getDeliveryDays, getDeliveryTimes } from "@/utils/helperFunction"
import { FormSelect } from "./FormSelect"
import { FormBlock } from "./FormBlock"
import { useFormContext } from "react-hook-form"
import { DEFAULT_TIME_ARRAY } from "@/app/_constants/constants"

type Props = { method: string }
export const FormDeliveryTime = ({ method }: Props) => {
  const { watch } = useFormContext()
  const date = watch("date")
  const dates = getDeliveryDays()
  const times = date === "Today" ? getDeliveryTimes() : DEFAULT_TIME_ARRAY

  return (
    <FormBlock
      title={
        method === "Delivery" ? "Delivery time" : "Choose your pickup time"
      }
      subtitle={
        method === "Delivery"
          ? "Please, call us to specify the delivery time"
          : "Please specify the most convenient pickup time"
      }
      className="grid grid-cols-2 gap-5"
    >
      <FormSelect name="date" label="Date" array={dates} />
      <FormSelect name="time" label="Time" array={times} />
    </FormBlock>
    // <div className="flex flex-col gap-3">
    //   <h2 className="text-xl font-bold">
    //     {method === "Delivery" ? "Delivery time" : "Choose your pickup time"}
    //   </h2>
    //   <p className="text-sm text-stone-400">
    //     {method === "Delivery"
    //       ? "Please, call us to specify the delivery time"
    //       : "Please specify the most convenient pickup time"}
    //   </p>
    //   <div className="n grid grid-cols-2 gap-5 border border-stone-200 px-5 py-5">

    //     {/* <FormField
    //       control={control}
    //       name="date"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel className="mb-3 pl-1 text-sm text-stone-400">
    //             Date
    //           </FormLabel>
    //           <Select onValueChange={field.onChange} defaultValue={dates[0]}>
    //             <FormControl>
    //               <SelectTrigger className="w-full bg-stone-100 font-semibold tracking-wide outline-none focus:outline-none">
    //                 <SelectValue />
    //               </SelectTrigger>
    //             </FormControl>
    //             <SelectContent>
    //               {dates.map((time) => (
    //                 <SelectItem
    //                   key={time}
    //                   value={time}
    //                   className="font-semibold tracking-wide"
    //                 >
    //                   {time}
    //                 </SelectItem>
    //               ))}
    //             </SelectContent>
    //           </Select>
    //         </FormItem>
    //       )}
    //     /> */}
    //     {/* <FormField
    //       control={control}
    //       name="time"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel className="mb-3 pl-1 text-sm text-stone-400">
    //             Time
    //           </FormLabel>
    //           <Select onValueChange={field.onChange} defaultValue={times[0]}>
    //             <FormControl>
    //               <SelectTrigger className="w-full bg-stone-100 font-semibold tracking-wide outline-none focus:outline-none">
    //                 <SelectValue />
    //               </SelectTrigger>
    //             </FormControl>
    //             <SelectContent>
    //               {times.map((time) => (
    //                 <SelectItem
    //                   key={time}
    //                   value={time}
    //                   className="font-semibold tracking-wide"
    //                 >
    //                   {time}
    //                 </SelectItem>
    //               ))}
    //             </SelectContent>
    //           </Select>
    //         </FormItem>
    //       )}
    //     /> */}
    //   </div>
    // </div>
  )
}
