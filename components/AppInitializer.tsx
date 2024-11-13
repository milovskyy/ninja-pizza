"use client"

import { useCart } from "@/app/_store/cart"
import { useCategories } from "@/app/_store/categories"
import { useIngredients } from "@/app/_store/ingredients"
import { useOrders } from "@/app/_store/orders"
import { useProducts } from "@/app/_store/products"
import {
  CartProductType,
  CategoryType,
  IngredientType,
  OrderType,
  ProductType,
  UserType,
} from "@/app/_types/Types"
import { useEffect } from "react"
import { useLocalStorage } from "react-use"
import { createUserClient } from "@/utils/supabase/client"
import { useUser } from "@/app/_store/user"
import { useFavorites } from "@/app/_store/favorites"

type Props = {
  products: ProductType[]
  categories: CategoryType[]
  ingredients: IngredientType[]
  orders: OrderType[]
  user?: UserType | null
}

export const AppInitializer = ({
  products,
  categories,
  ingredients,
  orders,
  user,
}: Props) => {
  const { setProducts } = useProducts()
  const { setIngredients } = useIngredients()
  const { setCategories } = useCategories()
  const { setCart } = useCart()
  const { setOrders } = useOrders()
  const { setUser } = useUser()
  const { setFavorites } = useFavorites()
  const [value, setValue] = useLocalStorage<CartProductType[]>("cart", [])

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

  if (user?.cart && JSON.stringify(value) !== JSON.stringify(user?.cart))
    setValue(user?.cart)

  if (value && value?.length > 0 && user?.cart?.length === 0) setCart(value)

  useEffect(() => {
    setProducts(products)
    setIngredients(ingredients)
    setCategories(categories)
    setOrders(orders)
    setUser(user)
    setFavorites(user?.favorites || [])
    if (user?.cart && user?.cart?.length > 0) setCart(user?.cart || value || [])
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
    setUser,
    user,
    setFavorites,
  ])
  return null
}
