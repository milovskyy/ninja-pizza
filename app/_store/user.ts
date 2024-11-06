import { create } from "zustand"
import { UserType } from "../_types/Types"

type Store = {
  user: UserType | null | undefined
  setUser: (newUser: UserType | null | undefined) => void
}

export const useUser = create<Store>()((set) => ({
  user: {
    id: "",
    created_at: "",
    role: "",
    number: "",
    name: "",
    email: "",
    address: [],
    favorites: [],
    cart: [],
  },
  setUser: (newUser: UserType | null | undefined) => set({ user: newUser }),
}))
