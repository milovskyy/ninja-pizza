import { createServerClient } from "./supabase/server"

import { CategoryType, ProductType } from "@/app/_types/Types"

// For testing
// await new Promise((res) => setTimeout(res, 2000));

// ///////////////////////////////////////////////////////////////////////////

export const getProducts = async function () {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true })

  if (error) {
    throw new Error("Products could not be loaded")
  }

  return data as ProductType[]
}

// /////////////////////////////////////////////////////////////////////////////

export const getProductsByCategory = async function (category: string) {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .order("id", { ascending: true })

  if (error) {
    throw new Error("Products could not be loaded")
  }

  return data as ProductType[]
}

// /////////////////////////////////////////////////////////////////////////////

export const getCategories = async function () {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("id", { ascending: true })

  if (error) {
    // throw new Error("Categories could not be loaded")
    throw new Error(error.message)
  }

  return data as CategoryType[]
}

// /////////////////////////////////////////////////////////////////////////////

export const getCategoryColor = async function (category: string) {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("linkName", category)
    .maybeSingle()

  if (error) {
    // throw new Error("Categories could not be loaded")
    throw new Error(error.message)
  }

  return data as CategoryType
}

// ////////////////////////////////////////////////////////////////////////////

export const getIngredients = async function () {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from("ingredients")
    .select("*")
    .order("name", { ascending: true })

  if (error) {
    throw new Error("Ingredients could not be loaded")
  }

  return data
}

// ////////////////////////////////////////////////////////////////////////////

export const getOrders = async function () {
  const supabase = createServerClient()
  const { data, error } = await supabase.from("orders").select("*")

  if (error) {
    throw new Error("Orders could not be loaded")
  }

  return data
}
