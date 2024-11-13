"use client"

import { useFavorites } from "@/app/_store/favorites"
import MenuCard from "../MenuCard"
import { sortOrderProductsByCategoryOrder } from "@/utils/helperFunction"
import { ProductType } from "@/app/_types/Types"

export const UserFavoritesList = () => {
  const { favorites } = useFavorites()

  console.log(favorites)

  const favoritesToShow = sortOrderProductsByCategoryOrder(favorites)
  return (
    <div className="mb-16 grid grid-cols-3 gap-1">
      {favoritesToShow.map((product: ProductType) => (
        <MenuCard key={product.id} product={product} />
      ))}
    </div>
  )
}
