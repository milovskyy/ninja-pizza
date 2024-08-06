"use client"

import Link from "next/link"
import Button from "./ui/Button"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { cn } from "@/lib/utils"

type PropsType = {
  category: {
    image: string
    label: string
    link: string
    color: string
  }
  separate?: boolean
}

function MenuCategoriesElement({ category, separate }: PropsType) {
  const { image, label, link, color } = category

  const router = useRouter()

  return (
    <div
      // className={`${color} flex h-[380px] w-[200px] flex-col items-center p-6 pb-10`}
      className={cn(
        "flex h-[380px] w-[200px] flex-col items-center p-6 pb-10",
        color,
        separate && "w-full rounded-3xl",
      )}
      onClick={() => {
        router.push(`/category/${link}`)
      }}
    >
      <div
        className={twMerge(
          "relative mb-3 aspect-square max-h-[150px] w-[150px] flex-1 cursor-pointer",
          label === "Desserts" && "relative bottom-2 scale-[1.1]",
        )}
      >
        <Image src={image} alt="img" fill className="object-cover" />
      </div>

      <div className="mt-10 cursor-pointer text-center text-xl font-bold">
        {label}
      </div>
      <Link href={`/category/${link}`} className="mt-10">
        <Button className="h-[40px] max-h-[40px] w-[104px] max-w-[104px] cursor-pointer bg-stone-50 font-bold">
          Choose
        </Button>
      </Link>
    </div>
  )
}

export default MenuCategoriesElement
