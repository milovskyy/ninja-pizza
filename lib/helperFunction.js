import { AllProductsType } from "@/app/_types/TypeProduct"

// AllProductsType

export const initialSort = (products) => {
  const productsByCategories = products.reduce((acc, curr) => {
    const category = curr.category
    if (!acc[category]) {
      acc[category] = { name: curr.category, products: [] }
    }
    acc[category].products.push(curr)
    return acc
  }, [])

  // console.log(productsByCategories)

  return Object.values(productsByCategories)
}
