import { create } from "zustand"
import { ProductType } from "../_types/TypeProduct"
import { supabase } from "@/lib/supabase"
import { initialSort } from "@/lib/helperFunction"

type Store = {
  products: ProductType[]
  isLoading: boolean
  error: any
  fetchProducts: () => Promise<void>
}

const useProducts = create<Store>()((set) => ({
  products: [],
  isLoading: true,
  error: null,
  fetchProducts: async () => {
    set({ isLoading: true })
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id", { ascending: true })

      if (error) {
        set({ error: error.message })
        return
      }

      const products = initialSort(data)

      set({ products: products, isLoading: false })
    } catch (error: any) {
      set({ error: error.message, isLoading: false })
    }
  },
}))

export default useProducts
