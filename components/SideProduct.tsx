import { ProductType } from "@/app/_types/Types"
import { cn } from "@/utils/utils"
import Image from "next/image"
import Link from "next/link"

type Props = {
  product: ProductType
  type: "prev" | "next"
}

export const SideProduct = ({ product, type }: Props) => {
  return (
    <Link
      href={`/product/${product?.linkName}`}
      scroll={false}
      className={cn(
        "group h-[280px] w-[140px] items-center overflow-hidden hover:overflow-visible",
        // type === "prev" ? "-ml-28" : "translate-x-1/2",
      )}
    >
      <div
        className={cn(
          "relative aspect-square h-full w-[280px] group-hover:hidden",
          type === "prev" && "-translate-x-1/2",
        )}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={cn("object-cover opacity-50")}
          priority
        />
      </div>
      <div
        className={cn(
          "relative top-1/2 hidden h-[130px] -translate-y-1/2 bg-main hover:flex group-hover:flex",
          type === "prev" && "w-[300px] rounded-r-2xl",
          // тут изменил ширину. раньше было всё ок
          type === "next" && "w-[280px] -translate-x-1/2 rounded-l-2xl",
        )}
      >
        <div
          className={cn(
            "absolute aspect-square h-36 scale-125",
            type === "prev" && "-translate-x-1/2",
            type === "next" && "translate-x-[150%]",
          )}
        >
          <Image src={product.image} alt={product.name} fill priority />
        </div>

        <div className="self-center pr-4">
          <div
            className={cn(
              "flex flex-col gap-1",
              type === "prev" && "ml-24 max-w-[200px]",
              type === "next" && "ml-4 max-w-[190px]",
            )}
          >
            <p className="font-bold">{product.name}</p>
            <p className="flex gap-2">
              <div className="text-xl font-bold text-stone-900">
                {product.price}
              </div>
              <p className="text-sm font-medium text-stone-600">UAH</p>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="relative top-1/2 hidden h-[170px] w-[300px] -translate-x-1/2 -translate-y-1/2 justify-end overflow-hidden rounded-l-2xl bg-main group-hover:flex"></div> */}
    </Link>
    // <Link
    //   href={`/product/${product?.linkName}`}
    //   scroll={false}
    //   className="group flex min-h-[230px] min-w-[230px] translate-x-1/2 items-center hover:translate-x-0"
    // >
    //   <Image
    //     src={product.image}
    //     alt={product.name}
    //     width={230}
    //     height={230}
    //     className="relative opacity-50 group-hover:hidden"
    //     priority
    //   />
    //   <div className="hidden h-[120px] w-[300px] justify-end overflow-hidden rounded-l-2xl bg-main group-hover:flex">
    //     <Image
    //       src={product.image}
    //       alt={product.name}
    //       width={170}
    //       height={170}
    //       className="absolute -translate-y-[15%] translate-x-1/2"
    //       priority
    //     />
    //     <div className="flex flex-1 flex-col items-end justify-end gap-3 self-center pl-7">
    //       <div className="flex max-w-[180px] flex-col gap-1 self-start">
    //         <p className="font-bold">{product.name}</p>
    //         <p className="flex gap-2">
    //           <div className="text-xl font-bold text-stone-900">
    //             {product.price}
    //           </div>
    //           <p className="text-sm font-medium text-stone-600">UAH</p>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </Link>
  )
}

{
  /* <Link
  href={`/product/${product?.linkName}`}
  scroll={false}
  className="group flex min-h-[230px] min-w-[230px] translate-x-1/2 items-center hover:translate-x-0"
>
  <Image
    src={product.image}
    alt={product.name}
    width={230}
    height={230}
    className="relative opacity-50 group-hover:hidden"
    priority
  />
  <div className="hidden h-[120px] w-[300px] justify-end overflow-hidden rounded-l-2xl bg-main group-hover:flex">
    <Image
      src={product.image}
      alt={product.name}
      width={170}
      height={170}
      className="absolute -translate-y-[15%] translate-x-1/2"
      priority
    />
    <div className="flex flex-1 flex-col items-end justify-end gap-3 self-center pl-7">
      <div className="flex max-w-[180px] flex-col gap-1 self-start">
        <p className="font-bold">{product.name}</p>
        <p className="flex gap-2">
          <div className="text-xl font-bold text-stone-900">
            {product.price}
          </div>
          <p className="text-sm font-medium text-stone-600">UAH</p>
        </p>
      </div>
    </div>
  </div>
</Link> */
}
