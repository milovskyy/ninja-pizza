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
import useModalStore from "@/app/_store/login-modal"

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

  const { setShowModal } = useModalStore()

  useEffect(() => {
    const cookies = document.cookie.split("; ").reduce(
      (acc, cookie) => {
        const [key, value] = cookie.split("=")
        acc[key] = value
        return acc
      },
      {} as Record<string, string>,
    )

    if (cookies["login-modal"] === "true") {
      setShowModal(true)
      document.cookie = "login-modal=false; path=/"
    }
  }, [setShowModal])

  // SAVING SUPABASE REALTIME
  // const supabase = createUserClient()
  // const { addOrder, deleteOrder, updateOrder } = useOrders()
  // const channels = supabase
  //   .channel("custom-all-channel")
  //   .on(
  //     "postgres_changes",
  //     { event: "*", schema: "public", table: "orders" },
  //     (payload: any) => {
  //       const { new: newRec, old } = payload
  //       const order = { ...newRec, items: JSON.stringify(newRec.items) }

  //       if (payload.eventType == "INSERT") {
  //         addOrder(order as OrderType)
  //       }
  //       if (payload.eventType == "DELETE") {
  //         deleteOrder(old.id)
  //       }
  //       if (payload.eventType == "UPDATE") {
  //         updateOrder(old.id, order as OrderType)
  //       }
  //     },
  //   )
  //   .subscribe()
  // SAVING SUPABASE REALTIME

  // if (user?.cart && JSON.stringify(value) !== JSON.stringify(user?.cart))
  //   setValue(user?.cart)
  // if (value && value?.length > 0 && user?.cart?.length === 0) setCart(value)

  useEffect(() => {
    setProducts(products)
    setIngredients(ingredients)
    setCategories(categories)
    setOrders(orders)
    setUser(user)
    setFavorites(user?.favorites || [])
    // setCart(user?.cart || value || [])
    setCart(
      user?.cart && user?.cart?.length > 0
        ? user.cart
        : value && value.length > 0
          ? value
          : [],
    )
  }, [
    setProducts,
    products,
    setIngredients,
    ingredients,
    setCategories,
    categories,
    setCart,
    setOrders,
    orders,
    setUser,
    user,
    setFavorites,
    value,
  ])
  return null
}
