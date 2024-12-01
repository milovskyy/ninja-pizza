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
        "absolute top-1/2 z-50 hidden w-full -translate-y-1/2 items-center justify-between 2xl:flex",
      )}
    >
      {!prevProduct && <div></div>}
      {prevProduct && <SideProduct type="prev" product={prevProduct} />}
      {nextProduct && <SideProduct type="next" product={nextProduct} />}
    </div>
  )
}

{
  /* <div className={cn("hidden justify-between 2xl:block")}>
{prevProduct && (
  <Link
    href={`/product/${prevProduct?.linkName}`}
    scroll={false}
    className="group absolute left-0 top-1/2 z-50 flex -translate-x-1/3 -translate-y-1/2 items-center hover:min-h-[230px] hover:min-w-[230px] hover:translate-x-0"
  >
    <Image
      src={prevProduct.image}
      alt={prevProduct.name}
      width={230}
      height={230}
      className="opacity-50 group-hover:hidden"
      priority
    />
    <div className="hidden h-[120px] w-[300px] overflow-hidden rounded-r-2xl bg-main group-hover:flex">
      <Image
        src={prevProduct.image}
        alt={prevProduct.name}
        width={170}
        height={170}
        className="absolute -translate-x-1/2 -translate-y-[15%]"
        priority
      />
      <div className="flex flex-1 flex-col gap-3 self-center pr-5">
        <div className="ml-24 flex max-w-[200px] flex-col gap-1">
          <p className="font-bold">{prevProduct.name}</p>
          <p className="flex gap-2">
            <div className="text-xl font-bold text-stone-900">
              {prevProduct.price}
            </div>
            <p className="text-sm font-medium text-stone-600">UAH</p>
          </p>
        </div>
      </div>
    </div>
  </Link>
)}
{nextProduct && (
  <Link
    href={`/product/${nextProduct?.linkName}`}
    scroll={false}
    className="group absolute right-0 top-1/2 z-50 flex min-h-[230px] min-w-[230px] -translate-y-1/2 translate-x-1/3 items-center hover:translate-x-0"
  >
    <Image
      src={nextProduct.image}
      alt={nextProduct.name}
      width={230}
      height={230}
      className="relative opacity-50 group-hover:hidden"
      priority
    />
    <div className="hidden h-[120px] w-[300px] justify-end overflow-hidden rounded-l-2xl bg-main group-hover:flex">
      <Image
        src={nextProduct.image}
        alt={nextProduct.name}
        width={170}
        height={170}
        className="absolute -translate-y-[15%] translate-x-1/2"
        priority
      />
      <div className="flex flex-1 flex-col items-end justify-end gap-3 self-center pl-7">
        <div className="flex max-w-[180px] flex-col gap-1 self-start">
          <p className="font-bold">{nextProduct.name}</p>
          <p className="flex gap-2">
            <div className="text-xl font-bold text-stone-900">
              {nextProduct.price}
            </div>
            <p className="text-sm font-medium text-stone-600">UAH</p>
          </p>
        </div>
      </div>
    </div>
  </Link>
)}
</div> */
}
