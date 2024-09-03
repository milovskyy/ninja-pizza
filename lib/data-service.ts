// import { notFound } from "next/navigation"
// import { eachDayOfInterval } from "date-fns"
import { initialSort } from "./helperFunction"
import { supabase } from "./supabase"

import {
  CategoryType,
  IngredientType,
  ProductType,
  SeparateMenuType,
} from "@/app/_types/TypeProduct"

// For testing
// await new Promise((res) => setTimeout(res, 2000));

// const { data: desserts, error: error1 } = await supabase
// .from("products")
// .select("*")
// .eq("category", "Desserts")

// const { data: pizzas, error: error2 } = await supabase
// .from("products")
// .select("*")
// .eq("category", "Pizza")

// if (error1 || error2) {
//   console.log(error1, error2, "error TYT")
//   throw new Error("Products could not be loaded")
// }
// const data = [
//   { name: "Pizza", products: pizzas },
//   { name: "Desserts", products: desserts },
// ]

// GET

export const getProducts = async function () {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true })

  if (error) {
    console.log(error, "error")
    throw new Error("Products could not be loaded")
  }

  const data = initialSort(products)

  return data as SeparateMenuType[]
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

// ////////////////////////////////////////////////////////////////////////////
export const getHitDrinks = async function () {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "Drinks")
    .eq("hit", true)
    .order("id", { ascending: true })

  if (error) {
    console.log(error, "error")
    throw new Error("Drinks could not be loaded")
  }

  return data as ProductType[]
}

// /////////////////////////////////////////////////////////////////////////////

export const getHitPizzas = async function () {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "Pizza")
    .eq("hit", true)
    .order("id", { ascending: true })

  if (error) {
    console.log(error, "error")
    throw new Error("Drinks could not be loaded")
  }

  return data as ProductType[]
}

// /////////////////////////////////////////////////////////////////////////////

// Guests are uniquely identified by their email address
// export async function getGuest(email) {
//   const { data, error } = await supabase
//     .from("guests")
//     .select("*")
//     .eq("email", email)
//     .single()

//   // No error here! We handle the possibility of no guest in the sign in callback
//   return data
// }

// export async function getBooking(id) {
//   const { data, error } = await supabase
//     .from("bookings")
//     .select("*")
//     .eq("id", id)
//     .single()

//   if (error) {
//     console.error(error)
//     throw new Error("Booking could not get loaded")
//   }

//   return data
// }

// export async function getBookings(guestId) {
//   const { data, error, count } = await supabase
//     .from("bookings")
//     // We actually also need data on the cabins as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
//     .select(
//       "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)",
//     )
//     .eq("guestId", guestId)
//     .order("startDate")

//   if (error) {
//     console.error(error)
//     throw new Error("Bookings could not get loaded")
//   }

//   return data
// }

// export async function getBookedDatesByCabinId(cabinId) {
//   let today = new Date()
//   today.setUTCHours(0, 0, 0, 0)
//   today = today.toISOString()

//   // Getting all bookings
//   const { data, error } = await supabase
//     .from('bookings')
//     .select('*')
//     .eq('cabinId', cabinId)
//     .or(`startDate.gte.${today},status.eq.checked-in`)

//   if (error) {
//     console.error(error)
//     throw new Error('Bookings could not get loaded')
//   }

//   // Converting to actual dates to be displayed in the date picker
//   const bookedDates = data
//     .map((booking) => {
//       return eachDayOfInterval({
//         start: new Date(booking.startDate),
//         end: new Date(booking.endDate),
//       })
//     })
//     .flat()

//   return bookedDates
// }

// export async function getSettings() {
//   const { data, error } = await supabase.from('settings').select('*').single()

//   // await new Promise((res) => setTimeout(res, 5000));

//   if (error) {
//     console.error(error)
//     throw new Error('Settings could not be loaded')
//   }

//   return data
// }

// export async function getCountries() {
//   try {
//     const res = await fetch('https://restcountries.com/v2/all?fields=name,flag')
//     const countries = await res.json()
//     return countries
//   } catch {
//     throw new Error('Could not fetch countries')
//   }
// }

/////////////
// CREATE

// export async function createGuest(newGuest) {
//   const { data, error } = await supabase.from('guests').insert([newGuest])

//   if (error) {
//     console.error(error)
//     throw new Error('Guest could not be created')
//   }

//   return data
// }
