"use server"

import { newOrderType, OrderType } from "@/app/_types/TypeProduct"
import { getCurrentUserApi, loginApi, signupApi } from "./auth-service"
import { createOrderApi, updateOrderApi } from "./order-service"

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

export async function createOrder(order: newOrderType) {
  const order1 = await createOrderApi(order)
  return order1
}

export async function updateOrder(order: OrderType, id: number) {
  const order1 = await updateOrderApi(order, id)
  return order1
}
