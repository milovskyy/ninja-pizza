"use client"

import Link from "next/link"
import Button from "../ui/Button"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

type PropsType = {
  category: {
    image: string
    label: string
    link: string
    color: string
  }
  closeMenu: () => void
}

function NavigationMenuElement({ category, closeMenu }: PropsType) {
  const { image, label, link, color } = category

  const router = useRouter()

  return (
    <div
      className={`${color} flex h-[380px] w-[200px] flex-col items-center p-6 pb-10`}
      onClick={() => {
        closeMenu()
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

      <div className="mt-10 cursor-pointer text-center">{label}</div>
      <Link href={`/category/${link}`} className="mt-10">
        <Button color="bg-stone-50" className="cursor-pointer">
          Choose
        </Button>
      </Link>
    </div>
  )
}

export default NavigationMenuElement
