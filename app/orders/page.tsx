import { Container } from "@/components/Container"
import Navigation from "@/components/Navigation"
import { OrdersFiltersBlock } from "@/components/Orders/OrdersFiltersBlock"
import { OrdersMain } from "@/components/Orders/OrdersMain"

export default function Orders() {
  return (
    <Container className="mb-80">
      <Navigation categoryName="Orders" />
      <div className="flex flex-col items-center px-3 pb-2">
        <h1 className="mb-6 self-start text-5xl font-extrabold">
          {"Orders (Admin Use Only)"}
        </h1>
        <h3 className="mb-6 mt-3 text-xl font-bold text-red-400">
          This page is accessible only for user.role === admin. You are
          currently viewing it for demonstration purposes only
        </h3>
        <OrdersFiltersBlock />
        <OrdersMain />
      </div>
    </Container>
  )
}
