import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"
import { ProductOverview } from "@/components/ProductOverview"
import { getProductByLinkName } from "@/lib/data-service"
import { notFound } from "next/navigation"

type PropsType = {
  params: { product: string }
}

export const revalidate = 0

export default async function Page({ params }: PropsType) {
  // console.log(params)
  const { product: productName } = params

  const product = await getProductByLinkName(productName)

  if (!product) return notFound()

  return (
    <Container className="flex flex-1 flex-col">
      <Navigation category={product.category} product={product.name} />

      <ProductOverview product={product} />
      <MobileAppBanner />
      {/* <div className="h-full flex-col bg-red-100">
        <div className="">{product?.name}</div>
      </div> */}
      <AppFooter />
    </Container>
  )
}
