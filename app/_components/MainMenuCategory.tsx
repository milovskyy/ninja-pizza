import { ProductType } from "../_types/TypeProduct"
import MenuCard from "./MenuCard"
import Button from "./ui/Button"

// сделать потом ограничение на 8 штук максиму для отображения.

type PropsType = {
  products: ProductType[]
  name: string
}

function MainMenuCategory({ products, name }: PropsType) {
  return (
    <div className="flex max-w-[1304px] flex-col items-center bg-blue-100 px-3 pt-12">
      <h1 className="text-center text-5xl font-bold">{name}</h1>
      <div className="mb-12 mt-9 grid w-full grid-cols-4 gap-[6px]">
        {products.map((product) => (
          <MenuCard key={product.id} product={product} />
        ))}
      </div>
      <Button
        className="mb-3 bg-stone-700 py-3 text-[16px] font-bold text-stone-50"
        link={`/category/${name.toLowerCase()}`}
      >
        See all
      </Button>
    </div>
  )
}

export default MainMenuCategory
