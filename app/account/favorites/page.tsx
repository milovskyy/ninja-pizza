"use client"

import { useFavorites } from "@/app/_store/favorites"
import { useUser } from "@/app/_store/user"
import { AccountEmptyBlock } from "@/components/account/AccountEmptyBlock"
import { UserFavoritesList } from "@/components/account/UserFavoritesList"

function Favorites() {
  const { user } = useUser()
  const { favorites } = useFavorites()

  return (
    <>
      <h1 className="mb-5 text-xl font-black max-md:mt-5 max-md:text-center sm:text-2xl md:text-4xl lg:text-5xl">
        Favorites
      </h1>
      {favorites.length > 0 ? (
        <UserFavoritesList />
      ) : (
        <AccountEmptyBlock
          title="Your favorites list is empty"
          subtitle="Like your favorite dishes"
          page="favorites"
        />
      )}
    </>
  )
}

export default Favorites
