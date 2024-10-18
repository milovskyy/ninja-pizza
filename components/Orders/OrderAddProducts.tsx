import { useProducts } from "@/app/_store/products"
import { cn } from "@/utils/utils"
import MenuCategory from "../MenuCategory"
import { sortOrderProductsByCategoryOrder } from "@/utils/helperFunction"

type Props = {}

export const OrderAddProducts = ({}: Props) => {
  const { allProducts } = useProducts()
  const products = sortOrderProductsByCategoryOrder(allProducts)

  return (
    <div className={cn("")}>
      <MenuCategory products={products} />
    </div>
  )
}
