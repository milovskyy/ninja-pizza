import { create } from "zustand"
import { IngredientType } from "../_types/Types"

type Store = {
  allIngredients: IngredientType[]
  setIngredients: (newIngredients: IngredientType[]) => void
}

export const useIngredients = create<Store>()((set) => ({
  allIngredients: [],
  setIngredients: (newIngredients: IngredientType[]) =>
    set({ allIngredients: newIngredients }),
}))
