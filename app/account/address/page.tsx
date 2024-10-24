import { AccountEmptyBlock } from "@/components/account/AccountEmptyBlock"

function Address() {
  return (
    <div className="">
      <AccountEmptyBlock
        title="You have no saved addresses"
        subtitle="Add address to speed up the checkout process"
        page="address"
      />
    </div>
  )
}

export default Address
