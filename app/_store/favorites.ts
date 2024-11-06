import { create } from "zustand"
import { ProductType } from "../_types/Types"

type Store = {
  favorites: ProductType[]
  setFavorites: (array: ProductType[]) => void
  addFavorite: (product: ProductType) => void
  removeFavorite: (product: ProductType) => void
}

export const useFavorites = create<Store>()((set) => ({
  favorites: [],

  setFavorites: (array: ProductType[]) =>
    set(() => {
      return { favorites: array }
    }),

  removeFavorite: (product: ProductType) =>
    set((state) => {
      const items = state.favorites.filter((item) => item.id !== product.id)
      return { favorites: items }
    }),

  addFavorite: (product: ProductType) =>
    set((state) => {
      return { favorites: [...state.favorites, { ...product }] }
    }),
}))
