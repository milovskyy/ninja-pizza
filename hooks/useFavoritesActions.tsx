import { useFavorites } from "@/app/_store/favorites"
import { useUser } from "@/app/_store/user"
import { ProductType } from "@/app/_types/Types"
import { updateUserFavorites } from "@/utils/actions"

export const useFavoritesActions = () => {
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const { user } = useUser()

  const favoriteAction = (product: ProductType) => {
    if (!user?.id) return
    const isFavorite = favorites.some((item) => item.id === product.id)
    if (isFavorite) {
      removeFavorite(product)
      updateUserFavorites(
        favorites.filter((item) => item.id !== product.id),
        user.id,
      )
    } else {
      addFavorite(product)
      updateUserFavorites([...favorites, product], user.id)
    }
  }

  return {
    favoriteAction,
  }
}
