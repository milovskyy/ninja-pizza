import { useProducts } from "@/app/_store/products"
import { cartProductType, OrderType, ProductType } from "@/app/_types/Types"
import { sortOrderProductsByCategoryOrder } from "@/utils/helperFunction"
import { cn } from "@/utils/utils"
import Image from "next/image"

type Props = {
  order: OrderType
}

export const UserOrderCartDetails = ({ order }: Props) => {
  const orderedItems = sortOrderProductsByCategoryOrder(JSON.parse(order.items))

  const { allProducts } = useProducts()

  const items = orderedItems.map((smallItem: cartProductType) => {
    const match = allProducts.find((bigItem) => bigItem.id === smallItem.id)
    if (match) {
      return { ...smallItem, ingredients: match.ingredients, size: match.size }
    }
    return smallItem
  })

  return (
    <div className={cn("flex flex-col gap-3 px-20 py-5")}>
      {items.map((item: any) => (
        <div className="flex justify-between gap-5" key={item.id}>
          <div className="flex gap-5">
            <div className="flex items-center justify-center">
              <Image width={80} height={80} src={item.image} alt="img" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold">{item.name}</p>
              <h3 className="max-w-[350px] text-sm font-semibold tracking-wide text-stone-400">
                <span className="font-semibold text-main">{item.size}</span>
                {item.ingredients?.length > 0 &&
                  ` - " ${item.ingredients.join(", ")}`}
              </h3>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex w-[90px] flex-col gap-1 px-2 py-1">
              <div className="flex gap-1">
                <p className="text-start text-lg font-bold">{item.price}</p>
                <p className="tex-sm text-stone-400">UAH</p>
              </div>
              <p className="text-start text-sm text-stone-400">Price</p>
            </div>
            <div className="flex w-[45px] flex-col gap-1 px-2 py-1">
              <p className="text-start text-lg font-bold">{item.quantity}</p>
              <p className="text-start text-sm text-stone-400">Q-ty</p>
            </div>
            <div className="flex w-[90px] flex-col gap-1 px-2 py-1">
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
