import { create } from "zustand"
import { ProductType } from "../_types/TypeProduct"

type Store = {
  allProducts: ProductType[]
  setProducts: (newProducts: ProductType[]) => void
}

export const useProducts = create<Store>()((set) => ({
  allProducts: [],
  setProducts: (newProducts: ProductType[]) =>
    set({ allProducts: newProducts }),
}))
