import { createServerClient } from "./supabase/server"

export const createOrderApi = async function (order: any) {
  const supabase = createServerClient()

  const { data, error } = await supabase.from("orders").insert([order]).select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}
