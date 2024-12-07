import { UserDeliveryAddress, UserType } from "@/app/_types/Types"
import { cn } from "@/utils/utils"
import { UserDeliveryAddressItem } from "./UserDeliveryAddressItem"

type Props = {
  userAddresses: UserDeliveryAddress[] | []
  user: UserType
}

export const UserDeliveryAddressList = ({ userAddresses, user }: Props) => {
  return (
    <div className={cn("flex w-full flex-1 flex-col gap-2")}>
      {userAddresses.map((userAddress) => (
        <UserDeliveryAddressItem
          key={userAddress.id}
          userAddress={userAddress}
          user={user}
        />
      ))}
    </div>
  )
}
