import { create } from "zustand"
import { IngredientType } from "../_types/TypeProduct"

type Store = {
  allIngredients: IngredientType[]
  setIngredients: (newIngredients: IngredientType[]) => void
}

export const useIngredients = create<Store>()((set) => ({
  allIngredients: [],
  setIngredients: (newIngredients: IngredientType[]) =>
    set({ allIngredients: newIngredients }),
}))
