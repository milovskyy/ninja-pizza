import { AccountEmptyBlock } from "@/components/account/AccountEmptyBlock"
import { UpdateAddressModal } from "@/components/account/UpdateAddressModal"
import { UserDeliveryAddressList } from "@/components/account/UserDeliveryAddressList"
import { getUser } from "@/utils/user-service"

export const revalidate = 1000
async function Address() {
  const user = await getUser()

  const userAddresses = user ? user.address : []

  if (!user) {
    return null
  }

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between max-md:mt-5 max-md:px-2 md:mb-7">
        <h1 className="font-black max-md:text-center sm:text-2xl md:text-4xl lg:text-5xl">
          Delivery address
        </h1>
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
    </>
  )
}

export default Address
