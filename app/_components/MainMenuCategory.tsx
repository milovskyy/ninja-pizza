import { ProductType } from "../_types/TypeProduct"
import MenuCard from "./MenuCard"
import PizzaFilter from "./PizzaFilter"
import Button from "./ui/Button"

// сделать потом ограничение на 8 штук максиму для отображения.

type PropsType = {
  products: ProductType[]
  name: string
  limit?: number
}

function MainMenuCategory({ products, name, limit }: PropsType) {
  console.log(limit)

  const productsToShow = limit ? products.slice(0, limit) : products

  if (!products || products.length === 0) return
  // //////////////////////////

  return (
    <div className="flex max-w-[1304px] flex-col items-center px-3 pb-2">
      <h1 className="mb-9 self-start text-5xl font-extrabold">{name}</h1>
      {!limit && name === "Pizza" && <PizzaFilter />}

      <div className="mb-12 grid w-full grid-cols-4 gap-[6px]">
        {productsToShow.map((product) => (
          <MenuCard key={product.id} product={product} />
        ))}
      </div>
      {limit && (
        <Button
          className="mb-3 bg-stone-700 py-3 text-[16px] font-bold text-stone-50"
          link={`/category/${name.toLowerCase()}`}
        >
          See all
        </Button>
      )}
    </div>
  )
}

export default MainMenuCategory
