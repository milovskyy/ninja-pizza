import { cn } from "@/lib/utils"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { Button } from "./ui/button"

type Props = {
  className?: string
  number: number
  bg?: string
  hoverBg?: string
}

export const PlusMinusBlock = ({ className, number, bg, hoverBg }: Props) => {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <Button className={cn("relative aspect-square h-[52px]", bg, hoverBg)}>
        <AiOutlineMinus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </Button>
      <div className="font-bold">{number}</div>
      <Button className={cn("relative aspect-square h-[52px]", bg, hoverBg)}>
        <AiOutlinePlus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </Button>
    </div>
  )
}
