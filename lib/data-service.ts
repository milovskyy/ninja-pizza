import { supabase } from "./supabase"

import {
  CategoryType,
  IngredientType,
  ProductType,
} from "@/app/_types/TypeProduct"

// For testing
// await new Promise((res) => setTimeout(res, 2000));

// ///////////////////////////////////////////////////////////////////////////

export const getProducts = async function () {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true })

  if (error) {
    console.log(error, "error")
    throw new Error("Products could not be loaded")
  }

  return data as ProductType[]
}

// /////////////////////////////////////////////////////////////////////////////

export const getProductsByCategory = async function (category: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .order("id", { ascending: true })

  if (error) {
    console.log(error, "error")
    throw new Error("Products could not be loaded")
  }

  return data as ProductType[]
}

// /////////////////////////////////////////////////////////////////////////////

export const getProductByLinkName = async function (name: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("linkName", name)
    .single()

  if (error) {
    console.log(error, "error")
    // throw new Error("Product could not be loaded")
  }

  return data as ProductType
}

// /////////////////////////////////////////////////////////////////////////////

export const getCategories = async function () {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("id", { ascending: true })

  if (error) {
    console.log(error, "error")
    throw new Error("Categories could not be loaded")
  }

  return data as CategoryType[]
}

// /////////////////////////////////////////////////////////////////////////////

export const getCategoryColor = async function (category: string) {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("linkName", category)
    .single()

  if (error) {
    console.log(error, "error")
    throw new Error("Categories could not be loaded")
  }

  return data as CategoryType
}

// ////////////////////////////////////////////////////////////////////////////

export const getIngredients = async function () {
  const { data, error } = await supabase
    .from("ingredients")
    .select("*")
    .order("name", { ascending: true })

  if (error) {
    console.log(error, "error")
    throw new Error("Ingredients could not be loaded")
  }

  return data
  // as IngredientType[]
}

// ////////////////////////////////////////////////////////////////////////////

export const getProductIngredients = async function (ingredient: string[]) {
  const { data, error } = await supabase
    .from("ingredients")
    .select("*")
    .in("name", ingredient)

  if (error) {
    console.log(error, "error")
    // throw new Error("Ingredients could not be loaded")
  }

  data?.sort((a, b) => ingredient.indexOf(a.name) - ingredient.indexOf(b.name))

  return data
  // as IngredientType[]
}
