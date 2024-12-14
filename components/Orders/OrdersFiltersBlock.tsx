"use client"

import { ORDER_STATUSES, ORDER_TIME_FILTERS } from "@/app/_constants/constants"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"

import { OrdersFilter } from "./OrdersFilter"

type Props = {}

export const OrdersFiltersBlock = ({}: Props) => {
  const searchParams = useSearchParams()
  const status = searchParams.get("status")
  const time = searchParams.get("time")
  const [selectedStatus, setSelectedStatus] = useState(status)
  const [selectedTime, setSelectedTime] = useState(time)

  const pathname = usePathname()
  const router = useRouter()

  const handleUpdateFilter = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams)

    const currentValue = type === "status" ? selectedStatus : selectedTime

    if (currentValue === value) {
      params.delete(type)
    } else {
      params.set(type, value)
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false })

    if (type === "status") {
      setSelectedStatus(params.get("status") || "")
    } else {
      setSelectedTime(params.get("time") || "")
    }
  }

  return (
    <div className="mb-5 flex w-full justify-between max-md:flex-col max-sm:gap-4 lg:p-1">
      <OrdersFilter
        handleFilter={handleUpdateFilter}
        selected={selectedStatus}
        array={ORDER_STATUSES}
        type="status"
      />
      <OrdersFilter
        handleFilter={handleUpdateFilter}
        selected={selectedTime}
        array={ORDER_TIME_FILTERS}
        type="time"
      />
    </div>
  )
}
