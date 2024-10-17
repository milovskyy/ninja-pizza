import { IngredientType, ProductType } from "@/app/_types/TypeProduct"
import { cn } from "@/utils/utils"
import { Button } from "./ui/button"
import { GoHeart } from "react-icons/go"
import { PlusMinusBlock } from "./PlusMinusBlock"
import { Ingredients } from "./Ingredients"
import { useIngredients } from "@/app/_store/ingredients"
import { useCart } from "@/app/_store/cart"
import toast from "react-hot-toast"
import { useCartActions } from "@/hooks/useCartActions"

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
  const { handleAdd, handleIncrease, handleDecrease } = useCartActions()

  const { cart } = useCart()
  const itemsInCart = cart?.find((item) => item.name === name)?.quantity

  const productIngredients = ingredients
    ?.map((ing) => allIngredients.find((i) => i.name === ing))
    .filter((item) => item !== undefined) as IngredientType[]

  // ...... ДОБАВИТЬ СЮДА СКЕЛЕТОН (ШАДСН) ПРИ ЗАГРУЗКЕ. А ТО ЕСТЬ ПУСТОЕ МЕСТО

  return (
    <div className={cn("relative flex flex-col items-center justify-center")}>
      {(isNew || hit) && (
        <div
          className={cn(
            "absolute -top-5 left-0 mr-auto rounded-lg px-2 py-[3px] text-sm font-bold",
            isNew
              ? "bg-[#ddf0ce] text-[#55b30b]"
              : "bg-[#fad5d5] text-[#e72e2e]",
          )}
        >
          {isNew ? "NEW" : "HIT"}
        </div>
      )}
      <div className={cn("flex flex-1 flex-col gap-4")}>
        <h1 className="text-[44px] font-extrabold">{name}</h1>
        {!!productIngredients?.length && (
          <Ingredients productIngredients={productIngredients} />
        )}
        <div className="mt-4 flex items-center gap-3">
          <div className="mr-3 flex min-w-[120px] flex-col px-1">
            <div className="text-2xl font-black">{price} UAH</div>
            <div className="text-sm font-semibold">{size}</div>
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
            />
          ) : (
            <Button
              className="text-[16px]"
              onClick={() => {
                toast.success("Product has been added to cart", {
                  id: "clipboard",
                })
                handleAdd(cartProduct)
              }}
            >
              Add to cart
            </Button>
          )}

          <Button className="h-[52px] w-[52px] bg-white p-3 text-stone-500 hover:bg-white hover:text-red-600">
            <GoHeart size="24px" className="relative top-[1px]" />
          </Button>
        </div>
      </div>
    </div>
  )
}
