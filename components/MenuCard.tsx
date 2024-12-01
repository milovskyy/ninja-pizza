"use client"

import Image from "next/image"
import { GoHeart } from "react-icons/go"
import Link from "next/link"
import { ProductType } from "../app/_types/Types"
import { PRODUCT_IMAGE_URL } from "@/app/_constants/constants"
import { PlusMinusBlock } from "./PlusMinusBlock"
import { Button } from "./ui/button"
import { useCart } from "@/app/_store/cart"
import toast from "react-hot-toast"
import { useCartActions } from "@/hooks/useCartActions"
import { useFavorites } from "@/app/_store/favorites"
import { cn } from "@/utils/utils"

import { useFavoritesActions } from "@/hooks/useFavoritesActions"

type PropsType = {
  product: ProductType
  carousel?: boolean
}

function MenuCard({ product, carousel = false }: PropsType) {
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
    category,
  } = product

  const cartProduct = {
    id,
    name,
    price,
    size,
    image,
    quantity: 1,
    linkName,
    category,
  }

  const { cart } = useCart()
  const { favorites } = useFavorites()

  const { favoriteAction } = useFavoritesActions()

  const isFavorite = favorites.some((item) => item.id === id)

  const itemsInCart = cart?.find((item) => item.name === name)?.quantity

  const {
    addProductToCartAction,
    increaseProductCartAction,
    decreaseProductCartAction,
  } = useCartActions()

  function formatIngredients(ingredients: string[]) {
    return ingredients.join(", ")
  }

  let formattedIngredients

  if (ingredients?.length > 0)
    formattedIngredients = formatIngredients(ingredients.slice(0, 4))

  return (
    <div
      className={cn(
        "flex w-full rounded-3xl bg-white px-3 py-2 max-xs:px-2 xs:p-4 md:p-5",
      )}
    >
      <div className="relative flex w-full gap-3 max-sm:items-center sm:flex-col">
        <Link
          href={`/product/${linkName}`}
          className={cn(
            "relative max-xs:h-28 max-xs:w-28 xs:max-sm:h-32 xs:max-sm:w-32 sm:px-12 sm:py-1 md:px-14 lg:px-10 xl:px-6",
          )}
        >
          <div className="relative aspect-square w-full">
            <Image src={image} alt="img" fill className="object-cover" />
          </div>
          <div
            className={cn(
              "absolute right-0 top-0 z-10 cursor-pointer rounded-full bg-stone-100 p-[5px] text-stone-500 hover:text-sky-400 sm:right-2 sm:p-2 sm:max-xl:top-3",
              {
                "bg-sky-200 text-stone-800 hover:text-white": isFavorite,
              },
            )}
            onClick={(e) => {
              favoriteAction(product)
              e.preventDefault()
            }}
          >
            <GoHeart className="relative top-[2px] h-5 w-5 sm:h-[26px] sm:w-[26px]" />
          </div>

          {isNew && (
            <div className="absolute left-0 top-0 rounded-lg bg-[#ddf0ce] px-2 py-[2px] text-xs font-bold text-[#55b30b] xs:px-2 xs:py-[3px] xs:text-sm sm:left-2 sm:max-xl:top-3">
              NEW
            </div>
          )}

          {hit && !isNew && (
            <div className="absolute left-0 top-0 rounded-lg bg-[#fad5d5] px-2 py-[2px] text-xs font-bold text-[#e72e2e] xs:px-2 xs:py-[3px] xs:text-sm sm:left-2 sm:top-3">
              HIT
            </div>
          )}

          {vegetarian && (
            <div className="absolute bottom-0 left-0 aspect-square h-8 w-8 rounded-lg bg-[#ddf0ce] p-1 xs:h-10 xs:w-10 xs:p-[7px] sm:left-2">
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
            <div className="absolute bottom-0 right-0 aspect-square h-8 w-8 rounded-lg bg-[#fad5d5] p-1 xs:h-10 xs:w-10 xs:p-[7px] sm:right-2">
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
        </Link>

        <div className="flex h-full w-full flex-1 flex-col">
          <Link className="max-sm:mt-3" href={`/product/${linkName}`}>
            <h1 className="text-base font-bold sm:text-center md:text-xl">
              {name}
            </h1>
          </Link>

          <div className="flex flex-1 items-center">
            <h3 className="mt-3 flex-1 items-center text-xs font-semibold text-stone-400 sm:text-center sm:text-sm">
              <span className="font-semibold text-main">{size}</span>

              {ingredients?.length > 0 && ` - " ${formattedIngredients}`}
            </h3>
          </div>

          <div
            className={cn(
              "mt-3 flex h-10 items-center justify-between sm:px-2 md:mt-5",
              carousel && "",
            )}
          >
            <div className="flex gap-2">
              <div className="text-base font-bold md:text-xl">{price}</div>
              <div className="text-xs font-semibold text-stone-400 md:text-sm">
                UAH
              </div>
            </div>

            {itemsInCart ? (
              <PlusMinusBlock
                number={itemsInCart}
                plusFunc={() => {
                  toast.success("Product has been added to cart", {
                    id: "clipboard",
                  })
                  increaseProductCartAction(cartProduct)
                }}
                minusFunc={() => decreaseProductCartAction(cartProduct)}
                bg="bg-stone-100"
                hoverBg="hover:bg-primary"
              />
            ) : (
              <Button
                className="bg-stone-100 text-sm font-bold md:text-base"
                onClick={() => {
                  toast.success("Product has been added to cart", {
                    id: "clipboard",
                  })
                  addProductToCartAction(cartProduct)
                }}
              >
                Order
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
