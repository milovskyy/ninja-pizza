import { CheckoutForm } from "@/components/CheckoutForm"
import { CheckoutModal } from "@/components/CheckoutModal"
import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import Navigation from "@/components/Navigation"

export default function Checkout() {
  return (
    <Container className="">
      <Navigation categoryName="Checkout" />
      <div className="flex flex-col items-center pb-2 md:px-1 lg:px-3">
        <h1 className="mb-3 self-start text-2xl font-extrabold md:mb-6 md:text-4xl lg:text-5xl">
          Checkout
        </h1>
        <CheckoutForm />
      </div>

      {/* <CheckoutModal /> */}

      <AppFooter />
    </Container>
  )
}
