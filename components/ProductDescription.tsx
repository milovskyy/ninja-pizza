// "use client"
// УБРАТЬ ПОТОМ ЮЗ КЛИЕНТ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { ProductType } from "@/app/_types/TypeProduct"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { GoHeart } from "react-icons/go"
import { PlusMinusBlock } from "./PlusMinusBlock"
import { getIngredients } from "@/lib/data-service"
import { Ingredients } from "./Ingredients"

type Props = {
  product: ProductType
}

export const ProductDescription = async ({ product }: Props) => {
  const allIngredients = await getIngredients()

  const { name, ingredients, price, size, isNew, hit } = product

  // УБРАТЬ ПОТОМ ЮЗ КЛИЕНТ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <div className={cn("flex flex-col items-center justify-center")}>
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
      <div className={cn("flex flex-1 flex-col gap-4")}>
        <h1 className="text-[44px] font-extrabold">{name}</h1>
        <Ingredients ingredients={allIngredients} />
        <div className="flex items-center gap-3">
          <div className="mr-3 flex flex-col">
            <div className="text-2xl font-black">{price} UAH</div>
            <div className="text-sm font-semibold">{size}</div>
          </div>
          <Button className="text-[16px]">Add to cart</Button>
          <PlusMinusBlock number={3} />

          <div className="cursor-pointer rounded-full bg-white p-3 text-stone-500 hover:text-red-600">
            <GoHeart size="24px" className="relative top-[1px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
