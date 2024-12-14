import { Container } from "@/components/Container"
import Navigation from "@/components/Navigation"
import { OrdersFiltersBlock } from "@/components/Orders/OrdersFiltersBlock"
import { OrdersMain } from "@/components/Orders/OrdersMain"

export default function Orders() {
  return (
    <Container className="mb-80">
      <Navigation categoryName="Orders" />
      <div className="flex flex-col items-center pb-2 lg:px-3">
        <h1 className="mb-6 self-start font-extrabold max-lg:self-center md:text-3xl lg:text-4xl xl:text-5xl">
          {"Orders (Admin Use Only)"}
        </h1>
        <h3 className="mb-6 mt-3 text-xl font-bold text-red-400 max-lg:self-center max-lg:text-center">
          This page is accessible only for user.role === admin. You are
          currently viewing it for demonstration purposes only
        </h3>
        <OrdersFiltersBlock />
        <OrdersMain />
      </div>
    </Container>
  )
}
