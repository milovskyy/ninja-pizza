"use client"

import MenuCategoriesElement from "./MenuCategoriesElement"
import { useCategories } from "@/app/_store/categories"

type PropsType = {
  separate?: boolean
}

// сортировать чтоб сначала новые шли

function MenuCategories({ separate }: PropsType) {
  const { categories } = useCategories()

  return (
    <div className={`flex ${separate && "w-full gap-2"}`}>
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
