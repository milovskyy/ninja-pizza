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
    addProductsToCartAction(parsedItems)
    toast.success("Products have been added to cart", {
      id: "clipboard",
    })
  }

  return (
    <div className="flex flex-1 flex-col gap-3 py-2 sm:gap-5 sm:px-1 sm:py-4 lg:px-5">
      <div className="flex flex-1 items-center gap-1 px-2 max-sm:justify-between sm:gap-2">
        <div className="h-14 w-[82px] py-1 max-sm:pl-1 sm:w-24 sm:px-1 lg:w-[120px] lg:px-4">
          <div className="text-start text-2xl font-bold max-xs:text-lg">
            # {order.id}
          </div>
          <div className="text-start text-sm text-stone-400">{order.date}</div>
        </div>
        <Carousel
          className="w-full flex-1 max-sm:hidden"
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

        <div className="flex w-10 flex-col gap-1 py-1 sm:w-14 sm:px-2">
          <p className="text-start text-2xl font-bold max-xs:text-lg">
            {itemsNumber}
          </p>
          <p className="text-start text-sm text-stone-400">Q-ty</p>
        </div>

        <div className="flex w-24 flex-col gap-1 py-1 sm:w-[120px] sm:px-2">
          <div className="flex gap-1">
            <p className="text-start text-2xl font-bold max-xs:text-lg">
              {order.totalAmount}
            </p>
            <p className="tex-sm text-stone-400 max-xs:text-xs">UAH</p>
          </div>
          <p className="text-start text-sm text-stone-400">Total</p>
        </div>

        <div
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary pb-[2px] sm:h-14 sm:w-14"
          onClick={handleAddToCart}
        >
          <LiaShoppingBagSolid size="28px" />
        </div>
      </div>
      <div className="w-full px-2 max-xs:px-1">
        {order.method === "Delivery" ? (
          <UserOrderProgressDelivery status={order.status} />
        ) : (
          <UserOrderProgressPickup status={order.status} />
        )}
      </div>
    </div>
  )
}
