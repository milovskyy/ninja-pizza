import { PRODUCT_IMAGE_URL } from "@/app/_constants/constants"
import { ProductType } from "@/app/_types/TypeProduct"
import { cn } from "@/lib/utils"
import Image from "next/image"

type Props = {
  product: ProductType
}

export const ProductImage = ({ product }: Props) => {
  const { name, category, alcohol, vegetarian, spicy } = product

  return (
    <div className={cn("relative p-10")}>
      <div className="relative aspect-square w-[400px]">
        <Image
          src={`${PRODUCT_IMAGE_URL}/products/${category.toLowerCase()}/${name.replace(/\s+/g, "%20")}.${alcohol ? "png" : "webp"}`}
          alt="img"
          fill
          className="object-cover"
        />
      </div>
      {(vegetarian || spicy) && (
        <div
          className={cn(
            "absolute left-0 top-[40px] flex items-center justify-center gap-3 rounded-[15px_15px_70px_15px] p-2 pl-3 pr-6",
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
  )
}
