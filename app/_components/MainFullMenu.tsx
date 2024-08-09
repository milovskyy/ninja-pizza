import MainMenuCategory from "./MainMenuCategory"
import { SeparateMenuType } from "../_types/TypeProduct"

type PropsType = {
  products: SeparateMenuType
}

export const revalidate = 0

function MainFullMenu({ products }: PropsType) {
  const filteredProducts = products.filter((obj) => obj.name !== "Extras")

  return (
    <div className="mb-16 flex flex-col">
      {filteredProducts.map((category) => (
        <MainMenuCategory
          key={category.name}
          products={category.products}
          name={category.name}
          limit={8}
        />
      ))}
    </div>
  )
}

export default MainFullMenu
