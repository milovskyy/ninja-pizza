import { ProductType } from "@/app/_types/TypeProduct"
import MenuCard from "./MenuCard"
import Link from "next/link"
import PizzaFilter from "./PizzaFilter"

type PropsType = {
  products: ProductType[]
  name: string
  limit?: number
  filter?: string
}

function MenuCategory({ products, name, limit, filter }: PropsType) {
  let productsToShow = products

  if (limit) productsToShow = products.slice(0, limit)

  // сортировать чтоб сначала были NEW

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

  // итерация по Object.keys чтоб определить что в юрл поиске значение поиска есть в ключах обьекта продукта
  // //////////////////////////

  return (
    <div className="flex flex-col items-center px-3 pb-2">
      <h1 className="mb-6 self-start text-5xl font-extrabold">{name}</h1>
      {!limit && name === "Pizza" && <PizzaFilter />}

      <div className="mb-12 grid w-full grid-cols-4 gap-[6px]">
        {productsToShow.map((product) => (
          <MenuCard key={product.id} product={product} />
        ))}
      </div>
      {limit && (
        <Link
          href={`/category/${name.toLowerCase()}`}
          className="mb-3 rounded-full bg-stone-700 px-6 py-4 text-[16px] font-bold text-stone-50"
        >
          See all
        </Link>
      )}
    </div>
  )
}

export default MenuCategory
