"use client"

import { ProductType, SeparateMenuType } from "@/app/_types/TypeProduct"
import { cn } from "@/lib/utils"
import Image from "next/image"

import Link from "next/link"

type Props = {
  productName?: string
  products: ProductType[]
}

export const SideProducts = ({ productName, products }: Props) => {
  const index = products?.findIndex((p) => p.linkName === productName)

  return (
    <div className={cn("justify-betweenbg-blue-100 flex")}>
      <Link
        href={`/product/${products[index - 1]?.linkName}`}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-500 p-5"
      >
        <div>
          <Image
            src={products[index - 1]?.image}
            alt={products[index - 1]?.name}
            width={150}
            height={150}
          />
        </div>
      </Link>
      <Link
        href={`/product/${products[index + 1]?.linkName}`}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 p-5"
      >
        <div>
          <Image
            src={products[index + 1]?.image}
            alt={products[index + 1]?.name}
            width={150}
            height={150}
          />
        </div>
      </Link>
    </div>
  )
}
