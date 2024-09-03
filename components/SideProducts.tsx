"use client"

import { ProductType, SeparateMenuType } from "@/app/_types/TypeProduct"
import { cn } from "@/lib/utils"
import { ProductImage } from "./ProductImage"
import { ProductDescription } from "./ProductDescription"
import { Container } from "./Container"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

type Props = {
  index: number
  categoryProducts: ProductType[]
}

export const SideProducts = ({ index, categoryProducts }: Props) => {
  console.log(categoryProducts)

  // const router = useRouter();
  // const [currentProductIndex, setCurrentProductIndex] = useState(0);

  // const { pathname, search } = router;

  // router.replace(${pathname}?index=${currentProductIndex}${search});
  // }, [currentProductIndex, router]);

  return (
    <div className={cn("justify-betweenbg-blue-100 flex")}>
      <Link
        href={`/product/${categoryProducts[index - 1]?.linkName}`}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-500 p-5"
      >
        {categoryProducts[index - 1]?.name}
      </Link>
      <Link
        href={`/product/${categoryProducts[index + 1]?.linkName}`}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 p-5"
      >
        {categoryProducts[index + 1]?.name}
      </Link>
    </div>
  )
}
