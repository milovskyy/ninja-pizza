"use client"

import { RotateLoader } from "react-spinners"
import MenuCategoriesElement from "./MenuCategoriesElement"
import { useCategories } from "@/app/_store/categories"

type PropsType = {
  separate?: boolean
}

function MenuCategories({ separate }: PropsType) {
  const { categories } = useCategories()

  if (categories.length === 0)
    return (
      <div className="flex h-[200px] w-full items-center justify-center md:h-[380px]">
        <RotateLoader color="#ffc700" size={25} margin={30} />
      </div>
    )

  return (
    <div className={`grid grid-cols-5 ${separate && "w-full gap-1 lg:gap-2"}`}>
      {categories.map((category) => {
        return (
          <MenuCategoriesElement
            key={category.linkName}
            category={category}
            separate={separate}
          />
        )
      })}
    </div>
  )
}

export default MenuCategories
