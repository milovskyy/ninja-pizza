import { UserDeliveryAddress } from "@/app/_types/Types"
import { cn } from "@/utils/utils"
import { BriefcaseBusiness, House, Star } from "lucide-react"
import { FormAddressSelectModal } from "./FormAddressSelectModal"

type Props = {
  userAddressList: UserDeliveryAddress[]
}

export const FormAddressSelectBlock = ({ userAddressList }: Props) => {
  const userAddress = userAddressList[0]
  return (
    <div
      className={cn("flex items-center gap-5 rounded-3xl bg-white p-3 sm:p-5")}
    >
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
        <p className="text-sm font-bold sm:text-base">{userAddress.name}</p>
        <p className="text-xs font-semibold text-stone-400 sm:text-sm">
          {`${userAddress.address.street}, ${userAddress.address.building}`}
        </p>
      </div>
      <FormAddressSelectModal userAddressList={userAddressList} />
    </div>
  )
}
