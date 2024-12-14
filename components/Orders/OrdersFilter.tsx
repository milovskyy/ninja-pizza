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
    <div className="flex py-2 lg:px-3">
      <div className="grid w-full grid-cols-3 gap-4 max-sm:text-center sm:flex md:gap-2 lg:gap-4">
        {array.map((filter) => (
          <div
            className={cn(
              "cursor-pointer items-center justify-center rounded-md bg-white p-2 px-4 font-bold max-lg:text-sm",
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
