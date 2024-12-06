import {
  CartProductType,
  ProductType,
  UserDeliveryAddress,
  UserType,
} from "@/app/_types/Types"
import { createServerClient } from "./supabase/server"
import { revalidatePath } from "next/cache"

export async function createUserApi(user: UserType) {
  const supabase = createServerClient()
  const { data, error } = await supabase.from("users").insert([user]).select()

  if (error) throw new Error(error.message)

  return data
}

export async function getUser() {
  const supabase = createServerClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) return null

  if (user?.id) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", user.id)
      .maybeSingle()

    if (error) throw new Error(error.message)

    return data
  }
}

export const updateUserApi = async function (user: UserType, id: string) {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from("users")
    .update(user)
    .eq("id", id)
    .select()
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const updateUserAddressApi = async function (
  address: UserDeliveryAddress[],
  id: string,
) {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from("users")
    .update({ address })
    .eq("id", id)
    .select()
    .maybeSingle()

  if (error) {
    return { success: false, message: error.message }
  }

  revalidatePath("/account/address")

  return { success: true, data }
}

export const updateUserFavoritesApi = async function (
  favorites: ProductType[],
  id: string,
) {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from("users")
    .update({ favorites })
    .eq("id", id)
    .select()
    .maybeSingle()

  if (error) {
    return { success: false, message: error.message }
  }

  // revalidatePath("/account/favorites")

  return { success: true, data }
}

export const updateUserCartApi = async function (
  cart: CartProductType[],
  id: string,
) {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from("users")
    .update({ cart })
    .eq("id", id)
    .select()
    .maybeSingle()

  if (error) {
    return { success: false, message: error.message }
  }

  return { success: true, data }
}

export const getUserOrders = async function (number: string) {
  const supabase = createServerClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) return null

  if (user?.id) {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("phone", number)

    if (error) throw new Error(error.message)

    return data
  }
}
