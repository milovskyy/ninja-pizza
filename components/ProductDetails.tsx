"use client"

import { SideProducts } from "./SideProducts"
import { ProductImage } from "./ProductImage"
import { ProductDescription } from "./ProductDescription"
import { Container } from "./Container"
import { useProducts } from "@/app/_store/products"
import { categoryProductsByLinkname } from "@/utils/helperFunction"
import { notFound } from "next/navigation"
import { RotateLoader } from "react-spinners"
import { SideProduct } from "./SideProduct"

type Props = {
  productName: string
}

export const ProductDetails = ({ productName }: Props) => {
  const { allProducts } = useProducts()

  const products = categoryProductsByLinkname(allProducts, productName)
  const index = products.findIndex((p) => p.linkName === productName)
  const product = products[index]
  const prevProduct = products[index - 1]
  const nextProduct = products[index + 1]

  if (allProducts.length === 0)
    return (
      <div className="flex h-[400px] w-full items-center justify-center">
        <RotateLoader color="#ffc700" size={25} margin={30} />
      </div>
    )

  if (!product) return notFound()

  return (
    <div className="relative">
      {product && (
        <>
          {/* <SideProducts prevProduct={prevProduct} nextProduct={nextProduct} /> */}
          {prevProduct && <SideProduct type="prev" product={prevProduct} />}
          {nextProduct && <SideProduct type="next" product={nextProduct} />}

          <Container className="flex grid-cols-[3fr_4fr] flex-col px-4 md:grid md:gap-2 lg:gap-6 xl:gap-10 xl:px-8">
            <ProductImage product={product} />
            <ProductDescription product={product} />
          </Container>
        </>
      )}
    </div>
  )
}
