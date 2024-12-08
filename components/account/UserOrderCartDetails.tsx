import { useProducts } from "@/app/_store/products"
import { CartProductType, OrderType, ProductType } from "@/app/_types/Types"
import { sortOrderProductsByCategoryOrder } from "@/utils/helperFunction"
import { cn } from "@/utils/utils"
import Image from "next/image"
import Link from "next/link"

type Props = {
  order: OrderType
}

export const UserOrderCartDetails = ({ order }: Props) => {
  const orderedItems = sortOrderProductsByCategoryOrder(JSON.parse(order.items))

  const { allProducts } = useProducts()

  const items = orderedItems.map((smallItem: CartProductType) => {
    const match = allProducts.find((bigItem) => bigItem.id === smallItem.id)
    if (match) {
      return { ...smallItem, ingredients: match.ingredients, size: match.size }
    }
    return smallItem
  })

  return (
    <div className={cn("flex flex-col gap-3 px-3 xs:px-3 md:py-5 xl:px-20")}>
      {items.map((item: any) => (
        <div
          className="flex justify-between p-1 max-xs:flex-col max-xs:rounded-lg max-xs:bg-stone-50 md:gap-2 lg:gap-5"
          key={item.id}
        >
          <div className="flex gap-2 lg:gap-5">
            <div className="flex items-center justify-center">
              <Link
                href={`/product/${item.linkName}`}
                className="relative aspect-square w-20 xs:w-16 md:w-20"
              >
                <Image
                  fill
                  className="object-cover"
                  src={item.image}
                  alt="img"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold lg:text-lg">{item.name}</p>
              <h3 className="max-w-[350px] text-xs font-semibold tracking-wide text-stone-400 lg:text-sm">
                <span className="font-semibold text-main">{item.size}</span>
                {item.ingredients?.length > 0 &&
                  ` - " ${item.ingredients.join(", ")}`}
              </h3>
            </div>
          </div>
          <div className="flex max-xs:justify-between xs:gap-1 lg:gap-4">
            <div className="flex w-[72px] flex-col py-1 max-lg:pl-1 md:gap-1 lg:w-[90px] lg:px-2">
              <div className="flex gap-1">
                <p className="text-start text-lg font-bold">{item.price}</p>
                <p className="tex-sm text-stone-400">UAH</p>
              </div>
              <p className="text-start text-sm text-stone-400">Price</p>
            </div>
            <div className="flex w-[35px] flex-col py-1 xs:pl-1 md:gap-1 lg:w-[45px] lg:px-2">
              <p className="text-start text-lg font-bold">{item.quantity}</p>
              <p className="text-start text-sm text-stone-400">Q-ty</p>
            </div>
            <div className="flex w-[78px] flex-col py-1 md:gap-1 lg:w-[90px] lg:px-2">
              <div className="flex gap-1">
                <p className="text-start text-lg font-bold">
                  {item.price * item.quantity}
                </p>
                <p className="tex-sm text-stone-400">UAH</p>
              </div>
              <p className="text-start text-sm text-stone-400">Total</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
