import { cn } from "@/utils/utils"

type Props = {
  text: string
  value: string
}

export const UserOrderDetailsRow = ({ text, value }: Props) => {
  return (
    <div className={cn("flex gap-3")}>
      <div className="text-base text-stone-400">{text}</div>
      <div className="mb-1 flex-1 border-b border-dashed border-stone-300"></div>
      <div className="text-[16px] font-semibold">
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </div>
    </div>
  )
}
