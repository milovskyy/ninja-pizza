import { cn } from "@/utils/utils"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import { CartProductType, OrderType } from "@/app/_types/Types"
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
    (acc: number, item: CartProductType) => acc + item.quantity,
    0,
  )

  const images = items.map((item: CartProductType) => item.image)
  const today = format(new Date(), "dd-MM-yy")
  return (
    <div className="flex flex-1 items-center justify-center px-2 py-1 font-semibold max-sm:justify-between xs:gap-2 md:px-3 lg:gap-4 lg:px-5">
      <div
        className={cn(
          "flex h-16 w-[65px] flex-col justify-center rounded-xl text-center text-sm xs:w-[85px] xs:text-base md:w-[105px] md:px-4",
          order.date === today ? "bg-emerald-100" : "",
        )}
      >
        <div className="">{order.date}</div>
        <div
          className={cn(
            "w-full rounded-lg text-center text-xs xs:text-sm",
            order.time === "The nearest time" && order.date === today
              ? "bg-red-100"
              : "",
          )}
        >
          {order.time === "The nearest time" ? "As Soon" : order.time}
        </div>
        <div className="text-xs xs:text-sm">#{order.id}</div>
      </div>
      <div
        className={cn(
          "flex h-14 w-[65px] items-center justify-center rounded-xl max-md:text-sm md:w-[88px] md:p-3",
          order.method === "Delivery" && "bg-amber-100",
        )}
      >
        {order.method}
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

      <div className="w-5 text-center text-base sm:w-[25px] md:w-[48px] md:p-2 md:text-lg">
        {itemsNumber}
      </div>
      <div className="w-[60px] whitespace-nowrap text-center text-base sm:w-[65px] md:w-[94px] md:p-2 md:text-lg">
        {order.totalAmount} ₴
      </div>

      <div
        className={cn(
          "w-[84px] rounded-xl border border-transparent p-2 text-center text-xs font-black xs:text-sm sm:w-[96px] md:w-[120px] md:text-base",
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
