"use client"

import React, { useRef, useState } from "react"
// Import Swiper React components
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
    <div className="relative z-[0] flex h-[500px] w-full">
      <Swiper
        style={{
          // @ts-ignore
          "--swiper-pagination-color": "#070909",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide
            onClick={() => router.push(`/news/${slide.link}`)}
            key={slide.url}
            // className="m-auto flex h-full items-center justify-center text-center"
          >
            <div className="flex justify-center">
              <Image
                src={slide.url}
                alt="img"
                // fill
                width={1200}
                height={460}
                className="cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide> */}
      </Swiper>
    </div>
  )
}
