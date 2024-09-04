import { create } from "zustand"
import { ProductType } from "../_types/TypeProduct"
import { createClient } from "@supabase/supabase-js"
import { getProducts } from "@/lib/data-service"

type Store = {
  products: ProductType[]
  setProducts: (newProducts: ProductType[]) => void
  fetchProducts: () => Promise<void>
}

export const useProducts = create<Store>()((set) => ({
  products: [],
  setProducts: (newProducts: ProductType[]) => set({ products: newProducts }),
  fetchProducts: async () => {
    const products = await getProducts()
    set({ products })
  },
}))
