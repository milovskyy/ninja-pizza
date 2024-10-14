"use client"

import { useOrders } from "@/app/_store/orders"
import { Order } from "./Order"
import { sortOrders } from "@/utils/helperFunction"
import { RotateLoader } from "react-spinners"
import { OrdersHeader } from "./OrdersHeader"

type Props = {}

export const OrdersMain = ({}: Props) => {
  const { allOrders } = useOrders()

  const sortedData = sortOrders(allOrders)

  console.log(allOrders)

  if (allOrders.length === 0)
    return (
      <div className="flex h-[400px] w-full items-center justify-center">
        <RotateLoader color="#ffc700" size={30} margin={30} />
      </div>
    )
  return (
    <div className="flex w-full flex-col gap-3 overflow-hidden rounded-xl bg-white pb-5">
      <OrdersHeader />
      {sortedData.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  )
}
