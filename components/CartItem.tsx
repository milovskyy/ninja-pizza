import { cartProductType } from "@/app/_types/TypeProduct"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { PlusMinusBlock } from "./PlusMinusBlock"
import { useCart } from "@/app/_store/cart"
import { X } from "lucide-react"
import { link } from "fs"
import Link from "next/link"

type Props = {
  item: cartProductType
}

export const CartItem = ({ item }: Props) => {
  const { name, price, size, image, quantity, linkName } = item
  const { remove, increase, decrease } = useCart()

  console.log(linkName)

  return (
    <div className={cn("relative flex gap-3 rounded-3xl bg-stone-100 p-4")}>
      <div
        onClick={() => remove(item)}
        className="absolute left-[-11px] top-1/2 flex h-[22px] w-[22px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white"
      >
        <X size={15} />
      </div>
      <Link
        href={`/product/${linkName}`}
        className="flex min-w-[72px] items-center justify-center"
      >
        <Image src={image} alt={name} width={72} height={72} />
      </Link>
      <div className="flex w-full flex-col">
        <Link href={`/product/${linkName}`} className="text-sm font-bold">
          {name}
        </Link>
        <div className="py-[3px] text-sm text-stone-400">{size}</div>
        <div className="flex flex-1 justify-between">
          <div className="relative flex gap-1">
            <div className="font-bold text-stone-900">{price}</div>
            <div className="relative top-[1px] text-sm font-semibold text-stone-400">
              UAH
            </div>
          </div>
          <PlusMinusBlock
            number={quantity}
            size="h-[32px]"
            bg="bg-stone-200"
            hoverBg=""
            plusFunc={() => increase(item)}
            minusFunc={() => decrease(item)}
          />
        </div>
      </div>
    </div>
  )
}
