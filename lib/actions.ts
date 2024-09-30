"use server"

import { getCurrentUserApi, loginApi, signupApi } from "./api-service"

export type AuthType = {
  phone: string
  password: string
}

export async function signupAction({ phone, password }: AuthType) {
  const user = await signupApi({ phone, password })
  return user
}
export async function loginAction({ phone, password }: AuthType) {
  const user = await loginApi({ phone, password })
  return user
}

export async function getCurrentUser() {
  const user = await getCurrentUserApi()
  return user
}
