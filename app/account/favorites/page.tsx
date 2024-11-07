import { AccountEmptyBlock } from "@/components/account/AccountEmptyBlock"
import { UserFavoritesList } from "@/components/account/UserFavoritesList"
import { getUser } from "@/utils/user-service"

export const revalidate = 1000
async function Favorites() {
  const user = await getUser()

  if (!user) {
    return null
  }
  return (
    <div className="">
      <h1 className="mb-7 text-5xl font-black">Favorites</h1>
      {user.favorites.length > 0 ? (
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
