import { Container } from "@/components/Container"
import Navigation from "@/components/Navigation"
import { OrdersMain } from "@/components/Orders/OrdersMain"

export default function Orders() {
  return (
    <Container className="mb-20">
      <Navigation categoryName="Orders" />
      <div className="flex flex-col items-center px-3 pb-2">
        <h1 className="mb-6 self-start text-5xl font-extrabold">Orders</h1>
        <OrdersMain />
      </div>
    </Container>
  )
}
