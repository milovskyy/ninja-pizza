import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import { CartProductType, OrderType } from "@/app/_types/Types"
import { sortOrderProductsByCategoryOrder } from "@/utils/helperFunction"
import { LiaShoppingBagSolid } from "react-icons/lia"
import toast from "react-hot-toast"
import { useCartActions } from "@/hooks/useCartActions"
import { UserOrderProgressDelivery } from "./UserOrderProgressDelivery"
import { UserOrderProgressPickup } from "./UserOrderProgressPickup"

type Props = {
  order: OrderType
}

export const UserOrderPreview = ({ order }: Props) => {
  // const { addProductToCartAction } = useCartActions()
  const { addProductsToCartAction } = useCartActions()

  const parsedItems = JSON.parse(order.items)
  const items = sortOrderProductsByCategoryOrder(parsedItems)
  const itemsNumber = items.reduce(
    (acc: number, item: CartProductType) => acc + item.quantity,
    0,
  )

  const images = items.map((item: CartProductType) => item.image)

  const handleAddToCart = (e: any) => {
    e.preventDefault()
    toast.success("Products have been added to cart", {
      id: "clipboard",
    })
    // parsedItems.forEach((item: CartProductType) => addProductToCartAction(item))
    addProductsToCartAction(parsedItems)
  }

  return (
    <div className="flex flex-1 flex-col gap-5 px-5 py-4">
      <div className="font flex flex-1 items-center gap-4">
        <div className="h-14 w-[120px] px-4 py-1">
          <div className="text-start text-2xl font-bold"># {order.id}</div>
          <div className="text-start text-sm text-stone-400">{order.date}</div>
        </div>
        <Carousel
          className="w-full flex-1"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="-ml-2 flex w-full gap-1">
            {images.map((image: string) => (
              <CarouselItem key={image} className="basis-1/8 flex pl-2">
                <Image width={70} height={70} src={image} alt="img" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex w-14 flex-col gap-1 px-2 py-1">
          <p className="text-start text-2xl font-bold">{itemsNumber}</p>
          <p className="text-start text-sm text-stone-400">Q-ty</p>
        </div>
        <div className="flex w-[120px] flex-col gap-1 px-2 py-1">
          <div className="flex gap-1">
            <p className="text-start text-2xl font-bold">{order.totalAmount}</p>
            <p className="tex-sm text-stone-400">UAH</p>
          </div>
          <p className="text-start text-sm text-stone-400">Total</p>
        </div>

        <div
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary pb-[2px]"
          onClick={handleAddToCart}
        >
          <LiaShoppingBagSolid size="28px" />
        </div>
      </div>
      <div className="w-full px-2">
        {order.method === "Delivery" ? (
          <UserOrderProgressDelivery status={order.status} />
        ) : (
          <UserOrderProgressPickup status={order.status} />
        )}
      </div>
    </div>
  )
}
