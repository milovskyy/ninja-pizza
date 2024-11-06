import { create } from "zustand"
import { cartProductType } from "../_types/Types"

type Store = {
  cart: cartProductType[]
  setCart: (array: cartProductType[]) => void
  add: (product: cartProductType) => void
  remove: (product: cartProductType) => void
  increase: (product: cartProductType) => void
  decrease: (product: cartProductType) => void
  deleteCart: () => void
}

export const useCart = create<Store>()((set) => ({
  cart: [],
  setCart: (array: cartProductType[]) =>
    set(() => {
      return { cart: array }
    }),
  deleteCart: () =>
    set(() => {
      return { cart: [] }
    }),

  remove: (product: cartProductType) =>
    set((state) => {
      const items = state.cart.filter((item) => item.id !== product.id)
      return { cart: items }
    }),

  add: (product: cartProductType) =>
    set((state) => {
      return { cart: [...state.cart, { ...product, quantity: 1 }] }
    }),

  increase: (product: cartProductType) =>
    set((state) => {
      const items = state.cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
      return { cart: items }
    }),
  decrease: (product: cartProductType) =>
    set((state) => {
      const items = state.cart
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0)
      return { cart: items }
    }),
}))
