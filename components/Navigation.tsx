"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { Container } from "./Container"
import { useProducts } from "@/app/_store/products"

type PropsType = {
  productName?: string
  categoryName?: string
}

function Navigation({ productName, categoryName }: PropsType) {
  const router = useRouter()
  const { allProducts } = useProducts()

  const product = allProducts.find((p) => p.linkName === productName)

  return (
    <Container>
      <div className="my-2 flex items-center gap-2 text-xs sm:my-4 md:gap-4 lg:my-8">
        <div
          onClick={() => router.back()}
          className="flex cursor-pointer items-center gap-3 rounded-full bg-stone-300/35 px-4 py-3 text-stone-500"
        >
          <IoIosArrowBack />
          <p className="tracking-wider">Back</p>
        </div>
        <Link
          href="/"
          className="rounded-full px-3 py-3 font-semibold tracking-wider hover:bg-stone-300/25 max-sm:hidden md:px-4"
        >
          Home
        </Link>
        <IoIosArrowForward className="text-stone-500 max-sm:hidden" />

        {product ? (
          <>
            <Link
              href={`/category/${product.category.toLocaleLowerCase()}`}
              className="font-semibold tracking-wider text-stone-500 max-sm:hidden"
            >
              {product.category}
            </Link>
            <IoIosArrowForward className="text-stone-500" />
            <div className="tracking-wider text-stone-500">{product.name}</div>
          </>
        ) : (
          <div className="tracking-wider text-stone-500 max-sm:hidden">
            {categoryName}
          </div>
        )}
      </div>
    </Container>
  )
}

export default Navigation
