import { AccountEmptyBlock } from "@/components/account/AccountEmptyBlock"

function Favorites() {
  return (
    <div className="">
      <AccountEmptyBlock
        title="Your favorites list is empty"
        subtitle="Like your favorite dishes"
        page="favorites"
      />
    </div>
  )
}

export default Favorites
