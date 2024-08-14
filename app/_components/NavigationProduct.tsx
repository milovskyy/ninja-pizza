"use client"

import Link from "next/link"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

type PropsType = {
  name: string
}

function NavigationProduct({ name }: PropsType) {
  return (
    <div className="my-10 flex items-center gap-4 text-xs font-bold">
      <Link
        href="/"
        className="flex items-center gap-3 rounded-full bg-stone-300/25 p-2 px-4 text-stone-500"
        //   onClick={}
      >
        <IoIosArrowBack />
        <div>Back</div>
      </Link>
      <Link href="/" className="rounded-full p-2 px-4 hover:bg-stone-300/25">
        Home
      </Link>
      <IoIosArrowForward className="text-stone-500" />
      <div className="text-stone-500">{name}</div>
    </div>
  )
}

export default NavigationProduct
