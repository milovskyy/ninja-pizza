import { CarouselOfProducts } from "@/components/CarouselOfProducts"
import { Container } from "@/components/Container"
import AppFooter from "@/components/footer/AppFooter"
import MobileAppBanner from "@/components/MobileAppBanner"
import Navigation from "@/components/Navigation"
import { OrderingInformation } from "@/components/OrderingInformation"
import { ProductDescription } from "@/components/ProductDescription"
import { ProductImage } from "@/components/ProductImage"
import { SideProducts } from "@/components/SideProducts"
import { getProducts } from "@/lib/data-service"
import { categoryProductsByLinkname } from "@/lib/helperFunction"
import Image from "next/image"
import { notFound } from "next/navigation"

type PropsType = {
  params: { product: string }
}
// METADATA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const revalidate = 1000
// export const revalidate = 0

export default async function Page({ params }: PropsType) {
  const { product: productName } = params

  const AllProducts = await getProducts()

  const products = categoryProductsByLinkname(AllProducts, productName)
  const index = products.findIndex((p) => p.linkName === productName)
  const prevProduct = products[index + 1]

  const product = products.find((p) => p.linkName === productName)

  if (!product) notFound()

  const carouselProducts = AllProducts.filter(
    (obj) =>
      obj.category === (product.category === "Drinks" ? "Pizza" : "Drinks") &&
      obj.hit === true,
  )
  // /////////////// ПОРАБОТАТЬ С КАРУСЕЛЬЬЮ. А ТО ТАМ ЫСЁ ПОД ДРИНКС

  return (
    <div className="flex flex-1 flex-col">
      <Navigation category={product.category} product={product.name} />
      <div className="relative">
        <SideProducts productName={productName} products={products} />
        <Container className="my-6 flex items-center gap-20">
          <ProductImage product={product} />
          <ProductDescription product={product} />
        </Container>
      </div>
      <Container>
        {prevProduct && (
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
            />
          </div>
        )}
        <OrderingInformation />
        <CarouselOfProducts products={carouselProducts} />
        <MobileAppBanner />
        <AppFooter />
      </Container>
    </div>
  )
}
