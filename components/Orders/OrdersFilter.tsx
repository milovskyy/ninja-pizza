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
            className={cn(
              "cursor-pointer items-center justify-center rounded-md bg-white p-2 px-4 font-bold",
              selected === filter && "bg-primary",
            )}
            onClick={() => handleFilter(type, filter)}
            key={filter}
          >
            {filter}
          </div>
        ))}
      </div>
    </div>
  )
}
