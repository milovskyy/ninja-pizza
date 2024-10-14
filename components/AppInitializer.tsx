"use client"

import { useCart } from "@/app/_store/cart"
import { useCategories } from "@/app/_store/categories"
import { useIngredients } from "@/app/_store/ingredients"
import { useOrders } from "@/app/_store/orders"
import { useProducts } from "@/app/_store/products"
import {
  cartProductType,
  CategoryType,
  IngredientType,
  OrderType,
  ProductType,
} from "@/app/_types/TypeProduct"
import { useEffect } from "react"
import { useLocalStorage } from "react-use"

type Props = {
  products: ProductType[]
  categories: CategoryType[]
  ingredients: IngredientType[]
  orders: OrderType[]
}

export const AppInitializer = ({
  products,
  categories,
  ingredients,
  orders,
}: Props) => {
  const { setProducts } = useProducts()
  const { setIngredients } = useIngredients()
  const { setCategories } = useCategories()
  const { setCart } = useCart()
  const { setOrders } = useOrders()
  const [value] = useLocalStorage<cartProductType[]>("cart", [])

  useEffect(() => {
    setProducts(products)
    setIngredients(ingredients)
    setCategories(categories)
    setOrders(orders)
    setCart(value || [])
  }, [
    setProducts,
    products,
    setIngredients,
    ingredients,
    setCategories,
    categories,
    setCart,
    value,
    setOrders,
    orders,
  ])
  return null
}
