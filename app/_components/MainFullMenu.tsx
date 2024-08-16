import MainMenuCategory from "./MainMenuCategory"
import { getProducts } from "@/lib/data-service"

const PRODUCTLIMIT = 8

export const revalidate = 0

async function MainFullMenu() {
  const products = await getProducts()

  const filteredProducts = products.filter((obj) => obj.name !== "Extras")

  return (
    <div className="mb-16 flex flex-col">
      {filteredProducts.map((category) => (
        <MainMenuCategory
          key={category.name}
          products={category.products.slice(0, PRODUCTLIMIT)}
          name={category.name}
          limit={PRODUCTLIMIT}
        />
      ))}
    </div>
  )
}

export default MainFullMenu
