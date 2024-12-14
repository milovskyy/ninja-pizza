"use client"
import { OrderType } from "@/app/_types/Types"
import { Accordion } from "@radix-ui/react-accordion"
import { UserOrder } from "./account/UserOrder"

type Props = {
  order: OrderType
}

export const OrderConfirmation = ({ order }: Props) => {
  return (
    <Accordion
      type="multiple"
      className="flex w-full flex-col gap-3 bg-stone-100 lg:pb-10"
    >
      <UserOrder key={order.id} order={order} />
    </Accordion>
  )
}
