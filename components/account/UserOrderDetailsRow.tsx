import { cn } from "@/utils/utils"

type Props = {
  text: string
  value: string
}

export const UserOrderDetailsRow = ({ text, value }: Props) => {
  return (
    <div className={cn("flex gap-1 xs:gap-3")}>
      <div className="text-sm text-stone-400 xs:text-base">{text}</div>
      <div className="mb-1 min-w-4 flex-1 border-b border-dashed border-stone-300"></div>
      <div className="text-end text-sm font-semibold xs:text-base">
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </div>
    </div>
  )
}
