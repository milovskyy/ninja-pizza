"use client"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from "swiper/modules"
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

export default function MainSwiper() {
  const router = useRouter()

  return (
    <div className="relative">
      <Swiper
        style={{
          // @ts-ignore
          "--swiper-pagination-color": "#ffc700",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bottom": "6px",
          "--swiper-pagination-bullet-inactive-color": "black",
          "--swiper-pagination-bullet-inactive-size": "3px",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        loop={true}
        className="mb-1 overflow-auto pb-5 md:mb-5"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.url} className="">
            <div className="flex justify-center">
              <Image
                src={slide.url}
                alt="img"
                width={1200}
                height={460}
                className="cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
