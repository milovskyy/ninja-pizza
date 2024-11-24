import { getUser } from "@/utils/user-service"
import InfoHeaderCart from "./InfoHeaderCart"
import InfoHeaderLike from "./InfoHeaderLike"
import InfoHeaderNumber from "./InfoHeaderContacts"
import InfoHeaderOrders from "./InfoHeaderOrders"
import InfoHeaderUser from "./InfoHeaderUser"
import { BurgerMenu } from "./BurgerMenu"

async function InfoHeader() {
  const user = await getUser()
  return (
    <div className="flex flex-1 justify-end">
      <div className="xs:ml-4 ml-2 flex items-center justify-center gap-1 md:gap-2 lg:gap-3 xl:gap-4">
        <InfoHeaderNumber />
        <InfoHeaderLike user={Boolean(user)} />
        <InfoHeaderUser user={Boolean(user)} />
        {user?.role === "admin" && <InfoHeaderOrders />}
        <InfoHeaderCart />
        <BurgerMenu />
      </div>
    </div>
  )
}

export default InfoHeader
