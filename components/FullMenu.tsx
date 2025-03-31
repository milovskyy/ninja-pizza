import { PRODUCTLIMIT } from "@/app/_constants/constants"
import MenuCategory from "./MenuCategory"
import { getProducts } from "@/utils/data-service"
import { groupProductsByCategory } from "@/utils/helperFunction"

export const revalidate = 0

async function FullMenu() {
  const products = await getProducts()

  const data = groupProductsByCategory(products)

  const filteredProducts = data?.filter((obj) => obj.name !== "Extras")

  if (!products || !filteredProducts) return null

  return (
    <div className="mb-16 flex flex-col max-sm:mb-4">
      {filteredProducts.map((category) => (
        <MenuCategory
          key={category.name}
          products={category.products.slice(0, PRODUCTLIMIT)}
          name={category.name}
          limit={PRODUCTLIMIT}
        />
      ))}
    </div>
  )
}

export default FullMenu
