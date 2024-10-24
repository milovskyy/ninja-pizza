import { newOrderType, OrderType } from "@/app/_types/Types"
import { createServerClient } from "./supabase/server"

export const createOrderApi = async function (order: newOrderType) {
  const supabase = createServerClient()

  const { data, error } = await supabase.from("orders").insert([order]).select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const updateOrderApi = async function (order: OrderType, id: number) {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from("orders")
    .update(order)
    .eq("id", id)
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}
