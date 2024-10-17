"use client"

import { useOrders } from "@/app/_store/orders"
import { Order } from "./Order"
import { sortOrdersByDateTime } from "@/utils/helperFunction"
import { RotateLoader } from "react-spinners"
import { OrdersHeader } from "./OrdersHeader"

import { Accordion } from "@/components/ui/accordion"

export const OrdersMain = () => {
  const { allOrders } = useOrders()

  const sortedData = sortOrdersByDateTime(allOrders)

  if (allOrders.length === 0)
    return (
      <div className="flex h-[400px] w-full items-center justify-center">
        <RotateLoader color="#ffc700" size={25} margin={30} />
      </div>
    )
  return (
    <Accordion
      type="multiple"
      className="flex w-full flex-col gap-3 overflow-hidden rounded-xl bg-stone-100 pb-5"
    >
      <OrdersHeader />
      {sortedData.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </Accordion>
  )
}
