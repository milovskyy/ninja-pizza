"use client"

import Image from "next/image"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { GoHeart } from "react-icons/go"
import Button from "./ui/Button"
import Link from "next/link"
import { ProductType } from "../_types/TypeProduct"

type PropsType = {
  product: ProductType
}

function MenuCard({ product }: PropsType) {
  const {
    id,
    name,
    linkName,
    category,
    image,
    ingredients,
    price,
    size,
    hit,
    meat,
    isNew,
    seafood,
    spicy,
    vegetarian,
  } = product

  function formatIngredients(ingredients: string[]) {
    return ingredients.join(", ")
  }

  const formattedIngredients = formatIngredients(ingredients.slice(0, 4))

  console.log(vegetarian)

  return (
    <div className="flex w-full rounded-2xl bg-white p-6 pb-5">
      <div className="relative flex w-full flex-col">
        <Link
          href={`/product/${linkName}`}
          className="relative aspect-square w-[75%] self-center rounded-2xl bg-white"
        >
          <Image src={product.image} alt="img" fill className="object-cover" />
        </Link>
        <Link className="mt-6 flex-1" href={`/product/${linkName}`}>
          <h1 className="text-center text-xl font-bold">{name}</h1>
        </Link>

        <div className="flex items-center">
          <h3 className="mt-3 flex-1 text-center text-[14px] font-semibold text-stone-400">
            <span className="font-semibold text-[#ffc700]">{size}</span>
            {" - "}
            {formattedIngredients}
          </h3>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="text-xl font-bold">{price}</div>
            <div className="text-sm font-semibold text-stone-400">UAH</div>
          </div>
          {/* <div className="flex items-center justify-center gap-3">
            <div className="cursor-pointer rounded-full bg-stone-100 p-[18px] hover:bg-[#ffc700]">
              <AiOutlineMinus />
            </div>
            <div className="font-bold">1</div>
            <div className="cursor-pointer rounded-full bg-stone-100 p-[18px] hover:bg-[#ffc700]">
              <AiOutlinePlus />
            </div>
          </div> */}
          <Button className="bg-stone-100 py-3 text-[16px] font-bold hover:bg-[#ffc700]">
            Order
          </Button>
        </div>

        <div className="absolute right-0 top-0 cursor-pointer rounded-full bg-stone-100 p-3 text-stone-500 hover:text-red-600">
          <GoHeart size="24px" className="relative top-[2px]" />
        </div>

        {isNew && (
          <div className="absolute left-0 top-0 rounded-lg bg-[#ddf0ce] px-2 py-[3px] text-sm font-bold text-[#55b30b]">
            NEW
          </div>
        )}

        {hit && !isNew && (
          <div className="absolute left-0 top-0 rounded-lg bg-[#fad5d5] px-2 py-[3px] text-sm font-bold text-[#e72e2e]">
            HIT
          </div>
        )}

        {vegetarian && (
          <div className="absolute left-0 top-[160px] aspect-square h-10 w-10 rounded-lg bg-[#ddf0ce] p-[7px]">
            <div className="relative aspect-square">
              <Image
                src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/filters/veganFilter.png"
                alt="img"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {spicy && (
          <div className="absolute right-0 top-[160px] aspect-square h-10 w-10 rounded-lg bg-[#fad5d5] p-[7px]">
            <div className="relative aspect-square">
              <Image
                src="https://gdgccriibsrmjzltjugb.supabase.co/storage/v1/object/public/images/filters/spicyFilter.png"
                alt="img"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuCard
