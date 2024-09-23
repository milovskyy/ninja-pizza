import { CategoryType } from "@/app/_types/TypeProduct"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type Props = {
  category: CategoryType
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartCategoriesElement = ({ category, setIsCartOpen }: Props) => {
  const { image, name, linkName, color } = category
  return (
    <Link
      href={`/category/${linkName}`}
      className={cn(
        "flex flex-col items-center justify-center gap-1 overflow-hidden rounded-3xl",
      )}
      style={{ backgroundColor: color }}
      onClick={() => setIsCartOpen(false)}
      prefetch={true}
    >
      <Image
        src={image}
        alt={name}
        width={160}
        height={160}
        className={cn("mt-[-95px]")}
      />
      <h3 className="text-xl font-semibold">{name}</h3>
    </Link>
  )
}
