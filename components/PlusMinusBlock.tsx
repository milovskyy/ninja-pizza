import { cn } from "@/utils/utils"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { Button } from "./ui/button"

type Props = {
  className?: string
  number: number
  bg?: string
  hoverBg?: string
  size?: string
  plusFunc: () => void
  minusFunc: () => void
}

export const PlusMinusBlock = ({
  className,
  number,
  bg = "bg-primary",
  hoverBg,
  size = "md:h-12 h-10",
  plusFunc,
  minusFunc,
}: Props) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1 md:gap-3",
        className,
      )}
    >
      <div
        className={cn(
          "relative aspect-square cursor-pointer rounded-full hover:bg-main",
          bg,
          hoverBg,
          size,
        )}
        onClick={minusFunc}
      >
        <AiOutlineMinus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="min-w-5 text-center font-bold">{number}</div>
      <div
        className={cn(
          "relative aspect-square cursor-pointer rounded-full hover:bg-main",
          bg,
          hoverBg,
          size,
        )}
        onClick={plusFunc}
      >
        <AiOutlinePlus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  )
}
