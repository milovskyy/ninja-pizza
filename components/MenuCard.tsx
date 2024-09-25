"use client"

import Image from "next/image"
import { GoHeart } from "react-icons/go"
import Link from "next/link"
import { ProductType } from "../app/_types/TypeProduct"
import { PRODUCT_IMAGE_URL } from "@/app/_constants/constants"
import { PlusMinusBlock } from "./PlusMinusBlock"
import { Button } from "./ui/button"
import { useCart } from "@/app/_store/cart"
import toast from "react-hot-toast"
import { useLocalStorage } from "react-use"
import { useCartActions } from "@/hooks/useCartActions"

type PropsType = {
  product: ProductType
}

function MenuCard({ product }: PropsType) {
  const {
    id,
    name,
    linkName,
    ingredients,
    price,
    size,
    hit,
    isNew,
    spicy,
    vegetarian,
    image,
  } = product

  const cartProduct = {
    id,
    name,
    price,
    size,
    image,
    quantity: 1,
    linkName,
  }

  const { cart } = useCart()
  const itemsInCart = cart?.find((item) => item.name === name)?.quantity

  const { handleAdd, handleIncrease, handleDecrease } = useCartActions()

  function formatIngredients(ingredients: string[]) {
    return ingredients.join(", ")
  }

  let formattedIngredients

  if (ingredients?.length > 0)
    formattedIngredients = formatIngredients(ingredients.slice(0, 4))

  return (
    <div className="flex w-full rounded-3xl bg-white p-6 pb-5">
      <div className="relative flex w-full flex-col">
        <Link
          href={`/product/${linkName}`}
          className="relative aspect-square w-[75%] self-center rounded-2xl bg-white"
        >
          <Image src={image} alt="img" fill className="object-cover" />
        </Link>
        <Link className="mt-5" href={`/product/${linkName}`}>
          <h1 className="text-center text-xl font-bold">{name}</h1>
        </Link>

        <div className="flex flex-1 items-center">
          <h3 className="mt-3 flex-1 items-center text-center text-[14px] font-semibold text-stone-400">
            <span className="font-semibold text-main">{size}</span>

            {ingredients?.length > 0 && ` - " ${formattedIngredients}`}
          </h3>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="text-xl font-bold">{price}</div>
            <div className="text-sm font-semibold text-stone-400">UAH</div>
          </div>

          {itemsInCart ? (
            <PlusMinusBlock
              number={itemsInCart}
              plusFunc={() => {
                toast.success("Product has been added to cart", {
                  id: "clipboard",
                })
                handleIncrease(cartProduct)
              }}
              minusFunc={() => handleDecrease(cartProduct)}
              bg="bg-stone-100"
              hoverBg="hover:bg-primary"
            />
          ) : (
            <Button
              className="bg-stone-100 text-[16px] font-bold"
              onClick={() => {
                toast.success("Product has been added to cart", {
                  id: "clipboard",
                })
                handleAdd(cartProduct)
              }}
            >
              Order
            </Button>
          )}
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
                src={`${PRODUCT_IMAGE_URL}filters/vegetarian.png`}
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
                src={`${PRODUCT_IMAGE_URL}filters/spicy.png`}
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
