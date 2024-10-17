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
import { createUserClient } from "@/utils/supabase/client"

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

  const supabase = createUserClient()
  const { addOrder, deleteOrder, updateOrder } = useOrders()
  const channels = supabase
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "orders" },
      (payload: any) => {
        const { new: newRec, old } = payload
        const order = { ...newRec, items: JSON.stringify(newRec.items) }

        if (payload.eventType == "INSERT") {
          addOrder(order as OrderType)
        }
        if (payload.eventType == "DELETE") {
          deleteOrder(old.id)
        }
        if (payload.eventType == "UPDATE") {
          updateOrder(old.id, order as OrderType)
        }
      },
    )
    .subscribe()

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
