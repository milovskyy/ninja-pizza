"use server"

import {
  CartProductType,
  NewOrderType,
  OrderType,
  ProductType,
  UserDeliveryAddress,
  UserType,
} from "@/app/_types/Types"
import { loginApi, logoutApi, signupApi } from "./auth-service"
import { createOrderApi, updateOrderApi } from "./order-service"
import {
  createUserApi,
  updateUserAddressApi,
  updateUserApi,
  updateUserCartApi,
  updateUserFavoritesApi,
} from "./user-service"
import { AddressType } from "@/components/account/UpdateAddressModal"

export type AuthType = {
  phone: string
  password: string
}

export async function signupAction({ phone, password }: AuthType) {
  const data = await signupApi({ phone, password })
  return data
}
export async function loginAction({ phone, password }: AuthType) {
  const user = await loginApi({ phone, password })
  return user
}
export async function logoutAction() {
  await logoutApi()
}

export async function createOrder(order: NewOrderType) {
  const data = await createOrderApi(order)
  return data
}

export async function updateOrder(order: OrderType, id: number) {
  const data = await updateOrderApi(order, id)
  return data
}

export async function createUser(user: UserType) {
  const data = await createUserApi(user)
  return data
}

export async function updateUser(user: UserType, id: string) {
  const data = await updateUserApi(user, id)
  return data
}

export async function updateUserAddress(
  address: UserDeliveryAddress[],
  id: string,
) {
  const data = await updateUserAddressApi(address, id)
  return data
}

export async function updateUserFavorites(
  favorites: ProductType[],
  id: string,
) {
  const data = await updateUserFavoritesApi(favorites, id)
  return data
}

export async function updateUserCart(cart: CartProductType[], id: string) {
  const data = await updateUserCartApi(cart, id)
  return data
}
