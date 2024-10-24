import { IngredientType } from "@/app/_types/Types"
import { cn } from "@/utils/utils"
import Image from "next/image"

type Props = {
  className?: string
  ingredient: IngredientType
}

export const IngredientItem = ({ className, ingredient }: Props) => {
  return (
    <div
      className={cn(
        "flex h-[105px] max-h-[105px] flex-col items-center justify-between gap-1 rounded-2xl bg-white px-[5px] py-[10px]",
        className,
      )}
    >
      <Image
        src={ingredient.image}
        alt={ingredient.name}
        width={48}
        height={48}
        priority
      />
      <p
        className="line-clamp-2 flex max-w-[102px] flex-1 items-center justify-center text-center text-xs font-semibold"
        title={ingredient.name}
      >
        {ingredient.name}
      </p>
    </div>
  )
}
