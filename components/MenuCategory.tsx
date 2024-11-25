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
}

function MenuCategory({ products, name, limit, filter }: PropsType) {
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
      <h1
        className={cn(
          "mb-6 text-2xl font-extrabold sm:text-3xl md:text-5xl",
          limit ? "self-center" : "self-start",
        )}
      >
        {name}
      </h1>
      {!limit && name === "Pizza" && <PizzaFilter filter={filter} />}

      <div
        className={cn(
          "mb-4 grid w-full gap-[6px] sm:mb-12 sm:grid-cols-2 sm:max-xl:gap-4 lg:grid-cols-3 xl:grid-cols-4",
        )}
      >
        {productsToShow.map((product) => (
          <MenuCard key={product.id} product={product} />
        ))}
      </div>
      {limit && name && (
        <Link
          href={`/category/${name.toLowerCase()}`}
          className="mb-3 rounded-full bg-stone-700 px-6 py-4 text-base font-bold text-stone-50 max-md:py-2"
          prefetch={true}
        >
          See all
        </Link>
      )}
    </div>
  )
}

export default MenuCategory
