import { create } from "zustand"
import { CartProductType } from "../_types/Types"

type Store = {
  cart: CartProductType[]
  setCart: (array: CartProductType[]) => void
  add: (product: CartProductType) => void
  remove: (product: CartProductType) => void
  increase: (product: CartProductType) => void
  decrease: (product: CartProductType) => void
  deleteCart: () => void
}

export const useCart = create<Store>()((set) => ({
  cart: [],
  setCart: (array: CartProductType[]) =>
    set(() => {
      return { cart: array }
    }),
  deleteCart: () =>
    set(() => {
      return { cart: [] }
    }),

  remove: (product: CartProductType) =>
    set((state) => {
      const items = state.cart.filter((item) => item.id !== product.id)
      return { cart: items }
    }),

  add: (product: CartProductType) =>
    set((state) => {
      return { cart: [...state.cart, { ...product, quantity: 1 }] }
    }),

  increase: (product: CartProductType) =>
    set((state) => {
      const items = state.cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
      return { cart: items }
    }),
  decrease: (product: CartProductType) =>
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
