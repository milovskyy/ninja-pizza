"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image"
import { useRouter } from "next/navigation"

const slides = [
  {
    url: "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/slider/slider5.webp",
    link: "/slide1",
  },
  {
    url: "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/slider/slider2.webp",
    link: "/slide2",
  },
  {
    url: "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/slider/slider3.png",
    link: "/slide3",
  },
  {
    url: "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/slider/slider4.webp",
    link: "/slide4",
  },
  {
    url: "https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/slider/slider1.webp",
    link: "/slide5",
  },
]

export default function MainCarousel() {
  const router = useRouter()

  return (
    <Carousel
      className="rounded-[40px]"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="">
        {slides.map((slide) => (
          <CarouselItem
            // onClick={() => router.push(`/news/${slide.link}`)}
            key={slide.url}
            className=""
          >
            <div className="relative flex h-[300px] w-[600px] justify-center xl:h-[500px] xl:w-full">
              <Image
                src={slide.url}
                alt="img"
                fill
                className="cursor-pointer object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
