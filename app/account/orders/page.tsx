import { AccountEmptyBlock } from "@/components/account/AccountEmptyBlock"
import { UserOrdersList } from "@/components/account/UserOrdersList"
import { getUser, getUserOrders } from "@/utils/user-service"

export const revalidate = 1000
async function Orders() {
  const user = await getUser()
  const orders = (await getUserOrders(user.number.slice(2))) || []
  if (!user) {
    return null
  }
  return (
    <div className="">
      <div className="mb-7 flex items-center justify-between">
        <h1 className="text-5xl font-black">Orders</h1>
      </div>
      {orders?.length > 0 ? (
        <UserOrdersList orders={orders} />
      ) : (
        <AccountEmptyBlock
          title="No orders yet"
          subtitle="Browse our menu to find your favorite pizza!"
          page="orders"
        />
      )}
    </div>
  )
}

export default Orders
