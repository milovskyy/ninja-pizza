"use client"

import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"
import PizzaFilterButton from "./PizzaFilterButton"

const filters = ["spicy", "meat", "vegetarian", "seafood"]

type Props = {
  filter: string | undefined
}

function PizzaFilter({ filter = "" }: Props) {
  const [selectedFilter, setSelectedFilter] = useState(filter)

  // console.log(filter)

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
    <div className="mb-3 mt-5 flex w-full gap-9 self-start rounded-2xl bg-white px-5 py-3">
      {filters.map((filter) => (
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
