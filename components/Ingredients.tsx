"use client"

import { IngredientType } from "@/app/_types/TypeProduct"
import { cn } from "@/lib/utils"
import { IngredientItem } from "./IngredientItem"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {
  ingredients: IngredientType[]
}

export const Ingredients = ({ ingredients }: Props) => {
  return (
    <div className="overflow-hidden rounded-2xl">
      <Carousel className="">
        <CarouselContent className="flex">
          {ingredients.map((ingredient) => (
            <CarouselItem key={ingredient.id} className="basis-[18%]">
              <IngredientItem ingredient={ingredient} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-0 top-[-30px] bg-red-400">
          <CarouselPrevious className="bg-stone-200" />
          <CarouselNext className="bg-stone-200" />
        </div>
      </Carousel>
    </div>

    // <div className={cn("flex flex-1 gap-2 bg-red-50")}>
    //   {ingredients.map((ingredient) => (
    //     <IngredientItem key={ingredient.id} ingredient={ingredient} />
    //   ))}
    // </div>
  )
}
