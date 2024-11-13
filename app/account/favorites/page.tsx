"use client"

import { useFavorites } from "@/app/_store/favorites"
import { useUser } from "@/app/_store/user"
import { AccountEmptyBlock } from "@/components/account/AccountEmptyBlock"
import { UserFavoritesList } from "@/components/account/UserFavoritesList"

function Favorites() {
  const { user } = useUser()
  const { favorites } = useFavorites()

  return (
    <div className="">
      <h1 className="mb-7 text-5xl font-black">Favorites</h1>
      {favorites.length > 0 ? (
        <UserFavoritesList />
      ) : (
        <AccountEmptyBlock
          title="Your favorites list is empty"
          subtitle="Like your favorite dishes"
          page="favorites"
        />
      )}
    </div>
  )
}

export default Favorites
