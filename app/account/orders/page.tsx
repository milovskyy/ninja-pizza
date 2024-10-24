import { AccountEmptyBlock } from "@/components/account/AccountEmptyBlock"

function Orders() {
  return (
    <div className="">
      <AccountEmptyBlock
        title="No orders yet"
        subtitle="Browse our menu to find your favorite pizza!"
        page="orders"
      />
    </div>
  )
}

export default Orders
