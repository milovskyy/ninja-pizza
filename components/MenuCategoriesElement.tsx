"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { cn } from "@/utils/utils"
import { Button } from "@/components/ui/button"
import { CategoryType } from "@/app/_types/Types"

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
        "flex flex-col items-center p-2 pb-10 xl:p-6",
        separate && "w-full rounded-3xl",
      )}
      style={{ backgroundColor: color }}
      onClick={() => {
        router.push(`/category/${linkName}`)
      }}
    >
      <div
        className={cn(
          "relative mb-3 aspect-square h-16 w-16 flex-1 cursor-pointer xs:h-24 xs:w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-44 lg:w-44",
          name === "Desserts" && "relative bottom-2 scale-[1.1]",
        )}
      >
        <Image src={image} alt="img" fill className="object-cover" />
      </div>

      <div className="cursor-pointer text-center text-xs font-bold xs:text-base sm:mt-10 md:text-xl">
        {name}
      </div>
      <Link href={`/category/${linkName}`} className="mt-10 max-sm:hidden">
        <Button className="bg-stone-50 font-bold">Choose</Button>
      </Link>
    </div>
  )
}

export default MenuCategoriesElement
