import { ProductType } from "@/app/_types/Types"
import MenuCard from "./MenuCard"
import Link from "next/link"
import PizzaFilter from "./PizzaFilter"
import { cn } from "@/utils/utils"

type PropsType = {
  products: ProductType[]
  name?: string
  limit?: number
  filter?: string
  title?: boolean
}

function MenuCategory({
  products,
  name,
  limit,
  filter,
  title = true,
}: PropsType) {
  let productsToShow = products

  if (limit) productsToShow = products.slice(0, limit)

  if (name === "Pizza") {
    if (filter === "spicy")
      productsToShow = products.filter((prod) => prod.spicy === true)
    if (filter === "meat")
      productsToShow = products.filter((prod) => prod.meat === true)
    if (filter === "seafood")
      productsToShow = products.filter((prod) => prod.seafood === true)
    if (filter === "vegetarian")
      productsToShow = products.filter((prod) => prod.vegetarian === true)
  }

  if (name)
    productsToShow.sort(
      (a, b) => (a.isNew === true ? 0 : 1) - (b.isNew === true ? 0 : 1),
    )

  return (
    <div className="flex flex-col items-center pb-2 md:px-3">
      {title && (
        <h1
          className={cn(
            "text-2xl font-extrabold max-sm:mb-4 sm:text-3xl md:text-4xl lg:mb-6 xl:text-5xl",
            limit ? "self-center" : "self-center sm:self-start",
          )}
        >
          {name}
        </h1>
      )}
      {!limit && name === "Pizza" && <PizzaFilter filter={filter} />}

      <div
        className={cn(
          "mb-4 grid w-full gap-2 sm:mb-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        )}
      >
        {productsToShow.map((product) => (
          <MenuCard key={product.id} product={product} />
        ))}
      </div>
      {limit && name && (
        <Link
          href={`/category/${name.toLowerCase()}`}
          className="rounded-full bg-stone-700 px-6 py-4 text-base font-bold text-stone-50 max-md:py-2 sm:mb-3"
          prefetch={true}
        >
          See all
        </Link>
      )}
    </div>
  )
}

export default MenuCategory
