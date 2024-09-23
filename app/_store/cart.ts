import { create } from "zustand"
import { cartProductType, cartType } from "../_types/TypeProduct"

type Store = {
  cart: cartType
  add: (product: cartProductType) => void
  remove: (product: cartProductType) => void
  increase: (product: cartProductType) => void
  decrease: (product: cartProductType) => void
}

export const useCart = create<Store>()((set) => ({
  cart: {
    id: 1,
    userId: "dsdsd",
    token: "dsdsds",
    items: [],
    totalAmount: 444,
  },
  remove: (product: cartProductType) =>
    set((state) => {
      const items = state.cart.items.filter((item) => item.id !== product.id)
      return { cart: { ...state.cart, items } }
    }),

  add: (product: cartProductType) =>
    set((state) => {
      const items = [...state.cart.items, { ...product, quantity: 1 }]
      return { cart: { ...state.cart, items } }
    }),

  increase: (product: cartProductType) =>
    set((state) => {
      const items = state.cart.items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
      return { cart: { ...state.cart, items } }
    }),
  decrease: (product: cartProductType) =>
    set((state) => {
      const items = state.cart.items
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0)
      return { cart: { ...state.cart, items } }
    }),
}))

// видимо надо создавать дефолтную корзиную , потом отдельная функция добавлять айтемы в корзину (в том числе проверять есть ли уже такой, чтоб увелиичить количество)

// remove: (product: cartProductType) =>
//   set((state) => {
//     const items = state.cart.items.find((item) => item.id === product.id)
//       ? state.cart.items
//           .map((item) =>
//             item.id === product.id
//               ? { ...item, quantity: item.quantity - 1 }
//               : item,
//           )
//           .filter((item) => item.quantity > 0)
//       : state.cart.items
//     return { cart: { ...state.cart, items } }
//   }),
// add: (product: cartProductType) =>
//   set((state) => {
//     const items = state.cart.items.find((item) => item.id === product.id)
//       ? state.cart.items.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item,
//         )
//       : [...state.cart.items, { ...product, quantity: 1 }]
//     return { cart: { ...state.cart, items } }
//   }),
