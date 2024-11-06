"use client"

import { OrderType } from "@/app/_types/Types"
import { Accordion } from "../ui/accordion"
import { UserOrder } from "./UserOrder"

type Props = {
  orders: OrderType[]
}

export const UserOrdersList = ({ orders }: Props) => {
  orders.sort((a, b) => b.id - a.id)
  return (
    <Accordion
      type="multiple"
      className="mb-5 flex w-full flex-col gap-3 bg-stone-100 pb-10"
    >
      {orders.map((order) => (
        <UserOrder key={order.id} order={order} />
      ))}
    </Accordion>
  )
}
