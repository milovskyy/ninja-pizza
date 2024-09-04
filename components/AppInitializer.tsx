"use client"

import { useCategories } from "@/app/_store/categories"
import { useIngredients } from "@/app/_store/ingredients"
import { useProducts } from "@/app/_store/products"
import {
  CategoryType,
  IngredientType,
  ProductType,
} from "@/app/_types/TypeProduct"
import { useEffect } from "react"

type Props = {
  products: ProductType[]
  categories: CategoryType[]
  ingredients: IngredientType[]
}

export const AppInitializer = ({
  products,
  categories,
  ingredients,
}: Props) => {
  const { setProducts } = useProducts()
  const { setIngredients } = useIngredients()
  const { setCategories } = useCategories()

  // console.log("app init")

  useEffect(() => {
    // console.log("app init in useEffect")
    setProducts(products)
    setIngredients(ingredients)
    setCategories(categories)
  }, [
    setProducts,
    products,
    setIngredients,
    ingredients,
    setCategories,
    categories,
  ])
  return null
}
