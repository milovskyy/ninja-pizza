import MainMenuCategory from "./MainMenuCategory"
import { SeparateMenuType } from "../_types/TypeProduct"

type PropsType = {
  products: SeparateMenuType
}

function MainFullMenu({ products }: PropsType) {
  return (
    <div className="mb-16 flex flex-col">
      {products.map((category) => (
        <MainMenuCategory
          key={category.name}
          products={category.products}
          name={category.name}
        />
      ))}
    </div>
  )
}

export default MainFullMenu
