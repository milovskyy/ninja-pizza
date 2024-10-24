import { UserType } from "@/app/_types/Types"
import { createServerClient } from "./supabase/server"

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
    // if (error) console.log(error.message)

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
