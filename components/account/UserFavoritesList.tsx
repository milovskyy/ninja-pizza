"use client"

import { useFavorites } from "@/app/_store/favorites"
import MenuCard from "../MenuCard"
import { sortOrderProductsByCategoryOrder } from "@/utils/helperFunction"
import { ProductType } from "@/app/_types/Types"

export const UserFavoritesList = () => {
  const { favorites } = useFavorites()

  const favoritesToShow = sortOrderProductsByCategoryOrder(favorites)
  return (
    <div className="mb-4 grid w-full gap-2 sm:mb-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {favoritesToShow.map((product: ProductType) => (
        <MenuCard key={product.id} product={product} />
      ))}
    </div>
  )
}
