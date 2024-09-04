"use client"

import { SideProducts } from "./SideProducts"
import { ProductImage } from "./ProductImage"
import { ProductDescription } from "./ProductDescription"
import { Container } from "./Container"
import { useProducts } from "@/app/_store/products"
import { categoryProductsByLinkname } from "@/lib/helperFunction"

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

  if (allProducts.length === 0) return <div>loading..................</div>

  return (
    <div className="relative">
      {product && (
        <>
          <SideProducts prevProduct={prevProduct} nextProduct={nextProduct} />
          <Container className="my-6 flex items-center gap-20">
            <ProductImage product={product} />
            <ProductDescription product={product} />
          </Container>
        </>
      )}
    </div>
  )
}
