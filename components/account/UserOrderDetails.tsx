import { OrderType } from "@/app/_types/Types"

import { cn } from "@/utils/utils"

import { UserOrderDetailsRow } from "./UserOrderDetailsRow"

type Props = {
  order: OrderType
}

export const UserOrderDetails = ({ order }: Props) => {
  return (
    <div className={cn("mt-3 flex flex-col gap-3 px-3 py-5 xs:px-10 xl:px-20")}>
      <div className="text-semibold flex flex-col gap-2">
        <UserOrderDetailsRow text="Delivery Address:" value={order.address} />
        <UserOrderDetailsRow text="Delivery Method:" value={order.method} />
        <UserOrderDetailsRow text="Delivery Time:" value={order.time} />
        <UserOrderDetailsRow text="Payment Method:" value={order.payment} />
        <UserOrderDetailsRow
          text="Order total:"
          value={`${order.totalAmount.toString()} UAH`}
        />
        <UserOrderDetailsRow text="Persons:" value={order.persons} />
      </div>
    </div>
  )
}
