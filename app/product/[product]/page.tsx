import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"
import { OrderingInformation } from "@/components/OrderingInformation"
import { ProductOverview } from "@/components/ProductOverview"
import { getIngredients, getProductByLinkName } from "@/lib/data-service"
import { notFound } from "next/navigation"

type PropsType = {
  params: { product: string }
}

export const revalidate = 0

export default async function Page({ params }: PropsType) {
  const { product: productName } = params

  const product = await getProductByLinkName(productName)

  if (!product) return notFound()

  return (
    <Container className="flex flex-col">
      <Navigation category={product.category} product={product.name} />
      <ProductOverview product={product} />
      <OrderingInformation />
      <MobileAppBanner />
      <AppFooter />
    </Container>
  )
}
