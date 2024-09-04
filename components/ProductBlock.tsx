"use client"

import { useProducts } from "@/app/_store/products"
import { categoryProductsByLinkname } from "@/lib/helperFunction"
import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { Container } from "./Container"
import { SideProducts } from "./SideProducts"
import { ProductImage } from "./ProductImage"
import { ProductDescription } from "./ProductDescription"
import { notFound } from "next/navigation"

type Props = {
  productName: string
}

export const ProductBlock = ({ productName }: Props) => {
  const { products: AllProducts, fetchProducts } = useProducts()

  useEffect(() => {
    if (AllProducts.length === 0) {
      fetchProducts()
    }
  }, [AllProducts, fetchProducts])

  const products = categoryProductsByLinkname(AllProducts, productName)
  const index = products.findIndex((p) => p.linkName === productName)
  const prevProduct = products[index - 1]
  const nextProduct = products[index + 1]
  const product = products[index]

  console.log(AllProducts)
  if (!product) return <div>loading</div>
  return (
    <div className={cn("")}>
      <SideProducts prevProduct={prevProduct} nextProduct={nextProduct} />
      <Container className="my-6 flex items-center gap-20">
        <ProductImage product={product} />
        <ProductDescription product={product} />
      </Container>
    </div>
  )
}
