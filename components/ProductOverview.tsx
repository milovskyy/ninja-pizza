"use client"

import { ProductType } from "@/app/_types/TypeProduct"
import { cn } from "@/lib/utils"
import { ProductImage } from "./ProductImage"
import { ProductDescription } from "./ProductDescription"

type Props = {
  product: ProductType
}

export const ProductOverview = ({ product }: Props) => {
  return (
    <div className={cn("flex justify-between px-5")}>
      <ProductImage product={product} />
      <ProductDescription product={product} />
    </div>
  )
}
