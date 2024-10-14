import { cartProductType, OrderType } from "@/app/_types/TypeProduct"
import { cn } from "@/utils/utils"
import MenuCategory from "../MenuCategory"
import Image from "next/image"
import { format } from "date-fns"

type Props = {
  order: OrderType
}

export const Order = ({ order }: Props) => {
  const items = JSON.parse(order.items)
  const itemsNumber = items.reduce(
    (acc: number, item: cartProductType) => acc + item.quantity,
    0,
  )

  const images = items.map((item: cartProductType) => item.image)

  const today = format(new Date(), "dd-MM-yy")

  // if (order.name === "Nikola") console.log(today)

  return (
    <div className={cn("flex")}>
      <div className="flex flex-1 items-center justify-center gap-4 px-5 font-semibold">
        <div
          className={cn(
            "h-14 rounded-xl px-4 py-1 text-center",
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
        <div className="flex flex-1 gap-1">
          {images.map((image: string) => (
            <Image key={image} width={70} height={70} src={image} alt="img" />
          ))}
        </div>
        <div className="w-[48px] p-2 text-center text-[18px]">
          {itemsNumber}
        </div>
        <div className="w-[94px] whitespace-nowrap p-2 text-center text-[18px]">
          {order.totalAmount} ₴
        </div>
        <div className="w-[90px] p-2 text-end">{order.status}</div>
      </div>
      {/* <MenuCategory products={items} name={order.name} /> */}
    </div>
  )
}
