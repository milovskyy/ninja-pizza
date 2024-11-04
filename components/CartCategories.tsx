import { useCategories } from "@/app/_store/categories"
import { CartCategoriesElement } from "./CartCategoriesElement"

type Props = {
  setIsCartOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartCategories = ({ setIsCartOpen }: Props) => {
  const { categories } = useCategories()

  return (
    <div className="grid w-full flex-1 grid-cols-2 gap-2">
      {categories.map((category) => {
        return (
          <CartCategoriesElement
            key={category.linkName}
            category={category}
            setIsCartOpen={setIsCartOpen}
          />
        )
      })}
    </div>
  )
}
