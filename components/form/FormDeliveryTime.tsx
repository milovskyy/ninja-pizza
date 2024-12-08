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
      className="grid grid-cols-2 gap-3 sm:gap-5"
    >
      <FormSelect name="date" label="Date" array={dates} />
      <FormSelect name="time" label="Time" array={times} />
    </FormBlock>
  )
}
