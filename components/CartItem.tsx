import { CartProductType } from "@/app/_types/Types"
import { cn } from "@/utils/utils"
import Image from "next/image"
import { PlusMinusBlock } from "./PlusMinusBlock"
import { X } from "lucide-react"
import Link from "next/link"
import { useCartActions } from "@/hooks/useCartActions"

type Props = {
  item: CartProductType
  setIsCartOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartItem = ({ item, setIsCartOpen }: Props) => {
  const { name, price, size, image, quantity, linkName } = item
  const {
    removeProductFromCartAction,
    increaseProductCartAction,
    decreaseProductCartAction,
  } = useCartActions()

  return (
    <div
      className={cn("relative flex gap-3 rounded-3xl bg-stone-100 p-2 sm:p-4")}
    >
      <div
        onClick={() => removeProductFromCartAction(item)}
        className="absolute left-[-13px] top-1/2 flex h-[26px] w-[26px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white hover:bg-red-500 hover:text-white"
      >
        <X size={15} strokeWidth={3} />
      </div>
      <Link
        href={`/product/${linkName}`}
        className="flex min-w-[72px] items-center justify-center"
        onClick={() => {
          if (setIsCartOpen) {
            setIsCartOpen(false)
          }
        }}
      >
        <Image src={image} alt={name} width={72} height={72} quality={90} />
      </Link>
      <div className="flex w-full flex-col">
        <Link
          href={`/product/${linkName}`}
          className="text-sm font-bold"
          onClick={() => {
            if (setIsCartOpen) {
              setIsCartOpen(false)
            }
          }}
        >
          {name}
        </Link>
        <div className="py-[3px] text-sm text-stone-500">{size}</div>
        <div className="flex flex-1 justify-between">
          <div className="relative flex gap-1">
            <div className="font-bold text-stone-950">{price}</div>
            <div className="relative top-[1px] text-sm font-semibold text-stone-500">
              UAH
            </div>
          </div>
          <PlusMinusBlock
            number={quantity}
            size="h-[32px]"
            bg="bg-stone-200"
            hoverBg=""
            plusFunc={() => increaseProductCartAction(item)}
            minusFunc={() => decreaseProductCartAction(item)}
          />
        </div>
      </div>
    </div>
  )
}
