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
        "group absolute top-1/2 z-10 hidden h-[280px] w-[140px] max-w-[200px] -translate-y-1/2 items-center overflow-hidden hover:overflow-visible 2xl:flex",
        type === "prev" && "left-0",
        type === "next" && "right-0",
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
          "relative hidden h-[130px] min-w-[300px] bg-main group-hover:flex",
          type === "prev" && "rounded-r-2xl",
          type === "next" && "-translate-x-[160px] rounded-l-2xl",
        )}
      >
        <div
          className={cn(
            "absolute top-1/2 flex h-[180px] w-[90px] -translate-y-1/2 items-center justify-center overflow-hidden",
            type === "prev" && "left-0",
            type === "next" && "right-0",
          )}
        >
          <div
            className={cn(
              "relative aspect-square h-36 scale-125",
              type === "prev" && "-translate-x-1/3",
              type === "next" && "translate-x-1/3",
            )}
          >
            <Image
              src={product.image}
              alt={product.name}
              className="object-cover"
              fill
              priority
            />
          </div>
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
    </Link>
  )
}

// ДО пробы сделать сайд продукты отдельными. а не в блоке
{
  /* <Link
href={`/product/${product?.linkName}`}
scroll={false}
className={cn(
  "group h-[280px] w-[140px] max-w-[200px] items-center overflow-hidden hover:overflow-visible",
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
    "absolute top-1/2 z-[100] flex h-[130px] w-[300px] -translate-y-1/2 bg-main hover:flex group-hover:flex",
    type === "prev" && "rounded-r-2xl",
    type === "next" && "-translate-x-[160px] rounded-l-2xl",
  )}
>
  <div
    className={cn(
      "absolute top-1/2 flex h-[180px] w-[90px] -translate-y-1/2 items-center justify-center overflow-hidden",
      type === "prev" && "left-0",
      type === "next" && "right-0",
    )}
  >
    <div
      className={cn(
        "relative aspect-square h-36 scale-125",
        type === "prev" && "-translate-x-1/3",
        type === "next" && "translate-x-1/3",
      )}
    >
      <Image
        src={product.image}
        alt={product.name}
        className="object-cover"
        fill
        priority
      />
    </div>
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
</Link> */
}
