import { UserDeliveryAddress, UserType } from "@/app/_types/Types"
import { cn } from "@/utils/utils"
import { BriefcaseBusiness, House, Star } from "lucide-react"
import { UpdateAddressModal } from "./UpdateAddressModal"

type Props = {
  userAddress: UserDeliveryAddress
  user: UserType
}

export const UserDeliveryAddressItem = ({ userAddress, user }: Props) => {
  return (
    <div className={cn("flex items-center gap-5 rounded-3xl bg-white p-5")}>
      <div className="text-stone-400">
        {userAddress.name === "Home" ? (
          <House />
        ) : userAddress.name === "Work" ? (
          <BriefcaseBusiness />
        ) : (
          <Star />
        )}
      </div>
      <div className="flex flex-1 flex-col">
        <p className="font-bold">{userAddress.name}</p>
        <p className="text-sm font-semibold text-stone-400">
          {`${userAddress.address.street}, ${userAddress.address.building}`}
        </p>
      </div>
      <UpdateAddressModal user={user} userAddressId={userAddress.id} />
    </div>
  )
}
