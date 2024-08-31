"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

type PropsType = {
  category: string
  product?: string
}

function NavigationCategory({ category, product }: PropsType) {
  const router = useRouter()

  return (
    <div className="my-8 flex items-center gap-4 text-xs">
      <div
        onClick={() => router.back()}
        className="flex cursor-pointer items-center gap-3 rounded-full bg-stone-300/35 px-4 py-3 text-stone-500"
      >
        <IoIosArrowBack />
        <p className="tracking-wider">Back</p>
      </div>
      <Link
        href="/"
        className="rounded-full px-4 py-3 font-semibold tracking-wider hover:bg-stone-300/25"
      >
        Home
      </Link>
      <IoIosArrowForward className="text-stone-500" />

      {product ? (
        <>
          <Link
            href={`/category/${category.toLocaleLowerCase()}`}
            className="font-semibold tracking-wider text-stone-500"
          >
            {category}
          </Link>
          <IoIosArrowForward className="text-stone-500" />
          <div className="tracking-wider text-stone-500">{product}</div>
        </>
      ) : (
        <div className="tracking-wider text-stone-500">{category}</div>
      )}
    </div>
  )
}

export default NavigationCategory
