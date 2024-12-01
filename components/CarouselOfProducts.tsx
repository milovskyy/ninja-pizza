"use client"
import { Button } from "./ui/button"
import { IoIosArrowBack, IoIosArrowForward, IoMdGlobe } from "react-icons/io"
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
import MenuCategory from "./MenuCategory"

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
    <div className="mb-6 mt-6 flex flex-col gap-8 px-1 md:mb-20 md:mt-14 lg:px-5">
      <div className="flex items-center justify-center sm:justify-between">
        <h2 className="text-2xl font-bold max-sm:self-center max-sm:text-center md:text-3xl">
          {productCategory !== "Drinks" ? "Add some drinks" : "Add a pizza"}
        </h2>
        <div className="flex gap-2 max-sm:hidden">
          <Link
            href={`/category/${productCategory === "Drinks" ? "pizza" : "drinks"}`}
            prefetch={true}
          >
            <Button className="bg-white font-bold">See all</Button>
          </Link>
          <div className="flex gap-2">
            <Button
              onClick={() => api?.scrollTo(current - 1)}
              className="h-10 w-10 bg-white p-0 md:h-12 md:w-12 md:p-0"
            >
              <IoIosArrowBack className="text-stone-900" />
            </Button>
            <Button
              onClick={() => api?.scrollTo(current + 1)}
              className="h-10 w-10 bg-white p-0 md:h-12 md:w-12 md:p-0"
            >
              <IoIosArrowForward className="text-stone-900" />
            </Button>
          </div>
        </div>
      </div>

      <Carousel
        className="grid max-w-full max-sm:hidden"
        setApi={setApi}
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="-ml-4 flex justify-between">
          {carouselProducts.map((product) => (
            <CarouselItem
              key={product.id}
              className="flex pl-5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <MenuCard product={product} key={product.id} carousel />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="sm:hidden">
        <MenuCategory
          products={carouselProducts}
          name={productCategory === "Drinks" ? "Pizza" : "Drinks"}
          limit={4}
          title={false}
        />
      </div>
    </div>
  )
}
