import { createServerClient } from "./supabase/server"

type AuthType = {
  phone: string
  password: string
}

export async function signupApi({ phone, password }: AuthType) {
  const supabase = createServerClient()
  const { data, error } = await supabase.auth.signUp({
    phone,
    password,
  })

  if (error) {
    return { success: false, message: error.message }
  }

  return { success: true, data }
  // const { data, error } = await supabase.auth.signUp({
  //   phone,
  //   password,
  // })

  // if (error) throw new Error(error.message)

  // return data
}

export async function loginApi({ phone, password }: AuthType) {
  const supabase = createServerClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    phone,
    password,
  })

  if (error) {
    return { success: false, message: error.message }
  }

  return { success: true, data }
}

export async function logoutApi() {
  const supabase = createServerClient()
  const { error } = await supabase.auth.signOut()

  if (error) throw new Error(error.message)
}
