"use client"

import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"
import PizzaFilterButton from "./PizzaFilterButton"
import { PIZZA_FILTERS } from "@/app/_constants/constants"

type Props = {
  filter: string | undefined
}

function PizzaFilter({ filter = "" }: Props) {
  const [selectedFilter, setSelectedFilter] = useState(filter)

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleFilter = (filter: string) => {
    if (selectedFilter === filter) {
      router.replace(`${pathname}`, { scroll: false })
      setSelectedFilter("")
      return
    }
    const params = new URLSearchParams(searchParams)
    params.set("filter", filter)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    setSelectedFilter(filter)
  }

  return (
    <div className="mb-2 w-full gap-3 self-start rounded-2xl bg-white px-3 py-3 max-sm:grid max-sm:grid-cols-2 sm:mb-3 sm:mt-5 sm:flex sm:px-5 md:gap-9">
      {PIZZA_FILTERS.map((filter) => (
        <PizzaFilterButton
          key={filter}
          name={filter}
          handleFilter={handleFilter}
          selectedFilter={selectedFilter}
        />
      ))}
    </div>
  )
}

export default PizzaFilter
