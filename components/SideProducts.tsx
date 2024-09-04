import { ProductType, SeparateMenuType } from "@/app/_types/TypeProduct"
import { cn } from "@/lib/utils"
import Image from "next/image"

import Link from "next/link"

type Props = {
  prevProduct?: ProductType
  nextProduct?: ProductType
}

export const SideProducts = ({ prevProduct, nextProduct }: Props) => {
  return (
    <div className={cn("justify-betweenbg-blue-100 flex")}>
      {prevProduct && (
        <Link
          href={`/product/${prevProduct?.linkName}`}
          scroll={false}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-5"
        >
          <div>
            <Image
              src={prevProduct.image}
              alt={prevProduct.name}
              width={150}
              height={150}
              className="opacity-50"
            />
          </div>
        </Link>
      )}
      {nextProduct && (
        <Link
          href={`/product/${nextProduct?.linkName}`}
          scroll={false}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-5"
        >
          <div>
            <Image
              src={nextProduct.image}
              alt={nextProduct.name}
              width={150}
              height={150}
              className="opacity-50"
            />
          </div>
        </Link>
      )}
    </div>
  )
}
