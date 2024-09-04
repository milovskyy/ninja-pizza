import { create } from "zustand"
import { CategoryType } from "../_types/TypeProduct"

type Store = {
  allCategories: CategoryType[]
  setCategories: (newCategories: CategoryType[]) => void
}

export const useCategories = create<Store>()((set) => ({
  allCategories: [],
  setCategories: (newCategories: CategoryType[]) =>
    set({ allCategories: newCategories }),
}))
