import { notFound } from "next/navigation"

import { getUser, getUserOrders } from "@/utils/user-service"

import { AccountEmptyBlock } from "@/components/account/AccountEmptyBlock"
import { UserOrdersList } from "@/components/account/UserOrdersList"

export const revalidate = 1000
async function Orders() {
  const user = await getUser()
  const orders = (await getUserOrders(user.number.slice(2), user.id)) || []
  if (!user) {
    return notFound()
  }
  return (
    <>
      <h1 className="mb-5 text-xl font-black max-md:mt-5 max-md:text-center sm:text-2xl md:text-4xl lg:text-5xl">
        Orders
      </h1>
      {orders?.length > 0 ? (
        <UserOrdersList orders={orders} />
      ) : (
        <AccountEmptyBlock
          title="No orders yet"
          subtitle="Browse our menu to find your favorite pizza!"
          page="orders"
        />
      )}
    </>
  )
}

export default Orders
