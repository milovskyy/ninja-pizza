import { ORDER_STATUSES } from "@/app/_constants/constants"
import { cn } from "@/utils/utils"

type Props = {
  handleFilter: (type: string, value: string) => void
  selected: string | null
  array: string[]
  type: string
}

export const OrdersFilter = ({
  handleFilter,
  selected,
  array,
  type,
}: Props) => {
  return (
    <div className="flex gap-9 px-3 py-2">
      <div className="flex w-full gap-4">
        {array.map((filter) => (
          <div
            className="flex cursor-pointer gap-2 p-2"
            onClick={() => handleFilter(type, filter)}
            key={filter}
          >
            <div
              className={`${selected === filter ? "border-primary" : "border-stone-200"} flex h-6 w-6 items-center justify-center rounded-full border-2`}
            >
              <div
                className={`h-[14px] w-[14px] rounded-full ${selected === filter ? "bg-primary" : "bg-transparent"}`}
              />
            </div>

            <p className="font-semibold">{filter}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
