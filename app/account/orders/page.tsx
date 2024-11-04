import { AccountEmptyBlock } from "@/components/account/AccountEmptyBlock"

function Orders() {
  return (
    <div className="">
      <h1 className="mb-7 text-5xl font-black">Orders</h1>
      <AccountEmptyBlock
        title="No orders yet"
        subtitle="Browse our menu to find your favorite pizza!"
        page="orders"
      />
    </div>
  )
}

export default Orders
