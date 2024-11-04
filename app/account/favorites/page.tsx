import { AccountEmptyBlock } from "@/components/account/AccountEmptyBlock"

function Favorites() {
  return (
    <div className="">
      <h1 className="mb-7 text-5xl font-black">Favorites</h1>
      <AccountEmptyBlock
        title="Your favorites list is empty"
        subtitle="Like your favorite dishes"
        page="favorites"
      />
    </div>
  )
}

export default Favorites
