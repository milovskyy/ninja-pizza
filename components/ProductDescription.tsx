import { ProductType } from "@/app/_types/TypeProduct"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { GoHeart } from "react-icons/go"

type Props = {
  product: ProductType
}

export const ProductDescription = ({ product }: Props) => {
  const { name, ingredients, price, size, isNew, hit } = product
  return (
    <div className={cn("flex items-center justify-center")}>
      <div className={cn("flex flex-col gap-4")}>
        {(isNew || hit) && (
          <div
            className={cn(
              "mr-auto rounded-lg px-2 py-[3px] text-sm font-bold",
              isNew
                ? "bg-[#ddf0ce] text-[#55b30b]"
                : "bg-[#fad5d5] text-[#e72e2e]",
            )}
          >
            {isNew ? "NEW" : "HIT"}
          </div>
        )}

        <h1 className="text-[40px] font-extrabold">{name}</h1>
        <div>ingredient block</div>
        <div className="flex items-center gap-3">
          <div className="mr-3 flex flex-col">
            <div className="text-2xl font-bold">{price} UAH</div>
            <div className="text-sm font-semibold">{size}</div>
          </div>
          <Button className="p-6 text-[16px] hover:bg-[#ffc700]">
            Add to cart
          </Button>
          <div className="cursor-pointer rounded-full bg-white p-3 text-stone-500 hover:text-red-600">
            <GoHeart size="24px" className="" />
          </div>
        </div>
      </div>
    </div>
  )
}
