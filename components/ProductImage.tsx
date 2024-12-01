import { PRODUCT_IMAGE_URL } from "@/app/_constants/constants"
import { ProductType } from "@/app/_types/Types"
import { cn } from "@/utils/utils"
import Image from "next/image"

type Props = {
  product: ProductType
}

export const ProductImage = ({ product }: Props) => {
  const { image, vegetarian, spicy, isNew, hit } = product

  return (
    <div className={cn("relative max-xs:px-10 xs:px-16 sm:px-28 md:px-2")}>
      <div className="relative aspect-square w-full">
        <Image src={image} alt="img" fill className="object-cover" />
        {(isNew || hit) && (
          <div
            className={cn(
              "absolute left-0 top-2 flex w-12 items-center justify-center rounded-md px-2 py-1 text-sm font-bold xs:top-4",
              isNew
                ? "bg-[#ddf0ce] text-[#55b30b]"
                : "bg-[#fad5d5] text-[#e72e2e]",
            )}
          >
            {isNew ? "NEW" : "HIT"}
          </div>
        )}
        {(vegetarian || spicy) && (
          <div
            className={cn(
              "absolute right-0 top-2 flex items-center justify-center gap-3 rounded-[15px_15px_15px_70px] p-2 pl-4 pr-3",
              vegetarian ? "bg-[#ddf0ce]" : "bg-[#fad5d5]",
            )}
          >
            <div className="relative aspect-square w-6">
              <Image
                src={`${PRODUCT_IMAGE_URL}filters/${vegetarian ? "vegetarian" : "spicy"}.png`}
                alt="img"
                fill
                className="object-cover"
              />
            </div>
            <p
              className={cn(
                "font-semibold",
                vegetarian ? "text-green-600" : "text-red-600",
              )}
            >
              {vegetarian ? "Veggie" : "Spicy"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
