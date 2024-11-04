import { AccountEmptyBlock } from "@/components/account/AccountEmptyBlock"
import { UpdateAddressModal } from "@/components/account/UpdateAddressModal"
import { UserDeliveryAddressList } from "@/components/UserDeliveryAddressList"
import { getUser } from "@/utils/user-service"
import { Divide } from "lucide-react"

export const revalidate = 1000
async function Address() {
  const user = await getUser()

  const userAddresses = user ? JSON.parse(user.address) : []

  if (!user) {
    return null
  }

  return (
    <div className="">
      <div className="mb-7 flex items-center justify-between">
        <h1 className="text-5xl font-black">Delivery address</h1>
        <UpdateAddressModal user={user} />
      </div>
      {userAddresses?.length > 0 ? (
        <UserDeliveryAddressList userAddresses={userAddresses} user={user} />
      ) : (
        <AccountEmptyBlock
          title="You have no saved addresses"
          subtitle="Add address to speed up the checkout process"
          page="address"
        />
      )}
    </div>
  )
}

export default Address
