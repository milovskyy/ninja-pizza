"use client"

import { IngredientType } from "@/app/_types/TypeProduct"
import { IngredientItem } from "./IngredientItem"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

type Props = {
  productIngredients: IngredientType[]
}

export const Ingredients = ({ productIngredients }: Props) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  if (!productIngredients) return null

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-sm tracking-wide text-stone-400">Ingredients:</h3>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => api?.scrollTo(current - 1)}
            className="hover:bg-background"
          >
            <IoIosArrowBack className="text-stone-500" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => api?.scrollTo(current + 1)}
            className="hover:bg-background"
          >
            <IoIosArrowForward className="text-stone-500" />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl">
        <Carousel
          className="max-w-[720px w-[720px]"
          setApi={setApi}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="flex w-full justify-start">
            {productIngredients.map((productIngredients) => (
              <CarouselItem
                key={productIngredients?.id}
                className="basis-[18.2%]"
              >
                <IngredientItem ingredient={productIngredients} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
