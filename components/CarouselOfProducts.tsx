"use client"

import { cn } from "@/utils/utils"
import { Button } from "./ui/button"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel"
import { useEffect, useState } from "react"
import MenuCard from "./MenuCard"
import Link from "next/link"
import { useProducts } from "@/app/_store/products"

type Props = {
  productName: string
}

export const CarouselOfProducts = ({ productName }: Props) => {
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

  const { allProducts } = useProducts()

  const productCategory = allProducts.find(
    (p) => p.linkName === productName,
  )?.category

  const carouselProducts = allProducts.filter(
    (obj) =>
      obj.category === (productCategory === "Drinks" ? "Pizza" : "Drinks") &&
      obj.hit === true,
  )

  if (!productCategory || !carouselProducts) return null

  return (
    <div className={cn("mb-20 mt-14 flex flex-col gap-8 px-5")}>
      <div className="flex items-center justify-between">
        <h2 className="text-[32px] font-bold">
          {productCategory !== "Drinks" ? "Add some drinks" : "Add a pizza"}
        </h2>
        <div className="flex gap-2">
          <Link
            href={`/category/${productCategory === "Drinks" ? "pizza" : "drinks"}`}
            prefetch={true}
          >
            <Button className="bg-white font-bold">See all</Button>
          </Link>
          <div className="flex gap-2">
            <Button
              onClick={() => api?.scrollTo(current - 1)}
              className="h-12 w-12 bg-white p-0"
            >
              <IoIosArrowBack className="text-stone-900" />
            </Button>
            <Button
              onClick={() => api?.scrollTo(current + 1)}
              className="h-12 w-12 bg-white p-0"
            >
              <IoIosArrowForward className="text-stone-900" />
            </Button>
          </div>
        </div>
      </div>
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="-ml-2 w-full">
          {carouselProducts.map((product) => (
            <CarouselItem key={product.id} className="flex basis-1/4 pl-2">
              <MenuCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
