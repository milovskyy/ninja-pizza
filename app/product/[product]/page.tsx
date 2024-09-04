import { CarouselOfProducts } from "@/components/CarouselOfProducts"
import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"
import { OrderingInformation } from "@/components/OrderingInformation"
import { ProductDescription } from "@/components/ProductDescription"
import { ProductDetails } from "@/components/ProductDetails"
import { ProductImage } from "@/components/ProductImage"
import { SideProducts } from "@/components/SideProducts"
import { getProducts } from "@/lib/data-service"
import { categoryProductsByLinkname } from "@/lib/helperFunction"
import { notFound } from "next/navigation"

type PropsType = {
  params: { product: string }
}
// METADATA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// export const revalidate = 0

export default function Page({ params }: PropsType) {
  const productName = params.product

  return (
    <div className="flex flex-1 flex-col">
      <Navigation productName={productName} />
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
