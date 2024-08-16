"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

type PropsType = {
  name: string
}

function NavigationCategory({ name }: PropsType) {
  const router = useRouter()

  return (
    <div className="my-8 flex items-center gap-4 text-xs font-bold">
      <div
        onClick={() => router.back()}
        className="flex cursor-pointer items-center gap-3 rounded-full bg-stone-300/35 px-4 py-3 text-stone-500"
        //   onClick={}
      >
        <IoIosArrowBack />
        <p>Back</p>
      </div>
      <Link href="/" className="rounded-full px-4 py-3 hover:bg-stone-300/25">
        Home
      </Link>
      <IoIosArrowForward className="text-stone-500" />
      <div className="text-stone-500">{name}</div>
    </div>
  )
}

export default NavigationCategory
