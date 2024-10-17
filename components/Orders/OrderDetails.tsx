import { cartProductType, OrderType } from "@/app/_types/TypeProduct"
import { sortOrderProductsByCategoryOrder } from "@/utils/helperFunction"
import { cn } from "@/utils/utils"
import Image from "next/image"
import { Button } from "../ui/button"

type Props = {
  order: OrderType
}

export const OrderDetails = ({ order }: Props) => {
  const items = sortOrderProductsByCategoryOrder(JSON.parse(order.items))
  return (
    <div className={cn("grid grid-cols-[2fr_1fr] gap-5 px-8 py-3")}>
      <div className="flex w-full flex-col gap-2 overflow-hidden px-1">
        {items.map((item: cartProductType) => (
          <div className="flex items-center justify-start gap-5" key={item.id}>
            <Image width={70} height={70} src={item.image} alt="img" />
            <p className="text-lg font-semibold">
              <span className="text-xl font-bold">{item.quantity}</span>
              <span className="mx-1">x</span> {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 overflow-hidden p-1 text-base font-semibold">
        <div className="flex items-center justify-between">
          <p>Created:</p>
          <p>{order.created_at}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Name:</p>
          <p>{order.name}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Phone:</p>
          <p>{order.phone}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Address:</p>
          <p className="w-[75%] text-end">{order.address}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Persons:</p>
          <p>{order.persons}</p>
        </div>
        {order.change && (
          <div className="flex items-center justify-between">
            <p>Change:</p>
            <p>{order.change}</p>
          </div>
        )}

        {order.choices && (
          <div className="flex items-center justify-between">
            <p>Info:</p>
            <p className="w-[75%] text-end">{order.choices}</p>
          </div>
        )}
        <div className="flex items-center justify-between">
          <p>Payment:</p>
          <p>{order.payment}</p>
        </div>
        {order.comment && (
          <div className="flex items-center justify-between">
            <p>Comment:</p>
            <p className="w-[75%] max-w-[75%] shrink-0 overflow-hidden text-ellipsis text-end">
              {order.comment}
            </p>
          </div>
        )}
        <div className="mt-5 flex justify-end">
          <Button className="sell-end w-24 rounded-xl bg-stone-200 py-3 font-bold">
            Edit Order
          </Button>
        </div>
      </div>
    </div>
  )
}
