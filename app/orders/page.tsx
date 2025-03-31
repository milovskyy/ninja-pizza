import { Container } from "@/components/Container"
import Navigation from "@/components/Navigation"
import { OrdersFiltersBlock } from "@/components/Orders/OrdersFiltersBlock"
import { OrdersMain } from "@/components/Orders/OrdersMain"

export default function Orders() {
  return (
    <Container className="mb-80">
      <Navigation categoryName="Orders" />
      <div className="flex flex-col items-center pb-2 lg:px-3">
        <OrdersFiltersBlock />
        <OrdersMain />
      </div>
    </Container>
  )
}
