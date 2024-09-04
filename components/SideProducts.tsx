"use client"

import { ProductType, SeparateMenuType } from "@/app/_types/TypeProduct"
import { cn } from "@/lib/utils"
import Image from "next/image"

import Link from "next/link"
import { useRouter } from "next/navigation"

type Props = {
  prevProduct?: ProductType
  nextProduct?: ProductType
}

export const SideProducts = ({ prevProduct, nextProduct }: Props) => {
  const router = useRouter()

  return (
    <div className={cn("justify-betweenbg-blue-100 flex")}>
      {prevProduct && (
        <Link
          href={`/product/${prevProduct?.linkName}`}
          scroll={false}
          // onClick={() => router.push(`/product/${prevProduct?.linkName}`)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-500 p-5"
        >
          <div>
            <Image
              src={prevProduct?.image}
              alt={prevProduct?.name}
              width={150}
              height={150}
            />
          </div>
        </Link>
      )}
      {nextProduct && (
        <Link
          href={`/product/${nextProduct?.linkName}`}
          scroll={false}
          // onClick={() => router.push(`/product/${nextProduct?.linkName}`)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 p-5"
        >
          <div>
            <Image
              src={nextProduct?.image}
              alt={nextProduct?.name}
              width={150}
              height={150}
            />
          </div>
        </Link>
      )}
    </div>
  )
}
