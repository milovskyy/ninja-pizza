import { CartProductType, OrderType } from "@/app/_types/Types"
import { sortOrderProductsByCategoryOrder } from "@/utils/helperFunction"
import { cn } from "@/utils/utils"
import Image from "next/image"
import { OrderEditModal } from "./OrderEditModal"

type Props = {
  order: OrderType
  setStatus: React.Dispatch<React.SetStateAction<string>>
}

export const OrderDetails = ({ order, setStatus }: Props) => {
  const items = sortOrderProductsByCategoryOrder(JSON.parse(order.items))
  return (
    <div
      className={cn(
        "flex flex-col gap-3 px-2 py-3 xs:px-3 sm:px-5 md:grid md:grid-cols-[3fr_2fr] md:px-3 lg:grid-cols-[2fr_1fr] lg:gap-5 lg:px-8",
      )}
    >
      <div className="flex w-full flex-col gap-2 overflow-hidden px-1">
        {items.map((item: CartProductType) => (
          <div
            className="flex items-center justify-start gap-3 lg:gap-5"
            key={item.id}
          >
            <Image width={70} height={70} src={item.image} alt="img" />
            <p className="text-sm font-semibold xs:text-base lg:text-lg">
              <span className="text-base font-bold xs:text-lg lg:text-xl">
                {item.quantity}
              </span>
              <span className="mx-1">x</span> {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 overflow-hidden text-wrap p-1 px-1 text-sm font-semibold lg:text-base">
        <div className="flex items-center justify-between">
          <p>Created:</p>
          <p>{order.created}</p>
        </div>
        {order.updated && (
          <div className="flex items-center justify-between">
            <p>Updated:</p>
            <p>{order.updated}</p>
          </div>
        )}
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
            <p className="w-[70%] max-w-[70%] shrink-0 overflow-hidden text-ellipsis text-end">
              {order.comment}
            </p>
          </div>
        )}
        <OrderEditModal order={order} setStatus={setStatus} />
      </div>
    </div>
  )
}
