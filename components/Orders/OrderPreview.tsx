import { cn } from "@/utils/utils"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import { cartProductType, OrderType } from "@/app/_types/TypeProduct"
import { sortOrderProductsByCategoryOrder } from "@/utils/helperFunction"
import { format } from "date-fns"

type Props = {
  order: OrderType
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const OrderPreview = ({ order, setDialogOpen }: Props) => {
  const parsedItems = JSON.parse(order.items)
  const items = sortOrderProductsByCategoryOrder(parsedItems)
  const itemsNumber = items.reduce(
    (acc: number, item: cartProductType) => acc + item.quantity,
    0,
  )

  const images = items.map((item: cartProductType) => item.image)
  const today = format(new Date(), "dd-MM-yy")
  return (
    <div className="flex flex-1 items-center justify-center gap-4 px-5 py-1 font-semibold">
      <div
        className={cn(
          "h-14 w-[105px] rounded-xl px-4 py-1 text-center",
          order.date === today ? "bg-emerald-100" : "",
        )}
      >
        <div className="">{order.date}</div>
        <div
          className={cn(
            "w-full rounded-lg text-center text-sm",
            order.time === "The nearest time" && order.date === today
              ? "bg-red-100"
              : "",
          )}
        >
          {order.time === "The nearest time" ? "As Soon" : order.time}
        </div>
      </div>
      <div
        className={cn(
          "flex h-14 w-[88px] items-center justify-center rounded-xl p-3",
          order.method === "Delivery" ? "bg-amber-100" : "",
        )}
      >
        {order.method}
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

      <div className="w-[48px] p-2 text-center text-[18px]">{itemsNumber}</div>
      <div className="w-[94px] whitespace-nowrap p-2 text-center text-[18px]">
        {order.totalAmount} ₴
      </div>

      <div
        className={cn(
          "w-[120px] rounded-xl border border-transparent p-2 text-center font-black",
          order.status === "Pending" &&
            "border-orange-700 bg-orange-50 text-orange-600",
          order.status === "Cancelled" &&
            "border-gray-500 bg-gray-50 text-gray-500",
          order.status === "Confirmed" &&
            "border-green-600 bg-green-50 text-green-600",
          order.status === "Shipped" && "border-sky-700 bg-sky-50 text-sky-600",
          order.status === "Delivered" &&
            "border-purple-800 bg-purple-50 text-purple-700",
        )}
        onClick={(e) => {
          e.preventDefault()
          setDialogOpen(true)
        }}
      >
        {order.status}
      </div>
    </div>
  )
}
