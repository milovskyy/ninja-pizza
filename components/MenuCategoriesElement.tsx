"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { cn } from "@/utils/utils"
import { Button } from "@/components/ui/button"
import { CategoryType } from "@/app/_types/TypeProduct"

type PropsType = {
  category: CategoryType
  separate?: boolean
}

function MenuCategoriesElement({ category, separate }: PropsType) {
  const { image, name, linkName, color } = category

  const router = useRouter()

  return (
    <div
      className={cn(
        "flex h-[380px] w-[200px] flex-col items-center p-6 pb-10",
        separate && "w-full rounded-3xl",
      )}
      style={{ backgroundColor: color }}
      onClick={() => {
        router.push(`/category/${linkName}`)
      }}
    >
      <div
        className={twMerge(
          "relative mb-3 aspect-square max-h-[150px] w-[150px] flex-1 cursor-pointer",
          name === "Desserts" && "relative bottom-2 scale-[1.1]",
        )}
      >
        <Image src={image} alt="img" fill className="object-cover" />
      </div>

      <div className="mt-10 cursor-pointer text-center text-xl font-bold">
        {name}
      </div>
      <Link href={`/category/${linkName}`} className="mt-10">
        <Button className="bg-stone-50 font-bold">Choose</Button>
      </Link>
    </div>
  )
}

export default MenuCategoriesElement
