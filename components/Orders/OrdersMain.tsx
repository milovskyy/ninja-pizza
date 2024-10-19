"use client"

import { useOrders } from "@/app/_store/orders"
import { Order } from "./Order"
import { sortOrdersByDateTime } from "@/utils/helperFunction"
import { RotateLoader } from "react-spinners"
import { OrdersHeader } from "./OrdersHeader"

import { Accordion } from "@/components/ui/accordion"
import { useSearchParams } from "next/navigation"

export const OrdersMain = () => {
  const { allOrders } = useOrders()
  const searchParams = useSearchParams()
  const status = searchParams.get("status")
  const time = searchParams.get("time")

  const sortedData = sortOrdersByDateTime(allOrders, time)
  const ordersToShow = status
    ? sortedData.filter((order) => order.status === status)
    : sortedData

  // Добавить тут чтоб не показывало прошлые даты заказов

  if (allOrders.length === 0)
    return (
      <div className="flex h-[400px] w-full items-center justify-center">
        <RotateLoader color="#ffc700" size={25} margin={30} />
      </div>
    )
  return (
    <Accordion
      type="multiple"
      // type="single"
      // collapsible
      className="flex w-full flex-col gap-3 overflow-hidden rounded-xl bg-stone-100 pb-5"
    >
      <OrdersHeader />
      {ordersToShow.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </Accordion>
  )
}
