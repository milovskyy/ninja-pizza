import { create } from "zustand"
import { OrderType } from "../_types/TypeProduct"

type Store = {
  allOrders: OrderType[]
  setOrders: (newOrders: OrderType[]) => void
  addOrder: (newOrder: OrderType) => void
  deleteOrder: (id: number) => void
  updateOrder: (id: number, updatedOrder: OrderType) => void
}

export const useOrders = create<Store>()((set) => ({
  allOrders: [],
  setOrders: (newOrders: OrderType[]) => set({ allOrders: newOrders }),
  addOrder: (newOrder: OrderType) =>
    set((state) => ({ allOrders: [...state.allOrders, newOrder] })),
  deleteOrder: (id: number) =>
    set((state) => ({
      allOrders: state.allOrders.filter((order) => order.id !== id),
    })),
  updateOrder: (id: number, updatedOrder: OrderType) =>
    set((state) => ({
      allOrders: state.allOrders.map((order) =>
        order.id === id ? { ...order, ...updatedOrder } : order,
      ),
    })),
}))
