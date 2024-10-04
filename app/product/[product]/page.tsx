import { CarouselOfProducts } from "@/components/CarouselOfProducts"
import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"
import { OrderingInformation } from "@/components/OrderingInformation"

import { ProductDetails } from "@/components/ProductDetails"

type PropsType = {
  params: { product: string }
}

export default function Page({ params }: PropsType) {
  const productName = params.product

  return (
    <div className="flex flex-1 flex-col">
      <Container>
        <Navigation productName={productName} />
      </Container>
      <ProductDetails productName={productName} />
      <Container>
        <OrderingInformation />
        <CarouselOfProducts productName={productName} />
        <MobileAppBanner />
        <AppFooter />
      </Container>
    </div>
  )
}
