import { create } from "zustand"
import { OrderType } from "../_types/TypeProduct"
// import { ProductType } from "../_types/TypeProduct"

type Store = {
  allOrders: OrderType[]
  setOrders: (newOrders: OrderType[]) => void
}

export const useOrders = create<Store>()((set) => ({
  allOrders: [],
  setOrders: (newOrders: any) => set({ allOrders: newOrders }),
}))
