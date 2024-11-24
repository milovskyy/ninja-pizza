import { CheckoutForm } from "@/components/CheckoutForm"
import { CheckoutModal } from "@/components/CheckoutModal"
import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import Navigation from "@/components/Navigation"

export default function Checkout() {
  return (
    <Container className="">
      <Navigation categoryName="Checkout" />
      <div className="flex flex-col items-center px-3 pb-2">
        <h1 className="mb-6 self-start text-3xl font-extrabold md:text-5xl">
          Checkout
        </h1>
        <CheckoutForm />
      </div>

      {/* <CheckoutModal /> */}

      <AppFooter />
    </Container>
  )
}
