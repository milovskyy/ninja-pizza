import { CategoryType } from "@/app/_types/Types"
import { cn } from "@/utils/utils"
import Image from "next/image"
import Link from "next/link"

type Props = {
  category: CategoryType
  setIsCartOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartCategoriesElement = ({ category, setIsCartOpen }: Props) => {
  const { image, name, linkName, color } = category
  return (
    <Link
      href={`/category/${linkName}`}
      className={cn(
        "flex flex-col items-center justify-center gap-1 overflow-hidden rounded-3xl max-sm:rounded-2xl",
      )}
      style={{ backgroundColor: color }}
      onClick={() => {
        if (setIsCartOpen) {
          setIsCartOpen(false)
        }
      }}
      prefetch={true}
    >
      <Image
        src={image}
        alt={name}
        width={160}
        height={160}
        className={cn("mt-[-95px] max-sm:mt-[-110px]")}
      />
      <h3 className="text-xl font-semibold max-sm:mb-2 max-sm:text-base">
        {name}
      </h3>
    </Link>
  )
}
