import { NewOrderType, OrderType } from "@/app/_types/Types"
import { createServerClient } from "./supabase/server"

export const createOrderApi = async function (order: NewOrderType) {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from("orders")
    .insert([order])
    .select()
    .maybeSingle()

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

export const getOrder = async function (id: number) {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .select()
    .maybeSingle()

  if (error) {
    throw new Error(error.message)
  }

  return data
}
