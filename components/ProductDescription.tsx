// "use client"
// УБРАТЬ ПОТОМ ЮЗ КЛИЕНТ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { IngredientType, ProductType } from "@/app/_types/TypeProduct"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { GoHeart } from "react-icons/go"
import { PlusMinusBlock } from "./PlusMinusBlock"
import { Ingredients } from "./Ingredients"
import { useIngredients } from "@/app/_store/ingredients"

type Props = {
  product: ProductType
}

export const ProductDescription = ({ product }: Props) => {
  const { name, ingredients, price, size, isNew, hit } = product

  const { allIngredients } = useIngredients()

  const productIngredients = ingredients
    ?.map((ing) => allIngredients.find((i) => i.name === ing))
    .filter((item) => item !== undefined) as IngredientType[]

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
        {!!productIngredients?.length && (
          <Ingredients productIngredients={productIngredients} />
        )}
        <div className="mt-4 flex items-center gap-3">
          <div className="mr-3 flex flex-col">
            <div className="text-2xl font-black">{price} UAH</div>
            <div className="text-sm font-semibold">{size}</div>
          </div>
          <Button className="text-[16px]">Add to cart</Button>
          <PlusMinusBlock number={3} />

          <Button className="h-[52px] w-[52px] bg-white p-3 text-stone-500 hover:bg-white hover:text-red-600">
            <GoHeart size="24px" className="relative top-[1px]" />
          </Button>
        </div>
      </div>
    </div>
  )
}
