// "use client"

import { getUser } from "@/utils/users-service"
import InfoHeaderCart from "./InfoHeaderCart"
import InfoHeaderLike from "./InfoHeaderLike"
import InfoHeaderNumber from "./InfoHeaderContacts"
import InfoHeaderOrders from "./InfoHeaderOrders"
import InfoHeaderUser from "./InfoHeaderUser"

async function InfoHeader() {
  const user = await getUser()
  return (
    <div className="flex flex-1 justify-end">
      <div className="ml-20 flex items-center justify-center gap-4">
        <InfoHeaderNumber />
        <InfoHeaderLike user={Boolean(user)} />
        <InfoHeaderUser user={Boolean(user)} />
        {/* {user?.role === "admin" && <InfoHeaderOrders />} */}
        <InfoHeaderOrders />
        <InfoHeaderCart />
      </div>
    </div>
  )
}

export default InfoHeader
