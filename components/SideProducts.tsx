import { ProductType, SeparateMenuType } from "@/app/_types/Types"
import { cn } from "@/utils/utils"
import Image from "next/image"

import Link from "next/link"
import { SideProduct } from "./SideProduct"
import { Divide } from "lucide-react"

type Props = {
  prevProduct?: ProductType
  nextProduct?: ProductType
}

export const SideProducts = ({ prevProduct, nextProduct }: Props) => {
  return (
    <div
      className={cn(
        "absolute top-1/2 z-10 hidden w-full -translate-y-1/2 items-center justify-between bg-red-100 2xl:flex",
      )}
    >
      {!prevProduct && <div></div>}
      {prevProduct && <SideProduct type="prev" product={prevProduct} />}
      {nextProduct && <SideProduct type="next" product={nextProduct} />}
    </div>
  )
}
