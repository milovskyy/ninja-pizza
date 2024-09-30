import { supabase } from "./supabase"

export type AuthType = {
  phone: string
  password: string
}

export async function signupApi({ phone, password }: AuthType) {
  const { data, error } = await supabase.auth.signUp({
    phone,
    password,
  })

  if (error) throw new Error(error.message)

  return data
}

export async function loginApi({ phone, password }: AuthType) {
  const { data, error } = await supabase.auth.signInWithPassword({
    phone,
    password,
  })

  if (error) throw new Error(error.message)

  return data
}

export async function getCurrentUserApi() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) throw new Error(error.message)

  return user
}
