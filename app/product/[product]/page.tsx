import { CarouselOfProducts } from "@/components/CarouselOfProducts"
import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"
import { OrderingInformation } from "@/components/OrderingInformation"
import { ProductDescription } from "@/components/ProductDescription"
import { ProductImage } from "@/components/ProductImage"
import { SideProducts } from "@/components/SideProducts"
import {
  getHitDrinks,
  getHitPizzas,
  getProductByLinkName,
  getProducts,
} from "@/lib/data-service"
import { notFound } from "next/navigation"

type PropsType = {
  params: { product: string }
}

export const revalidate = 10000

// METADATA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export default async function Page({ params }: PropsType) {
  const { product: productName } = params

  const [product, allProducts, hitDrinks, hitPizzas] = await Promise.all([
    getProductByLinkName(productName),
    getProducts(),
    getHitDrinks(),
    getHitPizzas(),
  ])

  if (!product) return notFound()

  const categoryProducts = allProducts.find(
    (obj) => obj.name === product.category,
  )?.products

  const index = categoryProducts?.findIndex((p) => p.name === product.name)

  return (
    <div className="flex flex-1 flex-col">
      <Navigation category={product.category} product={product.name} />
      <div className="relative">
        {index && categoryProducts && (
          <SideProducts index={index} categoryProducts={categoryProducts} />
        )}
        <Container className="my-6 flex items-center gap-20">
          <ProductImage product={product} />
          <ProductDescription product={product} />
        </Container>
      </div>
      <Container>
        <OrderingInformation />
        <CarouselOfProducts
          drinks={product.category === "Drinks" ? hitPizzas : hitDrinks}
        />
        <MobileAppBanner />
        <AppFooter />
      </Container>
    </div>
  )
}
