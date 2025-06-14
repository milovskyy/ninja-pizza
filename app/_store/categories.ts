import { create } from "zustand"
import { CategoryType } from "../_types/Types"

type Store = {
  categories: CategoryType[]
  setCategories: (newCategories: CategoryType[]) => void
}

export const useCategories = create<Store>()((set) => ({
  categories: [],
  setCategories: (newCategories: CategoryType[]) =>
    set({ categories: newCategories }),
}))
