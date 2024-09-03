"use server"

import { SeparateMenuType } from "@/app/_types/TypeProduct"
import { groupProductsByCategory } from "./helperFunction"
import { supabase } from "./supabase"

export const getProducts = async function () {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true })

  if (error) {
    console.log(error, "error")
    throw new Error("Products could not be loaded")
  }

  const data = groupProductsByCategory(products)

  return data as SeparateMenuType[]
}
