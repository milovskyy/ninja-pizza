import { IngredientType, ProductType } from "@/app/_types/Types"
import { cn } from "@/utils/utils"
import { Button } from "./ui/button"
import { GoHeart } from "react-icons/go"
import { PlusMinusBlock } from "./PlusMinusBlock"
import { Ingredients } from "./Ingredients"
import { useIngredients } from "@/app/_store/ingredients"
import { useCart } from "@/app/_store/cart"
import toast from "react-hot-toast"
import { useCartActions } from "@/hooks/useCartActions"
import { useFavorites } from "@/app/_store/favorites"
import { useFavoritesActions } from "@/hooks/useFavoritesActions"

type Props = {
  product: ProductType
}

export const ProductDescription = ({ product }: Props) => {
  const {
    name,
    ingredients,
    price,
    size,
    isNew,
    hit,
    id,
    image,
    linkName,
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

  const { allIngredients } = useIngredients()
  const {
    addProductToCartAction,
    increaseProductCartAction,
    decreaseProductCartAction,
  } = useCartActions()
  const { favoriteAction } = useFavoritesActions()

  const { cart } = useCart()
  const itemsInCart = cart?.find((item) => item.name === name)?.quantity

  const { favorites } = useFavorites()

  const isFavorite = favorites.some((item) => item.id === id)

  const productIngredients = ingredients
    ?.map((ing) => allIngredients.find((i) => i.name === ing))
    .filter((item) => item !== undefined) as IngredientType[]

  // ...... ДОБАВИТЬ СЮДА СКЕЛЕТОН (ШАДСН) ПРИ ЗАГРУЗКЕ. А ТО ЕСТЬ ПУСТОЕ МЕСТО

  return (
    <div className="mt-3 flex w-full items-center">
      <div
        className={cn(
          "relative flex w-full flex-col justify-center justify-self-center",
        )}
      >
        <div className={cn("flex flex-1 flex-col gap-4")}>
          <h1 className="text-3xl font-extrabold max-md:text-center lg:text-4xl xl:text-[40px]">
            {name}
          </h1>

          {!!productIngredients?.length && (
            <Ingredients productIngredients={productIngredients} />
          )}
          <div className="mt-4 flex items-center gap-3 max-md:w-full max-md:justify-between max-md:self-center">
            <div className="mr-3 flex min-w-[120px] flex-col px-1">
              <div className="text-xl font-black max-xs:text-lg lg:text-2xl">
                {price} UAH
              </div>
              <div className="text-sm font-semibold max-xs:text-xs">{size}</div>
            </div>
            <div className="itecems-center flex justify-center gap-4">
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
                />
              ) : (
                <Button
                  className="text-base max-xs:text-sm"
                  onClick={() => {
                    toast.success("Product has been added to cart", {
                      id: "clipboard",
                    })
                    addProductToCartAction(cartProduct)
                  }}
                >
                  Add to cart
                </Button>
              )}
              <Button
                className={cn(
                  "h-10 w-10 bg-white p-0 text-stone-500 hover:bg-white hover:text-sky-400 md:h-12 md:w-12 md:p-0",
                  {
                    "bg-sky-200 text-stone-800 hover:bg-sky-200 hover:text-white":
                      isFavorite,
                  },
                )}
                onClick={() => favoriteAction(product)}
              >
                <GoHeart size="24px" className="relative top-[1px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
